---
title: NC dosyası alanları
summary: DetailCraft'ın her DSTV NC dosyasına ne yazdığı, alan alan; yüzlerin ve koordinatların nasıl ölçüldüğü.
keywords: nc1, dstv, nc dosyası, st bloğu, ak, bo, başlık, yüzler, koordinatlar, cnc, biçim
from: 1b676fc1
---

Her `.nc1` dosyası bir parça işaretini tanımlar. Satırlar CR LF ile biter. Metin alanları düz ASCII içerir; diğer karakterler "?" olur. İkinci satır bir açıklamadır: `** DetailCraft <mark>.nc1`.

## Başlık (ST)

| Alan | I profil, kanal | Köşebent | Dikdörtgen HSS | Yuvarlak HSS | Levha |
|---|---|---|---|---|---|
| Sipariş | Model adı | ← | ← | ← | ← |
| Çizim, parça | Parça işareti | ← | ← | ← | ← |
| Aşama | Parçanın aşaması ya da 1 | ← | ← | ← | ← |
| Çelik kalitesi | Malzeme sınıfı | ← | ← | ← | ← |
| Miktar | Bu işaretli parça sayısı | ← | ← | ← | ← |
| Profil | Profil adı, örneğin W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profil kodu | I ya da U (kanal) | L | M | RO | B |
| Uzunluk | Kesim boyu | ← | ← | ← | Uzunluk |
| Yükseklik | Derinlik d | Kol | Yükseklik | Çap | Levha genişliği |
| Flanş genişliği | bf | Kol | Genişlik | Çap | 0 |
| Flanş kalınlığı | tf | t | Et t | Et t | 0 |
| Gövde kalınlığı | tw | t | Et t | Et t | Levha kalınlığı |
| Yarıçap | Köşe yuvarlatma yarıçapı (AISC kanallarında 0) | 0 | Dış köşe yarıçapı | 0 | 0 |
| Metre başına ağırlık | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Metre başına boya yüzeyi | Dış çevre, m²/m | ← | ← | ← | 2 (iki yüz, m²/m²) |
| Testere açıları (4 alan) | 0 (dik) | ← | ← | ← | ← |
| Metin alanları (4) | `-` | ← | ← | ← | ← |

Levhalar, standardın "levhalar için" sütununu izler. Standardın yuvarlak borular için bir sütunu yoktur: DetailCraft çapı hem yükseklik hem flanş genişliği olarak, cidarı da iki kalınlık olarak yazar.

## Dış konturlar (AK)

- **I profiller ve kanallar:** gövde (v), her kesim için dikdörtgen bir oyukla; her flanş (o ve u), bir kesim flanşı en az kadar derin olduğunda bir uçta kısaltılmış.
- **Dikdörtgen HSS:** her iki yan cidar (v ve h), kesimler için oyulmuş; üst ve alt cidarlar (o ve u).
- **Köşebentler:** kol başına bir dikdörtgen (v ve u). Köşebentlerdeki kesimler yazılmaz; böyle bir parça yazılmamış olarak listelenir. Bir köşebent çaprazı [köşe levhasına](topic:brace-gussets) cıvatalandığında delikleri cıvatalanan kolda bulunur: parçanın u boyunca uzanan kol için v, parçanın v boyunca uzanan kol için u.
- **Yuvarlak HSS:** v üzerinde bir dikdörtgen; boru önden görülür (uzunluk × çap).
- **Levhalar:** yüz v üzerinde bir dikdörtgen.

Her kontur kapalıdır (ilk nokta sonda tekrarlanır) ve saat yönünün tersine ilerler.

## Delikler (BO)

Her delik için bir satır: yüz, x, y, çap, derinlik 0 (açık). Tüm delikler dahildir; sizin girdiğiniz ve bağlantıların oluşturduğu delikler. Dikdörtgen HSS'nin yan cidarlarından geçen bir delik iki kez yazılır: bir kez v üzerinde, bir kez h üzerinde.

## Yüzler ve koordinatlar

Her profil, standardın profil konumları şeklinin çizdiği gibi yerleştirilir (DSTV 1998, s. 7): x parça boyunca, Y genişlikte, Z arka yüzden yukarı, sıfır noktası dış köşede. DetailCraft şekle uysun diye hiçbir parçayı aynalamaz.

| Yüz | I profil | Kanal | Köşebent | Dikdörtgen HSS | Levha |
|---|---|---|---|---|---|
| v | Gövde, ön | Gövde, kanat uçlarının tarafından görülen | Parçanın u boyunca uzanan kol | −u'daki yan cidar | Levha yüzü |
| h | | | | +u'daki yan cidar | |
| o | Üst flanş | **Alt** flanş | | Üst cidar | |
| u | Alt flanş | **Üst** flanş | Parçanın v boyunca uzanan kol | Alt cidar | |

- **x** parça boyunca, kesim başlangıcından ilerler.
- **I profiller ve dikdörtgen HSS:** gövde ya da yan cidarlarda y, profilin alt yüzünden; bir flanşta ya da üst ve alt cidarlarda y, kenarından, arka taraftan (parçanın +u tarafı) ölçülür.
- **Kanallar** sırtüstü, kanat uçları yukarı bakacak şekilde yatar; standardın şeklinde olduğu gibi. Bu nedenle gövdede y, üst flanşın dış yüzünden aşağı doğru ilerler; üst flanş u yüzü, alt flanş o yüzüdür ve bir flanşta y, gövdenin arkasından kanat ucuna doğru ilerler.
- **Köşebentler:** her kolda y, topuktan ölçülür.
- **Levhalar:** y, levhanın −u kenarından.

Kesimden önce makine yazılımınızın kanal yüzlerini nasıl okuduğunu kontrol edin: bazı programlar kanalları ters çevirir.

## Yazılmayanlar

Pahlar, iç konturlar, işaretlemeler (SI), dik olmayan testere açıları, yuvalı delikler, yuvarlak borulardaki delikler (DetailCraft bunları yapmaz) ve köşebentler ile yuvarlak borulardaki kesimler.
