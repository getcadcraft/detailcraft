---
title: Dikdörtgen bir beton kolonu donatın
summary: DetailCraft'ta dikdörtgen bir beton kolonun örnekli detaylandırması: yerleştirin, boyuna donatı ve etriye verin, denetimleri, üstündeki bindirmeyi ve donatı işaretlerini okuyun ve atölye sayfasını çizin.
keywords: beton kolon, dikdörtgen kolon, kolon donatısı, boyuna donatılar, düşey donatılar, etriyeler, bağlar, ara bağlar, bindirme, bindirme eki, ek, bekleme donatıları, kolon çelik oranı, yüzde 1, yüzde 8, etriye aralığı, ACI 318-19 25.7.2, EN 1992-1-1 9.5, atölye çizimi, donatı işaretleri, 8C1, 3C2
from: aee2a3ca
---

Bu konu bir kare kolonu sıfırdan kontrol edilmiş, çizilmiş ve listelenmiş bir detaya kadar götürür. Kirişler, döşemeler ve duvarlar için genel kurallar [Betonarmeyi detaylandırın](topic:reinforced-concrete) içindedir; bu, kolon tarafıdır ve yeniden üretebileceğiniz sayılarla anlatılır.

:::warning
DetailCraft, verdiğiniz donatıyı detaylandırır. Onu tasarlamaz. Aşağıdaki donatılar örnek için başlangıç değerleridir, bir öneri değildir: proje mühendisi boyutu, sayısını ve aralığını seçer.
:::

## Burada kolon nedir

Dikdörtgen bir kolonun genişliği (yerel x boyunca) ve enine derinliği (yerel y boyunca), etriyelere net pas payı, her yüzde boyuna donatılar ve kapalı etriyeleri vardır. Döndürmek her şeyi çevirir; yüzler "genişlik yüzü" ve "derinlik yüzü" olarak kalır.

- Boyuna donatılar, bir genişlik yüzündeki ve bir derinlik yüzündeki sayı olarak verilir. Köşe donatıları ikisinde de sayılır; yani 3 ve 3, 8 donatı eder; 4 ve 4, 12 eder.
- Etriyeler, bir köşede iki kancası olan kapalı dikdörtgenlerdir: 135° veya 90°. İlk etriye zemin üstünde belirli bir mesafededir (ve bir sonrakinin altında); uç bölgelerde aralık daha sıktır, ortada daha geniştir.
- Donatıların üstte ne yaptığı: üstteki donatılarla devam ettirilip bindirme, döşemeye 90° kancayla kıvrılma veya üst kotun altında durma.

## Örnek kolon

400 × 400 mm kolon, üstteki döşeme ile alttaki döşeme arasında 3600 mm, #8 boyuna donatılar, #3 etriyeler, 40 mm net pas payı, f'c 28 MPa, fy 420 MPa, ACI 318-19, iç kolon.

1. {{ui:Beton}} sekmesini açın ve kolonun oturduğu ızgara çizgilerini ve seviyeleri kurun (sol panel).
2. {{ui:Izgaraya göre ekle}} içinde {{ui:Beton kolon}} seçin, ızgara kesişimini ve iki seviyeyi seçin, {{ui:Genişlik (mm)}} ve {{ui:Enine derinlik (mm)}} alanlarını 400 yapın ve {{ui:Ekle}} seçeneğini seçin.
3. {{ui:Özellikler}} panelinde şunları ayarlayın:
   - {{ui:Net pas payı (mm)}} 40;
   - {{ui:Boyuna donatılar}} #8, {{ui:Genişlik yüzündeki donatılar}} 3, {{ui:Derinlik yüzündeki donatılar}} 3;
   - {{ui:Bağlar}} #3, {{ui:Kancalar}} 135°, {{ui:Aralık (mm)}} 300, {{ui:Uç bölge uzunluğu (mm)}} 600, {{ui:Uç bölgelerdeki aralık (mm)}} 150, {{ui:Yüzden ilk olan (mm)}} 50;
   - {{ui:Üstteki donatılar}} {{ui:Üstteki donatılarla devam ettirilip bindirilir}}.

Her değişiklik bir geri alma adımıdır.

### Ne elde edersiniz

