---
title: Yenilikler: 0.9
summary: İngiliz Blue Book çelik ölçüleri ve eşit olmayan köşebentler, tek PDF setinde her parça için imalat çizimleri, özel kesitler için Profillerim, P-Delta ve doğal frekanslar, ASCE 7 rüzgâr yükleri, deprem sahası ve kombinasyonlar, Takip et özelliğiyle canlı imleçler.
keywords: yenilikler, what's new, sürüm notları, değişiklik günlüğü, 0.9, ingiliz çelik, blue book, ub, uc, pfc, shs, rhs, chs, eşit olmayan köşebent, imalat çizimi, imalat çizimleri, sayfa takımı, parça işareti, pdf, profillerim, özel profil, p-delta, ikinci mertebe, doğal frekans, sonlu elemanlar, modal kütle, rüzgâr yükü, asce 7, deprem, saha sınıfı, usgs, yük kombinasyonları, lrfd, asd, canlı, imleçler, takip et, kişiler, araç ipuçları, yenilikler, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, montaj, vinç, yük çizelgesi, film, otopilot, bağlantılar, donatı, sıkışıklık, temel, radye, oturma, çerçeveleme, ahşap, hafif çelik, kesim listesi, yapılabilirlik, kaynak erişimi, tedarikçi, stok, teslim süresi, ilk ne kırılır, beton, döşeme, diller, asistan
from: 4c95a2de
---

Bu, DetailCraft 0.8.1 ile karşılaştırıldığında 0.9 sürümünde neyin değiştiğini gösterir. 0.9 sürümü İngiliz çelik ölçülerini, tek seferde her parça için bir imalat çizimini, çerçeveler için daha büyük bir {{ui:Analysis}} sekmesini ve birlikte çalışırken birbirinizin imleçlerini görme özelliğini getirir.

## Yeniler

### İngiliz çelik ölçüleri ve imalat çizimleri

- **İngiliz çelik ölçüleri.** Profil listeleri, Steel for Life Blue Book kaynağından 976 ölçü içerir: UB, UC, PFC, EA, UEA, CHS, SHS ve RHS. Soğuk şekillendirilmiş içi boş kesitler ayrı tutulur (adları CF ile başlar). Adlar önce aile adıyla yazılır, örneğin UB305x165x40 veya SHS100x100x5.0. Çizimlerde yazıldığı gibi yazmak da işe yarar: 305x165x40 UB, L100x100x10, SHS100x5. Bkz. [Profil kataloğu](topic:profile-catalog).
- **Eşit olmayan köşebentler.** UEA köşebentleri IFC girişi ve çıkışında ile NC dosyalarında her iki kanadını korur. Ayna, parçayı uçtan uca çevirir.
- **Her imalat çizimi aynı anda.** Hiçbir şey seçili değilken {{ui:Output}} grubunda {{ui:Shop drawing}} seçeneğini seçin. Pencere her parça işaretini listeler, bunların herhangi birini önizler ve {{ui:Download all}} (Tümünü indir) her işaret için bir sayfa içeren tek bir PDF kaydeder; her sayfanın başlığı "Sayfa 3 / 42" biçimindedir. {{ui:Download this sheet}} (PDF indir) baktığınız tek sayfayı kaydeder. Kanallar, köşebentler ve içi boş kesitler artık sayfa alır. Bkz. [İmalat çizimleri oluşturma](topic:shop-drawings).
- **Profillerim.** Özel bir profil artık her yeni model için saklanabilir. Özel profil formunda {{ui:Keep in My profiles}} (Profillerimde sakla) kutusunu işaretli bırakın; altındaki {{ui:My profiles}} (Profillerim) listesinde {{ui:Keep}} (Sakla), {{ui:Use here}} (Burada kullan) ve {{ui:Remove}} (Kaldır) bulunur. Liste hesabınızda değil, bu tarayıcıda saklanır (en fazla 200). Bkz. [Plakalar ve profiller](topic:plates-and-profiles).

### Analiz

