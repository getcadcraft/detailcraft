---
title: 0.9 versiyasidagi yangiliklar (avvalroq)
summary: Buyuk Britaniya Blue Book poʻlat oʻlchamlari va teng boʻlmagan burchaklar, bitta PDF toʻplamida har bir detal uchun ishlab chiqarish chizmalari, Mening profillarim maxsus kesimlar uchun, P-Delta va xos chastotalar, ASCE 7 shamol yuklamalari, seysmik maydon va kombinatsiyalar hamda Kuzatish bilan jonli kursorlar.
keywords: yangiliklar 0.9, oldingi reliz, yangiliklar, relizlar tarixi, oʻzgarishlar jurnali, 0.9, Buyuk Britaniya poʻlati, blue book, ub, uc, pfc, shs, rhs, chs, teng boʻlmagan burchak, ishlab chiqarish chizmasi, varaq toʻplami, detal belgisi, pdf, mening profillarim, maxsus profil, P-Delta, ikkinchi tartib, xos chastota, chekli elementlar, modal massa, shamol yuklamasi, asce 7, seysmik, maydon sinfi, usgs, yuklama kombinatsiyalari, lrfd, asd, jonli, kursorlar, kuzatish, odamlar, maslahatlar, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, montaj, kran, yuk jadvali, film, avtopilot, birikmalar, armatura, zichlik, poydevor, toʻshama, karkas, yogʻoch, yengil oʻlchamli, kesish roʻyxati, konstruktivlik, payvand kirishi, yetkazib beruvchi, zaxira, yetkazib berish muddati, nima birinchi buziladi, beton, seysmik, plita, tillar, yordamchi
from: ab0c7f05
---

Bu DetailCraft 0.9 versiyasida 0.8.1 bilan solishtirganda nima oʻzgargani. 0.9 Buyuk Britaniya poʻlat oʻlchamlarini, bitta harakatda har bir detal uchun ishlab chiqarish chizmasini, ramkalar uchun kattaroq {{ui:Tahlil}} yorlig'ini va bir-biringizning kursorlarini koʻrish imkonini beradi.

## Yangi

### Buyuk Britaniya poʻlati va ishlab chiqarish chizmalari

- **Buyuk Britaniya poʻlat oʻlchamlari.** Profil roʻyxatlarida endi Steel for Life Blue Book dan 976 ta oʻlcham bor: UB, UC, PFC, EA, UEA, CHS, SHS va RHS; sovuq shakllantirilgan boʻsh kesimlar alohida turadi (nomlari CF bilan boshlanadi). Nomlar avval oila bilan yoziladi, masalan UB305x165x40 yoki SHS100x100x5.0, va chizmalar aytadigan tarzda yozish ham ishlaydi: 305x165x40 UB, L100x100x10, SHS100x5. Qarang: [Profil katalogi](topic:profile-catalog).
- **Teng boʻlmagan burchaklar.** UEA burchaklari IFC kirish va chiqishda hamda NC fayllarda ikkala tomonini saqlaydi, koʻzgu esa qismning uchlarini almashtiradi.
- **Barcha ishlab chiqarish chizmalari bir vaqtda.** {{ui:Chiqish}} guruhida hech narsa tanlanmagan holda {{ui:Ishlab chiqarish chizmasi}} ni tanlang. Oyna har bir detal belgisini sanaydi, ularning istalganini oldindan koʻrsatadi, {{ui:Hammasini yuklab olish}} esa har bir belgi uchun bitta sahifadan iborat bitta PDF ni saqlaydi, har biri "3-varaq, jami 42" deb nomlanadi. {{ui:PDF yuklab olish}} siz koʻrayotgan bitta varaqni saqlaydi. Kanallar, burchaklar va boʻsh kesimlar endi ham varaq oladi. Qarang: [Ishlab chiqarish chizmalarini yaratish](topic:shop-drawings).
- **Mening profillarim.** Maxsus profilni endi har bir yangi model uchun saqlash mumkin. Maxsus profil shaklida {{ui:Mening profillarimda saqlash}} belgisini qoldiring; undagi {{ui:Mening profillarim}} roʻyxatida {{ui:Saqlash}}, {{ui:Bu yerda ishlatish}} va {{ui:Oʻchirish}} bor. Roʻyxat shu brauzerda saqlanadi (200 tagacha), hisobingizda emas. Qarang: [Plastinalar va profillar](topic:plates-and-profiles).

### Tahlil

