---
title: Mis on uut versioonides 0.8 ja 0.8.1
summary: Montaaživideo kraana koormustabelist, ühenduste autopiloot, armatuuri tihedusekaart, vundamendi kontrollid, puidust ja kergkarkassist paneelid, ehitatavuse ja keevisjuurdepääsu kontrollid, tarnija laoseis, mis puruneb esimesena, reaalajas uuesti arvutamine, täiendavad betoonikontrollid ja versiooni 0.8.1 parandused.
keywords: mis on uut, mis on uut, väljalaskemärkmed, muutelogi, muudatused, 0.8, 0.8.1, versioon, uued funktsioonid, montaaž, kraana, koormustabel, video, autopiloot, ühendused, armatuur, tihedus, vundament, sete, karkass, puit, kergkarkass, lõikenimekiri, ehitatavus, keevisjuurdepääs, tarnija, laoseis, tarneaeg, mis puruneb esimesena, reaalajas, betoon, seismiline, laepaneel, keeled, assistent
from: 6e33e052
---

See on DetailCrafti 0.8 (1. november 2026) ja 0.8.1 (2. november 2026) muudatuste loend võrreldes versiooniga 0.7. Versioon 0.7 kontrollis terasdetaile; versioon 0.8 planeerib tõstetöid, pakub ühendusi, kontrollib vundamente ja armatuuri ning koostab puit- ja kergkarkassist seinad, põrandad ja katused.

## Uus

### Montaaž

- **Montaažiplaan ja video.** Vahekaardil {{ui:Montaaž}} kirjelda kraana (kus see seisab, selle kõrgeim konks, takelaaž, mida koormustabelis ei ole) ja sisesta selle koormustabeli read. DetailCraft tõstab mudelit ühe koosteühiku kaupa, faasijärjekorras ja kihiti, ning kontrollib iga tõstet tabeli järgi selle raadiuse juures ja sinu seatud varuga. {{ui:Salvesta video}} kirjutab ühe HTML-faili, mis mängib võrguta igas brauseris, ka telefonis. Tõstetööd, mis on tabelist väljas, üle selle või liiga kõrged, on loetletud {{ui:Probleemid}}-is. See on plaan sinu arvude põhjal, mitte tõstekava. Vt [Montaažiplaan ja video](topic:erection-movie).

### Ühendused

- **Ühenduste autopiloot.** Vahekaart {{ui:Autopiloot}} vaatab iga liidet, millel ühendust ei ole, ja pakub ühenduse kujude järgi: aluseplaadid, lõikeplaadid, talade otsaplaadid talade puhul, mille märkisid momenttaladeks, skarvid ja sõlmeplaadid. Anna ühtlane koormus või ühe otsa nihkejõud ning poltide arv järgib polti projekteerimistugevust. {{ui:Lisa kõik}} lisab ettepanekud ühe tagasivõtmise sammuna. Need on lähtepunktid, mida üle vaadata, mitte ühenduse projekt.
- **Ehitatavuse kontrollid.** {{ui:Probleemid}} näitab polti, kuhu mutrivõti ei ulatu, poltid, mis on liiga lähedal mutripesale, nurkkeevised väljaspool oma suuruspiire ja õõnsad profiilid, mis hoiavad vett. Keevisjuurdepääs on uus: täisümber nurkkeevis, kuhu keevitaja leek ei ulatu, on loetletud koos detailiga, mis tee ees on, ja keevise osaga, mida see mõjutab. Vt [Ehitatavuse kontrollid](topic:constructability).

### Vundamendid ja armatuur

- **Vundamendi kontrollid.** Vahekaart {{ui:Vundament}} kontrollib padjandeid, kombineeritud vundamente ja põhivõrke sinu kirjeldatud pinnases: kandevõime, libisemine ja ümberminek kasutuskoormustest; paindumine, nihe, läbilöök, kinnitus ja miinimumarmatuur koormustest koormatuna (ACI 318-19). Posti, mis asub servas või nurgas, kontrollitakse lõikega, mis jääb vundamendi serva taha. Sete tuleneb pinnase moodulist, paindlik võrk arvutatakse alusmoodulist lähtuvatel vedrudel ning vaiarühmadel ja tugiseintel on omad paneelid. Posti koormusi võib sisestada või võtta vahekaardilt {{ui:Analüüs}}. Vt [Vundamendi kontrollid](topic:foundation-checks).
- **Armatuuri tihedusekaart.** Vahekaart {{ui:Tihedus}} joonistab iga vundamendi soojuskaardi ülalt vaadatuna: kohad, kus vardad jätavad betoonile liiga vähe ruumi allaminekuks, võrreldes selge vahe reegliga ja, kui sa need annad, suurima täiteaine ning vibraatori peaga. Vt [Armatuuri tihedusekaart](topic:rebar-congestion).

### Karkass ja varud

