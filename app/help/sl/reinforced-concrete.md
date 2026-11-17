---
title: Podrobno izdelajte armirane betonske nosilce, stebre, plošče in stene
summary: Dodajajte betonske nosilce, stebre, plošče in stene po mreži, jim dodelite palice, stremena in vezi, preverite preklope in sidranje po ACI 318-19 ali EN 1992-1-1 ter izdelajte delavniške risbe in armaturne izvlečke.
keywords: armirani beton, armatura, armiranje, nosilec, steber, plošča, stena, stremena, vezi, kljuke, preklop, dolžina preklopa, sidranje, dolžina razvitja, ld, ldh, lbd, zaščitni sloj, razmik, obrobne palice, odprtine, mreže, oznake palic, izvleček armature, bbs, delavniška risba, ACI 318, EN 1992, Evrokod 2, IfcReinforcingBar, uvoz IFC
from: 3835b7ec
---

Zavihek {{ui:Beton}} pod pogledom podrobno prikazuje palice betonskih nosilcev, stebrov, plošč in sten. Vi določite velikosti in palice; DetailCraft postavi vsako palico, jo oštevilči, preveri preklope, sidranje, zaščitni sloj in razmik glede na klavzulo, iz katere izhajajo, ter jo nariše.

:::warning
DetailCraft podrobno prikaže palice, ki jih vnesete. Ne projektira jih. Vsak rezultat je namenjen preverjanju s strani inženirja.
:::

## Odprite zavihek Beton

Izberite zavihek {{ui:Beton}} pod pogledom. V postavitvi s trakom je {{ui:Beton}} v zavihku {{ui:Modeliranje}} poleg {{ui:Temeljna stopa}}. S slogom risanja z ukazno vrstico vnesite {{cmd:CONCRETE}}.

## Dodajte element po mreži

Betonski elementi so postavljeni na črte mreže in nivoje modela, zato jih najprej nastavite (levo podokno).

1. V {{ui:Dodaj po mreži}} izberite {{ui:Element}}: {{ui:Betonski nosilec}}, {{ui:Betonski steber}}, {{ui:Plošča}} ali {{ui:Stena}}.
2. Izberite črte mreže in nivoje:
   - nosilec teče od enega presečišča mreže do drugega, njegov vrh je na nivoju;
   - steber stoji na presečišču, od enega nivoja do drugega;
   - plošča zapolni pravokotnik med dvema oštevilčenima in dvema črkovnima črtama mreže, njen vrh je na nivoju;
   - stena teče vzdolž svoje središčnice od enega presečišča do drugega, od enega nivoja do drugega.
3. Vnesite velikost in izberite {{ui:Dodaj}}. Element je izbran, njegova polja pa se odprejo v podoknu {{ui:Lastnosti}}.

Vsak element se začne s palicami, ki so začetne vrednosti, ne projekt: spremenite jih v skladu z inženirjevimi.

## Spremenite palice

Izberite element (v pogledu ali njegovo ime v zavihku {{ui:Beton}}). Podokno {{ui:Lastnosti}} prikaže:

| Element | Kaj nastavite |
|---|---|
| Nosilec | Širina, višina, prosti zaščitni sloj; zgornje in spodnje palice (velikost, število, ravna ali 90° kljuka na koncih); stranske palice; stremena (velikost, kljuke 135° ali 90°, razdalja prvega od lica podpore, dolžina in razmik končnega območja, razmik med njimi); dolžine podpor; dolžine preklopov |
| Steber | Širina, globina v prečni smeri, zasuk, zaščitni sloj; vzdolžne palice na vsaki ploskvi; vezi kot pri stremenih; kaj palice naredijo na vrhu (preklop s stebrom nad njim, kljuka v tla ali konec) |
| Plošča | Debelina, velikost, zgornji sloj, zaščitni sloji; spodnja in zgornja mreža v obeh smereh (velikost in razmik); U-palice okoli robov; obrobne palice; odprtine |
| Stena | Debelina, zaščitni sloj, ena ali dve plasti, vodoravne in navpične palice, U-palice na koncih, navpične palice s preklopom navzgor ali brez, obrobne palice, odprtine |

Vsaka sprememba je en korak razveljavitve. Sprememba, ki je ni mogoče izvesti, je zavrnjena, vrstica stanja pa pove zakaj, na primer „Odprtina ne sodi v element skupaj z zaščitnim slojem.“

Stremena in vezi so zaprti, obe kljuki sta na enem vogalu. Palice nosilca na njegovih koncih segajo v betonski steber do oddaljene ploskve stebra minus zaščitni sloj; kjer stebra ni, vnesite {{ui:Dolžina podpore na začetku (mm)}} in na koncu.

## Preklopi in sidranje

Palice, daljše od {{ui:Standardna dolžina palice (mm)}} (sprva 12000), so razrezane na kose enake dolžine, preklopljene. Tabela {{ui:Preklopi in sidranje}} navaja vsak preklop in vsako sidranje: kaj je potrebno, s klavzulo in njenimi pogoji, ter kaj ima detajl.

- Dolžina preklopa 0 pomeni „po potrebi“: dolžina, ki jo določa predpis, zaokrožena navzgor na 25 mm.
- Vpišite svojo dolžino preklopa, da jo uporabite namesto nje. Če je krajša od potrebne, je to težava (glejte spodaj) in je v tabeli označena z *.
- Sidranje se meri od lica podpore do konca palice znotraj podpore. Nosilec brez znane podpore to pove, namesto da bi ga preverjal.
- Steber, ki stoji na temelju, se preklopi s čakalnimi palicami temelja, na drugem stebru pa s palicami tega stebra; tudi njun preklop je preverjen.

