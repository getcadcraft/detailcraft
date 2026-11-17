---
title: 0.7'deki yenilikler (önceki sürüm)
summary: Çelik I profillerin ASCE 7 veya EN 1990 yük kombinasyonlarıyla tasarım denetimleri ve elemanların AISC 360 veya EN 1993-1-1'e göre denetimleri, çelik modelin USD dışa aktarımı, USD için bir asistan aracı, büyük ve küçük düğmeli bir Çelik şerit, kendini toplayan paneller ve taşınan iletişim kutuları.
keywords: yenilikler 0.7, önceki sürüm, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, tasarım denetimleri, çelik tasarımı, kullanım oranı, yük kombinasyonları, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Ulusal Ek, çatı canlı yükü, sehim sınırı, usd, usda, usdc, usdz, openusd, asistan, mcp, çelik şerit, şerit, bölünmüş düğme, birimler, sıkı, paneller, iletişim kutuları, portekizce
from: 54a7a8f0
---

Bu, DetailCraft 0.7'de 0.6'ya kıyasla neyin değiştiğidir. 0.6'nın çerçeve analizi artık ikinci bir adım içeriyor: çelik elemanların bir tasarım yönetmeliğine göre denetlenmesi.

## Yeni

### Gönye birleşimleri (0.7.1)

- **Bir açıyla birleşen iki I profil**, örneğin bir portal dirsek veya sırt: ikisini de seçin, {{ui:Bağlan}} grubunun {{ui:Daha fazla}} menüsünden {{ui:Gönye}} seçeneğini seçin; her iki uç, açıyı ikiye bölen düzlemde kesilir. Yeni Gönye iletişim kutusunda uç levhalarının birbirine cıvatalanması ve gövde takviyeleri onay kutularıdır; numaralı alanlar, siz yazarken birleşiminizin bir çizimiyle eşleşir. Gönye, elemanlar taşındığında onları izler ve çizimlere, NC dosyalarına (eğik kesimler), IFC'ye ve malzeme listesine yansır. Bkz. [Gönye birleşimleri](topic:mitres).

### Tasarım denetimleri

