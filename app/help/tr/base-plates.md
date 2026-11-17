---
title: Taban levhaları ve angkraj çubukları ekle
summary: Bir kolonun altına dört angkraj çubuklu kaynaklı bir taban levhası koyun, boyutlarını ayarlayın ve benzer her kolona kopyalayın.
keywords: taban levhası, baseplate, angkraj çubukları, angkraj cıvataları, tutma cıvataları, kolon tabanı, temel cıvataları, benzer
from: 619ebc64
---

Bir taban levhası bağlantısı, kolonun altına bir levha yerleştirir, kolonu levha kalınlığı kadar kısaltır, ikisini birbirine kaynaklar ve levhadaki deliklerden dört angkraj çubuğu ekler.

:::warning
Boyutlar başlangıç değerleridir, bir tasarım değildir. DetailCraft ezilme, çubuk dayanımı veya gömme derinliğini kontrol etmez.
:::

## Taban levhası ekleyin

1. {{ui:Seç}} ({{key:V}}) seçeneğini belirleyin ve bir kolona tıklayın. Kolon düşey olmalıdır.
2. {{ui:Bağlan}} grubunda {{ui:Taban levhası}} seçeneğini veya {{ui:Özellikler}} panelinde {{ui:Taban levhası ekle}} seçeneğini belirleyin.
3. Durum çubuğu "Dört angkraj çubuklu taban levhası eklendi." yazar. Yeni bağlantı seçili olur.

Bir kolonda yalnızca bir taban levhası olabilir. Zaten bir tane varsa durum çubuğu "Bu kolonda zaten bir taban levhası var." yazar.

## Değiştirin

Taban levhasını seçin (levhaya veya bir çubuğa tıklayın). {{ui:Levha, cıvatalar ve kaynak (mm)}} altında:

| Ayar | Varsayılan | Ne yapar |
|---|---|---|
| Levha kalınlığı | 25 | Kolon bu kadar kısalır |
| Levha uzunluğu | 450 | Kolon derinliği boyunca |
| Levha genişliği | 400 | Kolon genişliği boyunca |
| Çubuk çapı | 20 | Angkraj çubuğu boyutu |
| Delik çapı | 33 | Levhadaki delik |
| Cıvata sınıfı | F1554 Gr 36 | Çubuk sınıfı, metin olarak |
| Çubuk aralığı (derinlik boyunca) | 350 | Çubuk merkezleri arası, levha uzunluğu boyunca |
| Çubuk aralığı (genişlik boyunca) | 300 | Çubuk merkezleri arası, genişlik boyunca |
| Levha üstünden çubuk çıkıntısı | 100 | Levha üstünden çubuk üstüne |
| Levha altında çubuk gömme | 450 | Levha altından betona doğru |
| Köşe kaynağı boyutu | 8 | Kolon tabanının tamamı etrafında |
| Levha malzemesi | A36 | Metin |
| Harç boşluğu | 0 | Betonun üstü ile levha altı arasındaki boşluk |
| Takviyeler | Yok | Yok, 2 (gövde hizasında) veya 4 (ayrıca gövdeye dik) seçin; aşağıya bakın |
| Takviye kalınlığı, yüksekliği | 12, 150 | |
| Kesme kilidi derinliği | 0 | Kilidin levhanın altında ne kadar uzandığı; 0 = kilit yok |
| Kesme kilidi kalınlığı, genişliği | 25, 150 | |
| Levha pulları | Yok | Her çubukta veya hiçbirinde |
| Pul boyutu, kalınlığı | 0, 0 | 0 = çubuk için AISC Design Guide 1'den asgari değer |

Çubuk uzunluğu = gömme + harç boşluğu + levha kalınlığı + çıkıntı. Varsayılanlarla bu 575 mm eder.

## Taban ayrıntıları: harç, takviyeler, kesme kilidi, pullar

Dördü de yeni bir taban levhasında kapalıdır; DetailCraft 0.4'ten önce yapılmış modellerdeki taban levhaları için de öyledir.

- **Harç boşluğu.** Levha, betonun üstünden bu kadar yukarıda durur ve çubuklar bu kadar uzar. AISC Design Guide 1 (2.10), bitmiş bir döşemede 1 in., bir temel veya ayakta 1½ ila 2 in. önerir; büyük levhalarda ve kesme kilitli levhalarda daha fazlası.
- **Takviyeler.** Kolona ve levhaya kaynaklanmış, kolon yüzünden levha kenarına kadar uzanan, dikdörtgen düşey levhalar (henüz pah veya konik yok). **2** adet gövde hizasında, her flanşın ötesinde durur; **4** adet ise ayrıca gövdeye dik olarak, flanşlar arasında, levha yanlarına kadar iki tane daha ekler. Boru kolonda her yüzün ortasında durur. Her biri iki yanda kolona ve levhaya kaynaklanır.
- **Kesme kilidi.** Taban levhasının altına, kolon derinliği doğrultusunda, ortalanmış ve tamamen kaynaklanmış bir levha. DetailCraft, kilit harç boşluğundan daha derin değilse uyarır. Temeldeki yuvayı kesmez; bu nedenle [çakışma denetimi](topic:clash-check) kilidi ve temeli bu yüzden dışarıda bırakır.
- **Levha pulları.** Her çubukta, taban levhasının üstünde oturan kare bir levha pul. Kolonun montajında gevşek olarak listelenir (kolonla birlikte gelir, kaynaklı değildir: Design Guide 1, 2.6). Boyut ve kalınlık 0 iken DetailCraft, çubuk için AISC Design Guide 1, 2. baskı, Tablo 2.3'ten asgari pulu alır; metrik bir çubuk bir üst inç boyutunu alır (bir M20 çubuk 7/8 in. satırını alır: 2½ in. × 5/16 in.). Özellikler paneli kullanılan boyutu gösterir. Pulun deliği çubuk çapı + 1/16 in.'dir: bu DetailCraft'ın seçimidir, tablo bir değer vermez. Çubuklar pul ve somun için yeterince dışarı çıkmıyorsa (çıkıntı, pul kalınlığı + çubuk çapından azsa) DetailCraft uyarır.

Design Guide 1, Tablo 2.3, ayrıca levhadaki çubuk deliğini önerir: ¾ in. çubuk için 1-5/16 in., ⅞ in. için 1-9/16 in., 1 in. için 1-13/16 in. DetailCraft delik boyutunuzu değiştirmez.

Çubuk delikleri levha kenarına delik çapının 1.2 katından daha yakın olduğunda, çubuklar kolon çizgisinin içine düştüğünde veya levha kolondan küçük olduğunda da uyarılar görünür.

## Benzer kolonlara kopyalayın

1. Taban levhasını seçin.
2. {{ui:Benzerlerine uygula (n)}} seçeneğini veya {{ui:Bağlan}} grubunun {{ui:Daha fazla}} menüsündeki {{ui:Benzer}} seçeneğini belirleyin.
3. Aynı kesite sahip, taban levhası olmayan ve başka bir kolonun üzerinde durmayan her düşey kolona bir kopya verilir.

## Taban levhaları ve temeller

Bir taban levhası temel gerektirmez; temel de üstündeki taban levhasını bilmez: angkraj çubukları temel donatısına bağlanmaz. Temelleri {{ui:Temel}} ile yerleştirin; bkz. [Donatılı temel yerleştirme](topic:footings-and-rebar).