- **Ikkinchi tartib (P-Delta).** {{ui:Ishga tushirish}} yonidagi {{ui:Ikkinchi tartib (P-Delta)}} ni belgilang: oʻq kuchlari egilgan ramkada ishlaydi. Plastinkalar va qattiq qavatlar ogohlantirish bilan birinchi tartibda qoladi. Qarang: [Kuchlar, reaksiyalar va egilishlar](topic:frame-analysis).
- **Xos chastotalar.** Natijalar ostidagi {{ui:Chekli elementlar: xos tebranish chastotalari}} bloki shu modelning eng past rejimlarini davr va samarali modal massa bilan topadi hamda rejimni modelda koʻrsatadi. Qarang: [Kuchlar, reaksiyalar va egilishlar](topic:frame-analysis).
- **Shamol yuklamalari va seysmik maydon.** {{ui:Tahlil}} yorlig'ida uchta yangi blok: {{ui:Shamol yuklamalari (ASCE 7 yoʻnalishli usuli)}}, {{ui:Seysmik maydon va tizim (ASCE 7)}} va {{ui:ASCE 7 yuklama kombinatsiyalari}}. Qarang: [Shamol, seysmik maydon va ASCE 7 kombinatsiyalari](topic:wind-seismic-combinations).

### Birgalikda ishlash

- **Kursorlar va ismlar.** Jonli seansda har bir kishining koʻrsatkichi modelda uning ismi va rangi bilan chiziladi, tanlaganlari esa qutiga olinadi.
- **Odamni kuzatish.** Seansda {{ui:Ishtirokchilar}} ni oching va ismda {{ui:Kuzatish}} ni tanlang; koʻrinishingiz ularniki bilan birga siljiydi. Xost {{ui:Hammadan meni kuzatishni soʻrash}} ni tanlashi mumkin. Qarang: [Jonli seansda odamni kuzatish](topic:follow-in-live).

### Har bir ilovada

- Maslahatlar Bootstrap maslahatlari; boshlangʻich maslahat kartasida yopish tugmasi bor; yorliqlar qatorlari sig'masa yon tomonga suriladi; brauzer yorlig'i ochiq hujjat nomini DetailCraft va CadCraft bilan birga koʻrsatadi.

## Tuzatilgan

- Yangi model boshlanganda maxsus profil yoʻqolardi.
- Kanallar, burchaklar va boʻsh kesimlar ishlab chiqarish chizmalari toʻplamida yoʻq edi.

## Haqiqiy cheklovlar

- Shamol, seysmik va chekli elementlar bloklari yordamchi vositalar. Natijalarni muhandisingiz koʻrib chiqadi; bular norma tekshiruvi emas. USGS qidiruvi oʻrnini bosuvchi xizmatda sinalgan, jonli xizmatda emas.
- Chekli elementlar va P-Delta qoʻlda hamda yopiq shakldagi javoblar bilan tekshirilgan, haqiqiy bino bilan emas. Bo'ylama egilish tahlili qurilmagan.
- Hali hech bir Buyuk Britaniya ishlab chiqaruvchisi Buyuk Britaniya oʻlchamlarini sinamagan; teng boʻlmagan burchaklar uchun NC fayllari hali mashinada ishlamagan.
- Ishlab chiqarish chizmalari toʻplami faqat PDF.
- Ingliz tilidan boshqa tillar mashina qoralamasi.
- Windows oʻrnatuvchilari kod bilan imzolanmagan (Batafsil maʼlumot, soʻng Baribir ishga tushirish); macOS disk tasviri notarizatsiyadan oʻtmagan (sichqonchaning oʻng tugmasi, soʻng Ochish).

Oldingi oʻzgarishlar bu sahifaning pastidagi 0.8 va 0.8.1 yozuvlarida.

## Oldinroq: 0.8 va 0.8.1

Bu DetailCraft 0.8 (2026-yil 1-noyabr) va 0.8.1 (2026-yil 2-noyabr) versiyalarida 0.7 bilan solishtirganda nima oʻzgargani. 0.7 poʻlat elementlarni tekshirgan; 0.8 koʻtarishlarni rejalashtiradi, birikmalarni taklif qiladi, poydevorlar va armaturani tekshiradi hamda yogʻoch va yengil oʻlchamli devorlar, toʻshamalar va tomlarni karkasga soladi.

### Yangi

**Montaj**

- **Montaj rejasi va film.** {{ui:Montaj}} yorlig'ida kranni tasvirlab bering (qayerda turadi, eng yuqori ilgagi, yuk jadvalida yoʻq bogʻlash vositalari) va uning yuk jadvali qatorlarini kiriting. DetailCraft modelni bir vaqtda bitta yigʻma bilan, bosqichlar tartibida va qatlam-qatlam koʻtaradi hamda har bir koʻtarishni jadvalga, uning radiusida va siz belgilagan zaxira boʻyicha tekshiradi. {{ui:Videoni saqlash}} bitta HTML fayl yozadi, u istalgan brauzerda, telefonda ham, oflaynda ishlaydi. Jadvaldan oshgan, undan oʻtgan yoki juda baland koʻtarishlar {{ui:Muammolar}} da. Bu sizning raqamlaringizdan tuzilgan reja, koʻtarish rejasi emas. Qarang: [Montaj rejasi va film](topic:erection-movie).

