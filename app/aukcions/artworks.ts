export interface AuctionArtwork {
  id: string
  title: string
  size: string
  materials: string
  startPrice: number
  image: string
}

// ⚠️ ЗАПОВНІТЬ ЦЕЙ СПИСОК СВОЇМИ 20-МА РОБОТАМИ.
// Перші дві роботи вже заповнені як приклад (за вашими даними).
// Роботи 3–20 — заглушки (placeholder), замініть title/size/materials/startPrice/image
// на реальні. image — посилання на фото (можна залити на https://ibb.co, як інші
// картинки на сайті, і вставити пряме посилання).
export const artworks: AuctionArtwork[] = [
  {
    id: "1",
    title: "Коза, що веде зорі",
    size: "25×35 (приблизно)",
    materials: "Акварельний папір, акварель, гуаш, кольорові олівці",
    startPrice: 1300,
    image: "https://i.ibb.co/rfqKYntX/9.webp",
  },
  {
    id: "2",
    title: "Хранитель різдвяної зірки",
    size: "25×35 (приблизно)",
    materials: "Акварельний папір, акварель, гуаш, кольорові олівці",
    startPrice: 1300,
    image: "https://i.ibb.co/d0Z2sDy8/10.webp",
  },
  {
    id: "3",
    title: "Тур гуляє лісами Полісся поки не прийшли люди",
    size: "420х297 А3",
    materials: "Акрил, папір",
    startPrice: 1300,
    image: "https://i.ibb.co/Mkk2JZnd/75.webp",
  },
  {
    id: "4",
    title: "Сад пам'яті та див",
    size: "29х42",
    materials: "Акварельний папір, гуаш",
    startPrice: 1300,
    image: "https://i.ibb.co/vCZdD9r1/7.webp",
  },
  {
    id: "5",
    title: "Сад химерних спогадів",
    size: "40х60",
    materials: "Гуаш",
    startPrice: 1300,
    image: "https://i.ibb.co/yFNXW2Fq/6.webp",
  },
  {
    id: "6",
    title: "Вартова нічних зір",
    size: "50x70",
    materials: "Цифровий друк",
    startPrice: 1300,
    image: "https://i.ibb.co/yFtKK2bK/15.webp",
  },
  {
    id: "7",
    title: "Музики",
    size: "A3",
    materials: "Акрил",
    startPrice: 1300,
    image: "https://i.ibb.co/hFgYM1VJ/2.webp",
  },
  {
    id: "8",
    title: "Святвечір",
    size: "A3",
    materials: "Акварель",
    startPrice: 1300,
    image: "https://i.ibb.co/x8CncvTR/63.webp",
  },
  {
    id: "9",
    title: "Жар-птиці у квітах",
    size: "100x80",
    materials: "Папір, гуаш, клей",
    startPrice: 1300,
    image: "https://i.ibb.co/Q789Mf4d/27.webp",
  },
  {
    id: "10",
    title: "Зачарований ліс",
    size: "60×60",
    materials: "Колорова ліногравюра",
    startPrice: 1300,
    image: "https://i.ibb.co/4nr96yLs/59.webp",
  },
  {
    id: "11",
    title: "Райські пави",
    size: "40х60",
    materials: "Акрилові фарби",
    startPrice: 1300,
    image: "https://i.ibb.co/B28Pq2jC/60.webp",
  },
  {
    id: "12",
    title: "Тягнись до світла",
    size: "?",
    materials: "Digital art",
    startPrice: 1300,
    image: "https://i.ibb.co/NgYhkQFr/76.webp",
  },
  {
    id: "13",
    title: "Червоний кінь",
    size: "А3",
    materials: "Папір, акварель, акрил",
    startPrice: 1300,
    image: "https://i.ibb.co/4w1rtnkx/82.webp",
  },
  {
    id: "14",
    title: "Казкові птахи",
    size: "21*29,5 см (А4). Разом з оформленням - АЗ",
    materials: "Акрилові фарби, картон",
    startPrice: 1300,
    image: "https://i.ibb.co/zWY1PT6T/36.webp",
  },
  {
    id: "15",
    title: "Жоржини",
    size: "30х30",
    materials: "Полотно, олія",
    startPrice: 1300,
    image: "https://i.ibb.co/qLM4dJjm/29.webp",
  },
  {
    id: "16",
    title: "Робота 16  ",
    size: "25×35 (приблизно)",
    materials: "Акварельний папір, акварельні фарби, гуаш, кольорові олівці",
    startPrice: 1300,
    image: "https://REPLACE-WITH-IMAGE-URL/16.webp",
  },
  {
    id: "17",
    title: "Робота 17  ",
    size: "25×35 (приблизно)",
    materials: "Акварельний папір, акварельні фарби, гуаш, кольорові олівці",
    startPrice: 1300,
    image: "https://REPLACE-WITH-IMAGE-URL/17.webp",
  },
  {
    id: "18",
    title: "Робота 18  ",
    size: "25×35 (приблизно)",
    materials: "Акварельний папір, акварельні фарби, гуаш, кольорові олівці",
    startPrice: 1300,
    image: "https://REPLACE-WITH-IMAGE-URL/18.webp",
  },
  {
    id: "19",
    title: "Робота 19  ",
    size: "25×35 (приблизно)",
    materials: "Акварельний папір, акварельні фарби, гуаш, кольорові олівці",
    startPrice: 1300,
    image: "https://REPLACE-WITH-IMAGE-URL/19.webp",
  },
  {
    id: "20",
    title: "Робота 20  ",
    size: "25×35 (приблизно)",
    materials: "Акварельний папір, акварельні фарби, гуаш, кольорові олівці",
    startPrice: 1300,
    image: "https://REPLACE-WITH-IMAGE-URL/20.webp",
  },
]
