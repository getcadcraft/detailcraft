---
title: Një shëtitje në ekran
summary: Çdo shirit, panel dhe skedë në DetailCraft me emrin e tij në ekran, dhe për çfarë shërben secili.
keywords: ekran, paraqitja, shiriti i veglave, panelet, vetitë, shiriti i statusit, raportet, ndërfaqja, ui, skedat
from: 94f81073
---

DetailCraft mbush dritaren e shfletuesit nën shiritin e aplikacionit. Nga lart poshtë: shiriti i veglave, pastaj tri kolona (paneli {{ui:Modeli}}, pamja, paneli {{ui:Vetitë}}), pastaj skedat e raporteve, pastaj shiriti i statusit.

## Shiriti i aplikacionit

Shiriti i hollë në krye i takon faqes CadCraft, jo modelit. Shfaq emrin e aplikacionit dhe versionin, një lidhje për {{ui:Rreth DetailCraft}}, {{ui:Ndihmë}} (ose {{key:F1}}) për këtë ndihmë, {{ui:Ruaje për jashtë linje}}, butonin e mënyrës së ekranit dhe ndërrimin {{ui:Fletë}} / {{ui:Modeli}}.

- {{ui:Ruaje për jashtë linje}} e mban DetailCraft, pamjen 3D dhe këtë ndihmë në shfletuesin tënd, kështu hapet pa lidhje. Shkruan {{ui:Gati jashtë linje}} pasi ruhet; kliko pastaj për {{ui:Ruaje përsëri (merr versionin më të ri)}} ose {{ui:Hiq kopjen jashtë linje}}. Shih [Puna offline](common:offline).
- {{ui:Fletë}} jep një ekran të çelët dhe {{ui:Modeli}} një të errët. Pamja 3D ndiqet menjëherë; asgjë në modelin tënd nuk ndryshon.
- Butoni i mënyrës së ekranit dhe {{key:Ctrl+Shift+F}} ndërrojnë mes normales, ekranit të plotë dhe ekranit të plotë me shiritat të fshehur. {{key:Ctrl+Shift+F}} përdor tastin Control në çdo kompjuter, përfshirë Mac. Me shiritat të fshehur, qëndro me kursorin në skajin e sipërm të ekranit (ose prek atë) për t'i sjellë përsëri. {{key:Esc}} del nga ekrani i plotë.

## Shiriti i veglave

Shiriti i veglave ka pesë grupe. Qëndro mbi një buton për të parë çfarë bën dhe tastin e tij.

| Grupi | Butonat | Çfarë bëjnë |
|---|---|---|
| {{ui:Skedar}} | {{ui:I ri}}, {{ui:Hap}}, {{ui:Importo IFC}}, {{ui:Ruaj}}, {{ui:Shembull}} | Fillon një model, hap një `.detailcraft.json` ose skedar IFC të ruajtur, ruan një, ose hap skeletin shembull |
| {{ui:Vendos}} | {{ui:Përzgjidh}}, {{ui:Trari}}, {{ui:Kolona}}, {{ui:Diagonalja}}, {{ui:Pllaka}}, {{ui:Themeli}}, {{ui:Shkallë}} | Veglën që përdor klikimi i radhës në pamje |
| {{ui:Lidh}} | {{ui:Pllakat e skajit}}, {{ui:Pllaka baze}}, dhe në {{ui:Më shumë}}: {{ui:Pllaka prerjeje}}, {{ui:Bashkim}}, {{ui:Pllaka lidhëse}}, {{ui:Të ngjashme}} | Shton një lidhje te trari, kolona ose diagonalja e zgjedhur, ose kopjon lidhjen e zgjedhur te çdo bashkim si ai |
| {{ui:Ndrysho}} | {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Më shumë}} | Kthehen mbrapa dhe përpara nëpër ndryshime; kopjo zgjedhjen dhe ngjit atë. {{ui:Më shumë}} hap një menu me {{ui:Prit}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Ngjit në vend}}, {{ui:Dyfisho}}, {{ui:Fshi}}, {{ui:Përzgjidh të gjitha}} dhe {{ui:Mos përzgjidh asnjë}}, secili me tastin e vet |
| {{ui:Dalja}} | {{ui:IFC}}, {{ui:Skedarët NC}}, {{ui:BOM}}, {{ui:Vizatimi i punëtorisë}}, {{ui:Vizatimet}}, dhe në {{ui:Më shumë}}: {{ui:Përkulja}}, {{ui:Raporti i peshës sipas fazës}}, {{ui:KISS file for fabrication software}} | Shkarkon një eksport, ose hap fletët e vizatimit |

