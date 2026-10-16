import { NextResponse } from "next/server"
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { ALLOWED_EXTENSIONS, ALLOWED_TYPES, MAX_FILE_SIZE, isSubmissionOpen } from "@/app/zayavka/config"

// Видає браузеру одноразовий токен для прямого завантаження фото у Vercel Blob
//  (в обхід ліміту 4.5 МБ на тіло запиту у serverless-функціях).
// Дозволені лише png/jpg, до MAX_FILE_SIZE, лише у папку applications/.
export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody

  try {
    const json = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!isSubmissionOpen()) throw new Error("Прийом заявок ще не відкрито")

        const lower = pathname.toLowerCase()
        if (!pathname.startsWith("applications/") || !ALLOWED_EXTENSIONS.some((ext) => lower.endsWith(ext))) {
          throw new Error("Дозволені лише файли PNG та JPG")
        }

        return {
          allowedContentTypes: ALLOWED_TYPES,
          maximumSizeInBytes: MAX_FILE_SIZE,
          addRandomSuffix: true, // посилання на роботи неможливо вгадати
        }
      },
      onUploadCompleted: async () => {},
    })
    return NextResponse.json(json)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 })
  }
}
