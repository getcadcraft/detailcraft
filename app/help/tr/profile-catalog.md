---
title: Profil kataloğu
summary: Her yerleşik çelik boyutu, profil adlarının nasıl yazıldığı, boyutların nereden geldiği ve levha ile özel kesitlerin nasıl adlandırıldığı.
keywords: profiller, kesitler, katalog, boyutlar, w kesitler, geniş flanşlı, s kesitler, kanal, köşebent, hss, boru, pipe, ipe, hea, heb, upn, uk, ingiliz, ub, uc, pfc, ea, uea, eşitsiz köşebent, shs, rhs, chs, soğuk şekillendirilmiş, sıcak bitirilmiş, mavi kitap, levha, aisc, en 10365, adlandırma
from: cd9b2bc3
---

DetailCraft'ta 2,311 yerleşik boyut vardır; her biri yayımlanmış bir tablodan kopyalanmıştır ve uygulamanın testleriyle denetlenmiştir: boyutlardan hesaplanan alan yayımlanmış alanla eşleşmeli ve yayımlanmış ağırlık, o alan ile çeliğin yoğunluğunun çarpımına eşit olmalıdır. Levhalar ve özel profiller kendi boyutlarından oluşturulur.

## Adlandırma

- **US kesitleri** AISC Manual'ın yazdığı gibi, küçük harfli x ile yazılır: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Yazarken büyük/küçük harf duyarlı değildir.
- **Boru**, AISC veritabanında olduğu gibi yazılır: Pipe4STD, Pipe4XS, Pipe4XXS (standart, ekstra kalın, çift ekstra kalın).
- **Avrupa kesitleri** EN 10365'te olduğu gibi yazılır: IPE200, HEA240, HEB300, UPN200 (boşluksuz).
- **İngiliz kesitleri** önce aile, sonra Blue Book'taki boyutla yazılır: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Soğuk şekillendirilmiş içi boş kesitler CF ile başlar: CFSHS100x100x5.0. Çizimlerin sık yazdığı biçimde yazmak da çalışır: 305x165x40 UB, L100x100x10, SHS100x5.
- **Levhalar** milimetre cinsinden `PL<kalınlık>x<genişlik>` biçimindedir: PL20x200, 20 mm kalın ve 200 mm geniştir. {{ui:Levha}} aracından her boyut çalışır.
- **Özel profiller**, verdiğiniz her adı taşıyabilir; yeter ki bir katalog adı olmasın ve bir levha adına benzemesin.

{{ui:Profil}} listelerinde her grubun başlığı kaynağını adlandırır, örneğin "W kesitler — AISC Shapes Database v16.0".

## Kaynaklar

| Grup | Kaynak | Notlar |
|---|---|---|
| W kesitler, S kesitler, Kanallar (C), Köşebentler (L), HSS, Boru | AISC Shapes Database v16.0 | Boyutlar inçten milimetreye tam olarak çevrildi; metre başına kütle yayımlanmış lb/ft değerinden |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Yayımlandığı gibi milimetre ve kg/m |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Yayımlandığı gibi milimetre ve kg/m |
| Levhalar | Parametrik | Kütle alan × 7850 kg/m³ |
| Özel | Sizin boyutlarınız | Kütle alan × 7850 kg/m³ |

Kesitler şöyle çizilir:

