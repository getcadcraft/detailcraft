---
title: Primii pași cu DetailCraft
summary: Ce face DetailCraft astăzi, cum îl deschideți și un prim model, de la grile până la un desen de execuție, în zece minute.
keywords: primii pași, primul model, introducere, detaliere oțel, armătură, pornire rapidă, tutorial, prezentare generală
from: 3682c0d8
---

DetailCraft este aplicația de detaliere a oțelului și a armăturilor din familia CadCraft. Construiți un model 3D al unei structuri metalice pe grile și niveluri, o îmbinați și obțineți ce are nevoie atelierul: marcaje de piese și de ansambluri, o listă de materiale, desene de execuție pentru piese individuale, fișiere DSTV NC, un model IFC și un tabel de întinderi pentru tălpile de fundare.

Aceasta este o versiune timpurie. Face câteva lucruri scurte, cu grijă, în loc de totul deodată. Citiți [Ce nu este încă realizat](topic:not-built-yet) înainte să planificați lucrări reale în jurul ei.

## Ce face astăzi

- Grile și niveluri pe care le introduceți, în milimetri.
- Stâlpi, grinzi, contravântuiri și plăci din cataloage publicate de profile (AISC W, S, C, L, HSS și Pipe; IPE, HEA, HEB și UPN europene), plus profilele dvs. parametrice.
- Două tipuri de îmbinări: o placă de capăt cu șuruburi, de la o grindă la talpa unui stâlp, și o placă de bază a stâlpului cu patru tije de ancorare. Fiecare poate fi copiată la fiecare îmbinare similară.
- Găuri și decupări introduse prin poziție.
- Tălpi de fundare izolate, dreptunghiulare, cu o plasă inferioară și bare de așteptare.
- Marcaje de piese și de ansambluri care se actualizează singure după fiecare modificare.
- Exporturi: IFC4, fișiere DSTV NC (profile I și plăci), listă de materiale ca CSV, tabel de întinderi ca CSV și un PDF cu desenul de execuție al unei piese.

## Deschideți DetailCraft

1. Deschideți DetailCraft într-un browser de calculator: Chrome, Edge, Firefox sau Safari. Vedeți [Browsere și calculatoare](common:browsers).
2. Așteptați până când ecranul se umple. Bara de stare din partea de jos spune „Gata. Deschideți Exemplul sau setați grile și niveluri și începeți să plasați elemente.”

Vizualizarea modelului are nevoie de grafică 3D (WebGL). Dacă mijlocul ecranului spune „Acest browser nu a putut porni grafica 3D (WebGL)”, vedeți [Depanare](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modelele dvs. rămân pe calculatorul dvs. Deschiderea unui model îl citește în browser, iar salvarea descarcă un fișier. Nimic nu este încărcat. Salvarea în cloud nu este disponibilă încă. Vedeți [Unde ajung fișierele dvs.](common:your-files). Ca să folosiți DetailCraft mai târziu fără conexiune, alegeți {{ui:Salvare pentru offline}} din bara aplicației o dată, cât timp sunteți online; vedeți [Lucrul offline](common:offline).
:::

:::offline
Sunteți offline. DetailCraft funcționează fără conexiune doar dacă a fost salvat pentru utilizare offline mai întâi: butonul {{ui:Salvare pentru offline}} din bara aplicației afișează atunci {{ui:Pregătit pentru offline}}. Vedeți [Lucrul offline](common:offline).
:::

## Priviți mai întâi exemplul

Cel mai rapid mod de a vedea ce creează DetailCraft este cadrul de exemplu.

1. Alegeți {{ui:Exemplu}} din grupul {{ui:Fișier}} al barei de instrumente.
2. Vizualizarea arată un cadru cu două deschideri: șase stâlpi cu plăci de bază, patru grinzi cu plăci de capăt, o contravântuire și șapte tălpi de fundare cu armătură.
3. Faceți clic pe o grindă. Panoul {{ui:Proprietăți}} din dreapta arată marcajul ei de piesă, lungimea de tăiere, greutatea și găurile făcute de plăcile de capăt.
4. Deschideți fila {{ui:Listă de materiale}} din partea de jos ca să vedeți fiecare marcaj de piesă, cu numărul și greutatea sa.

Plimbarea [Explorați cadrul de exemplu](topic:sample-model) parcurge piesele una câte una.

## Primul dvs. model

Un model nou are deja grilele 1 până la 3 pe A până la B, la 6000 mm, și două niveluri: Nivel 1 la 0 și Nivel 2 la 4000.

1. Alegeți {{ui:Nou}}. Dacă modelul curent are modificări, DetailCraft întreabă dacă doriți să le salvați mai întâi.
2. Alegeți {{ui:Plan}} deasupra vizualizării. Lista de niveluri de lângă el alege Nivel 1.
3. Alegeți {{ui:Stâlp}} din bara de instrumente sau apăsați {{key:C}}.
4. Faceți clic pe intersecția grilelor A/1. Un stâlp W12x50 apare de la Nivel 1 până la Nivel 2. Bara de stare spune unde a ajuns.
5. Faceți clic pe B/1, A/2 și B/2 ca să plasați încă trei.
6. Alegeți Nivel 2 din lista de niveluri, apoi alegeți {{ui:Grindă}} sau apăsați {{key:B}}.
7. Faceți clic pe A/1, apoi pe A/2. O grindă W16x26 unește vârfurile celor doi stâlpi, cu talpa superioară a oțelului pe nivel.
8. Apăsați {{key:Esc}} ca să reveniți la {{ui:Selectare}}, apoi faceți clic pe grindă.
9. Alegeți {{ui:Plăci de capăt}} din grupul {{ui:Îmbinare}}. Ambele capete primesc câte o placă de capăt cu șuruburi, grinda este tăiată ca să se potrivească, iar prima placă de capăt este acum selectată.
10. Faceți clic din nou pe grindă.
11. Alegeți {{ui:Desen de execuție}} din grupul {{ui:Ieșire}}. Se deschide o previzualizare a desenului de execuție al grinzii. Alegeți {{ui:Descărcare PDF}}.
12. Apăsați {{key:Mod+S}} ca să salvați modelul. Browserul descarcă `Untitled.detailcraft.json`.

Redenumiți modelul în câmpul {{ui:Nume}} din stânga sus, înainte de salvare, ca fișierul și fiecare export să îi poarte numele.

## Unde mergeți mai departe

- [O prezentare a ecranului](topic:workspace)
- [Configurarea grilelor și a nivelurilor](topic:grids-and-levels)
- [Deplasarea în vizualizarea 3D](topic:navigate-3d), cu mouse, touchpad sau ecran tactil
- [Venind de la alte programe de detaliere](topic:coming-from), dacă cunoașteți un pachet mare de detaliere
- [Folosirea acestui ajutor](common:help)
