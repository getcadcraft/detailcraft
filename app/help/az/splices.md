---
title: Ulamalar
summary: Kiriş və ya sütun ucunun iki parçasını flanec və gövdə örtük lövhələri ilə başdan-başa boltla birləşdirin.
keywords: ulama, kiriş ulaması, sütun ulaması, örtük lövhəsi, ulama lövhəsi, flanec lövhəsi, gövdə lövhəsi, boltlu ulama, birləşmə, qaldırma, birləşdir
from: 97d141c2
---

Boltlu ulama bir I-profilli elementin iki parçasını başdan-başa birləşdirir: hər flanecin xarici tərəfində bir örtük lövhəsi və gövdənin hər tərəfində bir lövhə, hər iki parçadan keçən boltlarla. DetailCraft parçaları boşluğa qədər kəsir, dörd lövhəni yerləşdirir, lövhələrdə və hər iki parçada deşikləri açır, boltları əlavə edir və kənar məsafələri, addımı və oturmanı barədə xəbərdarlıq edir.

## Harada işləyir

- Eyni **I-profilli** iki kiriş və ya iki sütun qaldırması, düz xətt üzrə başdan-başa qovuşur: uclar ən çox 50 mm məsafədə, parçalar paralel və bir xətt üzrə (1 mm daxilində). Hər iki parça istənilən istiqamətdə çəkilə bilər.
- Üfüqi, meylli və ya şaquli parçaların hamısı işləyir.
- Fərqli hündürlüklü və ya fərqli flanec enli iki parça rədd edilir; kanallar, bucaqlar və borular da.

## Ulama əlavə edin

1. İki parçanı başdan-başa qovuşacaq şəkildə çəkin. Artıq çəkilmiş elementi bölmək üçün onu iki parça kimi yenidən çəkin.
2. Birini (və ya hər ikisini) seçin və {{ui:Birləşdirmə}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Ulama}} seçin.
3. Seçilmiş parçaların eyni profilli digər parçalarla hər sərbəst birləşməsi ulama alır. Status sətri neçə olduğunu göstərir.

Ulamanı seçin (lövhələrindən birinə klikləyin), parametrlərini sağdakı paneldə dəyişmək üçün. {{ui:Oxşarlara tətbiq et (n)}} onu eyni profilli parçalar arasında hər digər sərbəst birləşməyə köçürür.

## Parametrlər (mm)

| Parametr | Standart | Nə edir |
|---|---|---|
| Uclar arasındakı boşluq | 10 | Hər parça yarısı qədər kəsilir |
| Bolt diametri, deşik, marka, uzunluq ehtiyatı | 20, 22, A325, 30 | Uclu lövhələrdə olduğu kimi |
| Flanec lövhəsinin qalınlığı | 12 | Lövhə flanecin eni qədərdir |
| Flanec boltu sıraları (hər tərəfdə) | 3 | Birləşmənin hər tərəfində flanec üzərində sıralar |
| Flanec boltu addımı | 75 | Element boyunca |
| Flanec boltu aralığı | 0 | İki bolt xətti arasında; 0 = flanec eni minus 80 |
| Flanec kənar məsafəsi | 40 | Elementin ucundan ilk boltadək və sonuncu bolttan lövhənin ucunadək |
| Gövdə lövhəsinin qalınlığı | 8 | Gövdənin hər tərəfində bir |
| Gövdə boltu sıraları | 3 | Gövdə boyunca, mərkəzdə |
| Gövdə boltu sütunları (hər tərəfdə) | 2 | Birləşmənin hər tərəfində element boyunca |
| Gövdə boltu addımı, gövdə boyunca / element boyunca | 75, 75 | |
| Gövdə kənar məsafəsi | 40 | Flanecdə olduğu kimi |
| Gövdə lövhəsinin hündürlüyü | 0 | 0 = künclər arasında azad gövdə, yuxarıdan və aşağıdan 10 çıxılmaqla |
| Lövhə materialı | A36 | Mətn |

Lövhə uzunluqları boltlardan çıxır: flanec lövhəsi = boşluq + 2 × (2 × kənar məsafə + (sıra − 1) × addım); gövdə lövhələri də öz sütunları ilə eyni qaydadadır. Standart parametrlərlə flanec lövhələri 470 uzunluqdadır.

## Yaxşı bilmək üçün

- Lövhələr iki parçadan **əvvəl çəkilmiş parçaya** aiddir (xassələrində "birinci parça" adlanır): onlar onun yığım çertyojunda görünür və onunla birlikdə, qaynaqsız, boltla göndərilir. İkinci parçanın yığım çertyojunda yalnız onun deşikləri görünür.
- Flanec boltları flanec və onun lövhəsini tutur; gövdə boltları gövdəni və hər iki gövdə lövhəsini tutur. Bolt uzunluqları xassələrdə ayrıca göstərilir.
- Xəbərdarlıqlar digər birləşmələrlə eyni EN 1993-1-8 minimumlarından istifadə edir (uc və kənar məsafə 1.2 × deşik, addım boyunca 2.2 × deşik, eni boyunca 2.4 × deşik), üstəlik gövdə künclərinə görə çox dərin gövdə lövhəsi və gövdəyə çox yaxın flanec boltları üçün əlavə xəbərdarlıqlar.
- DetailCraft ulamanı layihələndirmir (möhkəmlik yoxlaması yoxdur) və fərqli qalınlıqlı parçalar üçün doldurucu lövhələr düzəltmir.
- Hər iki parçanı kopyalamaq onların ulamasını da kopyalayır; hər hansı parçanı silmək ulamanı da silir.
