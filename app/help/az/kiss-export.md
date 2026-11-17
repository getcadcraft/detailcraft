---
title: Fabrikasiya proqramı üçün KISS faylını ixrac edin
summary: Materialların siyahısını KISS 1.1 faylı kimi fabrikasiya idarəetmə (MIS) proqramına göndərin: yığımlar, detallar, mərhələlər ardıcıllıq kimi, deşiklər, kəsiklər və qaynaqlar.
keywords: kiss, kss, mis, fabrikasiya idarəetməsi, istehsal nəzarəti, smeta, materialların siyahısı, bom, ixrac, fabtrol, ardıcıllıq
from: 30cf3951
---

{{ui:Çıxış}} qrupunda {{ui:Daha çox}} açın və {{ui:Fabrikasiya proqramı üçün KISS faylı}} seçin. DetailCraft `<name>.kss` yükləyir — KISS faylı ("Keep It Simple, Steel", versiya 1.1), əksər fabrikasiya idarəetmə proqramlarının materialların siyahısını idxal etdiyi sadə mətn formatı.

## Tərkibi

- Başlıq: iş nömrəsi (model adının ilk səkkiz hərfi və rəqəmi), model adı, tarix və vaxt, və ölçülərin metrik olub-olmaması.
- Hər yığım nişanı üçün: əsas detal (miqdar = yığımdan neçə ədəd), çertyoj sətri (A-B1 və s., yığım çertyojunun nömrəsi), yığım sətri (ad, növ, çəki, ümumi uzunluq, dərinlik və en), yığımın olduğu hər [mərhələ](topic:phases) üçün bir ardıcıllıq sətri və əmək sətirləri: deşiklər (neçə ədəd, diametr, qalınlıq boyunca), kəsiklər və qaynaqlar.
- Sonra ona bağlı olan hər detal, standartın tələb etdiyi kimi **ümumi** miqdarla (hər yığıma görə × yığımların sayı).
- Çertyoj BOLTS üzrə sərbəst boltlar və anker çubuqları, yığım FIELD.
- Hər sətir növü (W, C, L, HSS, PL, və ya fərdi profil üçün MI), ölçüsü, sinfi, kəsmə uzunluğu millimetrlə, detal adı və çəkisini verir.

## İmperial yoxsa metrik

[DetailCraft parametrlərində](topic:settings) **KISS faylı ölçüləri** seçir:

- **Avtomatik** (başlanğıc): hər element AISC profili olduqda imperial, əks halda metrik.
- **İmperial**: AISC təyinatı ilə profillər (W 16X26, HSS 4X4X.250); DetailCraft-ın millimetrdə saxladığı lövhələr və boltlar ən yaxın 1/16 düymə; çəkilər funtla.
- **Metrik**: Avropa profilləri adı ilə (IPE300), lövhələr qalınlıq X en millimetrlə; çəkilər kiloqramla.

Uzunluqlar parametrdən asılı olmayaraq həmişə millimetrlə, iki onluq rəqəmlə olur: KISS standartı bunu tələb edir və qəbul edən proqram onları çevirir.

:::note
Siniflər standartın səkkiz simvoluna qısaldılır: A572 Gr 50, A572-50 olur. Adlardakı vergüllər boşluğa çevrilir (formatda dırnaq yoxdur). Bir idxalı fabrikasiya proqramınızda yoxlayın, sonra ona etibar edin: DetailCraft-ın KISS faylları hələlik burada standarta görə yoxlanılır, fabrikasiya proqramında yox.
:::
