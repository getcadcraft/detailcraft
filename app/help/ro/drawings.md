---
title: Desene de ansamblu general și de montaj
summary: Creați planuri, fațade și câte un desen de montaj pentru fiecare marcă de ansamblu din model, pe foi de la A4 la A1 sau ANSI B până la D, emiteți-le cu litere de revizie și descărcați-le ca PDF, DWG sau DXF.
keywords: linii ascunse, eliminare linii ascunse, punctat, nor de revizuire, nori, triunghi de revizie, plan cu buloane de ancorare, tije de ancorare, tabel de tije, tabel de plăci de bază, trasare ancore, emitere, revizie, rev, tabel de revizii, reemitere, jurnal de emitere, transmitere, dwg, dxf, fișier CAD, export desene, desene, ansamblu general, ga, plan, fațadă, desen de montaj, dimensiune foaie, dimensiune hârtie, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, imprimare, scară, cartuș, referință model
from: 709f8604
---

Alegeți {{ui:Desene}} din grupul {{ui:Ieșire}}. DetailCraft face întregul set din modelul așa cum este acum. Nimic nu este stocat: modificați modelul, deschideți din nou {{ui:Desene}}, și setul se face din nou.

## Ce conține setul

- **Planuri**, câte unul pentru fiecare nivel care are ceva pe el, privite de sus.
- **Fațade**, câte una pentru fiecare linie de grilă cu bare aflate la cel mult 1 m de ea.
- **Planul buloanelor de ancorare**, când modelul are plăci de bază: fiecare placă de bază văzută de sus cu stâlpul și tijele de ancorare, grilele cu cotele lor, un detaliu tipic al fiecărui model de tije (BP1, BP2 …) cu distanța dintre tije și distanțele până la margini, și două tabele: tijele de ancorare după marcă (R1, R2 …: cantitate, diametru, lungime, ieșire deasupra plăcii, înglobare, clasă) și plăcile de bază pe grilă (stâlp, model, placă, tije, partea de sus a plăcii). Un stâlp din afara grilei este localizat după coordonatele sale.
- **Desene de montaj**, câte unul pentru fiecare marcă de ansamblu: vederi din față, de sus și de capăt, cote înlănțuite până la găuri și margini de placă, lista pieselor, buloanele și tijele libere și note pentru sudură și găuri. Fiecare placă sudată are un simbol de sudură de colț în vederea din față (AWS A2.4): săgeata indică îmbinarea, triunghiul de sub linia de referință înseamnă partea săgeții, cifra din stânga lui este dimensiunea sudurii în mm, iar un cerc acolo unde săgeata întâlnește linia înseamnă sudură pe tot conturul.

**Linii ascunse.** Planurile și fațadele nu desenează liniile unei piese acolo unde o piesă complet în fața ei o acoperă (o grindă văzută de capăt în spatele unui stâlp). Desenele de montaj desenează o placă punctată acolo unde piesa principală o acoperă: în spatele inimii, în vederea din față (văzută din partea −u a piesei), sub talpa de sus, în vederea de sus. Piesele aflate la aceeași adâncime sau care se suprapun în adâncime sunt desenate complet, pe amândouă.

Fiecare foaie are un cartuș cu numărul desenului, scara, numele modelului, data, numărul foii cu dimensiunea foii și referința modelului: un cod făcut din modelul salvat, ca o imprimare să poată fi legată de modelul din care provine.

## Alegerea dimensiunii foii

