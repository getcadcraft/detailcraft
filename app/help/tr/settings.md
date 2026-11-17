---
title: DetailCraft ayarları
summary: Yeni elemanları Amerikan veya Avrupa profili olarak başlatın, Çoğalt komutunun kopyayı ne kadar taşıyacağını belirleyin, kopyaların bağlantılarını getirip getirmeyeceğini seçin ve 3B görünümde cıvataları göstermeyi veya gizlemeyi ayarlayın.
keywords: ayarlar, tercihler, sayfa boyutu, kağıt boyutu, çizimler, seçenekler, çelik, aisc, en, avrupa, amerikan profilleri, metrik profiller, varsayılan profil, sınıf, s355, a992, çoğaltma ofseti, yapıştırma ofseti, bağlantıları kopyala, cıvatalar, angkraj çubukları, cıvataları gizle, sıfırla
from: e46cea57
---

{{ui:Settings}} simgesini (uygulama çubuğundaki dişli) veya {{key:Mod+,}} tuşlarını kullanarak açın. İlk sekme, {{ui:DetailCraft}}, bu uygulamaya ait ayarları tutar; {{ui:General}} sekmesi ise her CadCraft uygulamasının ortak ayarlarını (tema, araç çubuğu, paneller) tutar. DetailCraft ayarları yalnızca bu uygulamaya aittir: burada değiştirirsiniz, hemen geçerli olurlar ve bu tarayıcı bunları hatırlar. Model dosyanızda saklanmazlar.

## Yeni elemanlar

Yerleştirme araçlarının hangi profil ve sınıfla başlayacağı:

| Araç | US profilleri (AISC), A992 | Avrupa profilleri (EN), S355 |
|---|---|---|
| {{ui:Beam}} | W16x26, A992 | IPE300, S355 |
| {{ui:Column}} | W12x50, A992 | HEB200, S355 |
| {{ui:Brace}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plate}} | A36 | S355 |

US profilleri başlangıçtır. Avrupa seçimi çaprazlar için HEA160 kullanır; çünkü DetailCraft'ın EN kataloğunda henüz içi boş kesit yoktur ([Profil kataloğu](topic:profile-catalog)). Bir yerleştirme aracı açıkken, {{ui:Properties}} panelinden bir sonraki parça için istediğiniz profili ve sınıfı yine seçebilirsiniz. Modeldeki mevcut elemanlar kendi profil ve sınıflarını korur.

## Çoğaltma ve yapıştırma

- **Ofset (mm)**: x, y ve z. {{ui:Duplicate}} ({{key:Mod+D}}) kopyayı orijinalden bu kadar uzağa koyar; {{ui:Paste by offset (mm, from the original)}} formu bu değerle başlar. Başlangıçta 6000, 0, 0'dır: sayısal aks çizgileri boyunca bir 6 m açıklık. Açıklık aralığınıza ayarlayın veya bir katı yukarı kopyalamak için z'ye bir kat yüksekliği yazın.
- **Uç levhalarını ve taban levhalarını elemanlarıyla birlikte kopyala** (başlangıçta açık): bir bağlantı, yalnızca birleştirdiği her eleman kopyalandığında kopyayla birlikte gelir. Kopyada farklı bir bağlantı denemek için, örneğin elemanları ve temelleri bağlantılarını almadan kopyalamak için kapatın.

Bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

## 3B görünüm

**Cıvataları ve angkraj çubuklarını göster** (başlangıçta açık). Yoğun bir birleşimin deliklerini ve levhalarını görmek için kapatın. Gizli cıvatalar tıklanamaz; bağlantıyı seçmek için levhaya tıklayın. Malzeme listesi, çizimler ve her dışa aktarım yine de her cıvatayı ve çubuğu içerir.

## Köşe göstergesi

3B görünümün köşesinde ne görüneceği: **Görünüm küpü** (başlangıçta; sağ üstte — bir yüze, kenara veya köşeye tıklayarak oradan bakın, sürükleyerek döndürün, modeli çevirmek için pusula halkasını sürükleyin), **Eksen simgesi** (görünümle birlikte dönen, sol altta küçük bir X, Y, Z işareti: X kırmızı, Y yeşil, Z mavi) veya **Hiçbiri**. Yalnızca {{ui:3D}} görünümünde geçerlidir; {{ui:Plan}} ve {{ui:Elevation}} ikisini de göstermez. Bkz. [Görünüm küpü](topic:view-cube).

## Sıfırlama

Iletişim kutusunun altındaki **DetailCraft ayarlarını sıfırla** bunları başlangıç değerlerine döndürür (US profilleri, ofset 6000, 0, 0, bağlantılar kopyalanır, cıvatalar gösterilir); {{ui:General}} sekmesindekilerle birlikte.

## Çizimler

**Sayfa boyutu**: sayfa çizimleri ve imalat çizimleri yatay olarak şu boyutlarda yapılır: A4, A3 (başlangıç), A2, A1, ANSI B, ANSI C veya ANSI D. {{ui:Drawings}} ve imalat çizimi pencerelerinde aynı liste bulunur. Bkz. [Genel yerleşim ve montaj çizimleri](topic:drawings).

## Donatı

- **ASTM donatı adları**: #3'ten #11'e kadar veya aynı donatılar için yumuşak metrik #10'dan #36'ya kadar.
- **Büküm listesi şekil kodları**: DetailCraft'ın S, L, U kodları; ACI 315 tipleri; veya BS 8666 şekil kodları. Bkz. [Donatı başvurusu](topic:rebar-reference).

## Sürükleyerek seçim

**Dikdörtgen** (önceki gibi) veya **Kement**: serbest bir çizgi; sürüklerken {{key:Space}} tuşu içinde kalan, dokunan ve çit arasında geçiş yapar. Bkz. [Pencereyle seçim](topic:select-and-change#select-with-a-window).
