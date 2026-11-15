---
title: 0.8 va 0.8.1 versiyasidagi yangiliklar
summary: Kranning yuk jadvalidan montaj filmi, ulanish avtopiloti, armatura zichligi xaritasi, poydevor tekshiruvlari, yogʻoch va engil profil karkas panellari, yigʻishga yaroqlilik va payvandga kirish tekshiruvlari, taʼminotchi zaxirasi, avval nima buzilishi, jonli qayta yechish, beton uchun qoʻshimcha tekshiruvlar va 0.8.1 tuzatishlari.
keywords: yangiliklar, nima yangi, relizlar, oʻzgarishlar jurnali, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, montaj, kran, yuk jadvali, film, avtopilot, ulanishlar, armatura, zichlik, poydevor, toʻr, choʻkish, karkas, yogʻoch, engil profil, kesish roʻyxati, yigʻishga yaroqlilik, payvand, kirish, zaxira, yetkazib berish muddati, avval nima buziladi, jonli, beton, seysmik, plita, tillar, yordamchi
from: 6e33e052
---

Bu DetailCraft 0.7 bilan solishtirganda 0.8 (2026-yil 1-noyabr) va 0.8.1 (2026-yil 2-noyabr) versiyalarida nima oʻzgarganini koʻrsatadi. 0.7 poʻlat elementlarni tekshirgan; 0.8 koʻtarishlarni rejalashtiradi, ulanishlarni taklif qiladi, poydevorlar va armaturani tekshiradi hamda yogʻoch va engil profilli devorlar, qavatlar va tomlarni karkas qilib beradi.

## Yangi

### Montaj

- **Montaj rejasi va filmi.** {{ui:Erection}} yorligʻida kranni taʼriflang (qayerda turishi, eng yuqori ilgʻagi, yuk jadvalida boʻlmagan osmalari) va uning yuk jadvalidagi qatorlarni kiriting. DetailCraft modelni bir vaqtda bitta yigʻma boʻyicha, bosqich tartibida va qavatma-qavat koʻtaradi hamda har bir koʻtarishni uning radiusidagi jadval va siz belgilagan zaxira bilan tekshiradi. {{ui:Videoni saqlash}} har qanday brauzerda, telefonda ham, oflaynda ijro etiladigan bitta HTML faylni yozadi. Jadvaldan ortiq, undan oshgan yoki juda baland koʻtarishlar {{ui:Muammolar}} ichida. Bu sizning raqamlaringizdan tuzilgan reja, koʻtarish rejasi emas. Qarang: [Montaj rejasi va filmi](topic:erection-movie).

### Ulanishlar

- **Ulanish avtopiloti.** {{ui:Avtopilot}} yorligʻi har bir ulanishsiz boʻgʻinni koʻrib chiqadi va shakllaridan kelib chiqib bittasini taklif qiladi: tayanch plastinalar, kesish plastinkalari, moment toʻsinlari sifatida belgilagan toʻsinlar uchun uchlik plastinalar, ulashlar va gusetlar. Bir tekis yuk yoki bir uchdagi kesuvchi kuchni bering — boltlar soni boltning loyiha mustahkamligiga qarab hisoblanadi. {{ui:Hammasini qoʻshish}} takliflarni bitta qaytarish bosqichi sifatida qoʻshadi. Bular koʻrib chiqiladigan boshlangʻich qiymatlar, ulanish loyihasi emas.
- **Konstruktiv tekshiruvlar.** {{ui:Muammolar}} — kalit yeta olmaydigan bolt, soket uchun juda yaqin boltlar, oʻlcham chegarasidan tashqari burchak payvandlari va suv ushlab turadigan boʻsh kesimlar uchun. Payvandga kirish yangi: butun atrof boʻylab burchak payvandiga payvandchi mash'alasi yetolmasa, toʻsqinlik qilayotgan detal va payvandning taʼsirlangan ulushi bilan roʻyxatga kiritiladi. Qarang: [Konstruktiv tekshiruvlar](topic:constructability).

### Poydevorlar va armatura

- **Poydevor tekshiruvlari.** {{ui:Foundation}} yorligʻi siz tavsiflagan tuproqda poydevorlar, birlashtirilgan poydevorlar va toʻrlarni tekshiradi: xizmat yuklaridan tayanch, siljish va agʻdarilish; hisobiy yuklardan egilish, kesish, teshib oʻtish, rivojlanish va minimal poʻlat (ACI 318-19). Chekka yoki burchak yaqinidagi ustun poydevor chekkasi kesib qoʻygan kesim bilan tekshiriladi. Choʻkish tuproqning modulidan olinadi, egiluvchan toʻr esa pastki qatlam moduli boʻyicha prujinalarda hisoblanadi; svaya guruhlari va tayanch devorlarning oʻz paneli bor. Ustun yuklarini qoʻlda kiritish yoki {{ui:Tahlil}} dan olish mumkin. Qarang: [Poydevor tekshiruvlari](topic:foundation-checks).
- **Armatura zichligi xaritasi.** {{ui:Congestion}} yorligʻi har bir poydevorning tepadan koʻrinishdagi issiqlik xaritasini chizadi: armatura betonning pastga tushishi uchun juda kam joy qoldirgan joylarni koʻrsatadi — toza oraliq qoidasi va, agar kiritsangiz, eng katta toʻldiruvchi hamda vibrator uchi boʻyicha. Qarang: [Armatura zichligi xaritasi](topic:rebar-congestion).

### Karkas va taʼminot

