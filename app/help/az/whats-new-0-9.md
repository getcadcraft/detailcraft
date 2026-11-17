---
title: 0.9-da yeniliklər
summary: Böyük Britaniya Blue Book polad ölçüləri və qeyri-bərabər bucaqlar, bir PDF dəstində hər hissə üçün sex çertyojları, fərdi kəsiklər üçün Mənim profillərim, P-Delta və təbii tezliklər, ASCE 7 külək yükləri, seysmik sahə və kombinasiyalar, İzlə ilə canlı kursorlar.
keywords: yeniliklər, nə yeni var, buraxılış qeydləri, dəyişikliklər jurnalı, 0.9, britaniya poladı, blue book, ub, uc, pfc, shs, rhs, chs, qeyri-bərabər bucaq, sex çertyoju, sex çertyojları, çertyoj dəsti, hissə markası, pdf, mənim profillərim, fərdi profil, p-delta, ikinci tərtib, təbii tezlik, sonlu elementlər, kütlə modeli, külək yükü, asce 7, seysmik, sahə sinfi, usgs, yük kombinasiyaları, lrfd, asd, canlı, kursorlar, izlə, insanlar, alət ipucları, yeniliklər, buraxılış qeydləri, dəyişikliklər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, quraşdırma, kran, yük cədvəli, film, avtopilot, birləşmələr, armatur, sıxlıq, təməl, plita, zolaq, karkas, taxta, yüngül profil, kəsim siyahısı, konstruktivlik, qaynaq girişi, təchizatçı, ehtiyat, çatdırılma müddəti, nə birinci sınır, canlı, beton, seysmik, döşəmə, dillər, köməkçi
from: 4c95a2de
---

Bu, DetailCraft 0.9-da 0.8.1-ə nisbətən nəyin dəyişdiyidir. 0.9 Böyük Britaniya polad ölçülərini, bir dəfəyə bütün hissələr üçün sex çertyojlarını, çərçivələr üçün daha böyük **{{ui:Analiz}}** tabını və birlikdə işləyərkən bir-birinizin kursorlarına baxmağı gətirir.

## Yeni

### Böyük Britaniya poladı və sex çertyojları

- **Böyük Britaniya polad ölçüləri.** Profil siyahılarında Steel for Life Blue Book-dan 976 ölçü var: UB, UC, PFC, EA, UEA, CHS, SHS və RHS; soyuq əyilmiş boş kəsiklər ayrıca saxlanılır (adları CF ilə başlayır). Adlar əvvəlcə ailə ilə yazılır, məsələn UB305x165x40 və ya SHS100x100x5.0; çertyojların dediyi kimi yazmaq da işləyir: 305x165x40 UB, L100x100x10, SHS100x5. Bax: [Profil kataloqu](topic:profile-catalog).
- **Qeyri-bərabər bucaqlar.** UEA bucaqları IFC giriş və çıxış vasitəsilə və NC fayllarında hər iki qanadını saxlayır; güzgü hissəni ucdan-uca çevirir.
- **Bütün sex çertyojları bir dəfəyə.** Heç nə seçilmədən **{{ui:Çıxış}}** qrupunda **{{ui:Sex çertyoju}}** seçin. Pəncərə hər hissə markasını siyahılayır, istənilənini önizləyir və **{{ui:Hamısını yüklə}}** hər marka üçün bir səhifəli bir PDF saxlayır, hər səhifə "Vərəq 3 / 42" kimi adlandırılır. **{{ui:PDF yüklə}}** baxdığınız yalnız bir vərəqi saxlayır. Kanallar, bucaqlar və boş kəsiklər indi də vərəqlər alır. Bax: [Sex çertyojları hazırlayın](topic:shop-drawings).
- **Mənim profillərim.** Fərdi profil indi hər yeni model üçün saxlanıla bilər. Fərdi profil formasında **{{ui:Mənim profillərimdə saxla}}** qutusunu işarələyin; onun altındakı **{{ui:Mənim profillərim}}** siyahısında **{{ui:Saxla}}**, **{{ui:Burada istifadə et}}** və **{{ui:Sil}}** var. Siyahı bu brauzerdə saxlanılır (200-ə qədər), hesabınızda yox. Bax: [Lövhələr və profillər](topic:plates-and-profiles).

### Analiz

