---
title: Eşgüdüm için IFC dışa aktarımı
summary: Tüm modelin IFC4 dosyasını yazın: çelik, cıvatalar, temeller ve donatı; mimarlar, mühendisler ve diğer yazılımlarla paylaşmak için.
keywords: ifc, ifc4, ifc2x3, bim, dışa aktar, içe aktar, ifc içe aktar, delikler, cıvatalar, gevşek cıvatalar, açıklıklar, bağlantı elemanları, eşgüdüm, model alışverişi, step, openbim, çakışma, görüntüleyici
from: cfcb0cd6
---

IFC dışa aktarımı, tüm modeli BIM yazılımlarının ve IFC görüntüleyicilerinin açabileceği tek bir IFC4 dosyası olarak yazar.

## Dışa aktarın

1. {{ui:Çıktı}} grubunda {{ui:IFC}} seçeneğini belirleyin.
2. Tarayıcı `<name>.ifc` dosyasını indirir. Durum çubuğu neyin dahil edildiğini söyler; örneğin "IFC4 dışa aktarıldı: 25 parça, 88 bağlantı elemanı, 7 temel, 132 donatı."

Modelde parça, temel veya donatı yoksa durum çubuğu "Henüz dışa aktarılacak bir şey yok." yazar.

## Dosyada neler var

| DetailCraft'ta | IFC dosyasında |
|---|---|
| Her kat | Bir bina katı (IfcBuildingStorey), tek bir proje, arsa ve bina altında |
| Akslar | Eksenleri ve etiketleriyle bir IfcGrid |
| Kolonlar, kirişler, çaprazlar | IfcColumn, IfcBeam, IfcMember (çapraz); her biri gerçek boyutlarıyla standart bir profil şeklinin ekstrüzyonu |
| Levhalar, uç levhaları, taban levhaları | IfcPlate |
| Delikler ve ağız kesimleri | Parçadan kesilen açıklıklar (IfcOpeningElement) |
| Bir eleman ve kaynaklı levhaları | Montaj işaretiyle etiketlenmiş bir montaj (IfcElementAssembly) |
| Cıvatalar ve angkraj çubukları | Çap ve uzunluklu IfcMechanicalFastener |
| Temeller | Beton metni malzeme olarak, IfcFooting (tabla temel) |
| Her donatı çubuğu | Donatı işaretiyle, çapla, alanla ve uzunlukla IfcReinforcingBar; gerçek merkez çizgisi boyunca, büküm yerlerinde gerçek yaylarla süpürülmüş |

Her parçanın etiketi parça işaretidir. Her öğe ayrıca işaretlerini, kesitini ve ağırlığını içeren bir "DetailCraft" özellik kümesi taşır. Her öğe, en düşük noktasında veya altında olan en yüksek katta yer alır. Malzemeler sınıfa göre gruplanır.

## Yeniden dışa aktarımlar için sabit kimlikler

Her öğenin IFC kimliği (GlobalId), model adından ve öğenin modeldeki kendi kimliğinden hesaplanır. Aynı modeli iki kez dışa aktarın; kimlikler eşleşir, böylece sürümleri karşılaştıran yazılımlar neyin değiştiğini anlayabilir.

:::warning
Modelin adını değiştirmek her kimliği değiştirir. Bir projenin sürümleri arasında model adını aynı tutun.
:::

## Kontrol edin

DetailCraft'ın IFC dosyaları, test paketindeki bağımsız bir IFC okuyucusu tarafından geri okunur. Programlar IFC'yi farklı biçimlerde okur; bu nedenle dosyaya güvenmeden önce ekibinizin kullandığı yazılımda açın. CadCraft'ın BimCraft uygulaması da IFC dosyalarını açar.

## Henüz yapılmadı

- Bağlantıları, temelleri ve donatıyı bir IFC dosyasından içe aktarmak. {{ui:IFC içe aktar}} kirişleri, kolonları, elemanları, levhaları, aksları, katları, delikleri, ağız kesimlerini ve cıvataları içe aktarır ve bıraktığı şeyleri listeler.
- Analitik veya yapısal analiz verisi.
- IFC4 referans görünümü dışındaki herhangi bir şey.

## İçe aktarma

{{ui:Dosya}} grubundaki {{ui:IFC içe aktar}} (veya görünüme bir `.ifc` dosyası bırakmak) bir IFC2X3 veya IFC4 dosyasından yeni bir model oluşturur:

- **Kirişler, kolonlar, elemanlar (çaprazlar) ve levhalar**; gövdesi DetailCraft'ın bildiği tek bir ekstrüde profildir, kataloğa eşleştirilir veya özel profil olarak tutulur. **Aksları** ve **katları** dosyanın ızgara ve katlarından alır.
- **Delikler:** Bir parçanın yüzlerinden birine dik her yuvarlak açıklık (içe alınan bir parçayı boşaltan IfcOpeningElement): I profilin veya U profilin gövdesi ya da flanşları, bir borunun duvarları, bir levha, bir açının kenarları. Bir borunun iki duvarından geçen delik bir kez içe alınır.
- **Ağız kesimleri:** Bir I profilin veya U profilin tüm genişliğini bir uçtan, üstten aşağı veya alttan yukarı kaplayan dikdörtgen bir açıklık.
- **Cıvatalar:** Her IfcMechanicalFastener veya IfcFastener; çapı, uzunluğu, sınıfı ve türüyle (cıvata veya angkraj çubuğu) **gevşek cıvata** olarak. Gevşek cıvatalar görünümde, malzeme listesinde ve IFC dışa aktarımında görünür; elemanları taşıdığınızda yerlerinde kalır. Hiçbir şey seçili değilken {{ui:Özellikler}} paneli bunları sayar ve bağlantıları bunun yerine siz eklediğinizde kullanmak için {{ui:Gevşek cıvataları kaldır}} seçeneğini taşır.

Raporda diğer her şey sınıfına göre, dışarıda bırakılma nedeniyle listelenir: duvarlar ve döşemeler, temeller ve donatı, yuvalı delikler, yuvarlak borulardaki delikler, birleşimler (bir IFC dosyası onların levhalarını ve cıvatalarını taşır, ama onları oluşturan kuralı taşımaz).
