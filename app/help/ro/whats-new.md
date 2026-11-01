---
title: Ce este nou în 0.7
summary: Verificări de proiectare ale profilelor I din oțel, cu combinații de încărcări din ASCE 7 sau EN 1990 și verificări ale barelor conform AISC 360 sau EN 1993-1-1, export USD al modelului din oțel, un instrument pentru asistenți pentru USD, o Panglică pentru oțel cu butoane mari și mici, panouri care se ascund și casete de dialog care se mută.
keywords: ce este nou, noutăți, note de lansare, jurnal de modificări, modificări, 0.7, versiune, funcții noi, verificări de proiectare, proiectare oțel, grad de utilizare, utilizare, combinații de încărcări, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocod, Anexa Națională, încărcare utilă pe acoperiș, limită de săgeată, usd, usda, usdc, usdz, openusd, asistent, mcp, panglică pentru oțel, panglică, buton divizat, unități, compact, panouri, casete de dialog, portugheză
from: 17d1e0bb
---

Aceasta este lista modificărilor din DetailCraft 0.7, față de 0.6. Analiza cadrului din 0.6 are acum un al doilea pas: verificarea barelor din oțel conform unui cod de proiectare.

## Noutăți

### Îmbinări cu gerunj (0.7.1)

- **Două profile I care se întâlnesc sub un unghi**, cum ar fi un colț de portal sau o coamă: selectați-le pe amândouă, alegeți {{ui:Gerunj}} din meniul {{ui:Mai multe}} al grupului {{ui:Îmbinare}}, iar ambele capete sunt tăiate pe planul care înjumătățește unghiul. Plăcile de capăt înșurubate una de alta și rigidizările inimii sunt casete de bifat în noua casetă de dialog Gerunj, ale cărei câmpuri numerotate corespund unui desen al îmbinării dvs., realizat pe măsură ce tastați. Gerunjul urmărește barele când acestea se mută și se regăsește în desene, în fișierele NC (tăieturi înclinate), în IFC și în lista de materiale. Vedeți [Îmbinări cu gerunj](topic:mitres).

### Verificări de proiectare