- **İkinci tərtib (P-Delta).** **{{ui:Analiz}}** tabında İşə sal-ın yanındakı **{{ui:İkinci tərtib (P-Delta)}}** qutusunu işarələyin; eksenel qüvvələr əyilmiş çərçivəyə təsir edir. Lövhələr və sərt döşəmələr xəbərdarlıqla birlikdə birinci tərtibdə qalır. Bax: [Qüvvələr, reaksiyalar və yerdəyişmələr](topic:frame-analysis).
- **Təbii tezliklər.** Nəticələrin altındakı **{{ui:Sonlu elementlər: təbii tezliklər}}** bloku eyni modelin ən aşağı rejimlərini, dövr və effektiv modal kütlə ilə tapır və modeldə bir rejimi göstərir. Bax: [Qüvvələr, reaksiyalar və yerdəyişmələr](topic:frame-analysis).
- **Külək yükləri və seysmik sahə.** **{{ui:Analiz}}** tabında üç yeni blok: **{{ui:Külək yükləri (ASCE 7 istiqamətli üsul)}}**, **{{ui:Seysmik sahə və sistem (ASCE 7)}}** və **{{ui:ASCE 7 yük kombinasiyaları}}**. Bax: [Külək, seysmik sahə və ASCE 7 kombinasiyaları](topic:wind-seismic-combinations).

### Birlikdə işləmək

- **Kursorlar və adlar.** Canlı sessiyada hər şəxsin göstəricisi modeldə öz adı və rənginə görə çəkilir, seçdikləri isə qutuda görünür.
- **Bir şəxsi izləyin.** Sessiyada **{{ui:İştirakçılar}}** açın və adın yanında **{{ui:İzlə}}** seçin; sizin görünüşünüz onunkiylə birlikdə hərəkət edir. Sessiya sahibi **{{ui:Hamıdan məni izləmələrini istə}}** seçə bilər. Bax: [Canlı sessiyada bir şəxsi izləyin](topic:follow-in-live).

### Bütün tətbiqlərdə

- Alət ipucları Bootstrap alət ipucudur, başlanğıc ipucu kartının bağlama düyməsi var, sekmə zolaqları yerə sığmadıqda yan tərəfə sürüşür və brauzer sekmə adı açıq sənədi, ardınca DetailCraft və CadCraft-ı göstərir.

## Düzəldilib

- Yeni model başlayanda fərdi profil itirilirdi.
- Kanallar, bucaqlar və boş kəsiklər sex çertyoj dəstində yox idi.

## Dürüst məhdudiyyətlər

- Külək, seysmik və sonlu elementlər blokları yoxlama köməkçiləridir. Nəticələri mühəndisiniz nəzərdən keçirir; onlar norma yoxlaması deyil. USGS axtarışı canlı xidmətdə yox, əvəzedici üzərində sınanıb.
- Sonlu elementlər və P-Delta əl və qapalı-forma cavabları ilə yoxlanıb, real binada yox. Burulma analizi hələ qurulmayıb.
- Heç bir Böyük Britaniya istehsalçısı hələ Britaniya ölçülərini sınamayıb; qeyri-bərabər bucaqlar üçün NC faylları hələ maşında işə düşməyib.
- Sex çertyoj dəsti yalnız PDF-dir.
- İngilis dilindən başqa dillər maşın qaralamalarıdır.
- Windows quraşdırıcıları kod imzalı deyil (Daha çox məlumat, sonra Yenə də işə sal); macOS disk təsviri notarizasiya olunmayıb (sağ klik, sonra Aç).

Əvvəlki dəyişikliklər bu səhifədə aşağıda olan 0.8 və 0.8.1 qeydlərindədir.

## Əvvəlki: 0.8 və 0.8.1

Bu, DetailCraft 0.8 (1 noyabr 2026) və 0.8.1 (2 noyabr 2026) versiyalarında 0.7-yə nisbətən nəyin dəyişdiyidir. 0.7 polad elementləri yoxladı; 0.8 qaldırışları planlaşdırır, birləşmələri təklif edir, təməlləri və armaturu yoxlayır, taxta və yüngül profilli divarları, döşəmələri və damları karkasla qurur.

### Yeni

**Quraşdırma**

- **Quraşdırma planı və film.** **{{ui:Quraşdırma}}** tabında kranı təsvir edin (harada dayandığı, ən yüksək qarmağı, yük cədvəlində olmayan bağlama) və onun yük cədvəlinin sətirlərini yazın. DetailCraft modeli hər dəfə bir yığımla, faza ardıcıllığı ilə və pillə-pillə qaldırır və hər qaldırışı onun radiusunda cədvəllə və daxil etdiyiniz ehtiyat payı ilə yoxlayır. **{{ui:Filmi saxla}}** hər hansı brauzerdə, hətta telefonda da, qoşulmadan oynayan bir HTML faylı yazır. Cədvəldən kənar, ondan keçən və ya çox yüksək olan qaldırışlar **{{ui:Problemlər}}**-dədir. Bu sizin rəqəmlərinizdən çıxarılan plandır, qaldırış planı deyil. Bax: [Quraşdırma planı və film](topic:erection-movie).

