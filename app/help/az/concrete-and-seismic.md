---
title: Beton elementlərini yoxlayın və seysmik yüklər yaradın
summary: Beton tirlərin və sütunların armaturunu qurun, onları ACI 318-19 ilə yoxlayın, sərt döşəmələrdə ASCE 7-22 ilə ekvivalent yanal qüvvələr yaradın və mərtəbə sürüşməsinə baxın. Mühəndisin yoxlaması üçün köməkçi vasitədir.
keywords: beton, armaturlu beton, ACI 318, ACI 318-19, armatur, tir, sütun, kəsilmə, bağlayıcılar, seysmik, zəlzələ, ekvivalent yanal qüvvə, ELF, ASCE 7-22, sürüşmə, mərtəbə sürüşməsi, döşəmələr, sərt diafraqma, mərtəbə çəkisi, istifadə əmsalı, struktur, mühəndis
from: 94d3001d
---

{{ui:Analiz}} sekmesindəki {{ui:Beton elementləri}} və {{ui:Seysmik yüklər}} blokları armaturlu beton tirləri və sütunları yoxlayır, həmçinin çərçivənin döşəmələrinə zəlzələnin üfüqi qüvvələrini yaradır. Hər ikisi {{ui:Analiz}} sekmesinin işləməsini izləyir və modellə birlikdə saxlanılır.

:::warning
Nəticələr **mühəndis tərəfindən yoxlanılması üçündür**: mühəndis onu nəzərdən keçirənə qədər köməkçi vasitədir. Beton yoxlamaları birinci dərəcəli qüvvələrdən istifadə edir, bundan əlavə, sizin qeyri-sürüşkən adlandırdığınız çərçivədə sütun büküləndə onu dəyişdirilmiş moment üçün layihələndirilir, sürüşmə dəyişdirilməsi, burulma layihələndirilməsi, seysmik detallama (ACI fəsil 18) və bağlayıcı detallama yoxdur. Seysmik yüklər artıqlıq əmsalını, şaquli seysmik təsiri, burulma gücləndirilməsini və P-delta effektlərini nəzərə almır. Külək yükləri hələ qurulmayıb.
:::

## Elementləri çəkin

Beton elementlərini düzbucaqlılar kimi çəkin: sütun üçün `PL400x400` və tir üçün `PL300x600` kimi bir {{ui:Lövhə}} profili kəsiyi verir. Sütunlar və tirlər hər digər element kimi yerləşdirilir.

## Kəsikləri qurun

{{ui:Beton elementləri}} bloku elementlərin istifadə etdiyi bütün kəsikləri siyahıya alır. Beton olanların üzərində {{ui:Beton kimi qurun…}} basın. DetailCraft çəkilmiş profildən eni **b** (elementin öz y oxu boyunca) və hündürlüyü **h** (z boyunca) oxuyur, sonra soruşur:

- **örtük** (armaturun mərkəzinə qədər), və tir üçün **yuxarı**, **aşağı** və **yan** armatur (neçə və hansı diametrdə), ya da sütun üçün **sütun qəfəsi** (b boyunca və h boyunca armatur, hansı diametr, spiral bağlayıcılar);
- **bağlayıcılar**: ayaqlar, diametr və addım;
- elementin nə kimi **işlədiyi**: tir, sütun, ya da qüvvələrinə görə müəyyən olunan (şaquli element və ya 0.10 f′c Ag-dan çox yük daşıyan element sütundur).

Bunların üstündə f′c, armaturun axma həddi fy və bağlayıcıların axma həddi fyt (kəsilmə üçün ən çoxu 420 MPa sayılır), K və çərçivənin sürüşkən və ya qeyri-sürüşkən olduğunu təyin edin. Beton kimi qurulmuş kəsik beton kimi analiz olunur: E = 4700 √f′c, 2400 kg/m³, və defolt olaraq **çatlaqlı kəsiklərlə** (sütunlar 0.70 Ig, tirlər 0.35 Ig; ACI 318-19 Cədvəl 6.6.3.1.1(a)). Bunu söndürmək üçün {{ui:Tam kəsiklər}} seçin.

## Kombinasiyalar yaradın və yoxlayın

Yük hallarına növünü verin, sonra {{ui:Birləşmələri yarat}}: ACI 318-19 ASCE 7-nin möhkəmlik kombinasiyalarını qəbul edir (§5.3.1). {{ui:Betonu yoxlayın}} basın və hər element yüklənmə alır, polad yoxlamalar kimi modeldə rənglənir: əyilmə və minimal polad (22.2, 9.6.1.2), gərginlik-idarəli deformasiya (9.3.3.1), bağlayıcılarla kəsilmə (22.5, 9.6.3), bağlayıcı addımı və sütunlar üçün eksenel yük ilə moment (22.4, iki istiqamətli əyilmə üçün Bresler üsulu ilə). Çəkilmiş kəsik ilə yazdığınız b × h fərqli olan element *qismən yoxlanılmış* kimi oxunur, eləcə də arıq sütun və ya hədd üstündəki burulma: bunlar layihələndirilmir.

Tutumundan çox olan elementlər {{ui:Problemlər}} panelində siyahıya alınır; onu səbəbi ilə qəbul edin və ya kəsiyi düzəldin.

## Döşəmələr və seysmik yüklər

