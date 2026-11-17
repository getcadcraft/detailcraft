---
title: Pencereyle seçin, taşıyın, döndürün, aynalayın, çok şeyi değiştirin
summary: Seçmek için bir pencere sürükleyin, seçili parçaları taşımak için sürükleyin, seçimi (veya bir kopyasını) taşıyın, döndürün veya aynalayın ya da birçok elemanın profilini, malzemesini, konumunu veya dönmesini bir kerede değiştirin.
keywords: kement, çit, serbest seçim, sürükle, sürükle bırak, sürükleyerek taşı, yakalama, pencere, kesişen pencere, kutu seçimi, sürükleyerek seç, çok seç, taşı, döndür, aynala, çevir, kopyala, çok şeyi değiştir, birden çok eleman, profil, malzeme, konum, dönme, değişken, ızgara çizgisi
from: 50b16f9a
---

Bunların her biri tek bir geri alma adımıdır: bir {{key:Mod+Z}} hepsini geri alır.

## Pencereyle seçin

- {{ui:Plan}} ve {{ui:Görünüş}} üzerinde boş bir yerden sol düğmeyle sürükleyin. {{ui:3B}} görünümünde {{key:Shift}} tuşunu basılı tutup sürükleyin (düz sürükleme modeli döndürür).
- Bir pencere için **sağa** sürükleyin: tamamen içinde kalanı alır, düz bir kenarla çizilir.
- Kesişen bir pencere için **sola** sürükleyin: dokunduğu her şeyi alır, kesikli çizilir.
- Seçimi değiştirmek yerine eklemek için sürüklemeye başlarken {{key:Shift}} tuşunu basılı tutun.
- Plan veya görünüş yalnızca gösterdiğini sunar: planın üstünde kesilmiş parçalar veya görünüşün ızgara çizgisinden 1 m'den fazla uzakta olanlar seçilmez.
- Sürüklerken {{key:Esc}} tuşu pencereyi bırakır.

### Kement

[DetailCraft ayarları](topic:settings) içinde {{ui:Sürükleyerek seçim}} altından **Kement** seçeneğini belirlediğinizde aynı sürükleme, dikdörtgen yerine serbest bir çizgi çizer.

- İlk yan hareketi seçimin nasıl yapılacağına karar verir: **sağa**, tamamen içinde kalanlar (düz çizgi); **sola**, dokunulanlar (kesikli).
- Sürüklerken içinde, dokunan ve **çit** arasında geçiş yapmak için {{key:Space}} tuşuna basın. Çit, geçtiği her şeyi alan açık bir çizgidir (noktalı, turuncu).
- {{key:Shift}} ile ekleme ve {{key:Esc}} ile bırakma, pencere için olduğu gibi çalışır.

:::touch
Dokunmatik ekranda bir parmak plan ve görünüşü önceki gibi kaydırır; parçaları dokunarak seçin.
:::

{{ui:Plan}} ve {{ui:Görünüş}} üzerinde, {{ui:Seç}} aracı açıkken sağ veya orta düğmeyle kaydırın.

## Parçaları sürükleyerek taşıyın

1. Önce parçaları seçin (tıklama, {{key:Shift}}+tıklama veya bir pencere).
2. Seçili parçalardan birinin üzerine basın ve sürükleyin. Tüm seçim taşınır; kesikli bir çerçeve nereye gideceğini gösterir.
3. Yerleştirmek için bırakın. Bırakmadan önce {{key:Esc}} her şeyi eski yerine koyar.

- {{ui:3B}} ve {{ui:Plan}} görünümlerinde parçalar kat boyunca taşınır. {{ui:3B}} görünümünde yukarı ve aşağı taşımak için sürüklemeye başlarken {{key:Mod}} tuşunu basılı tutun.
- {{ui:Görünüş}} görünümünde parçalar ızgara çizgisi boyunca ve yukarı aşağı, görünüşün içinde taşınır.
- Tuttuğunuz parça, ucu bir ızgara kesişimine birkaç piksel kalınca oraya yapışır (kesişim yanar ve durum çubuğu adını söyler). Diğer yerlerde taşıma 10 mm adımlarla gerçekleşir.
- Seçili olmayan bir parçaya basmak görünümü döndürür veya kaydırır; bu yüzden bir sürükleme yanlışlıkla bir şeyi taşımaz.
- Sürükleme, {{ui:Taşı}} gibi tek bir geri alma adımıdır. Bağlantılar elemanlarını takip eder.

## Birçok elemanda bir özelliği değiştirin

İki veya daha fazla eleman seçin. {{ui:Özellikler}} panelinde **Hepsinde değiştir** altında:

- {{ui:Profil}}, {{ui:Konum}}: aralarındaki kirişler, kolonlar ve çaprazlar için.
- {{ui:Levha kalınlığı (mm)}} ve {{ui:Levha genişliği (mm)}}: levhalar için.
- {{ui:Malzeme}} ve {{ui:Dönme (°)}}: hepsi için.

Elemanlar uyuşmadığında bir alan **Değişken** gösterir. Bir değer seçin veya yazın; uygulanacak her eleman onu alır. Durum çubuğu kaç elemanın değiştiğini ve kaçının kendi değerini koruduğunu söyler.

{{ui:Özellikler}} panelindeki sayı alanları hesaplama da kabul eder: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Okunamayan bir hesaplama reddedilir ve durum çubuğu hatanın nerede olduğunu söyler.

## Taşıyın, döndürün veya aynalayın

Elemanları ve temelleri seçin (tek biri de olur), sonra {{ui:Özellikler}} panelinde **Taşı, döndür, aynala** bölümünü kullanın. Bağlantılar kendi başlarına taşınmaz: elemanlarını takip ederler. Bir kirişi taşır ama kolonunu taşımazsanız durum çubuğu, taşınan bir elemanı yerinde kalan birine bağlayan kaç bağlantı olduğunu söyler; [Sorunlar](topic:troubleshooting) artık uymayanları belirtir.

- **Taşı:** x, y ve z değerlerini milimetre olarak yazın ve {{ui:Taşı}} seçeneğini belirleyin. Ya da {{ui:İki nokta seç}} seçeneğini (veya {{key:M}} tuşuna basmayı) belirleyin: taşımanın başladığı ızgara kesişimine, sonra gideceği kesişime tıklayın. Kesikli bir çerçeve imleci izler.
- **Plan üzerinde döndür:** açıyı yazın (üstten bakıldığında saat yönünün tersine) ve neyin etrafında döneceğini seçin: seçimin orta noktası veya bir ızgara kesişimi. Kolonlar çerçeveyle birlikte döner.
- **Aynala:** bir ızgara çizgisi seçin. Ayna görüntüsü aynı profilin ters çevrilmiş halidir: bir I profil flanşlarını korur, bir U profil ters yöne bakar (üstü ve altı yer değiştirir), delikler ve ağız kesimleri parçayla birlikte gider.
- Seçimi olduğu yerde bırakıp bir kopyayı taşımak, döndürmek veya aynalamak için **Orijinali koru (kopya yap)** kutusunu işaretleyin. Bağlantılar, [DetailCraft ayarları](topic:settings) içinde {{ui:Uç levhalarını ve taban levhalarını elemanlarıyla birlikte kopyala}} açıkken birlikte gelir.

Döndürme dikey bir çizgi etrafında olur, aynalama dikey bir düzlemde olur; böylece katlar düz kalır ve temeller dik kalır.
