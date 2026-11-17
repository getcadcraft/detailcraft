---
title: Ekler
summary: Bir kirişin veya kolonun iki parçasını uçtan uca, cıvatalı flanş ve gövde kapak levhalarıyla birleştirin.
keywords: ek, kiriş eki, kolon eki, kapak levhası, ek levhası, flanş levhası, gövde levhası, cıvatalı ek, birleşim, kaldırma, bağlan
from: 97d141c2
---

Cıvatalı bir ek, tek bir I profilin iki parçasını uçtan uca birleştirir: her flanşın dışında bir kapak levhası ve gövdenin her iki yanında birer levha vardır; levhalar iki parçadan birlikte cıvatalanır. DetailCraft parçaları boşluğa göre kısaltır, dört levhayı yerleştirir, levhalara ve iki parçaya delikleri açar, cıvataları ekler ve uç mesafeleri, aralıklar ve geçme konusunda uyarır.

## Nerede çalışır

- Aynı I profilli iki kiriş veya iki kolon parçası, uçtan uca ve doğru hizada birleşir: uçlar en fazla 50 mm aralıklı, parçalar paralel ve tek bir hat üzerinde (1 mm içinde). Her iki parça da her iki yönde çizilebilir.
- Yatay, eğimli veya dikey parçaların hepsi çalışır.
- Farklı derinlikteki veya farklı flanş genişliğindeki iki parça reddedilir; U profiller, L profiller ve boru profiller de reddedilir.

## Ek ekleyin

1. İki parçayı uçtan uca birleşecek şekilde çizin. Zaten çizili bir elemanı bölmek için onu iki parça olarak yeniden çizin.
2. Bir (veya iki) parçayı seçin ve {{ui:Bağlan}} grubunun {{ui:Daha fazla}} menüsünden {{ui:Ek}} öğesini seçin.
3. Seçili parçaların aynı profildeki başka bir parçayla yaptığı her serbest birleşim bir ek alır. Durum çubuğu kaç tane eklendiğini söyler.

Eki değiştirmek için onu seçin (levhalarından birine tıklayın); ayarları sağ panelde görünür. {{ui:Benzerlerine uygula (n)}} komutu, aynı profildeki parçalar arasındaki diğer her serbest birleşime kopyalar.

## Ayarlar (mm)

| Ayar | Varsayılan | Ne yapar |
|---|---|---|
| Uçlar arasındaki boşluk | 10 | Her parça bunun yarısı kadar kısaltılır |
| Cıvata çapı, delik, sınıf, boy payı | 20, 22, A325, 30 | Uç levhalarındakiyle aynı |
| Flanş levhası kalınlığı | 12 | Levha flanş kadar geniştir |
| Flanş cıvata sıraları (her iki yan) | 3 | Birleşimin her yanında flanş boyunca sıralar |
| Flanş cıvata aralığı | 75 | Eleman boyunca |
| Flanş cıvata hattı aralığı | 0 | İki cıvata hattı arası; 0 = flanş genişliği eksi 80 |
| Flanş uç mesafesi | 40 | Eleman ucundan ilk cıvataya, son cıvatadan levha ucuna |
| Gövde levhası kalınlığı | 8 | Gövdenin her iki yanında birer tane |
| Gövde cıvata sıraları | 3 | Gövde boyunca, ortalanmış |
| Gövde cıvata sütunları (her iki yan) | 2 | Birleşimin her iki yanında eleman boyunca |
| Gövde cıvata aralığı, gövde boyunca / eleman boyunca | 75, 75 | |
| Gövde uç mesafesi | 40 | Flanşlardakiyle aynı |
| Gövde levhası yüksekliği | 0 | 0 = köşe yuvarlatmaları arasındaki net gövde eksi üstte ve altta 10 |
| Levha malzemesi | A36 | Metin |

Levha uzunlukları cıvatalardan hesaplanır: flanş levhası = boşluk + 2 × (2 × uç mesafesi + (sıra − 1) × aralık); gövde levhaları da kendi sütunlarıyla aynı şekilde. Varsayılan değerlerle flanş levhaları 470 uzunluğundadır.

## Bilmeniz iyi olacaklar

- Levhalar, çizilen iki parçadan **ilk çizilen parçaya** aittir (özelliklerinde "ilk parça" olarak geçer): montaj çiziminde görünürler ve parçayla birlikte, kaynaksız, cıvatalı olarak gönderilirler. İkinci parçanın montaj çiziminde yalnızca delikleri görünür.
- Flanş cıvataları flanşı ve onun levhasını; gövde cıvataları gövdeyi ve iki gövde levhasını sıkar. Cıvata boyları özelliklerde ayrıca listelenir.
- Uyarılar, diğer birleşimlerle aynı EN 1993-1-8 asgarilerini kullanır (uç ve kenar mesafesi 1.2 × delik, boyuna aralık 2.2 × delik ve enine aralık 2.4 × delik). Buna ek olarak, net gövdeden derin bir gövde levhası ve köşe yuvarlatması için gövdeye çok yakın flanş cıvataları için de uyarı verilir.
- DetailCraft eki tasarlamaz (dayanım kontrolü yapmaz) ve farklı kalınlıktaki parçalar için dolgu levhası üretmez.
- İki parçayı birlikte kopyalamak eklerini de kopyalar; parçalardan birini silmek eki de siler.
