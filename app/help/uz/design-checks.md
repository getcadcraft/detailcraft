---
title: Poʻlat elementlarni loyihalash normasi boʻyicha tekshirish
summary: ASCE 7 yoki EN 1990 boʻyicha yuklama kombinatsiyalarini yarating, har bir I-shakldagi poʻlat elementni AISC 360 yoki EN 1993-1-1 boʻyicha tekshiring va har bir elementning qobiliyatining qancha qismini ishlatishini koʻring. Muhandis koʻrib chiqquncha yordamchi vosita.
keywords: loyihalash, loyihalash tekshiruvi, poʻlat loyihalash, foydalanish darajasi, qobiliyat, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Yevrokod, yuklama kombinatsiyalari, LRFD, Milliy ilova, buklanish, yonlama burilish buklanishi, kesish, egilish, oʻzaro taʼsir, konstruktiv, talabalar, muhandis
from: 66b6d545
---

Tahlilni bajargandan keyin {{ui:Tahlil}} yorligʻidagi {{ui:Loyihalash tekshiruvlari}} blok kuchlarni har bir poʻlat element uchun hukmga aylantiradi: eng xavfli kombinatsiya uning qobiliyatining qancha qismini ishlatishi.

:::warning
Bu **muhandis koʻrib chiqquncha yordamchi vosita**. U faqat birinchi tartib kuchlarini ishlatadi (ikkinchi tartib taʼsirlarsiz), burilishni, ingichka (4-sinf) qismlarni, payvandlangan shakllarni va ulanishlarni tekshirmaydi, tekshira olmagan narsalarni chiqarib tashlaydi va buni aytadi. U muhandis tekshiruvini almashtirmaydi va uning natijalari muhr emas.
:::

## Normani tanlash

{{ui:Loyihalash normasi}} model bilan saqlanadi; ikki oiladan birini tanlang:

- **ASCE 7 + AISC 360** (AQSh, LRFD): ASCE 7-16 §2.3.1 yuklama kombinatsiyalari va ANSI/AISC 360-16 element tekshiruvlari.
- **EN 1990 + EN 1993-1-1** (Yevrokod): EN 1990 kombinatsiyalari (6.10 tenglama yoki 6.10a va 6.10b) va EN 1993-1-1 element tekshiruvlari.

Keyin {{ui:Poʻlat markasi}} ni tanlang (A992, A36 va boshqalar; yoki S235 dan S450 gacha, 40 mm dan yuqorida pastki oquvchanlik chegarasi bilan).

## Kombinatsiyalarni yaratish

Har bir yuklama holatiga yuklama holatlari roʻyxatida uning **turini** bering (doimiy, foydali, tomdagi foydali, qor, shamol, seysmik), keyin {{ui:Kombinatsiyalarni yaratish}} ni bosing. DetailCraft norma kombinatsiyalarini sizning holatlaringiz kombinatsiyalari sifatida yozadi: siz ega boʻlgan turlar uchun normada koʻrsatilgan har bir mustahkamlik kombinatsiyasi va egilish uchun xizmat koʻrsatish kombinatsiyalari. Oʻzingiz kiritganlar qoladi; ular norma bilan tekshirilmaydi. {{ui:Boshqa}} turdagi holat kombinatsiyalanmaydi.

Yevrokod uchun koeffitsientlar EN 1990 A1 ilovasining **tavsiya etilgan qiymatlari** (γG 1.35, γQ 1.5, foydali, qor va shamol yuklamalarining ψ qiymatlari) va EN 1993-1-1 (γM0 = γM1 = 1.0). Mamlakatingizning Milliy ilovasi ularning bir qismini oʻzgartiradi: {{ui:Milliy ilova qiymatlari}} ni oching, oʻzingiznikini kiriting va kombinatsiyalarni qayta yarating. Ular modelda saqlanadi.

## Elementlarni tekshirish

{{ui:Elementlarni tekshirish}} ni bosing. Har bir I-shakldagi poʻlat uchun jadvalda **foydalanish darajasi** (talab qobiliyatga boʻlinadi: 100 % chegara), oʻtadimi-yoʻqmi, qaysi tekshiruv hal qiluvchi va qaysi kombinatsiya koʻrsatiladi. Elementlar modelda rangga boʻyaladi: koʻk — kam ishlatilgan, yashil — taxminan yarmi, sariq-jigarrang — chegarasiga yaqin, qizil — undan oshgan, kulrang — tekshirilmagan. Tanlash uchun elementning nomini bosing.

Tekshiruvlar, har biri oʻz bandiga koʻra (ular hisobotda roʻyxatlanadi):

- choʻzilish; egilish va burilish buklanishi bilan siqilish; ikki oʻq boʻyicha egilish, yonlama burilish buklanishi bilan; kesish; boʻylama kuch bilan egilish;
- xizmat kombinatsiyalarining egilishi siz belgilagan {{ui:Egilish chegarasi}} bilan solishtiriladi (boshida L/360; loyiha qiymati, norma qiymati emas).

**Uzunliklar.** Tiralgan uzunlik tahlil qilingan har bir boʻlakning ulushi (1 = tiralmagan); tiralar boshlanishdan teng masofada olinadi. K koeffitsientlari buklanish uchun uzunlikni koʻpaytiradi. Boshqa element tushgan tugun elementni boʻladi va har bir boʻlak oʻz uzunligi boʻyicha alohida tekshiriladi, xuddi shu yerda tiralgandek.

## Nima tekshirilmaydi

Element sabab bilan **tekshirilmagan** deb koʻrsatiladi, raqam oʻrniga, agar uning kesimi tekshiruvlar biladigan I-shakl boʻlmasa (quvurlar, burchaklar, shvellerlar), agar u maxsus (payvandlangan) shakl boʻlsa yoki egilishda qism AISC boʻyicha ingichka yoki Yevrokod boʻyicha 4-sinf boʻlsa. Siqilishda ingichka qism siqilish tekshiruvlarini chiqarib tashlaydi va element *oʻtadi, qisman tekshirilgan* deb oʻqiladi. Hali qurilmagan narsalar: ikkinchi tartib taʼsirlar, burilish, egilish bilan birga kesish buklanishi, ulanishlar, charchash, yongʻin va seysmik detallashtirish. Beton elementlar va seysmik yuklamalar [oʻz tekshiruvlariga](topic:concrete-and-seismic) ega. Qarang: [Hali qurilmagan](topic:not-built-yet).

## Hisobot

{{ui:Hisobot (PDF)}} va {{ui:Hisobot (CSV)}} tekshirgandan keyin loyihalash jadvallarini qoʻshadi: norma nashrlari, sozlamalar va Milliy ilova qiymatlari, har bir element boʻyicha foydalanish, ishlatilgan har bir band va har bir element uchun hal qiluvchi kombinatsiyada har bir tekshiruvning talabi, qobiliyati va foydalanishi.
