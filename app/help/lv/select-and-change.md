---
title: Atlasīt ar logu, pārvietot, pagriezt, spoguļot, mainīt daudzus
summary: Vilkt logu, lai atlasītu, vilkt atlasītās detaļas, lai tās pārvietotu, pārvietot, pagriezt vai spoguļot atlasi (vai tās kopiju) vai mainīt vairāku elementu profilu, materiālu, pozīciju vai pagriezienu vienlaikus.
keywords: lasso, žogs, brīvroku atlase, vilkt, vilkt un nomest, pārvietot velkot, pievilkšana, logs, krustojošs logs, kastes atlase, vilkt atlasei, atlasīt daudzus, pārvietot, pagriezt, spoguļot, apgriezt, kopēt, mainīt daudzus, vairāki elementi, profils, materiāls, pozīcija, pagrieziens, dažādi, režģa līnija
from: 50b16f9a
---

Katra no šīm darbībām ir viens atsaukšanas solis: viens {{key:Mod+Z}} atsauc visu.

## Atlase ar logu

- {{ui:Plāns}} un {{ui:Fasāde}}: velciet ar kreiso pogu no tukšas vietas. {{ui:3D}}: turiet nospiestu {{key:Shift}} un velciet (parasta vilkšana pagriež modeli).
- Velciet **pa labi**, lai izveidotu logu: tas atlasa to, kas ir pilnībā iekšā, un tiek zīmēts ar nepārtrauktu malu.
- Velciet **pa kreisi**, lai izveidotu krustojošu logu: tas atlasa visu, ko tas skar, un tiek zīmēts ar strīpotu līniju.
- Turiet {{key:Shift}}, sākot vilkšanu, lai pievienotu atlasei, nevis to aizstātu.
- Plāns vai fasāde piedāvā tikai to, ko rāda: detaļas, kas nogrieztas virs plāna, vai vairāk nekā 1 m no fasādes režģa līnijas, netiek atlasītas.
- Vilkšanas laikā {{key:Esc}} atmet logu.

### Lasso

Izvēlieties **Lasso** sadaļā {{ui:Atlasīšana velkot}} [DetailCraft iestatījumos](topic:settings), un tā pati vilkšana zīmē brīvroku līniju, nevis taisnstūri.

- Tās pirmā kustība sānis nosaka atlasi: **pa labi** – tas, kas ir pilnībā iekšā (nepārtraukta līnija); **pa kreisi** – tas, ko tas skar (strīpota).
- Vilkšanas laikā nospiediet {{key:Space}}, lai pārslēgtos starp iekšā, skarot un **žogs**: atvērta līnija, kas atlasa visu, ko šķērso (punktēta, oranža).
- {{key:Shift}}, lai pievienotu, un {{key:Esc}}, lai atmestu, darbojas tāpat kā logam.

:::touch
Skārienekrānā viens pirksts kā iepriekš panoramē plānu un fasādi; atlasiet detaļas, pieskaroties tām.
:::

{{ui:Plāns}} un {{ui:Fasāde}}: panoramējiet ar labo vai vidējo pogu, kamēr ir ieslēgts rīks {{ui:Atlasīt}}.

## Detaļu vilkšana pārvietošanai

1. Vispirms atlasiet detaļas (klikšķis, {{key:Shift}}+klikšķis vai logs).
2. Nospiediet uz vienas no atlasītajām detaļām un velciet. Visa atlase pārvietojas; strīpota kontūra rāda, kur tā nonāks.
3. Atlaidiet, lai novietotu. {{key:Esc}} pirms atlaišanas atgriež visu atpakaļ.

- {{ui:3D}} un {{ui:Plāns}}: detaļas pārvietojas pa līmeni. Turiet {{key:Mod}}, sākot vilkšanu {{ui:3D}}, lai tā vietā pārvietotu tās augšup un lejup.
- {{ui:Fasāde}}: tās pārvietojas fasādes ietvaros – pa režģa līniju un augšup un lejup.
- Turētā detaļa piestiprinās pie režģa krustpunkta, kad tās gals nonāk dažu pikseļu attālumā no tā (krustpunkts iedegas, un statusa joslā tas nosaukts). Citur pārvietošana notiek ar 10 mm soli.
- Nospiežot uz detaļas, kas nav atlasīta, skats joprojām tiek pagriezts vai panoramēts, tāpēc vilkšana nekad nepārvieto kaut ko nejauši.
- Vilkšana ir viens atsaukšanas solis, tāpat kā {{ui:Pārvietot}}. Savienojumi seko saviem elementiem.

## Rekvizīta maiņa vairākiem elementiem

Atlasiet divus vai vairākus elementus. Sadaļā **Mainīt visiem** panelī {{ui:Rekvizīti}}:

- {{ui:Profils}}, {{ui:Pozīcija}}: sijām, kolonnām un saitēm starp tiem.
- {{ui:Plāksnes biezums (mm)}} un {{ui:Plāksnes platums (mm)}}: plāksnēm.
- {{ui:Materiāls}} un {{ui:Pagrieziens (°)}}: visiem.

Lauks rāda **Dažādi**, ja elementi nesakrīt. Izvēlieties vai ierakstiet vērtību, un katrs piemērojamais elements to pārņem; statusa joslā rakstīts, cik ir mainīti un cik saglabājuši savu.

Skaitļu laukos panelī {{ui:Rekvizīti}} var ierakstīt arī aprēķinu: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Aprēķins, ko nevar nolasīt, tiek noraidīts, un statusa joslā rakstīts, kur kļūda.

## Pārvietot, pagriezt vai spoguļot

Atlasiet elementus un pamatus (arī viens darbojas), tad izmantojiet **Pārvietot, pagriezt, spoguļot** panelī {{ui:Rekvizīti}}. Savienojumi paši netiek pārvietoti: tie seko saviem elementiem. Ja pārvietojat siju, bet ne tās kolonnu, statusa joslā rakstīts, cik savienojumu tagad savieno pārvietotu elementu ar paliekošu, un [Problēmas](topic:troubleshooting) norāda, ja tie vairs neatbilst.

- **Pārvietot:** ierakstiet x, y un z milimetros un izvēlieties {{ui:Pārvietot}}. Vai izvēlieties {{ui:Norādiet divus punktus}} (vai nospiediet {{key:M}}): noklikšķiniet režģa krustpunktu, no kura pārvietot, tad to, uz kuru pārvietot. Strīpota kontūra seko rādītājam.
- **Pagriezt plānā:** ierakstiet leņķi (pretēji pulksteņrādītāja virzienam, skatot no augšas) un izvēlieties, ap ko griezt: atlases vidu vai režģa krustpunktu. Kolonnas pagriežas kopā ar rāmi.
- **Spoguļot:** izvēlieties režģa līniju. Spoguļattēls ir tas pats profils, pagriezts otrādi: I-veida profilam flanši paliek, kanāls vērsts uz otru pusi (tā augša un apakša apmainās), un caurumi un izgriezumi seko detaļai.
- Atzīmējiet **Paturēt oriģinālu (izveidot kopiju)**, lai atlase paliktu savā vietā, bet pārvietotu, pagrieztu vai spoguļotu kopiju. Tās savienojumi tiek pārņemti, ja [DetailCraft iestatījumos](topic:settings) ir ieslēgts {{ui:Kopēt galaplāksnes un balstplāksnes kopā ar elementiem}}.

Pagriešana notiek ap vertikālu līniju, un spoguļošana notiek vertikālā plaknē, tāpēc līmeņi paliek horizontāli, bet pamati – vertikāli.
