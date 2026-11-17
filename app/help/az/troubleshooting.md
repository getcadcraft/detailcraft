---
title: Problemlərin həlli
summary: DetailCraft-ın mesajlarının nə demək olduğu və nə etmək lazım olduğu: 3D görünüşünün olmamasından tutmuş qurulmayan birləşmələrədək.
keywords: problem, xəta, işləmir, kömək, düzəliş, mesaj, rədd edildi, webgl, boş, xəbərdarlıq, edə bilmir, məsələ
from: f8c3b2b1
---

Əksər rədd etmələr ekranın aşağısındakı status sətrində və ya {{ui:Problemlər}} sekmesində izah olunur. Əvvəl onları oxuyun. Aşağıdakı mesajlar DetailCraft-ın göstərdiyi kimi verilir.

## 3D görünüş yoxdur

**"Bu brauzer 3D qrafikanı (WebGL) işə sala bilmədi. Model, hesabatlar və ixrac hələ də işləyir."**

Brauzer DetailCraft-ın 3D qrafikasını çəkdiyi WebGL-i işə sala bilmədi.

1. Brauzeri ən son versiyasına yeniləyin.
2. Aparat sürətləndirməsini yandırın və brauzeri yenidən başladın (aşağıya baxın).
3. Qrafika sürücünüzü yeniləyin və ya başqa brauzer sınayın. Uzaq masaüstləri və virtual maşınlarda çox vaxt WebGL olmur.
4. Bu vaxt hələ işləyə bilərsiniz: elementləri {{ui:Şəbəkə ilə əlavə et}} formu ilə yerləşdirin, hesabatları oxuyun və ixrac edin. Yalnız görünüşdə klikləmək WebGL tələb edir.

:::chromium
Aparat sürətləndirməsini yandırmaq üçün **Parametrlər, Sistem** açın və **Mövcud olduqda qrafik sürətləndirməsindən istifadə et** seçimini yandırın, sonra yenidən açın.
:::

:::firefox
Aparat sürətləndirməsini yandırmaq üçün **Parametrlər, Ümumi, Performans** açın, **Tövsiyə olunan performans parametrlərindən istifadə et** işarəsini çıxarın və **Mövcud olduqda aparat sürətləndirməsindən istifadə et** işarəsini qoyun. Firefox-u yenidən başladın.
:::

:::safari
Safari-də WebGL standart olaraq açıqdır. Görünüş hələ də başlamırsa macOS-u yeniləyin və heç bir genişlənmənin onu bloklamadığını yoxlayın.
:::

Ətraflı: [Brauzerlər və kompüterlər](common:browsers).

## Görünüşə klikləmək heç nə etmir

- **Klikə yaxın kəsişmə yoxdur.** Yerləşdirmə alətləri yalnız şəbəkə kəsişmələrinə yapışır. Hər nöqtədən uzaq klik heç nə etmir. Nöqtə işıqlanana qədər yaxınlaşın.
- **Alət {{ui:Seç}}-dir və boş sahəyə klikləmisiniz.** Bu seçimi təmizləyir.
- **Sürüşdürmüsünüz.** Basma və buraxma arasında bir neçə pikseldən çox məsafə varsa, bu sürükləmədir: görünüşü döndərir və ya sürüşdürür.
- **Hissə kəsilib.** {{ui:Plan}} və {{ui:Fasad}}-da kəsikdən kənar polad gizlidir və klikləmək olmur. {{ui:3D}}-yə keçin.
- **Kəsişmə yanlış səviyyədədir.** {{ui:3D}}-də bir neçə səviyyənin kəsişmələri ekranda üst-üstə düşə bilər; klik ən yaxınını seçir. {{ui:Plan}} və ya {{ui:Fasad}} istifadə edin.

## Yerləşdirmə mesajları

| Mesaj | Nə etmək lazımdır |
|---|---|
| Sütunun çatmalı olduğu Səviyyə 2-dən yuxarı səviyyə yoxdur. Əvvəl səviyyə əlavə edin. | {{ui:Levels}}-də səviyyə əlavə edin və ya aşağı səviyyəyə klikləyin |
| Digər uc üçün başqa kəsişmə seçin. | Eyni nöqtəyə iki dəfə klikləmisiniz |
| İki uc eyni nöqtədir. | {{ui:Şəbəkə ilə əlavə et}}-də "Başlanğıc" və "Son" seçimləri eynidir |
| Elementləri yerləşdirmək üçün solda şəbəkə xətləri əlavə edin. | Modeldə bir istiqamətdə şəbəkə xətləri yoxdur |
| Naməlum profil "…" | Profil kataloqda və ya modelin xüsusi profillərində yoxdur. Siyahıdan birini seçin |
| Rəqəm yazın. | Rəqəm sahəsi boş qalıb və ya içində mətn var |

## Birləşmələr qurulmur

### "Bu kiriş sütun xəttində bitmir."

