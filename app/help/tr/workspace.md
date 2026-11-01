---
title: Ekran turu
summary: DetailCraft'taki her çubuk, panel ve sekme ekrandaki adıyla ve her birinin ne işe yaradığı.
keywords: ekran, yerleşim, araç çubuğu, paneller, özellikler, durum çubuğu, raporlar, arayüz, ui, sekmeler
from: 454f74fd
---

DetailCraft, uygulama çubuğunun altında tarayıcı penceresini doldurur. Yukarıdan aşağıya: araç çubuğu, sonra üç sütun ({{ui:Model}} paneli, görünüm, {{ui:Özellikler}} paneli), sonra rapor sekmeleri, sonra durum çubuğu.

## Uygulama çubuğu

En üstteki ince çubuk modele değil, CadCraft sitesine aittir. Uygulama adını ve sürümü, {{ui:DetailCraft hakkında}} bağlantısını, bu yardım için {{ui:Yardım}} (veya {{key:F1}}), {{ui:Çevrimdışı için kaydet}}, ekran modu düğmesini ve {{ui:Kâğıt}} / {{ui:Model}} anahtarını gösterir.

- {{ui:Çevrimdışı için kaydet}} DetailCraft'ı, 3B görünümünü ve bu yardımı tarayıcınızda tutar; böylece bağlantı olmadan açılır. Kaydedildiğinde {{ui:Çevrimdışı hazır}} yazar; o zaman {{ui:Yeniden kaydet (en yeni sürümü al)}} veya {{ui:Çevrimdışı kopyayı kaldır}} için ona tıklayın. Bkz. [Çevrimdışı çalışma](common:offline).
- {{ui:Kâğıt}} açık, {{ui:Model}} koyu bir ekran verir. 3B görünüm hemen izler; modelinizde hiçbir şey değişmez.
- Ekran modu düğmesi ve {{key:Ctrl+Shift+F}} normal, tam ekran ve çubukları gizli tam ekran arasında geçiş yapar. {{key:Ctrl+Shift+F}} her bilgisayarda, Mac dahil, Control tuşunu kullanır. Çubuklar gizliyken geri getirmek için ekranın üst kenarını işaret edin (veya oraya dokunun). {{key:Esc}} tam ekrandan çıkar.

## Araç çubuğu

Araç çubuğunun beş grubu vardır. Ne yaptığını ve tuşunu görmek için bir düğmenin üzerine gelin.

| Grup | Düğmeler | Ne yaparlar |
|---|---|---|
| {{ui:Dosya}} | {{ui:Yeni}}, {{ui:Aç}}, {{ui:IFC içe aktar}}, {{ui:Kaydet}}, {{ui:Örnek}} | Bir model başlatır, kaydedilmiş bir `.detailcraft.json` veya bir IFC dosyası açar, birini kaydeder veya örnek karkası açar |
| {{ui:Yerleştir}} | {{ui:Seç}}, {{ui:Kiriş}}, {{ui:Kolon}}, {{ui:Çapraz}}, {{ui:Levha}}, {{ui:Temel}}, {{ui:Merdiven}} | Görünümdeki sonraki tıklamanın kullandığı araç |
| {{ui:Bağlan}} | {{ui:Uç levhaları}}, {{ui:Taban levhası}} ve {{ui:Daha fazla}} içinde: {{ui:Kesme levhaları}}, {{ui:Ek}}, {{ui:Köşe levhası}}, {{ui:Benzer}} | Seçili kirişe, kolona veya çapraza bir birleşim ekler ya da seçili birleşimi ona benzeyen her birleşime kopyalar |
| {{ui:Düzenle}} | {{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Daha fazla}} | Düzenlemeler arasında geri ve ileri gider; seçimi kopyalar ve yapıştırır. {{ui:Daha fazla}}, {{ui:Kes}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Olduğu yere yapıştır}}, {{ui:Çoğalt}}, {{ui:Sil}}, {{ui:Tümünü seç}} ve {{ui:Seçimi kaldır}} içeren bir menü açar, her biri tuşuyla |
| {{ui:Çıktı}} | {{ui:IFC}}, {{ui:NC dosyaları}}, {{ui:Malzeme listesi}}, {{ui:İmalat çizimi}}, {{ui:Çizimler}} ve {{ui:Daha fazla}} içinde: {{ui:Büküm}}, {{ui:Aşamaya göre ağırlık raporu}}, {{ui:İmalat yazılımı için KISS dosyası}} | Bir dışa aktarma indirir veya çizim sayfalarını açar |

