---
title: Analiza cadrului
summary: Forțe, reacțiuni și deformații ale grinzilor, stâlpilor și contravântuirilor așa cum sunt desenate, sub cazuri de încărcare și combinații stabilite. Un ajutor de analiză, nu o verificare de cod; verificările de proiectare sunt un pas separat.
keywords: analiză, analiză structurală, analiză de cadru, metoda rigidităților, încărcări, caz de încărcare, combinație, greutate permanentă, încărcare utilă, greutate proprie, reacțiuni, moment încovoietor, forfecare, forță axială, deformație, formă deformată, reazeme, articulat, încastrat, eliberare, raport, pdf, csv, CraftScript, frame3d
from: ba0081bc
---

Fila {{ui:Analiză}} de jos găsește forțele din fiecare grindă, stâlp și contravântuire a modelului, reacțiunile la bazele stâlpilor și cât se îndoaie elementele, pentru încărcările introduse.

:::warning
Este un **ajutor de analiză, nu o verificare de cod**. Analiza nu aplică niciun cod de proiectare: nu dimensionează elemente, nu verifică capacități sau conexiuni și nu alege coeficienți de încărcare. Un inginer verifică modelul, încărcările și reazemele și decide ce înseamnă valorile. Pentru verificările elementelor conform ASCE 7 / AISC 360 sau EN 1990 / EN 1993-1-1 vedeți [Verificarea elementelor de oțel conform unui cod de proiectare](topic:design-checks), un pas separat care este tot un ajutor.
:::

## Rulare

1. Deschideți fila {{ui:Analiză}}.
2. Selectați unul sau mai multe elemente în vedere, alegeți un {{ui:Caz}}, o {{ui:Încărcare}} și o {{ui:Direcție}}, introduceți valoarea și apăsați {{ui:Adăugare încărcare}}. O încărcare repartizată pe un element este în kN/m, iar o sarcină concentrată în kN. {{ui:În jos (greutate)}} este cea uzuală.
3. Apăsați {{ui:Rulare analiză}}.

Tabelul listează, pentru fiecare element, cea mai mare forță axială N, forțele tăietoare Vz și Vy, momentele încovoietoare My și Mz, torsiunea T și deformația sa, cu cel mai mare moment primul; faceți clic pe numele unui element ca să-l selectați. Mai jos sunt reacțiunile din fiecare reazem. {{ui:Pe model}} desenează forma deformată sau o acțiune ca diagramă lângă fiecare element, cu cea mai mare valoare scrisă în dreptul lui. Rezultatele devin învechite de îndată ce modelul se schimbă: rulați din nou.

Fiecare încărcare, caz și setare este un pas de anulare ({{key:Mod+Z}}) și este salvat în fișierul modelului.

## Cazuri de încărcare și combinații

Analiza pornește cu trei: **Permanentă** (greutatea proprie a elementelor, din secțiunile desenate și 7850 kg/m³), **Utilă** (goală) și **Permanentă + utilă**. Adăugați cazuri proprii (vânt, zăpadă …) și combinații: o combinație adună cazurile cu factorii introduși. Analiza este liniară, deci fiecare caz se rezolvă o singură dată, iar combinațiile sunt sume. Introduceți factorii singuri sau alegeți un cod de proiectare și lăsați {{ui:Creare combinații}} să scrie combinațiile codului ([Verificarea elementelor de oțel conform unui cod de proiectare](topic:design-checks)).

## Din ce este făcut cadrul

- Grinzi, stâlpi și contravântuiri, fiecare pe linia sa de lucru (linia desenată), cu proprietățile reale ale secțiunii calculate din contur. Plăcile, scările, tălpile și șuruburile nu fac parte din cadru.
- Un element este împărțit acolo unde capătul altui element ajunge pe el, deci o grindă care intră într-un stâlp la jumătatea înălțimii se leagă de stâlp acolo.
- **Bazele stâlpilor**: încastrate (la început) sau articulate (fixate împotriva deplasării și a răsucirii, libere să se rotească). O placă de bază face întotdeauna un reazem.
- **Capetele grinzilor**: o placă de capăt este rigidă, o cornieră de forfecare este articulată. {{ui:Capete de grindă fără conexiune}} stabilește restul. **Contravântuirile** sunt articulate la ambele capete.
- Selectați un singur element ca să-i dați capetelor sau bazei unui stâlp o regulă proprie.
- Oțel peste tot: E = 200 GPa, G = 77 GPa.

