---
title: Lövhələri yerləşdirin və fərdi profillər əlavə edin
summary: Sərbəst lövhələri qalınlıq və en ilə yerləşdirin və öz I, kanal, bucaq, boru və yastı çubuq kəsiklərinizi təyin edin.
keywords: lövhə, yastı, fərdi profil, istifadəçi profili, parametrik, kəsik, forma, en kəsiyi, pl
from: c24c3b51
---

## Lövhə yerləşdirin

Lövhə tir kimi yerləşdirilir: iki kəsişmə arasında uzanır, eni çaparaq, qalınlığı yuxarı.

1. {{ui:Yerləşdirmə}} qrupunda {{ui:Lövhə}} seçin və ya {{key:P}} basın.
2. {{ui:Xüsusiyyətlər}} panelində {{ui:Qalınlıq (mm)}} və {{ui:En (mm)}} təyin edin. Defolt A36-da 20 x 200-dür.
3. Lazım olsa {{ui:Material}} və {{ui:Fırlanma (°)}} təyin edin. 90 fırlanma lövhəni kənarı üzrə dayandırır.
4. İki kəsişməyə klikləyin və ya {{ui:Şəbəkə ilə əlavə et}} formasından istifadə edin.

Lövhənin profil adı `PL<thickness>x<width>` kimi yazılır, məsələn PL20x200. Onun uzunluğu iki nöqta arasındakı məsafədir.

Yerləşdirilmiş lövhənin ölçüsünü dəyişmək üçün onu seçin və {{ui:Qalınlıq (mm)}} və ya {{ui:En (mm)}} dəyişin.

Yerləşdirdiyiniz lövhələr öz detallarıdır (nişan p, montaj P). Birləşmələrlə yaradılan son lövhələr və baza lövhələri də lövhədir, lakin onları birləşmə vasitəsilə dəyişirsiniz; bax: [Son lövhələr](topic:end-plates).

## Fərdi profil əlavə edin

Lazım olan kəsik kataloqda yoxdursa, onu ölçülərindən yaradın. Fərdi profil modelə aiddir və onunla birlikdə saxlanılır. Onu hər yeni modeldə istifadə etmək üçün, aşağıda "Yeni modellər üçün profil saxlayın" bölməsində təsvir olunan {{ui:Mənim profillərimdə}} saxlayın.

1. Soldakı {{ui:Model}} panelində {{ui:Fərdi profil}} açın.
2. {{ui:Ad}} yazın, məsələn `W8x18-custom` və ya `RHS 120x80x5`. Kataloq adı ola bilməz və ya lövhə adına bənzəyə bilməz.
3. {{ui:Forma}} seçin: {{ui:I-profil}}, {{ui:Kanal}}, {{ui:Bərabər bucaq}}, {{ui:Düzbucaqlı boru}}, {{ui:Dairəvi boru}} və ya {{ui:Yastı çubuq}}.
4. Görünən ölçüləri doldurun, hamısı millimetrlə:

| Forma | Ölçülər |
|---|---|
| I-profil | Dərinlik d, Flanş eni bf, Gövdə tw, Flanş tf, Birləşmə radiusu r (0 ola bilər) |
| Kanal | Dərinlik d, Flanş eni bf, Gövdə tw, Flanş tf (kvadrat künclər) |
| Bərabər bucaq | En b (hər qol), Qalınlıq t |
| Düzbucaqlı boru | Hündürlük h, En b, Qalınlıq t (xarici künc radiusu 2t) |
| Dairəvi boru | Diametr D, Qalınlıq t |
| Yastı çubuq | En b, Qalınlıq t |

5. Hər yeni modeldə olması üçün {{ui:Mənim profillərimdə saxla}} işarəli qalsın (aşağıya bax), və ya yalnız bu modeldə saxlamaq üçün işarəni silin.
6. {{ui:Profil əlavə et}} seçin.

Status sətri deyir: "Profil "…" əlavə edildi; o, Fərdi altında hər profil siyahısındadır." Forma altındakı siyahıda və hər {{ui:Profil}} siyahısının sonunda görünür.

DetailCraft formanın mövcud ola biləcəyini yoxlayır. "Gövdə və flanşlar dərinlik və en daxilinə sığmır.", "Birləşmə radiusu flanş üçün çox böyükdür." və ya "Divar çox qalındır." kimi mesajlar görəcəksiniz. Rəqəmləri düzəldin və yenidən {{ui:Profil əlavə et}} seçin.

### Fərdi profillər nə alır

- Metr başına kütlə sahə × 7850 kg/m³-dən hesablanır (kataloq ölçüləri əvəzinə dərc olunmuş çəkini istifadə edir).
- Fərdi I-profillər kataloq I-profilləri kimi deşiklər, kəsimlər, son lövhələr, NC faylları və emal çertyojları alır.
- Fərdi yastı çubuqlar lövhə kimi davranır.
- Fərdi kanallar və borular deşik alır; bucaqlar və dairəvi borular hələ yox.

Əlavə edildikdən sonra fərdi profili modeldən redaktə və ya silə bilməzsiniz (səhv etdinizsə dərhal {{key:Mod+Z}} istifadə edin). Düzəldilmişinə yeni ad verin.

## Yeni modellər üçün profil saxlayın

Formanın altındakı {{ui:Mənim profillərim}} sizin fərdi profillərinizin siyahısıdır. O, bu brauzerdə, bu kompüterdə saxlanılır, model faylında və ya hesabınızda deyil.

- {{ui:Mənim profillərimdə saxla}} işarəli əlavə edilmiş profil siyahıya düşür. Hər yeni model, o cümlədən DetailCraft-ın başladıqda açdığı model, bütün profilləri profil siyahılarında ilə başlayır.
- Modeldə olan, lakin siyahıda olmayan profilin yanında {{ui:Saxla}} düyməsi var.
- Profillərinizdən birinin olmadığı modeldə (məsələn, köhnə fayl), onu əlavə etmək üçün {{ui:Burada istifadə et}} seçin.
- {{ui:Sil}} profili siyahıdan çıxarır. Onu artıq istifadə edən modellər öz surətini saxlayır.
- Açdığınız model öz faylında saxlanılmış profilləri saxlayır. Faylı açmaq siyahınızı heç vaxt dəyişmir.
- Siyahıda artıq olan, lakin fərqli ölçülü ad rədd edilir: yenisinə başqa ad verin.
- Brauzerin sayt məlumatlarını təmizləmək və ya başqa brauzer və ya kompüter istifadə etmək boş siyahı ilə başlayır. Məxfi pəncərə onu saxlaya bilmir; tətbiq bunu deyir.