- **W kesitler:** AISC veritabanı köşe yuvarlatma yarıçapı vermez; bu yüzden DetailCraft köşe yuvarlatmayı r = kdes − tf olarak çizer.
- **S kesitler ve kanallar (C, UPN):** yayımlanmış ortalama kalınlıkta paralel flanşlar, keskin köşeler (gerçek flanş eğimlidir).
- **Köşebentler:** keskin köşeler.
- **Dikdörtgen HSS:** tasarım et kalınlığı (nominalin 0.93 katı, AISC 360-22 B4.2'nin izin verdiği gibi) ve bunun iki katı dış köşe yarıçapı.
- **Yuvarlak HSS ve Boru:** tasarım et kalınlığı (nominalin 0.93 katı).
- **IPE, HEA, HEB, UB, UC:** yayımlanmış kök yarıçapı.
- **PFC, EA, UEA:** keskin köşeler (yayımlanmış kütle ve alan yine de yarıçapları içerir).
- **SHS, RHS, CHS:** nominal et. Sıcak bitirilmiş köşeler: dış 1.5 t, iç t. Soğuk şekillendirilmiş: dış 2 t, iç t (6 mm'ye kadar); 2.5 t ve 1.5 t (10 mm'ye kadar); 3 t ve 2 t (üstünde).

## Boyutlar

Bu gruplarda tabloların listelediği her boyut, en küçükten başlayarak:

| Grup | Boyutlar |
|---|---|
| W kesitler (289) | W4x13 ila W44x408 |
| S kesitler (28) | S3x5.7 ila S24x121 |
| Kanallar (32) | C3x3.5 ila C15x50 |
| Köşebentler, eşit kollu (61) | L2x2x1/8 ila L12x12x1-3/8 |
| HSS, dikdörtgen ve kare (525) | HSS1-1/2x1-1/2x1/8 ila HSS34x10x1 |
| HSS, yuvarlak (189) | HSS1.660x0.140 ila HSS28.000x1.000 |
| Boru (51) | Pipe1/2STD ila Pipe26XS |
| IPE (18) | IPE80 ila IPE600 |
| HEA (24) | HEA100 ila HEA1000 |
| HEB (24) | HEB100 ila HEB1000 |
| UPN (18) | UPN50 ila UPN400 |
| Köşebentler, eşitsiz kollu (76) | L2-1/2x1-1/2x3/16 ila L8x6x1 |
| UB (107) | UB127x76x13 ila UB1016x305x584 |
| UC (46) | UC152x152x23 ila UC356x406x1299 |
| PFC (16) | PFC100x50x10 ila PFC430x100x64 |
| EA (42) | EA20x20x3.0 ila EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 ila UEA200x150x18.0 |
| SHS, sıcak bitirilmiş (123) | SHS40x40x3.2 ila SHS400x400x17.5 |
| RHS, sıcak bitirilmiş (161) | RHS50x30x3.2 ila RHS500x300x17.5 |
| CHS, sıcak bitirilmiş (103) | CHS42.4x3.2 ila CHS508.0x17.5 |
| CFSHS, soğuk şekillendirilmiş (96) | CFSHS25x25x2.0 ila CFSHS400x400x12.5 |
| CFRHS, soğuk şekillendirilmiş (137) | CFRHS50x25x2.0 ila CFRHS500x300x12.5 |
| CFCHS, soğuk şekillendirilmiş (106) | CFCHS33.7x3.0 ila CFCHS508.0x16.0 |

Aynalanmış eşitsiz bir köşebent, bir atölyenin karşıt eli yaptığı gibi, uçtan uca çevrilmiş aynı parçadır: delikleri, kesimleri ve köşe levhası onunla birlikte gider.

Bir yerleştirme aracı seçin ve bir boyut seçin; {{ui:Özellikler}} panelinin {{ui:Profil}} kutusunda derinliği, flanş genişliğini, gövde ve flanş kalınlığını, köşe yarıçapını, alanı (cm²), kütleyi (kg/m) ve kaynağı görün.

## Her kesitin yapabildikleri

| Şekil | Delikler | Kesimler | Uç levhaları ve taban levhaları | NC dosyası | İmalat çizimi |
|---|---|---|---|---|---|
| I profiller (W, S, IPE, HEA, HEB, UB, UC, özel I) | Gövde, üst flanş, alt flanş | Evet | Uç levhaları: kiriş ve kolon. Taban levhaları: evet | Evet | Evet |
| Kanallar (C, UPN, PFC) | Gövde, üst flanş, alt flanş | Hayır | Yalnızca taban levhaları | Evet | Evet |
| Dikdörtgen HSS, SHS, RHS | Yan cidar (gövde), üst, alt | Hayır | Yalnızca taban levhaları | Evet | Evet |
| Yuvarlak HSS, Boru, CHS | Henüz değil | Hayır | Yalnızca taban levhaları | Evet | Evet |
| Köşebentler (L, EA, UEA) | Henüz değil | Hayır | Yalnızca taban levhaları | Evet | Evet |
| Levhalar ve özel düz çubuklar | Levha yüzü | Hayır | Hayır | Evet | Evet |

Dikdörtgen bir boruda, "gövde" yüzündeki bir delik iki yan cidardan da geçer. Her NC dosyasının neler içerdiği [NC dosyası alanları](topic:nc1-fields) bölümündedir.

## Başka bir boyuta mı ihtiyacınız var?

[Özel bir profil](topic:plates-and-profiles#add-a-custom-profile) olarak ekleyin. Yerleşik liste uygulamadan henüz düzenlenemez.
