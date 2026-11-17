---
title: Çapraz köşe levhaları
summary: Bir çapraz ucunu kolona veya kirişe köşe levhasıyla bağlayın: açılar ve düz bantlar cıvatalanır, borular yuvalanıp kaynaklanır.
keywords: köşe levhası, gusset, gusset levha, çapraz, çapraz kuşak, düşey kuşaklama, açı çaprazı, düz bant, bant, HSS çapraz, bıçak levha, yuvalı boru, bağlan
from: 22f6598d
---

Çapraz köşe levhası, çaprazın oturduğu kolona (veya kirişe) kaynaklı bir levhadır ve çaprazın düzleminde yer alır. DetailCraft birleşimdeki her şeyden uzakta kalacak şekilde çaprazı keser, köşe levhasını yerleştirir ve boyutlandırır, çaprazı ona birleştirir: bir sıra cıvatayla bir **açı** veya **düz bant**, ya da köşe levhasının üzerine geçirilip kaynaklanan bir **boru** (kare, dikdörtgen veya yuvarlak HSS).

## Nerede çalışır

- Çaprazın ucu bir kolonun veya kirişin çizgisinde yer alır (1 mm içinde) ve çapraz bu çizgiye neredeyse paralel değildir. Varsa destek kolondur; yoksa kiriştir.
- Köşe levhası çaprazın ve destek çizgisinin düzleminde yer alır. Bir **açının** bu düzlemde bir kenarı, bir **düz bantın** ise yüzü olmalıdır: bunu sağlayana kadar çaprazı ({{ui:Dönme (°)}}) döndürün. Açının kenarları düzleme 45° ise DetailCraft bunu söyler ve hiçbir şey oluşturmaz.
- Çapraz olarak I profiller ve U profiller bağlanmaz.

## Köşe levhası ekleyin

1. Bir veya daha fazla çapraz seçin.
2. {{ui:Bağlan}} grubunun {{ui:Daha fazla}} menüsünde {{ui:Köşe levhası}} seçeneğini belirleyin.
3. Seçili çaprazların bir kolona veya kirişe oturan ve köşe levhası olmayan her ucuna bir köşe levhası verilir.

Bir köşe levhasını (levhaya tıklayarak) seçerek ayarlarını değiştirin. {{ui:Benzerlerine uygula (n)}}, aynı çapraz ve destek kesitlerine sahip her boş çapraz ucuna kopyalar.

## DetailCraft neleri hesaplar

- **Geri kesme.** Çapraz o uçta, köşeleri birleşimdeki her elemandan ve kolonun altındaki taban levhasından {{ui:Çapraz açıklığı}} (25) kadar uzaklaşana kadar kısaltılır. Eleman yanındaysa yan yana, eleman orada bitiyorsa ucunun ötesinde hesaplanır.
- **Cıvatalar (açılar, düz bantlar).** {{ui:Cıvatalar}} (3) çaprazın boyunca tek bir sırada, ilki kesik uçtan {{ui:Cıvata uç mesafesi}} (40) uzaklıkta, {{ui:Cıvata aralığı}} (75) aralıkla yerleşir. Bir açıda cıvatalar, köşe levhasının düzlemindeki kenardan geçer; topuktan itibaren {{ui:Cıvata hat aralığı}} kadar uzakta (0 = kenarın ortası). Düz bantta ise merkez çizgisi üzerinde ya da hat aralığı kadar kaydırılmış olarak yerleşir. Cıvata tutma boyu = kenar veya düz bant + köşe levhası.
- **Köşe levhası.** Dikdörtgendir: destek yüzünden, son cıvatanın ötesine uç mesafesi kadar uzanır; destek boyunca cıvataların ihtiyaç duyduğu kadar devam eder. Açının kenarının arkasına (veya düz bantın yüzüne) oturur. Boru için borunun ortasından geçer; {{ui:Boru bindirmesi köşe levhasında}} (200) değeri kadar bindirme yapar ve kaynaklar için yer bırakır.
- **Birleşimler.** Kolon tabanında köşe levhası taban levhasının üzerine indirilir. Bir kirişin birleşimi kestiği yerde (bir çaprazın kiriş-kolon köşesine çıktığı yerde) köşe levhası kirişin altında veya üstünde kalır. Bu, cıvataları veya bindirmeyi uç mesafesinden yoksun bırakırsa DetailCraft uyarır.
- **Kaynaklar.** Köşe levhasının desteğe iki yanda kaynağı. Borunun köşe levhasına, bindirme boyunca dört çizgi halinde kaynağı.

## Bilmekte yarar

- Köşe levhası destek montajına aittir (atölyede kaynaklanır). Çapraz delikleriyle birlikte teslim edilir ve kendi NC dosyasına gider.
- Borunun yuvası modelde kesilmez; [çakışma denetimi](topic:clash-check) çaprazı ve köşe levhasını dışarıda bırakır.
- Köşe levhası, değdiği kirişe kaynaklanmaz. Hem kirişe hem kolona kaynaklanan köşe levhaları, pahlı köşeler ve Uniform Force Method birleşiminin çalışma noktası düzeni henüz yapılmadı.
- DetailCraft köşe levhasını veya cıvataları tasarlamaz (dayanım kontrolü yoktur); uyarılar aralık ve oturma içindir.
