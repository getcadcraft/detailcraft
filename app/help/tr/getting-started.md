---
title: DetailCraft ile başlangıç
summary: DetailCraft bugün ne yapar, nasıl açılır ve ızgaralardan imalat çizimine on dakikada ilk model.
keywords: başlangıç, ilk model, giriş, çelik detaylandırma, donatı, hızlı başlangıç, eğitim, genel bakış
from: e4f16bbe
---

DetailCraft, CadCraft ailesinin çelik ve donatı detaylandırma uygulamasıdır. Izgaralar ve seviyeler üzerinde çelik bir çerçevenin 3B modelini kurar, birleştirir ve atölyenin ihtiyaç duyduğunu verir: parça ve montaj işaretleri, malzeme listesi, tek parça imalat çizimleri, DSTV NC dosyaları, bir IFC modeli ve temeller için bir büküm listesi.

Bu erken bir sürümdür. Her şeyi birden yapmak yerine az sayıda şeyi dikkatle yapar. Gerçek bir iş planlamadan önce [Henüz yapılmayanlar](topic:not-built-yet) bölümünü okuyun.

## Bugün ne yapar

- Milimetre cinsinden girdiğiniz ızgaralar ve seviyeler.
- Yayımlanmış profil kataloglarından kolonlar, kirişler, çaprazlar ve levhalar (AISC W, S, C, L, HSS ve Pipe; Avrupa IPE, HEA, HEB ve UPN; İngiltere UB, UC, PFC, EA, UEA, SHS, RHS ve CHS) ve kendi parametrik profilleriniz.
- İki birleşim: bir kirişten bir kolon başlığına cıvatalı uç levhası ve dört angkraj çubuklu bir kolon taban levhası. Her biri benzer her birleşime kopyalanabilir.
- Konuma göre girdiğiniz delikler ve ağız kesimleri.
- Alt donatı matı ve bekleme donatılı dikdörtgen tabanlı temeller.
- Her değişiklikten sonra kendiliğinden güncellenen parça ve montaj işaretleri.
- Dışa aktarmalar: IFC4, DSTV NC dosyaları (I kesitler ve levhalar), CSV olarak malzeme listesi, CSV olarak büküm listesi ve bir parçanın imalat çizimi PDF'i.

## DetailCraft'ı açın

1. DetailCraft'ı bir masaüstü tarayıcıda açın: Chrome, Edge, Firefox veya Safari. Bkz. [Tarayıcılar ve bilgisayarlar](common:browsers).
2. Ekranın dolmasını bekleyin. Alttaki durum çubuğu "Hazır. Örneği açın ya da ızgara ve seviyeleri ayarlayıp elemanları yerleştirmeye başlayın." yazar.

Model görünümü 3B grafik (WebGL) gerektirir. Ekranın ortasında "Bu tarayıcı 3B grafikleri (WebGL) başlatamadı" yazıyorsa bkz. [Sorun giderme](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modelleriniz bilgisayarınızda kalır. Bir modeli açmak onu tarayıcıda okur, kaydetmek bir dosya indirir. Hiçbir şey yüklenmez. Bulut kaydı henüz kullanılamıyor. Bkz. [Dosyalarınız nereye gider](common:your-files). Bağlantısız kullanmak için, bir kez çevrimiçiyken uygulama çubuğunda {{ui:Save for offline}} seçeneğini belirtin; bkz. [Çevrimdışı çalışma](common:offline).
:::

:::offline
Çevrimdışısınız. DetailCraft ancak bağlantısız kullanım için önceden kaydedildiyse bağlantı olmadan çalışır: uygulama çubuğundaki {{ui:Save for offline}} düğmesi {{ui:Offline ready}} yazıyorsa çalışır. Bkz. [Çevrimdışı çalışma](common:offline).
:::

## Önce örneğe bakın

DetailCraft'ın ne ürettiğini görmenin en hızlı yolu örnek çerçevedir.

1. Araç çubuğunun {{ui:File}} grubunda {{ui:Sample}} seçeneğini belirtin.
2. Görünüm iki açıklıklı bir çerçeve gösterir: taban levhalı altı kolon, uç levhalı dört kiriş, bir çapraz ve donatılı yedi temel.
3. Bir kirişe tıklayın. Sağdaki {{ui:Properties}} paneli parça işaretini, kesim uzunluğunu, ağırlığı ve uç levhalarının açtığı delikleri gösterir.
4. Her parça işaretini adet ve ağırlığıyla görmek için alttaki {{ui:Bill of materials}} sekmesini açın.

Parça parça ilerleyen rehber: [Örnek çerçeveyi keşfedin](topic:sample-model).

## İlk modeliniz

Yeni bir model zaten 6000 mm aralıklı A'dan B'ye 1 ile 3 ızgaralarına ve iki seviyeye sahiptir: 0'da Seviye 1 ve 4000'de Seviye 2.

1. {{ui:New}} seçeneğini belirtin. Geçerli modelde değişiklik varsa DetailCraft önce kaydedip kaydetmeyeceğinizi sorar.
2. Görünümün üstündeki {{ui:Plan}} seçeneğini belirtin. Yanındaki seviye listesi Seviye 1'i seçer.
3. Araç çubuğunda {{ui:Column}} seçeneğini belirtin veya {{key:C}} tuşuna basın.
4. A/1 ızgara kesişimine tıklayın. Seviye 1'den Seviye 2'ye bir W12x50 kolon belirir. Durum çubuğu nereye yerleştirildiğini söyler.
5. B/1, A/2 ve B/2'ye tıklayarak üç kolon daha yerleştirin.
6. Seviye listesinden Seviye 2'yi seçin, ardından {{ui:Beam}} seçeneğini belirtin veya {{key:B}} tuşuna basın.
7. A/1'e, sonra A/2'ye tıklayın. Bir W16x26 kiriş iki kolon başını birleştirir; çeliğin üst kotu seviyededir.
8. {{ui:Select}} moduna dönmek için {{key:Esc}} tuşuna basın, sonra kirişe tıklayın.
9. {{ui:Connect}} grubunda {{ui:End plates}} seçeneğini belirtin. İki uca da cıvatalı bir uç levhası eklenir, kiriş uca uyacak şekilde kısaltılır ve ilk uç levhası artık seçilidir.
10. Kirişe yeniden tıklayın.
11. {{ui:Output}} grubunda {{ui:Shop drawing}} seçeneğini belirtin. Kirişin imalat çiziminin önizlemesi açılır. {{ui:Download PDF}} seçeneğini belirtin.
12. Modeli kaydetmek için {{key:Mod+S}} tuşlarına basın. Tarayıcı `Untitled.detailcraft.json` dosyasını indirir.

Dosya ve her dışa aktarma adını taşısın diye, kaydetmeden önce sol üstteki {{ui:Name}} alanında modelin adını değiştirin.

## Sırada ne var

- [Ekranın tanıtımı](topic:workspace)
- [Izgaraları ve seviyeleri ayarlayın](topic:grids-and-levels)
- [3B görünümde gezinin](topic:navigate-3d), fare, dokunmatik yüzey ya da dokunmatik ekranla
- [Diğer detaylandırma yazılımlarından geçiş](topic:coming-from), büyük bir detaylandırma paketi biliyorsanız
- [Bu yardımı kullanma](common:help)