Döşəmə, çərçivənin sərt bir döşəmə ilə (**sərt diafraqma**) bir yerdə tutulduğu səviyyədir. {{ui:Seysmik yüklər}} blokunda {{ui:Mərtəbələri tap}} basın: o, iki və ya daha çox tirin birləşdiyi səviyyələri götürür. Sonra hər döşəməyə onun **seysmik çəkisini** verin, yazaraq və ya oxuyaraq. {{ui:Çəkiləri hallardan götür}} verdiyiniz əmsalla yük hallarının şaquli yüklərini toplayır (dead hal 1-dir; anbar tipli canlı yük və ya düz damda qar üçün 0.25 əlavə edin, ASCE 7-22 12.7.2 tələb etdiyi kimi). Hər qovşağın şaquli yükü ona və ya üstündəki döşəməyə gedir, ona görə də iki döşəmə arasındakı sütun öz çəkisinin yarısını hər birinə verir.

Layihə dəyərlərini doldurun: SDS, SD1, S1, R, Ie, Cd, TL, struktur sistem (dövr üçün) və risk kateqoriyası. {{ui:Seysmik halları yarat}} sonra binanın hündürlüyündən dövrü hesablayır (12.8.2.1), baza kəsmə qüvvəsi V = Cs W-ni (12.8.1) hesablayır, onu döşəmələrə yayır (12.8.3) və X və Y istiqamətlərində, hər istiqamətdə 5 % təsadüfi burulma ilə dörd yük halı yazır (12.8.4.2). Mərtəbə qüvvələri və mərtəbə sürüşməsi yoxlaması (12.8.6, Cədvəl 12.12-1, sürüşmə Cd δxe / Ie-ni 0.020 hsx ilə müqayisə edir) işdən sonra görünür; həddindən çox sürüşmə də problemdir. Seysmik halları kombinasiyalara daxil etmək üçün yenidən {{ui:Birləşmələri yarat}} basın.

**Analizdən dövr.** Təxmini dövr Ta binanın hündürlüyündən gəlir. Seysmik hallarla analizi işə saldıqdan sonra {{ui:Dövrü analizdən götür}} hər döşəmənin qüvvələr altında nə qədər yerdəyişdiyini oxuyur və dövrü Rayleigh üsulu ilə hesablayır, T = 2π √(Σ w δ² / (g Σ f δ)), bir dəfə X üçün, bir dəfə Y üçün; seysmik hallar onunla yenidən yaradılır. İstifadə olunan dövr heç vaxt Cu·Ta-dan çox olmur (ASCE 7-22 12.8.2), buna görə zəif model baza kəsmə qüvvəsini bu həddin altına sala bilməz. İkinci işdən sonra dövrü yenidən götürün: bir-iki addımda sabitləşir. Ta-ya qayıtmaq üçün {{ui:Analizdən dövr}} seçimini silin.

**Arıq sütunlar (ACI 318-19 6.6.4.5).** Qeyri-sürüşkən çərçivə üçün k·ℓu/r dəyəri 34 + 12·M1/M2-dən (ən çoxu 40) çox olan sütun dəyişdirilmiş moment Mc = δns · M2 üçün layihələndirilir: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)², (EI)eff = 0.4 Ec Ig / (1 + βdns) ilə, və minimal moment Pu (15 + 0.03 h). βdns (başlanğıcda 0.6) amilləşdirilmiş eksenel yükün davamlı hissəsidir: öz dəyərinizi yazın. Pu 0.75 Pc-ə çatan sütun öz yoxlaması ilə uğursuz olur. Hesabat hər arıq sütunun rəqəmlərini siyahıya alır. **Sürüşkən** çərçivədə arıq sütun hələ də "qismən yoxlanılmış"dır: onun dəyişdirilməsi ikinci dərəcəli analiz tələb edir, bu isə hələ qurulmayıb.

**Döşəmələr.** Modeldə plitələr olduqda, {{ui:Döşəmə armaturu}} bloku hər möhkəmlik kombinasiyasının plitə momentlərini götürür və Wood–Armer qaydası ilə (əyilmə və burulma birlikdə) hər qatın metrə nə qədər polad tələb etdiyini hesablayır: aşağı və yuxarı, x və y istiqamətində. Qalınlığı, örtüyü və çubuqları verirsiniz; cədvəl tələb olunanı verilənlə, bir istiqamətli kəsilməni φVc ilə göstərir, və çatışmayan qat öz bəndi ilə problemdir. Əyilmə, sütunlarda deşilmə və açılışlarda kənar çubuqlar əhatə olunmur, dörd düyünlü plitələrlə dayaq üzərindəki moment yavaş yığılır.

Siyahıya aldığınız hər döşəmə analizdə sərt diafraqmaya çevrilir: onun tirləri döşəmənin hərəkətindən eksenel qüvvə daşımır. CraftScript ixracı döşəmələri olan model üçün nəzərdə tutulmayıb.

## Hesabat

{{ui:Hesabat (PDF)}} və {{ui:Hesabat (CSV)}} beton cədvəllərini (fərziyyələr, elementə görə yüklənmə, hər bənd), seysmik parametrləri və baza kəsmə qüvvəsini, döşəmələrə təsir edən qüvvələri və sürüşmə cədvəlini əlavə edir.
