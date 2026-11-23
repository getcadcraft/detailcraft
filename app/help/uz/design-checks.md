---
title: Poʻlat elementlarni loyihalash normasi boʻyicha tekshirish
summary: ASCE 7 yoki EN 1990 boʻyicha yuklama kombinatsiyalarini yarating, har bir poʻlat I-profilni AISC 360 yoki EN 1993-1-1 boʻyicha tekshiring va har bir elementning qarshiligining qancha qismidan foydalanilayotganini koʻring. Muhandis koʻrib chiqquncha yordamchi vosita.
keywords: loyihalash, loyihalash tekshiruvi, poʻlat loyihalash, foydalanish darajasi, utilisation, utilization, qarshilik, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, yuklama kombinatsiyalari, LRFD, Milliy ilova, bo'ylama egilish, yon tomonga burilish bo'ylama egilishi, kesish, egilish, oʻzaro taʼsir, konstruktiv, talabalar, muhandis
from: 15685c4e
---

Tahlilni ishga tushirgandan soʻng {{ui:Tahlil}} yorlig'idagi {{ui:Loyihalash tekshiruvlari}} bloki kuchlarni har bir poʻlat element uchun xulosaga aylantiradi: eng og'ir kombinatsiyada uning qarshiligining qancha qismi ishlatilayotgani.

:::warning
Bu **muhandis koʻrib chiqquncha yordamchi vosita**. U faqat birinchi tartibli kuchlardan foydalanadi (ikkinchi tartibli taʼsirlarsiz), burilishni, ingichka (4-sinf) qismlarni, payvandlangan profillarni va birikmalarni tekshirmaydi hamda tekshira olmagan narsalarini qoldiradi va buni aytadi. U muhandisning tekshiruvini almashtirmaydi, natijalari tasdiqlash muhri emas.
:::

## Norma tanlash

{{ui:Loyihalash normasi}} model bilan birga saqlanadi; ikki oiladan birini tanlang:

- **ASCE 7 + AISC 360** (AQSh, LRFD): ASCE 7-16 §2.3.1 yuklama kombinatsiyalari va ANSI/AISC 360-16 elementlarni tekshirishi.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990 kombinatsiyalari (6.10 tenglama yoki 6.10a va 6.10b) va EN 1993-1-1 elementlarni tekshirishi.

Soʻng {{ui:Poʻlat markasi}} ni tanlang (A992, A36 va boshqalar; yoki S235 dan S450 gacha, 40 mm dan katta boʻlganda pastki oqish mustahkamligi bilan).

## Kombinatsiyalar yaratish

Yuklama holatlari roʻyxatida har bir yuklama holatiga uning **turini** (doimiy, vaqtinchalik, tom vaqtinchalik, qor, shamol, seysmik) bering, soʻng {{ui:Kombinatsiyalarni yaratish}} tugmasini bosing. DetailCraft normaning kombinatsiyalarini sizning holatlaringiz kombinatsiyalari sifatida yozadi: sizda boʻlgan turlar uchun normada koʻrsatilgan barcha mustahkamlik kombinatsiyalarini va egilish uchun ekspluatatsiya kombinatsiyalarini. Oʻzingiz kiritgan kombinatsiyalar saqlanadi; ular normaga qarshi tekshirilmaydi. {{ui:Boshqa}} turidagi yuklama holati kombinatsiyalanmaydi.

Eurocode uchun koeffitsiyentlar EN 1990 Annex A1 ning **tavsiya etilgan qiymatlari** (γG 1.35, γQ 1.5, vaqtinchalik, qor va shamol yuklamalarining ψ qiymatlari) va EN 1993-1-1 (γM0 = γM1 = 1.0). Mamlakatingizning Milliy ilovasi ulardan bazilarini oʻzgartiradi: {{ui:Milliy ilova qiymatlari}} ni oching, oʻzingizniki ni kiriting va kombinatsiyalarni qayta yarating. Ular modelda saqlanadi.

## Elementlarni tekshirish

{{ui:Elementlarni tekshirish}} tugmasini bosing. Har bir poʻlat I-profil uchun jadvalda uning **foydalanish darajasi** (talabning qarshilikka nisbati: 100 % chegara), oʻtadimi-yoʻqmi, qaysi tekshiruv boshqarayotgani va qaysi kombinatsiya ekani koʻrsatiladi. Elementlar modelda rangli boʻyaladi: koʻk — kam ishlatilgan, yashil — taxminan yarmi, xantal rang — chegaraga yaqin, qizil — undan oshgan, kulrang — tekshirilmagan. Elementning nomini bosing, u tanlanadi.

Tekshiruvlar, har biri qaysi bandga amal qilishi bilan (hisobotda sanab oʻtilgan):

- cho'zilish; egilish va burilish bo'ylama egilishi bilan siqilish; ikki oʻq boʻyicha egilish va yon tomonga burilish bo'ylama egilishi bilan; kesish; oʻq kuchi bilan egilish;
- xizmat kombinatsiyalarining siljishi {{ui:Siljish chegarasi}} bilan solishtiriladi, siz belgilagan (boshlanishda L/360; loyiha qiymati, norma qiymati emas).

**Uzunliklar.** Tiragichlangan uzunlik har bir tahlil qilingan qismning ulushi (1 = tiragichsiz); tiragichlar boshlanishdan teng oraliqda olinadi. K koeffitsiyentlari bo'ylama egilish uchun uzunlikni ko'paytiradi. Boshqa element tushadigan tugun elementni bo'ladi, va har bir qism o'z uzunligi bo'yicha alohida tekshiriladi, xuddi u yerda tiragichlangandek.

## Tekshirilmaydigan narsalar

Element sonli qiymat o'rniga sababi bilan birga **tekshirilmagan** holatini ko'rsatadi, agar uning kesimi tekshiruvlar biladigan profil bo'lmasa (burchaklar, shvellerlar; to'rtburchak va dumaloq quvurlar devorlari ixcham bo'lsa tekshiriladi), u maxsus (payvandlangan) profil bo'lsa yoki egilishda qismi ingichka (AISC) yoki 4-sinf (Eurocode) bo'lsa. Siqilishda ingichka qism siqilish tekshiruvlarini chiqarib tashlaydi va element *oʻtadi, qisman tekshirilgan* deb oʻqiladi. Tugunlardagi payvandlar [oʻz tekshiruviga](topic:weld-checks) ega. Hali qurilmagan: ikkinchi tartibli taʼsirlar, burilish, egilish bilan birga kesish bo'ylama egilishi, bolt birikmalari, charchash, yong'in va seysmik detallashtirish. Beton elementlar va seysmik yuklamalar [oʻz tekshiruvlariga](topic:concrete-and-seismic) ega. Qarang: [Hali qurilmagan](topic:not-built-yet).

## Hisobot

{{ui:Hisobot (PDF)}} va {{ui:Hisobot (CSV)}} tekshiruvdan soʻng loyihalash jadvallarini oladi: norma nashrlari, sozlamalar va Milliy ilova qiymatlari, har bir element boʻyicha foydalanish darajasi, ishlatilgan har bir band, va har bir element uchun boshqaruvchi kombinatsiyadagi har bir tekshiruvning talabi, qarshiligi va foydalanish darajasi.
