---
title: Kesim listesi
summary: Kirişleri, kolonları, çaprazları ve merdiven kirişlerini testere payıyla stok uzunluklarına yerleştirin; kaç çubuk satın alınacağını ve fireyi görün.
keywords: kesim listesi, yerleştirme, stok uzunluğu, çubuk, testere payı, testere, artık, parça artığı, fire, birleştirme, satın alma, çoklu
from: 81d06ce5
---

Görünümün altındaki {{ui:Kesim listesi}} sekmesi, modelin doğrusal parçalarının stok çubuklardan nasıl kesileceğini hesaplar: her profil ve malzeme için her uzunluktan kaç çubuk satın alınacağını, her çubuğa neyin gideceğini ve fireyi.

## Stoğu ayarlayın

Sekmenin üstünde:

- **Stok uzunlukları (mm):** satın alabileceğiniz uzunluklar, boşlukla ayrılmış olarak; örneğin `6000 12000` ya da 20 ft ve 40 ft çubuklar için `6096 12192`. En fazla sekiz.
- **Testere payı (mm):** her kesimin aldığı miktar (başlangıçta 3).
- **Uç kırpma (mm):** ilk parçadan önce her çubuğun ucundan kesilen kısım (başlangıçta 0).
- **Artıkları şu uzunluktan itibaren sakla (mm):** bu uzunluk ya da daha uzun bir artık stoğa geri döner; daha kısa olan hurdadır (başlangıçta 500).

Bunlar, diğer [ayarlar](topic:settings) gibi bu tarayıcıda saklanır.

## Nasıl yerleştirilir

- Her kiriş, kolon, çapraz ve merdiven kirişi; parça işaretine ve adede göre. Levhalar sactan kesilir ve burada yerleştirilmez.
- Her profil ve malzeme ayrı ayrı.
- En uzun parçalar önce, sığdıkları ilk çubuğa; yeni bir çubuk en uzun stok uzunluğuyla başlar. Sonra her çubuk, kesimlerini karşılayabilen en kısa stok uzunluğu olarak satın alınır.
- Her kesim testere payını alır (çubuğun sonuna tam denk gelen kesimden sonra alınmaz); her çubuk uç kırpmasını kaybeder.
- Her stok uzunluğundan uzun bir parça **Hiçbir stoktan uzun** başlığı altında listelenir, yerleştirilmez: onu [ek](topic:splices) ile birleştirin ya da daha uzun bir stok uzunluğu ekleyin.

## Okuma

- **Özet:** profil ve malzeme başına; parçalar, satın alınacak çubuklar (örneğin "2 × 12000, 1 × 6000"), satın alınan ve kullanılan metreler ve fire.
- **Çubuklar ve kesimleri:** her çubuk, stok uzunluğu, parça işaretiyle uzunluğu ile kesimleri ve artık (saklanan ya da hurda).

{{ui:CSV indir}} her iki tabloyu `<name> cut list.csv` olarak kaydeder.

DetailCraft plakaları sayfalara yerleştirmez ve bir çubukta profilleri ya da malzemeleri karıştırmaz.
