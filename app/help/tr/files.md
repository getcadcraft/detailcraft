---
title: Dosyaları aç, kaydet ve dışa aktar
summary: DetailCraft model dosyası, yazdığı her dışa aktarma, dosyaların gittiği yer ve tarayıcıya ve bağlantıya göre neyin değiştiği.
keywords: aç, kaydet, dışa aktar, indir, dosya, json, ifc, nc1, dstv, csv, pdf, zip, biçimler, içe aktar
from: 6fbc8e8f
---

DetailCraft'ın kendi dosyası olan model ile beş dışa aktarma vardır. Her kayıt ve her dışa aktarma bir indirmedir. Hiçbir şey yüklenmez ve hiçbir şey bir sunucuda tutulmaz.

## Model dosyası

DetailCraft modeli `<name>.detailcraft.json` olarak kaydedilir; burada `<name>`, {{ui:Model}} panelindeki model adıdır. Izgaraları, seviyeleri, elemanları (delikleri ve ağız kesimleri ile birlikte), birleşimleri ve bunların ayarlarını, temelleri ve özel profillerinizi tutar.

Parçalar, işaretler, cıvatalar, kaynaklar ve donatılar kaydedilmez: DetailCraft bunları her açıldığında modelden yeniden hesaplar. Model dosyasının küçük olmasının nedeni budur.

### Kaydet

1. {{ui:Model}} panelinin üstündeki {{ui:Name}} alanına bir ad yazın.
2. {{ui:File}} grubunda {{ui:Save}} seçeneğini belirtin veya {{key:Mod+S}} tuşlarına basın.
3. Tarayıcı `<name>.detailcraft.json` dosyasını indirir. Durum çubuğu "Kaydedildi … (indirildi)" yazar ve tarayıcı sekmesi başlığının başındaki nokta kaybolur.

Her kayıt yeni bir indirmedir. Tarayıcı açtığınız dosyanın üzerine yazmaz; ayarlarına bağlı olarak adın sonuna numara ekler, örneğin `Frame (1).detailcraft.json`, ya da nereye kaydedileceğini sorar. Sürümlerinizi, indirilen dosyaların adını değiştirerek saklayın.

:::chromium
Chrome ve Edge, tarayıcının indirme ayarlarında **Her dosyayı indirmeden önce nereye kaydedileceğini sor** seçeneği açık değilse dosyaları İndirilenler klasörüne kaydeder. Her seferinde klasör ve dosya adı seçmek istiyorsanız bu seçeneği açın.
:::

:::firefox
Firefox dosyaları İndirilenler klasörüne kaydeder; ayarlarında **Dosyaları nereye kaydedeceğimi her zaman sor** seçeneği açıksa her seferinde sorar.
:::

:::safari
Safari dosyaları İndirilenler klasörüne kaydeder. Klasörü değiştirmek için **Safari, Ayarlar, Genel, Dosya indirme konumu** yolunu açın.
:::

### Aç

1. {{ui:File}} grubunda {{ui:Open}} seçeneğini belirtin veya {{key:Mod+O}} tuşlarına basın.
2. Bir `.detailcraft.json` dosyası seçin.

Ya da dosyayı {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticiniz}} içinden sürükleyip görünümün üzerine bırakın. Sürüklerken görünüm "Açmak için bir DetailCraft modeli bırakın" yazar.

Açık modelde kaydedilmemiş değişiklikler varsa DetailCraft önce sorar: {{ui:Cancel}}, {{ui:Discard changes}} veya {{ui:Save first}}.

DetailCraft, bir dosyayı kullanmadan önce her alanını denetler. Kullanamadığı her şey dışarıda bırakılır ve durum çubuğu nedenini bildirir; örneğin "2 eleman geçerli değildi ve dışarıda bırakıldı." Daha yeni bir DetailCraft ile kaydedilmiş model, yarım yanlış açılmak yerine bir iletiyle reddedilir.

### Neyi açar

DetailCraft'ın kendi model dosyalarını (`.json`, en çok 50 MB) ve IFC dosyalarını (`.ifc`, IFC2X3 veya IFC4, en çok 200 MB) açar. Bir IFC dosyası, açıldığında veya {{ui:Import IFC}} ile içe aktarıldığında kirişleri, kolonları, elemanları, levhaları, ızgaraları ve seviyeleriyle yeni bir model olur; delikler ve ağız kesimleri içinde kesilir, cıvataları ise serbest cıvata olarak gelir. Neyin dışarıda bırakıldığını bir rapor listeler. Bkz. [IFC dışa aktarma](topic:ifc-export#import). DWG, DXF veya başka bir detaylandırma programının modelini henüz açmaz; denerseniz "DetailCraft kendi modellerini (.detailcraft.json) ve IFC dosyalarını (.ifc) açar." yazar.

## Kaybolan çalışma, son dosyalar, masaüstü uygulaması

