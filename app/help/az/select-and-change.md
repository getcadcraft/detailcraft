---
title: Pəncərə ilə seçin, köçürün, fırladın, güzgü əksi alın, çoxunu dəyişin
summary: Seçmək üçün pəncərə çəkin, seçilmiş detalları sürükləyib köçürün, seçimi (və ya onun nüsxəsini) köçürün, fırladın və ya güzgü əksini alın, ya da bir neçə elementin profilini, materialını, yerini və ya fırlanmasını eyni anda dəyişin.
keywords: lasso, hasar, sərbəst seçim, sürükləmə, sürüklə və burax, sürükləyərək köçürmə, yapışma, pəncərə, kəsişən pəncərə, qutu seçimi, sürükləyərək seçmə, çox seçmə, köçür, fırlat, güzgü, çevir, kopyala, çoxunu dəyiş, bir neçə element, profil, material, yer, fırlanma, fərqlidir, tor xətti
from: 50b16f9a
---

Bunların hər biri bir geri qaytarma addımıdır: bir {{key:Mod+Z}} hamısını geri qaytarır.

## Pəncərə ilə seçin

- {{ui:Plan}} və {{ui:Fasad}}-da boş yerdən sol düyməni basıb sürükləyin. {{ui:3D}}-də {{key:Shift}} basıb sürükləyin (sadə sürükləmə modeli fırladır).
- Pəncərə üçün **sağa** sürükləyin: tamamilə içində olanı götürür, düz kənarla çəkilir.
- Kəsişən pəncərə üçün **sola** sürükləyin: toxunduğu hər şeyi götürür, kəsikli çəkilir.
- Sürükləməyə başlayarkən {{key:Shift}} basılı saxlasanız, seçim dəyişmək əvəzinə seçilənlərə əlavə olunur.
- Plan və ya fasad yalnız göstərdiyini təklif edir: planın üstündə kəsilmiş detallar və ya fasadın tor xəttindən 1 m-dən çox uzaq olanlar seçilmir.
- Sürükləyərkən {{key:Esc}} pəncərəni buraxır.

### Lasso

[DetailCraft tənzimləmələrində](topic:settings) {{ui:Sürükləyərək seçmə}} altında **Lasso** seçin və eyni sürükləmə düzbucaq əvəzinə sərbəst xətt çəkir.

- İlk yan hərəkəti seçimi təyin edir: **sağa**, tamamilə içində olanı (düz xətt); **sola**, toxunanı (kəsikli).
- Sürükləyərkən {{key:Space}} basın ki, içəridə, toxunan və **hasar** arasında keçid edin: keçdiyi hər şeyi götürən açıq xətt (nöqtəli, narıncı).
- {{key:Shift}} əlavə etmək və {{key:Esc}} buraxmaq pəncərədəki kimi işləyir.

:::touch
Toxunma ekranında bir barmaq plan və fasadı əvvəlki kimi sürüşdürür; detalları toxunaraq seçin.
:::

{{ui:Plan}} və {{ui:Fasad}}-da {{ui:Seç}} aləti açıq olanda sağ və ya orta düymə ilə sürüşdürün.

## Detalları sürükləyib köçürün

1. Əvvəlcə detalları seçin (klik, {{key:Shift}}+klik və ya pəncərə).
2. Seçilmiş detalların birinə basın və sürükləyin. Bütün seçim köçür; nöqtəli kontur hara getdiyini göstərir.
3. Yerləşdirmək üçün buraxın. Buraxmazdan əvvəl {{key:Esc}} hər şeyi yerinə qaytarır.

- {{ui:3D}} və {{ui:Plan}}-da detallar səviyyə boyunca köçür. {{ui:3D}}-də sürüklərkən {{key:Mod}} basılı saxlasanız, onlar yuxarı-aşağı köçür.
- {{ui:Fasad}}-da onlar fasadın içində köçür: tor xətti boyunca və yuxarı-aşağı.
- Tutduğunuz detal, ucu tor kəsişməsinə bir neçə piksel yaxınlaşanda ona yapışır (kəsişmə işıqlanır və status paneli onu adlandırır). Başqa yerdə köçürmə 10 mm addımla gedir.
- Seçilməmiş detala basmaq yenə də görünüşü fırladır və ya sürüşdürür, ona görə sürükləmə heç nəyi təsadüfən köçürmür.
- Sürükləmə {{ui:Köçür}} kimi bir geri qaytarma addımıdır. Birləşmələr elementlərini izləyir.

## Bir neçə elementdə xüsusiyyət dəyişin

İki və ya daha çox element seçin. {{ui:Xüsusiyyətlər}} panelində **Hamısında dəyiş** altında:

- {{ui:Profil}}, {{ui:Mövqe}}: onların arasında tirlər, sütunlar və diaqonallar üçün.
- {{ui:Lövhənin qalınlığı (mm)}} və {{ui:Lövhənin eni (mm)}}: lövhələr üçün.
- {{ui:Material}} və {{ui:Fırlanma (°)}}: hamısı üçün.

Elementlər razılaşmadıqda sahədə **Fərqlidir** göstərilir. Dəyər seçin və ya yazın, o, ona aid olan hər elementə tətbiq olunur; status paneli neçəsinin dəyişdiyini və neçəsinin öz dəyərini saxladığını deyir.

{{ui:Xüsusiyyətlər}} panelindəki rəqəm sahələri hesablamanı da qəbul edir: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Oxuna bilməyən hesablama rədd edilir və status paneli səhvin harada olduğunu deyir.

## Köçürün, fırladın və ya güzgü əksi alın

Elementləri və bünövrələri seçin (tək biri də işləyir), sonra {{ui:Xüsusiyyətlər}} panelində **Köçür, fırlat, güzgü** seçin. Birləşmələr təkbaşına köçürülmür: onlar elementlərini izləyir. Tiri köçürüb sütununu köçürməsəniz, status paneli sabit qalmış elementə qoşulan və indi hansı birləşmələrin köçdüyünü deyir, [Problemlər](topic:troubleshooting) isə onların sığmadığını deyir.

- **Köçür:** x, y və z-i millimetrlə yazın və {{ui:Köçür}} seçin. Və ya {{ui:İki nöqtə seçin}} seçin (və ya {{key:M}} basın): köçürüləcək tor kəsişməsinə, sonra gedəcək yerə klikləyin. Nöqtəli kontur göstərici ilə gedir.
- **Planda fırlat:** bucağı yazın (yuxarıdan baxanda saat əqrəbinin əksinə) və nə ətrafında döndərəcəyinizi seçin: seçimin ortası və ya tor kəsişməsi. Sütunlar çərçivə ilə birlikdə dönür.
- **Güzgü əksi:** tor xəttini seçin. Güzgü əksi eyni profildir, yalnız başqa tərəfə çevrilmişdir: I-kəsik flanşlarını saxlayır, kanal başqa tərəfə baxır (üst və alt yerlərini dəyişir), deşiklər və kəsiklər detalla birlikdə gedir.
- **Orijinalı saxla (nüsxə yarat)** qutusunu işarələyin: seçim yerində qalsın, köçürülən, fırladılan və ya güzgü əksi alınan isə nüsxə olsun. [DetailCraft tənzimləmələrində](topic:settings) {{ui:Son lövhələri və baza lövhələrini elementləri ilə birlikdə kopyalayın}} açıq olanda onun birləşmələri də gəlir.

Fırlatma şaquli xətt ətrafında olur, güzgü əksi isə şaquli müstəvidədir; ona görə səviyyələr səviyyədə, bünövrələr isə şaquli qalır.
