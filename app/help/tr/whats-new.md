---
title: 0.7'de neler yeni
summary: ASCE 7 veya EN 1990 yük birleşimleriyle ve AISC 360 ya da EN 1993-1-1'e göre eleman denetimleriyle çelik I profillerinin tasarım denetimleri, çelik modelin USD dışa aktarması, USD için bir asistan aracı, büyük ve küçük düğmeli bir Çelik şeridi, toparlanan paneller ve taşınan iletişim kutuları.
keywords: yenilikler, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, tasarım denetimleri, çelik tasarımı, kullanım oranı, yük birleşimleri, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Ulusal Ek, çatı hareketli yükü, sehim sınırı, usd, usda, usdc, usdz, openusd, asistan, mcp, çelik şeridi, şerit, bölünmüş düğme, birimler, sıkı, paneller, iletişim kutuları, portekizce
from: 17d1e0bb
---

Bu, DetailCraft 0.7'de 0.6'ya göre nelerin değiştiğidir. 0.6'nın karkas analizinin artık ikinci bir adımı var: çelik elemanları bir tasarım yönetmeliğine göre denetlemek.

## Yeni

### Gönye birleşimleri (0.7.1)

- **Bir açıyla buluşan iki I profili**, örneğin bir portal köşesi veya bir mahya: ikisini de seçin, {{ui:Bağlan}} grubunun {{ui:Daha fazla}} menüsünde {{ui:Gönye}} seçeneğini seçin; her iki uç da açıyı ikiye bölen düzlemde kesilir. Birbirine cıvatalanmış uç levhaları ve gövde takviyeleri, yeni Gönye iletişim kutusunda işaret kutularıdır; numaralı alanları siz yazdıkça oluşturulan birleşim çiziminizle eşleşir. Gönye, elemanlar taşındığında onları izler ve çizimlere, NC dosyalarına (eğik kesimler), IFC'ye ve malzeme listesine taşınır. Bkz. [Gönye birleşimleri](topic:mitres).

### Tasarım denetimleri

