---
title: Donatılı temel yerleştirme
summary: Dikdörtgen tekil temelleri alt donatı ağı ve bekleme donatılarıyla yerleştirin, kontrol edin ve donatı büküm listesini indirin.
keywords: temel, tekil temel, donatı, radye, bekleme donatıları, dübel, donatı büküm listesi, donatı listesi, beton, kanca, pas payı
from: 41a048be
---

Bu konu dikdörtgen tekil temellerle ilgilidir. Kirişler, kolonlar, döşemeler ve duvarlar için [Betonarme elemanları ayrıntılandırma](topic:reinforced-concrete) konusuna bakın. Her temele iki yönde de bir alt donatı ağı ve isterseniz yukarı doğru çıkan bekleme donatıları eklenir. Çubuklar ABD ölçülerinde #3 ile #11 arasında olabilir.

## Temel yerleştirme

1. {{ui:Plan}} seçin ve temel üst yüzünün seviyesini seçin.
2. {{ui:Place}} grubunda {{ui:Footing}} seçin veya {{key:F}} tuşuna basın.
3. Temeli {{ui:Properties}} panelinde ayarlayın (aşağıya bakın) veya varsayılanları koruyun.
4. Bir aks kesişimine tıklayın. Temel bu kesişimin ortasına, üst yüzü seviyede olacak şekilde yerleşir. Durum çubuğu, örneğin, "A/1 altında temel 2000 x 2000 x 600." yazar.

Panelin altındaki {{ui:Add by grid}} bölümünü de kullanabilirsiniz.

Temel, donatılarını görebilmeniz için geçirgen çizilir; donatılar dolu tüp olarak çizilir.

## Temel ayarları

| Alan | Varsayılan | Notlar |
|---|---|---|
| Uzunluk L (mm) | 2000 | x boyunca; 300 ile 50000 |
| Genişlik B (mm) | 2000 | y boyunca; 300 ile 50000 |
| Derinlik H (mm) | 600 | 150 ile 10000 |
| Beton | 4000 psi | Metin, IFC dışa aktarımında yazdırılır |

**Alt donatı ağı**

| Alan | Varsayılan | Notlar |
|---|---|---|
| Uzun donatılar | #5 | L boyunca uzanan, alt katmandaki donatılar |
| Aralık (mm) | 250 | İzin verilen en büyük aralık; donatılar bu aralıkta veya daha sık olacak şekilde eşit dağıtılır |
| Kısa donatılar | #5 | B boyunca uzanan, uzun donatıların üzerine serilen donatılar |
| Aralık (mm) | 250 | Yukarıdaki gibi |
| Pas payı (mm) | 75 | Her yüzde net pas payı |
| Uç kancaları | Açık | Ağ donatılarının iki ucunu standart 90° kancayla yukarı kıvırır (şekil U); kapalıysa düz donatı olur (şekil S) |

**Bekleme donatıları**

| Alan | Varsayılan | Notlar |
|---|---|---|
| Bekleme donatıları | Açık | Bekleme donatısı olmayan bir temel için kapatın |
| Donatı | #6 | |
| L boyunca donatılar / B boyunca donatılar | 2 / 2 | Temelin ortasında hizalanmış bir donatı ağı |
| L boyunca aralık / B boyunca aralık | 250 / 250 | Donatı merkezleri arası |
| Üstten çıkıntı | 600 | Donatıların temel üst yüzünün üstünde ne kadar uzandığı |
| Alttaki kanca | Açık | Ağın üstüne oturan, dışa dönük 90° kanca (şekil L) |

Alanların altında DetailCraft, uzun donatılar için kanca kolunu gösterir; örneğin "#5 için kanca kolu: 254 mm dıştan dışa."

## Yerleştirilmiş temeli değiştirme

Temeli seçin (kolonlardan uzakta betonuna veya donatılarından birine tıklayın). Aynı alanlara ek olarak {{ui:Center x}}, {{ui:Center y}}, {{ui:Top z}} ve {{ui:Rotation (°)}} alanları da görünür. Bunların altında, bu temelin donatılarını işaretleri, adetleri ve uzunluklarıyla listeleyen bir tablo ile metreküp cinsinden beton hacmi bulunur.

Her değişiklik saklanmadan önce denetlenir. Oluşturulamayacak bir değişiklik reddedilir ve durum çubuğu nedenini bildirir; örneğin "Pas payı bu temelde donatılar için yer bırakmıyor.", "Temel, pas payının içinde iki donatı katmanı için çok sığ." veya "Bekleme donatıları 75 mm pas payıyla temelin içine sığmıyor."

Oluşturulabilen ancak incelenmesi gereken değişiklikler temelin altında ve {{ui:Problems}} sekmesinde listelenir:

- "59.6 mm aralıklı #11 donatılar, 35.8 mm'den az net boşluk bırakıyor (ACI 318-19 25.2.1)." Donatılar arasındaki net boşluk en az donatı çapı kadar ve en az 25.4 mm olmalıdır.
- "#5 kancaları 254 mm derinlik gerektirir; pas payının içine yalnızca 150 mm sığıyor." Kanca kolları bu nedenle sığacak şekilde kısaltılır ve artık standart kanca değildir.
- "Bekleme kancaları pas payının içine uzanıyor."
- "Bekleme donatıları asgari net aralıktan daha yakın."

## Donatı işaretleri ve büküm listesi

Aynı donatılar (aynı çap, şekil ve milimetreye kadar aynı ölçüler) tüm temeller boyunca aynı donatı işaretini paylaşır. İşaretler `<donatı numarası>F<n>` biçiminde yazılır: #5 donatılar için 5F1, 5F2; ilk #6 donatı için 6F1 ve bu şekilde devam eder. Aynı boyut, beton, ağ ve bekleme donatısına sahip temeller ortak bir temel işaretini paylaşır: F1, F2 …

1. Alttaki {{ui:Bending schedule}} sekmesini açın. Her satır bir donatı işaretidir: çap, şekil, A, B ve C ölçüleri, adet, kesim uzunluğu, toplam uzunluk, metre başına kütle, her birinin ağırlığı, toplam ağırlık ve donatının kullanım yeri.
2. Sekmede {{ui:Download CSV}} seçin veya {{ui:Output}} grubunun {{ui:More}} menüsünde {{ui:Bending}} seçin; `<name> bending schedule.csv` dosyası indirilir.

Şekiller standart değil, DetailCraft'ın kendi kodlarıdır: S düz, L bir büküm, U iki büküm. Ölçüler dıştan dışa alınır; kesim uzunluğu, bükümler boyunca tam eksen çizgisi uzunluğudur. Bkz. [Donatı başvurusu](topic:rebar-reference).

## DetailCraft'ın denetlemediği konular

- Kenetlenme ve bindirme boyları ile bekleme donatılarının üstteki kolon için yeterince uzun olup olmadığı.
- Net aralık kuralının agrega boyutuyla ilgili kısmı (karışımı bilmez).
- Üstteki kolon veya taban levhasıyla ilgili her şey: temeller ve çelik ayrı konulardır.

Ayrıca bkz. [Henüz yapılmadı olanlar](topic:not-built-yet).
