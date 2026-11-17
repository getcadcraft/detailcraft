---
title: Levha yerleştirin ve özel profil ekleyin
summary: Kalınlık ve genişliğe göre serbest levhalar yerleştirin; kendi I, kanal, köşebent, boru ya da düz çubuk kesitlerinizi tanımlayın.
keywords: levha, düz, özel profil, kullanıcı profili, parametrik, kesit, şekil, enine kesit, pl
from: c24c3b51
---

## Bir levha yerleştirin

Bir levha bir kiriş gibi yerleştirilir: genişliği yan yana, kalınlığı yukarı doğru olacak şekilde iki kesişim arasında uzanır.

1. {{ui:Yerleştir}} grubunda {{ui:Levha}} seçin ya da {{key:P}} tuşuna basın.
2. {{ui:Özellikler}} panelinde {{ui:Kalınlık (mm)}} ve {{ui:Genişlik (mm)}} değerlerini ayarlayın. Varsayılan, A36'da 20 x 200'dür.
3. Gerekirse {{ui:Malzeme}} ve {{ui:Dönme (°)}} değerlerini ayarlayın. 90 derecelik dönme, levhayı kenarı üzerinde durdurur.
4. İki kesişim tıklayın ya da {{ui:Izgaraya göre ekle}} formunu kullanın.

Levhanın profil adı `PL<kalınlık>x<genişlik>` biçiminde yazılır, örneğin PL20x200. Uzunluğu iki nokta arasındaki mesafedir.

Yerleştirilmiş bir levhayı yeniden boyutlandırmak için seçin ve {{ui:Kalınlık (mm)}} ya da {{ui:Genişlik (mm)}} değerini değiştirin.

Yerleştirdiğiniz levhalar kendi başlarına parçalardır (işaret p, montaj P). Bağlantılarla oluşturulan uç levhaları ve taban levhaları da levhadır, ancak bunları bağlantıları üzerinden değiştirirsiniz; bkz. [Uç levhaları](topic:end-plates).

## Özel profil ekleyin

Gerekli kesit kataloğta yoksa, boyutlarından oluşturun. Özel bir profil modele aittir ve onunla birlikte kaydedilir. Onu her yeni modelde kullanmak için, aşağıdaki "Yeni modeller için bir profil saklayın" bölümünde anlatılan Profillerim'de tutun.

1. {{ui:Model}} panelinde solda {{ui:Özel profil}} bölümünü açın.
2. Bir {{ui:Ad}} yazın, örneğin `W8x18-custom` ya da `RHS 120x80x5`. Bir katalog adı ya da levha adına benzeyen bir ad olamaz.
3. Bir {{ui:Şekil}} seçin: {{ui:I profil}}, {{ui:Kanal}}, {{ui:Eşit kollu köşebent}}, {{ui:Dikdörtgen boru}}, {{ui:Yuvarlak boru}} ya da {{ui:Düz çubuk}}.
4. Görünen boyutları doldurun, hepsi milimetre cinsinden:

| Şekil | Boyutlar |
|---|---|
| I profil | Derinlik d, Flanş genişliği bf, Gövde tw, Flanş tf, Köşe yuvarlatma yarıçapı r (0 olabilir) |
| Kanal | Derinlik d, Flanş genişliği bf, Gövde tw, Flanş tf (köşeler keskin) |
| Eşit kollu köşebent | Genişlik b (her kol), Kalınlık t |
| Dikdörtgen boru | Yükseklik h, Genişlik b, Kalınlık t (dış köşe yarıçapı 2t) |
| Yuvarlak boru | Çap D, Kalınlık t |
| Düz çubuk | Genişlik b, Kalınlık t |

5. {{ui:Profillerim'de sakla}} kutusunu işaretli bırakın; böylece her yeni modelde bulunur (aşağıya bakın), ya da yalnızca bu modelde tutmak için işareti kaldırın.
6. {{ui:Profil ekle}} seçin.

Durum çubuğu "Profil "…" eklendi; her profil listesinde Özel altında yer alır." der. Profil, form altındaki listede ve her {{ui:Profil}} listesinin sonunda görünür.

DetailCraft şeklin var olabileceğini denetler. Şu gibi iletiler görürsünüz: "Gövde ve flanşlar derinlik ve genişliğe sığmıyor.", "Köşe yuvarlatma yarıçapı flanş için çok büyük." ya da "Et çok kalın." Sayıları düzeltin ve yeniden {{ui:Profil ekle}} seçin.

### Özel profillerin aldıkları

- Metre başına kütle, alan × 7850 kg/m³ ile hesaplanır (katalog boyutları yayımlanmış ağırlığı kullanır).
- Özel I profiller, katalog I profilleri gibi delik, kesim, uç levhası, NC dosyası ve imalat çizimi alır.
- Özel düz çubuklar levha gibi davranır.
- Özel kanallar ve borular delik alır; köşebentler ve yuvarlak borular henüz almaz.

Eklendikten sonra özel bir profili bir modelden düzenleyemez ya da kaldıramazsınız (hata yaptıysanız hemen {{key:Mod+Z}} kullanın). Düzeltilmiş bir profile yeni bir ad verin.

## Yeni modeller için bir profil saklayın

{{ui:Profillerim}}, formun altındadır ve kendi özel profil listenizdir. Bu tarayıcıda, bu bilgisayarda tutulur; model dosyasında ya da hesabınızda değil.

- {{ui:Profillerim'de sakla}} işaretliyken eklenen bir profil listeye girer. DetailCraft'ın başlattığınızda açtığı model dahil, her yeni model tüm profilleriyle başlar.
- Modelde zaten bulunan ama listede olmayan bir profilin yanında bir {{ui:Sakla}} düğmesi vardır.
- Profilinizin olmadığı bir modelde (örneğin eski bir dosyada), eklemek için {{ui:Burada kullan}} seçin.
- {{ui:Kaldır}} bir profili listeden çıkarır. Onu zaten kullanan modeller kendi kopyasını korur.
- Açtığınız bir model, profilleri kendi dosyasına kaydedilmiş haliyle korur. Dosya açmak listenizi asla değiştirmez.
- Listede farklı boyutlara sahip bir ada sahip bir profil reddedilir: yeni olana başka bir ad verin.
- Tarayıcının site verilerini temizlemek ya da başka bir tarayıcı ya da bilgisayar kullanmak boş bir liste ile başlatır. Gizli pencere bunu tutamaz; uygulama bunu size söyler.
