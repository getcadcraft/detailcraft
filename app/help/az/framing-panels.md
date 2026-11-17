---
title: Taxta və yüngül polad karkas panelləri
summary: Taxta və ya yüngül polad divar, döşəmə və dam panellərini hər detalla, kəsim siyahısı, emal çertyoju və alınacaq ehtiyatla qurun.
keywords: karkas, taxta, kereste, ağac, yüngül polad, soyuq formalanmış, dirək, qabırğa, dam qabırğası, üst tir, əsas dirək, köməkçi dirək, qısa dirək, kəsim siyahısı, emal çertyoju, panel
from: 3e38ffb9
---

{{ui:Karkas}} sekməsi sizin təsvir etdiyiniz panelləri qurur və karkas briqadasının və ağac anbarının tələb etdiyini verir. Panellər model faylında saxlanılır.

:::warning
Ölçülər, aralıqlar və üst tirlər sizindir. DetailCraft bu aralıqda bu dirəyin həmin divarı daşıdığını və ya bu üst tirin həmin açılışı keçdiyini yoxlamır: bu, sizin normanızın cədvəlləri və mühəndisinizin işidir.
:::

## Panel əlavə etmək

{{ui:Divar əlavə et}}, {{ui:Döşəmə əlavə et}} və ya {{ui:Dam əlavə et}} seçin, sonra ölçüləri millimetrlə, materialı (taxta və ya yüngül polad) və element ölçüsünü doldurun. Taxta ölçüləri nominal adları ilə və hamarlanmış ölçüləri ilə verilir (2×4 = 38 × 89 mm). Polad dirəklər dərinlik və qalınlıqla adlandırılır, məsələn `C92-1.2`.

## Divarlar

Divarın aşağı lövhəsi, bir və ya bir neçə üst lövhəsi (poladda bir relsi), uc dirəkləri, verdiyiniz aralıqda dirəklər və hər açılış üçün: iki əsas dirək, iki köməkçi dirək, seçdiyiniz ölçü və qatlarda üst tir, və üst tirin üstündə (və pəncərənin astanasının altında) qısa dirəklər. Hər açılışa sol uçdan məsafəsini, enini, və döşəmə altlığından ölçülmüş kobud açılışın yuxarı və aşağı sərhədini verin; qapının aşağısı 0-dır.

## Döşəmələr və damlar

Döşəmənin eni boyunca uzanan tirləri, uzunluğu boyunca açıqlığı, iki ucunda kənar tirləri və, işarələsəniz, orta açıqlıqda bloklamanı var. Dam paneli fronton tipidir: verdiyiniz aralıqla bir cüt qabırğa (uzunluğu yamacda saçağın çıxıntısını daxil edir) və bir zirvə lövhəsi.

## Nə alırsınız

Hər panel parçalarını miqyasda çertyojda hər biri nişanlanmış şəkildə, nişan üzrə kəsim siyahısını və cəmi göstərir. {{ui:Alınacaq ehtiyat}} cədvəli bütün panellərin kəsimlərini ehtiyat uzunluqlarına yerləşdirir: hər çubuğun kəsimlərini qəbul edən ən qısa uzunluq. {{ui:Emal çertyojunu saxla (SVG)}} çertyoju yazır; {{ui:CSV}} düyməsi bütün kəsim siyahılarını və ehtiyat siyahısını yazır.

## Paneli modelə yerləşdirmək

Hər panelin altında harada yerləşəcəyini verin (x, y, z millimetrlə və bucaq) və {{ui:Elementlər kimi yerləşdir}} düyməsini basın: hər parça modelin elementinə çevrilir, hamarlanmış ölçülü kəsiklə və materialın çəkisi ilə (taxta üçün təxminən 500 kq/m³, dirəklər üçün polad). Divar bucaq boyunca aşağı-sol ucundan gedir, aşağısı z-dədir; döşəmənin tirləri aşağı tərəfi z-də olacaq şəkildə yatır; damın fronton fasadı bucaq boyunca gedir, z isə divar lövhələrinin yuxarısındadır. Hər üst tir qatı yanyana bir elementdir. Yenidən basdıqda əvvəl yerləşdirilmiş elementləri əvəz edir, {{ui:Yerləşdirilmiş elementləri sil}} onları çıxarır; hər biri bir geri alma addımıdır. Analiz bu elementləri çıxarır: onlar polad karkas elementləri deyil.

## PDF vərəqləri

{{ui:PDF vərəqləri}} hər panel üçün bir A3 səhifə saxlayır: panel miqyasda, hər parça nişanlanmış, ümumi ölçülər, kəsim siyahısı və başlıq zolağı.

{{ui:Problemlər}} panelində: divarın ucuna və ya başqa açılışa çox yaxın açılış, üst lövhələrin altına sığmayan üst tir, ən uzun ehtiyatdan uzun parça.

{{ui:Problemlər}} paneli həmçinin divar panelləri və beton divarlar üçün **Interfeyslər (LOD 350)** siyahılayır: divarın ucundan və ya yuxarısından keçən açılış, bir-biri ilə üst-üstə düşən iki açılış, və 1000 mm-dən enli, kənar çubuğu olmayan beton divar açılışı. Bunlar məsləhətdir, BimCraft-ın auditinin işlətdiyi eyni qaydalardır; en CadCraft-ın başlanğıc qiymətidir, norma deyil.
