---
title: Çerçeveyi analiz etme
summary: Tanımladığınız yük durumları ve birleşimler altında, çizildiği gibi kiriş, kolon ve çaprazların kuvvetleri, mesnet tepkileri ve sehimleri. Bir analiz yardımcısıdır, tasarım kontrolü değildir; tasarım kontrolleri ayrı bir adımdır.
keywords: analiz, yapısal analiz, çerçeve analizi, rijitlik yöntemi, yükler, yük durumu, birleşim, ölü yük, hareketli yük, öz ağırlık, mesnet tepkileri, eğilme momenti, kesme kuvveti, eksenel kuvvet, sehim, sehimli biçim, mesnetler, mafsallı, ankastre, serbest bırakma, rapor, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Alttaki {{ui:Analysis}} sekmesi, verdiğiniz yükler için modeldeki her kiriş, kolon ve çaprazdaki kuvvetleri, kolon tabanlarındaki tepkileri ve elemanların ne kadar eğildiğini bulur.

:::warning
Bu bir **analiz yardımcısıdır, kod kontrolü değildir**. Analiz hiçbir tasarım yönetmeliğini uygulamaz: eleman boyutlandırmaz, kapasiteleri veya birleşimleri kontrol etmez ve yük katsayılarını seçmez. Modeli, yüklerini ve mesnetlerini bir mühendis kontrol eder ve sayıların ne anlama geldiğine o karar verir. ASCE 7 / AISC 360 veya EN 1990 / EN 1993-1-1'e göre eleman kontrolleri için bkz. [Çelik elemanları bir tasarım yönetmeliğine göre kontrol etme](topic:design-checks); bu da ayrı bir adım olup o da bir yardımcıdır.
:::

## Çalıştırma

1. {{ui:Analysis}} sekmesini açın.
2. Görünümde bir veya daha fazla eleman seçin; bir {{ui:Case}}, bir {{ui:Load}} ve bir {{ui:Direction}} seçin, değeri girin ve {{ui:Add load}} düğmesine basın. Bir elemana yayılan yük kN/m, nokta yük kN cinsindendir. {{ui:Down (gravity)}} en sık kullanılan seçenektir.
3. {{ui:Run analysis}} düğmesine basın.

Tabloda her elemanın en büyük eksenel kuvveti N, kesme kuvvetleri Vz ve Vy, eğilme momentleri My ve Mz, burulması T ve sehimi, en büyük moment önce olacak şekilde listelenir; elemanı seçmek için adına tıklayın. Altında her mesnetteki tepkiler yer alır. {{ui:On the model}} sehimli biçimi çizer ya da her elemanın yanında bir etkiyi, en büyük değeri yerinde yazılı olarak bir diyagram şeklinde gösterir. Model değiştiğinde sonuçlar hemen eskir: analizi yeniden çalıştırın.

Her yük, durum ve ayar tek bir geri alma adımıdır ({{key:Mod+Z}}) ve model dosyasına kaydedilir.

## Yük durumları ve birleşimler

Analiz üç durumla başlar: **Ölü** (elemanların kendi ağırlığı; çizilen kesitlerinden ve 7850 kg/m³ değerinden), **Hareketli** (boş) ve **Ölü + hareketli**. Kendi durumlarınızı (rüzgâr, kar …) ve birleşimleri ekleyebilirsiniz: bir birleşim, durumları girdiğiniz katsayılarla toplar. Analiz doğrusaldır; bu nedenle her durum bir kez çözülür ve birleşimler toplamlardır. Katsayıları kendiniz girin ya da bir tasarım yönetmeliği seçip {{ui:Make combinations}} ile yönetmeliğin birleşimlerini oluşturun ([Çelik elemanları bir tasarım yönetmeliğine göre kontrol etme](topic:design-checks)).

## Çerçeve neyden oluşur

- Kirişler, kolonlar ve çaprazlar, her biri çizdiğiniz çalışma çizgisi üzerinde; kesitin gerçek özellikleri dış hatlarından hesaplanır. Levhalar, merdivenler, temeller ve cıvatalar çerçevenin parçası değildir.
- Bir eleman, başka bir elemanın ucunun üzerine geldiği yerden bölünür; bu nedenle orta yükseklikte bir kolona bağlanan kiriş orada kolona birleşir.
- **Kolon tabanları**: ankastre (başlangıç) veya mafsallı (yerinde tutulur ve bükülmeye karşı tutulur, dönmeye serbesttir). Bir taban levhası her zaman bir mesnet oluşturur.
- **Kiriş uçları**: uç levhası rijittir, kesme levhası mafsallıdır. {{ui:Beam ends with no connection}} geri kalanları ayarlar. **Çaprazlar** iki ucundan mafsallıdır.
- Uçlarına veya bir kolonun tabanına kendi kuralını vermek için tek bir eleman seçin.
- Her yerde çelik: E = 200 GPa, G = 77 GPa.

