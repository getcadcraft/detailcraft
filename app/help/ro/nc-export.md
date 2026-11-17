---
title: Trimiterea fișierelor NC la atelier
summary: Exportați fișiere NC DSTV pentru fiecare marcă de piesă (profile I, profile U, corniere, HSS, plăci), arhivate, și verificați-le înainte să ajungă la o mașină.
keywords: nc, nc1, dstv, cnc, mașină, linie de grinzi, linie de găurire, tăiere plăci, export, fabricație, zip
from: 598b6091
---

DetailCraft scrie câte un fișier NC DSTV (`.nc1`) pentru fiecare marcă de piesă, pentru profile I, profile U, corniere, HSS dreptunghiulare și rotunde și plăci, și le arhivează împreună în zip. Liniile de grinzi și mașinile de tăiere a plăcilor citesc aceste fișiere ca să taie, să găurească și să debiteze.

## Export

1. Goliți mai întâi fila {{ui:Probleme}}: o conexiune care nu a putut fi realizată nu adaugă nicio gaură.
2. Salvați modelul ({{key:Mod+S}}), ca fișierele NC să corespundă unui model salvat.
3. Alegeți {{ui:Fișiere NC}} din grupul {{ui:Ieșire}}.
4. Browserul descarcă `<name> NC.zip`. Bara de stare arată câte fișiere conține și enumeră mărcile pe care nu le-a scris (un cornier sau o țeavă rotundă cu decupare).

În arhivă, fiecare fișier este denumit după marca piesei: `b1.nc1`, `c1.nc1`, `p1.nc1` … Arhiva nu este comprimată și se deschide cu orice unealtă pentru arhive.

Dacă modelul nu are piese, bara de stare o spune.

## Ce conține fiecare fișier

- **Antet (ST):** numele modelului ca Comandă, marca piesei ca Desen și Piesă, etapa 1 sau etapa piesei, clasa oțelului, cantitatea, profilul și dimensiunile sale, masa pe metru și suprafața de vopsire pe metru. Tăieturile de fierăstrău sunt perpendiculare.
- **Contururi exterioare (AK):** conturul inimii, cu decupările scoase sub formă de crestături, și conturul fiecărei tălpi, scurtat la capătul unde o decupare o înlătură.
- **Găuri (BO):** fiecare gaură cu fața, poziția și diametrul ei, inclusiv găurile făcute de plăcile de capăt și plăcile de bază.

Câmp cu câmp, cu regulile de față și de coordonate: [Câmpurile fișierului NC](topic:nc1-fields).

## Ce nu se scrie

- Cornierele și țevile rotunde cu decupare: niciun fișier NC. Mărcile lor sunt enumerate în bara de stare.
- Găuri în țevi rotunde (DetailCraft nu creează niciuna).
- Teșituri, contururi interioare, marcaje de piesă (trasare) și unghiuri de tăiere altele decât cel drept.
- Găuri alungite (DetailCraft are doar găuri rotunde).

## Verificați înainte de prelucrare

Fișierele NC ale DetailCraft sunt citite înapoi de propriul set de teste, dar nu au fost rulate pe mașinile atelierului.

1. Deschideți fișierele în vizualizatorul NC al atelierului sau în software-ul mașinii și comparați-le cu desenele de execuție.
2. Verificați pe mașină câte o piesă din fiecare tip înainte de a porni un lot.
3. Verificați cum citește software-ul coordonatele y ale tălpilor și fețele profilelor U: DetailCraft măsoară y-ul tălpii de la muchia din spate și așază profilele U pe spate, așa cum le desenează standardul (vezi [Câmpurile fișierului NC](topic:nc1-fields#faces-and-coordinates)).
