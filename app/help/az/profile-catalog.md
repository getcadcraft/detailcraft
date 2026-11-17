---
title: Profil kataloqu
summary: Hər daxili polad ölçüsü, profil adlarının necə yazıldığı, ölçülərin haradan gəldiyi və lövhələrin və fərdi kəsiklərin necə adlandırıldığı.
keywords: profillər, kəsiklər, kataloq, ölçülər, w profilləri, geniş flanş, s profilləri, kanal, bucaq, hss, boru, pipe, ipe, hea, heb, upn, uk, britaniya, ub, uc, pfc, ea, uea, qeyri-bərabər bucaq, shs, rhs, chs, soyuq formalı, isti bitirilmiş, mavi kitab, lövhə, aisc, en 10365, adlandırma
from: cd9b2bc3
---

DetailCraft-ın 2,311 daxili ölçüsü var, hər biri dərc olunmuş cədvəldən köçürülüb və tətbiqin testləri ilə yoxlanılıb: ölçülərdən hesablanan sahə dərc olunmuş sahəyə uyğun olmalıdır, dərc olunmuş çəki isə həmin sahənin polad sıxlığına vurulmasına uyğun olmalıdır. Lövhələr və fərdi profillər öz ölçülərindən yaradılır.

## Adlandırma

- **ABŞ profilləri** AISC Manual-ın çap etdiyi kimi yazılır, kiçik hərf x ilə: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Yazarkən böyük-kiçik hərf fərq etmir.
- **Boru** AISC bazasındakı kimi yazılır: Pipe4STD, Pipe4XS, Pipe4XXS (standart, əlavə möhkəm, ikiqat əlavə möhkəm).
- **Avropa profilləri** EN 10365-dəki kimi yazılır: IPE200, HEA240, HEB300, UPN200 (boşluqsuz).
- **Böyük Britaniya profilləri** əvvəlcə ailə, sonra Blue Book ölçüsü ilə yazılır: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Soyuq formalı boru bölmələri CF ilə başlayır: CFSHS100x100x5.0. Çertyojlarda tez-tez yazıldığı kimi yazmaq da işləyir: 305x165x40 UB, L100x100x10, SHS100x5.
- **Lövhələr** millimetrlə `PL<thickness>x<width>` kimi yazılır: PL20x200 20 mm qalınlığında və 200 mm enindədir. {{ui:Lövhə}} alətindən istənilən ölçü işləyir.
- **Fərdi profillər** verdiyiniz istənilən adı daşıyır, yalnız kataloq adı olmasın və lövhə adına bənzəməsin.

{{ui:Profil}} siyahılarında hər qrupun başlığı öz mənbəyini adlandırır, məsələn "W profilləri — AISC Shapes Database v16.0".

## Mənbələr

| Qrup | Mənbə | Qeydlər |
|---|---|---|
| W profilləri, S profilləri, Kanallar (C), Bucaqlar (L), HSS, Boru | AISC Shapes Database v16.0 | Ölçülər düymdən millimetrə dəqiq çevrilir; metr başına kütlə dərc olunmuş lb/ft-dən |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimetr və kg/m dərc olunduğu kimi |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimetr və kg/m dərc olunduğu kimi |
| Lövhələr | Parametrik | Kütlə sahə × 7850 kg/m³-dən |
| Fərdi | Sizin ölçüləriniz | Kütlə sahə × 7850 kg/m³-dən |

Profillər necə çəkilir:

- **W profilləri:** AISC bazası birləşmə radiusu vermir, buna görə DetailCraft birləşməni r = kdes − tf kimi çəkir.
- **S profilləri və kanallar (C, UPN):** dərc olunmuş orta qalınlıqda paralel flanşlar, kvadrat künclər (real flanş meyillidir).
- **Bucaqlar:** kvadrat künclər.
- **Düzbucaqlı HSS:** layihə divar qalınlığı (0.93 × nominal, AISC 360-22 B4.2-nin icazə verdiyi kimi) və buna iki qat xarici künc radiusu.
- **Dairəvi HSS və Boru:** layihə divar qalınlığı (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** dərc olunmuş kök radiusu.
- **PFC, EA, UEA:** kvadrat künclər (dərc olunmuş kütlə və sahə yenə də radiusları daxil edir).
- **SHS, RHS, CHS:** nominal divar. İsti bitirilmiş künclər: xarici 1.5 t, daxili t. Soyuq formalı: xarici 2 t, daxili t 6 mm-ə qədər; 2.5 t və 1.5 t 10 mm-ə qədər; 3 t və 2 t yuxarıda.

## Ölçülər

Bu qruplarda cədvəllərin sadaladığı hər ölçü, ən kiçikdən başlayaraq:

| Qrup | Ölçülər |
|---|---|
| W profilləri (289) | W4x13 — W44x408 |
| S profilləri (28) | S3x5.7 — S24x121 |
| Kanallar (32) | C3x3.5 — C15x50 |
| Bərabər qollu bucaqlar (61) | L2x2x1/8 — L12x12x1-3/8 |
| HSS, düzbucaqlı və kvadrat (525) | HSS1-1/2x1-1/2x1/8 — HSS34x10x1 |
| HSS, dairəvi (189) | HSS1.660x0.140 — HSS28.000x1.000 |
| Boru (51) | Pipe1/2STD — Pipe26XS |
| IPE (18) | IPE80 — IPE600 |
| HEA (24) | HEA100 — HEA1000 |
| HEB (24) | HEB100 — HEB1000 |
| UPN (18) | UPN50 — UPN400 |
| Qeyri-bərabər qollu bucaqlar (76) | L2-1/2x1-1/2x3/16 — L8x6x1 |
| UB (107) | UB127x76x13 — UB1016x305x584 |
| UC (46) | UC152x152x23 — UC356x406x1299 |
| PFC (16) | PFC100x50x10 — PFC430x100x64 |
| EA (42) | EA20x20x3.0 — EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 — UEA200x150x18.0 |
| SHS, isti bitirilmiş (123) | SHS40x40x3.2 — SHS400x400x17.5 |
| RHS, isti bitirilmiş (161) | RHS50x30x3.2 — RHS500x300x17.5 |
| CHS, isti bitirilmiş (103) | CHS42.4x3.2 — CHS508.0x17.5 |
| CFSHS, soyuq formalı (96) | CFSHS25x25x2.0 — CFSHS400x400x12.5 |
| CFRHS, soyuq formalı (137) | CFRHS50x25x2.0 — CFRHS500x300x12.5 |
| CFCHS, soyuq formalı (106) | CFCHS33.7x3.0 — CFCHS508.0x16.0 |

Güzgü əksi edilmiş qeyri-bərabər bucaq eyni detaldır, ucları dəyişdirilmiş, sex əks tərəfi necə düzəldirsə: onun deşikləri, kəsimləri və qussetləri onunla gedir.

Yerləşdirmə alətini seçin və ölçü seçin ki, {{ui:Xüsusiyyətlər}} panelinin {{ui:Profil}} qutusunda dərinliyini, flanş enini, gövdə və flanş qalınlığını, birləşmə radiusunu, sahəsini (cm²), kütləsini (kg/m) və mənbəsini görəsiniz.

## Hər profil nə edə bilər

| Forma | Deşiklər | Kəsimlər | Son lövhələr və baza lövhələri | NC faylı | Emal çertyoju |
|---|---|---|---|---|---|
| I-profillər (W, S, IPE, HEA, HEB, UB, UC, fərdi I) | Gövdə, yuxarı flanş, aşağı flanş | Bəli | Son lövhələr: tir və sütun. Baza lövhələri: bəli | Bəli | Bəli |
| Kanallar (C, UPN, PFC) | Gövdə, yuxarı flanş, aşağı flanş | Yox | Yalnız baza lövhələri | Bəli | Bəli |
| Düzbucaqlı HSS, SHS, RHS | Yan divar (gövdə), yuxarı, aşağı | Yox | Yalnız baza lövhələri | Bəli | Bəli |
| Dairəvi HSS, Boru, CHS | Hələ yox | Yox | Yalnız baza lövhələri | Bəli | Bəli |
| Bucaqlar (L, EA, UEA) | Hələ yox | Yox | Yalnız baza lövhələri | Bəli | Bəli |
| Lövhələr və fərdi yastı çubuqlar | Lövhə üzü | Yox | Yox | Bəli | Bəli |

Düzbucaqlı boru üçün "gövdə" üzündəki deşik hər iki yan divardan keçir. Hər NC faylında nə olduğu [NC faylının sahələri](topic:nc1-fields) bölməsindədir.

## Başqa ölçü lazımdır?

Fərdi profil kimi [əlavə edin](topic:plates-and-profiles#add-a-custom-profile). Daxili siyahı tətbiqdən hələ redaktə edilə bilməz.