Butonat dhe artikujt e menusë që nuk mund të veprojnë tani janë të zbehur, dhe kur kalon mbi një të tillë shfaqet arsyeja. {{ui:Pllakat e skajit}} kërkon një trar të zgjedhur, {{ui:Pllaka baze}} një kolonë të zgjedhur, {{ui:Të ngjashme}} një lidhje të zgjedhur, {{ui:Vizatimi i punëtorisë}} një model me pjesë, {{ui:Kopjo}} një element ose themel të zgjedhur, dhe {{ui:Ngjit}} diçka të kopjuar. Shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste).

## Paneli i Modelit (majtas)

- {{ui:Modeli}}: {{ui:Emri}} i modelit. Emërton çdo skedar që ruan ose eksporton.
- {{ui:Rrjetet}}: vijat e rrjetit dhe distancat e tyre, dhe {{ui:Zbato rrjetet}}. Shih [Vendos rrjetet dhe nivelet](topic:grids-and-levels).
- {{ui:Nivelet}}: një rresht për çdo nivel (emri dhe kota në mm), {{ui:Shto nivel}} dhe {{ui:Zbato nivelet}}.
- {{ui:Profil i personalizuar}}: bëj prerjen tënde parametrike. Mbyllur derisa ta hapësh.
- {{ui:Shenjat e elementëve}}: çdo shenjë pjese në model me profilin, gjatësinë dhe numrin e saj. Kliko një shenjë për të zgjedhur pjesën e parë me të.

{{ui:Rrjetet}}, {{ui:Nivelet}} dhe {{ui:Profil i personalizuar}} palosen: kliko titujt e tyre.

## Pamja (mes)

Pamja tregon modelin në 3D. Mbi të, shiriti i pamjes ka tre butona dhe një listë:

- {{ui:3D}}: rrotullo modelin lirisht.
- {{ui:Planimetria}}: shiko drejt poshtë një niveli. Lista e niveleve shfaqet pranë butonave. Çdo gjë më shumë se 1.5 m mbi nivel priten, që ta shohësh dhe klikosh nivelin qartë.
- {{ui:Fasada}}: shiko drejt një vije rrjeti me shkronjë (Rrjeti A, Rrjeti B …). Shfaqet një listë rrjetesh me shkronja. Shfaqet vetëm çeliku brenda 1 m nga ajo vijë.
- Butoni i përshtatjes në skajin e djathtë të shiritit të pamjes zmadhon për të shfaqur të gjithë modelin.

Pika të vogla shënojnë çdo pikëprerje rrjeti në çdo nivel. Ndërsa një vegël vendosjeje është aktive, pika më e afërt me kursorin ndizet dhe shiriti i statusit e emërton, për shembull "A/2 te Niveli 1". Ngjyrat dallojnë llojet e elementeve: kolonat, trarët, diagonalet dhe pllakat kanë ngjyrën e tyre, bulonat dhe shufrat një tjetër, themelet janë transparente dhe armatura vizatohet si tuba. Vrimat shfaqen si tapa të errët; prerjet janë të prera.

Si të rrotullosh, lëvizësh dhe zmadhosh: [Lëviz në pamjen 3D](topic:navigate-3d).

Kur modeli është bosh, pamja shfaq një listë të shkurtër "Fillo një model". Mund të lësh gjithashtu një skedar modeli të ruajtur kudo mbi pamje për ta hapur.

