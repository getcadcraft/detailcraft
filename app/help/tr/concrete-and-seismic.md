---
title: Beton elemanları denetleyin ve deprem yükleri oluşturun
summary: Betonarme kiriş ve kolonların donatılarını ayarlayın, ACI 318-19'a göre denetleyin, rijit döşemelerde ASCE 7-22'ye göre eşdeğer yanal kuvvetler oluşturun ve kat ötelenmesini görün. Bir mühendisin denetimi için bir yardımcı.
keywords: beton, betonarme, ACI 318, ACI 318-19, donatı, kiriş, kolon, kesme, etriye, bağ, deprem, sismik, eşdeğer yanal kuvvet, ELF, ASCE 7-22, ötelenme, kat ötelenmesi, döşemeler, rijit diyafram, kat ağırlığı, kullanım oranı, yapısal, mühendis
from: 94d3001d
---

Modelin {{ui:Analiz}} sekmesindeki {{ui:Beton elemanlar}} ve {{ui:Deprem yükleri}} blokları betonarme kirişleri ve kolonları denetler ve bir çerçevenin katlarına depremin yatay kuvvetlerini oluşturur. İkisi de {{ui:Analiz}} sekmesinin çalıştırmasını izler ve modelle birlikte kaydedilir.

:::warning
Sonuçlar **bir mühendisin denetimi içindir**: bir mühendis gözden geçirene kadar bir yardımcıdır. Beton denetimleri birinci mertebe kuvvetleri kullanır; ancak çerçevede sallanmayan olarak çağırdığınız bir kolon, büyütülmüş momenti için tasarlanır; sallanma büyütmesi, burulma tasarımı, deprem detaylandırması (ACI bölüm 18) ve etriye detaylandırması yoktur. Deprem yükleri fazlalık katsayısını, düşey deprem etkisini, burulma büyütmesini ve P-delta etkilerini hariç tutar. Rüzgâr yükleri henüz yapılmadı.
:::

## Elemanları çizin

Betonarme elemanları dikdörtgen olarak çizin: kolon için `PL400x400`, kiriş için `PL300x600` gibi bir {{ui:Levha}} profili kesiti verir. Kolonlar ve kirişler diğer elemanlar gibi yerleştirilir.

## Kesitleri ayarlayın

{{ui:Beton elemanlar}} bloğu, elemanların kullandığı her kesiti listeler. Betonarme olanlarda {{ui:Beton olarak hazırla…}} düğmesine basın. DetailCraft, çizilen profilden genişliği **b** (elemanın kendi y ekseni boyunca) ve derinliği **h** (z boyunca) okur, sonra şunları sorar:

