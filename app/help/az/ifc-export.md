---
title: Koordinasiya üçün IFC ixrac edin
summary: Bütün modeli IFC4 faylı kimi yazın: polad, boltlar, bünövrələr və armatur; memarlar, mühəndislər və digər proqramlarla paylaşmaq üçün.
keywords: ifc, ifc4, ifc2x3, bim, ixrac, idxal, ifc idxal, deşiklər, boltlar, sərbəst boltlar, açılışlar, birləşdiricilər, koordinasiya, model mübadiləsi, step, openbim, toqquşma, baxış proqramı
from: cfcb0cd6
---

IFC ixracı bütün modeli BIM proqramlarının və IFC baxıcılarının aça biləcəyi bir IFC4 faylı kimi yazır.

## İxrac

1. {{ui:Çıxış}} qrupunda {{ui:IFC}} seçin.
2. Brauzer `<name>.ifc` faylını yükləyir. Status paneli nəyin daxil olduğunu deyir, məsələn: "IFC4 ixrac edildi: 25 detal, 88 birləşdirici, 7 bünövrə, 132 çubuq."

Modeldə detal, bünövrə və ya çubuq yoxdursa, status paneli deyir: "Hələ ixrac üçün heç nə yoxdur."

## Faylda nə var

| DetailCraft-da | IFC faylında |
|---|---|
| Hər səviyyə | Bir layihə, sahə və bina altında bina mərtəbəsi (IfcBuildingStorey) |
| Tor xətləri | Oxları və etiketləri ilə IfcGrid |
| Sütunlar, tirlər, diaqonallar | IfcColumn, IfcBeam, IfcMember (diaqonal), hər biri standart profil formasının real ölçüləri ilə ekstruziyası |
| Lövhələr, son lövhələr, baza lövhələri | IfcPlate |
| Deşiklər və kəsiklər | Detaldan kəsilmiş açılışlar (IfcOpeningElement) |
| Element və onun qaynaqlanmış lövhələri | Yığım nişanı ilə etiketlənmiş yığım (IfcElementAssembly) |
| Boltlar və anker çubuqları | Diametri və uzunluğu ilə IfcMechanicalFastener |
| Bünövrələr | IfcFooting (təbəqə bünövrə), beton mətni material kimi |
| Hər çubuq | Armatur nişanı, diametri, sahəsi və uzunluğu ilə IfcReinforcingBar, əyilmələrdə real qövslərlə, həqiqi mərkəz xətti boyunca |

Hər detalın etiketi onun detal nişanıdır. Hər element həm də nişanları, profili və çəkisi olan "DetailCraft" xüsusiyyət dəstinə malikdir. Hər element öz ən aşağı nöqtəsindən aşağı və ya ona bərabər olan ən yuxarı mərtəbədə yerləşir. Materiallar sinfinə görə qruplaşdırılır.

## Yenidən ixraclar üçün sabit identifikatorlar

Hər elementin IFC identifikatoru (GlobalId) model adından və elementin modeldəki öz identifikatorundan hesablanır. Eyni modeli iki dəfə ixrac etsəniz, identifikatorlar üst-üstə düşür, beləliklə versiyaları müqayisə edən proqramlar nəyin dəyişdiyini bilə bilir.

:::warning
Modelin adını dəyişmək hər identifikatoru dəyişir. Layihənin buraxılışları arasında model adını eyni saxlayın.
:::

## Yoxlayın

DetailCraft-ın IFC faylları test dəstində müstəqil IFC oxucusu ilə geri oxunur. Proqramlar IFC-ni fərqli oxuyur, ona görə fayla etibar etməzdən əvvəl onu komandanızın istifadə etdiyi proqramda açın. CadCraft-ın BimCraft tətbiqi də IFC fayllarını açır.

## Hələlik deyil

- IFC faylından birləşmələri, bünövrələri və armaturu gətirmək. {{ui:IFC idxal et}} tirləri, sütunları, elementləri, lövhələri, tor xətlərini, səviyyələri, deşikləri, kəsikləri və boltları gətirir və nəyi buraxdığını siyahılayır.
- Analitik və ya struktur analiz məlumatları.
- IFC4 istinad görünüşündən başqa hər şey.

## İdxal

{{ui:Fayl}} qrupunda {{ui:IFC idxal et}} (və ya görünüşə `.ifc` faylını atmaq) IFC2X3 və ya IFC4 faylından yeni model yaradır:

- **Tirlər, sütunlar, elementlər (diaqonallar) və lövhələr**, gövdəsi DetailCraft-ın tanıdığı tək ekstruziya edilmiş profil olanlar; kataloqa uyğunlaşdırılmış və ya fərdi profil kimi saxlanılır. **Tor xətləri** və **səviyyələr** faylın tor və mərtəbələrindən gəlir.
- **Deşiklər:** hissənin (gətirilmiş) üzlərindən birinə düz olan hər dairəvi açılış (detalı boşaldan IfcOpeningElement): I-kəsiyin və ya kanalın divarı və ya flanşları, borunun divarları, lövhə, bucağın qolları. Borunun hər iki divarından keçən deşik bir dəfə gəlir.
- **Kəsiklər:** I-kəsiyin və ya kanalın bir ucundan tam enini tutan düzbucaqlı açılış, yuxarıdan aşağı və ya aşağıdan yuxarı.
- **Boltlar:** hər IfcMechanicalFastener və ya IfcFastener, diametri, uzunluğu, sinfi və növü (bolt və ya anker çubuğu) ilə, **sərbəst bolt** kimi. Sərbəst boltlar görünüşdə, materiallar siyahısında və IFC ixracında görünür və elementləri köçürəndə yerində qalır. Heç nə seçilməyəndə {{ui:Xüsusiyyətlər}} paneli onları sayır və birləşmələri əvəzinə əlavə edəndə üçün {{ui:Sərbəst boltları sil}} var.

Hesabat qalan hər şeyi sinfinə görə, səbəbi ilə birlikdə siyahılayır: divarlar və plitələr, bünövrələr və çubuqlar, yuvalı deşiklər, dairəvi borularda deşiklər, birləşmələr (IFC faylı onların lövhələrini və boltlarını daşıyır, onları yaradan qaydanı yox).