Çerçeve hiçbir şeyi eğmeden hareket edebiliyorsa (örneğin bir yönde çaprazı olmayan mafsallı tabanlar gibi bir mekanizma), çalıştırma durur ve nerede ve hangi yönde olduğunu söyler; bunu bir mesnet, rijit bir birleşim veya bir çaprazla tutun.

## İşaretler

N > 0 çekmedir. My > 0, elemanın yerel −z tarafını çekmeye koyar: yerçekimi altında aşağı eğilen bir kirişin My > 0 değeri vardır. Mz > 0, yerel −y tarafını çekmeye koyar. Sehim, elemanın uçları arasındaki düz çizgiden ölçülür. Bir elemanın yerel z ekseni yukarı bakar (kolon için: X boyunca); yerel eksenleri elemanın dönmesiyle birlikte döner.

## Rapor

{{ui:Report (PDF)}} ve {{ui:Report (CSV)}} her şeyi içerir: çerçevenin dayandığı varsayımlar, kesitler, durumlar ve birleşimler; sonra her durum ve birleşim için mesnet tepkileri (yüklerin ve tepkilerin toplamlarıyla, ki bunlar dengelenir), eleman kuvvetleri ve yer değiştirmeler ile her durumun zarfı. {{ui:Export as CraftScript}} aynı çerçeveyi PartCraft'ın Betik çalışma alanı için bir betik olarak yazar; orada `frame3d` kütüphane işlevi onu okunabilir kodda adım adım çözer.

## Yöntem

Doğrudan rijitlik yöntemi; İkinci mertebe (P-Delta) işaretlemediğiniz sürece doğrusal ve birinci mertebedir: eksenel, burulma ve iki eğilme rijitliğine sahip iki düğümlü kiriş-kolonlar (kesme deformasyonu ve çarpılma yok), uç serbestlikleri statik yoğuşma ile, elemanlar boyunca yükler elemanların kendi şekil fonksiyonları aracılığıyla. Cevapları klasik ders kitabı örnekleriyle kontrol edilmiştir (konsollar, basit, ankastre ve sürekli kirişler, portal çerçeve, burulmadaki bir ızgara, kafes).

**İkinci mertebe (P-Delta).** Çalıştır'ın yanındaki *İkinci mertebe (P-Delta)* seçeneğini işaretleyin: her birleşim, elemanların eksenel kuvvetleri sehimli çerçeve üzerinde etkiyecek şekilde yeniden çözülür (her eleman 4 parçaya bölünür, böylece elemanın uçları arasındaki eğilme de hesaba girer); eksenel kuvvetler yerleşene kadar devam edilir. Sonuç satırı geçiş sayısını ve yan ötelemenin ne kadar arttığını verir; momentler, sehimler, tasarım kontrolleri ve rapor bu sonuçları kullanır. Çerçevenin elastik kritik yükünün üzerinde çalıştırma durur ve bunu bildirir. Yöntem küçük dönmelerle elastik ve yalnızca eğilmelidir; rijitlik azaltması veya kavramsal yükler yoktur (tek başına AISC doğrudan analiz yöntemi değildir); döşemeler, duvarlar ve rijit kat döşemeleri birinci mertebede kalır.

**Doğal frekanslar (sonlu elemanlar).** Sonuçların altındaki {{ui:Finite elements: natural frequencies}} bloğu, aynı modelin en düşük modlarını sonlu eleman motoruyla bulur: uç serbestlikli kirişler, düz dört düğümlü kabuk olarak döşemeler ve duvarlar, rijit döşemeler, mesnetler. Kaç mod (3, 6, 10 veya 20) ve döşeme elemanını (kalın veya ince döşemeler için dört düğümlü kabuk ya da ince döşeme elemanı) seçin ve {{ui:Find the frequencies}} düğmesine basın. Tablo, her modun Hz cinsinden frekansını, saniye cinsinden periyodunu ve X, Y ve Z boyunca etkin modal kütlesini, hareket edebilen kütlenin payı olarak verir; {{ui:Show on the model}} herhangi bir modu, sehimli biçimin çizildiği gibi çizer. Kütle, malzeme yoğunluğunun hacimle çarpımıdır: yükler kütle eklemez ve yoğunluğu olmayan malzemenin kütlesi yoktur. Rapor (PDF, CSV) tabloyu içerir. Yöntem yalnızca elastik ve küçük hareketlidir; buradan bir yönetmeliğe göre deprem veya rüzgâr yükü üretilmez. Bu bir kod kontrolü değildir; sonuçları mühendisiniz gözden geçirir.

