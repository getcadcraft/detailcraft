---
title: Poydevor tekshiruvlari
summary: Siz tavsiflagan grunt boʻyicha poydevorlar, birlashgan poydevorlar va toʻrlarni, choʻkishni, prujinalardagi egiluvchan toʻrni, svay guruhlarini va ushlab turuvchi devorlarni tekshiring. Muhandis uchun yordamchi vosita.
keywords: poydevor, birlashgan poydevor, toʻr, choʻkish, grunt moduli, prujinalar, chekka ustun, burchak ustuni, tayanch, siljish, agʻdarilish, teshib oʻtish, bir yoʻnalishli kesish, egilish, rivojlanish, minimal armatura, svay guruhi, ushlab turuvchi devor, ACI 318-19
from: 6961ad52
---

:::warning
Bular muhandis koʻrib chiqishi uchun birinchi darajali tekshiruvlar, loyihani tasdiqlash emas. Ruxsat etilgan tayanch bosimi va ishqalanish koeffitsiyenti sizniki: DetailCraft grunt xususiyatlaringizni bilmaydi.
:::

{{ui:Poydevor}} yorligʻi modeldagi poydevorlarni ular uchun berilgan ustun yuklariga qarab tekshiradi.

## Grunt tavsifi

{{ui:Ruxsat etilgan tayanch bosimi}} va {{ui:Asos ishqalanish koeffitsiyenti}} ni kiriting. Ikkalasi ham 0 dan boshlanadi, bu kiritilmaganini bildiradi: tekshiruv bosimni izoh sifatida koʻrsatadi va oʻtganini aytmaydi. Choʻkish uchun grunt modulini {{ui:Es}} (MPa), Puasson koeffitsiyentini va ruxsat etilgan choʻkishni kiriting (boshlash uchun 25 mm). Egiluvchan toʻr uchun grunt koeffitsiyentini {{ui:ks}} kiriting. Poydevor ustidagi toʻldirma, grunt solishtirma ogʻirligi, siljish va agʻdarilish uchun xavfsizlik koeffitsiyentlari (boshlash uchun 1.5) hamda armaturaning oqish mustahkamligi ham shu yerda.

## Yuklarni kiriting

Har bir poydevorda ustun yuklari roʻyxati bor. {{ui:Ustun yukini qoʻshish}} ni tanlang va xizmat qatorini (tayanch, siljish va agʻdarilish uchun) hamda koeffitsientlangan qatorni (mustahkamlik tekshiruvlari uchun) toʻldiring: vertikal P yuk pastga, poydevor yuqorisidagi gorizontal kuchlar Vx va Vy, momentlar Mx va My, ustunning poydevordagi oʻrni va uning oʻlchami.

Yoki {{ui:Tahlil}} yorligʻini ishga tushiring va {{ui:Ustun yuklarini Tahlildan olish}} ni bosing: poydevorda turgan har bir tayanch ustun yukiga aylanadi, siz tanlagan xizmat va koeffitsientlangan toʻplamlardan. Musbat My poydevorning +x tomonini koʻproq yuklaydi; musbat Mx esa −y tomonini koʻproq yuklaydi.

## Nima tekshiriladi

Xizmat yuklaridan, poydevorning oʻz ogʻirligi va toʻldirma qoʻshilgan holda:

- **Tayanch:** qattiq poydevor ostidagi bosim. Oʻrta uchdan birida butun taglik grunt bilan tegib turadi; undan tashqarida taglikning bir qismi koʻtariladi va eng yuqori bosim ortadi. Teng taʼsir etuvchi kuch taglikdan tashqarida boʻlsa, tekshiruv yiqiladi.
- **Siljish:** ishqalanish koeffitsiyenti vertikal yuk bilan koʻpaytirilgan, gorizontal kuchga qarshi.
- **Agʻdarilish:** teng taʼsir etuvchi kuchning chetdan masofasi.
- **Choʻkish:** oʻrtacha bosimning siz kiritgan modul bilan yarim fazodagi elastik choʻkishi, oʻrtada va burchakda (Timoshenko va Gudyerning egiluvchan toʻrtburchak uchun yechimi), chegara bilan solishtirilgan. Bu qattiq poydevor uchun yuqori chegara boʻlib, chuqurligi cheklangan grunt qatlamini, qazilgan grunt boʻshatishini va konsolidatsiyani hisobga olmaydi. Modul kiritilmasa, bosim izoh sifatida koʻrsatiladi.

