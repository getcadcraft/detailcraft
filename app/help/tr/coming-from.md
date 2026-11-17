---
title: Diğer detaylandırma yazılımlarından geçiş
summary: Tam bir detaylandırma paketinin alışkanlıklarının DetailCraft'a nasıl karşılık geldiği ve deneyimli detaylandırıcıları şaşırtan farklılıklar.
keywords: geçiş, taşıma, alışılmış, iş akışı, karşılaştırma, farklılıklar, numaralandırma, bileşenler, katalog, çizimler, alışkanlıklar
from: 39639a5d
---

Tekla Structures ile detaylandırıyorsanız DetailCraft'ın çoğu size tanıdık gelecektir: ızgaralar, seviyeler, bir katalogdan profiller, parçalar ve montajlar, birleşimler, numaralandırma, NC dosyaları, IFC. Ölçek çok farklıdır: Tekla Structures tam bir üretim sistemidir, DetailCraft ise baştan sona birkaç işi yapan küçük ve erken aşamada bir tarayıcı uygulamasıdır. Bu sayfa alışkanlıklarınızın nerede geçerli olduğunu ve nerede olmadığını gösterir.

:::tip
Tekla Structures'ın şeridini biliyorsanız, {{ui:Ayarlar}} › {{ui:DetailCraft}} › {{ui:Menüler, tuşlar ve fare}} içinden {{ui:Çelik şerit}} menü stilini seçin: Modelleme, Detaylandırma, Düzenle, Çizimler, İmalat ve Görünüm sekmeleri ve orta düğme kaydırır. AutoCAD'den geliyorsanız ve komut yazmayı seviyorsanız, {{ui:Klasik çizim}} bir komut satırı ekler (BEAM, COLUMN, ENDPLATE, ZOOM …). Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).
:::

## Hızlı eşleştirme

| Alıştığınız | DetailCraft'ta |
|---|---|
| Koordinatlı ızgaraları bir ızgara iletişim kutusunda oluşturmak | Sol paneldeki {{ui:Izgaralar}}: mutlak koordinatlar değil, etiketler ve çizgiler arası aralıklar. Numaralı çizgiler bir yönde, harfli çizgiler diğer yönde uzanır |
| Seviyeleri ızgara Z koordinatları olarak | Ayrı bir {{ui:Seviyeler}} listesi: her satır için ad ve kot; {{ui:Seviyeleri uygula}} ile uygulanır |
| Yakalamalarla istediğiniz yerde nokta seçmek | Tıklamalar yalnızca ızgara kesişimlerine yapışır. Izgara dışı noktalar bir elemanın {{ui:Uçlar (x, y, z mm)}} alanına yazılır |
| Kolon, kiriş ve levha komutları | {{ui:Kolon}} ({{key:C}}), {{ui:Kiriş}} ({{key:B}}), {{ui:Çapraz}} ({{key:R}}), {{ui:Levha}} ({{key:P}}), {{ui:Temel}} ({{key:F}}) |
| Parça özellikleri iletişim kutusu (parçaya çift tıklama) | Bir kez tıklayın: sağdaki {{ui:Özellikler}} paneli her zaman canlıdır; iletişim kutusu ve Değiştir veya Uygula düğmesi yoktur |
| Düzlemde konum, dönme ve derinlik ayarları | {{ui:Konum}} (çelik üstü, ortalı veya çizgide alt) ve {{ui:Dönme (°)}}. Ayrı yatay ofsetler yoktur |
| Profil kataloğu | Yayımlanmış 2.311 boyutun sabit bir listesi (AISC W, S, C, L, HSS, Pipe; Avrupa IPE, HEA, HEB, UPN; İngiliz UB, UC, PFC, EA, UEA, SHS, RHS, CHS ve soğuk biçimlendirilmiş içi boş kesitler), ayrıca parametrik levhalar ve kendi {{ui:Özel profil}} kesitleriniz |
| Malzeme kataloğu | Bir listede yedi sınıf: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Bir birleşim bileşenini ve iletişim kutusunu uygulamak | Kirişi seçin, {{ui:Uç levhaları}} seçeneğini seçin. Ayarlar {{ui:Özellikler}} panelinde görünür. Yalnızca iki birleşim vardır (uç levhası kolon başlığına, taban levhası) |
| Otomatik birleşim veya bir birleşimi benzer birleşimlere kopyalamak | Bir birleşim seçin ve {{ui:Benzerlere uygula (n)}} seçeneğini seçin |
| Serilerle ve başlangıç numaralarıyla numaralandırma | Komut yoktur: işaretler her değişiklikten sonra kendiliğinden güncellenir; sabit önekler c, b, br, p ve C, B, BR, P |
| Cıvata ve delik iletişim kutuları | Delikler yüzeye ve konuma göre yazılır. Cıvatalar yalnızca birleşimlerden gelir |
| Kesme, uyum ve çokgen kesme araçları | Ağız kesimleri (üst veya alt, iki uçta) yalnızca I profillerinde. Birleşim geri kesmeleri otomatiktir |
| Raporlar ve şablonlar | Alttaki sekmelerde üç sabit rapor ve CSV indirmeleri |
| Çizim oluşturma ve çizim listesi | Parça işaretine göre bir atölye çizimi; hepsi aynı anda yapılır, önce önizlenir, sonra tek bir PDF olarak veya sayfa sayfa indirilir. Hiçbir şey saklanmaz veya düzenlenmez |
| NC dosyası dışa aktarımı | {{ui:NC dosyaları}}: parça işaretine göre bir DSTV dosyası; yalnızca I profiller ve levhalar, zipli |
| IFC dışa aktarımı | {{ui:IFC}}: tüm modelin IFC4'ü, donatı ile |
| Herhangi bir betonarme parçada donatı | Donatı yalnızca dikdörtgen tekil temellerde, ABD çubuk boyutlarıyla, alt donatı ve bekleme donatısıyla |
| Bir proje klasöründe, çok kullanıcılı kaydedilen model | İndirdiğiniz tek bir `.detailcraft.json` dosyası. Tek kullanıcı, bilgisayarınızda |
| Geri alma geçmişi | {{key:Mod+Z}} ve {{key:Mod+Y}}, 200 adıma kadar; başka bir model açana veya başlatana kadar tutulur |

