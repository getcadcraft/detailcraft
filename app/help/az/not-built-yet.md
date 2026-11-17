---
title: Hələ hazır olmayanlar
summary: Bu erkən DetailCraft versiyasının nə edə bilmədiyi və bu gün əvəzində nə etmək lazım olduğu.
keywords: limitlər, məhdudiyyətlər, çatışmayan, yol xəritəsi, dəstəklənmir, gələcək, planlaşdırılan, əvəzedici, görüləcəklər
from: ea411885
---

DetailCraft erkən versiyadır. Bu səhifə onun hələ nə etmədiyini sadalayır ki, planlaşdıra biləsiniz. Burada heç bir tarix vədi yoxdur.

## Modelləşdirmə

| Hələ yox | Bu gün əvəzinə |
|---|---|
| Elementin bir ucunu sürükləmək (uzatmaq) | {{ui:Xüsusiyyətlər}} panelində {{ui:Uclar (x, y, z mm)}} altında {{ui:Başlanğıc}} və ya {{ui:Son}} dəyərini redaktə edin |
| Seçim filtri (yalnız tirlər, yalnız bir profil) | Pəncərə çəkin, sonra hissələri çıxarmaq üçün {{key:Shift}}+klik |
| Seçimi massivləşdirmək; meyilli ox ətrafında fırlatmaq; meyilli müstəvidə güzgü əksi | Ofsetlə kopyalayıb yapışdırın və ya {{ui:Surət çıxar}} edin; fırlatma və güzgü əksi plan üzərində işləyir ([Pəncərə ilə seçin, köçürün, fırladın, güzgü əksi edin, çoxlu dəyişin](topic:select-and-change)) |
| Klik edərkən şəbəkədən kənar nöqtələr | Şəbəkədə yerləşdirin, sonra son koordinatları yazın |
| Nömrəli şəbəkə xətləri boyunca fasadlar; saxlanılmış görünüşlər; iş müstəviləri | {{ui:3D}} istifadə edin və ya {{ui:Şəbəkə ilə əlavə et}} |
| Deşiklər 3D görünüşdə real kəsik kimi çəkilir | Deşiklər tünd tıxaclar kimi görünür; onlar hər ixracda realdır |
| Yumru və ya bucaqlı kəsimlər, digər kəsiklər və birləşdirici detallar | Yalnız I-profillərdə kvadrat kəsimlər |
| Bucaqlara və dairəvi borulara əlavə etdiyiniz deşiklər | Bucaq deşikləri yalnız [qussetlərdən](topic:brace-gussets) gəlir |
| İmperial giriş | Millimetr yazın (düymdə 25.4) |
| Fərdi profili redaktə etmək və ya silmək | Düzəldilmiş profili yeni adla əlavə edin |

## Pilləkənlər

| Hələ yox | Bu gün əvəzinə |
|---|---|
| Əl dayaqları, meydançalar, ayaq lövhələri, barmaqlıq pillələr, spiral və dönən pilləkənlər | Yalnız düz marşlar; bax: [Pilləkənlər](topic:stairs) |
| Tağların (stringer) uclarının mərtəbələrə görə kəsimi | Kvadrat kəsilmiş tağlar; onları sex proqramınızda kəsin |

## Birləşmələr

DetailCraft altı birləşmə qurur: diaqonal qusset (bax: [Diaqonal qussetlər](topic:brace-gussets)); bir I-profilin iki parçası arasında boltlu ulama (bax: [Ulamalar](topic:splices)); bucaq altında birləşən iki I-profil arasında mitr, yalnız kəsimlə və ya boltlu son lövhələrlə (bax: [Mitr birləşmələri](topic:mitres)); səviyyədən şaquli I-profil tirdən I-profil sütununun flanşına və ya gövdəsinə düz və ya uzadılmış boltlu son lövhə; tirdən (kvadrat, əyri və ya meyilli) sütunun flanşına və ya gövdəsinə kəsmə lövhəsi; və dörd lövhə şpilkəsi ilə sütun baza lövhəsi.

