---
title: Failų atidarymas, įrašymas ir eksportavimas
summary: DetailCraft modelio failas, kiekvienas jo rašomas eksportas, kur failai įrašomi ir kuo skiriasi naršyklės bei ryšio sąlygos.
keywords: atidaryti, įrašyti, eksportuoti, atsisiųsti, failas, json, ifc, nc1, dstv, csv, pdf, zip, formatai, importuoti
from: 6fbc8e8f
---

DetailCraft turi vieną savo failą, modelį, ir penkis eksportus. Kiekvienas įrašymas ir kiekvienas eksportas yra atsisiuntimas. Niekas neįkeliama, o serveryje nieko nesaugoma.

## Modelio failas

DetailCraft modelis įrašomas kaip `<name>.detailcraft.json`, kur `<name>` yra modelio pavadinimas skydelyje {{ui:Modelis}}. Jame saugomi tinkleliai, lygiai, elementai (su jų skylėmis ir iškirpimais), jungtys ir jų parametrai, pamatai bei jūsų pasirinktiniai profiliai.

Detalės, žymenys, varžtai, suvirinimai ir strypai neįrašomi: DetailCraft juos kiekvieną kartą atidarydamas modelį apskaičiuoja iš naujo. Todėl modelio failas yra mažas.

### Įrašymas

1. Įveskite pavadinimą lauke {{ui:Pavadinimas}}, esančiame skydelio {{ui:Modelis}} viršuje.
2. Grupėje {{ui:Failas}} pasirinkite {{ui:Įrašyti}} arba paspauskite {{key:Mod+S}}.
3. Naršyklė atsisiunčia `<name>.detailcraft.json`. Būsenos juostoje rodoma „Įrašyta … (atsisiųsta)“, o taškas naršyklės skirtuko pavadinimo pradžioje dingsta.

Kiekvienas įrašymas yra naujas atsisiuntimas. Naršyklė neperrašo atidarytos bylos: pagal savo nustatymus ji prideda numerį prie pavadinimo, pvz., `Frame (1).detailcraft.json`, arba klausia, kur įrašyti. Norėdami išsaugoti savo versijas, pervardykite atsisiuntimus.

:::chromium
Chrome ir Edge įrašo į aplanką Atsisiuntimai, nebent naršyklės atsisiuntimo nustatymuose įjungta **Klausti, kur įrašyti kiekvieną failą prieš atsisiunčiant**. Įjunkite, jei norite kiekvieną kartą pasirinkti aplanką ir failo pavadinimą.
:::

:::firefox
Firefox įrašo į aplanką Atsisiuntimai arba klausia kiekvieną kartą, jei jos nustatymuose įjungta **Visada klausti, kur įrašyti failus**.
:::

:::safari
Safari įrašo į aplanką Atsisiuntimai. Norėdami pakeisti aplanką, atidarykite **Safari, Parametrai, Bendra, Failų atsisiuntimo vieta**.
:::

### Atidarymas

1. Grupėje {{ui:Failas}} pasirinkite {{ui:Atidaryti}} arba paspauskite {{key:Mod+O}}.
2. Pasirinkite `.detailcraft.json` failą.

Arba nuvilkite failą iš {{pick:mac=Finder|windows=Failų naršyklės|linux=failų tvarkyklės}} ir paleiskite jį ant vaizdo. Vilkdami vaizdas rodo: „Įmeskite DetailCraft modelį, kad jį atidarytumėte“.

Jei atidarytas modelis turi neįrašytų pakeitimų, DetailCraft pirmiausia klausia: {{ui:Atšaukti}}, {{ui:Atmesti pakeitimus}} arba {{ui:Pirmiausia įrašyti}}.

DetailCraft prieš naudodamas patikrina kiekvieną failo lauką. Ko negali panaudoti, praleidžia, o būsenos juostoje parašo, ką praleido, pvz., „2 elementai buvo neteisingi ir praleisti.“ Modelis, įrašytas naujesne DetailCraft versija, atmetamas su pranešimu, o ne atidaromas per pusę.

### Ką atidaro

