---
title: Dosyaları açma, kaydetme ve dışa aktarma
summary: DetailCraft model dosyası, yazdığı her dışa aktarma, dosyaların nereye gittiği ve tarayıcıya ve bağlantıya göre nelerin farklılaştığı.
keywords: aç, kaydet, dışa aktar, indir, dosya, json, ifc, nc1, dstv, csv, pdf, zip, biçimler, içe aktar
from: bd715ea3
---

DetailCraft'ın kendine ait tek bir dosyası, modeli, ve beş dışa aktarması vardır. Her kayıt ve her dışa aktarma bir indirmedir. Hiçbir şey yüklenmez ve bir sunucuda hiçbir şey tutulmaz.

## Model dosyası

Bir DetailCraft modeli `<ad>.detailcraft.json` olarak kaydedilir; `<ad>`, {{ui:Model}} panelindeki model adıdır. Izgaraları, seviyeleri, elemanları (delikleri ve ağız kesimleriyle), birleşimleri ve ayarlarını, temelleri ve özel profillerinizi içerir.

Parçalar, işaretler, cıvatalar, kaynaklar ve donatılar saklanmaz: DetailCraft bunları her açılışta modelden yeniden hesaplar. Bir model dosyasının küçük olmasının nedeni budur.

### Kaydet

1. {{ui:Model}} panelinin üstündeki {{ui:Ad}} alanına bir ad yazın.
2. {{ui:Dosya}} grubunda {{ui:Kaydet}} seçeneğini seçin veya {{key:Mod+S}} tuşlarına basın.
3. Tarayıcı `<ad>.detailcraft.json` dosyasını indirir. Durum çubuğu "… kaydedildi (indirildi)" der ve tarayıcı sekmesi başlığının başındaki nokta kaybolur.

Her kayıt yeni bir indirmedir. Tarayıcı açtığınız dosyanın üzerine yazmaz; ayarlarına göre adına `Frame (1).detailcraft.json` gibi bir sayı ekler veya nereye kaydedileceğini sorar. İndirmeleri yeniden adlandırarak kendi sürümlerinizi tutun.

:::chromium
Chrome ve Edge, tarayıcının indirme ayarlarında **İndirmeden önce her dosyanın nereye kaydedileceğini sor** açık değilse İndirilenler klasörünüze kaydeder. Her seferinde bir klasör ve dosya adı seçmek istiyorsanız açın.
:::

:::firefox
Firefox İndirilenler klasörünüze kaydeder veya ayarlarında **Dosyaların nereye kaydedileceğini her zaman sor** açıksa her seferinde sorar.
:::

:::safari
Safari İndirilenler klasörünüze kaydeder. Klasörü değiştirmek için **Safari, Ayarlar, Genel, Dosya indirme konumu** bölümünü açın.
:::

### Aç

1. {{ui:Dosya}} grubunda {{ui:Aç}} seçeneğini seçin veya {{key:Mod+O}} tuşlarına basın.
2. Bir `.detailcraft.json` dosyası seçin.

Ya da dosyayı {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticinizden}} sürükleyip görünümün üzerine bırakın. Sürüklerken görünüm "Açmak için buraya bir DetailCraft modeli bırakın" der.

Açık modelin kaydedilmemiş değişiklikleri varsa DetailCraft önce sorar: {{ui:İptal}}, {{ui:Değişiklikleri at}} veya {{ui:Önce kaydet}}.

DetailCraft bir dosyayı kullanmadan önce her alanını denetler. Kullanamadığı her şey dışarıda bırakılır ve durum çubuğu neyi olduğunu söyler, örneğin "2 eleman geçerli değildi ve dışarıda bırakıldı." Daha yeni bir DetailCraft'ın kaydettiği model yarım yamalak açılmak yerine bir iletiyle reddedilir.

### Neleri açar

