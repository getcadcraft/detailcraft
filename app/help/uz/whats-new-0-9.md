---
title: 0.9 versiyasidagi yangiliklar
summary: Buyuk Britaniya po‘lat o‘lchamlari (Blue Book) va teng bo‘lmagan burchaklar, har bir detal uchun ishlab chiqarish chizmalari bitta PDF to‘plamida, maxsus profillar uchun Mening profillarim, P-Delta va xos chastotalar, ASCE 7 shamol yuklamalari, seysmik maydon va kombinatsiyalar, hamda Kuzatish bilan jonli kursorlar.
keywords: yangiliklar, nima yangi, nashr eslatmalari, o‘zgarishlar jurnali, 0.9, buyuk britaniya po‘lati, blue book, ub, uc, pfc, shs, rhs, chs, teng bo‘lmagan burchak, ishlab chiqarish chizmasi, chizmalar to‘plami, detal belgisi, pdf, mening profillarim, maxsus profil, p-delta, ikkinchi tartib, tabiiy chastota, chekli elementlar, massa, shamol yuklamasi, asce 7, seysmik, maydon sinfi, usgs, yuklama kombinatsiyalari, lrfd, asd, jonli, kursor, kuzatish, odamlar, maslahatlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, montaj, kran, yuk jadvali, video, avtopilot, ulanishlar, armatura, zichlik, poydevor, tayanch, cho‘kish, karkas, yog‘och, yengil po‘lat, kesish ro‘yxati, qurilish qulayligi, payvand kirishi, yetkazib beruvchi, zaxira, yetkazib berish muddati, nima birinchi buziladi, beton, yordamchi
from: 4c95a2de
---

Bu DetailCraft 0.9 versiyasida 0.8.1 bilan solishtirganda nima o‘zgargani. 0.9 versiyasida Buyuk Britaniya po‘lat o‘lchamlari, bir marta bosishda har bir detal uchun ishlab chiqarish chizmasi, karkaslar uchun kengaygan {{ui:Tahlil}} yorlig‘i va birgalikda ishlaganda bir-birining kursorini ko‘rish imkoniyati paydo bo‘ldi.

## Yangi

### Buyuk Britaniya po‘lati va ishlab chiqarish chizmalari

- **Buyuk Britaniya po‘lat o‘lchamlari.** Profil ro‘yxatlarida Steel for Life Blue Book’dan 976 ta o‘lcham bor: UB, UC, PFC, EA, UEA, CHS, SHS va RHS, sovuq shakllangan quvur kesimlari esa alohida (nomi CF bilan boshlanadi). Nomlar avval oila bo‘yicha yoziladi, masalan UB305x165x40 yoki SHS100x100x5.0, chizmalarda aytilganidek yozish ham ishlaydi: 305x165x40 UB, L100x100x10, SHS100x5. Qarang: [Profil katalogi](topic:profile-catalog).
- **Teng bo‘lmagan burchaklar.** UEA burchaklari IFC kirish va chiqishda, shuningdek NC fayllarda ikkala qirrasini saqlaydi, va ko‘zgu buyumning uchini teskari aylantiradi.
- **Barcha ishlab chiqarish chizmalari bir vaqtda.** Hech narsa tanlanmagan holda {{ui:Chiqish}} guruhidagi {{ui:Ishlab chiqarish chizmasi}} tugmasini tanlang. Oynada har bir detal belgisi ro‘yxatga olinadi, ularning istalganini oldindan ko‘rish mumkin va {{ui:Hammasini yuklab olish}} har bir belgi uchun bir sahifadan iborat bitta PDF saqlaydi, sahifa sarlavhasi «Varaq 3 / 42» ko‘rinishida bo‘ladi. {{ui:PDF yuklab olish}} ko‘rib turgan bitta varaqni saqlaydi. Kanallar, burchaklar va quvur kesimlari endi ham varaqlarga ega. Qarang: [Ishlab chiqarish chizmalarini yaratish](topic:shop-drawings).
- **Mening profillarim.** Maxsus profilni endi har bir yangi model uchun saqlab qo‘yish mumkin. Maxsus profil shaklida {{ui:Mening profillarimda saqlash}} belgisini qoldiring; uning ostidagi {{ui:Mening profillarim}} ro‘yxatida {{ui:Saqlash}}, {{ui:Bu yerda ishlatish}} va {{ui:O‘chirish}} bor. Ro‘yxat hisobingizda emas, aynan shu brauzerda saqlanadi (200 tagacha). Qarang: [Plastinalar va profillar](topic:plates-and-profiles).

### Tahlil

