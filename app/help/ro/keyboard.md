---
title: Acțiuni cu tastele și mouse-ul
summary: Fiecare scurtătură de tastatură și fiecare acțiune cu mouse-ul, trackpad-ul sau ecranul tactil din DetailCraft, din cod.
keywords: tastatură, scurtături, taste rapide, taste, mouse, trackpad, atingere, ctrl, command, fișă de referință
from: 05a2dea0
---

Cum se scriu tastele în acest ajutor: [Taste, mouse-uri și trackpad-uri](common:keys). Pe Mac, {{key:Mod}} este tasta Command; în rest este Ctrl.

## Instrumente

Acestea funcționează când cursorul nu este într-un câmp de text sau numeric.

| Tastă | Face |
|---|---|
| {{key:V}} | {{ui:Selectare}} |
| {{key:B}} | {{ui:Grindă}} |
| {{key:C}} | {{ui:Stâlp}} |
| {{key:R}} | {{ui:Contravântuire}} |
| {{key:P}} | {{ui:Placă}} |
| {{key:F}} | {{ui:Talpă de fundare}} |
| {{key:S}} | {{ui:Scară}} |
| {{key:M}} | Mutarea selecției prin alegerea a două intersecții ale grilei ([Selectare cu fereastră, mutare, rotire, oglindire, modificare multiplă](topic:select-and-change)) |
| {{key:Esc}} | Eliberați o fereastră de selecție trasă sau puneți la loc piesele trase; anulați o mutare, primul punct al unei grinzi, al unei contravântuiri sau al unei plăci, sau o lipire; apăsat din nou, reveniți la {{ui:Selectare}}; în {{ui:Selectare}}, goliți selecția. Dacă meniul {{ui:Mai multe}} este deschis, îl închideți |
| {{key:Delete}} sau {{key:Backspace}} | Ștergeți selecția (tot ce este selectat, într-un singur pas de anulare) |

## Fișier și editare

| Tastă | Face |
|---|---|
| {{key:Mod+S}} | Salvați modelul (descărcare). Funcționează chiar și când scrieți într-un câmp |
| {{key:Mod+O}} | Deschideți un model. Funcționează chiar și când scrieți într-un câmp |
| {{key:Mod+Z}} | Anulare (în afara câmpurilor de text; într-un câmp anulează ce ați scris) |
| {{key:Mod+Y}} sau {{key:Mod+Shift+Z}} | Refacere |

## Copiere și lipire

Acestea funcționează când cursorul nu este într-un câmp de text sau numeric (acolo copiază, lipesc și selectează textul ca de obicei). Fiecare lipire, decupare, duplicare sau ștergere este un singur pas de anulare. Mai multe: [Copiere, lipire și duplicare](topic:copy-paste).

| Tastă | Face |
|---|---|
| {{key:Mod+C}} | {{ui:Copiere}} a barelor și a tălpilor selectate (cu găurile, decupările și îmbinările lor) |
| {{key:Mod+X}} | {{ui:Decupare}}: copiază selecția, apoi o șterge |
| {{key:Mod+V}} | {{ui:Lipire}}: copia urmează indicatorul; faceți clic pe o intersecție a grilei pentru a o plasa acolo |
| {{key:Mod+Shift+V}} | {{ui:Lipire în aceeași poziție}}: la coordonatele de unde a fost copiată |
| {{key:Mod+D}} | {{ui:Duplicare}}: o copie imediată, deplasată cu decalajul din [Setările DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Selectare totală}}: fiecare bară, îmbinare și talpă |
| {{key:Esc}} | {{ui:Anularea selecției}} |

Dacă ați selectat text pe pagină (de exemplu într-un tabel de raport) și nimic în model, {{key:Mod+C}} copiază textul, ca de obicei.

{{ui:Nou}}, {{ui:Exemplu}} și exporturile nu au taste; folosiți bara de instrumente.

Niciuna dintre aceste taste nu face nimic cât timp este deschisă o casetă de dialog (previzualizarea desenului de execuție sau o întrebare).

## Câmpuri și panouri

| Tastă | Face |
|---|---|
| {{key:Enter}} sau {{key:Tab}} | Aplică o valoare scrisă (fiecare modificare este un singur pas de anulare) |
| {{key:Enter}} în câmpul {{ui:Grile}}, {{ui:Niveluri}}, {{ui:Profil personalizat}}, de gaură sau de decupare | Același lucru ca apăsarea butonului formularului respectiv |
| {{key:Left}} {{key:Right}} | Treceți între filele {{ui:Probleme}}, {{ui:Listă de materiale}} și {{ui:Tabel de întinderi}} când o filă are focusul |
| {{key:Esc}} | Închideți previzualizarea desenului de execuție sau o casetă de întrebare (același lucru ca {{ui:Anulare}}) |

