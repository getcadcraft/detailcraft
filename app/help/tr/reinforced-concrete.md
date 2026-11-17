---
title: Betonarme kirişleri, kolonları, döşemeleri ve duvarları detaylandırma
summary: Beton kirişler, kolonlar, döşemeler ve duvarlar ekleyin, aks boyunca yerleştirin ve donatı verin; bindirmeleri ve angkrajı ACI 318-19 veya EN 1992-1-1'e göre denetleyin; imalat çizimleri ve büküm listeleri üretin.
keywords: betonarme, donatı, kiriş, kolon, döşeme, duvar, etriye, bağ donatısı, bindirme, bindirme eki, angkraj, kenetlenme boyu, ld, ldh, lbd, pas payı, aralık, kuşak donatıları, boşluk, donatı ağı, donatı işareti, büküm listesi, bbs, imalat çizimi, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC içe aktarma
from: 3835b7ec
---

{{ui:Concrete}} sekmesi, görünümün altında, beton kirişlerin, kolonların, döşemelerin ve duvarların donatılarını ayrıntılandırır. Boyutları ve donatıları siz verirsiniz; DetailCraft her donatıyı yerleştirir, numaralandırır, bindirmeleri, angkrajı, pas payını ve aralığı, bunların dayandığı maddeye göre denetler ve çizer.

:::warning
DetailCraft size verdiğiniz donatıları ayrıntılandırır. Onları tasarlamaz. Her sonuç, bir mühendis tarafından kontrol edilmek içindir.
:::

## Beton sekmesini açın

Görünümün altındaki {{ui:Concrete}} sekmesini seçin. Şerit düzeninde {{ui:Concrete}}, {{ui:Modeling}} sekmesinde {{ui:Footing}} yanındadır. Çizim stilinin komut satırıyla {{cmd:CONCRETE}} yazın.

## Aks boyunca bir öğe ekleyin

Beton öğeler modelin aks çizgilerine ve seviyelerine yerleştirilir; bunları önce ayarlayın (sol panel).

1. {{ui:Add by grid}} içinde {{ui:Element}} seçin: {{ui:Concrete beam}}, {{ui:Concrete column}}, {{ui:Slab}} veya {{ui:Wall}}.
2. Aks çizgilerini ve seviyeleri seçin:
   - bir kiriş, bir aks kesişiminden diğerine uzanır, üst kısmı seviyededir;
   - bir kolon bir kesişimde durur, bir seviyeden diğerine uzanır;
   - bir döşeme, iki sayısal ve iki harfli aks çizgisi arasındaki dikdörtgeni doldurur, üst kısmı seviyededir;
   - bir duvar, merkez çizgisi boyunca bir kesişimden diğerine, bir seviyeden diğerine uzanır.
3. Boyutu verin ve {{ui:Add}} seçin. Öğe seçili olur ve alanları {{ui:Properties}} panelinde açılır.

Her öğe, başlangıç değerleri olan donatılarla başlar; bunlar tasarım değil, başlangıç değerleridir. Bunları mühendisin değerleriyle değiştirin.

## Donatıları değiştirin

Öğeyi seçin (görünümde veya {{ui:Concrete}} sekmesindeki adında). {{ui:Properties}} paneli şunları gösterir:

| Öğe | Ayarladığınız değerler |
|---|---|
| Kiriş | Genişlik, derinlik, net pas payı; üst ve alt donatılar (boyut, adet, uçlarda düz veya 90° kanca); yan donatılar; etriyeler (boyut, 135° veya 90° kanca, ilk etriyenin mesnet yüzünden uzaklığı, uç bölge uzunluğu ve aralığı, aralarındaki aralık); mesnet uzunlukları; bindirme uzunlukları |
| Kolon | Genişlik, derinlik, dönme, pas payı; her yüzdeki boyuna donatılar; etriyeler gibi bağ donatıları; donatıların üstte ne yaptığı (üstteki kolonla bindirme, döşemeye kanca veya durma) |
| Döşeme | Kalınlık, boyut, üst, pas payları; alt ve üst donatı ağı her iki yönde (boyut ve aralık); kenarlar etrafındaki U donatıları; kuşak donatıları; boşluklar |
| Duvar | Kalınlık, pas payı, bir veya iki katman, yatay ve düşey donatılar, uçlardaki U donatıları, üstte bindirilen veya bindirilmeyen düşey donatılar, kuşak donatıları, boşluklar |

