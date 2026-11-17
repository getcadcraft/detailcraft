---
title: Armiranje pravokotnega betonskega stebra
summary: Zgled, kako detajlirati pravokotni betonski steber v DetailCraftu: postavite ga, dodajte vzdolžne palice in vezi, preberite preverjanja, preklop nad njim in oznake palic ter narišite njegov delavniški list.
keywords: betonski steber, pravokotni steber, armatura stebra, vzdolžne palice, navpične palice, vezi, stremena, križne vezi, preklop, stik, izhodne palice, delež armature stebra, 1 odstotek, 8 odstotkov, razmik vezi, ACI 318-19 25.7.2, EN 1992-1-1 9.5, delavniška risba, oznake palic, 8C1, 3C2
from: aee2a3ca
---

Ta tema vzame en kvadratni steber od nič do preverjenega, narisanega in v seznam vnesenega detajla. Splošna pravila za nosilce, plošče in stene so v [Detajliranje armiranega betona](topic:reinforced-concrete); to je stebrov del, s številkami, ki jih lahko ponovite.

:::warning
DetailCraft detajlira palice, ki mu jih podate. Ne dimenzionira jih. Palice spodaj so izhodiščne vrednosti za zgled, ne priporočilo: velikost, število in razmik izbere odgovorni inženir.
:::

## Kaj je steber tukaj

Pravokotni steber ima širino (vzdolž svoje lokalne osi x) in globino čez (vzdolž lokalne osi y), svetli zaščitni sloj do vezi, vzdolžne palice na vsaki ploskvi in zaprte vezi. Zasuk zavrti vse skupaj; ploskvi ostaneta „ploskev širine“ in „ploskev globine“.

- Vzdolžne palice podate kot število na ploskvi širine in število na ploskvi globine. Vogalne palice štejejo na obeh, zato 3 in 3 naredita 8 palic; 4 in 4 naredita 12.
- Vezi so zaprti pravokotniki z dvema kavljema na enem vogalu, 135° ali 90°. Prva vez je določen razmik nad tlemi (in pod naslednjo), končne cone imajo gostejši razmik, sredina pa redkejšega.
- Kaj palice naredijo na vrhu: nadaljujejo in se preklopijo z zgornjimi palicami, zavihajo z 90° kavlji v tla ali se ustavijo pod vrhom.

## Izdelan steber

Steber 400 × 400 mm, 3600 mm med etažo nad njim in pod njim, vzdolžne palice #8, vezi #3, svetli zaščitni sloj 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, notranji.

1. Odprite zavihek {{ui:Beton}} in nastavite mrežne črte in nivoje, na katerih stoji steber (levo podokno).
2. V {{ui:Dodaj po mreži}} izberite {{ui:Betonski steber}}, kliknite presečišče mreže in oba nivoja, nastavite {{ui:Širina (mm)}} in {{ui:Globina čez (mm)}} na 400 ter izberite {{ui:Dodaj}}.
3. V podoknu {{ui:Lastnosti}} nastavite:
   - {{ui:Svetli zaščitni sloj (mm)}} 40;
   - {{ui:Vzdolžne palice}} #8, {{ui:Palice na ploskvi širine}} 3, {{ui:Palice na ploskvi globine}} 3;
   - {{ui:Vezi}} #3, {{ui:Kavlji}} 135°, {{ui:Razmik med (mm)}} 300, {{ui:Dolžina končne cone (mm)}} 600, {{ui:Razmik v končnih conah (mm)}} 150, {{ui:Prvo od ploskve (mm)}} 50;
   - {{ui:Palice na vrhu}} {{ui:Nadaljuje in preklopi z zgornjimi palicami}}.

Vsaka sprememba je en korak razveljavitve.

### Kaj dobite

| Del | Rezultat |
|---|---|
| Vzdolžne palice | 8 palic #8 (obroč 3 × 3), vsaka dolga 4375 mm: 3600 mm steber plus 775 mm preklop nad njim |
| Preklop | 757 mm potrebnih za tlačni preklop (ACI 318-19, 25.5.5.1, fy 420), 775 mm zagotovljenih: potreba zaokrožena navzgor na naslednjih 25 mm |
| Vezi | 17 vezi #3, vsaka z rezno dolžino približno 1359 mm, razmik 150 mm v obeh končnih conah po 600 mm in 300 mm med njima |
| Delež armature | 2.5 % bruto preseka (meje 1 % do 8 %, ACI 318-19, 10.6.1.1) |
| Svetli razmik palic | 112 mm (zahteva vsaj 40 mm, ACI 318-19, 25.2.3) |
| Razmik vezi | 300 mm (dovoljeno 400 mm: najmanjše od 16 premerov palic, 48 premerov vezi in manjše stranice, ACI 318-19, 25.7.2.1) |
| Velikost vezi | #3 (dovoljeno do 9.5 mm, ACI 318-19, 25.7.2.2) |

Vse to je na seznamu {{ui:Preverjanja}} elementa; preklop je tudi v {{ui:Preklopi in sidranje}}.

## Križne vezi

Z eno obodno vezjo so držane le vogalne palice. ACI 318-19, 25.7.2.3 dovoljuje, da srednja palica na ploskvi ostane brez opore, če je svetlo do vogalne palice oddaljena največ 150 mm. Pri 3 palicah na ploskvi, kot zgoraj, je to izpolnjeno. Pri 4 ali več palicah na ploskvi ni, DetailCraft pa to pove kot opozorilo ({{ui:Preverjanja}} in Težave): potrebne so „križne vezi“. **Križne vezi še niso narisane**: dodajte jih v risbo ročno ali izberite manj palic na ploskvi.

Za EN 1992-1-1 DetailCraft preveri velikost palic (vsaj 8 mm), število palic (vsaj 4), površino jekla (0.2 % do 4 % preseka), svetli razmik in razmik vezi (9.5.2 in 9.5.3).

## Preklop, temelj in steber pod njim

- Kjer **pod stebrom stoji temelj modela**, se steber preklopi z izhodnimi palicami temelja, njihov preklop pa se prav tako preveri.
- Kjer **pod njim stoji drug steber modela**, se preklopi z palicami tega stebra.
- Vpišite lastno {{ui:Dolžina preklopa (mm, 0 = po potrebi)}}, da jo prepišete; krajši od potrebnega je težava in je v preglednici označen z *.
- Tlačni preklopi so privzeti ({{ui:Tlačni preklop}} v nastavitvah); izberite {{ui:Natezni preklop}}, kadar je lahko steber v nategu.

## Oznake, seznam in delavniški list

Enake palice imajo eno oznako: vzdolžne palice opisanega stebra so 8C1, njegove vezi 17C2 (najprej število, nato črka vrste C za steber in tekoča številka). Pojavijo se v zavihku {{ui:Armaturni izvleček}} z rezno dolžino in težo ter v CSV iz {{ui:Izhod}} › {{ui:Več}} › {{ui:Krivljenje}}.

Ob stebru izberite {{ui:Delavniška risba}} za list s stebrom v pogledu (vsaka palica, njena oznaka, cone vezi in preklop kotirani) in prerezom na sredini, ki mu sledi list krivljenja palic. Shranite {{ui:Ta list kot PDF}}.

## Česa to ne počne

- Okrogli stebri in spirale ter stebri, ki niso pravokotni: še niso izdelani.
- Vogalne in križne vezi znotraj preseka ter potresno detajliranje (ACI 318-19, poglavje 18): še niso izdelani.
- Stiki na mestih, ki jih izberete, ali zamaknjeni: vse palice se preklopijo v enem preseku.
- Ali so palice dovolj za obremenitev: to je projekt inženirja.
