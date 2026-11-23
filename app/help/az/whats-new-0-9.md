---
title: 0.9 versiyasında yeniliklər (əvvəlki)
summary: Böyük Britaniya Blue Book polad ölçüləri və qeyri-bərabər bucaqlar, bütün hissələr üçün bir PDF dəstində sex çertyojları, fərdi kəsiklər üçün Mənim profillərim, P-Delta və təbii tezliklər, ASCE 7 külək yükləri, seysmik sahə və birləşmələr, Follow ilə canlı kursorlar.
keywords: 0.9 yenilikləri, əvvəlki buraxılış, yeniliklər, buraxılış qeydləri, dəyişikliklər jurnalı, 0.9, Böyük Britaniya poladı, blue book, ub, uc, pfc, shs, rhs, chs, qeyri-bərabər bucaq, sex çertyoju, vərəq dəsti, hissə nişanı, pdf, mənim profillərim, fərdi profil, p-delta, ikinci tərtib, təbii tezlik, sonlu elementlər, modal kütlə, külək yükü, asce 7, seysmik, sahə sinfi, usgs, yük birləşmələri, lrfd, asd, canlı, kursorlar, izləmək, insanlar, alət ipucları, 0.8, 0.8.1, versiya, yeni funksiyalar, quraşdırma, kran, yük cədvəli, film, avtopilot, birləşmələr, armatur, sıxlıq, təməl, dayaq, karkas, taxta, yüngül laylı, kəsim siyahısı, konstruktivlik, qaynaq girişi, təchizatçı, anbar, çatdırılma müddəti, nə birinci sınır, beton, döşəmə, dillər, köməkçi
from: ab0c7f05
---

Bu, DetailCraft 0.9-da 0.8.1 ilə müqayisədə nəyin dəyişdiyidir. 0.9 Böyük Britaniya polad ölçülərini, hər hissə üçün bir dəfəyə sex çertyojunu, çərçivələr üçün böyük {{ui:Analysis}} sekmesini və birlikdə işlədiyinizdə bir-birinizin kursorlarını görmək imkanını gətirir.

## Yeni

### Böyük Britaniya poladı və sex çertyojları

- **Böyük Britaniya polad ölçüləri.** Profil siyahıları Steel for Life Blue Book-dan 976 ölçü ehtiva edir: UB, UC, PFC, EA, UEA, CHS, SHS və RHS; soyuq əyilmiş boş kəsiklər ayrıca saxlanılır (adları CF ilə başlayır). Adlar əvvəl ailə ilə yazılır, məsələn UB305x165x40 və ya SHS100x100x5.0; çertyojların yazdığı kimi yazmaq da işləyir: 305x165x40 UB, L100x100x10, SHS100x5. Bax: [Profil kataloqu](topic:profile-catalog).
- **Qeyri-bərabər bucaqlar.** UEA bucaqları IFC daxil və xaric edərkən və NC fayllarında hər iki qanadını saxlayır; güzgü hissəni uclarını dəyişərək çevirir.
- **Bütün sex çertyojları bir dəfəyə.** Heç nə seçmədən {{ui:Output}} qrupunda {{ui:Shop drawing}} seçin. Pəncərə hər hissə nişanını siyahılayır, istənilənə baxış verir və {{ui:Download all}} hər nişan üçün bir səhifəli bir PDF saxlayır; hər səhifə "Vərəq 3 / 42" kimi başlıqlanır. {{ui:Download this sheet}} baxdığınız vərəqi saxlayır. Kanallar, bucaqlar və boş kəsiklər də indi vərəq alır. Bax: [Sex çertyojlarını hazırlayın](topic:shop-drawings).
- **Mənim profillərim.** Fərdi profil hər yeni model üçün saxlanıla bilər. Fərdi profil formasında {{ui:Keep in My profiles}} seçimini işarəli saxlayın; altındakı {{ui:My profiles}} siyahısında {{ui:Keep}}, {{ui:Use here}} və {{ui:Remove}} var. Siyahı hesabınızda yox, bu brauzerdə saxlanılır (200-ə qədər). Bax: [Lövhələr və profillər](topic:plates-and-profiles).

### Analiz

