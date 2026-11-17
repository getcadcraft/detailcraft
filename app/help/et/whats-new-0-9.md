---
title: Mis on uut versioonis 0.9
summary: Ühendkuningriigi Blue Book'i terasmõõdud ja ebavõrdsed nurgikud, töötoojoonised kõigile osadele ühes PDF-komplektis, Minu profiilid kohandatud ristlõigetele, P-Delta ja omavõnkesagedused, ASCE 7 tuulekoormused, seismiline asukoht ja kombinatsioonid ning elavad kursorid koos jälgimisega.
keywords: mis on uut, uued funktsioonid, väljalaskemärkmed, muudatusloend, 0.9, uk teras, blue book, ub, uc, pfc, shs, rhs, chs, ebavõrdne nurgik, töötoojoonis, töötoojoonised, lehtede komplekt, osamärk, pdf, minu profiilid, kohandatud profiil, p-delta, teist järku, omavõnkesagedus, lõplikud elemendid, modaalmass, tuulekoormus, asce 7, seismiline, asukohaklass, usgs, koormuskombinatsioonid, lrfd, asd, live, kursorid, jälgimine, inimesed, tööriistavihjed, 0.8, 0.8.1, versioon, paigaldus, kraana, koormustabel, film, autopiloot, ühendused, armatuur, tihedus, vundament, vajumine, karkass, puit, kergprofiil, lõikeloend, ehitatavus, keevise juurdepääs, tarnija, laoseis, tarneaeg, mis esimesena puruneb, betoon, seismiline, plaat, keeled, abiline
from: 4c95a2de
---

Siin on, mis muutus DetailCraft 0.9-s võrreldes versiooniga 0.8.1. Versioon 0.9 toob Ühendkuningriigi terasmõõdud, töötoojoonise igale osale ühe korraga, suurema vahekaardi {{ui:Analysis}} raamide jaoks ja vaate teiste kursoritest, kui töötate koos.

## Uus

### Ühendkuningriigi teras ja töötoojoonised

- **Ühendkuningriigi terasmõõdud.** Profiilide loendid sisaldavad nüüd 976 mõõtu Steel for Life Blue Book'ist: UB, UC, PFC, EA, UEA, CHS, SHS ja RHS, kusjuures külmvormitud õõnsad ristlõiked on eraldi (nende nimed algavad tähega CF). Nimed kirjutatakse perekonna järgi, näiteks UB305x165x40 või SHS100x100x5.0, ja samuti töötab sisestamine nii, nagu joonistel öeldakse: 305x165x40 UB, L100x100x10, SHS100x5. Vaata [Profiilikataloog](topic:profile-catalog).
- **Ebavõrdsed nurgikud.** UEA nurgikud säilitavad mõlemad tiivad IFC sisse ja välja ning NC-failides, ja peegel pöörab detaili ots-otsa.
- **Kõik töötoojoonised korraga.** Vali rühmas {{ui:Output}} {{ui:Shop drawing}}, kui midagi pole valitud. Aken loetleb kõik osamärgid, eelvaatab neist igaühte ja {{ui:Download all}} salvestab ühe PDF-i, kus on leht iga märgi kohta, pealkirjaga „Leht 3 / 42“ jne. {{ui:Download this sheet}} salvestab selle, mida vaatad. Kanalid, nurgikud ja õõnsad ristlõiked saavad nüüd samuti lehed. Vaata [Töötoojoonised](topic:shop-drawings).
- **Minu profiilid.** Kohandatud profiili saab nüüd hoida igale uuele mudelile. Vormil Custom profile jäta märkeruut {{ui:Keep in My profiles}} linnukesega; selle all olev loend {{ui:My profiles}} sisaldab {{ui:Keep}}, {{ui:Use here}} ja {{ui:Remove}}. Loend hoitakse selles brauseris (kuni 200), mitte sinu kontol. Vaata [Plaadid ja profiilid](topic:plates-and-profiles).

### Analüüs