| Hələ yox | Bu gün əvəzinə |
|---|---|
| Əyri və ya meyilli son lövhələr | [Kəsmə lövhələrindən](topic:shear-tabs) istifadə edin; onlar əyri və meyilli tirləri qəbul edir |
| Klip bucaqlar; ulama doldurma lövhələri və müxtəlif ölçülər arasında ulamalar; tirə və sütuna qaynaqlanmış künc qussetləri, faskalı qussetlər | Onları digər proqramda detallandırın, və ya lövhələri və deşikləri əl ilə ayrıca detallar kimi əlavə edin; bax: [Ulamalar](topic:splices), [Diaqonal qussetlər](topic:brace-gussets) |
| Faskalı və ya konusvari baza bərkitmələri; sement dolduruş deşikləri; kəsmə çıxıntısı üçün təməl cibi | Düzbucaqlı bərkitmələr; bax: [Baza lövhələri](topic:base-plates) |
| Haunch-lar; ucdan-uca qaynaqla mitrlər; digər elementin flanşları ilə düz xətdə bərkitmələr | [Mitr](topic:mitres) son lövhələr və gövdə bərkitmələri ilə, və ya sadə mitr kəsimi; digər lövhələri əl ilə ayrıca detallar kimi əlavə edin |
| Birləşmənin layihə yoxlamaları (möhkəmlik) | Birləşmələri mühəndisinizin hesablamaları ilə yoxlayın; DetailCraft yalnız kənar məsafə və addım barədə xəbərdarlıq edir |
| Yuvalı deşiklər | Yalnız dairəvi deşiklər |

## Analiz

| Hələ yox | Bu gün əvəzinə |
|---|---|
| Polad I-profillərdən kənar layihə yoxlamaları: borular, bucaqlar, kanallar, qaynaqlı formalar, zərif və ya 4-cü sinif detallar, burulma, birləşmələr; beton: sürüşmə zərifliyi, burulma, seysmik detallaşdırma, döşəmələr və divarlar | {{ui:Analiz}} sekmesi polad I-profilləri AISC 360 və ya EN 1993-1-1 üzrə yoxlayır ([Polad elementlərini layihə normasına görə yoxlayın](topic:design-checks)); qalanını "yoxlanılmayıb" kimi qeyd edir; mühəndis hamısını nəzərdən keçirir |
| Əyilmə (buckling) analizi, vibrasiya | İkinci tərtib yalnız P-Delta-dır (elastik); əyilmə analizi yoxdur (modal, reaksiya spektri, zaman tarixçəsi və pushover {{ui:Analiz}} sekmesindədir) |
| Mühəndis tərəfindən nəzərdən keçirilmiş layihə yoxlamaları | Ona qədər onlar köməkçidir: onlara güvənməzdən əvvəl iki-üç elementi əl ilə və ya öz mühəndis proqramınızda yoxlayın |
| Sahələrdən sizin üçün hazırlanmış döşəmə, külək və qar yükləri | Yükləri elementlərə əl ilə qoyun, kN/m və ya kN ilə |
| Element ofsetləri, ekssentrik birləşmələr, yalnız dartılmaya işləyən diaqonallar, çərçivədəki lövhələr və təməllər | Elementlər iş xətləri üzrə analiz olunur; diaqonallar dartılma və sıxılma daşıyır |

## Armatur

