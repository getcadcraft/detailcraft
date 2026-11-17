---
title: Karkası analiz edin
summary: Modelləşdirilmiş tir, sütun və bağların qüvvələri, reaksiyaları və əyilmələri, təyin etdiyiniz yük hallarına və kombinasiyalarına görə. Analiz köməkçisidir, kod yoxlaması deyil; layihə yoxlamaları ayrı addımdır.
keywords: analiz, struktur analizi, karkas analizi, sərtlik üsulu, yüklər, yük halı, kombinasiya, daimi yük, faydalı yük, öz çəkisi, reaksiyalar, əyilmə momenti, kəsilmə, eksenel qüvvə, əyilmə, deformasiya forması, dayaqlar, menteşəli, bərkidilmiş, azad buraxılma, hesabat, pdf, csv, craftscript, frame3d
from: ba0081bc
---

{{ui:Analiz}} sekməsi aşağıda modelin hər tirinin, sütununun və bağının qüvvələrini, sütun bazalarındakı reaksiyaları və elementlərin nə qədər əyildiyini, verdiyiniz yüklər üzrə tapır.

:::warning
Bu **analiz köməkçisidir, kod yoxlaması deyil**. Analiz heç bir layihə normasını tətbiq etmir: elementlərin ölçüsünü təyin etmir, tutumları və birləşmələri yoxlamır, yük əmsallarını seçmir. Mühəndis modeli, onun yüklərini və dayaqlarını yoxlayır və rəqəmlərin nə demək olduğuna qərar verir. ASCE 7 / AISC 360 və ya EN 1990 / EN 1993-1-1 üzrə element yoxlamaları üçün bax: [Polad elementləri layihə normasına görə yoxlayın](topic:design-checks). Bu ayrı addımdır və o da köməkçidir.
:::

## İşə salın

1. {{ui:Analiz}} sekməsini açın.
2. Görünüşdə bir və ya bir neçə elementi seçin, {{ui:Hal}}, {{ui:Yük}} və {{ui:İstiqamət}} seçin, dəyəri yazın və {{ui:Yük əlavə et}} düyməsini basın. Elementin boyunca yayılmış yük kN/m ilə, nöqtəvi yük kN ilə verilir. {{ui:Aşağı (ağırlıq)}} ən çox istifadə olunandır.
3. {{ui:Analizi işə sal}} düyməsini basın.

Cədvəl hər elementin ən böyük eksenel qüvvəsini N, kəsilmələri Vz və Vy, əyilmə momentlərini My və Mz, burulmanı T və onun əyilməsini sadalayır; ən böyük moment birinci gəlir. Elementin adını kliklədikdə o seçilir. Aşağıda hər dayaqdakı reaksiyalar verilir. {{ui:Modeldə}} əyilmiş formanı çəkir, və ya hər elementin yanında bir təsirin diaqramını, yerində ən böyük qiymətin yazılması ilə. Model dəyişən kimi nəticələr köhnəlir: yenidən işə salın.

Hər yük, hal və parametr bir geri alma addımıdır ({{key:Mod+Z}}) və model faylında saxlanılır.

## Yük halları və kombinasiyalar

Analiz üç halla başlayır: **Daimi** (elementlərin öz çəkisi, çəkdiyiniz kəsiklərdən və 7850 kq/m³), **Faydalı** (boş) və **Daimi + faydalı**. Öz hallarınızı (külək, qar …) və kombinasiyaları əlavə edin: kombinasiya halları yazdığınız əmsallarla toplayır. Analiz xətti olduğundan hər hal bir dəfə həll edilir, kombinasiyalar isə cəmlərdir. Əmsalları özünüz yazın, ya da layihə normasını seçin və {{ui:Birləşmələri yarat}} onun kombinasiyalarını yazsın ([Polad elementləri layihə normasına görə yoxlayın](topic:design-checks)).

## Karkas nədən ibarətdir

- Tirlər, sütunlar və bağlar, hər biri öz iş xəttində (çəkdiyiniz xətt), kəsiyin xarici konturundan hesablanmış real xassələri ilə. Lövhələr, pilləkənlər, bünövrələr və boltlar karkasın hissəsi deyil.
- Element başqa elementin ucu üzərinə düşdükdə bölünür; beləliklə orta hündürlükdə sütuna birləşən tir sütunla orada birləşir.
- **Sütun bazaları**: bərkidilmiş (başlanğıc) və ya menteşəli (yerində saxlanılır və burulmaya qarşı, fırlanmağa azad). Baza lövhəsi həmişə dayaq yaradır.
- **Tir uçları**: uc lövhəsi sərtdir, kəsmə lövhəsi menteşəlidir. {{ui:Birləşməsi olmayan tir uçları}} qalanlarını təyin edir. **Bağlar** hər iki ucdan menteşəlidir.
- Elementin uclarına və ya sütun bazasına öz qaydasını vermək üçün bir elementi seçin.
- Hər yerdə polad: E = 200 GPa, G = 77 GPa.

