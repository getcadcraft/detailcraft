---
title: İşaret kuralları
summary: İki parçanın ya da iki montajın tam olarak ne zaman aynı işareti paylaştığı, işaretlerin nasıl numaralandığı ve temel ile donatı işaretlerinin nasıl çalıştığı.
keywords: işaretler, numaralandırma, parça işareti, montaj işareti, parça numarası, önek, tolerans, aynı parçalar, donatı işaretleri, temel işaretleri
from: ce02c98e
---

DetailCraft her değişiklikten sonra her işareti yeniden hesaplar. Hiçbir şey saklanmaz; işaretler her zaman modelin şu anki halini tarif eder. Nasıl kullanılacağı için [İşaretleri ve malzeme listesini kontrol edin](topic:marks-and-bom) bölümüne bakın.

## Parça işaretleri

İki parça, şu koşulların hepsi eşleştiğinde bir parça işaretini paylaşır:

1. Parça tipi (kiriş, kolon, çapraz ya da levha).
2. Profil adı (büyük ve küçük harf fark etmez).
3. Malzeme (büyük ve küçük harf fark etmez).
4. Kesim uzunluğu, 1 mm içinde.
5. Her delik: yüzü, boyunca ve enine konumu 1 mm içinde; çapı 0.1 mm içinde.
6. Her ağız: ucu, yanı, uzunluğu ve derinliği 1 mm içinde.

Elemanın {{ui:Name}} alanı sayılmaz. Modeldeki konumu, dönüşü ve parçanın aynı kaldığı sürece nasıl çizildiği de sayılmaz.

### Ters çevrilmiş parçalar

Bir parça, kesitini kendisine eşleyen her şekilde ters çevrilmiş olarak karşılaştırılır. Bunlardan biri başka bir parçayla eşleşiyorsa, aynı işareti paylaşırlar.

| Şekil | Sayılan dönüşler |
|---|---|
| I profiller, dikdörtgen HSS, levhalar | Uçtan uca (dikey eksen etrafında), uçtan uca (yatay eksen etrafında) ve kendi uzunluğu etrafında baş aşağı |
| Kanallar | Yalnızca yatay eksen etrafında uçtan uca; gövde aynı tarafta kalır |
| Köşebentler, yuvarlak HSS | Hiçbiri: yerleştirildiği gibi karşılaştırılır |

Yani sol ucuna yakın bir deliği olan bir kiriş, sağ ucuna yakın aynı deliği olan bir kirişle eşleşir; bir kolonun bir flanşındaki delikler, diğer flanşındaki aynı deliklerle eşleşir.

### Numaralandırma

| Tip | Parça öneki | Montaj öneki |
|---|---|---|
| Kolon | c | C |
| Kiriş | b | B |
| Çapraz | br | BR |
| Levha (yerleştirilmiş, uç levhası ya da taban levhası) | p | P |

İşaretler her önek içinde 1'den numaralandırılır. Sıra şöyledir: kolonlar, sonra kirişler, çaprazlar ve levhalar; her tip içinde profil adına göre doğal sırayla (W8x10, W12x26'dan önce); sonra önce daha uzun parçalar.

Numaralandırma bu sırayı izlediğinden, bir parça eklemek ya da değiştirmek diğerlerinin numaralarını kaydırabilir.

## Montaj işaretleri

- Başka bir parçaya kaynaklı olmayan her parça kendi montajının ana parçasıdır.
- Uç levhaları kendi kirişlerine, taban levhaları kendi kolonlarına kaynaklıdır; bu yüzden o elemanın montajına aittirler.
- İki montaj, ana parçaları bir parça işaretini paylaşıyorsa ve bağlı parçaları aynı yerlerde (1 mm içinde) aynı işaretlere sahipse bir işareti paylaşır; ana parça için izin verilen dönüşlerle.
- Montaj öneki ana parçayı izler: iki uç levhalı bir kiriş bir B montajıdır.

{{ui:Plate}} aracıyla yerleştirdiğiniz levhalar hiçbir şeye kaynaklı değildir, bu yüzden her biri kendi P montajıdır.

## Temel işaretleri

Aynı uzunluk, genişlik, derinlik, beton yazısı, alt donatı ve başlangıç donatılarına sahip temeller bir işareti paylaşır: F1, F2 … yerleştirildikleri sırayla. Konum ve dönüş sayılmaz.

## Donatı işaretleri

Aynı boyut, şekil ve A, B, C ölçüleri (milimetreye yuvarlanmış) olan donatılar tüm temeller genelinde bir işareti paylaşır. İşaret; donatı numarası, F ve her donatı boyutu için bir sayaçtır: 5F1, 5F2, 6F1. Kare bir temelin uzun yönlü ve kısa yönlü donatısı aynı donatıdır ve bir işareti paylaşır; {{ui:Used for}} sütunu her iki kullanımı da listeler.
