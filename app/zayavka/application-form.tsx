"use client"

import { useRef, useState } from "react"
import { upload } from "@vercel/blob/client"
import { CheckCircle2, ImagePlus, Loader2, Lock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import {
  ALLOWED_EXTENSIONS,
  ALLOWED_TYPES,
  CATEGORIES,
  MAX_FILES,
  MAX_FILE_SIZE,
  MAX_FILE_SIZE_MB,
  MESSENGERS,
} from "./config"

function isAllowedFile(file: File) {
  const name = file.name.toLowerCase()
  return ALLOWED_TYPES.includes(file.type) && ALLOWED_EXTENSIONS.some((ext) => name.endsWith(ext))
}

const formatSize = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} МБ`

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-base font-medium text-foreground">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      {hint && <p className="text-sm text-muted-foreground leading-relaxed">{hint}</p>}
      {children}
    </div>
  )
}

export function ApplicationForm({ isOpen, opensFrom }: { isOpen: boolean; opensFrom: string | null }) {
  const [fullName, setFullName] = useState("")
  const [age, setAge] = useState("")
  const [city, setCity] = useState("")
  const [category, setCategory] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [messenger, setMessenger] = useState("")
  const [socials, setSocials] = useState("")
  const [motivation, setMotivation] = useState("")
  const [agreeContract, setAgreeContract] = useState(false)
  const [agreePersonalData, setAgreePersonalData] = useState(false)
  const [website, setWebsite] = useState("") // honeypot
  const [files, setFiles] = useState<File[]>([])

  const [status, setStatus] = useState<"idle" | "uploading" | "sending" | "success">("idle")
  const [error, setError] = useState("")
  const fileInput = useRef<HTMLInputElement>(null)

  const busy = status === "uploading" || status === "sending"

  const opensLabel = opensFrom
    ? new Date(opensFrom).toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Kyiv" })
    : ""

  function addFiles(list: FileList | null) {
    if (!list) return
    setError("")
    const next = [...files]
    for (const file of Array.from(list)) {
      if (!isAllowedFile(file)) {
        setError(`«${file.name}» — дозволені лише файли PNG та JPG`)
        continue
      }
      if (file.size > MAX_FILE_SIZE) {
        setError(`«${file.name}» завелика (${formatSize(file.size)}). Максимум — ${MAX_FILE_SIZE_MB} МБ`)
        continue
      }
      if (next.length >= MAX_FILES) {
        setError(`Можна додати не більше ${MAX_FILES} робіт`)
        break
      }
      next.push(file)
    }
    setFiles(next)
    if (fileInput.current) fileInput.current.value = ""
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (fullName.trim().split(/\s+/).length < 2) return setError("Вкажіть прізвище, ім'я та по батькові")
    const ageNum = Number(age)
    if (!Number.isInteger(ageNum) || ageNum < 16 || ageNum > 30)
      return setError("Участь беруть художники віком від 16 до 30 років")
    if (!city.trim()) return setError("Вкажіть місто проживання")
    if (!category) return setError("Оберіть, чи ви художник, чи аматор")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setError("Введіть коректний email")
    const digits = phone.replace(/\D/g, "")
    if (digits.length < 9 || digits.length > 15) return setError("Введіть коректний номер телефону")
    if (!messenger) return setError("Оберіть месенджер, яким ви користуєтесь")
    if (files.length === 0) return setError("Додайте хоча б одну роботу")
    if (!agreeContract || !agreePersonalData) return setError("Потрібно підтвердити обидві згоди")

    try {
      // 1. Фото йдуть напряму у сховище (в обхід ліміту розміру запиту)
      setStatus("uploading")
      const uploaded: { name: string; url: string }[] = []
      for (const file of files) {
        const blob = await upload(`applications/${file.name}`, file, {
          access: "public",
          handleUploadUrl: "/api/application/upload",
        })
        uploaded.push({ name: file.name, url: blob.url })
      }

      // 2. Дані заявки → Google Таблиця + лист-підтвердження
      setStatus("sending")
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          age: ageNum,
          city,
          category,
          email,
          phone,
          messenger,
          socials,
          motivation,
          files: uploaded,
          agreeContract,
          agreePersonalData,
          website,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Не вдалося надіслати заявку")

      setStatus("success")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      setStatus("idle")
      setError((err as Error).message || "Сталася помилка. Спробуйте ще раз")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-secondary/40 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Заявку прийнято!</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Дякуємо за участь у конкурсі «Поліська Казка». Ми надіслали підтвердження на {email.trim()}.
        </p>
      </div>
    )
  }

  if (!isOpen) {
    return (
      <div className="bg-secondary/40 border border-border rounded-3xl p-8 md:p-12 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
          Прийом заявок розпочнеться {opensLabel}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Вже зараз можна почати працювати над ідеями конкурсних робіт. Форма стане доступною у день старту.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-3xl p-6 md:p-10 space-y-8 shadow-sm"
      noValidate
    >
      {/* Honeypot — приховане від людей поле */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <Field label="ПІБ" required hint="Прізвище, ім'я та по батькові. Наприклад: Бондаренко Катерина Іванівна">
        <Input value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={busy} maxLength={150} autoComplete="name" />
      </Field>

      <div className="grid sm:grid-cols-[8rem_1fr] gap-6">
        <Field label="Вік" required>
          <Input
            type="number"
            inputMode="numeric"
            min={16}
            max={30}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            disabled={busy}
            placeholder="25"
          />
        </Field>
        <Field label="Місто проживання" required>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={busy}
            maxLength={150}
            placeholder="м. Вишневе, Київської обл."
            autoComplete="address-level2"
          />
        </Field>
      </div>

      <Field label="Ти художник (з професійною освітою) чи аматор?" required>
        <RadioGroup value={category} onValueChange={setCategory} disabled={busy} className="gap-3">
          {Object.entries(CATEGORIES).map(([value, label]) => (
            <label
              key={value}
              className="flex items-center gap-3 border border-border rounded-2xl px-4 py-3 cursor-pointer hover:border-primary/40 transition-colors"
            >
              <RadioGroupItem value={value} />
              <span className="text-base text-foreground">{label}</span>
            </label>
          ))}
        </RadioGroup>
      </Field>

      <Field label="Адреса електронної пошти" required hint="На неї прийде підтвердження, що заявку прийнято">
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} maxLength={254} autoComplete="email" />
      </Field>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Контактний номер телефону" required>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={busy}
            maxLength={30}
            placeholder="+380 67 123 45 67"
            autoComplete="tel"
          />
        </Field>
        <Field label="Яким месенджером зазвичай користуєшся?" required>
          <RadioGroup value={messenger} onValueChange={setMessenger} disabled={busy} className="flex flex-wrap gap-3">
            {MESSENGERS.map((m) => (
              <label
                key={m}
                className="flex items-center gap-2 border border-border rounded-full px-4 py-2 cursor-pointer hover:border-primary/40 transition-colors"
              >
                <RadioGroupItem value={m} />
                <span className="text-sm text-foreground">{m}</span>
              </label>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <Field label="Посилання на твої соцмережі" hint="Facebook, Instagram — за бажанням">
        <Input value={socials} onChange={(e) => setSocials(e.target.value)} disabled={busy} maxLength={500} />
      </Field>

      {/* Роботи */}
      <Field
        label="Додай свої роботи"
        required
        hint={`Формати: PNG або JPG, до ${MAX_FILE_SIZE_MB} МБ кожен. Можна додати до ${MAX_FILES} робіт. У назві файлу вкажи прізвище, назву твору та категорію (професіонал чи аматор), наприклад: Bondarenko_Kvity_Amator. Роботи різної техніки (живопис, графіка, малюнок, цифрові та змішані техніки) приймаються, але роботи, згенеровані ШІ, — ні.`}
      >
        <input
          ref={fileInput}
          type="file"
          accept=".png,.jpg,.jpeg,image/png,image/jpeg"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
          disabled={busy}
        />

        {files.length < MAX_FILES && (
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            disabled={busy}
            className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 rounded-2xl py-8 transition-colors disabled:opacity-50"
          >
            <ImagePlus className="w-8 h-8 text-primary" />
            <span className="text-base font-medium text-foreground">Обрати файли</span>
            <span className="text-sm text-muted-foreground">
              {files.length} з {MAX_FILES} додано
            </span>
          </button>
        )}

        {files.length > 0 && (
          <ul className="space-y-3 mt-4">
            {files.map((file, i) => (
              <li key={`${file.name}-${i}`} className="flex items-center gap-4 border border-border rounded-2xl p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={URL.createObjectURL(file)} alt="" className="w-14 h-14 rounded-xl object-cover bg-secondary shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{formatSize(file.size)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                  disabled={busy}
                  className="p-2 text-muted-foreground hover:text-red-500 transition-colors disabled:opacity-50"
                  aria-label={`Видалити ${file.name}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Field>

      <Field label="Мотиваційний лист" hint="За бажанням. Нам все цікаво 🙂">
        <Textarea
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          disabled={busy}
          maxLength={5000}
          className="min-h-32"
        />
      </Field>

      {/* Згоди */}
      <div className="space-y-4 pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox checked={agreeContract} onCheckedChange={(v) => setAgreeContract(v === true)} disabled={busy} className="mt-1" />
          <span className="text-base text-foreground leading-relaxed">
            У разі проходження до фіналу конкурсу, даю згоду на підписання договору про співпрацю з всеукраїнською
            культурною платформою «Поліська Казка» <span className="text-red-500">*</span>
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={agreePersonalData}
            onCheckedChange={(v) => setAgreePersonalData(v === true)}
            disabled={busy}
            className="mt-1"
          />
          <span className="text-base text-foreground leading-relaxed">
            Даю згоду на обробку персональних даних <span className="text-red-500">*</span>
          </span>
        </label>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <Button type="submit" disabled={busy} className="w-full h-14 rounded-full text-lg bg-primary hover:bg-primary/90">
        {busy ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            {status === "uploading" ? "Завантажуємо роботи…" : "Надсилаємо заявку…"}
          </>
        ) : (
          "Подати заявку"
        )}
      </Button>
    </form>
  )
}