- **İkinci tərtib (P-Delta).** {{ui:Analysis}} sekmesində Başlat düyməsinin yanındakı {{ui:Second order (P-Delta)}} seçimini işarələyin; eksenel qüvvələr əyilmiş çərçivə üzərində təsir edir. Lövhələr və sərt döşəmələr birinci tərtibdə qalır, xəbərdarlıqla. Bax: [Qüvvələr, reaksiyalar və yerdəyişmələr](topic:frame-analysis).
- **Təbii tezliklər.** Nəticələrin altındakı {{ui:Finite elements: natural frequencies}} bloku eyni modelin ən aşağı modlarını period və effektiv modal kütlə ilə tapır və modu modeldə göstərir. Bax: [Qüvvələr, reaksiyalar və yerdəyişmələr](topic:frame-analysis).
- **Külək yükləri və seysmik sahə.** {{ui:Analysis}} sekmesində üç yeni blok: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} və {{ui:ASCE 7 load combinations}}. Bax: [Külək, seysmik sahə və ASCE 7 birləşmələri](topic:wind-seismic-combinations).

### Birlikdə işləmək

- **Kursorlar və adlar.** Canlı sessiyada hər şəxsin göstəricisi modeldə adı və rəngi ilə çəkilir; seçdikləri isə qutu ilə işarələnir.
- **Bir şəxsi izləyin.** Sessiyada {{ui:People}} açın və adın yanında {{ui:Follow}} seçin; görünüşünüz onunki ilə birlikdə hərəkət edir. Sessiya sahibi {{ui:Ask everyone to follow me}} seçə bilər. Bax: [Canlı sessiyada bir şəxsi izləyin](topic:follow-in-live).

### Bütün tətbiqlərdə

- Alət ipucları Bootstrap alət ipucudur, başlanğıc ipucu kartının bağlama düyməsi var, sekmə zolaqları sığmadıqda yana sürüşür və brauzer sekmə adı açıq sənədi, ardınca DetailCraft və CadCraft yazır.

## Düzəldilmişlər

- Yeni model başladanda fərdi profil itirilirdi.
- Kanallar, bucaqlar və boş kəsiklər sex çertyoj dəstində yox idi.

## Dürüst məhdudiyyətlər

- Külək, seysmik və sonlu elementlər blokları yoxlama köməkçiləridir. Nəticələrə mühəndisiniz baxır; onlar norma yoxlaması deyil. USGS axtarışı canlı xidmətdə yox, əvəzedicidə sınaqdan keçirilib.
- Sonlu elementlər və P-Delta əl ilə və qapalı formalı cavablarla yoxlanılıb, real binada yox. Burkulma analizi qurulmayıb.
- Heç bir Böyük Britaniya istehsalçısı Böyük Britaniya ölçülərini hələ sınamayıb və qeyri-bərabər bucaqlar üçün NC faylları maşında işləməyib.
- Sex çertyoj dəsti yalnız PDF formatındadır.
- İngilis dilindən başqa dillər maşın qaralamalarıdır.
- Windows quraşdırıcıları kod imzalı deyil (Ətraflı, sonra Yenə də işə sal); macOS disk təsviri notarial təsdiq olunmayıb (sağ klik, sonra Aç).

Əvvəlki dəyişikliklər bu səhifədə aşağıda 0.8 və 0.8.1 qeydlərindədir.

## Əvvəlki: 0.8 və 0.8.1

Bu, DetailCraft 0.8 (1 noyabr 2026) və 0.8.1 (2 noyabr 2026) versiyalarında 0.7-yə nisbətən nəyin dəyişdiyidir. 0.7 polad elementləri yoxladı; 0.8 qaldırmaları planlaşdırır, birləşmələri təklif edir, təməlləri və armaturu yoxlayır və taxta və yüngül laylı divarları, döşəmələri və damları karkaslayır.

### Yeni

**Quraşdırma**

- **Quraşdırma planı və film.** {{ui:Erection}} sekmesində kranı təsvir edin (harada durduğu, ən yüksək qarmağı, diaqramda olmayan bağlama) və onun yük cədvəlinin sətirlərini yazın. DetailCraft modeli yığım-yığım, faza sırası və pillə-pillə qaldırır və hər qaldırmanı cədvələ qarşı, öz radiusunda və sizin təyin etdiyiniz ehtiyat payında yoxlayır. {{ui:Save movie}} bir HTML faylı yazır; istənilən brauzerdə, telefonda da oflayn oynayır. Cədvəlin üstündə, ondan kənarda və ya çox yüksək olan qaldırmalar {{ui:Problems}} bölməsindədir. Bu sizin rəqəmlərinizdən plandır, qaldırma planı deyil. Bax: [Quraşdırma planı və film](topic:erection-movie).

