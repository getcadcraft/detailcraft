---
title: Általános elrendezési és összeállítási rajzok
summary: Készítsen alaprajzokat, homlokzatokat és összeállítási rajzot összeállításonként a modellből, A4-es és A1-es vagy ANSI B-s és D-s rajzlapokra, adja ki őket revíziós betűkkel, és töltse le PDF, DWG vagy DXF formátumban.
keywords: takart vonalak, takart vonal eltávolítása, szaggatott, revíziófelhő, felhők, revíziós háromszög, alapcsavar-alaprajz, horgonycsavarok, csavarlista, talplemez-lista, kitűzés, kiadás, revízió, rev, revíziós táblázat, újrakiadás, kiadási napló, átadólevél, dwg, dxf, cad fájl, rajzok exportálása, rajzok, elrendezési rajz, ga, alaprajz, homlokzat, összeállítási rajz, rajzlapméret, papírméret, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, nyomtatás, méretarány, rajzfej, modellhivatkozás
from: 709f8604
---

Válassza a {{ui:Rajzok}} gombot a {{ui:Kimenet}} csoportban. A DetailCraft a modell jelenlegi állapotából készíti el a teljes készletet. Semmi sem mentődik: módosítsa a modellt, nyissa meg újra a {{ui:Rajzok}} ablakot, és a készlet újra elkészül.

## A készlet tartalma

- **Alaprajzok**, szintenként egy, amelyen van valami, felülnézetben.
- **Homlokzatok**, rácsvonalanként egy, amelytől 1 m-en belül vannak rúdelemek.
- **Az alapcsavarok alaprajza**, ha a modellben vannak talplemezek: minden talplemez felülnézetben az oszlopával és a horgonycsavarjaival, a rácsok a méreteikkel, minden csavarkiosztás egy tipikus részlete (BP1, BP2 …) a csavartávolsággal és a széltávolságokkal, valamint két jegyzék: a horgonycsavarok jelük szerint (R1, R2 …: darabszám, átmérő, hossz, kiállás a lemez fölött, beágyazás, minőség), és a talplemezek rácsonként (oszlop, kiosztás, lemez, csavarok, lemez teteje). A rácson kívüli oszlopot a koordinátái helyezik el.
- **Összeállítási rajzok**, összeállításonként egy: elölnézet, felülnézet és végnézet, láncolt méretek a lyukakig és a lemezek széléig, az alkatrészlista, a laza csavarok és rudak, valamint a hegesztési és lyukjegyzetek. Minden hegesztett lemezen van sarokvarrat-jel az elölnézetben (AWS A2.4): a nyíl a csomópontra mutat, a vonal alatti háromszög a nyíl oldalát jelöli, a bal oldali szám a varrat mérete mm-ben, és ahol a nyíl találkozik a vonallal, a kör körbefutó varratot jelent.

**Takart vonalak.** Az alaprajzok és homlokzatok elhagyják azon elemek vonalait, amelyeket teljesen előttük lévő elem takar (például egy oszlop mögött, élével látott gerenda). Az összeállítási rajzokon a lemez szaggatottan van rajzolva ott, ahol a fő elem takarja: az elölnézetben a gerinc mögött (az elem −u oldaláról nézve), a felülnézetben a felső övlemez alatt. Azok az elemek, amelyek azonos mélységben vannak, vagy mélységben átfednek, teljes vonallal rajzolódnak.

Minden rajzlapon rajzfej található a rajzszámmal, a méretaránnyal, a modell nevével, a dátummal, a lapszámmal a rajzlapmérettel, valamint a modellhivatkozással: a mentett modellből készült kóddal, így a nyomat visszaazonosítható a modellhez, amelyből készült.

## Rajzlapméret kiválasztása