- **Ikkinchi tartib (P-Delta).** {{ui:Tahlil}} yorlig‘ida Hisoblash tugmasi yonidagi {{ui:Ikkinchi tartib (P-Delta)}} belgisini qo‘ysangiz, o‘q kuchlari egilgan karkasga ta’sir qiladi. Plastinalar va qattiq qavatlar birinchi tartibda qoladi va ogohlantirish chiqadi. Qarang: [Kuchlar, reaksiyalar va egilishlar](topic:frame-analysis).
- **Tabiiy chastotalar.** Natijalar ostidagi {{ui:Chekli elementlar: xos tebranish chastotalari}} bloki o‘sha modelning eng past rejimlarini topadi, davr va samarali modal massani ko‘rsatadi hamda rejimni modelda ko‘rsatadi. Qarang: [Kuchlar, reaksiyalar va egilishlar](topic:frame-analysis).
- **Shamol yuklamalari va seysmik maydon.** {{ui:Tahlil}} yorlig‘ida uchta yangi blok bor: {{ui:Shamol yuklamalari (ASCE 7 yo‘nalishli usuli)}}, {{ui:Seysmik maydon va tizim (ASCE 7)}} va {{ui:ASCE 7 yuklama kombinatsiyalari}}. Qarang: [Shamol, seysmik maydon va ASCE 7 kombinatsiyalari](topic:wind-seismic-combinations).

### Birgalikda ishlash

- **Kursorlar va ismlar.** Jonli seansda har bir ishtirokchining ko‘rsatkichi ismi va rangi bilan modelda chiziladi, tanlagan narsasi esa quti bilan belgilanadi.
- **Odamni kuzatish.** Seansda {{ui:Ishtirokchilar}} oynasini oching va ismning yonidagi {{ui:Kuzatish}} tugmasini tanlang; sizning ko‘rinishingiz ularniki bilan birga siljiydi. Xost {{ui:Hammadan meni kuzatishni so‘rash}} tugmasini tanlashi mumkin. Qarang: [Jonli seansda odamni kuzatish](topic:follow-in-live).

### Barcha ilovalarda

- Maslahat oynalari Bootstrap maslahatlari bo‘ldi, boshlang‘ich maslahat kartasida yopish tugmasi bor, yorliqlar qatori sig‘masa yon tomonga aylanadi va brauzer yorlig‘ida ochiq hujjat nomi, keyin DetailCraft va CadCraft ko‘rinadi.

## Tuzatildi

- Yangi model boshlanganda maxsus profil yo‘qolardi.
- Ishlab chiqarish chizmalari to‘plamida kanallar, burchaklar va quvur kesimlari yo‘q edi.

## Haqqoniy cheklovlar

- Shamol, seysmik va chekli elementlar bloklari tekshiruv vositalari. Natijalarni muhandisingiz ko‘rib chiqadi; ular normalar bo‘yicha tekshiruv emas. USGS qidiruvi haqiqiy xizmatda emas, sinov o‘rnida tekshirilgan.
- Chekli elementlar va P-Delta qo‘lda hisoblash va yopiq shakldagi javoblar bilan tekshirilgan, haqiqiy bino bilan emas. Ustuvorlikni yo‘qotish tahlili hali yaratilmagan.
- Hech bir Buyuk Britaniya po‘lat ishlab chiqaruvchisi hali UK o‘lchamlarini sinab ko‘rmagan, teng bo‘lmagan burchaklar uchun NC fayllar esa hali mashinada ishlatilmagan.
- Ishlab chiqarish chizmalari to‘plami faqat PDF formatida.
- Ingliz tilidan tashqari tillar mashina qoralamalari.
- Windows o‘rnatuvchilari kod bilan imzolanmagan (Batafsil, keyin Baribir ishga tushirish); macOS disk tasviri notarizatsiyadan o‘tmagan (sichqonchaning o‘ng tugmasi, keyin Ochish).

Oldingi o‘zgarishlar sahifada pastroqdagi 0.8 va 0.8.1 eslatmalarida.

## Oldingisi: 0.8 va 0.8.1

Bu DetailCraft 0.8 (2026-yil 1-noyabr) va 0.8.1 (2026-yil 2-noyabr) versiyalarida 0.7 bilan solishtirganda nima o‘zgargani. 0.7 po‘lat elementlarni tekshirgan; 0.8 esa ko‘tarishlarni rejalashtiradi, ulanishlarni taklif qiladi, poydevorlar va armaturani tekshiradi hamda yog‘och va yengil po‘lat devorlar, qavatlar va tomlarni karkas qiladi.

### Yangi

**Montaj**

