---
title: IFC ixracını müştərinin IDS-i ilə yoxlayın
summary: Sizə verilmiş .ids faylını yükləyin və IFC göndərməzdən əvvəl ona cavab verməyən hər ixrac olunmuş hissəni Problemlər panelində görün.
keywords: ids, information delivery specification, buildingsmart, tələblər, çatdırılma, yoxlama, doğrulama, qa, ifc ixracı, xüsusiyyət, material, satınalma
from: 50d0f785
---

## Nə edəcəksiniz

IDS (Information Delivery Specification, buildingSMART standartı) IFC-nin nəyi ehtiva etməli olduğunun siyahısıdır. DetailCraft ixrac ediləcək IFC-ni ({{ui:IFC}} yazdığı eyni faylı) sizə verilmiş IDS-lə yoxlayır və ondan geri qalan hər hissəni siyahıya alır.

## Addımlar

1. Modelinizi açın və ya çəkin.
2. Alətlər panelinin {{ui:Çıxış}} qrupunda {{ui:IDS-ə görə yoxla…}} klikləyin.
3. {{ui:.ids faylı yükləyin…}} klikləyin və faylı seçin. Heç nə yüklənmir.
4. Nəticəni oxuyun: hər spesifikasiya {{ui:Keçdi}} və ya {{ui:Uğursuz}} və neçə elementə aid olduğu ilə.
5. Problemlər panelini ({{key:Ctrl+Shift+M}}) açın və uğursuzluğa klikləyin: ondan gələn element, birləşmə, pilləkən və ya bünövrə seçilir və görünüş ona yaxınlaşır.

## Nə görməlisiniz

- Hər ixrac olunmuş element və hər buraxılmış tələb üçün bir xəbərdarlıq: spesifikasiyanın adı, IDS-in nəyi tələb etdiyi və ixracın nə verdiyi ilə.
- Yoxlama hesabatı (Problemlər panelində) IDS ilə başlayır: onun adı, versiyası, müəllifi və hər spesifikasiyanın saylarını göstərir.

## Bilmək yaxşıdır

- IDS model faylında saxlanılır, ona görə də modeli açdıqda yenidən yoxlanılır. Onu yükləmək və ya unutmaq geri qaytarıla bilən bir addımdır.
- Hər dəyişiklik bir az sonra yenidən yoxlanılır; böyük modeldə yoxlamalar arasında biraz daha uzun gözləyir.
- İxracın GlobalId-ləri model adından və DetailCraft daxilindəki hissə nömrələrindən alınır, ona görə də hər yoxlamada eyni qalır. Modeli yenidən adlandırmaq hər elementə yeni GlobalId verir.
- Ədədlər SI vahidlərində müqayisə olunur (ixrac millimetrlədir; uzunluqlar əvvəlcə metrə çevrilir).
- IDS-dəki şablonlar bütöv dəyər kimi oxunur. Başlanğıcda `^` və sonda `$` də "bütöv dəyər" kimi qəbul olunur, çünki çox IDS faylları onları belə nəzərdə tutur.

## Növbəti

- [IFC ixracı](topic:ifc-export)
