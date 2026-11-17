---
title: Nişan qaydaları
summary: Dəqiq hansı iki detal və ya iki yığımın eyni nişanı paylaşdığı, nişanların necə nömrələndiyi və bünövrə və çubuq nişanlarının necə işlədiyi.
keywords: nişanlar, nömrələmə, detal nişanı, yığım nişanı, parça nişanı, prefiks, tolerantlıq, eyni detallar, çubuq nişanları, bünövrə nişanları
from: ce02c98e
---

DetailCraft hər dəyişiklikdən sonra hər nişanı yenidən hesablayır. Heç nə saxlanmır, buna görə nişanlar həmişə modelin indiki halını təsvir edir. Nişanlardan necə istifadə ediləcəyi üçün bax: [Nişanları və materialların siyahısını yoxlayın](topic:marks-and-bom).

## Detal nişanları

İki detal bütün bunlar üst-üstə düşdükdə eyni detal nişanını paylaşır:

1. Detal növü (tir, sütun, diaqonal və ya lövhə).
2. Profil adı (böyük-kiçik hərf fərq etmir).
3. Material (böyük-kiçik hərf fərq etmir).
4. Kəsmə uzunluğu, 1 mm daxilində.
5. Hər deşik: üz, boyuna və eninə mövqe, 1 mm daxilində, və diametr 0,1 mm daxilində.
6. Hər kəsik: uc, tərəf, uzunluq və dərinlik, 1 mm daxilində.

Elementin {{ui:Ad}} sahəsi sayılmır. Modeldəki mövqeyi, fırlanması və necə çəkildiyi də sayılmır, miqdar detalın özü eyni olduğu müddətdə.

### Çevrilmiş detallar

Detal, kəsiyini özünə uyğunlaşdıran hər çevrilmədə müqayisə olunur. Bunlardan hər hansı biri detalı başqa detalla uyğunlaşdırırsa, onlar eyni nişanı paylaşır.

| Forma | Sayılan çevirmələr |
|---|---|
| I-formalar, düzbucaqlı HSS, lövhələr | Uc-uca (şaquli ox ətrafında), uc-uca (üfüqi ox ətrafında) və öz uzunluğu ətrafında alt-üst |
| Kanallar | Yalnız üfüqi ox ətrafında uc-uca, belə ki, gövdə eyni tərəfdə qalır |
| Bucaqlar, dairəvi HSS | Heç biri: yerləşdirildiyi kimi müqayisə olunur |

Belə ki, sol ucunda deşiyi olan tir, sağ ucunda eyni deşiyi olan tirlə uyğun gəlir, və bir flansında deşiklər olan sütun, digər flansında eyni deşiklər olan sütunla uyğun gəlir.

### Nömrələmə

| Növ | Detal prefiksi | Yığım prefiksi |
|---|---|---|
| Sütun | c | C |
| Tir | b | B |
| Diaqonal | br | BR |
| Lövhə (yerləşdirilmiş, uc lövhəsi və ya baza lövhəsi) | p | P |

Nişanlar hər prefiksdə 1-dən nömrələnir. Sıra belədir: sütunlar, sonra tirlər, diaqonallar və lövhələr; növ daxilində profil adına görə təbii sıra ilə (W8x10, W12x26-dan əvvəl); sonra daha uzun detallar əvvəl.

Nömrələmə həmin sıraya əsasən getdiyi üçün bir detalı əlavə etmək və ya dəyişdirmək digərlərinin nömrələrini dəyişə bilər.

## Yığım nişanları

- Başqa detala qaynaqlanmayan hər detal öz yığımının əsas detalıdır.
- Uc lövhələri öz tirinə, baza lövhələri öz sütununa qaynaqlanır, buna görə həmin elementin yığımına aiddirlər.
- İki yığım, əsas detalları eyni detal nişanını paylaşdıqda və bağlı detalları eyni yerlərdə (1 mm daxilində) eyni nişanlara malik olduqda, əsas detal üçün icazə verilən eyni çevirmələrə imkan verərək, eyni nişanı paylaşır.
- Yığım prefiksi əsas detalı izləyir: iki uc lövhəsi olan tir B yığımıdır.

{{ui:Lövhə}} aləti ilə yerləşdirdiyiniz lövhələr heç nəyə qaynaqlanmır, buna görə hər biri öz P yığımıdır.

## Bünövrə nişanları

Eyni uzunluq, en, dərinlik, beton mətni, aşağı şəbəkə və başlanğıc çubuqlarına malik bünövrələr bir nişanı paylaşır: F1, F2 … yerləşdirildikləri sıra ilə. Mövqe və fırlanma sayılmır.

## Çubuq nişanları

Eyni ölçüdə, formada və A, B, C ölçülərində (millimetrə yuvarlaqlaşdırılmış) çubuqlar bütün bünövrələr üzrə bir nişanı paylaşır. Nişan çubuq nömrəsi, F və hər çubuq ölçüsü üçün sayğacdan ibarətdir: 5F1, 5F2, 6F1. Kvadrat bünövrənin uzun istiqamətli və qısa istiqamətli çubuqları eyni çubuqdur və nişanı paylaşır; cədvəlin {{ui:İstifadə yeri}} sütunu hər iki istifadəni göstərir.
