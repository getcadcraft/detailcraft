---
title: Tedarikçi stoğu ve teslim süreleri
summary: Kesim listenizin satın aldığı stok çubuklarını bir tedarikçinin stok listesiyle karşılaştırın; yeterli mi ve bekleme süresi ne kadar?
keywords: tedarikçi, stok, teslim süresi, çelik depo, fabrika, bulunabilirlik, bekleme, çubuklar, satın alma, besleme
from: 1373f5a3
---

{{ui:Besleme}} sekmesi, {{ui:Kesim listesi}} içinde satın alınan her kesiti bir tedarikçinin stok listesinde arar. Dosya modelde kalır; hiçbir yere gönderilmez.

## Tedarikçinin dosyasını ekleyin

{{ui:Tedarikçi dosyası ekle}} düğmesine basın ve tedarikçinizden bir CSV seçin (virgül, noktalı virgül veya sekmeyle ayrılmış). Kalem veya kesit için bir sütun (Item, Name, Description, Section, SKU) ve stok (In stock, Quantity, On hand) ya da teslim süresi için bir sütun gerekir. Birim (each, metres, kilograms, tonnes), fiyat, tedarikçi ve yeniden stoklama tarihi, ilgili sütunları varsa okunur. "Out of stock", "In stock", "2-3 weeks" ve "backorder" gibi ifadeler de anlaşılır. En fazla beş dosya tutulabilir; aynı adlı bir dosya eklemek onun yerini alır.

## Ne görürsünüz

Kesim listesinin satın aldığı her kesit için tablo; modelin ihtiyacını, stoktakini, teslim süresini, tedarikçiyi ve bir sonucu gösterir:

- **Yeterli:** stokta yeterli miktar var.
- **Eksik:** stok, ihtiyacın altında. Stok ihtiyacın altındaysa ve bir en uzun bekleme süresi belirlediyseniz, teslim süresi kalanın ne kadar süreceğini söyler.
- **Çok geç:** stok rakamı yok ve teslim süresi, kabul ettiğiniz bekleme süresinden uzun.
- **Stok rakamı yok:** dosya bunu belirtmiyor.
- **Başka birim:** tedarikçi kesiti, modelin verebileceği bir birimde listeliyor.

İhtiyaç, çubuk olarak (iç içe geçmiş kesim listesinden, sizin stok uzunluklarınızla), satın alınan çubuk metre cinsinden ve kilogram olarak (kesitin metre başına ağırlığı) verilir; dosyanın kendi birimi kullanılır. Bir kesit adıyla eşleştirilir ("W16 X 26" ile "w16x26" aynıdır). Dosyada olmayan kesitler listelenir.

Eksik ve geç kesitler {{ui:Sorunlar}} panelinde yer alır. Burada hiçbir şey sipariş edilmez.

## Sınırlar

Stok rakamları ve teslim süreleri, dosyanın hazırlandığı gündeki değerleridir. Levhalar iç içe yerleştirilmez, bu yüzden aranmazlar. Dosya yalnızca okunur: içindeki her talimat sadece metindir.
