---
title: Teshiklar va kesiklar qoʻshish
summary: Teshiklarni stenkalarga, polkalarga va plastinkalarga joy boʻyicha kiriting; balka uchida polkalarni elementning kesilgan uchidan oʻlchab kesing.
keywords: teshik, teshiklar, bolt teshigi, kesik, tishcha, kesish, burgʻilash, teshish, stenka teshigi, polka teshigi
from: 33d12398
---

Teshiklar va kesiklar joylashuv boʻyicha qoʻlda kiritiladi. Ular elementga tegishli va u bilan birga harakatlanadi.

Ulanishlar bilan hosil boʻladigan teshiklar (uchli plastinkalar, tayanch plastinkalar) sizga avtomatik qoʻshiladi; ularni kiritmaysiz. Ular "… holes from connections (edit the connection)" sifatida roʻyxatda koʻrinadi, ya’ni "… ulanishdan teshiklar (ulanishni tahrirlang)".

## Joylashuv qayerdan oʻlchanadi

- **x** elementning **kesilgan boshidan** boʻylab oʻlchanadi: ulanish uni qisqartirgandan keyingi boshlanish uchi. Shunday qilib x = 0 setka nuqtasi emas, poʻlatning haqiqiy uchi.
- **y** yuz boʻylab kesimning markazidan oʻlchanadi:
   - **stenkada**: yuqoriga (musbat) yoki oʻrta balandlikdan pastga;
   - **polkada** yoki **plastinkada**: kengligi boʻylab, markaziy chiziqdan.
- Elementning boshlanishi uni joylashtirganda bosgan birinchi nuqta. {{ui:Uchlari (x, y, z mm)}} satrlari qaysi uchi qaysi ekanini koʻrsatadi.

## Teshik qoʻshish

1. Elementni tanlang.
2. {{ui:Xususiyatlar}} panelidagi {{ui:Teshiklar}} qutisida {{ui:Yuz}} ni tanlang: {{ui:Stenka}}, {{ui:Yuqori polka}} yoki {{ui:Pastki polka}} (I-shakl, kanal yoki toʻrtburchak quvur uchun) yoki {{ui:Plastina yuzi}} (plastina uchun).
3. {{ui:x boʻylab (mm)}}, {{ui:y boʻylab (mm)}} va {{ui:Diametr (mm)}} ni kiriting. Shakl x 100, y 0, diametr 22 dan boshlanadi.
4. {{ui:Teshik qoʻshish}} ni tanlang.

Holat satri "Teshik qoʻshildi. x kesilgan boshidan; y kesim markazidan (stenka: yuqoriga, polka/plastina: kengligi boʻylab)." deydi. Teshik roʻyxatda va koʻrinishda elementning yuzi orqali qora tiqin sifatida chiqadi.

Teshikni olib tashlash uchun roʻyxatdagi yonidagi × ni tanlang.

Burchaklar va dumaloq quvurlar hali teshik qabul qilmaydi: ularning {{ui:Teshiklar}} qutisi buni aytadi.

:::note
3D koʻrinishda teshiklar poʻlatga kesilgan emas, qora tiqinlar sifatida chiziladi. Ular NC fayllarida, sex chizmalarida va IFC eksportda haqiqiy teshiklardir.
:::

Agar x elementning ikki uchidan birining tashqarisida boʻlsa, teshik {{ui:Muammolar}} yorligʻida "teshik element chetidan tashqarida" sifatida koʻrinadi.

## Kesik qoʻshish

Kesiklar I-shakl uchun: ular bir uchida yuqori yoki pastki polkani (va stenkaning shu chuqurligini) kesib tashlaydi, shunda balka boshqa elementdan oʻtib ketadi.

1. I-shaklli elementni tanlang.
2. {{ui:Kesiklar}} qutisida {{ui:Tugash}} ni ({{ui:Boshlanish}} yoki {{ui:Tugash}}) va {{ui:Tomon}} ni ({{ui:Yuqori}} yoki {{ui:Pastki}}) tanlang.
3. {{ui:Uzunlik (mm)}} (balka boʻylab shu uchdan) va {{ui:Balandlik (mm)}} (yuqoridan pastga yoki pastdan yuqoriga) ni kiriting. Shakl 100 x 40 dan boshlanadi.
4. {{ui:Kesik qoʻshish}} ni tanlang.

Koʻrinish kesikni poʻlatdan kesib olingan holda koʻrsatadi. Roʻyxat masalan "Boshida yuqori: 100 x 40" deb oʻqiladi. Uni × bilan olib tashlang.

Kesiklar toʻrtburchakli: ichki burchakda hali radius yoʻq.

## Teshiklar va kesiklar belgilarga qanday taʼsir qiladi

Ikki element bir xil element belgisini faqat teshik va kesiklari 1 mm ichida mos kelganda oladi, elementni teskari aylantirilishi hisobga olinadi. Guruhning bitta balkasiga teshik qoʻshish unga yangi belgi beradi. Qarang: [Belgi qoidalari](topic:mark-rules).
