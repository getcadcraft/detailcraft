---
title: O prezentare a ecranului
summary: Fiecare bară, panou și filă din DetailCraft, după numele lor de pe ecran, și la ce folosește fiecare.
keywords: ecran, aranjare, bară de instrumente, panouri, proprietăți, bară de stare, rapoarte, interfață, ui, file
from: 454f74fd
---

DetailCraft umple fereastra browserului sub bara aplicației. De sus în jos: bara de instrumente, apoi trei coloane (panoul {{ui:Model}}, vizualizarea, panoul {{ui:Proprietăți}}), apoi filele de rapoarte, apoi bara de stare.

## Bara aplicației

Bara subțire din partea de sus aparține site-ului CadCraft, nu modelului. Ea arată numele și versiunea aplicației, un link către {{ui:Despre DetailCraft}}, {{ui:Ajutor}} (sau {{key:F1}}) pentru acest ajutor, {{ui:Salvare pentru offline}}, butonul modului de afișare și comutatorul {{ui:Hârtie}} / {{ui:Model}}.

- {{ui:Salvare pentru offline}} păstrează DetailCraft, vizualizarea 3D și acest ajutor în browser, ca să se deschidă fără conexiune. Afișează {{ui:Pregătit pentru offline}} odată salvat; apoi faceți clic pe el pentru {{ui:Salvare din nou (obținere a celei mai noi versiuni)}} sau {{ui:Eliminare a copiei offline}}. Vedeți [Lucrul offline](common:offline).
- {{ui:Hârtie}} dă un ecran luminos, iar {{ui:Model}} unul întunecat. Vizualizarea 3D urmează imediat; nimic din model nu se schimbă.
- Butonul modului de afișare și {{key:Ctrl+Shift+F}} trec pe rând prin normal, ecran complet și ecran complet cu barele ascunse. {{key:Ctrl+Shift+F}} folosește tasta Ctrl pe orice calculator, inclusiv pe Mac. Cu barele ascunse, indicați marginea de sus a ecranului (sau atingeți-o) ca să le aduceți înapoi. {{key:Esc}} iese din ecranul complet.

## Bara de instrumente

Bara de instrumente are cinci grupuri. Treceți cu cursorul peste un buton ca să vedeți ce face și care este tasta sa.

| Grup | Butoane | Ce fac |
|---|---|---|
| {{ui:Fișier}} | {{ui:Nou}}, {{ui:Deschidere}}, {{ui:Import IFC}}, {{ui:Salvare}}, {{ui:Exemplu}} | Pornesc un model, deschid un `.detailcraft.json` salvat sau un fișier IFC, salvează unul sau deschid cadrul de exemplu |
| {{ui:Plasare}} | {{ui:Selectare}}, {{ui:Grindă}}, {{ui:Stâlp}}, {{ui:Contravântuire}}, {{ui:Placă}}, {{ui:Talpă de fundare}}, {{ui:Scară}} | Instrumentul pe care îl folosește următorul clic în vizualizare |
| {{ui:Îmbinare}} | {{ui:Plăci de capăt}}, {{ui:Placă de bază}}, și în {{ui:Mai multe}}: {{ui:Plăcuțe de forfecare}}, {{ui:Îmbinare de continuitate}}, {{ui:Guseu}}, {{ui:Similare}} | Adaugă o îmbinare la grinda, stâlpul sau contravântuirea selectată, sau copiază îmbinarea selectată în fiecare nod similar |
| {{ui:Editare}} | {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Mai multe}} | Pași înapoi și înainte prin modificări; copiați selecția și lipiți-o. {{ui:Mai multe}} deschide un meniu cu {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare}}, {{ui:Ștergere}}, {{ui:Selectare totală}} și {{ui:Anularea selecției}}, fiecare cu tasta sa |
| {{ui:Ieșire}} | {{ui:IFC}}, {{ui:Fișiere NC}}, {{ui:BOM}}, {{ui:Desen de execuție}}, {{ui:Desene}}, și în {{ui:Mai multe}}: {{ui:Întinderi}}, {{ui:Raport de greutăți pe etape}}, {{ui:Fișier KISS pentru programe de fabricație}} | Descarcă un export sau deschide foile de desen |

Butoanele și elementele de meniu care nu pot acționa acum sunt estompate, iar dacă treceți cu cursorul peste ele, se spune de ce. {{ui:Plăci de capăt}} are nevoie de o grindă selectată, {{ui:Placă de bază}} de un stâlp selectat, {{ui:Similare}} de o îmbinare selectată, {{ui:Desen de execuție}} de o piesă selectată de tip profil I sau placă, {{ui:Copiere}} de o bară sau o talpă selectată, iar {{ui:Lipire}} de ceva copiat. Vedeți [Copiere, lipire și duplicare](topic:copy-paste).

## Panoul Model (stânga)

- {{ui:Model}}: {{ui:Nume}} modelului. Acesta denumește fiecare fișier salvat sau exportat.
- {{ui:Grile}}: liniile grilei și distanțele lor, și {{ui:Aplicare grile}}. Vedeți [Configurarea grilelor și a nivelurilor](topic:grids-and-levels).
- {{ui:Niveluri}}: un rând pentru fiecare nivel (nume și cotă în mm), {{ui:Adăugare nivel}} și {{ui:Aplicare niveluri}}.
- {{ui:Profil personalizat}}: creați propria secțiune parametrică. Rămâne închis până îl deschideți.
- {{ui:Mărci de piese}}: fiecare marcaj de piesă din model, cu profilul, lungimea și numărul său. Faceți clic pe un marcaj ca să selectați prima piesă cu el.