Dacă cadrul se poate deplasa fără să îndoaie nimic — un mecanism, cum ar fi baze articulate fără contravântuire într-o direcție — rularea se oprește și spune unde și în ce direcție; țineți-l acolo cu un reazem, o îmbinare rigidă sau o contravântuire.

## Semne

N > 0 este întindere. My > 0 pune latura locală −z a elementului în întindere: o grindă care se lasă sub greutate are My > 0. Mz > 0 pune latura locală −y în întindere. Deformația se măsoară față de linia dreaptă dintre capetele elementului. Axa locală z a unui element arată în sus (pentru un stâlp: pe direcția X); axele sale locale se rotesc odată cu rotația elementului.

## Raportul

{{ui:Raport (PDF)}} și {{ui:Raport (CSV)}} conțin tot: ipotezele pe care a fost construit cadrul, secțiunile, cazurile și combinațiile, apoi, pentru fiecare caz și combinație, reacțiunile (cu sumele încărcărilor și reacțiunilor, care se echilibrează), forțele din elemente și deplasările, și o înfășurătoare a tuturor cazurilor. {{ui:Exportare ca CraftScript}} scrie același cadru ca script pentru spațiul de lucru Script din PartCraft, unde funcția de bibliotecă `frame3d` îl rezolvă pas cu pas, în cod lizibil.

## Metoda

Metoda rigidităților directe, liniară și de ordinul întâi, dacă nu este bifat Ordinul doi (P-Delta): elemente grindă-stâlp cu două noduri, cu rigidități la întindere, torsiune și două încovoieri (fără deformație la forfecare, fără deplanare), eliberări de capete prin condensare statică, încărcări pe lungimea elementelor prin propriile funcții de formă. Rezultatele sunt verificate față de cazuri clasice din manuale (console, grinzi simplu rezemate, încastrate și continue, un cadru portal, o grilă la torsiune, o fermă).

**Ordinul doi (P-Delta).** Bifați *Ordinul doi (P-Delta)* lângă Rulare: fiecare combinație este rezolvată din nou, cu forțele axiale ale elementelor acționând pe cadrul deformat (fiecare element tăiat în 4 bucăți, astfel încât și încovoierea unui element între capete contează), până când forțele axiale se stabilizează. Linia de rezultat dă numărul de treceri și cât a crescut deplasarea laterală; momentele, deformațiile, verificările de proiectare și raportul folosesc apoi aceste rezultate. Peste sarcina critică elastică a cadrului, rularea se oprește și spune asta. Metoda este elastică, cu rotații mici, doar la încovoiere, fără reducerea rigidității și fără încărcări fictive (nu este singură metoda AISC de analiză directă); plăcile, pereții și planșeele rigide rămân de ordinul întâi.

**Frecvențe proprii (elemente finite).** Blocul {{ui:Elemente finite: frecvențe proprii}} de sub rezultate găsește cele mai joase moduri ale aceluiași model, cu motorul de elemente finite: grinzi cu eliberările capetelor lor, plăci și pereți ca cochilii plane cu patru noduri, planșee rigide, reazeme. Alegeți câte moduri (3, 6, 10 sau 20) și elementul de placă (cochilia cu patru noduri pentru plăci groase sau subțiri, sau cel pentru plăci subțiri) și apăsați {{ui:Găsire frecvențe}}. Tabelul dă frecvența fiecărui mod în Hz, perioada în secunde și masa modală efectivă pe X, Y și Z, ca pondere din masa care se poate mișca. {{ui:Afișare pe model}} desenează orice mod la fel cum se desenează forma deformată. Masa este densitatea materialului înmulțită cu volumul: încărcările nu adaugă masă, iar un material fără densitate nu are masă. Raportul (PDF, CSV) conține tabelul. Metoda este elastică și valabilă doar pentru deplasări mici, iar aici nu se generează nicio încărcare seismică sau de vânt din cod. Nu este o verificare de cod; inginerul analizează rezultatele.