## Paneli i Vetive (djathtas)

Ç'shfaq ky panel varet nga ajo që po bën, dhe titulli i tij thotë cili: "Modeli", "Vendos një trar", "Trari b2", "Lidhja e pllakës së skajit", "Pllaka baze", "Themeli F1", "3 të zgjedhura" ose "Ngjit".

- **Asgjë e zgjedhur:** një përmbledhje e modelit (elementët, lidhjet, themelet, pjesët, shenjat, bulonat, pesha e çelikut dhe armaturës, rrjetet, nivelet).
- **Një vegël vendosjeje aktive:** opsionet për pjesën e radhës (profili, materiali, pozicioni, rrotullimi, dhe për kolonat {{ui:Deri në}}), një përmbledhje e profilit të zgjedhur, dhe një formë {{ui:Shto sipas rrjetit}} për vendosje pa klikuar në pamje.
- **Një element i zgjedhur:** emri, profili, materiali, pozicioni, rrotullimi, koordinatat e dy skajeve, shenjat, gjatësia e prerë dhe pesha, vrimat dhe prerjet, dhe butonat për lidhjet, vizatimin e punëtorisë dhe {{ui:Fshi}}.
- **Një lidhje e zgjedhur:** çdo cilësim pllake, bulone dhe saldimi, bulonat dhe saldimi që bën, paralajmërimet e saj, dhe {{ui:Zbato te të ngjashmet}}.
- **Një themel i zgjedhur:** pozicioni dhe madhësia, bllok fundi, shufrat fillestare, dhe shenjat e shufrave që përdor.
- **Disa gjëra të zgjedhura:** sa elemente të çdo lloji, lidhje dhe themele, pesha e çelikut të tyre, dhe {{ui:Kopjo}}, {{ui:Dyfisho}} dhe {{ui:Fshi}}.
- **Ngjitja:** ç'ka në clipboard, dhe forma për ngjitje me një zhvendosje të shkruar ose në një pikëprerje rrjeti që zgjedh nga listat.

Fushat numerike hyjnë në fuqi kur shtyp {{key:Enter}} ose del nga fusha. Çdo ndryshim është një hap që mund ta zhbësh.

## Skedat e raporteve (poshtë)

- {{ui:Problemet}}: gjithçka që DetailCraft nuk mundi ta ndërtojë ose do që ta kontrollosh, me një buton {{ui:Përzgjidh}} në çdo rresht. Skeda shfaq numrin në kllapa.
- {{ui:Lista e materialeve}}: pjesët, montimet, dhe bulonat me shufrat e ankorimit, me peshat dhe një lidhje {{ui:Shkarko CSV}}. Kliko një shenjë pjese për ta zgjedhur atë pjesë.
- {{ui:Tabela e përkuljes}}: çdo shenjë shufre në çdo themel, me një lidhje {{ui:Shkarko CSV}}.

Kur një skedë është në fokus, {{key:Left}} dhe {{key:Right}} lëvizin mes skedave.

## Shiriti i statusit

Shiriti përgjatë fundit ka tri pjesë: pikëprerjen e rrjetit nën kursor gjatë vendosjes, mesazhin e fundit (çfarë ndodhi tani, ose pse diçka u refuzua), dhe totalet rrjedhëse të pjesëve, bulonave, peshës së çelikut dhe peshës së armaturës. Kur një veprim duket se nuk bën asgjë, lexo fillimisht mesazhin e këtij shiriti.

Titulli i skedës së shfletuesit fillon me një pikë (•) ndërsa modeli ka ndryshime që nuk i ke ruajtur.

## Në ekran të ngushtë

Nën rreth 760 piksel gjerësi, kolonat renditen njëra nën tjetrën: shiriti i veglave, pamja, shiriti i statusit, {{ui:Vetitë}}, skedat e raporteve, dhe paneli {{ui:Modeli}} i fundit. Lëviz faqen për t'i arritur. DetailCraft është krijuar për ekran desktop ose laptop; një telefon shërben për ta parë, jo për detajim.