**Tepki spektrumu, zaman tanım alanı ve itme analizi.** Frekansların altında aynı sonlu eleman modelini kullanan üç blok daha bulunur. Hepsi için kütle, malzeme yoğunluğu artı işaretlediğiniz durumların aşağı yönlü yükleridir; her biri girdiğiniz bir katsayıyla çarpılır (örneğin Ölü için 1, Hareketli için kütle olarak saydığınız pay).

{{ui:Response spectrum}} her modu, verdiğiniz bir spektrumdan okur (periyot ve ivme tablosu ya da SDS, SD1 ve TL'den ASCE 7 şekli; {{ui:Sismik blok değerlerini kullan}} düğmesi bunları Sismik bloktan kopyalar) ve modları CQC, SRSS, yüzde on kuralı veya mutlak toplamla birleştirir; sonra X, Y ve Z yönlerini bir araya getirir (%100 + %30 veya SRSS). Taban kesme kuvvetini, kat ötelemelerini, eleman uç kuvvetlerini ve kullanılan modların kütlenin %90'ından azını taşıdığında uyaran bir mod tablosunu verir. Sonuçları bir katsayıyla ya da yazdığınız bir taban kesme kuvvetine kadar ölçekleyebilirsiniz; blok bu taban kesme kuvvetini kendisi hiçbir zaman hesaplamaz. Sonuçların işareti yoktur.

{{ui:Time history}} bir zemin ivmesini modal süperpozisyonla (kaydın noktalar arası düz çizgileri için tam) ya da doğrudan integrasyonla (Rayleigh sönümlemeli Newmark ortalama ivme) çalıştırır. Girdi; uydurulmuş bir sinüs veya darbe (her zaman sentetik olarak etiketlenir), yapıştırdığınız bir kayıt ya da açtığınız bir metin dosyasıdır (zaman ve ivme; adım sırasıyla her satırda bir ivme veya bir DT= başlığı olan PEER tarzı dosya; g veya m/s² cinsinden). Zamana karşı çatı yer değiştirmesini ve taban kesme kuvvetini, her kattaki ötelemeyi ve eleman uç kuvvetlerinin zarfını verir. Çok uzun kaydı olan modeller kaydı yalnızca oturum boyunca tutar.

{{ui:Pushover}} çatıyı yanlamasına küçük adımlarla iter (ilk mod gibi bir desen veya tekdüze), I kesitli elemanların uçlarında plastik mafsallarla. Bir mafsal, eksenel kuvvet arttıkça düşen plastik momentte akar (çizilen şekilden hesaplanır, köşe yuvarlatmaları ihmal edilir); pekleşme isteğe bağlıdır, P-delta isteğe bağlıdır ve önce bir yerçekimi birleşimi uygulanabilir. Kapasite eğrisini (taban kesme kuvvetine karşı çatı yer değiştirmesi), ilk mafsalı ve her mafsalın durumunu ve plastik dönmesini verir. {{ui:Run the nonlinear time history}} küçük modellerde aynı mafsalları Zaman tanım alanı bloğunun kaydı altında çalıştırır. Mafsallar yalnızca eleman uçlarında oluşur (açıklık içinde oluşması gereken yere bir düğüm koyun); iki ucundan serbest bırakılmış bir eleman hiç mafsal almaz; çaprazların akması ve burkulması modellenmez; döşemeler ve duvarlar elastik kalır; kabul kriterleri verilmez. Bu bir kod kontrolü değildir; sonuçları mühendisiniz gözden geçirir. Ayarlar modelle birlikte kaydedilir ve rapor tabloları içerir.

Henüz yapılmadı: burkulma analizi, tepki spektrumu için eksik kütle düzeltmesi, kayıt ölçekleme, mafsallar için kabul kriterleri (dinamik tepki yukarıda vardır), sizin için oluşturulan alan ve rüzgâr yükleri (döşemelerdeki deprem kuvvetleri [Betonarme elemanları kontrol etme ve sismik yükler oluşturma](topic:concrete-and-seismic) konusundadır), eleman ofsetleri, yalnızca çekme çaprazları. Bkz. [Henüz yapılmadı](topic:not-built-yet).
