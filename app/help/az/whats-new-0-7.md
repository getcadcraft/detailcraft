---
title: 0.7-də yeniliklər (əvvəlki)
summary: ASCE 7 və ya EN 1990 yük kombinasiyaları ilə polad I-profillərin layihə yoxlamaları, elementlərin AISC 360 və ya EN 1993-1-1 üzrə yoxlanması, polad modelin USD ixracı, USD üçün köməkçi alət, böyük və kiçik düymələri olan Polad lent, səliqəli gizlənən panellər və yerini dəyişən dialoqlar.
keywords: 0.7-də yeniliklər, əvvəlki buraxılış, buraxılış qeydləri, dəyişikliklər jurnalı, dəyişikliklər, 0.7, versiya, yeni xüsusiyyətlər, layihə yoxlamaları, polad layihələndirmə, istifadə dərəcəsi, utilisation, utilization, yük kombinasiyaları, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Milli Əlavə, dam canlı yükü, yerdəyişmə həddi, usd, usda, usdc, usdz, openusd, köməkçi, mcp, polad lent, lent, bölünmüş düymə, vahidlər, yığcam, panellər, dialoqlar, portuqal dili
from: 54a7a8f0
---

Bu, DetailCraft 0.7-də 0.6-ya nisbətən nəyin dəyişdiyidir. 0.6-nın çərçivə analizinin indi ikinci addımı var: polad elementlərin layihə norması üzrə yoxlanılması.

## Yeni

### Bucaq birləşmələri (0.7.1)

- **Bucaq altında birləşən iki I-profil**, məsələn, portal dirsəyi və ya tirin yuxarı xətti: hər ikisini seçin, **{{ui:Birləşdirmə}}** qrupunun **{{ui:Daha çox}}** menyusundan **{{ui:Bucaq birləşməsi}}** seçin; hər iki ucu bucağı yarıya bölən müstəvidə kəsilir. Bir-birinə bolt ilə birləşdirilən son lövhələr və ştrixləmə qabırğaları yeni Bucaq birləşməsi dialoqunda onay qutularıdır; nömrələnmiş sahələr siz yazdıqca birləşmənizin çertyojuna uyğun gəlir. Bucaq elementlər hərəkət etdikcə onlarla birlikdə gedir və çertyojlara, NC fayllarına (əyri kəsiklər), IFC-yə və material siyahısına keçir. Bax: [Bucaq birləşmələri](topic:mitres).

### Layihə yoxlamaları

