---
title: Conectarea grinzilor la stâlpi cu plăci de capăt
summary: Adăugați plăci de capăt înșurubate acolo unde o grindă întâlnește talpa sau inima unui stâlp, reglați placa, șuruburile și sudura și copiați conexiunea în fiecare îmbinare similară.
keywords: placă de capăt, placă de capăt, îmbinare cu moment, conexiune înșurubată, îmbinare, șuruburi, sudură, placă de capăt prelungită, la nivel, similare, copiere conexiune, componentă
from: 21e028b2
---

O conexiune cu placă de capăt sudează o placă de capătul grinzii și o înșurubează de talpa sau inima stâlpului. DetailCraft plasează placa, taie grinda înapoi, găurește placa și talpa stâlpului la fel, adaugă șuruburile și sudura și verifică distanțele până la margini și distanțele dintre găuri.

:::warning
DetailCraft nu proiectează conexiuni. Setările sunt valori de pornire pe care le schimbați dumneavoastră; nimic nu verifică rezistența. Avertismentele pentru margini și distanțe folosesc minimele din EN 1993-1-8 Tabelul 3.3, care pot fi diferite de regulile după care lucrați.
:::

## Ce poate lega

- O grindă **la nivel** (ambele capete la aceeași înălțime), verticală (rotație 0), cu un profil I.
- În **talpa** sau în **inima** unui stâlp I **vertical**, perpendicular pe el.
- Capătul grinzii trebuie să stea pe linia stâlpului, între baza și vârful stâlpului.

Grinzile înclinate sau oblice și secțiunile care nu sunt I sunt refuzate, cu un motiv: pentru ele folosiți [tăblii de forfecare](topic:shear-tabs). Pe inimă, placa și tălpile grinzii trebuie să încapă între tălpile stâlpului; DetailCraft avertizează când nu încap.

:::tip
La rotație 0, tălpile stâlpului sunt orientate pe direcția grilei numerotate (x). O grindă care merge de la A la B întâlnește inima și primește o placă de capăt pe inimă.
:::

## Adăugarea plăcilor de capăt la o grindă

1. Alegeți {{ui:Selectare}} ({{key:V}}) și faceți clic pe grindă.
2. Alegeți {{ui:Plăci de capăt}} din grupul {{ui:Îmbinare}}, sau {{ui:Adăugare plăci de capăt}} din panoul {{ui:Proprietăți}}.
3. Fiecare capăt liber al grinzii care întâlnește talpa sau inima unui stâlp, perpendicular, primește o placă. Bara de stare spune „2 plăci de capăt adăugate. Selectați una ca să-i schimbați placa, șuruburile și sudura; Similare o copiază la îmbinările de acest fel.”
4. Prima placă de capăt nouă este selectată, iar setările ei sunt în panoul {{ui:Proprietăți}}.

Dacă nu se întâmplă nimic, citiți bara de stare:

- „Această grindă nu se termină pe o linie de stâlp. Plăcile de capăt se pun acolo unde capătul grinzii întâlnește un stâlp vertical.”
- „Această grindă întâlnește un stâlp în unghi sau are pantă: plăcile de capăt sunt făcute pentru îmbinări drepte și în nivel. Folosiți Tăblii de forfecare.”
- „Ambele capete au deja conexiuni.”

## Schimbarea plăcii, a șuruburilor și a sudurii

Faceți clic pe placa de capăt (sau pe unul din șuruburile ei) ca să selectați conexiunea. Sub {{ui:Placă, șuruburi și sudură (mm)}}:

| Setare | Implicit | Ce face |
|---|---|---|
| Grosimea plăcii | 20 | Grosimea plăcii; și cât este tăiată grinda înapoi dincolo de talpă |
| Lățimea plăcii | 180 | Pe lățimea îmbinării |
| Prelungire deasupra grinzii | 0 | Deasupra tălpii de sus; peste 0 face o placă de capăt prelungită |
| Prelungire sub grindă | 0 | Sub talpa de jos |
| Diametrul șurubului | 20 | Dimensiunea nominală a șurubului |
| Diametrul găurii | 22 | Jocul dumneavoastră de găurire în placă și în talpa stâlpului |
| Clasa șurubului | A325 | Text; se tipărește în lista de materiale |
| Rânduri de șuruburi | 4 | Rânduri de câte două șuruburi, centrate pe înălțimea plăcii |
| Pasul rândurilor | 75 | Distanța verticală între rânduri |
| Gabarit | 100 | Distanța orizontală între cele două șuruburi ale unui rând |
| Adaos pentru lungimea șurubului | 30 | Adăugat la priza de strângere pentru piuliță, șaibă și filet; vezi mai jos |
| Dimensiunea sudurii de colț | 8 | Pe tot conturul capătului grinzii |
| Materialul plăcii | A36 | Text |

Scrieți o valoare nouă și apăsați {{key:Enter}} sau {{key:Tab}}. Placa, găurile, șuruburile și lungimea tăiată a grinzii se actualizează imediat. Fiecare modificare este un singur pas de anulare.

Sub setări vedeți ce face conexiunea:

- {{ui:Șuruburi}}: de exemplu „8 × 20 × 70 A325 (priză 36,2)”.
- {{ui:Sudură}}: dimensiunea, locul și lungimea ei.
- {{ui:Placă}}: dimensiunea și marca ei de piesă.

### Cum se calculează numerele

- Grinda este tăiată înapoi cu jumătate din adâncimea stâlpului (pe inimă: jumătate din grosimea inimii) plus grosimea plăcii, ca placa să stea pe față.
- Înălțimea plăcii este adâncimea grinzii plus cele două prelungiri.
- Lungimea șurubului = priza de strângere (grosimea plăcii + grosimea tălpii sau a inimii stâlpului) + adaosul, rotunjit în sus la următorul multiplu de 5 mm.
- Lungimea sudurii afișată este perimetrul secțiunii grinzii.

### Avertismente

Conexiunea se construiește și în continuare, dar acestea apar sub ea și în fila {{ui:Probleme}}:

- Rânduri de șuruburi sau șuruburi mai aproape de marginea plăcii decât 1,2 × diametrul găurii.
- Pasul rândurilor sub 2,2 × diametrul găurii sau gabaritul sub 2,4 × diametrul găurii.
- Găuri care intră în inima stâlpului sau în racordarea sa, ori ies de pe talpa stâlpului.
- O placă mai lată decât talpa stâlpului sau, pe inimă, mai lată decât spațiul dintre tălpi; tălpi ale grinzii care nu încap între ele.
- Un rând de șuruburi prea aproape de talpa grinzii, sau un gabarit prea strâns pentru inima grinzii și sudura ei.

## Copierea în fiecare îmbinare similară

1. Selectați conexiunea pe care ați configurat-o.
2. Alegeți {{ui:Aplicare la similare (n)}} în panoul {{ui:Proprietăți}}, sau {{ui:Similare}} din meniul {{ui:Mai multe}} al grupului {{ui:Îmbinare}}. Numărul din paranteză este câte îmbinări o vor primi.
3. Fiecare îmbinare cu același profil de grindă și același profil de stâlp, grinda intrând în același fel de față, care nu are încă o conexiune primește o copie cu aceleași setări. Bara de stare spune câte.

Copiile sunt independente: schimbarea uneia mai târziu nu schimbă celelalte. Îmbinările care au deja o conexiune sunt lăsate în pace; ștergeți-le întâi dacă vreți să fie înlocuite.

## Mutarea și ștergerea

Conexiunile sunt refăcute din setările lor de fiecare dată când se schimbă modelul, deci mutarea sau redimensionarea unei grinzi sau a unui stâlp duce plăcile de capăt după ele. Dacă o modificare face ca îmbinarea să nu mai încapă, conexiunea rămâne în model, iar fila {{ui:Probleme}} spune de ce, de exemplu „Capătul grinzii nu mai este pe linia stâlpului.”

Ca să ștergeți o conexiune, selectați-o și apăsați {{key:Delete}}. Ștergerea grinzii sau a stâlpului șterge și conexiunile lor.

Următorul pas: [Adăugarea plăcilor de bază și a tijelor de ancorare](topic:base-plates).
