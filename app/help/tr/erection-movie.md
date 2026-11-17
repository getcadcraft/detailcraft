---
title: Montaj planı ve filmi
summary: Bir vinç ve yük tablosunu girin, her kaldırmanın faz sırasıyla tabloya göre denetlendiğini görün ve çevrimdışı herhangi bir telefonda oynatılan bir montaj filmi kaydedin.
keywords: montaj, vinç, kaldırma, yük tablosu, yarıçap, kapasite, bağlama, sıra, film, animasyon, telefon, çevrimdışı, kaldırma planı
from: fa7b0133
---

{{ui:Montaj}} sekmesi modeli bir montaj sırasına çevirir ve her kaldırmayı tarif ettiğiniz bir vinçle denetler. Yazdığınız sayılardan yola çıkar. Bu bir kaldırma planı değildir: onu bağlama ustası ve vinç operatörü hazırlar.

## Vinci tarif edin

{{ui:Vinç ekle}} öğesini seçin, sonra doldurun:

- **Vinç merkezi X ve Y:** vincin durduğu yer, milimetre cinsinden.
- **En yüksek kanca:** kancanın yükselebileceği en fazla yükseklik, milimetre cinsinden. 0, hiçbir sınırın denetlenmeyeceği anlamına gelir.
- **Kanca bloğu ve donanım yük tablosunda değil:** yük tablonuz bunu zaten yapmıyorsa, bir yük eklenmeden önce tablodan düşülen kilogram.
- **Yük tablosu:** satır başına bir satır; yarıçap metre cinsinden, sonra kapasite kilogram cinsinden. Satırları vincin kendi tablosundan kopyalayın.

Tablo, bir yük tablosunun okunduğu gibi okunur: bir yarıçap için listelenen kapasite o yarıçapa kadar geçerlidir. İki satır arasındaki bir yarıçapta bir yük, iki değerin arasındaki bir değer değil, **daha uzak** satırın kapasitesini alır. İlk satırın içinde ilk satırın kapasitesi geçerlidir. Son satırın ötesinde vinç hiçbir şey kaldıramaz. Bir kaldırma için geçerli yarıçap, alma yarıçapı ile yerleştirme yarıçapının büyüğüdür.

İkinci bir vinç aynı şekilde eklenir. Her kaldırma, payınız içinde kaldırabilen ilk vince gider.

## Plan ne yapar

- Montaj başına bir kaldırma: uç levhalı bir kiriş, taban levhalı bir kolon, bir merdiven.
- Sıra önce fazları, sonra kat kat izler: kolonlar, onların taşıdığı kirişler, çaprazlar, levhalar, merdivenler. Bir parça, onu taşıyandan önce asla kaldırılmaz.
- Her kaldırma ağırlığını (modelin brüt ağırlığı artı {{ui:Her ağırlığa eklenen donanım}}), yarıçapını, tablonun kullandığı payı ve başladığı dakikayı gösterir.
- {{ui:Bir kaldırmanın kullanabileceği tablo payı}} güvenlik payınızdır. Bunun üzerindeki bir kaldırma **Payınızın üzerinde** olarak işaretlenir; tablonun üzerindeki **Tablonun üzerinde**; tablonun son yarıçapının ötesindekiler **Tablonun ötesinde**; ve kancanın üzerinde kalan bir parça **Kanca çok alçak**.

Delikler ve kesimler ağırlıklardan düşülmez; cıvatalar donanım yüzdesiyle karşılanır.

## Sorunlar

Payın üzerinde, tablonun ötesinde, çok yüksek olan ya da onu taşıyan şeyden önce ayarlanmış her kaldırma, {{ui:Sorunlar}} panelinde görünür. Onu taşıyacak bir bağlantısı olmayan bir kiriş, geçici destek gerektiren olarak listelenir.

## Filmi kaydedin

{{ui:Filmi kaydet}} tek bir HTML dosyası yazar. Telefon dahil herhangi bir tarayıcıda, ağ ve hesap olmadan açın: oynatın ve duraklatın, çubuğu istediğiniz dakikaya sürükleyin, modeli parmağınızla çevirin, yakınlaştırmak için sıkıştırın. Başlık her kaldırmanın adını, ağırlığını, yarıçapını ve tablo payını yazar. Model basit kutular olarak çizilir: gerçek profilleri değil, sırayı ve kaldırmaları gösterir.

Aynı tablo, {{ui:CSV}} düğmesiyle bir CSV olarak kaydedilir. Vinç ve tablo model dosyasında saklanır; her değişiklik tek bir geri alma adımıdır.
