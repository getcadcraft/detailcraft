---
title: Ümumi quruluş və yığım çertyojları
summary: Modeldən hər yığım markası üçün plan, fasad və bir yığım çertyoju hazırlayın, A4-dən A1-ə və ya ANSI B-dən D-yə qədər vərəqlərdə, reviziya hərfləri ilə buraxın və PDF, DWG və ya DXF kimi yükləyin.
keywords: gizli xətlər, gizli xətlərin silinməsi, kəsikli, reviziya buludu, buludlar, reviziya üçbucağı, lövbər bolt planı, lövbər şpilkaları, şpilka cədvəli, baza lövhəsi cədvəli, yerləşdirmə, buraxılış, reviziya, rev, reviziya cədvəli, yenidən buraxılış, buraxılış jurnalı, transmittal, dwg, dxf, cad faylı, çertyojların ixracı, çertyojlar, ümumi quruluş, ga, plan, fasad, yığım çertyoju, vərəq ölçüsü, kağız ölçüsü, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, çap, miqyas, ştamp, model ref
from: 709f8604
---

{{ui:Çıxış}} qrupunda {{ui:Çertyojlar}} seçin. DetailCraft bütün dəsti modelin indiki vəziyyətindən hazırlayır. Heç nə saxlanılmır: modeli dəyişin, {{ui:Çertyojlar}} yenidən açın və dəst yenidən hazırlanır.

## Dəstdə nə var

- **Planlar**, üzərində bir şey olan hər səviyyə üçün, aşağıya baxaraq.
- **Fasadlar**, 1 m-dən yaxın elementləri olan hər şəbəkə xətti üçün.
- **Lövbər bolt planı**, modelin baza lövhələri olduqda: hər baza lövhəsi yuxarıdan, sütunu və lövbər şpilkaları ilə, şəbəkələr ölçüləri ilə, hər şpilka naxışının tipik detalı (BP1, BP2 …) şpilka aralığı və kənar məsafələri ilə, və iki cədvəl: lövbər şpilkaları markaya görə (R1, R2 …: say, diametr, uzunluq, lövhənin üzərindəki çıxıntı, daxilolma, marka) və baza lövhələri şəbəkəyə görə (sütun, naxış, lövhə, şpilkalar, lövhənin üstü). Şəbəkədən kənarda olan sütun koordinatları ilə yerləşdirilir.
- **Yığım çertyojları**, hər yığım markası üçün bir: ön, üst və son görünüşlər, deşiklərə və lövhə kənarlarına zəncirvari ölçülər, hissə siyahısı, boş bolt və şpilkalar, və qaynaq və deşik qeydləri. Hər qaynaqlanmış lövhənin ön görünüşündə künc qaynaq simvolu var (AWS A2.4): ox birləşməyə işarə edir, istinad xəttinin altındakı üçbucaq ox tərəfini bildirir, onun solundakı rəqəm mm ilə qaynaq ölçüsüdür, ox xəttə çatdığı yerdəki dairə isə hər tərəfdən deməkdir.

**Gizli xətlər.** Planlar və fasadlar tam qarşısında olan hissənin örtdüyü hissənin xətlərini buraxır (sütunun arxasında gördüyünüz son tərəfdən baxılan tir). Yığım çertyojları lövhəni əsas hissə örtdüyü yerdə kəsikli çəkir: ön görünüşdə şaquli qabırğanın arxasında (hissənin −u tərəfindən baxılaraq), üst görünüşdə yuxarı flanşın altında. Eyni dərinlikdə olan və ya dərinlikdə üst-üstə düşən hissələr tam çəkilir.

Hər vərəqdə çertyoj nömrəsi, miqyas, model adı, tarix, vərəq nömrəsi və vərəq ölçüsü, və model ref ilə ştamp var: saxlanılan modeldən hazırlanmış kod, belə ki, çap olunmuş nüsxə onun gəldiyi modellə uyğunlaşdırıla bilər.

## Vərəq ölçüsünü seçin

