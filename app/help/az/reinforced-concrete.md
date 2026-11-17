---
title: Beton tirləri, sütunları, plitələri və divarları detallaşdırın
summary: Şəbəkə ilə beton tirləri, sütunları, plitələri və divarları əlavə edin, armatur, üzəngi və bağlayıcılar verin, bindirmələri və ankerləməni ACI 318-19 və ya EN 1992-1-1 ilə yoxlayın, sex çertyojları və armatur əyilmə vərəqləri hazırlayın.
keywords: dəmir-beton, armatur, armaturlaşdırma, tir, sütun, plitə, divar, üzəngilər, bağlayıcılar, qarmaqlar, bindirmə, ankerləmə, ld, ldh, lbd, örtük, addım, kənar armaturu, açılış, şəbəkə, armatur nişanı, əyilmə cədvəli, armatur əyilmə cədvəli, bbs, sex çertyoju, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC idxalı
from: 3835b7ec
---

Görünüşün altındakı {{ui:Beton}} vərəqi beton tirlərin, sütunların, plitələrin və divarların armaturunu təfsilatla göstərir. Siz ölçüləri və armaturları verirsiniz; DetailCraft hər armaturu yerləşdirir, nömrələyir, bindirmələri, ankerləməni, örtüyü və addımı onların mənbə bəndinə görə yoxlayır və çəkir.

:::warning
DetailCraft verdiyiniz armaturların təfsilatını göstərir. Onları layihələndirmir. Hər nəticə mühəndis tərəfindən yoxlanılmaq üçündür.
:::

## Beton vərəqini açın

Görünüşün altındakı {{ui:Beton}} vərəqini seçin. Lent tərtibatında {{ui:Beton}} {{ui:Bünövrə}} yanındakı {{ui:Modelləşdirmə}} vərəqindədir. Çertyoj üslubunun komanda sətrində {{cmd:CONCRETE}} yazın.

## Şəbəkə ilə element əlavə edin

Beton elementlər modelin şəbəkə xətlərinə və səviyyələrinə yerləşdirilir, buna görə əvvəlcə onları qurun (sol panel).

1. {{ui:Şəbəkə ilə əlavə et}} bölməsində {{ui:Element}}-i seçin: {{ui:Beton tir}}, {{ui:Beton sütun}}, {{ui:Plitə}} və ya {{ui:Divar}}.
2. Şəbəkə xətlərini və səviyyələri seçin:
   - tir bir şəbəkə kəsişməsindən digərinə uzanır, yuxarısı səviyyədədir;
   - sütun kəsişmədə durur, bir səviyyədən digərinə qədər;
   - plitə iki nömrəli və iki hərfli şəbəkə xətti arasındakı düzbucaqlını doldurur, yuxarısı səviyyədədir;
   - divar öz mərkəz xətti boyunca bir kəsişmədən digərinə, bir səviyyədən digərinə qədər uzanır.
3. Ölçüsünü verin və {{ui:Əlavə et}} seçin. Element seçilir və sahələri {{ui:Xüsusiyyətlər}} panelində açılır.

Hər element başlanğıc dəyərləri olan armaturlarla başlayır, layihə deyil: onları mühəndisin dəyərlərinə dəyişin.

## Armaturları dəyişin

Elementi seçin (görünüşdə və ya {{ui:Beton}} vərəqindəki adı ilə). {{ui:Xüsusiyyətlər}} paneli göstərir:

| Element | Nəyi təyin edirsiniz |
|---|---|
| Tir | En, dərinlik, təmiz örtük; yuxarı və aşağı armaturlar (ölçü, say, uclarda düz və ya 90° qarmaq); yan armaturlar; üzəngilər (ölçü, 135° və ya 90° qarmaqlar, birincinin dayaq üzündən məsafəsi, uc zonasının uzunluğu və addımı, aralarındakı addım); dayaq uzunluqları; bindirmə uzunluqları |
| Sütun | En, eninə dərinlik, fırlanma, örtük; hər üzdə uzunlamasına armaturlar; bağlayıcılar üzəngilər kimi; armaturların yuxarıda nə etdiyi (üstündəki sütunla bindirmə, döşəməyə qarmaq, və ya dayandırma) |
| Plitə | Qalınlıq, ölçü, yuxarı, örtüklər; aşağı və yuxarı şəbəkə hər istiqamətdə (ölçü və addım); kənarların ətrafında U-armaturlar; kənar armaturu; açılışlar |
| Divar | Qalınlıq, örtük, bir və ya iki qat, üfüqi və şaquli armaturlar, uclarda U-armaturlar, şaquli armaturların yuxarıda bindirilib-bindirilməməsi, kənar armaturu, açılışlar |

