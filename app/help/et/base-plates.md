---
title: Aluseplaatide lisamine ja ankurvardad
summary: Aseta posti alla keevitatud aluseplaat koos nelja ankruvardaga, määra selle mõõdud ja kopeeri see kõigile sarnastele postidele.
keywords: aluseplaat, baseplate, ankruvardad, ankurpoldid, kinnituspoldid, posti alus, vundamendipoldid, sarnane
from: 619ebc64
---

Aluseplaadi ühendus paneb posti alla plaadi, lühendab posti plaadi paksuse võrra, keevitab need kokku ja lisab plaadis olevatest aukudest läbi neli ankruvarrast.

:::warning
Mõõdud on lähtepunktid, mitte projekt. DetailCraft ei kontrolli toetusrõhku, vardade tugevust ega sissevalamise sügavust.
:::

## Aluseplaadi lisamine

1. Vali tööriist {{ui:Vali}} ({{key:V}}) ja klõpsa postil. See peab olema vertikaalne.
2. Vali rühmas {{ui:Ühenda}} nupp {{ui:Aluseplaat}} või paneelil {{ui:Omadused}} nupp {{ui:Lisa alusplaat}}.
3. Olekuribal on teade „Alusplaat lisatud, neli ankruvarrast.“ Uus ühendus on valitud.

Postil võib olla üks aluseplaat. Kui sellel on juba üks, on olekuribal teade „Sellel postil on juba aluseplaat.“

## Muuda seda

Vali aluseplaat (klõpsa plaadil või vardal). Jaotises {{ui:Plaat, poldid ja keevis (mm)}}:

| Seade | Vaikimisi | Mida see teeb |
|---|---|---|
| Plaadi paksus | 25 | Post lüheneb sama palju |
| Plaadi pikkus | 450 | Mööda posti sügavust |
| Plaadi laius | 400 | Üle posti |
| Varda läbimõõt | 20 | Ankruvarda suurus |
| Ava läbimõõt | 33 | Ava plaadis |
| Poldiklass | F1554 Gr 36 | Vardaklass tekstina |
| Vardavahe (mööda sügavust) | 350 | Vardate keskpunktide vahe mööda plaadi pikkust |
| Vardavahe (üle) | 300 | Vardate keskpunktide vahe üle |
| Varda väljaulatuvus üle plaadi | 100 | Plaadi ülaservast varda otsani |
| Varda sissevalamine plaadi alla | 450 | Plaadi alumisest küljest betooni sisse |
| Nurkkeevise suurus | 8 | Ümber posti aluse |
| Plaadi materjal | A36 | Tekst |
| Valuvahe | 0 | Vahe betooni ülaosa ja plaadi alumise külje vahel |
| Jäikendusplaadid | Puudub | Vali Puudub, 2 (profiili seina joonel) või 4 (lisaks ka sellega risti); vt allpool |
| Jäikendusplaadi paksus, kõrgus | 12, 150 | |
| Nihkesakga sügavus | 0 | Kui kaugele sakk ulatub plaadi alla; 0 = sakki pole |
| Nihkesakga paksus, laius | 25, 150 | |
| Plaatsaibad | Puudub | Igal vardal või puudub |
| Saia mõõt, paksus | 0, 0 | 0 = AISC Design Guide 1 järgi vardale vastav miinimum |

Varda pikkus = sissevalamine + valuvahe + plaadi paksus + väljaulatuvus. Vaikeväärtustega on see 575 mm.

## Aluseplaadi üksikasjad: valuvahe, jäikendid, nihkesakk, saibad

Kõik neli on uuel aluseplaadil välja lülitatud, samuti aluseplaatidel mudelitest, mis on tehtud enne DetailCraft 0.4 versiooni.

- **Valuvahe.** Plaat asub nii kaugel betooni ülaservast ning vardad pikenevad sama palju. AISC Design Guide 1 (2.10) soovitab 1 in. valmis põranda korral ja 1½ kuni 2 in. vundamendi või tugiposti korral; suurte plaatide ja nihkesakiga plaatide korral rohkem.
- **Jäikendusplaadid.** Vertikaalsed plaadid, mis on keevitatud posti ja aluseplaadiga, postipinnalt kuni plaadi servani ristkülikutena (faasi ega kitsenemist veel pole). **2** asetsevad profiili seina joonel, iga flantsi taga; **4** lisab veel kaks profiili seinaga risti olevat, flantside vahel, kuni plaadi külgedeni. Torukujulise posti korral asetsevad need iga tahu keskel. Igaüks on keevitatud posti ja plaadiga mõlemalt poolt.
- **Nihkesakk.** Aluseplaadi alla ümber keevitatud plaat, mis joondub posti sügavusega ja on keskel. DetailCraft hoiatab, kui see ei ole valuvahest sügavam. See ei lõika vundamenti pesa; sel põhjusel jätab [kokkupõrkekontroll](topic:clash-check) sakki ja vundamendi kõrvale.
- **Plaatsaibad.** Ruudukujuline plaatsaib igal vardal, toetub aluseplaadile ja on posti koostes loosena märgitud (tarnitakse koos postiga, ei ole keevitatud: Design Guide 1, 2.6). Kui mõõt ja paksus on 0, võtab DetailCraft vardale vastava miinimumsaia AISC Design Guide 1, 2. trükk, tabel 2.3 järgi; meetrilise varda korral võetakse järgmine tollisuurus (M20 varras saab 7/8 in. rea: 2½ in. × 5/16 in.). Omaduste paneelil on näha kasutatud mõõt. Saia ava on varda läbimõõt + 1/16 in.: see on DetailCraft'i valik, tabel seda ei anna. DetailCraft hoiatab, kui vardad ei pruugi saiba ja mutri jaoks piisavalt välja ulatuda (väljaulatuvus väiksem kui saia paksus + varda läbimõõt).

Design Guide 1 tabel 2.3 soovitab ka vardaava plaadis: 1-5/16 in. ¾ in. varda jaoks, 1-9/16 in. ⅞ in. jaoks, 1-13/16 in. 1 in. jaoks. DetailCraft ei muuda teie avasuurust.

Hoiatused ilmuvad ka siis, kui vardaavad on plaadi servast lähemal kui 1.2 × ava läbimõõt, kui vardad jäävad posti piirjoone sisse või kui plaat on postist väiksem.

## Kopeerimine sarnastele postidele

1. Vali aluseplaat.
2. Vali {{ui:Rakenda sarnastele (n)}} või rühma {{ui:Ühenda}} menüüst {{ui:Veel}} käsk {{ui:Sarnane}}.
3. Iga vertikaalne post sama profiiliga, millel ei ole aluseplaati ja mis ei seisa teisel postil, saab koopia.

## Aluseplaadid ja vundamendid

Aluseplaat ei vaja vundamenti ja vundament ei tea selle kohal olevast aluseplaadist: ankruvardad ei ole seotud vundamendi armatuurvarrastega. Aseta vundamendid käsuga {{ui:Vundament}}; vt [Vundamendi paigutamine armatuuriga](topic:footings-and-rebar).