- **Teist järku (P-Delta).** Märgi vahekaardil {{ui:Analysis}} nupu Run kõrval {{ui:Second order (P-Delta)}} ja telgjõud mõjuvad deformeerunud raamil. Plaadid ja jäigad põrandad jäävad esimest järku, koos hoiatusega. Vaata [Jõud, reaktsioonid ja läbipainded](topic:frame-analysis).
- **Omavõnkesagedused.** Tulemuste all olev plokk {{ui:Finite elements: natural frequencies}} leiab sama mudeli madalaimad vormid koos perioodi ja tõhusa modaalmassiga ning näitab vormi mudelil. Vaata [Jõud, reaktsioonid ja läbipainded](topic:frame-analysis).
- **Tuulekoormused ja seismiline asukoht.** Vahekaardil {{ui:Analysis}} on kolm uut plokki: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} ja {{ui:ASCE 7 load combinations}}. Vaata [Tuul, seismiline asukoht ja ASCE 7 kombinatsioonid](topic:wind-seismic-combinations).

### Koos töötamine

- **Kursorid ja nimed.** Live-seansis joonistatakse iga osaleja osuti mudelisse koos tema nime ja värviga ning tema valik saab kasti.
- **Jälgi inimest.** Ava seansis {{ui:People}} ja vali nime juures {{ui:Follow}}; sinu vaade liigub koos tema omaga. Korraldaja saab valida {{ui:Ask everyone to follow me}}. Vaata [Inimese jälgimine Live-seansis](topic:follow-in-live).

### Kõigis rakendustes

- Tööriistavihjed on Bootstrapi vihjed, alustusvihje kaardil on sulgemisnupp, sakiribad kerivad külgsuunas, kui ei mahu, ning brauseri vahekaardi nimi näitab avatud dokumenti, millele järgnevad DetailCraft ja CadCraft.

## Parandatud

- Kohandatud profiil kadus, kui alustasid uut mudelit.
- Kanalid, nurgikud ja õõnsad ristlõiked puudusid töötoojooniste komplektist.

## Ausad piirangud

- Tuule, seismilise asukoha ja lõplike elementide plokid on kontrollivahendid. Sinu insener vaatab tulemused üle; need ei ole normikontroll. USGS-i otsing katsetati asendajal, mitte reaalsel teenusel.
- Lõplikke elemente ja P-Deltat kontrolliti käsitsi ja suletud kujul leitud vastustega, mitte tegeliku hoonega. Stabiilsusanalüüs pole valmis.
- Ühegi Ühendkuningriigi valmistaja pole veel UK-mõõte proovinud ning ebavõrdsete nurgikute NC-failid pole masinas jooksnud.
- Töötoojoonise komplekt on ainult PDF.
- Inglisekeelsest erinevad keeled on masintõlked.
- Windowsi paigaldajad pole koodiga allkirjastatud (More info, seejärel Run anyway); macOS-i kettapilt pole notariseeritud (paremklõps, seejärel Open).

Varasemad muudatused on selle lehe allpool asuvates märkmetes versioonide 0.8 ja 0.8.1 kohta.

## Varasemad: 0.8 ja 0.8.1

Siin on, mis muutus DetailCraft 0.8-s (1. november 2026) ja 0.8.1-s (2. november 2026) võrreldes versiooniga 0.7. Versioon 0.7 kontrollis terasest elemente; versioon 0.8 kavandab tõstmised, pakub ühendusi, kontrollib vundamente ja armatuuri ning koostab puit- ja kergseinte, põrandate ja katuste karkassid.

### Uus

**Paigaldus**

