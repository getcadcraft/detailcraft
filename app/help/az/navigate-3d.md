---
title: 3D görünüşdə hərəkət edin
summary: Siçan, trekpad və ya toxunuş ekranı ilə fırladın, sürüşdürün və miqyası dəyişin; və nə vaxt Plan və Fasad istifadə etmək lazım olduğu.
keywords: fırlatma, döndərmə, sürüşdürmə, miqyas, naviqasiya, görünüş, kamera, trekpad, toxunuş, plan, fasad, sığdır, siçan
from: 02c9c7b9
---

Görünüşün üç rejimi var, görünüş panelində seçilir: {{ui:3D}}, {{ui:Plan}} və {{ui:Fasad}}. Siçan düymələri 3D-də Plan və Fasaddakından fərqli işləyir, buna görə hər iki cədvəli oxuyun.

## 3D-də

:::mouse
| Məqsəd | Bunu edin |
|---|---|
| Modeli ətrafında fırlatmaq | Sol düymə ilə sürükləyin |
| Sürüşdürmək | Sağ düymə ilə sürükləyin, ya da {{key:Shift}} basıb sol düymə ilə sürükləyin |
| Miqyas | Təkəri çevirin, ya da orta düymə (təkər basılı) ilə yuxarı-aşağı sürükləyin |
| Detal seçmək | Ona klik edin (bir neçə pikseldən az hərəkət edən klik) |
| Bütün modeli görmək | Görünüş panelinin sağ ucundakı sığdır düyməsi |
:::

:::touch
| Məqsəd | Bunu edin |
|---|---|
| Modeli fırlatmaq | Bir barmaqla sürükləyin |
| Sürüşdürmək | İki barmaqla sürükləyin |
| Miqyas | İki barmaqla sıxın |
| Detal seçmək | Ona toxunun |
| Bütün modeli görmək | Görünüş panelinin sağ ucundakı sığdır düyməsi |
:::

Yuxarı sağda (görünüş panelinin altında) olan görünüş küpü modellə birlikdə fırlanır: istənilən üzə, kənara və ya künca klik edərək oradan baxın, fırlatmaq üçün sürükləyin, və ya ev düyməsinə klik edərək başlanğıca qayıdın. Bax: [Görünüş küpü](topic:view-cube).

Model görünüşün ortası ətrafında fırlanır, təkər isə miqyası göstəriciyə yox, görünüşün ortasına doğru dəyişir. Bir künca yaxından baxmaq üçün əvvəlcə onu ortaya sürüşdürün, sonra miqyas edin.

## Plan və Fasadda

Bu görünüşlər modelə düz baxır və fırlana bilməz.

:::mouse
| Məqsəd | Bunu edin |
|---|---|
| Sürüşdürmək | Sol və ya sağ düymə ilə sürükləyin |
| Miqyas | Təkəri çevirin, ya da orta düymə ilə yuxarı-aşağı sürükləyin |
| Detal seçmək | Ona klik edin |
:::

:::touch
| Məqsəd | Bunu edin |
|---|---|
| Sürüşdürmək | Bir barmaqla sürükləyin |
| Miqyas | İki barmaqla sıxın (iki barmaqla sürükləmə də sürüşdürür) |
| Detal seçmək | Ona toxunun |
:::

## Mac trekpadində

:::mac
- **Miqyas:** iki barmaqla yuxarı və ya aşağı sürüşdürün, ya da sıxın. Hər ikisi görünüşə miqyas kimi çatır.
- **Fırlatma (3D):** trekpadə basın və bir barmaqla sürükləyin. Toxunaraq klik istifadə edirsinizsə, iki dəfə toxunub sürükləmək də işləyir, əgər **System Settings, Accessibility, Pointer Control, Trackpad Options** bölməsində sürükləmə aktivdirsə.
- **Sürüşdürmə (3D):** {{key:Shift}} basıb sürükləyin. {{key:Ctrl}} və ya {{key:Mod}} basıb sürükləmək də sürüşdürür. İki barmaqla klik sağ klikdir, lakin trekpadda onunla sürükləmək əlverişsizdir.
- **Sürüşdürmə (Plan və Fasad):** sadəcə sürükləyin.
- Magic Mouse-un orta düyməsi yoxdur: sürüşdürmək üçün {{key:Shift}} sürükləməsindən, miqyas üçün səthində sürüşdürmədən istifadə edin.
:::

