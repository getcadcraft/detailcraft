---
title: Aşamalar
summary: Modeli aşamalara bölün (montaj sıraları ya da teslimatlar), her aşamayı gösterin ya da gizleyin, parçaları bir aşamaya koyun ve işaretleri aşama başına numaralandırın.
keywords: aşama, aşamalar, aşama yöneticisi, montaj sırası, teslimat, parti, sıra, aşamayı gizle, aşamayı göster, filtre, numaralandırma, işaret öneki, aşama başına
from: bae506f5
---

Bir aşama, birlikte imal edilen, teslim edilen ya da monte edilen parçalar grubudur: bir montaj sırası, bir teslimat, bir parti. Her eleman ve temel bir aşamada yer alır. Bir bağlantı, ana elemanının aşamasındadır: uç levhasının kirişinde, taban levhasının kolonunda. Yeni bir model tek bir aşamaya sahiptir.

## Aşamalar paneli

{{ui:Model}} panelinin {{ui:Aşamalar}} bölümü her aşamayı listeler:

- onay kutusu aşamayı görünümde gösterir ya da gizler;
- numara ve yazabileceğiniz bir ad (boş bırakılırsa "Aşama 2" gibi);
- içinde kaç parça olduğu;
- {{ui:×}} düğmesi bir aşamayı kaldırır. Yalnızca boş bir aşama silinebilir: önce parçalarını başka bir aşamaya taşıyın.

{{ui:Aşama ekle}} bir sonraki numarayı ekler ve onu yeni parçaların gideceği aşama yapar.

## Parçaları bir aşamaya koyun

- **Yeni parçalar:** {{ui:Yeni parçalar şuraya gider}} seçeneği, bundan sonra yerleştirdiğiniz her eleman ve temelin gideceği aşamayı seçer.
- **Tek bir parça:** seçin ve {{ui:Özellikler}} panelinde {{ui:Aşama}} değerini değiştirin.
- **Birçok parça:** seçin (bir pencere, {{key:Shift}}+tıklama, {{key:Mod+A}}) ve {{ui:Özellikler}} panelinin üstünde {{ui:Aşama}} değerini değiştirin. Farklı aşamalardaysa **Değişken** gösterir. Tek bir değişiklik tek bir geri alma adımıdır.

Kopyalar, kopyalandıkları parçanın aşamasını korur; başka bir modele yapıştırıldıklarında da öyle (aşama oraya eklenir).

## Aşamaları gösterme ve gizleme

Gizli bir aşama görünümde çizilmez, tıklanamaz ya da bir seçim penceresine takılamaz ve {{key:Mod+A}} onu dışarıda bırakır. Yine de malzeme listesinde, raporlarda, çizimlerde ve her dışa aktarımda yer alır. Gizleme yalnızca görünüm içindir: kaydedilmez ve geri alınamaz.

## Aşama başına işaretler

**Aşama başına işaretleri numaralandır** açıkken (başlangıçta açıktır) ve birden fazla aşamada parça varken, her aşama kendi başına numaralandırılır ve işaretleri aşama numarasıyla başlar: parça işaretleri 1-b1, 2-b1; montaj işaretleri 2-B1; temeller 2-F1. Farklı aşamalardaki iki özdeş kiriş, farklı zamanlarda imal edilip sevk edildikleri için farklı işaretler alır. Yalnızca bir aşama kullanılıyorsa işaretlerin öneki yoktur. Tüm modeli tek parça olarak numaralandırmak için kapatın; böylece aşamasından bağımsız özdeş parçalar aynı işareti paylaşır.

Aşama, IFC dışa aktarımına yazılır (özellik kümesi DetailCraft, Phase).

:::note
Aşamalı modeller DetailCraft'ın dosya biçimi 2 ile kaydedilir. DetailCraft'ın 0.3 sürümü bunları açamaz; bu sürüm eski dosyaları açar ve her parça 1. aşamada yer alır.
:::
