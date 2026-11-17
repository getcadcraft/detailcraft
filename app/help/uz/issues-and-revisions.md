---
title: Muammolar, qayta koʻrib chiqishlar va chizmalar oʻzgarishlar jurnali
summary: Arxitektor modeli bilan bitta muammolar tarixini yuriting: muammolarni oʻqib kiriting, obyektdagi koʻrsatmalarni, ustaxona chizmalarini, bogʻlangan modellarni muammoga bogʻlab qayd eting va chizmalar oʻzgarishlar jurnalini oʻqing.
keywords: muammo, qayta koʻrib chiqish, qayta koʻrib chiqishlar, oʻzgarishlar jurnali, chizmalar oʻzgarishlar jurnali, chizmalar reestri, obyektdagi koʻrsatma, ustaxona chizmasi, bogʻlangan model, taklif, tender, qurilish, muammolar tarixi, ustaxona chizmalari, ishlab chiqarish
from: 4b9a1b7b
---

## Nima qilasiz

Jamoa bilan bir xil muammolar tarixida ishlang. Qaysi varaqlar qaysi qayta koʻrib chiqish bilan chiqarilgani va obyektda sodir boʻlgan voqealar qaysi muammoga tegishli ekanini koʻring.

## Qadamlar

1. **Muammolar va qayta koʻrib chiqishlar** ni oching.
2. **Muammolar tarixini oʻqish** ni tanlang va BimCraft yoki boshqa ilovadan saqlangan `.issues.json` faylni tanlang. Uning muammolari va yozuvlari sizning tarixingizga qoʻshiladi. Hech narsa almashtirilmaydi.
3. Obyektdagi koʻrsatma, ustaxona chizmasi, belgilashlar toʻplami, bogʻlangan model yoki izoh uchun **Yozuv qoʻshish** ni tanlang. Unga tegishli muammoni va uning holatini tanlang. Tanlangan fayl nomi, hajmi va SHA-256 boʻyicha qayd etiladi; fayl oʻz joyida qoladi.
4. **Chizmalar oʻzgarishlar jurnali** har bir varaq uchun bitta qator va har bir muammo uchun bitta ustun koʻrsatadi. Qavs ichidagi qayta koʻrib chiqish oʻzgarishsiz qayta chiqarilgan.
5. **Oʻzgarishlar jurnalini yuklab olish (CSV)** muammolar, varaqlar jadvali va yozuvlarni saqlaydi. **Muammolar tarixini saqlash** boshqa ilovalar oʻqiydigan faylni yozadi.

## Yaxshi bilish kerak

- Varaqlar hali ham Chizmalar boʻlimida varaq-varaq chiqariladi. Ular bu yerda muammo sifatida koʻrinadi: bir sanada bitta izoh bilan chiqarilgan varaqlar bitta muammo hisoblanadi.
- Oʻqib kiritilgan yozuvlar va muammolar model faylida saqlanadi. Har bir oʻzgarish bitta Ortga qaytarish qadami.
- Bir faylni ikki marta oʻqish hech narsani ikki marta qoʻshmaydi. Ikki nusxada bir xil yozuv boʻlsa, yangisi saqlanadi.
