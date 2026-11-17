---
title: Eksportuoti KISS failą gamybos programai
summary: Siųskite medžiagų sąrašą gamybos valdymo (MIS) programai kaip KISS 1.1 failą: surinkimai, detalės, fazės kaip sekos, skylės, išpjovos ir suvirinimai.
keywords: kiss, kss, mis, gamybos valdymas, gamybos kontrolė, sąmata, medžiagų sąrašas, bom, eksportas, fabtrol, seka
from: 30cf3951
---

Grupėje {{ui:Output}} atidarykite {{ui:More}} ir pasirinkite {{ui:KISS file for fabrication software}}. DetailCraft atsisiunčia `<name>.kss` – KISS failą ("Keep It Simple, Steel", 1.1 versija), paprastą teksto formatą, iš kurio dauguma gamybos valdymo programų importuoja medžiagų sąrašą.

## Kas jame yra

- Antraštė: darbo numeris (pirmos aštuonios modelio pavadinimo raidės ir skaitmenys), modelio pavadinimas, data ir laikas bei ar dydžiai metriniai.
- Kiekvienam surinkimo žymeniui: pagrindinė detalė (kiekis = kiek surinkimų), brėžinio eilutė (A-B1 ir panašiai, surinkimo brėžinio numeris), surinkimo eilutė (pavadinimas, tipas, svoris, bendras ilgis, gylis ir plotis), po vieną sekos eilutę kiekvienai [fazei](topic:phases), kurioje yra surinkimas, ir darbo eilutes: skylės (kiek, skersmuo, storis per visą), išpjovos ir suvirinimai.
- Po to kiekviena jam priklausanti detalė su **bendru** kiekiu (per surinkimą × surinkimai), kaip reikalauja standartas.
- Laisvi varžtai ir inkariniai strypai brėžinyje BOLTS, surinkime FIELD.
- Kiekviena eilutė nurodo tipą (W, C, L, HSS, PL arba MI pasirinktiniam profiliui), dydį, markę, pjovimo ilgį milimetrais, detalės pavadinimą ir svorį.

## Coliai ar metrai

[DetailCraft parametruose](topic:settings) **KISS failo dydžiai** pasirenkama:

- **Automatinis** (pradžioje): coliai, kai kiekvienas elementas yra AISC profilis, kitaip – metrai.
- **Coliai**: profiliai pagal AISC žymėjimą (W 16X26, HSS 4X4X.250); plokštės ir varžtai, kuriuos DetailCraft laiko milimetrais, iki artimiausios 1/16 colio; svoriai svarais.
- **Metrai**: europiniai profiliai pagal pavadinimą (IPE300), plokštės kaip storis X plotis milimetrais; svoriai kilogramais.

Ilgiai visada milimetrais su dviem skaitmenimis po kablelio, nepriklausomai nuo nustatymo: KISS standartas to reikalauja, o priimanti programa konvertuoja.

:::note
Markės sutrumpinamos iki standarto aštuonių simbolių: A572 Gr 50 tampa A572-50. Kableliai pavadinimuose pakeičiami tarpais, nes formatas nenaudoja kabučių. Prieš pasikliaudami, patikrinkite vieną importą savo programoje: DetailCraft KISS failai čia tikrinami pagal standartą, o su gamybos programa dar nebandyti.
:::