**Birləşmələr**

- **Birləşmə avtopilotu.** {{ui:Autopilot}} sekmesi birləşməsi olmayan hər qovşağa baxır və formalara görə təklif edir: baza lövhələri, kəsmə qulaqları, moment tirləri kimi işarələdiyiniz tirlər üçün son lövhələr, ulamalar və gusset lövhələri. Bir yayılmış yük və ya bir ucda kəsici qüvvə verin, bolt sayı boltun layihə möhkəmliyini izləyir. {{ui:Add them all}} təklifləri bir geri qaytarma addımı kimi əlavə edir. Onlar yoxlanılacaq başlanğıc dəyərlərdir, birləşmə layihəsi deyil.
- **Konstruktivlik yoxlamaları.** {{ui:Problems}} bölməsində açarın çata bilmədiyi bolt, lüləyə görə çox yaxın boltlar, ölçü limitlərindən kənar künc qaynaqları və su saxlayan boş kəsiklər. Qaynaq girişi yenidir: qaynaqçının məşəli çatmayan bütün ətrafdakı künc qaynağı, yolunda olan hissə və təsirlənən qaynağın payı ilə siyahıya salınır. Bax: [Konstruktivlik yoxlamaları](topic:constructability).

**Təməllər və armatur**

- **Təməl yoxlamaları.** {{ui:Foundation}} sekmesi təsvir etdiyiniz torpaqda təməlləri, birləşmiş təməlləri və lövhələri yoxlayır: xidmət yüklərindən dayaq təzyiqi, sürüşmə və aşırılma; hesablanmış yüklərdən əyilmə, kəsmə, deşilmə, inkişaf uzunluğu və minimum polad (ACI 318-19). Kənara və ya künca yaxın sütun təməlin kənarı ilə kəsilmiş kəsiklə yoxlanılır. Oturma torpağın modulundan çıxır; elastik lövhə altdayaq modulu ilə yaylar üzərində həll olunur; kazıq qrupları və istinad divarlarının öz panelləri var. Sütun yükləri yazıla bilər və ya {{ui:Analysis}} bölməsindən götürülə bilər. Bax: [Təməl yoxlamaları](topic:foundation-checks).
- **Armatur sıxlığı xəritəsi.** {{ui:Congestion}} sekmesi hər təməlin yuxarıdan görünən istilik xəritəsini çəkir: armaturun betonun aşağı düşməsi üçün çox az yer buraxdığı yerlər, təmiz aralıq qaydasına qarşı və əgər verirsinizsə, ən böyük aqreqat və vibrator başlığına qarşı. Bax: [Armatur sıxlığı xəritəsi](topic:rebar-congestion).

**Karkas və təchizat**

- **Taxta və yüngül laylı karkas.** {{ui:Framing}} sekmesi divar, döşəmə və dam panellərini hər parça, kəsim siyahısı, alınacaq ehtiyat və miqyasda sex çertyoju ilə karkaslayır. {{ui:Place as members}} parçaları modelə qoyur, {{ui:PDF sheets}} hər panel üçün bir vərəq saxlayır. Ölçülər, aralıqlar və başlıqlar sizindir: DetailCraft onların yükü daşıdığını yoxlamır. Bax: [Taxta və yüngül laylı karkas panelləri](topic:framing-panels).
- **Təchizatçı anbarı və çatdırılma müddətləri.** {{ui:Supply}} sekmesi təchizatçının anbar siyahısını (CSV) oxuyur və kəsim siyahısının aldığı hər kəsik üçün anbarda kifayət qədər olub-olmadığını və gözləmənin nə qədər olduğunu göstərir. Çatışmayanlar və gecikən kəsiklər {{ui:Problems}} bölməsindədir. Heç nə sifariş olunmur. Bax: [Təchizatçı anbarı və çatdırılma müddətləri](topic:supplier-stock).

**Analiz və layihə**