- **Paigalduskava ja film.** Vahekaardil {{ui:Erection}} kirjelda kraana (kus ta seisab, kõrgeim konks, takelaaž, mis ei ole koormustabelis) ja sisesta tema koormustabeli read. DetailCraft tõstab mudeli ühe koosti kaupa, faasijärjekorras ja kihtide kaupa, ning kontrollib iga tõstet tabeli järgi vastavalt raadiusele ja sinu määratud varule. {{ui:Save movie}} kirjutab ühe HTML-faili, mis mängib ilma võrguta igas brauseris, ka telefonis. Tõstmised, mis ületavad tabelit, jäävad sellest välja või on liiga kõrged, on rühmas {{ui:Problems}}. See on plaan sinu numbrite põhjal, mitte tõstekava. Vaata [Paigalduskava ja film](topic:erection-movie).

**Ühendused**

- **Ühenduste autopiloot.** Vahekaart {{ui:Autopilot}} vaatab iga liidet, millel ühendust pole, ja pakub ühenduse kujudest: aluseplaadid, nihkeplaadid, otsaplaadid tähistatud momenttaladele, skarvid ja sõlmeplaadid. Anna ühtlane koormus või ühe otsa nihkejõud ning poltide arv järgib polti projekteerimistugevust. {{ui:Add them all}} lisab pakkumised ühe tagasivõtmise sammuna. Need on alg­väärtused, mida üle vaadata, mitte ühenduse projekt.
- **Ehitatavuse kontrollid.** {{ui:Problems}} märkab polti, mida võti ei ulatu, polte liiga lähestikku mutri jaoks, nurkkeevisi väljaspool suurusepiire ja õõnsaid ristlõikeid, mis koguvad vett. Keevise juurdepääs on uus: ringikujuline nurkkeevis, mida keevitaja põleti ei ulatu, on loetletud koos takistava detailiga ja mõjutatud keevise osaga. Vaata [Ehitatavuse kontrollid](topic:constructability).

**Vundamendid ja armatuur**

- **Vundamendi kontrollid.** Vahekaart {{ui:Foundation}} kontrollib sokleid, kombineeritud sokleid ja plaate sinu kirjeldatud pinnases: kandevõime, libisemine ja ümberkukkumine kasutuskoormustest; paine, nihe, läbilöök, kinnituspikkus ja minimaalne armatuur koormustest koos osavegurite ja ACI 318-19 järgi. Servale või nurgale lähedal asuv post kontrollitakse lõigatud ristlõikega, mille piiriks on sokli serv. Vajumine tuleb pinnase moodulist, paindlik plaat lahendatakse vedrudel aluse mooduli järgi, ning paalrühmadel ja seinatugedel on oma paneelid. Postikoormused saab sisestada või võtta vahekaardilt {{ui:Analysis}}. Vaata [Vundamendi kontrollid](topic:foundation-checks).
- **Armatuuri tihedus.** Vahekaart {{ui:Congestion}} joonistab iga sokli soojuskaardi, nähtuna ülevalt: kohad, kus vardad jätavad betoonile liiga vähe ruumi allapääsuks, võrreldes selge vahe reegliga ning, kui sisestad, suurima täitematerjali ja vibraatori pea. Vaata [Armatuuri tiheduse kaart](topic:rebar-congestion).

**Karkass ja tarnimine**

- **Puit- ja kergprofiilkarkass.** Vahekaart {{ui:Framing}} koostab seina-, põranda- ja katusepaneelid iga tükiga, lõikeloendi, osta tuleva materjali ja töötoojoonise mõõdus. {{ui:Place as members}} paneb tükid mudelisse ning {{ui:PDF sheets}} salvestab ühe lehe iga paneeli kohta. Mõõdud, sammud ja pealisraamid on sinu: DetailCraft ei kontrolli, kas need kannavad koormust. Vaata [Puit- ja kergprofiilpaneelid](topic:framing-panels).
- **Tarnija laoseis ja tarneajad.** Vahekaart {{ui:Supply}} loeb tarnija laoloendi (CSV) ja näitab iga lõikeloendi jaoks, kas laos on piisavalt ja kui pikk on ootamine. Puudujäägid ja hilinevad profiilid on rühmas {{ui:Problems}}. Midagi ei tellita. Vaata [Tarnija laoseis ja tarneajad](topic:supplier-stock).

