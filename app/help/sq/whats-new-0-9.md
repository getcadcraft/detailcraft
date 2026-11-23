---
title: Çfarë është e re në 0.9 (më herët)
summary: Madhësitë e çelikut britanik të Blue Book dhe këndoret e pabarabarta, vizatimet e punëtorisë për çdo pjesë në një grup PDF, Profilet e mi për seksione të personalizuara, P-Delta dhe frekuencat natyrore, ngarkesat e erës sipas ASCE 7, vendi sizmik dhe kombinimet, dhe kursorët e drejtpërdrejtë me Ndiq.
keywords: çfarë është e re 0.9, version i mëparshëm, çfarë është e re, shënime të versionit, regjistër ndryshimesh, 0.9, çelik britanik, blue book, ub, uc, pfc, shs, rhs, chs, këndore të pabarabarta, vizatim punëtorie, vizatime punëtorie, grup fletësh, shenjë pjese, pdf, profilet e mi, profil i personalizuar, p-delta, rend i dytë, frekuencë natyrore, elemente të fundëm, ngarkesë ere, asce 7, sizmik, klasë vendi, usgs, kombinime ngarkesash, lrfd, asd, drejtpërdrejt, kursorë, ndiq, njerëz, këshilla, çfarë është e re, shënime të versionit, ndryshime, 0.8, 0.8.1, version, veçori të reja, ngritje, vinç, tabelë ngarkesash, film, autopilot, lidhje, armaturë, ngjeshje, themel, bazament, bazë, zhvendosje, skelet, dru, çelik i hollë, listë prerjesh, ndërtueshmëri, qasje saldimi, furnizues, stoku, koha e dorëzimit, çfarë prish së pari, drejtpërdrejt, beton, sizmik, pllakë, gjuhët, asistent
from: ab0c7f05
---

Kjo është ajo që ndryshoi në DetailCraft 0.9, krahasuar me 0.8.1. 0.9 sjell madhësitë e çelikut britanik, një vizatim punëtorie për çdo pjesë në një herë, një skedë {{ui:Analiza}} më të madhe për korniza, dhe një pamje të kursorëve të njëri-tjetrit kur punoni bashkë.

## Të reja

### Çeliku britanik dhe vizatimet e punëtorisë

- **Madhësitë e çelikut britanik.** Listat e profileve tani përmbajnë 976 madhësi nga Blue Book të Steel for Life: UB, UC, PFC, EA, UEA, CHS, SHS dhe RHS, me profilet e formuara në të ftohtë të ndara (emrat e tyre fillojnë me CF). Emrat shkruhen me familjen para, si UB305x165x40 ose SHS100x100x5.0, dhe shkrimi siç e shkruajnë vizatimet funksionon gjithashtu: 305x165x40 UB, L100x100x10, SHS100x5. Shih [Katalogu i profileve](topic:profile-catalog).
- **Këndore të pabarabarta.** Këndoret UEA mbajnë të dyja anët përmes IFC hyrëse dhe dalëse dhe përmes skedarëve NC, dhe një pasqyrim e kthen pjesën skaj për skaj.
- **Çdo vizatim punëtorie njëherësh.** Zgjidh {{ui:Vizatimi i punëtorisë}} te grupi {{ui:Dalja}} pa asnjë objekt të përzgjedhur. Dritarja liston çdo shenjë pjese, shfaq paraprakisht çdo njërën prej tyre, dhe {{ui:Shkarko të gjitha}} ruan një PDF me një faqe për çdo shenjë, secila e titulluar "Fleta 3 nga 42". {{ui:Shkarko PDF}} ruan atë që po shikon. Kanalet, këndoret dhe profilet e zbrazëta tani marrin edhe ato fletë. Shih [Bëj vizatime punëtorie](topic:shop-drawings).
- **Profilet e mi.** Një profil i personalizuar tani mund të ruhet për çdo model të ri. Te formulari i Profilit të personalizuar, lëre të zgjedhur {{ui:Ruaj te Profilet e mi}}; lista {{ui:Profilet e mi}} nën të ka {{ui:Ruaj}}, {{ui:Përdor këtu}} dhe {{ui:Hiq}}. Lista ruhet në këtë shfletues (deri 200), jo në llogarinë tënde. Shih [Pllakat dhe profilet](topic:plates-and-profiles).

### Analiza