Şu anda işlem yapamayan düğmeler ve menü öğeleri grileşir ve üzerine gelmek nedenini söyler. {{ui:Uç levhaları}} seçili bir kiriş, {{ui:Taban levhası}} seçili bir kolon, {{ui:Benzer}} seçili bir birleşim, {{ui:İmalat çizimi}} seçili bir I profili veya levha parçası, {{ui:Kopyala}} seçili bir eleman veya temel ve {{ui:Yapıştır}} kopyalanmış bir şey gerektirir. Bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

## Model paneli (solda)

- {{ui:Model}}: modelin {{ui:Ad}}ı. Kaydettiğiniz veya dışa aktardığınız her dosyayı adlandırır.
- {{ui:Izgaralar}}: ızgara çizgileri ve aralıkları ve {{ui:Izgaraları uygula}}. Bkz. [Izgaraları ve seviyeleri ayarlama](topic:grids-and-levels).
- {{ui:Seviyeler}}: seviye başına bir satır (ad ve mm cinsinden kot), {{ui:Seviye ekle}} ve {{ui:Seviyeleri uygula}}.
- {{ui:Özel profil}}: kendi parametrik kesitinizi yapın. Siz açana kadar kapalıdır.
- {{ui:Parça işaretleri}}: modeldeki her parça işareti, profili, uzunluğu ve adediyle. O işarete sahip ilk parçayı seçmek için bir işarete tıklayın.

{{ui:Izgaralar}}, {{ui:Seviyeler}} ve {{ui:Özel profil}} katlanır: başlıklarına tıklayın.

## Görünüm (ortada)

Görünüm modeli 3B gösterir. Üstünde görünüm çubuğunun üç düğmesi ve bir listesi vardır:

- {{ui:3B}}: modelin etrafında serbestçe dönün.
- {{ui:Plan}}: bir seviyeye tam yukarıdan bakın. Düğmelerin yanında bir seviye listesi görünür. Seviyenin 1,5 m üzerindeki her şey kesilir, böylece seviyeyi açıkça görüp tıklayabilirsiniz.
- {{ui:Görünüş}}: harfli bir ızgara çizgisine doğrudan bakın (Izgara A, Izgara B …). Harfli ızgaraların bir listesi görünür. Yalnızca o çizginin 1 m yakınındaki çelik gösterilir.
- Görünüm çubuğunun sağ ucundaki sığdır düğmesi modelin tamamını göstermek için yakınlaştırır.

Küçük noktalar her seviyedeki her ızgara kesişimini işaretler. Bir yerleştirme aracı açıkken işaretçiye en yakın nokta yanar ve durum çubuğu onu adlandırır, örneğin "Seviye 1'de A/2". Renkler eleman türlerini ayırt eder: kolonların, kirişlerin, çaprazların ve levhaların her birinin kendi rengi, cıvataların ve çubukların bir başkası vardır; temeller saydamdır ve donatı tüp olarak çizilir. Delikler koyu tıkaçlar olarak görünür; ağız kesimleri kesilmiştir.

Dönmek, kaydırmak ve yakınlaştırmak için: [3B görünümde gezinme](topic:navigate-3d).

Model boşken görünüm kısa bir "Bir model başlatın" listesi gösterir. Kaydedilmiş bir model dosyasını açmak için görünümün herhangi bir yerine de bırakabilirsiniz.

