---
title: O prezentare a ecranului
summary: Fiecare bară, panou și filă din DetailCraft după numele de pe ecran și rolul fiecăruia.
keywords: ecran, aranjare, bară de instrumente, panouri, proprietăți, bară de stare, rapoarte, interfață, ui, file
from: 94f81073
---

DetailCraft umple fereastra browserului sub bara aplicației. De sus în jos: bara de instrumente, apoi trei coloane (panoul {{ui:Model}}, vizualizarea, panoul {{ui:Properties}}), apoi filele de rapoarte, apoi bara de stare.

## Bara aplicației

Bara subțire din partea de sus aparține site-ului CadCraft, nu modelului. Afișează numele și versiunea aplicației, un link către {{ui:About DetailCraft}} (Despre DetailCraft), {{ui:Help}} (sau {{key:F1}}) pentru acest ajutor, {{ui:Save for offline}}, butonul de mod ecran și comutatorul {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} păstrează DetailCraft, vizualizarea 3D și acest ajutor în browser, astfel încât să se deschidă fără conexiune. Afișează {{ui:Offline ready}} odată salvat; apăsați-l atunci pentru {{ui:Save again (get the newest version)}} sau {{ui:Remove the offline copy}}. Vedeți [Lucrul offline](common:offline).
- {{ui:Paper}} dă un ecran luminos, iar {{ui:Model}} unul întunecat. Vizualizarea 3D urmează imediat; nimic din model nu se schimbă.
- Butonul de mod ecran și {{key:Ctrl+Shift+F}} trec prin modul normal, ecran complet și ecran complet cu barele ascunse. {{key:Ctrl+Shift+F}} folosește tasta Control pe orice calculator, inclusiv pe Mac. Cu barele ascunse, treceți cu indicatorul pe marginea de sus a ecranului (sau atingeți-o) pentru a le readuce. {{key:Esc}} iese din ecranul complet.

## Bara de instrumente

Bara de instrumente are cinci grupuri. Treceți cu indicatorul peste un buton pentru a vedea ce face și care este tasta sa.