- **Rendi i dytë (P-Delta).** Zgjidh {{ui:Rendi i dytë (P-Delta)}} pranë Ekzekuto te skeda {{ui:Analiza}} dhe forcat aksiale veprojnë mbi kornizën e deformuar. Pllakat dhe dyshemetë e ngurta mbeten të rendit të parë, me një paralajmërim. Shih [Forcat, reaksionet dhe deformimet](topic:frame-analysis).
- **Frekuencat natyrore.** Blloku {{ui:Elemente të fundëm: frekuencat natyrore}} nën rezultatet gjen modet më të ulëta të të njëjtit model, me periudhën dhe masën modale efektive, dhe shfaq një modalitet në model. Shih [Forcat, reaksionet dhe deformimet](topic:frame-analysis).
- **Ngarkesat e erës dhe vendi sizmik.** Tri blloqe të reja te skeda {{ui:Analiza}}: {{ui:Ngarkesat e erës (procedura direktive ASCE 7)}}, {{ui:Vendi dhe sistemi sizmik (ASCE 7)}} dhe {{ui:Kombinimet e ngarkesave ASCE 7}}. Shih [Era, vendi sizmik dhe kombinimet ASCE 7](topic:wind-seismic-combinations).

### Puna së bashku

- **Kursorët dhe emrat.** Në një sesion {{ui:Drejtpërdrejt}} treguesi i secilit person vizatohet në model me emrin dhe ngjyrën e tij, dhe ajo që ka përzgjedhur merr një kuti.
- **Ndiq një person.** Hap {{ui:Njerëzit}} në sesion dhe zgjidh {{ui:Ndiq}} pranë një emri; pamja jote lëviz me të tijën. Pronari mund të zgjedhë {{ui:Kërko nga të gjithë të më ndjekin}}. Shih [Ndiq një person në një sesion Drejtpërdrejt](topic:follow-in-live).

### Në çdo aplikacion

- Këshillat janë këshilla Bootstrap, karta e këshillës së nisjes ka një buton mbylljeje, shiritat e skedave lëvizin anash kur nuk përshtaten, dhe skeda e shfletuesit tregon emrin e dokumentit të hapur pasuar nga DetailCraft dhe CadCraft.

## Të rregulluara

- Një profil i personalizuar humbej kur nisje një model të ri.
- Kanalet, këndoret dhe profilet e zbrazëta mungonin nga grupi i vizatimeve të punëtorisë.

## Kufizime të sinqerta

- Blloqet e erës, sizmikes dhe elementeve të fundëm janë ndihmës kontrolli. Inxhinieri yt i shqyrton rezultatet; nuk janë kontroll kodi. Kërkimi i USGS u testua në një zëvendësues, jo në shërbimin e drejtpërdrejtë.
- Elementët e fundëm dhe P-Delta u krahasuan me zgjidhje me dorë dhe të mbyllura, jo me një ndërtesë reale. Analiza e lakimit nuk është ndërtuar.
- Asnjë prodhues britanik çeliku nuk i ka provuar ende madhësitë britanike, dhe skedarët NC për këndore të pabarabarta nuk janë ekzekutuar ende në një makinë.
- Grupi i vizatimeve të punëtorisë është vetëm PDF.
- Gjuhët përveç anglishtes janë draft me makinë.
- Instaluesit për Windows nuk janë të nënshkruar me kod (Më shumë informacione, pastaj Ekzekuto gjithsesi); imazhi i diskut për macOS nuk është i noterizuar (klik me butonin e djathtë, pastaj Hap).

Ndryshimet e mëparshme janë në shënimet 0.8 dhe 0.8.1 më poshtë në këtë faqe.

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në DetailCraft 0.8 (1 nëntor 2026) dhe 0.8.1 (2 nëntor 2026), krahasuar me 0.7. 0.7 kontrollonte elementët e çelikut; 0.8 planifikon ngritjet, propozon lidhjet, kontrollon themelet dhe armaturën, dhe ngre skeletin e druve dhe mureve, dyshemeve dhe çative të çelikut të hollë.

### Të reja

**Ngritja**