**ACI 318-19** (SI): natezne ravne palice 25.4.2.3 (tabela, s ψt, ψe, ψg, λ), standardne kljuke 25.4.3.1 (ψr 1.6 in ψo 1.25, razen če ni znano drugače), tlačne palice 25.4.9.2, natezni preklopi 25.5.2.1 (razred B ali razred A v nastavitvah), tlačni preklopi 25.5.5.1.

**EN 1992-1-1**: sidranje 8.4.4 s fbd iz 8.4.2 (dober ali slab oprijem), preklopi 8.7.3 z α6 za vsako palico, preklopljeno na enem prerezu. γc, γs in αct začnejo pri priporočenih vrednostih; nastavite vrednosti svojega nacionalnega dodatka.

## Preverjanja

Vsako neuspelo preverjanje je v podoknu Težave v lupini (vir {{ui:Preverjanja armature}}) in na seznamu {{ui:Preverjanja}} elementa:

| Preverjanje | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Zaščitni sloj | Tabela 20.5.1.3.1, glede na izpostavljenost | Najmanjši za oprijem, tabela 4.2 (zaščitni sloj zaradi trajnosti vnesete vi) |
| Prosti razmik palic | 25.2.1 (nosilci, plošče, stene), 25.2.3 (stebri) | 8.2 (2) |
| Razmik stremen | 9.7.6.2.2 | 9.2.2 (6) |
| Najmanjša armatura nosilca | 9.6.1.2 | 9.2.1.1 (1) |
| Stranske palice nosilca, globlje od 900 mm | 9.7.2.3 | ni preverjeno |
| Delež jekla stebra, število palic | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Vezi: razmik, velikost, prečne vezi | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Razmik plošče, najmanjša armatura | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Razmik sten, najmanjša armatura, dve plasti | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Preklopi, sidranje | kot zgoraj | kot zgoraj |

Velikost agregata ni znana, zato se prosti razmik preveri brez nje.

## Odprtine, obrobne palice in robne palice

Izberite {{ui:Dodaj odprtino}} pod izbrano ploščo ali steno in nastavite, kje je in kakšna je. Palice, ki jih prečka, se ustavijo na zaščitnem sloju od njenega roba. Obrobne palice se dodajo na vsaki strani, v isti plasti, in nosijo polovico površine prekinjenih palic, z eno dolžino sidranja čez odprtino. To je začetno pravilo DetailCraft, ne klavzula predpisa: {{ui:Obrobne palice}} spremenite v tiste, ki jih določi inženir. Vogalne palice se ne dodajo.

U-palice okoli prostih robov plošče in na koncih stene imajo kraka, dolga eno dolžino preklopa.

## Oznake palic in armaturni izvleček

Enake palice imajo skupno oznako: temelji ohranijo oznake F (5F1), nosilci dobijo B, stebri C, plošče S in stene W (7B1, 8C1, 4S2). Zavihek {{ui:Armaturni izvleček}} in njegov CSV zdaj navajata vsako palico konstrukcije, najprej temelje. {{ui:Izhod}} › {{ui:Več}} › {{ui:Krivljenje}} ga prenese.

## Delavniške risbe

Izberite {{ui:Izhod}} › {{ui:Več}} › {{ui:Armaturne risbe}}, {{ui:Armaturne risbe}} v zavihku {{ui:Beton}} ali {{ui:Delavniška risba}} ob enem elementu. Vsak element dobi list s pogledom (pri plošči tloris), ki prikazuje vsako palico in njeno oznako, cone stremen ali vezi in kotirane preklope, ter prerez na sredini. Nato izvlečki armature navajajo vsako oznako s skico njene oblike, njenimi merami, številom, dolžino reza in težo.

Listi se iz modela izdelajo vsakič znova in ponovno po vsaki spremembi, dokler je okno odprto: glava risbe nosi sklic na model. Shranite {{ui:Ta list kot PDF}} ali {{ui:Vsi listi kot PDF}}.

## Palice iz datoteke IFC

{{ui:Datoteka}} › {{ui:Uvozi IFC}} zdaj bere IfcReinforcingBar: krožni prerez, zamaknjen vzdolž središčnice, se vrne kot ravni kraki in upogibi, z njegovim premerom, oznako in elementom, ki ga drži. Palice se ohranijo, kot so bile prebrane (ne spremenijo se v pravila nosilca ali plošče), prikažejo se v pogledu, navedejo v armaturnem izvlečku in se ob izvozu IFC znova zapišejo. Poročilo o uvozu pove, koliko palic je bilo prebranih, katerih velikosti, v koliko elementih ter kaj je bilo izpuščeno in zakaj.

Nosilec, steber, plošča ali stena iz te datoteke, ki vsebuje palice ali katere material je beton, se ne vzame za jeklo; poročilo to navede. Lastni izvoz IFC iz DetailCraft nosi definicijo vsakega betonskega elementa, zato se vrne kot sam sebe, njegove palice pa se iz nje znova ustvarijo.

:::note
Branje lastnih datotek konstrukcijskega programa (ne IFC) še ni izdelano: iz njega izvozite IFC.
:::

## Izvoz IFC

Betonski nosilci, stebri, plošče (z odprtinami) in stene gredo ven kot IfcBeam, IfcColumn, IfcSlab in IfcWall; vsak ima svoje palice kot IfcReinforcingBar (glavne palice, ligature za stremena in vezi, robne palice), združene vanj. Vsaka palica je krožni prerez vzdolž središčnice s pravimi loki na upogibih, z oznako in dolžino reza.