- **İkinci mertebe (P-Delta).** {{ui:Analysis}} sekmesinde Run (Çalıştır) düğmesinin yanındaki {{ui:Second order (P-Delta)}} (İkinci mertebe (P-Delta)) kutusunu işaretleyin; eksenel kuvvetler sehimli çerçeve üzerinde etkili olur. Plakalar ve rijit döşemeler bir uyarıyla birlikte birinci mertebede kalır. Bkz. [Kuvvetler, tepkiler ve sehimler](topic:frame-analysis).
- **Doğal frekanslar.** Sonuçların altındaki {{ui:Finite elements: natural frequencies}} (Sonlu elemanlar: doğal frekanslar) bloğu aynı modelin en düşük modlarını, periyot ve etkin modal kütle ile bulur ve bir modu modelin üzerinde gösterir. Bkz. [Kuvvetler, tepkiler ve sehimler](topic:frame-analysis).
- **Rüzgâr yükleri ve deprem sahası.** {{ui:Analysis}} sekmesinde üç yeni blok var: {{ui:Wind loads (ASCE 7 directional procedure)}} (Rüzgâr yükleri (ASCE 7 yönlü yöntem)), {{ui:Seismic site and system (ASCE 7)}} (Deprem sahası ve sistemi (ASCE 7)) ve {{ui:ASCE 7 load combinations}} (ASCE 7 yük kombinasyonları). Bkz. [Rüzgâr, deprem sahası ve ASCE 7 kombinasyonları](topic:wind-seismic-combinations).

### Birlikte çalışma

- **İmleçler ve adlar.** Bir {{ui:Live}} oturumunda her kişinin işaretçisi, adı ve rengiyle modelin içinde çizilir; seçtiği nesnenin etrafında bir kutu görünür.
- **Bir kişiyi takip edin.** Oturumda {{ui:People}} (Kişiler) bölümünü açın ve bir adın yanında {{ui:Follow}} (Takip et) seçeneğini seçin; görünümünüz onunkiyle birlikte hareket eder. Oturum sahibi {{ui:Ask everyone to follow me}} (Herkesten beni takip etmesini iste) seçeneğini seçebilir. Bkz. [Canlı oturumda bir kişiyi takip etme](topic:follow-in-live).

### Her uygulamada

- Araç ipuçları Bootstrap araç ipuçlarıdır, başlangıç ipucu kartının bir kapatma düğmesi vardır, sığmayan sekme şeritleri yana doğru kayar ve tarayıcı sekmesi açık belgenin adını, ardından DetailCraft ve CadCraft adını gösterir.

## Düzeltilenler

- Yeni bir model başlattığınızda özel bir profil kayboluyordu.
- Kanallar, köşebentler ve içi boş kesitler imalat çizimi setinde eksikti.

## Açık sınırlar

- Rüzgâr, deprem sahası ve sonlu eleman blokları kontrol yardımcılarıdır. Sonuçları mühendiğiniz inceler; bunlar bir yönetmelik kontrolü değildir. USGS sorgusu canlı hizmette değil, bir yer tutucu üzerinde test edildi.
- Sonlu elemanlar ve P-Delta, gerçek bir bina yerine el hesaplarına ve kapalı form çözümlere göre denetlendi. Burkulma analizi henüz yapılmadı.
- Hiçbir İngiliz imalatçısı İngiliz ölçülerini henüz denemedi; eşit olmayan köşebentler için NC dosyaları bir makinede henüz çalıştırılmadı.
- İmalat çizimi seti yalnızca PDF'dir.
- İngilizce dışındaki diller, ana dili konuşan biri okuyana kadar makine taslaklarıdır.
- Windows kurulum dosyaları kod imzalı değildir (Ek bilgi, ardından Yine de çalıştır); macOS disk görüntüsü noter onaylı değildir (sağ tıklayın, ardından Aç).

Daha önceki değişiklikler, bu sayfanın aşağısındaki 0.8 ve 0.8.1 notlarındadır.

## Daha önce: 0.8 ve 0.8.1

Bu, DetailCraft 0.8 (1 Kasım 2026) ve 0.8.1 (2 Kasım 2026) sürümlerinde, 0.7 ile karşılaştırıldığında neyin değiştiğini gösterir. 0.7 çelik elemanları denetledi; 0.8 kaldırmaları planlar, bağlantıları önerir, temelleri ve donatıyı denetler ve ahşap ile hafif çelik duvarları, döşemeleri ve çatıları çerçeveler.

### Yeniler

**Montaj**

- **Montaj planı ve film.** {{ui:Erection}} (Montaj) sekmesinde bir vinci tanımlayın (nerede durduğu, en yüksek kancası, yük çizelgesinde olmayan askı donanımı) ve yük çizelgesinin satırlarını yazın. DetailCraft modeli bir seferde bir montaj grubuna göre, faz sırasına ve kat kat kaldırır; her kaldırmayı kendi yarıçapındaki çizelgeye ve sizin belirlediğiniz pay ile karşılaştırır. {{ui:Save movie}} (Filmi kaydet) çevrimdışı olarak her tarayıcıda, telefonda bile oynayan tek bir HTML dosyası yazar. Çizelgenin üzerinde, aşılmış ya da çok yüksek olan kaldırmalar {{ui:Problems}} (Sorunlar) bölümündedir. Bu, sizin sayılarınızdan çıkan bir plandır, bir kaldırma planı değildir. Bkz. [Montaj planı ve film](topic:erection-movie).

