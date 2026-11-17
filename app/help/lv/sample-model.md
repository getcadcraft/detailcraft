---
title: Iepazīt paraugrāmu
summary: Atveriet iebūvēto divjoma rāmi un izmantojiet to, lai uzzinātu, ko veido DetailCraft, no zīmēm līdz NC failiem.
keywords: paraugs, piemērs, demo, rāmis, mācīties, apskats, izmēģināt
from: 5c5944dd
---

Paraugrāmis ir neliels, pilnīgs modelis: katrs DetailCraft veidotais objekta veids parādās vismaz vienreiz. Tas ir ātrākais veids, kā iepazīt lietotni un pārbaudīt eksportu, pirms uz to paļaujaties.

## Atvēršana

1. Izvēlieties {{ui:Paraugs}} grupā {{ui:Fails}}.
2. Ja pašreizējam modelim ir nesaglabātas izmaiņas, izvēlieties {{ui:Vispirms saglabāt}} vai {{ui:Atmest izmaiņas}}.
3. Statusa joslā ir rakstīts "Paraugrāmis: 6 kolonnas ar balstplāksnēm, 4 sijas ar galaplāksnēm, saite, 7 pamati ar stiegrojumu."

Paraugs atveras kā jauns modelis ar nosaukumu "Paraugrāmis". Tas nemaina neko citu, un tam nav nekā, ko atsaukt.

## Kas tajā ir

- **Režģi** 1, 2, 3 ar 6000 mm un A, B ar 7000 mm. **Līmeņi** Līmenis 1 pie 0 un Līmenis 2 pie 4000.
- **Sešas kolonnas**, W12x50, no Līmenis 1 līdz Līmenis 2 katrā krustpunktā, katra uz 25 mm balstplāksnes ar četriem enkurstieņiem.
- **Četras sijas**, W16x26, Līmenis 2 pa režģa līnijām A un B, tērauda augša uz līmeņa, ar līdzenu skrūvētu galaplāksni abos galos (kopā astoņas).
- **Viena saite**, HSS4x4x1/4, no A/1 Līmenis 1 līdz A/2 Līmenis 2.
- **Seši plākšņu pamati**, 2000 x 2000 x 600, pa vienam zem katras kolonnas, ar āķainu apakšējo tīklu abos virzienos.
- **Vēl viens pamats** blakus rāmim, 2400 x 1800 x 600, ar sešiem āķainiem sākuma stieņiem, kas stāv augšup betona balstam.

## Izmēģināmās lietas

1. Noklikšķiniet uz sijas. Izlasiet tās {{ui:Detaļas zīme}}, {{ui:Mezgls}}, {{ui:Griešanas garums}} un {{ui:Apgriešana}}: griešanas garums ir īsāks par 6000 mm režģa soli, jo katra galaplāksne apgriež sijas galu atpakaļ par pusi no kolonnas dziļuma plus plāksnes biezums.
2. Noklikšķiniet uz kolonnas. Zem {{ui:Caurumi}} tā uzskaita caurumus, ko galaplāksnes izveidoja tās flanšā ("8 caurumi no savienojumiem"; vidējām kolonnām ir 16, pa vienai kopai katrā flanšā).
3. Kreisajā sarakstā {{ui:Detaļu marķējumi}} redziet, ka visas četras sijas dalās vienā zīmē: tas ir viens un tas pats tērauda gabals. Stūra kolonnas arī dalās zīmē, lai gan to caurumi vērsti pretējos virzienos, jo kolonna, kas pagriezta galu galā, ir tas pats gabals. Vidējās kolonnas ar caurumiem abos flanšos saņem citu zīmi.
4. Noklikšķiniet uz galaplāksnes (vai uz vienas no tās skrūvēm). Panelis {{ui:Rekvizīti}} rāda plāksnes, skrūvju un metinājuma iestatījumus, skrūves, ko tā veido (ar garumu, kas aprēķināts no savienojamā biezuma), un visus malas attāluma brīdinājumus.
5. Atveriet cilni {{ui:Materiālu saraksts}}. Detaļas, mezgli (sija ar abām galaplāksnēm ir viens mezgls), kā arī skrūves un enkurstieņi ir uzskaitīti ar svaru. Jums vajadzētu redzēt sešas detaļu zīmes: c1 (divas vidējās kolonnas) un c2 (četras stūra kolonnas), abas W12x50 pie 3975 mm; b1, četras W16x26 sijas pie 5650 mm; br1, saite; p1, astoņas PL20x180 galaplāksnes; un p2, seši PL25x400 balstplāksnes. Stiprinājumi ir 64 skrūves 20 x 70 A325 un 24 enkurstieņi 20 x 575.
6. Atveriet cilni {{ui:Liekšanas specifikācija}}. Seši identiski pamati dalās stieņu zīmēs; balsta pamats pievieno savas.
7. Noklikšķiniet uz saites un apskatiet grupu {{ui:Izvade}}: {{ui:Darbnīcas rasējums}} ir pelēks, jo darbnīcas rasējumi pašlaik aptver tikai I profilus un plāksnes.
8. Izvēlieties {{ui:NC faili}}. ZIP arhīvā ir fails katrai I profila un plāksnes zīmei; statusa joslā saites zīme ir uzskaitīta kā neierakstīta.
9. Izvēlieties {{ui:IFC}} un atveriet failu jebkurā IFC skatītājā, lai pārbaudītu, kā jūsu cita programmatūra to nolasa.

## Izmantošana kā sākumpunkts

Paraugs ir parasts modelis. Mainiet to, pēc tam pārdēvējiet laukā {{ui:Nosaukums}} un saglabājiet ar jauno nosaukumu, izmantojot {{key:Mod+S}}.