- **Puidust ja kergkarkassist karkass.** Vahekaart {{ui:Karkass}} koostab sein-, põrand- ja katusepaneelid kõigi tükkidega, lõikenimekirja, ostetava materjali ja mõõtkavas tööjoonise. {{ui:Paiguta elementidena}} paneb tükid mudelisse ja {{ui:PDF-lehed}} salvestab ühe lehe iga paneeli kohta. Mõõdud, vahed ja päised on sinu; DetailCraft ei kontrolli, et need kannaksid koormust. Vt [Puidust ja kergkarkassist paneelid](topic:framing-panels).
- **Tarnija laoseis ja tarneajad.** Vahekaart {{ui:Tarnija}} loeb tarnija laonimekirja (CSV) ja näitab iga lõikenimekirja ostetava lõigu kohta, kas laos on piisavalt ja kui kaua tuleb oodata. Puudujäägid ja hilinevad lõigud on {{ui:Probleemid}}-is. Midagi ei tellita. Vt [Tarnija laoseis ja tarneajad](topic:supplier-stock).

### Analüüs ja projekteerimine

- **Mis puruneb esimesena?** Vahekaardil {{ui:Analüüs}} leiab nupp valitseva tugevuskombinatsiooni, nõrgima elemendi, kui palju koormused võivad kasvada enne, kui esimene element jõuab oma piirini, ning nõrgima otsaplaadi või lõikeplaadi, kus on teada tema poltide nihketugevus. Esmalt on vaja kombinatsioone ja projekteerimisnormi. Tugi, ploki nihe, keevised ja tõmbejõu võimendus ei ole kontrollitud. Sinu ühendatud assistent saab sama küsida.
- **Reaalajas.** Märgi {{ui:Reaalajas: lahenda pärast iga muudatust uuesti}} ja raam arvutatakse pärast iga muudatust uuesti.
- **Betoon ja rohkem.** Mittesöötlevas raamis projekteeritakse sale post oma suurendatud momendi järgi (ACI 318-19 6.6.4.5). Seismilise perioodi võib võtta analüüsist Rayleighi meetodiga. Plaatidest tehtud laepaneel saab igale kihile vajaliku terase oma momentidest ja ühesuunalisest nihkest. Vt [Betoonelementide kontroll ja seismilised koormused](topic:concrete-and-seismic).
- **Insenerile kontrollimiseks.** Vundamendi, betooni ja „Mis puruneb esimesena?“ tulemused on abivahendid. Tuulekoormusi ei ole veel loodud.

### Igas rakenduses

- **Keeled.** Abi on 54 keeles. Need, mis on peale inglise keele, on masintõlked, kuni emakeelne lugeja need üle vaatab; kümme on uued (leedu, läti, bosnia, marathi, telugu, albaania, afrikaans, filipiini, suahiili ja usbeki).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} valib mähkimise, 2 rea või 1 rea. Riba, mis juba mahub, jääb samaks; ülejäänud kerivad külgsuunas.
- **Omaduste ruudustik.** Vundamendi väljad kasutavad ühist ruudustikku: kokkuklapitavad kategooriad ja tihe paigutus. Sisestatud arvutused nagu 2*450 töötavad endiselt.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, kontroller ja MIDI saavad rakendusi juhtida. Vt [Liikumine 3D-s](topic:navigate-3d).
- **Probleemide paneel.** Ülalolevate uute kontrollide hoiatused ilmuvad samasse paneeli {{ui:Probleemid}} nagu varem.
- **Ühenda oma tehisintellekt.** Sinu enda assistent, ühendatud CadCrafti Studio kaudu, töötab kõigi kaheksa rakendusega ja näeb ainult seda, mida lubad. Ühe klõpsuga ühendus, hostitud ühendusteenus ja oma API-võti Studios on veel tulemas. Vt [DetailCrafti kasutamine tehisintellekti assistendiga](topic:use-with-ai-assistants).

## Parandatud versioonis 0.8.1

- **Keeled Studios.** Studio ja pakendatud väljaanded saavad keelt vahetada töö ajal; varem olid need ainult inglise keeles. Seda ei ole veel kõigil platvormidel testitud: anna teada, kui keel ei muutu.
- **Ristakna valik.** Versiooni 0.8.1 installerid kannavad aknaga valimise käitumist, mis oli juba õige versiooni 0.8 veebiversioonis; vanem installer seda ei teinud.
- **Tahvelarvutid portreerežiimis.** Ruudustiku vaba kõrgus läheb joonistusalale ja lehe paigutus algab 760 pikslist või vähem.

## Pole veel selles versioonis

- **Saatmine NC masinale** ei ole välja antud.
- **Tuulekoormused** betoonile ei ole veel loodud ning betooni- ja vundamendikontrolle peab insener üle vaatama.
- **Koodi allkirjastamine.** Windowsi installerid ja macOS .dmg ei ole allkirjastatud, nii et Windows võib hoiatada ja macOS küsib paremklõpsu ning seejärel valikut Ava.

Varasemad muudatused: [Mis on uut versioonis 0.7](topic:whats-new-0-7).