{{ui:Çertyojlar}} pəncərəsinin yuxarısındakı siyahıdan ölçü seçin: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 düym), {{ui:ANSI C}} (17 × 22 düym) və ya {{ui:ANSI D}} (22 × 34 düym). Hər vərəq üfüqi (landscape) olur. Dəst dərhal yeni ölçüdə yenidən hazırlanır və eyni ölçü istehsal çertyojları üçün də istifadə olunur. Bu, [DetailCraft parametrlərində](topic:settings#drawings) də var və bu brauzer onu yadda saxlayır.

- Böyük vərəq daha böyük miqyasda çəkir. Miqyaslar həmişə standart olur (1:10, 1:20, 1:25, 1:50, 1:100 və s.).
- Mətn hər vərəqdə eyni ölçüdə qalır, buna görə çap olunanda oxunaqlı olur.
- Kiçik vərəqdə uzun və nazik yığım eninə uzununa olduğundan daha böyük miqyas ala bilər. Görünüş başlığı onda hər iki miqyası göstərir və ölçülər həlledicidir.

## Çertyojları buraxın və reviziyalar

Göstərilən əvvəlki sətir vərəqin harada olduğunu bildirir: **Hələ buraxılmayıb**, **Rev B, buraxılıb …; dəyişməyib**, və ya qırmızı rənglə **B reviziyasından sonra dəyişib: yenidən buraxılmalıdır**. Vərəqlər siyahısı buraxılmış vərəqləri reviziyası ilə və yenidən buraxılmalı olanları işarələyir.

- Buraxılışın məqsədini yazın (başlanğıcda "Fabrikasiya üçün buraxılıb") və {{ui:Bu vərəqi buraxın}} seçin, və ya son buraxılışdan bəri yeni və ya dəyişmiş hər vərəq üçün {{ui:Dəyişmiş vərəqləri buraxın}}.
- Vərəqin ilk buraxılışı A reviziyasıdır, sonra B, C və s. (I və O buraxılır).
- Çertyoj nömrəsi reviziyası ilə ("A-B1  rev B") ştampda göstərilir, yanında isə son buraxılışları sadalayan reviziya cədvəli var: reviziya, tarix və təsvir. Kiçik vərəqdə sığdığı qədərini göstərir.
- Vərəq üzərində çəkilən şey dəyişdikdə "dəyişir": yerdəyişmiş element, yeni deşik, yenidən nömrələnmiş marka. Tarix, vərəq sayı və reviziya cədvəlinin özü sayılmır. Vərəq ölçüsünü dəyişmək bütün vərəqləri dəyişdirir.
- Buraxılış jurnalı model faylında saxlanılır və buraxılış bir geri alma addımıdır. [KISS faylı](topic:kiss-export) hər çertyojun son reviziyasını daşıyır.

### Reviziya buludları

Vərəqin ikinci buraxılışından etibarən dəyişmiş hər hissə və ya bünövrə, hərfi olan reviziya üçbucağı ilə reviziya buludunun içində çəkilir.

- Vərəq son buraxılışdan bəri dəyişdikdə buludlar həmin vaxtdan bəri nəyin dəyişdiyini göstərir, üçbucaqda gələn reviziya ilə (B reviziyası buraxılıb və dəyişib: üçbucaqlar C deyir).
- Buraxdıqdan sonra buludlar həmin reviziyanın vərəqində qalır, çap olunmuş dəst kimi, vərəq yenidən dəyişənə qədər.
- Hər vərəq yalnız göstərdiyi dəyişiklikləri buludlayır. Planlar və fasadlar deşik və ya kəsik çəkmir, buna görə yerdəyişmiş, fırlanmış və ya ölçüsü dəyişmiş və ya markası dəyişmiş elementi buludlayır. Yığım çertyojları və lövbər bolt planı yeni və ya yerdəyişmiş deşikləri və kəsikləri də buludlayır.
- Yenidən nömrələnmiş marka sayılır: dəyişiklik tiri yeni yığıma çevirdikdə, markası yuxarı keçmiş tirlər (B1-dən B2-yə) planlarda və fasadlarda buludlanır.
- Silinmiş hissə buludlanacaq bir şey qoymur.
- Reviziya buludları əlavə olunmazdan əvvəl (DetailCraft 0.4) buraxılmış vərəqlər növbəti buraxılışdan başlayaraq buludlanır.
- Buludlar PDF, DXF və DWG yükləmələrində olur və özləri heç vaxt dəyişiklik sayılmır.

## Yükləmə

Düymələrin yanındakı siyahıdan formatı seçin, sonra göstərilən vərəq üçün {{ui:Bu vərəq}} və ya bütün dəst üçün {{ui:Bütün vərəqlər}} seçin.

- **PDF**: çap etmək və ya göndərmək üçün. {{ui:Bütün vərəqlər}} bir PDF yaradır, hər vərəq üçün bir səhifə, hər səhifə seçilmiş ölçüdə.
- **DWG**, 2018, 2013, 2010, 2007, 2004 və ya 2000 formatında: vərəqləri CAD proqramında açmaq üçün. Köhnə proqram üçün köhnə format seçin.
- **DXF (R12)**: demək olar ki, hər CAD proqramının açdığı versiya.

DWG və ya DXF vərəqi tam ölçüdə çəkilir: bir çertyoj vahidi kağızda bir millimetrdir, buna görə 1:1 çap olunur və hər görünüş başlığında yazılmış miqyası saxlayır. Hər qələm öz qatıdır: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID və s., öz xətt qalınlığı (DWG) və kəsikləri ilə. Sözlər DetailCraft mətn üslubunda (Arial) mətndir. Ölçülər gördüyünüz xətlər və rəqəmlərdir, ölçü obyektləri deyil. {{ui:Bütün vərəqlər}} DWG və ya DXF fayllarını bir zip-ə qoyur, hər vərəq üçün bir fayl.

:::note
DXF R12-də xətt qalınlığı və doldurma yoxdur: qatlar adlarını saxlayır, buna görə çap edərkən qələmləri qat üzrə təyin edin, doldurulmuş formalar isə buraxılır (status paneli neçə olduğunu göstərir).
:::

Göstərilən miqyasların doğru çıxması üçün eyni ölçülü kağızda **100%** çap edin ("səhifəyə sığdır" olmadan).
