---
title: Noutăți în versiunea 0.7 (anterioare)
summary: Verificări de proiectare ale profilelor I din oțel cu combinații de încărcări din ASCE 7 sau EN 1990 și verificarea barelor la AISC 360 sau EN 1993-1-1, export USD al modelului din oțel, un instrument asistent pentru USD, o panglică pentru oțel cu butoane mari și mici, panouri care se ascund și casete de dialog care se mută.
keywords: noutăți 0.7, versiune anterioară, note de lansare, jurnal de modificări, modificări, 0.7, versiune, funcții noi, verificări de proiectare, proiectare din oțel, gradul de utilizare, utilizare, combinații de încărcări, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocod, Anexa Națională, încărcare utilă pe acoperiș, limită de săgeată, usd, usda, usdc, usdz, openusd, asistent, mcp, panglică pentru oțel, panglică, buton divizat, unități, compactă, panouri, casete de dialog, portugheză
from: 54a7a8f0
---

Iată ce s-a modificat în DetailCraft 0.7, comparativ cu 0.6. Analiza cadrului din 0.6 are acum un al doilea pas: verificarea barelor din oțel la un cod de proiectare.

## Noi

### Îmbinări în gerunj (0.7.1)

- **Două profile I întâlnite într-un unghi**, cum ar fi un nod de cadru portal sau o coamă: selectați ambele, alegeți {{ui:Mitre}} din meniul {{ui:More}} al grupului {{ui:Connect}}, iar ambele capete sunt tăiate în planul care înjumătățește unghiul. Plăcile de capăt înșurubate împreună și rigidizările de inimă sunt casete de bifat în noua casetă de dialog Gerunj, ale cărei câmpuri numerotate corespund unui desen al îmbinării dvs., realizat pe măsură ce scrieți. Gerunjul urmează barele când acestea se mută și se păstrează în desene, în fișierele NC (tăieri oblice), în IFC și în lista de materiale. Vezi [Îmbinări în gerunj](topic:mitres).

### Verificări de proiectare