## Ecran și ajutor

| Tastă | Face |
|---|---|
| {{key:Ctrl+Shift+F}} | Treceți prin normal, ecran complet și ecran complet cu barele ascunse. Ctrl pe orice calculator, inclusiv pe Mac |
| {{key:Mod+,}} | Deschideți {{ui:Setări}} ([Setările DetailCraft](topic:settings)) |
| {{key:Esc}} | Ieșiți din ecranul complet |
| {{key:F1}} | Deschideți acest ajutor |

## Mouse

| Acțiune | În 3D | În Plan și Fațadă |
|---|---|---|
| Clic | Selectează o piesă sau plasează în cea mai apropiată intersecție când un instrument de plasare este activ (sau lipește acolo în timpul lipirii) | La fel |
| {{key:Shift}}, {{key:Ctrl}} sau {{key:Mod}} și clic | Adaugă piesa la selecție sau o scoate | La fel |
| Apăsați pe o piesă selectată și trageți | Mută selecția pe nivel; cu {{key:Mod}} ținut, în sus și în jos | Mută selecția (într-o fațadă: de-a lungul ei și în sus și în jos) |
| Trageți cu butonul stâng | Rotește modelul | Cu {{ui:Selectare}}: o fereastră de selecție (spre dreapta: complet în interior; spre stânga: atingând). La plasare: Pan |
| {{key:Shift}} și trageți cu butonul stâng | Cu {{ui:Selectare}}: o fereastră de selecție, adăugată la selecție. La plasare: Pan | Cu {{ui:Selectare}}: o fereastră de selecție, adăugată la selecție |
| {{key:Ctrl}} sau {{key:Mod}} și trageți cu butonul stâng | Pan | Nimic |
| Trageți cu butonul drept | Pan | Pan |
| Rotița | Zoom spre mijlocul vizualizării | Zoom |
| Trageți cu butonul din mijloc | Zoom | Cu {{ui:Selectare}}: Pan. Altfel: zoom |
| Trageți un fișier `.detailcraft.json` pe aplicație | Îl deschide | Îl deschide |

Un clic se numără doar dacă indicatorul se mișcă mai puțin de circa 5 pixeli între apăsare și eliberare; o mișcare mai lungă este o tragere.

## Trackpad

| Acțiune | Face |
|---|---|
| Glisare cu două degete în sus sau în jos, sau ciupire | Zoom |
| Apăsare și tragere | Rotire (3D) sau Pan (Plan și Fațadă) |
| {{key:Shift}} și apăsare și tragere | Pan în 3D |
| Clic cu două degete | Clic dreapta (nu există meniu în vizualizare) |

## Atingere

Pe o tabletă sau un ecran tactil:

| Acțiune | Face |
|---|---|
| Atingere | Selectează o piesă sau plasează în cea mai apropiată intersecție a grilei când un instrument de plasare este activ (o atingere aflată la aproximativ lățimea unui deget de ea contează) |
| Apăsare lungă pe o piesă | Adaugă piesa la selecție sau o scoate (ce face {{key:Shift}}+clic cu mouse-ul) |
| Un deget pe o piesă selectată, apoi trageți | Mută selecția, prinzându-se de intersecțiile grilei |
| Un deget în altă parte | Rotește modelul (3D) sau Pan (Plan și Fațadă) |
| Două degete | Ciupire pentru zoom, deplasare împreună pentru pan |

Butoanele, listele și câmpurile sunt mai mari când ecranul este doar tactil. Ferestrele de selecție au nevoie de mouse; cu degetele, folosiți atingerea și apăsarea lungă.

## Scurtăturile pe care le păstrează browserul

Unele scurtături aparțin browserului, iar nicio pagină nu le poate folosi, de exemplu {{key:Mod+W}} (închide fila), {{key:Mod+T}} (filă nouă) și {{key:Mod+N}} (fereastră nouă). Dacă {{key:Mod+Y}} deschide istoricul browserului în loc să refacă, folosiți {{key:Mod+Shift+Z}}.

Scurtăturile ajung la DetailCraft doar când pagina are tastatura. Dacă o tastă nu face nimic sau browserul reacționează în locul ei, faceți mai întâi clic pe o zonă goală a ferestrei DetailCraft (de exemplu după ce ați scris în bara de adrese).

## Unde se află mutarea

Nu există o comandă de mutare: selectați o piesă și trageți-o pe nivel (țineți {{key:Mod}} pentru a trage în sus și în jos) sau editați-i {{ui:Început}} și {{ui:Sfârșit}} în {{ui:Proprietăți}}.