{{ui:Grile}}, {{ui:Niveluri}} și {{ui:Profil personalizat}} se pliază: faceți clic pe titlurile lor.

## Vizualizarea (mijloc)

Vizualizarea arată modelul în 3D. Deasupra ei, bara de vizualizare are trei butoane și o listă:

- {{ui:3D}}: rotiți liber în jurul modelului.
- {{ui:Plan}}: priviți direct în jos la un nivel. Lângă butoane apare o listă de niveluri. Orice este mai sus de 1.5 m deasupra nivelului este tăiat, ca să vedeți și să faceți clic clar pe nivel.
- {{ui:Fațadă}}: priviți direct la o linie de grilă cu literă (Grila A, Grila B …). Apare o listă de grile cu litere. Se arată doar oțelul aflat la cel mult 1 m de linia respectivă.
- Butonul de potrivire din capătul din dreapta al barei de vizualizare face zoom ca să arate tot modelul.

Puncte mici marchează fiecare intersecție de grilă la fiecare nivel. Cât timp un instrument de plasare este activ, punctul cel mai apropiat de cursor se aprinde, iar bara de stare îl numește, de exemplu „A/2 la Nivel 1”. Culorile deosebesc tipurile de elemente: stâlpii, grinzile, contravântuirile și plăcile au fiecare culoarea lor, șuruburile și tijele alta, tălpile de fundare sunt transparente, iar armăturile sunt desenate ca tuburi. Găurile apar ca dopuri întunecate; decupările sunt tăiate.

Cum rotiți, deplasați și măriți vizualizarea: [Deplasarea în vizualizarea 3D](topic:navigate-3d).

Când modelul este gol, vizualizarea arată o scurtă listă „Pornește un model”. Puteți trage și un fișier de model salvat oriunde în vizualizare ca să îl deschideți.

## Panoul Proprietăți (dreapta)

Ce arată acest panou depinde de ce faceți, iar titlul său spune care anume: „Model”, „Plasați o grindă”, „Grinda b2”, „Îmbinare cu placă de capăt”, „Placă de bază”, „Talpa de fundare F1”, „3 selectate” sau „Lipire”.

- **Nimic selectat:** un rezumat al modelului (bare, îmbinări, tălpi de fundare, piese, marcaje, șuruburi, greutatea oțelului și a armăturilor, grile, niveluri).
- **Un instrument de plasare activ:** opțiunile pentru următoarea piesă (profil, material, poziție, rotație și, pentru stâlpi, {{ui:Până la}}), un rezumat al profilului ales și un formular {{ui:Adăugare după grilă}} pentru plasare fără clic în vizualizare.
- **O bară selectată:** numele, profilul, materialul, poziția, rotația, coordonatele celor două capete, marcajele sale, lungimea de tăiere și greutatea, găurile și decupările sale, și butoane pentru îmbinări, desenul său de execuție și {{ui:Ștergere}}.
- **O îmbinare selectată:** fiecare setare de placă, șurub și sudură, șuruburile și sudura pe care le face, avertismentele sale și {{ui:Aplicare la similare}}.
- **O talpă selectată:** poziția și dimensiunea ei, plasa inferioară, barele de așteptare și marcile de armătură pe care le folosește.
- **Mai multe lucruri selectate:** câte bare de fiecare tip, îmbinări și tălpi de fundare sunt, greutatea lor de oțel, și {{ui:Copiere}}, {{ui:Duplicare}} și {{ui:Ștergere}}.
- **Lipire:** ce este în clipboard și formulare pentru a lipi printr-un decalaj tastat sau pe o intersecție de grilă aleasă din liste.

Câmpurile numerice iau efect când apăsați {{key:Enter}} sau părăsiți câmpul. Fiecare modificare este un pas pe care îl puteți anula.

## Filele de rapoarte (jos)

- {{ui:Probleme}}: tot ce DetailCraft n-a putut realiza sau ce vrea să verificați, cu un buton {{ui:Selectare}} la fiecare rând. Fila arată numărul între paranteze.
- {{ui:Listă de materiale}}: piese, ansambluri, șuruburi și tije de ancorare, cu greutăți și un link {{ui:Descărcare CSV}}. Faceți clic pe un marcaj de piesă ca să selectați acea piesă.
- {{ui:Tabel de întinderi}}: fiecare marcă de armătură din fiecare talpă, cu un link {{ui:Descărcare CSV}}.

Cu o filă focalizată, {{key:Left}} și {{key:Right}} trec între file.

## Bara de stare

Bara de-a lungul de jos are trei părți: intersecția de grilă de sub cursor în timpul plasării, ultimul mesaj (ce tocmai s-a întâmplat sau de ce a fost refuzat ceva) și totalurile curente de piese, șuruburi, greutate de oțel și greutate de armătură. Când o acțiune pare că nu face nimic, citiți mai întâi mesajul de aici.

Titlul filei browserului începe cu un punct (•) cât timp modelul are modificări nesalvate.

## Pe un ecran îngust

Sub aproximativ 760 de pixeli lățime, coloanele se așază una sub alta: bara de instrumente, vizualizarea, bara de stare, {{ui:Proprietăți}}, filele de rapoarte, apoi panoul {{ui:Model}} la urmă. Derulați pagina ca să ajungeți la ele. DetailCraft este aranjat pentru ecranul unui calculator de birou sau laptop; un telefon este bun pentru vizualizare, nu pentru detaliere.
