---
title: Ekranın tanıtımı
summary: DetailCraft'ın her çubuğu, paneli ve sekmesi ekrandaki adıyla ve ne işe yaradığıyla.
keywords: ekran, düzen, araç çubuğu, paneller, özellikler, durum çubuğu, raporlar, arayüz, ui, sekmeler
from: 94f81073
---

DetailCraft, uygulama çubuğunun altındaki tarayıcı penceresini doldurur. Üstten alta: araç çubuğu, sonra üç sütun ({{ui:Model}} paneli, görünüm, {{ui:Properties}} paneli), sonra rapor sekmeleri ve en altta durum çubuğu.

## Uygulama çubuğu

En üstteki ince çubuk modele değil, CadCraft sitesine aittir. Uygulama adını ve sürümünü, {{ui:About DetailCraft}} bağlantısını, bu yardım için {{ui:Help}} (ya da {{key:F1}}) seçeneğini, {{ui:Save for offline}} düğmesini, ekran modu düğmesini ve {{ui:Paper}} / {{ui:Model}} geçişini gösterir.

- {{ui:Save for offline}} DetailCraft'ı, 3B görünümünü ve bu yardımı tarayıcınızda tutar; böylece bağlantı olmadan açılır. Kaydedildikten sonra {{ui:Offline ready}} yazar; ardından tıklayarak {{ui:Save again (get the newest version)}} ya da {{ui:Remove the offline copy}} seçeneklerine ulaşın. Bkz. [Çevrimdışı çalışma](common:offline).
- {{ui:Paper}} açık bir ekran, {{ui:Model}} koyu bir ekran verir. 3B görünüm hemen izler; modelinizde hiçbir şey değişmez.
- Ekran modu düğmesi ve {{key:Ctrl+Shift+F}} normal, tam ekran ve çubukların gizli olduğu tam ekran arasında geçiş yapar. {{key:Ctrl+Shift+F}} her bilgisayarda, Mac dahil, Control tuşunu kullanır. Çubuklar gizliyken geri getirmek için ekranın üst kenarına işaret edin (ya da dokunun). {{key:Esc}} tam ekrandan çıkar.

## Araç çubuğu

Araç çubuğunda beş grup vardır. Bir düğmenin üzerine gelerek ne yaptığını ve kısayolunu görün.

| Grup | Düğmeler | Ne yaparlar |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Yeni bir model başlatır, kayıtlı bir `.detailcraft.json` ya da IFC dosyasını açar, birini kaydeder ya da örnek çerçeveyi açar |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Görünümdeki bir sonraki tıklamanın kullandığı araç |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, ve {{ui:More}} içinde: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Seçili kirişe, kolona ya da çapraz elemana bir birleşim ekler ya da seçili birleşimi ona benzer her birleşime kopyalar |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Düzenlemeler arasında geri ve ileri gider; seçimi kopyalar ve yapıştırır. {{ui:More}} bir menü açar: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} ve {{ui:Select none}}, her biri kısayoluyla |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, ve {{ui:More}} içinde: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Bir dışa aktarmayı indirir ya da çizim sayfalarını açar |

Şu an işlem yapamayan düğmeler ve menü öğeleri soluk görünür; üzerlerine gelindiğinde nedenini söylerler. {{ui:End plates}} seçili bir kiriş, {{ui:Base plate}} seçili bir kolon, {{ui:Similar}} seçili bir birleşim, {{ui:Shop drawing}} parçaları olan bir model, {{ui:Copy}} seçili bir eleman ya da temel ve {{ui:Paste}} kopyalanmış bir şey gerektirir. Bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

## Model paneli (solda)

- {{ui:Model}}: model {{ui:Name}}. Kaydettiğiniz ya da dışa aktardığınız her dosyanın adını verir.
- {{ui:Grids}}: ızgara çizgileri ve aralıkları ile {{ui:Apply grids}}. Bkz. [Izgaraları ve seviyeleri ayarlayın](topic:grids-and-levels).
- {{ui:Levels}}: her seviye için bir satır (ad ve kot, mm cinsinden), {{ui:Add level}} ve {{ui:Apply levels}}.
- {{ui:Custom profile}}: kendi parametrik kesitinizi yapın. Açana kadar kapalıdır.
- {{ui:Part marks}}: modeldeki her parça işareti, profili, uzunluğu ve adediyle. Bir işarete tıklayarak o işaretli ilk parçayı seçin.

{{ui:Grids}}, {{ui:Levels}} ve {{ui:Custom profile}} katlanır: başlıklarına tıklayın.

## Görünüm (ortada)

Görünüm modeli 3B gösterir. Üstünde görünüm çubuğu üç düğme ve bir liste içerir:

- {{ui:3D}}: modelin etrafında serbestçe dönün.
- {{ui:Plan}}: tek bir seviyeye tepeden bakın. Düğmelerin yanında bir seviye listesi belirir. Seviyenin 1.5 m üstündeki her şey kesilir, böylece seviyeyi net görüp tıklayabilirsiniz.
- {{ui:Elevation}}: harfli tek bir ızgara çizgisine (A ızgarası, B ızgarası …) doğrudan bakın. Harfli ızgaraların listesi belirir. Yalnızca o çizgiden 1 m içindeki çelik gösterilir.
- Görünüm çubuğunun sağ ucundaki sığdırma düğmesi tüm modeli gösterecek şekilde yakınlaştırır.