- **Plani i ngritjes dhe filmi.** Te skeda {{ui:Ngritja}}, përshkruaj një vinç (ku qëndron, grepi i tij më i lartë, pajisjet e ngritjes që nuk janë në tabelë) dhe shkruaj rreshtat e tabelës së ngarkesave të tij. DetailCraft e ngre modelin një montim në një herë, sipas rendit të fazave dhe nivel për nivel, dhe kontrollon çdo ngritje me tabelën sipas rrezes së tij dhe marzhit që vendose. {{ui:Ruaj filmin}} shkruan një skedar HTML që luhet pa lidhje në çdo shfletues, edhe në telefon. Ngritjet mbi tabelë, pas saj ose shumë të larta janë te {{ui:Problemet}}. Është një plan nga numrat e tu, jo një plan ngritjeje. Shih [Plani i ngritjes dhe filmi](topic:erection-movie).

**Lidhjet**

- **Autopilot i lidhjeve.** Skeda {{ui:Autopilot}} shikon çdo nyje që nuk ka lidhje dhe propozon një nga format: pllaka themeli, pllaka prerëse, pllaka skaji për traret që shënon si traret e momentit, nyje bashkimi dhe mbajtëse. Jep një ngarkesë uniforme ose një prerje të vetme skaji dhe numri i bulonave ndjek kapacitetin projektues të bulonit. {{ui:Shto të gjitha}} shton propozimet si një hap i vetëm zhbërjeje. Janë vlera fillestare për t'u shqyrtuar, jo projektim lidhjeje.
- **Kontrollet e ndërtueshmërisë.** {{ui:Problemet}} për një bulon që çelësi nuk e arrin, bulona shumë afër për prizën, saldime këndore jashtë kufijve të tyre të madhësisë dhe profile të zbrazëta që mbajnë ujë. Qasja e saldimit është e re: një saldim këndor rrethor që pistoleta e saldatorit nuk e arrin listohet me pjesën që pengon dhe përqindjen e saldimit që preket. Shih [Kontrollet e ndërtueshmërisë](topic:constructability).

**Themelet dhe armatura**

- **Kontrollet e themelit.** Skeda {{ui:Themeli}} kontrollon themelet, themelet e kombinuara dhe pllakat mbi tokën që përshkruan: mbajtjen, rrëshqitjen dhe përmbysjen nga ngarkesat e shërbimit; përkuljen, prerjen, depërtimin, zhvillimin dhe armaturën minimale nga ngarkesat e faktorizuara (ACI 318-19). Një kolonë pranë një skaji ose cepi kontrollohet me prerjen e prerë nga skaji i themelit. Vendosja vjen nga moduli i tokës, një pllakë e lirë zgjidhet mbi sprunga nga një modul nënshtrese, dhe grupet e pilotëve dhe muret mbajtëse kanë panelet e veta. Ngarkesat e kolonave mund të shkruhen ose merren nga {{ui:Analiza}}. Shih [Kontrollet e themelit](topic:foundation-checks).
- **Harta e ngjeshjes së armaturës.** Skeda {{ui:Ngjeshja}} vizaton një hartë ngrohtësie të çdo themeli të parë nga lart: aty ku shufrat lënë shumë pak hapësirë që betoni të zbresë, kundrejt rregullës së hapësirës së pastër dhe, nëse i jep, agregatit më të madh dhe kokës së vibratorit. Shih [Harta e ngjeshjes së armaturës](topic:rebar-congestion).

**Skeleti dhe furnizimi**

- **Skeleti i druve dhe çelikut të hollë.** Skeda {{ui:Skeleti}} strukturon panelet e mureve, dyshemeve dhe çative me çdo copë, një listë prerjesh, stokun për të blerë dhe një vizatim punëtorie në shkallë. {{ui:Vendos si elemente}} i vendos copat në model, dhe {{ui:Fletë PDF}} ruan një fletë për çdo panel. Madhësitë, hapësirat dhe kokat janë të tuajat: DetailCraft nuk kontrollon nëse mbajnë ngarkesën. Shih [Panelet e skeletit prej druri dhe çeliku të hollë](topic:framing-panels).
- **Stoku i furnizuesit dhe kohët e dorëzimit.** Skeda {{ui:Furnizimi}} lexon listën e stokut të një furnizuesi (CSV) dhe tregon, për çdo profil që blen lista e prerjeve, nëse ka mjaft në stok dhe sa zgjat pritja. Mungesat dhe profilet e vonuara janë te {{ui:Problemet}}. Asgjë nuk porositet. Shih [Stoku i furnizuesit dhe kohët e dorëzimit](topic:supplier-stock).

**Analiza dhe projektimi**