## Sizi şaşırtan farklılıklar

### İşaretler kendiliğinden değişir

Numaralandırma adımı yoktur. İşaretler her değişiklikten sonra yeniden hesaplanır, bu yüzden her zaman güncel olurlar; ama yeniden de numaralanabilirler: bir kolon eklersiniz ve dünkü c3 artık c4 olabilir. Eski işaretleri tutan bir "numaralandırma geçmişi" yoktur. Modeli bitirin, sonra malzeme listesini (BOM), NC dosyalarını ve atölye çizimlerini birlikte, kaydedilmiş tek bir dosyadan çıkarın.

### Orta fare düğmesi yakınlaştırır; kaydırmaz

3B görünümde: sol sürükleme döndürür, sağ sürükleme kaydırır, tekerlek yakınlaştırır ve orta düğmeyle sürüklemek de yakınlaştırır. {{key:Shift}} tutarak sol sürükleme de kaydırır. Tekerlek, işaretçiye değil görünümün ortasına doğru yakınlaştırır. Dönme merkezi seçimi yoktur: model görünümün ortası etrafında döner. Bkz. [3B görünümde gezinin](topic:navigate-3d).

### Kolonlar varsayılan olarak tek yöne bakar

0 dönmede bir kolonun başlıkları numaralı ızgara yönü boyunca uzanır. Harfli ızgara çizgileri arasında uzanan kirişler gövdeye bağlanır ve uç levhaları orada reddedilir ("Kolon gövdesine bağlanan kirişler henüz yapılmadı"). Bağlantı eklemeden önce bu kolonları 90° çevirin.

### Görünüşler yalnızca harfli çizgilerde

{{ui:Görünüş}} yalnızca harfli ızgara çizgileri boyunca bakar. Numaralı çizgiler boyunca görünüm yoktur, kaydedilmiş görünüm ve çalışma düzlemi de yoktur. Numaralı çizgilerdeki çerçeveler için {{ui:3B}} veya {{ui:Izgaraya göre ekle}} kullanın.

### Seçim, kopyalama ve taşıma

{{key:Shift}}+tıklama veya {{key:Mod+A}} ile birkaç parça seçin, sonra bunları kopyalayın, kesin, yapıştırın (bir ızgara kesişimine, yazılmış bir ofsete veya olduğu yere) ve çoğaltın; birleşimler de dahil ([Kopyala, yapıştır ve çoğalt](topic:copy-paste)). Pencere seçimi, seçim filtresi, taşıma, aynalama veya dizi yoktur; özellikler {{ui:Özellikler}} panelinde tek tek elemanlar için değiştirilir.

### Izgaralar elemanları beraberinde sürüklemez

Izgara aralığını değiştirdiğinizde elemanlar koordinatlarını korur; ızgara çizgileriyle hiçbir şey hareket etmez. Çelik yerleştirmeden önce ızgarayı değiştirin ya da sonra her elemanın uç koordinatlarını düzenleyin.

### Birleşimler tasarlanmaz

İki birleşim, verdiğiniz sayılardan levhaları, delikleri, cıvataları ve kaynakları yerleştirir. Hiçbir tasarım denetimi yoktur; yalnızca kenar ve aralık uyarıları vardır (EN 1993-1-8 Tablo 3.3'ten).

### Delikler 3B görünümde kesilmez

Delikler koyu tapalar olarak görünür. NC dosyalarında, atölye çizimlerinde ve IFC dosyasında gerçek deliklerdir. Ağız kesimleri görünümde kesilir.

### Ağırlıklar brüttür

Çelik ağırlığından delikler veya ağız kesimleri düşülmez; cıvata ağırlığı dahil değildir.

### Yalnızca milimetre

Her şey milimetre olarak yazılır ve gösterilir; AISC profillerinde bile. Profil adları yayımlanmış biçimlerini korur (W12x50, HSS6x6x1/4).

### Yönetilecek çizim yok

Çizim listesi, çizim düzenleyicisi, genel yerleşim veya montaj çizimi yoktur. Bir atölye çizimi istediğinizde oluşturulur ve indirilir; değiştirmek için modeli değiştirin ve yeniden oluşturun.

### Bir tarayıcıda çalışır

Kaydetme bir dosya indirir. Tarayıcının kendisine ayırdığı klavye kısayolları kullanılamaz. Modelleriniz bilgisayarınızdan asla çıkmaz: bkz. [Dosyalarınızın nereye gittiği](common:your-files).

## Mevcut yazılımınızda ne yapmaya devam etmelisiniz

Bugün DetailCraft küçük çerçeveler, bir fikri denemek, öğretmek ya da basit kiriş ve kolon işleri için NC dosyaları ve atölye çizimleri üretmek için uygundur. Karmaşık birleşimleri, genel yerleşim çizimlerini, montaj çizimlerini, çok kullanıcılı projeleri ve [Henüz yapılmayanlar](topic:not-built-yet) altında listelenen her şeyi şu anda kullandığınız yazılımda tutun.
