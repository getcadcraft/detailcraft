---
title: Namuna ramkani oʻrganish
summary: Oʻrnatilgan ikki oraliqli ramkani oching va undan DetailCraft nimalar yasashini oʻrganing: belgilardan NC fayllargacha.
keywords: namuna, misol, demo, ramka, oʻrganish, tur, sinab koʻrish
from: 5c5944dd
---

Namuna ramka kichik, toʻliq modeldir: DetailCraft yasaydigan har bir narsa kamida bir marta koʻrinadi. Bu ilovani oʻrganishning eng tez yoʻli va biror eksportga ishonishdan oldin uni sinash usuli.

## Ochish

1. {{ui:Fayl}} guruhidagi {{ui:Namuna}} ni tanlang.
2. Joriy modelingizda saqlanmagan oʻzgarishlar boʻlsa, {{ui:Avval saqlash}} yoki {{ui:Oʻzgarishlarni tashlab yuborish}} ni tanlang.
3. Holat satri shunday deydi: "Namuna ramka: tayanch plastinali 6 ta ustun, uchlik plastinali 4 ta toʻsin, bogʻlama, armaturali 7 ta poydevor."

Namuna yangi model sifatida "Namuna ramka" nomi bilan ochiladi. U boshqa hech narsani oʻzgartirmaydi va bekor qilinadigan hech narsa yoʻq.

## Ichida nima bor

- **Toʻrlar** 1, 2, 3 — 6000 mm da va A, B — 7000 mm da. **Sathlar**: Sath 1 — 0 da va Sath 2 — 4000 da.
- **Oltita ustun**, W12x50, Sath 1 dan Sath 2 gacha har bir kesishmada, har biri 25 mm asos plastinasi va toʻrt langar sterjenli.
- **Toʻrtta balka**, W16x26, Sath 2 da A va B toʻr chiziqlari boʻylab, poʻlat yuqori qismi sathda, har ikki uchida tekis boltli uchlik plastina (jami sakkizta).
- **Bitta bogʻlama**, HSS4x4x1/4, Sath 1 dagi A/1 dan Sath 2 dagi A/2 gacha.
- **Oltita yakka poydevor**, 2000 x 2000 x 600, har bir ustun ostida, ikki yoʻnalishda ilgakli pastki toʻr bilan.
- **Yana bitta poydevor** ramka yonida, 2400 x 1800 x 600, beton ustun uchun tik turuvchi oltita ilgakli boshlangʻich armatura bilan.

## Sinab koʻring

1. Balkani bosing. Uning {{ui:Qism belgisi}}, {{ui:Yigʻma}}, {{ui:Kesish uzunligi}} va {{ui:Qisqartirish}} ni oʻqing: kesish uzunligi 6000 mm toʻr oraligʻidan qisqa, chunki har bir uchlik plastina balkani ustun chuqurligining yarmi va plastina qalinligi qoʻshilgan qiymatga qisqartiradi.
2. Ustunni bosing. {{ui:Teshiklar}} ostida uning flanetlaridagi uchlik plastinalar yasagan teshiklar koʻrsatiladi ("ulanishlardan 8 ta teshik"; oʻrta ustunlarda 16 ta, har bir flanetda bir toʻplamdan).
3. Chap tomondagi {{ui:Detal belgilari}} roʻyxatida toʻrtta balkaning bitta belgini ulashishini koʻring: ular bir xil poʻlat boʻlagi. Burchak ustunlari ham bitta belgini ulashadi, garchi ularning teshiklari qarama-qarshi tomonga qaragan boʻlsa ham, chunki uchini almashtirilgan ustun bir xil boʻlakdir. Ikki flanetida teshiklari bor oʻrta ustunlar boshqa belgi oladi.
4. Uchlik plastinani (yoki uning boltlaridan birini) bosing. {{ui:Xususiyatlar}} paneli plastina, bolt va payvand sozlamalarini, ular yasagan boltlarni (ularning uzunligi ushlash boʻyicha hisoblangan holda) va har qanday chekka masofa ogohlantirishlarini koʻrsatadi.
5. {{ui:Materiallar roʻyxati}} yorligʻini oching. Detallar, yigʻmalar (ikki uchlik plastinali balka bitta yigʻma) va boltlar hamda langar sterjenlari ogʻirliklari bilan roʻyxatga olingan. Oltita detal belgisi koʻrinishi kerak: c1 (ikki oʻrta ustun) va c2 (toʻrtta burchak ustuni), ikkalasi ham W12x50, 3975 mm; b1, toʻrtta W16x26 balka, 5650 mm; br1, bogʻlama; p1, sakkizta PL20x180 uchlik plastina; va p2, oltita PL25x400 asos plastinasi. Mahkamlagichlar: 64 ta bolt 20 x 70 A325 va 24 ta langar sterjeni 20 x 575.
6. {{ui:Egish jadvali}} yorligʻini oching. Oltita bir xil poydevor armatura belgilarini ulashadi; tik turuvchi poydevor oʻz belgisini qoʻshadi.
7. Bogʻlamani bosing va {{ui:Chiqish}} guruhiga qarang: {{ui:Ishlab chiqarish chizmasi}} xira koʻrinadi, chunki ishlab chiqarish chizmalari hozircha faqat I-shakllar va plastinalarni qamrab oladi.
8. {{ui:NC fayllar}} ni tanlang. Zip arxivida har bir I-shakl va plastina belgisi uchun fayl bor; holat satri bogʻlama belgisini yozilmagan deb koʻrsatadi.
9. {{ui:IFC}} ni tanlang va faylni istalgan IFC koʻruvchisida oching, boshqa dasturlaringiz uni qanday oʻqishini tekshirish uchun.

## Boshlangʻich nuqta sifatida foydalaning

Namuna oddiy modeldir. Uni oʻzgartiring, soʻngra {{ui:Nom}} maydonida qayta nomlang va {{key:Mod+S}} bilan yangi nom bilan saqlang.
