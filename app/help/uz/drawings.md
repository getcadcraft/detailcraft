---
title: Umumiy joylashuv va yigʻma chizmalar
summary: Modeldan reja, fasad va har bir yigʻma belgi uchun bitta yigʻma chizma yarating, A4 dan A1 gacha yoki ANSI B dan D gacha varaqlarda, qayta koʻrib chiqish harflari bilan nashr eting va PDF, DWG yoki DXF sifatida yuklab oling.
keywords: yashirin chiziqlar, yashirin chiziqni olib tashlash, shtrixli, qayta koʻrib chiqish buluti, buluti, qayta koʻrib chiqish uchburchagi, ankerli bolt rejasi, ankerli sterjenlar, sterjenlar jadvali, tayanch plastinalari jadvali, joylashtirish, nashr, qayta koʻrib chiqish, qayta nashr, nashr jurnali, uzatish hujjati, dwg, dxf, cad fayl, chizmalarni eksport qilish, chizmalar, umumiy joylashuv, GA, reja, fasad, yigʻma chizma, varaq oʻlchami, qogʻoz oʻlchami, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, chop etish, masshtab, sarlavha bloki, model ref
from: 709f8604
---

{{ui:Chiqish}} guruhida {{ui:Chizmalar}} ni tanlang. DetailCraft butun toʻplamni hozirgi model holatidan yaratadi. Hech narsa saqlanmaydi: modelni oʻzgartiring, {{ui:Chizmalar}} ni yana oching va toʻplam qayta yaratiladi.

## Toʻplamda nima bor

- **Rejalar**, har bir darajada narsa boʻlgan sath uchun bittadan, pastga qarab.
- **Fasadlar**, har bir panjara chizigʻi uchun, unga 1 m dan yaqin elementlar boʻlgan.
- **Ankerli bolt rejasi**, model tayanch plastinalariga ega boʻlganda: har bir tayanch plastinasi ustidan koʻrinishi, ustuni va ankerli sterjenlari bilan, panjaralar oʻlchamlari bilan, har bir sterjen naqshining tipik detali (BP1, BP2 …) sterjenlar oraligʻi va chekka masofalari bilan, hamda ikkita jadval: ankerli sterjenlar belgisi boʻyicha (R1, R2 …: miqdori, diametri, uzunligi, plastina ustidagi chiqishi, kiritilishi, marka) va tayanch plastinalari panjara boʻyicha (ustun, naqsh, plastina, sterjenlar, plastina yuqori qismi). Panjaradan tashqaridagi ustun koordinatalari bilan joylashtiriladi.
- **Yigʻma chizmalar**, har bir yigʻma belgi uchun bittadan: old, yuqori va oxirgi koʻrinishlar, teshiklar va plastina qirralariga zanjirli oʻlchamlar, detal roʻyxati, erkin boltlar va sterjenlar, hamda payvand va teshik izohlari. Har bir payvandlangan plastinada old koʻrinishda burchak payvand belgisi bor (AWS A2.4): strelka birikmaga qaratilgan, bazaviy chiziq ostidagi uchburchak strelka tomonini bildiradi, uning chap tomonidagi raqam payvand oʻlchami mm da, strelka chiziqqa tegadigan joydagi aylana esa butun perimetr boʻylab degan maʼno.

**Yashirin chiziqlar.** Rejalar va fasadlar, boshqa qism uning oldida toʻliq tursa, qismning chiziqlarini olib tashlaydi (ustun orqasida turgan, oxiridan koʻrinadigan tirgak). Yigʻma chizmalar plastinani, asosiy qism uni yopgan joyda shtrix bilan chizadi: old koʻrinishda tanasi orqasida (qismning −u tomonidan koʻrilganda), yuqori koʻrinishda yuqori polka ostida. Bir xil chuqurlikda turgan yoki chuqurligi ustma-ust tushgan qismlar ikkalasi ham toʻliq chiziladi.

Har bir varaqda sarlavha bloki bor: chizma raqami, masshtab, model nomi, sana, varaq raqami va varaq oʻlchami, hamda model ref: saqlangan modeldan yaratilgan kod, shuning uchun chop etilgan nusxani qaysi modelga tegishli ekanini aniqlash mumkin.

## Varaq oʻlchamini tanlash

