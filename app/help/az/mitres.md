---
title: Bucaq birləşmələri
summary: Bucaqda bir-birinə çatan iki I-formalı elementi birləşdirin: hər iki ucu bucağı yarıya bölən müstəvidə kəsilir, istəsəniz uc lövhələri, boltlar və sərtləndiricilərlə.
keywords: bucaq birləşməsi, mitr, bucaq birləşməsi, dirsək, haunç, portal çərçivə, dam zirvəsi, künc, bucaq kəsiyi, əyri kəsik, uc lövhəsi, boltlu uc lövhəsi, sərtləndirici, birləşdir
from: cd8380d4
---

Bucaq birləşməsi ucları bucaq altında görüşən iki I-formalı elementi birləşdirir, məsələn portal çərçivənin dirsəyi, dam zirvəsi, və ya planda künc dönən iki tir. DetailCraft hər iki ucu aralarındakı bucağı yarıya bölən müstəvidə kəsir, beləliklə iki kəsik üzü uyğun gəlir. İstəsəniz, hər kəsilmiş uca uc lövhəsi əlavə edir, lövhələri bir-birinə bolt edir və hər elementə bir cüt yan sərtləndirici qoyur.

## Harada işləyir

- İki **I-forma** (IPE, HEA, HEB, W və s.) ki, **ucları eyni düyündə** görüşür. Hər element istənilən istiqamətdə çəkilə bilər.
- Elementlər arasındakı bucaq ən azı 15° olmalıdır. Düz xətdə olan elementlər rədd edilir: onun əvəzinə [ulama](topic:splices) istifadə edin.
- Sadə kəsik (lövhəsiz) elementlər necə görüşürsə-görüşsün işləyir. **Uc lövhələri** iki elementin öz gövdələrinin müstəvisində görüşməsini tələb edir, məsələn portal dirsəkdə və ya damda. Planda künc dönən iki tir öz flanslarının müstəvisində görüşür, buna görə yalnız sadə kəsik alırlar.
- Müxtəlif ölçülü elementlər birləşdirilir, lakin xəbərdarlıqla: onların kəsik üzləri uyğun gəlmir.

## Bucaq birləşməsi əlavə edin

1. İki elementi seçin: birinə klik edin, sonra digərinə {{key:Shift}}+klik.
2. {{ui:Birləşdirmə}} qrupunun {{ui:Daha çox}} menyusundan {{ui:Bucaq birləşməsi}} seçin. Bucaq birləşməsi dialoqu açılır.
3. Nömrəli sahələri təyin edin. Yanındakı çertyoj yazdıqca rəqəmlərinizdən çəkilir və nömrəli dairələr hər sahənin nəyi təyin etdiyini göstərir.
4. {{ui:Mitri əlavə et}} seçin. İkidən çox element seçmisinizsə, aralarındakı hər sərbəst birləşmə eyni bucaq birləşməsi alır.

Bucaq birləşməsini sonra dəyişdirmək üçün onu seçin (lövhələrindən birinə klik edin) və sağ paneldə {{ui:Önizləmə ilə mitr dialoqu}} seçin, ya da parametrləri birbaşa orada dəyişdirin. Sadə kəsiyin lövhəsi yoxdur: iki elementini seçin və yenidən {{ui:Bucaq birləşməsi}} seçin, dialoq həmin bucaq birləşməsi üzrə açılır. {{ui:Oxşarlara tətbiq et (n)}} onu eyni iki profilin elementləri arasında, eyni bucaqda hər sərbəst birləşməyə kopyalayır.

## Nömrəli sahələr (mm)

