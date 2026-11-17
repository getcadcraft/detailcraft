---
title: Beton elementlarni tekshirish va seysmik yuklarni yaratish
summary: Beton toʻsin va ustunlarning armaturasini sozlang, ularni ACI 318-19 boʻyicha tekshiring, ASCE 7-22 boʻyicha qattiq qavatlarda ekvivalent yonlama kuchlarni yarating va qavat siljishini koʻring. Muhandis tekshirishi uchun yordamchi vosita.
keywords: beton, armirlangan beton, ACI 318, ACI 318-19, armatura, toʻsin, ustun, kesish, bogʻlovchilar, seysmik, zilzila, ekvivalent yonlama kuch, ELF, ASCE 7-22, siljish, qavat siljishi, qavatlar, qattiq diafragma, qavat ogʻirligi, konstruktiv, muhandis
from: 94d3001d
---

{{ui:Tahlil}} yorligʻidagi {{ui:Beton elementlar}} va {{ui:Seysmik yuklar}} bloklari armirlangan beton toʻsin va ustunlarni tekshiradi hamda ramkaning qavatlaridagi zilzilaning yonlama kuchlarini hisoblaydi. Ikkalasi ham {{ui:Tahlil}} yorligʻining ishga tushirilishiga boʻysunadi va model bilan birga saqlanadi.

:::warning
Natijalar **muhandis tekshiruvi uchun**: kimdir koʻrib chiqquncha yordamchi. Beton tekshiruvlari birinchi tartibli kuchlardan foydalanadi, faqat siz siljimaydigan deb atagan ramkadagi ustun kuchaytirilgan moment boʻyicha loyihalanadi, siljish kuchaytirishsiz, buralish loyihasiz, seysmik detallashtirishsiz (ACI 318-19 18-bob) va bogʻlovchi detallashtirishsiz. Seysmik yuklar takrorlanish koeffitsientini, vertikal seysmik taʼsirni, buralish kuchaytirishini va P-delta taʼsirlarini hisobga olmaydi. Shamol yuklari hali qurilmagan.
:::

## Elementlarni chizish

Beton elementlarni toʻrtburchak sifatida chizing: ustun uchun `PL400x400` va toʻsin uchun `PL300x600` kabi {{ui:Plastina}} profili kesimni beradi. Ustunlar va toʻsinlar boshqa elementlar kabi joylashtiriladi.

## Kesimlarni sozlash

{{ui:Beton elementlar}} bloki elementlar ishlatadigan har bir kesimni roʻyxatlaydi. Beton boʻlganlarida {{ui:Beton sifatida sozlash…}} tugmasini bosing. DetailCraft chizilgan profildan kenglik **b** (elementning oʻz y oʻqi boʻylab) va chuqurlik **h** (z boʻylab) ni oʻqiydi, soʻng soʻraydi:

- armatura markazigacha boʻlgan **himoya qatlami** va toʻsin uchun **yuqori**, **pastki** va **yon** armatura (qancha va qaysi diametrda), yoki ustun uchun **ustun karkasi** (b va h boʻylab armatura, qaysi diametr, spiral bogʻlovchilar);
- **bogʻlovchilar**: tarmoqlari, diametri va qadami;
- element **qanday ishlashi**: toʻsin, ustun yoki kuchlardan kelib chiqqan holda (vertikal element yoki 0.10 f′c Ag dan koʻp yuk koʻtaradigan element ustun hisoblanadi).

Ularning yuqorisida f′c, armatura oqish kuchi fy va bogʻlovchining oqish kuchi fyt (kesishda 420 MPa gacha hisobga olinadi), K va ramka siljuvchimi yoki siljimaydimi, belgilang. Beton sifatida sozlangan kesim beton sifatida tahlil qilinadi: E = 4700 √f′c, 2400 kg/m³, va standart boʻyicha **yorilgan kesimlar** bilan (ustunlar 0.70 Ig, toʻsinlar 0.35 Ig; ACI 318-19 6.6.3.1.1(a) jadvali). Buni oʻchirish uchun {{ui:Toʻliq kesimlar}} ni tanlang.

## Kombinatsiyalarni yaratish va tekshirish

Yuk holatlariga turini bering, soʻng {{ui:Kombinatsiyalarni yaratish}} ni tanlang: ACI 318-19 ASCE 7 ning mustahkamlik kombinatsiyalarini oladi (§5.3.1). {{ui:Betonni tekshirish}} ni bosing va har bir element foydalanish koeffitsientini oladi, poʻlat tekshiruvlari kabi modelda rang bilan koʻrsatiladi: egilish va minimal poʻlat (22.2, 9.6.1.2), choʻzilishga boshqariladigan deformatsiya (9.3.3.1), bogʻlovchilar bilan kesish (22.5, 9.6.3), bogʻlovchi qadami va ustunlar uchun moment bilan birga oʻqiy yuk (22.4, ikki yoʻnalishli egilish uchun Bresler usuli). Chizilgan kesim siz yozgan b × h dan farq qiladigan element *qisman tekshirilgan* deb oʻqiladi, xuddi ingichka ustun yoki chegaradan yuqori buralish kabi: ular loyihalanmagan.

Sigʻimidan oshgan elementlar {{ui:Muammolar}} da roʻyxatlanadi; sababi bilan qabul qiling yoki kesimni tuzating.

## Qavatlar va seysmik yuklar