Karkas heç bir şeyi əyməyərək hərəkət edə bilərsə — məsələn, bir istiqamətdə bağı olmayan menteşəli bazalar kimi bir mexanizm — işləmə dayanır və harada və hansı istiqamətdə olduğunu bildirir; onu dayaq, sərt birləşmə və ya bağ ilə saxlayın.

## İşarələr

N > 0 dartılmadır. My > 0 elementin lokal −z tərəfini dartılmada qoyur: cazibə altında sallanan tirin My > 0 dəyəri var. Mz > 0 lokal −y tərəfini dartılmada qoyur. Əyilmə elementin uclarını birləşdirən düz xəttdən ölçülür. Elementin lokal z oxu yuxarı baxır (sütun üçün: X boyunca); lokal oxları elementin fırlanması ilə dönür.

## Hesabat

{{ui:Hesabat (PDF)}} və {{ui:Hesabat (CSV)}} hər şeyi ehtiva edir: karkasın üzərində qurulduğu fərziyyələr, kəsiklər, hallar və kombinasiyalar; sonra hər hal və kombinasiya üçün reaksiyalar (yüklərin və reaksiyaların cəmi ilə, bir-birini balanslaşdırır), elementin qüvvələri və yerdəyişmələr, və hər halın zərfi. {{ui:CraftScript kimi ixrac et}} eyni karkası PartCraft-ın Skript iş sahəsi üçün skript kimi yazır; orada `frame3d` kitabxana funksiyası onu oxunaqlı kodda addım-addım həll edir.

## Üsul

Birbaşa sərtlik üsulu, xətti və birinci tərtib, əgər *İkinci tərtib (P-Delta)* işarəsini qoymasanız: iki düyünlü sütun-tir elementləri, eksenel, burulma və iki əyilmə sərtliyi ilə (kəsmə deformasiyası yoxdur, çarpılma yoxdur), elementlərdə buraxılmalar statik kondensasiya ilə, elementlər boyunca yüklər elementlərin öz forma funksiyaları ilə. Cavablar klassik dərslik hallarına (konsollar, sadə, bərkidilmiş və davamlı tirlər, portal çərçivə, burulmada şəbəkə, ferma) qarşı yoxlanılıb.

**İkinci tərtib (P-Delta).** {{ui:Analizi işə sal}} düyməsinin yanında *İkinci tərtib (P-Delta)* işarəsini qoyun: hər kombinasiya yenidən həll edilir, elementlərin eksenel qüvvələri əyilmiş karkasa təsir edir (hər element 4 hissəyə bölünür ki, elementin uclar arasında əyilməsi də sayılsın), eksenel qüvvələr sabitləşənə qədər. Nəticə sətri keçidlərin sayını və sallanmanın nə qədər artdığını verir; momentlər, yerdəyişmələr, layihə yoxlamaları və hesabat bu nəticələrdən istifadə edir. Karkasın elastik kritik yükündən yuxarıda işləmə dayanır və bunu bildirir. Bu, kiçik fırlanmalarla elastikdir, yalnız əyilmə üzrədir, sərtlik azalması və nominal yüklər yoxdur (AISC birbaşa analiz üsulu deyil); döşəmələr, divarlar və sərt döşəmələr birinci tərtibdə qalır.

**Təbii tezliklər (sonlu elementlər).** Nəticələrin altındakı {{ui:Sonlu elementlər: təbii tezliklər}} bloku eyni modelin ən aşağı rejimlərini sonlu element mühərriki ilə tapır: buraxılmaları olan tirlər, dörd düyünlü qabıq kimi döşəmələr və divarlar, sərt döşəmələr, dayaqlar. Rejimlərin sayını (3, 6, 10 və ya 20) və döşəmə elementini (qalın və ya nazik döşəmələr üçün dörd düyünlü qabıq, və ya yalnız nazik döşəmə üçün element) seçin və {{ui:Tezlikləri tap}} düyməsini basın. Cədvəl hər rejimin Hz ilə tezliyini, saniyə ilə periodunu və X, Y, Z üzrə effektiv modal kütləni hərəkət edə bilən kütlənin payı kimi verir; {{ui:Modeldə göstər}} əyilmiş forma kimi istənilən rejimi çəkir. Kütlə materialın sıxlığı ilə həcmin hasilidir: yüklər kütlə əlavə etmir, sıxlığı olmayan material isə kütləsizdir. Hesabat (PDF, CSV) cədvəli ehtiva edir. Yalnız elastik və kiçik yerdəyişmədir; burada heç bir norma üzrə seysmik və ya külək yükü yaradılmır. Layihə norması yoxlaması deyil; mühəndisiniz nəticələri nəzərdən keçirir.