Kendi model dosyalarını (`.json`, 50 MB'a kadar) ve IFC dosyalarını (`.ifc`, IFC2X3 veya IFC4, 200 MB'a kadar). {{ui:IFC içe aktar}} ile açılan veya getirilen bir IFC dosyası, kirişlerinin, kolonlarının, elemanlarının, levhalarının, ızgaralarının ve seviyelerinin yeni bir modeli olur; içlerine açılmış delikler ve ağız kesimleri ve cıvataları tek tek cıvatalar olarak gelir; bir rapor nelerin dışarıda bırakıldığını listeler. Bkz. [IFC dışa aktarma](topic:ifc-export#import). DWG, DXF veya başka bir detaylandırma programının modelini henüz açmaz; denemek "DetailCraft kendi modellerini (.detailcraft.json) ve IFC dosyalarını (.ifc) açar." iletisini gösterir.

## Kaybolan çalışma, son dosyalar, masaüstü uygulaması

- Modelde kaydetmediğiniz değişiklikler varken DetailCraft bu tarayıcıda bir kopya tutar. Kaydetmeden önce sekme veya tarayıcı durursa, DetailCraft'ı bir sonraki açışınızda **Çalışmanız kurtarılsın mı?** diye sorar: kopyayı kurtarın veya vazgeçin. Bkz. [Çalışmanızı kurtarma](common:recover).
- Son zamanlarda açtığınız modeller, tarayıcı DetailCraft'ın onları yeniden açmasına izin verdiğinde başlangıç ekranında listelenir; yeniden açmak için birine tıklayın.
- Masaüstü uygulamasında {{ui:Kaydet}} modeli açtığınız dosyaya geri yazar (tarayıcıda bir kopya indirir) ve bir DetailCraft modeline ya da IFC dosyasına çift tıklamak onu DetailCraft'ta açar.

## Dışa aktarmalar

Tüm dışa aktarmalar model adını kullanır. Onları {{ui:Çıktı}} grubunda seçin.

| Düğme | Dosya | İçinde ne var |
|---|---|---|
| {{ui:IFC}} | `<ad>.ifc` | IFC4: katlar, ızgaralar, delikleri ve ağız kesimleriyle profil ekstrüzyonu olarak her çelik parça, montajlar, cıvatalar ve ankraj çubukları, temeller ve her donatı. Bkz. [IFC dışa aktarma](topic:ifc-export). |
| {{ui:NC dosyaları}} | `<ad> NC.zip` | Parça işareti başına bir DSTV `.nc1` dosyası. Bkz. [NC dosyalarını imalathaneye gönderme](topic:nc-export). |
| {{ui:Malzeme listesi}} | `<ad> BOM.csv` | Tek dosyada üç tablo: parçalar, montajlar ve cıvatalar ile ankraj çubukları. Bkz. [İşaretler ve malzeme listesi](topic:marks-and-bom). |
| {{ui:Büküm}} | `<ad> bending schedule.csv` | Temellerdeki her donatı işareti. Bkz. [Temeller ve donatı](topic:footings-and-rebar). |
| {{ui:İmalat çizimi}} | `<ad> <işaret>.pdf` | Seçili parça için bir sayfa (başka bir boyut seçmediyseniz A3) (I profilleri ve levhalar). Bkz. [Bir imalat çizimi yapma](topic:shop-drawings). |
| {{ui:Çizimler}} | `<ad> drawings.pdf`, `<ad> <sayfa>.pdf`; `<ad> <sayfa>.dwg` veya `.dxf`, birkaçı `<ad> drawings DWG.zip` (veya `DXF.zip`) içinde | Seçtiğiniz sayfa boyutunda planlar, görünüşler ve montaj çizimleri; DWG ve DXF tam boyutta, kâğıtta 1 birim = 1 mm. Bkz. [Genel yerleşim ve montaj çizimleri](topic:drawings). |

### CSV dosyaları hakkında notlar

- Elektronik tablo programlarının aksanlı karakterleri doğru okuması için bir bayt sırası işaretiyle başlarlar.
- `=`, `+`, `-` veya `@` ile başlayan (ve düz bir sayı olmayan) bir hücreye başa bir kesme işareti konur; böylece bir elektronik tablo onu hiçbir zaman formül olarak çalıştırmaz.
- Uzunluklar milimetre, ağırlıklar kilogramdır.

### PDF hakkında notlar

PDF'teki metin standart Helvetica yazı tipini kullanır. Onda olmayan karakterler (Batı Avrupa kümesinin dışındakiler) "?" olarak yazdırılır ve durum çubuğu kaç tane olduğunu söyler.

## Birimler

DetailCraft baştan sona milimetreyle çalışır: ızgaralar, seviyeler, koordinatlar, profiller, delikler ve her dışa aktarma. Profil adları yayımlanmış biçimlerini korur (W12x50, boyutları mm olarak gösterilse de bir ABD tanımıdır). Henüz imperyal girdi yoktur.

## Çevrimiçi ve çevrimdışı

Açma, kaydetme ve dışa aktarma tarayıcınızda gerçekleşir; bu yüzden DetailCraft yüklendikten sonra bağlantıyla veya bağlantısız aynı çalışırlar.

DetailCraft'ı sonradan bağlantı olmadan kullanmak için çevrimiçiyken uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} seçeneğini seçin. Düğme sayarak ilerler ("Kaydediliyor 3 / 20") ve sonra {{ui:Çevrimdışı hazır}} yazar. Kaydedilen kopya 3B grafik kütüphanesini (yaklaşık 2,6 MB) ve bu yardımı içerir; bu yüzden kaydedildikten sonra 3B görünüm, her dışa aktarma ve yardım çevrimdışı çalışır. Ayrıntılar ve hâlâ bağlantı gerektiren şeyler: [Çevrimdışı çalışma](common:offline).

:::offline
Çevrimdışısınız. Uygulama çubuğu {{ui:Çevrimdışı hazır}} gösteriyorsa açma, kaydetme ve dışa aktarma her zamanki gibi çalışır. Göstermiyorsa bu sekmeyi açık tutun, yeniden çevrimiçi olana kadar yeniden yüklemeyin ve modelinizi şimdi kaydedin.
:::

Bulutta kaydetme henüz mevcut değil ve henüz masaüstü sürümleri yok. `.detailcraft.json` dosyalarınızı diğer çalışma dosyalarınızı yedeklediğiniz gibi yedekleyin. Daha fazlası [Dosyalarınız nereye gider](common:your-files) içinde.

## Kaydedilmemiş çalışma

DetailCraft modeli yalnızca açık sekmede tutar. Kaydedilmemiş değişikliklerle sekmeyi kapatırsanız veya yeniden yüklerseniz tarayıcı sayfadan ayrılıp ayrılmayacağınızı sorar; ifadesi tarayıcının kendisine aittir. {{key:Mod+S}} ile sık kaydedin.
