---
title: Gyártmányrajzok készítése
summary: Egy lap alkatrészjelenként, egyszerre készítve: bármelyiket megnézheti, és egy lapot vagy a teljes készletet PDF-ben letöltheti A4-től A1-ig vagy ANSI B-től D-ig, furatokkal, kivágásokkal, méretekkel és rajzfejjel.
keywords: gyártmányrajz, gyártmányrajzok, minden alkatrész, köteg, teljes készlet, egyetlen alkatrész rajza, gyártási rajz, pdf, részletrajz, darabrajz, nyomtatás
from: d25fe035
---

A DetailCraft alkatrészjelenként egy lapot készít, a modell minden gerendájához, pillérjéhez, merevítéséhez és lemezéhez, egyszerre: nem kell egyenként kijelölnie őket. Az azonos darabok azonos jelet kapnak, így egy lapot is. A lapok helyben készülnek a modellből; nem tárolódnak és nem szerkeszthetők.

## A teljes készlet elkészítése

1. Válassza az {{ui:Gyártmányrajz}} lehetőséget a {{ui:Kimenet}} csoportban. Nem kell semmit kijelölni. Ha egy alkatrész ki van jelölve, az ablak annak a lapját nyitja meg. A {{ui:Tulajdonságok}} panelen ugyanez a gomb elemeknél {{ui:Gyártmányrajz}}, csatlakozásoknál {{ui:Lemezrajz}}.
2. Megnyílik az előnézet, a címében az alkatrészjellel, például „Gyártmányrajz b1”. A cím melletti első lista minden alkatrészjelet tartalmaz a szelvényével, hosszával és darabszámával: válasszon egyet, hogy megnézze a lapját. A második lista a lap méretét módosítja; az egész készletet újra elkészíti az új méretben (lásd: [Általános elrendezési és összeállítási rajzok](topic:drawings#choose-the-sheet-size)).
3. Válassza az {{ui:Összes letöltése}} gombot (a gombon a lapok száma látszik) egy PDF-hez, amely minden alkatrészjelhez egy oldalt tartalmaz: `<name> Shop drawings.pdf`. Minden lap a rajzfejében ezt írja: „Lap: 3 / 42”. Vagy válassza a {{ui:PDF letöltése}} gombot a jelenleg nézett laphoz: `<name> <mark>.pdf`.
4. Zárja be az előnézetet a × jellel vagy az {{key:Esc}} billentyűvel.

Ha a {{ui:Gyártmányrajz}} szürkén áll, a modellben még nincs alkatrész.

## A lapon lévő tartalom

Egy I-szelvénynél:

- **Homlokzat**, a gerinc felől nézve: az alkatrész a kivágásaival bevágva, a gerinc furatai körként, az öv furatai rejtett (szaggatott) vonalként.
- **Felső öv alaprajza**, felülről nézve, ha bármelyik övön van furat. Az alsó öv furatai szaggatottan jelennek meg.
- **Metszet** a szelvényen át.
- **Méretek:** a furatok láncolt helyzete az alkatrész mentén, plusz a teljes hossz, a gerinc furatmagasságai, a sortávolság és a kivágások méretei.
- **Furatlista:** a furatok minden csoportja, például „8 x Ø22 a felső övben”.
- **Hegesztés**, ha az alkatrészhez lemezek vannak hegesztve.
- **Rajzfej:** alkatrészjel, összeállítási jel, szelvény, anyag, hossz, darabszám, darabonkénti súly és összesen, modellnév és dátum.

Csatorna, szögacél vagy üreges szelvénynél a lap ugyanaz, a gerincet vagy az oldalt nézve: a cső falai rejtett (szaggatott) vonalak, a metszet adja meg a falvastagságot.

Lemeznél: a lemez síkja a furataival, a széle metszetként.

## Léptékek

A lépték egy listából választható (1:1-től 1:200-ig), hogy az alkatrész elférjen a lapon. Egy hosszú, lapos alkatrész egy léptéken túl túl vékony lenne az olvasáshoz, ezért ha a mélység papíron 30 mm alá esne, a mélységet nagyobb léptékben rajzolja, mint a hosszt. A nézet címe ezt jelzi, például: „hossz 1:20, mélység 1:5 (nem egységes léptékben; a méretek az irányadók)”. A méreteket mindig a feltüntetett méretekből olvassa le, ne a lap mérésével.

## Jó tudni

- A darabszám a modellben lévő, azonos jelű alkatrészek száma. A jelölések változtatás után átszámozódhatnak; lásd: [Jelölések és az anyagjegyzék ellenőrzése](topic:marks-and-bom).
- Minden lap egyetlen alkatrészt mutat, hegesztési jelek nélkül; az összeállítási rajzok (hegesztési jelekkel) és az általános elrendezési rajzok a [Rajzok](topic:drawings) részben vannak. A lap a DetailCraftban nem szerkeszthető és nem jegyzetelhető. Jelöléshez nyissa meg a PDF-et egy PDF-jelölő alkalmazásban, például a MarkupCraftban.
- A rajzfejben ez áll: „DetailCraft laborverzió — milliméter”.
- A szöveg a PDF szabványos Helvetica betűtípusát használja. A nyugat-európai karakterkészleten kívüli karakterek „?”-ként nyomtatódnak ki, az állapotsor pedig megszámolja őket.

## Nyomtatás

Ha a megadott léptékeket szeretné megtartani, nyissa meg a letöltött PDF-et a PDF-megjelenítőben, és nyomtassa ki 100%-os méretben („oldalhoz illesztés” nélkül), a kiválasztott méretű papírra. Kisebb papíron kicsinyítse le, és a méretekre támaszkodjon.
