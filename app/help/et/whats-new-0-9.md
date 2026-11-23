---
title: Mis on uut versioonis 0.9 (varasem)
summary: Ühendkuningriigi Blue Book terasmõõdud ja ebavõrdsed nurgikud, tööjooniste komplekt iga detaili kohta ühes PDF-is, Minu profiilid kohandatud profiilide jaoks, P-Delta ja omavõnkesagedused, ASCE 7 tuulekoormused, seismiline asukoht ja kombinatsioonid ning reaalajas kursorid koos jälgimisega.
keywords: mis on uut 0.9, varasem väljaanne, mis on uut, väljalaskemärkmed, muudatuste loend, 0.9, Ühendkuningriigi teras, blue book, ub, uc, pfc, shs, rhs, chs, ebavõrdne nurgik, tööjoonis, tööjooniste komplekt, detailimärk, pdf, minu profiilid, kohandatud profiil, p-delta, teist järku, omavõnkesagedus, lõplikud elemendid, modaalmass, tuulekoormus, asce 7, seismiline, asukohaklass, usgs, koormuskombinatsioonid, lrfd, asd, reaalajas, kursorid, jälgi, inimesed, tööriistavihjed, 0.8, 0.8.1, versioon, uued funktsioonid, montaaž, kraana, koormustabel, video, autopiloot, ühendused, armatuur, tihedus, vundament, alus, karkass, lõikenimekiri, ehitatavus, keevise ligipääs, tarnija, laojääk, tarneaeg, betoon, seismiline, keeled, assistent
from: ab0c7f05
---

See on, mis muutus rakenduses DetailCraft 0.9 võrreldes versiooniga 0.8.1. 0.9 toob Ühendkuningriigi terasmõõdud, ühe tööjoonise iga detaili kohta ühe käiguga, suurema vahekaardi {{ui:Analüüs}} raamidele ja vaate teiste kursoritele, kui töötate koos.

## Uus

### Ühendkuningriigi teras ja tööjoonised

- **Ühendkuningriigi terasmõõdud.** Profiilinimekirjad sisaldavad nüüd 976 mõõtu Steel for Life Blue Book'ist: UB, UC, PFC, EA, UEA, CHS, SHS ja RHS; külmvormitud õõnesprofiilid on eraldi (nende nimed algavad CF-ga). Nimed kirjutatakse perekond ees, näiteks UB305x165x40 või SHS100x100x5.0, ning kirjutamine nii, nagu joonised seda ütlevad, töötab samuti: 305x165x40 UB, L100x100x10, SHS100x5. Vaata [Profiilikataloog](topic:profile-catalog).
- **Ebavõrdsed nurgikud.** UEA nurgikud säilitavad mõlemad tiivad IFC-sisendis ja -väljundis ning NC-failides ning peegel pöörab detaili otsast otsani.
- **Kõik tööjoonised korraga.** Vali jaotises {{ui:Väljund}} {{ui:Tööjoonis}}, kui midagi pole valitud. Aknas on loetletud kõik detailimärgid, neid saab eelvaadata ning {{ui:Laadi kõik alla}} salvestab ühe PDF-i, kus iga detailimärgi kohta on üks lehekülg pealkirjaga „Leht 3 / 42“. {{ui:Laadi PDF alla}} salvestab praegu vaadatava lehe. Kanalid, nurgikud ja õõnesprofiilid saavad nüüd samuti lehed. Vaata [Tööjooniste tegemine](topic:shop-drawings).
- **Minu profiilid.** Kohandatud profiili saab nüüd hoida iga uue mudeli jaoks. Kohandatud profiili vormis jäta {{ui:Hoia Minu profiilides}} märgituks; selle all olev loend {{ui:Minu profiilid}} sisaldab valikuid {{ui:Hoia alles}}, {{ui:Kasuta siin}} ja {{ui:Eemalda}}. Loend hoitakse selles brauseris (kuni 200), mitte sinu kontos. Vaata [Plaadid ja profiilid](topic:plates-and-profiles).

### Analüüs

