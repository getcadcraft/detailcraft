---
title: Armarea unui stâlp dreptunghiular din beton
summary: Un exemplu complet de detaliere a unui stâlp dreptunghiular din beton în DetailCraft: așezați-l, dați-i bare longitudinale și cercuri, citiți verificările, suprapunerea de deasupra și marcile barelor, și desenați-i foaia de execuție.
keywords: stâlp de beton, stâlp dreptunghiular, armătura stâlpului, bare longitudinale, bare verticale, cercuri, etrieri, agrafe transversale, suprapunere, îmbinare prin suprapunere, bare de așteptare, procent de armare, 1 procent, 8 procente, distanța cercurilor, ACI 318-19 25.7.2, EN 1992-1-1 9.5, desen de execuție, marcile barelor, 8C1, 3C2
from: aee2a3ca
---

Acest subiect ia un stâlp pătrat de la zero până la un detaliu verificat, desenat și inventariat. Regulile generale pentru grinzi, planșee și pereți sunt în [Detalierea betonului armat](topic:reinforced-concrete); aceasta este partea stâlpului, cu numere pe care le puteți reproduce.

:::warning
DetailCraft detaliază barele pe care i le dați. Nu le proiectează. Barele de mai jos sunt valori de pornire pentru exemplu, nu o recomandare: inginerul responsabil de proiect alege dimensiunea, numărul și distanța.
:::

## Ce este un stâlp aici

Un stâlp dreptunghiular are o lățime (de-a lungul axei locale x) și o adâncime transversală (de-a lungul axei locale y), o acoperire liberă până la cercuri, bare longitudinale pe fiecare față și cercuri închise. Rotirea lui rotește totul; fețele rămân „față de lățime” și „față de adâncime”.

- Barele longitudinale sunt date ca numărul pe o față de lățime și numărul pe o față de adâncime. Barele de colț contează pe ambele, deci 3 și 3 fac 8 bare; 4 și 4 fac 12.
- Cercurile sunt dreptunghiuri închise cu două cârlige într-un colț, la 135° sau 90°. Primul cerc este la o distanță fixată deasupra podelei (și sub următorul); zonele de capăt au o distanță mai mică, mijlocul una mai mare.
- Ce fac barele la vârf: continuă și se suprapun cu barele de deasupra, se îndoaie cu cârlige de 90° în planșeu sau se opresc sub vârf.

## Stâlpul lucrat

Un stâlp de 400 × 400 mm, 3600 mm între planșeul de deasupra și cel de dedesubt, bare longitudinale #8, cercuri #3, acoperire liberă de 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Deschideți fila {{ui:Beton}} și setați liniile grilei și nivelurile pe care stă stâlpul (în panoul din stânga).
2. În {{ui:Adăugare după grilă}}, alegeți {{ui:Stâlp din beton}}, alegeți intersecția grilei și cele două niveluri, setați {{ui:Lățime (mm)}} și {{ui:Adâncime transversală (mm)}} la 400 și alegeți {{ui:Adăugare}}.
3. În panoul {{ui:Proprietăți}} setați:
   - {{ui:Acoperire liberă (mm)}} 40;
   - {{ui:Bare longitudinale}} #8, {{ui:Bare pe o față de lățime}} 3, {{ui:Bare pe o față de adâncime}} 3;
   - {{ui:Cercuri}} #3, {{ui:Cârlige}} 135°, {{ui:Distanța dintre (mm)}} 300, {{ui:Lungimea zonei de capăt (mm)}} 600, {{ui:Distanța în zonele de capăt (mm)}} 150, {{ui:Primul de la față (mm)}} 50;
   - {{ui:Bare la vârf}} {{ui:Continuă și se suprapune cu barele de deasupra}}.

Fiecare modificare este un singur pas de anulare.

### Ce obțineți

