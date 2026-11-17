---
title: Betonelemek ellenőrzése és szeizmikus terhek készítése
summary: Betongerendák és -oszlopok vasalásának beállítása, ellenőrzés ACI 318-19 szerint, egyenértékű oldalirányú erők készítése ASCE 7-22 szerint merev födémekre, valamint szintenkénti elmozdulás megtekintése. Mérnöki ellenőrzéshez készült segédeszköz.
keywords: beton, vasbeton, ACI 318, ACI 318-19, vasalás, gerenda, oszlop, nyírás, kötőszálak, szeizmikus, földrengés, egyenértékű oldalerő, ELF, ASCE 7-22, elmozdulás, szintenkénti elmozdulás, födémek, merev lemez, szint súlya, kihasználtság, szerkezeti, mérnök
from: 94d3001d
---

A {{ui:Analízis}} lap {{ui:Beton rúdelemek}} és {{ui:Szeizmikus terhek}} blokkjai vasbeton gerendákat és oszlopokat ellenőriznek, és készítik a földrengés vízszintes erőit a keret födémjeire. Mindkettő az {{ui:Analízis}} lap futtatását követi, és a modellel együtt mentődik.

:::warning
Az eredmények **mérnöki ellenőrzésre** valók: segédeszköz, amíg egy mérnök át nem nézte. A betonos ellenőrzések elsőrendű erőket használnak, kivéve, hogy a nem oldalirányban elmozduló (non-sway) keretben lévő oszlopot a megnövelt nyomatékára tervezik, oldalirányú nagyítás, csavarási tervezés, szeizmikus részletezés (ACI 18. fejezet) és kötőszál-részletezés nélkül. A szeizmikus terhek nem számolják a redundanciatényezőt, a függőleges szeizmikus hatást, a csavarási növelést és a P-delta hatásokat. A szélterhek még nincsenek elkészítve.
:::

## Rajzolja meg a tagokat

Rajzolja meg a betonelemeket téglalapként: egy {{ui:Lemez}} szelvény, például `PL400x400` oszlopnak és `PL300x600` gerendának, adja meg a keresztmetszetet. Az oszlopokat és gerendákat úgy helyezi el, mint bármely más tagot.

## Állítsa be a keresztmetszeteket

A {{ui:Beton rúdelemek}} blokk felsorolja az összes keresztmetszetet, amelyet a tagok használnak. Nyomja meg a {{ui:Beállítás betonként…}} gombot azokon, amelyek betonosak. A DetailCraft beolvassa a **b** szélességet (a tag saját y-tengelye mentén) és a **h** mélységet (z mentén) a megrajzolt szelvényből, majd megkérdezi:

- a **betonfedést** a vasak középpontjáig, és a **felső**, **alsó** és **oldalsó** vasakat (hány darab és milyen átmérő) gerendánál, vagy egy **oszlopkosarat** (b és h mentén futó vasak, átmérő, spirális kötőszálak) oszlopnál;
- a **kötőszálakat**: szárak, átmérő és osztás;
- hogy a tag **mint működik**: gerendaként, oszlopként, vagy az erői alapján döntve el (függőleges tag, vagy amely 0,10 f′c Ag-nál nagyobb terhet visel, az oszlop).

Adja meg az f′c-t, a vasak fy folyáshatárát és a kötőszálak fyt folyáshatárát (nyírásnál legfeljebb 420 MPa számít), a K-t, valamint azt, hogy a keret eltolódó (sway) vagy nem eltolódó (non-sway). Egy betonként beállított keresztmetszet betonként elemződik: E = 4700 √f′c, 2400 kg/m³, és alapértelmezésben **repedt keresztmetszetekkel** (oszlopok 0,70 Ig, gerendák 0,35 Ig; ACI 318-19 6.6.3.1.1(a) táblázat). A kikapcsoláshoz válassza a {{ui:Teljes keresztmetszetek}} gombot.

## Készítsen kombinációkat, és ellenőrizzen

Adja meg a terhesetek típusát, majd nyomja meg a {{ui:Kombinációk készítése}} gombot: az ACI 318-19 az ASCE 7 teherkombinációit veszi át (§5.3.1). Nyomja meg a {{ui:Beton ellenőrzése}} gombot, és minden tag kap egy kihasználtságot, a modellen az acélellenőrzésekhez hasonlóan színezve: hajlítás és minimális acél (22.2, 9.6.1.2), húzásvezérelt nyúlás (9.3.3.1), nyírás a kötőszálakkal (22.5, 9.6.3), kötőszál-osztás, és oszlopoknál a normálerő nyomatékkal (22.4, kétirányú hajlításra Bresler-módszerrel). Az a tag, ahol a megrajzolt keresztmetszet eltér az Ön által beírt b × h méretektől, *részben ellenőrzött* jelzést kap, akárcsak egy karcsú oszlop vagy a küszöb feletti csavarás: ezeket nem tervezik.

A teherbírásukat meghaladó tagok a {{ui:Problémák}} listában szerepelnek; fogadja el ok megadásával, vagy javítsa a keresztmetszetet.

## Födémek és szeizmikus terhek

