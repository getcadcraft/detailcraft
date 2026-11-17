---
title: Kesme levhaları
summary: Bir kirişin gövdesini, bir kolon flanşına veya gövdesine atölyede kaynaklanmış bir levhaya cıvatalayın; kiriş planda açılı olarak kolona geldiğinde veya eğimli olduğunda da.
keywords: kesme levhası, tek levha, flanş levhası, basit bağlantı, gövde bağlantısı, eğik, çarpık, eğimli, açılı kiriş, cıvatalı, bağla
from: 18afc8ab
---

Kesme levhası (tek levha, flanş levhası), atölyede kolona kaynaklanmış bir levhadır; sahada kirişin gövdesi, tek bir dikey cıvata sırasıyla ona cıvatalanır. DetailCraft levhayı yerleştirir, kirişi kolondan temiz bir mesafede geri keser, levhadaki ve kiriş gövdesindeki delikleri açar, cıvataları ve kaynağı ekler ve kenar mesafeleri ile oturmayı uyarır.

## Nerede çalışır

- Ucu, **dikey** bir I kesit kolonun hattında olan ve kolonun **flanşına** veya **gövdesine** değen bir kiriş (I kesit veya kanal).
- **Planda kare, çarpık veya eğimli**: levha kirişin gövdesini izler ve kiriş, en yakın köşesi kolona olan boşluğu koruyacak şekilde geri kesilir. 60°'den fazla yükselen veya alçalan bir kiriş reddedilir.

## Kesme levhası ekleyin

1. Kirişi seçin.
2. {{ui:Connect}} grubunda {{ui:More}} seçeneğini açın ve {{ui:Shear tabs}} seçin (ya da {{ui:Properties}} panelinde {{ui:Add shear tabs}} seçin).
3. Kolona değen kirişin her serbest ucu bir levha alır. Her kiriş ucu tek bir bağlantı alır: bir kesme levhası veya bir uç levhası.

Ayarlarını görmek ve değiştirmek için bir levhaya (veya bir cıvataya) tıklayarak seçin. {{ui:Apply to similar}} onu, henüz bağlantısı olmayan benzer her birleşime kesme levhası olarak kopyalar.

## Ayarlar (mm)

| Ayar | Başlangıç | Anlamı |
|---|---|---|
| Levha kalınlığı | 10 | Levhanın kalınlığı |
| Levha genişliği | 115 | Levhanın kolon yüzünden kiriş boyunca ne kadar uzandığı |
| Cıvata çapı, Delik çapı, Cıvata sınıfı | 20, 22, A325 | Uç levhalarındaki gibi |
| Cıvata sırası, Sıra aralığı | 3, 75 | Dikey sıradaki cıvatalar |
| Kenar mesafesi (üst ve alt cıvatalar) | 38 | Üst ve alt cıvatalardan levhanın uçlarına; levha, sıra × aralık + 2 × bu değer kadar derindir |
| Cıvata grubu yükseltme | 0 | 0, cıvataları kiriş derinliğinin ortasına getirir |
| Kolona boşluk | 13 | Kolon ile kirişin en yakın köşesi arasındaki net boşluk |
| Kolon yüzünden cıvata hattına | 65 | Kiriş boyunca, kolon yüzünden cıvatalara |
| Cıvata boyu payı | 30 | Tutuşa (levha + kiriş gövdesi) eklenir, 5 mm'ye yukarı yuvarlanır |
| Köşe kaynağı boyutu | 6 | Levhanın iki yanından kolona |

## İyi bilinmesi gerekenler

- Levha, kolonun elemanının bir parçasıdır (atölyede kaynaklanır); kirişin montajı yalnızca deliklere sahiptir.
- Çarpık veya eğimli bir kiriş, kare olana göre daha fazla geri kesilir, böylece en yakın köşesi boşluğunu korur. DetailCraft kirişleri kare keser: ucu, uygun hale getirmek imalatçıya aittir. Levhanın kolondaki kenarı da kare çizilir.
- DetailCraft dayanımı denetlemez. Uyarılar, kenar mesafeleri ve aralık için EN 1993-1-8 Tablo 3.3 asgarilerini kullanır; levhanın köşe radyüsleri arasındaki gövdeden daha derin olduğunu veya cıvataların kirişin kesilmiş ucuna çok yakın olduğunu söyler.
- [Çakışma denetimi](topic:clash-check) bir levhayı ve birleştirdiği elemanları dışarıda bırakır: birbirleriyle buluşmaları amaçlanmıştır.