- **Teist järku (P-Delta).** Märgi vahekaardil {{ui:Analüüs}} Käivita kõrval {{ui:Teist järku (P-Delta)}} ning normaaljõud mõjuvad deformeerunud raamile. Plaadid ja jäigad põrandad jäävad esimest järku, koos hoiatusega. Vaata [Jõud, reaktsioonid ja läbipainded](topic:frame-analysis).
- **Omavõnkesagedused.** Tulemuste all olev plokk {{ui:Lõplikud elemendid: omavõnkesagedused}} leiab sama mudeli madalaimad võnkevormid koos perioodi ja efektiivse modaalmassiga ning näitab võnkevormi mudelil. Vaata [Jõud, reaktsioonid ja läbipainded](topic:frame-analysis).
- **Tuulekoormused ja seismiline asukoht.** Vahekaardil {{ui:Analüüs}} on kolm uut plokki: {{ui:Tuulekoormused (ASCE 7 suunatud meetod)}}, {{ui:Seismiline asukoht ja süsteem (ASCE 7)}} ja {{ui:ASCE 7 koormuskombinatsioonid}}. Vaata [Tuul, seismiline asukoht ja ASCE 7 kombinatsioonid](topic:wind-seismic-combinations).

### Koos töötamine

- **Kursorid ja nimed.** Reaalajas seansis joonistatakse iga osaleja osuti mudelisse koos tema nime ja värviga ning tema valitu saab raami.
- **Jälgi inimest.** Ava seansis {{ui:Osalejad}} ja vali nime juures {{ui:Jälgi}}; sinu vaade liigub koos tema omaga. Seansi korraldaja saab valida {{ui:Palu kõigil mind jälgida}}. Vaata [Inimese jälgimine reaalajas seansis](topic:follow-in-live).

### Kõigis rakendustes

- Tööriistavihjed on Bootstrapi tööriistavihjed, alustusvihje kaardil on sulgemisnupp, vahekaardiribad kerivad külgsuunas, kui ei mahu, ning brauseri vahekaardi nimes on avatud dokumendi nimi, millele järgnevad DetailCraft ja CadCraft.

## Parandatud

- Kohandatud profiil kadus, kui alustasid uut mudelit.
- Kanalid, nurgikud ja õõnesprofiilid puudusid tööjooniste komplektist.

## Ausad piirangud

- Tuule-, seismilise ja lõplike elementide plokid on kontrollivahendid. Insener vaatab tulemused üle; need ei ole normikontroll. USGS-i päring testiti asendusteenuse, mitte reaalse teenuse peal.
- Lõplikke elemente ja P-Delta't kontrolliti käsiarvutuste ja suletud kujul lahendite vastu, mitte tegeliku hoone pealt. Stabiilsuse kaotuse analüüs pole valmis.
- Ükski Ühendkuningriigi valmistaja pole veel Ühendkuningriigi mõõte proovinud ning ebavõrdsete nurgikute NC-failid pole masinal jooksnud.
- Tööjooniste komplekt on ainult PDF.
- Inglise keelest erinevad keeled on masintõlked.
- Windowsi installerid pole koodiga allkirjastatud (Rohkem teavet, siis Käivita siiski); macOS-i ketast pole notariseeritud (parem klõps, siis Ava).

Varasemad muudatused on versioonide 0.8 ja 0.8.1 märkmetes allpool.

## Varem: 0.8 ja 0.8.1

See on, mis muutus rakenduses DetailCraft 0.8 (1. novembril 2026) ja 0.8.1 (2. novembril 2026) võrreldes versiooniga 0.7. 0.7 kontrollis terasest elemente; 0.8 planeerib tõstmised, pakub välja ühendused, kontrollib vundamente ja armatuuri ning koostab puit- ja kergseinte, -põrandate ja -katuste karkassid.

### Uus

**Montaaž**

