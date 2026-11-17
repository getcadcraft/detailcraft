---
title: Detaljisanje armiranog betona: grede, stubovi, ploče i zidovi
summary: Dodajte betonske grede, stubove, ploče i zidove po mreži, dodajte im šipke, uzengije i spone, provjerite preklope i sidrenje prema ACI 318-19 ili EN 1992-1-1, te napravite radioničke crteže i listove za savijanje šipki.
keywords: armirani beton, armatura, armiranje, greda, stub, ploča, zid, uzengije, spone, kuke, preklopi, sidrenje, dužina razvoja, ld, ldh, lbd, zaštitni sloj, razmak, okvirne šipke, otvori, mreže, oznake šipki, spisak savijanja, bbs, radionički crtež, ACI 318, EN 1992, Eurokod 2, IfcReinforcingBar, uvoz IFC
from: 3835b7ec
---

Kartica {{ui:Beton}} ispod prikaza detaljno opisuje šipke betonskih greda, stubova, ploča i zidova. Vi zadajete dimenzije i šipke; DetailCraft postavlja svaku šipku, numeriše je, provjerava preklope, sidrenje, zaštitni sloj i razmak prema klauzuli iz koje dolaze, i crta je.

:::warning
DetailCraft detaljiše šipke koje mu zadate. Ne proračunava ih. Svaki rezultat treba da provjeri inženjer.
:::

## Otvorite karticu Beton

Izaberite karticu {{ui:Beton}} ispod prikaza. U rasporedu s trakom, {{ui:Beton}} je u kartici {{ui:Modeliranje}} pored {{ui:Temelj}}. Sa komandnom linijom stila crtanja upišite {{cmd:CONCRETE}}.

## Dodajte element po mreži

Betonski elementi se postavljaju na linije mreže i nivoe modela, pa ih prvo podesite (lijevi panel).

1. U {{ui:Dodaj po mreži}} izaberite {{ui:Element}}: {{ui:Betonska greda}}, {{ui:Betonski stub}}, {{ui:Ploča}} ili {{ui:Zid}}.
2. Izaberite linije mreže i nivoe:
   - greda ide od jednog presjeka mreže do drugog, a njen vrh je na nivou;
   - stub stoji na presjeku, od jednog nivoa do drugog;
   - ploča popunjava pravougaonik između dvije linije mreže s brojevima i dvije s slovima, a vrh joj je na nivou;
   - zid ide duž svoje središnje linije od jednog presjeka do drugog, od jednog nivoa do drugog.
3. Zadajte veličinu i izaberite {{ui:Dodaj}}. Element je izabran, a njegova polja se otvaraju u panelu {{ui:Svojstva}}.

Svaki element počinje sa šipkama koje su početne vrijednosti, a ne proračun: promijenite ih na one koje odredi inženjer.

## Promijenite šipke

Izaberite element (u prikazu ili po njegovom nazivu u kartici {{ui:Beton}}). Panel {{ui:Svojstva}} prikazuje:

| Element | Šta postavljate |
|---|---|
| Greda | Širinu, dubinu, čist zaštitni sloj; gornje i donje šipke (veličina, broj, ravna ili kuka od 90° na krajevima); bočne šipke; uzengije (veličina, kuke od 135° ili 90°, razmak prve od lica oslonca, dužina i razmak krajnje zone, razmak između); dužine oslonca; dužine preklopa |
| Stub | Širinu, dubinu preko, rotaciju, zaštitni sloj; uzdužne šipke na svakoj strani; vezice kao i uzengije; šta šipke rade na vrhu (preklop sa stubom iznad, kuka u ploču ili prekid) |
| Ploča | Debljinu, veličinu, gornju, zaštitne slojeve; donja mreža i gornja mreža u svakom smjeru (veličina i razmak); U-šipke oko ivica; {{ui:Okvirne šipke}}; otvori |
| Zid | Debljinu, zaštitni sloj, jedan ili dva sloja, horizontalne i vertikalne šipke, U-šipke na krajevima, vertikalne šipke s preklopom iznad ili bez njega, okvirne šipke, otvori |

Svaka promjena je jedan korak poništavanja. Promjena koja se ne može izvesti se odbija, a statusna traka kaže zašto, na primjer: „Otvor ne staje unutar elementa sa svojim zaštitnim slojem.“

Uzengije i vezice su zatvorene, s obje kuke u jednom uglu. Šipke grede ulaze u betonski stub na svojim krajevima do dalje strane stuba umanjene za zaštitni sloj; gdje stuba nema, zadajte {{ui:Dužina oslonca na početku (mm)}} i dužinu na kraju.

## Preklopi i sidrenje

Šipke duže od {{ui:Standardna dužina šipke (mm)}} (12000 za početak) sijeku se na komade jednake dužine, uz preklop. Tabela {{ui:Preklopi i sidrenje}} navodi svaki preklop i svako sidrenje: šta je potrebno, s klauzulom i njenim uslovima, i šta detalj ima.

- Dužina preklopa 0 znači „kako treba“: dužina koju daje propis, zaokružena naviše na 25 mm.
- Upišite svoju dužinu preklopa da je koristite umjesto nje. Ako je kraća nego što treba, to je problem (vidi niže), i označena je * u tabeli.
- Sidrenje se mjeri od lica oslonca do kraja šipke unutar oslonca. Greda bez poznatog oslonca to kaže umjesto da je provjerava.
- Stub koji stoji na temelju preklapa se s polaznim šipkama temelja, a stub na drugi stub s šipkama tog stuba: i taj preklop se provjerava.