- **Norma üzrə yük kombinasiyaları.** **{{ui:Analiz}}** tabında yeni **{{ui:Layihə yoxlamaları}}** bloku var, onun **{{ui:Layihə norması}}** seçimi var: ASCE 7 + AISC 360 (ABŞ, LRFD) və ya EN 1990 + EN 1993-1-1 (Eurocode). Hər yük halına növünü verin (daimi, canlı, yeni dam canlı yükü, qar, külək, seysmik), **{{ui:Birləşmələri yarat}}** düyməsini basın və DetailCraft normanın möhkəmlik və istifadə yararlılığı kombinasiyalarını yalnız sizin hallarınız üçün yazır. Özünüzün yazdığınız kombinasiyalar qalır. Bax: [Kombinasiyaları yaradın](topic:design-checks#make-the-combinations).
- **Milli Əlavə dəyərləri.** Eurocode üçün əmsallar tövsiyə olunan dəyərlərdən başlayır; **{{ui:Milli Əlavə dəyərləri}}** imkan verir ki, öz ölkənizin dəyərlərini daxil edəsiniz və onlar modeldə saxlanılır. Bax: [Kombinasiyaları yaradın](topic:design-checks#make-the-combinations).
- **Elementləri yoxla.** **{{ui:Elementləri yoxla}}** hər polad I-profili dartılmaya, əyilmə ilə burulmaya görə sıxılmaya, yanal-burulma əyilməsi ilə əyilməyə, kəsilməyə, eksenel qüvvə ilə əyilməyə və daxil etdiyiniz **{{ui:Yerdəyişmə həddi}}**-nə görə yerdəyişməyə görə yoxlayır. Cədvəldə hər elementin istifadə dərəcəsi, idarə edən yoxlama və onun kombinasiyası göstərilir; elementlər modeldə rənglənir (mavi, yaşıl, göy-sarı, qırmızı, yoxlanılmayanlar üçün boz). Bax: [Elementləri yoxlayın](topic:design-checks#check-the-members).
- **Hesabatda.** **{{ui:Hesabat (PDF)}}** və **{{ui:Hesabat (CSV)}}** norma nəşrlərini, parametrləri, elementlər üzrə istifadə dərəcəsini və istifadə olunan bütün bəndləri əlavə edir. Bax: [Hesabat](topic:design-checks#the-report).
- **Mühəndis nəzərdən keçirənə qədər köməkçi.** Yalnız birinci tərtib qüvvələrindən istifadə edir. Borular, bucaqlar, kanallar, qaynaqlı profillər və zərif və ya 4-cü sinif hissələr səbəbi ilə birlikdə "yoxlanılmayıb" kimi göstərilir; burulma, birləşmələr və beton yoxlanılmır. Bax: [Nə yoxlanılmır](topic:design-checks#what-is-not-checked).

### USD

- **Polad modeli USD kimi ixrac edin.** **{{ui:Çıxış}}** qrupunda **{{ui:USD}}** modeli **{{ui:Mətn (.usda)}}**, **{{ui:İkili (.usdc)}}** və ya **{{ui:Paket (.usdz)}}** formatında yazır; render proqramları və səhnə yığımı üçün: hər yığım öz hissələrini saxlayır, hər hissə uzunluğu boyunca işlənmiş kəsiyidir, kəsilmiş kəsiklərlə; və hər biri öz hissə markasını, profilini, markasını, uzunluğunu və çəkisini daşıyır. Bolt deşikləri, boltlar, qaynaqlar və təməllər USD şəbəkələrində yoxdur. Bax: [Polad modeli USD kimi ixrac edin](topic:usd).

### AI köməkçiləri

- **Köməkçilər üçün USD.** CadCraft Studio vasitəsilə qoşulmuş öz köməkçiniz modeli USD kimi ixrac edə bilər (`usd_export`), Studio-da isə icazə verdiyiniz qovluğa yaza bilər. Bax: [Köməkçi nə tələb edə bilər](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Dəyişdirilib

- **Polad lent** böyük və kiçik düymələrə malikdir: **{{ui:Modelləşdirmə}}** › **{{ui:Elementlər}}** bölməsində böyük **{{ui:Tir}}** və yanında kiçik **{{ui:Sütun}}**, **{{ui:Diaqonal}}** və **{{ui:Lövhə}}**; **{{ui:Detallaşdırma}}** › **{{ui:Birləşmələr}}** bölməsində böyük **{{ui:Son lövhələr}}**, **{{ui:Ulama}}** və **{{ui:Qusset}}** bir bölünmüş düymə paylaşır; **{{ui:Redaktə}}** › **{{ui:Bufer}}** bölməsində böyük **{{ui:Yapışdır}}**, **{{ui:Yerində yapışdır}}** və **{{ui:Surət çıxar}}** qrupun oxunun arxasındadır. **{{ui:İstehsal}}** › **{{ui:Mübadilə}}** bölməsində IFC-nin yanında **{{ui:USD ixrac et}}** var. Digər menyu üslubları əvvəlki kimi görünür. Bax: [Menyular, düymələr və siçan](topic:menus-keys-and-mouse#the-three-styles).
- [Çərçivəni analiz edin](topic:frame-analysis) indi layihə yoxlamalarına istinad edir və onun kombinasiyaları norma ilə yaradıla bilər.

## Bütün tətbiqlərdə

- **Vahidlər.** **{{ui:Parametrlər}}** › **{{ui:Ümumi}}** › **{{ui:Vahidlər}}** uzunluq, sahə, həcm, bucaq və meyl üçün ayrı-ayrılıqda siyahılara malikdir; vahidlərin tərifləri ilə dəqiq ölçülərlə (ABŞ survey fut ayrıca vahiddir). İstifadə etmədiyiniz vahidləri söndürün, onlar vahid siyahılarından çıxır; birini ulduzlasanız, yeni iş ondan başlayır. Fayl həmişə öz vahidini saxlayır. DetailCraft-ın öz qutuları hələ siyahılara uyğunlaşmır: onun uzunluqları hələ də millimetrlə yazılır. Bax: [Vahidlər, yazılmış dəyərlər və vahid siyahıları](common:unit-lists).
- **Daha sıx tərtibat və səliqəli gizlənən panellər.** **{{ui:Parametrlər}}** › **{{ui:Ümumi}}** › **{{ui:Tərtibat sıxlığı}}** › **{{ui:Yığcam}}** ekrana daha çox sığdırır (sensor ekranlar və telefonlar böyük düymələrini saxlayır). Hər yan panelin nazik başlıq zolağı var: onu sürükləyib paneli yerləşdirin və ya üzdürün, başqa panelin zolağının üstünə buraxıb bir çərçivəni sekmələr kimi paylaşın, kənara sürüşmək üçün bərkidin və ya gizlədib kənardan geri gətirin. Bax: [Panelləri təşkil edin](common:arrange-panels#make-the-layout-denser).
- **Dialoqlar yerini dəyişir.** Dialoqu başlıq zolağından sürükləyib çertyojdan kənara çəkin; o, əvvəl tərk etdiyiniz yerə qayıdır. Başlıq zolağına iki dəfə klikləsəniz, yenidən mərkəzə gətirilir. Bax: [Dialoqu köçürün](common:arrange-panels#move-a-dialog).
- **AI köməkçiləri üçün reseptlər.** Öz köməkçiniz üçün on hazır sorğu (çertyojun təmizlənməsi, dəstin çap edilməsi, çertyojların yoxlanılması, modelə suallar, analiz üzrə ümumi hesablama, detalın variantı...), hər biri çağırdığı alətlər və lazım olan icazələrlə və hər biri testlərimizlə yenidən işə salınır. Tətbiqlərin içində AI yoxdur. Bax: [AI köməkçiləri üçün reseptlər](common:assistants-recipes).
- **Dillər.** **Português (Portugal)** **{{ui:Parametrlər}}** › **{{ui:Ümumi}}** › **{{ui:Dil}}** bölməsində yenidir. O, **Português (Brasil)**, **Español (México)** və **Bahasa Indonesia** ilə birlikdə indi tətbiqlərin bütün sözlərinə malikdir, lakin hələ ana dilində danışan biri tərəfindən yoxlanılmamış qaralama kimi. Yardım mövzuları ingilis dilindədir.
- **CadCraft Studio** yeniləmə yoxlaması niyə uğursuz oldu, onu deyir (sisteminiz üçün hələ fayl yoxdur, şəbəkə yoxdur, səhv imza) və yalnız "Hazırdır" demir; və bağladığınız "Yenilikləri" kartını yenisi buraxılana qədər yenidən göstərmir.

## Hələ bu versiyada yoxdur

- **0.7 kod imzalı deyil.** İmzalama və Microsoft Store paketi 0.8-ə keçirildi, çünki sertifikatın yoxlanması hələ tamamlanmayıb. Hər faylın yanındakı SHA-256 kodunu getcadcraft.com/download səhifəsində yoxlayın. Windows-da SmartScreen quraşdırıcını dayandırarsa, **{{ui:Daha çox məlumat}}** seçin, sonra **{{ui:Yenə də işə sal}}**. Mac-də ilk dəfə CadCraft Studio-ya sağ klikləyib **{{ui:Aç}}** seçin. CadCraft Studio hələ heç bir tətbiq mağazasında deyil və hələ iPad və ya iPhone versiyası yoxdur.
- **{{ui:Vahidlər}}** siyahılarındakı bucaq və meyl saxlanılır, lakin hələ heç bir qutu onları oxumur.
- **Layihə yoxlamaları hələ mühəndis tərəfindən nəzərdən keçirilməyib.** Testlərimiz onları çap olunmuş cədvəl dəyərləri və əl ilə hesablanmış düsturlarla müqayisə edir, hələ layihə təlimatının işlənmiş nümunələri ilə yox. Nəzərdən keçirilənə qədər onlar köməkçidir: vacib elementləri əl ilə yoxlayın.
- Layihə yoxlamaları birinci tərtib qüvvələrindən istifadə edir (ikinci tərtib təsirləri yoxdur) və yalnız polad I-profilləri yoxlayır. Hələ qurulmayıb: borular, bucaqlar, kanallar, qaynaqlı profillər, əyilmədə zərif (AISC) və ya 4-cü sinif (Eurocode) hissələr, burulma, əyilmə ilə birlikdə kəsilmə burulması, birləşmələr, yorulma, yanğın, seysmik detallaşdırma və beton. Sıxılmada zərif hissə sıxılma yoxlamalarından kənarda qalır və element "keçir, qismən yoxlanılıb" kimi göstərilir.
- Çərçivə analizi hələ də birinci tərtib və xətti-dir və hələ heç bir mühəndis tərəfindən real işdə sınanmayıb.
- Bolt deşikləri, boltlar, qaynaqlar və təməllər USD ixracında yoxdur.

Qalan hər şey [Hələ qurulmayan](topic:not-built-yet) səhifəsindədir.
