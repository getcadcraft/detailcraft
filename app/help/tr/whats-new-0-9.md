---
title: Yenilikler: 0.9 (önceki)
summary: Birleşik Krallık Blue Book çelik boyutları ve eşit olmayan açılar, her parça için tek PDF setinde atölye çizimleri, özel profiller için Profillerim, P-Delta ve doğal frekanslar, ASCE 7 rüzgâr yükleri, deprem sahası ve birleşimleri, Takip ile canlı imleçler.
keywords: yenilikler 0.9, önceki sürüm, yenilikler, sürüm notları, değişiklik günlüğü, 0.9, Birleşik Krallık çeliği, blue book, ub, uc, pfc, shs, rhs, chs, eşit olmayan açı, atölye çizimi, sayfa takımı, parça işareti, pdf, profillerim, özel profil, P-Delta, ikinci mertebe, doğal frekans, sonlu elemanlar, modal kütle, rüzgâr yükü, ASCE 7, deprem, saha sınıfı, USGS, yük birleşimleri, LRFD, ASD, canlı, imleçler, takip et, kişiler, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, montaj, vinç, yük çizelgesi, film, otopilot, bağlantılar, donatı, sıkışıklık, temel, radye, oturma, çerçeveleme, ahşap, hafif çelik, kesim listesi, yapılabilirlik, kaynak erişimi, tedarikçi, stok, teslim süresi, ilk ne kırılır, beton, deprem, döşeme, diller, asistan
from: ab0c7f05
---

Bu, 0.8.1 ile karşılaştırıldığında DetailCraft 0.9'da değişenlerdir. 0.9; Birleşik Krallık çelik boyutlarını, her parça için tek seferde bir atölye çizimini, çerçeveler için daha büyük bir {{ui:Analiz}} sekmesini ve birlikte çalışırken birbirinizin imleçlerini görme özelliğini getirir.

## Yeni

### Birleşik Krallık çeliği ve atölye çizimleri