- **Montaj rejasi va video.** {{ui:Montaj}} yorlig‘ida kranni tavsiflang (qayerda turishi, eng yuqori ilgagi, jadvalda yo‘q bog‘lama vositalar) va uning yuk jadvali qatorlarini kiriting. DetailCraft modelni yig‘ma bo‘yicha, bosqich tartibida va qatlam-qatlam ko‘taradi hamda har bir ko‘tarishni radiusida jadval bilan va siz belgilagan zaxira bilan tekshiradi. {{ui:Videoni saqlash}} bitta HTML fayl yozadi, u istalgan brauzerda, telefonda ham, oflayn ijro etiladi. Jadvaldan yuqori, undan o‘tgan yoki juda baland ko‘tarishlar {{ui:Muammolar}} ro‘yxatida. Bu sizning raqamlaringizdan tuzilgan reja, ko‘tarish rejasi emas. Qarang: [Montaj rejasi va video](topic:erection-movie).

**Ulanishlar**

- **Ulanish avtopiloti.** {{ui:Avtopilot}} yorlig‘i ulanishi bo‘lmagan har bir bo‘g‘inni ko‘rib chiqadi va shakllariga qarab taklif beradi: tayanch plastinalari, kesish plastinkalari, siz moment balkalari deb belgilagan balkalar uchun uchlik plastinalar, ulash va tirgaklar. Tekis yuklama yoki bir uchdagi kesish kuchini bering, bolt soni boltning loyihaviy mustahkamligiga qarab chiqadi. {{ui:Hammasini qo‘shish}} takliflarni bitta bekor qilish qadamida qo‘shadi. Ular ko‘rib chiqish uchun boshlang‘ich qiymatlar, ulanish loyihasi emas.
- **Qurilish tekshiruvlari.** {{ui:Muammolar}} ichida kalit yeta olmaydigan bolt, kalit uchun juda yaqin boltlar, o‘lchami chegarasidan tashqari burchak payvandlar va suv ushlab turadigan quvur kesimlari. Payvand kirishi yangi: payvandchining mash’ali yeta olmaydigan barcha tomonlama burchak payvand to‘siq bo‘lgan detal va payvandning ta’sirlangan ulushi bilan ro‘yxatga olinadi. Qarang: [Qurilish tekshiruvlari](topic:constructability).

**Poydevorlar va armatura**

- **Poydevor tekshiruvlari.** {{ui:Poydevor}} yorlig‘i siz tasvirlagan tuproqda tayanchlarni, birlashgan tayanchlarni va plitalarni tekshiradi: xizmat yuklamalaridan tayanch, siljish va ag‘darilish; hisobiy yuklamalardan egilish, kesish, teshilish, mustahkamlash va minimal po‘lat (ACI 318-19). Chekka yoki burchakdagi ustun poydevor chetining kesimi bilan tekshiriladi. Cho‘kish tuproqning modulidan olinadi, moslashuvchan plita prujinalarda, tayanch moduli bo‘yicha yechiladi, ustunlar guruhlari va tirgak devorlar o‘z panellariga ega. Ustun yuklarini yozish yoki {{ui:Tahlil}} dan olish mumkin. Qarang: [Poydevor tekshiruvlari](topic:foundation-checks).
- **Armatura zichligi xaritasi.** {{ui:Zichlik}} yorlig‘i har bir poydevorning yuqoridan ko‘rinishini issiqlik xaritasi sifatida chizadi: armatura betonning pastga o‘tishi uchun juda kam joy qoldirgan joylar, toza oraliq qoidasi bo‘yicha va agar kiritsangiz, eng yirik to‘ldiruvchi va vibratorning boshi hisobga olinadi. Qarang: [Armatura zichligi xaritasi](topic:rebar-congestion).

**Karkas va ta’minot**

- **Yog‘och va yengil po‘lat karkas.** {{ui:Karkas}} yorlig‘i devor, qavat va tom panellarini har bir bo‘lak, kesish ro‘yxati, sotib olinadigan zaxira va masshtabli ishlab chiqarish chizmasi bilan karkas qiladi. {{ui:Elementlar sifatida joylashtirish}} bo‘laklarni modelga qo‘yadi, {{ui:PDF varaqlar}} har bir panel uchun bitta varaq saqlaydi. O‘lchamlar, oraliq va yuqori qismlar sizniki: DetailCraft ular yukni ko‘tarishini tekshirmaydi. Qarang: [Yog‘och va yengil po‘lat karkas panellari](topic:framing-panels).
- **Yetkazib beruvchi zaxirasi va yetkazib berish muddatlari.** {{ui:Taʼminot}} yorlig‘i yetkazib beruvchining zaxira ro‘yxatini (CSV) o‘qiydi va kesish ro‘yxati sotib oladigan har bir kesim uchun zaxirada yetarlimi va kutish qancha davom etishini ko‘rsatadi. Yetishmovchiliklar va kechikkan kesimlar {{ui:Muammolar}} ichida. Hech narsa buyurtma qilinmaydi. Qarang: [Yetkazib beruvchi zaxirasi va yetkazib berish muddatlari](topic:supplier-stock).