**Birikmalar**

- **Birikma avtopiloti.** {{ui:Avtopilot}} yorlig'i birikmasi boʻlmagan har bir tugunni koʻradi va shakllarga qarab taklif qiladi: asos plastinalari, kesish qanotlari, moment balkalari deb belgilagan balkalar uchun uchlik plastinalar, ulash joylari va boʻgʻin plastinalari. Bir tekis yuklama yoki bitta uchdagi kesish kuchini bering, bolt soni boltning loyiha mustahkamligiga bogʻliq boʻladi. {{ui:Hammasini qoʻshish}} takliflarni bitta bekor qilish qadami sifatida qoʻshadi. Bular koʻrib chiqiladigan boshlangʻich qiymatlar, birikma loyihasi emas.
- **Qurilish tekshiruvlari.** {{ui:Muammolar}} kalit yetmaydigan bolt, soket uchun juda yaqin boltlar, oʻlcham chegaralaridan tashqari burchakli payvandlar va suv ushlaydigan boʻsh kesimlar uchun. Payvand kirishi yangi: payvandchi gorelkasi yetmaydigan toʻliq burchakli payvand roʻyxatga olinadi, yoʻldagi detal va taʼsirlangan payvand ulushi bilan. Qarang: [Qurilish tekshiruvlari](topic:constructability).

**Poydevorlar va armatura**

- **Poydevor tekshiruvlari.** {{ui:Poydevor}} yorlig'i sizning tavsifingizdagi tuproqqa tayanib poydevorlar, birlashgan poydevorlar va toʻshamalarni tekshiradi: xizmat yuklamalaridan tayanch bosimi, siljish va agʻdarilish; koeffitsiyentlangan yuklamalardan egilish, kesish, teshilish, yetarlilik va minimal armatura (ACI 318-19). Chekkaga yoki burchakka yaqin ustun poydevor chekkasi kesgan kesim bilan tekshiriladi. Choʻkish tuproq modulidan olinadi; egiluvchan toʻshama tagzamin moduli asosidagi prujinalarda yechiladi; qoziq guruhlari va ushlab turuvchi devorlar oʻz panellariga ega. Ustun yuklamalari kiritilishi yoki {{ui:Tahlil}} dan olinishi mumkin. Qarang: [Poydevor tekshiruvlari](topic:foundation-checks).
- **Armatura zichligi xaritasi.** {{ui:Zichlik}} yorlig'i har bir poydevorning tepadan koʻrinishi boʻyicha issiqlik xaritasini chizadi: armatura betonga pastga tushish uchun juda kam joy qoldiradigan joylar, sof oraliq qoidasiga va agar bersangiz, eng katta toʻldiruvchi hamda vibrator uchi oʻlchamiga qarshi. Qarang: [Armatura zichligi xaritasi](topic:rebar-congestion).

**Karkas va taʼminot**

- **Yogʻoch va yengil oʻlchamli karkas.** {{ui:Karkas}} yorlig'i devor, toʻshama va tom panellarini har bir boʻlagi, kesish roʻyxati, sotib olinadigan zaxira va masshtabli ishlab chiqarish chizmasi bilan karkasga soladi. {{ui:Elementlar sifatida joylashtirish}} boʻlaklarni modelga qoʻyadi, {{ui:PDF varaqlar}} esa har bir panel uchun bitta varaq saqlaydi. Oʻlchamlar, oraliqlar va tirgaklar sizniki: DetailCraft ularning yukni koʻtarishini tekshirmaydi. Qarang: [Yogʻoch va yengil oʻlchamli karkas panellari](topic:framing-panels).
- **Yetkazib beruvchi zaxirasi va yetkazib berish muddati.** {{ui:Taʼminot}} yorlig'i yetkazib beruvchining zaxira roʻyxatini (CSV) oʻqiydi va kesish roʻyxati sotib oladigan har bir kesim uchun yetarli zaxira bor-yoʻqligini hamda kutish qancha ekanini koʻrsatadi. Kam va kechikkan kesimlar {{ui:Muammolar}} da. Hech narsa buyurtma qilinmaydi. Qarang: [Yetkazib beruvchi zaxirasi va yetkazib berish muddati](topic:supplier-stock).