| Parça | Sonuç |
|---|---|
| Boyuna donatılar | 8 adet #8 donatı (3 × 3 halka), her biri 4375 mm uzunlukta: 3600 mm kolon artı üstündeki 775 mm bindirme |
| Bindirme | Basınç bindirmesi için 757 mm gerekli (ACI 318-19 25.5.5.1, fy 420), 775 mm sağlanan: ihtiyaç bir sonraki 25 mm'ye yuvarlandı |
| Etriyeler | 17 adet #3 etriye, her birinin kesim boyu yaklaşık 1359 mm; iki 600 mm uç bölgede 150 mm, aralarında 300 mm aralıklı |
| Çelik oranı | Brüt kesitin 2.5 %'i (sınırlar 1 % ila 8 %, ACI 318-19 10.6.1.1) |
| Donatıların net aralığı | 112 mm (en az 40 mm gerekir, ACI 318-19 25.2.3) |
| Etriye aralığı | 300 mm (izin verilen 400 mm: 16 donatı çapı, 48 etriye çapı ve daha küçük kenarın en küçüğü, ACI 318-19 25.7.2.1) |
| Etriye boyutu | #3 (9.5 mm'ye kadar izin verilir, ACI 318-19 25.7.2.2) |

Bunların hepsi elemanın {{ui:Denetimler}} listesindedir; bindirme ayrıca {{ui:Bindirmeler ve angkraj}} içinde de yer alır.

## Ara bağlar

Tek bir çevresel etriyeyle yalnızca köşe donatıları tutulur. ACI 318-19 25.7.2.3, bir yüzdeki orta bir donatının, bir köşe donatısından 150 mm net içindeyse desteksiz kalmasına izin verir. Yukarıdaki gibi bir yüzde 3 donatıyla bu sağlanır. Bir yüzde 4 veya daha fazla donatıyla sağlanmaz ve DetailCraft bunu uyarı olarak belirtir ({{ui:Denetimler}} ve {{ui:Sorunlar}}): "ara bağlar" gereklidir. **Ara bağlar henüz çizilmez**: bunları çizime elle ekleyin ya da yüzde daha az donatı seçin.

EN 1992-1-1 için DetailCraft donatı boyutunu (en az 8 mm), donatı sayısını (en az 4), çelik alanını (kesitin 0.2 % ila 4 %'si), net aralığı ve bağ aralığını (9.5.2 ve 9.5.3) denetler.

## Bindirme, temel ve alttaki kolon

- Modelin bir **temeli kolonun altında duruyorsa**, kolon temelin bekleme donatılarıyla bindirme yapar ve bu bindirme de denetlenir.
- Altında modelin **başka bir kolonu duruyorsa**, o kolonun donatılarıyla bindirme yapar.
- Kendi {{ui:Bindirme boyu (mm, 0 = gerektiği kadar)}} değerinizi vererek geçersiz kılın; gereken değerden kısa bir bindirme sorundur ve tabloda * ile işaretlenir.
- Varsayılan olarak {{ui:Basınç bindirmesi}} kullanılır (ayarlarda); kolon çekmede olabilecekse {{ui:Çekme bindirmesi}} seçin.

## İşaretler, liste ve atölye sayfası

Aynı donatılar bir işareti paylaşır: üstteki kolonun boyuna donatıları 8C1, etriyeleri 17C2'dir (önce sayı, sonra kolon için tür harfi C ve sıra numarası). Bunlar {{ui:Büküm listesi}} sekmesinde kesim boyu ve ağırlıkla birlikte görünür ve {{ui:Çıktı}} › {{ui:Daha fazla}} › {{ui:Büküm}} CSV'sinde de yer alır.

Kolonun yanındaki {{ui:İmalat çizimi}} seçeneğini seçin: kolonu yükseklikte (her donatı, işareti, etriye bölgeleri ve bindirmesi ölçülendirilmiş) ve ortada bir kesit gösteren bir sayfa, ardından donatı büküm sayfası. {{ui:Bu sayfayı PDF olarak}} kaydedin.

## Bunlar yapılmaz

- Yuvarlak kolonlar ve spiraller ile dikdörtgen olmayan kolonlar: henüz yapılmadı.
- Kesit içindeki köşe ve ara bağlar ile deprem detaylandırması (ACI 318-19 bölüm 18): henüz yapılmadı.
- Sizin seçtiğiniz konumlarda ekler veya kademeli ekler: tüm donatılar tek bir kesitte bindirme yapar.
- Donatıların yük için yeterli olup olmadığı: bu mühendisin tasarımıdır.
