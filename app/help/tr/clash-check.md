---
title: Çakışmaları denetleyin
summary: Birbirinin içine giren elemanları, levhaları ve temelleri bulun; bir birleşimin birleştirmek istediği parçaları dışarıda bırakın ve her çakışmaya gidin.
keywords: çakışma, çakışma denetimi, çarpışma, girişim, bindirme, kesişme, sert çakışma, koordinasyon, model denetimi
from: 04d72d3b
---

Görünümün altındaki {{ui:Çakışmalar}} sekmesini açın ve {{ui:Şimdi denetle}} seçeneğini seçin. DetailCraft gösterilen fazlardaki her parça çiftine bakar: çelikten çeliğe ve çelikten temele. Sekme her çakışmayı, en derin olan önce olmak üzere, şunlarla birlikte listeler:

- iki parça: parça işareti (veya temel işareti) ve profil ile;
- **Bindirme (mm)**: bir parçanın bir noktasının diğerinin içinde ne kadar derinde olduğu, en yakın yüzeye kadar;
- **Yakın**: çakışmanın olduğu ızgara kesişimi ve seviye ya da koordinatları;
- {{ui:Göster}}: iki parçayı da seçer ve yeri görünümün ortasına getirir.

Sekmenin başlığı son denetimin kaç çakışma bulduğunu gösterir. Denetim kendiliğinden çalışmaz: modeli değiştirdikten sonra liste bunu belirtir ve {{ui:Şimdi denetle}} denetimi yeniden çalıştırır.

## Çakışma olmayanlar

- Yalnızca birbirine değen parçalar: bir levhanın bir başlığa dayanması, bir taban levhasının temeline oturması, iki elemanın uç uca gelmesi. **Tolerans (mm)** iki parçanın birbirine ne kadar girebileceğini belirler; bundan sonra sayılır (başlangıçta 1 mm; en fazla 50).
- Bir birleşimin birleştirdiği parçalar: bir uç levhası ile kirişi ve bağlandığı kolon başlığı, o birleşimin kirişi ve kolonu, bir taban levhası ile kolonu, bir ekin levhaları ile iki parçası, bir çaprazla köşe levhası (bir borunun yuvası modelde kesilmez). Birleşim bu parçaların buluşmasını ister.
- Bir taban levhasının altındaki temelde bulunan kesme pabucu (bir harç cebine oturur).
- Cıvatalar ve angkraj çubukları (deliklerden geçerler) ve donatı.
- Gizli fazlardaki parçalar. Bkz. [Fazlar](topic:phases).

Bir çapraz veya kiriş, aralarında bağlantı olmadan bir kolona giriyorsa bu bir çakışmadır: o birleşimin bir bağlantıya ihtiyacı vardır. Örnek çerçevenin çaprazı bunu gösterir: köşe levhası yoktur. Onu seçin ve {{ui:Köşe levhası}} seçeneğini seçin ([Çapraz köşe levhaları](topic:brace-gussets)); çakışmaları da kalkar.

## İyi bilmeniz gerekenler

- Bindirme, malzemenin içindeki derinliği ölçer; bu nedenle bir elemanın kolonun ince gövdesine veya başlığına girmesi, uzağa uzanıyor olsa bile yalnızca birkaç milimetre görünür.
- Parçalar kesildikleri hâlleriyle denetlenir: ağız kesimleri ve bir kirişin uç levhalarındaki geri kesmeler hesaba katılır. Delikler hesaba katılmaz.
