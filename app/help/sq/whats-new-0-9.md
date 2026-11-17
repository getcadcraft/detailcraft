---
title: Çfarë ka të re në 0.9
summary: Madhësitë britanike të çelikut dhe këndoret e pabarabarta, vizatime punëtorie për çdo pjesë në një grup PDF, Profilet e mi për seksione të personalizuara, P-Delta dhe frekuencat natyrore, ngarkesat e erës sipas ASCE 7, vendi sizmik dhe kombinimet, dhe kursorët e drejtpërdrejtë me Ndiq.
keywords: çfarë ka të re, shënimet e versionit, regjistri i ndryshimeve, 0.9, çelik britanik, blue book, ub, uc, pfc, shs, rhs, chs, këndore e pabarabartë, vizatim punëtorie, vizatime punëtorie, grup fletësh, shenjë pjese, pdf, profilet e mi, profil i personalizuar, p-delta, rendi i dytë, frekuenca natyrore, elementë të fundëm, masë modale, ngarkesë ere, asce 7, sizmik, klasa e vendit, usgs, kombinimet e ngarkesave, lrfd, asd, drejtpërdrejt, kursorë, ndiq, persona, ndihmëza, çfarë ka të re, shënimet e versionit, ndryshimet, 0.8, 0.8.1, versioni, veçori të reja, ngritja, vinç, tabela e ngarkesës, film, autopilot, lidhjet, armaturë, ngjeshja, themeli, këmbë, mat, zhvendosje, skeleti, dru, tel i lehtë, listë prerjesh, ndërtueshmëria, qasja e saldimit, furnitori, stoku, koha e pritjes, çfarë thyhet së pari, betoni, sizmik, pllakë, gjuhët, asistent
from: 4c95a2de
---

Kjo është ajo që ndryshoi në DetailCraft 0.9, krahasuar me 0.8.1. 0.9 sjell madhësitë britanike të çelikut, një vizatim punëtorie për çdo pjesë njëherësh, një skedë {{ui:Analiza}} më të madhe për kornizat, dhe pamjen e kursorëve të njëri-tjetrit kur punoni bashkë.

## Të reja

### Çeliku britanik dhe vizatimet e punëtorisë

- **Madhësitë britanike të çelikut.** Listat e profileve mbajnë tani 976 madhësi nga Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS dhe RHS, me seksionet e zbrazëta të formuara në ftohtë të ndara (emrat e tyre fillojnë me CF). Emrat shkruhen me familjen para, si UB305x165x40 ose SHS100x100x5.0, dhe shkrimi siç e thonë vizatimet funksionon gjithashtu: 305x165x40 UB, L100x100x10, SHS100x5. Shih [Katalogu i profileve](topic:profile-catalog).
- **Këndore të pabarabarta.** Këndoret UEA mbajnë të dy krahët përmes IFC hyrje dhe dalje dhe përmes skedarëve NC, dhe një pasqyrim e kthen pjesën skaj për skaj.
- **Çdo vizatim punëtorie njëherësh.** Zgjidh {{ui:Vizatimi i punëtorisë}} te grupi {{ui:Dalja}} pa asgjë të përzgjedhur. Dritarja liston çdo shenjë pjese, shfaq paraprakisht çdo njërën, dhe {{ui:Shkarko të gjitha}} ruan një PDF me një faqe për çdo shenjë, të titulluar "Fleta 3 nga 42". {{ui:Shkarko PDF}} ruan atë që po shikon. Kanalet, këndoret dhe seksionet e zbrazëta marrin tani edhe ato fleta. Shih [Bëj vizatimet e punëtorisë](topic:shop-drawings).
- **Profilet e mi.** Një profil i personalizuar mund të mbahet tani për çdo model të ri. Te forma Profil i personalizuar, lëre të zgjedhur {{ui:Mbaj te Profilet e mi}}; lista {{ui:Profilet e mi}} nën të ka {{ui:Ruaj}}, {{ui:Përdor këtu}} dhe {{ui:Hiq}}. Lista mbahet në këtë shfletues (deri në 200), jo në llogarinë tënde. Shih [Pllakat dhe profilet](topic:plates-and-profiles).

### Analiza