**Bağlantılar**

- **Bağlantı otopilotu.** {{ui:Autopilot}} (Otopilot) sekmesi, bağlantısı olmayan her birleşime bakar ve şekillere göre bir bağlantı önerir: taban levhaları, kesme levhaları, moment kirişi olarak işaretlediğiniz kirişler için uç levhaları, ekler ve köşe levhaları. Düzgün yayılı bir yük ya da bir uç kesme kuvveti verin; cıvata sayısı cıvatanın tasarım dayanımına göre belirlenir. {{ui:Add them all}} (Hepsini ekle) önerileri tek bir geri alma adımı olarak ekler. Bunlar gözden geçirilecek başlangıç değerleridir, bir bağlantı tasarımı değildir.
- **Yapılabilirlik denetimleri.** {{ui:Problems}} (Sorunlar), anahtarın ulaşamadığı bir cıvata, soket için çok yakın cıvatalar, boyutları sınırlarının dışında olan köşe kaynakları ve su tutan içi boş kesitleri gösterir. Kaynak erişimi yenidir: kaynakçının meşalesinin ulaşamadığı çevresel bir köşe kaynağı, yolundaki parçayla ve etkilenen kaynak oranıyla birlikte listelenir. Bkz. [Yapılabilirlik denetimleri](topic:constructability).

**Temeller ve donatı**

- **Temel denetimleri.** {{ui:Foundation}} (Temel) sekmesi, tarif ettiğiniz zemin üzerindeki tekil temelleri, birleşik temelleri ve radyeleri denetler: servis yüklerinden taşıma gücü, kayma ve devrilme; tasarım yüklerinden eğilme, kesme, zımbalama, kenetlenme ve minimum donatı (ACI 318-19). Bir kenara ya da köşeye yakın kolon, temelin kenarıyla kesilen kesitle denetlenir. Oturma, zeminin elastisite modülünden hesaplanır; esnek bir radye, bir taban katsayısından yaylar üzerinde çözülür; kazık grupları ve istinat duvarlarının kendi panelleri vardır. Kolon yükleri yazılabilir ya da {{ui:Analysis}} (Analiz) sekmesinden alınabilir. Bkz. [Temel denetimleri](topic:foundation-checks).
- **Donatı sıkışıklık haritası.** {{ui:Congestion}} (Sıkışıklık) sekmesi her temelin yukarıdan görünen bir ısı haritasını çizer: donatının betonun aşağı inmesine yetecek yer bırakmadığı yerler, net aralık kuralına göre ve verirseniz en büyük agrega ile vibratör başına göre. Bkz. [Donatı sıkışıklık haritası](topic:rebar-congestion).

**Çerçeveleme ve tedarik**

- **Ahşap ve hafif çelik çerçeveleme.** {{ui:Framing}} (Çerçeveleme) sekmesi duvar, döşeme ve çatı panellerini her parçası, bir kesim listesi, satın alınacak stok ve ölçekli bir imalat çizimiyle çerçeveler. {{ui:Place as members}} (Eleman olarak yerleştir) parçaları modele koyar, {{ui:PDF sheets}} (PDF sayfaları) her panel için bir sayfa kaydeder. Ölçüler, aralıklar ve başlıklar sizindir: DetailCraft yükü taşıyıp taşımadıklarını denetlemez. Bkz. [Ahşap ve hafif çelik çerçeveleme panelleri](topic:framing-panels).
- **Tedarikçi stoku ve teslim süreleri.** {{ui:Supply}} (Besleme) sekmesi bir tedarikçinin stok listesini (CSV) okur ve kesim listesinin satın aldığı her kesit için yeterli stok olup olmadığını ve beklemenin ne kadar süreceğini gösterir. Eksikler ve geciken kesitler {{ui:Problems}} (Sorunlar) bölümündedir. Hiçbir şey sipariş edilmez. Bkz. [Tedarikçi stoku ve teslim süreleri](topic:supplier-stock).

**Analiz ve tasarım**

