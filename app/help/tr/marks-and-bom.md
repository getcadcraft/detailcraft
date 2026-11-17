---
title: İşaretleri ve malzeme listesini denetleyin
summary: DetailCraft'ın her parçaya verdiği parça ve montaj işaretlerini okuyun, malzeme listesini denetleyin ve CSV olarak indirin.
keywords: işaretler, numaralandırma, parça işareti, montaj işareti, parça numarası, bom, malzeme listesi, malzeme cetveli, ağırlıklar, cıvata listesi, csv, numaralandırma
from: caa2ee80
---

DetailCraft modeli kendi başına işaretler. Numaralandırma komutu yoktur ve çalıştırılacak bir şey yoktur: her değişiklikten sonra hangi parçaların aynı çelik parça olduğunu hesaplar ve onlara tek bir işaret verir.

## İşaretlerin göründüğü yerler

- {{ui:Model}} panelindeki {{ui:Parça işaretleri}} listesi: her işaret, profiliyle, uzunluğuyla ve adediyle. Birine tıklayın; o işaretli ilk parçayı seçer.
- Seçili bir elemanın {{ui:Özellikler}} paneli (ve sol paneldeki **Parça işaretleri** listesi): {{ui:Parça işareti}} ve {{ui:Montaj}}. Panel başlığı da işareti taşır; örneğin "Kiriş b1".
- {{ui:Malzeme listesi}} sekmesi, CSV, NC dosya adları, imalat çizimleri ve IFC dışa aktarımı (her öğenin etiketi olarak).

## Parçalar nasıl işaretlenir

- **Parça işaretleri:** kolonlar için c, kirişler için b, çaprazlar için br, merdiven kirişleri için st, levhalar için p (uç levhaları ve taban levhaları dahil). Ardından bir numara: c1, c2, b1, p1 … Parçalar birden fazla fazda bulunduğunda önce bir faz numarası gelir; örneğin 2-b1.
- **Montaj işaretleri:** C, B, BR veya P. Bir montaj, ana bir eleman ve ona kaynaklı levhalardır; örneğin iki uç levhalı bir kiriş veya taban levhalı bir kolon.
- İki parça aynı profile, malzemeye ve kesim uzunluğuna sahipse ve aynı delik ve ağız kesimlerine sahipse (hepsi 1 mm içinde), biri diğerine göre uçtan uca veya ters çevrilmiş olsa bile aynı işareti paylaşır.
- Numaralandırma önce kolonları, sonra kirişleri, çaprazları ve levhaları sıralar; her grup içinde profil adına göre, en uzundan kısaya.

Kanal ve açı profillerinde hangi dönüşlerin sayıldığı dahil tam kurallar: [İşaret kuralları](topic:mark-rules).

:::warning
İşaretler her değişiklikten sonra yeniden hesaplanır, bu yüzden yeniden numaralanabilirler. Bir parça eklemek, bir profili değiştirmek veya bir delik eklemek b3'ü b4'e taşıyabilir. İşaretleri yalnızca model bittiğinde kesin kabul edin ve malzeme listesini, NC dosyalarını ve imalat çizimlerini aynı kaydedilmiş modelden yapın.
:::

## Malzeme listesini okuyun

Alttaki {{ui:Malzeme listesi}} sekmesini açın. Üç tablosu vardır.

**Parçalar**, başlıkta toplam çelik ağırlığıyla:

| Sütun | Anlamı |
|---|---|
| Parça işareti | Bu işaretli ilk parçayı seçmek için tıklayın |
| Tür | kiriş, kolon, çapraz, merdiven kirişi veya levha |
| Profil | Örneğin W16x26 veya PL20x180 |
| Malzeme | Ayarladığınız sınıf |
| Uzunluk (mm) | Bağlantılardan sonraki kesim uzunluğu |
| Adet | Kaç tane |
| Birim ağırlık (kg) | Metre başına profil kütlesi × uzunluk |
| Toplam ağırlık (kg) | Birim ağırlık × adet |

Son satır toplam adedi ve ağırlığı verir.

**Montajlar:** her montaj işareti, ana parçası, tüm parçaları (örneğin "b1 + p1 + p1"), adet, birim ağırlık ve toplam ağırlık.

**Cıvatalar ve angkraj çubukları:** tür, çap, uzunluk ve sınıfa göre gruplanmış, adetleriyle.

:::note
Ağırlıklar brüttür: delikler ve ağız kesimleri düşülmez. Cıvatalar, somunlar, pullar ve kaynaklar çelik ağırlığında yer almaz.
:::

## İndirin

Sekmedeki {{ui:CSV indir}} seçeneğini veya {{ui:Çıktı}} grubundaki {{ui:Malzeme listesi}} seçeneğini belirleyin. `<name> BOM.csv` dosyası üç tabloyu birbiri ardına, her birini başlığıyla ve aralarında boş bir satırla tutar. Herhangi bir elektronik tablo programında açılır.

## Göndermeden önce denetleyin

1. {{ui:Sorunlar}} sekmesini açın ve her satırı temizleyin. Oluşturulamayan bir bağlantı levha, delik veya cıvata eklemez; bu yüzden malzeme listesi eksik çıkar.
2. Beklemediğiniz işaretlere bakın. Aynı olduğunu düşündüğünüz ama farklı işaretleri olan iki kiriş genellikle bir delik, bir ağız kesimi veya bir kesim uzunluğu bakımından farklılık gösterir; her birini seçin ve karşılaştırın.
3. Modeli kaydedin, sonra tüm dışa aktarımları bu kaydedilmiş durumdan yapın.
