---
title: NC fayllarını sexə göndərin
summary: Hər detal nişanı üçün DSTV NC fayllarını (I-profillər, kanallar, bucaqlar, HSS, lövhələr) ixrac edin, zip edin və maşına çatmazdan əvvəl yoxlayın.
keywords: nc, nc1, dstv, cnc, maşın, tir xətti, deşik xətti, lövhə kəsimi, ixrac, istehsal, zip
from: 598b6091
---

DetailCraft hər detal nişanı üçün bir DSTV NC faylı (`.nc1`) yazır: I-profillər, kanallar, bucaqlar, düzbucaqlı və dairəvi HSS və lövhələr üçün, və onları birlikdə zip edir. Tir xətləri və lövhə maşınları bu faylları mişarlamaq, deşmək və kəsmək üçün oxuyur.

## İxrac

1. Əvvəlcə {{ui:Problemlər}} sekmesini təmizləyin: qurula bilməyən birləşmə heç bir deşik əlavə etmir.
2. Modeli saxlayın ({{key:Mod+S}}), beləliklə NC faylları saxlanmış modelə uyğun olsun.
3. {{ui:Çıxış}} qrupunda {{ui:NC fayllar}} seçin.
4. Brauzer `<name> NC.zip` faylını yükləyir. Status sətri neçə fayl saxladığını bildirir və yazmadığı detalların nişanlarını sadalayır (kəsimli bucaq və ya dairəvi boru).

Zip-in içində hər fayl öz detal nişanı ilə adlanır: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip sıxılmayıb və istənilən zip alətində açılır.

Əgər modeldə heç bir detal yoxdursa, status sətri bunu bildirir.

## Hər faylda nə var

- **Başlıq (ST):** modelin adı sifariş kimi, detal nişanı çertyoj və parça kimi, mərhələ 1 (və ya detalın mərhələsi), material markası, miqdar, profil və onun ölçüləri, metr başına kütlə və metr başına boya səthi. Mişar kəsikləri kvadratdır.
- **Xarici konturlar (AK):** gövdənin konturu, kəsimlər çıxarılmış şəkildə, və hər flanş konturu, kəsim onu çıxardığı yerdə qısaldılmış.
- **Deşiklər (BO):** hər deşik öz üzü, mövqeyi və diametri ilə, son lövhələr və baza lövhələri tərəfindən yaradılan deşiklər daxil.

Sahə-sahə, üz və koordinat qaydaları ilə: [NC faylının sahələri](topic:nc1-fields).

## Nə yazılmır

- Kəsimli bucaqlar və kəsimli dairəvi borular: NC faylı yoxdur. Onların nişanları status sətrində sadalanır.
- Dairəvi borularda deşiklər (DetailCraft onları yaratmır).
- Skoslar, daxili konturlar, detal işarələnməsi (cızma) və kvadrat olmayan mişar bucaqları.
- Yuvalı deşiklər (DetailCraft yalnız dairəvi deşiklər yaradır).

## Emaldan əvvəl yoxlayın

DetailCraft-ın NC faylları öz test paketi ilə yenidən oxunur, lakin onlar sizin sexinizin maşınlarında işlədilməyib.

1. Faylları sexinizin NC baxıcısında və ya maşın proqramında açın və onları emal çertyojları ilə müqayisə edin.
2. Partiyanı işə salmazdan əvvəl hər növdən bir detalı maşında yoxlayın.
3. Proqramınızın flanşların y koordinatlarını və kanalların üzlərini necə oxuduğunu yoxlayın: DetailCraft flanş y-ni arxa kənardan ölçür və kanalları standartın çəkdiyi kimi arxası üstə yerləşdirir (bax: [NC faylının sahələri](topic:nc1-fields#faces-and-coordinates)).