Uc plitələri kirişin ucunun şaquli sütunun xəttinə, onun aşağı və yuxarısı arasında, dəqiq düşməsini tələb edir (1 mm daxilində). Kirişin {{ui:Uclar (x, y, z mm)}} və sütunun mövqeyini yoxlayın.

### "Bu kiriş sütunun gövdəsinə bitişir və ya bucaq altındadır"

Və ya {{ui:Problemlər}}-də: "Sütunun gövdəsinə birləşən kirişlər hələ qurulmur: sütunu 90° döndərin və ya başqa birləşmə istifadə edin."

Kiriş sütunun gövdəsinə birləşir. Sütunu seçin və {{ui:Fırlanma (°)}} parametrini 90 edin, sonra yenidən sınayın. Çəpə birləşmələr hələ qurulmur.

### "Uc plitələri yalnız səviyyəli kirişlər üçün qurulur (bu kiriş meyllidir)."

Kirişin hər iki ucu eyni hündürlükdə olmalıdır.

### "Uc plitələri kirişin şaquli (fırlanma 0) olmasını tələb edir."

Kirişin {{ui:Fırlanma (°)}} parametrini yenidən 0 edin.

### "Uc plitələri I-profilli kiriş tələb edir." / "Uc plitələri I-profilli sütun tələb edir."

Yalnız I-profillər (W, IPE, HEA, HEB və ya xüsusi I) uc plitələri qəbul edir.

### "Kiriş ucu artıq sütun xəttində deyil."

Birləşməni əlavə etdikdən sonra kirişi və ya sütunu hərəkət etdirmisiniz. Onu geri yerləşdirin və ya birləşməni silin.

### "Birləşmələr bu elementi heç nəyə kəsir."

Hər iki uclardakı birləşmələr elementi uzunluğundan daha çox geri kəsir, məsələn iki dərin sütun arasında çox qısa kiriş. Elementin uclarını və lövhə qalınlığını yoxlayın.

### "Bu kimi digər birləşmələrin heç birində birləşmə yoxdur …"

{{ui:Oxşar}} yalnız eyni kiriş profili, sütun profili və birləşmə növü olan (kiriş flanecə), hələ birləşməsi olmayan birləşmələrə kopyalanır.

### "Hər iki uc artıq birləşmələrə malikdir." / "Bu sütunun artıq baza lövhəsi var."

Mövcud birləşməni seçin və dəyişin, və ya əvvəl onu silin.

## Problemlər sekmesindəki xəbərdarlıqlar

Xəbərdarlıqlar birləşməni və ya təməli qurulmaqdan saxlamır; yoxlamağınızı tələb edirlər. Kənar və addım xəbərdarlıqları EN 1993-1-8 Cədvəl 3.3 minimumlarından istifadə edir (kənar 1.2 × deşik, addım 2.2 × deşik, en 2.4 × deşik). Layihəniz başqa qaydalardan istifadə edirsə, xəbərdarlıq tətbiq olunmaya bilər; DetailCraft birləşmələri layihələndirmir.

"a hole is off the end of the part" o deməkdir ki, deşiyin x-i 0-dan kiçikdir və ya kəsik uzunluğundan böyükdür. Yadda saxlayın ki, x birləşmələr elementi geri kəsdikdən sonra kəsik başlanğıcından ölçülür.

## Təməl dəyişiklikləri rədd edilir

| Mesaj | Nə etmək lazımdır |
|---|---|
| Örtük bu təməldə çubuqlar üçün yer qoymur. | Təməli böyüdün və ya örtüyü kiçildin |
| Təməl örtük içində iki çubuq qatı üçün çox dayazdır. | Onu dərinləşdirin və ya örtüyü azaldın |
| Başlanğıc çubuqlar 75 mm örtüklə təməlin içinə sığmır. | Az başlanğıc, daha sıx aralıq və ya daha böyük təməl |
| Çubuq aralığı 50–1000 mm olmalıdır. | Həmin diapazonda aralıq yazın |
| Uzunluq 300–50000 mm olmalıdır. | Təməl ölçülərinin hüdudları var: uzunluq və en 300-dən 50000-ə, dərinlik 150-dən 10000-ə qədər |

## Şəbəkələr və səviyyələr rədd edilir

| Mesaj | Nə etmək lazımdır |
|---|---|
| Nömrələnmiş şəbəkələr: hər xətt cütü arasında bir aralıq verin (4). | Boşluqları sayın: beş xətt dörd aralıq tələb edir |
| Hərfli şəbəkələr: aralıqlar müsbət millimetr olmalıdır. | Sıfır, mənfi və ya mətn yoxdur |
| Nömrələnmiş şəbəkələr: şəbəkə etiketləri fərqli olmalıdır. | İki xəttin eyni etiketi var |
| Hər istiqamətdə ən çox 60 şəbəkə xətti. | Modeli bölün |
| Ən azı bir səviyyə saxlayın. | Bütün səviyyə sətirlərini silmisiniz |
| Hər səviyyənin adı olmalıdır. / İki səviyyə "…" adlanır. | Hər səviyyəyə fərqli ad verin |

## Faylın açılması alınmır