- **Rendi i dytë (P-Delta).** Vendos shenjën te {{ui:Rendi i dytë (P-Delta)}} pranë Ekzekuto te skeda {{ui:Analiza}}, dhe forcat boshtore veprojnë mbi kornizën e deformuar. Pllakat dhe dyshemetë e ngurta mbeten të rendit të parë, me një paralajmërim. Shih [Forcat, reaksionet dhe deformimet](topic:frame-analysis).
- **Frekuencat natyrore.** Blloku {{ui:Elementë të fundëm: frekuencat natyrore}} nën rezultatet gjen modalitetet më të ulëta të të njëjtit model, me periudhën dhe masën modale efektive, dhe shfaq një modalitet mbi model. Shih [Forcat, reaksionet dhe deformimet](topic:frame-analysis).
- **Ngarkesat e erës dhe vendi sizmik.** Tre blloqe të reja te skeda {{ui:Analiza}}: {{ui:Ngarkesat e erës (procedura direktive ASCE 7)}}, {{ui:Vendi dhe sistemi sizmik (ASCE 7)}} dhe {{ui:Kombinimet e ngarkesave ASCE 7}}. Shih [Era, vendi sizmik dhe kombinimet ASCE 7](topic:wind-seismic-combinations).

### Punë së bashku

- **Kursorët dhe emrat.** Në një sesion Drejtpërdrejt, treguesi i çdo personi vizatohet në model me emrin dhe ngjyrën e tij, dhe ajo që ka përzgjedhur merr një kuti.
- **Ndiq një person.** Hap {{ui:Personat}} në sesion dhe zgjidh {{ui:Ndiq}} pranë një emri; pamja jote lëviz me të tijën. Pritësi mund të zgjedhë {{ui:Kërko nga të gjithë të më ndjekin}}. Shih [Ndiq një person në një sesion Drejtpërdrejt](topic:follow-in-live).

### Në çdo aplikacion

- Ndihmëzat (tooltips) janë Bootstrap tooltips, karta e ndihmës së fillimit ka një buton mbylljeje, shiritat e skedave lëvizin anash kur nuk të përshtaten, dhe emri i skedës së shfletuesit tregon dokumentin e hapur, pasuar nga DetailCraft dhe CadCraft.

## Të rregulluara

- Një profil i personalizuar humbej kur filloje një model të ri.
- Kanalet, këndoret dhe seksionet e zbrazëta mungonin nga grupi i vizatimeve të punëtorisë.

## Kufizimet e vërteta

- Blloqet e erës, sizmikes dhe elementeve të fundëm janë ndihmës kontrolli. Inxhinieri yt i shqyrton rezultatet; nuk janë kontroll kodi. Kërkimi USGS u testua mbi një zëvendësues, jo mbi shërbimin e drejtpërdrejtë.
- Elementët e fundëm dhe P-Delta u kontrolluan me përgjigje me dorë dhe të mbyllura, jo me një ndërtesë të vërtetë. Analiza e shkarjes nuk është ndërtuar.
- Asnjë fabrikues britanik nuk ka provuar ende madhësitë britanike, dhe skedarët NC për këndoret e pabarabarta nuk janë ekzekutuar ende në një makinë.
- Grupi i vizatimeve të punëtorisë është vetëm PDF.
- Gjuhët përveç anglishtes janë drafte të makinës.
- Instaluesit e Windows nuk janë të nënshkruar me kod (Më shumë informacion, pastaj Ekzekuto gjithsesi); imazhi i diskut për macOS nuk është i noterizuar (kliko me butonin e djathtë, pastaj Hap).

Ndryshimet e mëparshme janë te shënimet 0.8 dhe 0.8.1 më poshtë në këtë faqe.

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në DetailCraft 0.8 (1 nëntor 2026) dhe 0.8.1 (2 nëntor 2026), krahasuar me 0.7. 0.7 kontrolloi elementët e çelikut; 0.8 planifikon ngritjet, propozon lidhjet, kontrollon themelet dhe armaturën, dhe skeleton muret, dyshemetë dhe çatitë prej druri dhe tel të lehtë.

### Të reja

**Ngritja**

- **Plani i ngritjes dhe filmi.** Te skeda {{ui:Ngritja}}, përshkruaj një vinç (ku qëndron, grepi më i lartë, pajisja që nuk është në tabelë) dhe shkruaj rreshtat e tabelës së ngarkesës së tij. DetailCraft ngre modelin një montim njëherësh, sipas fazës dhe shtresë pas shtrese, dhe kontrollon çdo ngritje me tabelën në rrezen e saj dhe me marzhin që cakton. {{ui:Ruaj filmin}} shkruan një skedar HTML që luhet pa lidhje në çdo shfletues, edhe në telefon. Ngritjet që janë mbi tabelë, pas saj ose shumë të larta janë te {{ui:Problemet}}. Është një plan nga numrat e tu, jo një plan ngritjeje. Shih [Plani i ngritjes dhe filmi](topic:erection-movie).

