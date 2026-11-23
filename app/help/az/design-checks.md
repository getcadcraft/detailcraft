---
title: Polad elementləri layihə norması üzrə yoxlayın
summary: ASCE 7 və ya EN 1990 üzrə yük birləşmələri yaradın, hər polad I-kəsiyi AISC 360 və ya EN 1993-1-1 üzrə yoxlayın və hər elementin tutumunun nə qədərindən istifadə etdiyini görün. Mühəndis yoxlayana qədər köməkçi vasitə.
keywords: layihə, layihə yoxlaması, polad layihəsi, istifadə dərəcəsi, tutum, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, yük birləşmələri, LRFD, Milli Əlavə, burkulma, yanal-burulma burkulması, kəsmə, əyilmə, qarşılıqlı təsir, konstruksiya, tələbələr, mühəndis
from: 15685c4e
---

{{ui:Analysis}} işə salındıqdan sonra {{ui:Analysis}} sekmesindəki {{ui:Design checks}} bloku qüvvələri hər polad element üçün nəticəyə çevirir: ən ağır birləşmə onun tutumunun nə qədərindən istifadə edir.

:::warning
Bu, **mühəndis yoxlayana qədər köməkçi vasitədir**. Yalnız birinci tərtib qüvvələrindən istifadə edir (ikinci tərtib təsirləri yoxdur), burulmanı, nazik (4-cü sinif) hissələri, qaynaqlanmış kəsikləri və birləşmələri yoxlamır, yoxlaya bilmədiyini isə buraxır və bunu deyir. Mühəndisin yoxlamasını əvəz etmir və nəticələri möhür deyil.
:::

## Norma seçin

{{ui:Design code}} modellə birlikdə saxlanılır; iki ailədən birini seçin:

- **ASCE 7 + AISC 360** (ABŞ, LRFD): ASCE 7-16 §2.3.1 yük birləşmələri və ANSI/AISC 360-16 element yoxlamaları.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990 birləşmələri (Tənl. 6.10, və ya 6.10a və 6.10b) və EN 1993-1-1 element yoxlamaları.

Sonra {{ui:Steel grade}} seçin (A992, A36 və digərləri; və ya 40 mm-dən yuxarıda aşağı axıcılıq gərginliyi ilə S235-dən S450-yə qədər).

## Birləşmələri yaradın

Yük halının siyahısında hər hala **növünü** (ölü, canlı, dam canlı, qar, külək, seysmik) verin, sonra {{ui:Make combinations}} düyməsini basın. DetailCraft normanın birləşmələrini sizin hallarınızın birləşmələri kimi yazır: sizdə olan növlər üçün normanın göstərdiyi hər möhkəmlik birləşməsi və əyilmə üçün istifadəlilik birləşmələri. Özünüz yazdığınız birləşmələr qalır; onlar norma ilə yoxlanmır. {{ui:Other}} növlü hal birləşdirilmir.

Eurocode üçün əmsallar EN 1990 Əlavə A1-in **tövsiyə olunan dəyərləridir** (γG 1.35, γQ 1.5, təyin olunmuş, qar və külək yüklərinin ψ dəyərləri) və EN 1993-1-1 (γM0 = γM1 = 1.0). Ölkənizin Milli Əlavəsi onların bir hissəsini dəyişir: {{ui:National Annex values}} açın, öz dəyərlərinizi yazın və birləşmələri yenidən yaradın. Onlar modeldə saxlanılır.

## Elementləri yoxlayın

{{ui:Check members}} düyməsini basın. Hər polad I-kəsik üçün cədvəldə onun **istifadə dərəcəsi** (tələb tutuma bölünür: 100 % həddir), keçib-keçmədiyi, hansı yoxlamanın həlledici olduğu və hansı birləşmə olduğu göstərilir. Elementlər modeldə rənglənir: mavi – az istifadə olunur, yaşıl – təxminən yarısı, xardal – həddə yaxın, qırmızı – həddi aşır, boz – yoxlanılmayıb. Elementin adına klikləyərək onu seçin.

Yoxlamalar, hər birinin izlədiyi bənd ilə (hesabatda sadalanır):

- dartılma, əyilmə və burulma burkulması ilə sıxılma, yanal-burulma burkulması ilə hər iki ox ətrafında əyilmə, kəsmə və eksenel qüvvə ilə əyilmə;
- istifadəlilik birləşmələrinin əyilməsi, sizin təyin etdiyiniz {{ui:Deflection limit}} ilə müqayisədə (başlanğıc üçün L/360; layihə dəyəri, norma dəyəri deyil).

**Uzunluqlar.** Tirəklənmiş uzunluq hər təhlil olunan parçanın payıdır (1 = tirəksiz); tirəklər başlanğıcdan bərabər məsafədə qəbul olunur. K əmsalları burkulma üçün uzunluğu vurur. Başqa elementin gəldiyi qovşaq elementi bölür və hər parça öz uzunluğunda, orada tirəklənmiş kimi yoxlanılır.

## Nə yoxlanmır

Element, səbəbi ilə birlikdə, rəqəm əvəzinə **yoxlanılmayıb** göstərir: kəsiyi yoxlamaların tanıdığı forma deyilsə (bucaqlar, kanallar; düzbucaqlı və dairəvi borular divarları kompakt olduqda yoxlanılır), fərdi (qaynaqlanmış) forma olduqda və ya hissə əyilmədə nazik (AISC) və ya 4-cü sinifdirsə (Eurocode). Sıxılmada nazik hissə sıxılma yoxlamalarını çıxarır və element *keçir, qismən yoxlanılıb* kimi görünür. Qovşaqlardakı qaynaqların [öz yoxlaması](topic:weld-checks) var. Həmçinin qurulmayıb: ikinci tərtib təsirləri, burulma, əyilmə ilə birlikdə kəsmə burkulması, boltlu birləşmələr, yorulma, yanğın və seysmik detallaşdırma. Beton elementlərin və seysmik yüklərin [öz yoxlamaları](topic:concrete-and-seismic) var. Bax: [Hələ qurulmayıb](topic:not-built-yet).

## Hesabat

{{ui:Report (PDF)}} və {{ui:Report (CSV)}} yoxladıqdan sonra layihə cədvəlləri ilə zənginləşir: norma nəşrləri, parametrlər və Milli Əlavə dəyərləri, elementlər üzrə istifadə dərəcəsi, istifadə olunan hər bənd və hər element üçün onun həlledici birləşmədəki hər yoxlamanın tələbi, tutumu və istifadə dərəcəsi.