Her değişiklik tek bir geri alma adımıdır. Yapılamayan bir değişiklik reddedilir ve durum çubuğu nedenini söyler, örneğin "Boşluk, pas payıyla birlikte öğenin içine sığmıyor."

Etriyeler ve bağ donatıları kapalıdır; iki kanca bir köşede birleşir. Bir kirişin donatıları, uçlarında beton kolonun içine, kolonun uzak yüzüne pas payı eksiltilerek girer. Orada kolon yoksa {{ui:Support length at the start (mm)}} ve uçta mesnet uzunluğunu verin.

## Bindirmeler ve angkraj

{{ui:Stock bar length (mm)}} (başlangıçta 12000) üzerindeki donatılar eşit uzunlukta parçalara bölünür ve bindirilir. {{ui:Laps and anchorage}} tablosu her bindirmeyi ve her angkrajı listeler: neyin gerektiğini, maddesini ve terimlerini, detayın neye sahip olduğunu.

- Bindirme uzunluğu 0 "gerektiği kadar" anlamına gelir: standardın verdiği uzunluk, 25 mm'ye yukarı yuvarlanır.
- Kendi bindirme uzunluğunuzu yazarsanız onu kullanır. Gerekenden kısaysa bir sorundur (aşağıya bakın) ve tabloda * ile işaretlenir.
- Angkraj, mesnet yüzünden donatının mesnedin içindeki ucuna kadar ölçülür. Bilinen bir mesnedi olmayan kiriş bunu söyler, denetlemez.
- Bir temel üzerindeki kolon, temelin bekleme donatılarıyla bindirme yapar; başka bir kolon üzerindeki kolon ise o kolonun donatılarıyla. Bu bindirmeler de denetlenir.

**ACI 318-19** (SI): çekmedeki düz donatılar 25.4.2.3 (tablo, ψt, ψe, ψg, λ ile), standart kancalar 25.4.3.1 (aksi bilinmedikçe ψr 1.6 ve ψo 1.25 alınır), basınçtaki donatılar 25.4.9.2, çekme bindirmeleri 25.5.2.1 (Sınıf B veya ayarlarda Sınıf A), basınç bindirmeleri 25.5.5.1.

**EN 1992-1-1**: angkraj 8.4.4, fbd 8.4.2'den (iyi veya zayıf aderans), bindirmeler 8.7.3 ile, aynı kesitte bindirilen her donatı için α6. γc, γs ve αct önerilen değerlerle başlar; ulusal ekinizin değerlerini girin.

## Denetimler

Başarısız olan her denetim, kabuğun Sorunlar panelinde (kaynak {{ui:Reinforcement checks}}) ve öğenin {{ui:Checks}} listesinde görünür:

| Denetim | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Pas payı | Tablo 20.5.1.3.1, maruziyete göre | Aderans asgarisi, Tablo 4.2 (dayanıklılık pas payını siz verirsiniz) |
| Donatılar arası net aralık | 25.2.1 (kirişler, döşemeler, duvarlar), 25.2.3 (kolonlar) | 8.2 (2) |
| Etriye aralığı | 9.7.6.2.2 | 9.2.2 (6) |
| Kiriş en az donatısı | 9.6.1.2 | 9.2.1.1 (1) |
| 900 mm'den derin kirişlerde yan donatılar | 9.7.2.3 | denetlenmez |
| Kolon donatı oranı, donatı sayısı | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bağ donatıları: aralık, boyut, çapraz bağlar | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Döşeme aralığı, en az donatı | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Duvar aralığı, en az donatı, iki katman | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Bindirmeler, angkraj | yukarıdaki gibi | yukarıdaki gibi |

Agrega boyutu bilinmiyor; bu nedenle net aralık, agrega boyutu olmadan denetlenir.