Savo modelių failus (`.json`, iki 50 MB) ir IFC failus (`.ifc`, IFC2X3 arba IFC4, iki 200 MB). IFC failas, atidarytas arba įkeltas su {{ui:Importuoti IFC}}, tampa nauju modeliu su savo sijomis, kolonomis, elementais, plokštėmis, tinkleliais ir lygiais. Skylės ir iškirpimai į juos įpjaunami, o varžtai tampa laisvais varžtais. Ataskaitoje surašoma, kas buvo praleista. Žr. [IFC eksportas](topic:ifc-export#import). DWG, DXF ar kitų detalizavimo programų modelių kol kas neatidaro; bandant rodoma: „DetailCraft atidaro savo modelius (.detailcraft.json) ir IFC failus (.ifc).“

## Prarastas darbas, neseniai naudoti failai, darbalaukio programa

- Kol modelyje yra neįrašytų pakeitimų, DetailCraft saugo kopiją šioje naršyklėje. Jei skirtukas ar naršyklė užsidaro prieš įrašant, kitą kartą atidarius DetailCraft paklaus **Atkurti jūsų darbą?**: atkurti kopiją arba ją atmesti. Žr. [Atkurti darbą](common:recover).
- Neseniai atidaryti modeliai rodomi pradžios ekrane, jei naršyklė leidžia DetailCraft juos vėl atidaryti. Spustelėkite vieną, kad jį atidarytumėte iš naujo.
- Darbalaukio programoje {{ui:Įrašyti}} įrašo modelį atgal į failą, kurį atidarėte (naršyklėje atsisiunčiama kopija), o dvigubas spustelėjimas ant DetailCraft modelio ar IFC failo atidaro jį DetailCraft.

## Eksportai

Visi eksportai naudoja modelio pavadinimą. Pasirinkite juos grupėje {{ui:Išvestis}}.

| Mygtukas | Failas | Kas jame |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: aukštai, tinkleliai, kiekviena plieninė detalė kaip profilio ekstruzija su skylėmis ir iškirpimais, surinkimai, varžtai ir kotvų strypai, pamatai ir kiekvienas strypas. Žr. [IFC eksportas](topic:ifc-export). |
| {{ui:NC failai}} | `<name> NC.zip` | Po vieną DSTV `.nc1` failą kiekvienam detalės žymeniui. Žr. [Siųsti NC failus į dirbtuves](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Trys lentelės viename faile: detalės, surinkimai ir varžtai bei kotvų strypai. Žr. [Žymenys ir medžiagų sąrašas](topic:marks-and-bom). |
| {{ui:Lenkimas}} | `<name> bending schedule.csv` | Kiekvienas strypo žymuo pamatuose. Žr. [Pamatai ir armatūra](topic:footings-and-rebar). |
| {{ui:Dirbtuvių brėžinys}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` talpina po lapą kiekvienam detalės žymeniui; {{ui:Atsisiųsti PDF}} duoda rodomą lapą (A3, nebent pasirinkote kitą formatą). Žr. [Dirbtuvių brėžinių kūrimas](topic:shop-drawings). |
| {{ui:Brėžiniai}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` arba `.dxf`, keli `<name> drawings DWG.zip` (arba `DXF.zip`) viduje | Planai, fasadai ir surinkimo brėžiniai pasirinktu lapo formatu; DWG ir DXF – pilnu dydžiu, 1 vienetas = 1 mm popieriuje. Žr. [Bendrieji išdėstymo ir surinkimo brėžiniai](topic:drawings). |

### Pastabos apie CSV failus

- Jie prasideda baitų žymeniu, kad skaičiuoklės teisingai nuskaitytų raides su diakritiniais ženklais.
- Langelis, prasidedantis `=`, `+`, `-` ar `@` (ir nėra paprastas skaičius), gauna pradžioje apostrofą, kad skaičiuoklė jo niekada nevykdytų kaip formulės.
- Ilgiai pateikiami milimetrais, svoriai – kilogramais.

### Pastabos apie PDF

Tekstas PDF naudoja standartinį Helvetica šriftą. Simboliai, kurių šriftas neturi (už Vakarų Europos rinkinio ribų), spausdinami kaip „?“, o būsenos juostoje parodoma, kiek jų.

## Vienetai

DetailCraft visur dirba milimetrais: tinkleliai, lygiai, koordinatės, profiliai, skylės ir visi eksportai. Profilių pavadinimai išlaiko paskelbtą formą (W12x50 yra JAV žymėjimas, nors matmenys rodomi mm). Imperinių vienetų įvedimo kol kas nėra.

## Prisijungus ir neprisijungus

Atidarymas, įrašymas ir eksportavimas vyksta jūsų naršyklėje, todėl veikia vienodai su ryšiu ar be jo, kai DetailCraft jau įkeltas.

Norėdami vėliau naudoti DetailCraft be ryšio, būdami prisijungę, programos juostoje pasirinkite {{ui:Įrašyti neprisijungus}}. Mygtukas skaičiuoja („Įrašoma 3 iš 20“), o tada rodo {{ui:Paruošta neprisijungus}}. Įrašytoje kopijoje yra 3D grafikos biblioteka (apie 2,6 MB) ir šis žinynas, todėl išsaugojus 3D vaizdas, visi eksportai ir žinynas veikia be ryšio. Išsamiau ir apie tai, kam ryšys vis dar reikalingas: [Darbas neprisijungus](common:offline).

:::offline
Esate neprisijungę. Jei programos juostoje rodoma {{ui:Paruošta neprisijungus}}, atidarymas, įrašymas ir eksportavimas veikia įprastai. Jei ne, palikite šį skirtuką atidarytą, neperkraukite jo, kol neprisijungsite, ir dabar įrašykite modelį.
:::

Debesies įrašymas dar neprieinamas, o darbalaukio versijų dar nėra. Atsargines `.detailcraft.json` kopijas kurkite taip, kaip kuriate bet kokius kitus darbo failus. Daugiau: [Kur keliauja jūsų failai](common:your-files).

## Neįrašytas darbas

DetailCraft modelį laiko tik atidarytame skirtuke. Jei uždarote ar perkraunate skirtuką su neįrašytais pakeitimais, naršyklė klausia, ar palikti puslapį; jos tekstas yra naršyklės. Dažnai įrašykite su {{key:Mod+S}}.
