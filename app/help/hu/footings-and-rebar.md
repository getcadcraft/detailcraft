---
title: Alapok elhelyezése vasalással
summary: Téglalap alakú talpalapok elhelyezése alsó vasalási hálóval és indítóvasakkal, ellenőrzésük, és a hajlítási kimutatás letöltése.
keywords: alap, talpalap, alapozás, vasalás, betonacél, vasak, háló, indítóvasak, dübelek, hajlítási kimutatás, vaslista, beton, horgok, betonfedés
from: 41a048be
---

Ez a témakör téglalap alakú talpalapokról szól. A gerendák, oszlopok, födémek és falak a [Vasbeton részletezése](topic:reinforced-concrete) témakörben találhatók. Minden alap mindkét irányban kap alsó vasalási hálót, és ha szükséges, felfelé kiálló indítóvasakat. A vasak méretei US-szabvány szerint #3-tól #11-ig terjednek.

## Alap elhelyezése

1. Válassza az {{ui:Alaprajz}} lehetőséget, és jelölje ki az alap felső síkjának szintjét.
2. Válassza az {{ui:Alap}} gombot az {{ui:Elhelyezés}} csoportban, vagy nyomja meg a {{key:F}} billentyűt.
3. Állítsa be az alapot a {{ui:Tulajdonságok}} panelen (lásd lent), vagy hagyja meg az alapértékeket.
4. Kattintson egy rácsmetszéspontra. Az alap ebbe a pontba kerül középre, felső síkja a szinten van. Az állapotsor például ezt írja ki: „Alap 2000 x 2000 x 600, A/1 alatt.”

A panel alján levő {{ui:Hozzáadás rács szerint}} űrlapot is használhatja.

Az alap áttetszően jelenik meg, hogy látszódjanak a vasai, amelyek tömör csövekként rajzolódnak ki.

## Az alap beállításai

| Mező | Alapérték | Megjegyzés |
|---|---|---|
| Hosszúság L (mm) | 2000 | Az x mentén; 300 és 50000 között |
| Szélesség B (mm) | 2000 | Az y mentén; 300 és 50000 között |
| Mélység H (mm) | 600 | 150 és 10000 között |
| Beton | 4000 psi | Szöveg, az IFC-exportban jelenik meg |

**Alsó vasháló**

| Mező | Alapérték | Megjegyzés |
|---|---|---|
| Hosszanti vasak | #5 | Az L mentén futó vasak, az alsó réteg |
| Távolság (mm) | 250 | A megengedett legnagyobb távolság; a vasak egyenletesen, ettől vagy ennél sűrűbben oszlanak el |
| Keresztirányú vasak | #5 | A B mentén futó vasak, a hosszanti vasakon fekve |
| Távolság (mm) | 250 | Mint fent |
| Betonfedés (mm) | 75 | Szabad betonfedés minden oldalon |
| Végi horgok | Be | Az egyes hálóvasak mindkét végét 90°-os szabványos horogba hajtja fel (U alak); ki állásban egyenes vasak lesznek (S alak) |

**Indítóvasak**

| Mező | Alapérték | Megjegyzés |
|---|---|---|
| Indítóvasak | Be | Indítóvasak nélküli alaphoz kapcsolja ki |
| Vas | #6 | |
| Vasak L mentén / Vasak B mentén | 2 / 2 | Vasrács, az alap közepére helyezve |
| Távolság L mentén / Távolság B mentén | 250 / 250 | A vasak tengelyei között |
| Kinyúlás a felső sík fölé | 600 | Milyen messze nyúlnak ki a vasak az alap felső síkja fölé |
| Horog alul | Be | 90°-os horog kifelé, a hálón fekve (L alak) |

A mezők alatt a DetailCraft megjeleníti a hosszanti vasak horogszárát, például: „Horogszár #5-höz: 254 mm kültávolság.”

## Elhelyezett alap módosítása

Jelölje ki az alapot (kattintson a betonjára úgy, hogy ne legyen mellette oszlop, vagy kattintson valamelyik vasára). Ugyanazok a mezők jelennek meg, plusz a {{ui:Középpont x}}, {{ui:Középpont y}}, {{ui:Teteje z}} és {{ui:Elforgatás (°)}} mezők. Alattuk táblázat sorolja fel az alap vasait a jelölésükkel, darabszámukkal és hosszukkal, valamint a beton térfogatát köbméterben.

Minden módosítás megtartás előtt ellenőrzésre kerül. Az elkészíthetetlen módosítást a rendszer elutasítja, az állapotsor pedig megmondja az okát, például: „The cover leaves no room for bars in this footing.” (a betonfedés nem hagy helyet a vasaknak ebben az alapban), „The footing is too shallow for two layers of bars inside the cover.” (az alap túl sekély két vasréteghez a betonfedésen belül) vagy „The starter bars do not fit inside the footing with 75 mm cover.” (az indítóvasak nem férnek el az alapban 75 mm betonfedéssel).

Az elkészíthető, de átnézést igénylő módosítások az alap alatt és a {{ui:Problémák}} lapon láthatók:

- „#11 bars at 59.6 mm leave less than 35.8 mm clear (ACI 318-19 25.2.1).” A vasak közötti szabad hézagnak legalább a vas átmérőjével és legalább 25,4 mm-rel kell egyenlőnek lennie.
- „#5 hooks need 254 mm of depth; only 150 mm fits inside the cover.” A horogszárak ilyenkor a helyhez igazítva rövidülnek, így már nem szabványos horgok.
- „The starter hooks reach into the cover.” Az indítóvas-horgok a betonfedésbe nyúlnak.
- „Starter bars are closer than the minimum clear spacing.” Az indítóvasak a legkisebb szabad távolságnál közelebb vannak.

## Vasjelölések és a hajlítási kimutatás

Az azonos vasak (azonos méret, alak és méretek a milliméterig) minden alapon közös vasjelölést kapnak. A jelölések formája `<bar number>F<n>`: 5F1, 5F2 a #5 vasakra, 6F1 az első #6 vasra, és így tovább. Az azonos méretű, betonú, hálójú és indítóvasú alapok közös alapjelölést kapnak: F1, F2 …

1. Nyissa meg az alul található {{ui:Hajlítási kimutatás}} lapot. Minden sor egy vasjelölést tartalmaz: méret, alak, A, B és C méretek, darabszám, vágási hossz, teljes hossz, tömeg méterenként, darabonkénti tömeg, teljes tömeg, és hogy a vas mire szolgál.
2. Válassza a lapon a {{ui:CSV letöltése}} gombot, vagy a {{ui:Kimenet}} csoport {{ui:Továbbiak}} menüjében a {{ui:Hajlítás}} parancsot; ekkor a `<name> bending schedule.csv` fájl töltődik le.

Az alakok a DetailCraft saját kódjai, nem valamely szabványé: S egyenes, L egy hajlítás, U két hajlítás. A méretek külméretek; a vágási hossz a hajlításokon át számított pontos tengelyhossz. Lásd: [Vasalási hivatkozás](topic:rebar-reference).

## Amit a DetailCraft nem ellenőriz

- A kifejtési és átfedési hosszak, valamint az, hogy elegendő hosszúak-e az indítóvasak a fölötte lévő oszlophoz.
- A szabad távolság szabályának adalékanyag-méretre vonatkozó része (a keverék összetételét nem ismeri).
- A fölötte lévő oszlop vagy talplemez bármely vonatkozása: az alapok és az acél külön tételek.

Lásd még: [Még nincs elkészítve](topic:not-built-yet).
