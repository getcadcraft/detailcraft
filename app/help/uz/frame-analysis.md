---
title: Karkasni tahlil qilish
summary: Chizilgan balkalar, ustunlar va bogʻlamalarning kuchlari, reaksiyalari va bukilishlari, siz belgilagan yuk holatlari va kombinatsiyalar ostida. Tahlil yordamchi vosita, kod tekshiruvi emas; loyihalash tekshiruvlari alohida bosqich.
keywords: tahlil, konstruktiv tahlil, karkas tahlili, bikrlik usuli, yuklar, yuk holati, kombinatsiya, doimiy yuk, foydali yuk, oʻz ogʻirlik, reaksiyalar, egilish momenti, kesish, boʻylama kuch, bukilish, deformatsiyalangan shakl, tayanchlar, sharnirli, qotirilgan, boʻshatish, hisobot, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Pastdagi {{ui:Tahlil}} yorligʻi modelning har bir balkasi, ustuni va bogʻlamasidagi kuchlarni, ustun poydevorlaridagi reaksiyalarni va elementlarning qanchalik bukilishini siz bergan yuklar boʻyicha topadi.

:::warning
Bu **tahlil yordamchisi, kod tekshiruvi emas**. Tahlil hech qanday loyihalash kodini qoʻllamaydi: elementlarning oʻlchamini belgilamaydi, sigʻimini yoki ulanishlarini tekshirmaydi va yuk koeffitsiyentlarini tanlamaydi. Muhandis modelni, uning yuklari va tayanchlarini tekshiradi hamda raqamlar nimani anglatishiga qaror qiladi. ASCE 7 / AISC 360 yoki EN 1990 / EN 1993-1-1 boʻyicha element tekshiruvlari uchun qarang: [Poʻlat elementlarni loyihalash kodi boʻyicha tekshirish](topic:design-checks), u ham alohida yordamchi bosqich.
:::

## Ishga tushirish

1. {{ui:Tahlil}} yorligʻini oching.
2. Koʻrinishda bitta yoki bir nechta elementni tanlang, {{ui:Holat}}, {{ui:Yuklama}} va {{ui:Yoʻnalish}} ni tanlang, qiymatni kiriting va {{ui:Yuklama qoʻshish}} tugmasini bosing. Element boʻylab taqsimlangan yuk kN/m da, toʻplangan yuk kN da beriladi. {{ui:Pastga (gravitatsiya)}} odatda ishlatiladi.
3. {{ui:Tahlilni ishga tushirish}} tugmasini bosing.

Jadvalda har bir elementning eng katta boʻylama kuchi N, kesuvchi kuchlari Vz va Vy, egilish momentlari My va Mz, buralish T va uning bukilishi chiqadi; eng katta moment birinchi turadi. Elementning nomini bossangiz, u tanlanadi. Pastda har bir tayanchdagi reaksiyalar. {{ui:Modelda}} deformatsiyalangan shaklni chizadi yoki bitta taʼsirni har bir element yonida diagramma sifatida koʻrsatadi, eng katta qiymati uning oʻrnida yozilgan. Model oʻzgarishi bilanoq natijalar eskiradi: uni qayta ishga tushiring.

Har bir yuk, holat va sozlama bitta bekor qilish qadami ({{key:Mod+Z}}) boʻladi va model faylida saqlanadi.

## Yuk holatlari va kombinatsiyalar

Tahlil uchta bilan boshlanadi: **Doimiy** (elementlarning oʻz ogʻirligi, ularning chizilgan kesimlaridan va 7850 kg/m³ dan), **Foydali** (boʻsh) va **Doimiy + foydali**. Oʻz holatlaringizni (shamol, qor …) va kombinatsiyalarni qoʻshing: kombinatsiya holatlarni siz kiritgan koeffitsiyentlar bilan qoʻshadi. Tahlil chiziqli, shuning uchun har bir holat bir marta yechiladi va kombinatsiyalar yigʻindilardir. Koeffitsientlarni oʻzingiz kiriting yoki loyihalash kodini tanlab, {{ui:Kombinatsiyalarni yaratish}} ga kod boʻyicha yaratishni buyuring ([Poʻlat elementlarni loyihalash kodi boʻyicha tekshirish](topic:design-checks)).

## Karkas nimadan iborat

- Balkalar, ustunlar va bogʻlamalar, har biri oʻz ishchi chizigʻida (siz chizgan chiziq), kesimning haqiqiy xususiyatlari konturidan hisoblangan. Plastinkalar, zinalar, poydevorlar va boltlar karkasga kirmaydi.
- Element boshqa elementning uchi unga tegadigan joyda boʻlinadi, shuning uchun oʻrtasida ustunga kirgan balka shu yerda ustun bilan tutashadi.
- **Ustun poydevorlari**: qotirilgan (boshlanish) yoki sharnirli (joyida ushlangan va buralishga qarshi, aylanishga erkin). Tayanch plastinkasi har doim tayanch hosil qiladi.
- **Balka uchlari**: uchli plastinka qattiq, kesuvchi bogʻlovchi sharnirli. {{ui:Ulanishsiz balka uchlari}} qolganini belgilaydi. **Bogʻlamalar** ikki uchida sharnirli.
- Bitta elementni tanlab, uning uchlariga yoki ustun poydevoriga oʻz qoidasini bering.
- Hamma joyda poʻlat: E = 200 GPa, G = 77 GPa.

