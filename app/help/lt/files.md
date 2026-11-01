---
title: Failų atidarymas, įrašymas ir eksportas
summary: DetailCraft modelio failas, kiekvienas jo įrašomas eksportas, kur failai patenka ir kuo skiriasi naršyklės bei ryšys.
keywords: atidaryti, įrašyti, eksportuoti, atsisiųsti, failas, json, ifc, nc1, dstv, csv, pdf, zip, formatai, importuoti
from: bd715ea3
---

DetailCraft turi vieną savo failą – modelį – ir penkis eksportus. Kiekvienas įrašymas ir kiekvienas eksportas yra atsisiuntimas. Nieko neįkeliama ir nieko nesaugoma serveryje.

## Modelio failas

DetailCraft modelis įrašomas kaip `<name>.detailcraft.json`, kur `<name>` yra modelio pavadinimas {{ui:Modelis}} skydelyje. Jame saugomi tinkleliai, lygiai, elementai (su jų skylėmis ir iškirpimais), jungtys ir jų nustatymai, pamatai bei jūsų pasirinktiniai profiliai.

Detalės, žymenys, varžtai, suvirinimai ir strypai nėra saugomi: DetailCraft juos iš naujo apskaičiuoja iš modelio kiekvieną kartą, kai modelis atidaromas. Todėl modelio failas yra mažas.

### Įrašymas

1. Įveskite pavadinimą laukelyje {{ui:Pavadinimas}}, esančiame viršutinėje {{ui:Modelis}} skydelio dalyje.
2. Pasirinkite {{ui:Įrašyti}} grupėje {{ui:Failas}} arba paspauskite {{key:Mod+S}}.
3. Naršyklė atsisiunčia `<name>.detailcraft.json`. Būsenos juostoje rašoma „Įrašyta … (atsisiųsta)“, o taškas prieš naršyklės skirtuko pavadinimą dingsta.

Kiekvienas įrašymas – tai naujas atsisiuntimas. Naršyklė neperrašo atidaryto failo: pagal savo nustatymus ji prideda numerį, pavyzdžiui `Frame (1).detailcraft.json`, arba klausia, kur įrašyti. Norėdami išsaugoti savo versijas, atsisiuntimus pervardykite.

:::chromium
Chrome ir Edge failus įrašo į jūsų aplanką Atsisiuntimai, nebent naršyklės atsisiuntimo nustatymuose įjungta parinktis „Klausti, kur įrašyti kiekvieną failą prieš atsisiunčiant“. Įjunkite ją, jei norite kiekvieną kartą pasirinkti aplanką ir failo pavadinimą.
:::

:::firefox
Firefox failus įrašo į jūsų aplanką Atsisiuntimai arba klausia kiekvieną kartą, jei jo nustatymuose įjungta parinktis „Visada klausti, kur įrašyti failus“.
:::

:::safari
Safari failus įrašo į jūsų aplanką Atsisiuntimai. Aplanką pakeisti galima atidarius **Safari, Parametrai, Bendra, Failų atsisiuntimo vieta**.
:::

### Atidarymas

1. Pasirinkite {{ui:Atidaryti}} grupėje {{ui:Failas}} arba paspauskite {{key:Mod+O}}.
2. Pasirinkite `.detailcraft.json` failą.

Arba nutempkite failą iš {{pick:mac=Finder|windows=Failų naršyklė|linux=jūsų failų tvarkyklė}} ir paleiskite jį ant vaizdo. Kol tempiate, vaizde rašoma „Nuvilkite DetailCraft modelį, kad jį atidarytumėte“.

Jei atidaromame modelyje yra neįrašytų pakeitimų, DetailCraft pirmiausia klausia: {{ui:Atšaukti}}, {{ui:Atmesti pakeitimus}} arba {{ui:Pirmiausia įrašyti}}.

DetailCraft patikrina kiekvieną failo lauką prieš jį naudodamas. Ką nepavyksta panaudoti, praleidžiama, o būsenos juostoje parašoma, kas tai ir kodėl, pavyzdžiui „2 elementai buvo netinkami ir praleisti.“ Modelis, įrašytas naujesne DetailCraft versija, atmetamas su pranešimu, o ne atidaromas pusiau teisingai.

### Ką jis atidaro

