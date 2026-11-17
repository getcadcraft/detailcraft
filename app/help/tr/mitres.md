---
title: Gönye birleşimleri
summary: Bir açıyla buluşan iki I profilli elemanı birleştirin; her iki uç, açıyı ikiye bölen düzlemde kesilir ve isterseniz uç levhaları, cıvatalar ve takviyeler eklenir.
keywords: gönye, miter, gönye birleşimi, diz, payanda, portal çerçeve, sırt, köşe, açılı kesim, eğik kesim, uç levhası, cıvatalı uç levhası, takviye, bağlan
from: cd8380d4
---

Gönye, uçları bir açıyla buluşan iki I profilli elemanı birleştirir; örneğin portal çerçevenin dizi, bir sırt ya da planda köşe dönen iki kiriş. DetailCraft her iki ucu, aralarındaki açıyı ikiye bölen düzlemde keser; böylece iki kesim yüzü eşleşir. İsterseniz her kesilmiş uca bir uç levhası ekler, iki levhayı birbirine cıvatalar ve her elemana bir çift gövde takviyesi yerleştirir.

## Nerede çalışır

- Uçları **aynı düğümde** buluşan iki **I profil** (IPE, HEA, HEB, W ve benzeri). Her eleman her iki yönde de çizilmiş olabilir.
- Elemanlar arasındaki açı en az 15° olmalıdır. Doğru üzerindeki elemanlar reddedilir: onun yerine bir [ek](topic:splices) kullanın.
- Düz kesim (levhasız) elemanlar nasıl buluşursa buluşsun çalışır. **Uç levhaları**, iki elemanın gövdelerinin düzleminde buluşmasını gerektirir; portal dizinde ya da sırtta olduğu gibi. Planda köşe dönen iki kiriş flanşlarının düzleminde buluşur, bu yüzden yalnızca düz kesim alırlar.
- Farklı boyutlardaki elemanlar birleştirilir, ancak bir uyarıyla: kesim yüzleri eşleşmez.

## Gönye ekleyin

1. İki elemanı seçin: birine tıklayın, sonra diğerine {{key:Shift}}+tıklayın.
2. {{ui:Connect}} grubunun {{ui:More}} menüsünden {{ui:Mitre}} seçeneğini seçin. Gönye iletişim kutusu açılır.
3. Numaralı alanları ayarlayın. Yanındaki çizim, siz yazarken sizin sayılarınızdan oluşturulur ve numaralı daireleri her alanın neyi ayarladığını gösterir.
4. {{ui:Add the mitre}} seçeneğini seçin. İkiden fazla eleman seçtiyseniz, aralarındaki her boş birleşim aynı gönyeyi alır.

Gönyeyi sonradan değiştirmek için onu seçin (levhalarından birine tıklayın) ve sağ panelde {{ui:Mitre dialog with preview}} seçeneğini seçin ya da ayarlarını doğrudan orada değiştirin. Düz bir kesimin tıklanacak levhası yoktur: iki elemanını seçin ve yeniden {{ui:Mitre}} seçeneğini seçin; iletişim kutusu o gönyede açılır. {{ui:Benzerlerine uygula (n)}}, aynı iki profil arasında aynı açıdaki her boş birleşime onu kopyalar.

## Numaralı alanlar (mm)

| No. | Ayar | Varsayılan | Ne yapar |
|---|---|---|---|
| 1 | Levhalar arasındaki boşluk (ya da kesim uçları) | 0 | Birleşimde açık boşluk. Her taraf bunun yarısını tutar |
| 2 | Uç levhaları, levha kalınlığı | açık, 20 | Her kesilmiş uca her yönde kaynaklanan bir uç levhası. Düz kesim için işaretini kaldırın |
| 3 | Cıvata sıraları, sıra adımı, hat aralığı, dış sıra | 4, 0, 0, kapalı | Adım 0, sıraları başlıklar arasında eşit dağıtır. Hat aralığı 0, levha genişliğinin yarısıdır; en az deliğin 2.4 katı. Dış sıra, levhanın dış başlığın ötesindeki uzantısına girer |
| 4 | Levhanın dış başlığın ötesine uzanması | 0 | Levhaların dış başlığın ötesine kesim boyunca ne kadar uzandığı |
| 5 | Levhanın iç başlığın ötesine uzanması | 0 | Aynısı iç taraf için |
| 6 | Gövde takviyeleri, kesimin ötesindeki mesafe | kapalı, 50 | Her elemanda bir çift, gövdenin iki yanında, elemana dik ve kesiminin uzak ucunun bu kadar ötesinde |
| 7 | Takviye kalınlığı | 10 | |

{{ui:Bolts}} altında: cıvata çapı, delik, sınıf ve uzunluk payı (20, 22, A325, 30), uç levhalarındaki gibi. {{ui:Plates and welds}} altında: levha genişliği (0 = başlık genişliği), köşe kaynağı boyutu (8) ve levha malzemesi (A36).

## Ne elde edersiniz

- **Kesimler.** Her elemanın ucu kendi düzleminde kesilir. Listelerdeki, çizimlerdeki ve NC dosyalarındaki uzunluğu **toplam uzunluktur**: kare ucundan kesimin en uzak noktasına kadar.
- **Levhalar** kendi elemanlarına aittir: her elemanın montajı, eleman, uç levhası ve takviyeleridir. Cıvatalar birleşimin saha cıvatalarıdır: malzeme listesi onları bir kez sayar ve her elemanın montaj çizimi onları serbest cıvata olarak listeler.
- **Çizimler** eğik uçları ve levhaları gösterir; gönyeli bir elemanın imalat çizimi her kesimin kareden açısını not eder.
- **NC dosyaları** (DSTV) standardın istediği gibi eğik kesim açılarını başlıkta taşır ve kesimi izleyen konturlar içerir. Her NC dosyasında olduğu gibi, kesmeden önce kendi atölyenizin NC görüntüleyicisinde kontrol edin.
- **IFC**, her elemanın ekstrüzyonunu kendi kesim düzlemiyle kırpar; böylece diğer programlar gerçek kesimi gösterir.
- **İşaretler:** gönyeli bir eleman, aynı uzunluktaki kare kesilmiş bir elemandan farklı bir parçadır. Aynı kesimlere sahip iki eleman bir işareti paylaşır; bir sırtın iki kirişi gibi.

## Bilmeniz iyi olacaklar

- Gönye canlı kalır. Elemanlardan birini taşıyın ya da boyutlandırın; kesim, levhalar ve cıvatalar izler. Elemanlardan birini silin; gönye kalkar ve diğer elemanın ucu yeniden kare olur.
- Uyarılar, diğer bağlantılarla aynı EN 1993-1-8 asgarilerini kullanır (uç ve kenar mesafesi 1.2 × delik, adım 2.2 × delik, hat aralığı 2.4 × delik); buna ek olarak başlığa çok yakın cıvata sıraları, başlıklardan dar levhalar ve yer olmayan takviyeler.
- Değerler başlangıç değerleridir, bir tasarım değildir. DetailCraft birleşimin dayanımını denetlemez; payanda, alın kaynaklı gönye ya da diğer elemanın başlıklarıyla aynı hizada takviye üretmez.
