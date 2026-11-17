---
title: Armatur arayışı
summary: DetailCraft-ın istifadə etdiyi armatur ölçüləri, qarmaq ölçüləri, forma kodları, kəsim uzunluqları və əyilmə cədvəlinin sütunları.
keywords: armatur, armatur ölçüləri, qarmaqlar, əyilmə diametri, forma kodları, kəsim uzunluğu, əyilmə cədvəli, armatur siyahısı, astm a615, aci 318
from: 1583535e
---

## Armatur ölçüləri

ASTM A615/A615M Cədvəl 1-dən (düym-funt təyinatları). Millimetrlər və kq/m dərəcələri dərc olunmuş düym və lb/ft qiymətlərinin dəqiq çevrilmələridir. Siyahılarda hər ölçü məsələn "#5 (15.9 mm)" kimi göstərilir.

| Armatur | Diametr (mm) | Kütlə (kq/m) | Sahə (mm²) | Daxili əyilmə diametri | 90° qarmaq ayağı, xarici-xarici (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

[DetailCraft parametrləri](topic:settings) ({{ui:Armatur}}) bölməsində **ASTM armatur adları** bu armaturları əvəzinə yumşaq metrik A615M adları ilə göstərə bilər: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (eyni armaturlar; ACI 315-99 Cədvəl 1-də hər ikisi verilib).

### Metrik armatur (BS 4449)

| Armatur | Diametr (mm) | kq/m | Minimum əyilmə radiusu r (mm) | Qarmaq ayağı = son çıxıntı P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Kütlə nominal kəsik sahəsinin 7850 kq/m³ ilə vurulmasıdır. Radius və son çıxıntı BS 8666:2020-nin minimum qiymətləridir (minimum ölçülər cədvəli; əvvəlki diametr 2r-dir). BS armaturlu bünövrələr P uzunluqlu qarmaq ayaqları və aşağıdakı BS 8666 düsturları ilə kəsim uzunluqları alır. Parametrlərdə Avropa poladının seçilməsi C30/37 betonunda yeni bünövrələri H16 şəbəkələri və H20 başlanğıc armaturları ilə açır.

## Qarmaqlar

ASTM armaturları: ACI 318-19 Cədvəl 25.3.1-dən standart 90° qarmaqlar: #3-dən #8-ə qədər 6 db, #9-dan #11-ə qədər 8 db daxili əyilmə diametri, əyilmədən sonra 12 db düz uzantı ilə. Qarmaq ayağı xarici-xarici ölçülür və əyilmə diametrinin yarısı + db + 12 db-yə bərabərdir.

Şəbəkə armaturunun qarmağı örtük daxilində bünövrənin dərinliyinə sığmırsa, DetailCraft ayağı sığmaq üçün qısaldır və xəbərdarlıq göstərir.

## Formalar

DetailCraft üç forma saxlayır. Əyilmə cədvəli onları DetailCraft kodları, ACI 315 tipləri və ya BS 8666 forma kodları kimi çap edir: [DetailCraft parametrləri](topic:settings) ({{ui:Armatur}}) bölməsində **Əyilmə cədvəli forma kodları** seçin.

| Kod | Forma | Ölçülər |
|---|---|---|
| S | Düz | A = uzunluq |
| L | Bir 90° əyilmə | A = əsas ayaq, B = qarmaq ayağı, hər ikisi xarici-xarici |
| U | Eyni tərəfdə iki 90° əyilmə | A = orta, B və C = iki ayaq, xarici-xarici |

{{ui:Uc qarmaqları}} aktiv olan şəbəkə armaturları U-dur; olmadan S. {{ui:Aşağıda qarmaq}} aktiv olan başlanğıc armaturları L-dir; olmadan S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Şəkil 10) |
|---|---|---|
| S | 00, L = A | tip nömrəsi yoxdur |
| L | 11, L = A + B − 0.5r − d | tip nömrəsi yoxdur: şəkildə bir qarmaqlı armatur yoxdur |
| U | 21, A və C ayaqlar, B orta: L = A + B + C − r − 2d | Tip 2, qarmaqlar A və G, düz B |

BS 8666 və ya ACI 315 kodları ilə cədvəlin A, B və C sütunları həmin standartın hərf təyinatını izləyir (U-nun ortası B-dir).

## Kəsim uzunluğu

BS 4449 armaturları üçün kəsim uzunluğu armaturun forma kodunun BS 8666 düsturudur (yuxarıda). ASTM armaturları üçün isə bu, armaturun mərkəz xəttinin dəqiq uzunluğudur: düz hissələr və əyilmələr əyilmə diametrinin yarısı və armatur diametrinin yarısı əlavə edilmiş qövslər kimi. Əyilmə azaltmalarının cədvəlindən hesablanmır, buna görə də onu istifadə edən cədvəldən bir neçə millimetr fərqlənə bilər.

## Yerləşdirmə

- Aşağı şəbəkə: L boyunca olan armaturlar aşağı qatı əmələ gətirir, B boyunca olanlar onların üzərində oturur. Hər dəst örtük daxilində bünövrə boyunca bərabər yayılır, verdiyiniz addımda və ya daha sıx, ən azı iki armatur ilə.
- Başlanğıc armaturları: verdiyiniz addımlarla L və B boyunca armatur şəbəkəsi, bünövrənin mərkəzində, şəbəkənin üzərində durur və yuxarıda verdiyiniz çıxıntı qədər çıxır. Hər qarmaq xaricə yönəlir.

## Yoxlamalar

| Yoxlama | Qayda | Nəticə |
|---|---|---|
| Armatur üçün yer | İki tərəfdəki örtük armatur üçün yer buraxır | Yoxdursa, rədd edilir |
| İki qat üçün dərinlik | Dərinlik min iki örtük şəbəkənin iki qatını saxlayır | Yoxdursa, rədd edilir |
| Başlanğıc armaturlarının yerləşməsi | Başlanğıc şəbəkəsi örtük daxilinə sığır | Yoxdursa, rədd edilir |
| Təmiz addım | Ən azı 25.4 mm və db-dən böyük olan (ACI 318-19 25.2.1; aqreqat ölçüsü yoxlanılmır) | Xəbərdarlıq |
| Qarmaq dərinliyi | Qarmaq ayağı örtük daxilindəki dərinliyə sığır | Xəbərdarlıq, ayaq qısaldılır |
| Başlanğıc qarmaqları | Qarmaqlar örtükdən kənarda qalır | Xəbərdarlıq |

## Əyilmə cədvəlinin sütunları

{{ui:Əyilmə cədvəli}} vərəqinin və onun CSV faylının bu sütunları var: Armatur nişanı, Ölçü, Forma, A (mm), B (mm), C (mm), Say, Kəsim uzunluğu (mm), Ümumi uzunluq (m), kq/m, Hər birinin çəkisi (kq), Ümumi çəki (kq), İstifadə yeri. Son sətir say, uzunluq və çəkini cəmləyir.
