---
title: Generatorul de scări din oțel
summary: O scară din oțel după înălțimea de la planșeu la planșeu, parcurs și lățime: înălțimea și adâncimea treptei după un set de reguli ales de dumneavoastră, paliere, balustrade și balustri, desene de execuție și o listă de debitare cu greutăți.
keywords: scară din oțel, generator de scări, limon, treaptă, placă striată, grătar, tavă cutată, palier, balustradă, balustri, înălțime, adâncime, osha, ibc, approved document k, listă de debitare, greutăți, desen de execuție
from: a4f0a985
---

Generatorul de scări face o scară completă din oțel din câteva numere: limoanele, treptele, paliere atunci când rampa este prea înaltă, balustrade cu stâlpi și balustri, găurile de fixare din limoane, o listă de debitare cu greutăți și desenele de execuție. Pornește din instrumentul {{ui:Scară}}, ca scara simplă (vezi Scări), cu un comutator în plus.

## Plasarea unei scări din oțel

1. Alegeți {{ui:Scară}} din grupul {{ui:Plasare}}, sau apăsați {{key:S}}.
2. În dreapta, bifați {{ui:Folosiți generatorul de scări din oțel}}.
3. Alegeți **setul de reguli** pentru locul unde se construiește scara, **înălțimea de urcare** (de la planșeu la planșeu; 0 = până la următorul nivel), **parcursul disponibil** (0 = lăsați regula să decidă), **lățimea liberă** și **tipul treptei**: placă striată, grătar sau tavă cutată din placă.
4. Setați profilul limonului, paliere (după regulă sau un număr), balustrade (pe ambele părți, pe una, fără), înălțimea balustradei și spațiul dintre balustri.
5. Faceți clic pe o intersecție a grilei: acesta este piciorul primei contratrepte.

Selectați scara (faceți clic pe un limon, pe o treaptă sau pe o balustradă) pentru a modifica orice setare; proprietățile arată contratreptele, adâncimea treptei, înclinația, rampele și paliere, oțelul din ea, lista de debitare și sursele setului de reguli.

## Seturile de reguli

Setul de reguli limitează forma scării: înălțimea și adâncimea treptei, 2 × contratreaptă + adâncimea treptei, înclinația, paliere, înălțimea balustradei și cea mai mare deschidere. DetailCraft oferă cele de mai jos; regiunea este o setare, nu o presupunere. Deschideți **De unde provin cifrele acestui set de reguli** în proprietăți: fiecare cifră își numește sursa și spune cât de bine a fost verificată.

- **International Building Code 2021**: contratreaptă 4 până la 7 in., treaptă de cel puțin 11 in., balustrade 34 până la 38 in. Limita de 12 ft între paliere este afișată ca *necitită*, iar cifrele balustradelor ca citite din materiale care citează codul: confirmați-le înainte de a vă baza pe ele.
- **OSHA 29 CFR 1910.25 și 1910.29** (scări standard industriale): 30° până la 50°, contratreaptă de cel mult 9.5 in., treaptă de cel puțin 9.5 in., lățime de cel puțin 22 in., paliere cât de late ca scara și de 30 in. adâncime, o balustradă superioară folosită ca mână curentă de 36 până la 38 in. Acestea au fost citite în chiar regulamentul.
- **Approved Document K 2013, Anglia** (scări generale de acces și utilitare): intervalele de înălțime și adâncime ale treptei și 2 × contratreaptă + adâncimea treptei de 550 până la 700 mm, citite în raportul comandat de guvern care le tabelează. Documentul nu oferă DetailCraft nicio înălțime a balustradei, așa că se folosește înălțimea pe care o setați, iar lista Probleme o spune.

Un set de reguli care nu este aici nu este ghicit: scara urmează atunci regula de confort 600 până la 650 mm și anunță că nu are regulă.

## Ce calculează

- **Contratrepte și adâncimea treptei.** Cele mai puține contratrepte a căror 2 × contratreaptă + adâncimea treptei se află la mijlocul intervalului regulii, fără ca adâncimea treptei să cadă sub minimul regulii. Cu un parcurs dat, adâncimea treptei este parcursul împărțit la trepte, iar orice în afara regulii este semnalat.
- **Rampe și paliere.** O rampă mai înaltă decât permite regula este împărțită cu un palier cât de lat ca scara și nu mai puțin decât minimul regulii; puteți cere și paliere. Un palier este un cadru din două grinzi laterale și două corniere transversale sub o acoperire, pe doi stâlpi.
- **Trepte.** Placa striată este o placă sudată (6 mm implicit; modelul striat nu se adaugă la greutate). O tavă cutată din placă are un retur la nas și este înșurubată prin inima limonului: două găuri cu 2 mm mai mari decât șurubul, la 0,3 și 0,7 din adâncime. Grătarul este desenat ca o placă de greutate egală (adâncimea barei portante × grosime ÷ pas); barele transversale și banda nu sunt numărate, iar lista de debitare o spune.
- **Balustrade.** O balustradă superioară din țeavă pe stâlpi de-a lungul fiecărei rampe și al fiecărui palier, cu un spațiu între balustri prin care nicio sferă mai mare decât deschiderea regulii nu trece (cel mult 100 mm implicit).

## Desene, lista de debitare, export

- Rampa este un singur ansamblu; balustradele sunt un alt ansamblu (ambele părți sunt același ansamblu, făcut de două ori). Fiecare are desenul său de ansamblu, iar desenul limonului arată găurile sale.
- **Foaia scării** (ST-…) arată limonul fiecărei rampe drept, cu stațiile găurilor notate de la capătul inferior, și detaliul treptei: secțiunea, nasul, returul și flanșa de capăt cu găurile ei.
- {{ui:Listă de debitare și greutăți}} din proprietăți listează fiecare secțiune și lungime, cu cantități și kilograme; {{ui:Descărcați lista de debitare (CSV)}} o salvează.
- Totul merge în lista de materiale, fișierele NC și IFC ca piese obișnuite (IfcMember, IfcColumn, IfcPlate).

## De reținut

- Acesta este un punct de plecare, nu un proiect. Nimic nu este verificat la rezistență sau la săgeată; setul de reguli doar limitează forma.
- Capetele limoanelor la planșee sunt tăiate drept și nu sunt detaliate; stâlpii paliierelor stau până la planșeul de dedesubt și nu au plăci de bază.
- Plasarea scării ca un singur element în BimCraft nu este încă conectată.
