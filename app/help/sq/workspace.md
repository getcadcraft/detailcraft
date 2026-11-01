---
title: Një shfletim i ekranit
summary: Çdo shirit, panel dhe skedë e DetailCraft me emrin e tij në ekran, dhe për çfarë shërben secili.
keywords: ekrani, paraqitja, shiriti i veglave, panelet, vetitë, shiriti i statusit, raportet, ndërfaqja, ui, skedat
from: 454f74fd
---

DetailCraft mbush dritaren e shfletuesit nën shiritin e aplikacionit. Nga lart poshtë: shiriti i veglave, pastaj tre kolona (paneli {{ui:Model}}, pamja, paneli {{ui:Properties}}), pastaj skedat e raportit, pastaj shiriti i statusit.

## Shiriti i aplikacionit

Shiriti i hollë në krye i takon sajtit CadCraft, jo modelit. Shfaq emrin e aplikacionit dhe versionin, një lidhje për {{ui:Rreth DetailCraft}}, {{ui:Help}} (ose {{key:F1}}) për këtë ndihmë, {{ui:Save for offline}}, butonin e mënyrës së ekranit dhe ndërruesin {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} e mban DetailCraft, pamjen e tij 3D dhe këtë ndihmë në shfletues, që të hapet pa lidhje. Shfaq {{ui:Offline ready}} sapo ruhet; kliko pastaj për {{ui:Save again (get the newest version)}} ose {{ui:Remove the offline copy}}. Shih [Puna offline](common:offline).
- {{ui:Paper}} jep një ekran të ndritshëm dhe {{ui:Model}} një të errët. Pamja 3D ndiqet menjëherë; asgjë në modelin tënd nuk ndryshon.
- Butoni i mënyrës së ekranit dhe {{key:Ctrl+Shift+F}} kalojnë midis normal, ekran i plotë dhe ekran i plotë me shiritat e fshehur. {{key:Ctrl+Shift+F}} përdor tastin Control në çdo kompjuter, përfshirë Mac. Me shiritat të fshehur, shiko buzën e sipërme të ekranit (ose prek) për t'i kthyer. {{key:Esc}} del nga ekrani i plotë.

## Shiriti i veglave

Shiriti i veglave ka pesë grupe. Qëndro mbi një buton për të parë çfarë bën dhe tastin e tij.