{{ui:Chizmalar}} oynasining yuqoridagi roʻyxatida oʻlchamni tanlang: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) yoki {{ui:ANSI D}} (22 × 34 in). Har bir varaq gorizontal. Toʻplam yangi oʻlchamda darhol qayta yaratiladi, va xuddi shu oʻlcham ishlab chiqarish chizmalari uchun ham ishlatiladi. U [DetailCraft sozlamalari](topic:settings#drawings) da ham bor va bu brauzer uni eslab qoladi.

- Katta varaq kattaroq masshtabda chizadi. Masshtablar doim standart (1:10, 1:20, 1:25, 1:50, 1:100 va hokazo).
- Matn har bir varaqda bir xil oʻlchamda qoladi, shuning uchun chop etilganda oʻqilishi saqlanadi.
- Kichik varaqda uzun, ingichka yigʻma chizmaning chuqurligi boʻylab masshtabi uzunligi boʻylab masshtabidan katta boʻlishi mumkin. Koʻrinish sarlavhasi ikkala masshtabni koʻrsatadi va oʻlchamlar hal qiluvchi boʻladi.

## Chizmalarni nashr etish va qayta koʻrib chiqishlar

Koʻrsatilgan varaqning tepasidagi chiziq varaq qayerda ekanini aytadi: **Hali nashr etilmagan**, **Rev B, nashr etilgan … ; oʻzgarmagan** yoki qizil rangda **Rev B dan beri oʻzgargan: qayta nashr kerak**. Varaqlar roʻyxatida nashr etilgan varaqlar qayta koʻrib chiqish raqami bilan, qayta nashr kerak boʻlganlari esa belgilanadi.

- Nashr maqsadini kiriting (boshida "Ishlab chiqarish uchun nashr etilgan") va {{ui:Bu varaqni nashr etish}} ni, yoki oxirgi nashrdan beri yangi yoki oʻzgargan har bir varaq uchun {{ui:Oʻzgargan varaqlarni nashr etish}} ni tanlang.
- Varaqning birinchi nashri A qayta koʻrib chiqish, keyin B, C va hokazo (I va O tashlab ketiladi).
- Sarlavha bloki qayta koʻrib chiqish bilan chizma raqamini koʻrsatadi ("A-B1  rev B"), uning yonida esa oxirgi nashrlar roʻyxati: qayta koʻrib chiqish, sana va tavsif. Kichik varaqda sigʻadigan darajada koʻrsatiladi.
- Varaq **oʻzgaradi**, qachonki uning chizilgan narsasi oʻzgarsa: koʻchirilgan element, yangi teshik, qayta raqamlangan belgi. Sana, varaqlar soni va qayta koʻrib chiqish jadvalining oʻzi hisobga olinmaydi. Varaq oʻlchamini oʻzgartirish hamma varaqni oʻzgartiradi.
- Nashr jurnali model faylida saqlanadi va nashr qilish bitta bekor qilish qadami. [KISS fayli](topic:kiss-export) har bir chizmaning oxirgi qayta koʻrib chiqishini olib yuradi.

### Qayta koʻrib chiqish buluti

Varaqning ikkinchi nashridan boshlab, oʻzgargan har bir detal yoki poydevor qayta koʻrib chiqish uchburchagi bilan harfli bulut ichiga chiziladi.

- Varaq oxirgi nashridan beri oʻzgarganda, bulutlar oʻsha vaqtdan beri nima oʻzgarganini koʻrsatadi, keladigan qayta koʻrib chiqish uchburchakda: B nashr etilgan va oʻzgargan boʻlsa, uchburchaklarda C yoziladi.
- Nashr qilganingizdan keyin bulutlar oʻsha qayta koʻrib chiqish varaqida qoladi, bosma toʻplamdagidek, varaq yana oʻzgargunga qadar.
- Har bir varaq faqat oʻzi koʻrsatgan oʻzgarishlarni bulutlaydi. Rejalar va fasadlar teshik yoki kesma chizmaydi, shuning uchun ular koʻchirilgan, burilgan yoki oʻlchami oʻzgargan yoki belgisi oʻzgargan elementni bulutlaydi. Yigʻma chizmalar va ankerli bolt rejasi ham yangi yoki koʻchirilgan teshiklar va kesmalarni bulutlaydi.
- Qayta raqamlangan belgi hisobga olinadi: oʻzgarish balkani yangi yigʻma qiladigan boʻlsa, belgisi yuqoriga koʻchgan balkalar (B1 dan B2 gacha) rejalar va fasadlarda bulutlanadi.
- Oʻchirilgan detal bulutlash uchun hech narsa qoldirmaydi.
- Qayta koʻrib chiqish bulutlari paydo boʻlishidan oldin nashr etilgan varaqlar (DetailCraft 0.4) keyingi nashridan boshlab bulutlay boshlaydi.
- Bulutlar PDF, DXF va DWG yuklamalarida boʻladi va oʻzi hech qachon oʻzgarish hisoblanmaydi.

## Yuklab olish

Tugmalar yonidagi roʻyxatda formatni tanlang, soʻng koʻrsatilgan varaq uchun {{ui:Bu varaq}} yoki butun toʻplam uchun {{ui:Barcha varaqlar}} ni.

- **PDF**: chop etish yoki yuborish uchun. {{ui:Barcha varaqlar}} bitta PDF yaratadi, har bir sahifada bitta varaq, har bir sahifa tanlangan oʻlchamda.
- **DWG**, 2018, 2013, 2010, 2007, 2004 yoki 2000 formatida: varaqlarni CAD dasturida ochish uchun. Eski dastur uchun eski formatni tanlang.
- **DXF (R12)**: deyarli har bir CAD dastur ochadigan versiya.

DWG yoki DXF varaq toʻliq oʻlchamda chiziladi: bitta chizma birligi qogʻozda bir millimetr, shuning uchun u 1:1 da chop etiladi va har bir koʻrinish sarlavhasidagi masshtabni saqlaydi. Har bir qalam oʻz qatlamiga ega: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID va hokazo, oʻz chiziq qalinligi (DWG) va shtrixlari bilan. Soʻzlar DetailCraft matn uslubida (Arial) matn sifatida yoziladi. Oʻlchamlar siz koʻradigan chiziqlar va raqamlar, oʻlcham obyektlari emas. {{ui:Barcha varaqlar}} DWG yoki DXF fayllarini bitta zip ichiga, har bir varaq uchun bittadan joylaydi.

:::note
DXF R12 da chiziq qalinligi va toʻldirish yoʻq: qatlamlar nomlarini saqlaydi, shuning uchun chop etishda qalamlarni qatlam boʻyicha sozlang, toʻldirilgan shakllar esa chiqarib tashlanadi (holat satri nechtasi ekanini aytadi).
:::

Belgilangan masshtablar oʻz kuchida qolishini istasangiz, bir xil oʻlchamdagi qogʻozda 100% da chop eting ("sahifaga moslash" yoʻq).
