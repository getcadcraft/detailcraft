---
title: Ahşap ve hafif çelik çerçeve panelleri
summary: Ahşap veya hafif soğuk şekillendirilmiş çelikten duvar, döşeme ve çatı panelleri çerçeveleyin; her parça, bir kesim listesi, bir imalat çizimi ve satın alınacak stok ile birlikte.
keywords: çerçeveleme, ahşap, kereste, odun, hafif çelik, soğuk şekillendirilmiş, dikme, kiriş, makas, başlık, ana dikme, yardımcı dikme, kısa dikme, kesim listesi, imalat çizimi, panel
from: 3e38ffb9
---

{{ui:Framing}} sekmesi tarif ettiğiniz panelleri çerçeveler ve bir çerçeveleme ekibinin ve kereste deposunun istediği çıktıları verir. Paneller model dosyasına kaydedilir.

:::warning
Boyutlar, aralık ve başlıklar sizindir. DetailCraft, o aralıktaki bir dikmenin o duvarı taşıdığını ya da bir başlığın o açıklığı geçtiğini kontrol etmez: bu, yönetmeliğinizin tabloları ve mühendisinizin işidir.
:::

## Panel ekleme

{{ui:Add a wall}}, {{ui:Add a floor}} veya {{ui:Add a roof}} seçin, sonra ölçüleri milimetre cinsinden, malzemeyi (ahşap veya hafif çelik) ve eleman boyutunu doldurun. Ahşap boyutları, planlanmış ölçüleriyle birlikte nominal adlarıdır (2×4, 38 × 89 mm'dir). Çelik dikmeler derinlik ve kalınlığa göre adlandırılır, örneğin `C92-1.2`.

## Duvarlar

Bir duvarın bir alt tablası, bir veya daha fazla üst tablası (çelikte bir ray), uç dikmeleri, verdiğiniz aralıkta dikmeleri ve her açıklık için: iki ana dikme, iki yardımcı dikme, seçtiğiniz boyutta ve kat sayısında bir başlık ve başlığın üstünde (ve bir pencerenin eşiğinin altında) kısa dikmeler vardır. Her açıklığa sol uçtan uzaklığını, genişliğini ve ara döşemeden ölçülen kaba açıklık üst ve alt kotlarını verin; kapının alt kotu 0'dır.

## Döşemeler ve çatılar

Bir döşemede, açıklık boyunca ve genişliğinin tamamında kirişler, iki uçta kenar kirişleri ve işaretlerseniz açıklık ortasında blokajlar bulunur. Bir çatı paneli beşik çatıdır: verdiğiniz aralıkta bir çift makas (uzunlukları, eğim boyunca saçak çıkmasını içerir) ve bir mahya tahtası.

## Çıktılar

Her panel, her parçası işaretlenmiş ölçekli bir çizimde parçalarını, işaretine göre bir kesim listesini ve toplamı gösterir. {{ui:Stock to buy}} tablosu, tüm panellerin kesimlerini her parçanın kesimlerini karşılayan en kısa stok boylarına yerleştirir. {{ui:Save the shop drawing (SVG)}} çizimi yazar; {{ui:CSV}} düğmesi her kesim listesini ve stok listesini yazar.

## Paneli modelde yerleştirme

Her panelin altında nereye gittiğini belirtin (x, y, z milimetre cinsinden ve açı) ve {{ui:Place as members}} düğmesine basın: her parça modelde bir eleman olur; boyutundaki planlanmış kesit ve malzemenin ağırlığıyla (ahşap için yaklaşık 500 kg/m³, dikmeler için çelik). Bir duvar, alt ucu z'de olacak şekilde açı boyunca sol alt ucundan uzanır; bir döşemenin kirişleri alt yüzeyi z'de olacak şekilde yatar; bir çatının beşik cephesi açı boyunca uzanır ve z, duvar tablalarının üstünde olur. Her başlık katı yan yana bir elemandır. Düğmeye yeniden basmak, daha önce yerleştirilen elemanların yerini alır ve {{ui:Remove the placed members}} onları kaldırır; her biri tek bir geri alma adımıdır. Analiz bu elemanları hariç tutar: bunlar çelik çerçeve elemanları değildir.

## PDF sayfaları

{{ui:PDF sheets}} her panel için bir A3 sayfa kaydeder: her parçası işaretlenmiş, ölçekli panel, genel ölçüler, kesim listesi ve bir başlık şeridi.

{{ui:Problems}} panelindeki sorunlar: bir duvarın ucuna veya başka bir açıklığa çok yakın açıklık, üst tablaların altına sığmayan bir başlık, en uzun stoktan daha uzun bir parça.

{{ui:Problems}} paneli ayrıca duvar panelleri ve betonarme duvarlar için **Arayüzler (LOD 350)** listeler: duvarın ucunu veya üstünü aşan bir açıklık, üst üste binen iki açıklık ve kenar donatısı olmayan, 1000 mm'den geniş bir beton duvar açıklığı. Bunlar önerilerdir; BimCraft'ın denetiminin çalıştırdığı aynı kurallardır. Genişlik CadCraft'ın başlangıç değeridir, bir standart değildir.