Faqat koeffitsientlangan ustun yuklaridan (ACI 318-19):

- **Egilish** ustun yuzida, minimal armatura bilan (420 MPa sterjenlar uchun 0.0018) va siz chizgan sterjenlar bilan.
- **Bir yoʻnalishli kesish** yuzdan d masofada.
- **Teshib oʻtish kesimi** har bir ustun atrofida d/2 masofada, ustunning momenti bilan. Chekka yaqinidagi ustun uchun kritik kesim poydevor chekkasi bilan kesiladi (chekkada uch tomon, burchakda ikki tomon, ACI 318-19 22.6.4.1 va 22.6.5.2 jadvalidagi kichikroq αs), kesim markazi atrofidagi moment esa yukning siljishini oʻz ichiga oladi.
- **Sterjenlarning rivojlanishi** ustun yuzidan oʻtib, toʻgʻri yoki ilgaklari bilan.
- **Chuqurlik** pastki sterjenlar ustida (150 mm).

Birlashgan poydevor yoki toʻr qattiq deb olinadi, kesish va moment esa butun kenglik boʻylab kesimlardagi statikadan olinadi.

## Prujinalardagi egiluvchan toʻr

Poydevor koʻp ustunni koʻtarganda va qattiq poydevor juda qoʻpol boʻlganda {{ui:Bu poydevorni prujinalardagi egiluvchan toʻr sifatida tahlil qilish}} ni belgilang. Poydevor prujinalar yotogʻi ustida toʻrtta tugunli elementlardan iborat plastinkaga aylanadi (kiritgan {{ui:ks}} tugunlarga taqsimlanadi), har bir ustunning yuki esa oʻz izi tugunlari boʻylab tarqatiladi. Ikkinchi jadvalda eng katta grunt bosimi va choʻkish (hamda eng katta bilan eng kichigi orasidagi farq), har ikki yoʻnalishdagi egilish momenti va unga kerak boʻlgan armatura, yuqorida choʻzilish oddiy beton mustahkamligi bilan solishtirilgan (poydevorda yuqori sterjenlar yoʻq), ustunlardan d masofadagi bir yoʻnalishli kesish va prujinalarning oʻz bosimi boʻyicha teshib oʻtish beriladi. Toʻr ustun uch element kengligiga yetguncha maydalanadi; katta toʻr bir necha soniya oladi. Toʻrning oʻz ogʻirligi va uning ustidagi grunt bir-birini yoʻqotadi va hisobga olinmaydi.

Har bir muvaffaqiyatsiz tekshiruv bandi bilan {{ui:Muammolar}} panelida koʻrsatiladi.

## Svay guruhlari va ushlab turuvchi devorlar

{{ui:Svay guruhi qoʻshish}} qattiq bogʻlovchi ostiga svaylar setkasini qoʻyadi: yuk va momentlarni hamda har bir svay siqilishda va choʻzilishda qancha koʻtara olishini kiriting (svay loyihasining raqamlari, bu yorliqniki emas). Har bir svayning reaksiyasi P/n va uning momentlardagi ulushi (elastik usul) bilan teng; eng katta siqilish va har qanday choʻzilish tekshiriladi.

{{ui:Ushlab turuvchi devor qoʻshish}} tekis orqa toʻldirmadagi konsol devorni metrga hisoblab tekshiradi: Rankin aktiv bosimi, uchi atrofida agʻdarilish, siljish va taglik bosimi. Uchi oldidagi passiv bosim hisobga olinmaydi. Yordamchingiz xuddi shu tekshiruvlarni `pile_group_check` va `retaining_wall_check` bilan bajarishi mumkin.

Svay guruhlari, devorlar va toʻr kaliti model faylida saqlanadi, muvaffaqiyatsiz tekshiruv esa {{ui:Muammolar}} da koʻrsatiladi.
