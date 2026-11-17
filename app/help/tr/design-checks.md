---
title: Çelik elemanları bir tasarım yönetmeliğine göre kontrol edin
summary: ASCE 7 veya EN 1990'dan yük kombinasyonları oluşturun, her çelik I profilini AISC 360 ya da EN 1993-1-1'e göre kontrol edin ve her elemanın kapasitesinin ne kadarını kullandığını görün. Bir mühendis incelemeden önce yardımcı bir araçtır.
keywords: tasarım, tasarım kontrolü, çelik tasarım, kullanım oranı, kapasite kullanımı, kapasite, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, yük kombinasyonları, LRFD, Ulusal Ek, burkulma, yanal-burulmalı burkulma, kesme, eğilme, etkileşim, yapısal, öğrenciler, mühendis
from: 66b6d545
---

Analizi çalıştırdıktan sonra, {{ui:Analiz}} sekmesindeki {{ui:Tasarım denetimleri}} bloğu kuvvetlerini her çelik eleman için bir karara dönüştürür: en kötü kombinasyonun kapasitenin ne kadarını kullandığı.

:::warning
Bu, **bir mühendis tarafından incelenene kadar yardımcı bir araçtır**. Yalnızca birinci mertebe kuvvetlerini kullanır (ikinci mertebe etkileri yoktur); burulmayı, narin (4. sınıf) parçaları, kaynaklı kesitleri ve bağlantıları kontrol etmez; kontrol edemediği şeyleri de dışarıda bırakır ve bunu belirtir. Bir mühendisin kontrolünün yerini tutmaz ve sonuçları bir onay mührü değildir.
:::

## Bir yönetmelik seçin

{{ui:Tasarım yönetmeliği}} modelle birlikte kaydedilir; iki aileden birini seçin:

- **ASCE 7 + AISC 360** (ABD, LRFD): ASCE 7-16 §2.3.1 yük kombinasyonları ve ANSI/AISC 360-16 eleman kontrolleri.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990 kombinasyonları (Eş. 6.10 veya 6.10a ve 6.10b) ve EN 1993-1-1 eleman kontrolleri.

Sonra {{ui:Çelik sınıfı}} seçin (A992, A36 ve diğerleri; ya da 40 mm üzerinde alt akma dayanımıyla S235'ten S450'ye kadar).

## Kombinasyonları oluşturun

Yük durumu listesinde her yük durumuna bir **tür** verin (sabit, hareketli, çatı hareketli, kar, rüzgâr, deprem) ve {{ui:Birleşimleri oluştur}} öğesine basın. DetailCraft, yönetmeliğin kombinasyonlarını yük durumlarınızın kombinasyonları olarak yazar: sahip olduğunuz türler için yönetmeliğin listelediği her dayanım kombinasyonunu ve sehim için kullanılabilirlik kombinasyonlarını. Kendi yazdıklarınız kalır; bunlar yönetmeliğe karşı denetlenmez. {{ui:Diğer}} türündeki bir yük durumu birleştirilmez.

Eurocode için katsayılar, EN 1990 Ek A1'in **önerilen değerleridir** (γG 1.35, γQ 1.5, uygulanan, kar ve rüzgâr yüklerinin ψ değerleri) ve EN 1993-1-1'in (γM0 = γM1 = 1.0). Ülkenizin Ulusal Eki bunların bazılarını değiştirir: {{ui:Ulusal Ek değerleri}} bölümünü açın, kendi değerlerinizi girin ve kombinasyonları yeniden oluşturun. Bunlar modelde kaydedilir.

## Elemanları kontrol edin

{{ui:Elemanları denetle}} öğesine basın. Her I profili için tablo **kullanım oranını** (talep bölü kapasite: %100 sınırdır), geçip geçmediğini, hangi kontrolün belirleyici olduğunu ve hangi kombinasyonu gösterir. Elemanlar modelde renklendirilir: mavi az kullanılmış, yeşil yaklaşık yarısı, okr sınıra yakın, kırmızı aşılmış, gri kontrol edilmemiş. Bir elemanın adına tıklayarak onu seçin.

Kontroller, her birinin izlediği madde ile birlikte listelenir (raporda da yer alırlar):

- çekme; eğilme burkulması ve burulma burkulması ile basınç; her iki eksende eğilme ile yanal-burulmalı burkulma; kesme; eksenel kuvvetle eğilme;
- kullanılabilirlik kombinasyonlarının sehimi, ayarladığınız {{ui:Sehim sınırı}} ile karşılaştırılır (başlangıçta L/360; bu bir proje değeridir, yönetmelik değeri değildir).

**Uzunluklar.** Yanal destekli uzunluk, analiz edilen her parçanın bir payıdır (1 = desteksiz); destekler başlangıçtan itibaren eşit aralıklı kabul edilir. K katsayıları, burkulma için uzunluğu çarpar. Başka bir elemanın bağlandığı bir birleşim bir elemanı böler ve her parça kendi uzunluğunda, orada desteklenmiş gibi kontrol edilir.

## Neyin kontrol edilmediği

Bir elemanın sayı yerine **kontrol edilmedi** ve nedeni gösterdiği durumlar şunlardır: kesiti kontrollerin bildiği bir I profili değilse (borular, köşebentler, kanallar), özel (kaynaklı) bir kesitse ya da eğilmede bir parçası narinse (AISC) veya 4. sınıfsa (Eurocode). Basınçta narin bir parça basınç kontrollerini dışarıda bırakır ve eleman *geçti, kısmen kontrol edildi* olarak görünür. Ayrıca yapılmadı: ikinci mertebe etkileri, burulma, eğilmeyle birlikte kesme burkulması, bağlantılar, yorulma, yangın ve deprem detaylandırması. Betonarme elemanlar ve deprem yükleri [kendi denetimlerine](topic:concrete-and-seismic) sahiptir. Bkz. [Henüz yapılmadı](topic:not-built-yet).

## Rapor

{{ui:Rapor (PDF)}} ve {{ui:Rapor (CSV)}}, kontrol ettikten sonra tasarım tablolarını içerir: yönetmelik sürümleri, ayarlar ve Ulusal Ek değerleri, elemana göre kullanım oranı, kullanılan her madde ve her eleman için belirleyici kombinasyondaki her kontrolün talebi, kapasitesi ve kullanım oranı.
