---
title: Ishlab chiqarish dasturi uchun KISS faylini eksport qilish
summary: Materiallar roʻyxatini ishlab chiqarishni boshqarish (MIS) dasturiga KISS 1.1 fayli sifatida yuboring: yigʻmalar, qismlar, fazalar ketma-ketlik sifatida, teshiklar, kesimlar va payvandlar.
keywords: kiss, kss, mis, ishlab chiqarishni boshqarish, ishlab chiqarish nazorati, smeta, materiallar roʻyxati, bom, eksport, fabtrol, ketma-ketlik
from: 30cf3951
---

{{ui:Chiqish}} guruhida {{ui:Yana}} ni oching va {{ui:Ishlab chiqarish dasturi uchun KISS fayli}} ni tanlang. DetailCraft `<name>.kss` faylini yuklab oladi: bu KISS fayli ("Keep It Simple, Steel", 1.1 versiya), koʻpchilik ishlab chiqarishni boshqarish dasturlari materiallar roʻyxatini import qiladigan oddiy matnli format.

## Ichida nima bor

- Sarlavha: ish raqami (model nomining birinchi sakkiz harf va raqami), model nomi, sana va vaqt, hamda oʻlchamlar metrikmi yoʻqmi.
- Har bir yigʻma belgisi uchun: asosiy qismi (miqdor = yigʻmadan nechta), yigʻma chizmasi qatori (chizma raqami, masalan A-B1), yigʻma qatori (nomi, turi, ogʻirligi, umumiy uzunligi, chuqurligi va kengligi), yigʻma tushgan har bir [faza](topic:phases) uchun ketma-ketlik qatori, hamda mehnat qatorlari: teshiklar (necha ta, diametri, qalinligi boʻylab oʻtishi), kesimlar va payvandlar.
- Soʻng unga biriktirilgan har bir qism, standart talab qilganidek, **umumiy** miqdor bilan (yigʻma boʻyicha × yigʻmalar soni).
- Boʻsh boltlar va langar sterjenlari BOLTS chizmasida, FIELD yigʻmasida.
- Har bir qator turini (W, C, L, HSS, PL yoki maxsus profil uchun MI), oʻlchamini, sinfini, millimetrdagi kesish uzunligini, qism nomini va ogʻirligini beradi.

## Imperial yoki metrik

[DetailCraft sozlamalari](topic:settings) da **KISS fayl oʻlchamlari** quyidagilardan birini tanlaydi:

- **Avtomatik** (boshlangʻich): har bir element AISC profili boʻlsa Imperial, aks holda metrik.
- **Imperial**: profillar AISC belgilanishi boʻyicha (W 16X26, HSS 4X4X.250); DetailCraft millimetrda saqlaydigan plastinalar va boltlar eng yaqin 1/16 dyuymgacha; ogʻirliklar funtlarda.
- **Metrik**: Yevropa profillari nomi boʻyicha (IPE300), plastinalar qalinlik X kenglik millimetrda; ogʻirliklar kilogrammda.

Uzunliklar sozlamadan qatʼi nazar doim millimetrda, ikki kasr xonasi bilan: KISS standarti shuni talab qiladi va qabul qiluvchi dastur ularni oʻzi aylantiradi.

:::note
Sinflar standartning sakkiz belgisiga qisqartiriladi: A572 Gr 50 A572-50 boʻladi. Nomlardagi vergullar boʻshliqqa aylanadi (formatda qoʻshtirnoq yoʻq). Ishonishdan oldin bitta importni dasturingizda tekshiring: DetailCraft ning KISS fayllari hozircha bu yerda standart boʻyicha tekshiriladi, ishlab chiqarish dasturida emas.
:::