Siçansız sağ klik və sürüşdürmə haqqında daha çox: [Düymələr, siçanlar və trekpadlər](common:keys).

## Plan və Fasad yerləşdirməni asanlaşdırır

{{ui:3D}}-də müxtəlif səviyyələrdəki kəsişmələr ekranda bir-birinin üstündə ola bilər və klik ən yaxın nöqtəyə gedir. {{ui:Plan}} və {{ui:Fasad}}-da yalnız baxdığınız səviyyənin və ya şəbəkə xəttinin nöqtələri seçilə bilər.

1. {{ui:Plan}} seçin, sonra düymələrin yanındakı siyahıdan səviyyə seçin. Görünüş həmin səviyyəyə yuxarıdan baxır; ondan 1,5 m yuxarıda olan hər şey kəsilir.
2. Və ya {{ui:Fasad}} seçin, sonra hərflənmiş şəbəkə xəttini ("Şəbəkə A", "Şəbəkə B" …) seçin. Görünüş həmin xəttə düz baxır; yalnız ondan 1 m daxilindəki polad göstərilir.

Fasadlar yalnız hərflənmiş şəbəkə xətlərindədir. Nömrələnmiş şəbəkə xətləri üzərində (A-dan B-yə gedən çərçivə) işləmək üçün {{ui:3D}} istifadə edin, ya da {{ui:Şəbəkə ilə əlavə et}} formasına yazaraq yerləşdirin. Bax: [Sütunları, tirləri və diaqonalları yerləşdirin](topic:place-members#place-by-grid-without-clicking).

## Seçmə

- Detalı seçmək üçün ona klik edin. Vurğulama rəngi alır və {{ui:Xüsusiyyətlər}} paneli onu göstərir.
- Boş yerə klik edin, ya da seçimi təmizləmək üçün {{key:Esc}} basın.
- Polad betondan üstündür: şəffaf bünövrənin içindəki sütuna klik sütunu seçir. Bünövrəni seçmək üçün onu sütundan kənarda, ya da onun çubuqlarından birində klik edin.
- Bolta və ya uc lövhəsinə klik onun birləşməsini seçir.
- Plan və Fasadda kəsilmiş detallara klik etmək olmur.
- {{key:Shift}} (və ya {{key:Ctrl}}, ya da {{key:Mod}}) basıb klik edin, detalı seçimə əlavə etmək və ya çıxarmaq üçün; {{key:Mod+A}} hər şeyi seçir. Hələ pəncərə (qutu sürükləməklə) seçim yoxdur. Bir neçə detal ilə nə edə bilərsiniz: [Kopyalama, yapışdırma və surət çıxarma](topic:copy-paste).

Siyahılardan da seçə bilərsiniz: soldakı {{ui:Detal nişanları}}-nda nişana, {{ui:Materialların siyahısı}} sekmesində detal nişanına klik edin, ya da {{ui:Problemlər}}-də sətrin yanındakı {{ui:Seç}}-i seçin.

## Görünüş səhv göründükdə

- Modeli itirmisiniz? Sığdır düyməsini seçin.
- Görünüş boş və ya boz rəngdədir və WebGL haqqında mesaj var: bax [Problemlərin həlli](topic:troubleshooting#the-3d-view-is-missing).
- 3D görünüş olmadan da hər şey işləyir, ona klikdən başqa: panellər, hesabatlar və ixraclar hamısı işləyir, və {{ui:Şəbəkə ilə əlavə et}} detalları yazmaqla yerləşdirir.
