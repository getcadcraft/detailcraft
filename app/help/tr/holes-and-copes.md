---
title: Delik ve ağız kesimleri ekleme
summary: Gövdelere, flanşlara ve levhalara delik girin; bir kiriş ucundaki flanşları parçanın kesim ucundan ölçülen ağız kesimleriyle kesin.
keywords: delik, delikler, cıvata deliği, ağız kesimi, çentik, kesim, ağız açma, delme, zımbalama, gövde deliği, flanş deliği
from: 33d12398
---

Delikler ve ağız kesimleri konumlarına göre girilir. Elemana aittirler ve onunla birlikte hareket ederler.

Birleşimlerin (uç levhaları, taban levhaları) açtığı delikler sizin için eklenir; bunları siz yazmazsınız. "… birleşimlerden gelen delikler (birleşimi düzenleyin)" olarak listelenirler.

## Konumlar nereden ölçülür

- **x**, parçanın **kesim başlangıcından** boyunca uzanır: bir birleşim geri kesmişse başlangıç ucu. Bu nedenle x = 0 ızgara noktası değil, çeliğin gerçek ucudur.
- **y**, kesitin merkezinden yüzey boyunca ölçülür:
   - **gövdede**: orta derinlikten yukarı (pozitif) veya aşağı;
   - **bir flanşta** veya **bir levhada**: genişlik boyunca, merkez çizgisinden.
- Elemanın başlangıcı, yerleştirirken ilk tıkladığınız noktadır. {{ui:Ends (x, y, z mm)}} satırları hangi ucun hangisi olduğunu gösterir.

## Delik ekleme

1. Elemanı seçin.
2. {{ui:Properties}} panelindeki {{ui:Holes}} kutusunda {{ui:Face}} seçin: {{ui:Web}}, {{ui:Top flange}} veya {{ui:Bottom flange}} (I kesit, kanal veya dikdörtgen boru için) ya da {{ui:Plate face}} (levha için).
3. {{ui:x along (mm)}}, {{ui:y across (mm)}} ve {{ui:Diameter (mm)}} değerlerini yazın. Form x 100, y 0, çap 22 değerleriyle başlar.
4. {{ui:Add hole}} seçin.

Durum çubuğu "Delik eklendi. x kesim başlangıcından; y kesit merkezinden ölçülür (gövde: yukarı, flanş/levha: genişlik boyunca)." yazar. Delik listede görünür ve görünümde yüzeyin içinden koyu bir tapa olarak görünür.

Bir deliği kaldırmak için listede yanındaki × işaretini seçin.

Köşebentler ve yuvarlak borular henüz delik almaz: {{ui:Holes}} kutuları bunu belirtir.

:::note
3B görünümde delikler, çeliğin içinden kesilmiş değil, koyu tapalar olarak çizilir. NC dosyalarında, imalat çizimlerinde ve IFC dışa aktarımında ise gerçek deliklerdir.
:::

X'i parçanın herhangi bir ucunun ötesinde olan bir delik, {{ui:Problems}} sekmesinde "bir delik parçanın ucunun dışında" olarak görünür.

## Ağız kesimi ekleme

Ağız kesimleri I kesitler içindir: bir uçta üst veya alt flanşı (ve o derinlikteki gövdeyi) keserler; böylece kiriş başka bir elemanı geçer.

1. Bir I kesitli eleman seçin.
2. {{ui:Copes}} kutusunda {{ui:End}} ({{ui:Start}} veya {{ui:End}}) ve {{ui:Side}} ({{ui:Top}} veya {{ui:Bottom}}) seçin.
3. {{ui:Length (mm)}} (o uçtan kiriş boyunca) ve {{ui:Depth (mm)}} (üstten aşağı veya alttan yukarı) değerlerini yazın. Form 100 x 40 ile başlar.
4. {{ui:Add cope}} seçin.

Görünümde ağız kesimi çeliğin içinden kesilmiş olarak görünür. Listede, örneğin, "Başlangıçta üst: 100 x 40" yazar. Yanındaki × ile kaldırın.

Ağız kesimleri köşelidir: iç köşede henüz yarıçap yoktur.

## Delik ve ağız kesimlerinin işaretleri nasıl etkilediği

İki parça, yalnızca delikleri ve ağız kesimleri 1 mm içinde eşleşirse aynı parça işaretini alır; parçanın ters çevrilmesine izin verilir. Bir grubun bir kirişine delik eklemek ona yeni bir işaret verir. Bkz. [İşaret kuralları](topic:mark-rules).
