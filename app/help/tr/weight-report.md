---
title: Aşamaya göre malzeme ve ağırlık raporu
summary: Her aşama için kesim uzunlukları, adetler, ağırlıklar ve boya alanları; cıvataları ve donatısıyla birlikte, tablo, CSV veya PDF olarak.
keywords: rapor, ağırlık, tonaj, kg, boya, boya alanı, yüzey alanı, kaplama, kesim uzunluğu, malzeme listesi, aşama, csv, pdf
from: 337d6d92
---

{{ui:Çıktı}} grubunda {{ui:Daha fazla}} menüsünü açın ve {{ui:Aşamaya göre ağırlık raporu}} seçeneğini seçin ya da görünümün altındaki {{ui:Aşamaya göre}} sekmesini açın. Rapor şunları gösterir:

- **Aşamaya göre özet**: her aşama için parça sayısı, çelik ağırlığı, boya alanı, cıvatalar ve angkraj çubukları ile donatı; sonra toplamlar.
- **Her aşama için bir tablo**: her parça işaretinin türü, profili, malzemesi, kesim uzunluğu, adedi, birim ağırlığı, ağırlığı ve boya alanı; sonra o aşamanın cıvataları ve angkraj çubukları.

{{ui:CSV indir}} aynı tabloları tek bir CSV dosyasına kaydeder (`<ad> ağırlık raporu.csv`). {{ui:PDF indir}}, [DetailCraft ayarlarındaki](topic:settings#drawings) sayfa boyutunda bir rapor üretir: önce özet, sonra her aşama gelir; uzun tablolar sonraki sayfaya taşınır ve her sayfa numaralandırılır.

## Rakamlar nasıl hesaplanır

- **Ağırlıklar** brüttür, malzeme listesindeki gibi: profilin metre başına ağırlığı çarpı kesim uzunluğu. Delikler ve ağız kesimleri düşülmez.
- **Boya alanı**, kesit dışının kesim uzunluğu boyunca yüzeyidir: I profilde flanşların ve gövdenin her yüzü, levhada iki yüz ve kenarlar, boruda yalnızca dış yüzey. Uçlar ve delikler sayılmaz.
- **Donatı**, aşamanın temellerindeki çubukların [donatı büküm çizelgesinden](topic:footings-and-rebar) hesaplanan ağırlığıdır.
- Bir birleşimin levhaları ve cıvataları, ana elemanının aşamasında sayılır. Bkz. [Aşamalar](topic:phases).

[Aşama başına işaretler](topic:phases#marks-per-phase) açıkken her aşamanın kendi işaretleri vardır (1-b1, 2-b1). Kapalıyken bir işaret birden çok aşamada görünebilir: her aşama sahip olduğu parçaları listeler.
