---
title: Meniuri, taste și mouse
summary: Alegeți un stil de meniu care se potrivește cu felul în care lucrați deja, dați oricărei comenzi propria tastă, mutați comenzile între filele panglicii și stabiliți ce fac rotița și butoanele mouse-ului.
keywords: stil meniu, meniuri, panglică, bară de instrumente, linie de comandă, scurtături, taste, personalizare, remapare, mouse, rotiță, inversare, direcția zoom-ului, buton din mijloc, buton drept, pan, orbitare, export, import, comutare, familiar, desenare clasică, panglică oțel
from: 4132c6e5
---

Comenzile DetailCraft sunt aceleași indiferent de cum ajungeți la ele. Un **stil de meniu** decide doar unde se află pe ecran, cum se numesc acolo și ce taste le execută. Alegeți unul în {{ui:Setări}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Meniuri, taste și mouse}}; schimbarea este imediată, iar acest browser o reține.

## Cele trei stiluri

| Stil | Ce obțineți |
|---|---|
| {{ui:DetailCraft}} | Bara de instrumente proprie DetailCraft (Fișier, Plasare, {{ui:Îmbinare}}, {{ui:Editare}}, {{ui:Ieșire}}) și tastele ei cu o singură literă: {{key:V}} selectare, {{key:B}} grindă, {{key:C}} stâlp, {{key:R}} contravântuire, {{key:P}} placă, {{key:F}} talpă de fundare, {{key:S}} scară. Punctul de start. |
| {{ui:Desenare clasică}} | Pentru cei care tastează comenzi: o panglică mică ({{ui:Acasă}}, {{ui:Vizualizare}}, {{ui:Ieșire}}) și o linie de comandă. Tastați BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (anulare), ZOOM, PLAN, 3D, DRAWINGS, NC sau HELP și apăsați {{key:Enter}}; {{key:Enter}} pe nimic repetă ultima comandă, {{key:Esc}} o șterge. Începeți să scrieți oriunde și literele merg în linia de comandă. Butonul din mijloc face pan; în 3D, {{key:Shift}} și butonul din mijloc orbitează. |
| {{ui:Panglică oțel}} | Filele așa cum le aranjează programele de detaliere a oțelului: {{ui:Modelare}} (bare, beton, scări), {{ui:Detaliere}} (îmbinări), {{ui:Editare}}, {{ui:Desene}} (desene și rapoarte), {{ui:Fabricație}} (fișiere NC, IFC) și {{ui:Vizualizare}}, cu un meniu {{ui:Fișier}} și butoane rapide în dreapta. Tastele cu o singură literă rămân. Butonul din mijloc face pan; în 3D, butonul stâng orbitează. |

Fiecare stil păstrează {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} și {{key:Mod+A}}. Panglicile includ și {{ui:3D}}, {{ui:Plan}}, {{ui:Fațadă}} și {{ui:Potrivire}} din bara de vizualizare.

:::tip
O tastă care aparține layout-ului propriu al DetailCraft, dar pe care stilul ales i-a dat-o altei comenzi, nu face nimic, iar linia de stare arată unde a ajuns comanda („În Panglica mea oțel, Stâlp este Ctrl+Alt+C”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} și tastele cu săgeți își păstrează mereu sensul, iar cât timp o bară este plasată pe jumătate sau o copie urmează indicatorul, literele aparțin DetailCraft.
:::

## Personalizare

1. Alegeți stilul cel mai apropiat de ce doriți, apoi faceți clic pe {{ui:Personalizare…}}.
2. La {{ui:Taste și meniuri}}, găsiți o comandă (caseta de căutare ajută). Faceți clic pe {{ui:Adăugare tastă}} și apăsați tasta, sau două taste una după alta pentru o tastă cu două litere. Faceți clic pe o tastă pentru a o scoate.
3. Cu o panglică, {{ui:Unde se află}} mută comanda pe altă filă și alt panou, în meniul {{ui:Fișier}} sau în {{ui:Doar taste}}.
4. La {{ui:Mouse}}, setați rotița, butoanele care fac pan în plan și în fațade și ce face fiecare buton în vizualizarea 3D.
5. Dați-i un nume și faceți clic pe {{ui:Salvare}}.

Salvarea unui stil integrat creează propria copie („Panglica mea oțel”); cel integrat nu se schimbă niciodată. O tastă atribuită la două comenzi apare cu roșu și trebuie corectată înainte de salvare.

## Mouse

- **Rotița mouse-ului**: {{ui:Derularea în sus mărește}} (implicit) sau {{ui:Derularea în sus micșorează}}, și cât de repede. O ciupire pe trackpad face mereu zoom în sensul în care se mișcă degetele.
- **Pan în planuri și fațade cu**: butonul din mijloc, butonul drept sau ambele. Cu instrumentul Selectare, butonul stâng trage mereu o fereastră de selecție.
- **Tragere în vizualizarea 3D**: {{ui:Propriile setări ale fiecărei vizualizări}} păstrează butoanele DetailCraft (stângul orbitează, mijlocul face zoom, dreptul face pan). Sau setați fiecare buton să orbiteze, să facă pan, zoom sau nimic; {{key:Shift}} cu un buton care orbitează sau face pan schimbă cele două între ele.

## Transferul stilului

{{ui:Export}} salvează stilul în uz ca un fișier mic `.ccinput.json`; {{ui:Import…}} adaugă unul, de pe alt calculator sau de la un coleg. Un fișier importat poate indica doar comenzile proprii ale DetailCraft: orice altceva din el este lăsat afară și numărat în linia de stare. {{ui:Ștergeți acest stil}} elimină unul dintre stilurile proprii.

:::note
Aceste setări rămân în acest browser. {{ui:Folosește acest stil în toate aplicațiile}} de sub cardurile stilurilor face ca fiecare aplicație să se deschidă în stilul corespunzător (bara proprie, o panglică sau Desenare clasică), cu modificările făcute în fiecare aplicație. DetailCraft nu are stil cu bară de meniu: când bara de meniu a altei aplicații este aleasă pentru toate aplicațiile, DetailCraft își păstrează bara proprie.
:::

Înrudite: [Tastatură și mouse](topic:keyboard) · [Setările DetailCraft](topic:settings) · [Venire de la alt software de detaliere](topic:coming-from)