Qavat — ramka qattiq plita (**qattiq diafragma**) bilan birlashtirilgan sath. {{ui:Seysmik yuklar}} blokida {{ui:Qavatlarni topish}} ni bosing: u ikki yoki undan koʻp toʻsin uchrashgan sathlarni oladi. Soʻng har bir qavatga uning **seysmik ogʻirligini** bering, kiritilgan yoki oʻqilgan holda: {{ui:Ogʻirliklarni holatlardan olish}} sizning koeffitsient berilgan holatlaringizning vertikal yuklarini jamlaydi (doimiy holat 1; ASCE 7-22 12.7.2 talab qilganidek, omborxona yoki tekis tomdagi qor holatiga 0.25 qoʻshing). Har bir tugunning vertikal yuki undan yuqori yoki unga teng qavatga beriladi, shuning uchun ikki qavat orasidagi ustun ogʻirligining yarmini har biriga beradi.

Loyiha qiymatlarini kiriting: SDS, SD1, S1, R, Ie, Cd, TL, konstruktiv tizim (davr uchun) va xavf kategoriyasi. {{ui:Seysmik holatlarni yaratish}} keyin bino balandligidan davrni hisoblaydi (12.8.2.1), asosiy kesuvchi kuch V = Cs W ni (12.8.1), uni qavatlarga taqsimlaydi (12.8.3) va toʻrtta yuk holatini yozadi, X va Y boʻyicha, har ikki tomonga 5 % tasodifiy buralish bilan (12.8.4.2). Qavat kuchlari va qavat siljishini tekshirish (12.8.6, 12.12-1 jadvali, siljish Cd δxe / Ie ni 0.020 hsx bilan) ishga tushirilgandan keyin chiqadi; chegaradan oshgan siljish ham muammo hisoblanadi. Seysmik holatlarni kombinatsiyalarga kiritish uchun {{ui:Kombinatsiyalarni yaratish}} ni yana bosing.

**Tahlildan davr.** Taxminiy davr Ta bino balandligidan olinadi. Seysmik holatlar bilan tahlilni ishga tushirgandan keyin {{ui:Davrni tahlildan olish}} har bir qavat kuchlar ostida qancha siljiganini oʻqiydi va davrni Reley usuli bilan hisoblaydi, T = 2π √(Σ w δ² / (g Σ f δ)), X uchun bir marta va Y uchun bir marta; seysmik holatlar unga koʻra qayta yaratiladi. Ishlatilgan davr hech qachon Cu·Ta dan koʻp emas (ASCE 7-22 12.8.2), shuning uchun yumshoq model asosiy kesuvchi kuchni undan pastga tushira olmaydi. Ikkinchi ishga tushirishdan keyin davrni yana oling: u bir yoki ikki qadamda barqarorlashadi. Ta ga qaytish uchun {{ui:Tahlildan davr}} belgisini olib tashlang.

**Ingichka ustunlar (ACI 318-19 6.6.4.5).** Siljimaydigan deb atagan ramka uchun, k·ℓu/r qiymati 34 + 12·M1/M2 dan katta (eng koʻpi 40) boʻlgan ustun kuchaytirilgan moment Mc = δns · M2 boʻyicha loyihalanadi: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² bilan (EI)eff = 0.4 Ec Ig / (1 + βdns), va minimal moment Pu (15 + 0.03 h). βdns (boshlanishida 0.6) — kuchaytirilgan oʻqiy yukning davomli ulushi: oʻzingiznikini kiriting. Pu 0.75 Pc ga yetgan ustun oʻz tekshiruvida muvaffaqiyatsiz boʻladi. Hisobotda har bir ingichka ustunning raqamlari roʻyxatlanadi. **Siljuvchi** ramkada ingichka ustun baribir "qisman tekshirilgan" boʻladi: uning kuchaytirilishi ikkinchi tartibli tahlilni talab qiladi, u hali qurilmagan.

**Plitalar.** Modelda plastinalar boʻlganda, {{ui:Plita armaturasi}} bloki har bir mustahkamlik kombinatsiyasining plastina momentlarini oladi va Vud–Armer qoidasi boʻyicha (egilish va buralish birgalikda) har bir qatlamga metriga kerak boʻlgan poʻlatni hisoblaydi: pastki va yuqori, x va y boʻyicha. Qalinlik, himoya qatlami va armaturani kiritasiz; jadvalda kerakli va berilgan qiymatlar hamda bir yoʻnalishli kesish φVc ga qarshi koʻrsatiladi, yetarli boʻlmagan qatlam esa oʻz bandi bilan muammo hisoblanadi. Egilish, ustunlardagi teshib oʻtish va teshiklardagi trimmer sterjenlar qamrab olinmagan, tayanch ustidagi moment esa toʻrt tugunli plastinalarda sekin yaqinlashadi.

Roʻyxatga kiritgan har bir qavat tahlilda qattiq diafragmaga aylanadi: uning toʻsinlari qavatning harakatidan oʻqiy kuch koʻtarmaydi. CraftScript eksporti qavatli model uchun qilinmagan.

## Hisobot

{{ui:Hisobot (PDF)}} va {{ui:Hisobot (CSV)}} beton jadvallarini (taxminlar, elementlar boʻyicha foydalanish, har bir band), seysmik parametrlar va asosiy kesuvchi kuchni, qavatlardagi kuchlarni va siljish jadvalini oladi.
