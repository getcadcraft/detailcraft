---
title: Nişanları və materialların siyahısını yoxlayın
summary: DetailCraft-ın hər detala verdiyi detal və yığım nişanlarını oxuyun, materialların siyahısını yoxlayın və onu CSV kimi yükləyin.
keywords: nişanlar, nömrələmə, detal nişanı, yığım nişanı, detal nişanı, bom, materialların siyahısı, material siyahısı, çəkilər, boltların siyahısı, csv, nömrələmə
from: caa2ee80
---

DetailCraft modeli özü nişanlayır. Nömrələmə əmri yoxdur və işə salmaq lazım deyil: hər dəyişiklikdən sonra hansı detalların eyni polad parça olduğunu müəyyən edir və onlara bir nişan verir.

## Nişanlar harada görünür

- **Model** panelində {{ui:Hissə markaları}} siyahısı: hər nişan profili, uzunluğu və sayı ilə. Birinə klikləsəniz, həmin nişanlı ilk detal seçilir.
- Seçilmiş elementin {{ui:Xüsusiyyətlər}} paneli (və sol paneldə **Hissə markaları** siyahısı): {{ui:Detal nişanı}} və {{ui:Yığım}}. Panelin başlığında da nişan göstərilir, məsələn "Tir b1".
- {{ui:Materialların siyahısı}} sekmesi, CSV, NC fayl adları, sex çertyojları və IFC ixracı (hər elementin etiketi kimi).

## Detal nişanları necə verilir

- **Detal nişanları:** sütunlar üçün c, tirlər üçün b, diaqonallar üçün br, pilləkən tirləri üçün st, lövhələr üçün p (son lövhələr və baza lövhələri daxil). Sonra nömrə gəlir: c1, c2, b1, p1 … Detallar birdən çox fazada olanda faza nömrəsi əvvəl gəlir, məsələn 2-b1.
- **Yığım nişanları:** C, B, BR və ya P. Yığım əsas elementdir və ona qaynaqlanmış lövhələr, məsələn iki son lövhəsi olan tir və ya baza lövhəsi olan sütun.
- İki detal eyni profil, material və kəsim uzunluğuna, eləcə də eyni deşik və kəsiklərə malik olduqda, hamısı 1 mm daxilində, biri digərinə nisbətən ucu ucuna və ya tərsinə çevrilsə belə, eyni nişanı paylaşır.
- Nömrələmə əvvəl sütunlar, sonra tirlər, diaqonallar və lövhələr gedir; hər birində profil adına görə, sonra ən uzundan başlayaraq.

Tam qaydalar, o cümlədən kanallar və bucaqlar üçün hansı dönmələrin sayıldığı: [Nişan qaydaları](topic:mark-rules).

:::warning
Nişanlar hər dəyişiklikdən sonra yenidən hesablanır, ona görə yenidən nömrələnə bilər. Detal əlavə etmək, profili dəyişmək və ya deşik əlavə etmək b3-ü b4 edə bilər. Nişanları yalnız model bitəndə son hesab edin və materiallar siyahısını, NC fayllarını və sex çertyojlarını eyni saxlanmış modeldən hazırlayın.
:::

## Materialların siyahısını oxuyun

Aşağıdakı {{ui:Materialların siyahısı}} sekmesini açın. Onun üç cədvəli var.

**Detallar**, başlıqda ümumi polad çəkisi ilə:

| Sütun | Mənası |
|---|---|
| Detal nişanı | Klik edin: bu nişanlı ilk detal seçilir |
| Növ | tir, sütun, diaqonal, pilləkən tiri və ya lövhə |
| Profil | Məsələn, W16x26 və ya PL20x180 |
| Material | Sizin təyin etdiyiniz sinif |
| Uzunluq (mm) | Birləşmələrdən sonra kəsim uzunluğu |
| Say | Neçə ədəd |
| Vahid çəki (kg) | Metrə profil kütləsi × uzunluq |
| Ümumi çəki (kg) | Vahid çəki × say |

Son sətirdə ümumi say və çəki göstərilir.

**Yığımlar:** hər yığım nişanı, onun əsas detalı, bütün detalları (məsələn "b1 + p1 + p1"), say, vahid çəki və ümumi çəki.

**Boltlar və anker çubuqları:** növə, diametrə, uzunluğa və sinfə görə qruplaşdırılmış, say ilə.

:::note
Çəkilər ümumidir (brutto): deşiklər və kəsiklər çıxılmır. Boltlar, qaykalar, şayballar və qaynaqlar polad çəkisinə daxil deyil.
:::

## Yükləyin

Sekmədə {{ui:CSV yüklə}} seçin və ya {{ui:Çıxış}} qrupunda {{ui:BOM}} seçin. `<name> BOM.csv` faylı üç cədvəli başlıqları ilə bir-birinin ardınca, aralarında boş sətirlə saxlayır. İstənilən cədvəl proqramında açılır.

## Göndərməzdən əvvəl yoxlayın

1. {{ui:Problemlər}} sekmesini açın və hər sətri təmizləyin. Qurula bilməyən birləşmə heç bir lövhə, deşik və ya bolt əlavə etmir, ona görə materiallar siyahısı natamam olar.
2. Gözləmədiyiniz nişanlara baxın. Eyni olduğunu düşündüyünüz, lakin fərqli nişanlı iki tir adətən bir deşiyə, kəsiyə və ya kəsim uzunluğuna görə fərqlənir; hər birini seçin və müqayisə edin.
3. Modeli saxlayın, sonra bütün ixracları bu saxlanmış vəziyyətdən edin.