- **Birleşik Krallık çelik boyutları.** Profil listeleri artık Steel for Life Blue Book'tan 976 boyut içerir: UB, UC, PFC, EA, UEA, CHS, SHS ve RHS; soğuk şekillendirilmiş içi boş kesitler ayrı tutulur (adları CF ile başlar). Adlar önce aile adıyla yazılır, örneğin UB305x165x40 ya da SHS100x100x5.0; çizimlerin söylediği biçimde yazmak da işe yarar: 305x165x40 UB, L100x100x10, SHS100x5. Bkz. [Profil kataloğu](topic:profile-catalog).
- **Eşit olmayan açılar.** UEA açıları, IFC ile içe ve dışa aktarımda ve NC dosyalarında iki kenarını da korur; aynalama parçayı uç uca çevirir.
- **Hepsi bir kerede atölye çizimi.** Hiçbir şey seçili değilken {{ui:Çıktı}} grubunda {{ui:İmalat çizimi}} seçin. Pencere her parça işaretini listeler, herhangi birini önizler ve {{ui:Tümünü indir}} her işaret için bir sayfa içeren tek bir PDF kaydeder; her sayfa "Sayfa 3 / 42" başlığını taşır. {{ui:PDF indir}} ise baktığınız sayfayı kaydeder. Kanallar, açılar ve içi boş kesitler artık onlar için de sayfa alır. Bkz. [Atölye çizimleri yapın](topic:shop-drawings).
- **Profillerim.** Özel bir profil artık her yeni model için saklanabilir. Özel profil formunda {{ui:Profillerim'de sakla}} kutusunu işaretli bırakın; altındaki {{ui:Profillerim}} listesinde {{ui:Sakla}}, {{ui:Burada kullan}} ve {{ui:Kaldır}} vardır. Liste hesabınızda değil, bu tarayıcıda tutulur (en çok 200). Bkz. [Levhalar ve profiller](topic:plates-and-profiles).

### Analiz

- **İkinci mertebe (P-Delta).** {{ui:Analiz}} sekmesinde Çalıştır'ın yanındaki {{ui:İkinci mertebe (P-Delta)}} kutusunu işaretleyin; eksenel kuvvetler sehim yapmış çerçeve üzerinde etkir. Levhalar ve rijit döşemeler birinci mertebede kalır ve bir uyarı gösterilir. Bkz. [Kuvvetler, tepkiler ve sehimler](topic:frame-analysis).
- **Doğal frekanslar.** Sonuçların altındaki {{ui:Sonlu elemanlar: doğal frekanslar}} bloğu aynı modelin en düşük modlarını, periyot ve etkin modal kütle ile bulur ve modelde bir modu gösterir. Bkz. [Kuvvetler, tepkiler ve sehimler](topic:frame-analysis).
- **Rüzgâr yükleri ve deprem sahası.** {{ui:Analiz}} sekmesinde üç yeni blok: {{ui:Rüzgar yükleri (ASCE 7 yönlü yöntem)}}, {{ui:Deprem sahası ve sistemi (ASCE 7)}} ve {{ui:ASCE 7 yük kombinasyonları}}. Bkz. [Rüzgâr, deprem sahası ve ASCE 7 birleşimleri](topic:wind-seismic-combinations).

### Birlikte çalışma

- **İmleçler ve adlar.** Canlı bir oturumda her kişinin işaretçisi, adı ve rengiyle modelde çizilir; seçtikleri bir kutu alır.
- **Bir kişiyi takip edin.** Oturumda {{ui:Kişiler}} sekmesini açın ve bir adın yanında {{ui:Takip et}} seçin; görünümünüz onunkiyle birlikte hareket eder. Ev sahibi {{ui:Herkesten beni takip etmesini iste}} seçebilir. Bkz. [Canlı oturumda bir kişiyi takip etme](topic:follow-in-live).

### Her uygulamada

- Araç ipuçları Bootstrap araç ipuçlarıdır, başlangıç ipucu kartının bir kapat düğmesi vardır, sekme şeridi sığmadığında yana kayar ve tarayıcı sekmesi açık belgenin adını, ardından DetailCraft ve CadCraft'ı gösterir.

## Düzeltilenler

- Yeni bir model başlattığınızda özel bir profil kayboluyordu.
- Kanallar, açılar ve içi boş kesitler atölye çizimi setinde eksikti.

## Dürüst sınırlar

- Rüzgâr, deprem ve sonlu eleman blokları denetim yardımcılarıdır. Sonuçları mühendiniz gözden geçirir; bunlar bir yönetmelik denetimi değildir. USGS sorgusu canlı hizmette değil, bir vekil üzerinde test edildi.
- Sonlu elemanlar ve P-Delta, gerçek bir bina yerine el ile ve kapalı biçimli sonuçlarla denetlendi. Burkulma analizi henüz yapılmadı.
- Henüz hiçbir Birleşik Krallık imalatçısı Birleşik Krallık boyutlarını denemedi; eşit olmayan açılar için NC dosyaları henüz bir makinede çalıştırılmadı.
- Atölye çizimi seti yalnızca PDF'dir.
- İngilizce dışındaki diller makine taslağıdır.
- Windows kurulum dosyaları kod imzalı değildir (Ek bilgi, ardından Yine de çalıştır); macOS disk imajı notarize edilmemiştir (sağ tıklayın, sonra Aç).

Önceki değişiklikler, bu sayfada aşağıdaki 0.8 ve 0.8.1 notlarındadır.

## Önceki: 0.8 ve 0.8.1

Bu, 0.7 ile karşılaştırıldığında DetailCraft 0.8 (1 Kasım 2026) ve 0.8.1 (2 Kasım 2026) sürümlerinde değişenlerdir. 0.7 çelik elemanları denetledi; 0.8 kaldırmaları planlar, bağlantıları önerir, temelleri ve donatıyı denetler ve ahşap ile hafif çelik duvarları, döşemeleri ve çatıları çerçeveler.

### Yeni

**Montaj**

- **Montaj planı ve filmi.** {{ui:Montaj}} sekmesinde bir vinci tanımlayın (nerede durduğu, en yüksek kancası, yük çizelgesinde olmayan askı donanımı) ve yük çizelgesinin satırlarını yazın. DetailCraft modeli bir seferde bir parça grubu olarak, faz sırasına ve kat kat kaldırır; her kaldırmayı yarıçapındaki çizelgeye ve belirlediğiniz pay ile karşılaştırır. {{ui:Filmi kaydet}} her tarayıcıda, telefonda bile çevrimdışı oynayan tek bir HTML dosyası yazar. Çizelgenin üzerinde, dışında ya da çok yüksek olan kaldırmalar {{ui:Sorunlar}} içinde yer alır. Bu, sayılarınızdan bir plandır, bir kaldırma planı değildir. Bkz. [Montaj planı ve filmi](topic:erection-movie).

**Bağlantılar**

- **Bağlantı otopilotu.** {{ui:Otopilot}} sekmesi, bağlantısı olmayan her düğüme bakar ve şekillerden bir tane önerir: taban levhaları, kesme lamaları, moment kirişi olarak işaretlediğiniz kirişler için uç levhaları, ekler ve köşe levhaları. Düzgün yayılı bir yük ya da bir uç kesme kuvveti verin; cıvata sayısı cıvatanın tasarım dayanımını izler. {{ui:Hepsini ekle}} önerileri tek bir geri alma adımında ekler. Bunlar gözden geçirilecek başlangıç değerleridir, bir bağlantı tasarımı değildir.
- **Yapılabilirlik denetimleri.** {{ui:Sorunlar}}, bir anahtarın ulaşamadığı cıvata, lokma için çok yakın cıvatalar, boyut sınırlarının dışındaki köşe kaynakları ve su tutan içi boş kesitler için uyarılar verir. Kaynak erişimi yenidir: bir kaynakçının torçunun ulaşamadığı çevresel bir köşe kaynağı, yoldaki parçası ve etkilenen kaynak oranıyla birlikte listelenir. Bkz. [Yapılabilirlik denetimleri](topic:constructability).

**Temeller ve donatı**

- **Temel denetimleri.** {{ui:Temel}} sekmesi, tanımladığınız zemin üzerindeki tekil temelleri, birleşik temelleri ve radyeleri denetler: kullanım yüklerinden taşıma gücü, kayma ve devrilme; faktörlü yüklerden eğilme, kesme, zımbalama, kenetlenme ve asgari donatı (ACI 318-19). Bir kenara ya da köşeye yakın bir kolon, temelin kenarıyla kesilen kesitle denetlenir. Oturma, zeminin modülünden hesaplanır; esnek bir radye, zemin yatak katsayısından elde edilen yaylar üzerinde çözülür; kazık grupları ve istinat duvarlarının kendi panelleri vardır. Kolon yükleri yazılabilir ya da {{ui:Analiz}} sekmesinden alınabilir. Bkz. [Temel denetimleri](topic:foundation-checks).
- **Donatı sıkışıklık haritası.** {{ui:Sıkışıklık}} sekmesi her temelin üstten görünen bir ısı haritasını çizer: donatının betonun aşağı inmesi için çok az yer bıraktığı yerleri, net aralık kuralına karşı ve verirseniz en büyük agrega ile vibratör başına göre. Bkz. [Donatı sıkışıklık haritası](topic:rebar-congestion).

**Çerçeveleme ve tedarik**

- **Ahşap ve hafif çelik çerçeveleme.** {{ui:Çerçeveleme}} sekmesi duvar, döşeme ve çatı panellerini her parçası, bir kesim listesi, satın alınacak stok ve ölçekli bir atölye çizimiyle çerçeveler. {{ui:Eleman olarak yerleştir}} parçaları modele koyar; {{ui:PDF sayfaları}} her panel için bir sayfa kaydeder. Boyutlar, aralıklar ve başlıklar sizindir: DetailCraft bunların yükü taşıdığını denetlemez. Bkz. [Ahşap ve hafif çelik çerçeveleme panelleri](topic:framing-panels).
- **Tedarikçi stoku ve teslim süreleri.** {{ui:Besleme}} sekmesi bir tedarikçinin stok listesini (CSV) okur ve kesim listesinin satın aldığı her kesit için stokta yeterli olup olmadığını ve beklemenin ne kadar süreceğini gösterir. Eksikler ve geç kalan kesitler {{ui:Sorunlar}} içindedir. Hiçbir şey sipariş edilmez. Bkz. [Tedarikçi stoku ve teslim süreleri](topic:supplier-stock).

**Analiz ve tasarım**

- **İlk ne kırılır?** {{ui:Analiz}} sekmesinde bu düğme, belirleyici dayanım birleşimini, en zayıf elemanı, ilk eleman sınırına ulaşmadan önce yüklerin ne kadar büyüyebileceğini ve cıvatalarının kesme dayanımı bilinen en zayıf uç levhasını ya da kesme lamasını bulur. Önce birleşimler ve bir tasarım yönetmeliği gerekir. Ezilme, blok kesme, kaynaklar ve kaldıraç etkisi denetlenmez. Bağlı asistanınız da aynısını sorabilir.
- **Canlı.** {{ui:Canlı: her düzenlemeden sonra yeniden çöz}} kutusunu işaretleyin; çerçeve her düzenlemeden sonra yeniden çözülür.
- **Beton, daha fazlası.** Yan ötelenmeyen bir çerçevede narin bir kolon, büyütülmüş momenti için tasarlanır (ACI 318-19 6.6.4.5). Deprem periyodu, Rayleigh yöntemiyle analizden alınabilir. Levhalardan yapılmış bir döşeme, her katmanın ihtiyaç duyduğu donatıyı momentlerinden ve tek yönlü kesmeden alır. Bkz. [Beton elemanları denetleyin ve deprem yükleri oluşturun](topic:concrete-and-seismic).
- **Bir mühendisin denetlemesi için.** Temel, beton ve İlk ne kırılır sonuçları yardımcı araçlardır. Rüzgâr yükleri henüz yapılmadı.

**Her uygulamada**

- **Diller.** Yardım 54 dildedir. İngilizce dışındakiler, ana dili konuşan biri okuyana kadar makine taslağıdır; on tanesi yenidir (Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikaanca, Filipince, Svahili, Özbekçe).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} seçeneği sarma, 2 satır ya da 1 satır seçer. Zaten sığan bir çubuk olduğu gibi kalır; geri kalanlar yana kayar.
- **Özellik tablosu.** Temelin alanları ortak tabloyu kullanır: daraltılabilir kategoriler ve sıkı yoğunluk. 2*450 gibi yazılan aritmetik hâlâ çalışır.
- **Giriş aygıtları.** Dokunmatik yüzey, kalem, 3B fare, denetleyici ve MIDI uygulamaları yönetebilir. Bkz. [3B içinde gezinin](topic:navigate-3d).
- **Sorunlar paneli.** Yukarıdaki yeni denetimlerin uyarıları, daha önceki gibi aynı {{ui:Sorunlar}} panelinde görünür.
- **Yapay zekânızı bağlayın.** CadCraft Studio üzerinden bağladığınız kendi asistanınız sekiz uygulamanın hepsiyle çalışır ve yalnızca izin verdiklerinizi görür. Tek tıkla bağlantı, barındırılan bağlayıcı ve Studio'daki kendi API anahtarınız henüz yapılmadı. Bkz. [DetailCraft'ı bir yapay zekâ asistanıyla kullanın](topic:use-with-ai-assistants).

### 0.8.1'de düzeltilenler

- **Studio'da diller.** Studio ve paketli sürümler çalışma anında dil değiştirebilir; önceden yalnızca İngilizceydi. Her platformda henüz test edilmedi: dil değişmiyorsa bize bildirin.
- **Kesişen pencereyle seçim.** 0.8.1 kurulum dosyaları, pencereyle seçim davranışını 0.8 web sürümünde olduğu gibi doğru olarak içerir; daha eski bir kurulum dosyası içermiyordu.
- **Dikey konumda tabletler.** Boşta kalan ızgara yüksekliği tuvale verilir ve sayfa düzeni 760 px ve altında başlar.

### Bu sürümde henüz yok

- **NC'yi bir makineye gönder** henüz yayımlanmadı.
- **Rüzgâr yükleri**, beton için henüz yapılmadı; beton ve temel denetimleri bir mühendisin gözden geçirmesi içindir.
- **Kod imzalama.** Windows kurulum dosyaları ve macOS .dmg imzalı değildir; bu nedenle Windows uyarabilir ve macOS sağ tıklama, ardından Aç ister.

Önceki değişiklikler [Yenilikler: 0.7](topic:whats-new-0-7) sayfasındadır.