**Lidhjet**

- **Autopilot i lidhjeve.** Skeda {{ui:Autopilot}} shikon çdo bashkim që nuk ka lidhje dhe propozon një nga format: bazat e pllakave, pllakat prerëse, pllakat e skajit për trarët që shënon si trarë momenti, bashkimet dhe pllakat lidhëse. Jep një ngarkesë uniforme ose një prerje të vetme në skaj dhe numri i bulonave ndjek forcën projektuese të bulonit. {{ui:Shto të gjitha}} shton propozimet si një hap të vetëm zhbërjeje. Janë vlera fillestare për t'u shqyrtuar, jo projektim lidhjeje.
- **Kontrollet e ndërtueshmërisë.** {{ui:Problemet}} për një bulon që një çelës nuk e arrin, bulona shumë afër për çelësin (socket), saldime këndore jashtë kufijve të tyre të madhësisë dhe seksione të zbrazëta që mbajnë ujë. Qasja e saldimit është e re: një saldim këndor i rrethshëm që pistoleta e saldatorit nuk e arrin listohet me pjesën që pengon dhe përqindjen e saldimit të prekur. Shih [Kontrollet e ndërtueshmërisë](topic:constructability).

**Themelet dhe armatura**

- **Kontrollet e themelit.** Skeda {{ui:Themeli}} kontrollon themelet me bllok, themelet e kombinuar dhe mat mbi tokën që përshkruan: mbajtjen, rrëshqitjen dhe përmbysjen nga ngarkesat e shërbimit; përkuljen, prerjen, shpimin, zhvillimin dhe armaturën minimale nga ngarkesat e faktorizuara (ACI 318-19). Një kolonë pranë një skaji ose një këndi kontrollohet me prerjen e prerë nga skaji i themelit. Zhvendosja vjen nga moduli i tokës, një mat fleksibël zgjidhet mbi susta nga një modul nënshtrese, dhe grupet e pilotave dhe muret mbajtëse kanë panelet e tyre. Ngarkesat e kolonave mund të shkruhen ose të merren nga {{ui:Analiza}}. Shih [Kontrollet e themelit](topic:foundation-checks).
- **Harta e ngjeshjes së armaturës.** Skeda {{ui:Ngjeshja}} vizaton një hartë ngrohtësie të çdo themeli sikur shihet nga lart: aty ku shufrat lënë shumë pak hapësirë që betoni të zbresë, krahasuar me rregullin e hapësirës së lirë dhe, nëse i jep, agregatin më të madh dhe kokën e vibratorit. Shih [Harta e ngjeshjes së armaturës](topic:rebar-congestion).

**Skeleti dhe furnizimi**

- **Skeleti prej druri dhe tel të lehtë.** Skeda {{ui:Skeleti}} skeleton panele muresh, dyshemesh dhe çatish me çdo copë, një listë prerjesh, stokun për të blerë dhe një vizatim punëtorie në shkallë. {{ui:Vendos si elemente}} i vendos copat në model, dhe {{ui:Fletë PDF}} ruan një fletë për çdo panel. Madhësitë, distancat dhe kokat janë tuajat: DetailCraft nuk kontrollon nëse mbajnë ngarkesën. Shih [Panelet e skeletit prej druri dhe tel të lehtë](topic:framing-panels).
- **Stoku i furnitorit dhe kohët e pritjes.** Skeda {{ui:Furnizimi}} lexon listën e stokut të një furnitori (CSV) dhe tregon, për çdo seksion që blen lista e prerjeve, nëse ka mjaftueshëm në stok dhe sa zgjat pritja. Copat e shkurtra dhe seksionet e vonuara janë te {{ui:Problemet}}. Asgjë nuk porositet. Shih [Stoku i furnitorit dhe kohët e pritjes](topic:supplier-stock).

**Analiza dhe projektimi**

