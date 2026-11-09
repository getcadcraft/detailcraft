---
title: 0.8 və 0.8.1 versiyalarında yeniliklər
summary: Kran yük cədvəlindən montaj filmi, birləşmə avtopilotu, armatur sıxlıq xəritəsi, təməl yoxlamaları, taxta və yüngül poladlı karkas panelləri, tikilə bilmə və qaynaq girişi yoxlamaları, təchizatçı stoku, ən birinci nə sınır, canlı yenidən həll, daha çox beton yoxlaması və 0.8.1 düzəlişləri.
keywords: yeniliklər, nə yeni, buraxılış qeydləri, dəyişikliklər, 0.8, 0.8.1, versiya, yeni funksiyalar, montaj, kran, yük cədvəli, film, avtopilot, birləşmələr, armatur, sıxlıq, təməl, bünövrə, karkas, taxta, yüngül, kəsim siyahısı, tikilə bilmə, qaynaq, təchizatçı, stok, çatdırılma müddəti, canlı, beton, seysmik, döşəmə, dillər, köməkçi
from: 6e33e052
---

Bu, 0.7-lə müqayisədə DetailCraft 0.8 (1 noyabr 2026) və 0.8.1 (2 noyabr 2026) versiyalarında nə dəyişdiyini göstərir. 0.7 polad elementləri yoxlayırdı; 0.8 qaldırışları planlaşdırır, birləşmələri təklif edir, təməlləri və armaturu yoxlayır və taxta və yüngül poladlı divar, döşəmə və dam karkaslarını qurur.

## Yeni

### Quraşdırma

- **Montaj planı və filmi.** {{ui:Erection}} sekmesində kranı təsvir edin (harada dayandığını, ən yüksək qarmağını, cədvəldə olmayan bağlama vasitələrini) və onun yük cədvəlinin sətirlərini yazın. DetailCraft modeli bir dəfəyə bir yığım üzrə, faza sırası ilə və pillə-pillə qaldırır və hər qaldırışı radiusunda cədvəllə və təyin etdiyiniz ehtiyatla yoxlayır. {{ui:Save movie}} istənilən brauzerdə, telefonda da, oflaynda oynayan bir HTML faylı yazır. Cədvəlin üstündə, ondan kənarda və ya çox yüksək olan qaldırışlar {{ui:Problems}} bölməsindədir. Bu, sizin rəqəmlərinizdən çıxarılmış plandır, qaldırış planı deyil. Bax: [Montaj planı və film](topic:erection-movie).

### Birləşmələr

- **Birləşmə avtopilotu.** {{ui:Autopilot}} sekmesi heç bir birləşməsi olmayan hər birləşməyə baxır və formalarına görə birini təklif edir: baza lövhələri, kəsmə lövhələri, moment tirləri kimi qeyd etdiyiniz tirlər üçün son lövhələr, {{ui:Splice}} ulamalar və {{ui:Gusset}} qussetlər. Vahid yük və ya bir uc kəsmə verin; bolt sayı boltun layihə möhkəmliyinə uyğun gəlir. {{ui:Add them all}} təklifləri bir geri qaytarma addımı kimi əlavə edir. Bunlar nəzərdən keçiriləcək başlanğıc dəyərlərdir, birləşmə layihəsi deyil.
- **Tikilə bilmə yoxlamaları.** {{ui:Problems}} açar çatmayan bolt, sokete çox yaxın boltlar, öz ölçü hüdudlarından kənar künc qaynaqları və su saxlayan boş kəsiklər üçün xəbərdarlıq edir. Qaynaq girişi yenidir: qaynaqçının məşəli çatmayan tam dövrəli künc qaynağı, arxada duran hissə və təsirlənən qaynaq payı ilə siyahıya salınır. Bax: [Tikilə bilmə yoxlamaları](topic:constructability).

### Təməllər və armatur

- **Təməl yoxlamaları.** {{ui:Foundation}} sekmesi sizin təsvir etdiyiniz torpaqda bünövrələri, birləşmiş bünövrələri və plitələri yoxlayır: xidmət yüklərindən dayaq, sürüşmə və aşırılma; ACI 318-19-a görə vurulmuş yüklərdən əyilmə, kəsilmə, deşilmə, uzanma və minimum polad. Kənara və ya künca yaxın sütun bünövrənin kənarı ilə kəsilmiş kəsiyə görə yoxlanılır. Oturma torpağın modulundan hesablanır, elastik plitə altlıq modulundan götürülən yaylarda həll olunur, qazıq qrupları və saxlayıcı divarların öz panelləri var. Sütun yükləri əl ilə yazıla və ya {{ui:Analysis}} sekmesindən götürülə bilər. Bax: [Təməl yoxlamaları](topic:foundation-checks).
- **Armatur sıxlıq xəritəsi.** {{ui:Congestion}} sekmesi hər bünövrənin yuxarıdan görünən istilik xəritəsini çəkir: çubuqların betonun aşağı düşməsi üçün çox az yer buraxdığı yerləri göstərir; bu, təmiz aralıq qaydası ilə, və əgər daxil etsəniz, ən böyük aqreqat və vibrator başlığı ilə müqayisə olunur. Bax: [Armatur sıxlıq xəritəsi](topic:rebar-congestion).

### Karkas və təchizat