- Kaydetmediğiniz değişiklikler varken DetailCraft bu tarayıcıda bir kopya tutar. Kaydetmeden önce sekme ya da tarayıcı kapanırsa, DetailCraft'ı bir sonraki açışınızda **Çalışmanızı kurtarın?** diye sorar: kopyayı kurtarın ya da bırakın. Bkz. [Çalışmanızı kurtarın](common:recover).
- Tarayıcı DetailCraft'ın bunları yeniden açmasına izin verdiğinde, son açtığınız modeller başlangıç ekranında listelenir; yeniden açmak için birine tıklayın.
- Masaüstü uygulamasında {{ui:Save}} modeli açtığınız dosyaya geri yazar (tarayıcıda bir kopya indirir). Bir DetailCraft modeline ya da IFC dosyasına çift tıklamak onu DetailCraft'ta açar.

## Dışa aktarmalar

Tüm dışa aktarmalar model adını kullanır. Bunları {{ui:Output}} grubunda seçin.

| Düğme | Dosya | İçeriği |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: katlar, ızgaralar, her çelik parçası profil ekstrüzyonu olarak delikleri ve ağız kesimleri ile, montajlar, cıvatalar ve angkraj çubukları, temeller ve her donatı çubuğu. Bkz. [IFC dışa aktarma](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Parça işareti başına bir DSTV `.nc1` dosyası. Bkz. [NC dosyalarını atölyeye gönderin](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tek dosyada üç liste: parçalar, montajlar, cıvatalar ve angkraj çubukları. Bkz. [İşaretler ve malzeme listesi](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Temellerdeki her donatı işareti. Bkz. [Temeller ve donatı](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` her parça işareti için bir sayfa tutar; {{ui:Download this sheet}} gösterilen sayfayı verir (başka bir boyut seçmediyseniz A3). Bkz. [İmalat çizimleri yapın](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` veya `.dxf`, `<name> drawings DWG.zip` (ya da `DXF.zip`) içinde birkaçı | Seçtiğiniz sayfa boyutundaki planlar, görünüşler ve montaj çizimleri; DWG ve DXF tam boyutta, kağıtta 1 birim = 1 mm. Bkz. [Genel yerleşim ve montaj çizimleri](topic:drawings). |

### CSV dosyaları hakkında notlar

- Elektronik tablo programlarının aksanlı karakterleri doğru okuması için dosyalar bayt sırası işaretiyle (byte-order mark) başlar.
- `=`, `+`, `-` veya `@` ile başlayan (ve düz bir sayı olmayan) hücreye başta bir kesme işareti eklenir; böylece elektronik tablo bunu hiçbir zaman formül olarak çalıştırmaz.
- Uzunluklar milimetre, ağırlıklar kilogramdır.

### PDF hakkında notlar

PDF içindeki metin standart Helvetica yazı tipini kullanır. Sahip olmadığı karakterler (Batı Avrupa kümesinin dışındakiler) "?" olarak basılır ve durum çubuğu kaç tane olduğunu bildirir.

## Birimler

DetailCraft baştan sona milimetre ile çalışır: ızgaralar, seviyeler, koordinatlar, profiller, delikler ve her dışa aktarma. Profil adları yayımlandığı biçimini korur (W12x50 bir ABD tanımıdır, boyutları mm olarak gösterilse de). Henüz inç (in) girişi yoktur.

## Çevrimiçi ve çevrimdışı

Açma, kaydetme ve dışa aktarma tarayıcınızda olur; DetailCraft yüklendikten sonra bağlantı olsun olmasın aynı çalışır.

Daha sonra bağlantısız kullanmak için, çevrimiçiyken uygulama çubuğunda {{ui:Save for offline}} seçeneğini belirtin. Düğme "3 / 20 kaydediliyor" gibi sayarak ilerler ve sonra {{ui:Offline ready}} yazar. Kaydedilen kopya 3B grafik kitaplığını (yaklaşık 2.6 MB) ve bu yardımı içerir; bu yüzden kaydedildikten sonra 3B görünüm, her dışa aktarma ve yardım çevrimdışı çalışır. Ayrıntılar ve hâlâ bağlantı gerektirenler: [Çevrimdışı çalışma](common:offline).

:::offline
Çevrimdışısınız. Uygulama çubuğunda {{ui:Offline ready}} yazıyorsa açma, kaydetme ve dışa aktarma her zamanki gibi çalışır. Yazmıyorsa bu sekmeyi açık tutun, yeniden çevrimiçi olana kadar yenilemeyin ve modelinizi şimdi kaydedin.
:::

Bulut kaydı henüz kullanılamıyor ve henüz masaüstü sürümü yok. `.detailcraft.json` dosyalarınızı, diğer çalışma dosyalarınızı yedeklediğiniz gibi yedekleyin. Daha fazlası: [Dosyalarınız nereye gider](common:your-files).

## Kaydedilmemiş çalışma

DetailCraft modeli yalnızca açık sekmede tutar. Kaydedilmemiş değişikliklerle sekmeyi kapatır ya da yenilerseniz tarayıcı sayfadan ayrılıp ayrılmayacağınızı sorar; metin tarayıcının kendi metnidir. {{key:Mod+S}} ile sık sık kaydedin.
