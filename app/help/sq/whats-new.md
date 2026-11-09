---
title: Çfarë është e re në 0.8 dhe 0.8.1
summary: Një film ngritjeje nga tabela e ngarkesave të një vinçi, një autopilot lidhjesh, një hartë ngjeshjeje të armaturës, kontrolle themelesh, panele skeleti prej druri dhe çeliku të lehtë, kontrolle ndërtueshmërie dhe qasjeje saldimi, stoku i furnizuesit, çfarë prishet së pari, një rillogaritje e drejtpërdrejtë, më shumë kontrolle betoni dhe rregullimet e 0.8.1.
keywords: çfarë është e re, shënime versioni, ndryshimet, 0.8, 0.8.1, versioni, veçori të reja, ngritja, vinç, tabela e ngarkesave, film, autopilot, lidhjet, armatura, ngjeshja, themeli, këmbë, mat, zhvendosja, skeleti, dru, çelik i lehtë, lista e prerjeve, ndërtueshmëria, qasja e saldimit, furnizuesi, stoku, koha e pritjes, çfarë prishet së pari, drejtpërdrejt, beton, sizmik, pllakë, gjuhët, asistenti
from: 6e33e052
---

Kjo është ajo që ndryshoi në DetailCraft 0.8 (1 nëntor 2026) dhe 0.8.1 (2 nëntor 2026), krahasuar me 0.7. 0.7 kontrollonte elementët e çelikut; 0.8 planifikon ngritjet, propozon lidhjet, kontrollon themelet dhe armaturën, dhe skelet muret, dyshemetë dhe çatitë prej druri dhe çeliku të lehtë.

## E re

### Ngritja

- **Plani i ngritjes dhe filmi.** Në skedën {{ui:Ngritja}}, përshkruaj një vinç (ku qëndron, grepi i tij më i lartë, pajisjet e ngritjes që nuk janë në tabelë) dhe shkruaj rreshtat e tabelës së ngarkesave të tij. DetailCraft ngre modelin një montim në një herë, sipas radhës së fazave dhe shtresë për shtresë, dhe kontrollon çdo ngritje me tabelën sipas rrezes së saj dhe marzhit që vendos ti. {{ui:Ruaj filmin}} shkruan një skedar HTML që luhet offline në çdo shfletues, edhe në telefon. Ngritjet mbi tabelë, jashtë saj ose shumë të larta janë në {{ui:Problemet}}. Është një plan nga numrat e tu, jo një plan ngritjeje. Shih [Plani i ngritjes dhe filmi](topic:erection-movie).

### Lidhjet

- **Autopilot i lidhjeve.** Skeda {{ui:Autopilot}} shikon çdo bashkim që nuk ka lidhje dhe propozon një sipas formave: pllaka baze, pllaka prerjeje, pllaka skaji për trarët që shënon si trarë momenti, bashkime dhe pllaka lidhëse. Jep një ngarkesë uniforme ose një prerje fundi dhe numri i bulonave ndjek forcën e projektimit të bulonit. {{ui:Shto të gjitha}} shton propozimet si një hap të vetëm zhbërjeje. Janë vlera fillestare për t'u shqyrtuar, jo një projektim lidhjeje.
- **Kontrolle ndërtueshmërie.** {{ui:Problemet}} për një bulon që çelësi nuk e arrin, bulona shumë afër për çelësin e kapakut, saldime këndore jashtë kufijve të madhësisë së tyre dhe profile të zbrazëta që mbajnë ujë. Qasja e saldimit është e re: një saldim këndor i plotë që pistoleta e saldatorit nuk e arrin shfaqet me pjesën që pengon dhe përqindjen e saldimit që preket. Shih [Kontrollet e ndërtueshmërisë](topic:constructability).

### Themelet dhe armatura

- **Kontrolle themelesh.** Skeda {{ui:Themeli}} kontrollon themelet, themelet e kombinuara dhe bllokët mbi tokën që përshkruan: mbajtjen, rrëshqitjen dhe përmbysjen nga ngarkesat e shërbimit; përkuljen, prerjen, shpimin, zhvillimin dhe çelikun minimal nga ngarkesat e faktorizuara (ACI 318-19). Një kolonë pranë një skaji ose këndi kontrollohet me prerjen e kufizuar nga skaji i themelit. Zhvendosja vjen nga moduli i tokës, një bllok fleksibël zgjidhet mbi susta nga një modul nënshtrese, dhe grupet e pilotave dhe murët mbajtës kanë panele të tyre. Ngarkesat e kolonave mund t'i shkruash ose t'i marrësh nga {{ui:Analiza}}. Shih [Kontrollet e themeleve](topic:foundation-checks).
- **Harta e ngjeshjes së armaturës.** Skeda {{ui:Ngjeshja}} vizaton një hartë ngrohjeje të çdo themeli sikur të shihej nga lart: ku shufrat lënë shumë pak hapësirë që betoni të zbresë, krahasuar me rregullin e hapësirës së lirë dhe, nëse i jep, agregatin më të madh dhe kokën e vibratorit. Shih [Harta e ngjeshjes së armaturës](topic:rebar-congestion).

### Skeleti dhe furnizimi