Födém az a szint, ahol a keretet egy merev lemez (**merev födém**) tartja össze. A {{ui:Szeizmikus terhek}} blokkban nyomja meg a {{ui:Födémek keresése}} gombot: ez azokat a szinteket veszi fel, ahol két vagy több gerenda találkozik. Ezután minden födémnek adja meg a **szeizmikus súlyát**, begépelve vagy beolvasva. A {{ui:Súlyok átvétele az esetekből}} összegzi azoknak az eseteknek a függőleges terheit, amelyekhez tényezőt adott meg (az állandó eset 1; tárolási hasznos terhelésű vagy lapos tetőn hóteher esetén adjon hozzá 0,25-öt, ahogy az ASCE 7-22 12.7.2 kéri). Minden csomópont függőleges terhe a rajta lévő vagy fölötte lévő födémre kerül, így két födém közötti oszlop súlyának fele mindkettőre jut.

Töltse ki a tervezési értékeket: SDS, SD1, S1, R, Ie, Cd, TL, a szerkezeti rendszert (a periódushoz) és a kockázati kategóriát. A {{ui:Szeizmikus esetek készítése}} gomb ezután kiszámítja a periódust az épület magasságából (12.8.2.1), az alapnyíróerőt V = Cs W (12.8.1), szétosztja a födémekre (12.8.3), és négy terhesetet ír: X- és Y-irányban, mindkét irányban 5%-os véletlen csavarással (12.8.4.2). A szintenkénti erők és a szintenkénti elmozdulás-ellenőrzés (12.8.6, 12.12-1 táblázat, az elmozdulás Cd δxe / Ie a 0,020 hsx értékhez képest) egy futtatás után jelennek meg; a határértéket meghaladó elmozdulás szintén probléma. Nyomja meg ismét a {{ui:Kombinációk készítése}} gombot, hogy a szeizmikus esetek bekerüljenek a kombinációkba.

**A periódusidő az analízisből.** A közelítő Ta periódus az épület magasságából származik. Miután lefuttatta az analízist a szeizmikus esetekkel, az {{ui:A periódusidő átvétele az analízisből}} gomb beolvassa, mennyit mozdult el minden födém az erők hatására, és Rayleigh-módszerrel kiszámítja a periódust, T = 2π √(Σ w δ² / (g Σ f δ)), egyszer X-re és egyszer Y-ra; a szeizmikus eseteket ezzel újra elkészíti. A használt periódus soha nem lehet nagyobb Cu·Ta-nál (ASCE 7-22 12.8.2), így egy puha modell nem viheti az alapnyíróerőt ez alá. A periódust a második futtatás után vegye át újra: egy-két lépésben stabilizálódik. A {{ui:Periódusidő az analízisből}} jelölés törlésével visszatér a Ta értékhez.

**Karcsú oszlopok (ACI 318-19 6.6.4.5).** Egy nem eltolódó (non-sway) keretnél, az olyan oszlop, amelynek k·ℓu/r értéke 34 + 12·M1/M2 fölött van (legfeljebb 40), a megnövelt Mc = δns · M2 nyomatékra tervezik: δns = Cm / (1 − Pu / 0,75 Pc), Pc = π² (EI)eff / (k ℓu)², ahol (EI)eff = 0,4 Ec Ig / (1 + βdns), a minimális nyomaték pedig Pu (15 + 0,03 h). A βdns (kezdetben 0,6) a szorzott normálerő tartós hányada: írja be a saját értékét. Az az oszlop, amelynek Pu értéke eléri a 0,75 Pc-t, a saját ellenőrzésén bukik meg. A jelentés minden karcsú oszlop számait felsorolja. Egy **eltolódó (sway)** keretben a karcsú oszlop továbbra is „részben ellenőrzött”: a nagyításához másodrendű analízis kellene, ami még nincs elkészítve.

**Födémlemezek.** Ha a modellben vannak lemezek, a {{ui:Födémvasalás}} blokk minden teherkombináció lemeznyomatékát veszi, és a Wood–Armer-szabállyal (hajlítás és csavarás együtt) kiszámítja az egyes rétegek szükséges acélját méterenként: alsó és felső, x és y irányban. Megadja a vastagságot, a betonfedést és a vasakat; a táblázat a szükséges és a megadott értékeket, valamint az egyirányú nyírást a φVc-hez képest mutatja, és a kevésnek bizonyuló réteg a hozzá tartozó előírással együtt probléma. A lehajlás, a pillérek átütése és a nyílások körüli záróvasak nincsenek lefedve, és a támasz fölötti nyomaték négycsomópontos lemezekkel lassan konvergál.

Minden felsorolt födém merev lemezként szerepel az analízisben: gerendáiban a födém elmozdulásából nem keletkezik normálerő. A CraftScript-export nem készül födémeket tartalmazó modellhez.

## A jelentés

A {{ui:Jelentés (PDF)}} és a {{ui:Jelentés (CSV)}} új betontáblázatokkal bővül (feltevések, tagonkénti kihasználtság, minden hivatkozott szakasz), valamint a szeizmikus paraméterekkel és az alapnyíróerővel, a födémekre ható erőkkel és az elmozdulás-táblázattal.
