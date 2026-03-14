"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { X, Check, Loader2 } from "lucide-react"

// Временные картинки для тестирования (8 штук)
const artworks = [
  {
    id: "1",
    title: "Ба й корівка",
    artist: "Черничко Марія, 23 роки, місто Київ, Художник mashache10@gmail.com 0965826233",
    image: "/Ба й корівка Черничко Марія, 23 роки, \"Ба та Корівка! місто Київ Художник mashache10@gmail.com 0965826233.jpg",
  },
  {
    id: "2",
    title: "Без назви (Краказяблікі)",
    artist: "Трішневська Дар'я, Аматор daratrisnevska@gmail.com +380989914069 тг",
    image: "/Без назви (Краказяблікі) Трішневська Дар'я Аматор daratrisnevska@gmail.com +380989914069 тг.jpg",
  },
  {
    id: "3",
    title: "Без назви",
    artist: "Заглада Дар'я, 19 років, м. Київ, Художник ihorzahlada@gmail.com 0680342307 тг",
    image: "/Без назви Заглада Дар'я 19 років, з м. Київ, Художник ihorzahlada@gmail.com 0680342307 тг.jpg",
  },
  {
    id: "4",
    title: "Без назви",
    artist: "Заглада Дар'я, 19 років, місто Київ, Художник ihorzahlada@gmail.com 0680342307 тг",
    image: "/Без назви Заглада Дар'я, 19 років, з міста Київ, Худ ihorzahlada@gmail.com 0680342307 тг.jpg",
  },
  {
    id: "5",
    title: "Без назви",
    artist: "Запнивітренко Єлизавета, 19 років, м.Київ, Художник yelyzavetazapnyvitrenko@naoma.edu.ua 0957987514 тг",
    image: "/Без назви Запнивітренко Єлизавета 19 років, з м.Київ Художник yelyzavetazapnyvitrenko@naoma.edu.ua 0957987514 тг.jpg",
  },
  {
    id: "6",
    title: "Без назви",
    artist: "Ковальчук Єва, 16р, м.Біла Церква, Аматор iryna.shevchenko.ua@gmail.com 0977671408",
    image: "/Без назви Ковальчук Єва 16р, м.Біла Церква, Аматор iryna.shevchenko.ua@gmail.com 0977671408 V.jpg",
  },
  {
    id: "7",
    title: "Без назви",
    artist: "Кулібаба Аделіна, 19 років, м. Київ, Аматор kulibabaadelina@gmail.com 0500747652",
    image: "/Без назви Кулібаба Аделіна 19 років, з м. Київ Аматор kulibabaadelina@gmail.com 0500747652.jpg",
  },
  {
    id: "8",
    title: "Без назви",
    artist: "Мельниченко Анастасія, 16 років, м. Києва, Аматор nastymel88@gmail.com +38097 547 4312 ТГ",
    image: "/Без назви Мельниченко Анастасія,16 років,з м. Києва Аматор nastymel88@gmail.com +38097 547 4312 TГ.jpg",
  },
  {
    id: "9",
    title: "Без назви",
    artist: "Покиньборода Софія, 17 років, м. Первомайськ, Миколаївська обл., Аматор sofiapokinboroda0@gmail.com 0509715047 тг",
    image: "/Без назви Покиньборода Софія, 17 років, з м. Первомайськ, Миколаївська обл. Аматор sofiapokinboroda0@gmail.com 0509715047 тг.jpg",
  },
  {
    id: "10",
    title: "Без назви",
    artist: "Покиньборода Софія, 17 років, м. Первомайськ, Миколаївська обл., Аматор sofiapokinboroda0@gmail.com 0509715047 тг",
    image: "/Без назви Покиньборода Софія, 17 років, з м. Первомайськ, Миколаївська обл. Аматор sofiapokinboroda0@gmail.com 0509715047 тг.jpg",
  },
  {
    id: "11",
    title: "Без назви",
    artist: "Трофімчук Тетяна, Художник Trkl.tatyana@gmail.con +380958410411 тг",
    image: "/Без назви Трофімчук Тетяна Художник Trkl.tatyana@gmail.con + 380958410411 тг.jpg",
  },
  {
    id: "12",
    title: "Без назви",
    artist: "Трофімчук Тетяна, Художник Trkl.tatyana@gmail.con +380958410411",
    image: "/Без назви Трофімчук Тетяна Художник Trkl.tatyana@gmail.con + 380958410411.jpg",
  },
  {
    id: "13",
    title: "Берегиня",
    artist: "Коренська Ангеліна, 16 років, м.Тростянець, Аматор milakorenskaia1989@gmail.com 0953719846, 0996159458",
    image: "/Берегиня Коренська Ангеліна 16 років, з м.Тростянець, Аматор milakorenskaia1989@gmail.com 0953719846, 0996159458.jpg",
  },
  {
    id: "14",
    title: "Біжить заєць",
    artist: "Оцвей Єлізавєта, 19 років, м. Черкаси, Художник yeotsvej@gmail.com +380984320657",
    image: "/Біжить заєць Оцвей Єлізавєта , 19 років, з м. Черкаси, Художник yeotsvej@gmail.com +380984320657,.jpg",
  },
  {
    id: "15",
    title: "Вартова нічних зір",
    artist: "Литвин Марія, 30 років, місто Київ, Художник marialitvin@hotmail.com +380673754991тг",
    image: "/Вартова нічних зір Литвин Марія, 30 років, місто Київ Художник marialitvin@hotmail.com +380673754991тг.jpg",
  },
  {
    id: "16",
    title: "Без назви",
    artist: "Власенко Катерина, 19 років, місто Київ, Художник ksaaath03@gmail.com +380674460238",
    image: "/Власенко Катерина, 19 років , місто Київ Художник ksaaath03@gmail.com +380674460238.jpg",
  },
  {
    id: "17",
    title: "Гірський козлик",
    artist: "Волошенко Олена, 27 років, м. Київ, Художник lenaavoloshenko@gmail.com +380939434488",
    image: "/Гірський козлик Волошенко Олена, 27 років, з м. Київ Художник lenaavoloshenko@gmail.com +380939434488.jpg",
  },
  {
    id: "18",
    title: "Глечик",
    artist: "Ємець Ігор, 24 роки, смт. Високий, Харківська обл., Художник yemec.igor@gmail.com 0676862521",
    image: "/Глечик Ємець Ігор, 24 роки, смт. Високий, Харківська обл. Худ. yemec.igor@gmail.com 0676862521.jpg",
  },
  {
    id: "19",
    title: "Голуб Миру",
    artist: "Гончаренко Поліна, 20 років, м. Біла Церква, Художник pluxuryestate225@gmail.com 0686243454",
    image: "/Голуб Миру Гончаренко Поліна, 20 років, м. Біла Церква, Художник pluxuryestate225@gmail.com 0686243454.jpg",
  },
  {
    id: "20",
    title: "Гоноровий",
    artist: "Ворохта Ольга, 27 р, з м.Рахів, Закарпатська обл., проживаю у Львові, Художник voroxtaolga@gmail.com 0689160016 (вайбер), 0938602844 тг",
    image: "/Гоноровий Ворохта Ольга 27 р , з м.Рахів, Закарпатська обл., проживаю у Львові Художник voroxtaolga@gmail.com 0689160016 (вайбер), 0938602844 тг.jpg",
  },
  {
    id: "21",
    title: "Дикий сіроманець",
    artist: "Вовк Данільченко Дарина, 16р, м. Київ, Аматор lefko.td@gmail.com 0632724860",
    image: "/Дикий сіроманець Вовк Данільченко Дарина, 16р, м. Київ Аматор lefko.td@gmail.com 0632724860.jpg",
  },
  {
    id: "22",
    title: "Дівчина з коником",
    artist: "Олексієнко Нікіта, 17 років, м.Кременчук, Художник alekseenkon237@gmail.com 0965909404",
    image: "/Дівчина з коником Олексієнко Нікіта 17 років, з м.Кременчук, Художник alekseenkon237@gmail.com 0965909404.jpg",
  },
  {
    id: "23",
    title: "Довіра",
    artist: "Кулаковська Діана, 17 років, смт. Пісочин, Харківська обл., Художник Dianakulakovska1@gmail.com 0977172310 @goroshac",
    image: "/Довіра Без назви Кулаковська Діана , 17 років, смт. Пісочин, Харкіська обл. Художник Dianakulakovska1@gmail.com 0977172310 @goroshac.jpg",
  },
  {
    id: "24",
    title: "Дракони",
    artist: "Давиденко Дарина, 20 років, м. Біла Церква, Аматор vikkusja2011@gmail.com 0673989490",
    image: "/Дракони Давиденко Дарина, 20 років, м. Біла Церква Аматор vikkusja2011@gmail.com 0673989490.jpg",
  },
  {
    id: "25",
    title: "Друзі",
    artist: "Іроденко Вікторія, 17 років, м. Надвірна, Івано-Франківська обл., Художник irodenkoviktoria5@gmail.com +380 68 507 67 09",
    image: "/Друзі Іроденко Вікторія, 17 років, м. Надвірна, Івано-Франківська обл. Художник irodenkoviktoria5@gmail.com +380 68 507 67 09.jpg",
  },
  {
    id: "26",
    title: "Едем, поліщучка, чудасія",
    artist: "Трубнікова Олеся, 24 роки, м. Київ, Художник olesiavoloshka17@gmail.com 0978645357 тг",
    image: "/Едем, поліщучка, чудасія Трубнікова Олеся, 24 роки, м. Київ Художник \" olesiavoloshka17@gmail.com\" 0978645357 тг.jpg",
  },
  {
    id: "27",
    title: "Жар птиця у квітах",
    artist: "Нестеренко Андрій, 29 років, м. Південне, Харківської обл., Художник nesterenko.andrey2018@gmail.com 380989583941 тг",
    image: "/Жар птиця у квітах Нестеренко Андрій 29 років, з м. Південне, Харківської обл. Худ. nesterenko.andrey2018@gmail.com 380989583941 тг.jpg",
  },
  {
    id: "28",
    title: "Живе життя і сили ще таїть",
    artist: "Свирида Софія, 25 років, м. Здолбунів, Рівненська обл., Художник sofia.korniychuk@ngocsi.com 380972536849 тг",
    image: "/Живе життя і сили ще таїть Свирида Софія, 25 років, з м. Здолбунів, Рівненська обл. Художник sofia.korniychuk@ngocsi.com 380972536849 тг.jpg",
  },
  {
    id: "29",
    title: "Жоржини",
    artist: "Калатур Кароліна, 18 років, с. Стасі, Полтавської обл., Художник kkaltur9@gmail.com 0501498849",
    image: "/Жоржини Калатур Кароліна, 18 років, з с. Стасі, Полтавської обл. Художник kkaltur9@gmail.com 0501498849.jpg",
  },
  {
    id: "30",
    title: "З вірою у перемогу",
    artist: "Кулик Софія, 16 років, м. Київ, Аматор bdut.art.decor@gmail.com 0933767749",
    image: "/З вірою у перемогу Кулик Софія, 16 років, м. Київ Аматор bdut.art.decor@gmail.com 0933767749.jpg",
  },
  {
    id: "31",
    title: "Звір наїв",
    artist: "Калініченко Катерина, Художник katty.kalinichenko@gmail.com 0979051995 тг",
    image: "/Звір наїв Калініченко Катерина Художник katty.kalinichenko@gmail.com 0979051995 тг.jpg",
  },
  {
    id: "32",
    title: "Золота яблуня",
    artist: "Кустікова Тетяна, 28 років, м.Одеса, Аматор kustikovat@gmail.com Telegram, 380997195221",
    image: "/Золота яблуня Кустікова Тетяна , 28 років, м.Одеса Аматор kustikovat@gmail.com Telegram, 380997195221.jpg",
  },
  {
    id: "33",
    title: "Золотавий кінь",
    artist: "Петренко Карина, 18 років, м. Одеса, Аматор petrenkokarina63@gmail.com 0688720383 тг",
    image: "/Золотавий кінь Петренко Карина 18 років, з м. Одеса Аматор petrenkokarina63@gmail.com 0688720383 тг.jpg",
  },
  {
    id: "34",
    title: "Івана Купала",
    artist: "Драбинка Вікторія, 20 років, м. Біла Церква, Художник victoriadrabinka@gmail.com 0676684089 тг",
    image: "/Івана Купала Драбинка Вікторія 20 років, з м. Біла Церква Худ. victoriadrabinka@gmail.com 0676684089 тг.jpg",
  },
  {
    id: "35",
    title: "Казкові вогняні коники",
    artist: "Костікова Аліна, 26 років, місто Київ, Художник alinakostiko@gmail.com 093 300 60 63 W",
    image: "/Казкові вогняні коники Костікова Аліна, 26 років, місто Київ Художник alinakostiko@gmail.com 093 300 60 63 W.jpg",
  },
  {
    id: "36",
    title: "Казкові квіти",
    artist: "Падалка Юлія, 20 років, м. Авдіївка (Донецька обл.) - м. Вишгород (Київська обл.), Художник yuliia.padalka@naoma.edu.ua 050 614 90 60 тг",
    image: "/Казкові квіти Падалка Юлія, 20 років, м. Авдіївка (Донецька обл.) - м. Вишгород (Київська обл.) Художник yuliia.padalka@naoma.edu.ua 050 614 90 60 тг.jpg",
  },
  {
    id: "37",
    title: "Калейдоскоп Барв",
    artist: "Єськова Маргарита, 20 років, м. Бровари, Аматор yeskova25@gmail.com +380638377986 тг",
    image: "/Калейдоскоп Барв Єськова Маргарита, 20 років, з м. Бровари, Аматор yeskova25@gmail.com +380638377986 тг.jpg",
  },
  {
    id: "38",
    title: "Квітковий звірокруг",
    artist: "Ребрій Даріна, 16 років, с. Стоянка, Київська обл., Аматор darinareb1@gmail.com +380979188120; тг",
    image: "/Квітковий звірокруг Ребрій Даріна 16 років, з с. Стоянка, Київська обл. Аматор darinareb1@gmail.com +380979188120; тг.jpg",
  },
  {
    id: "39",
    title: "Козак Мамай",
    artist: "Биканова Христина, 30 років, м. Івано-Франківська, Художник khrystynabykanova16@gmail.com 0993771667",
    image: "/Козак Мамай Биканова Христина 30 років, з м. Івано-Франківська Художник khrystynabykanova16@gmail.com 0993771667.jpg",
  },
  {
    id: "40",
    title: "Кольорові мрії",
    artist: "Троян Юлія, 21 рік, селище Іванків, Київської області, Аматор uliatroan21@gmail.com +380967957596",
    image: "/Кольорові мрії Троян Юлія , 21 рік, з селища Іванків, Київської області Аматор uliatroan21@gmail.com +380967957596.jpg",
  },
  {
    id: "41",
    title: "Крутивус",
    artist: "Носаль Катерина, 17 років, м. Запоріжжя, Художник katyanosal08@gmail.com 380689280562",
    image: "/Крутивус Носаль Катерина, 17 років, з м. Запоріжжя. Худ katyanosal08@gmail.com 380689280562.jpg",
  },
  {
    id: "42",
    title: "Курйози",
    artist: "Григораш Катерина, 27 років, м. Київ, Художник hryhorash.kateryna@gmail.com +380636030503, тг",
    image: "/Курйози Григораш Катерина, 27 років, м. Київ Художник hryhorash.kateryna@gmail.com +380636030503, тг.jpg",
  },
  {
    id: "43",
    title: "Лисиця і лелека",
    artist: "Шульга Тетяна, 19 років, м. Бориспіль, Аматор tanya.shulga06@gmail.com 0637598424",
    image: "/Лисиця і лелека Шульга Тетяна, 19 років, з м. Бориспіль, Аматор tanya.shulga06@gmail.com 0637598424.jpg",
  },
  {
    id: "44",
    title: "Мавка",
    artist: "Левчин Софія, 17 років, м. Ханой, Аматор levchyns@gmail.com +380663291153 тг",
    image: "/Мавка Левчин Софія, 17 років, з м. Ханой Аматор levchyns@gmail.com +380663291153 тг.jpg",
  },
  {
    id: "45",
    title: "Магічний твіст",
    artist: "Мілінчук Софія, 18 років, м. Київ, Аматор msofi2852@gmail.com +380970627375",
    image: "/Магічний твіст Мілінчук Софія 18 років, з м. Київ Аматор msofi2852@gmail.com +380970627375..jpg",
  },
  {
    id: "46",
    title: "Маланка",
    artist: "Костоглодова Карина, 21 рік, м. Харків, Художник ka.kos_01@ukr.net +380 (68) 504 89 28",
    image: "/Маланка Костоглодова Карина 21 рік, з м. Харків, Художник ka.kos_01@ukr.net +380 (68) 504 89 28.jpg",
  },
  {
    id: "47",
    title: "Малиновий індик футболіст",
    artist: "Шлапчинська Марія, 24 роки, м. Радивилів, Рівненської обл., Художник mariashlapchynska@gmail.com 0966717178 тг",
    image: "/Малиновий індик футболіст Шлапчинська Марія, 24 роки, з м. Радивилів, Рівненської обл. Художник mariashlapchynska@gmail.com 0966717178 тг.jpg",
  },
  {
    id: "48",
    title: "Маріїні мрії",
    artist: "Кутова Анна, 16 років, м.Сквира, Аматор anna.kutova1109@gmail.com 0508785567",
    image: "/Маріїні мрії Кутова Анна 16 років, з м.Сквира, Аматор anna.kutova1109@gmail.com 0508785567.jpg",
  },
  {
    id: "49",
    title: "Мешканець казкового лісу",
    artist: "Штепа Лілія, 17 років, м.Дніпро, Аматор liliastepa5@gmail.com 0665655348, telegram: @miss_cunning",
    image: "/Мешканець казкового лісу Штепа Лілія, 17 років, м.Дніпро Аматор liliastepa5@gmail.com 0665655348, telegram: @miss_cunning.jpg",
  },
  {
    id: "50",
    title: "Молодик",
    artist: "Лісова Марія, 17 років, с. Білогородка, Київської обл., Аматор lisova.mariia1@gmail.com +380 95 647 2816 Телеграм @lisova.mari",
    image: "/Молодик Лісова Марія 17 років, з с. Білогородка, Київської обл. Аматор lisova.mariia1@gmail.com +380 95 647 2816 Телеграм @lisova.mari.jpg",
  },
  {
    id: "51",
    title: "Не роби з мухи слона",
    artist: "Павлюк Юлія, 26 років, м. Тернопіль, Художник yulia10022000yulia@gmail.com 0966689110 тг",
    image: "/Не роби з мухи слона Павлюк Юлія, 26 років, з м. Тернопіль Художник yulia10022000yulia@gmail.com 0966689110 тг.jpg",
  },
  {
    id: "52",
    title: "Образ",
    artist: "Суббота Катерина, 18 років, с. Новослобідка, Запорізький район, Аматор subbota.k@zpk.zp.ua 0637674379",
    image: "/Образ Суббота Катерина , 18 років, с. Новослобідка, Запорізький район Аматор subbota.k@zpk.zp.ua 0637674379.jpg",
  },
  {
    id: "53",
    title: "Ой на соняху дві пташечки щебечуть",
    artist: "Тосіч Діана, 27 років, м. Київ, Художник dianatosich@naoma.edu.ua 0930640454, telegram - @Tosich23",
    image: "/Ой на соняху дві пташечки щебечуть Тосіч Діана, 27, м. Київ Художник dianatosich@naoma.edu.ua 0930640454, telegram - @Tosich23.jpg",
  },
  {
    id: "54",
    title: "Остання чверть",
    artist: "Лісова Марія, 17 років, с. Білогородка, Київської обл., Аматор lisova.mariia1@gmail.com +380 95 647 2816 Телеграм @lisova.mari",
    image: "/Остання чверть Лісова Марія 17 років, з с. Білогородка, Київської обл. Аматор lisova.mariia1@gmail.com +380 95 647 2816 Телеграм @lisova.mari.jpg",
  },
  {
    id: "55",
    title: "Павутина почута",
    artist: "Мазур Дана, 21 рік, місто Київ, Художник danamazur2004@gmail.com 380664977097",
    image: "/Павутина почута Мазур Дана, 21 рік, місто Київ Художник danamazur2004@gmail.com 380664977097.jpg",
  },
  {
    id: "56",
    title: "Півні",
    artist: "Сагайдачна Софія, 23 роки, с. Любівка, Богодухівського району, Харківської обл., Художник sagajdacnaasofia@gmail.com +380 979 78 2343",
    image: "/Півні Сагайдачна Софія 23 роки, з с. Любівка, Богодухівського району, Харківської обл. Художник sagajdacnaasofia@gmail.com +380 979 78 2343.jpg",
  },
  {
    id: "57",
    title: "Пісня для коханої",
    artist: "Швайко Катерина, 23 роки, м.Чернівці, Аматор skokaterina90@gmail.com +380667459700",
    image: "/Пісня для коханої Швайко Катерина, 23 роки, м.Чернівці Аматор skokaterina90@gmail.com +380667459700.jpg",
  },
  {
    id: "58",
    title: "Планета казкових коней",
    artist: "Мартинюк Надія, 17 років, м. Житомир, Аматор sartatla@ukr.net (097) 820 86 75",
    image: "/Планета казкових коней Мартинюк Надія 17 років, м. Житомир Аматор sartatla@ukr.net (097) 820 86 75.jpg",
  },
  {
    id: "59",
    title: "Про гору що верхом сягала неба",
    artist: "Різак Марія-Анастасія, 22 роки, м. Мукачево, Закарпатська обл., Художник mariua.rizak@gmail.com +380995537113",
    image: "/Про гору що верхом сягала неба Різак Марія-Анастасія, 22 роки, з м. Мукачево, Закарпатська обл. Художник mariua.rizak@gmail.com +380995537113.jpg",
  },
  {
    id: "60",
    title: "Райські пави",
    artist: "Науменко Софія, 18 років, м. Кривий ріг, Художник sonykwasoly@gmail.com 0986516459",
    image: "/Райські пави Науменко Софія, 18 років, з м. Кривий ріг. Худ. sonykwasoly@gmail.com 0986516459.jpg",
  },
  {
    id: "61",
    title: "Рибки",
    artist: "Рибак Максим, 16 років, м.Переяслав, Аматор majorkacitydrive@gmail.com 0937542293 (Viber)",
    image: "/Рибки Рибак Максим, 16 років, з м.Переяслав, Аматор majorkacitydrive@gmail.com 0937542293 (Viber).jpg",
  },
  {
    id: "62",
    title: "Рогатий шепіт лісу",
    artist: "Нестерук Аріанна, 18 років м.Львів, Художник nesterukarianna@gmail.com 0679733565 тг",
    image: "/Рогатий шепіт лісу Нестерук Аріанна, 18 років м.Львів Художник nesterukarianna@gmail.com 0679733565 тг.jpg",
  },
  {
    id: "63",
    title: "Святвечір",
    artist: "Боровик Софія, 18 років, м. Київ, Художник soniaborowik123@gmail.com 0997757153 тг",
    image: "/Святвечір Боровик Софія 18 років, з м. Київ Худ soniaborowik123@gmail.com 0997757153 тг.jpg",
  },
  {
    id: "64",
    title: "Святий Юрій",
    artist: "Месюр Андрій, Художник andrii.mesiur@naoma.edu.ua +380963345070",
    image: "/Святий Юрій Месюр Андрій Художник andrii.mesiur@naoma.edu.ua +380963345070.jpg",
  },
  {
    id: "65",
    title: "Сила українського духу",
    artist: "Холод Іванна, 20 років, м. Рівне, Художник ivankaxolod@gmail.com 0987347472",
    image: "/Сила українського духу Холод Іванна, 20 років, з м. Рівне Худ ivankaxolod@gmail.com 0987347472.jpg",
  },
  {
    id: "66",
    title: "Синій птах",
    artist: "Касьян Наталія, 27 років, м. Тернопіль, Художник 99racoon99@gmail.com 0985611699, Telegram - @Na_Kasyan",
    image: "/Синій птах Касьян Наталія, 27 років, з м. Тернопіль. Художник 99racoon99@gmail.com 0985611699, Telegram - @Na_Kasyan.jpg",
  },
  {
    id: "67",
    title: "Сонячний левик",
    artist: "Петрик Ірина, 25 років, м. Київ, Художник petryk.iv.iryna@gmail.com 099 224 77 12",
    image: "/Сонячний левик Петрик Ірина 25 років, м. Київ Худ. petryk.iv.iryna@gmail.com 099 224 77 12.jpg",
  },
  {
    id: "68",
    title: "Сонячний Сон",
    artist: "Мельничук Костянтин, 16 років, м.Київ, Аматор melnechyk19199@gmail.com +380965325082 тг",
    image: "/Сонячний Сон Мельничук Костянтин, 16 років, з м.Київ Аматор melnechyk19199@gmail.com +380965325082 тг.jpg",
  },
  {
    id: "69",
    title: "Сотворення світу",
    artist: "Степась Ксенія, 29 років, м.Київ, Художник kseniiastepas@gmail.com +380673364991",
    image: "/Сотворення світу Степась Ксенія 29 років, м.Київ Художник kseniiastepas@gmail.com +380673364991.jpg",
  },
  {
    id: "70",
    title: "Таємниці купальської ночі",
    artist: "Петренко Анна, 16 років, м.Київ, Аматор petrenkoannans3@gmail.com +380960151232,тг",
    image: "/Таємниці купальської ночі Петренко Анна 16 років, з м.Київ. Аматор petrenkoannans3@gmail.com +380960151232,тг.jpg",
  },
  {
    id: "71",
    title: "Танцювала Риба з Раком",
    artist: "Близнюк Альона, 20 років, м. Бровари, Художник aluona11081983@gmail.com 0681179198",
    image: "/Танцювала Риба з Раком Близнюк Альона , 20 років, з м. Бровари, Худ. aluona11081983@gmail.com 0681179198,.jpg",
  },
  {
    id: "72",
    title: "Творці",
    artist: "Ваврик Тетяна, 29 років, м. Київ, Художник svitankoova@gmail.com +380993000293",
    image: "/Творці Ваврик Тетяна, 29 років, м. Київ Художник svitankoova@gmail.com +380993000293.jpg",
  },
  {
    id: "73",
    title: "Ти виростеш ще більшою квіткою",
    artist: "Волошенко Олена, 27 років, м. Київ, Художник lenaavoloshenko@gmail.com +380939434488",
    image: "/Ти виростеш ще більшою квіткою Волошенко Олена, 27 років, з м. Київ Художник lenaavoloshenko@gmail.com +380939434488.jpg",
  },
  {
    id: "74",
    title: "Триптих «Полин»",
    artist: "Ваганова Надія, 26 років, село Щасливе, К/обл, Художник waganowa.n@icloud.com 0632243259 @waganowa",
    image: "/Триптих «Полин» Ваганова Надія 26 років, село Щасливе, К/обл Художник waganowa.n@icloud.com 0632243259 @waganowa.jpg",
  },
  {
    id: "75",
    title: "Тур",
    artist: "Журавінська Софія, 26 років, м. Львів, Аматор Sofiazhuravinska@gmail.com 380686916575 тг",
    image: "/Тур Журавінська Софія , 26 років, м. Львів, Аматор Sofiazhuravinska@gmail.com 380686916575 тг.jpg",
  },
  {
    id: "76",
    title: "Тягнись до світла",
    artist: "Фалюш Вікторія, Художник viktoriafaliush05@gmail.com 380635651335",
    image: "/Тягнись до світла Фалюш Вікторія Худ viktoriafaliush05@gmail.com 380635651335.jpg",
  },
  {
    id: "77",
    title: "Фантастичне спадщина Марії Приймаченко",
    artist: "Станищук Софія, 19 років, м.Сквира, Аматор stanushchuksofiya@gmail.com 0971833367",
    image: "/Фантастичне спадщина Марії Приймаченко Станищук Софія, 19 років, з м.Сквира, Аматор stanushchuksofiya@gmail.com 0971833367.jpg",
  },
  {
    id: "78",
    title: "Хранитель поліського мороку",
    artist: "Дмитренко Валерія, 22 роки, смт Донець, Харківська область, Художник dmitrenkovaleria010@gmail.com +380508441606, тг",
    image: "/Хранитель поліського мороку Дмитренко Валерія, 22 роки, смт Донець, Харківська область Художник dmitrenkovaleria010@gmail.com +380508441606, тг.jpg",
  },
  {
    id: "79",
    title: "Хранителька рідної хати",
    artist: "Бабаніязова Лейлі, 16 років, м. Зіньків, Полтавської обл., Аматор leilababaniazova27@gmail.com +380954531200",
    image: "/Хранителька рідної хати Бабаніязова Лейлі, 16 років, з м. Зіньків, Полтавськоі обл. Аматор leilababaniazova27@gmail.com +380954531200.jpg",
  },
  {
    id: "80",
    title: "Цап та баран",
    artist: "Онопа Тетяна, 24 роки, м. Кременчук, Полтавської обл., Аматор onopa.tetyana@gmail.com 0986724982 тг",
    image: "/Цап та баран Онопа Тетяна 24 роки, м. Кременчук, Полтавської обл. Аматор onopa.tetyana@gmail.com 0986724982 тг.jpg",
  },
  {
    id: "81",
    title: "Чугайстер",
    artist: "Мегеря Ксенія, 23 роки, м. Кривий Ріг, Художник kmegerya@gmail.com 0963009521",
    image: "/Чугайстер Мегеря Ксенія 23роки , м. Кривий Ріг Художник kmegerya@gmail.com 0963009521.jpg",
  },
  {
    id: "82",
    title: "Червіній кінь",
    artist: "Левченко Євгенія, 26 років, м. Харків, Псевдонім Яні Егве (YaniEgve), Художник yani.egve@gmail.com +380675781217",
    image: "/Червіній кінь Левченко Євгенія 26 років, м. Харків. Псевдонім Яні Егве(YaniEgve) Худ. yani.egve@gmail.com +380675781217.jpg",
  },
  {
    id: "83",
    title: "Чортове озеро",
    artist: "Куліченко Софія, 17 років, м. Богуслав, Київська обл., Аматор kulichenko.sofiya@gmail.com +380967357956",
    image: "/Чортове озеро Куліченко Софія 17 років, з м. Богуслав, Київська обл. Аматор kulichenko.sofiya@gmail.com +380967357956.jpg",
  },
];

