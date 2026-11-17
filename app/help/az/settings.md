---
title: DetailCraft parametrləri
summary: Yeni elementləri ABŞ və ya Avropa profilləri kimi başladın, surət çıxarmanın surəti necə yerdəyişdirdiyini təyin edin, surətlərin birləşmələri gətirib-gətirməyəcəyini seçin və 3D görünüşündə boltları göstərin və ya gizlədin.
keywords: parametrlər, üstünlüklər, vərəq ölçüsü, kağız ölçüsü, çertyojlar, seçimlər, polad, aisc, en, avropa, ABŞ profilləri, metrik profillər, standart profil, sinif, s355, a992, surət ofseti, yapışdırma ofseti, birləşmələri kopyala, boltlar, ankerli çubuqlar, boltları gizlət, sıfırla
from: e46cea57
---

Tətbiq zolağındakı dişlidən və ya {{key:Mod+,}} ilə {{ui:Parametrlər}} açın. Birinci vərəq, {{ui:DetailCraft}}, yalnız bu tətbiqə aid parametrləri saxlayır; {{ui:Ümumi}} isə bütün CadCraft tətbiqlərinin paylaşdığı parametrləri saxlayır (mövzu, alətlər paneli, panellər). DetailCraft parametrləri yalnız tətbiqdə mövcuddur: onları burada dəyişirsiniz, dərhal qüvvəyə minir və bu brauzer onları yadda saxlayır. Onlar model faylınızda saxlanılmır.

## Yeni elementlər

Yerləşdirmə alətlərinin hansı profil və sinifləri ilə başladığı:

| Alət | ABŞ profilləri (AISC), A992 | Avropa profilləri (EN), S355 |
|---|---|---|
| {{ui:Tir}} | W16x26, A992 | IPE300, S355 |
| {{ui:Sütun}} | W12x50, A992 | HEB200, S355 |
| {{ui:Diaqonal}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Lövhə}} | A36 | S355 |

Başlanğıc ABŞ profilləridir. Avropa seçimi diaqonallar üçün HEA160 istifadə edir, çünki DetailCraft-ın EN kataloqunda hələ boş profillər yoxdur ([Profil kataloqu](topic:profile-catalog)). Yerləşdirmə aləti aktiv olarkən {{ui:Xüsusiyyətlər}} panelində növbəti hissə üçün istənilən profil və sinifi hələ də seçə bilərsiniz. Modeldə artıq olan elementlər öz profil və sinifini saxlayır.

Bax: [Kopyalama, yapışdırma və surət çıxarma](topic:copy-paste).

## Surət çıxarma və yapışdırma

- **Ofset (mm)**: x, y və z. {{ui:Surət çıxar}} ({{key:Mod+D}}) surəti orijinaldan bu qədər uzaqda qoyur, {{ui:Sürüşmə ilə yapışdır (mm, orijinaldan)}} forması isə bununla başlayır. 6000, 0, 0 ilə başlayır: nömrəli şəbəkələr boyunca bir 6 m açılış. Onu öz açılış addımınıza təyin edin, və ya bir mərtəbəni yuxarı kopyalamaq üçün z-də səviyyə hündürlüyünə.
- **{{ui:Son lövhələri və baza lövhələrini elementləri ilə birlikdə kopyalayın}}** (başlanğıcda aktiv): birləşmə surətlə yalnız birləşdirdiyi hər element kopyalandıqda gəlir. Elementləri və bünövrələri birləşmələri olmadan kopyalamaq üçün onu təmizləyin, məsələn surətdə fərqli birləşmə sınamaq üçün.

## 3D görünüşü

**Boltları və ankerli çubuqları göstər** (başlanğıcda aktiv). Görünüşdə onları gizlətmək və məşğul birləşmənin deşiklərini və lövhələrini görmək üçün təmizləyin. Gizli boltlara klik etmək olmur; birləşməni seçmək üçün lövhəyə klik edin. Materialların siyahısı, çertyojlar və hər ixrac yenə də hər bolt və çubuğu daxil edir.

## Künc göstəricisi

3D görünüşünün küncündə nə göstərilir: **Görünüş kubu** (başlanğıc; yuxarı sağda — oradan baxmaq üçün üzə, kənara və ya künca klik edin, orbitdə fırlatmaq üçün sürüşdürün, modeli fırlatmaq üçün onun kompas halqasını sürüşdürün), **Ox işarəsi** (aşağı solda kiçik X, Y, Z işarəsi, görünüşlə birlikdə dönür: X qırmızı, Y yaşıl, Z mavi) və ya **Yoxdur**. Yalnız {{ui:3D}}-də; {{ui:Plan}} və {{ui:Fasad}} heç birini göstərmir. Bax: [Görünüş kubu](topic:view-cube).

## Sıfırlama

Dialoqun altındakı {{ui:DetailCraft parametrlərini sıfırla}} bunları başlanğıca qaytarır (ABŞ profilləri, ofset 6000, 0, 0, birləşmələr kopyalanmış, boltlar göstərilmiş), {{ui:Ümumi}} parametrləri ilə birlikdə.

## Çertyojlar

**Vərəq ölçüsü**: vərəq çertyojları və sex çertyojları üfüqi istiqamətdə bu ölçülərdə hazırlanır: A4, A3 (başlanğıc), A2, A1, ANSI B, ANSI C və ya ANSI D. {{ui:Çertyojlar}} və sex çertyojları pəncərələrində eyni siyahı var. Bax: [Ümumi quruluş və yığım çertyojları](topic:drawings).

## Armatur

- **ASTM armatur adları**: #3-dən #11-ə qədər, və ya eyni armaturlar üçün yumşaq metrik #10-dan #36-ya qədər.
- **Əyilmə cədvəli forma kodları**: DetailCraft-ın S, L, U; ACI 315 tipləri; və ya BS 8666 forma kodları. Bax: [Armatur arayışı](topic:rebar-reference).

## Sürüşdürərək seçmə

**Düzbucaqlı** (əvvəlki kimi) və ya **Kəmənd**: sərbəst xətt, sürüşdürərkən {{key:Space}} içəridə, toxunma və çəpər arasında keçid edir. Bax: [Pəncərə ilə seçin](topic:select-and-change#select-with-a-window).
