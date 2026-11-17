---
title: İmalat çizimleri yapın
summary: Her parça işareti için bir sayfa, hepsi bir kerede yapılır. Birini önizleyin; tek bir sayfayı veya tüm takımı A4'ten A1'e ya da ANSI B'den D'ye bir PDF olarak indirin. Delikler, ağız kesimleri, ölçüler ve künye dahil.
keywords: imalat çizimi, imalat çizimleri, tüm parçalar, toplu, tüm takım, tek parça çizimi, imalat çizimi, pdf, ayrıntı çizimi, parça çizimi, yazdır
from: d25fe035
---

DetailCraft modeldeki her kiriş, kolon, çapraz ve levha için bir parça işaretine bir sayfa yapar; hepsini bir kerede. Aynı parçalar aynı işareti paylaşır, dolayısıyla aynı sayfayı paylaşır. Sayfalar modelden anında oluşturulur; saklanmazlar ve düzenlenmezler.

## Tüm takımı yapın

1. {{ui:Çıktı}} grubunda {{ui:İmalat çizimi}} seçeneğini belirleyin. Hiçbir şeyin seçili olması gerekmez. Bir parça seçiliyse pencere o parçanın sayfasıyla açılır. {{ui:Özellikler}} panelinde aynı düğme, elemanlar için {{ui:İmalat çizimi}}, bağlantılar için {{ui:Levha çizimi}} adını taşır.
2. Bir önizleme açılır; başlığında parça işareti yazar, örneğin "İmalat çizimi b1". Başlığın yanındaki ilk liste her parça işaretini profiliyle, uzunluğuyla ve miktarıyla içerir: birini seçerek sayfasını görün. İkinci liste sayfa boyutunu değiştirir; tüm takım o boyutta yeniden yapılır (bkz. [Genel düzen ve montaj çizimleri](topic:drawings#choose-the-sheet-size)).
3. Her parça işareti için bir sayfası olan tek bir PDF için {{ui:Tümünü indir}} seçeneğini belirleyin (düğme sayfa sayısını gösterir). Dosya adı `<name> Shop drawings.pdf` olur. Her sayfanın künyesinde "Sayfa 3 / 42" yazar. Ya da baktığınız sayfa için {{ui:PDF indir}} seçeneğini belirleyin: `<name> <mark>.pdf`.
4. Önizlemeyi × ile veya {{key:Esc}} ile kapatın.

{{ui:İmalat çizimi}} gri görünüyorsa model henüz parça içermiyor demektir.

## Sayfada neler var

I profil için:

- **Yükseklik**, gövdeye bakılarak: parça ağız kesimleriyle, gövde delikleri daire olarak ve flanş delikleri gizli (kesikli) çizgi olarak.
- **Üst flanş planı**, üstten bakıldığında, herhangi bir flanşta delik olduğunda. Alt flanş delikleri kesikli görünür.
- **Kesit**, profil boyunca.
- **Ölçüler:** parça boyunca zincirlenmiş delik konumları ile toplam uzunluk, gövde delik yükseklikleri, aralık ve ağız kesimi ölçüleri.
- **Delik listesi:** her delik grubu, örneğin "8 x Ø22, üst flanşta".
- **Kaynak**, parçaya kaynaklı levhalar olduğunda.
- **Künye:** parça işareti, montaj işareti, profil, malzeme, uzunluk, adet, birim ve toplam ağırlık, model adı ve tarih.

U profil, açı veya içi boş kesit için sayfa aynıdır; gövdeye veya kenara bakılır. Bir borunun duvarları gizli (kesikli) çizgilerdir, kesit duvar kalınlığını verir.

Levha için: delikleriyle levha yüzü ve kenarı kesit olarak.

## Ölçekler

Ölçek, parçanın sayfaya sığması için bir listeden seçilir (1:1'den 1:200'e). Uzun ve sığ bir parça tek bir ölçekte okunamayacak kadar ince olacağından, kâğıt üzerinde derinlik 30 mm'nin altına düşerse derinlik uzunluktan daha büyük bir ölçekte çizilir. Görünüm başlığı bunu belirtir, örneğin "uzunluk 1:20, derinlik 1:5 (tek ölçekte değil; ölçüler geçerlidir)". Boyutları her zaman ölçülerden okuyun, sayfayı ölçerek değil.

## Dikkat edilecekler

- Miktar, modeldeki o işaretli parça sayısıdır. İşaretler bir değişiklikten sonra yeniden numaralanabilir; bkz. [İşaretleri ve malzeme listesini denetleyin](topic:marks-and-bom).
- Her sayfa, kaynak sembolleri olmadan tek başına bir parçadır. Kaynak sembolleri içeren montaj çizimleri ve genel düzen çizimleri [Çizimler](topic:drawings) bölümündedir. Sayfa DetailCraft'ta düzenlenemez veya açıklanamaz. Üzerine not koymak için PDF'i MarkupCraft gibi bir PDF işaretleme uygulamasında açın.
- Künye "DetailCraft laboratuvar derlemesi — milimetre" yazar.
- Metin standart PDF Helvetica yazı tipini kullanır. Batı Avrupa kümesinin dışındaki karakterler "?" olarak basılır ve durum çubuğu bunları sayar.

## Yazdırın

İndirilen PDF'i PDF görüntüleyicinizde açın ve seçtiğiniz kâğıt boyutunda, %100 ile (sayfaya sığdır değil) yazdırın; belirtilen ölçeklerin tutması için. Daha küçük bir kâğıtta ölçeklendirin ve ölçülere güvenin.
