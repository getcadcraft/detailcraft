---
title: Baza lövhələri və anker çubuqları əlavə edin
summary: Sütunun altına dörd anker çubuqlu qaynaqlı baza lövhəsi qoyun, ölçülərini təyin edin və onu hər oxşar sütuna kopyalayın.
keywords: baza lövhəsi, baza lövhəsi, anker çubuqları, anker boltları, bərkidici boltlar, sütun bazası, bünövrə boltları, oxşar
from: 619ebc64
---

Baza lövhəsi birləşməsi sütunun altına lövhə qoyur, sütunu lövhənin qalınlığı qədər qısaldır, ikisini qaynaqla birləşdirir və lövhədəki deşiklərdən dörd anker çubuğu əlavə edir.

:::warning
Ölçülər başlanğıc dəyərlərdir, layihə deyil. DetailCraft oturacaq təzyiqini, çubuğun möhkəmliyini və basdırılmanı yoxlamır.
:::

## Baza lövhəsi əlavə edin

1. {{ui:Seç}} ({{key:V}}) seçin və sütuna klikləyin. Sütun şaquli olmalıdır.
2. {{ui:Birləşdirmə}} qrupunda {{ui:Baza lövhəsi}} seçin, yaxud {{ui:Xüsusiyyətlər}} panelində {{ui:Baza lövhəsi əlavə et}} seçin.
3. Status paneli deyir: "Baza lövhəsi dörd anker çubuğu ilə əlavə edildi." Yeni birləşmə seçilir.

Sütunda bir baza lövhəsi ola bilər. Əgər onun artıq varsa, status paneli deyir: "Bu sütunun artıq baza lövhəsi var."

## Dəyişdirin

Baza lövhəsini seçin (lövhəyə və ya çubuğa klikləyin). {{ui:Lövhə, boltlar və qaynaq (mm)}} altında:

| Parametr | Standart | Nə edir |
|---|---|---|
| Lövhənin qalınlığı | 25 | Sütun bu qədər qısaldılır |
| Lövhənin uzunluğu | 450 | Sütunun dərinliyi boyunca |
| Lövhənin eni | 400 | Sütunun eni boyunca |
| Çubuğun diametri | 20 | Anker çubuğunun ölçüsü |
| Deşiyin diametri | 33 | Lövhədəki deşik |
| Bolt sinfi | F1554 Gr 36 | Çubuğun sinfi, mətn kimi |
| Çubuq addımı (dərinlik boyu) | 350 | Çubuq mərkəzləri arasında, lövhənin uzunluğu boyunca |
| Çubuq addımı (en boyu) | 300 | Çubuq mərkəzləri arasında, en boyu |
| Çubuğun lövhədən yuxarı çıxması | 100 | Lövhənin üstündən çubuğun ucuna qədər |
| Çubuğun lövhədən aşağı basdırılması | 450 | Lövhənin altından betona qədər |
| Künc qaynağının ölçüsü | 8 | Sütun bazasının hər tərəfi boyunca |
| Lövhənin materialı | A36 | Mətn |
| Qrut boşluğu | 0 | Betonun üstü ilə lövhənin altı arasındakı boşluq |
| Bərkidicilər | Yoxdur | Yoxdur, 2 (divarla düz) və ya 4 (divara bucaq altında da) seçin; aşağıya baxın |
| Bərkidicinin qalınlığı, hündürlüyü | 12, 150 | |
| Kəsmə çıxıntısının dərinliyi | 0 | Çıxıntının lövhənin altına qədər uzanması; 0 = çıxıntı yoxdur |
| Kəsmə çıxıntısının qalınlığı, eni | 25, 150 | |
| Lövhə şaybaları | Yoxdur | Hər çubuqda, yaxud heç birində |
| Şayba ölçüsü, qalınlığı | 0, 0 | 0 = çubuq üçün AISC Design Guide 1-dən minimum |

Çubuğun uzunluğu = basdırılma + qrut boşluğu + lövhənin qalınlığı + çıxma. Standart dəyərlərlə bu, 575 mm-dir.

## Baza təfərrüatları: qrut, bərkidicilər, kəsmə çıxıntısı, şaybalar