Alegeți dimensiunea din lista de sus a ferestrei {{ui:Desene}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) sau {{ui:ANSI D}} (22 × 34 in). Fiecare foaie este orizontală. Setul este refăcut imediat pe noua dimensiune, iar aceeași dimensiune se folosește și pentru desenele de execuție. Ea este și în [Setările DetailCraft](topic:settings#drawings), iar acest browser o reține.

- O foaie mai mare se desenează la o scară mai mare. Scările sunt întotdeauna standard (1:10, 1:20, 1:25, 1:50, 1:100 și așa mai departe).
- Textul rămâne de aceeași mărime pe fiecare foaie, ca să rămână lizibil la imprimare.
- Pe o foaie mică, un ansamblu lung și subțire poate avea pe adâncime o scară mai mare decât pe lungime. Titlul vederii arată atunci ambele scări, iar cotele hotărăsc.

## Emiterea desenelor și revizii

Linia de deasupra previzualizării spune în ce stare este foaia afișată: **Neemisă încă**, **Rev B, emisă … ; neschimbată de atunci** sau, cu roșu, **Modificată după rev B: necesită reemitere**. Lista de foi marchează foile emise cu revizia lor și pe cele care trebuie reemise.

- Scrieți pentru ce este emiterea (începe cu „Emis pentru fabricație”) și alegeți {{ui:Emitere această foaie}}, sau {{ui:Emitere foi modificate}} pentru fiecare foaie nouă sau modificată de la ultima emitere.
- Prima emitere a unei foi este revizia A, apoi B, C și așa mai departe (I și O sunt omise).
- Cartușul arată numărul desenului cu revizia sa („A-B1  rev B”), iar un tabel de revizii alăturat listează ultimele emiteri: revizia, data și descrierea. Pe o foaie mică arată câte încap.
- O foaie se „modifică” atunci când se schimbă ce este desenat pe ea: o piesă mutată, o gaură nouă, o marcă renumerotată. Data, numărul foilor și chiar tabelul de revizii nu contează. Schimbarea dimensiunii foii modifică toate foile.
- Jurnalul de emitere este salvat în fișierul modelului, iar emiterea este un singur pas de anulare. [Fișierul KISS](topic:kiss-export) poartă cea mai recentă revizie a fiecărui desen.

### Nori de revizie

Începând de la a doua emitere a unei foi, fiecare piesă sau fundație care s-a schimbat este desenată într-un nor de revizie, cu un triunghi de revizie care poartă litera.

- Cât timp o foaie s-a schimbat de la ultima emitere, norii arată ce s-a schimbat de atunci, cu revizia viitoare în triunghi (rev B emisă și modificată: triunghiurile spun C).
- După ce o emiteți, norii rămân pe foaia acelei revizii, ca pe un set imprimat, până când foaia se schimbă din nou.
- Fiecare foaie înnorează numai schimbările pe care le arată. Planurile și fațadele nu desenează găuri sau decupări, deci înnorează o piesă care a fost mutată, rotită sau redimensionată, sau a cărei marcă s-a schimbat. Desenele de montaj și planul buloanelor de ancorare înnorează și găurile și decupările noi sau mutate.
- O marcă renumerotată contează: când o modificare face o grindă un ansamblu nou, grinzile a căror marcă a crescut (B1 la B2) sunt înnorate pe planuri și fațade.
- O piesă care a fost ștearsă nu lasă nimic de înnorat.
- Foile emise înainte de apariția norilor de revizie (DetailCraft 0.4) încep să fie înnorate de la următoarea emitere.
- Norii apar în descărcările PDF, DXF și DWG și nu contează ei înșiși ca modificare.

## Descărcare

Alegeți formatul din lista de lângă butoane, apoi {{ui:Această foaie}} pentru foaia afișată sau {{ui:Toate foile}} pentru tot setul.

- **PDF**: pentru imprimare sau trimitere. {{ui:Toate foile}} face un singur PDF, câte o pagină pentru fiecare foaie, fiecare pagină de dimensiunea aleasă.
- **DWG**, în formatul 2018, 2013, 2010, 2007, 2004 sau 2000: pentru a deschide foile într-un program CAD. Alegeți un format mai vechi pentru un program mai vechi.
- **DXF (R12)**: versiunea pe care o deschid aproape toate programele CAD.

O foaie DWG sau DXF este desenată la mărime reală: o unitate de desen este un milimetru pe hârtie, deci se imprimă la 1:1 și fiecare vedere păstrează scara din titlul ei. Fiecare tip de linie are propriul strat: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID și așa mai departe, cu grosimea sa de linie (DWG) și liniuțele sale. Cuvintele sunt text în stilul de text DetailCraft (Arial). Cotele sunt liniile și cifrele pe care le vedeți, nu obiecte de cotare. {{ui:Toate foile}} pune fișierele DWG sau DXF într-o arhivă zip, câte un fișier pentru fiecare foaie.

:::note
DXF R12 nu are grosimi de linie și nici umpleri: straturile își păstrează numele, deci setați grosimile după strat când trasați, iar formele umplute sunt lăsate afară (bara de stare spune câte).
:::

Imprimați la 100% (fără „potrivire la pagină”), pe hârtie de aceeași dimensiune, dacă vreți ca scările declarate să rămână valabile.