- **Çfarë prish së pari?** Te skeda {{ui:Analiza}}, butoni gjen kombinimin e forcave që qeveris, elementin më të dobët, sa mund të rriten ngarkesat para se elementi i parë të arrijë kufirin e tij, dhe pllakën më të dobët të skajit ose pllakën prerëse aty ku njihet kapaciteti i prerjes së bulonave të saj. Kërkon fillimisht kombinimet dhe një kod projektimi. Mbajtja, prerja e blloqeve, saldimet dhe prying nuk kontrollohen. Asistenti yt i lidhur mund ta pyesë të njëjtën gjë.
- **Drejtpërdrejt.** Zgjidh {{ui:Drejtpërdrejt: zgjidh përsëri pas çdo ndryshimi}} dhe korniza zgjidhet përsëri pas çdo ndryshimi.
- **Beton, më shumë.** Një kolonë e hollë në një kornizë pa lëvizje merr projektimin për momentin e saj të zmadhuar (ACI 318-19 6.6.4.5). Periudha sizmike mund të merret nga analiza me metodën e Rayleigh. Një pllakë prej pllakash merr çelikun që i duhet çdo shtresë nga momentet e saj, dhe prerjen njëdrejtimëshe. Shih [Kontrollo elementët e betonit dhe krijo ngarkesa sizmike](topic:concrete-and-seismic).
- **Për një inxhinier të kontrollojë.** Rezultatet e themelit, betonit dhe Çfarë prish së pari janë ndihmës. Ngarkesat e erës nuk janë ndërtuar.

**Në çdo aplikacion**

- **Gjuhët.** Ndihma është në 54 gjuhë. Ato përveç anglishtes janë draft me makinë derisa një folës amtar t'i lexojë; dhjetë janë të reja (lituanisht, letonisht, boshnjakisht, marati, telugu, shqip, afrikanisht, filipinisht, suahilisht, uzbekisht).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} zgjedh mbështjellje, 2 rreshta ose 1 rresht. Një shirit që tashmë përshtatet mbetet ashtu; pjesa tjetër lëviz anash.
- **Rrjeta e vetive.** Fushat e themelit përdorin rrjetën e përbashkët: kategori që mbyllen dhe një dendësi kompakte. Llogaritjet e shkruara si 2*450 funksionojnë ende.
- **Pajisjet hyrëse.** Trackpad-i, stilolapsi, miu 3D, kontrollori dhe MIDI mund të drejtojnë aplikacionet. Shih [Lundro në 3D](topic:navigate-3d).
- **Paneli i problemeve.** Paralajmërimet e kontrolleve të reja më sipër shfaqen në të njëjtin panel {{ui:Problemet}} si më parë.
- **Lidh AI-në tënde.** Asistenti yt, i lidhur përmes CadCraft Studio, punon me të tetë aplikacionet dhe shikon vetëm atë që lejon. Lidhja me një klik, lidhësi i strehuar dhe çelësi yt API në Studio janë ende për në të ardhmen. Shih [Përdor DetailCraft me një asistent AI](topic:use-with-ai-assistants).

### Rregullime në 0.8.1

- **Gjuhët në Studio.** Studio dhe edicionet e paketuara mund të ndërrojnë gjuhën gjatë ekzekutimit; më parë ishin vetëm anglisht. Nuk është testuar ende në çdo platformë: na thuaj nëse gjuha nuk ndryshon.
- **Zgjedhja me dritare kryqëzuese.** Instaluesit 0.8.1 mbajnë sjelljen e zgjedhjes me dritare që ishte e saktë në versionin web 0.8; një instalues më i vjetër nuk e kishte.
- **Tabletët në portret.** Lartësia e lirë e rrjetës i shkon kanavacës, dhe paraqitja e fletës fillon në 760 px ose më pak.

### Ende jo në këtë version

- **Dërgimi i NC te një makinë** nuk është lëshuar.
- **Ngarkesat e erës** për beton nuk janë ndërtuar, dhe kontrollet e betonit dhe themelit janë për një inxhinier t'i shqyrtojë.
- **Nënshkrimi me kod.** Instaluesit për Windows dhe .dmg për macOS nuk janë të nënshkruar, ndaj Windows mund të paralajmërojë dhe macOS kërkon klik me butonin e djathtë, pastaj Hap.

Ndryshimet e mëparshme janë në [Çfarë është e re në 0.7](topic:whats-new-0-7).
