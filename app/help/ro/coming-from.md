---
title: Venind de la alt software de detaliere
summary: Cum se mapează obișnuințele unui pachet complet de detaliere pe DetailCraft și diferențele care îi surprind pe detaliatorii cu experiență.
keywords: trecere, migrare, familiar, flux de lucru, comparație, diferențe, numerotare, componente, catalog, desene, obișnuințe
from: 39639a5d
---

Dacă detaliați în Tekla Structures, cea mai mare parte din DetailCraft vă va părea familiară: grile, niveluri, profile dintr-un catalog, piese și ansambluri, racorduri, numerotare, fișiere NC, IFC. Scara este foarte diferită: Tekla Structures este un sistem complet de producție, iar DetailCraft este o aplicație mică și timpurie, care rulează în browser și face câteva lucruri de la un capăt la altul. Această pagină arată unde obișnuințele dumneavoastră se păstrează și unde nu.

:::tip
Dacă mâinile vă știu panglica din Tekla Structures, alegeți stilul de meniu {{ui:Panglică oțel}} din {{ui:Setări}} › {{ui:DetailCraft}} › {{ui:Meniuri, taste și mouse}}: filele Modelare, Detaliere, Editare, Desene, Fabricație și Vizualizare, iar butonul din mijloc face pan. Dacă veniți din AutoCAD și vă place să tastați comenzi, {{ui:Desenare clasică}} adaugă o linie de comandă (BEAM, COLUMN, ENDPLATE, ZOOM …). Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse).
:::

## Hartă rapidă

| Sunteți obișnuit cu | În DetailCraft |
|---|---|
| Crearea grilelor cu coordonate într-o casetă de dialog pentru grile | {{ui:Grile}} în panoul din stânga: etichete și distanțele dintre linii, nu coordonate absolute. Liniile numerotate merg într-un sens, cele cu litere în celălalt |
| Niveluri ca coordonate Z ale grilei | O listă separată {{ui:Niveluri}}, cu nume și cotă pe fiecare rând, aplicată cu {{ui:Aplicare niveluri}} |
| Alegerea punctelor oriunde, cu agățări | Clicurile se agață doar de intersecțiile grilei. Punctele în afara grilei se scriu în {{ui:Capete (x, y, z mm)}} al unui membru |
| Comenzile pentru stâlp, grindă și placă | {{ui:Stâlp}} ({{key:C}}), {{ui:Grindă}} ({{key:B}}), {{ui:Contravântuire}} ({{key:R}}), {{ui:Placă}} ({{key:P}}), {{ui:Talpă de fundare}} ({{key:F}}) |
| Dialogul de proprietăți ale piesei (dublu clic pe piesă) | Un singur clic: panoul {{ui:Proprietăți}} din dreapta este mereu activ; nu există casetă de dialog și nici butoanele Modificare sau Aplicare |
| Poziția pe plan, rotirea și setările de adâncime | {{ui:Poziție}} (partea de sus a oțelului, centrat sau jos pe linie) și {{ui:Rotire (°)}}. Nu există decalaje orizontale separate |
| Catalogul de profile | O listă fixă de 2,311 dimensiuni publicate (AISC W, S, C, L, HSS, Pipe; europene IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS și secțiunile tubulare formate la rece), plus plăci parametrice și propriile secțiuni {{ui:Profil personalizat}} |
| Catalogul de materiale | Șapte clase, într-o listă: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Aplicarea unui component de racord și caseta lui | Selectați grinda, alegeți {{ui:Plăci de capăt}}. Setările apar în panoul {{ui:Proprietăți}}. Există doar două racorduri: placă de capăt la talpa stâlpului și placă de bază |
| Conectare automată sau copierea unei îmbinări la îmbinări similare | Selectați un racord și alegeți {{ui:Aplicare la similare (n)}} |
| Numerotare cu serii și numere de start | Nicio comandă: mărcile se actualizează singure după fiecare modificare, cu prefixele fixe c, b, br, p și C, B, BR, P |
| Dialogurile de șuruburi și găuri | Găurile se introduc prin față și poziție. Șuruburile vin doar din racorduri |
| Instrumentele de tăiere, de potrivire și de tăiere poligonală | Decupări (sus sau jos, la oricare capăt) doar pe profile I. Tăierile de la racorduri sunt automate |
| Rapoarte și șabloane | Trei rapoarte fixe în file jos și descărcări CSV |
| Crearea desenelor și lista de desene | Un desen de execuție pe marcă de piesă, toate făcute deodată, previzualizate și apoi descărcate ca un singur PDF sau foaie cu foaie. Nimic nu se păstrează și nu se editează |
| Exportul fișierelor NC | {{ui:Fișiere NC}}: un fișier DSTV pe marcă de piesă, doar profile I și plăci, într-o arhivă ZIP |
| Exportul IFC | {{ui:IFC}}: IFC4 al întregului model, cu armătură |
| Armătură în orice piesă de beton | Armătură doar în tălpi dreptunghiulare de fundare, cu mărimi de bare US, cu o plasă inferioară și bare de așteptare |
| Model salvat într-un dosar de proiect, multiutilizator | Un fișier `.detailcraft.json` pe care îl descărcați. Un singur utilizator, pe calculator |
| Istoric de anulare | {{key:Mod+Z}} și {{key:Mod+Y}}, până la 200 de pași, păstrați până la deschiderea sau pornirea altui model |

