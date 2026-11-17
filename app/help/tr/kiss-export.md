---
title: KISS dosyasını imalat yazılımı için dışa aktarın
summary: Malzeme listesini bir imalat yönetimi (MIS) programına KISS 1.1 dosyası olarak gönderin; montajlar, parçalar, fazlar sıra olarak, delikler, ağızlar ve kaynaklar.
keywords: kiss, kss, mis, imalat yönetimi, üretim kontrolü, metraj, malzeme listesi, bom, dışa aktar, fabtrol, sıra
from: 30cf3951
---

{{ui:Output}} grubunda {{ui:More}} menüsünü açın ve {{ui:KISS file for fabrication software}} seçeneğini seçin. DetailCraft `<name>.kss` dosyasını indirir; bu, "Keep It Simple, Steel" (sürüm 1.1) adlı bir KISS dosyasıdır, yani çoğu imalat yönetimi programının malzeme listesini içe aktardığı düz metin biçimi.

## Neler var

- Başlık: bir iş numarası (model adının ilk sekiz harf ve rakamı), model adı, tarih ve saat ile ölçülerin metrik olup olmadığı.
- Her montaj işareti için: ana parçası (miktar = montajdan kaç tane olduğu), bir çizim satırı (A-B1 gibi, montaj çizimindeki numara), bir montaj satırı (ad, tip, ağırlık, toplam uzunluk, derinlik ve genişlik), montajın bulunduğu her [faz](topic:phases) için bir sıra satırı ve işçilik satırları: delikler (kaç tane, çap, kalınlık boyunca), ağızlar ve kaynaklar.
- Ardından, her bağlı parça, standardın istediği gibi **toplam** miktarıyla (montaj başına × montaj sayısı).
- Serbest cıvatalar ve angkraj çubukları BOLTS çiziminde, FIELD montajında.
- Her satır tipi (W, C, L, HSS, PL ya da özel profil için MI), boyutu, sınıfı, milimetre cinsinden kesim uzunluğu, parça adı ve ağırlığı verir.

## İngiliz birimleri ya da metrik

[DetailCraft ayarları](topic:settings) içinde **KISS dosyası boyutları** şunlardan birini seçer:

- **Otomatik** (başlangıç): her eleman bir AISC profili olduğunda İngiliz birimleri, aksi halde metrik.
- **İngiliz birimleri**: profiller AISC tanımlarıyla (W 16X26, HSS 4X4X.250); DetailCraft'ın milimetre tuttuğu levhalar ve cıvatalar en yakın 1/16 inç'e; ağırlıklar pound (lb) cinsinden.
- **Metrik**: Avrupa profilleri adlarıyla (IPE300), levhalar milimetre cinsinden kalınlık X genişlik olarak; ağırlıklar kilogram cinsinden.

Uzunluklar, ayar ne olursa olsun her zaman iki ondalıklı milimetre cinsindendir: KISS standardı bunu ister ve alan program kendisi dönüştürür.

:::note
Sınıflar standardın sekiz karakterine kısaltılır: A572 Gr 50, A572-50 olur. Adlardaki virgüller boşluğa dönüşür (biçimde tırnak yoktur). Bir içe aktarmayı programınızda, ona güvenmeden önce kontrol edin: DetailCraft'ın KISS dosyaları burada standarda göre denetlenir, henüz bir imalat programında denetlenmez.
:::
