---
title: Explorați cadrul exemplu
summary: Deschideți cadrul exemplu cu două travee, integrat în aplicație, și folosiți-l ca să învățați ce creează DetailCraft, de la mărci până la fișierele NC.
keywords: exemplu, demonstrație, cadru, învățare, prezentare, încercare
from: 5c5944dd
---

Cadrul exemplu este un model mic, complet: fiecare tip de lucru pe care îl construiește DetailCraft apare cel puțin o dată. Este cel mai rapid mod de a învăța aplicația și de a testa un export înainte să vă bazați pe el.

## Deschiderea lui

1. Alegeți {{ui:Exemplu}} din grupul {{ui:Fișier}}.
2. Dacă modelul curent are modificări nesalvate, alegeți {{ui:Salvare mai întâi}} sau {{ui:Renunțare la modificări}}.
3. Bara de stare spune „Cadru exemplu: 6 stâlpi cu plăci de bază, 4 grinzi cu plăci de capăt, o contravântuire, 7 tălpi de fundare cu armătură.”

Exemplul se deschide ca un model nou numit „Cadru exemplu”. Nu schimbă nimic altceva și nu are nimic de anulat.

## Ce conține

- **Grile** 1, 2, 3 la 6000 mm și A, B la 7000 mm. **Niveluri**: Nivel 1 la 0 și Nivel 2 la 4000.
- **Șase stâlpi**, W12x50, de la Nivel 1 la Nivel 2, la fiecare intersecție, fiecare pe o placă de bază de 25 mm cu patru tije de ancorare.
- **Patru grinzi**, W16x26, la Nivel 2 pe liniile de grilă A și B, cu partea de sus a oțelului pe nivel și cu o placă de capăt șurubată, aliniată, la ambele capete (opt în total).
- **O contravântuire**, HSS4x4x1/4, de la A/1 din Nivel 1 până la A/2 din Nivel 2.
- **Șase talpe izolate**, 2000 x 2000 x 600, câte una sub fiecare stâlp, cu o plasă inferioară cu cârlige în ambele direcții.
- **Încă o talpă** lângă cadru, 2400 x 1800 x 600, cu șase bare de așteptare cu cârlige, ridicate pentru un pilon de beton.

## De încercat

1. Faceți clic pe o grindă. Citiți {{ui:Marcă piesă}}, {{ui:Ansamblu}}, {{ui:Lungime de debitare}} și {{ui:Scurtare}}: lungimea de debitare este mai scurtă decât distanța de 6000 mm a grilei, pentru că fiecare placă de capăt taie grinda înapoi cu jumătate din adâncimea stâlpului plus grosimea plăcii.
2. Faceți clic pe un stâlp. Sub {{ui:Găuri}} sunt listate găurile făcute de plăcile de capăt în talpa lui („8 găuri de la îmbinări”; stâlpii din mijloc au 16, câte un set în fiecare talpă).
3. În lista {{ui:Mărci de piese}} din stânga, vedeți că toate cele patru grinzi au aceeași marcă: sunt aceeași bucată de oțel. Stâlpii de colț au și ei o marcă comună, chiar dacă găurile lor sunt orientate în sensuri opuse, pentru că un stâlp întors cap la cap este aceeași piesă. Stâlpii din mijloc, cu găuri în ambele tălpi, primesc altă marcă.
4. Faceți clic pe o placă de capăt (sau pe unul dintre șuruburile ei). Panoul {{ui:Proprietăți}} arată setările plăcii, șuruburilor și sudurii, șuruburile pe care le face (cu lungimea calculată din strângere) și avertismentele privind distanța până la margine.
5. Deschideți fila {{ui:Listă de materiale}}. Piesele, ansamblurile (o grindă cu cele două plăci de capăt este un ansamblu), șuruburile și tijele de ancorare sunt listate cu greutăți. Ar trebui să vedeți șase mărci de piese: c1 (cei doi stâlpi din mijloc) și c2 (cei patru stâlpi de colț), ambii W12x50 la 3975 mm; b1, patru grinzi W16x26 la 5650 mm; br1, contravântuirea; p1, opt plăci de capăt PL20x180; și p2, șase plăci de bază PL25x400. Elementele de prindere sunt 64 de șuruburi 20 x 70 A325 și 24 de tije de ancorare 20 x 575.
6. Deschideți fila {{ui:Tabel de întinderi}}. Cele șase tălpi identice au mărci comune de bare; talpa pilonului își adaugă propriile bare.
7. Faceți clic pe contravântuire și uitați-vă la grupul {{ui:Ieșire}}: {{ui:Desen de execuție}} este gri, pentru că desenele de execuție acoperă deocamdată doar profilele I și plăcile.
8. Alegeți {{ui:Fișiere NC}}. Arhiva conține un fișier pentru fiecare marcă de profil I și de placă; bara de stare arată marca contravântuirii ca nescrisă.
9. Alegeți {{ui:IFC}} și deschideți fișierul în orice vizualizator IFC, ca să verificați cum citește alt software.

## Folosiți-l ca punct de plecare

Exemplul este un model obișnuit. Schimbați-l, apoi redenumiți-l în câmpul {{ui:Nume}} și salvați-l sub noul nume cu {{key:Mod+S}}.