| Mesaj | Səbəb |
|---|---|
| DetailCraft yalnız öz modellərini (.detailcraft.json) açır. IFC idxalı hələ qurulmayıb. | Fayl `.json` faylı deyil |
| Bu DetailCraft modeli deyil (JSON deyil). | Fayl zədələnib və ya başqa JSON-dur |
| Bu DetailCraft modeli deyil. | Başqa proqramın JSON faylı |
| Bu modeli daha yeni DetailCraft (format 2) saxlayıb. | Onu saxlayan daha yeni DetailCraft-da açın |
| Bu fayl DetailCraft modeli üçün çox böyükdür. | 50 MB-dan çox |

Fayl "2 elementi etibarsız idi və buraxıldı." kimi xəbərdarlıqlarla açılanda qalan model yaxşıdır. Buraxılanları yoxlamadan əvvəl əsl faylın üzərinə yazmayın.

## İxraclar

| Mesaj | Səbəb |
|---|---|
| Hələ ixrac ediləcək heç nə yoxdur. | Boş modeldə {{ui:IFC}} |
| NC faylları yazılacaq I-profilli və ya lövhə hissə yoxdur. | Modeldə yalnız kanallar, bucaqlar və ya borular var |
| Yazılmadı (hələlik yalnız I-profillər və lövhələr): … | Həmin işarələr I-profil və ya lövhə deyil; qalanları yazıldı |
| Təməl yoxdur, buna görə cədvəl üçün çubuq yoxdur. | Təməl olmadan {{ui:Əyilmə}} |
| … simvol PDF şriftindən kənarda "?" kimi çap olundu. | Model adında və ya markada PDF şriftində olmayan simvollar var |

{{ui:Sex çertyoju}} söndürülüb: modelin hələ hissəsi yoxdur.

## Yükləmələr görünmür

Hər saxlama və ixrac brauzer yüklənməsidir. Brauzerin yükləmələr siyahısını yoxlayın. Brauzer bir neçə fayl yükləməzdən əvvəl soruşursa və ya bu saytdan yükləmələri bloklayırsa, onlara icazə verin. Safari-də alətlər panelindəki yükləmə düyməsinə baxın.

## Düymələr işləmir

- Kursor mətn və ya rəqəm sahəsindədir: alət düymələri və {{key:Delete}} orada nəzərə alınmır ki, yaza biləsiniz. {{key:Tab}} basın və ya görünüşə klikləyin.
- Dialoq açıqdır: əvvəl onu bağlayın.
- Klaviatura brauzerdədir (məsələn ünvan sətri): DetailCraft daxilində klikləyin.
- {{key:Ctrl+Shift+F}} Mac-də də Control istifadə edir.

## Oflayn problemlər

{{ui:Oflayn üçün saxla}} düyməsi tətbiq panelində oflayn nüsxənin hansı vəziyyətdə olduğunu göstərir. Saxlanma necə işləyir: [Oflayn işləmə](common:offline).

| Düymədə yazılır | Nə deməkdir | Nə etmək lazımdır |
|---|---|---|
| {{ui:Oflayn üçün saxla}} | Bu brauzerdə hələ oflayn nüsxə yoxdur | Onlayn olarkən seçin |
| Saxlanılır: 5 / 20 | Saxlanma gedir | {{ui:Oflayn hazırdır}} yazana qədər gözləyin; sekmə açıq qalsın |
| {{ui:Oflayn hazırdır}} | DetailCraft, onun 3D görünüşü, hər ixrac və bu yardım bağlantı olmadan işləyir | Heç nə. Klikləyin: {{ui:Yenidən saxla (ən yeni versiyanı al)}} və ya {{ui:Oflayn nüsxəni sil}} üçün |
| {{ui:Saxlamaq alınmadı}} | Bəzi fayllar yüklənmədi | Bağlantınızı yoxlayın və yenidən cəhd etmək üçün klikləyin |
| {{ui:Oflayn mövcud deyil}} | Bu pəncərə oflayn nüsxə saxlaya bilmir: şəxsi pəncərələr və bəzi idarə olunan kompüterlər bunu bloklayır | Adi pəncərədən istifadə edin və ya onlayn işləyin |

Oflayn olsanız və düymə {{ui:Oflayn hazırdır}} yazmırsa, səhifəni yenidən yükləməyin və ya sekməni bağlamayın: yüklənmiş hissə işləməyə davam edir. Modelinizi {{key:Mod+S}} ilə saxlayın və yenidən onlayn olana qədər gözləyin.

## Saxlanılmamış iş

Brauzer səhifədən çıxıb-çıxmamağı soruşursa, DetailCraft-ın saxlanılmamış dəyişiklikləri var. Qalmağı seçin, sonra {{key:Mod+S}} basın. Sekmə bağlandıqdan sonra DetailCraft modeli bərpa edə bilməz.

## Hələ də həll olunmayıb

Nə etdiyinizi və dəqiq mesajı qeyd edin və bizə [dəstək səhifəsi](https://getcadcraft.com/support) vasitəsilə yazın.