Dördü də yeni baza lövhəsində söndürülüb, eləcə də DetailCraft 0.4-dən əvvəl yaradılmış modellərdəki baza lövhələrində.

- **Qrut boşluğu.** Lövhə betonun üstündən bu qədər yuxarıda oturur və çubuqlar da həmin qədər uzanır. AISC Design Guide 1 (2.10) bitmiş mərtəbədə 1 in., bünövrə və ya dayaqda 1½ – 2 in. tövsiyə edir; böyük lövhələrdə və kəsmə çıxıntısı olanda daha çox.
- **Bərkidicilər.** Sütuna və lövhəyə qaynaqlanmış şaquli lövhələr, sütun üzündən lövhənin kənarına qədər, düzbucaqlı formada (hələ faska və ya konusluq yoxdur). **2** divarla bir xətt üzrə, hər flanşın kənarında durur; **4** divara bucaq altında, flanşlar arasında, lövhənin yanlarına qədər iki əlavə bərkidici əlavə edir. Boru sütununda onlar hər üzün ortasında durur. Hər biri sütuna və lövhəyə hər iki tərəfdən qaynaqlanır.
- **Kəsmə çıxıntısı.** Baza lövhəsinin altında, sütunun dərinliyi boyunca, mərkəzləşdirilmiş və hər tərəfdən qaynaqlanmış lövhə. Əgər o, qrut boşluğundan dərin deyilsə, DetailCraft xəbərdarlıq edir. Bünövrədə yuva kəsmir; buna görə [toqquşma yoxlanışı](topic:clash-check) çıxıntını və bünövrəni bu səbəbdən kənarda qoyur.
- **Lövhə şaybaları.** Hər çubuqda, baza lövhəsinin üzərində oturan kvadrat lövhə şayba; sütunun yığımında sərbəst kimi siyahıya alınır (sütunla birlikdə göndərilir, qaynaqlanmır: Design Guide 1, 2.6). Ölçü və qalınlıq 0 olduqda DetailCraft çubuq üçün AISC Design Guide 1, 2-ci nəşr, Cədvəl 2.3-dən minimum şayba götürür; metrik çubuq növbəti düym ölçüsünü alır (M20 çubuq 7/8 in. sətrini alır: 2½ in. × 5/16 in.). Xüsusiyyətlər panelində istifadə olunan ölçü göstərilir. Şaybanın deşiyi çubuq diametri + 1/16 in.-dir: bu DetailCraft-ın seçimidir, cədvəl deşik vermir. Çubuqlar şayba və qayka üçün kifayət qədər çıxmaya bilərsə (çıxma şayba qalınlığı + çubuq diametrindən azdırsa), DetailCraft xəbərdarlıq edir.

Design Guide 1, Cədvəl 2.3, həmçinin lövhədəki çubuq deşiklərini tövsiyə edir: ¾ in. çubuq üçün 1-5/16 in., ⅞ in. üçün 1-9/16 in., 1 in. üçün 1-13/16 in. DetailCraft deşik ölçünüzü dəyişmir.

Çubuq deşikləri lövhə kənarına deşik diametrinin 1.2 ×-dən yaxın olduqda, çubuqlar sütun konturunun içinə düşdükdə və ya lövhə sütundan kiçik olduqda da xəbərdarlıqlar görünür.

## Oxşar sütunlara kopyalayın

1. Baza lövhəsini seçin.
2. {{ui:Oxşarlara tətbiq et (n)}} seçin, yaxud {{ui:Birləşdirmə}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Oxşar}} seçin.
3. Eyni profilli, baza lövhəsi olmayan və başqa sütunun üstündə durmayan hər şaquli sütuna bir nüsxə verilir.

## Baza lövhələri və bünövrələr

Baza lövhəsi bünövrə tələb etmir, bünövrə də üstündəki baza lövhəsindən xəbərdar deyil: anker çubuqları bünövrənin armaturuna bağlanmır. Bünövrələri {{ui:Bünövrə}} ilə yerləşdirin; bax: [Bünövrələri armaturla yerləşdirin](topic:footings-and-rebar).