- **Montaažiplaan ja video.** Vahekaardil {{ui:Montaaž}} kirjelda kraana (kus ta seisab, tema kõrgeim konks, kinnitusvahendid, mida koormustabelis pole), sisesta tema koormustabeli read. DetailCraft tõstab mudelit ühe koostu kaupa, faasijärjekorras ja kihiti ning kontrollib iga tõstet tabeli järgi selle raadiuses ja sinu seatud varu vastu. {{ui:Salvesta video}} kirjutab ühe HTML-faili, mis mängib võrguühenduseta igas brauseris, ka telefonis. Tõstmised, mis ületavad tabelit, jäävad sellest kaugemale või on liiga kõrged, on jaotises {{ui:Probleemid}}. See on plaan sinu arvudest, mitte tõstekava. Vaata [Montaažiplaan ja video](topic:erection-movie).

**Ühendused**

- **Ühenduste autopiloot.** Vahekaart {{ui:Autopiloot}} vaatab iga liitekohta, millel ühendus puudub, ja pakub ühenduse kujude järgi: aluseplaadid, lõikeplaadid, otsaplaadid talade jaoks, mille oled märkinud momenttaladeks, jätkud ja ribid. Ühtlase koormuse või ühe otsa lõikejõu korral järgneb poltide arv polti arvutuslikule tugevusele. {{ui:Lisa kõik}} lisab pakkumised ühe tagasivõtmise sammuna. Need on algväärtused ülevaatamiseks, mitte ühenduse projekt.
- **Ehitatavuse kontrollid.** {{ui:Probleemid}} näitab polti, mida võti ei ulatu, polte liiga lähedal pistikule, nurkkeevisõmblusi väljaspool suuruspiire ja õõnesprofiile, mis hoiavad vett. Keevise ligipääs on uus: ümberringi nurkkeevis, mida keevitaja leek ei ulatu, on loetletud koos takistava detailiga ja mõjutatud keevise osaga. Vaata [Ehitatavuse kontrollid](topic:constructability).

**Vundamendid ja armatuur**

- **Vundamendi kontrollid.** Vahekaart {{ui:Vundament}} kontrollib alusi, ühendatud alusi ja plaate sinu kirjeldatud pinnasel: kandevõime, libisemine ja ümberkukkumine kasutuskoormustest; paine, nihe, läbistus, ankurdus ja miinimumarmatuur arvestuslikest koormustest (ACI 318-19). Serv- või nurgaveeru lõige arvestatakse aluse servast ära lõigatud osaga. Vajum tuleneb pinna moodulist, paindlik plaat lahendatakse vedrudel alusemoodulist, vaiagrupid ja tugiseinad on omade paneelidega. Veeru koormusi saab sisestada või võtta vahekaardilt {{ui:Analüüs}}. Vaata [Vundamendikontrollid](topic:foundation-checks).
- **Armatuuri tihedus.** Vahekaart {{ui:Tihedus}} joonistab iga aluse soojuskaardi ülevaatest: kus varrastel jääb betoonile liiga vähe ruumi alla pääsemiseks, võrreldes selge vahe reegliga ja, kui sisestad, suurima täitematerjali ja vibraatori peaga. Vaata [Armatuuri tiheduse kaart](topic:rebar-congestion).

**Karkass ja tarne**

- **Puidust ja kergprofiilist karkass.** Vahekaart {{ui:Karkass}} koostab seina-, põranda- ja katusepaneelide karkassi koos kõigi tükkidega, lõikenimekirja, ostetava materjali ja mõõtkavas tööjoonise. {{ui:Paiguta elementidena}} paneb tükid mudelisse ja {{ui:PDF-lehed}} salvestab ühe lehe iga paneeli kohta. Mõõdud, vahed ja päised on sinu valida; DetailCraft ei kontrolli, kas need kannavad koormust. Vaata [Puidust ja kergprofiilist karkassipaneelid](topic:framing-panels).
- **Tarnija laojääk ja tarneajad.** Vahekaart {{ui:Tarnija}} loeb tarnija laonimekirja (CSV) ja näitab iga lõikenimekirjas ostetava lõigu kohta, kas laos on piisavalt ning kui pikk on ootamine. Puudujäägid ja hilinevad lõigud on jaotises {{ui:Probleemid}}. Midagi ei tellita. Vaata [Tarnija laojääk ja tarneajad](topic:supplier-stock).