- **İlk ne kırılır?** {{ui:Analysis}} (Analiz) sekmesinde bu düğme, geçerli olan dayanım kombinasyonunu, en zayıf elemanı, ilk eleman sınırına ulaşmadan önce yüklerin ne kadar artabileceğini ve cıvatalarının kesme dayanımı biliniyorsa en zayıf uç levhasını ya da kesme levhasını bulur. Önce kombinasyonlar ve bir tasarım yönetmeliği gerekir. Ezilme, blok kesme, kaynaklar ve kaldıraçlanma denetlenmez. Bağlı asistanınız da aynısını sorabilir.
- **Canlı.** {{ui:Live: solve again after each edit}} (Canlı: her düzenlemeden sonra yeniden çöz) seçeneğini işaretleyin; her düzenlemeden sonra çerçeve yeniden çözülür.
- **Beton ve daha fazlası.** Ötelenmeyen bir çerçevedeki narin bir kolon, büyütülmüş momenti için tasarlanır (ACI 318-19 6.6.4.5). Deprem periyodu, Rayleigh yöntemiyle analizden alınabilir. Plakalardan oluşan bir döşeme, her katmanın ihtiyaç duyduğu çeliği momentlerinden ve tek yönlü kesmeden alır. Bkz. [Beton elemanları denetleme ve deprem yükleri oluşturma](topic:concrete-and-seismic).
- **Bir mühendisin inceleyeceği şeyler.** Temel, beton ve İlk ne kırılır sonuçları yardımcı niteliktedir. Rüzgâr yükleri henüz yapılmadı.

**Her uygulamada**

- **Diller.** Yardım 54 dilde sunulur. İngilizce dışındakiler, ana dili konuşan biri okuyana kadar makine taslaklarıdır; on tanesi yenidir (Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili, Özbekçe).
- **Araç çubuğu satırları.** {{ui:Settings}} (Ayarlar) › {{ui:General}} (Genel) › {{ui:Toolbar rows}} (Araç çubuğu satırları) seçeneğinden kaydırma, 2 satır ya da 1 satır seçilebilir. Zaten sığan bir çubuk olduğu gibi kalır; diğerleri yana doğru kayar.
- **Özellik tablosu.** Temelin alanları ortak tabloyu kullanır: daraltılabilir kategoriler ve sıkı bir yoğunluk. 2*450 gibi yazılan aritmetik yine çalışır.
- **Giriş aygıtları.** Dokunmatik yüzey, kalem, 3D fare, denetleyici ve MIDI uygulamaları yönetebilir. Bkz. [3B'de gezinme](topic:navigate-3d).
- **Sorunlar paneli.** Yukarıdaki yeni denetimlerin uyarıları, daha önceki gibi aynı {{ui:Problems}} (Sorunlar) panelinde görünür.
- **Yapay zekâ asistanınızı bağlayın.** CadCraft Studio üzerinden bağladığınız kendi asistanınız sekiz uygulamanın tamamıyla çalışır ve yalnızca izin verdiklerinizi görür. Tek tıkla bağlantı, barındırılan bağlayıcı ve Studio içindeki kendi API anahtarınız henüz hazır değil. Bkz. [DetailCraft'ı bir yapay zekâ asistanıyla kullanma](topic:use-with-ai-assistants).

### 0.8.1 sürümünde düzeltilenler

- **Studio'da diller.** Studio ve paketlenmiş sürümler dili çalışma anında değiştirebilir; daha önce yalnızca İngilizce idi. Her platformda henüz test edilmedi: dil değişmiyorsa bize bildirin.
- **Pencereyle çoklu seçim.** 0.8.1 kurulum dosyaları, pencereyle seçim davranışını 0.8 web sürümünde zaten doğru olarak taşır; eski bir kurulum dosyası taşımıyordu.
- **Dikey modda tabletler.** Boş ızgara yüksekliği tuvale verilir ve çizim düzeni 760 px veya daha az genişlikte başlar.

### Bu sürümde henüz yok

- **NC dosyasını bir makineye gönderme** henüz yayınlanmadı.
- **Beton için rüzgâr yükleri** henüz yapılmadı; beton ve temel denetimleri bir mühendisin incelemesi içindir.
- **Kod imzalama.** Windows kurulum dosyaları ve macOS .dmg imzalı değildir; bu yüzden Windows uyarı verebilir, macOS ise sağ tıklayıp Aç seçeneğini ister.

Daha önceki değişiklikler [0.7 sürümündeki yenilikler](topic:whats-new-0-7) bölümündedir.
