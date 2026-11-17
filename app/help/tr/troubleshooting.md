---
title: Sorun giderme
summary: DetailCraft iletilerinin ne anlama geldiğini ve ne yapmanız gerektiğini; eksik 3B görünümden oluşturulamayan birleşimlere kadar.
keywords: sorun, hata, çalışmıyor, yardım, düzeltme, ileti, reddedildi, webgl, boş, uyarı, yapılamıyor, sorun
from: f8c3b2b1
---

Çoğu reddetme, ekranın altındaki durum çubuğunda veya {{ui:Sorunlar}} sekmesinde açıklanır. Önce bunları okuyun. Aşağıdaki iletiler DetailCraft'ın gösterdiği biçimiyle alıntılanmıştır.

## 3B görünüm eksik

**"Bu tarayıcı 3B grafikleri (WebGL) başlatamadı. Model, raporlar ve dışa aktarmalar yine de çalışır."**

Tarayıcı, DetailCraft'ın 3B çizimde kullandığı WebGL'i başlatamadı.

1. Tarayıcıyı en son sürümüne güncelleyin.
2. Donanım hızlandırmayı açın ve tarayıcıyı yeniden başlatın (aşağıya bakın).
3. Grafik sürücünüzü güncelleyin veya başka bir tarayıcı deneyin. Uzak masaüstleri ve sanal makinelerde WebGL çoğu zaman bulunmaz.
4. Bu arada çalışmaya devam edebilirsiniz: elemanları {{ui:Izgaraya göre ekle}} formuyla yerleştirin, raporları okuyun ve dışa aktarın. Yalnızca görünümde tıklamak WebGL gerektirir.

:::chromium
Donanım hızlandırmayı açmak için **Ayarlar, Sistem** bölümünü açın, **Mümkün olduğunda grafik hızlandırmasını kullan** seçeneğini açın ve tarayıcıyı yeniden başlatın.
:::

:::firefox
Donanım hızlandırmayı açmak için **Ayarlar, Genel, Performans** bölümünü açın, **Önerilen performans ayarlarını kullan** seçeneğinin işaretini kaldırın ve **Mümkün olduğunda donanım hızlandırmasını kullan** seçeneğini işaretleyin. Firefox'u yeniden başlatın.
:::

:::safari
Safari'de WebGL varsayılan olarak açıktır. Görünüm hâlâ başlamıyorsa macOS'u güncelleyin ve bir eklentinin onu engellemediğini kontrol edin.
:::

Daha fazlası için: [Tarayıcılar ve bilgisayarlar](common:browsers).

## Görünümde tıklamak bir şey yapmıyor

- **Tıklamanın yakınında kesişim yok.** Yerleştirme araçları yalnızca grid kesişimlerine yapışır. Noktaların dışına tıklamak bir şey yapmaz. Nokta yanana kadar yaklaşın.
- **Araç {{ui:Seç}} ve boş alana tıkladınız.** Bu, seçimi temizler.
- **Sürüklediniz.** Birkaç pikselden fazla aralıklı basıp bırakmak bir sürüklemedir: görünümü döndürür veya kaydırır.
- **Parça kesilmiş.** {{ui:Plan}} ve {{ui:Görünüş}} görünümlerinde kesitin dışındaki çelik gizlenir ve tıklanamaz. {{ui:3B}} görünümüne geçin.
- **Kesişim yanlış seviyede.** {{ui:3B}} görünümünde birden çok seviyedeki kesişimler ekranda üst üste gelebilir; tıklama en yakın olanı alır. {{ui:Plan}} veya {{ui:Görünüş}} görünümünü kullanın.

## Yerleştirme iletileri

| İleti | Ne yapmalı |
|---|---|
| Kolonun ulaşabileceği, Seviye 2'nin üstünde bir seviye yok. Önce bir seviye ekleyin. | {{ui:Seviyeler}} bölümünde bir seviye ekleyin veya daha alt bir seviyeye tıklayın |
| Diğer uç için farklı bir kesişim seçin. | Aynı noktaya iki kez tıkladınız |
| İki uç aynı noktada. | {{ui:Izgaraya göre ekle}} formunda "Başlangıç" ve "Bitiş" seçimleri aynı |
| Elemanları yerleştirmek için bir yönde grid çizgisi ekleyin. | Modelde o yönde grid çizgisi yok |
| Bilinmeyen profil "…" | Profil katalogda veya modelin özel profillerinde yok. Listeden bir tane seçin |
| Bir sayı yazın. | Bir sayı alanı boş bırakıldı veya içinde metin var |

## Birleşimler oluşturulamıyor

### "Bu kiriş bir kolon hattında bitmiyor."