Válassza ki a méretet a {{ui:Rajzok}} ablak tetején lévő listában: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) vagy {{ui:ANSI D}} (22 × 34 in). Minden rajzlap fekvő. A készlet azonnal az új méreten készül újra, és ugyanezt a méretet használják a gyártási rajzokhoz is. Ez a [DetailCraft-beállításokban](topic:settings#drawings) is megtalálható, és a böngésző megjegyzi.

- Egy nagyobb rajzlap nagyobb léptékben rajzol. A léptékek mindig szabványosak (1:10, 1:20, 1:25, 1:50, 1:100 és így tovább).
- A szöveg minden rajzlapon ugyanakkora marad, így nyomtatva is olvasható.
- Kis rajzlapon egy hosszú, vékony összeállítás mélységében nagyobb léptéket kaphat, mint hosszában. Ekkor a nézet címe mindkét léptéket megadja, és a méretek az irányadók.

## Rajzkiadás és revíziók

A megjelenített előnézet feletti sor megmondja, hol áll a látott rajzlap: **Még nincs kiadva**, **B revízió, kiadva …; azóta nem változott**, vagy pirossal: **B revízió óta változott: újrakiadás szükséges**. A rajzlaplista a kiadott rajzlapokat a revíziójukkal, az újrakiadást igénylőket pedig külön jelöli.

- Írja be, mire szolgál a kiadás (kezdetben: „Gyártásra kiadva"), és válassza az {{ui:E rajzlap kiadása}} gombot, vagy a {{ui:Változott rajzlapok kiadása}} gombot minden olyan rajzlaphoz, amely új, vagy az utolsó kiadása óta változott.
- Egy rajzlap első kiadása az A revízió, utána B, C és így tovább (az I és az O kimarad).
- A rajzfej a rajzszámot a revíziójával mutatja („A-B1  rev B"), mellette a revíziós táblázat felsorolja a legutóbbi kiadásokat: revízió, dátum és leírás. Kis rajzlapon annyi jelenik meg, amennyi elfér.
- Egy rajzlap akkor „változik", ha a rajta lévő tartalom módosul: egy elmozdított elem, új lyuk, átszámozott jel. A dátum, a rajzlapok száma és maga a revíziós táblázat nem számít. A rajzlapméret módosítása minden rajzlapot megváltoztat.
- A kiadási napló a modellfájlban mentődik, a kiadás egy visszavonási lépés. A [KISS-fájl](topic:kiss-export) minden rajz legutóbbi revízióját tartalmazza.

### Revíziófelhők

A rajzlap második kiadásától minden megváltozott elemet vagy alapot revíziófelhő fog közre, benne a revízió betűjét tartalmazó revíziós háromszöggel.

- Amíg a rajzlap az utolsó kiadása óta változott, a felhők az azóta történt változásokat mutatják, a háromszögben a következő revízióval (B revízió kiadva és változott: a háromszögek C-t mutatnak).
- Miután kiadta, a felhők ezen a revíziós rajzlapon maradnak, mint egy nyomtatott készleten, amíg a rajzlap újra nem változik.
- Minden rajzlap csak az általa megjelenített változásokat fogja közre. Az alaprajzok és homlokzatok nem rajzolnak lyukakat vagy kivágásokat, így azt az elemet fogják közre, amely elmozdult, el lett forgatva vagy átméretezve, vagy amelynek a jele megváltozott. Az összeállítási rajzok és az alapcsavarok alaprajza az új vagy elmozdult lyukakat és kivágásokat is közrefogják.
- Az átszámozott jel számít: ha egy módosítás egy gerendát új összeállítássá tesz, az alaprajzokon és homlokzatokon azok a gerendák, amelyek jele felfelé változott (B1-ről B2-re), felhővel vannak közrefogva.
- A törölt elem nem marad mit közrefogni.
- A revíziófelhők bevezetése előtt (DetailCraft 0.4) kiadott rajzlapok a következő kiadásuktól kezdik a felhőzést.
- A felhők a PDF-, DXF- és DWG-letöltésekben szerepelnek, és maguk sosem számítanak változásnak.

## Letöltés

A gombok melletti listában válassza ki a formátumot, majd a {{ui:Ez a rajzlap}} gombbal a megjelenített rajzlapot, vagy a {{ui:Összes rajzlap}} gombbal az egész készletet tölti le.

- **PDF**: nyomtatásra vagy küldésre. Az {{ui:Összes rajzlap}} egy PDF-et készít, rajzlaponként egy oldallal, mindegyik a választott méretben.
- **DWG**, a 2018, 2013, 2010, 2007, 2004 vagy 2000 formátumban: a rajzlapok CAD-programban való megnyitásához. Régebbi programhoz régebbi formátumot válasszon.
- **DXF (R12)**: az a változat, amelyet szinte minden CAD-program megnyit.

A DWG- vagy DXF-rajzlap teljes méretben készül: egy rajzegység a papíron egy milliméter, így 1:1 arányban nyomtatódik, és minden nézet megtartja a címében írt léptéket. Minden toll saját réteg: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID és így tovább, a vonalvastagsággal (DWG) és a szaggatással együtt. A szövegek a DetailCraft szövegstílusában (Arial) vannak. A méretek azok a vonalak és számok, amelyeket lát, nem méretezési objektumok. Az {{ui:Összes rajzlap}} a DWG- vagy DXF-fájlokat egy zip-fájlba teszi, rajzlaponként egy fájllal.

:::note
A DXF R12 nem ismer vonalvastagságot és kitöltést: a rétegek megtartják a nevüket, ezért nyomtatáskor a rétegek szerint állítsa be a tollakat, a kitöltött alakzatok pedig kimaradnak (az állapotsor megmondja, hány).
:::

Nyomtasson 100%-os méretben („oldalhoz igazítás" nélkül), azonos méretű papírra, ha a megadott léptékeknek érvényesülniük kell.
