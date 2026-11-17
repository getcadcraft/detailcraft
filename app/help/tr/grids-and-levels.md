---
title: Izgara ve seviyeleri ayarlama
summary: Izgara çizgilerini, aralıklarını ve her elemanın yerleştirildiği seviyeleri yazın.
keywords: ızgara, ızgaralar, akslar, ızgara çizgileri, seviyeler, kotlar, katlar, döşemeler, aralık, kurulum
from: 9cad233c
---

DetailCraft'taki her eleman bir seviyede bir ızgara kesişimine yerleştirilir. Önce ızgaraları ve seviyeleri ayarlayın; bunları daha sonra değiştirebilirsiniz.

## Izgaralar nasıl çalışır

- **Numaralı çizgiler** bir yönde, **harfli çizgiler** diğer yönde uzanır. Adlar yalnızca alışkanlıktan gelir: bir etiket 8 karakteri geçmeyen herhangi bir metin olabilir (1, 2, 3 veya A1, A2, ya da 10, 20).
- Koordinat değil, etiketleri ve aralarındaki aralıkları yazarsınız. Her takımın ilk çizgisi 0'dadır.
- Numaralı çizgiler, x'in sabit olduğu çizgilerdir; harfli çizgiler, y'nin sabit olduğu çizgilerdir. Bu nedenle ızgara 1'den ızgara 2'ye giden bir kiriş x boyunca, A'dan B'ye giden bir kiriş y boyunca uzanır.
- Tüm değerler milimetredir.

Yeni bir model, 6000 aralıklı 1 2 3 numaralı çizgiler (aralıklar 6000 6000), 6000 aralıklı A B harfli çizgiler ve iki seviye ile başlar.

## Izgaraları ayarlama

1. Soldaki {{ui:Model}} panelinde, katlanmışsa {{ui:Grids}} bölümünü açın.
2. {{ui:Numbered lines}} alanına etiketleri boşlukla ayırarak yazın, örneğin `1 2 3 4 5`.
3. Altındaki {{ui:Spacings}} alanına her aralık için bir açıklık yazın, örneğin `6000 6000 7500 6000`. Beş çizgi için dört aralık.
4. {{ui:Lettered lines}} ve onun {{ui:Spacings}} alanında aynısını yapın, örneğin `A B C` ve `8000 8000`.
5. {{ui:Apply grids}} seçin.

Durum çubuğu "Izgaralar güncellendi." yazar ve görünüm yeni ızgaraya yakınlaşır. Virgüller de ayırıcı olarak çalışır.

Bir şey tutmuyorsa hiçbir şey değişmez ve durum çubuğu nedenini söyler, örneğin "Numaralı ızgaralar: çizgi çiftleri arasına birer aralık verin (4)." Diğer kontroller: aralıklar pozitif milimetre olmalı, etiketler birbirinden farklı olmalı ve her yönde en fazla 60 çizgi olabilir.

:::note
Izgaralar taşındığında elemanlar koordinatlarını korur. Çelik yerleştirdikten sonra bir aralığı değiştirirseniz çelik olduğu yerde kalır ve artık ızgaranın üzerinde olmaz. Önce ızgarayı değiştirin ya da elemanları uç koordinatlarını düzenleyerek taşıyın.
:::

## Seviyeleri ayarlama

1. {{ui:Model}} panelinde {{ui:Levels}} bölümünü açın.
2. Her satırda bir seviye adı ve milimetre cinsinden kotu bulunur. Dilediğiniz gibi düzenleyin.
3. Başka bir satır için {{ui:Add level}} seçin. Adı "Seviye 3" (ve böyle devam eder) olur ve en yüksek seviyenin 4000 mm üstüne yerleştirilir; gerekirse ikisini de değiştirin.
4. Bir seviyeyi kaldırmak için satırının sonundaki × düğmesini seçin.
5. {{ui:Apply levels}} seçin.

{{ui:Apply levels}} seçene kadar hiçbir şey değişmez. Uygulandığında seviyeler kota göre sıralanır. Her seviyenin bir adı olmalı, iki seviye aynı adı paylaşamaz ve en az bir seviye tutmalısınız.

Seviyeler sıfırın altında olabilir (bodrum kat `-3500`) ve eşit aralıklı olmaları gerekmez.

## Seviyeler nasıl kullanılır

- Bir seviyeye yerleştirilen kolon bir sonraki seviyeye kadar uzanır ya da {{ui:Up to}} alanında seçtiğiniz seviyeye kadar uzanır.
- Kirişler ve levhalar, tıkladığınız seviyede iki kesişim arasına yerleştirilir.
- Temeller, üst yüzeyi tıkladığınız seviyede olacak şekilde yerleştirilir.
- {{ui:Plan}} her seferinde bir seviyeye yukarıdan bakar.
- IFC dışa aktarımı her seviye için bir bina katı oluşturur.

## Geri alma

Izgara ve seviye değişiklikleri diğerleri gibi düzenlemelerdir: {{key:Mod+Z}} önceki ızgarayı geri getirir.

## Sonraki

[Kolon, kiriş ve çaprazları yerleştirme](topic:place-members)