| No. | Parametr | Standart | Nə edir |
|---|---|---|---|
| 1 | Lövhələr arasında boşluq (və ya kəsik uçları) | 0 | Birləşmədə açıq boşluq. Hər tərəf onun yarısını saxlayır |
| 2 | Uc lövhələri, lövhə qalınlığı | aktiv, 20 | Hər kəsilmiş uca bütün ətrafı qaynaqlanmış uc lövhəsi. Sadə kəsik üçün işarəni silin |
| 3 | Bolt cərgələri, cərgə addımı, en (gauge), kənar cərgə | 4, 0, 0, söndürülüb | Addım 0 cərgələri flanslar arasında bərabər paylayır. Gauge 0 = lövhə enının yarısı, ən azı 2,4 × deşik. Kənar cərgə xarici flansdan kənar lövhə uzantısına düşür |
| 4 | Xarici flansdan kənara çıxan lövhə | 0 | Lövhələrin xarici flansdan kənara, kəsik boyunca nə qədər çatdığı |
| 5 | Daxili flansdan kənara çıxan lövhə | 0 | Eyni, daxili tərəf üçün |
| 6 | Gövdə sərtləndiriciləri, kəsikdən kənar məsafə | söndürülüb, 50 | Hər elementdə bir cüt, gövdənin hər iki tərəfində, elementə perpendikulyar, kəsiyinin uzaq ucundan bu qədər kənarda |
| 7 | Sərtləndirici qalınlığı | 10 | |

{{ui:Boltlar}} altında: bolt diametri, deşik, sinif və uzunluq ehtiyatı (20, 22, A325, 30), uc lövhələrindəki kimi. {{ui:Lövhələr və qaynaqlar}} altında: lövhənin eni (0 = flans eni), künc qaynağının ölçüsü (8) və lövhə materialı (A36).

## Nə alırsınız

- **Kəsiklər.** Hər elementin ucu öz müstəvisində kəsilir. Siyahılarda, çertyojlarda və NC fayllarında onun uzunluğu **ümumi uzunluqdur**: kvadrat ucundan kəsiyin ən uzaq nöqtəsinə qədər.
- **Lövhələr** öz elementinə aiddir: hər elementin yığımı elementin özü, onun uc lövhəsi və sərtləndiriciləridir. Boltlar birləşmənin sahə boltlarıdır: materialların siyahısı onları bir dəfə sayır, və hər elementin yığım çertyoju onları sərbəst boltlar kimi göstərir.
- **Çertyojlar** əyri uçları və lövhələri göstərir; bucaqlı elementin istehsal çertyoju hər kəsiyin kvadratdan bucağını qeyd edir.
- **NC faylları** (DSTV) standartın tələb etdiyi kimi başlıqda əyri kəsik bucaqlarını və kəsiyi izləyən konturları daşıyır. Hər NC faylı kimi, kəsməzdən əvvəl onu öz emalatxananızın NC baxıcısında yoxlayın.
- **IFC** hər elementin ekstruziyasını onun kəsik müstəvisi ilə kəsir, beləliklə digər proqramlar həqiqi kəsiyi göstərir.
- **Nişanlar:** bucaqlı element eyni uzunluqlu kvadrat kəsikli elementdən fərqli parçadır. Eyni kəsikləri olan iki element nişanı paylaşır, dam zirvəsinin iki dam tirinin paylaşdığı kimi.

## Yaxşı bilmək lazımdır

- Bucaq birləşməsi canlı qalır. Hər iki elementdən birini hərəkət etdirin və ya ölçüsünü dəyişin: kəsik, lövhələr və boltlar onu izləyir. Hər hansı elementi silin, bucaq birləşməsi də silinir və digər elementin ucu yenidən kvadrat olur.
- Xəbərdarlıqlar digər birləşmələrdəki EN 1993-1-8 minimumlarını istifadə edir (son və kənar məsafə 1,2 × deşik, addım 2,2 × deşik, gauge 2,4 × deşik), əlavə olaraq flansa çox yaxın bolt cərgələri, flanslardan dar lövhələr və yer olmayan sərtləndiricilər.
- Dəyərlər başlanğıc dəyərlərdir, hesablama deyil. DetailCraft birləşmənin möhkəmliyini yoxlamır və heç bir haunç, uc-uca qaynaqlı bucaq birləşməsi və ya digər elementin flanslarına uyğun sərtləndirici yaratmır.