export default function VotingPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleVote = async () => {
    if (!selectedArtwork || !email) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          artworkId: selectedArtwork.id,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Помилка при голосуванні")
        return
      }

      setSubmitStatus("success")
      setTimeout(() => {
        setSelectedArtwork(null)
        setEmail("")
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Помилка з'єднання")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Народне голосування
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Допоможіть обрати переможців першого національного конкурсу народного мистецтва для молодих художників.
            </p>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Натисніть на картину, щоб проголосувати за улюблений твір
            </p>
          </div>
        </section>

        {/* Artworks Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
              {artworks.map((artwork) => (
                <button
                  key={artwork.id}
                  onClick={() => setSelectedArtwork(artwork)}
                  className="group relative aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-left">
                      <p className="text-xs font-medium truncate">{artwork.title}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Vote Dialog */}
      <Dialog open={!!selectedArtwork} onOpenChange={(open) => !open && setSelectedArtwork(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Голосування</DialogTitle>
            <DialogDescription>
              Введіть ваш email, щоб проголосувати за цю роботу
            </DialogDescription>
          </DialogHeader>

          {selectedArtwork && (
            <div className="space-y-4">
              <div className="aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-lg">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="font-medium">{selectedArtwork.title}</h3>
                <p className="text-sm text-muted">{selectedArtwork.artist}</p>
              </div>

              {submitStatus === "success" ? (
                <div className="flex items-center justify-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg">
                  <Check className="w-5 h-5" />
                  <span>Дякуємо за ваш голос!</span>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                    {submitStatus === "error" && (
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                  </div>

                  <Button
                    onClick={handleVote}
                    disabled={!email || isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Обробка...
                      </>
                    ) : (
                      "Проголосувати"
                    )}
                  </Button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
