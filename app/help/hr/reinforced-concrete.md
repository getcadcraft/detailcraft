---
title: Detaljiranje armiranobetonskih greda, stupova, ploča i zidova
summary: Dodajte betonske grede, stupove, ploče i zidove prema mreži, zadajte im šipke, spone i vezice, provjerite preklope i sidrenje prema ACI 318-19 ili EN 1992-1-1 te izradite radioničke crteže i planove savijanja.
keywords: armirani beton, armatura, armiranje, greda, stup, ploča, zid, spone, vezice, kuke, preklopi, preklapanje šipki, sidrenje, duljina razvijanja, ld, ldh, lbd, zaštitni sloj, razmak, dodatne šipke, otvori, mreže, oznake šipki, plan savijanja, bbs, radionički crtež, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, uvoz IFC
from: 3835b7ec
---

Kartica {{ui:Beton}} ispod prikaza detaljira šipke betonskih greda, stupova, ploča i zidova. Vi zadajete dimenzije i šipke; DetailCraft postavlja svaku šipku, numerira je, provjerava preklope, sidrenje, zaštitni sloj i razmak prema članku iz kojeg potječu, te je crta.

:::warning
DetailCraft detaljira šipke koje mu zadate. Ne dimenzionira ih. Svaki rezultat treba provjeriti inženjer.
:::

## Otvorite karticu Beton

Odaberite karticu {{ui:Beton}} ispod prikaza. U rasporedu s vrpcom, {{ui:Beton}} je na kartici {{ui:Modeliranje}} pored {{ui:Temelj}}. S naredbenim retkom crtačkog stila upišite {{cmd:CONCRETE}}.

## Dodajte element prema mreži

Betonski elementi postavljaju se na linije mreže i razine modela, pa ih prvo postavite (lijevi panel).

1. U {{ui:Dodaj po mreži}} odaberite {{ui:Element}}: {{ui:Betonska greda}}, {{ui:Betonski stup}}, {{ui:Ploča}} ili {{ui:Zid}}.
2. Odaberite linije mreže i razine:
   - greda ide od jednog sjecišta mreže do drugog, a gornja strana je na razini;
   - stup stoji na sjecištu, od jedne razine do druge;
   - ploča ispunjava pravokutnik između dviju numeriranih i dviju slovnih linija mreže, a gornja strana je na razini;
   - zid ide duž svoje središnje linije od jednog sjecišta do drugog, od jedne razine do druge.
3. Zadajte veličinu i odaberite {{ui:Dodaj}}. Element je odabran, a njegova polja se otvaraju na ploči {{ui:Svojstva}}.

Svaki element počinje sa šipkama koje su početne vrijednosti, a ne projekt: promijenite ih na one inženjera.

## Promijenite šipke

Odaberite element (u prikazu ili po njegovu nazivu na kartici {{ui:Beton}}). Ploča {{ui:Svojstva}} prikazuje:

| Element | Što postavljate |
|---|---|
| Greda | Širina, dubina, čisti zaštitni sloj; gornje i donje šipke (veličina, broj, ravne ili s kukom od 90° na krajevima); bočne šipke; spone (veličina, kuke od 135° ili 90°, udaljenost prve od lica oslonca, duljina i razmak krajnje zone, razmak između); duljine oslonca; duljine preklopa |
| Stup | Širina, dubina preko, rotacija, zaštitni sloj; uzdužne šipke na svakoj strani; vezice kao i spone; što šipke rade na vrhu (preklop sa stupom iznad, kuka u ploču ili prekid) |
| Ploča | Debljina, veličina, gornji dio, zaštitni slojevi; donja mreža i gornja mreža u svakom smjeru (veličina i razmak); U-šipke oko rubova; {{ui:Dodatne šipke}}; otvori |
| Zid | Debljina, zaštitni sloj, jedan ili dva sloja, vodoravne i okomite šipke, U-šipke na krajevima, okomite šipke preklopljene prema gore ili ne, {{ui:Dodatne šipke}}, otvori |

Svaka promjena je jedan korak poništavanja. Promjena koja se ne može izvesti se odbija i statusna traka kaže zašto, na primjer „Otvor ne stane u element sa zaštitnim slojem.“

Spone i vezice su zatvorene, s obje kuke na jednom kutu. Šipke grede na krajevima ulaze u betonski stup do dalje strane stupa umanjene za zaštitni sloj; gdje stupa nema, zadajte {{ui:Duljina oslonca na početku (mm)}} i na kraju.

## Preklopi i sidrenje

Šipke duže od {{ui:Standardna duljina šipke (mm)}} (na početku 12000) režu se na komade jednake duljine, preklopljene. Tablica {{ui:Preklopi i sidrenje}} navodi svaki preklop i svako sidrenje: što je potrebno, s člankom i njegovim uvjetima, te što detalj ima.

- Duljina preklopa 0 znači „prema potrebi“: duljina koju propisuje norma, zaokružena prema gore na 25 mm.
- Upišite vlastitu duljinu preklopa da je upotrijebite. Ako je kraća od potrebne, to je problem (vidi niže) i u tablici se označava *.
- Sidrenje se mjeri od lica oslonca do kraja šipke unutar oslonca. Greda bez poznatog oslonca to kaže umjesto da ga provjerava.
- Stup koji stoji na temelju preklapa se s početnim šipkama temelja, a na drugom stupu s šipkama tog stupa: i taj preklop se provjerava.

