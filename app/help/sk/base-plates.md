---
title: Pridanie pätných dosiek a kotevných tyčí
summary: Umiestnite zváranú pätnú dosku so štyrmi kotevnými tyčami pod stĺp, nastavte jej rozmery a skopírujte ju na každý podobný stĺp.
keywords: pätná doska, baseplate, kotevné tyče, kotevné skrutky, ukotvovacie skrutky, pätka stĺpa, základové skrutky, podobné
from: 619ebc64
---

Spoj s pätnou doskou umiestni dosku pod stĺp, skráti stĺp o hrúbku dosky, obe časti zvarí a pridá štyri kotevné tyče cez otvory v doske.

:::warning
Veľkosti sú východiskové hodnoty, nie návrh. DetailCraft nekontroluje únosnosť, pevnosť tyčí ani zakotvenie.
:::

## Pridanie pätnej dosky

1. Zvoľte nástroj {{ui:Select}} ({{key:V}}) a kliknite na stĺp. Musí byť zvislý.
2. Zvoľte {{ui:Base plate}} v skupine {{ui:Connect}}, alebo {{ui:Add base plate}} v paneli {{ui:Properties}}.
3. Stavový riadok hlási: „Pätná doska bola pridaná so štyrmi kotevnými tyčami.“ Nové spojenie je vybrané.

Stĺp môže mať jednu pätnú dosku. Ak ju už má, stavový riadok hlási: „Tento stĺp už má pätnú dosku.“

## Zmena

Vyberte pätnú dosku (kliknite na dosku alebo tyč). V časti {{ui:Plate, bolts and weld (mm)}}:

| Nastavenie | Predvolená hodnota | Čo robí |
|---|---|---|
| Hrúbka dosky | 25 | Stĺp sa o túto hodnotu skráti |
| Dĺžka dosky | 450 | Pozdĺž hĺbky stĺpa |
| Šírka dosky | 400 | Naprieč stĺpom |
| Priemer tyče | 20 | Veľkosť kotevnej tyče |
| Priemer otvoru | 33 | Otvor v doske |
| Trieda skrutiek | F1554 Gr 36 | Trieda tyče ako text |
| Rozteč tyčí (pozdĺž hĺbky) | 350 | Medzi stredmi tyčí, pozdĺž dĺžky dosky |
| Rozteč tyčí (naprieč) | 300 | Medzi stredmi tyčí, naprieč |
| Výčnelok tyče nad doskou | 100 | Od hornej strany dosky po hornú časť tyče |
| Zakotvenie tyče pod doskou | 450 | Od spodnej strany dosky dole do betónu |
| Veľkosť kútového zvaru | 8 | Okolo celej päty stĺpa |
| Materiál dosky | A36 | Text |
| Medzera pre zálievkovú maltu | 0 | Medzera medzi hornou plochou betónu a spodnou stranou dosky |
| Výstuhy | Žiadne | Vyberte Žiadne, 2 (v osi stojiny) alebo 4 (aj kolmo k nej); pozri nižšie |
| Hrúbka, výška výstuhy | 12, 150 | |
| Hĺbka šmykového výstupku | 0 | Ako ďaleko výstupok siaha pod dosku; 0 = žiadny výstupok |
| Hrúbka, šírka šmykového výstupku | 25, 150 | |
| Ploché podložky | Žiadne | Na každej tyči, alebo žiadne |
| Veľkosť, hrúbka podložky | 0, 0 | 0 = minimum z AISC Design Guide 1 pre tyč |

Dĺžka tyče = zakotvenie + medzera pre zálievkovú maltu + hrúbka dosky + výčnelok. Pri predvolených hodnotách je to 575 mm.

## Podrobnosti päty: malta, výstuhy, šmykový výstupok, podložky

Všetky štyri sú na novej pätnej doske vypnuté, rovnako aj na pätných doskách z modelov vytvorených pred DetailCraft 0.4.

- **Medzera pre zálievkovú maltu.** Doska je o túto vzdialenosť nad hornou plochou betónu a tyče sa o ňu predĺžia. AISC Design Guide 1 (2.10) odporúča 1 palec na dokončenej podlahe a 1½ až 2 palce na pätke alebo piliere; pri veľkých doskách a doskách so šmykovým výstupkom viac.
- **Výstuhy.** Zvislé plechy zvárané ku stĺpu a doske, od líca stĺpa po okraj dosky, ako obdĺžniky (zatiaľ bez zrazu alebo zúženia). **2** stoja v osi stojiny za každou prírubou; **4** pridajú dve kolmo na stojinu, medzi prírubami, po bočné strany dosky. Pri rúrkovom stĺpe stoja v strede každej steny. Každá je zvarená so stĺpom a doskou na oboch stranách.
- **Šmykový výstupok.** Plech zvarený dookola pod pätnou doskou, v osi hĺbky stĺpa, na stred. DetailCraft upozorní, ak nie je hlbší než medzera pre maltu. Nevyrezáva kapsu v pätke; preto [kontrola kolízií](topic:clash-check) vynecháva výstupok a pätku.
- **Podložky dosky.** Štvorcová plochá podložka na každej tyči, ležiaca na pätnej doske, uvedená v zostave stĺpa ako voľná (dodaná so stĺpom, nezvarená: Design Guide 1, 2.6). Pri veľkosti a hrúbke 0 DetailCraft zoberie minimálnu podložku z AISC Design Guide 1, 2. vydanie, Tabuľka 2.3 pre tyč; metrická tyč získa najbližšiu vyššiu palcovú veľkosť (tyč M20 dostane riadok 7/8 palca: 2½ palca × 5/16 palca). Panel vlastností zobrazí použitú veľkosť. Otvor podložky je priemer tyče + 1/16 palca: to je voľba DetailCraft, tabuľka ju neuvádza. DetailCraft upozorní, ak tyče nemusia vyčnievať dosť na podložku a maticu (výčnelok menej než hrúbka podložky + priemer tyče).

Design Guide 1, Tabuľka 2.3 tiež odporúča otvor pre tyč v doske: 1-5/16 palca pre tyč ¾ palca, 1-9/16 palca pre ⅞, 1-13/16 palca pre 1 palec. DetailCraft nemení veľkosť otvoru.

Upozornenia sa zobrazia aj vtedy, keď sú otvory pre tyče bližšie než 1.2 × priemer otvoru k okraju dosky, keď tyče ležia vnútri obrysu stĺpa alebo keď je doska menšia než stĺp.

## Skopírovanie na podobné stĺpy

1. Vyberte pätnú dosku.
2. Zvoľte {{ui:Apply to similar (n)}}, alebo {{ui:Similar}} v ponuke {{ui:More}} skupiny {{ui:Connect}}.
3. Každý zvislý stĺp s rovnakým profilom, ktorý nemá pätnú dosku a nestojí na inom stĺpe, dostane kópiu.

## Pätné dosky a pätky

Pätná doska nepotrebuje pätku a pätka nevie o pätnej doske nad ňou: kotevné tyče nie sú zviazané s výstužou pätky. Pätky umiestnite pomocou {{ui:Footing}}; pozri [Umiestnenie pätiek s výstužou](topic:footings-and-rebar).