Küçük noktalar her seviyedeki her ızgara kesişimini işaretler. Bir yerleştirme aracı açıkken işaretçiye en yakın nokta yanar ve durum çubuğu onu adlandırır; örneğin "A/2 Seviye 1'de". Renkler eleman türlerini ayırır: kolonlar, kirişler, çaprazlar ve levhaların her biri kendi rengine sahiptir, cıvatalar ve angkraj çubukları başka bir renkte; temeller saydamdır ve donatı tüp olarak çizilir. Delikler koyu tıkaçlar olarak, ağız kesimleri ise kesik olarak görünür.

Görünümde nasıl döndürüleceği, kaydırılacağı ve yakınlaştırılacağı: [3B görünümde gezinin](topic:navigate-3d).

Model boşken görünüm kısa bir "Model başlatın" listesi gösterir. Kayıtlı bir model dosyasını görünümün herhangi bir yerine bırakarak da açabilirsiniz.

## Özellikler paneli (sağda)

Bu panelin gösterdiği şey ne yaptığınıza bağlıdır; başlığı hangisi olduğunu söyler: "Model", "Kiriş yerleştir", "Kiriş b2", "Uç levhası birleşimi", "Taban levhası", "Temel F1", "3 seçili" ya da "Yapıştır".

- **Hiçbir şey seçili değilse:** modelin özeti (elemanlar, birleşimler, temeller, parçalar, işaretler, cıvatalar, çelik ve donatı ağırlığı, ızgaralar, seviyeler).
- **Bir yerleştirme aracı açıksa:** bir sonraki parça için seçenekler (profil, malzeme, konum, dönüş ve kolonlar için {{ui:Up to}}), seçilen profilin özeti ve görünümde tıklamadan yerleştirmek için bir {{ui:Add by grid}} formu.
- **Bir eleman seçiliyse:** adı, profili, malzemesi, konumu, dönüşü, iki ucunun koordinatları, işaretleri, kesim uzunluğu ve ağırlığı, delikleri ve ağız kesimleri, birleşimler, imalat çizimi ve {{ui:Delete}} için düğmeler.
- **Bir birleşim seçiliyse:** her levha, cıvata ve kaynak ayarı, yaptığı cıvatalar ve kaynak, uyarıları ve {{ui:Apply to similar}}.
- **Bir temel seçiliyse:** konumu ve boyutu, alt donatı matı, bekleme donatıları ve kullandığı donatı işaretleri.
- **Birkaç şey seçiliyse:** her türden kaç eleman, birleşim ve temel olduğu, çelik ağırlıkları ve {{ui:Copy}}, {{ui:Duplicate}} ve {{ui:Delete}}.
- **Yapıştırma:** panodaki içerik ve yazılan bir kaymayla ya da listelerden seçilen bir ızgara kesişimine yapıştırma formları.

Sayı alanları {{key:Enter}} tuşuna bastığınızda ya da alandan çıktığınızda uygulanır. Her değişiklik geri alınabilen tek bir adımdır.

## Rapor sekmeleri (altta)

- {{ui:Problems}}: DetailCraft'ın oluşturamadığı ya da sizin kontrol etmenizi istediği her şey; her satırda bir {{ui:Select}} düğmesiyle. Sekme parantez içinde sayıyı gösterir.
- {{ui:Bill of materials}}: parçalar, montajlar, cıvatalar ve angkraj çubukları; ağırlıkları ve bir {{ui:Download CSV}} bağlantısıyla. Bir parça işaretine tıklayarak o parçayı seçin.
- {{ui:Bending schedule}}: her temeldeki her donatı işareti, bir {{ui:Download CSV}} bağlantısıyla.

Bir sekme odaklıyken {{key:Left}} ve {{key:Right}} sekmeler arasında geçer.

## Durum çubuğu

Alt kenardaki çubuk üç bölümden oluşur: yerleştirirken işaretçinin altındaki ızgara kesişimi, en son mesaj (az önce ne olduğu ya da bir şeyin neden reddedildiği) ve parça, cıvata, çelik ağırlığı ve donatı ağırlığının toplamları. Bir işlem hiçbir şey yapmıyor gibi görünürse önce buradaki mesajı okuyun.

Tarayıcı sekmesinin başlığı, kaydetmediğiniz değişiklikler varken bir nokta (•) ile başlar.

## Dar ekranda

Yaklaşık 760 piksel genişliğin altında sütunlar üst üste iner: araç çubuğu, görünüm, durum çubuğu, {{ui:Properties}}, rapor sekmeleri ve en sonda {{ui:Model}} paneli. Onlara ulaşmak için sayfayı kaydırın. DetailCraft bir masaüstü ya da dizüstü ekranı için düzenlenmiştir; telefonda bakmak çalışır, detaylandırma değil.
