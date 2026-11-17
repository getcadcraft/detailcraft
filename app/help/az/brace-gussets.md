---
title: Diaqonal qussetləri
summary: Diaqonal ucunu qusset lövhəsi ilə sütun və ya tirə birləşdirin: bucaqlar və yastı çubuqlar boltlanır, borular yuvalanır və qaynaqlanır.
keywords: qusset, qusset lövhəsi, diaqonal, bağlama, şaquli bağlama, bucaq diaqonalı, yastı çubuq, lent, HSS diaqonal, bıçaq lövhəsi, yuvalı boru, birləşdirmə
from: 22f6598d
---

Diaqonal qussetı diaqonalın üstündə dayandığı sütun (və ya tir) üçün zavodda qaynaqlanmış lövhədir, diaqonalın müstəvisində. DetailCraft birləşmədə hər şeyə toxunmayacaq şəkildə diaqonalı kəsir, qussetin yerini və ölçüsünü təyin edir və diaqonalı ona birləşdirir: **bucaq** və ya **yastı çubuq** bir sıra boltla, **boru** (kvadrat, düzbucaqlı və ya dairəvi HSS) isə qussetin üstünə yuvalanır və qaynaqlanır.

## Harada işləyir

- Diaqonalın ucu sütun və ya tirin xəttində yerləşir (1 mm dəqiqliklə) və diaqonal həmin xəttə demək olar ki, paralel deyil. Dayaq varsa, sütun dayaqdır; əks halda tir.
- Qusset diaqonalın müstəvisində və dayağın xəttində yerləşir. **Bucağın** bir qolu həmin müstəvidə olmalıdır, **yastı çubuğun** isə üzü: diaqonalı ({{ui:Fırlanma (°)}}) bu olana qədər çevirin. Bucağın qolları müstəvi ilə 45° olanda DetailCraft bunu deyir və heç nə qurmur.
- Diaqonal kimi I-kəsik və kanallar birləşdirilmir.

## Qussetləri əlavə edin

1. Bir və ya bir neçə diaqonal seçin.
2. {{ui:Birləşdirmə}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Qusset}} seçin.
3. Seçilmiş diaqonalların sütun və ya tirə düşən və qussetsiz hər ucu bir qusset alır.

Qussetin tənzimləmələrini dəyişmək üçün onu seçin (lövhəyə klikləyin). {{ui:Oxşarlara tətbiq et (n)}} onu hər boş diaqonal ucuna, eyni diaqonal və dayaq profilləri ilə kopyalayır.

## DetailCraft nəyi hesablayır

- **Geri kəsmə.** Diaqonal həmin ucda künclərini təmizləyənə qədər qısaldılır: {{ui:Diaqonal təmizliyi}} (25) qədər, birləşmədəki hər element (yanındakı və ya element burada bitəndə onun ucundan kənardakı) və sütunun altındakı baza lövhəsi qədər.
- **Boltlar (bucaqlar, yastılar).** {{ui:Boltlar}} (3) diaqonal boyunca bir sıra ilə, birinci {{ui:Bolt uc məsafəsi}} (40) kəsilmiş ucdan, {{ui:Bolt addımı}} (75) ilə. Bucaqda onlar qussetin müstəvisindəki qoldan keçir, dabandan {{ui:Bolt aralığı}} qədər (0 = qolun ortası); yastı çubuqda onun mərkəz xətti üzrə (və ya aralıq qədər ondan kənarda). Bolt tutuşu = qol və ya yastı + qusset.
- **Qusset.** Düzbucaqlı: dayağın üzündən son boltun ötəsinə uc məsafəsi qədər kənara və dayağın boyunca boltların tələb etdiyi qədər. Bucağın qolunun arxasına (və ya yastının üzünə) yaslanır. Boru üçün o, borunun ortasından keçir, {{ui:Qusset üzərində boru örtüyü}} (200) qədər borunun üstünə, qaynaqlar üçün yer buraxılaraq.
- **Birləşmələr.** Sütun bazasında qusset baza lövhəsinə qədər endirilir. Tirin birləşmə ilə kəsişdiyi yerdə (tir-sütun künc tərəfə qalxan diaqonal) qusset tirin altında və ya üstündə qalır. Əgər bu, boltları və ya örtüyü uc məsafəsi olmadan qoyursa, DetailCraft xəbərdarlıq edir.
- **Qaynaqlar.** Qussetin dayağa, hər iki tərəfdən. Boru qussetə, örtük boyunca dörd xətt.

## Yaxşı bilmək üçün

- Qusset dayağın yığımına aiddir (zavodda qaynaqlanır). Diaqonal deşikləri açılmış halda göndərilir və öz NC faylına gedir.
- Borunun yuvası modeldə kəsilmir; [toqquşma yoxlanışı](topic:clash-check) diaqonalı və onun qussetini kənarda qoyur.
- Qusset toxunduğu tirə qaynaqlanmır. Həm tirə, həm sütuna qaynaqlanan künc qussetləri, faskalı künclər və Uniform Force Method birləşməsinin iş nöqtəsi planı hələ hazırlanmır.
- DetailCraft qussetləri və boltları layihələndirmir (möhkəmlik yoxlamaları yoxdur); xəbərdarlıqlar yalnız məsafə və yerləşmə ilə bağlıdır.