- **Yük kombinasyonları yönetmelikten gelir.** {{ui:Analiz}} sekmesindeki yeni {{ui:Tasarım denetimleri}} bloğunun bir {{ui:Tasarım yönetmeliği}} vardır: ASCE 7 + AISC 360 (ABD, LRFD) veya EN 1990 + EN 1993-1-1 (Eurocode). Her yük durumuna türünü verin (ölü, canlı, yeni çatı canlı yükü, kar, rüzgar, deprem), ardından {{ui:Birleşimleri oluştur}} düğmesine basın; DetailCraft durumlarınızın yönetmeliğin dayanım ve kullanılabilirlik kombinasyonlarını yazar. Kendi yazdığınız kombinasyonlar kalır. Bkz. [Kombinasyonları oluşturma](topic:design-checks#make-the-combinations).
- **Ulusal Ek değerleri.** Eurocode için katsayılar önerilen değerlerle başlar; {{ui:Ulusal Ek değerleri}} ülkenizin değerlerini yazmanıza olanak verir ve bunlar modelde kaydedilir. Bkz. [Kombinasyonları oluşturma](topic:design-checks#make-the-combinations).
- **Elemanları denetleyin.** {{ui:Elemanları denetle}} her çelik I profili için çekme, burkulmalı basınç, yanal-burulmalı burulma ile eğilme, kesme, eksenel kuvvetle birlikte eğilme ve sizin ayarladığınız {{ui:Sehim sınırı}}na karşı sehim denetler. Tablo her elemanın kullanım oranını, yöneten denetimi ve kombinasyonunu gösterir; elemanlar modelde renklendirilir (mavi, yeşil, okr, kırmızı; denetlenmeyenler için gri). Bkz. [Elemanları denetleme](topic:design-checks#check-the-members).
- **Raporda.** {{ui:Rapor (PDF)}} ve {{ui:Rapor (CSV)}} yönetmelik sürümlerini, ayarları, elemana göre kullanım oranını ve kullanılan her maddeyi ekler. Bkz. [Rapor](topic:design-checks#the-report).
- **Bir mühendis gözden geçirene kadar bir yardımcı.** Yalnızca birinci mertebe kuvvetleri kullanır. Borular, köşebentler, kanallar, kaynaklı profiller ile narin veya 4. sınıf parçalar "denetlenmedi" olarak gerekçesiyle görünür; burulma, birleşimler ve beton denetlenmez. Bkz. [Denetlenmeyenler](topic:design-checks#what-is-not-checked).

### USD

- **Çelik modeli USD olarak dışa aktarın.** {{ui:Çıktı}} grubundaki {{ui:USD}} modeli {{ui:Metin (.usda)}}, {{ui:İkili (.usdc)}} veya {{ui:Paket (.usdz)}} olarak yazar; render programları ve sahne birleştirme için. Her montaj kendi parçalarını taşır, her parça kesitinin boyunca uzatılmış hâlidir ve ağız kesimleriyle birlikte gelir; her parça işaretini, profilini, sınıfını, uzunluğunu ve ağırlığını taşır. Cıvata delikleri, cıvatalar, kaynaklar ve temeller USD ağlarında yer almaz. Bkz. [Çelik modeli USD olarak dışa aktarma](topic:usd).

### Yapay zekâ asistanları

- **Asistanlar için USD.** CadCraft Studio üzerinden bağladığınız kendi asistanınız modeli USD olarak dışa aktarabilir (`usd_export`) ve Studio'da izin verdiğiniz bir klasöre yazabilir. Bkz. [Bir asistanın neler isteyebileceği](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Değişenler

- **Çelik şerit** büyük ve küçük düğmelere sahiptir: {{ui:Modelleme}} › {{ui:Elemanlar}} üzerinde büyük {{ui:Kiriş}} yanında küçük {{ui:Kolon}}, {{ui:Çapraz}} ve {{ui:Levha}}; {{ui:Detaylandırma}} › {{ui:Birleşimler}} üzerinde büyük {{ui:Uç levhaları}}, {{ui:Ek}} ve {{ui:Köşe levhası}} tek bir bölünmüş düğmeyi paylaşır; {{ui:Düzenle}} › {{ui:Pano}} üzerinde büyük {{ui:Yapıştır}}, grubun okunun arkasında {{ui:Olduğu yere yapıştır}} ve {{ui:Çoğalt}} bulunur. {{ui:İmalat}} › {{ui:Aktarım}} bölümünde IFC'nin yanında {{ui:USD dışa aktar}} vardır. Diğer menü stilleri eskisi gibi görünür. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse#the-three-styles).
- [Çerçeve analizi](topic:frame-analysis) artık tasarım denetimlerine işaret eder ve kombinasyonları yönetmelik tarafından oluşturulabilir.

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} uzunluk, alan, hacim, açı ve eğim için ayrı birer liste içerir; birimlerin tanımlarının verdiği kesin boyutlarla (ABD araziölçme ayağı kendi birimidir). Hiç kullanmadığınız birimleri kapatırsanız birim listelerinden çıkarlar; birini yıldızlarsanız yeni işler o birimle başlar. Bir dosya her zaman kendi birimini korur. DetailCraft'ın kendi kutuları bu listeleri henüz izlemez: uzunlukları hâlâ milimetre olarak yazılır. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha yoğun bir düzen ve kendini toplayan paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekrana daha fazlasını sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her yan panelin ince bir başlık çubuğu vardır: paneli yerleştirmek veya yüzdürmek için sürükleyin, başka bir panelin çubuğuna bırakarak aynı çerçeveyi sekmeler olarak paylaşın, kenara kayacak şekilde sabitleyin ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleme](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** İletişim kutusunu başlık çubuğundan sürükleyerek çizimin önünden çekin; bıraktığınız yere geri döner. Yeniden ortalamak için başlık çubuğuna çift tıklayın. Bkz. [İletişim kutusunu taşıma](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on örnek istek (bir çizimi düzenleme, bir takım sayfayı çıktı alma, çizimleri denetleme, bir modele soru sorma, bir metrajı toplama, bir parça varyantını deneme…). Her biri çağırdığı araçlar ve ihtiyaç duyduğu izinlerle birlikte listelenir ve her biri testlerimizle yeniden oynatılır. Uygulamalar yapay zekâ içermez. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** **Português (Portugal)** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} altında yenidir. Bu dil ile birlikte **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** artık uygulamaların her sözcüğüne sahip; hepsi henüz bir ana dil konuşmacısı tarafından gözden geçirilmemiş taslaklar. Yardım konuları İngilizcedir.
- **CadCraft Studio** güncelleme denetiminin neden başarısız olduğunu söyler (sisteminiz için henüz dosya yok, ağ yok, hatalı imza) ve "Bitti" yazmak yerine; kapattığınız bir Yenilikler kartını, daha yeni bir sürüm çıkana kadar geri getirmeyi bırakır.

## Bu sürümde henüz yok

- **0.7 kod imzalı değil.** İmzalama ve Microsoft Store paketi, sertifika doğrulaması henüz tamamlanmadığı için 0.8'e taşındı. Her dosyanın yanındaki SHA-256 değerini getcadcraft.com/download adresinden denetleyin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Daha fazla bilgi}}'yi, ardından {{ui:Yine de çalıştır}}'ı seçin. Mac'te ilk kez CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. CadCraft Studio henüz bir uygulama mağazasında değil ve henüz bir iPad veya iPhone sürümü yok.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu bunları okumaz.
- **Tasarım denetimleri henüz bir mühendis tarafından gözden geçirilmedi.** Testlerimiz bunları basılı tablo değerleri ve elle çözülmüş formüllerle karşılaştırır; bir tasarım kılavuzunun çözümlü örnekleriyle henüz değil. Gözden geçirilene kadar bunlar bir yardımcıdır: önemli elemanları elle denetleyin.
- Tasarım denetimleri birinci mertebe kuvvetleri kullanır (ikinci mertebe etkileri yok) ve yalnızca I profilleri denetler. Henüz yapılmadı: borular, köşebentler, kanallar, kaynaklı profiller, eğilmede narin (AISC) veya 4. sınıf (Eurocode) parçalar, burulma, kesme burkulmasının eğilmeyle birlikte hali, birleşimler, yorulma, yangın, deprem detayları ve beton. Basınçtaki narin bir parça basınç denetimlerinin dışında kalır ve eleman "geçer, kısmen denetlendi" olarak görünür.
- Çerçeve analizi hâlâ birinci mertebe ve doğrusaldır; gerçek bir işte bir mühendis tarafından henüz denenmedi.
- Cıvata delikleri, cıvatalar, kaynaklar ve temeller USD dışa aktarımında yer almaz.

Diğer her şey [Henüz yapılmayanlar](topic:not-built-yet) başlıklı konudadır.