Uç levhaları, kirişin ucunun dikey bir kolonun hattında, alt ve üst uçları arasında tam olarak yer almasını gerektirir (1 mm içinde). Kirişin {{ui:Uçlar (x, y, z mm)}} değerlerini ve kolonun konumunu kontrol edin.

### "Bu kiriş bir kolon gövdesine veya açılı olarak birleşiyor"

Ya da {{ui:Sorunlar}} içinde: "Kolon gövdesine saplanan kirişler henüz yapılmadı: kolonu 90° döndürün veya başka bir birleşim kullanın."

Kiriş kolonun gövdesine saplanır. Kolonu seçin ve {{ui:Dönme (°)}} değerini 90 yapın, sonra yeniden deneyin. Eğik birleşimler henüz yapılmadı.

### "Uç levhaları yalnızca düz kirişler için yapılır (bu kiriş eğimli)."

Kirişin her iki ucu aynı yükseklikte olmalıdır.

### "Uç levhaları kirişin dik olmasını ister (dönme 0)."

Kirişin {{ui:Dönme (°)}} değerini 0'a geri getirin.

### "Uç levhaları bir I profilli kiriş gerektirir." / "Uç levhaları bir I profilli kolon gerektirir."

Yalnızca I profiller (W, IPE, HEA, HEB veya özel bir I) uç levhası alır.

### "Kiriş ucu artık kolon hattında değil."

Birleşimi ekledikten sonra kirişi veya kolonu taşıdınız. Geri taşıyın veya birleşimi silin.

### "Birleşimler bu elemanı hiçbir şeye indirgedi."

Her iki uçtaki birleşimler elemanı uzunluğundan daha fazla kısaltır; örneğin iki derin kolon arasındaki çok kısa bir kiriş. Elemanın uçlarını ve levha kalınlığını kontrol edin.

### "Bunun gibi bağlantısı olmayan başka birleşim yok …"

{{ui:Benzer}} yalnızca aynı kiriş profili, kolon profili ve birleşim türüne sahip (bir flanşa birleşen kiriş), henüz birleşimi olmayan birleşimlere kopyalar.

### "Her iki uçta zaten birleşim var." / "Bu kolonun zaten bir taban levhası var."

Mevcut birleşimi seçerek değiştirin veya önce silin.

## Sorunlar sekmesindeki uyarılar

Uyarılar bir birleşimin veya temelin oluşmasını durdurmaz; sizden kontrol etmenizi ister. Kenar ve aralık uyarıları EN 1993-1-8 Tablo 3.3 asgarilerini kullanır (kenar 1.2 × delik, aralık 2.2 × delik, hat aralığı 2.4 × delik). Projeniz başka kurallar kullanıyorsa uyarı geçerli olmayabilir; DetailCraft birleşimleri tasarlamaz.

"bir delik parçanın ucunun dışında", bir deliğin x değerinin 0'dan küçük veya kesim uzunluğundan büyük olduğu anlamına gelir. x'in, birleşimler parçayı kestikten sonra kesim başlangıcından ölçüldüğünü unutmayın.

## Temel değişiklikleri reddedilir

| İleti | Ne yapmalı |
|---|---|
| Pah payı bu temelde donatı çubukları için yer bırakmıyor. | Temeli büyütün veya pah payını küçültün |
| Temel, pah payının içinde iki donatı katı için çok sığ. | Daha derin yapın veya pah payını azaltın |
| Bekleme donatıları 75 mm pah payıyla temelin içine sığmıyor. | Daha az bekleme donatısı, daha sık aralık veya daha büyük bir temel |
| Donatı aralığı 50–1000 mm olmalıdır. | Bu aralıkta bir değer yazın |
| Uzunluk 300–50000 mm olmalıdır. | Temel boyutlarının sınırları vardır: uzunluk ve genişlik 300 ile 50000, derinlik 150 ile 10000 arası |

## Grid ve seviyeler reddedilir

| İleti | Ne yapmalı |
|---|---|
| Numaralı grid'ler: her iki çizgi arasına bir aralık verin (4). | Aralıkları sayın: beş çizgi dört aralık demektir |
| Harfli grid'ler: aralıklar pozitif milimetre olmalıdır. | Sıfır, negatif veya metin olmaz |
| Numaralı grid'ler: grid etiketleri farklı olmalıdır. | İki çizginin etiketi aynı |
| Her yönde en fazla 60 grid çizgisi. | Modeli bölün |
| En az bir seviye tutun. | Her seviye satırını kaldırdınız |
| Her seviyenin bir adı olmalı. / İki seviyenin adı "…". | Her seviyeye farklı bir ad verin |

## Dosya açılamıyor