Hər dəyişiklik bir geri qaytarma addımıdır. Qurula bilməyən dəyişiklik rədd edilir və status sətri səbəbini bildirir, məsələn "Açılış örtüklə birlikdə elementin daxilinə sığmır."

Üzəngilər və bağlayıcılar bağlıdır, hər iki qarmaq bir künclədir. Tirin armaturları uclarında beton sütuna, sütunun uzaq üzünə qədər örtük çıxılmaqla daxil olur; sütun olmayan yerdə {{ui:Başlanğıcda dayaq uzunluğu (mm)}} və sonda dayaq uzunluğunu verin.

## Bindirmələr və ankerləmə

{{ui:Armaturun standart uzunluğu (mm)}}-dan (başlanğıcda 12000) uzun armaturlar bərabər uzunluqlu parçalara kəsilir, bindirilir. {{ui:Bindirmələr və ankerləmə}} cədvəli hər bindirməni və hər ankerləməni sadalayır: nə tələb olunur, bənd və onun şərtləri ilə və detalın nəyə malik olduğu.

- Bindirmə uzunluğu 0 "lazım olduğu kimi" deməkdir: norma verən uzunluq, 25 mm-ə yuvarlaqlaşdırılmış.
- Əvəzinə istifadə etmək üçün öz bindirmə uzunluğunuzu yazın. Lazım olandan qısadırsa, bu problemdir (aşağıya baxın) və cədvəldə * ilə işarələnir.
- Ankerləmə dayaq üzündən armaturun dayaq daxilindəki ucuna qədər ölçülür. Məlum dayağı olmayan tir yoxlamaq əvəzinə bunu bildirir.
- Bünövrə üzərində duran sütun bünövrənin başlanğıc armaturları ilə, başqa sütun üzərində isə həmin sütunun armaturları ilə bindirilir: onların bindirməsi də yoxlanılır.

**ACI 318-19** (SI): dartılmada düz armaturlar 25.4.2.3 (cədvəl, ψt, ψe, ψg, λ ilə), standart qarmaqlar 25.4.3.1 (ψr 1.6 və ψo 1.25 əks məlum olmadıqda qəbul edilir), sıxılmada armaturlar 25.4.9.2, dartılma bindirmələri 25.5.2.1 (B sinfi, və ya parametrlərdə A sinfi), sıxılma bindirmələri 25.5.5.1.

**EN 1992-1-1**: ankerləmə 8.4.4, fbd 8.4.2-dən (yaxşı və ya zəif yapışma), bindirmələr 8.7.3, bir kəsikdə bindirilən hər armatur üçün α6 ilə. γc, γs və αct tövsiyə olunan dəyərlərdən başlayır; milli əlavənizin qiymətlərini qoyun.

## Yoxlamalar

Uğursuz olan hər yoxlama Problemlər panelindədir (mənbə {{ui:Armatur yoxlamaları}}) və elementin {{ui:Yoxlamalar}} siyahısındadır:

| Yoxlama | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Örtük | Cədvəl 20.5.1.3.1, məruz qalmaya görə | Yapışma minimumu, Cədvəl 4.2 (davamlılıq örtüyünü siz verirsiniz) |
| Armaturların təmiz addımı | 25.2.1 (tirlər, plitələr, divarlar), 25.2.3 (sütunlar) | 8.2 (2) |
| Üzəngi addımı | 9.7.6.2.2 | 9.2.2 (6) |
| Tirin minimum polad | 9.6.1.2 | 9.2.1.1 (1) |
| 900 mm-dən dərin tirin yan armaturları | 9.7.2.3 | yoxlanmır |
| Sütunun polad nisbəti, armaturların sayı | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bağlayıcılar: addım, ölçü, çarpaz bağlayıcılar | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Plitə addımı, minimum polad | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Divar addımı, minimum polad, iki qat | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Bindirmələr, ankerləmə | yuxarıdakı kimi | yuxarıdakı kimi |

Aqreqat ölçüsü məlum deyil, buna görə təmiz addım onsuz yoxlanılır.

