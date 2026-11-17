---
title: Konstruktiv tekshiruvlar
summary: Muammolar panelidagi koʻz bilan ilgʻanadigan narsalar uchun ogohlantirishlar: kalit yeta olmaydigan bolt, soket uchun juda yaqin boltlar, burchak payvand oʻlchamlari chegaradan tashqarida, mashʼala yeta olmaydigan payvandlar va suv yigʻadigan quvurlar.
keywords: konstruktivlik, kalit, boltga yetish, yigʻish, payvand oʻlchami, burchak payvandi, minimal payvand, maksimal payvand, suv, shamollatish teshigi, drenaj teshigi, rux qoplash, boʻsh profil, muammolar
from: 72315151
---

DetailCraft hech qanday mustahkamlik tekshiruvi topmaydigan toʻrt xil muammoni izlaydi va ularni {{ui:Muammolar}} panelida roʻyxatlaydi. Bular koʻrib chiqish uchun ogohlantirish va eslatmalar, xatolar emas: model baribir quriladi.

## Kalit yeta olmaydigan bolt

Har bir bolt uchun DetailCraft bolt boshi va gaykasi ustiga soket qoʻyadi. Soket — burchaklari boʻylab gayka kengligiga teng silindr, ustiga 4 mm devor va 60 mm uzunlik. Agar bu silindr ichida toʻsin stenkasi, tokcha, plastina yoki bogʻlama turgan boʻlsa, muammoda ulanma nomi, nechta bolt, qaysi qism yoʻlda turgani va u boltdan qancha masofada ekani koʻrsatiladi.

Soket odatiy zarbli soket. Kalitga kamroq joy kerak, kattaroq asbobga koʻproq. Javob qanday oʻzgarishini koʻrish uchun bogʻlangan yordamchingizdan `constructability_check` ni boshqa `socketLength` bilan ishga tushirishni soʻrang.

## Soket uchun juda yaqin boltlar

Bitta bolt ustidagi soket keyingisining boshiga tegmasligi kerak. Ulanmaning soket kengligi va qoʻshni bolt boshi yigʻindisidan yaqinroq boltlari topilgan masofa va kerakli masofa bilan roʻyxatlanadi.

## Burchak payvand oʻlchamlari

AISC 360-16 J2.4 jadvali eng kichik burchak payvandini ingichka qismning qalinligi boʻyicha belgilaydi (6.35 mm gacha — 3 mm, 12.7 gacha — 5 mm, 19.05 gacha — 6 mm, undan yuqori — 8 mm), J2.2b esa material chetidagi eng kattasini: material 6.35 mm dan ingichka boʻlsa, materialdan katta emas, aks holda 1.6 mm kam. Bir xil qalinlikdagi bir xil oʻlchamli ulanmalar bitta muammo sifatida roʻyxatlanadi.

Ishlatiladigan qalinlik payvand nomlagan eng ingichka qism boʻladi, shuning uchun 6.35 mm stenkali toʻsin atrofidagi 8 mm payvand roʻyxatlanadi.

## Suv va shamollatish

- Vertikal turgan yoki 10° dan koʻproq ogʻma boʻsh profilning **ochiq yuqori uchi** yomgʻirni kiritadi.
- **Ikki uchi berk** boʻsh profilga shamollatish va drenaj teshigi kerak; issiq botirib rux qoplash va qizigan havaning bosimi ikkalasi ham uni talab qiladi.

## Payvandchi yeta oladimi

Burchak payvandi ikki qoʻshiladigan yuz oʻrtasida, mashʼala yarmida bajariladi. Har bir hamma tomondan burchak payvandi uchun (uchlik plastina, tayanch plastina, miter plastina) tekshiruv plastinadagi element kesim konturini oladi va har 20 mm da mashʼala yoʻlini 45° ostida tashqariga yuradi, uning uchi (boshlangʻichda 10 mm radius) ikki yuzni birinchi marta boʻshatgan joydan, yana 30 mm. Agar yoʻl toʻsinning oʻz tokchasiga yoki boshqa qismga tegsa, payvandning shu ulushi qism va masofa bilan roʻyxatlanadi. Bu raqamlar tipik, standart emas: jarayon va uchi uchun fabrikatoringizdan soʻrang. Ikki chekka boʻylab payvandlar (siljish plastinasi) joylashtirilmaydi va tekshirilmaydi.