**Spectru de răspuns, istoric în timp și împingere progresivă (pushover).** Trei blocuri în plus sunt sub frecvențe, cu același model cu elemente finite. Masa pentru toate este densitatea materialului plus încărcările verticale în jos ale cazurilor bifate, fiecare înmulțită cu un factor introdus (de exemplu Permanentă cu 1 și Utilă cu partea pe care o considerați masă).

{{ui:Spectru de răspuns}} citește fiecare mod dintr-un spectru dat (un tabel cu perioadă și accelerație, sau forma ASCE 7 din SDS, SD1 și TL; butonul {{ui:Folosire valori din blocul Seismic}} copiază acestea din blocul Seismic) și combină modurile prin CQC, SRSS, regula de zece la sută sau o sumă absolută, apoi reunește direcțiile X, Y și Z (100 % + 30 % sau SRSS). Dă forța tăietoare de bază, deriva pe niveluri, forțele de capăt ale elementelor și un tabel de moduri care avertizează când modurile folosite au mai puțin de 90 % din masă. Rezultatele pot fi scalate cu un factor sau până la o forță tăietoare de bază introdusă; blocul nu calculează niciodată singur acea forță. Rezultatele nu au semn.

{{ui:Istoric în timp}} rulează o accelerație a terenului prin suprapunere modală (exactă pentru segmentele drepte ale înregistrării între puncte) sau prin integrare directă (Newmark cu accelerație medie și amortizare Rayleigh). Intrarea este un sinus sau un impuls inventat (întotdeauna etichetat sintetic), o înregistrare lipită sau un fișier text deschis (timp și accelerație, câte o accelerație pe linie cu un pas, sau un fișier de tip PEER cu un antet DT=; în g sau m/s²). Dă deplasarea acoperișului și forța tăietoare de bază în funcție de timp, deriva fiecărui nivel și înfășurătoarea forțelor de capăt ale elementelor. Modelele cu o înregistrare foarte lungă o păstrează doar pentru sesiune.

{{ui:Împingere progresivă (pushover)}} împinge acoperișul lateral în pași mici (model ca primul mod, sau uniform), cu articulații plastice la capetele elementelor care au formă de I. O articulație cedează la momentul plastic, care scade pe măsură ce forța axială crește (calculat din forma desenată, neglijând racordările); întărirea este opțională, P-delta este opțională, iar o combinație de greutate poate fi aplicată înainte. Dă curba de capacitate (forța tăietoare de bază în funcție de deplasarea acoperișului), prima articulație și starea și rotirea plastică a fiecărei articulații. {{ui:Rulare istoric neliniar în timp}} rulează aceleași articulații sub înregistrarea blocului Istoric în timp, pe modele mici. Articulațiile se formează doar la capetele elementelor (puneți un nod acolo unde ar trebui să se formeze în interiorul unei deschideri); un element eliberat la ambele capete nu primește niciuna, iar curgerea și flambajul contravântuirilor nu sunt modelate; plăcile și pereții rămân elastici; nu se dau criterii de acceptare. Nu este o verificare de cod; inginerul analizează rezultatele. Setările sunt salvate cu modelul, iar raportul conține tabelele.

Încă nerealizat: analiza la flambaj, o corecție a masei lipsă pentru spectrul de răspuns, scalarea înregistrărilor, criterii de acceptare pentru articulații (răspunsul dinamic există, mai sus), încărcările de suprafață și de vânt generate automat (forțele seismice pe planșee sunt în [Verificarea elementelor de beton și generarea încărcărilor seismice](topic:concrete-and-seismic)), excentricitățile elementelor, contravântuirile care lucrează doar la întindere. Vedeți [Ce este încă nerealizat](topic:not-built-yet).
