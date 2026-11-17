---
title: Adăugarea găurilor și a decupărilor
summary: Introduceți găuri în inimi, tălpi și plăci și decupați tălpile la capătul unei grinzi, măsurate de la capătul tăiat al piesei.
keywords: gaură, găuri, gaură pentru șurub, decupare, decupare de capăt, crestătură, tăiere, găurire, perforare, gaură în inimă, gaură în talpă
from: 33d12398
---

Găurile și decupările se introduc prin poziție. Ele aparțin elementului și se mută odată cu acesta.

Găurile făcute de conexiuni (plăci de capăt, plăci de bază) sunt adăugate automat; nu se introduc manual. Sunt listate ca „… găuri din conexiuni (editați conexiunea)”.

## De unde sunt măsurate pozițiile

- **x** merge de-a lungul piesei de la **începutul tăierii**: capătul de start, după orice conexiune care l-a tăiat înapoi. Deci x = 0 este capătul real al oțelului, nu punctul grilei.
- **y** este măsurat peste față, de la centrul secțiunii:
   - pe **inimă**: în sus (pozitiv) sau în jos față de mijlocul înălțimii;
   - pe o **talpă** sau pe o **placă**: peste lățime, de la linia de centru.
- Începutul elementului este primul punct la care s-a făcut clic la plasare. Rândurile {{ui:Capete (x, y, z mm)}} arată care capăt este care.

## Adăugarea unei găuri

1. Selectați elementul.
2. În caseta {{ui:Găuri}} din panoul {{ui:Proprietăți}}, alegeți {{ui:Față}}: {{ui:Inimă}}, {{ui:Talpa de sus}} sau {{ui:Talpa de jos}} (pentru o formă I, canal sau tub dreptunghiular) ori {{ui:Fața plăcii}} (pentru o placă).
3. Introduceți {{ui:x pe lungime (mm)}}, {{ui:y transversal (mm)}} și {{ui:Diametru (mm)}}. Formularul pornește de la x 100, y 0, diametru 22.
4. Alegeți {{ui:Adăugare gaură}}.

Bara de stare spune „Gaură adăugată. x este de la începutul tăierii; y de la centrul secțiunii (inimă: în sus, talpă/placă: peste lățime).” Gaura apare în listă și în vedere ca un dop întunecat prin față.

Pentru a elimina o gaură, alegeți × de lângă ea din listă.

Cornierele și tuburile rotunde nu primesc încă găuri: caseta lor {{ui:Găuri}} spune asta.

:::note
În vederea 3D, găurile sunt desenate ca dopuri întunecate, nu tăiate prin oțel. Sunt găuri reale în fișierele NC, în desenele de execuție și în exportul IFC.
:::

O gaură al cărei x este dincolo de oricare capăt al piesei apare în fila {{ui:Probleme}} ca „o gaură este în afara capătului piesei”.

## Adăugarea unei decupări

Decupările sunt pentru forme I: taie talpa de sus sau de jos (și adâncimea aceea de inimă) la un capăt, astfel încât grinda să treacă pe lângă un alt element.

1. Selectați un element cu formă I.
2. În caseta {{ui:Decupări de capăt}}, alegeți capătul ({{ui:Început}} sau {{ui:Sfârșit}}) și {{ui:Parte}} ({{ui:Sus}} sau {{ui:Jos}}).
3. Introduceți {{ui:Lungime (mm)}} (de-a lungul grinzii de la acel capăt) și {{ui:Adâncime (mm)}} (în jos de la partea de sus, sau în sus de la partea de jos). Formularul pornește de la 100 x 40.
4. Alegeți {{ui:Adăugare decupare de capăt}}.

Vederea arată decuparea scoasă din oțel. Lista citește, de exemplu, „Sus la început: 100 x 40”. Se elimină cu butonul ×.

Decupările sunt pătrate: încă nu există rază în colțul interior.

## Cum afectează găurile și decupările marcajele

Două piese primesc același marcaj de piesă doar dacă găurile și decupările lor se potrivesc în limita de 1 mm, admițând că piesa este întoarsă. Adăugarea unei găuri la o grindă dintr-un grup îi dă un marcaj nou. Vedeți [Reguli de marcare](topic:mark-rules).