- **Yönetmelikten yük birleşimleri.** {{ui:Analiz}} sekmesinde yeni {{ui:Tasarım denetimleri}} bloğunun bir {{ui:Tasarım yönetmeliği}} vardır: ASCE 7 + AISC 360 (ABD, LRFD) veya EN 1990 + EN 1993-1-1 (Eurocode). Her yük durumuna türünü verin (ölü, hareketli, yeni çatı hareketli, kar, rüzgâr, deprem), {{ui:Birleşimleri oluştur}} düğmesine basın ve DetailCraft durumlarınızın yönetmeliğe göre dayanım ve kullanılabilirlik birleşimlerini yazar. Kendi yazdığınız birleşimler kalır. Bkz. [Birleşimleri oluşturma](topic:design-checks#make-the-combinations).
- **Ulusal Ek değerleri.** Eurocode için katsayılar önerilen değerlerle başlar; {{ui:Ulusal Ek değerleri}} ülkenizinkileri yazmanıza izin verir ve bunlar modelde kaydedilir. Bkz. [Birleşimleri oluşturma](topic:design-checks#make-the-combinations).
- **Elemanları denetle.** {{ui:Elemanları denetle}} her çelik I profilini çekme, burkulmalı basınç, yanal burulmalı burkulmalı eğilme, kesme, eksenel kuvvetli eğilme ve belirlediğiniz {{ui:Sehim sınırı}}na karşı sehim için denetler. Tablo her elemanın kullanım oranını, belirleyici denetimi ve birleşimini gösterir ve elemanlar modelde renklendirilir (mavi, yeşil, aşı boyası, kırmızı, denetlenmediyse gri). Bkz. [Elemanları denetleme](topic:design-checks#check-the-members).
- **Raporda.** {{ui:Rapor (PDF)}} ve {{ui:Rapor (CSV)}} yönetmelik sürümlerini, ayarları, eleman başına kullanım oranını ve kullanılan her maddeyi ekler. Bkz. [Rapor](topic:design-checks#the-report).
- **Bir mühendis gözden geçirene kadar bir yardımcı.** Yalnızca birinci mertebe kuvvetleri kullanır. Tüpler, korniyerler, U profilleri, kaynaklı profiller ve narin ya da sınıf 4 parçalar, gerekçesiyle birlikte "denetlenmedi" der; burulma, birleşimler ve beton denetlenmez. Bkz. [Neler denetlenmez](topic:design-checks#what-is-not-checked).

### USD

- **Çelik modeli USD olarak dışa aktarın.** {{ui:Çıktı}} grubundaki {{ui:USD}} modeli render programları ve sahne montajı için {{ui:Metin (.usda)}}, {{ui:İkili (.usdc)}} veya {{ui:Paket (.usdz)}} olarak yazar: her montaj parçalarını tutar, her parça kesiti boyu boyunca çekilmiş ve ağız kesimleri yapılmış halidir ve her biri parça işaretini, profilini, kalitesini, uzunluğunu ve ağırlığını taşır. Cıvata delikleri, cıvatalar, kaynaklar ve temeller USD örgülerinde yoktur. Bkz. [Çelik modeli USD olarak dışa aktarma](topic:usd).

### Yapay zekâ asistanları

- **Asistanlar için USD.** CadCraft Studio üzerinden bağlanan kendi asistanınız modeli USD olarak dışa aktarabilir (`usd_export`) ve Studio'da izin verdiğiniz bir klasöre yazabilir. Bkz. [Bir asistan neler isteyebilir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Değişenler

- **Çelik şeridinde** büyük ve küçük düğmeler vardır: {{ui:Modelleme}} › {{ui:Elemanlar}} üzerinde küçük {{ui:Kolon}}, {{ui:Çapraz}} ve {{ui:Levha}} yanında büyük bir {{ui:Kiriş}}; {{ui:Detaylandırma}} › {{ui:Birleşimler}} üzerinde büyük bir {{ui:Uç levhaları}}, {{ui:Ek}} ve {{ui:Köşe levhası}} tek bir bölünmüş düğmeyi paylaşır; {{ui:Düzenle}} › {{ui:Pano}} üzerinde büyük bir {{ui:Yapıştır}}, {{ui:Olduğu yere yapıştır}} ve {{ui:Çoğalt}} grubun okunun arkasındadır. {{ui:İmalat}} › {{ui:Aktarım}} IFC'nin yanında {{ui:USD dışa aktar}} içerir. Diğer menü stilleri eskisi gibi görünür. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse#the-three-styles).
- [Karkası analiz etme](topic:frame-analysis) artık tasarım denetimlerine işaret eder ve birleşimleri yönetmelikle oluşturulabilir.

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} içinde uzunluk, alan, hacim, açı ve eğim için birer liste vardır; boyutlar birimlerin tanımlarının verdiği tam değerlerdir (ABD ölçme fiti kendi birimidir). Hiç kullanmadığınız birimleri kapatın, birim listelerinden çıkarlar; birini yıldızlayın, yeni çalışma onunla başlar. Bir dosya her zaman kendi birimini korur. DetailCraft'ın kendi kutuları listeleri henüz izlemez: uzunlukları hâlâ milimetre olarak yazılır. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha sıkı bir yerleşim ve toparlanan paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekrana daha fazlasını sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her yan panelin ince bir başlık çubuğu vardır: panelin yerleşmesi veya yüzmesi için sürükleyin, başka bir panelin çubuğuna bırakarak sekmeler olarak tek bir çerçeveyi paylaşın, kenara kayıp gitmesi için iğneleyin veya gizleyin ve kenardan geri getirin. Bkz. [Panelleri düzenleme](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** Bir iletişim kutusunu başlık çubuğundan çizimin önünden çekin; bıraktığınız yere geri gelir. Yeniden ortalamak için başlık çubuğuna çift tıklayın. Bkz. [Bir iletişim kutusunu taşıma](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on uygulamalı istek (bir çizimi düzenleme, bir takımı çıktı alma, çizimleri denetleme, bir modele soru sorma, bir metrajı toplama, bir parça varyantını deneme…), her birinde çağırdığı araçlar ve gereken izinlerle ve her biri testlerimizce yeniden oynatılarak. Uygulamalarda yapay zekâ yoktur. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** **Português (Portugal)**, {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} içinde yenidir. O, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** artık uygulamaların her sözcüğüne sahiptir; anadili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir.
- **CadCraft Studio**, bir güncelleme denetiminin neden başarısız olduğunu (sisteminiz için henüz dosya yok, ağ yok, hatalı imza) yalnızca "Bitti" demek yerine söyler ve kapattığınız bir Yenilikler kartını daha yeni bir sürüm çıkana kadar geri getirmeyi bırakır.

## Bu sürümde henüz olmayanlar

- **0.7 kod imzalı değildir.** İmzalama ve Microsoft Store paketi, sertifika doğrulaması henüz sonuçlanmadığı için 0.8'e kaydı. getcadcraft.com/download adresinde her dosyanın yanındaki SHA-256 değerini denetleyin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Daha fazla bilgi}}, ardından {{ui:Yine de çalıştır}} seçin. Mac'te ilk seferde CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. CadCraft Studio henüz bir uygulama mağazasında değildir ve henüz iPad veya iPhone sürümü yoktur.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu onları okumaz.
- **Tasarım denetimleri henüz bir mühendis tarafından gözden geçirilmedi.** Testlerimiz onları basılı tablo değerleriyle ve elle çözülmüş formüllerle karşılaştırır, henüz bir tasarım kılavuzunun çözümlü örnekleriyle değil. Gözden geçirilene kadar bir yardımcıdır: önemli elemanları elle denetleyin.
- Tasarım denetimleri birinci mertebe kuvvetleri kullanır (ikinci mertebe etkileri yok) ve yalnızca I profillerini denetler. Yapılmayanlar: tüpler, korniyerler, U profilleri, kaynaklı profiller, eğilmede narin (AISC) veya sınıf 4 (Eurocode) parçalar, burulma, eğilmeyle birlikte kesme burkulması, birleşimler, yorulma, yangın, deprem detaylandırması ve beton. Basınçta narin bir parça basınç denetimlerini dışarıda bırakır ve eleman "geçti, kısmen denetlendi" der.
- Karkas analizi hâlâ birinci mertebe ve doğrusaldır ve henüz gerçek bir işte bir mühendis tarafından denenmedi.
- Cıvata delikleri, cıvatalar, kaynaklar ve temeller USD dışa aktarmasında yoktur.

Geri kalan her şey [Henüz yapılmayanlar](topic:not-built-yet) içindedir.
