---
title: Adăugarea plăcilor de bază și a tijelor de ancorare
summary: Puneți o placă de bază sudată cu patru tije de ancorare sub un stâlp, stabiliți dimensiunile și copiați-o la fiecare stâlp similar.
keywords: placă de bază, tije de ancorare, șuruburi de ancorare, șuruburi de fixare, bază de stâlp, șuruburi de fundație, similare
from: 619ebc64
---

O îmbinare cu placă de bază pune o placă sub stâlp, scurtează stâlpul cu grosimea plăcii, le sudează pe amândouă și adaugă patru tije de ancorare prin găuri din placă.

:::warning
Dimensiunile sunt valori de pornire, nu un proiect. DetailCraft nu verifică presiunea de contact, rezistența tijelor sau adâncimea de ancorare.
:::

## Adăugarea unei plăci de bază

1. Alegeți {{ui:Selectare}} ({{key:V}}) și faceți clic pe un stâlp. Acesta trebuie să fie vertical.
2. Alegeți {{ui:Placă de bază}} din grupul {{ui:Îmbinare}}, sau {{ui:Adăugare placă de bază}} din panoul {{ui:Proprietăți}}.
3. Bara de stare afișează „Placă de bază adăugată cu patru tije de ancorare.” Noua îmbinare este selectată.

Un stâlp poate avea o singură placă de bază. Dacă are deja una, bara de stare afișează „Acest stâlp are deja o placă de bază.”

## Modificarea

Selectați placa de bază (faceți clic pe placă sau pe o tijă). Sub {{ui:Placă, șuruburi și sudură (mm)}}:

| Setare | Implicit | Ce face |
|---|---|---|
| Grosime placă | 25 | Stâlpul este scurtat cu această valoare |
| Lungime placă | 450 | De-a lungul adâncimii stâlpului |
| Lățime placă | 400 | Peste stâlp |
| Diametru tijă | 20 | Dimensiunea tijei de ancorare |
| Diametru gaură | 33 | Gaura din placă |
| Clasă șurub | F1554 Gr 36 | Clasa tijei, ca text |
| Distanță între tije (pe adâncime) | 350 | Între centrele tijelor, pe lungimea plăcii |
| Distanță între tije (transversal) | 300 | Între centrele tijelor, transversal |
| Proiecție tijă deasupra plăcii | 100 | De la partea de sus a plăcii până la vârful tijei |
| Înglobare tijă sub placă | 450 | De la fața de jos a plăcii până în beton |
| Dimensiune cordon de sudură | 8 | Pe tot conturul bazei stâlpului |
| Material placă | A36 | Text |
| Rost de mortar | 0 | Spațiul dintre partea de sus a betonului și fața de jos a plăcii |
| Rigidizări | Niciuna | Alegeți Niciuna, 2 (în axul inimii) sau 4 (și perpendicular pe inimă); vezi mai jos |
| Grosime, înălțime rigidizare | 12, 150 | |
| Adâncime dinte de forfecare | 0 | Cât ajunge dintele sub placă; 0 = fără dinte |
| Grosime, lățime dinte de forfecare | 25, 150 | |
| Șaibe de placă | Niciuna | Pe fiecare tijă, sau niciuna |
| Dimensiune șaibă, grosime | 0, 0 | 0 = minimul din AISC Design Guide 1 pentru tija respectivă |

Lungimea tijei = înglobare + rost de mortar + grosime placă + proiecție. Cu valorile implicite, aceasta este 575 mm.

## Detalii de bază: mortar, rigidizări, dinte de forfecare, șaibe

Toate patru sunt dezactivate la o placă de bază nouă și la plăcile de bază din modele făcute înainte de DetailCraft 0.4.

- **Rost de mortar.** Placa stă atât de sus deasupra betonului, iar tijele devin mai lungi cu aceeași valoare. AISC Design Guide 1 (2.10) sugerează 1 in. pe o pardoseală finisată și 1½ până la 2 in. pe o fundație sau un stâlp de beton; mai mult pentru plăci mari și pentru plăci cu dinte de forfecare.
- **Rigidizări.** Plăci verticale sudate de stâlp și de placă, de la fața stâlpului până la marginea plăcii, sub formă de dreptunghiuri (fără teșitură sau conicitate deocamdată). **2** stau în axul inimii, dincolo de fiecare talpă; **4** adaugă două perpendiculare pe inimă, între tălpi, până la laturile plăcii. Pe un stâlp tubular stau la mijlocul fiecărei fețe. Fiecare este sudată de stâlp și de placă pe ambele părți.
- **Dinte de forfecare.** O placă sudată pe tot conturul sub placa de bază, în axul adâncimii stâlpului, centrată. DetailCraft avertizează dacă dintele nu este mai adânc decât rostul de mortar. Nu taie locașul din fundație; din acest motiv [verificarea conflictelor](topic:clash-check) lasă dintele și fundația în afara verificării.
- **Șaibe de placă.** O șaibă pătrată pe fiecare tijă, așezată pe placa de bază și trecută în ansamblul stâlpului ca piesă liberă (livrată împreună cu stâlpul, nu sudată: Design Guide 1, 2.6). Cu dimensiune și grosime 0, DetailCraft ia șaiba minimă din AISC Design Guide 1, ediția a 2-a, Tabelul 2.3, pentru tija respectivă; o tijă metrică ia următoarea dimensiune în inch în sus (o tijă M20 primește rândul de 7/8 in.: 2½ in. × 5/16 in.). Panoul de proprietăți afișează dimensiunea folosită. Gaura șaibii este diametrul tijei + 1/16 in.: aceasta este alegerea DetailCraft, tabelul nu oferă una. DetailCraft avertizează când tijele pot să nu iasă suficient pentru șaibă și piuliță (proiecție mai mică decât grosimea șaibii + diametrul tijei).

Tabelul 2.3 din Design Guide 1 recomandă și gaura tijei în placă: 1-5/16 in. pentru o tijă de ¾ in., 1-9/16 in. pentru ⅞ in., 1-13/16 in. pentru 1 in. DetailCraft nu modifică dimensiunea găurii alese.

Apar și avertismente când găurile tijelor sunt mai aproape de marginea plăcii decât 1,2 × diametrul găurii, când tijele cad în interiorul conturului stâlpului sau când placa este mai mică decât stâlpul.

## Copierea la stâlpi similari

1. Selectați placa de bază.
2. Alegeți {{ui:Aplicare la similare (n)}}, sau {{ui:Similare}} din meniul {{ui:Mai multe}} al grupului {{ui:Îmbinare}}.
3. Fiecare stâlp vertical cu același profil, care nu are placă de bază și nu stă pe alt stâlp, primește o copie.

## Plăci de bază și fundații

O placă de bază nu are nevoie de o fundație, iar fundația nu știe de placa de deasupra: tijele de ancorare nu sunt legate de armătura fundației. Plasați fundațiile cu {{ui:Talpă de fundare}}; vezi [Plasarea fundațiilor cu armătură](topic:footings-and-rebar).