## Açılışlar, kənar armaturu və U-armaturlar

Seçilmiş plitə və ya divarın altında {{ui:Açılış əlavə et}} seçin və onun yerini və ölçüsünü təyin edin. Açılışı kəsən armaturlar onun kənarından örtük məsafəsində dayanır.

Kənar armaturları hər tərəfə, eyni qatda əlavə edilir, kəsilən armaturların sahəsinin yarısını daşıyır, açılışdan bir ankerləmə uzunluğu kənarda. Bu, DetailCraft-ın başlanğıc qaydasıdır, norma bəndi deyil: {{ui:Kənar armaturu}} mühəndisin dəyərlərinə dəyişin. Künc armaturları əlavə edilmir.

Plitənin sərbəst kənarları ətrafındakı və divarın uclarındakı U-armaturların ayaqları bir bindirmə uzunluğu qədərdir.

## Armatur nişanları və əyilmə cədvəli

Eyni armaturlar bir nişanı paylaşır: bünövrələr F nişanlarını saxlayır (5F1), tirlər B, sütunlar C, plitələr S və divarlar W alır (7B1, 8C1, 4S2). {{ui:Əyilmə cədvəli}} vərəqi və onun CSV faylı indi konstruksiyanın hər armaturunu sadalayır, əvvəl bünövrələr. {{ui:Çıxış}} › {{ui:Daha çox}} › {{ui:Əyilmə}} onu yükləyir.

## Sex çertyojları

{{ui:Çıxış}} › {{ui:Daha çox}} › {{ui:Armatur çertyojları}} seçin, {{ui:Beton}} vərəqindəki {{ui:Armatur çertyojları}}, və ya bir elementin yanındakı {{ui:Sex çertyoju}}.

Hər elementə hər armaturu və onun nişanını, üzəngi və ya bağlayıcı zonalarını və ölçülənmiş bindirmələri göstərən fasad (plitə üçün plan) və ortadakı kəsik olan vərəq verilir; sonra armatur əyilmə vərəqlərində hər nişan onun forma eskizi, ölçüləri, sayı, kəsim uzunluğu və çəkisi ilə sadalanır.

Vərəqlər hər dəfə modeldən yenidən hazırlanır və pəncərə açıq olduqda hər dəyişiklikdən sonra yenə: başlıq blokunda model istinadı verilir. {{ui:Bu vərəq PDF kimi}} və ya {{ui:Bütün vərəqlər PDF kimi}} saxlayın.

## IFC faylından armaturlar

{{ui:Fayl}} › {{ui:IFC idxal et}} indi IfcReinforcingBar-ı oxuyur: mərkəz xətti boyunca süpürülmüş disk düz ayaqlar və əyilmələr kimi geri qayıdır, öz diametri, nişanı və onu saxlayan element ilə birlikdə. Armaturlar oxunduğu kimi saxlanılır (tirin və ya plitənin qaydalarına çevrilmirlər), görünüşdə göstərilir, əyilmə cədvəlində sadalanır və IFC ixracı ilə yenidən yazılır. İdxal hesabatında neçə armaturun oxunduğu, hansı ölçülərdə, neçə elementdə və nəyin, niyə buraxıldığı göstərilir.

Həmin faylın armaturları olan və ya materialı beton olan tir, sütun, plitə və ya divar polad kimi qəbul edilmir; hesabat bunu bildirir. DetailCraft-ın öz IFC ixracı hər beton elementin təyinatını daşıyır, buna görə o, özü kimi geri qayıdır və onun armaturları ondan yenidən yaradılır.

:::note
Struktur layihə proqramının öz fayllarının oxunması (IFC deyil) qurulmayıb: ondan IFC ixrac edin.
:::

## IFC ixracı

Beton tirlər, sütunlar, plitələr (açılışlarla) və divarlar IfcBeam, IfcColumn, IfcSlab və IfcWall kimi ixrac olunur, hər biri öz armaturları ilə IfcReinforcingBar kimi (əsas armaturlar, üzəngilər və bağlayıcılar üçün bağlayıcı ilmələr, kənar armaturları) ona birləşdirilir; hər armatur mərkəz xətti boyunca süpürülmüş disk olaraq, əyilmələrdə həqiqi qövslərlə, öz nişanı və kəsim uzunluğu ilə.
