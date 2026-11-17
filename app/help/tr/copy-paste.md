---
title: Kopyalama, yapıştırma ve çoğaltma
summary: Birden fazla parça seçin, delikleri, kesimleri ve bağlantılarıyla birlikte kopyalayın ve bir ızgara kesişimine, ofsetle, olduğu yerde ya da başka bir sekmeye yapıştırın. Kes, çoğalt, sil ve tümünü seç.
keywords: kopyala, yapıştır, kes, çoğalt, pano, olduğu yere yapıştır, tümünü seç, seçimi kaldır, çoklu seçim, shift tıklama, birkaç, bir açıklığı tekrarla, bir çerçeveyi kopyala, ofset, birkaç öğeyi sil, düzenle menüsü, daha fazla menüsü
from: f25f1829
---

Araç çubuğundaki {{ui:Düzenle}} grubunda {{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}} ve {{ui:Yapıştır}} bulunur. Onun {{ui:Daha fazla}} menüsü diğerlerini içerir: {{ui:Kes}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Olduğu yere yapıştır}}, {{ui:Çoğalt}}, {{ui:Sil}}, {{ui:Tümünü seç}} ve {{ui:Seçimi kaldır}}; her birinin kendi kısayolu vardır. O anda işlem yapamayan bir düğme ya da menü öğesi soluk görünür; nedenini okumak için üzerine gelin (örneğin "henüz hiçbir şey kopyalanmadı").

Her yapıştırma, kesme, çoğaltma ve silme tek bir adımdır: bir {{key:Mod+Z}} hepsini geri alır.

## Birkaç parça seçin

- Bir parçayı seçmek için üzerine tıklayın. {{key:Shift}} tuşunu (veya {{key:Ctrl}} ya da {{key:Mod}} tuşunu) basılı tutup daha fazla parçaya tıklayarak onları ekleyin; seçili bir parçaya aynı şekilde tıklayarak çıkarın.
- {{key:Mod+A}} veya {{ui:Tümünü seç}} her elemanı, bağlantıyı ve temeli seçer.
- {{key:Esc}} veya {{ui:Seçimi kaldır}} seçimi temizler.

Birden fazla öğe seçiliyken {{ui:Özellikler}} paneli "4 seçili" (ya da kaç tane ise) başlığını taşır ve elemanları türlerine göre, bağlantıları, temelleri ve brüt çelik ağırlığını listeler; {{ui:Kopyala}}, {{ui:Çoğalt}} ve {{ui:Sil}} düğmeleri de bulunur.

## Kopyala

1. İstediğiniz elemanları ve temelleri seçin.
2. {{ui:Kopyala}} öğesini seçin veya {{key:Mod+C}} tuşlarına basın.

Birlikte gelenler:

- Her eleman bütünüyle: profil, malzeme, uçlar, konum, dönme, ad, delikler ve kesimler. Kullandığı özel bir profil de kopyalanır.
- Her temel bütünüyle: boyut, beton, alt donatı ve bekleme donatıları.
- Uç levhaları ve taban levhaları, ancak bir bağlantının birleştirdiği her eleman kopyalandığında: bir kirişin uç levhası kirişe ve kolonuna ihtiyaç duyar. Durum çubuğu kaç bağlantının dışarıda bırakıldığını söyler. Bağlantıları bilerek dışarıda bırakmak için, [DetailCraft ayarları](topic:settings) bölümünde **Uç levhalarını ve taban levhalarını elemanlarıyla birlikte kopyala** seçeneğinin işaretini kaldırın.