| Grupi | Butonat | Çfarë bëjnë |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Nis një model, hap një `.detailcraft.json` të ruajtur ose një skedar IFC, ruaj një, ose hap kornizën shembull |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Veglën që përdor klikimi i radhës në pamje |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, dhe te {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Shton një lidhje te trari, kolona ose diagonalja e zgjedhur, ose kopjon lidhjen e zgjedhur te çdo bashkim si ajo |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Kthehu mbrapa dhe përpara në redaktimet; kopjo zgjedhjen dhe ngjite. {{ui:More}} hap një menu me {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} dhe {{ui:Select none}}, secili me tastin e vet |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, dhe te {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Shkarko një eksport, ose hap fletët e vizatimit |

Butonat dhe artikujt e menusë që nuk mund të veprojnë tani janë të zbehur, dhe kur qëndron mbi ta thotë pse. {{ui:End plates}} kërkon një trar të zgjedhur, {{ui:Base plate}} një kolonë të zgjedhur, {{ui:Similar}} një lidhje të zgjedhur, {{ui:Shop drawing}} një pjesë profili I ose pllakë të zgjedhur, {{ui:Copy}} një element ose themel të zgjedhur, dhe {{ui:Paste}} diçka të kopjuar. Shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste).

## Paneli {{ui:Model}} (majtas)

- {{ui:Model}}: {{ui:Name}} i modelit. Emërton çdo skedar që ruan ose eksporton.
- {{ui:Grids}}: vijat e rrjetit dhe distancat e tyre, dhe {{ui:Apply grids}}. Shih [Vendos rrjetet dhe nivelet](topic:grids-and-levels).
- {{ui:Levels}}: një rresht për çdo nivel (emri dhe kota në mm), {{ui:Add level}} dhe {{ui:Apply levels}}.
- {{ui:Custom profile}}: bëj prerjen tënde parametrike. Mbyllur derisa ta hapësh.
- {{ui:Part marks}}: çdo shenjë pjese në model me profilin, gjatësinë dhe numrin e saj. Kliko një shenjë për të zgjedhur pjesën e parë me të.

{{ui:Grids}}, {{ui:Levels}} dhe {{ui:Custom profile}} palosen: kliko titujt e tyre.

## Pamja (në mes)

Pamja shfaq modelin në 3D. Sipër saj, shiriti i pamjes ka tre butona dhe një listë:

- {{ui:3D}}: rrotullo lirshëm rreth modelit.
- {{ui:Plan}}: shiko drejt poshtë në një nivel. Pranë butonave shfaqet një listë niveleve. Çdo gjë më shumë se 1.5 m mbi nivel priset, që ta shikosh dhe klikosh qartë nivelin.
- {{ui:Elevation}}: shiko drejt një vije rrjeti me shkronjë (Rrjeti A, Rrjeti B …). Shfaqet një listë rrjetesh me shkronja. Shfaqet vetëm çeliku brenda 1 m nga kjo vijë.
- Butoni i përshtatjes në skajin e djathtë të shiritit të pamjes zmadhon për të shfaqur të gjithë modelin.

Pika të vogla shënojnë çdo kryqëzim rrjeti në çdo nivel. Ndërsa një mjet vendosjeje është ndezur, pika më e afërt me treguesin ndriçon dhe shiriti i statusit e emëron, p.sh. "A/2 në Level 1". Ngjyrat dallojnë llojet e elementëve: kolonat, trarët, diagonalet dhe pllakat kanë ngjyrën e tyre, bulonat dhe shufrat një tjetër, themelet janë transparente dhe armatura vizatohet si tuba. Vrimat shfaqen si tapa të errët; prerjet janë të prera.

Si të kthesh, lëvizësh dhe zmadhosh: [Lëviz në pamjen 3D](topic:navigate-3d).

Kur modeli është bosh, pamja shfaq një listë të shkurtër "Nis një model". Mund të lëshosh edhe një skedar modeli të ruajtur mbi pamje për ta hapur.

## Paneli {{ui:Properties}} (djathtas)

Çfarë shfaq ky panel varet nga ajo që po bën, dhe titulli i tij thotë cilin: "Modeli", "Vendos një trar", "Trari b2", "Lidhja e pllakës së skajit", "Pllakë baze", "Themeli F1", "3 të zgjedhura" ose "Ngjit".

- **Asgjë e zgjedhur:** përmbledhje e modelit (elementët, lidhjet, themelet, pjesët, shenjat, bulonat, pesha e çelikut dhe e armaturës, rrjetet, nivelet).
- **Një mjet vendosjeje i ndezur:** opsionet për pjesën e radhës (profili, materiali, pozicioni, rrotullimi, dhe për kolonat {{ui:Up to}}), një përmbledhje e profilit të zgjedhur, dhe një formular {{ui:Add by grid}} për vendosje pa klikuar në pamje.
- **Një element i zgjedhur:** emri, profili, materiali, pozicioni, rrotullimi, koordinatat e dy skajeve të tij, shenjat, gjatësia e prerë dhe pesha, vrimat dhe prerjet e tij, dhe butona për lidhjet, vizatimin e tij të punëtorisë dhe {{ui:Delete}}.
- **Një lidhje e zgjedhur:** çdo cilësim pllake, bulonash dhe saldimi, bulonat dhe saldimi që bën, paralajmërimet e saj, dhe {{ui:Apliko te të ngjashmet}}.
- **Një themel i zgjedhur:** pozicioni dhe madhësia e tij, blloku i poshtëm, shufrat fillestare, dhe shenjat e shufrave që përdor.
- **Disa gjëra të zgjedhura:** sa elementë të çdo lloji, lidhje dhe themele, pesha e çelikut e tyre, dhe {{ui:Copy}}, {{ui:Duplicate}} dhe {{ui:Delete}}.
- **Ngjitja:** çfarë është në kujtesën e fragmenteve, dhe formularë për ngjitje me një zhvendosje të shkruar ose mbi një kryqëzim rrjeti që zgjedh nga listat.

Fushat numerike hyjnë në fuqi kur shtyp {{key:Enter}} ose del nga fusha. Çdo ndryshim është një hap që mund ta zhbësh.

## Skedat e raportit (poshtë)

- {{ui:Problems}}: çdo gjë që DetailCraft nuk mundi ta ndërtojë ose do që ta kontrollosh, me një buton {{ui:Select}} në çdo rresht. Skeda shfaq numrin në kllapa.
- {{ui:Bill of materials}}: pjesët, montimet, dhe bulonat dhe shufrat e ankorimit, me peshat dhe një lidhje {{ui:Download CSV}}. Kliko një shenjë pjese për të zgjedhur atë pjesë.
- {{ui:Bending schedule}}: çdo shenjë shufre në çdo themel, me një lidhje {{ui:Download CSV}}.

Kur një skedë është e fokusuar, {{key:Left}} dhe {{key:Right}} lëvizin midis skedave.

## Shiriti i statusit

Shiriti përgjatë fundit ka tre pjesë: kryqëzimin e rrjetit nën tregues ndërsa vendos, mesazhin më të fundit (çfarë ndodhi, ose pse u refuzua diçka), dhe totalet në vazhdim të pjesëve, bulonave, peshës së çelikut dhe peshës së armaturës. Kur një veprim duket se nuk bën asgjë, lexo fillimisht mesazhin këtu.

Titulli i skedës së shfletuesit fillon me një pikë (•) ndërkohë që modeli ka ndryshime që nuk i ke ruajtur.

## Në një ekran të ngushtë

Nën rreth 760 piksel gjerësi, kolonat renditen njëra nën tjetrën: shiriti i veglave, pamja, shiriti i statusit, {{ui:Properties}}, skedat e raportit, pastaj paneli {{ui:Model}} i fundit. Lëviz faqen për t'i arritur. DetailCraft është përshtatur për ekran desktop ose laptop; një telefon shërben për ta parë, jo për detajim.