- **Çfarë thyhet së pari?** Te skeda {{ui:Analiza}}, butoni gjen kombinimin e forcës që mbizotëron, elementin më të dobët, sa mund të rriten ngarkesat para se elementi i parë të arrijë kufirin e vet, dhe pllakën më të dobët të skajit ose pllakën prerëse aty ku njihet forca e prerjes së bulonave të saj. Kërkon fillimisht kombinimet dhe një kod projektimi. Mbajtja, prerja e bllokut, saldimet dhe prerja nuk kontrollohen. Asistenti yt i lidhur mund të kërkojë të njëjtën gjë.
- **Drejtpërdrejt.** Vendos shenjën te {{ui:Drejtpërdrejt: zgjidh përsëri pas çdo ndryshimi}} dhe korniza zgjidhet përsëri pas çdo ndryshimi.
- **Beton, më shumë.** Një kolonë e hollë në një kornizë pa lëkundje projektohet për momentin e saj të zmadhuar (ACI 318-19 6.6.4.5). Periudha sizmike mund të merret nga analiza me metodën e Rayleigh. Një pllakë e bërë nga pllaka merr çelikun që i duhet çdo shtrese nga momentet e saj, dhe prerjen njëdrejtimëshe. Shih [Kontrollo elementët prej betoni dhe bëj ngarkesat sizmike](topic:concrete-and-seismic).
- **Për t'u kontrolluar nga një inxhinier.** Rezultatet e themelit, betonit dhe Çfarë thyhet së pari janë ndihmës. Ngarkesat e erës nuk janë ndërtuar.

**Në çdo aplikacion**

- **Gjuhët.** Ndihma është në 54 gjuhë. Ato përveç anglishtes janë drafte të makinës deri sa t'i lexojë një folës amtar; dhjetë janë të reja (lituanisht, letonisht, boshnjakisht, marathi, telugu, shqip, afrikanisht, filipinisht, suahili, uzbekisht).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} zgjedh mbështjellje, 2 rreshta ose 1 rresht. Një shirit që tashmë përshtatet mbetet ashtu; pjesa tjetër lëviz anash.
- **Rrjeta e fushave të vetive.** Fushat e themelit përdorin rrjetën e përbashkët: kategori që palosen dhe një dendësi kompakte. Aritmetika e shkruar si 2*450 funksionon ende.
- **Pajisjet e hyrjes.** Trackpad-i, stilolapsi, miu 3D, kontrolluesi dhe MIDI mund t'i drejtojnë aplikacionet. Shih [Lundro në 3D](topic:navigate-3d).
- **Paneli i Problemeve.** Paralajmërimet e kontrolleve të reja më sipër shfaqen në të njëjtin panel {{ui:Problemet}} si më parë.
- **Lidh AI-në tënde.** Asistenti yt, i lidhur përmes CadCraft Studio, punon me të tetë aplikacionet dhe sheh vetëm atë që lejon. Lidhja me një klik, lidhësi i strehuar dhe çelësi yt API në Studio janë ende për në vijim. Shih [Përdor DetailCraft me një asistent AI](topic:use-with-ai-assistants).

### Të rregulluara në 0.8.1

- **Gjuhët në Studio.** Studio dhe edicionet e paketuara mund ta ndryshojnë gjuhën gjatë ekzekutimit; më parë ishin vetëm në anglisht. Nuk është provuar ende në çdo platformë: thuaj nëse gjuha nuk ndryshon.
- **Përzgjedhja me dritare që kryqëzohet.** Instaluesit 0.8.1 mbartin sjelljen e përzgjedhjes me dritare që ishte tashmë e saktë në versionin për web 0.8; një instalues më i vjetër nuk e kishte.
- **Tabletët në portret.** Lartësia e lirë e rrjetës shkon te vizatimi, dhe paraqitja e fletës fillon në 760 px ose më pak.

### Nuk është ende në këtë version

- **Dërgimi i NC te një makinë** nuk është lëshuar.
- **Ngarkesat e erës** për beton nuk janë ndërtuar, dhe kontrollet e betonit dhe të themelit janë për t'u shqyrtuar nga një inxhinier.
- **Nënshkrimi me kod.** Instaluesit e Windows dhe .dmg për macOS nuk janë të nënshkruar, kështu që Windows mund të paralajmërojë dhe macOS kërkon një klik me butonin e djathtë, pastaj Hap.

Ndryshimet e mëparshme janë te [Çfarë ka të re në 0.7](topic:whats-new-0-7).