**Tahlil va loyihalash**

- **Nima birinchi buziladi?** {{ui:Tahlil}} yorlig'ida tugma hukmron mustahkamlik kombinatsiyasini, eng zaif elementni, birinchi element chegarasiga yetguncha yuklar qanchaga oshishi mumkinligini va bolt kesish mustahkamligi ma'lum boʻlgan joydagi eng zaif uchlik plastina yoki kesish qanotini topadi. Avval kombinatsiyalar va loyihalash normasi kerak. Tayanch bosimi, blok kesish, payvandlar va ajralish tekshirilmaydi. Ulangan yordamchingiz ham xuddi shunday soʻrashi mumkin.
- **Jonli.** {{ui:Jonli: har bir tahrirdan keyin qayta yechish}} ni belgilang va har bir tahrirdan keyin ramka qayta yechiladi.
- **Beton va boshqalar.** Siljimaydigan ramkadagi ingichka ustun kattalashtirilgan moment uchun loyihalanadi (ACI 318-19 6.6.4.5). Seysmik davrni Rayleigh usuli bilan tahlildan olish mumkin. Plastinalardan yasalgan toʻshama har bir qatlamga kerak boʻlgan poʻlatni oʻz momentlaridan va bir yoʻnalishli kesishdan oladi. Qarang: [Beton elementlarni tekshirish va seysmik yuklamalarni yaratish](topic:concrete-and-seismic).
- **Muhandis tekshirishi uchun.** Poydevor, beton va Nima birinchi buziladi? natijalari yordamchi vositalar. Shamol yuklamalari qurilmagan.

**Har bir ilovada**

- **Tillar.** Yordam 54 tilda. Ingliz tilidan boshqalari ona tilida soʻzlovchi oʻqib chiqmaguncha mashina qoralamasi hisoblanadi; oʻntasi yangi (litva, latviy, bosniy, marathi, telugu, alban, afrikaans, filippin, suahili, oʻzbek).
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} oʻrash, 2 qator yoki 1 qatorni tanlaydi. Allaqachon sigʻadigan panel oʻz holicha qoladi; qolganlari yon tomonga suriladi.
- **Xususiyatlar jadvali.** Poydevorning maydonlari umumiy jadvalni ishlatadi: yig'iladigan kategoriyalar va ixcham zichlik. 2*450 kabi terilgan arifmetika ham ishlaydi.
- **Kiritish qurilmalari.** Sensorli panel, qalam, 3D sichqoncha, boshqaruvchi va MIDI ilovalarni boshqarishi mumkin. Qarang: [3D da harakatlanish](topic:navigate-3d).
- **Muammolar paneli.** Yuqoridagi yangi tekshiruvlarning ogohlantirishlari oldingidek bir xil {{ui:Muammolar}} panelida chiqadi.
- **AI yordamchingizni ulang.** Oʻzingizning yordamchingiz, CadCraft Studio orqali ulangan, barcha sakkizta ilova bilan ishlaydi va faqat siz ruxsat bergan narsani koʻradi. Bir bosishda ulanish, xostdagi ulagich va Studio dagi oʻz API kalitingiz hali tayyor emas. Qarang: [DetailCraft ni AI yordamchi bilan ishlatish](topic:use-with-ai-assistants).

### 0.8.1 da tuzatilgan

- **Studio dagi tillar.** Studio va qadoqlangan nashrlar ish vaqtida tilni almashtirishi mumkin; oldin faqat ingliz tili edi. U hali har bir platformada sinalmagan: til oʻzgarmasa xabar bering.
- **Kesishuvchi oyna tanlovi.** 0.8.1 oʻrnatuvchilari oyna bilan tanlash xatti-harakatini 0.8 veb-versiyasida allaqachon toʻgʻri qilgan; eskiroq oʻrnatuvchi unday emas edi.
- **Portret rejimidagi planshetlar.** Boʻsh panel balandligi kanvasga beriladi, varaq tartibi esa 760 px yoki undan kichik boʻlganda boshlanadi.

### Bu versiyada hali yoʻq

- **NC ni stanokka yuborish** hali chiqarilmagan.
- **Betonga shamol yuklamalari** qurilmagan; beton va poydevor tekshiruvlari muhandis koʻrib chiqishi uchun.
- **Kod imzolash.** Windows oʻrnatuvchilari va macOS .dmg imzolanmagan, shuning uchun Windows ogohlantirishi mumkin, macOS esa sichqonchaning oʻng tugmasi, soʻng Ochish ni soʻraydi.

Oldingi oʻzgarishlar [0.7 yangiliklarida](topic:whats-new-0-7).
