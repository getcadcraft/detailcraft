---
title: Armaturlu bünövrələrin yerləşdirilməsi
summary: Alt şəbəkəli və başlanğıc çubuqlu düzbucaqlı plitə bünövrələri yerləşdirin, yoxlayın və əyilmə cədvəlini yükləyin.
keywords: bünövrə, plitə bünövrə, təməl, armatur, çubuqlar, şəbəkə, başlanğıc çubuqlar, anker çubuqları, əyilmə cədvəli, armatur siyahısı, beton, qarmaqlar, örtük
from: 41a048be
---

Bu mövzu düzbucaqlı plitə bünövrələri haqqındadır. Tirlər, sütunlar, döşəmələr və divarlar [Təkrar güclənmiş beton](topic:reinforced-concrete) bölməsindədir. Hər bünövrənin hər iki istiqamətdə alt şəbəkəsi olur və istəsəniz, bünövrədən yuxarı çıxan başlanğıc çubuqlar da əlavə edilə bilər. Çubuqlar US #3-dən #11-ə qədər ölçülərdədir.

## Bünövrənin yerləşdirilməsi

1. {{ui:Plan}} seçin və bünövrənin yuxarı səviyyəsini seçin.
2. {{ui:Yerləşdirmə}} qrupunda {{ui:Bünövrə}} seçin və ya {{key:F}} düyməsini basın.
3. Bünövrəni {{ui:Xüsusiyyətlər}} panelində (aşağıya baxın) təyin edin və ya standart dəyərləri saxlayın.
4. Şəbəkə kəsişməsinə klikləyin. Bünövrə həmin nöqtəyə mərkəzləşdirilir, yuxarısı səviyyədə olur. Status panelində məsələn belə yazılır: "Bünövrə 2000 x 2000 x 600, A/1 altında."

Bundan əlavə, panelin aşağısındakı {{ui:Şəbəkə ilə əlavə et}} formasından da istifadə edə bilərsiniz.

Bünövrə çubuqlarını görmək üçün şəffaf çəkilir, çubuqlar isə bərk borular kimi göstərilir.

## Bünövrə parametrləri

| Sahə | Standart | Qeyd |
|---|---|---|
| Uzunluq L (mm) | 2000 | x boyunca; 300-dən 50000-ə qədər |
| En B (mm) | 2000 | y boyunca; 300-dən 50000-ə qədər |
| Hündürlük H (mm) | 600 | 150-dən 10000-ə qədər |
| Beton | 4000 psi | Mətn, IFC ixracında çap olunur |

**Alt şəbəkə**

| Sahə | Standart | Qeyd |
|---|---|---|
| Uzun çubuqlar | #5 | L boyunca uzanan çubuqlar, aşağı qat |
| Aralıq (mm) | 250 | İcazə verilən ən böyük aralıq; çubuqlar bu və ya daha sıx məsafədə bərabər paylanır |
| Qısa çubuqlar | #5 | B boyunca uzanan çubuqlar, uzun çubuqların üzərində |
| Aralıq (mm) | 250 | Yuxarıdakı kimi |
| Örtük (mm) | 75 | Hər üzdə təmiz beton örtüyü |
| Uclarda qarmaqlar | Aktiv | Hər şəbəkə çubuğunun hər iki ucunu standart 90° qarmaqla yuxarı əyir (forma U); söndürülsə, düz çubuqlar alınır (forma S) |

**Başlanğıc çubuqlar**

| Sahə | Standart | Qeyd |
|---|---|---|
| Başlanğıc çubuqlar | Aktiv | Başlanğıcsız bünövrə üçün söndürün |
| Çubuq | #6 | |
| L boyunca çubuqlar / B boyunca çubuqlar | 2 / 2 | Bünövrənin mərkəzində çubuqların şəbəkəsi |
| L boyunca aralıq / B boyunca aralıq | 250 / 250 | Çubuq mərkəzləri arasında |
| Yuxarıda çıxıntı | 600 | Çubuqların bünövrə yuxarısından nə qədər çıxdığı |
| Aşağıda qarmaq | Aktiv | Şəbəkənin üstündə oturan, xaricə yönəlmiş 90° qarmaq (forma L) |