**Spektr cavabı, zaman tarixçəsi və pushover.** Tezliklərin altında eyni sonlu element modelindən istifadə edən üç blok var. Hamısı üçün kütlə material sıxlığı və işarələdiyiniz halların aşağı yüklərinin cəmidir; hər biri yazdığınız əmsalla vurulur (məsələn, Daimi 1-də, Faydalı isə kütlə kimi saydığınız payda).

{{ui:Cavab spektri}} hər rejimi verdiyiniz spektrdən oxuyur (period və təcil cədvəli, və ya SDS, SD1 və TL-dən ASCE 7 forması; {{ui:Seysmik blokun dəyərlərini götür}} düyməsi bu dəyərləri Seysmik blokdan kopyalayır). Rejimləri CQC, SRSS, on faiz qaydası və ya mütləq cəm ilə birləşdirir, sonra X, Y və Z istiqamətlərini birləşdirir (100 % + 30 % və ya SRSS). Baza kəsilməsini, mərtəbə sürüşmələrini, elementin uc qüvvələrini və istifadə olunan rejimlərin kütlənin 90 %-dən azını daşıdığını bildirən xəbərdarlıqlı rejim cədvəlini verir. Nəticələri əmsala görə və ya daxil etdiyiniz baza kəsilməsinə qədər miqyaslaya bilərsiniz; blok bu baza kəsilməsini heç vaxt özü hesablamır. Nəticələrin işarəsi yoxdur.

{{ui:Zaman tarixçəsi}} yer təcilini modal superpozisiya ilə (yazının nöqtələr arasındakı düz xətləri üçün dəqiq) və ya birbaşa inteqrasiya ilə (Newmark orta təcil və Rayleigh sönümü ilə) işlədir. Giriş uydurma sinus və ya impuls (həmişə "süni" kimi etiketlənir), yapışdırdığınız yazı və ya açdığınız mətn faylıdır (zaman və təcil, addımla hər sətirdə bir təcil, və ya DT= başlığı olan PEER tipli fayl; g və ya m/s² ilə). Damın yerdəyişməsini və baza kəsilməsini zamana görə, hər səviyyənin sürüşməsini və elementin uc qüvvələrinin zərfini verir. Çox uzun yazısı olan modellər onu yalnız sessiya üçün saxlayır.

{{ui:Pushover}} damı kiçik addımlarla yan tərəfə itələyir (birinci rejimə bənzər şəkil, və ya bərabər), I formalı elementlərin uclarında plastik oynaqlarla. Oynaq plastik momentdə axır, eksenel qüvvə artdıqca bu moment azalır (çəkilmiş formadan hesablanır, birləşmələr nəzərə alınmır); bərkləşmə ixtiyaridir, P-delta ixtiyaridir, və əvvəlcə cazibə kombinasiyası tətbiq oluna bilər. Tutum əyrisini (baza kəsilməsi damın yerdəyişməsinə qarşı), birinci oynağı, hər oynağın vəziyyətini və plastik fırlanmasını verir. {{ui:Qeyri-xətti zaman tarixçəsini işə sal}} kiçik modellərdə Zaman tarixçəsi blokunun yazısı altında eyni oynaqları işlədir. Oynaqlar yalnız elementlərin uclarında yaranır (açılmalı olan yeri aralığın içində düyünlə göstərin); hər iki ucu azad buraxılmış element oynaq almır; bağların axması və burkulması modelləşdirilmir; döşəmələr və divarlar elastik qalır; oynaqlar üçün qəbul meyarları verilmir. Layihə norması yoxlaması deyil; mühəndisiniz nəticələri nəzərdən keçirir. Parametrlər modellə birlikdə saxlanılır, hesabat cədvəlləri ehtiva edir.

Hələ hazır deyil: burkulma analizi, spektr cavabı üçün çatışmayan kütlə düzəlişi, yazının miqyaslanması, oynaqlar üçün qəbul meyarları (dinamik cavab yuxarıdadır), sizin üçün yaradılan sahə və külək yükləri (döşəmələrdə zəlzələ qüvvələri [Beton elementlərini yoxlayın və seysmik yükləri yaradın](topic:concrete-and-seismic) bölməsindədir), element ofsetləri, yalnız dartılan bağlar. Bax: [Hələ hazır olmayanlar](topic:not-built-yet).
