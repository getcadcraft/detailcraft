---
title: Razradite armiranobetonske grede, stubove, ploče i zidove
summary: Dodajte betonske grede, stubove, ploče i zidove prema mreži, zadajte im šipke, uzengije i vezice, proverite preklope i sidrenje prema ACI 318-19 ili EN 1992-1-1, i napravite radioničke crteže i rasporede savijanja šipki.
keywords: armirani beton, armatura, armiranje, greda, stub, ploča, zid, uzengije, vezice, veze, kuke, preklopi, preklapanje, sidrenje, dužina razvijanja, ld, ldh, lbd, zaštitni sloj, razmak, ojačanja, otvori, mreže, oznake šipki, raspored savijanja, BBS, radionički crtež, ACI 318, EN 1992, Eurokod 2, IfcReinforcingBar, uvoz IFC
from: 3835b7ec
---

Kartica {{ui:Beton}} ispod prikaza razrađuje šipke betonskih greda, stubova, ploča i zidova. Vi zadajete dimenzije i šipke; DetailCraft postavlja svaku šipku, numeriše je, proverava preklope, sidrenje, zaštitni sloj i razmak prema klauzuli iz koje potiču, i crta je.

:::warning
DetailCraft razrađuje šipke koje mu zadate. Ne projektuje ih. Svaki rezultat je za proveru od strane inženjera.
:::

## Otvaranje kartice Beton

Izaberite karticu {{ui:Beton}} ispod prikaza. U rasporedu sa trakom alatki, {{ui:Beton}} je na kartici {{ui:Modelovanje}} pored {{ui:Temelj}}. Sa komandnom linijom stila za crtanje, ukucajte {{cmd:CONCRETE}}.

## Dodavanje elementa prema mreži

Betonski elementi se postavljaju na linije mreže i nivoe modela, pa ih prvo postavite (leva tabla).

1. U {{ui:Dodaj prema mreži}} izaberite {{ui:Element}}: {{ui:Betonska greda}}, {{ui:Betonski stub}}, {{ui:Ploča}} ili {{ui:Zid}}.
2. Izaberite linije mreže i nivoe:
   - greda ide od jednog preseka mreže do drugog, sa vrhom na nivou;
   - stub stoji na preseku, od jednog nivoa do drugog;
   - ploča popunjava pravougaonik između dve numerisane i dve slovne linije mreže, sa vrhom na nivou;
   - zid ide duž svoje središnje linije od jednog preseka do drugog, od jednog nivoa do drugog.
3. Zadajte dimenzije i izaberite {{ui:Dodaj}}. Element se izabere i njegova polja se otvaraju u panelu {{ui:Svojstva}}.

Svaki element počinje sa šipkama koje su početne vrednosti, a ne projekat: promenite ih na one inženjera.

## Promena šipki

Izaberite element (u prikazu ili preko njegovog naziva na kartici {{ui:Beton}}). Panel {{ui:Svojstva}} prikazuje:

| Element | Šta zadajete |
|---|---|
| Greda | Širina, dubina, čist zaštitni sloj; gornje i donje šipke (dimenzija, broj, prava ili 90° kuka na krajevima); bočne šipke; uzengije (dimenzija, kuke od 135° ili 90°, rastojanje prve od lica oslonca, dužina i razmak zone na kraju, razmak između); dužine oslonaca; dužine preklopa |
| Stub | Širina, dubina preko, rotacija, zaštitni sloj; uzdužne šipke na svakoj strani; vezice kao uzengije; šta šipke rade na vrhu (preklop sa stubom iznad, kuka u ploču, ili prekid) |
| Ploča | Debljina, dimenzija, gornji i zaštitni slojevi; donja mreža i gornja mreža u svakom pravcu (dimenzija i razmak); U-šipke oko ivica; ojačavajuće šipke; otvori |
| Zid | Debljina, zaštitni sloj, jedan ili dva sloja, horizontalne i vertikalne šipke, U-šipke na krajevima, vertikalne šipke preklopljene iznad ili ne, ojačavajuće šipke, otvori |

Svaka promena je jedan korak za opozivanje. Promena koja se ne može izvesti se odbija, a statusna traka kaže zašto, na primer: „Otvor ne staje unutar elementa sa zaštitnim slojem.“

Uzengije i vezice su zatvorene, sa obe kuke u jednom ćošku. Šipke grede ulaze u betonski stub na svojim krajevima do dalje strane stuba umanjene za zaštitni sloj; gde stuba nema, zadajte {{ui:Dužina oslonca na početku (mm)}} i na kraju.

## Preklopi i sidrenje

Šipke duže od {{ui:Standardna dužina šipke (mm)}} (12000 na početku) seku se na komade jednake dužine, preklopljene. Tabela {{ui:Preklopi i sidrenje}} navodi svaki preklop i svako sidrenje: šta je potrebno, uz klauzulu i njene uslove, i šta detalj ima.

- Dužina preklopa 0 znači „kako treba“: dužinu koju daje propis, zaokruženu naviše na 25 mm.
- Upišite sopstvenu dužinu preklopa da je koristite umesto nje. Ako je kraća od potrebne, to je problem (vidi dole) i u tabeli je obeležena sa *.
- Sidrenje se meri od lica oslonca do kraja šipke unutar oslonca. Greda bez poznatog oslonca to kaže umesto da je proverava.
- Stub koji stoji na temelju preklapa se sa startnim šipkama temelja, a na drugom stubu sa šipkama tog stuba; i njihov preklop se proverava.