- **Nə birinci sınır?** {{ui:Analysis}} sekmesində düymə hökm sürən möhkəmlik birləşməsini, ən zəif elementi, yüklər ilk element həddinə çatmadan nə qədər artıla biləcəyini və boltlarının kəsmə möhkəmliyi məlum olduqda ən zəif son lövhəni və ya kəsmə qulağını tapır. Əvvəlcə birləşmələr və layihə norması lazımdır. Dayaq təzyiqi, blok kəsmə, qaynaqlar və qaldırma yoxlanılmır. Qoşulmuş köməkçiniz də eyni şeyi soruşa bilər.
- **Canlı.** {{ui:Live: solve again after each edit}} işarələsəniz, hər redaktədən sonra çərçivə yenidən həll olunur.
- **Beton, daha çox.** Qeyri-sallanan çərçivədə nazik sütun böyüdülmüş momentinə görə layihələnir (ACI 318-19 6.6.4.5). Seysmik period Rayleigh üsulu ilə analizdən götürülə bilər. Lövhələrdən qurulmuş döşəmə hər təbəqənin tələb etdiyi poladı momentlərindən və bir istiqamətli kəsmədən alır. Bax: [Beton elementləri yoxlayın və seysmik yüklər yaradın](topic:concrete-and-seismic).
- **Mühəndis yoxlaması üçün.** Təməl, beton və Nə birinci sınır? nəticələri köməkçi vasitədir. Külək yükləri qurulmayıb.

**Bütün tətbiqlərdə**

- **Dillər.** Kömək 54 dildədir. İngilis dilindən başqa olanlar bir ana dil danışan oxuyana qədər maşın qaralamalarıdır; on yenisi var (Litva, Latış, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filippin, Suahili, Özbək).
- **Alət paneli sətirləri.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} sarma, 2 sətir və ya 1 sətir seçir. Artıq sığan panel olduğu kimi qalır; qalanları yana sürüşür.
- **Xüsusiyyət cədvəli.** Təməlin sahələri ortaq cədvəldən istifadə edir: yığılan kateqoriyalar və yığcam sıxlıq. 2*450 kimi yazılmış riyazi ifadələr hələ də işləyir.
- **Giriş cihazları.** Touchpad, qələm, 3D siçan, kontroller və MIDI tətbiqləri idarə edə bilər. Bax: [3D-də naviqasiya](topic:navigate-3d).
- **Problemlər paneli.** Yuxarıdakı yeni yoxlamaların xəbərdarlıqları əvvəlki kimi eyni {{ui:Problems}} panelində görünür.
- **Süni intellektinizi qoşun.** Öz köməkçiniz, CadCraft Studio vasitəsilə qoşulmuş, səkkiz tətbiqin hamısı ilə işləyir və yalnız icazə verdiyinizi görür. Bir kliklə qoşulma, hostinq konnektoru və Studio-da öz API açarınız hələ gəlməyib. Bax: [DetailCraft-ı süni intellekt köməkçisi ilə işlədin](topic:use-with-ai-assistants).

### 0.8.1-də düzəldilmişlər

- **Studio-da dillər.** Studio və paketlənmiş variantlar iş vaxtı dil dəyişə bilir; əvvəl yalnız ingilis dili idi. Hər platformada hələ sınaqdan keçirilməyib: dil dəyişmirsə bizə bildirin.
- **Kəsişən pəncərə ilə seçim.** 0.8.1 quraşdırıcıları pəncərə ilə seçim davranışını 0.8 veb versiyasında olduğu kimi düzgün gətirir; köhnə quraşdırıcı bunu etmirdi.
- **Portret rejimində planşetlər.** Boş şəbəkə hündürlüyü çəkiş sahəsinə gedir və vərəq düzümü 760 px və ya daha az olduqda başlayır.

### Bu versiyada hələ yoxdur

- **NC-ni maşına göndərmək** buraxılmayıb.
- **Beton üçün külək yükləri** qurulmayıb; beton və təməl yoxlamaları mühəndis tərəfindən nəzərdən keçirilməlidir.
- **Kod imzası.** Windows quraşdırıcıları və macOS .dmg imzalanmayıb; buna görə Windows xəbərdarlıq edə bilər, macOS isə sağ klik, sonra Aç tələb edir.

Əvvəlki dəyişikliklər [0.7-də yeniliklər](topic:whats-new-0-7) bölməsindədir.