| İleti | Neden |
|---|---|
| DetailCraft kendi modellerini açar (.detailcraft.json). IFC içe aktarma henüz yapılmadı. | Dosya bir `.json` dosyası değil |
| Bu bir DetailCraft modeli değil (JSON değil). | Dosya bozuk ya da başka bir JSON |
| Bu bir DetailCraft modeli değil. | Başka bir programın JSON dosyası |
| Bu model daha yeni bir DetailCraft (biçim 2) ile kaydedildi. | Onu kaydeden daha yeni DetailCraft ile açın |
| Bu dosya bir DetailCraft modeli olamayacak kadar büyük. | 50 MB'ın üzerinde |

Dosya "2 eleman geçerli değildi ve bırakıldı." gibi uyarılarla açılırsa modelin geri kalanı sağlamdır. Neyin bırakıldığını kontrol edene kadar özgün dosyanın üzerine kaydetmeyin.

## Dışa aktarmalar

| İleti | Neden |
|---|---|
| Henüz dışa aktarılacak bir şey yok. | Boş bir modelle {{ui:IFC}} |
| NC dosyası yazılacak I profil veya levha parçası yok. | Modelde yalnızca U, L veya boru profiller var |
| Yazılmadı (şimdilik yalnızca I profiller ve levhalar): … | Bu işaretler I profil veya levha değil; diğerleri yazıldı |
| Temel yok, dolayısıyla çizelgelenecek donatı yok. | Temel olmadan {{ui:Büküm}} |
| … PDF yazı tipinin dışındaki karakter(ler) "?" olarak yazıldı. | Model adında veya bir sınıfta PDF yazı tipinde bulunmayan karakterler var |

{{ui:İmalat çizimi}} soluk: modelde henüz parça yok.

## İndirmeler görünmüyor

Her kaydetme ve dışa aktarma bir tarayıcı indirmesidir. Tarayıcınızın indirme listesini kontrol edin. Tarayıcı birkaç dosyayı indirmeden önce soruyorsa veya bu siteden indirmeleri engelliyorsa izin verin. Safari'de araç çubuğundaki indirme düğmesine bakın.

## Tuşlar işe yaramıyor

- İmleç bir metin veya sayı alanındaysa araç tuşları ve {{key:Delete}} orada yok sayılır, böylece yazabilirsiniz. {{key:Tab}} tuşuna basın veya görünüme tıklayın.
- Bir iletişim kutusu açık: önce onu kapatın.
- Tarayıcı klavyeyi tutuyor (örneğin adres çubuğu): DetailCraft'ın içine tıklayın.
- {{key:Ctrl+Shift+F}} bir Mac'te bile Control kullanır.

## Çevrimdışı sorunlar

Uygulama çubuğundaki {{ui:Çevrimdışı için kaydet}} düğmesi, çevrimdışı kopyanın durumunu gösterir. Kaydetmenin nasıl çalıştığı: [Çevrimdışı çalışma](common:offline).

| Düğme şunu gösterir | Ne anlama gelir | Ne yapmalı |
|---|---|---|
| {{ui:Çevrimdışı için kaydet}} | Bu tarayıcıda henüz çevrimdışı kopya yok | Çevrimiçiyken seçin |
| Saving 5 of 20 | Kaydetme sürüyor | {{ui:Çevrimdışı hazır}} yazana kadar bekleyin; sekmeyi açık tutun |
| {{ui:Çevrimdışı hazır}} | DetailCraft, 3B görünümü, her dışa aktarma ve bu yardım bağlantı olmadan çalışır | Bir şey yapmayın. Tıklarsanız {{ui:Yeniden kaydet (en yeni sürümü al)}} veya {{ui:Çevrimdışı kopyayı kaldır}} seçenekleri çıkar |
| {{ui:Kaydedilemedi}} | Bazı dosyalar indirilemedi | Bağlantınızı kontrol edin ve yeniden denemek için tıklayın |
| {{ui:Çevrimdışı kullanım yok}} | Bu pencere çevrimdışı kopya tutamaz: özel pencereler ve bazı yönetilen bilgisayarlar bunu engeller | Normal bir pencere kullanın veya çevrimiçi çalışın |

Çevrimdışıyken düğme {{ui:Çevrimdışı hazır}} yazmıyorsa sekmeyi yeniden yüklemeyin veya kapatmayın: yüklenmiş olanlar çalışmaya devam eder. Modelinizi {{key:Mod+S}} ile kaydedin ve yeniden çevrimiçi olana kadar bekleyin.

## Kaydedilmemiş çalışma

Tarayıcı sayfadan ayrılıp ayrılmayacağınızı sorarsa DetailCraft'ın kaydedilmemiş değişiklikleri vardır. Sayfada kalmayı seçin, sonra {{key:Mod+S}} tuşuna basın. Sekme kapandıktan sonra DetailCraft bir modeli geri getiremez.

## Hâlâ çözemediniz mi

Ne yaptığınızı ve tam iletiyi not edin, ardından [destek sayfası](https://getcadcraft.com/support) üzerinden bize bildirin.
