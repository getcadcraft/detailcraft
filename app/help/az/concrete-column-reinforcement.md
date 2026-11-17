---
title: Düzbucaqlı beton sütunu armaturlayın
summary: DetailCraft-da düzbucaqlı beton sütunun detallaşdırılmasına dair işlənmiş nümunə: sütunu yerləşdirin, ona uzununa çubuqlar və bağlayıcılar verin, yoxlamalara, üstündəki ulamaya və armatur markalarına baxın və onun sex vərəqini çəkin.
keywords: beton sütun, düzbucaqlı sütun, sütun armaturu, uzununa çubuqlar, şaquli çubuqlar, bağlayıcılar, xomutlar, çarpaz bağlayıcılar, ulama, bindirmə, başlanğıc çubuqları, sütunun polad nisbəti, 1 faiz, 8 faiz, bağlayıcı addımı, ACI 318-19 25.7.2, EN 1992-1-1 9.5, sex çertyoju, armatur markaları, 8C1, 3C2
from: aee2a3ca
---

Bu mövzu bir kvadrat sütunu heç nədən yoxlanılmış, çəkilmiş və siyahıya alınmış detala qədər aparır. Tirlər, döşəmələr və divarlar üçün ümumi qaydalar [Armaturlu betonun detallaşdırılması](topic:reinforced-concrete) mövzusundadır; bu, sütun tərəfidir, təkrar edə biləcəyiniz rəqəmlərlə.

:::warning
DetailCraft ona verdiyiniz çubukları detallaşdırır. Onları layihələndirmir. Aşağıdakı çubuklar nümunə üçün başlanğıc dəyərləridir, tövsiyə deyil: layihənin mühəndisi ölçünü, sayını və addımını seçir.
:::

## Burada sütun nədir

Düzbucaqlı sütunun eni (öz lokal x oxu boyunca) və kəsiyin dərinliyi (lokal y oxu boyunca) var, bağlayıcılara qədər təmiz örtüyü, hər üzdə uzununa çubuqları və qapalı bağlayıcıları var. Onu fırlatmaq hər şeyi çevirir; üzlər "en üzü" və "dərinlik üzü" olaraq qalır.

- Uzununa çubuqlar en üzündə sayı və dərinlik üzündə sayı kimi verilir. Künc çubukları hər ikisində sayılır, ona görə də 3 və 3 8 çubuq edir; 4 və 4 isə 12.
- Bağlayıcılar iki ucunda, 135° və ya 90° qarmaqlı, bir künc tərəfində qapalı düzbucaqlılardır. İlk bağlayıcı döşəmədən müəyyən məsafədə (və növbətinin altında) durur, ucluq zonalarında daha sıx addım var, ortada isə daha geniş.
- Çubukların yuxarıda nə etməsi: üstündəki çubuqlarla davam edib ulanmaq, döşəməyə 90° qarmaqla dönmək, ya da yuxarının altında dayanmaq.

## İşlənmiş sütun

400 × 400 mm sütun, yuxarı və aşağı döşəmə arasında 3600 mm, #8 uzununa çubuqlar, #3 bağlayıcılar, 40 mm təmiz örtük, f'c 28 MPa, fy 420 MPa, ACI 318-19, daxili.

1. {{ui:Beton}} sekmesini açın və sütunun durduğu şəbəkə xətlərini və səviyyələri qurun (sol paneldə).
2. {{ui:Şəbəkə ilə əlavə et}} bölməsində {{ui:Beton sütun}} seçin, şəbəkə kəsişməsini və iki səviyyəni seçin, {{ui:En (mm)}} və {{ui:Dərinlik eninə (mm)}} 400 olaraq təyin edin və {{ui:Əlavə et}} seçin.
3. {{ui:Xüsusiyyətlər}} panelində təyin edin:
   - {{ui:Təmiz örtük (mm)}} 40;
   - {{ui:Uzununa çubuqlar}} #8, {{ui:En üzündə armatur}} 3, {{ui:Hündürlük üzündə armatur}} 3;
   - {{ui:Bağlayıcılar}} #3, {{ui:Qarmaqlar}} 135°, {{ui:Aralıq addımı (mm)}} 300, {{ui:Uc zonasının uzunluğu (mm)}} 600, {{ui:Uc zonalarında addım (mm)}} 150, {{ui:Üzdən birinci (mm)}} 50;
   - {{ui:Yuxarıdakı armatur}} {{ui:Yuxarıdakı armaturla davam edib ulanır}}.

Hər dəyişiklik bir geri qaytarma addımıdır.

### Nə alırsınız

