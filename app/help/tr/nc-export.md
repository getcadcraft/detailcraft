---
title: NC dosyalarını imalathaneye gönderin
summary: Her parça işareti için DSTV NC dosyalarını (I profiller, kanallar, köşebentler, HSS, levhalar) dışa aktarın, zip olarak paketleyin ve bir makineye ulaşmadan önce kontrol edin.
keywords: nc, nc1, dstv, cnc, makine, kiriş hattı, delme hattı, levha kesimi, dışa aktarma, imalat, zip
from: 598b6091
---

DetailCraft, her parça işareti için bir DSTV NC dosyası (`.nc1`) yazar; bu dosyalar I profiller, kanallar, köşebentler, dikdörtgen ve yuvarlak HSS ile levhalar için üretilir ve birlikte zip'lenir. Kiriş hatları ve levha makineleri, kesmek, delmek ve kesim yapmak için bu dosyaları okur.

## Dışa aktarma

1. Önce {{ui:Sorunlar}} sekmesini temizleyin: oluşturulamayan bir bağlantı hiç delik eklemez.
2. Modeli kaydedin ({{key:Mod+S}}), böylece NC dosyaları kayıtlı bir modelle eşleşir.
3. {{ui:Çıktı}} grubunda {{ui:NC dosyaları}} seçin.
4. Tarayıcı `<name> NC.zip` dosyasını indirir. Durum çubuğu kaç dosya içerdiğini söyler ve yazılmayan işaretleri listeler (kesimi olan bir köşebent ya da yuvarlak boru gibi).

Zip dosyasının içinde her dosya parça işaretiyle adlandırılır: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip sıkıştırılmamıştır ve herhangi bir zip aracıyla açılır.

Modelde parça yoksa durum çubuğu bunu bildirir.

## Her dosyanın içeriği

- **Başlık (ST):** model adı sipariş olarak, parça işareti çizim ve parça olarak, aşama 1, malzeme kalitesi, adet, profil ve boyutları, metre başına kütle ve metre başına boya yüzeyi. Testere kesimleri dik açılıdır.
- **Dış konturlar (AK):** kesimlerin oyduğu gövde konturu ve bir kesim onu kaldırdığı yerde kısaltılmış her flanş konturu.
- **Delikler (BO):** her delik, yüzü, konumu ve çapıyla; uç levhaları ve taban levhalarının açtığı delikler dahil.

Yüz ve koordinat kurallarıyla alan alan: [NC dosyası alanları](topic:nc1-fields).

## Yazılmayanlar

- Kesimi olan köşebentler ve yuvarlak borular: NC dosyası yok. Parça işaretleri durum çubuğunda listelenir.
- Yuvarlak borulardaki delikler (DetailCraft bunları yapmaz).
- Pahlar, iç konturlar, parça işaretlemeleri (çizgi işaretleme) ve dik olmayan testere açıları.
- Yuvalı delikler (DetailCraft yalnızca yuvarlak delik yapar).

## Makinede işlemeden önce kontrol edin

DetailCraft'ın NC dosyaları kendi test paketi tarafından geri okunur, ancak imalathanenizin makinelerinde çalıştırılmamıştır.

1. Dosyaları imalathanenizin NC görüntüleyicisinde ya da makine yazılımında açın ve imalat çizimleriyle karşılaştırın.
2. Bir toplu iş çalıştırmadan önce her türden bir parçayı makinede kontrol edin.
3. Yazılımınızın flanş y koordinatlarını ve kanalların yüzlerini nasıl okuduğunu kontrol edin: DetailCraft flanş y değerlerini arka kenardan ölçer ve kanalları standardın çizdiği gibi sırtüstü yerleştirir (bkz. [NC dosyası alanları](topic:nc1-fields#faces-and-coordinates)).