Savo modelių failus (`.json`, iki 50 MB) ir IFC failus (`.ifc`, IFC2X3 arba IFC4, iki 200 MB). IFC failas, atidarytas arba įkeltas per {{ui:Importuoti IFC}}, tampa nauju modeliu su savo sijomis, kolonomis, elementais, plokštėmis, tinkleliais ir lygiais; skylės ir iškirpimai į juos įpjaunami, o jo varžtai tampa laisvais varžtais. Ataskaita išvardija, kas buvo praleista. Žr. [IFC eksportavimas](topic:ifc-export#import). DWG, DXF ar kitų detalizavimo programų modelių kol kas neatidaro; bandant rodoma: „DetailCraft atidaro savo modelius (.detailcraft.json) ir IFC failus (.ifc).“

## Prarasti darbai, neseniai naudoti failai, darbalaukio programa

- Kol modelyje yra neįrašytų pakeitimų, DetailCraft laiko jo kopiją šioje naršyklėje. Jei skirtukas ar naršyklė sustoja prieš įrašant, kitą kartą atidarius DetailCraft bus klausiama **Atkurti jūsų darbą?**: atkurti kopiją arba ją atmesti. Žr. [Atkurti jūsų darbą](common:recover).
- Modeliai, kuriuos neseniai atidarėte, rodomi pradžios ekrane, kai naršyklė leidžia DetailCraft juos vėl atidaryti; spustelėkite vieną, kad jį atidarytumėte iš naujo.
- Darbalaukio programoje {{ui:Įrašyti}} įrašo modelį atgal į failą, kurį atidarėte (naršyklėje atsisiunčiama kopija), o dukart spustelėjus DetailCraft modelį arba IFC failą, jis atidaromas DetailCraft.

## Eksportai

Visi eksportai naudoja modelio pavadinimą. Pasirenkami grupėje {{ui:Išvestis}}.

| Mygtukas | Failas | Kas jame |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: aukštai, tinkleliai, kiekviena plieninė detalė kaip profilio ištrauka su skylėmis ir iškirpimais, surinkimai, varžtai ir inkariniai strypai, pamatai ir visi armatūros strypai. Žr. [Eksportuoti IFC](topic:ifc-export). |
| {{ui:NC failai}} | `<name> NC.zip` | Vienas DSTV `.nc1` failas kiekvienam elemento žymeniui. Žr. [Siųsti NC failus į dirbtuves](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Trys lentelės viename faile: detalės, surinkimai, varžtai ir inkariniai strypai. Žr. [Žymenys ir medžiagų sąrašas](topic:marks-and-bom). |
| {{ui:Lenkimas}} | `<name> bending schedule.csv` | Kiekvienas armatūros strypo žymuo pamatuose. Žr. [Pamatai ir armatūra](topic:footings-and-rebar). |
| {{ui:Dirbtuvių brėžinys}} | `<name> <mark>.pdf` | Vienas lapas (A3, nebent pasirinkote kitą dydį) pažymėtai detalei (I formos profiliams ir plokštėms). Žr. [Sukurti dirbtuvių brėžinį](topic:shop-drawings). |
| {{ui:Brėžiniai}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` arba `.dxf`, keli viename `<name> drawings DWG.zip` (arba `DXF.zip`) | Planai, fasadai ir surinkimo brėžiniai pasirinktu lapo dydžiu; DWG ir DXF – pilnu mastu, 1 vienetas = 1 mm popieriuje. Žr. [Bendrieji planai ir surinkimo brėžiniai](topic:drawings). |

### CSV failų pastabos

- Jie prasideda baito eilės žyma, kad skaičiuoklių programos teisingai nuskaitytų raides su diakritiniais ženklais.
- Langelis, prasidedantis `=`, `+`, `-` arba `@` (ir nėra paprastas skaičius), gauna pirmą apostrofą, kad skaičiuoklė jo niekada nevykdytų kaip formulės.
- Ilgiai pateikiami milimetrais, svoriai – kilogramais.

### PDF pastabos

PDF tekste naudojamas standartinis Helvetica šriftas. Simboliai, kurių jame nėra (už Vakarų Europos rinkinio ribų), spausdinami kaip „?“, o būsenos juostoje parodoma, kiek jų buvo.

## Vienetai

DetailCraft visur dirba milimetrais: tinkleliai, lygiai, koordinatės, profiliai, skylės ir visi eksportai. Profilių pavadinimai išlieka paskelbta forma (W12x50 yra JAV žymėjimas, nors matmenys rodomi mm). Imperinių vienetų įvedimo dar nėra.

## Darbas neprisijungus

Atidarymas, įrašymas ir eksportavimas vyksta jūsų naršyklėje, todėl jie veikia vienodai su ryšiu ir be jo, kai DetailCraft jau įkeltas.

Norėdami vėliau naudoti DetailCraft be ryšio, būdami prisijungę, programos juostoje spustelėkite {{ui:Įrašyti neprisijungus}}. Mygtukas rodo progresą („Įrašoma 3 iš 20“) ir tada parodo {{ui:Paruošta neprisijungus}}. Išsaugotoje kopijoje yra 3D grafikos biblioteka (apie 2,6 MB) ir šis žinynas, todėl, kai ji išsaugota, 3D vaizdas, visi eksportai ir žinynas veikia be ryšio. Išsamiau, ir tai, kam vis dar reikia ryšio: [Darbas neprisijungus](common:offline).

:::offline
Jūs esate neprisijungę. Jei programos juostoje rodoma {{ui:Paruošta neprisijungus}}, atidarymas, įrašymas ir eksportavimas veikia įprastai. Jei ne, palikite šį skirtuką atidarytą, neperkraukite jo, kol nesugrįšite prie ryšio, ir dabar įrašykite modelį.
:::

Debesies saugojimas dar nepasiekiamas, o darbalaukio versijų dar nėra. Atsargines `.detailcraft.json` failų kopijas kurkite taip, kaip kurdami bet kurį kitą darbo failą. Daugiau: [Kur saugomi jūsų failai](common:your-files).

## Neįrašytas darbas

DetailCraft modelį saugo tik atidarytame skirtuke. Jei uždarote arba perkraunate skirtuką su neįrašytais pakeitimais, naršyklė klausia, ar palikti puslapį; jos tekstas yra pačios naršyklės. Dažnai įrašykite su {{key:Mod+S}}.
