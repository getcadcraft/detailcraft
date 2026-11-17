---
title: Toqquşmaları yoxlayın
summary: Bir-birinə girən elementləri, lövhələri və bünövrələri tapın, birləşmənin bir-birinə çatmaq niyyətində olduğu hissələri nəzərə almayın və hər toqquşmaya keçin.
keywords: toqquşma, toqquşma yoxlaması, kollizya, müdaxilə, örtüşmə, kəsişmə, sərt toqquşma, koordinasiya, model yoxlaması
from: 04d72d3b
---

{{ui:Toqquşmalar}} sekmesini görünüşün altında açın və {{ui:İndi yoxla}} seçin. DetailCraft göstərilən fazalardakı hər hissə cütünə baxır: polad poladın içinə və polad bünövrənin içinə. Sekmə hər toqquşmanı ən dərindən başlayaraq siyahıya alır, bunlarla birlikdə:

- iki hissə, hissə markası (və ya bünövrə markası) və profili ilə;
- **Örtüşmə (mm)**: bir hissənin nöqtəsi digərinin içində nə qədər dərindir, ən yaxın üzə qədər;
- **Yaxında**: onun olduğu şəbəkə kəsişməsi və səviyyə, və ya onun koordinatları;
- {{ui:Göstər}}: hər iki hissəni seçir və yeri görünüşün ortasına gətirir.

Sekmənin başlığı son yoxlamanın neçə toqquşma tapdığını göstərir. Yoxlama özbaşına işləmir: modeli dəyişdikdən sonra siyahı bunu bildirir və {{ui:İndi yoxla}} onu yenidən işə salır.

## Toqquşma olmayanlar

- Yalnız toxunan hissələr: flanşa qarşı lövhə, baza lövhəsi onun bünövrəsində, iki elementin ucu-ucuna birləşməsi. **Tolerantlıq (mm)** iki hissənin bir-birinin içinə nə qədər girə biləcəyini təyin edir, bundan sonra sayılır (başlanğıcda 1 mm; 50-yə qədər).
- Birləşmənin birləşdirdiyi hissələr: son lövhə onun tirinə və ona bolt ilə bağlandığı sütun flanşına, həmin birləşmənin tiri və sütunu, baza lövhəsi sütunu ilə, kəsilmiş lövhələr hər iki parçası ilə, diaqonal qussetı ilə (borunun yuvası modeldə kəsilmir). Birləşmə onların bir-birinə çatmasını nəzərdə tutur.
- Baza lövhəsinin altındakı bünövrədə kəsilmə çıxıntısı (o, qrut yuvasında oturur).
- Boltlar və ankerlər (deşiklərdən keçirlər) və armatur.
- Gizli fazalardakı hissələr. Bax: [Fazalar](topic:phases).

Diaqonal və ya tir sütuna birləşmə olmadan girirsə, bu **toqquşmadır**: həmin birləşmə hələ də birləşmə tələb edir. Nümunə çərçivənin diaqonalı bunu göstərir: onun qussetı yoxdur. Onu seçin və {{ui:Qusset}} seçin ([Diaqonal qussetləri](topic:brace-gussets)); toqquşmaları da yox olacaq.

## Bilmək yaxşıdır

- Örtüşmə materialın içinə dərinliyi ölçür, ona görə də nazik sütun gövdəsinə və ya flanşa girmiş elementdə uzaqlara getsə də yalnız bir neçə millimetr göstərir.
- Hissələr kəsildikləri kimi yoxlanılır: çıxıntılar və tirin son lövhələrdəki geri kəsilməsi nəzərə alınır. Deşiklər nəzərə alınmır.
