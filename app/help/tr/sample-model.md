---
title: Örnek çerçeveyi keşfedin
summary: Yerleşik iki açıklıklı çerçeveyi açın ve DetailCraft'ın işaretlerden NC dosyalarına kadar neler ürettiğini bununla öğrenin.
keywords: örnek, örnek model, demo, çerçeve, öğrenme, tur, deneme
from: 5c5944dd
---

Örnek çerçeve küçük ve eksiksiz bir modeldir: DetailCraft'ın oluşturduğu her türden şey en az bir kez görünür. Uygulamayı öğrenmenin ve bir dışa aktarımı kullanmadan önce denemenin en hızlı yoludur.

## Açın

1. {{ui:File}} grubunda {{ui:Sample}} seçin.
2. Mevcut modelinizde kaydedilmemiş değişiklikler varsa {{ui:Save first}} veya {{ui:Discard changes}} seçin.
3. Durum çubuğu "Örnek çerçeve: taban levhalı 6 kolon, uç levhalı 4 kiriş, bir çapraz, donatılı 7 temel." yazar.

Örnek, "Örnek çerçeve" adında yeni bir model olarak açılır. Başka hiçbir şeyi değiştirmez ve geri alınacak bir şeyi yoktur.

## İçinde neler var

- **Aksları** 1, 2, 3 6000 mm'de ve A, B 7000 mm'de. **Seviyeler**: Seviye 1 0'da, Seviye 2 4000'de.
- **Altı kolon**, W12x50, Seviye 1'den Seviye 2'ye her kesişimde; her biri 25 mm taban levhası ve dört angkraj çubuğu üzerinde.
- **Dört kiriş**, W16x26, Seviye 2'de A ve B aks çizgileri boyunca, çeliğin üstü seviyede, her iki ucunda düz cıvatalı bir uç levhasıyla (toplam sekiz).
- **Bir çapraz**, HSS4x4x1/4, Seviye 1'de A/1'den Seviye 2'de A/2'ye.
- **Altı tekil temel**, 2000 x 2000 x 600, her kolonun altında; iki yönde kancalı alt donatı ağıyla.
- **Çerçevenin yanında bir temel daha**, 2400 x 1800 x 600, betonarme bir ayak için yukarı dikilmiş altı kancalı bekleme donatısıyla.

## Denemeniz gerekenler

1. Bir kirişe tıklayın. {{ui:Part mark}}, {{ui:Assembly}}, {{ui:Cut length}} ve {{ui:Cut back}} değerlerini okuyun: kesim boyu, 6000 mm'lik aks aralığından kısadır; çünkü her uç levhası kirişi, kolon derinliğinin yarısı artı levha kalınlığı kadar geri keser.
2. Bir kolona tıklayın. {{ui:Holes}} altında, uç levhalarının flanşında açtığı delikleri listeler ("bağlantılardan 8 delik"; ortadaki kolonlarda 16 var, her flanşta bir takım).
3. Soldaki {{ui:Part marks}} listesinde dört kirişin tümünün bir işareti paylaştığını görün: aynı çelik parçadır. Köşe kolonları da bir işaret paylaşır; delikleri ters yönlere baksa da, çünkü uç uca döndürülmüş bir kolon aynı parçadır. Her iki flanşında delik bulunan ortadaki kolonlar başka bir işaret alır.
4. Bir uç levhasına (ya da cıvatalarından birine) tıklayın. {{ui:Properties}} paneli levha, cıvata ve kaynak ayarlarını, oluşturduğu cıvataları (tutuşundan hesaplanan uzunluklarıyla) ve varsa kenar mesafesi uyarılarını gösterir.
5. {{ui:Bill of materials}} sekmesini açın. Parçalar, montajlar (uç levhaları olan bir kiriş tek bir montajdır) ve cıvatalar ile angkraj çubukları ağırlıklarıyla listelenir. Altı parça işareti görmelisiniz: c1 (iki orta kolon) ve c2 (dört köşe kolonu), ikisi de W12x50, 3975 mm; b1, dört W16x26 kiriş, 5650 mm; br1, çapraz; p1, sekiz PL20x180 uç levhası; ve p2, altı PL25x400 taban levhası. Bağlantı elemanları 64 adet 20 x 70 A325 cıvata ve 24 adet 20 x 575 angkraj çubuğudur.
6. {{ui:Bending schedule}} sekmesini açın. Altı özdeş temel donatı işaretlerini paylaşır; ayak temeli kendi işaretini ekler.
7. Çaprazı seçin ve {{ui:Output}} grubuna bakın: {{ui:Shop drawing}} soluk görünür, çünkü imalat çizimleri şimdilik yalnızca I kesitleri ve levhaları kapsar.
8. {{ui:NC files}} seçin. Zip dosyası her I kesit ve levha işareti için bir dosya içerir; durum çubuğu çaprazın işaretini yazılmamış olarak listeler.
9. {{ui:IFC}} seçin ve dosyayı herhangi bir IFC görüntüleyicide açarak diğer yazılımlarınızın bunu nasıl okuduğunu denetleyin.

## Başlangıç noktası olarak kullanın

Örnek sıradan bir modeldir. Değiştirin, sonra {{ui:Name}} alanında ona yeni bir ad verin ve {{key:Mod+S}} ile yeni adıyla kaydedin.