- **Combinații de încărcări din cod.** În fila {{ui:Analysis}}, noul bloc {{ui:Design checks}} are un {{ui:Design code}}: ASCE 7 + AISC 360 (SUA, LRFD) sau EN 1990 + EN 1993-1-1 (Eurocod). Indicați pentru fiecare caz de încărcare tipul (permanentă, utilă, noua încărcare utilă pe acoperiș, zăpadă, vânt, seism), apăsați {{ui:Make combinations}}, iar DetailCraft scrie combinațiile de rezistență și de exploatare ale codului pentru cazurile dvs. Combinațiile pe care le-ați scris singur rămân. Vezi [Crearea combinațiilor](topic:design-checks#make-the-combinations).
- **Valori din Anexa Națională.** Pentru Eurocod, factorii pornesc de la valorile recomandate; {{ui:National Annex values}} vă permite să scrieți valorile țării dvs., iar acestea se salvează în model. Vezi [Crearea combinațiilor](topic:design-checks#make-the-combinations).
- **Verificare bare.** {{ui:Check members}} verifică fiecare profil I din oțel la întindere, la compresiune cu flambaj, la încovoiere cu flambaj lateral-torsional, la forfecare, la încovoiere cu forță axială și la săgeată, față de {{ui:Deflection limit}} pe care o stabiliți. Tabelul arată gradul de utilizare al fiecărei bare, verificarea determinantă și combinația acesteia, iar barele sunt colorate în model (albastru, verde, ocru, roșu, gri pentru cele neverificate). Vezi [Verificarea barelor](topic:design-checks#check-the-members).
- **În raport.** {{ui:Report (PDF)}} și {{ui:Report (CSV)}} adaugă edițiile codurilor, setările, gradul de utilizare pe bară și fiecare clauză folosită. Vezi [Raportul](topic:design-checks#the-report).
- **Un ajutor până când un inginer l-a verificat.** Se folosesc doar forțe de ordinul întâi. Tuburile, cornierele, canalele, profilele sudate și piesele zvelte sau de clasa 4 apar ca „nu este verificat”, cu motivul; torsiunea, îmbinările și betonul nu sunt verificate. Vezi [Ce nu este verificat](topic:design-checks#what-is-not-checked).

### USD

- **Exportul modelului din oțel ca USD.** {{ui:USD}} din grupul {{ui:Output}} scrie modelul ca {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} sau {{ui:Package (.usdz)}} pentru programe de randare și asamblarea scenelor: fiecare ansamblu conține piesele sale, fiecare piesă este secțiunea sa de-a lungul lungimii, cu tăieri la capete, iar fiecare are marca piesei, profilul, clasa, lungimea și greutatea. Găurile de șuruburi, șuruburile, sudurile și fundațiile nu sunt în meshurile USD. Vezi [Exportul modelului din oțel ca USD](topic:usd).

### Asistenți AI

- **USD pentru asistenți.** Asistentul dvs., conectat prin CadCraft Studio, poate exporta modelul ca USD (`usd_export`), iar în Studio îl poate scrie într-un dosar la care i-ați acordat acces. Vezi [Ce poate cere un asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Modificat

- **Panglica pentru oțel** are butoane mari și mici: un buton mare {{ui:Beam}} lângă butoanele mici {{ui:Column}}, {{ui:Brace}} și {{ui:Plate}} la {{ui:Modeling}} › {{ui:Members}}; un buton mare {{ui:End plates}} la {{ui:Detailing}} › {{ui:Connections}}, cu {{ui:Splice}} și {{ui:Gusset}} împărțind un buton divizat; un buton mare {{ui:Paste}} la {{ui:Edit}} › {{ui:Clipboard}}, cu {{ui:Paste in place}} și {{ui:Duplicate}} în spatele săgeții grupului. {{ui:Fabrication}} › {{ui:Exchange}} are {{ui:Export USD}} lângă IFC. Celelalte stiluri de meniu arată ca înainte. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analiza cadrului](topic:frame-analysis) trimite acum la verificările de proiectare, iar combinațiile sale pot fi create după codul ales.

## În fiecare aplicație

- **Unități.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} are câte o listă pentru lungime, arie, volum, unghi și pantă, cu dimensiunile exacte date de definițiile unităților (piciorul de suprafață din SUA este o unitate separată). Dezactivați unitățile pe care nu le folosiți și acestea dispar din liste; marcați una cu steluță și lucrările noi pornesc în ea. Un fișier păstrează întotdeauna propria unitate. Casetele proprii ale DetailCraft nu urmează încă listele: lungimile sunt scrise în continuare în milimetri. Vezi [Unități, valori scrise și listele de unități](common:unit-lists).
- **Un aspect mai dens și panouri care se ascund.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} încape mai mult pe ecran (ecranele tactile și telefoanele păstrează butoanele mari). Fiecare panou lateral are o bară de titlu subțire: trageți-l pentru a-l ancora sau detașa, lăsați-l pe bara altui panou ca să împărțiți un cadru în file, fixați-l ca să alunece spre margine sau ascundeți-l și aduceți-l înapoi de la margine. Vezi [Aranjarea panourilor](common:arrange-panels#make-the-layout-denser).
- **Casetele de dialog se mută.** Trageți o casetă de dialog de bara de titlu, ca să nu acopere desenul; ea revine acolo unde ați lăsat-o. Faceți dublu clic pe bara de titlu ca să o centrați din nou. Vezi [Mutarea unei casete de dialog](common:arrange-panels#move-a-dialog).
- **Rețete pentru asistenții AI.** Zece cereri rezolvate pentru asistentul dvs. (ordonarea unui desen, trasarea unui set, verificarea desenelor, întrebări despre model, totalizarea unei extrageri de cantități, încercarea unei variante de piesă…), fiecare cu uneltele pe care le apelează și permisiunile de care are nevoie și fiecare reluată de testele noastre. Aplicațiile nu conțin AI. Vezi [Rețete pentru asistenții AI](common:assistants-recipes).
- **Limbi.** **Português (Portugal)** este nou în {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Acesta, **Português (Brasil)**, **Español (México)** și **Bahasa Indonesia** au acum fiecare cuvânt din aplicații, ca ciorne încă nerevizuite de un vorbitor nativ. Subiectele de ajutor sunt în engleză.
- **CadCraft Studio** spune de ce a eșuat verificarea unei actualizări (nu există încă fișier pentru sistemul dvs., lipsă de rețea, semnătură greșită), în loc să afișeze doar „Gata”, și nu mai aduce înapoi un card Noutăți pe care l-ați închis până apare o versiune mai nouă.

## Încă nerealizat în această versiune

- **Versiunea 0.7 nu are semnătură de cod.** Semnarea și pachetul din Microsoft Store au trecut în 0.8, pentru că validarea certificatului nu a sosit încă. Verificați valoarea SHA-256 de lângă fiecare fișier de pe getcadcraft.com/download. Pe Windows, dacă SmartScreen oprește programul de instalare, alegeți {{ui:More info}}, apoi {{ui:Run anyway}}. Pe Mac, prima dată, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Open}}. CadCraft Studio nu este încă într-un magazin de aplicații și nu există încă o versiune pentru iPad sau iPhone.
- Listele de unghiuri și pante din {{ui:Units}} sunt salvate, dar încă nicio casetă nu le citește.
- **Verificările de proiectare nu au fost încă revizuite de un inginer.** Testele noastre le compară cu valori din tabele tipărite și cu formule rezolvate manual, nu încă cu exemple rezolvate din ghiduri de proiectare. Până la o revizuire, sunt un ajutor: verificați manual barele importante.
- Verificările de proiectare folosesc forțe de ordinul întâi (fără efecte de ordinul doi) și verifică doar profile I. Încă nerealizate: tuburi, corniere, canale, profile sudate, piese zvelte (AISC) sau de clasa 4 (Eurocod) la încovoiere, torsiune, flambaj la forfecare împreună cu încovoierea, îmbinări, oboseală, foc, detalierea la seism și beton. O piesă zveltă la compresiune nu intră în verificările de compresiune, iar bara apare ca „trece, verificată parțial”.
- Analiza cadrului este încă de ordinul întâi și liniară și nu a fost încă încercată de un inginer pe un proiect real.
- Șuruburile, găurile, sudurile și fundațiile nu sunt în exportul USD.

Restul se află în [Ce nu este încă realizat](topic:not-built-yet).