- **Panele skeleti prej druri dhe çeliku të lehtë.** Skeda {{ui:Skeleti}} skelet panele muri, dyshemeje dhe çatie me çdo pjesë, një listë prerjesh, materialin për të blerë dhe një vizatim punëtorie në shkallë. {{ui:Vendos si elemente}} i vendos pjesët në model, dhe {{ui:Fletë PDF}} ruan një fletë për çdo panel. Madhësitë, hapësirat dhe kornizat janë të tua: DetailCraft nuk kontrollon që ato mbajnë ngarkesën. Shih [Panelet e skeletit prej druri dhe çeliku të lehtë](topic:framing-panels).
- **Stoku i furnizuesit dhe kohët e pritjes.** Skeda {{ui:Furnizimi}} lexon listën e stokut të një furnizuesi (CSV) dhe tregon, për çdo prerje që lista e prerjeve blen, nëse ka mjaftueshëm në stok dhe sa zgjat pritja. Mungesat dhe prerjet e vonuara janë në {{ui:Problemet}}. Asgjë nuk porositet. Shih [Stoku i furnizuesit dhe kohët e pritjes](topic:supplier-stock).

### Analiza dhe projektimi

- **Çfarë prishet së pari?** Në skedën {{ui:Analiza}}, butoni gjen kombinimin e forcës që mbizotëron, elementin më të dobët, sa mund të rriten ngarkesat para se elementi i parë të arrijë kufirin e tij, dhe pllakën ose prerjen më të dobët ku njihet forca e prerjes së bulonave të tij. Kërkon fillimisht kombinimet dhe një kod projektimi. Mbajtja, prerja e bllokut, saldimet dhe prizmimi nuk kontrollohen. Asistenti yt i lidhur mund ta pyesë të njëjtën gjë.
- **Drejtpërdrejt.** Vendos shenjën te {{ui:Drejtpërdrejt: zgjidh përsëri pas çdo ndryshimi}} dhe skeleti rillogaritet pas çdo ndryshimi.
- **Beton, më shumë.** Një kolonë e hollë në një skelet pa lëvizje projektohet për momentin e saj të zmadhuar (ACI 318-19 6.6.4.5). Periudha sizmike mund të merret nga analiza me metodën e Rayleigh-it. Një pllakë e bërë nga pllaka merr çelikun që i duhet çdo shtrese nga momentet e saj, dhe prerjen njëdrejtimshe. Shih [Kontrollo elementët e betonit dhe bëj ngarkesat sizmike](topic:concrete-and-seismic).
- **Për një inxhinier për t'u kontrolluar.** Rezultatet e themeleve, betonit dhe "Çfarë prishet së pari?" janë ndihmëse. Ngarkesat e erës nuk janë ndërtuar.

### Në çdo aplikacion

- **Gjuhët.** Ndihma është në 54 gjuhë. Ato përveç anglishtes janë drafte të bëra me makinë derisa t'i lexojë një folës amtar; dhjetë janë të reja (lituanisht, letonisht, boshnjakisht, marathi, telugu, shqip, afrikanisht, filipinisht, suahili, uzbekisht).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} zgjedh mbështjellje, 2 rreshta ose 1 rresht. Një shirit që tashmë përshtatet mbetet ashtu; pjesa tjetër lëviz anash.
- **Rrjeti i vetive.** Fushat e themelit përdorin rrjetin e përbashkët: kategori që palosen dhe një dendësi kompakte. Aritmetika e shkruar si 2*450 funksionon ende.
- **Pajisjet e hyrjes.** Touchpad-i, stilolapsi, miu 3D, kontrolluesi dhe MIDI mund t'i drejtojnë aplikacionet. Shih [Lëviz në 3D](topic:navigate-3d).
- **Paneli i problemeve.** Paralajmërimet e kontrolleve të reja më sipër shfaqen në të njëjtin panel {{ui:Problemet}} si më parë.
- **Lidh AI-në tënde.** Asistenti yt, i lidhur përmes CadCraft Studio, punon me të tetë aplikacionet dhe sheh vetëm atë që lejon. Lidhja me një klik, lidhësi i hostuar dhe çelësi yt API në Studio janë ende për të ardhur. Shih [Përdor DetailCraft me një asistent AI](topic:use-with-ai-assistants).

## Rregulluar në 0.8.1

- **Gjuhët në Studio.** Studio dhe edicionet e paketuara mund të ndërrojnë gjuhën gjatë ekzekutimit; më parë ishin vetëm anglisht. Nuk është testuar ende në çdo platformë: na thuaj nëse gjuha nuk ndryshon.
- **Zgjedhja me dritare kryqëzuese.** Instaluesit 0.8.1 e kanë sjelljen e zgjedhjes me dritare të saktë që ishte tashmë në versionin web 0.8; një instalues më i vjetër nuk e kishte.
- **Tabletët në portret.** Lartësia e lirë e rrjetës i shkon kanavacës, dhe paraqitja e fletës fillon në 760 px ose më pak.

## Jo ende në këtë version

- **Dërgimi i NC te një makinë** nuk është lëshuar.
- **Ngarkesat e erës** për betonin nuk janë ndërtuar, dhe kontrollet e betonit dhe të themeleve janë për t'u shqyrtuar nga një inxhinier.
- **Nënshkrimi i kodit.** Instaluesit e Windows dhe skedari .dmg i macOS nuk janë të nënshkruar, kështu Windows mund të paralajmërojë dhe macOS kërkon klik me butonin e djathtë, pastaj Hap.

Ndryshimet e mëparshme janë te [Çfarë është e re në 0.7](topic:whats-new-0-7).
