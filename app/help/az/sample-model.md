---
title: Nümunə çərçivəni araşdırın
summary: Daxili iki açılışlı çərçivəni açın və DetailCraft-ın nə qurduğunu öyrənmək üçün istifadə edin, nişanlardan NC fayllarına qədər.
keywords: nümunə, misal, demo, çərçivə, öyrən, tur, sına
from: 5c5944dd
---

Nümunə çərçivə kiçik, tam modeldir: DetailCraft-ın qurduğu hər növ şey ən azı bir dəfə görünür. Tətbiqi öyrənmək və ixracın üzərinə güvənməzdən əvvəl onu sınamaq üçün ən sürətli yoldur.

## Açın

1. {{ui:Fayl}} qrupunda {{ui:Nümunə}} seçin.
2. Cari modelinizdə saxlanılmamış dəyişikliklər varsa, {{ui:Əvvəlcə saxla}} və ya {{ui:Dəyişiklikləri sil}} seçin.
3. Status sətri deyir: "Nümunə çərçivə: baza lövhəli 6 sütun, son lövhəli 4 tir, bir diaqonal, armaturlu 7 bünövrə."

Nümunə "Nümunə çərçivə" adlı yeni model kimi açılır. Başqa heç nəyi dəyişmir və geri qaytarılacaq heç nə yoxdur.

## Daxilində nələr var

- **Şəbəkələr** 6000 mm-də 1, 2, 3 və 7000 mm-də A, B. **Səviyyələr** 0-da Səviyyə 1 və 4000-də Səviyyə 2.
- **Altı sütun**, W12x50, hər kəsişmədə Səviyyə 1-dən Səviyyə 2-yə qədər, hər biri dörd ankerli 25 mm baza lövhəsi üzərində.
- **Dörd tir**, W16x26, Səviyyə 2-də A və B şəbəkə xətləri boyunca, polad yuxarısı səviyyədə, hər iki ucunda düz bolt-lu son lövhə ilə (cəmi səkkiz).
- **Bir diaqonal**, HSS4x4x1/4, Səviyyə 1-də A/1-dən Səviyyə 2-də A/2-yə qədər.
- **Altı təkli bünövrə**, 2000 x 2000 x 600, hər sütunun altında bir, hər iki istiqamətdə qarmaqlı aşağı şəbəkə ilə.
- **Bir bünövrə daha** çərçivənin yanında, 2400 x 1800 x 600, beton dayaq üçün yuxarı qalxan altı qarmaqlı başlanğıc armaturu ilə.

## Sınamaq üçün işlər

1. Tirə klik edin. Onun {{ui:Detal nişanı}}, {{ui:Yığım}}, {{ui:Kəsim uzunluğu}} və {{ui:Geri kəsim}} oxuyun: kəsim uzunluğu 6000 mm şəbəkə addımından qısadır, çünki hər son lövhə tiri sütun dərinliyinin yarısı və lövhə qalınlığı qədər geri kəsir.
2. Sütuna klik edin. {{ui:Deşiklər}} altında son lövhələrin flanşında açdığı deşikləri sadalayır ("birləşmələrdən 8 deşik"; orta sütunlarda 16 var, hər flanşda bir dəst).
3. Soldakı {{ui:Hissə markaları}} siyahısında bütün dörd tirin bir nişanı paylaşdığını görün: onlar eyni polad parçasıdır. Künc sütunları da nişanı paylaşır, deşikləri əks istiqamətdə olsa da, çünki ucu-uca çevrilmiş sütun eyni parçadır. Hər iki flanşında deşiyi olan orta sütunlar başqa nişan alır.
4. Son lövhəyə (və ya onun boltlarından birinə) klik edin. {{ui:Xüsusiyyətlər}} paneli lövhə, bolt və qaynaq parametrlərini, yaratdığı boltları (tutuşdan hesablanmış uzunluqları ilə) və kənar məsafə xəbərdarlıqlarını göstərir.
5. {{ui:Materialların siyahısı}} vərəqini açın. Hissələr, yığımlar (iki son lövhəsi olan tir bir yığımdır) və boltlar və ankerli çubuqlar çəkiləri ilə sadalanır. Altı detal nişanı görməlisiniz: c1 (iki orta sütun) və c2 (dörd künc sütunu), hər ikisi 3975 mm-də W12x50; b1, 5650 mm-də dörd W16x26 tir; br1, diaqonal; p1, səkkiz PL20x180 son lövhəsi; və p2, altı PL25x400 baza lövhəsi. Bərkidicilər 64 bolt 20 x 70 A325 və 24 ankerli çubuq 20 x 575-dir.
6. {{ui:Əyilmə cədvəli}} vərəqini açın. Altı eyni bünövrə armatur nişanlarını paylaşır; dayaq bünövrəsi öz nişanını əlavə edir.
7. Diaqonala klik edin və {{ui:Çıxış}} qrupuna baxın: {{ui:Sex çertyoju}} boz rəngdədir, çünki sex çertyojları hələlik yalnız I-profillər və lövhələri əhatə edir.
8. {{ui:NC fayllar}} seçin. Zip arxivi hər I-profil və lövhə nişanı üçün fayl saxlayır; status sətri diaqonal nişanını yazılmamış kimi sadalayır.
9. {{ui:IFC}} seçin və faylı istənilən IFC görüntüləyicisində açın ki, digər proqramlarınız onu necə oxuduğunu yoxlayasınız.

## Başlanğıc nöqtə kimi istifadə edin

Nümunə adi modeldir. Onu dəyişin, sonra {{ui:Ad}} sahəsində adını dəyişin və {{key:Mod+S}} ilə yeni adla saxlayın.
