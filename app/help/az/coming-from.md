---
title: Başqa detallama proqramlarından keçid
summary: Tam detallama paketinin vərdişlərinin DetailCraft-a necə uyğunlaşdığı və təcrübəli detallaşdırıcıları çaşdıran fərqlər.
keywords: keçid, köçürmə, tanış, iş axını, müqayisə, fərqlər, nömrələmə, komponentlər, kataloq, çertyojlar, vərdişlər
from: 39639a5d
---

Tekla Structures-da detallaşdırırsınızsa, DetailCraft-ın çox hissəsi tanış görünəcək: şəbəkələr, səviyyələr, kataloqdan profillər, hissələr və yığımlar, birləşmələr, nömrələmə, NC faylları, IFC. Miqyas çox fərqlidir: Tekla Structures tam istehsal sistemidir, DetailCraft isə az sayda işi başdan sona görən, kiçik və erkən mərhələdə brauzer tətbiqidir. Bu səhifə vərdişlərinizin harada köçdüyünü və harada köçmədiyini göstərir.

:::tip
Əlləriniz Tekla Structures lentinə öyrəşibsə, {{ui:Parametrlər}} › {{ui:DetailCraft}} › {{ui:Menyular, düymələr və siçan}} bölməsində {{ui:Polad lent}} menyu üslubunu seçin: Modelləşdirmə, Detallaşdırma, Redaktə, Çertyojlar, İstehsal və Görünüş sekmələri, orta düymə isə sürüşdürür. AutoCAD-dən gəlirsinizsə və komandaları yazmağı sevirsinizsə, {{ui:Klassik çertyoj}} komanda sətri əlavə edir (BEAM, COLUMN, ENDPLATE, ZOOM …). Bax: [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).
:::

## Qısa xəritə