**Birləşmələr**

- **Birləşmə avtopiloti.** **{{ui:Avtopilot}}** tabı birləşməsi olmayan hər birləşməni yoxlayır və formalardan bir birləşmə təklif edir: baza lövhələri, kəsici lövhələr, moment tirləri kimi qeyd etdiyiniz tirlər üçün son lövhələr, ulamalar və qussetlər. Bərabər yük və ya bir ucda kəsici qüvvə verin, bolt sayı boltun layihə möhkəmliyinə görə tənzimlənir. **{{ui:Hamısını əlavə et}}** təklifləri bir geri qaytarma addımı kimi əlavə edir. Bunlar nəzərdən keçiriləcək başlanğıc dəyərlərdir, birləşmə layihəsi deyil.
- **Konstruktivlik yoxlamaları.** **{{ui:Problemlər}}** açarın çata bilmədiyi bolt, yuvaya görə çox yaxın boltlar, ölçü limitlərindən kənar künc qaynaqları və su saxlayan boş kəsiklər üçün. Qaynaq girişi yenidir: kaynakçının məşəli çata bilməyən bütün-ətraflı künc qaynağı əngəl olan hissə və təsir olunan qaynağın payı ilə siyahıya alınır. Bax: [Konstruktivlik yoxlamaları](topic:constructability).

**Təməllər və armatur**

- **Təməl yoxlamaları.** **{{ui:Təməl}}** tabı sizin təsvir etdiyiniz qruntda təməlləri, birləşmiş təməlləri və plitələri yoxlayır: xidmət yüklərindən oturma gücü, sürüşmə və aşırılma; hesablanmış yüklərdən əyilmə, kəsilmə, deşmə, inkişaf və minimum polad (ACI 318-19). Kənara və ya künca yaxın sütun təməlin kənarı ilə kəsilmiş kəsiklə yoxlanılır. Oturma qrunt modulundan gəlir, çevik plita yataq modulundan yaylar üzərində həll olunur, külək kəsiləri və divar paneli öz panellərinə malikdir. Sütun yükləri yazıla və ya **{{ui:Analiz}}**-dən götürülə bilər. Bax: [Təməl yoxlamaları](topic:foundation-checks).
- **Armatur sıxlığı xəritəsi.** **{{ui:Sıxlıq}}** tabı hər təməlin yuxarıdan görünən istilik xəritəsini çəkir: çubuqların betonun aşağı enməsi üçün çox az yer buraxdığı yerlər, təmiz aralıq qaydasına və əgər verirsinizsə, ən böyük aqreqata və vibrator başlığına qarşı. Bax: [Armatur sıxlığı xəritəsi](topic:rebar-congestion).

**Karkas və təchizat**

- **Taxta və yüngül profilli karkas.** **{{ui:Karkas}}** tabı divar, döşəmə və dam panellərini hər parça ilə, kəsim siyahısı, alınacaq ehtiyat və miqyaslı sex çertyoju ilə qurur. **{{ui:Elementlər kimi yerləşdir}}** parçaları modelə qoyur, **{{ui:PDF vərəqləri}}** hər panel üçün bir vərəq saxlayır. Ölçülər, aralıqlar və başlıqlar sizindir: DetailCraft onların yükü daşıdığını yoxlamır. Bax: [Taxta və yüngül profilli karkas panelləri](topic:framing-panels).
- **Təchizatçı ehtiyatı və çatdırılma müddətləri.** **{{ui:Təchizat}}** tabı təchizatçının ehtiyat siyahısını (CSV) oxuyur və kəsim siyahısının aldığı hər kəsik üçün kifayət qədər ehtiyat olub-olmadığını və gözləmənin nə qədər sürdüyünü göstərir. Çatışmayanlar və gecikən kəsiklər **{{ui:Problemlər}}**-dədir. Heç nə sifariş edilmir. Bax: [Təchizatçı ehtiyatı və çatdırılma müddətləri](topic:supplier-stock).

**Analiz və layihə**

