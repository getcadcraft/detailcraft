---
title: Setkalar va sathlarni sozlash
summary: Setka chiziqlarini, ularning oraliqlarini va har bir element joylashtiriladigan sathlarni kiriting.
keywords: setka, setkalar, oʻqlar, setka chiziqlari, sathlar, balandliklar, qavatlar, tekisliklar, oraliq, sozlash
from: 9cad233c
---

DetailCraft da har bir element setka kesishmasida, sathda joylashtiriladi. Avval setkalar va sathlarni oʻrnating; keyinroq ularni oʻzgartirish mumkin.

## Bu yerda setkalar qanday ishlaydi

- **Raqamli chiziqlar** bir yoʻnalishda, **harfli chiziqlar** boshqa yoʻnalishda. Nomlar faqat odat: yorliq 8 belgigacha har qanday matn boʻlishi mumkin (1, 2, 3 yoki A1, A2, yoki 10, 20).
- Siz koordinatalarni emas, yorliqlarni va ular orasidagi oraliqlarni kiritasiz. Har bir toʻplamning birinchi chizigʻi 0 da.
- Raqamli chiziqlar x doimiy boʻlgan chiziqlar; harfli chiziqlar y doimiy boʻlgan chiziqlar. Demak, 1 dan 2 gacha boʻlgan balka x boʻylab, A dan B gacha boʻlgan balka y boʻylab yuradi.
- Barcha qiymatlar millimetrda.

Yangi model raqamli chiziqlar 1 2 3 (6000 6000 oraliqda), harfli chiziqlar A B (6000 oraliqda) va ikkita sath bilan boshlanadi.

## Setkalarni oʻrnatish

1. Chap tomondagi {{ui:Model}} panelida, agar yigʻilgan boʻlsa, {{ui:Setkalar}} ni oching.
2. {{ui:Raqamli chiziqlar}} da yorliqlarni boʻsh joy bilan ajratib kiriting, masalan `1 2 3 4 5`.
3. Undan pastdagi {{ui:Oraliqlar}} maydonida har bir boʻshliq uchun bitta oraliq kiriting, masalan `6000 6000 7500 6000`. Besh chiziq uchun toʻrtta boʻshliq.
4. {{ui:Harfli chiziqlar}} va uning {{ui:Oraliqlar}} da ham xuddi shunday qiling, masalan `A B C` va `8000 8000`.
5. {{ui:Setkalarni qoʻllash}} ni tanlang.

Holat satri "Setkalar yangilandi." deydi va koʻrinish yangi setkaga kattalashadi. Vergullar ham ajratuvchi sifatida ishlaydi.

Agar biror narsa mos kelmasa, hech narsa oʻzgarmaydi va holat satri sababini aytadi, masalan: "Raqamli setkalar: har bir juft chiziq orasiga bitta oraliq bering (4)." Boshqa tekshiruvlar: oraliqlar musbat millimetr boʻlishi kerak, yorliqlar bir-biridan farq qilishi kerak va har yoʻnalishda eng koʻpi 60 ta chiziq boʻlishi mumkin.

:::note
Setkalar koʻchganda elementlar oʻz koordinatalarini saqlaydi. Poʻlat joylashtirilgandan keyin oraliqni oʻzgartirsangiz, poʻlat oʻz joyida qoladi va endi setkada emas. Avval setkani oʻzgartiring yoki elementlarni uchlarining koordinatalarini tahrirlab koʻchiring.
:::

## Sathlarni oʻrnatish

1. {{ui:Model}} panelida {{ui:Sathlar}} ni oching.
2. Har bir qatorda sath nomi va millimetrdagi balandligi bor. Ularni xohlaganingizcha tahrirlang.
3. Yana bir qator uchun {{ui:Sath qoʻshish}} ni tanlang. U "Sath 3" (va hokazo) deb nomlanadi va eng yuqori sathdan 4000 mm yuqorida joylashadi; kerak boʻlsa, ikkalasini ham oʻzgartiring.
4. Sathni olib tashlash uchun qator oxiridagi × tugmasini tanlang.
5. {{ui:Sathlarni qoʻllash}} ni tanlang.

Hech narsa {{ui:Sathlarni qoʻllash}} ni tanlamaguncha oʻzgarmaydi. Sathlar qoʻllanganda balandlik boʻyicha saralanadi. Har bir sath nomga ega boʻlishi kerak, ikki sath bir xil nomga ega boʻla olmaydi va kamida bitta sath saqlanishi kerak.

Sathlar nol dan pastda boʻlishi mumkin (masalan, `-3500` dagi yerto‘la) va teng oraliqda boʻlishi shart emas.

## Sathlar qanday ishlatiladi

- Sathda joylashtirilgan ustun keyingi sathgacha koʻtariladi yoki {{ui:Gacha}} da tanlagan sathgacha.
- Balkalar va plitalar bosgan sathda, ikki kesishma orasida joylashtiriladi.
- Poydevorlar yuqorisi bosgan sathda joylashtiriladi.
- {{ui:Reja}} bir vaqtda bitta sathni yuqoridan koʻrsatadi.
- IFC eksport har bir sathni bitta qurilish qavatiga aylantiradi.

## Bekor qilish

Setka va sath oʻzgarishlari boshqa tahrirlar kabi: {{key:Mod+Z}} oldingi setkani qaytaradi.

## Keyingi

[Ustunlar, balkalar va bogʻlamalarni joylashtirish](topic:place-members)
