---
title: Merdivenler
summary: Düz bir çelik merdiveni yükselme, gidiş ve genişlikten yerleştirin: iki merdiven kirişi ve basamak levhaları, tek bir kaynaklı montaj.
keywords: merdiven, merdivenler, merdiven kirişi, basamak, basamak yüksekliği, gidiş, burun, merdiven kolu, çelik merdiven, IBC 1011, Blondel
from: 62fa3845
---

Düz bir çelik merdiven: iki merdiven kirişi (ucu içe bakan kanallar veya kenara dikilmiş düz bantlar) ve her basamakta, aralarında kaynaklı bir basamak levhası. DetailCraft basamak yüksekliklerinin sayısını yükseklikten hesaplar, bunları yapı yönetmeliğinin sınırlarıyla karşılaştırır ve merdiveni tek bir atölye montajı yapar.

## Merdiven yerleştirin

1. {{ui:Yerleştir}} grubunda {{ui:Merdiven}} seçeneğini belirleyin veya {{key:S}} tuşuna basın.
2. Merdiveni sağdaki ayarlarla kurun: **tırmanış yönü** (0° +x boyunca, 90° +y boyunca), **yükseklik** (0 = bir sonraki kata kadar), **gidiş**, **merdiven kirişleri arasındaki net genişlik**, **izin verilen en yüksek basamak yüksekliği**, **merdiven kirişi**, **basamak levhası kalınlığı**, **burun** ve malzeme.
3. Bir ızgara kesişimine tıklayın: merdivenin orta çizgisi üzerindeki ilk basamağın ayağıdır.

Durum çubuğu kaç basamak yaptığını söyler. Herhangi bir ayarını, konumunu veya fazını değiştirmek için merdiveni seçin (bir kirişe veya basamağa tıklayın). Özellikler ayrıca basamak yüksekliklerini, basamakları, toplam gidişi, eğimi ve 2 × basamak yüksekliği + gidişi gösterir.

## DetailCraft neleri hesaplar

- **Basamak yükseklikleri.** İzin verilen en yüksek değerin altında veya ona eşit kalacak en az sayıda basamak yüksekliği: 178 mm veya daha az yükselmede 3000 mm yükseklik 176.5 mm'lik 17 basamak verir. Basamak levhası sayısı basamak yüksekliği sayısından bir eksiktir (üst kat son adımdır).
- **Basamak levhaları.** Varsayılan olarak gidiş + burun derinliğinde (280 + 25 = PL6x305) ve net genişlik kadar uzunlukta bir levha. Üst yüzü her basamak yüksekliğinde, ön kenarı (burun) basamak çizgisinin önünde.
- **Merdiven kirişleri.** Merdivenin eğimine göre, alt kat ile buluştukları yerden üst kat ile buluştukları yere kadar, net genişliğin hemen dışında. Üst kenarları burun çizgisinin 50 mm üstündedir. Kanalın uçları merdivenin içine bakar; PL12x250 gibi bir düz bant kenarına dikilir.
- **Kaynaklar.** Her basamak iki merdiven kirişine de kaynaklanır. Basamaklar ve sağ merdiven kirişi sol merdiven kirişine kaynaklanır; böylece merdiven tek bir montaj işareti (ST1) ve kendi montaj çizimini alır. Merdiven kirişleri st… parça işaretlerini, basamaklar p… işaretlerini alır.
- **Kontroller.** Bir basamak yüksekliği 4 ila 7 in. (102 ila 178 mm) dışında olduğunda veya gidiş 11 in. (279 mm) altına düştüğünde, IBC 2021 bölüm 1011.5.2 sınırları ihlal edilmiş olur; 2 × basamak yüksekliği + gidiş 600 ila 650 mm dışında olduğunda (yaygın bir konfor kuralı) ve merdiven kirişi basamakları taşıyamayacak kadar sığ olduğunda uyarılır. Bilinmeyen bir merdiven kirişi profili merdivenin yapılmasını durdurur.

## Bilmekte yarar

- Taşıma, döndürme, aynalama, kopyalama, yapıştırma, silme ve fazlar, merdivende de bir eleman gibi çalışır. Döndürme tırmanış yönünü çevirir; aynalama onu aynalanmış yöne gönderir.
- Merdiven kirişleri IFC'ye IfcMember, basamaklar IfcPlate olarak dışa aktarılır; ikisi de NC dosyalarına ve malzeme listesine gider. [Çakışma denetimi](topic:clash-check) merdivenin kendi parçalarını dışarıda bırakır (birbirine kaynaklıdırlar).
- Bu düz merdiven, levha basamaklı tek bir koldur. Sahanlıklar, parmaklıklı korkuluklar, katlanmış tava veya ızgara basamaklar, seçtiğiniz bir kural seti, bir kesim listesi ve merdiven kirişi delik çizimleri için Merdiven aracında {{ui:Çelik merdiven üreticisini kullan}} kutusunu işaretleyin (bkz. Çelik merdiven üreticisi).
- Merdiven kirişleri zeminlere karşı kare kesilir: zeminle olan uç kesimleri yapılmaz.
- DetailCraft merdiveni tasarlamaz: merdiven kirişleri ve basamaklar dayanım veya sehim bakımından kontrol edilmez.
