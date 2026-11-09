---
title: 0.8 ve 0.8.1 sürümündeki yenilikler
summary: Bir vincin yük tablosundan montaj filmi, bir birleşim otopilotu, donatı sıkışıklık haritası, temel kontrolleri, ahşap ve ince profilli çerçeveleme panelleri, yapılabilirlik ve kaynak erişimi kontrolleri, tedarikçi stoğu, önce ne kırılır, canlı yeniden çözüm, daha fazla beton kontrolü ve 0.8.1 düzeltmeleri.
keywords: yenilikler, neler yeni, sürüm notları, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, montaj, vinç, yük tablosu, film, otopilot, birleşimler, donatı, sıkışıklık, temel, mat, oturma, çerçeveleme, ahşap, ince profil, kesim listesi, yapılabilirlik, kaynak erişimi, tedarikçi, stok, teslim süresi, önce ne kırılır, canlı, beton, sismik, döşeme, diller, asistan
from: 6e33e052
---

Bu, DetailCraft 0.7 ile karşılaştırıldığında 0.8 (1 Kasım 2026) ve 0.8.1 (2 Kasım 2026) sürümlerinde neyin değiştiğidir. 0.7 çelik elemanları kontrol ediyordu; 0.8 kaldırmaları planlar, birleşimleri önerir, temelleri ve donatıyı kontrol eder ve ahşap ile ince profilli duvarları, döşemeleri ve çatıları çerçeveler.

## Yeni

### Montaj

- **Montaj planı ve filmi.** {{ui:Erection}} sekmesinde bir vinç tanımlayın (nerede durduğu, en yüksek kancası, grafikte olmayan bağlama donanımı) ve yük tablosunun satırlarını yazın. DetailCraft modeli bir seferde bir montaj birimine göre, faz sırasına ve kat kat kaldırır; her kaldırmayı yarıçapındaki tabloya ve sizin belirlediğiniz pay ile karşılaştırır. {{ui:Save movie}} çevrimdışı her tarayıcıda, telefonda bile oynayan bir HTML dosyası yazar. Tablonun üzerindeki, dışındaki ya da çok yüksek kaldırmalar {{ui:Problems}} içindedir. Bu sizin sayılarınızdan yapılmış bir plandır, bir kaldırma planı değildir. Bkz. [Montaj planı ve filmi](topic:erection-movie).

### Birleşimler

- **Birleşim otopilotu.** {{ui:Autopilot}} sekmesi birleşimi olmayan her birleşime bakar ve şekillerden bir tane önerir: taban levhaları, kesme levhaları, moment kirişi olarak işaretlediğiniz kirişler için uç levhaları, ekler ve köşe levhaları. Düzgün yayılı yük ya da bir uç kesme kuvveti verin; cıvata sayısı cıvatanın tasarım dayanımını izler. {{ui:Add them all}} önerileri tek bir geri alma adımı olarak ekler. Bunlar gözden geçirilecek başlangıç değerleridir, bir birleşim tasarımı değildir.
- **Yapılabilirlik kontrolleri.** {{ui:Problems}}, bir anahtarın ulaşamadığı cıvatalar, soket için çok yakın cıvatalar, boyut sınırlarının dışındaki köşe kaynakları ve su tutan içi boş kesitler için uyarır. Kaynak erişimi yenidir: bir kaynakçının meşalesinin ulaşamadığı tam çevre köşe kaynağı, önündeki parça ve etkilenen kaynak oranıyla listelenir. Bkz. [Yapılabilirlik kontrolleri](topic:constructability).

### Temeller ve donatı

- **Temel kontrolleri.** {{ui:Foundation}} sekmesi tanımladığınız zemin üzerindeki temelleri, birleşik temelleri ve matları kontrol eder: servis yüklerinden taşıma gücü, kayma ve devrilme; faktörlü yüklerden eğilme, kesme, zımbalama, kenetlenme ve asgari donatı (ACI 318-19). Bir temelin kenarına ya da köşesine yakın kolon, temel kenarının kestiği kesitle kontrol edilir. Oturma zeminin elastisite modülünden hesaplanır; esnek bir mat, bir yatak katsayısından yaylar üzerinde çözülür ve kazık grupları ile istinat duvarlarının kendi panelleri vardır. Kolon yükleri yazılabilir ya da {{ui:Analysis}} sekmesinden alınabilir. Bkz. [Temel kontrolleri](topic:foundation-checks).
- **Donatı sıkışıklık haritası.** {{ui:Congestion}} sekmesi her temelin üstten görünen bir ısı haritasını çizer: donatının betonun aşağı inmesi için çok az yer bıraktığı yerler; net aralık kuralına ve verirseniz en büyük agrega ile vibratör başına göre. Bkz. [Donatı sıkışıklık haritası](topic:rebar-congestion).

### Çerçeveleme ve tedarik