| Hissə | Nəticə |
|---|---|
| Uzununa çubuqlar | 8 çubuq #8 (3 × 3 halqa), hər biri 4375 mm uzunluqda: 3600 mm sütun üstəgəl üstündə 775 mm ulama |
| Ulama | Sıxılma ulaması üçün 757 mm tələb olunur (ACI 318-19 25.5.5.1, fy 420), 775 mm təmin edilir: tələb olunan növbəti 25 mm-ə yuvarlaqlaşdırılır |
| Bağlayıcılar | 17 ədəd #3 bağlayıcı, hər birinin kəsim uzunluğu təxminən 1359 mm, iki 600 mm uc zonasında 150 mm, aralarında 300 mm addımla |
| Polad nisbəti | Ümumi kəsiyin 2.5 %-i (həddlər 1 % - 8 %, ACI 318-19 10.6.1.1) |
| Çubuqlar arası təmiz məsafə | 112 mm (ən azı 40 mm tələb olunur, ACI 318-19 25.2.3) |
| Bağlayıcı addımı | 300 mm (400 mm icazəlidir: 16 çubuq diametrinin, 48 bağlayıcı diametrinin və kiçik tərəfin ən kiçiyi, ACI 318-19 25.7.2.1) |
| Bağlayıcı ölçüsü | #3 (9.5 mm-ə qədər icazəlidir, ACI 318-19 25.7.2.2) |

Bunların hamısı elementin {{ui:Yoxlamalar}} siyahısındadır; ulama həm də {{ui:Ulamalar və ankerləmə}} bölməsindədir.

## Çarpaz bağlayıcılar

Bir perimetr bağlayıcı ilə yalnız künc çubukları tutulur. ACI 318-19 25.7.2.3 üzdəki orta çubuğu künc çubuğundan 150 mm təmiz məsafədə olduqda dayaqsız buraxmağa icazə verir. Yuxarıdakı kimi üzdə 3 çubuq olduqda bu şərt ödənir. Üzdə 4 və ya daha çox çubuq olduqda şərt ödənmir və DetailCraft bunu xəbərdarlıq kimi bildirir ({{ui:Yoxlamalar}} və Problemlər): "çarpaz bağlayıcılar" lazımdır. **Çarpaz bağlayıcılar hələ çəkilmir**: onları çertyojda əl ilə əlavə edin, ya da üzdə daha az çubuq seçin.

EN 1992-1-1 üçün DetailCraft çubuq ölçüsünü (ən azı 8 mm), çubuqların sayını (ən azı 4), polad sahəsini (kəsiyin 0.2 %-dən 4 %-ə qədər), təmiz məsafəni və bağlayıcı addımını yoxlayır (9.5.2 və 9.5.3).

## Ulama, təməl və aşağıdakı sütun

- **Modelin bir bünövrəsi sütunun altında durduqda**, sütun bünövrənin başlanğıc çubuqları ilə ulanır və onların ulaması da yoxlanılır.
- **Modelin başqa bir sütunu onun altında durduqda**, sütun həmin sütunun çubukları ilə ulanır.
- Öz {{ui:Ulama uzunluğu (mm, 0 = lazım olduqda)}} dəyərini verərək üstələyin; tələb olunandan qısa olan problemdir və cədvəldə * ilə işarələnir.
- Defolt olaraq sıxılma ulamaları istifadə olunur ({{ui:Sıxılma ulaması}} parametrlərdə); sütunun dartılmaya məruz qala biləcəyi halda {{ui:Dartılma ulaması}} seçin.

## Markalar, siyahı və sex vərəqi

Eyni çubuqlar bir marka paylaşır: yuxarıdakı sütunun uzununa çubuqları 8C1, onun bağlayıcıları 17C2-dir (əvvəl say, sonra sütun üçün C hərfi və ardıcıl nömrə). Onlar {{ui:Əyilmə cədvəli}} sekmesində kəsim uzunluğu və çəkisi ilə görünür, həmçinin {{ui:Çıxış}} › {{ui:Daha çox}} › {{ui:Əyilmə}} CSV-sində.

Sütunun yanındakı {{ui:Sex çertyoju}} seçin: sütunun hündürlükdə görünüşü (hər çubuq, onun markası, bağlayıcı zonaları və ulama ölçülənmiş) və ortada kəsik, ardınca çubuq əyilmə vərəqi. {{ui:Bu vərəq PDF kimi}} saxlayın.

## Bunu etməyənlər

- Dəyirmi sütunlar və spirallər, və düzbucaqlı olmayan sütunlar: qurulmayıb.
- Kəsikdəki künc və çarpaz bağlayıcılar, və seysmik detallama (ACI 318-19 fəsil 18): qurulmayıb.
- Seçdiyiniz yerlərdə ulamalar və ya pilləli ulamalar: bütün çubuqlar bir kəsikdə ulanır.
- Çubukların yük üçün kifayət edib-etmədiyi: bu mühəndisin layihəsidir.