**ACI 318-19** (SI): ravne šipke u vlaku 25.4.2.3 (tablica, s ψt, ψe, ψg, λ), standardne kuke 25.4.3.1 (ψr 1.6 i ψo 1.25 uzeti osim ako nije drukčije poznato), šipke u tlaku 25.4.9.2, preklopi u vlaku 25.5.2.1 (razred B ili razred A u postavkama), preklopi u tlaku 25.5.5.1.

**EN 1992-1-1**: sidrenje 8.4.4 s fbd iz 8.4.2 (dobra ili loša prionjivost), preklopi 8.7.3 s α6 za svaku šipku preklopljenu na jednom presjeku. γc, γs i αct počinju s preporučenim vrijednostima; postavite vrijednosti vašeg nacionalnog dodatka.

## Provjere

Svaka provjera koja ne prolazi nalazi se na ploči {{ui:Problemi}} ljuske (izvor {{ui:Provjere armature}}) i na popisu {{ui:Provjere}} elementa:

| Provjera | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Zaštitni sloj | Tablica 20.5.1.3.1, prema izloženosti | Minimum prionjivosti, tablica 4.2 (zaštitni sloj za trajnost zadajete vi) |
| Razmak u svjetlu između šipki | 25.2.1 (grede, ploče, zidovi), 25.2.3 (stupovi) | 8.2 (2) |
| Razmak spona | 9.7.6.2.2 | 9.2.2 (6) |
| Minimalna čelična armatura grede | 9.6.1.2 | 9.2.1.1 (1) |
| Bočne šipke grede dublje od 900 mm | 9.7.2.3 | nije provjereno |
| Omjer armature stupa, broj šipki | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Vezice: razmak, veličina, poprečne vezice | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Razmak u ploči, minimalna armatura | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Razmak u zidu, minimalna armatura, dva sloja | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Preklopi, sidrenje | kao gore | kao gore |

Veličina agregata nije poznata, pa se razmak u svjetlu provjerava bez nje.

## Otvori, dodatne šipke i rubne šipke

Odaberite {{ui:Dodaj otvor}} pod odabranom pločom ili zidom i zadajte gdje je i kolika je. Šipke koje on prereže zaustavljaju se na zaštitnom sloju od njegova ruba. {{ui:Dodatne šipke}} dodaju se s obje strane, u istom sloju, i nose polovicu površine prerezanih šipki, jednu duljinu sidrenja dalje od otvora. To je početno pravilo DetailCrafta, a ne članak norme: promijenite {{ui:Dodatne šipke}} na one inženjera. Kutne šipke se ne dodaju.

U-šipke oko slobodnih rubova ploče i na krajevima zida imaju krakove dugačke jednu duljinu preklopa.

## Oznake šipki i plan savijanja

Identične šipke dijele jednu oznaku: temelji zadržavaju oznake F (5F1), grede dobivaju B, stupovi C, ploče S, a zidovi W (7B1, 8C1, 4S2). Kartica {{ui:Plan savijanja}} i njezin CSV sada navode svaku šipku konstrukcije, temelji prvi. {{ui:Izlaz}} › {{ui:Više}} › {{ui:Savijanje}} preuzima je.

## Radionički crteži

Odaberite {{ui:Izlaz}} › {{ui:Više}} › {{ui:Crteži armature}}, {{ui:Crteži armature}} na kartici {{ui:Beton}} ili {{ui:Radionički crtež}} uz jedan element. Svaki element dobiva list s pročeljem (tlocrt za ploču) koji prikazuje svaku šipku i njezinu oznaku, zone spona ili vezica te preklope s kotama, i presjek na sredini. Zatim planovi savijanja navode svaku oznaku sa skicom njezina oblika, dimenzijama, brojem, duljinom rezanja i težinom.

Listovi se izrađuju iz modela svaki put, i ponovno nakon svake promjene dok je prozor otvoren: zaglavlje crteža nosi referencu modela. Spremite {{ui:Ovaj list kao PDF}} ili {{ui:Svi listovi kao PDF}}.

## Šipke iz IFC datoteke

{{ui:Datoteka}} › {{ui:Uvezi IFC}} sada čita IfcReinforcingBar: kružni presjek duž središnje linije vraća se kao ravni krakovi i savijanja, s promjerom, oznakom i elementom koji ga drži. Šipke se čuvaju onako kako su pročitane (ne pretvaraju se u pravila grede ili ploče), prikazuju se u prikazu, navode se u planu savijanja i ponovno se izvoze s IFC izvozom. Izvješće o uvozu navodi koliko je šipki pročitano, koje su veličine, u koliko elemenata, te što je ispušteno i zašto.

Greda, stup, ploča ili zid iz te datoteke koji sadrži šipke ili čiji je materijal beton ne uzima se kao čelik; izvješće to navodi. Vlastiti IFC izvoz DetailCrafta nosi definiciju svakog betonskog elementa, pa se vraća kao on sam, a njegove šipke se ponovno izrađuju iz nje.

:::note
Čitanje vlastitih datoteka konstrukcijskog programa (ne IFC) još nije izrađeno: izvezite IFC iz njega.
:::

## IFC izvoz

Betonske grede, stupovi, ploče (s otvorima) i zidovi izlaze kao IfcBeam, IfcColumn, IfcSlab i IfcWall, svaki sa svojim šipkama kao IfcReinforcingBar (glavne šipke, spone i vezice, rubne šipke) pridruženim uz njega. Svaka šipka je kružni presjek duž središnje linije, sa stvarnim lukovima na savijanjima, te nosi svoju oznaku i duljinu rezanja.