- **pas payı** (donatı merkezine kadar) ve kirişler için **üst**, **alt** ve **yan** donatılar (kaç tane ve hangi çap), kolonlar için bir **kolon kafesi** (b boyunca ve h boyunca donatılar, hangi çap, spiral etriye);
- **etriyeler**: kollar, çap ve aralık;
- elemanın neyi **temsil ettiği**: kiriş, kolon veya kuvvetlerinden karar verilen (düşey bir eleman ya da 0.10 f′c Ag'den fazlasını taşıyan bir eleman kolondur).

Bunların üstünde f′c, donatı akma dayanımı fy ve etriye akma dayanımı fyt (kesme için en fazla 420 MPa sayılır), K ve çerçevenin sallanan mı yoksa sallanmayan mı olduğunu ayarlayın. Beton olarak hazırlanan bir kesit beton olarak çözümlenir: E = 4700 √f′c, 2400 kg/m³ ve varsayılan olarak **çatlamış kesitlerle** (kolonlar 0.70 Ig, kirişler 0.35 Ig; ACI 318-19 Tablo 6.6.3.1.1(a)). Bunu kapatmak için {{ui:Brüt kesitler}} seçeneğini seçin.

## Kombinasyonları oluşturun ve denetleyin

Yük durumlarına türlerini verin, sonra {{ui:Birleşimleri oluştur}} seçeneğini seçin: ACI 318-19, ASCE 7'nin dayanım kombinasyonlarını alır (§5.3.1). {{ui:Betonu denetle}} seçeneğine basın; her eleman bir kullanım oranı alır ve modelde çelik denetimleri gibi renklenir: eğilme ve asgari çelik (22.2, 9.6.1.2), çekme kontrollü birim şekil değiştirme (9.3.3.1), etriyelerle kesme (22.5, 9.6.3), etriye aralığı ve kolonlar için moment ile eksenel yük (22.4, iki yönlü eğilme için Bresler yöntemi). Çizilen kesitin yazdığınız b × h'den farklı olduğu bir eleman **kısmen denetlendi** diye okunur; narin bir kolon veya eşiğin üzerindeki burulma da öyle. Bunlar tasarlanmamıştır.

Kapasitesini aşan elemanlar {{ui:Sorunlar}} içinde listelenir; bir nedenle kabul edin veya kesiti düzeltin.

## Katlar ve deprem yükleri

Bir kat, çerçevenin rijit bir döşemeyle (**rijit diyafram**) birlikte tutulduğu bir seviyedir. {{ui:Deprem yükleri}} bloğunda {{ui:Katları bul}} düğmesine basın: iki veya daha fazla kirişin buluştuğu seviyeleri alır. Sonra her kata **sismik ağırlığını** verin; yazarak veya okutarak. {{ui:Ağırlıkları durumlardan al}}, verdiğiniz bir katsayıyla yük durumlarının düşey yüklerini toplar (sabit yük durumu 1'dir; depolama canlı yük durumuna veya düz çatıdaki kara 0.25 ekleyin, ASCE 7-22 12.7.2'nin istediği gibi). Her düğümün düşey yükü, kendisinin altında veya üstünde olan kata gider; iki kat arasındaki bir kolon ağırlığının yarısını her kata verir.

Tasarım değerlerini doldurun: SDS, SD1, S1, R, Ie, Cd, TL, (periyot için) taşıyıcı sistem ve risk kategorisi. {{ui:Deprem durumları oluştur}} sonra bina yüksekliğinden periyodu hesaplar (12.8.2.1), taban kesme kuvvetini V = Cs W (12.8.1) olarak bulur, katlara dağıtır (12.8.3) ve dört yük durumu yazar: X ve Y yönlerinde, her yönde %5 kazara burulmayla (12.8.4.2). Kat kuvvetleri ve kat ötelenme denetimi (12.8.6, Tablo 12.12-1; öteleme Cd δxe / Ie ile 0.020 hsx karşılaştırılır) bir çalıştırmadan sonra görünür; sınırını aşan bir öteleme de bir sorundur. Sismik durumları birleşimlere dahil etmek için {{ui:Birleşimleri oluştur}} seçeneğine yeniden basın.

**Analizden periyot.** Yaklaşık periyot Ta bina yüksekliğinden gelir. Sismik durumlarla analizi çalıştırdığınızda, {{ui:Periyodu analizden al}} her katın kuvvetler altında ne kadar hareket ettiğini okur ve periyodu Rayleigh yöntemiyle hesaplar, T = 2π √(Σ w δ² / (g Σ f δ)); X için bir kez, Y için bir kez. Sismik durumlar onunla yeniden oluşturulur. Kullanılan periyot hiçbir zaman Cu·Ta'dan (ASCE 7-22 12.8.2) büyük değildir; bu yüzden yumuşak bir model taban kesme kuvvetini bunun altına indiremez. İkinci çalıştırmadan sonra periyodu yeniden alın: bir veya iki adımda oturur. Ta'ya dönmek için {{ui:Periyot analizden}} kutusunun işaretini kaldırın.

**Narin kolonlar (ACI 318-19 6.6.4.5).** Sallanmayan olarak çağırdığınız bir çerçevede, k·ℓu/r değeri 34 + 12·M1/M2'den (en fazla 40) büyük olan bir kolon, büyütülmüş moment Mc = δns · M2 için tasarlanır: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)², (EI)eff = 0.4 Ec Ig / (1 + βdns) ve asgari moment Pu (15 + 0.03 h). βdns (başlangıç için 0.6) çarpanlı eksenel yükün süreklilik gösteren payıdır: kendi değerinizi yazın. Pu'nun 0.75 Pc'ye ulaştığı bir kolon kendi denetimiyle başarısız olur. Rapor her narin kolonun değerlerini listeler. **Sallanan** bir çerçevede narin bir kolon yine "kısmen denetlendi"dir: büyütmesi ikinci mertebe analiz gerektirir, bu da henüz yapılmadı.

**Döşemeler.** Modelde levhalar varsa, {{ui:Döşeme donatısı}} bloğu her dayanım kombinasyonunun levha momentlerini alır ve Wood–Armer kuralıyla (eğilme ve burulma birlikte) her katmanın metre başına ihtiyaç duyduğu çeliği hesaplar: alt ve üst, x ve y yönünde. Kalınlığı, pas payını ve donatıları verirsiniz; tablo gereken ile verileni ve tek yönlü kesmeyi φVc ile karşılaştırır; yetersiz kalan bir katman, maddesiyle birlikte bir sorundur. Sehim, kolonlarda delinme ve açıklıklardaki kenar donatıları kapsanmaz; dört düğümlü levhalarla bir mesnet üzerindeki moment yavaş yakınsar.

Listelediğiniz her kat analizde bir rijit diyafram olur: kattaki hareketten kaynaklanan kirişlerdeki eksenel kuvvet taşınmaz. CraftScript dışa aktarımı, katları olan bir model için yapılmamıştır.

## Rapor

{{ui:Rapor (PDF)}} ve {{ui:Rapor (CSV)}} beton tablolarını (varsayımlar, elemana göre kullanım oranı, her madde), deprem parametrelerini ve taban kesmesini, kat kuvvetlerini ve öteleme tablosunu ekler.