Tek başına bir bağlantı kopyalanamaz; bunun yerine elemanlarını seçin. Diğer birleşimlere aynı bağlantıyı vermek için {{ui:Benzer}} öğesini kullanın (bkz. [Uç levhaları](topic:end-plates#copy-it-to-every-similar-joint)).

Kopya, siz başka bir şey kopyalayana kadar bu tarayıcıda kalır. Aynı tarayıcıdaki başka bir DetailCraft sekmesi ya da penceresi onu yapıştırabilir; böylece bir çerçeveyi bir modelden kopyalayıp diğerine yapıştırabilirsiniz.

## Bir ızgara kesişimine yapıştırın

1. {{ui:Yapıştır}} öğesini seçin veya {{key:Mod+V}} tuşlarına basın.
2. İmleci görünümün üzerine getirin. Kopyanın kesikli çerçevesi, imlece en yakın ızgara kesişimini izler.
3. Bir kesişmeye tıklayın. Kopyanın temel noktası (en alt köşesi: kopyalanan her şeyin en küçük x, y ve z değerleri) oraya yerleşir.

Yapıştırılan parçalar sonradan seçili olur; böylece başka bir yere yeniden yapıştırabilir ya da onları değiştirebilirsiniz. {{key:Esc}} yapıştırmayı iptal eder; kopya panoda kalır. {{ui:Plan}} ve {{ui:Görünüş}} doğru kesişmeyi daha kolay yakalamanızı sağlar.

:::tip
Bir açıklığı tekrarlamak için, açıklığın elemanlarını seçin (ya da {{key:Mod+A}} ile hepsini), kopyalayın, yapıştırın ve kopyanın en alt köşesinin olduğu yerden bir açıklık ileride olan kesişmeye tıklayın.
:::

## Klavyeyle yapıştırın

Yapıştırma sırasında {{ui:Özellikler}} paneli panodakileri ve iki formu gösterir:

- {{ui:Ofsetle yapıştır (mm, orijinalden)}}: x, y ve z değerlerini yazın ve {{ui:Bu ofsetle yapıştır}} öğesini seçin. Başlangıç değeri [DetailCraft ayarları](topic:settings) bölümündeki ofsettir.
- {{ui:Bir ızgara kesişimine yapıştır}}: harfli bir ızgara, numaralı bir ızgara ve bir kat seçin, ardından {{ui:Buraya yapıştır}} öğesini seçin. Temel nokta oraya gider.

## Olduğu yere yapıştırın

{{ui:Olduğu yere yapıştır}} ({{key:Mod+Shift+V}}), kopyayı kopyalandığı tam koordinatlara yerleştirir. {{ui:Kes}} işleminden sonra ya da diğer modeldeki parçaları aynı yere getirmek için kullanın. Orijinaller hâlâ duruyorsa kopya onların üzerine oturur ve durum çubuğu uyarır: kopyaları {{ui:Özellikler}} içindeki {{ui:Başlangıç}} ve {{ui:Uç}} değerleriyle taşıyın ya da geri alın.

## Çoğalt

{{ui:Çoğalt}} ({{key:Mod+D}}) seçimi kopyalar ve hemen yapıştırır; [DetailCraft ayarları](topic:settings) bölümündeki ofset kadar kaydırılır (başlangıçta x yönünde 6000 mm). Panodaki içeriği değiştirmez. Kopyalar sonradan seçili olur; bu yüzden {{key:Mod+D}} tuşuna yeniden basmak onlardan bir sonrakini üretir.

## Kes ve sil

- {{ui:Kes}} ({{key:Mod+X}}) seçimi kopyalar, ardından siler. Ait olduğu yere yapıştırın.
- {{ui:Sil}} ({{key:Delete}} veya {{key:Backspace}}) seçimi siler. Bir elemanı silmek, onun bağlantılarını da siler.

## Yapıştırdıktan sonra işaretler

Parça ve montaj işaretleri hiçbir zaman saklanmaz; DetailCraft her değişiklikten sonra bunları modelden yeniden numaralandırır ([İşaretlerin nasıl verildiği](topic:mark-rules)). Bu nedenle:

- Orijinaliyle aynı parça olan bir kopya (aynı profil, sınıf, kesim uzunluğu, delikler ve kesimler) orijinalin işaretini paylaşır ve {{ui:Parça işaretleri}} içindeki sayı ile malzeme listesi artar.
- Farklı çıkan bir kopya kendi işaretini alır. Örneğin uç levhaları olmadan yapıştırılan bir kiriş kesilmez; dolayısıyla farklı bir parçadır. İşaretler tüm model genelinde yeniden numaralandırılır, bu yüzden diğer parçaların numaraları da değişebilir.

Yapıştırılan her eleman, delik, kesim, bağlantı ve temel yeni bir kimlik alır; böylece modelde hiçbir şey bir kopya ile orijinali arasında paylaşılmaz.

## Pano reddedilirse

Panodaki içerik, açtığınız bir model dosyası kadar dikkatle denetlenir: geçerli bir DetailCraft parçası olmayan her şey atılır ve durum çubuğu bunu belirtir. Daha yeni bir DetailCraft'ın ya da başka bir kaynağın doldurduğu pano, bir mesajla reddedilir ve hiçbir şey yapıştırılmaz. Gizli bir pencere kopyayı tarayıcı depolamasında tutamazsa, kopya yine de o sekmede çalışır.
