---
title: Şəbəkə və səviyyələri qurun
summary: Şəbəkə xətlərini, onların aralıqlarını və hər elementin yerləşdiyi səviyyələri yazın.
keywords: şəbəkə, şəbəkələr, oxlar, şəbəkə xətləri, səviyyələr, yüksəkliklər, mərtəbələr, döşəmələr, aralıq, qurulum
from: 9cad233c
---

Hər DetailCraft elementi səviyyədə şəbəkə kəsişməsinə yerləşdirilir. Əvvəlcə şəbəkələri və səviyyələri təyin edin; sonra onları dəyişə bilərsiniz.

## Şəbəkələr burada necə işləyir

- **Rəqəmli xətlər** bir istiqamətdə, **hərfli xətlər** digər istiqamətdə uzanır. Adlar sadəcə adətdir: etiket 8 simvola qədər istənilən mətn ola bilər (1, 2, 3 və ya A1, A2, ya da 10, 20).
- Koordinatları yox, etiketləri və aralarındakı aralıqları yazırsınız. Hər dəstin birinci xətti 0-dadır.
- Rəqəmli xətlər sabit x xətləridir; hərfli xətlər sabit y xətləridir. Yəni 1-dən 2-yə olan tir x boyunca, A-dan B-yə olan tir isə y boyunca uzanır.
- Bütün qiymətlər millimetrlə verilir.

Yeni model 1 2 3 rəqəmli xətlərlə (aralıqlar 6000 6000), A B hərfli xətlərlə (aralıq 6000) və iki səviyyə ilə başlayır.

## Şəbəkələri təyin edin

1. Sol paneldə {{ui:Model}} panelini açın; qapalıdırsa {{ui:Şəbəkə}} bölməsini açın.
2. {{ui:Rəqəmli xətlər}} sahəsində etiketləri boşluqla ayırıb yazın, məsələn `1 2 3 4 5`.
3. Altındakı {{ui:Aralıqlar}} sahəsində hər boşluq üçün bir aralıq yazın, məsələn `6000 6000 7500 6000`. Beş xətt üçün dörd boşluq.
4. {{ui:Hərfli xətlər}} və onun {{ui:Aralıqlar}} sahəsində də eyni işi görün, məsələn `A B C` və `8000 8000`.
5. {{ui:Şəbəkəni tətbiq et}} seçin.

Status panelində "Şəbəkələr yeniləndi." yazılır və görünüş yeni şəbəkəyə miqyaslanır. Vergül də ayırıcı kimi işləyir.

Bir şey tutmursa, heç nə dəyişmir və status panelində səbəb göstərilir, məsələn "Rəqəmli şəbəkələr: hər xətt cütü arasında bir aralıq verin (4)." Digər yoxlamalar: aralıqlar müsbət millimetr olmalıdır, etiketlər fərqli olmalıdır və hər istiqamətdə ən çox 60 xətt ola bilər.

:::note
Şəbəkə yerdəyişəndə elementlər koordinatlarını saxlayır. Polad yerləşdirdikdən sonra aralığı dəyişsəniz, polad yerində qalır və artıq şəbəkə üzərində olmur. Əvvəl şəbəkəni dəyişin, və ya elementləri uclarının koordinatlarını redaktə edərək yerdəyişdirin.
:::

## Səviyyələri təyin edin

1. {{ui:Model}} panelində {{ui:Səviyyələr}} açın.
2. Hər sətirdə səviyyə adı və millimetrlə hündürlüyü var. İstədiyiniz kimi redaktə edin.
3. Başqa sətir üçün {{ui:Səviyyə əlavə et}} seçin. Ad "Səviyyə 3" (və s.) olur və ən yüksək səviyyədən 4000 mm yuxarıda yerləşdirilir; lazım gələrsə hər ikisini dəyişin.
4. Səviyyəni silmək üçün sətirin sonundakı × düyməsini seçin.
5. {{ui:Səviyyələri tətbiq et}} seçin.

Siz {{ui:Səviyyələri tətbiq et}} seçənə qədər heç nə dəyişmir. Səviyyələr tətbiq ediləndə hündürlüyə görə sıralanır. Hər səviyyənin adı olmalıdır, iki səviyyə eyni adı ola bilməz və ən azı bir səviyyə saxlamalısınız.

Səviyyələr sıfırdan aşağı ola bilər (zirzəmi `-3500`) və bərabər aralıqlı olmaları tələb olunmur.

## Səviyyələrdən necə istifadə olunur

- Səviyyədə yerləşdirilən sütun növbəti səviyyəyə, və ya {{ui:Yuxarıya qədər}} sahəsində seçdiyiniz səviyyəyə qədər uzanır.
- Tirlər və lövhələr klikləndiyiniz səviyyədə iki kəsişmə arasında yerləşdirilir.
- Bünövrələr klikləndiyiniz səviyyədə, yuxarı tərəfi həmin səviyyədə olacaq şəkildə yerləşdirilir.
- {{ui:Plan}} hər dəfə bir səviyyəyə yuxarıdan baxır.
- IFC ixracı hər səviyyə üçün bir bina mərtəbəsi yaradır.

## Geri alma

Şəbəkə və səviyyə dəyişiklikləri digər redaktələr kimidir: {{key:Mod+Z}} əvvəlki şəbəkəni geri qaytarır.

## Növbəti

[Sütunları, tirləri və bağları yerləşdirin](topic:place-members)
