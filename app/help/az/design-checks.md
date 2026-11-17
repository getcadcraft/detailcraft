---
title: Polad elementləri layihə normasına görə yoxlayın
summary: ASCE 7 və ya EN 1990 əsasında yük birləşmələri yaradın, hər polad I-kəsiyini AISC 360 və ya EN 1993-1-1 ilə yoxlayın və hər elementin tutumunun nə qədərindən istifadə etdiyini görün. Mühəndis nəzərdən keçirənə qədər köməkçi vasitədir.
keywords: layihə, layihə yoxlaması, polad layihəsi, istifadə dərəcəsi, tutum, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, yük birləşmələri, LRFD, Milli Əlavə, burulma, bükülmə, kəsmə, əyilmə, qarşılıqlı təsir, struktur, tələbələr, mühəndis
from: 66b6d545
---

Analizi işə saldıqdan sonra {{ui:Analiz}} vərəqindəki {{ui:Layihə yoxlamaları}} bloku qüvvələrini hər polad elementi üçün nəticəyə çevirir: ən pis birləşmənin tutumunun nə qədərindən istifadə etdiyini.

:::warning
Bu, **mühəndis nəzərdən keçirənə qədər köməkçi vasitədir**. Yalnız birinci dərəcəli qüvvələrdən istifadə edir (ikinci dərəcəli təsirlər yoxdur), burulmanı, zərif (4-cü sinif) hissələri, qaynaqlanmış formaları və birləşmələri yoxlamır və yoxlaya bilmədiyi şeyləri buraxır və bunu bildirir. Mühəndisin yoxlamasını əvəz etmir və nəticələri təsdiq möhürü deyil.
:::

## Norma seçin

{{ui:Layihə norması}} modellə birlikdə saxlanılır; iki ailədən birini seçin:

- **ASCE 7 + AISC 360** (ABŞ, LRFD): ASCE 7-16 §2.3.1 yük birləşmələri və ANSI/AISC 360-16 element yoxlamaları.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990 birləşmələri (Tənlik 6.10 və ya 6.10a və 6.10b) və EN 1993-1-1 element yoxlamaları.

Sonra {{ui:Polad markası}} seçin (A992, A36 və digərləri; və ya S235-dən S450-yə qədər, 40 mm-dən yuxarı üçün aşağı axıcılıq həddi ilə).

## Birləşmələri yaradın

Yük halı siyahısında hər yük halına **növünü** verin (daimi, faydalı, dam faydalı, qar, külək, seysmik), sonra {{ui:Birləşmələri yarat}} basın. DetailCraft normanın birləşmələrini sizin hallarınızın birləşmələri kimi yazır: sizdə olan növlər üçün normanın sadaladığı hər möhkəmlik birləşməsi və şəkil dəyişməsi üçün istifadəlik birləşmələri. Özünüzün yazdıqlarınız qalır; onlar norma ilə yoxlanılmır. {{ui:Digər}} növlü hal birləşdirilmir.

Eurocode üçün əmsallar EN 1990 Əlavə A1-in **tövsiyə olunan dəyərləridir** (γG 1.35, γQ 1.5, tətbiq olunan, qar və külək yüklərinin ψ dəyərləri) və EN 1993-1-1 (γM0 = γM1 = 1.0). Ölkənizin Milli Əlavəsi onların bəzilərini dəyişir: {{ui:Milli Əlavə dəyərləri}} açın, öz dəyərlərinizi yazın və birləşmələri yenidən yaradın. Onlar modeldə saxlanılır.

## Elementləri yoxlayın

{{ui:Elementləri yoxla}} basın. Hər polad I-kəsiyi üçün cədvəl onun **istifadə dərəcəsini** (tələb tutuma bölünür: 100 % həddir), keçib-keçmədiyini, hansı yoxlamanın idarə etdiyini və hansı birləşmənin olduğunu göstərir. Elementlər modeldə rənglənir: mavi az istifadə olunan, yaşıl təxminən yarı, narıncı həddə yaxın, qırmızı həddin üstündə, boz yoxlanmamış. Elementin adına klik edərək onu seçin.

Yoxlamalar və hər birinin izlədiyi bənd (hesabatda sadalanır):

- dartılma, əyilmə və burulma bükülməsi ilə sıxılma, hər iki ox ətrafında əyilmə yanal-burulma bükülməsi ilə, kəsmə və eksenel qüvvə ilə əyilmə;
- istifadəlik birləşmələrinin şəkil dəyişməsi, qurduğunuz {{ui:Defleksiya həddi}} ilə müqayisədə (başlanğıcda L/360; layihə dəyəri, norma dəyəri deyil).

**Uzunluqlar.** Bağlanmış uzunluq hər təhlil edilmiş parçanın payıdır (1 = bağlanmamış); bağlamalar başlanğıcdan bərabər məsafədə qəbul edilir. K əmsalları bükülmə üçün uzunluğu vurur. Başqa elementin gəldiyi birləşmə elementi bölür və hər parça öz uzunluğunda, orada bağlanmış kimi yoxlanılır.

## Nə yoxlanılmır

Element, səbəbi ilə birlikdə, rəqəm əvəzinə **yoxlanılmır** göstərir: kəsiyi yoxlamaların tanıdığı I-forması deyilsə (borular, bucaqlar, kanallar), fərdi (qaynaqlanmış) forma olduqda və ya bir hissə əyilmədə zərif (AISC) və ya 4-cü sinif (Eurocode) olduqda. Sıxılmada zərif hissə sıxılma yoxlamalarını çıxarır və element *keçir, qismən yoxlanılıb* oxunur. Hələ qurulmayanlar: ikinci dərəcəli təsirlər, burulma, əyilmə ilə birgə kəsmə bükülməsi, birləşmələr, yorulma, yanğın və seysmik detallaşdırma. Beton elementləri və seysmik yüklərin [öz yoxlamaları var](topic:concrete-and-seismic). Bax: [Hələ hazır deyil](topic:not-built-yet).

## Hesabat

Yoxladıqdan sonra {{ui:Hesabat (PDF)}} və {{ui:Hesabat (CSV)}} layihə cədvəllərini əlavə edir: norma versiyaları, parametrlər və Milli Əlavə dəyərləri, elementə görə istifadə dərəcəsi, istifadə olunan hər bənd və hər element üçün idarə edən birləşmədə hər yoxlamanın tələbi, tutumu və istifadə dərəcəsi.