## Diferențe care îi încurcă pe oameni

### Mărcile se schimbă singure

Nu există un pas de numerotare. Mărcile sunt recalculate după fiecare modificare, deci sunt mereu actuale, dar pot și să se renumeroteze: adăugați un stâlp și c3 de ieri poate fi acum c4. Nu există un „istoric de numerotare” care să păstreze mărcile vechi. Terminați modelul, apoi scoateți lista materialelor, fișierele NC și desenele de execuție împreună, dintr-un singur fișier salvat.

### Butonul din mijloc zoomează; nu face pan

În vederea 3D: trageți cu stânga pentru a roti, cu dreapta pentru a face pan, rotița face zoom, iar tragerea cu butonul din mijloc face și ea zoom. Ținând {{key:Shift}} în timp ce trageți cu stânga, faceți și pan. Rotița face zoom spre mijlocul vederii, nu spre cursor. Nu există alegere a centrului de rotație: modelul se rotește în jurul mijlocului vederii. Vezi [Deplasarea în vederea 3D](topic:navigate-3d).

### Stâlpii au implicit o singură direcție

La rotația 0, tălpile unui stâlp sunt orientate de-a lungul direcției grilei numerotate. Grinzile care merg între liniile grilei cu litere se leagă în inimă, iar plăcile de capăt sunt refuzate acolo („Grinzile care se leagă în inima unui stâlp nu sunt încă realizate”). Rotiți acei stâlpi cu 90° înainte să adăugați racorduri.

### Elevațiile doar pe liniile cu litere

{{ui:Fațadă}} privește doar de-a lungul liniilor grilei cu litere. Nu există vederi pe liniile numerotate, nici vederi salvate, nici planuri de lucru. Folosiți {{ui:3D}} sau {{ui:Adăugare după grilă}} pentru cadre pe liniile numerotate.

### Selectare, copiere și mutare

Selectați mai multe piese cu {{key:Shift}}+clic sau {{key:Mod+A}}, apoi copiați, decupați, lipiți (pe o intersecție a grilei, la un decalaj scris sau pe loc) și duplicați-le, cu racordurile cu tot ([Copierea, lipirea și duplicarea](topic:copy-paste)). Nu există selectare cu fereastră, nici filtru de selecție, nici mutare, oglindire sau matrice, iar proprietățile se schimbă câte un membru odată, în panoul {{ui:Proprietăți}}.

### Grilele nu trag membrii după ele

Membrii își păstrează coordonatele când schimbați distanța grilei; nimic nu se mută odată cu liniile grilei. Schimbați grila înainte să așezați oțelul sau editați după aceea coordonatele capetelor fiecărui membru.

### Racordurile nu sunt proiectate

Cele două racorduri așază plăci, găuri, șuruburi și suduri din numerele pe care le dați. Nu există nicio verificare de proiectare, doar avertismente la margine și la distanțe (din EN 1993-1-8 Tabelul 3.3).

### Găurile nu sunt tăiate în vederea 3D

Găurile apar ca dopuri întunecate. Sunt găuri reale în fișierele NC, în desenele de execuție și în fișierul IFC. Decupările sunt tăiate în vedere.

### Greutățile sunt brute

Greutatea oțelului nu scade găurile sau decupările, iar greutatea șuruburilor nu este inclusă.

### Doar milimetri

Totul se scrie și se afișează în milimetri, chiar și pentru profilele AISC. Numele profilelor păstrează forma publicată (W12x50, HSS6x6x1/4).

### Nu există desene de gestionat

Nu există listă de desene, editor de desene, plan general sau desene de ansamblu. Un desen de execuție se face când îl cereți și se descarcă; pentru a-l schimba, schimbați modelul și refaceți-l.

### Rulează într-un browser

Salvarea descarcă un fișier. Scurtăturile de tastatură pe care browserul și le rezervă nu pot fi folosite. Modelele nu părăsesc niciodată calculatorul: vezi [Unde ajung fișierele dumneavoastră](common:your-files).

## Ce să continuați să faceți în software-ul actual

Astăzi DetailCraft se potrivește cadrelor mici, verificării unei idei, predării sau producerii de fișiere NC și desene de execuție pentru lucrări simple cu grinzi și stâlpi. Păstrați racordurile complexe, desenele generale de aranjament, desenele de montaj, proiectele multiutilizator și tot ce este listat în [Ce nu este încă realizat](topic:not-built-yet) în software-ul pe care îl folosiți acum.