Agar karkas hech narsani egmasdan harakatlansa — mexanizm, masalan bir yoʻnalishda bogʻlamasiz sharnirli poydevorlar — hisoblash toʻxtaydi va qayerda hamda qaysi yoʻnalishda ekanligini aytadi; uni tayanch, bikr tugun yoki bogʻlama bilan ushlab turing.

## Belgilar

N > 0 choʻzilishdir. My > 0 elementning mahalliy −z tomonini choʻzadi: gravitatsiya taʼsirida egilgan balka My > 0 ga ega. Mz > 0 mahalliy −y tomonini choʻzadi. Bukilish elementning uchlari orasidagi toʻgʻri chiziqdan oʻlchanadi. Elementning mahalliy z oʻqi yuqoriga qaraydi (ustun uchun: X boʻylab); mahalliy oʻqlari element aylanishi bilan birga buriladi.

## Hisobot

{{ui:Hisobot (PDF)}} va {{ui:Hisobot (CSV)}} hammasini oʻz ichiga oladi: karkas qurilgan taxminlar, kesimlar, holatlar va kombinatsiyalar, soʻngra har bir holat va kombinatsiya uchun reaksiyalar (yuklar va reaksiyalar yigʻindilari bilan, ular muvozanatda boʻladi), element kuchlari va siljishlar hamda barcha holatlarning oʻrab turuvchi qiymatlari. {{ui:CraftScript sifatida eksport}} xuddi shu karkasni PartCraft ning Script ish maydoni uchun skript sifatida yozadi; u yerda kutubxona funksiyasi `frame3d` uni oʻqilishi oson kod bilan bosqichma-bosqich yechadi.

## Usul

Toʻgʻridan-toʻgʻri bikrlik usuli, chiziqli va birinchi tartibli, agar Ikkinchi tartib (P-Delta) ni belgilamasangiz: ikki tugunli ustun-balkalar boʻylama, buralish va ikki egilish bikrligi bilan (kesuvchi deformatsiya va egrilik yoʻq), elementlar uchlarini boʻshatish statik kondensatsiya bilan, elementlar boʻylab yuklar esa elementlarning oʻz shakl funksiyalari orqali. Javoblari klassik darslik holatlari bilan tekshirilgan (konsollar, oddiy, qotirilgan va uzluksiz balkalar, portal karkas, buralishdagi toʻr, ferma).

**Ikkinchi tartib (P-Delta).** Ishga tushirish tugmasi yonidagi *Ikkinchi tartib (P-Delta)* ni belgilang: har bir kombinatsiya qayta yechiladi, bunda elementlarning boʻylama kuchlari egilgan karkasda taʼsir qiladi (har bir element 4 boʻlakka boʻlinadi, shunda element uchlari orasidagi egilish ham hisobga olinadi), boʻylama kuchlar barqarorlashguncha. Natija satri oʻtishlar sonini va siljish qanchaga oshganini koʻrsatadi; momentlar, siljishlar, loyihalash tekshiruvlari va hisobot shu natijalardan foydalanadi. Karkasning elastik kritik yukidan yuqorida hisoblash toʻxtaydi va buni aytadi. Bu kichik aylanishlar bilan elastik, faqat egiluvchan, qattiqlikni kamaytirmasdan va nominal yuklarsiz (oʻzicha AISC bevosita tahlil usuli emas); plitalar, devorlar va qattiq qavatlar birinchi tartibda qoladi.

**Tabiiy chastotalar (chekli elementlar).** Natijalar ostidagi {{ui:Chekli elementlar: tabiiy chastotalar}} bloki xuddi shu modelning eng past tebranish shakllarini chekli elementlar dvigateli bilan topadi: boʻylama tugashlari bilan balkalar, yassi toʻrtta tugunli qobiq sifatida plitalar va devorlar, qattiq qavatlar, tayanchlar. Shakllar sonini (3, 6, 10 yoki 20) va plita elementini (qalin yoki yupqa plitalar uchun toʻrtta tugunli qobiq, yoki yupqa plita elementi) tanlang va {{ui:Chastotalarni topish}} ni bosing. Jadvalda har bir shaklning chastotasi Hz da, davri soniyalarda va X, Y hamda Z boʻylab samarali modal massasi harakatlanishi mumkin boʻlgan massaning ulushi sifatida beriladi; {{ui:Modelda koʻrsatish}} har qanday shaklni deformatsiyalangan shakl kabi chizadi. Massa — material zichligi koʻpaytirilgan hajm: yuklar massa qoʻshmaydi, zichligi boʻlmagan material esa massasiz. Hisobot (PDF, CSV) jadvalni oʻz ichiga oladi. Bu faqat elastik va kichik harakatli, bu yerda seysmik yoki shamol yuki kod boʻyicha yaratilmaydi. Kod tekshiruvi emas; muhandis natijalarni koʻrib chiqadi.

