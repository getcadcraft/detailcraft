---
title: Kirişleri uç levhalarıyla kolonlara bağlayın
summary: Bir kiriş bir kolon flanşına ya da gövdesine dayandığında cıvatalı uç levhaları ekleyin, levhayı, cıvataları ve kaynağı ayarlayın ve bağlantıyı her benzer birleşime kopyalayın.
keywords: uç levhası, endplate, moment bağlantısı, cıvatalı bağlantı, birleşim, cıvatalar, kaynak, uzatılmış uç levhası, düz, benzer, bağlantıyı kopyala, bileşen
from: 21e028b2
---

Bir uç levhası bağlantısı, bir levhayı kiriş ucuna kaynaklar ve onu kolon flanşına ya da gövdesine cıvatalar. DetailCraft levhayı yerleştirir, kirişi geri keser, levhada ve kolon flanşında eşleşen delikler açar, cıvataları ve kaynağı ekler ve kenar mesafelerini ile aralıkları denetler.

:::warning
DetailCraft bağlantıları tasarlamaz. Ayarlar başlangıç değerleridir; siz değiştirirsiniz; hiçbir şey dayanımı denetlemez. Kenar ve aralık uyarıları EN 1993-1-8 Tablo 3.3'ün asgari değerlerini kullanır; bunlar sizin uyguladığınız kurallardan farklı olabilir.
:::

## Neleri bağlayabilir

- **Seviyeli** bir kiriş (her iki ucu aynı yükseklikte), dik (dönme 0) ve I profilli.
- Düşey bir I profilli kolonun **flanşına** ya da **gövdesine**, ona dik olarak.
- Kiriş ucu, kolonun ekseninde, kolonun alt ve üst kotları arasında olmalıdır.

Eğik veya meyilli kirişler ve I olmayan kesitler gerekçesiyle reddedilir: bunlar için [kesme levhaları](topic:shear-tabs) kullanın. Bir gövde üzerinde, levha ve kiriş flanşları kolon flanşları arasına sığmalıdır; sığmazsa DetailCraft uyarır.

:::tip
Dönme 0 iken bir kolonun flanşları numaralı ızgara yönünde (x) bakar. A'dan B'ye giden bir kiriş gövdeye birleşir ve gövde üzerine bir uç levhası alır.
:::

## Bir kirişe uç levhası ekleyin

1. {{ui:Seç}} ({{key:V}}) öğesini seçin ve kirişe tıklayın.
2. {{ui:Bağlan}} grubunda {{ui:Uç levhaları}} ya da {{ui:Özellikler}} panelinde {{ui:Uç levhaları ekle}} öğesini seçin.
3. Bir kolon flanşına ya da gövdesine dik birleşen kirişin her serbest ucu bir levha alır. Durum çubuğu şunu söyler: "2 uç levhası eklendi. Levhasını, cıvatalarını ve kaynağını değiştirmek için birini seçin; Benzer, benzeri birleşimlere kopyalar."
4. Eklenen ilk uç levhası seçili olur ve ayarları {{ui:Özellikler}} panelindedir.

Hiçbir şey olmazsa durum çubuğunu okuyun:

- "Bu kiriş bir kolon ekseninde bitmiyor. Uç levhaları, düşey bir kolonla birleşen bir kiriş ucuna yerleştirilir."
- "Bu kiriş bir kolona açılı birleşiyor ya da eğimli: uç levhaları dik ve seviyeli birleşimler için yapılır. Kesme levhalarını kullanın."
- "Her iki ucunda zaten bağlantı var."

## Levhayı, cıvataları ve kaynağı değiştirin

Bağlantıyı seçmek için uç levhasına (ya da cıvatalarından birine) tıklayın. **{{ui:Levha, cıvatalar ve kaynak (mm)}}** altında:

| Ayar | Varsayılan | Ne yapar |
|---|---|---|
| Levha kalınlığı | 20 | Levhanın kalınlığı; kirişin flanşın ötesinde ne kadar geri kesildiğini de belirler |
| Levha genişliği | 180 | Birleşim boyunca |
| Kirişin üstündeki uzantı | 0 | Üst flanşın üstünde; 0'ın üzerinde uzatılmış bir uç levhası yapar |
| Kirişin altındaki uzantı | 0 | Alt flanşın altında |
| Cıvata çapı | 20 | Nominal cıvata boyutu |
| Delik çapı | 22 | Levhada ve kolon flanşında açıklık deliğiniz |
| Cıvata sınıfı | A325 | Metin; malzeme listesinde yazdırılır |
| Cıvata sıraları | 4 | İki cıvatalı sıralar, levha yüksekliğinin ortasında |
| Sıra aralığı | 75 | Sıralar arası düşey aralık |
| Aralık | 100 | Bir sıradaki iki cıvata arasındaki yatay aralık |
| Cıvata boyu payı | 30 | Somun, pul ve dişler için tutuşa eklenir; aşağıya bakın |
| Köşe kaynağı boyutu | 8 | Kiriş ucunun çevresinde |
| Levha malzemesi | A36 | Metin |

Yeni bir değer yazın ve {{key:Enter}} ya da {{key:Tab}} tuşuna basın. Levha, delikler, cıvatalar ve kirişin kesim uzunluğu hemen güncellenir. Her değişiklik tek bir geri alma adımıdır.

Ayarların altında bağlantının ne oluşturduğunu görürsünüz:

- {{ui:Cıvatalar}}: örneğin "8 × 20 × 70 A325 (tutuş 36.2)".
- {{ui:Kaynak}}: boyutu, yeri ve uzunluğu.
- {{ui:Levha}}: boyutu ve parça işareti.

### Sayılar nasıl hesaplanır

- Kiriş, kolon derinliğinin yarısı kadar (gövdede: gövde kalınlığının yarısı) artı levha kalınlığı kadar geri kesilir; böylece levha yüzeye oturur.
- Levha yüksekliği, kiriş derinliği artı iki uzantıdır.
- Cıvata boyu = tutuş (levha kalınlığı + kolon flanşı veya gövde kalınlığı) + pay, 5 mm'ye yukarı yuvarlanmış.
- Gösterilen kaynak uzunluğu, kiriş kesitinin çevresidir.

### Uyarılar

Bağlantı yine de oluşturulur, ama bunlar bağlantının altında ve {{ui:Sorunlar}} sekmesinde görünür:

- Cıvata sıraları ya da cıvatalar, levha kenarına delik çapının 1,2 katından daha yakın.
- Sıra aralığı delik çapının 2,2 katından az ya da aralık delik çapının 2,4 katından az.
- Kolon gövdesine ya da pahına çarpan, veya kolon flanşının dışına taşan delikler.
- Kolon flanşından geniş bir levha ya da (gövdede) flanşlar arası boşluktan geniş bir levha; kiriş flanşlarının aralarına sığmaması.
- Bir kiriş flanşına çok yakın bir cıvata sırası ya da kiriş gövdesi ve kaynağı için çok dar bir aralık.

## Her benzer birleşime kopyalayın

1. Hazırladığınız bağlantıyı seçin.
2. {{ui:Özellikler}} panelinde {{ui:Benzerlere uygula (n)}} öğesini ya da {{ui:Bağlan}} grubunun {{ui:Daha fazla}} menüsünde {{ui:Benzer}} öğesini seçin. Parantez içindeki sayı, kaç birleşimin bunu alacağıdır.
3. Aynı kiriş profiline ve kolon profiline sahip, aynı tür yüzeye giren ve henüz bağlantısı olmayan her birleşim, aynı ayarlarla bir kopya alır. Durum çubuğu kaç tane olduğunu söyler.

Kopyalar bağımsızdır: birini sonra değiştirmek diğerlerini değiştirmez. Zaten bağlantısı olan birleşimler olduğu gibi bırakılır; bunların yerine geçmesini istiyorsanız önce onları silin.

## Taşıma ve silme

Bağlantılar her model değiştiğinde ayarlarından yeniden oluşturulur; bu nedenle bir kirişi ya da kolonu taşımak veya boyutlandırmak, uç levhalarını da beraberinde taşır. Bir değişiklik birleşimin artık uymadığı anlamına gelirse, bağlantı modelde kalır ve {{ui:Sorunlar}} sekmesi nedenini söyler; örneğin "Kiriş ucu artık kolon ekseninde değil."

Bir bağlantıyı silmek için onu seçin ve {{key:Delete}} tuşuna basın. Kirişi ya da kolonu silmek, bağlantılarını da siler.

Sonraki: [Taban levhaları ve angkraj çubukları ekleyin](topic:base-plates).
