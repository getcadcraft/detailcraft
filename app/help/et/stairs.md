---
title: Trepid
summary: Paiguta sirge terastrepp selle tõusu, astme sügavuse ja laiuse järgi: kaks trepikaart ja astmeplaadid, üks keevitatud koost.
keywords: trepp, trepid, trepikaar, astmeplaat, astmekõrgus, astme sügavus, astmeserv, trepilend, terastrepp, ibc 1011, blondel
from: 62fa3845
---

Sirge terastrepp: kaks trepikaart (U-profiilid, mille jalad on sissepoole, või lamedad ribad servapidi) ja astmeplaat igal astmel, keevitatud nende vahele. DetailCraft arvutab tõusust astmekõrgused, kontrollib neid ehitusnormi piirangute järgi ja teeb trepist ühe tehase koosti.

## Trepi paigutamine

1. Vali rühmas {{ui:Paiguta}} nupp {{ui:Trepp}} või vajuta {{key:S}}.
2. Määra trepp paremal: **tõusu suund** (0° tõuseb mööda +x, 90° mööda +y), **tõus** (0 = kuni järgmise tasandini), **astme sügavus**, **vaba laius** trepikaarte vahel, **suurim lubatud astmekõrgus**, **trepikaar**, **astmeplaadi paksus**, **astmeserv** ja materjal.
3. Klõpsa ruudustiku ristumispunktil: see on esimese astmekõrguse alus trepi keskjoonel.

Olekuriba ütleb, mitu astmekõrgust tehti. Trepi seadete, asendi või etapi muutmiseks vali trepp (klõpsa trepikaarel või astmeplaadil); omadused näitavad ka astmekõrgusi, astmeplaate, ulatust, kallet ja 2 × astmekõrgus + astme sügavus.

## Mida DetailCraft arvutab

- **Astmekõrgused.** Nii vähe, et iga astmekõrgus jääks lubatud maksimumi piiresse või sellest allapoole: 3000 mm tõus, 178 mm või vähem, annab 17 astmekõrgust 176.5 mm. Astmeplaate on üks vähem kui astmekõrgusi (ülemine korrus on viimane aste).
- **Astmeplaadid.** Plaat, mille sügavus on astme sügavus + astmeserv (vaikimisi 280 + 25 = PL6x305) ja pikkus on vaba laius, ülaosaga iga astmekõrguse kõrgusel, esiserv (astmeserv) astmekõrguse joone ees.
- **Trepikaared.** Trepi kalde järgi, alumise korrusega kohtumisest kuni ülemise korrusega kohtumiseni, vahetult väljaspool vaba laiust, nende ülemine serv 50 mm kõrgemal astmeservade joonest. U-profiili jalad on trepi poole; lame riba nagu PL12x250 seisab servapidi.
- **Keevised.** Iga astmeplaat mõlema trepikaarega. Astmeplaadid ja parem trepikaar on keevitatud vasakule trepikaarele, nii et trepp saab ühe koostemärgise (ST1) ja oma koostejoonise; trepikaared saavad detailimärgised st…, astmeplaadid p….
- **Kontrollid.** Hoiatused, kui astmekõrgus on väljaspool 4 kuni 7 in. (102 kuni 178 mm) või astme sügavus on alla 11 in. (279 mm), IBC 2021 jaotise 1011.5.2 piirangud; kui 2 × astmekõrgus + astme sügavus on väljaspool 600 kuni 650 mm (tavaline mugavusreegel); ja kui trepikaar on astmeplaatide kandmiseks liiga madal. Tundmatu trepikaare profiil takistab trepi ehitamist.

## Hea teada

- Teisalda, pööra, peegelda, kopeeri, kleebi, kustuta ja etapid töötavad trepil nagu elemendil. Pööramine pöörab tõusu; peegeldamine suunab selle peegelduse suunas.
- Trepikaared eksporditakse IFC-sse kui IfcMember ja astmeplaadid kui IfcPlate; mõlemad lähevad NC-failidesse ja materjalinimekirja. Kokkupõrkekontroll jätab trepi enda detailid kõrvale (need on omavahel keevitatud).
- See lihtne trepp on üks trepilend plaatastmetega. Vahepodestite, balistritega käsipuude, volditud plaatalusega või restastmete, sinu valitud reeglistiku, lõikenimekirja ja trepikaarte augujooniste jaoks märgi tööriistas Trepp {{ui:Kasuta terastrepi generaatorit}} (vt Terastrepi generaator).
- Trepikaared on lõigatud risti: nende otsalõikeid vastu korrusi ei tehta.
- DetailCraft ei projekteeri trepp: trepikaari ja astmeplaate ei kontrollita tugevuse ega läbipaindumise järgi.
