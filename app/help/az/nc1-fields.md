---
title: NC faylının sahələri
summary: Hər DetailCraft DSTV NC faylında nə yazılır, sahə-sahə, və üzlər və koordinatlar necə ölçülür.
keywords: nc1, dstv, nc faylı, ST bloku, ak, bo, başlıq, üzlər, koordinatlar, cnc, format
from: 1b676fc1
---

Hər `.nc1` faylı bir detal nişanını təsvir edir. Sətirlər CR LF ilə bitir. Mətn sahələri sadə ASCII daşıyır; digər simvollar "?" olur. İkinci sətir şərhdir: `** DetailCraft <mark>.nc1`.

## Başlıq (ST)

| Sahə | I-profil, kanal | Bucaq | Düzbucaqlı HSS | Dairəvi HSS | Lövhə |
|---|---|---|---|---|---|
| Sifariş | Modelin adı | ← | ← | ← | ← |
| Çertyoj, parça | Detal nişanı | ← | ← | ← | ← |
| Mərhələ | Detalın mərhələsi, yoxsa 1 | ← | ← | ← | ← |
| Polad keyfiyyəti | Material markası | ← | ← | ← | ← |
| Miqdar | Bu nişanlı detalların sayı | ← | ← | ← | ← |
| Profil | Profil adı, məsələn W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profil kodu | I və ya U (kanal) | L | M | RO | B |
| Uzunluq | Kəsim uzunluğu | ← | ← | ← | Uzunluq |
| Hündürlük | Dərinlik d | Qol | Hündürlük | Diametr | Lövhənin eni |
| Flanş eni | bf | Qol | En | Diametr | 0 |
| Flanş qalınlığı | tf | t | Divar t | Divar t | 0 |
| Gövdə qalınlığı | tw | t | Divar t | Divar t | Lövhənin qalınlığı |
| Radius | Birləşmə radiusu (AISC kanalları üçün 0) | 0 | Xarici künc radiusu | 0 | 0 |
| Metr başına kütlə | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Metr başına boya səthi | Xarici perimetr, m²/m | ← | ← | ← | 2 (hər iki üz, m²/m²) |
| Mişar bucaqları (4 sahə) | 0 (kvadrat) | ← | ← | ← | ← |
| Mətn sahələri (4) | `-` | ← | ← | ← | ← |

Lövhələr standartın "lövhələr üçün" sütununu izləyir. Standartda dairəvi borular üçün sütun yoxdur: DetailCraft diametri həm hündürlük, həm də flanş eni kimi, divarı isə hər iki qalınlıq kimi yazır.

## Xarici konturlar (AK)

- **I-profillər və kanallar:** gövdə (v), hər kəsim üçün düzbucaqlı çıxıntı ilə; hər flanş (o və u), kəsim flanşı ən azı onun qədər dərin olan ucunda qısaldılmış.
- **Düzbucaqlı HSS:** hər iki yan divar (v və h), kəsimlər üçün çıxıntılı, və yuxarı və aşağı divarlar (o və u).
- **Bucaqlar:** hər qol üçün bir düzbucaqlı (v və u). Bucaqlarda kəsimlər yazılmır: belə detal yazılmamış kimi sadalanır. [Qussetə](topic:brace-gussets) bolt ilə birləşən bucaq diaqonalının deşikləri bolt edilən qolda olur: detalın u boyunca olan qol üçün v, v boyunca olan qol üçün u.
- **Dairəvi HSS:** v üzündə bir düzbucaqlı, borunun önündən görünüşü (uzunluq × diametr).
- **Lövhələr:** v üzündə bir düzbucaqlı.

Hər kontur qapalıdır (ilk nöqtə sonda təkrarlanır) və saat əqrəbinin əksinə gedir.

## Deşiklər (BO)

Hər deşik üçün bir sətir: üz, x, y, diametr, dərinlik 0 (sahədən keçən). Bütün deşiklər daxildir: yazdığınız və birləşmələrin yaratdığı. Düzbucaqlı HSS-in yan divarlarından keçən deşik iki dəfə yazılır: bir dəfə v-də, bir dəfə h-də.

## Üzlər və koordinatlar

Hər profil standartın profil mövqeləri təsvirinin çəkdiyi kimi yerləşdirilir (DSTV 1998, s. 7): x detal boyunca, Y en boyunca, Z arxa üzdən yuxarı, sıfır nöqtəsi xarici künclə. DetailCraft heç vaxt detalı təsvirə uyğunlaşdırmaq üçün güzgü əksi etmir.

| Üz | I-profil | Kanal | Bucaq | Düzbucaqlı HSS | Lövhə |
|---|---|---|---|---|---|
| v | Gövdə, ön | Gövdə, ucluqlar tərəfindən görünür | Detalın u boyunca qol | Yan divar −u-da | Lövhənin üzü |
| h | | | | Yan divar +u-da | |
| o | Yuxarı flanş | **Aşağı** flanş | | Yuxarı divar | |
| u | Aşağı flanş | **Yuxarı** flanş | Detalın v boyunca qol | Aşağı divar | |

- **x** detal boyunca onun kəsim başlanğıcından gedir.
- **I-profillər və düzbucaqlı HSS:** gövdədə və ya yan divarlarda y profilin alt tərəfindən; flanşda və ya yuxarı və aşağı divarlarda y onun arxa tərəfdəki kənarından (detalın +u tərəfi).
- **Kanallar** standartın təsvirində olduğu kimi, ucluqları yuxarı olmaqla arxası üstə yatır. Belə ki, gövdədə y yuxarı flanşın xaricindən aşağı gedir, yuxarı flanş u üzü, aşağı flanş o üzü olur, flanşda y isə gövdənin arxasından ucluğa doğru gedir.
- **Bucaqlar:** hər qolda y dabandan.
- **Lövhələr:** y lövhənin −u kənarından.

Kəsməzdən əvvəl maşın proqramınızın kanal üzlərini necə oxuduğunu yoxlayın: bəzi proqramlar kanalları tərsinə çevirir.

## Yazılmır

Skoslar, daxili konturlar, işarələr (SI), kvadrat olmayan mişar bucaqları, yuvalı deşiklər, dairəvi borularda deşiklər (DetailCraft-da yoxdur) və bucaqlarda və dairəvi borularda kəsimlər.
