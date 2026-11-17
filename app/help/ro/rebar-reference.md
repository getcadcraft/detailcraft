---
title: Referință pentru armătură
summary: Diametrele barelor, dimensiunile cârligelor, codurile de formă, lungimile de debitare și coloanele tabelului de întinderi folosite de DetailCraft.
keywords: armătură, diametre de bare, cârlige, diametru de îndoire, coduri de formă, lungime de debitare, tabel de întinderi, listă de bare, astm a615, aci 318
from: 1583535e
---

## Diametrele barelor

Din ASTM A615/A615M Tabelul 1 (denumiri în sistemul inch-livră). Milimetrii și kg/m sunt conversii exacte ale valorilor publicate în inch și lb/ft. Listele arată fiecare dimensiune ca, de exemplu, "#5 (15.9 mm)".

| Bară | Diametru (mm) | Masă (kg/m) | Arie (mm²) | Diametrul interior al îndoirii | Latura cârligului de 90°, din exterior în exterior (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

În [Setările DetailCraft](topic:settings) ({{ui:Armătură}}), **denumirile ASTM ale barelor** pot arăta aceste bare prin denumirile lor metrice soft din A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (aceleași bare; ACI 315-99 Tabelul 1 le listează pe amândouă).

### Bare metrice (BS 4449)

| Bară | Diametru (mm) | kg/m | Raza minimă de îndoire r (mm) | Latura cârligului = proiecția capătului P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masa este secțiunea nominală înmulțită cu 7850 kg/m³. Raza și proiecția capătului sunt valorile minime din BS 8666:2020 (tabelul său cu dimensiunile minime; fostul diametru este 2r). Tălpile de fundare cu bare BS primesc laturi de cârlig de P și lungimi de debitare calculate după formulele BS 8666 de mai jos. Alegerea oțelului european în setări începe tălpile noi cu plase H16 și bare de așteptare H20 în beton C30/37.

## Cârlige

Barele ASTM: cârlige standard de 90° conform ACI 318-19 Tabelul 25.3.1: diametrul interior al îndoirii de 6 db pentru #3 până la #8 și 8 db pentru #9 până la #11, cu o prelungire dreaptă de 12 db după îndoire. Latura cârligului, măsurată din exterior în exterior, este jumătate din diametrul îndoirii + db + 12 db.

Dacă cârligul unei bare din plasă nu încape în adâncimea talpii, în interiorul stratului de acoperire, DetailCraft scurtează latura până încape și afișează un avertisment.

## Forme

DetailCraft memorează trei forme. Tabelul de întinderi le tipărește ca coduri DetailCraft, ca tipuri ACI 315 sau ca coduri de formă BS 8666: alegeți **Coduri de formă pentru tabelul de întinderi** în [Setările DetailCraft](topic:settings) ({{ui:Armătură}}).

| Cod | Formă | Dimensiuni |
|---|---|---|
| S | Dreaptă | A = lungime |
| L | O îndoire de 90° | A = latura principală, B = latura cârligului, ambele din exterior în exterior |
| U | Două îndoiri de 90° pe aceeași parte | A = mijlocul, B și C = cele două laturi, din exterior în exterior |

Barele de plasă cu {{ui:Cârlige la capete}} activat sunt U; fără, sunt S. Barele de așteptare cu {{ui:Cârlig jos}} activat sunt L; fără, sunt S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | fără număr de tip |
| L | 11, L = A + B − 0.5r − d | fără număr de tip: figura nu are bară cu un singur cârlig |
| U | 21, A și C laturile, B mijlocul: L = A + B + C − r − 2d | Tip 2, cârlige A și G, dreaptă B |

Cu codurile BS 8666 sau ACI 315, coloanele A, B și C din tabelul de întinderi urmează notația acelui standard (mijlocul unui U este B).

## Lungimea de debitare

Pentru barele BS 4449, lungimea de debitare este formula BS 8666 a codului de formă al barei (mai sus). Pentru barele ASTM, este lungimea exactă a axei centrale a barei: porțiunile drepte plus îndoirile ca arce cu raza egală cu jumătate din diametrul îndoirii plus jumătate din diametrul barei. Nu se calculează dintr-un tabel de scăderi la îndoire, deci poate diferi cu câțiva milimetri de un tabel care le folosește.

## Așezare

- Plasa de jos: barele pe L formează stratul inferior, iar barele pe B stau peste ele. Fiecare set este distribuit uniform pe talpă, în interiorul stratului de acoperire, la distanța pe care o dați sau mai des, cu cel puțin două bare.
- Bare de așteptare: o grilă de bare pe L și pe B, la distanțele date, centrată pe talpă, sprijinită pe plasă și ieșind deasupra fețelor superioare cu proiecția dată. Fiecare cârlig este orientat spre exterior.

## Verificări

| Verificare | Regulă | Rezultat |
|---|---|---|
| Loc pentru bare | Stratul de acoperire de pe ambele părți lasă loc pentru bare | Refuzat dacă nu |
| Adâncime pentru două straturi | Adâncimea minus două straturi de acoperire cuprinde ambele straturi de plasă | Refuzat dacă nu |
| Încadrarea barelor de așteptare | Grila de așteptare încape în stratul de acoperire | Refuzat dacă nu |
| Distanța liberă | Cel puțin cea mai mare dintre 25.4 mm și db (ACI 318-19 25.2.1; dimensiunea agregatului nu este verificată) | Avertisment |
| Adâncimea cârligului | Latura cârligului încape în adâncimea din interiorul stratului de acoperire | Avertisment, latura scurtată |
| Cârligele barelor de așteptare | Cârligele rămân în afara stratului de acoperire | Avertisment |

## Coloanele tabelului de întinderi

Fila {{ui:Tabel de întinderi}} și fișierul ei CSV au aceste coloane: Marcă bară, Dimensiune, Formă, A (mm), B (mm), C (mm), Număr, Lungime de debitare (mm), Lungime totală (m), kg/m, Greutate per bucată (kg), Greutate totală (kg), Folosită pentru. Ultimul rând totalizează numărul, lungimea și greutatea.
