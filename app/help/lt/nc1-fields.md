---
title: NC failo laukai
summary: Ką DetailCraft įrašo į kiekvieną DSTV NC failą, lauką po lauko, ir kaip matuojami paviršiai bei koordinatės.
keywords: nc1, dstv, nc failas, ST blokas, ak, bo, antraštė, paviršiai, koordinatės, cnc, formatas
from: 1b676fc1
---

Kiekvienas `.nc1` failas aprašo vieną detalės žymę. Eilutės baigiasi CR LF. Tekstiniuose laukuose naudojami tik paprasti ASCII simboliai; kiti simboliai pakeičiami į „?“. Antroji eilutė yra komentaras: `** DetailCraft <mark>.nc1`.

## Antraštė (ST)

| Laukas | I formos, kanalas | Kampuotinis | Stačiakampis HSS | Apvalus HSS | Plokštė |
|---|---|---|---|---|---|
| Užsakymas | Modelio pavadinimas | ← | ← | ← | ← |
| Brėžinys, detalė | Detalės žymė | ← | ← | ← | ← |
| Etapas | Detalės etapas arba 1 | ← | ← | ← | ← |
| Plieno kokybė | Plieno markė | ← | ← | ← | ← |
| Kiekis | Detalių su šia žyme skaičius | ← | ← | ← | ← |
| Profilis | Profilio pavadinimas, pavyzdžiui W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profilio kodas | I arba U (kanalas) | L | M | RO | B |
| Ilgis | Pjovimo ilgis | ← | ← | ← | Ilgis |
| Aukštis | Gylis d | Briauna | Aukštis | Skersmuo | Plokštės plotis |
| Diržo plotis | bf | Briauna | Plotis | Skersmuo | 0 |
| Diržo storis | tf | t | Sienelės t | Sienelės t | 0 |
| Sienelės storis | tw | t | Sienelės t | Sienelės t | Plokštės storis |
| Spindulys | Suapvalinimo spindulys (0 AISC kanalams) | 0 | Išorinio kampo spindulys | 0 | 0 |
| Masė metrui | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Dažomas paviršius metrui | Išorinis perimetras, m²/m | ← | ← | ← | 2 (abu paviršiai, m²/m²) |
| Pjovimo kampai (4 laukai) | 0 (statmena) | ← | ← | ← | ← |
| Teksto laukai (4) | `-` | ← | ← | ← | ← |

Plokštės atitinka standarto stulpelį „lakštams“. Standartas neturi stulpelio apvaliems vamzdžiams: DetailCraft rašo skersmenį tiek kaip aukštį, tiek kaip diržo plotį, o sienelę – kaip abu storius.

## Išoriniai kontūrai (AK)

- **I formos ir kanalai:** sienelė (v), su stačiakampe išpjova kiekvienai išpjovai; kiekvienas diržas (o ir u), sutrumpintas gale, kur išpjova yra bent tokia gili kaip diržas.
- **Stačiakampis HSS:** abi šoninės sienelės (v ir h), išpjautos išpjovoms, ir viršutinė bei apatinė sienelės (o ir u).
- **Kampuotiniai:** po vieną stačiakampį kiekvienai briaunai (v ir u). Išpjovos kampuotiniuose neįrašomos: tokia detalė išvardijama kaip neįrašyta. Įstrižainė kampuotinis, prisuktas prie [jungiamosios plokštės](topic:brace-gussets), turi skyles prisuktoje briaunoje: v – briaunai išilgai detalės u, u – briaunai išilgai detalės v.
- **Apvalus HSS:** vienas stačiakampis ant v, vamzdis matomas iš priekio (ilgis × skersmuo).
- **Plokštės:** vienas stačiakampis ant paviršiaus v.

Kiekvienas kontūras uždaras (pirmasis taškas pakartojamas gale) ir eina prieš laikrodžio rodyklę.

## Skylės (BO)

Viena eilutė kiekvienai skylei: paviršius, x, y, skersmuo, gylis 0 (per visą). Įtraukiamos visos skylės: tos, kurias įvedėte, ir tos, kurias padarė jungtys. Skylė per stačiakampio HSS šonines sieneles įrašoma du kartus: vieną kartą ant v, vieną kartą – ant h.

## Paviršiai ir koordinatės

Kiekvienas profilis išdėstomas taip, kaip jį vaizduoja standarto profilio padėčių schema (DSTV 1998, p. 7): x – išilgai detalės, Y – skersai, Z – aukštyn nuo galinio paviršiaus, o nulinis taškas yra išoriniame kampe. DetailCraft detalės niekada neatspindi, kad ji atitiktų schemą.

| Paviršius | I forma | Kanalas | Kampuotinis | Stačiakampis HSS | Plokštė |
|---|---|---|---|---|---|
| v | Sienelė, priekis | Sienelė, žiūrint iš kanalo kraštelių pusės | Briauna išilgai detalės u | Šoninė sienelė ties −u | Plokštės paviršius |
| h | | | | Šoninė sienelė ties +u | |
| o | Viršutinis diržas | **Apatinis** diržas | | Viršutinė sienelė | |
| u | Apatinis diržas | **Viršutinis** diržas | Briauna išilgai detalės v | Apatinė sienelė | |

- **x** eina išilgai detalės nuo jos pjovimo pradžios.
- **I formos ir stačiakampiai HSS:** y sienelėje ar šoninėse sienelėse matuojamas nuo profilio apatinės pusės; y diržui arba viršutinei ir apatinei sienelei matuojamas nuo jo krašto galinėje pusėje (detalės +u pusėje).
- **Kanalai** guli ant nugaros, kraštelius pakėlę aukštyn, kaip standarto schemoje. Taigi y sienelėje eina nuo viršutinio diržo išorės žemyn, viršutinis diržas yra paviršius u, o apatinis – paviršius o, o y diržui eina nuo sienelės nugaros link kraštelio.
- **Kampuotiniai:** y kiekvienai briaunai matuojamas nuo kulno.
- **Plokštės:** y matuojamas nuo plokštės krašto −u.

Prieš pjaudami patikrinkite, kaip jūsų staklių programinė įranga skaito kanalų paviršius: kai kurios programos kanalus pasuka kitaip.

## Neįrašoma

Nuožulnos, vidiniai kontūrai, žymėjimai (SI), pjovimo kampai, kitokie nei statūs, ilgosios skylės, skylės apvaliuose vamzdžiuose (DetailCraft jų neturi) ir išpjovos kampuotiniuose bei apvaliuose vamzdžiuose.
