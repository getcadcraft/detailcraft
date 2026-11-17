---
title: Gjeneratori i shkallës prej çeliku
summary: Një shkallë çeliku nga lartësia dysheme-me-dysheme, shtrirja dhe gjerësia: ngritja dhe shtrirja sipas një grupi rregullash që zgjedh ti, pllatforma, rrokore dhe balusta, vizatime të punëtorisë dhe listë prerjesh me peshat.
keywords: shkallë çeliku, gjenerator shkallësh, mbajtëse, pllakë hapi, pllakë me kuadrate, rrjetë, pllaka të palosura, pllatformë, rrokore, balusta, ngritje, shtrirje, osha, ibc, approved document k, listë prerjesh, peshat, vizatim punëtorie
from: a4f0a985
---

Gjeneratori i shkallëve bën një shkallë të plotë çeliku nga disa numra: mbajtëset, pllakat e hapave, pllatformat kur fluturimi është shumë i lartë, rrokoret me shtylla dhe balusta, vrimat e fiksimit në mbajtëse, një listë prerjesh me peshat dhe vizatimet e punëtorisë. Nis nga mjeti {{ui:Stair}}, si shkalla e thjeshtë (shih Shkallët), me një çelës të shtuar.

## Vendos një shkallë çeliku

1. Zgjidh {{ui:Stair}} te grupi {{ui:Place}}, ose shtyp {{key:S}}.
2. Në të djathtë, shëno {{ui:Use the steel stair generator}}.
3. Zgjidh **grupin e rregullave** për vendin ku ndërtohet shkalla, **ngritjen** (dysheme më dysheme; 0 = deri në nivelin tjetër), **shtrirjen e disponueshme** (0 = lëre rregullin të vendosë), **gjerësinë e lirë** dhe **llojin e hapit**: pllakë me kuadrate, rrjetë ose tavë pllake të palosur.
4. Cakto profilin e mbajtëses, pllatformat (sipas rregullit, ose një numër), rrokoret (të dyja anët, një, asnjë), lartësinë e rrokores dhe hapësirën e balustrave.
5. Kliko një kryqëzim rrjeti: ai është këmba e ngritjes së parë.

Zgjidh shkallën (kliko një mbajtëse, pllakë hapi ose rrokore) për të ndryshuar çdo cilësim; vetitë shfaqin ngritjet, shtrirjen, pjerrësinë, fluturimet dhe pllatformat, çelikun që përmban, listën e prerjeve dhe burimet e grupit të rregullave.

## Grupet e rregullave

Grupi i rregullave kufizon formën e shkallës: ngritjen dhe shtrirjen, 2 × ngritja + shtrirja, pjerrësinë, pllatformën, lartësinë e rrokores dhe hapjen më të madhe. DetailCraft ofron ato më poshtë; rajoni është një cilësim, jo një supozim. Hap **Nga vijnë numrat e këtij grupi rregullash** te vetitë: çdo numër emëron burimin e vet dhe thotë sa mirë është kontrolluar.

- **International Building Code 2021**: ngritja 4 deri 7 in., hapi të paktën 11 in., rrokoret 34 deri 38 in. Kufiri 12 ft midis pllatformave shfaqet si *nuk u lexua* dhe numrat e rrokoreve si të lexuar në fletë shpjeguese që citojnë kodin: konfirmoji ato përpara se t'u besosh.
- **OSHA 29 CFR 1910.25 dhe 1910.29** (shkallë standarde industriale): 30° deri 50°, ngritja jo më shumë se 9.5 in., hapi të paktën 9.5 in., të paktën 22 in. gjerësi, pllatforma aq e gjerë sa shkalla dhe 30 in. thellësi, një rrokore e sipërme e përdorur si rrokore 36 deri 38 in. Këto u lexuan në vetë rregulloren.
- **Approved Document K 2013, England** (shkallë të përgjithshme qasjeje dhe shërbimi): intervalet e ngritjes dhe shtrirjes dhe 2 × ngritja + shtrirja 550 deri 700 mm, të lexuara në raportin e porositur nga qeveria që i tabelon ato. Dokumenti nuk i jep DetailCraft lartësi rrokoreje, kështu që përdoret lartësia që vendos dhe lista {{ui:Problems}} e thotë këtë.

Një grup rregullash që nuk është këtu nuk supozohet: shkalla atëherë ndjek rregullin e thjeshtë të rehatisë 600 deri 650 mm dhe thotë se nuk ka rregull.

## Çfarë llogarit

- **Ngritjet dhe shtrirja.** Numri më i vogël i ngritjeve, të cilat 2 × ngritja + shtrirja të jetë në mes të intervalit të rregullit, pa e lënë shtrirjen nën minimumin e rregullit. Kur jepet një gjatësi totale, shtrirja është gjatësia mbi hapat dhe çdo gjë jashtë rregullit thuhet.
- **Fluturimet dhe pllatformat.** Një fluturim më i lartë se sa lejon rregulli ndahet me një pllatformë aq e gjerë sa shkalla dhe jo më pak se minimumi i rregullit; mund të kërkosh edhe pllatforma. Një pllatformë është një kornizë me dy trarë anësorë dhe dy këndore tërthore nën një mbulesë, mbi dy shtylla.
- **Pllakat e hapit.** Pllaka me kuadrate është një pllakë e saldosur (6 mm si parazgjedhje; modeli nuk shtohet në peshë). Një tavë pllake e palosur ka një kthim te buza dhe është e bulonuar përmes shpinës së mbajtëses: dy vrima 2 mm më të mëdha se bulona në 0.3 dhe 0.7 të thellësisë. Rrjeta vizatohet si pllakë me peshë të barabartë (thellësia e shiritit mbajtës × trashësia ÷ hapi); shiritat tërthorë dhe brezat nuk numërohen dhe lista e prerjeve e thotë këtë.
- **Rrokoret.** Një rrokore e sipërme me tub mbi shtylla përgjatë çdo fluturimi dhe çdo pllatforme, me një hapësirë balustrash ku nuk kalon asnjë sferë më e madhe se hapja e rregullit (100 mm më së shumti si parazgjedhje).

## Vizatimet, lista e prerjeve, eksporti

- Fluturimi është një montim; rrokoret janë një tjetër (të dyja anët janë i njëjti montim, i bërë dy herë). Secili ka vizatimin e vet të montimit, dhe vizatimi i mbajtëses tregon vrimat e saj.
- **Fleta e shkallës** (ST-…) tregon mbajtësen e çdo fluturimi të drejtë me stacionet e vrimave të shkruara nga fundi i poshtëm, dhe detajin e pllakës së hapit: prerjen, buzën, kthimin dhe flanxhën e skajit me vrimat e saj.
- {{ui:Cut list and weights}} te vetitë liston çdo profil dhe gjatësi me sasitë dhe kilogramët; {{ui:Download the cut list (CSV)}} e ruan.
- Gjithçka shkon te lista e materialeve, skedarët NC dhe IFC si pjesë të zakonshme (IfcMember, IfcColumn, IfcPlate).

## Vlen të dish

- Kjo është një pikënisje, jo një projekt. Asgjë nuk kontrollohet për forcë ose përkulje; grupi i rregullave vetëm kufizon formën.
- Skajet e mbajtëseve kundër dyshemeve priten drejt dhe nuk detajohen; shtyllat e pllatformës qëndrojnë mbi dyshemenë e poshtme dhe nuk kanë pllaka baze.
- Vendosja e shkallës si një element i vetëm në BimCraft nuk është lidhur ende.
