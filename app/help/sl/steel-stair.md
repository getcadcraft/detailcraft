---
title: Generator jeklenega stopnišča
summary: Jekleno stopnišče iz višine med etažami, gaza in širine: višina in gaz po naboru pravil po izbiri, podesti, ograje in količki, delavniške risbe ter seznam krojenja s težami.
keywords: jekleno stopnišče, generator stopnišč, tetiva, gazna plošča, rebrasta pločevina, rešetka, zložena pločevina, podest, ročaj, količki, višina, gaz, osha, ibc, approved document k, seznam krojenja, teže, delavniška risba
from: a4f0a985
---

Generator stopnišč iz nekaj števil izdela celotno jekleno stopnišče: tetive, gazne plošče, podeste, kadar je tek previsok, ročaje s stebrički in količki, luknje za pritrditev v tetivah, seznam krojenja s težami in delavniške risbe. Začne se z orodjem {{ui:Stopnišče}}, kot preprosto stopnišče (glejte Stopnišča), z enim dodatnim stikalom.

## Postavitev jeklenega stopnišča

1. Izberite {{ui:Stopnišče}} v skupini {{ui:Postavi}} ali pritisnite {{key:S}}.
2. Na desni označite {{ui:Uporabi generator jeklenih stopnišč}}.
3. Izberite **nabor pravil** za kraj, kjer bo stopnišče zgrajeno, **višino** (od etaže do etaže; 0 = do naslednjega nivoja), **razpoložljivi gaz** (0 = naj odloči pravilo), **svetlo širino** in **vrsto gazne plošče**: rebrasta pločevina, rešetka ali zložena pločevina.
4. Nastavite prerez tetive, podeste (po pravilu ali število), ročaje (obe strani, ena, brez), višino ročaja in razmik količkov.
5. Kliknite presečišče mreže: to je podnožje prve stopnice.

Izberite stopnišče (kliknite tetivo, gazno ploščo ali ročaj), da spremenite katero koli nastavitev; lastnosti prikažejo stopnice, gaz, naklon, teke in podeste, jeklo v njem, seznam krojenja in vire nabora pravil.

## Nabori pravil

Nabor pravil omejuje obliko stopnišča: višino in gaz, 2 × stopnica + gaz, naklon, podest, višino ročaja in največjo odprtino. DetailCraft ponuja spodaj navedene; regija je nastavitev, ne ugibanje. Odprite **Od kod so številke tega nabora pravil** v lastnostih: vsaka številka navaja svoj vir in pove, kako dobro je bila preverjena.

- **International Building Code 2021**: stopnica 4 do 7 in., gazna plošča vsaj 11 in., ročaji 34 do 38 in. Omejitev 12 ft med podesti je prikazana kot *ni prebrano*, številke ročajev pa kot prebrane v gradivih, ki navajajo predpis: pred zanašanjem nanje jih potrdite.
- **OSHA 29 CFR 1910.25 in 1910.29** (industrijska standardna stopnišča): 30° do 50°, stopnica največ 9.5 in., gazna plošča vsaj 9.5 in., vsaj 22 in. široka, podesti široki kot stopnišče in 30 in. globoki, zgornji ročaj, uporabljen kot držalo, 36 do 38 in. Ti podatki so bili prebrani v samem predpisu.
- **Approved Document K 2013, Anglija** (splošna dostopna in pomožna stopnišča): območja višine in gaza ter 2 × stopnica + gaz 550 do 700 mm, prebrana v vladnem poročilu, ki jih tabelira. Dokument DetailCraft ne da višine ročaja, zato se uporabi višina, ki jo nastavite, in seznam Težave to pove.

Nabora pravil, ki ga tu ni, DetailCraft ne ugiba: stopnišče se nato ravna po preprostem pravilu udobja 600 do 650 mm in pove, da nima pravila.

## Kaj izračuna

- **Stopnice in gaz.** Najmanjše število stopnic, katerih 2 × stopnica + gaz je v sredini območja pravila, brez da bi gaz padel pod najmanjšo vrednost pravila. Če je podan skupni gaz, je gaz skupni gaz, deljen z gaznicami, vse izven pravila pa se pove.
- **Teki in podesti.** Tek, višji od dovoljenega po pravilu, se razdeli s podestom, širokim kot stopnišče in ne ožjim od najmanjše vrednosti pravila; podeste lahko zahtevate tudi sami. Podest je okvir iz dveh stranskih nosilcev in dveh prečnih kotnikov pod pokrovom, na dveh stebričkih.
- **Gazne plošče.** Rebrasta pločevina je zavarjena plošča (privzeto 6 mm; vzorec ni dodan k teži). Zložena pločevina ima zavoj na previsu in je privijačena skozi stojino tetive: dve luknji, 2 mm večji od vijaka, pri 0.3 in 0.7 globine. Rešetka je narisana kot plošča enake teže (globina nosilne palice × debelina ÷ korak); prečne palice in obrobe se ne štejejo, seznam krojenja to pove.
- **Ročaji.** Cevni zgornji ročaj na stebričkih vzdolž vsakega teka in vsakega podesta, razmik količkov, skozi katerega ne gre nobena krogla večja od odprtine pravila (privzeto največ 100 mm).

## Risbe, seznam krojenja, izvoz

- Tek je en sestav; ročaji so drug sestav (obe strani sta isti sestav, narejen dvakrat). Vsak ima svojo sestavno risbo, risba tetive pa prikazuje njene luknje.
- **List stopnišča** (ST-…) prikazuje ravno tetivo vsakega teka z zapisanimi postajami lukenj od spodnjega konca ter podrobnost gazne plošče: prerez, previs, zavoj in končno prirobnico z njenimi luknjami.
- {{ui:Seznam krojenja in teže}} v lastnostih našteje vsak prerez in dolžino s količinami in kilogrami; {{ui:Prenesi seznam krojenja (CSV)}} ga shrani.
- Vse gre v kosovnico, datoteke NC in IFC kot običajni deli (IfcMember, IfcColumn, IfcPlate).

## Dobro je vedeti

- To je izhodišče, ne projekt. Nič se ne preverja glede na trdnost ali upogib; nabor pravil samo omejuje obliko.
- Čelni rezi tetiv ob etažah so pravokotni in niso podrobno izdelani; podporni stebrički podestov segajo do etaže spodaj in nimajo podložnih plošč.
- Postavitev stopnišča kot enega elementa v BimCraft še ni povezana.
