---
title: Stigar
summary: Staðsetja beinan stálstiga út frá hæð, trédýpt og breidd: tveir stigabitar og þrepaplötur, ein soðin samsetning.
keywords: stigi, stigar, stigahús, stigabiti, þrep, uppstig, trédýpt, nef, stigalengja, stálstigi, ibc 1011, blondel
from: 62fa3845
---

Beinn stálstigi: tveir stigabitar (U-prófílar með tánum inn, eða flatjárn á kant) og plötuþrep við hvert skref, soðin á milli þeirra. DetailCraft reiknar út fjölda uppstiga út frá hæðinni, athugar þau við mörk byggingarreglugerðarinnar og gerir stigann að einni samsetningu í verksmiðju.

## Staðsetja stiga

1. Veldu {{ui:Stigi}} í hópnum {{ui:Staðsetja}}, eða ýttu á {{key:S}}.
2. Stilltu stigann hægra megin: **stefnu uppgöngu** (0° fer eftir +x, 90° eftir +y), **hæðina** (0 = upp að næsta kóta), **trédýptina**, **lausa breidd** milli stigabitanna, **hæsta leyfða uppstig**, **stigabitann**, **þykkt þrepaplötunnar**, **nefið** og efnið.
3. Smelltu á ásskurð: það er fóturinn á fyrsta uppstiginu, á miðlínu stigans.

Stöðustikan segir hversu mörg uppstig voru gerð. Veldu stigann (smelltu á stigabita eða þrep) til að breyta einhverjum stillingum hans, staðsetningu eða áfanga; eiginleikarnir sýna líka uppstigin, þrepin, stigalengdina, hallann og 2 × uppstig + trédýpt.

## Það sem DetailCraft reiknar út

- **Uppstig.** Eins fá og halda hverju uppstigi við eða undir þeirri hæstu leyfðu: 3000 mm hæð við 178 mm eða minna gefur 17 uppstig upp á 176.5 mm. Það er einu þrepi færra en uppstig (efsta hæðin er síðasta skrefið).
- **Þrep.** Plata sem er trédýpt + nef djúp (280 + 25 = PL6x305 sjálfgefið) og jafnlöng lausu breiddinni, efsta hlið hennar í hverri uppstigshæð, frambrún hennar (nefið) fyrir framan uppstigslínuna.
- **Stigabitar.** Í halla stigans, frá þar sem þeir mæta neðri hæðinni að þar sem þeir mæta efri hæðinni, rétt utan við lausu breiddina, með efri brún sína 50 mm yfir línu nefjanna. Tær U-prófílsins snúa inn í stigann; flatjárn eins og PL12x250 stendur á kant.
- **Suður.** Hvert þrep við báða stigabitana. Þrepin og hægri stigabitinn eru soðin við vinstri stigabitann, þannig að stiginn fær eitt samsetningarmerki (ST1) og sína eigin samsetningarteikningu; stigabitarnir fá hlutamerkingarnar st…, þrepin p….
- **Athuganir.** Viðvaranir þegar uppstig er utan 4 til 7 in. (102 til 178 mm) eða trédýpt er undir 11 in. (279 mm), mörk IBC 2021 kafla 1011.5.2, þegar 2 × uppstig + trédýpt er utan 600 til 650 mm (algeng þægindaregla), og þegar stigabitinn er of grunnur til að bera þrepin. Óþekkt snið stigabita kemur í veg fyrir að stiginn sé smíðaður.

## Gott að vita

- Færa, snúa, spegla, afrita, líma, eyða og áfangar virka á stiga eins og á lið. Snúningur snýr uppgöngunni; spegling sendir hana speglaða leið.
- Stigabitar fara út í IFC sem IfcMember og þrep sem IfcPlate; hvort tveggja fer í NC-skrár og efnislistann. Árekstrarprófunin sleppir eigin hlutum stigans (þeir eru soðnir saman).
- Þessi einfaldi stigi er ein stigalengja með plötuþrepum. Fyrir stigapalla, handrið með stöfum, þrep úr brotinni plötu eða rist, reglusafn sem þú velur, skurðlista og göt á stigabitum, hakaðu við {{ui:Nota stálstigagerðina}} í {{ui:Stigi}}-verkfærinu (sjá Stálstigagerð).
- Stigabitarnir eru skornir beint: endaskurðir þeirra gegn gólfunum eru ekki gerðir.
- DetailCraft hannar ekki stigann: stigabitar og þrep eru ekki athuguð með tilliti til styrks eða durðar.