| Grup | Butoane | Ce fac |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Pornesc un model nou, deschid un `.detailcraft.json` salvat sau un fișier IFC, salvează unul sau deschid cadrul exemplu |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Instrumentul pe care îl folosește următorul clic în vizualizare |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, și în {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Adaugă o conexiune la grinda, stâlpul sau contravântuirea selectată sau copiază conexiunea selectată la fiecare îmbinare asemănătoare |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Pas înapoi și pas înainte prin modificări; copiază selecția și o lipește. {{ui:More}} deschide un meniu cu {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} și {{ui:Select none}}, fiecare cu tasta sa |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, și în {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Descarcă un export sau deschide planșele de desen |

Butoanele și elementele de meniu care nu pot acționa în acest moment sunt estompate, iar la trecerea peste ele apare motivul. {{ui:End plates}} cere o grindă selectată, {{ui:Base plate}} un stâlp selectat, {{ui:Similar}} o conexiune selectată, {{ui:Shop drawing}} un model cu piese, {{ui:Copy}} o bară sau o fundație selectată, iar {{ui:Paste}} ceva copiat. Vedeți [Copierea, lipirea și duplicarea](topic:copy-paste).

## Panoul Model (stânga)

- {{ui:Model}}: {{ui:Name}} modelului. Dă numele fiecărui fișier salvat sau exportat.
- {{ui:Grids}}: liniile de grilă și distanțele lor, și {{ui:Apply grids}}. Vedeți [Configurarea grilelor și a nivelurilor](topic:grids-and-levels).
- {{ui:Levels}}: un rând pentru fiecare nivel (nume și cotă în mm), {{ui:Add level}} și {{ui:Apply levels}}.
- {{ui:Custom profile}}: creați propria secțiune parametrică. Rămâne închis până o deschideți.
- {{ui:Part marks}}: fiecare marcă de piesă din model, cu profilul, lungimea și numărul ei. Faceți clic pe o marcă pentru a selecta prima piesă cu ea.

{{ui:Grids}}, {{ui:Levels}} și {{ui:Custom profile}} se pliază: faceți clic pe titlurile lor.

## Vizualizarea (mijloc)

Vizualizarea arată modelul în 3D. Deasupra ei, bara de vizualizare are trei butoane și o listă:

- {{ui:3D}}: rotiți liber modelul.
- {{ui:Plan}}: priviți drept în jos spre un nivel. Lângă butoane apare o listă de niveluri. Tot ce se află mai sus de 1,5 m față de nivel este tăiat, ca să vedeți și să faceți clic clar pe nivel.
- {{ui:Elevation}}: priviți drept spre o linie de grilă notată cu o literă (Grila A, Grila B …). Apare o listă de grile cu litere. Este afișat doar oțelul aflat la cel mult 1 m de acea linie.
- Butonul de potrivire din capătul din dreapta al barei de vizualizare face zoom, astfel încât să arate întregul model.

Puncte mici marchează fiecare intersecție de grilă, la fiecare nivel. Cât timp un instrument de plasare este activ, punctul cel mai apropiat de indicator se aprinde, iar bara de stare îl numește, de exemplu „A/2 la Nivelul 1”. Culorile deosebesc tipurile de elemente: stâlpii, grinzile, contravântuirile și plăcile au fiecare propria culoare, șuruburile și tijele alta, fundațiile sunt transparente, iar armătura este desenată ca tuburi. Găurile apar ca dopuri întunecate; decupările sunt tăiate.

Cum se rotește, se deplasează și se mărește: [Deplasarea în vizualizarea 3D](topic:navigate-3d).

Când modelul este gol, vizualizarea afișează o scurtă listă „Pornește un model”. Puteți plasa și un fișier de model salvat oriunde pe vizualizare, pentru a-l deschide.

## Panoul Properties (dreapta)

Ce arată acest panou depinde de ce faceți, iar titlul său spune ce anume: „Model”, „Plasare grindă”, „Grindă b2”, „Conexiune cu placă de capăt”, „Placă de bază”, „Fundația F1”, „3 selectate” sau „Lipire”.

- **Nimic selectat:** un rezumat al modelului (bare, conexiuni, fundații, piese, mărci, șuruburi, greutatea oțelului și a armăturii, grile, niveluri).
- **Un instrument de plasare activ:** opțiunile pentru următoarea piesă (profil, material, poziție, rotire și, pentru stâlpi, {{ui:Up to}}), un rezumat al profilului ales și un formular {{ui:Add by grid}} pentru plasare fără clic în vizualizare.
- **O bară selectată:** numele, profilul, materialul, poziția, rotirea, coordonatele celor două capete, marcile, lungimea tăiată și greutatea, găurile și decupările, și butoane pentru conexiuni, pentru desenul său de execuție și pentru {{ui:Delete}}.
- **O conexiune selectată:** fiecare setare de placă, șurub și sudură, șuruburile și sudura pe care le face, avertismentele sale și {{ui:Apply to similar}} (Aplicare la similare).
- **O fundație selectată:** poziția și dimensiunea sa, plasa de jos, barele de așteptare și mărcile de armătură pe care le folosește.
- **Mai multe elemente selectate:** câte bare din fiecare tip, conexiuni și fundații, greutatea lor din oțel și {{ui:Copy}}, {{ui:Duplicate}} și {{ui:Delete}}.
- **Lipire:** ce se află în clipboard și formulare pentru lipire după un decalaj tastat sau pe o intersecție de grilă aleasă din liste.

Câmpurile numerice iau efect când apăsați {{key:Enter}} sau când părăsiți câmpul. Fiecare modificare este un pas pe care îl puteți anula.

## Filele de rapoarte (jos)

- {{ui:Problems}}: tot ce DetailCraft nu a putut realiza sau ce vrea să verificați, cu un buton {{ui:Select}} pe fiecare rând. Fila arată numărul între paranteze.
- {{ui:Bill of materials}}: piese, ansambluri, șuruburi și tije de ancorare, cu greutăți și un link {{ui:Download CSV}}. Faceți clic pe o marcă de piesă pentru a selecta acea piesă.
- {{ui:Bending schedule}}: fiecare marcă de armătură din fiecare fundație, cu un link {{ui:Download CSV}}.

Cu o filă activă, {{key:Left}} și {{key:Right}} trec între file.

## Bara de stare

Bara de jos are trei părți: intersecția de grilă de sub indicator în timpul plasării, ultimul mesaj (ce tocmai s-a întâmplat sau de ce a fost refuzată o acțiune) și totalurile curente ale pieselor, șuruburilor, greutății oțelului și greutății armăturii. Când o acțiune pare să nu facă nimic, citiți mai întâi mesajul de aici.

Titlul filei browserului începe cu un punct (•) cât timp modelul are modificări nesalvate.

## Pe un ecran îngust

Sub aproximativ 760 de pixeli lățime, coloanele se așază una sub alta: bara de instrumente, vizualizarea, bara de stare, {{ui:Properties}}, filele de rapoarte și, la urmă, panoul {{ui:Model}}. Derulați pagina pentru a ajunge la ele. DetailCraft este aranjat pentru ecranul unui desktop sau laptop; un telefon este potrivit pentru vizualizare, nu pentru detaliere.