## Boşluklar, kuşaklar ve kenar donatıları

Seçili bir döşemenin veya duvarın altında {{ui:Add an opening}} seçin ve boşluğun yerini ve boyutunu belirleyin. Geçtiği donatılar, kenarından pas payı kadar önce durur. Kuşak donatıları her iki yana eklenir, aynı katmandadır, kesilen donatıların alanının yarısını taşır ve boşluğun ötesinde bir angkraj boyu kadar uzanır. Bu, DetailCraft'ın başlangıç kuralıdır, bir standart maddesi değildir: {{ui:Trimmer bars}} değerlerini mühendisin değerleriyle değiştirin. Köşe donatıları eklenmez.

Döşemenin serbest kenarları etrafındaki U donatılarının ve bir duvarın uçlarındaki U donatılarının kolları, bir bindirme uzunluğu kadar uzunluktadır.

## Donatı işaretleri ve büküm listesi

Özdeş donatılar tek bir işareti paylaşır: temeller F işaretlerini tutar (5F1), kirişler B, kolonlar C, döşemeler S ve duvarlar W alır (7B1, 8C1, 4S2). {{ui:Bending schedule}} sekmesi ve CSV'si artık yapının her donatısını listeler; önce temeller gelir. {{ui:Output}} › {{ui:More}} › {{ui:Bending}} onu indirir.

## İmalat çizimleri

{{ui:Output}} › {{ui:More}} › {{ui:Reinforcement drawings}} seçin, {{ui:Concrete}} sekmesindeki {{ui:Reinforcement drawings}} seçin veya bir öğenin yanındaki {{ui:Shop drawing}} seçin. Her öğe, her donatıyı ve işaretini gösteren bir görünüş (döşeme için plan), etriye veya bağ bölgelerini ve ölçülendirilmiş bindirmeleri gösteren ve ortada bir kesit içeren bir pafta alır. Ardından büküm listeleri her işareti, şeklinin eskizi, boyutları, adedi, kesim boyu ve ağırlığıyla birlikte listeler.

Paftalar her seferinde modelden üretilir ve pencere açıkken her değişiklikten sonra yeniden üretilir; başlık bloğu model referansını taşır. {{ui:This sheet as PDF}} veya {{ui:All sheets as PDF}} ile kaydedin.

## IFC dosyasından donatılar

{{ui:File}} › {{ui:Import IFC}} artık IfcReinforcingBar okur: eksen çizgisi boyunca süpürülen disk, düz kollar ve bükümler olarak geri gelir; çapı, işareti ve onu tutan öğeyle birlikte. Donatılar okundukları gibi tutulur (kiriş veya döşeme kurallarına çevrilmezler), görünümde gösterilir, büküm listesinde listelenir ve IFC dışa aktarımıyla yeniden yazılır. İçe aktarma raporu kaç donatının okunduğunu, hangi boyutlarda olduğunu, kaç öğede bulunduğunu ve neyin neden atlandığını söyler.

Donatı taşıyan veya malzemesi beton olan bir kiriş, kolon, döşeme ya da duvar, o dosyada çelik sayılmaz; rapor bunu belirtir. DetailCraft'ın kendi IFC dışa aktarımı her beton öğenin tanımını taşır; bu nedenle o öğe kendisi olarak geri gelir ve donatıları ondan yeniden üretilir.

:::note
Bir yapısal tasarım programının kendi dosyalarını okumak (IFC değil) henüz yapılmadı: ondan IFC dışa aktarın.
:::

## IFC dışa aktarımı

Beton kirişler, kolonlar, boşluklu döşemeler ve duvarlar IfcBeam, IfcColumn, IfcSlab ve IfcWall olarak çıkar. Her biri donatılarını IfcReinforcingBar olarak taşır (ana donatılar, etriyeler ve bağ donatıları için ligatürler, kenar donatıları) ve bunlar öğeye toplanır. Her donatı, eksen çizgisi boyunca süpürülmüş bir disktir; büküm yerlerinde gerçek yaylarla, işareti ve kesim boyuyla birlikte.