## Özellikler paneli (sağda)

Bu panelin gösterdiği şey yaptığınız işe bağlıdır ve başlığı hangisi olduğunu söyler: "Model", "Kiriş yerleştir", "Kiriş b2", "Uç levhası birleşimi", "Taban levhası", "Temel F1", "3 seçili" veya "Yapıştır".

- **Hiçbir şey seçili değil:** modelin bir özeti (elemanlar, birleşimler, temeller, parçalar, işaretler, cıvatalar, çelik ve donatı ağırlığı, ızgaralar, seviyeler).
- **Bir yerleştirme aracı açık:** sonraki parçanın seçenekleri (profil, malzeme, konum, dönüş ve kolonlar için {{ui:Şu seviyeye kadar}}), seçilen profilin bir özeti ve görünümde tıklamadan yerleştirmek için bir {{ui:Izgaraya göre ekle}} formu.
- **Bir eleman seçili:** adı, profili, malzemesi, konumu, dönüşü, iki ucunun koordinatları, işaretleri, kesim boyu ve ağırlığı, delikleri ve ağız kesimleri ve birleşimler, imalat çizimi ve {{ui:Sil}} için düğmeler.
- **Bir birleşim seçili:** her levha, cıvata ve kaynak ayarı, ürettiği cıvatalar ve kaynak, uyarıları ve {{ui:Benzerlere uygula}}.
- **Bir temel seçili:** konumu ve boyutu, alt hasır, bekleme donatıları ve kullandığı donatı işaretleri.
- **Birkaç şey seçili:** her türden kaç eleman, birleşim ve temel olduğu, çelik ağırlıkları ve {{ui:Kopyala}}, {{ui:Çoğalt}} ve {{ui:Sil}}.
- **Yapıştırma:** panoda ne olduğu ve yazılan bir kaydırmayla ya da listelerden seçtiğiniz bir ızgara kesişimine yapıştırma formları.

Sayı alanları {{key:Enter}} tuşuna bastığınızda veya alandan çıktığınızda etki eder. Her değişiklik geri alabileceğiniz bir adımdır.

## Rapor sekmeleri (altta)

- {{ui:Sorunlar}}: DetailCraft'ın oluşturamadığı veya denetlemenizi istediği her şey, her satırda bir {{ui:Seç}} düğmesiyle. Sekme sayıyı parantez içinde gösterir.
- {{ui:Malzeme listesi}}: parçalar, montajlar ve cıvatalar ile ankraj çubukları, ağırlıklar ve bir {{ui:CSV indir}} bağlantısıyla. O parçayı seçmek için bir parça işaretine tıklayın.
- {{ui:Büküm listesi}}: her temeldeki her donatı işareti, bir {{ui:CSV indir}} bağlantısıyla.

Bir sekmeye odaklanıldığında {{key:Left}} ve {{key:Right}} sekmeler arasında geçer.

## Durum çubuğu

Alttaki çubuğun üç parçası vardır: yerleştirirken işaretçinin altındaki ızgara kesişimi, en son ileti (az önce ne olduğu veya bir şeyin neden reddedildiği) ve parçaların, cıvataların, çelik ağırlığının ve donatı ağırlığının güncel toplamları. Bir eylem hiçbir şey yapmıyor gibi göründüğünde önce buradaki iletiyi okuyun.

Modelde kaydetmediğiniz değişiklikler varken tarayıcı sekmesi başlığı bir noktayla (•) başlar.

## Dar bir ekranda

Yaklaşık 760 piksel genişliğin altında sütunlar üst üste dizilir: araç çubuğu, görünüm, durum çubuğu, {{ui:Özellikler}}, rapor sekmeleri, sonra en son {{ui:Model}} paneli. Onlara ulaşmak için sayfayı kaydırın. DetailCraft bir masaüstü veya dizüstü ekranı için düzenlenmiştir; telefon bakmak için çalışır, detaylandırma için değil.