| Öyrəşdiyiniz | DetailCraft-da |
|---|---|
| Şəbəkəni koordinatlarla dialoqda yaratmaq | Sol paneldə {{ui:Şəbəkə}}: mütləq koordinatlar yox, etiketlər və xətlər arası məsafələr. Nömrəli xətlər bir istiqamətdə, hərfli xətlər digərində gedir |
| Səviyyələr şəbəkənin Z koordinatları kimi | Ayrıca {{ui:Səviyyələr}} siyahısı, hər sətirdə ad və yüksəklik, {{ui:Səviyyələri tətbiq et}} ilə tətbiq olunur |
| Snaplarla istənilən yerdə nöqtə seçmək | Klikləri yalnız şəbəkə kəsişmələrinə yapışdırır. Şəbəkədən kənar nöqtələr elementin {{ui:Uclar (x, y, z mm)}} sahəsinə yazılır |
| Sütun, tir və lövhə əmrləri | {{ui:Sütun}} ({{key:C}}), {{ui:Tir}} ({{key:B}}), {{ui:Diaqonal}} ({{key:R}}), {{ui:Lövhə}} ({{key:P}}), {{ui:Bünövrə}} ({{key:F}}) |
| Hissə xüsusiyyətləri dialoqu (hissəyə ikiqat klik) | Bir dəfə klikləyin: sağdakı {{ui:Xüsusiyyətlər}} paneli həmişə aktivdir; dialoq və Dəyişdir və ya Tətbiq et düyməsi yoxdur |
| Səthdə mövqe, fırlanma və dərinlik parametrləri | {{ui:Mövqe}} (poladın üstü, ortada və ya xəttdə aşağı) və {{ui:Fırlanma (°)}}. Ayrıca üfüqi ofsetlər yoxdur |
| Profil kataloqu | 2.311 dərc olunmuş ölçüdən ibarət sabit siyahı (AISC W, S, C, L, HSS, Pipe; Avropa IPE, HEA, HEB, UPN; Böyük Britaniya UB, UC, PFC, EA, UEA, SHS, RHS, CHS və soyuq əyilmiş boş kəsiklər), üstəlik parametrik lövhələr və sizin {{ui:Fərdi profil}} kəsikləriniz |
| Material kataloqu | Siyahıda yeddi sinif: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Birləşmə komponentini və onun dialoqunu tətbiq etmək | Tiri seçin, {{ui:Son lövhələr}} seçin. Parametrlər {{ui:Xüsusiyyətlər}} panelində görünür. Yalnız iki birləşmə var (son lövhə sütun flanşına, baza lövhəsi) |
| Avtomatik birləşmə və ya birləşməni oxşar birləşmələrə kopyalamaq | Birləşməni seçin, {{ui:Oxşarlara tətbiq et (n)}} seçin |
| Ardıcıllıqla və başlanğıc nömrələrlə nömrələmə | Əmr yoxdur: hər dəyişiklikdən sonra markalar özbaşına yenilənir, sabit prefikslərlə c, b, br, p və C, B, BR, P |
| Boltlar və deşik dialoqları | Deşiklər üz və mövqeyə görə yazılır. Boltlar yalnız birləşmələrdən gəlir |
| Kəsmə, uyğunlaşdırma və çoxbucaqlı kəsmə alətləri | Yalnız I-profillərdə kəsiklər (yuxarı və ya aşağı, hər iki ucda). Birləşmə geri kəsilmələri avtomatikdir |
| Hesabatlar və şablonlar | Aşağıda sekmələrdə üç sabit hesabat və CSV yükləmələri |
| Çertyoj yaratmaq və çertyojlar siyahısı | Hissə markası üzrə bir sex çertyoju, hamısı eyni anda hazırlanır, əvvəlcə önizləmə, sonra bir PDF və ya vərəq-vərəq yüklənir. Heç nə saxlanılmır və ya redaktə olunmur |
| NC faylı ixracı | {{ui:NC faylları}}: hissə markası üzrə bir DSTV faylı, yalnız I-profillər və lövhələr, zip-lənmiş |
| IFC ixracı | {{ui:IFC}}: bütün modelin IFC4-ü, armatur daxil |
| İstənilən beton hissədə armatur | Yalnız düzbucaqlı blok bünövrələrdə armatur, ABŞ çubuq ölçüləri, aşağı şəbəkə və başlanğıc çubuqları ilə |
| Layihə qovluğunda, çoxistifadəçili saxlanılan model | Yüklədiyiniz bir `.detailcraft.json` faylı. Tək istifadəçi, kompüterinizdə |
| Geri qaytarma tarixçəsi | {{key:Mod+Z}} və {{key:Mod+Y}}, 200 addıma qədər, başqa model açana və ya başlayana qədər saxlanılır |

## Insanları çaşdıran fərqlər

### Markalar özbaşına dəyişir

Nömrələmə addımı yoxdur. Markalar hər dəyişikliydən sonra yenidən hesablanır, buna görə həmişə cari olurlar, amma həm də yenidən nömrələnə bilərlər: sütun əlavə edirsiniz və dünənki c3 indi c4 ola bilər. Köhnə markaları saxlayan "nömrələmə tarixçəsi" yoxdur. Modeli bitirin, sonra BOM, NC faylları və sex çertyojlarını bir saxlanılmış fayldan birlikdə çıxarın.

### Orta düymə yaxınlaşdırır, sürüşdürmür

3D görünüşdə: sol sürükləmə fırladır, sağ sürükləmə sürüşdürür, çarx yaxınlaşdırır, orta düymə ilə sürükləmə də yaxınlaşdırır. {{key:Shift}} basılı saxlanaraq sol sürükləmə də sürüşdürür. Çarx görünüşün ortasına doğru yaxınlaşdırır, göstəricinin üstünə yox. Fırlanma mərkəzini seçmək yoxdur: model görünüşün ortası ətrafında fırlanır. Bax: [3D görünüşdə hərəkət](topic:navigate-3d).

### Defolt olaraq sütunlar bir istiqamətə baxır

