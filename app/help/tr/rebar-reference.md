---
title: Donatı başvurusu
summary: DetailCraft'ın kullandığı donatı çapları, kanca ölçüleri, şekil kodları, kesim boyları ve büküm listesi sütunları.
keywords: donatı, donatı çapları, kancalar, büküm çapı, şekil kodları, kesim boyu, büküm listesi, donatı listesi, astm a615, aci 318
from: 1583535e
---

## Donatı çapları

ASTM A615/A615M Tablo 1'den (inç-pound gösterimleri). Milimetre ve kg/m değerleri, yayımlanmış inç ve lb/ft değerlerinin tam dönüşümleridir. Listeler her çapı, örneğin "#5 (15.9 mm)" biçiminde gösterir.

| Donatı | Çap (mm) | Kütle (kg/m) | Alan (mm²) | İç büküm çapı | 90° kanca kolu, dıştan dışa (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

[DetailCraft ayarları](topic:settings) ({{ui:Rebar}}) içinde **ASTM donatı adları**, bu donatıları bunun yerine yumuşak metrik A615M adlarıyla gösterebilir: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (aynı donatılar; ACI 315-99 Tablo 1 ikisini de listeler).

### Metrik donatılar (BS 4449)

| Donatı | Çap (mm) | kg/m | En küçük büküm yarıçapı r (mm) | Kanca kolu = uç çıkıntısı P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Kütle, nominal kesitin 7850 kg/m³ ile çarpımıdır. Yarıçap ve uç çıkıntısı, BS 8666:2020'nin en küçük değerleridir (en küçük boyutlar tablosu; eski çap 2r'dir). BS donatılı temeller, P kanca kolları ve aşağıdaki BS 8666 formülleriyle kesim boyları alır. Ayarlarda Avrupa çeliğini seçmek, yeni temelleri C30/37 betonda H16 donatı ağları ve H20 bekleme donatılarıyla başlatır.

## Kancalar

ASTM donatıları için standart 90° kancalar ACI 318-19 Tablo 25.3.1'e göredir: #3 ile #8 için iç büküm çapı 6 db, #9 ile #11 için 8 db ve büküm ötesinde 12 db düz uzantı. Dıştan dışa ölçülen kanca kolu, büküm çapının yarısı + db + 12 db'dir.

Bir donatı ağı donatısının kancası pas payı içindeki temel derinliğine sığmazsa, DetailCraft kolu sığacak şekilde kısaltır ve bir uyarı listeler.

## Şekiller

DetailCraft üç şekil saklar. Büküm listesi bunları DetailCraft kodları, ACI 315 tipleri veya BS 8666 şekil kodları olarak yazar: [DetailCraft ayarları](topic:settings) ({{ui:Rebar}}) içinde **Büküm listesi şekil kodları**'nı seçin.

| Kod | Şekil | Ölçüler |
|---|---|---|
| S | Düz | A = uzunluk |
| L | Tek 90° büküm | A = ana kol, B = kanca kolu, ikisi de dıştan dışa |
| U | Aynı tarafta iki 90° büküm | A = orta, B ve C = iki kol, dıştan dışa |

{{ui:End hooks}} açıkken donatı ağı donatıları U, kapalıyken S olur. {{ui:Hook at the bottom}} açık olan bekleme donatıları L, kapalı olanlar S olur.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Şekil 10) |
|---|---|---|
| S | 00, L = A | tip numarası yok |
| L | 11, L = A + B − 0.5r − d | tip numarası yok: şekilde tek kancalı donatı yoktur |
| U | 21, A ve C kollar, B orta, L = A + B + C − r − 2d | Tip 2, kancalar A ve G, düz B |

BS 8666 veya ACI 315 kodlarıyla, listenin A, B ve C sütunları o standardın harf düzenini izler (U'nun ortası B'dir).

## Kesim boyu

BS 4449 donatılarında kesim boyu, donatının şekil kodunun BS 8666 formülüdür (yukarıya bakın). ASTM donatılarında ise donatının eksen çizgisinin tam uzunluğudur: düz kısımlar ile büküm çapının yarısı artı donatı çapının yarısı yarıçaplı yaylar olarak bükümler. Büküm düzeltmeleri bir tablodan hesaplanmaz; bu nedenle tek bir tablo kullanan bir listeden birkaç milimetre farklı olabilir.

## Yerleşim

- Alt donatı ağı: L boyunca donatılar alt katmanı oluşturur, B boyunca donatılar bunların üzerine oturur. Her grup, pas payı içinde temel boyunca eşit yayılır; verdiğiniz aralıkta veya daha sık, en az iki donatıyla.
- Bekleme donatıları: verdiğiniz aralıklarla L ve B boyunca bir donatı ızgarası, temelin ortasında, donatı ağının üzerinde durur ve üstten verdiğiniz çıkıntı kadar yukarı uzanır. Her kanca dışa bakar.

## Denetimler

| Denetim | Kural | Sonuç |
|---|---|---|
| Donatı için yer | Her iki yandaki pas payı donatılar için yer bırakır | Yer yoksa reddedilir |
| İki katman için derinlik | Derinlik eksi iki pas payı, iki donatı ağı katmanını alır | Yetmezse reddedilir |
| Bekleme donatıları sığar | Bekleme donatısı ızgarası pas payı içine sığar | Sığmazsa reddedilir |
| Net aralık | En az 25.4 mm ile db'nin büyüğü (ACI 318-19 25.2.1; agrega boyutu denetlenmez) | Uyarı |
| Kanca derinliği | Kanca kolu, pas payı içindeki derinliğe sığar | Uyarı, kol kısaltılır |
| Bekleme kancaları | Kancalar pas payının dışında kalır | Uyarı |

## Büküm listesi sütunları

{{ui:Bending schedule}} sekmesi ve CSV'si şu sütunlara sahiptir: Donatı işareti, Boyut, Şekil, A (mm), B (mm), C (mm), Adet, Kesim boyu (mm), Toplam uzunluk (m), kg/m, Birim ağırlık (kg), Toplam ağırlık (kg), Kullanım yeri. Son satır adet, uzunluk ve ağırlığın toplamını verir.