**Tahlil va loyihalash**

- **Nima birinchi buziladi?** {{ui:Tahlil}} yorlig‘ida tugma hukmron mustahkamlik kombinatsiyasini, eng zaif elementni, birinchi element chegarasiga yetguncha yuklar qanchaga oshishi mumkinligini va bolt kesish mustahkamligi ma’lum bo‘lgan joydagi eng zaif uchlik plastinani yoki kesish plastinkasini topadi. Avval kombinatsiyalar va loyihalash kodi kerak. Ezilish, blok kesish, payvandlar va ajralish tekshirilmaydi. Ulangan yordamchingiz ham shuni so‘rashi mumkin.
- **Jonli.** {{ui:Jonli: har bir tahrirdan keyin qayta yechish}} belgisini qo‘ysangiz, har bir tahrirdan keyin karkas qayta yechiladi.
- **Beton va boshqalar.** Siljimaydigan karkasdagi ingichka ustun kattalashgan momenti bo‘yicha loyihalanadi (ACI 318-19 6.6.4.5). Seysmik davrni tahlildan Reley usuli bilan olish mumkin. Plastinalardan tuzilgan plita har bir qatlamga kerakli po‘latni momentlaridan va bir yo‘nalishli kesishdan oladi. Qarang: [Beton elementlarni tekshirish va seysmik yuklamalarni yaratish](topic:concrete-and-seismic).
- **Muhandis tekshirishi uchun.** Poydevor, beton va Nima birinchi buziladi? natijalari yordamchi vositalar. Shamol yuklamalari hali yaratilmagan.

**Barcha ilovalarda**

- **Tillar.** Yordam 54 tilda. Ingliz tilidan tashqari tillar ona tilida so‘zlashuvchi o‘qib chiqquncha mashina qoralamalari; o‘nta yangi til bor (litva, latviya, bosniya, marathi, telugu, alban, afrikaans, filippin, suahili, o‘zbek).
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} bo‘limi o‘rashni, 2 qator yoki 1 qatorni tanlaydi. Allaqachon sig‘adigan panel o‘z holicha qoladi; qolganlari yon tomonga aylanadi.
- **Xususiyatlar jadvali.** Poydevor maydonlari umumiy jadvaldan foydalanadi: yig‘iladigan bo‘limlar va ixcham zichlik. 2*450 kabi kiritilgan arifmetika ham ishlaydi.
- **Kiritish qurilmalari.** Sensorli panel, qalam, 3D sichqoncha, boshqaruvchi va MIDI ilovalarni boshqarishi mumkin. Qarang: [3D da harakatlanish](topic:navigate-3d).
- **Muammolar oynasi.** Yuqoridagi yangi tekshiruvlarning ogohlantirishlari avvalgidek bir xil {{ui:Muammolar}} oynasida chiqadi.
- **Sun’iy intellektni ulang.** CadCraft Studio orqali ulangan o‘z yordamchingiz sakkizta ilovaning hammasi bilan ishlaydi va faqat ruxsat bergan narsalarni ko‘radi. Bir bosishda ulash, Studio’dagi xosting ulagichi va o‘z API kalitingiz hali tayyorlanmoqda. Qarang: [DetailCraft’ni sun’iy intellekt yordamchisi bilan ishlatish](topic:use-with-ai-assistants).

### 0.8.1 da tuzatildi

- **Studio’da tillar.** Studio va qadoqlangan nashrlar ish vaqtida tilni almashtira oladi; ilgari faqat ingliz tilida edi. Hali har bir platformada sinalmagan: til o‘zgarmasa, xabar bering.
- **Oyna bilan tanlash.** 0.8.1 o‘rnatuvchilarida oyna bilan tanlash xulqi 0.8 veb-versiyasida allaqachon to‘g‘ri edi; eski o‘rnatuvchida bunday emas edi.
- **Portret rejimidagi planshetlar.** Bo‘sh panel balandligi chizma maydoniga beriladi va varaq joylashuvi 760 px yoki kamroq kengliklarda boshlanadi.

### Bu versiyada hali yo‘q

- **NC ni mashinaga yuborish** chiqarilmagan.
- **Betonga shamol yuklamalari** yaratilmagan; beton va poydevor tekshiruvlari muhandis ko‘rib chiqishi uchun.
- **Kod bilan imzolash.** Windows o‘rnatuvchilari va macOS .dmg imzolanmagan, shuning uchun Windows ogohlantirishi mumkin, macOS esa sichqonchaning o‘ng tugmasi, keyin Ochish ni so‘raydi.

Oldingi o‘zgarishlar [0.7 dagi yangiliklarda](topic:whats-new-0-7).
