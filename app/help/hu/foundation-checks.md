---
title: Alapozás ellenőrzése
summary: Talpalapok, összevont alapok és lemezalapok ellenőrzése a megadott talajon, süllyedés, rugókon álló rugalmas lemezalap, cölöpcsoportok és támfalak. Mérnöki átnézéshez készült segédeszköz.
keywords: alapozás, alap, összevont alap, lemezalap, süllyedés, ágyazási modulus, rugók, szélső oszlop, sarokoszlop, talajnyomás, csúszás, felborulás, átütés, egyirányú nyírás, hajlítás, kifejtés, minimális acél, cölöpcsoport, támfal, ACI 318-19
from: 6961ad52
---

:::warning
Ezek elsőrendű ellenőrzések, amelyeket mérnöknek kell átnéznie, nem tervjóváhagyás. A megengedett talajnyomás és a súrlódási tényező a tervező adata: a DetailCraft nem ismeri a talajt.
:::

Az {{ui:Alapozás}} lap a modellben lévő alapokat ellenőrzi a megadott oszlopterhelésekkel.

## A talaj leírása

Írja be a {{ui:Megengedett talajnyomás}} és az {{ui:Alap súrlódási tényezője}} értékét. Mindkettő 0-ról indul, ami azt jelenti, hogy nincs megadva: az ellenőrzés ilyenkor a nyomást megjegyzésként jeleníti meg, és nem mondja, hogy megfelel. A süllyedéshez írja be a talaj {{ui:Es}} (MPa) rugalmassági moduluszát, a Poisson-tényezőt és a megengedett süllyedést (kezdetben 25 mm). Rugalmas lemezalaphoz írja be az {{ui:ks}} ágyazási modulust. Itt van még az alap feletti töltés, a talaj térfogatsúlya, a csúszásra és felborulásra vonatkozó biztonsági tényezők (kezdetben 1,5), valamint a vas folyáshatára is.

## Terhek megadása

Minden alaphoz tartozik oszloperő-lista. Használja a {{ui:Oszloperő hozzáadása}} gombot, és töltse ki az üzemi sort (a talajnyomáshoz, csúszáshoz és felborulásához) és a tényezőzött sort (a teherbírási ellenőrzésekhez): a P függőleges terhelést lefelé, a Vx és Vy vízszintes erőket az alap felső síkján, az Mx és My nyomatékokat, az oszlop helyét az alapon és méretét.

Vagy futtassa az {{ui:Analízis}} lapot, és nyomja meg a {{ui:Oszloperők átvétele az Analízisből}} gombot: minden olyan megtámasztás, amely alapon áll, oszloperővé válik a kiválasztott üzemi és tényezőzött készletekből. Pozitív My nagyobb terhelést ad az alap +x oldalának; pozitív Mx nagyobbat a −y oldalnak.

## Mit ellenőrzünk

Az üzemi terhekből, az alap saját súlyával és a töltéssel együtt:

- **Talajnyomás:** a merev alap alatti nyomás. A középső harmadon belül az egész talp érintkezik; a harmadon kívül az alap egy része felemelkedik, és a csúcsnyomás nagyobb. Ha az eredő erő az alapon kívül esik, az ellenőrzés nem megfelelő.
- **Csúszás:** a súrlódási tényező szorozva a függőleges teherrel, szemben a vízszintes erővel.
- **Felborulás:** az eredő erő távolsága a széltől.
- **Süllyedés:** az átlagos nyomás rugalmas süllyedése a megadott modulusú félteret feltételezve, a közepén és egy sarkában (Timoshenko és Goodier megoldása rugalmas téglalapra), a határértékhez képest. Merev alapnál ez felső korlát, és nem veszi figyelembe a korlátos mélységű talajréteget, a kiemelt talaj okozta tehermentesítést és a konszolidációt. Modulus nélkül a nyomást megjegyzésként jeleníti meg.

Csak a tényezőzött oszloperőkből (ACI 318-19):

- **Hajlítás** az oszlop felületén, a minimális acélmennyiséggel (0,0018 420 MPa-os vasnál) és a megrajzolt vasakkal.
- **Egyirányú nyírás** a felülettől d távolságban.
- **Átütési nyírás** d/2 távolságban minden oszlop körül, az oszlop nyomatékával. Szélhez közeli oszlopnál a kritikus keresztmetszetet az alap széle vágja le (széleknél három oldal, sarokban két oldal; ACI 318-19 22.6.4.1 és a 22.6.5.2 táblázat kisebb αs értéke), a keresztmetszet saját középpontjára vonatkozó nyomaték pedig tartalmazza a terhelés eltolódását.
- **Kifejtés**: a vasak kifejtése az oszlop felülete mögött, egyenesen vagy horoggal.
- **Mélység** az alsó vasak felett (150 mm).

Az összevont alapot vagy lemezalapot merevnek tekintjük, a nyírást és a nyomatékot pedig a teljes szélességen át vett metszetek statikájából számítjuk.

## Rugalmas lemezalap rugókon

Jelölje be a {{ui:Ezt az alapot rugókon álló rugalmas lemezként elemezze}} lehetőséget, ha az alapra sok oszlop támaszkodik, és a merev alap túl durva. Az alap négycsomópontos elemekből álló lemezzé válik, rugókon fekve (a beírt {{ui:ks}} érték, a csomópontokba koncentrálva); minden oszlop terhelése a saját lábnyomának csomópontjaira oszlik. Egy második táblázat megadja a legnagyobb talajnyomást és süllyedést (valamint a legnagyobb és a legkisebb érték különbségét), mindkét irányú hajlítónyomatékot a szükséges acélmennyiséggel, a felső oldali húzást a sima beton szilárdságával szemben (az alapnak nincs felső vasa), az oszlopok felületétől d távolságban az egyirányú nyírást, valamint az átütést a rugók saját nyomására. A hálót addig finomítjuk, amíg egy oszlop három elem széles nem lesz; egy nagy lemezalap néhány másodpercet vesz igénybe. A lemezalap saját súlya és a fölötte lévő talaj kiegyenlítik egymást, ezért kimaradnak.

Minden sikertelen ellenőrzés a {{ui:Problémák}} panelen található, a hivatkozott előírás pontjával együtt.

## Cölöpcsoportok és támfalak

A {{ui:Cölöpcsoport hozzáadása}} gombbal cölöprácsot helyez el merev cölöpfej alá: írja be a terhelést és a nyomatékokat, valamint azt, hogy egy cölöp mekkora nyomó- és húzóerőt viselhet (a cölöptervezés értékei, nem ennek a lapnak az értékei). Minden cölöp reakciója P/n plusz a nyomatékokból rá eső rész (rugalmas módszer), és ellenőrzik a legnagyobb nyomóerőt és az esetleges húzóerőt.

A {{ui:Támfal hozzáadása}} gombbal egy konzolos támfalat ellenőrizhet vízszintes töltésen, méterenként: Rankine-féle aktív nyomás, felborulás a lábfej körül, csúszás és az alapnyomás. A lábfej előtti passzív nyomás kimarad. Az asszisztens ugyanezeket az ellenőrzéseket futtathatja a `pile_group_check` és a `retaining_wall_check` paranccsal.

A cölöpcsoportok, a falak és a rugalmas lemezalap kapcsolója a modellfájlba mentődnek, a sikertelen ellenőrzés pedig a {{ui:Problémák}} panelen látható.
