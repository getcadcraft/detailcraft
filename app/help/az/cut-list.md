---
title: Kəsim siyahısı
summary: Tir, sütun, bənd və pilləkən tirlərini kəsik enliyi ilə ehtiyat uzunluqlarına yerləşdirin və neçə çubuq almaq lazım olduğunu və tullantını görün.
keywords: kəsim siyahısı, yerləşdirmə, ehtiyat uzunluğu, çubuq, kəsik enliyi, mişar, qalıq, kəsik parçası, tullantı, birləşdirmə, satınalma, çoxlu
from: 81d06ce5
---

{{ui:Kəsim siyahısı}} vərəqi görünüşün altındadır və modelin xətti hissələrini ehtiyat çubuqlarından necə kəsmək lazım olduğunu hesablayır: hər profil və material üçün hər uzunluqdan neçə çubuq almaq, hər çubuğa nə düşdüyü və tullantı.

## Ehtiyatı təyin edin

Vərəqin yuxarısında:

- **Ehtiyat uzunluqları (mm):** ala biləcəyiniz uzunluqlar, boşluqla ayrılmış, məsələn `6000 12000`, və ya 20 ft və 40 ft çubuqlar kimi `6096 12192`. Ən çox səkkiz.
- **Mişar kəsik enliyi (mm):** hər kəsiyin götürdüyü yer (başlanğıcda 3).
- **Son kəsim (mm):** ilk parçadan əvvəl hər çubuğun ucundan kəsilən hissə (başlanğıcda 0).
- **Qalıqları saxla (mm):** bu uzunluqdan və ya daha uzun qalıq ehtiyata qayıdır; qısası hurdadır (başlanğıcda 500).

Bunlar digər [parametrlər](topic:settings) kimi bu brauzerdə saxlanılır.

## Necə yerləşdirilir

- Hər tir, sütun, bənd və pilləkən tirləri, hissə markası və sayına görə; lövhələr təbəqədən kəsilir və burada yerləşdirilmir.
- Hər profil və material ayrıca.
- Ən uzun parçalar birinci; hər biri sığdığı ilk çubuğa. Yeni çubuq ən uzun ehtiyat uzunluğu ilə başlayır. Sonra hər çubuq, kəsikləri qarşılayan ən qısa ehtiyat uzunluğu kimi alınır.
- Hər kəsik kəsik enliyini götürür (kəsik çubuğun sonunda tam bitdikdə heç nə götürmür); hər çubuq son kəsimi itirir.
- Bütün ehtiyat uzunluqlarından uzun parça **Ehtiyatdan uzun** altında sadalanır, yerləşdirilmir: onu ulaşdırın (bax: [Ulaşdırmalar](topic:splices)) və ya daha uzun ehtiyat uzunluğu əlavə edin.

## Oxuyun

- **Xülasə:** hər profil və material üçün parçalar, alınacaq çubuqlar (məsələn "2 × 12000, 1 × 6000"), alınan və istifadə olunan metrlər və tullantı.
- **Çubuqlar və onların kəsikləri:** hər çubuq, onun ehtiyat uzunluğu, kəsikləri hissə markası və uzunluğu ilə, və qalıq — saxlanılan və ya hurda.

{{ui:CSV yüklə}} hər iki cədvəli `<ad> cut list.csv` faylına saxlayır.

DetailCraft lövhələri təbəqələrə yerləşdirmir və profilləri və ya materialları bir çubuqda qarışdırmır.
