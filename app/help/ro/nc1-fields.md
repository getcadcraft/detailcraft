---
title: Câmpurile fișierului NC
summary: Ce scrie DetailCraft în fiecare fișier NC DSTV, câmp cu câmp, și cum se măsoară fețele și coordonatele.
keywords: nc1, dstv, fișier nc, bloc st, ak, bo, antet, fețe, coordonate, cnc, format
from: 1b676fc1
---

Fiecare fișier `.nc1` descrie o singură marcă de piesă. Liniile se termină cu CR LF. Câmpurile de text conțin ASCII simplu; celelalte caractere devin „?”. A doua linie este un comentariu, `** DetailCraft <mark>.nc1`.

## Antet (ST)

| Câmp | Profil I, profil U | Cornier | HSS dreptunghiular | HSS rotund | Placă |
|---|---|---|---|---|---|
| Comandă | Numele modelului | ← | ← | ← | ← |
| Desen, piesă | Marca piesei | ← | ← | ← | ← |
| Etapă | Etapa piesei, sau 1 | ← | ← | ← | ← |
| Calitatea oțelului | Clasa oțelului | ← | ← | ← | ← |
| Cantitate | Numărul de piese cu această marcă | ← | ← | ← | ← |
| Profil | Numele profilului, de exemplu W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Codul profilului | I sau U (profil U) | L | M | RO | B |
| Lungime | Lungime de debitare | ← | ← | ← | Lungime |
| Înălțime | Adâncimea d | Latura | Înălțime | Diametru | Lățimea plăcii |
| Lățimea tălpii | bf | Latura | Lățime | Diametru | 0 |
| Grosimea tălpii | tf | t | Peretele t | Peretele t | 0 |
| Grosimea inimii | tw | t | Peretele t | Peretele t | Grosimea plăcii |
| Rază | Raza de racordare (0 pentru profilele U AISC) | 0 | Raza exterioară a colțului | 0 | 0 |
| Greutate pe metru | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Suprafață de vopsire pe metru | Perimetru exterior, m²/m | ← | ← | ← | 2 (ambele fețe, m²/m²) |
| Unghiuri de fierăstrău (4 câmpuri) | 0 (drept) | ← | ← | ← | ← |
| Câmpuri de text (4) | `-` | ← | ← | ← | ← |

Plăcile urmează coloana „pentru table” din standard. Standardul nu are coloană pentru țevi rotunde: DetailCraft scrie diametrul atât ca înălțime, cât și ca lățime a tălpii, iar peretele ca ambele grosimi.

## Contururi exterioare (AK)

- **Profile I și U:** inima (v), cu o crestătură dreptunghiulară pentru fiecare decupare; fiecare tălpă (o și u), scurtată la un capăt unde o decupare este cel puțin la fel de adâncă ca talpa.
- **HSS dreptunghiular:** ambii pereți laterali (v și h), cu crestături pentru decupări, și pereții de sus și de jos (o și u).
- **Corniere:** un dreptunghi pentru fiecare aripă (v și u). Decupările la corniere nu se scriu: o astfel de piesă este trecută ca nescrisă. O diagonală cu cornier fixată cu șuruburi de un [guseu](topic:brace-gussets) are găurile pe aripa fixată: v pentru aripa de-a lungul lui u al piesei, u pentru aripa de-a lungul lui v.
- **HSS rotund:** un dreptunghi pe v, tubul văzut din față (lungime × diametru).
- **Plăci:** un dreptunghi pe fața v.

Fiecare contur este închis (primul punct se repetă la sfârșit) și parcurge sensul trigonometric.

## Găuri (BO)

Un rând pentru fiecare gaură: față, x, y, diametru, adâncime 0 (prin). Sunt incluse toate găurile, cele introduse manual și cele făcute de conexiuni. O gaură prin pereții laterali ai unui HSS dreptunghiular este scrisă de două ori, o dată pe v și o dată pe h.

## Fețe și coordonate

Fiecare profil este așezat cum îl desenează figura standardului cu pozițiile profilelor (DSTV 1998, p. 7): x de-a lungul piesei, Y transversal, Z în sus de la fața din spate, cu punctul zero în colțul exterior. DetailCraft nu oglindește niciodată o piesă ca să se potrivească figurii.

| Față | Profil I | Profil U | Cornier | HSS dreptunghiular | Placă |
|---|---|---|---|---|---|
| v | Inimă, din față | Inimă, văzută dinspre partea tălpilor | Aripa de-a lungul lui u al piesei | Perete lateral la −u | Fața plăcii |
| h | | | | Perete lateral la +u | |
| o | Talpa de sus | **Talpa de jos** | | Perete de sus | |
| u | Talpa de jos | **Talpa de sus** | Aripa de-a lungul lui v al piesei | Perete de jos | |

- **x** curge de-a lungul piesei de la începutul tăierii.
- **Profile I și HSS dreptunghiulare:** y pe inimă sau pe pereții laterali pornește de la partea de jos a profilului; y pe o tălpă sau pe pereții de sus și de jos pornește de la muchia ei de pe partea din spate (partea +u a piesei).
- **Profilele U** stau pe spate, cu tălpile în sus, ca în figura standardului. Deci y pe inimă curge de la exteriorul tălpii de sus în jos, talpa de sus este fața u, iar talpa de jos este fața o, iar y pe o tălpă curge de la spatele inimii spre vârful tălpii.
- **Cornierele:** y pe fiecare aripă pornește de la călcâi.
- **Plăcile:** y pornește de la muchia −u a plăcii.

Înainte de tăiere, verificați cum citesc fețele profilelor U software-ul mașinii: unele programe întorc profilele U invers.

## Nescris

Teșituri, contururi interioare, marcaje (SI), unghiuri de tăiere altele decât cel drept, găuri alungite, găuri în țevi rotunde (DetailCraft nu are) și decupări la corniere și la țevi rotunde.