- **Nə birinci sınır?** **{{ui:Analiz}}** tabında düymə idarə edən möhkəmlik kombinasiyasını, ən zəif elementi, yüklər birinci elementin həddinə çatana qədər nə qədər artıra bildiyini və bolt kəsici möhkəmliyi məlum olan ən zəif son lövhəni və ya kəsici lövhəni tapır. Əvvəlcə kombinasiyalar və layihə norması lazımdır. Dayaqlama, blok kəsilməsi, qaynaqlar və çəkilmə yoxlanılmır. Qoşulmuş köməkçiniz də eyni şeyi soruşa bilər.
- **Canlı.** **{{ui:Canlı: hər dəyişiklikdən sonra yenidən həll et}}** qutusunu işarələyin və hər dəyişiklikdən sonra çərçivə yenidən həll olunur.
- **Daha çox beton.** Qeyri-sürüşən çərçivədə zərif sütun böyüdülmüş momentinə görə layihələndirilir (ACI 318-19 6.6.4.5). Seysmik dövr Rayleigh üsulu ilə analizdən götürülə bilər. Plitələrdən hazırlanmış döşəmə hər təbəqənin tələb etdiyi poladı momentlərindən və birtərəfli kəsilmədən alır. Bax: [Beton elementlərini yoxlayın və seysmik yükləri hazırlayın](topic:concrete-and-seismic).
- **Mühəndis üçün yoxlama.** Təməl, beton və "Nə birinci sınır?" nəticələri köməkçidir. Külək yükləri hələ qurulmayıb.

**Bütün tətbiqlərdə**

- **Dillər.** Yardım 54 dildədir. İngilis dilindən başqa olanlar ana dilində danışan biri oxuyana qədər maşın qaralamalarıdır; on dil yenidir (Litva, Latviya, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filipin, Svahili, Özbək).
- **Alət sıraları.** **{{ui:Parametrlər}}** › **{{ui:Ümumi}}** › **{{ui:Alət paneli sətirləri}}** sarmağı, 2 sətir və ya 1 sətir seçir. Artıq yerə sığan zolaq olduğu kimi qalır; qalanları yan tərəfə sürüşür.
- **Xüsusiyyətlər şəbəkəsi.** Təməlin sahələri ortaq şəbəkədən istifadə edir: yığıla bilən kateqoriyalar və yığcam sıxlıq. 2*450 kimi yazılmış riyazi ifadələr hələ də işləyir.
- **Giriş cihazları.** Trackpad, qələm, 3D siçan, kontroller və MIDI tətbiqləri idarə edə bilər. Bax: [3D-də naviqasiya](topic:navigate-3d).
- **Problemlər paneli.** Yuxarıdakı yeni yoxlamaların xəbərdarlıqları əvvəlki kimi eyni **{{ui:Problemlər}}** panelində görünür.
- **AI köməkçinizi qoşun.** CadCraft Studio vasitəsilə qoşulmuş öz köməkçiniz bütün səkkiz tətbiqlə işləyir və yalnız icazə verdiklərinizi görür. Bir kliklə qoşulma, hostlanmış konnektor və Studio-da öz API açarınız hələ gəlməlidir. Bax: [DetailCraft-ı AI köməkçi ilə istifadə edin](topic:use-with-ai-assistants).

### 0.8.1-də düzəldilib

- **Studio-da dillər.** Studio və paketlənmiş nəşrlər iş vaxtında dil dəyişə bilər; əvvəllər yalnız ingilis dili idi. Hələ hər platformada sınanmayıb: dil dəyişmirsə, bizə deyin.
- **Pəncərə ilə çoxlu seçim.** 0.8.1 quraşdırıcıları pəncərə ilə seçim davranışını artıq 0.8 veb versiyasında düzgün olduğu kimi saxlayır; köhnə quraşdırıcı bunu etmirdi.
- **Planşetlər şaquli vəziyyətdə.** Boş şəbəkə hündürlüyü kətana verilir və vərəq tərtibi 760 px və ya daha az olduqda başlayır.

### Hələ bu versiyada yoxdur

- **NC-ni maşına göndərmək** buraxılmayıb.
- **Betonda külək yükləri** hələ qurulmayıb; beton və təməl yoxlamaları mühəndis tərəfindən nəzərdən keçirilməlidir.
- **Kod imzası.** Windows quraşdırıcıları və macOS .dmg faylı imzalanmayıb, ona görə Windows xəbərdarlıq edə bilər və macOS sağ klik, sonra Aç tələb edir.

Əvvəlki dəyişikliklər [0.7-də yeniliklər](topic:whats-new-0-7) səhifəsindədir.
