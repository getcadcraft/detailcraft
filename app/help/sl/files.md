---
title: Odpiranje, shranjevanje in izvoz datotek
summary: Datoteka modela DetailCraft, vsak izvoz, ki ga zapiše, kje so datoteke in kaj se razlikuje glede na brskalnik in povezavo.
keywords: odpri, shrani, izvozi, prenesi, datoteka, json, ifc, nc1, dstv, csv, pdf, zip, formati, uvozi
from: 6fbc8e8f
---

DetailCraft ima svojo datoteko, model, in pet izvozov. Vsako shranjevanje in vsak izvoz je prenos. Ničesar se ne naloži in ničesar se ne hrani na strežniku.

## Datoteka modela

Model DetailCraft se shrani kot `<name>.detailcraft.json`, kjer je `<name>` ime modela na podoknu {{ui:Model}}. Vsebuje mreže, nivoje, elemente (z izvrtinami in izrezi), spoje in njihove nastavitve, temeljne stope ter vaše profile po meri.

Deli, oznake, vijaki, vari in palice se ne shranjujejo: DetailCraft jih ob vsakem odprtju znova izračuna iz modela. Zato je datoteka modela majhna.

### Shranjevanje

1. V polje {{ui:Ime}} na vrhu podokna {{ui:Model}} vpišite ime.
2. V skupini {{ui:Datoteka}} izberite {{ui:Shrani}} ali pritisnite {{key:Mod+S}}.
3. Brskalnik prenese `<name>.detailcraft.json`. Vrstica stanja prikaže „Shranjeno … (preneseno)“, pika na začetku naslova zavihka brskalnika pa izgine.

Vsako shranjevanje je nov prenos. Brskalnik ne prepiše datoteke, ki ste jo odprli; glede na svoje nastavitve doda številko k imenu, na primer `Frame (1).detailcraft.json`, ali vpraša, kam naj shrani. Svoje različice ohranite tako, da prenose preimenujete.

:::chromium
Chrome in Edge shranjujeta v mapo Prenosi, razen če je v nastavitvah prenosov brskalnika vklopljena možnost **Vprašaj, kam shraniti vsako datoteko pred prenosom**. Vklopite jo, če želite ob vsakem prenosu izbrati mapo in ime datoteke.
:::

:::firefox
Firefox shranjuje v mapo Prenosi ali vpraša vsakič, če je v njegovih nastavitvah vklopljena možnost **Vedno vprašaj, kam shraniti datoteke**.
:::

:::safari
Safari shranjuje v mapo Prenosi. Če želite spremeniti mapo, odprite **Safari, Nastavitve, Splošno, Lokacija prenesenih datotek**.
:::

### Odpiranje

1. V skupini {{ui:Datoteka}} izberite {{ui:Odpri}} ali pritisnite {{key:Mod+O}}.
2. Izberite datoteko `.detailcraft.json`.

Lahko pa datoteko povlečete iz {{pick:mac=Finder|windows=File Explorer|linux=vaš upravitelj datotek}} in jo spustite na pogled. Med vlečenjem pogled prikaže „Spustite model DetailCraft, da ga odprete“.

Če ima odprti model neshranjene spremembe, vas DetailCraft najprej vpraša: {{ui:Prekliči}}, {{ui:Zavrži spremembe}} ali {{ui:Najprej shrani}}.

DetailCraft pred uporabo preveri vsako polje datoteke. Kar ne more uporabiti, izpusti, vrstica stanja pa pove, kaj: na primer „2 elementa nista veljavna in sta izpuščena.“ Model, shranjen z novejšo različico DetailCraft, zavrne s sporočilom, namesto da bi ga odprl napol pravilno.

### Kaj se odpre

