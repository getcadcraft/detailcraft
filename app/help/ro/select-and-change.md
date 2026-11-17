---
title: Selectare cu fereastră, mutare, rotire, oglindire, modificare a multor elemente
summary: Trageți o fereastră pentru a selecta, trageți piesele selectate pentru a le muta, mutați, rotiți sau oglindiți selecția (sau o copie a ei) ori schimbați profilul, materialul, poziția sau rotirea a mai multor elemente deodată.
keywords: lasou, gard, selectare în mână liberă, tragere, trage și plasează, mutare prin tragere, agățare, fereastră, intersectare, selectare în casetă, selectare multiplă, mutare, rotire, oglindire, întoarcere, copiere, modificare multiplă, mai multe elemente, profil, material, poziție, rotire, variază, linie de grilă
from: 50b16f9a
---

Fiecare dintre acestea este un singur pas de anulare: un {{key:Mod+Z}} le anulează pe toate.

## Selectarea cu o fereastră

- În {{ui:Plan}} și {{ui:Fațadă}}, trageți cu butonul stâng dintr-un loc gol. În {{ui:3D}}, țineți {{key:Shift}} și trageți (o simplă tragere rotește modelul).
- Trageți **spre dreapta** pentru o fereastră: ia ce se află complet înăuntru, desenată cu margine continuă.
- Trageți **spre stânga** pentru o fereastră de intersectare: ia tot ce atinge, desenată punctat.
- Țineți {{key:Shift}} la începutul tragerii pentru a adăuga la selecție în loc să o înlocuiți.
- Un plan sau o fațadă oferă doar ce arată: piesele tăiate deasupra planului sau mai departe de 1 m de linia de grilă a fațadei nu pot fi alese.
- {{key:Esc}} în timpul tragerii renunță la fereastră.

### Lasou

Alegeți **Lasou** sub {{ui:Tragere pentru selectare}} în [Setările DetailCraft](topic:settings), iar aceeași tragere desenează o linie în mână liberă în loc de un dreptunghi.

- Prima mișcare laterală a lasoului decide cum selectează: **spre dreapta**, ce se află complet înăuntru (linie continuă); **spre stânga**, ce atinge (punctat).
- Apăsați {{key:Space}} în timpul tragerii pentru a comuta între interior, atingere și **gard**: o linie deschisă care ia orice traversează (punctată, portocalie).
- {{key:Shift}} pentru a adăuga și {{key:Esc}} pentru a renunța funcționează ca la fereastră.

:::touch
Pe un ecran tactil, un deget panoramează planul și fațada ca înainte; selectați piesele atingându-le.
:::

În {{ui:Plan}} și {{ui:Fațadă}}, panoramați cu butonul drept sau cel din mijloc cât timp instrumentul {{ui:Selectare}} este activ.

## Trageți piesele pentru a le muta

1. Selectați mai întâi piesele (clic, {{key:Shift}}+clic sau o fereastră).
2. Apăsați pe una dintre piesele selectate și trageți. Întreaga selecție se mută; un contur punctat arată unde ajunge.
3. Lăsați să plece pentru a plasa. {{key:Esc}} înainte de a lăsa ține totul la loc.

- În {{ui:3D}} și {{ui:Plan}}, piesele se mută pe nivel. Țineți {{key:Mod}} la începutul tragerii în {{ui:3D}} pentru a le muta în sus și în jos.
- În {{ui:Fațadă}} se mută în interiorul fațadei: de-a lungul liniei de grilă și în sus și în jos.
- Piesa pe care o țineți se agață de o intersecție a grilei când capătul ei ajunge la câțiva pixeli de una (intersecția se aprinde, iar bara de stare o numește). În rest, mutarea merge în pași de 10 mm.
- Apăsarea pe o piesă care nu este selectată rotește sau panoramează vederea, astfel încât o tragere nu mută niciodată ceva din greșeală.
- Trăgerea este un singur pas de anulare, ca {{ui:Mutare}}. Conexiunile urmează elementele lor.

## Modificarea unei proprietăți la mai multe elemente

Selectați două sau mai multe elemente. Sub **Modificare pentru toate** în panoul {{ui:Proprietăți}}:

- {{ui:Profil}}, {{ui:Poziție}}: pentru grinzile, stâlpii și contravântuirile dintre ele.
- {{ui:Grosime placă (mm)}} și {{ui:Lățime placă (mm)}}: pentru plăci.
- {{ui:Material}} și {{ui:Rotire (°)}}: pentru toate.

Un câmp arată **Variază** când elementele nu sunt de acord. Alegeți sau scrieți o valoare și fiecare element căruia i se aplică o primește; bara de stare spune câte au fost schimbate și câte și-au păstrat valoarea.

Câmpurile numerice din panoul {{ui:Proprietăți}} acceptă și calcule: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Un calcul care nu poate fi citit este refuzat, iar bara de stare arată unde a greșit.

## Mutare, rotire sau oglindire

Selectați elemente și fundații (și un singur element este suficient), apoi folosiți **Mutare, rotire, oglindire** din panoul {{ui:Proprietăți}}. Conexiunile nu se mută singure: urmează elementele lor. Dacă mutați o grindă, dar nu și stâlpul ei, bara de stare spune câte conexiuni leagă acum un element mutat de unul rămas pe loc, iar [Probleme](topic:troubleshooting) spune dacă nu mai încap.

- **Mutare:** scrieți x, y și z în milimetri și alegeți {{ui:Mutare}}. Sau alegeți {{ui:Alegere a două puncte}} (ori apăsați {{key:M}}): faceți clic pe intersecția grilei de la care pleacă, apoi pe cea la care ajunge. Un contur punctat urmează indicatorul.
- **Rotire în plan:** scrieți unghiul (în sens trigonometric, văzut de sus) și alegeți în jurul a ce se rotește: centrul selecției sau o intersecție a grilei. Stâlpii se rotesc odată cu cadrul.
- **Oglindire:** alegeți o linie de grilă. Imaginea în oglindă este același profil întors pe dos: un profil I își păstrează tălpile, un canal își întoarce fața (partea de sus și cea de jos se schimbă), iar găurile și decupările merg odată cu piesa.
- Bifați **Păstrează originalul (creează o copie)** pentru a lăsa selecția pe loc și a muta, roti sau oglindi o copie. Conexiunile ei vin odată cu ea când {{ui:Copiere plăci de capăt și plăci de bază odată cu barele lor}} este activ în [Setările DetailCraft](topic:settings).

Rotirea se face în jurul unei linii verticale, iar oglindirea se face într-un plan vertical, deci nivelurile rămân orizontale, iar fundațiile rămân verticale.
