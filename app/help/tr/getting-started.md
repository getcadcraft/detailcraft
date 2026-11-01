---
title: DetailCraft'a başlarken
summary: DetailCraft'ın bugün ne yaptığı, nasıl açılacağı ve on dakikada ızgaralardan bir imalat çizimine ilk model.
keywords: başla, ilk model, giriş, çelik detaylandırma, donatı, hızlı başlangıç, eğitim, genel bakış
from: 3682c0d8
---

DetailCraft, CadCraft ailesinin çelik ve donatı detaylandırma uygulamasıdır. Izgaralar ve seviyeler üzerinde bir çelik karkasın 3B modelini oluşturur, birleştirir ve imalathanenin ihtiyaç duyduğunu elde edersiniz: parça ve montaj işaretleri, bir malzeme listesi, tek parçalık imalat çizimleri, DSTV NC dosyaları, bir IFC modeli ve temeller için bir donatı büküm listesi.

Bu erken bir sürümdür. Her şeyi bir seferde yapmak yerine kısa bir listeyi dikkatle yapar. Gerçek işlerinizi onun etrafında planlamadan önce [Henüz yapılmayanlar](topic:not-built-yet) konusunu okuyun.

## Bugün ne yapar

- Milimetre cinsinden yazdığınız ızgaralar ve seviyeler.
- Yayımlanmış profil kataloglarından kolonlar, kirişler, çaprazlar ve levhalar (AISC W, S, C, L, HSS ve Pipe; Avrupa IPE, HEA, HEB ve UPN) ve kendi parametrik profilleriniz.
- İki birleşim: bir kirişten kolon flanşına cıvatalı bir uç levhası ve dört ankraj çubuklu bir kolon taban levhası. Her biri benzer her birleşime kopyalanabilir.
- Konumla yazılan delikler ve ağız kesimleri.
- Alt hasırlı ve bekleme donatılı dikdörtgen tekil temeller.
- Her değişiklikten sonra kendiliğinden güncellenen parça ve montaj işaretleri.
- Dışa aktarmalar: IFC4, DSTV NC dosyaları (I profilleri ve levhalar), CSV olarak malzeme listesi, CSV olarak büküm listesi ve bir parçanın imalat çizimi PDF'i.

## DetailCraft'ı açın

1. DetailCraft'ı bir masaüstü tarayıcıda açın: Chrome, Edge, Firefox veya Safari. Bkz. [Tarayıcılar ve bilgisayarlar](common:browsers).
2. Ekranın dolmasını bekleyin. Alttaki durum çubuğu "Hazır. Örneği açın ya da ızgara ve seviyeleri ayarlayıp eleman yerleştirmeye başlayın." der.

Model görünümü 3B grafik (WebGL) gerektirir. Ekranın ortası "Bu tarayıcı 3B grafiği (WebGL) başlatamadı" diyorsa bkz. [Sorun giderme](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modelleriniz bilgisayarınızda kalır. Bir modeli açmak onu tarayıcıda okur ve kaydetmek bir dosya indirir. Hiçbir şey yüklenmez. Bulutta kaydetme henüz mevcut değil. Bkz. [Dosyalarınız nereye gider](common:your-files). DetailCraft'ı sonradan bağlantı olmadan kullanmak için çevrimiçiyken uygulama çubuğunda bir kez {{ui:Çevrimdışı için kaydet}} seçeneğini seçin; bkz. [Çevrimdışı çalışma](common:offline).
:::

:::offline
Çevrimdışısınız. DetailCraft bağlantısız yalnızca önce çevrimdışı kullanım için kaydedildiyse çalışır: uygulama çubuğundaki {{ui:Çevrimdışı için kaydet}} düğmesi o zaman {{ui:Çevrimdışı hazır}} yazar. Bkz. [Çevrimdışı çalışma](common:offline).
:::

## Önce örneğe bakın

DetailCraft'ın ne yaptığını görmenin en hızlı yolu örnek karkastır.

1. Araç çubuğunun {{ui:Dosya}} grubunda {{ui:Örnek}} seçeneğini seçin.
2. Görünüm iki açıklıklı bir karkas gösterir: taban levhalı altı kolon, uç levhalı dört kiriş, bir çapraz ve donatılı yedi temel.
3. Bir kirişe tıklayın. Sağdaki {{ui:Özellikler}} paneli parça işaretini, kesim boyunu, ağırlığını ve uç levhalarının açtığı delikleri gösterir.
4. Her parça işaretini adedi ve ağırlığıyla görmek için altta {{ui:Malzeme listesi}} sekmesini açın.

[Örnek karkası keşfetme](topic:sample-model) adım adım anlatımı parça parça gösterir.

## İlk modeliniz

Yeni bir modelde zaten 6000 mm aralıklı 1'den 3'e ve A'dan B'ye ızgaralar ve iki seviye vardır: 0'da Seviye 1 ve 4000'de Seviye 2.

1. {{ui:Yeni}} seçeneğini seçin. Geçerli modelin değişiklikleri varsa DetailCraft önce kaydedip kaydetmeyeceğinizi sorar.
2. Görünümün üstünde {{ui:Plan}} seçeneğini seçin. Yanındaki seviye listesi Seviye 1'i seçer.
3. Araç çubuğunda {{ui:Kolon}} seçeneğini seçin veya {{key:C}} tuşuna basın.
4. A/1 ızgara kesişimine tıklayın. Seviye 1'den Seviye 2'ye bir W12x50 kolon görünür. Durum çubuğu nereye gittiğini söyler.
5. Üç tane daha yerleştirmek için B/1, A/2 ve B/2'ye tıklayın.
6. Seviye listesinden Seviye 2'yi seçin, sonra {{ui:Kiriş}} seçeneğini seçin veya {{key:B}} tuşuna basın.
7. A/1'e, sonra A/2'ye tıklayın. Bir W16x26 kiriş iki kolon başını birleştirir; çeliğin üstü seviyededir.
8. {{ui:Seç}} aracına dönmek için {{key:Esc}} tuşuna basın, sonra kirişe tıklayın.
9. {{ui:Bağlan}} grubunda {{ui:Uç levhaları}} seçeneğini seçin. Her iki uç cıvatalı bir uç levhası alır, kiriş sığması için kısaltılır ve ilk uç levhası artık seçilidir.
10. Kirişe yeniden tıklayın.
11. {{ui:Çıktı}} grubunda {{ui:İmalat çizimi}} seçeneğini seçin. Kirişin imalat çiziminin bir önizlemesi açılır. {{ui:PDF indir}} seçeneğini seçin.
12. Modeli kaydetmek için {{key:Mod+S}} tuşlarına basın. Tarayıcı `Untitled.detailcraft.json` dosyasını indirir.

Dosya ve her dışa aktarma adını taşısın diye kaydetmeden önce modeli sol üstteki {{ui:Ad}} alanında yeniden adlandırın.

## Sonraki adım

- [Ekran turu](topic:workspace)
- [Izgaraları ve seviyeleri ayarlama](topic:grids-and-levels)
- Fare, izleme dörtgeni veya dokunmatik ekranla [3B görünümde gezinme](topic:navigate-3d)
- Büyük bir detaylandırma paketi biliyorsanız [Diğer detaylandırma yazılımlarından geliyorsanız](topic:coming-from)
- [Bu yardımı kullanma](common:help)
