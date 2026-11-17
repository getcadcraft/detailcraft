---
title: Mərhələ üzrə material və çəki hesabatı
summary: Hər mərhələ üçün kəsik uzunluqları, saylar, çəkilər və boya sahələri, bolt və armaturla birlikdə, cədvəl, CSV və ya PDF kimi.
keywords: hesabat, çəki, tonaj, kq, boya, boya sahəsi, səth sahəsi, örtük, kəsik uzunluğu, material siyahısı, mərhələ, BOM, csv, pdf
from: 337d6d92
---

{{ui:Çıxış}} qrupunda {{ui:Daha çox}} açın və {{ui:Mərhələ üzrə çəki hesabatı}} seçin, və ya görünüşün altındakı {{ui:Mərhələ üzrə}} sekmesini açın. Burada göstərilir:

- **Mərhələ üzrə xülasə**: hər mərhələ üçün hissələrin sayı, polad çəkisi, boya sahəsi, boltlar və ankerlər və armatur; sonra cəmlər.
- **Hər mərhələ üçün bir cədvəl**: hər hissə işarəsi, onun növü, profili, materialı, kəsik uzunluğu, sayı, hər birinin çəkisi, çəkisi və boya sahəsi ilə; sonra onun boltları və ankerləri.

{{ui:CSV yüklə}} eyni cədvəlləri bir CSV faylında saxlayır (`<name> weight report.csv`). {{ui:PDF yüklə}} [DetailCraft parametrləri](topic:settings#drawings)-dəki vərəq ölçüsündə hesabat hazırlayır: əvvəldə xülasə, sonra hər mərhələ, uzun cədvəllər növbəti səhifəyə keçir və hər səhifə nömrələnir.

## Rəqəmlər necə hesablanır

- **Çəkilər** ümumidir, BOM-da olduğu kimi: profilin metrə çəkisi, kəsik uzunluğuna vurulmuş. Deşiklər və kəsiklər çıxılmır.
- **Boya sahəsi** kəsik uzunluğu boyunca profilin xaricidir: I-profil üçün flanec və gövdənin hər üzü, lövhə üçün hər iki üz və kənarlar, boru üçün yalnız xarici. Uclar və deşiklər sayılmır.
- **Armatur** mərhələnin təməllərindəki çubuqların çəkisidir, [əyilmə cədvəlindən](topic:footings-and-rebar).
- Birləşmənin lövhələri və boltları əsas elementinin mərhələsində sayılır. Bax: [Mərhələlər](topic:phases).

[Mərhələ üzrə işarələr](topic:phases#marks-per-phase) yandırılıbsa, hər mərhələnin öz işarələri olur (1-b1, 2-b1). Söndürülübsə, işarə bir neçə mərhələdə görünə bilər: hər mərhələ sahib olduğu parçaları siyahılayır.