- **Taxta və yüngül poladlı karkas.** {{ui:Framing}} sekmesi divar, döşəmə və dam panellərini hər parça, kəsim siyahısı, alınacaq stok və miqyaslı emalatxana çertyoju ilə qurur. {{ui:Place as members}} parçaları modelə qoyur, {{ui:PDF sheets}} hər panel üçün bir vərəq saxlayır. Ölçülər, aralıqlar və başlıqlar sizindir: DetailCraft onların yükü daşıdığını yoxlamır. Bax: [Taxta və yüngül poladlı karkas panelləri](topic:framing-panels).
- **Təchizatçı stoku və çatdırılma müddətləri.** {{ui:Supply}} sekmesi təchizatçının stok siyahısını (CSV) oxuyur və kəsim siyahısının aldığı hər kəsim üçün kifayət qədər stok olub-olmadığını və gözləmənin nə qədər çəkəcəyini göstərir. Çatışmayanlar və gecikən kəsimlər {{ui:Problems}} bölməsindədir. Heç nə sifariş olunmur. Bax: [Təchizatçı stoku və çatdırılma müddətləri](topic:supplier-stock).

### Analiz və layihə

- **Ən birinci nə sınır?** {{ui:Analysis}} sekmesindəki düymə hakim möhkəmlik kombinasiyasını, ən zəif elementi, ilk elementin limitinə çatana qədər yüklərin nə qədər artıla biləcəyini və boltların kəsilmə möhkəmliyi məlum olduqda ən zəif son lövhəni və ya kəsmə lövhəsini tapır. Əvvəlcə kombinasiyalar və layihə norması lazımdır. Dayaq, blok kəsilməsi, qaynaqlar və əyilmə yoxlanılmır. Qoşulmuş köməkçiniz də eyni şeyi soruşa bilər.
- **Canlı.** {{ui:Live: solve again after each edit}} işarələyin və karkas hər dəyişiklikdən sonra yenidən həll olunur.
- **Beton və daha çox.** Qeyri-yırğalanan karkasda arıq sütun artırılmış momentinə görə layihələndirilir (ACI 318-19 6.6.4.5). Seysmik dövr analizdən Rayleigh üsulu ilə götürülə bilər. Lövhələrdən hazırlanmış plitə hər qat üçün lazım olan poladı momentlərindən və bir istiqamətli kəsilməsindən alır. Bax: [Beton elementlərini yoxlayın və seysmik yükləri hazırlayın](topic:concrete-and-seismic).
- **Mühəndis üçün yoxlanılmalıdır.** Təməl, beton və "Ən birinci nə sınır?" nəticələri köməkçi vasitələrdir. Külək yükləri hələ qurulmayıb.

### Bütün tətbiqlərdə

- **Dillər.** Kömək 54 dildədir. İngilisdən başqa olanlar bir ana dili bilən oxuyana qədər maşın qaralamalarıdır; on yenidir (Litva, Latviya, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filipin, Suahili, Özbək).
- **Alət panelinin sətirləri.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} sarmanı, 2 sətir və ya 1 sətir seçir. Artıq yerə sığan panel olduğu kimi qalır; qalanları yan tərəfə sürüşür.
- **Xassə şəbəkəsi.** Bünövrənin sahələri ümumi şəbəkə istifadə edir: yığıla bilən kateqoriyalar və ixcam sıxlıq. 2*450 kimi yazılmış riyazi ifadələr hələ də işləyir.
- **Daxiletmə qurğuları.** Trekpad, qələm, 3D siçan, idarəedici və MIDI tətbiqləri idarə edə bilər. Bax: [3D-də naviqasiya](topic:navigate-3d).
- **Problemlər paneli.** Yuxarıdakı yeni yoxlamaların xəbərdarlıqları əvvəlki kimi eyni {{ui:Problems}} panelində görünür.
- **AI-nizi qoşun.** Öz köməkçiniz CadCraft Studio vasitəsilə qoşulur, səkkiz tətbiqin hamısı ilə işləyir və yalnız icazə verdiyinizi görür. Bir klik ilə qoşulma, hostinq konnektoru və Studio-da öz API açarınız hələ gəlməlidir. Bax: [DetailCraft-ı AI köməkçi ilə istifadə edin](topic:use-with-ai-assistants).

## 0.8.1-də düzəldilənlər

- **Studio-da dillər.** Studio və paketlənmiş nəşrlər iş vaxtında dil dəyişə bilir; əvvəllər yalnız ingilis dili idi. Hər platformada hələ sınaqdan keçməyib: dil dəyişmirsə bizə bildirin.
- **Çarpaz pəncərə ilə seçim.** 0.8.1 quraşdırıcıları pəncərə ilə seçim davranışını 0.8 veb versiyasında olduğu kimi daşıyır; köhnə quraşdırıcı bunu etmirdi.
- **Portret rejimində planşetlər.** Boş şəbəkə hündürlüyü kətana verilir və vərəq düzümü 760 px və ya daha az olduqda başlayır.

## Bu versiyada hələ yoxdur

- **Maşına NC göndərmək** buraxılmayıb.
- **Beton üçün külək yükləri** qurulmayıb; beton və təməl yoxlamaları mühəndis tərəfindən nəzərdən keçirilməlidir.
- **Kod imzalanması.** Windows quraşdırıcıları və macOS .dmg faylı imzalanmayıb, ona görə Windows xəbərdarlıq edə bilər, macOS isə sağ klik, sonra Aç tələb edir.

0.7-dəki əvvəlki dəyişikliklər: [0.7-də yeniliklər](topic:whats-new-0-7).