Sahələrin altında DetailCraft uzun çubuqlar üçün qarmaq ayağını göstərir, məsələn: "#5 üçün qarmaq ayağı: 254 mm, xaricdən xaricə."

## Yerləşdirilmiş bünövrəni dəyişmək

Bünövrəni seçin (onun betonuna, heç bir sütundan uzaqda, və ya çubuqlarından birinə klikləyin). Eyni sahələri alırsınız, üstəlik {{ui:Mərkəz x}}, {{ui:Mərkəz y}}, {{ui:Yuxarı z}} və {{ui:Fırlanma (°)}} sahələri. Onların altında bu bünövrənin çubuqlarını nişanları, saylarını və uzunluqlarını, həmçinin kubmetrlə beton həcmini göstərən cədvəl var.

Hər dəyişiklik saxlanılmazdan əvvəl yoxlanılır. Qurula bilməyən dəyişiklik rədd edilir və status panelində səbəb göstərilir, məsələn: "Örtük bu bünövrədə çubuqlar üçün yer qoymur.", "Bünövrə örtüyün içində iki qat çubuq üçün çox dayazdır." və ya "Başlanğıc çubuqlar 75 mm örtüklə bünövrənin içinə sığmır."

Qurula bilən, lakin nəzarət tələb edən dəyişikliklər bünövrənin altında və {{ui:Problemlər}} sekməsində siyahılanır:

- "#11 çubuqları 59.6 mm aralıqla 35.8 mm-dən az təmiz boşluq buraxır (ACI 318-19 25.2.1)." Çubuqlar arasındakı təmiz boşluq ən azı çubuğun diametri və ən azı 25.4 mm olmalıdır.
- "#5 qarmaqlar 254 mm dərinlik tələb edir; örtüyün içinə yalnız 150 mm sığır." Qarmaq ayaqları bu zaman sığması üçün qısaldılır, buna görə artıq standart qarmaqlar deyil.
- "Başlanğıc qarmaqlar örtüyə daxil olur."
- "Başlanğıc çubuqlar minimum təmiz aralıqdan yaxındır."

## Çubuq nişanları və əyilmə cədvəli

Eyni ölçü, forma və ölçülərə (millimetrə qədər) malik çubuqlar bütün bünövrələr üzrə eyni çubuq nişanını paylaşır. Nişanlar `<bar number>F<n>` kimi yazılır: 5F1, 5F2 #5 çubuqlar üçün, 6F1 ilk #6 çubuğu üçün və s. Eyni ölçü, beton, şəbəkə və başlanğıc çubuqlara malik bünövrələr bünövrə nişanını paylaşır: F1, F2 …

1. Aşağıdakı {{ui:Əyilmə cədvəli}} sekməsini açın. Hər sətir bir çubuq nişanıdır: ölçü, forma, A, B və C ölçüləri, say, kəsim uzunluğu, ümumi uzunluq, metrə düşən kütlə, hər birinin çəkisi, ümumi çəki və çubuğun istifadə yeri.
2. Sekmədə {{ui:CSV yüklə}} seçin və ya {{ui:Çıxış}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Əyilmə}} seçin. Fayl `<name> bending schedule.csv` adı ilə yüklənir.

Formalar DetailCraft-ın öz kodlarıdır, heç bir standartın deyil: S düz, L bir əyilmə, U iki əyilmə. Ölçülər xaricdən xaricə verilir; kəsim uzunluğu əyilmələr boyunca dəqiq mərkəz xəttinin uzunluğudur. Bax: [Armatur arayışı](topic:rebar-reference).

## Nə yoxlanılmır

- Ankraj və üst-üstə düşmə uzunluqları, və başlanğıc çubuqların üstdəki sütun üçün kifayət qədər uzun olub-olmaması.
- Təmiz aralıq qaydasının aqreqat ölçüsü hissəsi (DetailCraft qarışığı bilmir).
- Yuxarıdakı sütun və ya baza lövhəsi ilə bağlı hər şey: bünövrələr və polad ayrı-ayrılıqdadır.

Həmçinin bax: [Hələ hazır olmayanlar](topic:not-built-yet).