- **Yogʻoch va engil profilli karkas.** {{ui:Framing}} yorligʻi devor, qavat va tom panellarini har bir boʻlagi, kesish roʻyxati, sotib olinadigan material va masshtabli ishlab chiqarish chizmasi bilan karkas qiladi. {{ui:Elementlar sifatida joylashtirish}} boʻlaklarni modelga qoʻyadi, {{ui:PDF varaqlar}} har bir panel uchun bitta varaq saqlaydi. Oʻlchamlar, oraliqlar va boʻyinturuqlar sizniki: DetailCraft ular yukni koʻtarishini tekshirmaydi. Qarang: [Yogʻoch va engil profilli karkas panellari](topic:framing-panels).
- **Taʼminotchi zaxirasi va yetkazib berish muddatlari.** {{ui:Taʼminot}} yorligʻi taʼminotchining zaxira roʻyxatini (CSV) oʻqiydi va kesish roʻyxati sotib oladigan har bir kesim uchun zaxirada yetarli-yetarli emasligini hamda kutish qancha davom etishini koʻrsatadi. Yetishmovchiliklar va kech keladigan kesimlar {{ui:Muammolar}} ichida. Hech narsa buyurtma qilinmaydi. Qarang: [Taʼminotchi zaxirasi va yetkazib berish muddatlari](topic:supplier-stock).

### Tahlil va loyihalash

- **Avval nima buziladi?** {{ui:Tahlil}} yorligʻidagi tugma hukmron yuk kombinatsiyasini, eng zaif elementni, birinchi element chegarasiga yetguncha yuklar qancha oshishi mumkinligini va boltlarining kesish mustahkamligi maʼlum boʻlgan eng zaif uchlik plastinani yoki kesish plastinkasini topadi. Buning uchun avval kombinatsiyalar va loyiha kodi kerak. Tayanch, blok kesish, payvandlar va tortilish tekshirilmaydi. Ulangan yordamchingiz ham shuni soʻrashi mumkin.
- **Jonli.** {{ui:Jonli: har bir tahrirdan keyin qayta yechish}} ni belgilang — har bir tahrirdan keyin karkas qayta yechiladi.
- **Beton, yana.** Siljimaydigan karkasdagi ingichka ustun kuchaytirilgan momenti uchun loyihalanadi (ACI 318-19 6.6.4.5). Seysmik davrni Reley usuli bilan tahlildan olish mumkin. Plastinalardan yasalgan plita har bir qatlamga kerak boʻlgan poʻlatni momentlaridan va bir yoʻnalishli kesishdan oladi. Qarang: [Beton elementlarini tekshirish va seysmik yuklar](topic:concrete-and-seismic).
- **Muhandis tekshiruvi uchun.** Poydevor, beton va "Avval nima buziladi?" natijalari yordamchi vositalar. Shamol yuklari hali qurilmagan.

### Har bir ilovada

- **Tillar.** Yordam 54 tilda. Ingliz tilidan boshqalari ona tilida oʻquvchi oʻqib chiqmaguncha mashina qoralamalari; oʻnta yangisi: litva, latish, bosniy, marathi, telugu, alban, afrikaans, filippin, suahili va oʻzbek.
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} oʻrash, 2 qator yoki 1 qatorni tanlaydi. Allaqachon sigʻadigan panel oʻz holatida qoladi; qolganlari yon tomonga aylantiriladi.
- **Xususiyatlar jadvali.** Poydevor maydonlari umumiy jadvaldan foydalanadi: yigʻiladigan kategoriyalar va ixcham zichlik. 2*450 kabi yozilgan arifmetika hamon ishlaydi.
- **Kiritish qurilmalari.** Sensorli panel, qalam, 3D sichqoncha, boshqaruvchi va MIDI ilovalarni boshqarishi mumkin. Qarang: [3D da harakatlanish](topic:navigate-3d).
- **Muammolar paneli.** Yuqoridagi yangi tekshiruvlarning ogohlantirishlari avvalgidek bir xil {{ui:Muammolar}} panelida chiqadi.
- **AI yordamchingizni ulang.** Oʻzingiz tanlagan yordamchi CadCraft Studio orqali ulanib, sakkiz ilovaning hammasi bilan ishlaydi va faqat siz ruxsat bergan narsani koʻradi. Bir bosishda ulanish, serverdagi konnektor va Studio ichidagi oʻz API kalitingiz hali kelajakda. Qarang: [DetailCraft ni AI yordamchi bilan ishlatish](topic:use-with-ai-assistants).

## 0.8.1 da tuzatilgan

- **Studioda tillar.** Studio va qadoqlangan nashrlar ish vaqtida tilni almashtira oladi; ilgari faqat ingliz tilida edi. Hamma platformada hali sinovdan oʻtmagan: til almashmasa, bizga xabar bering.
- **Oyna orqali tanlash.** 0.8.1 oʻrnatgichlari oyna orqali tanlash xatti-harakatini 0.8 veb-versiyasida allaqachon toʻgʻri olgan; eskiroq oʻrnatgich bunday emas edi.
- **Portret rejimida planshetlar.** Boʻsh setka balandligi kanvasga beriladi, varaq joylashuvi 760 px yoki undan kichik boshlanadi.

## Hali bu versiyada yoʻq

- **NC ni stanokka yuborish** hali chiqarilmagan.
- **Beton uchun shamol yuklari** hali qurilmagan; beton va poydevor tekshiruvlari muhandis koʻrib chiqishi uchun.
- **Kodni imzolash.** Windows oʻrnatgichlari va macOS .dmg imzolanmagan, shuning uchun Windows ogohlantirishi mumkin, macOS esa oʻng tugma bilan bosib, soʻng Ochish ni soʻraydi.

0.7 dagi oʻzgarishlar: [0.7 versiyasidagi yangiliklar](topic:whats-new-0-7).
