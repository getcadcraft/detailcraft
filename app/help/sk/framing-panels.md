---
title: Drevené a tenkostenné oceľové rámové panely
summary: Vytvorte rámové panely stien, podláh a striech z dreva alebo tenkostennej ocele s každým kusom, rezným zoznamom, dielenským výkresom a materiálom na nákup.
keywords: rámovanie, drevo, rezivo, tenkostenná oceľ, tvarovaná za studena, stojka, trám, krokva, prekladový nosník, hlavná stojka, podporná stojka, krátka stojka, rezný zoznam, dielenský výkres, panel
from: 3e38ffb9
---

Karta {{ui:Rámovanie}} vytvorí rámy panelov, ktoré opíšete, a dá vám to, čo pýta rámová partia a sklad rezív. Panely sa uložia do súboru modelu.

:::warning
Rozmery, rozstupy a prekladové nosníky zadáva používateľ. DetailCraft nekontroluje, či stojka pri danom rozstupe unesie danú stenu alebo či prekladový nosník prekoná daný otvor: to patrí do tabuliek normy a k inžinierovi.
:::

## Pridanie panela

Zvoľte {{ui:Pridať stenu}}, {{ui:Pridať podlahu}} alebo {{ui:Pridať strechu}}, potom vyplňte rozmery v milimetroch, materiál (drevo alebo tenkostenná oceľ) a veľkosť prvku. Rozmery dreva sú nominálne názvy s ich opracovanými rozmermi (2×4 je 38 × 89 mm). Oceľové stojky sa označujú hĺbkou a hrúbkou, napríklad `C92-1.2`.

## Steny

Stena má spodnú dosku, jednu alebo viac horných dosiek (pri oceli jednu vodiacu lištu), koncové stojky, stojky v rozstupe, ktorý zadáte, a pre každý otvor: dve hlavné stojky, dve podporné stojky, prekladový nosník v rozmere a vrstvách, ktoré zvolíte, a krátke stojky nad prekladom (a pod parapetom okna). Pre každý otvor zadajte jeho vzdialenosť od ľavého konca, jeho šírku a hrubý otvor hore a dole merané od podkladovej podlahy; dvere majú spodok 0.

## Podlahy a strechy

Podlaha má trámy naprieč svojou šírkou pozdĺž rozpätia, obvodové trámy na oboch koncoch a, ak to zaškrtnete, blokovanie v strede rozpätia. Strešný panel je štítová konštrukcia: dvojica krokiev v rozstupe, ktorý zadáte (ich dĺžka zahŕňa presah okapu pozdĺž svahu), a hrebeňová doska.

## Čo dostanete

Každý panel zobrazuje svoje kusy na výkrese v mierke, každý kus označený, rezný zoznam podľa označenia a celkový súčet. Tabuľka {{ui:Materiál na nákup}} vnorí všetky rezy panelov do dĺžok materiálu, najkratších, ktoré vyhovujú rezom každého kusu. {{ui:Uložiť dielenský výkres (SVG)}} zapíše výkres; tlačidlo {{ui:CSV}} zapíše všetky rezné zoznamy a zoznam materiálu.

## Umiestnenie panela v modeli

Pod každým panelom zadajte, kam patrí (x, y, z v milimetroch a uhol) a stlačte {{ui:Umiestniť ako prvky}}: každý kus sa stane prvkom modelu s opracovaným prierezom svojej veľkosti a hmotnosťou materiálu (okolo 500 kg/m³ pre drevo, oceľ pre stojky). Stena beží pozdĺž uhla od svojho spodného ľavého konca so spodkom na z; trámy podlahy ležia spodnou stranou na z; štítová elevácia strechy beží pozdĺž uhla s z na hornej hrane horných dosiek steny. Každá vrstva prekladu je samostatný prvok vedľa ostatných. Keď to stlačíte znova, nahradia sa prvky umiestnené predtým, a {{ui:Odstrániť umiestnené prvky}} ich odstráni; každé je jeden krok späť. Analýza tieto prvky vynecháva: nie sú to oceľové prvky rámu.

## Listy PDF

{{ui:Listy PDF}} uloží jednu stranu A3 pre každý panel: panel v mierke so všetkými označenými kusmi, celkové rozmery, rezný zoznam a titulný pás.

Problémy v paneli {{ui:Problémy}}: otvor príliš blízko konca steny alebo iného otvoru, prekladový nosník, ktorý sa nezmestí pod horné dosky, kus dlhší ako najdlhší materiál.

Panel {{ui:Problémy}} tiež uvádza **Rozhrania (LOD 350)** pre panely stien a betónové steny: otvor, ktorý prekračuje koniec alebo hornú hranu steny, dva prekrývajúce sa otvory a otvor v betónovej stene širší ako 1000 mm bez lemovacieho prúta. Sú to odporúčania, rovnaké pravidlá, aké spúšťa audit BimCraft; šírka je počiatočná hodnota CadCraftu, nie norma.
