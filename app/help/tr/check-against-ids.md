---
title: IFC dışa aktarımını bir müşterinin IDS'ine karşı denetleyin
summary: Size verilen .ids dosyasını yükleyin ve IFC'yi göndermeden önce bu dosyayı karşılamayan her dışa aktarılan parçayı Sorunlar'da görün.
keywords: ids, bilgi teslim şartnamesi, buildingsmart, gereksinimler, teslim, denetim, doğrulama, kalite, ifc dışa aktarımı, özellik, malzeme, satın alma
from: 50d0f785
---

## Ne yapacaksınız

Bir IDS (Information Delivery Specification, bir buildingSMART standardı), bir IFC'nin neleri içermesi gerektiğini gösteren listedir. DetailCraft, dışa aktaracağı IFC'yi ({{ui:IFC}} seçeneğinin yazdığı aynı dosyayı) size verilen IDS'ye karşı denetler ve yetersiz kalan her parçayı listeler.

## Adımlar

1. Modelinizi açın veya çizin.
2. Araç çubuğunun {{ui:Çıktı}} grubundaki {{ui:IDS'ye karşı denetle…}} seçeneğine tıklayın.
3. {{ui:.ids dosyası yükle…}} seçeneğine tıklayın ve dosyayı seçin. Hiçbir şey yüklenmez.
4. Sonucu okuyun: her şartname, {{ui:Başarılı}} veya {{ui:Başarısız}} ile ve kaç öğeye uygulandığıyla.
5. {{ui:Sorunlar}} ({{key:Ctrl+Shift+M}}) panelini açın ve bir başarısızlığa tıklayın: ondan kaynaklanan eleman, birleşim, merdiven veya temel seçilir ve görünüm ona yakınlaşır.

## Ne görmelisiniz

- Dışa aktarılan her öğe ve kaçırdığı her gereksinim için bir uyarı; şartnamenin adı, IDS'nin istediği ve dışa aktarmanın sunduğu ile birlikte.
- Denetim raporu ({{ui:Sorunlar}} içinde) IDS ile başlar: başlığı, sürümü, yazarı ve her şartnamenin sayıları.

## İyi bilmeniz gerekenler

- IDS model dosyasına kaydedilir; bu nedenle modeli açtığınızda yeniden denetlenir. Yükleme veya unutma tek adımdır ve geri alınabilir.
- Her değişiklik kısa bir süre sonra yeniden denetlenir; büyük bir modelde denetimler arasındaki bekleme biraz daha uzundur.
- Dışa aktarımın GlobalId'leri model adından ve DetailCraft içindeki parça numaralarından gelir; bu yüzden bir denetimden diğerine değişmezler. Modeli yeniden adlandırmak her öğeye yeni GlobalId verir.
- Sayılar SI birimlerinde karşılaştırılır (dışa aktarım milimetredendir; uzunluklar önce metreye çevrilir).
- IDS içindeki desenler bütün değer olarak okunur. Başta bir `^` ve sonda bir `$`, çoğu IDS dosyasının anlamı gibi, yine "bütün değer" olarak alınır.

## Sonraki

- [IFC dışa aktar](topic:ifc-export)
