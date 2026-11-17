---
title: Detaliați grinzi, stâlpi, planșee și pereți din beton armat
summary: Adăugați grinzi, stâlpi, planșee și pereți din beton după grilă, dați-le bare, etrieri și legături, verificați suprapunerile și ancorarea conform ACI 318-19 sau EN 1992-1-1, și realizați desene de execuție și tabele de întinderi.
keywords: beton armat, armătură, grindă, stâlp, planșeu, perete, etrieri, agrafe, legături, cârlige, suprapuneri, suprapunere, ancorare, lungime de dezvoltare, ld, ldh, lbd, strat de acoperire, distanță, bare de contur, deschideri, plase, marcă de bară, tabel de întinderi, tabel de întindere a barelor, bbs, desen de execuție, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, import IFC
from: 3835b7ec
---

Fila {{ui:Beton}} de sub vizualizare detaliază barele grinzilor, stâlpilor, planșeelor și pereților din beton. Dați dimensiunile și barele; DetailCraft plasează fiecare bară, o numerotează, verifică suprapunerile, ancorarea, stratul de acoperire și distanțele față de clauza din care provin, și o desenează.

:::warning
DetailCraft detaliază barele pe care i le dați. Nu le proiectează. Fiecare rezultat trebuie verificat de un inginer.
:::

## Deschiderea filei Beton

Alegeți fila {{ui:Beton}} de sub vizualizare. Într-un aspect cu panglică, {{ui:Beton}} se află în fila {{ui:Modelare}}, lângă {{ui:Talpă de fundare}}. Cu linia de comandă a stilului de desen, tastați {{cmd:CONCRETE}}.

## Adăugarea unui element după grilă

Elementele din beton se plasează pe liniile de grilă și nivelurile modelului, deci configurați-le mai întâi (panoul din stânga).

1. În {{ui:Adăugare după grilă}}, alegeți {{ui:Element}}: {{ui:Grindă din beton}}, {{ui:Stâlp din beton}}, {{ui:Planșeu}} sau {{ui:Perete}}.
2. Alegeți liniile de grilă și nivelurile:
   - o grindă merge de la o intersecție de grilă la alta, cu partea de sus pe nivel;
   - un stâlp stă pe o intersecție, de la un nivel la altul;
   - un planșeu umple dreptunghiul dintre două linii de grilă numerotate și două literate, cu partea de sus pe nivel;
   - un perete merge pe axa lui centrală de la o intersecție la alta, de la un nivel la altul.
3. Dați dimensiunea și alegeți {{ui:Adăugare}}. Elementul este selectat, iar câmpurile lui se deschid în panoul {{ui:Proprietăți}}.

Fiecare element pornește cu bare care sunt valori inițiale, nu de proiectare: înlocuiți-le cu cele stabilite de inginer.

## Modificarea barelor

Selectați elementul (în vizualizare sau după numele lui din fila {{ui:Beton}}). Panoul {{ui:Proprietăți}} arată:

| Element | Ce setați |
|---|---|
| Grindă | Lățimea, adâncimea, stratul de acoperire liber; barele de sus și de jos (dimensiune, număr, dreaptă sau cu cârlig de 90° la capete); barele laterale; etrierii (dimensiune, cârlige de 135° sau 90°, distanța primului față de fața reazemului, lungimea zonei de capăt și distanța ei, distanța dintre ei); lungimile de reazem; lungimile de suprapunere |
| Stâlp | Lățimea, adâncimea pe toată lungimea, rotirea, stratul de acoperire; barele longitudinale pe fiecare față; agrafele ca etrierii; ce fac barele la capătul de sus (suprapunere cu stâlpul de deasupra, cârlig în planșeu sau oprire) |
| Planșeu | Grosimea, dimensiunea, partea de sus, straturile de acoperire; plasa de jos și plasa de sus pe fiecare direcție (dimensiune și distanță); bare în U în jurul marginilor; {{ui:Bare de contur}}; deschideri |
| Perete | Grosimea, stratul de acoperire, unu sau două straturi, bare orizontale și verticale, bare în U la capete, bare verticale suprapuse deasupra sau nu, bare de contur, deschideri |

Fiecare modificare este un singur pas de anulare. O modificare care nu poate fi realizată este refuzată, iar bara de stare spune de ce, de exemplu „Deschiderea nu încape în element împreună cu stratul său de acoperire.”

Etrierii și agrafele sunt închise, cu ambele cârlige într-un colț. Barele unei grinzi intră în stâlpul din beton la capete, până la fața îndepărtată a stâlpului minus stratul de acoperire; unde nu există stâlp, dați {{ui:Lungimea reazemului la început (mm)}} și pe cea de la capăt.

## Suprapuneri și ancorare

Barele mai lungi decât {{ui:Lungime standard a barei (mm)}} (12000 la început) sunt tăiate în bucăți de lungime egală, suprapuse. Tabelul {{ui:Suprapuneri și ancorare}} listează fiecare suprapunere și fiecare ancorare: ce este necesar, cu clauza și termenii ei, și ce are detaliul.

- O lungime de suprapunere de 0 înseamnă „cât este necesar”: lungimea cerută de normă, rotunjită în sus la 25 mm.
- Scrieți propria lungime de suprapunere ca s-o folosiți în locul ei. Dacă este mai scurtă decât este necesar, este o problemă (vezi mai jos) și este marcată cu * în tabel.
- Ancorarea se măsoară de la fața reazemului până la capătul barei din interiorul reazemului. O grindă fără reazem cunoscut o spune în loc s-o verifice.
- Un stâlp care stă pe o talpă se suprapune cu barele de așteptare ale tălpii, iar pe alt stâlp cu barele acelui stâlp: și această suprapunere este verificată.

