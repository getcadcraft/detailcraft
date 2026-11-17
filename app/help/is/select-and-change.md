---
title: Velja með glugga, færa, snúa, spegla, breyta mörgum
summary: Dragðu glugga til að velja, dragðu valda hluta til að færa þá, færðu, snúðu eða speglaðu valið (eða afrit af því), eða breyttu sniði, efni, staðsetningu eða snúningi margra liða í einu.
keywords: lasso, girðing, frjálst val, draga, draga og sleppa, færa með drætti, smella að, gluggi, þvergluggi, kassaval, dragval, velja marga, færa, snúa, spegla, afrita, breyta mörgum, nokkra liði, snið, efni, staðsetning, snúningur, mismunandi, ásalína
from: 50b16f9a
---

Hvert af þessu er eitt afturkallsskref: eitt {{key:Mod+Z}} tekur allt til baka.

## Velja með glugga

- Í {{ui:Grunnmynd}} og {{ui:Útlit}} dregurðu með vinstri hnappi frá auðum stað. Í {{ui:3D}} heldurðu {{key:Shift}} niðri og dregur (venjulegur dráttur snýr líkaninu).
- Dragðu **til hægri** fyrir glugga: hann tekur það sem er alveg inni, teiknaður með heilli línu.
- Dragðu **til vinstri** fyrir þvergluggga: hann tekur allt sem hann snertir, teiknaður með strikalínu.
- Haltu {{key:Shift}} niðri meðan þú byrjar drættinum til að bæta við valið í stað þess að skipta því út.
- Grunnmynd eða útlit býður aðeins það sem það sýnir: hlutar sem eru skornir burt fyrir ofan grunnmyndina, eða meira en 1 m frá ásalínu útlitsins, eru ekki valdir.
- {{key:Esc}} meðan dregið er sleppir glugganum.

### Lasso

Veldu **Lasso** undir {{ui:Dráttur til að velja}} í [Stillingar DetailCraft](topic:settings) og sami dráttur dregur frjálsa línu í stað rétthyrnings.

- Fyrsta hliðarhreyfingin ákveður hvernig valið fer fram: **til hægri**, það sem er alveg inni (heil lína); **til vinstri**, það sem það snertir (strikalína).
- Ýttu á {{key:Space}} meðan dregið er til að skipta á milli innan, snertingar og **girðingar**: opin lína sem tekur allt sem hún þverar (punktalína, appelsínugul).
- {{key:Shift}} til að bæta við og {{key:Esc}} til að sleppa virka eins og fyrir gluggann.

:::touch
Á snertiskjá færir einn fingur grunnmyndina og útlitið eins og áður; veldu hluti með því að banka á þá.
:::

Í {{ui:Grunnmynd}} og {{ui:Útlit}} hliðrar þú með hægri eða miðhnappi meðan {{ui:Velja}}-verkfærið er virkt.

## Draga hluta til að færa þá

1. Veldu hlutana fyrst (smella, {{key:Shift}}+smella eða glugga).
2. Ýttu á einn af völdu hlutunum og dragðu. Allt valið færist; strikaður útlínur sýnir hvert það fer.
3. Slepptu til að staðsetja það. {{key:Esc}} áður en þú sleppir setur allt til baka.

- Í {{ui:3D}} og {{ui:Grunnmynd}} færast hlutarnir þvert yfir kótann. Haltu {{key:Mod}} niðri meðan þú byrjar drættinum í {{ui:3D}} til að færa þá upp og niður í staðinn.
- Í {{ui:Útlit}} færast þeir innan útlitsins: eftir ásalínunni og upp og niður.
- Hlutinn sem þú heldur smellur á ásskurð þegar endi hans kemur innan nokkurra pixla frá honum (skurðpunkturinn lýsist upp og stöðustikan nefnir hann). Annars fer færslan í 10 mm skrefum.
- Ef ýtt er á hlut sem er ekki valinn snýst eða hliðrast sýnin samt, þannig að dráttur færir aldrei eitthvað óvart.
- Dragið er eitt afturkallsskref, eins og {{ui:Færa}}. Tengingar fylgja liðum sínum.

## Breyta eiginleika á mörgum liðum

Veldu tvo eða fleiri liði. Undir **Breyta á þeim öllum** í {{ui:Eiginleikar}}-glugganum:

- {{ui:Snið}}, {{ui:Staðsetning}}: fyrir bitana, súlurnar og skástífurnar meðal þeirra.
- {{ui:Þykkt plötu (mm)}} og {{ui:Breidd plötu (mm)}}: fyrir plöturnar.
- {{ui:Efni}} og {{ui:Snúningur (°)}}: fyrir þá alla.

Reitur sýnir **Mismunandi** þegar liðirnir eru ekki sammála. Veldu eða skrifaðu gildi og sérhver liður sem það á við tekur það; stöðustikan segir hversu margir breyttust og hversu margir héldu sínu.

Talnareitir í {{ui:Eiginleikar}}-glugganum taka líka við reikningi: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Reikningur sem ekki er hægt að lesa er hafnaður og stöðustikan segir hvar hann fór úrskeiðis.

## Færa, snúa eða spegla

Veldu liði og undirstöður (ein ein og sér virkar líka), notaðu síðan **Færa, snúa, spegla** í {{ui:Eiginleikar}}-glugganum. Tengingar eru ekki færðar einar sér: þær fylgja liðum sínum. Ef þú færir bita en ekki súluna hans segir stöðustikan hversu margar tengingar tengja nú færðan lið við einn sem stóð kyrr, og [Vandamál](topic:troubleshooting) segir ef þær passa ekki lengur.

- **Færa:** skrifaðu x, y og z í millimetrum og veldu {{ui:Færa}}. Eða veldu {{ui:Veldu tvo punkta}} (eða ýttu á {{key:M}}): smelltu á ásskurðinn sem á að færa frá, og síðan þann sem á að færa á. Strikaður útlínur fylgir bendlinum.
- **Snúa í grunnmynd:** skrifaðu hornið (rangsælis, séð að ofan) og veldu hvað á að snúa um: miðju valsins eða ásskurð. Súlur snúast með rammanum.
- **Spegla:** veldu ásalínu. Speglunarmyndin er sama sniðið snúið hina leiðina: I-prófíll heldur flönsum sínum, U-prófíll snýr hina leiðina (efri og neðri hlið skipta um sæti), og göt og úrtökur fylgja hlutanum.
- Hakaðu við **Halda upprunalegu (búa til afrit)** til að skilja valið eftir þar sem það er og færa, snúa eða spegla afrit. Tengingar þess fylgja með þegar {{ui:Afrita endaplötur og undirplötur með liðum sínum}} er virkt í [Stillingar DetailCraft](topic:settings).

Snúningur snýst um lóðrétta línu og spegling fer fram í lóðréttu plani, þannig að kótar haldast láréttir og undirstöður standa lóðréttar.