| Parte | Rezultat |
|---|---|
| Bare longitudinale | 8 bare #8 (un inel 3 × 3), fiecare de 4375 mm lungime: stâlpul de 3600 mm plus o suprapunere de 775 mm deasupra |
| Suprapunere | 757 mm necesari pentru o suprapunere la compresiune (ACI 318-19 25.5.5.1, fy 420), 775 mm asigurați: necesarul rotunjit în sus la următorii 25 mm |
| Cercuri | 17 cercuri #3, fiecare cu o lungime de tăiere de aproximativ 1359 mm, distanțate la 150 mm în cele două zone de capăt de 600 mm și la 300 mm între ele |
| Raport de armare | 2.5 % din secțiunea brută (limitele 1 % și 8 %, ACI 318-19 10.6.1.1) |
| Distanța liberă dintre bare | 112 mm (trebuie cel puțin 40 mm, ACI 318-19 25.2.3) |
| Distanța dintre cercuri | 300 mm (permis 400 mm: cel mai mic dintre 16 diametre de bară, 48 diametre de cerc și latura mai mică, ACI 318-19 25.7.2.1) |
| Dimensiunea cercului | #3 (permis până la 9.5 mm, ACI 318-19 25.7.2.2) |

Toate acestea sunt în lista {{ui:Verificări}} a elementului; suprapunerea este și în {{ui:Suprapuneri și ancorare}}.

## Agrafe transversale

Cu un singur cerc perimetral, sunt ținute doar barele de colț. ACI 318-19 25.7.2.3 permite ca o bară de mijloc de pe o față să rămână nesusținută dacă se află la cel mult 150 mm liberi de o bară de colț. Cu 3 bare pe o față, ca mai sus, asta este îndeplinit. Cu 4 sau mai multe bare pe o față nu este, iar DetailCraft o spune ca avertisment ({{ui:Verificări}} și {{ui:Probleme}}): sunt necesare „agrafe transversale”. **Agrafele transversale nu sunt încă desenate**: adăugați-le manual în desen sau alegeți mai puține bare pe față.

Pentru EN 1992-1-1, DetailCraft verifică dimensiunea barei (cel puțin 8 mm), numărul de bare (cel puțin 4), aria de oțel (0.2 % până la 4 % din secțiune), distanța liberă dintre bare și distanța dintre cercuri (9.5.2 și 9.5.3).

## Suprapunerea, talpa și stâlpul de dedesubt

- Unde **o talpă din model stă sub stâlp**, stâlpul se suprapune cu barele de așteptare ale tălpii, iar suprapunerea lor este verificată și ea.
- Unde **un alt stâlp din model stă sub el**, se suprapune cu barele acelui stâlp.
- Dați propria {{ui:Lungime de suprapunere (mm, 0 = după necesitate)}} pentru a o înlocui; una mai scurtă decât necesarul este o problemă și este marcată cu * în tabel.
- Suprapunerile la compresiune sunt folosite implicit ({{ui:Suprapunere la compresiune}} în setări); alegeți {{ui:Suprapunere la întindere}} când stâlpul poate fi în întindere.

## Mărci, inventar și foaia de execuție

Barele identice au aceeași marcă: barele longitudinale ale stâlpului de deasupra sunt 8C1, cercurile sale 17C2 (numărul întâi, apoi litera de tip C pentru stâlp și numărul curent). Apar în fila {{ui:Tabel de întinderi}}, cu lungimea de tăiere și greutatea, și în CSV din {{ui:Ieșire}} › {{ui:Mai multe}} › {{ui:Întinderi}}.

Alegeți {{ui:Desen de execuție}} lângă stâlp pentru o foaie cu stâlpul în fațadă (fiecare bară, marca ei, zonele cercurilor și suprapunerea cotate) și o secțiune la mijloc, urmată de foaia de îndoire a barelor. Salvați {{ui:Această planșă ca PDF}}.

## Ce nu face aceasta

- Stâlpi rotunzi și spirale, și stâlpi care nu sunt dreptunghiulari: nu sunt realizate.
- Cercuri de colț și agrafe transversale în interiorul secțiunii, și detalierea seismică (ACI 318-19 capitolul 18): nu sunt realizate.
- Îmbinări în poziții alese sau eșalonate: toate barele se suprapun într-o singură secțiune.
- Dacă barele sunt suficiente pentru încărcare: aceasta este proiectarea inginerului.
