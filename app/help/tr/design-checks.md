---
title: Çelik elemanları bir tasarım yönetmeliğine göre denetleyin
summary: ASCE 7 veya EN 1990'dan yük birleşimleri oluşturun, her çelik I profilini AISC 360 veya EN 1993-1-1'e göre denetleyin ve her elemanın kapasitesinin ne kadarını kullandığını görün. Bir mühendis gözden geçirene kadar yardımcı bir araçtır.
keywords: tasarım, tasarım denetimi, çelik tasarımı, kullanım oranı, kapasite kullanımı, kapasite, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, yük birleşimleri, LRFD, Ulusal Ek, burkulma, yanal-burulmalı burkulma, kesme, eğilme, etkileşim, yapısal, öğrenciler, mühendis
from: 15685c4e
---

Analizi çalıştırdıktan sonra, {{ui:Analiz}} sekmesindeki {{ui:Tasarım denetimleri}} bloğu kuvvetlerini her çelik eleman için bir sonuca dönüştürür: en elverişsiz birleşimin kapasitenin ne kadarını kullandığı.

:::warning
Bu, **bir mühendis gözden geçirene kadar yardımcı bir araçtır**. Yalnızca birinci mertebe kuvvetlerini kullanır (ikinci mertebe etkileri yoktur), burulmayı, narin (sınıf 4) parçaları, kaynaklı profilleri ve bağlantıları denetlemez; denetleyemediği şeyleri dışarıda bırakır ve bunu belirtir. Bir mühendisin denetimini yerine koymaz; sonuçları bir onay damgası değildir.
:::

## Bir yönetmelik seçin

{{ui:Tasarım yönetmeliği}} modelle birlikte kaydedilir; iki aileden birini seçin:

- **ASCE 7 + AISC 360** (ABD, LRFD): ASCE 7-16 §2.3.1'in yük birleşimleri ve ANSI/AISC 360-16'nın eleman denetimleri.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990'ın birleşimleri (Eş. 6.10 veya 6.10a ve 6.10b) ve EN 1993-1-1'in eleman denetimleri.

Ardından {{ui:Çelik sınıfı}} seçin (A992, A36 ve diğerleri; ya da S235 ile S450 arası, 40 mm üzerinde alt akma dayanımı ile).

## Birleşimleri oluşturun

Yük durumu listesinde her yük durumuna **türünü** verin (sabit, hareketli, çatı hareketlisi, kar, rüzgâr, deprem), sonra {{ui:Birleşimleri oluştur}} düğmesine basın. DetailCraft, yönetmeliğin birleşimlerini yük durumlarınızın birleşimleri olarak yazar: sahip olduğunuz türler için yönetmeliğin listelediği her dayanım birleşimini ve sehim için kullanılabilirlik birleşimlerini. Kendiniz yazdığınız birleşimler yerinde kalır; bunlar yönetmeliğe göre denetlenmez. {{ui:Diğer}} türündeki bir yük durumu birleşime alınmaz.

Eurocode için katsayılar, EN 1990 Ek A1'in **önerilen değerleridir** (γG 1.35, γQ 1.5, hareketli, kar ve rüzgâr yüklerinin ψ değerleri) ve EN 1993-1-1'in (γM0 = γM1 = 1.0). Ülkenizin Ulusal Eki bunların bir kısmını değiştirir: {{ui:Ulusal Ek değerleri}} bölümünü açın, sizinkini yazın ve birleşimleri yeniden oluşturun. Değerler modelle birlikte kaydedilir.

## Elemanları denetleyin

{{ui:Elemanları denetle}} düğmesine basın. Her çelik I profili için tablo, **kullanım oranını** (talep, kapasiteye bölünmüş: sınır %100'dür), geçip geçmediğini, hangi denetimin belirleyici olduğunu ve hangi birleşimi gösterir. Elemanlar modelde renklendirilir: mavi az kullanılan, yeşil yaklaşık yarı, sarı-kahve (okr) sınıra yakın, kırmızı sınırın üzerinde, gri denetlenmemiş. Seçmek için bir elemanın adına tıklayın.

Denetimler, her birinin izlediği madde ile birlikte (raporda listelenirler):

- çekme; eğilme ve burulma burkulmasıyla basınç; yanal-burulmalı burkulmayla iki eksende eğilme; kesme; ve eksenel kuvvetle eğilme;
- kullanılabilirlik birleşimlerinin sehimi, sizin belirlediğiniz {{ui:Sehim sınırı}} ile karşılaştırılarak (başlangıç olarak L/360; yönetmelik değeri değil, proje değeri).

**Boylar.** Destekli boy, analiz edilen her parçanın bir oranıdır (1 = destekisiz); destekler başlangıçtan eşit aralıklı kabul edilir. K katsayıları burkulma için boyu çarpar. Başka bir elemanın bağlandığı bir düğüm bir elemanı böler ve her parça kendi boyunda, orada destekli olarak denetlenir.

## Denetlenmeyenler

Bir eleman, bir sayı yerine nedeniyle birlikte **denetlenmedi** gösterir; bölümü denetimlerin bildiği bir şekil değilse (açılar, U profiller; dikdörtgen ve yuvarlak borular duvarları kompakt olduğunda denetlenir), özel (kaynaklı) bir şekilse ya da bir parçası eğilmede narinse (AISC) veya sınıf 4 ise (Eurocode). Basınçta narin bir parça basınç denetimlerini dışarıda bırakır ve eleman *geçti, kısmen denetlendi* olarak okunur. Düğümlerdeki kaynaklar [kendi denetimlerine](topic:weld-checks) sahiptir. Henüz yapılmayanlar: ikinci mertebe etkileri, burulma, eğilmeyle birlikte kesme burkulması, cıvatalı bağlantılar, yorulma, yangın ve deprem detaylandırması. Beton elemanlar ve deprem yükleri [kendi denetimlerine](topic:concrete-and-seismic) sahiptir. Bkz. [Henüz yapılmadı](topic:not-built-yet).

## Rapor

Denetlediğinizde {{ui:Rapor (PDF)}} ve {{ui:Rapor (CSV)}} tasarım tablolarını kazanır: yönetmelik sürümleri, ayarlar ve Ulusal Ek değerleri, elemana göre kullanım oranı, kullanılan her madde ve her eleman için belirleyici birleşimde her denetimin talebi, kapasitesi ve kullanım oranı.