**Javob spektri, vaqt tarixi va pushover.** Chastotalar ostida yana uchta blok, xuddi shu chekli element modelidan foydalanadi. Ularning hammasi uchun massa — material zichligi va belgilagan holatlaringizning pastga yoʻnalgan yuklari, har biri siz kiritgan koeffitsiyent bilan (masalan, Doimiy 1 da va Foydali massa sifatida hisoblanadigan ulush).

{{ui:Javob spektri}} har bir shaklni siz bergan spektrdan oʻqiydi (davr va tezlanish jadvali yoki SDS, SD1 va TL dan ASCE 7 shakli; {{ui:Seysmik blok qiymatlarini ishlatish}} tugmasi ularni Seysmik blokdan nusxalaydi) va shakllarni CQC, SRSS, oʻn foiz qoidasi yoki mutlaq yigʻindi boʻyicha birlashtiradi, soʻngra X, Y va Z yoʻnalishlarini birlashtiradi (100 % + 30 % yoki SRSS). Asosiy kesuvchi kuch, qavatlar siljishi, element uchlaridagi kuchlar va shakllar jadvalini beradi; ishlatilgan shakllar massaning 90 % dan kamini tashkil qilsa, jadval ogohlantiradi. Natijalarni koeffitsiyent bilan yoki siz kiritgan asosiy kesuvchi kuchgacha masshtablashingiz mumkin; blok bu asosiy kesuvchi kuchni oʻzi hisoblamaydi. Natijalarning ishorasi yoʻq.

{{ui:Vaqt tarixi}} yer tezlanishini modal superpozitsiya (yozuvning nuqtalar orasidagi toʻgʻri chiziqlari uchun aniq) yoki toʻgʻridan-toʻgʻri integratsiya (Nyumark oʻrtacha tezlanishi va Relei susayishi bilan) orqali yuritadi. Kiritish — soxta sinus yoki impuls (har doim "sintetik" deb belgilanadi), siz joylashtirgan yozuv yoki ochgan matn fayli (vaqt va tezlanish, har bir qadamda bitta tezlanish qatori, yoki DT= sarlavhali PEER uslubidagi fayl; g yoki m/s² da). Tom siljishini va asosiy kesuvchi kuchni vaqtga qarab, har bir qavat siljishini va element uchlaridagi kuchlarning oʻrab turuvchi qiymatini beradi. Juda uzun yozuvli modellar uni faqat seans uchun saqlaydi.

{{ui:Pushover}} tomni yon tomonga kichik qadamlarda suradi (birinchi shakl kabi yoki bir xil naqsh), I shaklli elementlarning uchlarida plastik boʻgʻinlar bilan. Boʻgʻin plastik momentda oqadi, bu boʻylama kuch oshgani sari kamayadi (chizilgan shakldan hisoblanadi, burchaklar eʼtiborga olinmaydi); qotish ixtiyoriy, P-delta ixtiyoriy, gravitatsion kombinatsiyani esa avval qoʻllash mumkin. Sigʻim egri chizigʻini (asosiy kesuvchi kuch va tom siljishi), birinchi boʻgʻinni hamda har bir boʻgʻinning holatini va plastik aylanishini beradi. {{ui:Chiziqsiz vaqt tarixini ishga tushirish}} kichik modellarda Vaqt tarixi blokining yozuvi ostida xuddi shu boʻgʻinlarni ishga tushiradi. Boʻgʻinlar faqat element uchlarida hosil boʻladi (oraliq ichida boʻlishi kerak boʻlgan joyga tugun qoʻying); ikki uchida boʻshatilgan element boʻgʻin olmaydi; bogʻlamalarning oqishi va bukilishi modellashtirilmagan; plitalar va devorlar elastik qoladi; qabul mezonlari berilmagan. Kod tekshiruvi emas; muhandis natijalarni koʻrib chiqadi. Sozlamalar model bilan saqlanadi va hisobot jadvallarni oʻz ichiga oladi.

Hali qurilmagan: bukilish tahlili, javob spektri uchun yetishmayotgan massa tuzatmasi, yozuvni masshtablash, boʻgʻinlar uchun qabul mezonlari (dinamik javob yuqorida bor), siz uchun yaratiladigan maydon va shamol yuklari (qavatlardagi seysmik kuchlar [Betonli elementlarni tekshirish va seysmik yuklar yaratish](topic:concrete-and-seismic) boʻlimida), element ofsetlari va faqat choʻzilishga ishlaydigan bogʻlamalar. Qarang: [Hali qurilmagan](topic:not-built-yet).