0 fırlanmada sütunun flanşları nömrəli şəbəkə istiqamətində uzanır. Hərfli şəbəkə xətləri arasında olan tirlər sütunun gövdəsinə birləşir və orada son lövhələr qəbul edilmir ("Sütun gövdəsinə birləşən tirlər hələ qurulmayıb"). Birləşmə əlavə etməzdən əvvəl həmin sütunları 90° çevirin.

### Görünüşlər yalnız hərfli xətlərdə

{{ui:Fasad}} yalnız hərfli şəbəkə xətləri boyunca baxır. Nömrəli xətlər boyunca görünüşlər, saxlanılmış görünüşlər və iş müstəviləri yoxdur. Nömrəli xətlərdəki çərçivələr üçün {{ui:3D}} və ya {{ui:Şəbəkə ilə əlavə et}} istifadə edin.

### Seçim, kopyalama və köçürmə

{{key:Shift}}+klik və ya {{key:Mod+A}} ilə bir neçə hissə seçin, sonra onları kopyalayın, kəsin, yapışdırın (şəbəkə kəsişməsində, yazılmış ofsetlə və ya yerində) və ya çoxaldın, birləşmələr daxil olmaqla ([Kopyalama, yapışdırma və surət](topic:copy-paste)). Pəncərə ilə seçim, seçim filtri, köçürmə, güzgü və ya massiv yoxdur, xüsusiyyətlər isə {{ui:Xüsusiyyətlər}} panelində bir dəfəyə bir elementdə dəyişdirilir.

### Şəbəkələr elementləri özü ilə sürükləmir

Şəbəkə aralığını dəyişdikdə elementlər öz koordinatlarını saxlayır; şəbəkə xətləri ilə heç nə hərəkət etmir. Poladı yerləşdirməzdən əvvəl şəbəkəni dəyişin, ya da sonra hər elementin son koordinatlarını redaktə edin.

### Birləşmələr layihələndirilmir

İki birləşmə lövhələri, deşikləri, boltları və qaynaqları verdiyiniz rəqəmlərdən yerləşdirir. Heç bir layihə yoxlaması yoxdur, yalnız kənar və aralıq xəbərdarlıqları var (EN 1993-1-8 Cədvəl 3.3-dən).

### Deşiklər 3D görünüşdə kəsilmir

Deşiklər tünd tıxaclar kimi görünür. Onlar NC fayllarında, sex çertyojlarında və IFC faylında həqiqi deşiklərdir. Kəsiklər görünüşdə kəsilir.

### Çəkilər ümumidir

Polad çəkisi deşikləri və ya kəsikləri çıxmır, boltların çəkisi isə daxil edilmir.

### Yalnız millimetrlər

Hər şey millimetrlə yazılır və göstərilir, hətta AISC profillərində də. Profil adları dərc olunmuş formasını saxlayır (W12x50, HSS6x6x1/4).

### İdarə ediləcək çertyojlar yoxdur

Çertyojlar siyahısı, çertyoj redaktoru, ümumi tərtibat və ya yığım çertyojları yoxdur. Sex çertyoju siz istədikdə yaranır və yüklənir; onu dəyişmək üçün modeli dəyişin və yenidən yaradın.

### Brauzerdə işləyir

Saxlamaq bir fayl yükləyir. Brauzerin özü üçün saxladığı klaviatura qısayollarından istifadə etmək olmur. Modelləriniz heç vaxt kompüterinizdən çıxmır: bax: [Fayllarınız hara gedir](common:your-files).

## Cari proqramınızda nəyi davam etdirməli

Hazırda DetailCraft kiçik çərçivələr, fikir yoxlamaq, öyrətmək və ya sadə tir və sütun işi üçün NC faylları və sex çertyojları hazırlamaq üçün uyğundur. Mürəkkəb birləşmələri, ümumi tərtibat çertyojlarını, montaj çertyojlarını, çoxistifadəçili layihələri və [Hələ qurulmayanlar](topic:not-built-yet) siyahısında olan hər şeyi hal-hazırda istifadə etdiyiniz proqramda saxlayın.