- **Ahşap ve ince profilli çerçeveleme.** {{ui:Framing}} sekmesi duvar, döşeme ve çatı panellerini her parça, bir kesim listesi, satın alınacak stok ve ölçekli bir imalat çizimi ile çerçeveler. {{ui:Place as members}} parçaları modele yerleştirir, {{ui:PDF sheets}} her panel için bir sayfa kaydeder. Boyutlar, aralıklar ve başlıklar sizindir: DetailCraft yükü taşıdıklarını kontrol etmez. Bkz. [Ahşap ve ince profilli çerçeveleme panelleri](topic:framing-panels).
- **Tedarikçi stoğu ve teslim süreleri.** {{ui:Supply}} sekmesi bir tedarikçinin stok listesini (CSV) okur ve kesim listesinin satın aldığı her kesit için stokta yeterli olup olmadığını ve bekleme süresini gösterir. Eksikler ve geç gelen kesitler {{ui:Problems}} içindedir. Hiçbir şey sipariş edilmez. Bkz. [Tedarikçi stoğu ve teslim süreleri](topic:supplier-stock).

### Analiz ve tasarım

- **Önce ne kırılır?** {{ui:Analysis}} sekmesindeki bu düğme, yönetici yük kombinasyonunu, en zayıf elemanı, ilk elemanın sınırına ulaşmadan yüklerin ne kadar artabileceğini ve cıvatalarının kesme dayanımının bilindiği en zayıf uç levhasını ya da kesme levhasını bulur. Önce kombinasyonlara ve bir tasarım koduna ihtiyaç duyar. Ezilme, blok kesme, kaynaklar ve kaldıraçlanma kontrol edilmez. Bağlı asistanınız da aynısını sorabilir.
- **Canlı.** {{ui:Live: solve again after each edit}} seçeneğini işaretleyin; her düzenlemeden sonra çerçeve yeniden çözülür.
- **Beton ve daha fazlası.** Ötelenmeyen bir çerçevede narin bir kolon, büyütülmüş momenti için tasarlanır (ACI 318-19 6.6.4.5). Sismik periyot, Rayleigh yöntemiyle analizden alınabilir. Plakalardan yapılmış bir döşeme, momentlerinden her katmanın ihtiyaç duyduğu çeliği ve tek yönlü kesmeyi alır. Bkz. [Beton elemanlarını kontrol edin ve sismik yükler oluşturun](topic:concrete-and-seismic).
- **Bir mühendisin kontrol etmesi için.** Temel, beton ve Önce ne kırılır? sonuçları yardımcı araçlardır. Rüzgâr yükleri henüz yapılmadı.

### Tüm uygulamalarda

- **Diller.** Yardım 54 dilde. İngilizce dışındakiler, ana dilini konuşan biri okuyana kadar makine taslağıdır; on tanesi yenidir (Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili, Özbekçe).
- **Araç çubuğu satırları.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} sarma, 2 satır ya da 1 satır seçeneğini seçer. Zaten sığan çubuk olduğu gibi kalır; diğerleri yana kayar.
- **Özellik tablosu.** Temelin alanları ortak tabloyu kullanır: daraltılabilir kategoriler ve sıkı yoğunluk. 2*450 gibi yazılmış aritmetik hâlâ çalışır.
- **Giriş aygıtları.** Dokunmatik yüzey, kalem, 3B fare, denetleyici ve MIDI uygulamaları yönetebilir. Bkz. [3B'de gezinin](topic:navigate-3d).
- **Sorunlar paneli.** Yukarıdaki yeni kontrollerin uyarıları, daha önceki gibi aynı {{ui:Problems}} panelinde çıkar.
- **Yapay zekânızı bağlayın.** CadCraft Studio üzerinden bağlanan kendi asistanınız sekiz uygulamanın tümüyle çalışır ve yalnızca izin verdiklerinizi görür. Tek tıkla bağlantı, barındırılan bağlayıcı ve Studio'daki kendi API anahtarınız henüz eklenmedi. Bkz. [DetailCraft'ı bir yapay zekâ asistanıyla kullanın](topic:use-with-ai-assistants).

## 0.8.1'de düzeltilenler

- **Studio'da diller.** Studio ve paketli sürümler çalışma zamanında dil değiştirebilir; önceden yalnızca İngilizceydi. Her platformda henüz sınanmadı: dil değişmiyorsa bize bildirin.
- **Çapraz pencereyle seçim.** 0.8.1 yükleyicileri, pencereyle seçim davranışını 0.8 web sürümünde zaten doğru olarak taşır; eski bir yükleyici bunu yapmıyordu.
- **Dikey konumdaki tabletler.** Boş ızgara yüksekliği tuvale gider; sayfa düzeni 760 px ve daha az genişlikte başlar.

## Bu sürümde henüz yok

- **Makineye NC gönderme** yayımlanmadı.
- **Beton için rüzgâr yükleri** henüz yapılmadı; beton ve temel kontrolleri bir mühendisin gözden geçirmesi içindir.
- **Kod imzalama.** Windows yükleyicileri ve macOS .dmg dosyası imzalı değil; bu yüzden Windows uyarabilir, macOS ise sağ tık ve ardından Aç ister.

Önceki değişiklikler için: [0.7 sürümündeki yenilikler](topic:whats-new-0-7).