**ACI 318-19** (SI): ravne šipke u zatezanju 25.4.2.3 (tabela, s ψt, ψe, ψg, λ), standardne kuke 25.4.3.1 (ψr 1.6 i ψo 1.25 uzeti osim ako nisu poznati), šipke u pritisku 25.4.9.2, preklopi u zatezanju 25.5.2.1 (klasa B, ili klasa A u postavkama), preklopi u pritisku 25.5.5.1.

**EN 1992-1-1**: sidrenje 8.4.4 uz fbd iz 8.4.2 (dobra ili loša veza), preklopi 8.7.3 uz α6 za svaku šipku preklopljenu u jednom presjeku. γc, γs i αct počinju s preporučenim vrijednostima; postavite vrijednosti vašeg nacionalnog aneksa.

## Provjere

Svaka provjera koja ne prođe nalazi se na panelu {{ui:Problemi}} (izvor {{ui:Provjere armature}}) i u listi {{ui:Provjere}} elementa:

| Provjera | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Zaštitni sloj | Tabela 20.5.1.3.1, prema izloženosti | Minimum veze, Tabela 4.2 (zaštitni sloj za trajnost zadajete vi) |
| Čist razmak šipki | 25.2.1 (grede, ploče, zidovi), 25.2.3 (stubovi) | 8.2 (2) |
| Razmak uzengija | 9.7.6.2.2 | 9.2.2 (6) |
| Minimalni čelik grede | 9.6.1.2 | 9.2.1.1 (1) |
| Bočne šipke grede dublje od 900 mm | 9.7.2.3 | nije provjereno |
| Odnos čelika stuba, broj šipki | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Vezice: razmak, veličina, poprečne veze | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Razmak ploče, minimalni čelik | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Razmak zida, minimalni čelik, dva sloja | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Preklopi, sidrenje | kao gore | kao gore |

Veličina agregata nije poznata, pa se čist razmak provjerava bez nje.

## Otvori, okvirne šipke i ivične šipke

Izaberite {{ui:Dodaj otvor}} ispod izabrane ploče ili zida i postavite gdje je i kolika je veličina. Šipke koje presijeca završavaju na zaštitnom sloju od njegove ivice. Okvirne šipke se dodaju sa svake strane, u istom sloju, nose polovinu površine presječenih šipki i sežu jednu dužinu sidrenja iza otvora. To je početno pravilo DetailCraft-a, a ne klauzula propisa: promijenite {{ui:Okvirne šipke}} na one koje odredi inženjer. Ugaone šipke se ne dodaju.

U-šipke oko slobodnih ivica ploče i na krajevima zida imaju krakove dugačke jednu dužinu preklopa.

## Oznake šipki i spisak savijanja

Identične šipke dijele jednu oznaku: temelji zadržavaju oznake F (5F1), grede dobijaju B, stubovi C, ploče S, a zidovi W (7B1, 8C1, 4S2). Kartica {{ui:Spisak savijanja}} i njen CSV sada navode svaku šipku konstrukcije, prvo temelje. {{ui:Izlaz}} › {{ui:Više}} › {{ui:Savijanje}} preuzima je.

## Radionički crteži

Izaberite {{ui:Izlaz}} › {{ui:Više}} › {{ui:Crteži armature}}, {{ui:Crteži armature}} u kartici {{ui:Beton}}, ili {{ui:Radionički crtež}} pored jednog elementa. Svaki element dobija list s izgledom (za ploču osnovu) koji prikazuje svaku šipku i njenu oznaku, zone uzengija ili spona i kotirane preklope, te presjek na sredini. Zatim listovi za savijanje šipki navode svaku oznaku sa skicom njenog oblika, dimenzijama, brojem, dužinom reza i težinom.

Listovi se prave iz modela svaki put, i ponovo nakon svake promjene dok je prozor otvoren: naslovni blok nosi referencu modela. Spasi {{ui:Ovaj list kao PDF}} ili {{ui:Svi listovi kao PDF}}.

## Šipke iz IFC datoteke

{{ui:Datoteka}} › {{ui:Uvezi IFC}} sada čita IfcReinforcingBar: disk provučen duž njegove središnje linije vraća se kao ravni kraci i savijanja, s prečnikom, oznakom i elementom koji ga drži. Šipke se čuvaju onako kako su pročitane (ne pretvaraju se u pravila grede ili ploče), prikazuju se u prikazu, navode se u spisku savijanja i ponovo se izvoze s IFC izvozom. Izvještaj o uvozu kaže koliko je šipki pročitano, kojih veličina, u koliko elemenata, i šta je izostavljeno i zašto.

Greda, stub, ploča ili zid iz te datoteke koji sadrži šipke ili čiji je materijal beton ne uzima se kao čelik; izvještaj to navodi. DetailCraft-ov vlastiti IFC izvoz nosi definiciju svakog betonskog elementa, pa se vraća kao on sam, a njegove šipke se ponovo prave iz nje.

:::note
Čitanje sopstvenih datoteka nekog programa za projektovanje konstrukcija (a ne IFC) nije izgrađeno: izvezite IFC iz tog programa.
:::

## IFC izvoz

Betonske grede, stubovi, ploče (s otvorima) i zidovi izlaze kao IfcBeam, IfcColumn, IfcSlab i IfcWall, svaki sa svojim šipkama kao IfcReinforcingBar (glavne šipke, veze za uzengije i spone, ivične šipke) agregiranim uz njega; svaka šipka je disk provučen duž središnje linije, s pravim lukovima na savijanjima, svojom oznakom i dužinom reza.