**Analüüs ja projekteerimine**

- **Mis esimesena puruneb?** Vahekaardil {{ui:Analysis}} leiab nupp valitseva tugevuskombinatsiooni, nõrgima elemendi, selle, kui palju koormused võivad kasvada enne, kui esimene element jõuab oma piirini, ning nõrgima otsaplaadi või nihkeplaadi, kui selle poltide nihketugevus on teada. Vaja on esmalt kombinatsioone ja projekteerimisnormi. Pinge, blokknihet, keevised ja vääntlemist ei kontrollita. Ühendatud abiline saab küsida sama.
- **Live.** Märgi {{ui:Live: solve again after each edit}} ja raam lahendatakse pärast iga muudatust uuesti.
- **Betoon ja muu.** Karkassita raami pikk post arvestatakse suurendatud momendi järgi (ACI 318-19 6.6.4.5). Seismilise perioodi võib võtta analüüsist Rayleigh'i meetodil. Plaatidest tehtud plaat saab igale kihile vajaliku terase oma momentidest ning ühesuunalise nihke järgi. Vaata [Betoonelementide kontroll ja seismilised koormused](topic:concrete-and-seismic).
- **Insener peab üle vaatama.** Vundamendi, betooni ja Mis esimesena puruneb tulemused on abivahendid. Tuulekoormused pole valmis.

**Kõigis rakendustes**

- **Keeled.** Abi on 54 keeles. Need, mis on inglise keelest erinevad, on masintõlked, kuni emakeelne kasutaja need üle vaatab; kümme on uued (leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiini, suahiili, usbeki).
- **Tööriistariba read.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} valib mähkimise, 2 rida või 1 rea. Riba, mis juba mahub, jääb samaks; ülejäänud kerivad külgsuunas.
- **Omaduste ruudustik.** Vundamendi väljad kasutavad ühist ruudustikku: kokkuklapitavad kategooriad ja tihe paigutus. Sisestatud arvutused nagu 2*450 töötavad endiselt.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, kontroller ja MIDI saavad rakendusi juhtida. Vaata [Liikumine 3D-s](topic:navigate-3d).
- **Probleemide paneel.** Ülalnimetatud uute kontrollide hoiatused ilmuvad samas paneelis {{ui:Problems}} nagu varemgi.
- **Ühenda oma tehisintellekt.** Sinu enda abiline, ühendatud CadCraft Studio kaudu, töötab kõigi kaheksa rakendusega ja näeb ainult seda, mida lubad. Ühe klõpsuga ühendamine, hostitud konnektor ja oma API-võti Studios tulevad veel. Vaata [DetailCraft'i kasutamine tehisintellekti abilisega](topic:use-with-ai-assistants).

### Parandatud 0.8.1-s

- **Keeled Studios.** Studio ja pakendatud väljaanded saavad keelt vahetada töö ajal; varem oli ainult inglise keel. Seda pole veel kõigil platvormidel testitud: anna teada, kui keel ei vaheta.
- **Akna järgi valimine.** Versiooni 0.8.1 paigaldajad sisaldavad akna järgi valimise käitumist, mis oli juba õige versiooni 0.8 veebiversioonis; vanem paigaldaja ei teinud seda.
- **Tahvelarvutid portreerežiimis.** Vaba ruudustiku kõrgus läheb lõuendile ning lehe paigutus algab 760 px või vähem.

### Pole veel selles versioonis

- **NC-failide saatmine masinale** pole välja antud.
- **Tuulekoormused** betooni jaoks pole valmis ning betooni- ja vundamendikontrollid on insenerile ülevaatamiseks.
- **Koodi allkirjastamine.** Windowsi paigaldajad ja macOS-i .dmg pole allkirjastatud, nii et Windows võib hoiatada ja macOS küsib paremklõpsu, seejärel Open.

Varasemad muudatused on jaotises [Mis on uut versioonis 0.7](topic:whats-new-0-7).
