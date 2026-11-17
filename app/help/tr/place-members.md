---
title: Kolon, kiriş ve çaprazları yerleştirin
summary: Bir profil, malzeme ve konum seçin, sonra çelik elemanları yerleştirmek için ızgara kesişimlerine tıklayın ya da yazın.
keywords: kolon, kiriş, çapraz, eleman, yerleştir, profil, malzeme, dönme, konum, ofset, ekle, ızgaraya göre ekle
from: d6db0dc1
---

Elemanlar ızgara kesişimlerine yerleştirilir: bir kolon bir kesişime, bir kiriş ya da çapraz iki kesişim arasına. Önce [ızgaralar ve seviyeleri](topic:grids-and-levels) kurun.

## Bir araç ve seçeneklerini seçin

1. {{ui:Yerleştir}} grubunda {{ui:Kolon}} ({{key:C}}), {{ui:Kiriş}} ({{key:B}}) ya da {{ui:Çapraz}} ({{key:R}}) seçin.
2. Sağdaki {{ui:Özellikler}} paneli "Bir kolon yerleştir" (ya da kiriş, ya da çapraz) olur ve bir sonraki eleman için seçenekleri gösterir:
   - {{ui:Profil}}: listeden seçin. Boyutlar kataloğa göre gruplanır (W kesitler, Kanallar, Köşebentler, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS ve sizin Özel profilleriniz). Bkz. [Profil kataloğu](topic:profile-catalog).
   - {{ui:Malzeme}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ya da S355.
   - {{ui:Konum}}: kesitin iki nokta arasındaki çizgide nerede durduğu: {{ui:Çelik üstü çizgide}}, {{ui:Çizgiye ortalı}} ya da {{ui:Alt çizgide}}.
   - {{ui:Dönme (°)}}: kesiti elemanın kendi ekseni etrafında döndürür.
   - {{ui:Şu seviyeye kadar}} (yalnızca kolonlar): {{ui:Bir üst seviye}} ya da bir seviye adı.
3. Seçeneklerin altındaki bir {{ui:Profil}} kutusu, seçilen kesitin boyutlarını, alanını, metre başına kütlesini ve geldiği kataloğu listeler.

Varsayılanlar, kolonlar için A992'de W12x50 ({{ui:Çizgiye ortalı}}), kirişler için A992'de W16x26 ({{ui:Çelik üstü çizgide}}) ve çaprazlar için A500 Gr C'de HSS6x6x1/4 ({{ui:Çizgiye ortalı}}) değerleridir. Seçenekler siz değiştirene kadar ayarlı kalır.

## Tıklayarak yerleştirme

### Bir kolon

1. {{ui:Plan}} seçin ve kolonun başladığı seviyeyi seçin.
2. {{ui:Kolon}} seçin.
3. İşaretçiyi bir kesişime yaklaştırın. En yakın nokta yanar ve durum çubuğu adını söyler.
4. Tıklayın. Kolon o seviyeden bir üst seviyeye (ya da {{ui:Şu seviyeye kadar}} seviyesine) uzanır. Durum çubuğu örneğin "Kolon W12x50, A/1 konumunda, Seviye 1 ile Seviye 2 arası." gibi bir mesaj verir.
5. Daha fazla yerleştirmek için tıklamaya devam edin. Bittiğinde {{key:Esc}} tuşuna basın.

Tıkladığınız seviyenin üstünde kolonun ulaşacağı bir seviye yoksa durum çubuğu şunu söyler: "Kolonun ulaşması için Seviye 2'nin üstünde seviye yok. Önce bir seviye ekleyin."

### Bir kiriş

1. {{ui:Plan}} seçin ve kirişin seviyesini seçin.
2. {{ui:Kiriş}} seçin.
3. İlk kesişimi tıklayın. Durum çubuğu "Seviye 2'de A/1'den. Şimdi diğer ucu tıklayın ({{key:Esc}} iptal eder)." der. Kesikli bir çizgi işaretçiyi izler.
4. İkinci kesişimi tıklayın. Kiriş belirir.
5. Bir sonraki kirişi başlatmak için yeniden tıklayın ya da {{key:Esc}} tuşuna basın.

İlk tıklamadan sonra {{key:Esc}} yalnızca o noktayı iptal eder; ikinci {{key:Esc}} aracı bırakır.

### Bir çapraz

Çapraz, farklı seviyelerdeki iki kesişim arasında uzanır; bu yüzden en kolay {{ui:Görünüş}} modunda yapılır.

1. {{ui:Görünüş}} seçin ve çaprazın üzerinde olduğu harfli ızgara çizgisini seçin.
2. {{ui:Çapraz}} seçin.
3. Alt ucu, sonra üst ucu tıklayın.

Görünüşler yalnızca harfli ızgara çizgileri için vardır. Numaralı bir çizgi boyunca (A'dan B'ye) bir çerçevedeki çapraz için {{ui:3B}} ya da aşağıdaki {{ui:Izgaraya göre ekle}} formunu kullanın.

:::touch
Dokunmatik ekranda, kesişime yakın dokunun: bir dokunuş, kısa bir mesafe içindeki en yakın noktayı seçer; yakında nokta yoksa hiçbir şey yapmaz. Dokunmadan önce vurgulama yoktur, bu yüzden her dokunuştan sonra durum çubuğu mesajını kontrol edin. Tek parmakla sürükleme, yerleştirmek yerine görünümü döndürür ya da kaydırır.
:::

## Izgara ile, tıklamadan yerleştirme

Her yerleştirme aracının {{ui:Özellikler}} panelinin altında bir {{ui:Izgaraya göre ekle}} formu vardır. Yalnızca klavyeyle çalışır ve 3B görünüme ihtiyaç duymaz.

1. Aracı seçin, örneğin {{ui:Kiriş}}.
2. {{ui:Izgaraya göre ekle}} içinde {{ui:Başlangıç ızgarası (harf)}}, {{ui:Başlangıç ızgarası (sayı)}} ve {{ui:Başlangıç seviyesi}} seçin.
3. {{ui:Bitiş ızgarası (harf)}}, {{ui:Bitiş ızgarası (sayı)}} ve {{ui:Bitiş seviyesi}} seçin.
4. {{ui:Ekle}} seçin.

Bir kolon ya da temel için form yalnızca bir nokta içerir: {{ui:Izgara (harf)}}, {{ui:Izgara (sayı)}} ve {{ui:Seviye}}.

## Yerleştirdikten sonra bir elemanı değiştirme

1. {{key:Esc}} tuşuna basın (ya da {{ui:Seç}} seçin, {{key:V}}) ve elemanı tıklayın.
2. {{ui:Özellikler}} panelinde {{ui:Ad}}, {{ui:Profil}}, {{ui:Malzeme}}, {{ui:Konum}} ya da {{ui:Dönme (°)}} değerini değiştirin.
3. Taşımak için {{ui:Uçlar (x, y, z mm)}} altındaki {{ui:Başlangıç}} ya da {{ui:Uç}} değerlerinin x, y ve z değerlerini düzenleyin. Her ucun ızgara adı altında görünür, ızgara dışındaysa koordinatları.

Her değişiklik tek bir geri alma adımıdır. Alanların altında elemanın {{ui:Parça işareti}}, {{ui:Montaj}}, {{ui:Kesim boyu}}, {{ui:Ağırlık}} (brüt: delikler ve kesimler düşülmez) ve profilin hangi katalogdan geldiğini görürsünüz.

Elemanlar henüz sürüklenemez ya da dizi yapılamaz. Ona benzer başka bir eleman yapmak için kopyalayıp yapıştırın ya da çoğaltın ({{key:Mod+D}}): bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

## Bir elemanı silme

Seçin ve {{key:Delete}} ya da {{key:Backspace}} tuşuna basın ya da {{ui:Sil}} seçin. Üzerindeki bağlantılar da gider. {{key:Mod+Z}} her şeyi geri getirir.

## Bilmeniz gerekenler

- **Kolonun hangi yöne baktığı.** {{ui:Dönme (°)}} 0 iken bir kolonun flanşları x boyunca, komşu numaralı ızgara çizgilerine doğru bakar. 1 ızgarasından 2 ızgarasına giden bir kiriş bir flanşa bağlanır; A'dan B'ye giden bir kiriş gövdeye bağlanır. Uç levhaları yalnızca flanşlara kurulur; bu yüzden kirişleriniz A'dan B'ye gidiyorsa bu kolonlara 90 dönme verin.
- **Varsayılan {{ui:Çelik üstü çizgide}} ile seviyelerdeki kirişler altlarına sarkar.** Seviyeleriniz eleman eksenleriyse {{ui:Çizgiye ortalı}} seçin.
- **Kolonlar seviye seviye uzanır.** İki katı kapsayan bir kolon için {{ui:Şu seviyeye kadar}} değerini üst seviyeye ayarlayın.
- **Eğimli kirişlere** izin verilir (uçları farklı seviyelerde seçin), ancak bunlarda henüz uç levhası kurulmaz.

Sonraki adım: [Kirişleri uç levhalarıyla kolonlara bağlayın](topic:end-plates).