**ACI 318-19** (SI): prave šipke u zatezanju 25.4.2.3 (tabela, sa ψt, ψe, ψg, λ), standardne kuke 25.4.3.1 (ψr 1.6 i ψo 1.25 uzeti ako nije drugačije poznato), šipke u pritisku 25.4.9.2, preklopi u zatezanju 25.5.2.1 (klasa B, ili klasa A u podešavanjima), preklopi u pritisku 25.5.5.1.

**EN 1992-1-1**: sidrenje 8.4.4 sa fbd iz 8.4.2 (dobra ili loša prionljivost), preklopi 8.7.3 sa α6 za svaku šipku preklopljenu u jednom preseku. γc, γs i αct počinju sa preporučenim vrednostima; postavite one vašeg nacionalnog aneksa.

## Provere

Svaka provera koja ne prođe je u panelu {{ui:Problemi}} u ljusci (izvor {{ui:Provere armature}}) i u listi {{ui:Provere}} elementa:

| Provera | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Zaštitni sloj | Tabela 20.5.1.3.1, prema izloženosti | Minimum prionljivosti, tabela 4.2 (zaštitni sloj za trajnost zadaje vi) |
| Čist razmak šipki | 25.2.1 (grede, ploče, zidovi), 25.2.3 (stubovi) | 8.2 (2) |
| Razmak uzengija | 9.7.6.2.2 | 9.2.2 (6) |
| Minimalna armatura grede | 9.6.1.2 | 9.2.1.1 (1) |
| Bočne šipke grede dublje od 900 mm | 9.7.2.3 | ne proverava se |
| Procenat armiranja stuba, broj šipki | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Vezice: razmak, dimenzija, poprečne veze | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Razmak ploče, minimalna armatura | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Razmak zida, minimalna armatura, dva sloja | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Preklopi, sidrenje | kao iznad | kao iznad |

Veličina agregata nije poznata, pa se čist razmak proverava bez nje.

## Otvori, ojačanja i ivične šipke

Izaberite {{ui:Dodaj otvor}} ispod izabrane ploče ili zida i zadajte gde je i njegovu dimenziju. Šipke koje on seče staju na zaštitnom sloju od njegove ivice. Ojačavajuće šipke se dodaju sa obe strane, u istom sloju, nose polovinu površine presečenih šipki i sežu jednu dužinu sidrenja iza otvora. To je početno pravilo DetailCraft-a, a ne klauzula propisa: promenite {{ui:Ojačavajuće šipke}} na one inženjera. Ugaone šipke se ne dodaju.

U-šipke oko slobodnih ivica ploče i na krajevima zida imaju krakove dugačke jednu dužinu preklopa.

## Oznake šipki i raspored savijanja

Identične šipke dele jednu oznaku: temelji zadržavaju oznake F (5F1), grede dobijaju B, stubovi C, ploče S, a zidovi W (7B1, 8C1, 4S2). Kartica {{ui:Raspored savijanja}} i njen CSV sada navode svaku šipku konstrukcije, prvo temelje. {{ui:Izlaz}} › {{ui:Više}} › {{ui:Savijanje}} ga preuzima.

## Radionički crteži

Izaberite {{ui:Izlaz}} › {{ui:Više}} › {{ui:Crteži armature}}, {{ui:Crteži armature}} na kartici {{ui:Beton}}, ili {{ui:Radionički crtež}} pored jednog elementa. Svaki element dobija list sa izgledom (osnovom za ploču) koji prikazuje svaku šipku i njenu oznaku, zone uzengija ili vezica i kotirane preklope, i presek na sredini. Zatim listovi rasporeda savijanja navode svaku oznaku sa skicom njenog oblika, dimenzijama, brojem, dužinom sečenja i težinom.

Listovi se prave iz modela svaki put, i ponovo posle svake promene dok je prozor otvoren: blok naslova nosi referencu modela. Sačuvajte {{ui:Ovaj list kao PDF}} ili {{ui:Svi listovi kao PDF}}.

## Šipke iz IFC datoteke

{{ui:Datoteka}} › {{ui:Uvoz IFC}} sada čita IfcReinforcingBar: disk koji prati centralnu liniju šipke vraća se kao pravi kraci i savijanja, sa svojim prečnikom, oznakom i elementom koji ga drži. Šipke se čuvaju onako kako su pročitane (ne pretvaraju se u pravila grede ili ploče), prikazuju se u prikazu, navode se u rasporedu savijanja i ponovo se izvoze u IFC izvozu. Izveštaj uvoza kaže koliko je šipki pročitano, koje su dimenzije, u koliko elemenata, i šta je ostavljeno i zašto.

Greda, stub, ploča ili zid te datoteke koji sadrži šipke ili čiji je materijal beton ne uzima se kao čelik; izveštaj to kaže. DetailCraft-ov sopstveni IFC izvoz nosi definiciju svakog betonskog elementa, pa se on vraća kao sam sebe, a njegove šipke se ponovo prave iz nje.

:::note
Čitanje sopstvenih datoteka konstrukcijskog programa (a ne IFC) nije izrađeno: izvezite IFC iz njega.
:::

## IFC izvoz

Betonske grede, stubovi, ploče (sa otvorima) i zidovi izlaze kao IfcBeam, IfcColumn, IfcSlab i IfcWall, svaki sa svojim šipkama kao IfcReinforcingBar (glavne šipke, uzengije kao veze, vezice, ivične šipke) agregiranim uz njega. Svaka šipka je disk koji prati centralnu liniju, sa pravim lukovima na savijanjima, svojom oznakom i dužinom sečenja.