**ACI 318-19** (SI): barele întinse drepte 25.4.2.3 (tabelul, cu ψt, ψe, ψg, λ), cârligele standard 25.4.3.1 (ψr 1.6 și ψo 1.25, luate dacă nu se cunosc altfel), barele comprimate 25.4.9.2, suprapunerile întinse 25.5.2.1 (clasa B, sau clasa A în setări), suprapunerile comprimate 25.5.5.1.

**EN 1992-1-1**: ancorare 8.4.4, cu fbd din 8.4.2 (aderență bună sau slabă), suprapuneri 8.7.3, cu α6 pentru fiecare bară suprapusă într-o singură secțiune. γc, γs și αct pornesc de la valorile recomandate; setați-le pe cele ale anexei naționale.

## Verificările

Fiecare verificare care eșuează apare în panoul Probleme al aplicației (sursa {{ui:Verificări de armare}}) și în lista {{ui:Verificări}} a elementului:

| Verificare | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Strat de acoperire | Tabelul 20.5.1.3.1, după expunere | Minimul de aderență, Tabelul 4.2 (stratul de acoperire pentru durabilitate trebuie stabilit de proiectant) |
| Distanța liberă dintre bare | 25.2.1 (grinzi, planșee, pereți), 25.2.3 (stâlpi) | 8.2 (2) |
| Distanța etrierilor | 9.7.6.2.2 | 9.2.2 (6) |
| Armătura minimă a grinzii | 9.6.1.2 | 9.2.1.1 (1) |
| Barele laterale ale grinzii peste 900 mm adâncime | 9.7.2.3 | nu se verifică |
| Procentul de armare al stâlpului, numărul de bare | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Agrafe: distanță, dimensiune, legături transversale | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Distanța barelor în planșeu, armătura minimă | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Distanța în perete, armătura minimă, două straturi | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Suprapuneri, ancorare | ca mai sus | ca mai sus |

Dimensiunea agregatului nu este cunoscută, deci distanța liberă se verifică fără ea.

## Deschideri, bare de contur și bare de margine

Alegeți {{ui:Adăugare deschidere}} sub un planșeu sau un perete selectat și stabiliți unde se află și ce dimensiune are. Barele pe care le taie se opresc la stratul de acoperire de la margine. Barele de contur se adaugă pe fiecare parte, în același strat, având jumătate din aria barelor tăiate și o lungime de ancorare dincolo de deschidere. Aceasta este regula de pornire a DetailCraft, nu o clauză de normă: schimbați {{ui:Bare de contur}} cu cele ale inginerului. Barele de colț nu se adaugă.

Barele în U de pe marginile libere ale unui planșeu și la capetele unui perete au laturi cu lungimea unei suprapuneri.

## Marcile barelor și tabelul de întinderi

Barele identice au aceeași marcă: tălpile păstrează marcile F (5F1), grinzile primesc B, stâlpii C, planșeele S și pereții W (7B1, 8C1, 4S2). Fila {{ui:Tabel de întinderi}} și CSV-ul ei listează acum fiecare bară a structurii, mai întâi tălpile. {{ui:Ieșire}} › {{ui:Mai multe}} › {{ui:Întinderi}} îl descarcă.

## Desene de execuție

Alegeți {{ui:Ieșire}} › {{ui:Mai multe}} › {{ui:Desene de armare}}, {{ui:Desene de armare}} din fila {{ui:Beton}} sau {{ui:Desen de execuție}} lângă un element. Fiecare element primește o planșă cu o elevație (un plan pentru un planșeu), care arată fiecare bară și marca ei, zonele de etrieri sau agrafe și suprapunerile cotate, plus o secțiune la mijloc. Apoi tabelele de întinderi listează fiecare marcă, cu un schiț al formei ei, dimensiunile, numărul, lungimea de debitare și greutatea.

Planșele se realizează din model de fiecare dată și din nou după fiecare modificare, cât timp fereastra este deschisă: cartușul poartă referința modelului. Salvați {{ui:Această planșă ca PDF}} sau {{ui:Toate planșele ca PDF}}.

## Bare dintr-un fișier IFC

{{ui:Fișier}} › {{ui:Import IFC}} citește acum IfcReinforcingBar: discul de-a lungul axei centrale revine ca laturi drepte și îndoiri, cu diametrul, marca și elementul care o ține. Barele se păstrează așa cum au fost citite (nu sunt transformate în reguli ale unei grinzi sau ale unui planșeu), se arată în vizualizare, se listează în tabelul de întinderi și se scriu din nou la exportul IFC. Raportul de import spune câte bare au fost citite, din ce dimensiuni, în câte elemente și ce a fost lăsat afară, și de ce.

O grindă, un stâlp, un planșeu sau un perete din acel fișier care conțin bare sau al cărui material este beton nu sunt luate drept oțel; raportul o spune. Exportul IFC al DetailCraft transportă definiția fiecărui element din beton, deci revine ca el însuși, iar barele lui sunt refăcute din aceasta.

:::note
Citirea fișierelor proprii ale unui program de proiectare structurală (nu IFC) este încă nerealizată: exportați IFC din acel program.
:::

## Exportul IFC

Grinzile, stâlpii, planșeele din beton (cu deschideri) și pereții ies ca IfcBeam, IfcColumn, IfcSlab și IfcWall, fiecare cu barele lui ca IfcReinforcingBar (bare principale, legături pentru etrieri și agrafe, bare de margine) agregate la el. Fiecare bară este un disc de-a lungul axei centrale, cu arce adevărate la îndoiri, cu marca și lungimea de debitare.
