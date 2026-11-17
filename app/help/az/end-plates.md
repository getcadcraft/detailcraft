---
title: Tirləri son lövhələrlə sütunlara birləşdirin
summary: Tir sütunun flanşına və ya qabırğasına çatdığı yerə bolt ilə birləşən son lövhələr əlavə edin, lövhəni, boltları və qaynağı təyin edin və birləşməni hər oxşar birləşməyə kopyalayın.
keywords: son lövhə, endplate, moment birləşməsi, bolt birləşməsi, birləşmə, boltlar, qaynaq, uzadılmış son lövhə, səviyyəli, oxşar, birləşməni kopyala, komponent
from: 21e028b2
---

Son lövhə birləşməsi lövhəni tirin ucuna qaynaqlayır və sütunun flanşına və ya qabırğasına bolt ilə bağlayır. DetailCraft lövhəni yerləşdirir, tiri geriyə kəsir, lövhədə və sütun flanşında uyğun deşiklər açır, boltları və qaynağı əlavə edir və kənar məsafələrini və aralıqları yoxlayır.

:::warning
DetailCraft birləşmələri layihələndirmir. Parametrlər sizin dəyişməyiniz üçün başlanğıc dəyərlərdir; heç nə möhkəmliyi yoxlamır. Kənar və aralıq xəbərdarlıqları EN 1993-1-8 Cədvəl 3.3-ün minimumlarından istifadə edir, bunlar sizin işlədiyiniz qaydalardan fərqli ola bilər.
:::

## Nəyi birləşdirə bilər

- Səviyyəli tir (hər iki ucu eyni hündürlükdə), dik (fırlanma 0), I-forma profilli.
- Şaquli I-forma sütunun **flanşına** və ya **qabırğasına**, ona perpendikulyar.
- Tirin ucu sütunun xəttində, sütunun aşağı və yuxarısı arasında olmalıdır.

Əyri və ya meylli tirlər və I-olmayan kəsiklər səbəbi ilə rədd olunur: bunlar üçün [şir lövhələrindən](topic:shear-tabs) istifadə edin. Qabırğaya birləşdirildikdə lövhə və tir flanşları sütun flanşları arasında sığmalıdır; DetailCraft sığmadıqda xəbərdarlıq edir.

:::tip
Fırlanma 0 olduqda sütunun flanşları nömrələnmiş şəbəkə istiqamətinə (x) baxır. A-dan B-yə gedən tir qabırğaya çatır və qabırğada son lövhə alır.
:::

## Tirə son lövhələr əlavə edin

1. {{ui:Seç}} ({{key:V}}) seçin və tirə klik edin.
2. {{ui:Birləşdirmə}} qrupunda {{ui:Son lövhələr}} və ya {{ui:Xüsusiyyətlər}} panelində {{ui:Son lövhələr əlavə et}} seçin.
3. Sütun flanşına və ya qabırğasına perpendikulyar çatan tirin hər sərbəst ucu lövhə alır. Status paneli yazır: "2 son lövhə əlavə olundu. Lövhəni, boltları və qaynağı dəyişmək üçün birini seçin; Oxşar belə birləşmələrə kopyalayır."
4. Yeni yaradılmış ilk son lövhə seçilir və onun parametrləri {{ui:Xüsusiyyətlər}} panelində açılır.

Heç nə baş vermirsə, status panelini oxuyun:

- "Bu tir sütun xəttində bitmir. Son lövhələr şaquli sütuna çatan tir ucunda yerləşdirilir."
- "Bu tir sütuna bucaq altında çatır və ya meyllidir: son lövhələr perpendikulyar, səviyyəli birləşmələr üçündür. Şir lövhələrini istifadə edin."
- "Hər iki ucda artıq birləşmələr var."

## Lövhəni, boltları və qaynağı dəyişin

Birləşməni seçmək üçün son lövhəyə (və ya onun boltlarından birinə) klik edin. {{ui:Lövhə, boltlar və qaynaq (mm)}} altında:

| Parametr | Başlanğıc | Nə edir |
|---|---|---|
| Lövhənin qalınlığı | 20 | Lövhənin qalınlığı; həmçinin tirin flanşdan kənarda nə qədər geriyə kəsildiyi |
| Lövhənin eni | 180 | Birləşmə boyunca |
| Tirdən yuxarı uzantı | 0 | Yuxarı flanşdan yuxarı; 0-dan yuxarı olduqda uzadılmış son lövhə olur |
| Tirdən aşağı uzantı | 0 | Aşağı flanşdan aşağı |
| Bolt diametri | 20 | Nominal bolt ölçüsü |
| Deşik diametri | 22 | Lövhədə və sütun flanşında sizin boşluq deşiyiniz |
| Bolt markası | A325 | Mətn; hesab siyahısında çap olunur |
| Bolt sırası | 4 | İki boltluq sıralar, lövhənin hündürlüyünün mərkəzində |
| Sıra addımı | 75 | Sıralar arasında şaquli məsafə |
| Açıqlıq | 100 | Sıranın iki boltu arasında üfüqi məsafə |
| Bolt uzunluq ehtiyatı | 30 | Qayka, şayba və dişə görə tutmaya əlavə olunur; aşağıya bax |
| Künc qaynağının ölçüsü | 8 | Tir ucunun hər tərəfi |
| Lövhə materialı | A36 | Mətn |

Yeni dəyər yazın və {{key:Enter}} və ya {{key:Tab}} basın. Lövhə, deşiklər, boltlar və tirin kəsim uzunluğu dərhal yenilənir. Hər dəyişiklik bir geri alma addımıdır.

Parametrlərin altında birləşmənin yaratdıqlarını görürsünüz:

- {{ui:Boltlar}}: məsələn "8 × 20 × 70 A325 (tutma 36.2)".
- {{ui:Qaynaq}}: ölçüsü, yeri və uzunluğu.
- {{ui:Lövhə}}: ölçüsü və hissə markası.

### Rəqəmlər necə hesablanır

- Tir sütun dərinliyinin yarısı qədər geriyə kəsilir (qabırğada: qabırğa qalınlığının yarısı) üstəgəl lövhənin qalınlığı, beləliklə lövhə üzə oturur.
- Lövhənin hündürlüyü tirin dərinliyi üstəgəl iki uzantıdır.
- Bolt uzunluğu = tutma (lövhənin qalınlığı + sütun flanşının və ya qabırğasının qalınlığı) + ehtiyat, 5 mm-ə qədər yuxarı yuvarlaqlaşdırılır.
- Göstərilən qaynaq uzunluğu tir kəsiyinin perimetridir.

### Xəbərdarlıqlar

Birləşmə yenə qurulur, lakin bunlar altında və {{ui:Problemlər}} sekmesində görünür:

- Bolt sıraları və ya boltlar lövhənin kənarına deşik diametrinin 1,2 × qədərindən yaxındır.
- Sıra addımı deşik diametrinin 2,2 × qədərindən azdır, və ya açıqlıq 2,4 × qədərindən azdır.
- Deşiklər sütun qabırğasına və ya onun kənarına, ya da sütun flanşının kənarından çıxır.
- Lövhə sütun flanşından enlidir, və ya (qabırğada) flanşlar arasındakı boşluqdan enlidir; tir flanşları aralarına sığmır.
- Bolt sırası tir flanşına çox yaxındır, və ya açıqlıq tir qabırğası və onun qaynağı üçün çox sıxdır.

## Hər oxşar birləşməyə kopyalayın

1. Qurduğunuz birləşməni seçin.
2. {{ui:Xüsusiyyətlər}} panelində {{ui:Oxşarlara tətbiq et (n)}} və ya {{ui:Birləşdirmə}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Oxşar}} seçin. Mötərizədəki rəqəm onu neçə birləşmənin alacağıdır.
3. Eyni tir profili və sütun profili olan, eyni növ üzə birləşən, hələ birləşməsi olmayan hər birləşmə eyni parametrlərlə kopya alır. Status paneli neçə olduğunu göstərir.

Kopyalar müstəqildir: sonradan birini dəyişmək digərlərini dəyişmir. Artıq birləşməsi olan birləşmələr toxunulmaz qalır; onları əvəz etmək istəyirsinizsə əvvəlcə silin.

## Köçürmə və silmə

Birləşmələr modeli hər dəyişdikdə parametrlərindən yenidən qurulur, buna görə tiri və ya sütunu köçürmək və ya ölçüsünü dəyişmək son lövhələri də daşıyır. Dəyişiklik birləşmənin artıq uyğun olmadığı anlamına gələrsə, birləşmə modeldə qalır və {{ui:Problemlər}} sekmesi səbəbi göstərir, məsələn "Tirin ucu artıq sütun xəttində deyil."

Birləşməni silmək üçün onu seçin və {{key:Delete}} basın. Tiri və ya sütunu silmək onun birləşmələrini də silir.

Növbəti: [Baza lövhələri və lövbər şpilkalarını əlavə edin](topic:base-plates).