Lastne datoteke modelov (`.json`, do 50 MB) in datoteke IFC (`.ifc`, IFC2X3 ali IFC4, do 200 MB). Datoteka IFC, odprta ali uvožena z {{ui:Uvozi IFC}}, postane nov model njenih nosilcev, stebrov, elementov, plošč, mrež in nivojev, z izvrtinami in izrezi ter vijaki kot prostimi vijaki; poročilo navede, kaj je bilo izpuščeno. Glejte [Izvoz IFC](topic:ifc-export#import). DWG, DXF in modelov drugih programov za detajliranje še ne odpre; poskus prikaže: „DetailCraft odpira lastne modele (.detailcraft.json) in datoteke IFC (.ifc).“

## Izgubljeno delo, nedavne datoteke, namizna aplikacija

- Dokler model vsebuje spremembe, ki jih niste shranili, DetailCraft hrani kopijo v tem brskalniku. Če se zavihek ali brskalnik zapre, preden shranite, vas DetailCraft ob naslednjem odprtju vpraša **Obnovite svoje delo?**: obnovite kopijo ali jo zavrzite. Glejte [Obnovitev dela](common:recover).
- Modeli, ki ste jih nazadnje odprli, so navedeni na začetnem zaslonu, če brskalnik DetailCraftu dovoli, da jih znova odpre; kliknite enega, da ga znova odprete.
- V namizni aplikaciji {{ui:Shrani}} zapiše model nazaj v datoteko, ki ste jo odprli (v brskalniku prenese kopijo), dvoklik na model DetailCraft ali datoteko IFC pa ju odpre v DetailCraft.

## Izvozi

Vsi izvozi uporabljajo ime modela. Izberete jih v skupini {{ui:Izhod}}.

| Gumb | Datoteka | Vsebina |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: etaže, mreže, vsak jeklen del kot izvlek profila z izvrtinami in izrezi, sestavi, vijaki in sidrnimi palicami, temeljne stope in vsako palico. Glejte [Izvoz IFC](topic:ifc-export). |
| {{ui:Datoteke NC}} | `<name> NC.zip` | Ena datoteka DSTV `.nc1` na oznako dela. Glejte [Pošiljanje datotek NC delavnici](topic:nc-export). |
| {{ui:Kosovnica}} | `<name> BOM.csv` | Tri tabele v eni datoteki: deli, sestavi ter vijaki in sidrne palice. Glejte [Oznake in kosovnica](topic:marks-and-bom). |
| {{ui:Krivljenje}} | `<name> bending schedule.csv` | Vsaka oznaka palice v temeljnih stopah. Glejte [Temeljne stope in armatura](topic:footings-and-rebar). |
| {{ui:Delavniška risba}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` vsebuje list za vsako oznako dela; {{ui:Prenesi PDF}} prenese prikazanega (A3, razen če izberete drugo velikost). Glejte [Izdelava delavniških risb](topic:shop-drawings). |
| {{ui:Risbe}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ali `.dxf`, več v `<name> drawings DWG.zip` (ali `DXF.zip`) | Tloris, pogledi in sestavne risbe na velikosti lista, ki ste jo izbrali; DWG in DXF v polni velikosti, 1 enota = 1 mm na papirju. Glejte [Splošne postavitvene in sestavne risbe](topic:drawings). |

### Opombe o datotekah CSV

- Začnejo se z oznako zaporedja bajtov, da preglednice pravilno berejo črke s posebnimi znaki.
- Celica, ki se začne z `=`, `+`, `-` ali `@` (in ni navadno število), dobi na začetku apostrof, da jo preglednica nikoli ne izvede kot formule.
- Dolžine so v milimetrih, teže v kilogramih.

### Opombe o PDF

Besedilo v PDF uporablja standardno pisavo Helvetica. Znaki, ki jih ta nima (zunaj zahodnoevropskega nabora), se natisnejo kot „?“, vrstica stanja pa pove, koliko jih je.

## Enote

DetailCraft dela v milimetrih: mreže, nivoji, koordinate, profili, izvrtine in vsi izvozi. Imena profilov ohranijo objavljeno obliko (W12x50 je oznaka po ameriškem standardu, čeprav so dimenzije prikazane v mm). Vnos v palcih še ni na voljo.

## Brez povezave in na spletu

Odpiranje, shranjevanje in izvoz potekajo v brskalniku, zato delujejo enako z naslonjeno povezavo ali brez nje, ko se DetailCraft enkrat naloži.

Za uporabo DetailCraft brez povezave pozneje izberite {{ui:Shrani za delo brez povezave}} v vrstici aplikacije, medtem ko ste na spletu. Gumb šteje navzgor („Shranjujem 3 od 20“) in nato prikaže {{ui:Pripravljeno za delo brez povezave}}. Shranjena kopija vključuje knjižnico 3D grafike (približno 2.6 MB) in to pomoč, zato po shranjevanju delujejo 3D pogled, vsi izvozi in pomoč tudi brez povezave. Podrobnosti in kaj še potrebuje povezavo: [Delo brez povezave](common:offline).

:::offline
Niste povezani z omrežjem. Če vrstica aplikacije prikazuje {{ui:Pripravljeno za delo brez povezave}}, odpiranje, shranjevanje in izvoz delujejo kot običajno. Če ne, pustite ta zavihek odprt, ne osvežujte ga, dokler ne boste spet na spletu, in model shranite zdaj.
:::

Shranjevanje v oblak še ni na voljo, namizne različice pa še niso izdane. Varnostno kopirajte datoteke `.detailcraft.json` tako kot katere koli druge delovne datoteke. Več v [Kje so vaše datoteke](common:your-files).

## Neshranjeno delo

DetailCraft hrani model samo v odprtem zavihku. Če zaprete ali osvežite zavihek z neshranjenimi spremembami, brskalnik vpraša, ali želite zapustiti stran; besedilo je brskalnikovo. Pogosto shranjujte s {{key:Mod+S}}.
