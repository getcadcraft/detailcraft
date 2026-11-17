---
title: Plastinalarni joylashtirish va maxsus profillar qoʻshish
summary: Oddiy plastinalarni qalinlik va kenglik boʻyicha joylashtiring, oʻzingizning I, kanal, burchak, truba yoki yassi polosa kesimlaringizni aniqlang.
keywords: plastina, yassi, maxsus profil, foydalanuvchi profili, parametrik, kesim, shakl, koʻndalang kesim, pl
from: c24c3b51
---

## Plastina joylashtirish

Plastina toʻsin kabi joylashtiriladi: u ikki kesishma orasida boradi, kengligi koʻndalang, qalinligi esa yuqoriga qaragan holda.

1. {{ui:Joylashtirish}} guruhida {{ui:Plastina}} ni tanlang yoki {{key:P}} ni bosing.
2. {{ui:Xususiyatlar}} panelida {{ui:Qalinlik (mm)}} va {{ui:Kenglik (mm)}} ni oʻrnating. Standart qiymat A36 da 20 x 200.
3. Kerak boʻlsa {{ui:Material}} va {{ui:Aylanish (°)}} ni oʻrnating. 90 aylanish plastinani chetiga tik qoʻyadi.
4. Ikki kesishmani bosing yoki {{ui:Toʻr boʻyicha qoʻshish}} shaklidan foydalaning.

Plastinaning profil nomi `PL<thickness>x<width>` shaklida yoziladi, masalan PL20x200. Uning uzunligi ikki nuqta orasidagi masofa.

Joylashtirilgan plastinaning oʻlchamini oʻzgartirish uchun uni tanlang va {{ui:Qalinlik (mm)}} yoki {{ui:Kenglik (mm)}} ni oʻzgartiring.

Siz joylashtirgan plastinalar oʻz alohida qismlaridir (belgisi p, yigʻma P). Ulanishlar yasagan uchki va tayanch plastinalar ham plastinalardir, lekin ularni ulanishi orqali oʻzgartirasiz; qarang: [Uchki plastinalar](topic:end-plates).

## Maxsus profil qoʻshish

Kerakli kesim katalogda boʻlmasa, uni oʻlchamlari boʻyicha yasang. Maxsus profil modelga tegishli va u bilan birga saqlanadi. Uni har bir yangi modelda ishlatish uchun uni quyidagi "Yangi modellar uchun profil saqlash" boʻlimida tushuntirilgandek {{ui:Mening profillarim}} da saqlang.

1. Chapdagi {{ui:Model}} panelida {{ui:Maxsus profil}} ni oching.
2. {{ui:Nom}} kiriting, masalan `W8x18-custom` yoki `RHS 120x80x5`. U katalog nomi boʻla olmaydi va plastina nomiga oʻxshab qolmasligi kerak.
3. {{ui:Shakl}} ni tanlang: {{ui:I-shakl}}, {{ui:Kanal}}, {{ui:Teng qirrali burchak}}, {{ui:Toʻrtburchak truba}}, {{ui:Dumaloq truba}} yoki {{ui:Yassi polosa}}.
4. Paydo boʻladigan oʻlchamlarni toʻldiring, hammasi millimetrda:

| Shakl | Oʻlchamlar |
|---|---|
| I-shakl | Chuqurlik d, qanot kengligi bf, tanacha tw, qanot tf, tutashuv radiusi r (0 boʻlishi mumkin) |
| Kanal | Chuqurlik d, qanot kengligi bf, tanacha tw, qanot tf (toʻgʻri burchaklar) |
| Teng qirrali burchak | Kenglik b (har bir polka), qalinlik t |
| Toʻrtburchak truba | Balandlik h, kenglik b, qalinlik t (tashqi burchak radiusi 2t) |
| Dumaloq truba | Diametr D, qalinlik t |
| Yassi polosa | Kenglik b, qalinlik t |

5. {{ui:Mening profillarimga saqlash}} belgisi qoʻyilgan holda qoldiring — shunda u har bir yangi modelda boʻladi (quyida qarang), yoki faqat shu modelda saqlash uchun belgisini olib tashlang.
6. {{ui:Profil qoʻshish}} ni tanlang.

Holat satri shunday deydi: "Profil "…" qoʻshildi; u barcha profil roʻyxatlarida Maxsus boʻlimida boʻladi." U shakl ostidagi roʻyxatda va har bir {{ui:Profil}} roʻyxatining oxirida paydo boʻladi.

DetailCraft shakl mavjud boʻla olishini tekshiradi. Shunga oʻxshash xabarlarni koʻrasiz: "Tanacha va qanotlar chuqurlik va kenglikka sigʻmaydi.", "Tutashuv radiusi qanot uchun juda katta." yoki "Devor juda qalin." Raqamlarni tuzating va yana {{ui:Profil qoʻshish}} ni tanlang.

### Maxsus profillar nimalarga ega boʻladi

- Metriga massa: yuza × 7850 kg/m³ dan (katalog oʻlchamlari buning oʻrniga chop etilgan vaznni ishlatadi).
- Maxsus I-shakllar katalog I-shakllari kabi teshiklar, kesimlar, uchki plastinalar, NC fayllar va ishchi chizmalarni oladi.
- Maxsus yassi polosalar plastinalar kabi ishlaydi.
- Maxsus kanallar va trubalar teshiklar oladi; burchaklar va dumaloq trubalar hali olmaydi.

Qoʻshilgandan keyin maxsus profilni modeldan tahrirlab yoki olib tashlab boʻlmaydi (xato qilgan boʻlsangiz, darhol {{key:Mod+Z}} dan foydalaning). Tuzatilgan profilga yangi nom bering.

## Yangi modellar uchun profil saqlash

{{ui:Mening profillarim}}, shakl ostida, sizning maxsus profillaringiz roʻyxati. U shu brauzerda, shu kompyuterda saqlanadi, model faylida ham, hisobingizda ham emas.

- {{ui:Mening profillarimga saqlash}} belgisi qoʻyilgan holda qoʻshilgan profil roʻyxatga tushadi. Har bir yangi model, jumladan DetailCraft ishga tushganda ochiladigan model ham, profil roʻyxatlarida ularning hammasi bilan boshlanadi.
- Modelda allaqachon boʻlgan, lekin roʻyxatda boʻlmagan profilning yonida {{ui:Saqlash}} tugmasi bor.
- Sizning profilingiz boʻlmagan modelda (masalan, eskiroq fayl), uni qoʻshish uchun {{ui:Bu yerda ishlatish}} ni tanlang.
- {{ui:Oʻchirish}} profilni roʻyxatdan chiqaradi. Uni ishlatayotgan modellar oʻz nusxasini saqlaydi.
- Ochgan modelingiz oʻz faylida saqlangan profillarni saqlaydi. Faylni ochish roʻyxatingizni hech qachon oʻzgartirmaydi.
- Oʻlchamlari boshqa boʻlgan, roʻyxatdagi nom bilan qoʻshilsa, u rad etiladi: boshqa nom bering.
- Brauzerdagi sayt maʼlumotlarini tozalash yoki boshqa brauzer yoki kompyuterdan foydalanish boʻsh roʻyxat bilan boshlanadi. Maxfiy oyna uni saqlay olmaydi; ilova buni aytadi.