| Hələ yox | Bu gün əvəzinə |
|---|---|
| Dairəvi sütunlar, spirallar, meyilli və ya əyri tirlər, düzbucaqlıdan başqa döşəmələr, düz olmayan divarlar | Düzbucaqlı tirlər, sütunlar, döşəmələr və divarlar ([Betonun armaturunu detallaşdırın](topic:reinforced-concrete)) |
| Çubuqları üst-üstə bindirməyə əyilmiş, pilləli bindirmələr, istədiyiniz yerdə qoyulmuş bindirmələr | Bərabər addımlarla bindirmələr, hər çubuq bir kəsimdə bindirilir (ACI Class B, EN α6 = 1.5) |
| Açılışlarda künc çubuqları, deşmə kəsmə armaturu, seysmik detallaşdırma (ACI 318-19 fəsil 18) | Açılışın hər tərəfində kənar çubuqlar; qalanını özünüz yoxlayın |
| Struktur layihə proqramının öz fayllarını oxumaq | Ondan IFC ixrac edin: onun IfcReinforcingBar elementləri çubuq kimi gələcək ([IFC faylından çubuqlar](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Düz, bir əyilmə və U-dan kənar forma kodları; düz və bir qarmaqlı çubuqlar üçün ACI 315 tipləri | Üç forma BS 8666 00, 11, 21 və ya ACI Type 2 kimi çap olunur; bax: [Armatur arayışı](topic:rebar-reference) |
| BS 4449 H8–H40-dan başqa metrik çubuqlar (məs., CSA 10M–35M) | ASTM yumşaq-metrik adları #10–#36, və ya BS çubuqları |

## Çertyojlar və ixrac

| Hələ yox | Bu gün əvəzinə |
|---|---|
| Portret vərəqləri, A0 və öz ölçünüzdə vərəqlər; əyri şəbəkələrdə ümumi quruluş görünüşləri | Üfüqi A4-dən A1-ə və ANSI B-dən D-yə ([Ümumi quruluş və montaj çertyojları](topic:drawings)); başqa ölçüdə çap etmək üçün PDF-i miqyaslayın |
| Tək detallı emal çertyojlarında qaynaq işarələri; künc qaynağından başqa işarələr | Montaj çertyojları künc qaynağı işarələri daşıyır; emal çertyoju qaynağı mətn kimi verir |
| Proqramda çertyojı redaktə etmək | Modeli dəyişin və çertyoju yenidən yaradın; PDF-i MarkupCraft kimi PDF proqramında işarələyin |
| Ölçü obyektləri ilə DWG kimi çertyojlar, və ya modelin model fəzasında tam ölçüdə, vərəqlərin isə layout kimi | Hər vərəq kağızın tam ölçülü DWG və ya DXF-dir, ölçülər xətt və rəqəm kimi ([Ümumi quruluş və montaj çertyojları](topic:drawings#download)) |
| NC-də dairəvi borularda deşiklər, NC fayllarında bucaq və dairəvi borularda kəsimlər | Yazılmır; bax: [NC faylının sahələri](topic:nc1-fields) |
| NC fayllarında skoslar, işarələr və daxili konturlar | Bu gün yoxdur |
| USD ixracında bolt deşikləri, boltlar, qaynaqlar və təməllər | Onlar IFC, NC və BOM çıxışlarındadır; bax: [Polad modelini USD kimi ixrac edin](topic:usd) |
| IFC faylından birləşmələri, təməlləri, yuvalı və ya düzbucaqlı deşikləri və dairəvi borularda deşikləri gətirmək | {{ui:IFC idxal et}} tirləri, sütunları, elementləri, lövhələri, şəbəkələri, səviyyələri, dairəvi deşikləri, kəsimləri, boltları və armatur çubuqlarını gətirir; onun hesabatı nəyin buraxıldığını sadalayır |
| Fərdi hesabat formatları | Üç CSV faylı |

## Panellər

| Hələ yox | Bu gün əvəzinə |
|---|---|
| Aşağıdakı hesabatları yerdəyişdirmək ({{ui:Problemlər}}, {{ui:Materialların siyahısı}}, {{ui:Əyilmə cədvəli}}) | Yalnız {{ui:Model}} və {{ui:Xüsusiyyətlər}} panelləri yerdəyişir. Bax: [Panelləri təşkil edin](common:arrange-panels) |

## Birlikdə işləmək və saxlamaq

| Hələ yox | Bu gün əvəzinə |
|---|---|
| Kompüterlər arasında bulud saxlama və sinxronizasiya | `.detailcraft.json` faylları saxlayın və hər fayl kimi paylaşın. Bulud saxlama hələ mövcud deyil |
| Canlı TeamWork sessiyasında başqalarının kursorları və "redaktə edir" etiketləri; şəbəkələr, səviyyələr və mərhələlər element-element birləşdirilir | Dəyişikliklər hələ də birləşir (şəbəkələr, səviyyələr və mərhələlər tam dəyişir, sonuncu dəyişiklik qalır); bax: [Bir strukturu birlikdə, canlı işləyin](topic:work-live) |
| İnternet üzərindən Canlı TeamWork sessiyasına dəvət linkləri | Eyni şəbəkədə qısa kodla qoşulun |

## Platformalar

- DetailCraft masaüstü, noutbuk və ya planşet ekranı üçün hazırlanıb. Telefonda da işləyir: model ekranı və panelləri saxlayır, hesabatlar isə aşağıdakı zolaqdan vərəq kimi açılır, lakin panellər üçün yer azdır.
- Oflayn istifadə üçün əvvəlcə DetailCraft oflayn üçün saxlanmalıdır: tətbiq zolağında {{ui:Oflayn üçün saxla}} ilə; {{ui:Oflayn hazırdır}} yazdıqdan sonra bu versiyadakı hər şey bağlantısız işləyir. Bax: [Oflayn işləmək](common:offline).

Bu boşluqlardan biri işinizi əngəllərsə, [dəstək səhifəsi](https://getcadcraft.com/support) vasitəsilə bizə yazın; bu, növbəti nəyi quracağımıza qərar verməyə kömək edir.