**Analüüs ja projekteerimine**

- **Mis puruneb esimesena?** Vahekaardil {{ui:Analüüs}} leiab nupp kõige määrava tugevuskombinatsiooni, nõrgima elemendi, kui palju koormused võivad kasvada enne, kui esimene element jõuab oma piirini, ning nõrgima otsaplaadi või lõikeplaadi, kui selle poltide nihketugevus on teada. Vaja on kõigepealt kombinatsioone ja projekteerimisnormi. Pinnasurve, blokknihe, keevised ja hoobtoime ei ole kontrollitud. Sinu ühendatud assistent saab sama küsida.
- **Reaalajas.** Märgi {{ui:Reaalajas: lahenda pärast iga muudatust uuesti}} ja raam lahendatakse pärast iga muudatust uuesti.
- **Betoon, veel.** Raami sammas, mis ei nihku, arvutatakse suurendatud momendi järgi (ACI 318-19 6.6.4.5). Seismilise perioodi saab võtta analüüsist Rayleighi meetodil. Plaatidest tehtud plaadi teras arvutatakse igale kihile vajaliku momentide ja ühesuunalise nihke järgi. Vaata [Betoonelementide kontroll ja seismiliste koormuste koostamine](topic:concrete-and-seismic).
- **Insener kontrollib.** Vundamendi, betooni ja tulemused „Mis puruneb esimesena?“ on abivahendid. Tuulekoormusi pole veel ehitatud.

**Kõigis rakendustes**

- **Keeled.** Abi on 54 keeles. Need, mis on inglise keelest erinevad, on masintõlked, kuni emakeelne lugeja need läbi loeb; kümme on uued (leedu, läti, bosnia, marathi, telugu, albaania, afrikaans, filipiini, suahiili, usbeki).
- **Tööriistaribade read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} valib: murdumine, 2 rida või 1 rida. Riba, mis juba mahub, jääb samaks; ülejäänud kerivad külgsuunas.
- **Omaduste ruudustik.** Vundamendi väljad kasutavad ühist ruudustikku: kokkuklapitavad kategooriad ja tihe paigutus. Sisestatud aritmeetika, nagu 2*450, töötab endiselt.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, kontroller ja MIDI saavad rakendusi juhtida. Vaata [Liikumine 3D-s](topic:navigate-3d).
- **Probleemide paneel.** Ülalnimetatud uute kontrollide hoiatused ilmuvad samasse paneeli {{ui:Probleemid}} nagu varem.
- **Ühenda oma tehisintellekt.** Sinu enda assistent, mis on ühendatud CadCraft Studio kaudu, töötab kõigi kaheksa rakendusega ja näeb ainult seda, mida lubad. Ühe klõpsuga ühendus, hostitud konnektor ja oma API-võti Studios on veel tulekul. Vaata [DetailCraft tehisintellekti assistendiga](topic:use-with-ai-assistants).

### Parandatud versioonis 0.8.1

- **Keeled Studios.** Studio ja pakendatud versioonid saavad keelt vahetada töö ajal; varem olid need ainult inglise keeles. Seda pole veel kõigil platvormidel testitud: anna teada, kui keel ei muutu.
- **Ristuva akna valik.** 0.8.1 installerid kannavad ristuva akna valiku käitumist juba õigesti, mis oli 0.8 veebiversioonis; vanem installer seda ei teinud.
- **Tahvelarvutid portreerežiimis.** Vaba ruudustiku kõrgus läheb lõuendile ning lehe paigutus algab 760 px või vähem.

### Pole selles versioonis veel

- **NC saatmine masinale** ei ole avaldatud.
- **Tuulekoormused** betoonile pole ehitatud ning betooni- ja vundamendikontrollid on insenerile ülevaatamiseks.
- **Koodiga allkirjastamine.** Windowsi installerid ja macOS-i .dmg pole allkirjastatud, seega Windows võib hoiatada ja macOS nõuab parem klõpsu, siis Ava.

Varasemad muudatused on [Mis on uut versioonis 0.7](topic:whats-new-0-7).