- **Combinații de încărcări din cod.** În fila {{ui:Analiză}}, noul bloc {{ui:Verificări de proiectare}} are un {{ui:Cod de proiectare}}: ASCE 7 + AISC 360 (SUA, LRFD) sau EN 1990 + EN 1993-1-1 (Eurocod). Dați fiecărui caz de încărcare tipul său (permanentă, utilă, noua încărcare utilă pe acoperiș, zăpadă, vânt, seismică), apăsați {{ui:Creare combinații}}, iar DetailCraft scrie combinațiile de rezistență și de exploatare ale codului pentru cazurile dvs. Combinațiile pe care le-ați tastat singur rămân. Vedeți [Realizarea combinațiilor](topic:design-checks#make-the-combinations).
- **Valorile Anexei Naționale.** Pentru Eurocod, factorii pornesc de la valorile recomandate; {{ui:Valorile Anexei Naționale}} vă lasă să le tastați pe ale țării dvs., iar acestea se salvează în model. Vedeți [Realizarea combinațiilor](topic:design-checks#make-the-combinations).
- **Verificare bare.** {{ui:Verificare bare}} verifică fiecare profil I din oțel la întindere, la compresiune cu flambaj, la încovoiere cu flambaj lateral-torsional, la forfecare, la încovoiere cu forță axială și la săgeată, față de {{ui:Limita de săgeată}} pe care o setați. Tabelul arată gradul de utilizare al fiecărei bare, verificarea care guvernează și combinația acesteia, iar barele sunt colorate pe model (albastru, verde, ocru, roșu, gri pentru neverificate). Vedeți [Verificarea barelor](topic:design-checks#check-the-members).
- **În raport.** {{ui:Raport (PDF)}} și {{ui:Raport (CSV)}} adaugă edițiile codurilor, setările, gradul de utilizare pe bară și fiecare clauză folosită. Vedeți [Raportul](topic:design-checks#the-report).
- **Un ajutor până la revizuirea de către un inginer.** Folosește doar forțe de ordinul întâi. Tuburile, cornierele, canalele, formele sudate și piesele zvelte sau de clasa 4 apar ca „neverificat”, cu motivul; torsiunea, îmbinările și betonul nu sunt verificate. Vedeți [Ce nu este verificat](topic:design-checks#what-is-not-checked).

### USD

- **Exportați modelul din oțel ca USD.** {{ui:USD}} din grupul {{ui:Ieșire}} scrie modelul ca {{ui:Text (.usda)}}, {{ui:Binar (.usdc)}} sau {{ui:Pachet (.usdz)}}, pentru programele de randare și asamblarea scenelor: fiecare ansamblu conține piesele sale, fiecare piesă este secțiunea sa de-a lungul lungimii, cu decupările tăiate, iar fiecare piesă poartă marcajul, profilul, clasa oțelului, lungimea și greutatea sa. Găurile pentru șuruburi, șuruburile, sudurile și tălpile de fundare nu se află în plasele USD. Vedeți [Exportul modelului din oțel ca USD](topic:usd).

### Asistenți AI

- **USD pentru asistenți.** Asistentul dvs., conectat prin CadCraft Studio, poate exporta modelul ca USD (`usd_export`), iar în Studio îl poate scrie într-un folder pe care l-ați permis. Vedeți [Ce poate cere un asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Modificate

- **Panglica pentru oțel** are butoane mari și mici: un {{ui:Grindă}} mare, alături de {{ui:Stâlp}}, {{ui:Contravântuire}} și {{ui:Placă}} mici, la {{ui:Modelare}} › {{ui:Bare}}; un {{ui:Plăci de capăt}} mare la {{ui:Detaliere}} › {{ui:Îmbinări}}, cu {{ui:Îmbinare de continuitate}} și {{ui:Guseu}} împărțind un singur buton divizat; un {{ui:Lipire}} mare la {{ui:Editare}} › {{ui:Clipboard}}, cu {{ui:Lipire în aceeași poziție}} și {{ui:Duplicare}} în spatele săgeții grupului. {{ui:Fabricație}} › {{ui:Schimb}} are {{ui:Export USD}} alături de IFC. Celelalte stiluri de meniu arată ca înainte. Vedeți [Meniuri, taste și mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analizați cadrul](topic:frame-analysis) trimite acum la verificările de proiectare, iar combinațiile sale pot fi create după cod.

## În fiecare aplicație

- **Unități.** {{ui:Setări}} › {{ui:General}} › {{ui:Unități}} are câte o listă pentru lungime, suprafață, volum, unghi și pantă, cu dimensiunile exacte date de definițiile unităților (piciorul de topograf din SUA este o unitate separată). Dezactivați unitățile pe care nu le folosiți niciodată și ies din listele de unități; marcați una cu o stea și lucrul nou începe în ea. Un fișier își păstrează întotdeauna propria unitate. Casetele proprii ale DetailCraft nu urmează încă listele: lungimile sale se tastează în continuare în milimetri. Vedeți [Unități, valori tastate și listele de unități](common:unit-lists).
- **O organizare mai densă și panouri care se ascund.** {{ui:Setări}} › {{ui:General}} › {{ui:Densitatea aspectului}} › {{ui:Compactă}} încape mai mult pe ecran (ecranele tactile și telefoanele își păstrează butoanele mari). Fiecare panou lateral are o bară de titlu subțire: trageți-o ca să ancorați sau să detașați panoul, plasați-o pe bara altui panou ca să împărțiți un cadru în file, fixați-o ca să alunece spre margine sau ascundeți panoul și aduceți-l înapoi de la margine. Vedeți [Aranjarea panourilor](common:arrange-panels#make-the-layout-denser).
- **Casetele de dialog se mută.** Trageți o casetă de dialog de bara ei de titlu, în afara drumului desenului; ea revine acolo unde ați lăsat-o. Faceți dublu clic pe bara de titlu ca s-o centrați din nou. Vedeți [Mutarea unei casete de dialog](common:arrange-panels#move-a-dialog).
- **Rețete pentru asistenți AI.** Zece cereri rezolvate pentru asistentul dvs. (curățarea unui desen, trasarea unui set, verificarea desenelor, întrebări despre un model, totalizarea unei extrageri de cantități, încercarea unei variante de piesă…), fiecare cu uneltele pe care le apelează și permisiunile de care are nevoie, și fiecare reluată de testele noastre. Aplicațiile nu conțin AI. Vedeți [Rețete pentru asistenți AI](common:assistants-recipes).
- **Limbi.** **Português (Portugal)** este nou în {{ui:Setări}} › {{ui:General}} › {{ui:Limbă}}. Acesta, **Português (Brasil)**, **Español (México)** și **Bahasa Indonesia** au acum fiecare cuvânt din aplicații, ca ciorne, nerevizuite încă de un vorbitor nativ. Subiectele de ajutor sunt în limba engleză.
- **CadCraft Studio** arată motivul pentru care o verificare de actualizare a eșuat (încă nu există fișier pentru sistemul dvs., lipsă de rețea, semnătură greșită), în loc să afișeze doar „Gata”, și nu mai readuce un card Ce este nou pe care l-ați închis până când nu apare o versiune mai nouă.

## Nu este încă în această versiune

- **0.7 nu este semnat cu cod.** Semnarea și pachetul Microsoft Store au fost mutate în 0.8, pentru că validarea certificatului nu a sosit încă. Verificați SHA-256 de lângă fiecare fișier de pe getcadcraft.com/download. Pe Windows, dacă SmartScreen oprește programul de instalare, alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulați oricum}}. Pe Mac, prima dată, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. CadCraft Studio nu este încă într-un magazin de aplicații, iar nu există încă o versiune pentru iPad sau iPhone.
- Unghiurile și pantele din {{ui:Unități}} sunt salvate, dar nicio casetă nu le citește încă.
- **Verificările de proiectare nu au fost revizuite încă de un inginer.** Testele noastre le compară cu valorile tipărite din tabele și cu formule lucrate manual, nu încă cu exemplele lucrate ale unui ghid de proiectare. Până la o revizuire, sunt un ajutor: verificați manual barele care contează.
- Verificările de proiectare folosesc forțe de ordinul întâi (fără efecte de ordinul doi) și verifică doar profile I. Nu sunt realizate: tuburi, corniere, canale, forme sudate, piese zvelte (AISC) sau de clasa 4 (Eurocod) la încovoiere, torsiune, flambajul la forfecare combinat cu încovoierea, îmbinări, oboseală, foc, detaliere seismică și beton. O piesă zveltă la compresiune scoate verificările la compresiune, iar bara apare ca „trece, parțial verificată”.
- Analiza cadrului este încă de ordinul întâi și liniară și nu a fost încercată încă de un inginer pe un șantier real.
- Găurile pentru șuruburi, șuruburile, sudurile și tălpile de fundare nu sunt în exportul USD.

Restul este în [Ce nu este încă realizat](topic:not-built-yet).
