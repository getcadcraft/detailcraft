---
title: Kesish roʻyxati
summary: Tirgaklar, ustunlar, boʻgʻinlar va zinapoya tayanchlarini arra izini hisobga olib standart uzunliklarga joylashtiring va nechta sterjen sotib olish hamda chiqindini koʻring.
keywords: kesish roʻyxati, joylashtirish, standart uzunlik, sterjen, arra izi, arra, qoldiq, chiqindi, birlashtirish, sotib olish, bir nechta
from: 81d06ce5
---

{{ui:Kesish roʻyxati}} varagʻi, koʻrinish ostida, model chiziqli detallarini standart sterjenlardan qanday kesish mumkinligini hisoblaydi: har bir profil va material uchun har bir uzunlikdan nechta sterjen sotib olish kerak, har bir sterjenga nima tushishi va chiqindi.

## Standartni sozlash

Varaqning yuqorisida:

- **Standart uzunliklar (mm):** sotib olish mumkin boʻlgan uzunliklar boʻshliq bilan ajratilgan, masalan `6000 12000`, yoki 20 ft va 40 ft sterjenlar `6096 12192` kabi. Sakkiztagacha.
- **Arra izi (mm):** har bir kesish qancha joy oladi (boshida 3).
- **Uchini kesish (mm):** birinchi detaldan oldin har bir sterjen uchidan kesib tashlanadigan uzunlik (boshida 0).
- **Qoldiqni saqlash boshlanadigan (mm):** shu uzunlikdan uzun qoldiq standart zaxiraga qaytadi; qisqaroq boʻlsa chiqindi (boshida 500).

Bular [sozlamalar](topic:settings) kabi bu brauzerda saqlanadi.

## Qanday joylashtiriladi

- Har bir tirgak, ustun, tayanch boʻgʻini va zinapoya tayanchi, detal belgisi va soni boʻyicha; plastinalar listdan kesiladi va bu yerda joylashtirilmaydi.
- Har bir profil va material alohida.
- Eng uzun detallar birinchi, har biri birinchi sigʻadigan sterjenga; yangi sterjen eng uzun standart uzunlikdan boshlanadi. Keyin har bir sterjen kesmalarini qabul qiladigan eng qisqa standart uzunlik sifatida sotib olinadi.
- Har bir kesish arra izini oladi (sterjen oxiri bilan aniq tugaydigan kesishdan keyin emas); har bir sterjen uchini kesib tashlaydi.
- Har bir standart uzunlikdan uzun detal **Har qanday standartdan uzun** ostida roʻyxatlanadi, joylashtirilmaydi: uni ulang (qarang: [Ulanmalar](topic:splices)) yoki uzunroq standart uzunlik qoʻshing.

## Oʻqish

- **Xulosa:** har bir profil va material boʻyicha: detallar, sotib olinadigan sterjenlar (masalan "2 × 12000, 1 × 6000"), sotib olingan va ishlatilgan metrlar hamda chiqindi.
- **Sterjenlar va ularning kesmalari:** har bir sterjen, uning standart uzunligi, kesmalari detal belgisi va uzunligi boʻyicha, qoldiq — saqlanadigan yoki chiqindi.

{{ui:CSV ni yuklab olish}} ikkala jadvalni `<name> cut list.csv` sifatida saqlaydi.

DetailCraft plastinalarni listlarga joylashtirmaydi va profil yoki materiallarni bitta sterjenda aralashtirmaydi.
