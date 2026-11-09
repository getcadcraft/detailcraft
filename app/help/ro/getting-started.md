---
title: Primii pași cu DetailCraft
summary: Ce face DetailCraft în prezent, cum se deschide și un prim model, de la grile până la un desen de execuție, în zece minute.
keywords: primii pași, primul model, introducere, detaliere oțel, armătură, pornire rapidă, tutorial, prezentare generală
from: e4f16bbe
---

DetailCraft este aplicația de detaliere a oțelului și armăturii din familia CadCraft. Construiți un model 3D al unei structuri metalice pe grile și niveluri, îl conectați și obțineți ce are nevoie atelierul: mărci de piese și de ansambluri, o listă de materiale, desene de execuție pentru piese individuale, fișiere NC DSTV, un model IFC și un tabel de întinderi pentru tălpile de fundare.

Aceasta este o versiune timpurie. Face puține lucruri, dar cu grijă, în loc să facă totul deodată. Citiți [Ce nu este încă realizat](topic:not-built-yet) înainte să planificați lucru real în jurul ei.

## Ce face astăzi

- Grile și niveluri pe care le introduceți, în milimetri.
- Stâlpi, grinzi, contravântuiri și plăci din cataloage publicate de profile (AISC W, S, C, L, HSS și Pipe; europene IPE, HEA, HEB și UPN; britanice UB, UC, PFC, EA, UEA, SHS, RHS și CHS), plus profilele proprii parametrice.
- Două conexiuni: o placă de capăt înșurubată, de la o grindă la talpa unui stâlp, și o placă de bază a stâlpului cu patru tije de ancorare. Fiecare poate fi copiată la fiecare îmbinare asemănătoare.
- Găuri și decupări introduse prin poziție.
- Fundații izolate dreptunghiulare cu o plasă de jos și bare de așteptare.
- Mărci de piese și de ansambluri care se actualizează singure după fiecare modificare.
- Exporturi: IFC4, fișiere NC DSTV (profile I și plăci), lista de materiale ca CSV, tabelul de întinderi ca CSV și un PDF de desen de execuție pentru o piesă.

## Deschideți DetailCraft

1. Deschideți DetailCraft într-un browser de desktop: Chrome, Edge, Firefox sau Safari. Vedeți [Browsere și calculatoare](common:browsers).
2. Așteptați până când ecranul se umple. Bara de stare de jos spune „Gata. Deschideți Exemplu sau setați grile și niveluri și începeți plasarea barelor.”

Vizualizarea modelului are nevoie de grafică 3D (WebGL). Dacă în mijlocul ecranului scrie „Acest browser nu a putut porni grafica 3D (WebGL)”, vedeți [Depanare](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modelele dvs. rămân pe calculator. Deschiderea unui model citește fișierul în browser, iar salvarea descarcă un fișier. Nimic nu se încarcă. Salvarea în cloud nu este disponibilă încă. Vedeți [Unde ajung fișierele](common:your-files). Pentru a folosi DetailCraft fără conexiune mai târziu, alegeți {{ui:Save for offline}} din bara aplicației o dată, cât timp sunteți online; vedeți [Lucrul offline](common:offline).
:::

:::offline
Sunteți offline. DetailCraft funcționează fără conexiune doar dacă a fost salvat mai întâi pentru utilizare offline: butonul {{ui:Save for offline}} din bara aplicației trebuie să afișeze {{ui:Offline ready}}. Vedeți [Lucrul offline](common:offline).
:::

## Priviți mai întâi exemplul

Cel mai rapid mod de a vedea ce produce DetailCraft este cadrul exemplu.

1. Alegeți {{ui:Sample}} din grupul {{ui:File}} al barei de instrumente.
2. Vizualizarea afișează un cadru cu două deschideri: șase stâlpi cu plăci de bază, patru grinzi cu plăci de capăt, o contravântuire și șapte tălpi de fundare cu armătură.
3. Faceți clic pe o grindă. Panoul {{ui:Properties}} din dreapta arată marca piesei, lungimea tăiată, greutatea și găurile făcute de plăcile de capăt.
4. Deschideți fila {{ui:Bill of materials}} de jos pentru a vedea fiecare marcă de piesă, cu numărul și greutatea sa.

Ghidul [Explorarea cadrului exemplu](topic:sample-model) parcurge totul piesă cu piesă.

## Primul model

Un model nou are deja grilele 1 până la 3 pe A până la B, la 6000 mm, și două niveluri, Nivelul 1 la 0 și Nivelul 2 la 4000.

1. Alegeți {{ui:New}}. Dacă modelul curent are modificări, DetailCraft întreabă dacă să le salveze mai întâi.
2. Alegeți {{ui:Plan}} deasupra vizualizării. Lista de niveluri de lângă ea alege Nivelul 1.
3. Alegeți {{ui:Column}} din bara de instrumente sau apăsați {{key:C}}.
4. Faceți clic pe intersecția de grile A/1. Apare un stâlp W12x50 de la Nivelul 1 până la Nivelul 2. Bara de stare arată unde a fost plasat.
5. Faceți clic pe B/1, A/2 și B/2 pentru a plasa încă trei.
6. Alegeți Nivelul 2 din lista de niveluri, apoi {{ui:Beam}} sau apăsați {{key:B}}.
7. Faceți clic pe A/1, apoi pe A/2. O grindă W16x26 unește vârfurile celor doi stâlpi, cu partea de sus a oțelului la nivel.
8. Apăsați {{key:Esc}} pentru a reveni la {{ui:Select}}, apoi faceți clic pe grindă.
9. Alegeți {{ui:End plates}} din grupul {{ui:Connect}}. Ambele capete primesc o placă de capăt înșurubată, grinda este tăiată la dimensiune, iar prima placă de capăt este acum selectată.
10. Faceți clic din nou pe grindă.
11. Alegeți {{ui:Shop drawing}} din grupul {{ui:Output}}. Se deschide o previzualizare a desenului de execuție al grinzii. Alegeți {{ui:Download PDF}}.
12. Apăsați {{key:Mod+S}} pentru a salva modelul. Browserul descarcă `Untitled.detailcraft.json`.

Redenumiți modelul în câmpul {{ui:Name}} din stânga sus, înainte să salvați, astfel încât fișierul și fiecare export să poarte numele lui.

## Unde mergeți mai departe

- [O prezentare a ecranului](topic:workspace)
- [Configurarea grilelor și a nivelurilor](topic:grids-and-levels)
- [Deplasarea în vizualizarea 3D](topic:navigate-3d), cu mouse, touchpad sau ecran tactil
- [Trecerea de la alt software de detaliere](topic:coming-from), dacă cunoașteți un pachet mare de detaliere
- [Folosirea acestui ajutor](common:help)
