---
title: Plasarea stâlpilor, grinzilor și contravântuirilor
summary: Alegeți un profil, un material și o poziție, apoi faceți clic pe intersecțiile grilei sau tastați-le ca să plasați bare de oțel.
keywords: stâlp, grindă, contravântuire, bară, plasare, profil, material, rotire, poziție, decalaj, inserare, adăugare după grilă
from: d6db0dc1
---

Barele sunt plasate pe intersecțiile grilei: un stâlp pe una, o grindă sau o contravântuire între două. Configurați mai întâi [grilele și nivelurile](topic:grids-and-levels).

## Alegeți un instrument și opțiunile sale

1. Alegeți {{ui:Stâlp}} ({{key:C}}), {{ui:Grindă}} ({{key:B}}) sau {{ui:Contravântuire}} ({{key:R}}) din grupul {{ui:Plasare}}.
2. Panoul {{ui:Proprietăți}} din dreapta devine „Plasează un stâlp” (sau grindă, sau contravântuire) și arată opțiunile pentru următoarea bară:
   - {{ui:Profil}}: alegeți din listă. Dimensiunile sunt grupate pe catalog (profile W, profile U, corniere, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS și profilele personalizate). Vezi [Catalogul de profile](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 sau S355.
   - {{ui:Poziție}}: unde stă secțiunea pe linia dintre cele două puncte: {{ui:Partea de sus a oțelului pe axă}}, {{ui:Centrat pe axă}} sau {{ui:Partea de jos pe axă}}.
   - {{ui:Rotire (°)}}: rotește secțiunea în jurul propriei axe a barei.
   - {{ui:Până la}} (doar pentru stâlpi): {{ui:Nivelul următor în sus}}, sau numele unui nivel.
3. Sub opțiuni, o casetă {{ui:Profil}} listează dimensiunile secțiunii alese, aria, masa pe metru și catalogul din care provine.

Valorile implicite sunt W12x50 în A992 pentru stâlpi (centrat), W16x26 în A992 pentru grinzi (partea de sus a oțelului pe axă) și HSS6x6x1/4 în A500 Gr C pentru contravântuiri (centrat). Opțiunile rămân setate până se schimbă.

## Plasare prin clic

### Un stâlp

1. Alegeți {{ui:Plan}} și alegeți nivelul de la care pornește stâlpul.
2. Alegeți {{ui:Stâlp}}.
3. Mutați cursorul aproape de o intersecție. Cel mai apropiat punct se aprinde, iar bara de stare îl numește.
4. Faceți clic. Stâlpul merge de la acel nivel până la nivelul următor în sus (sau până la nivelul {{ui:Până la}}). Bara de stare spune, de exemplu, „Stâlp W12x50 la A/1, de la Nivel 1 la Nivel 2.”
5. Continuați să faceți clic ca să plasați mai multe. Apăsați {{key:Esc}} la final.

Dacă nu există niciun nivel deasupra celui pe care s-a făcut clic, bara de stare spune „Nu există niciun nivel deasupra Nivelului 2 pe care stâlpul să îl atingă. Adăugați mai întâi un nivel.”

### O grindă

1. Alegeți {{ui:Plan}} și alegeți nivelul grinzii.
2. Alegeți {{ui:Grindă}}.
3. Faceți clic pe prima intersecție. Bara de stare spune „De la A/1 la Nivel 2. Acum faceți clic la celălalt capăt (Esc anulează).” O linie punctată urmărește cursorul.
4. Faceți clic pe a doua intersecție. Grinda apare.
5. Faceți clic din nou ca să începeți următoarea grindă, sau apăsați {{key:Esc}}.

{{key:Esc}} după primul clic anulează doar acel punct; a doua apăsare de {{key:Esc}} depune instrumentul.

### O contravântuire

O contravântuire merge între două intersecții aflate la niveluri diferite, deci este cel mai ușor în {{ui:Fațadă}}.

1. Alegeți {{ui:Fațadă}} și alegeți linia de grilă cu literă pe care se află contravântuirea.
2. Alegeți {{ui:Contravântuire}}.
3. Faceți clic pe capătul de jos, apoi pe cel de sus.

Fațadele există doar pentru liniile de grilă cu litere. Pentru o contravântuire într-un cadru de-a lungul unei linii numerotate (de la A la B), folosiți {{ui:3D}} sau formularul {{ui:Adăugare după grilă}} de mai jos.

:::touch
Pe un ecran tactil, atingeți aproape de intersecție: o atingere alege cel mai apropiat punct aflat la o distanță scurtă și nu face nimic dacă niciun punct nu este aproape. Nu există evidențiere înainte de atingere, deci verificați mesajul din bara de stare după fiecare atingere. Glisările cu un deget rotesc sau mută vederea, în loc să plaseze.
:::

## Plasare după grilă, fără clic

Fiecare instrument de plasare are un formular {{ui:Adăugare după grilă}} în partea de jos a panoului {{ui:Proprietăți}}. Funcționează doar cu tastatura și nu are nevoie de vederea 3D.

1. Alegeți instrumentul, de exemplu {{ui:Grindă}}.
2. În {{ui:Adăugare după grilă}}, alegeți {{ui:De la grila (literă)}}, {{ui:De la grila (număr)}} și {{ui:De la nivelul}}.
3. Alegeți {{ui:La grila (literă)}}, {{ui:La grila (număr)}} și {{ui:La nivelul}}.
4. Alegeți {{ui:Adăugare}}.

Pentru un stâlp sau o fundație, formularul are un singur punct: {{ui:Grila (literă)}}, {{ui:Grila (număr)}} și {{ui:Nivel}}.

## Modificarea unei bare după plasare

1. Apăsați {{key:Esc}} (sau alegeți {{ui:Selectare}}, {{key:V}}) și faceți clic pe bară.
2. În panoul {{ui:Proprietăți}}, schimbați {{ui:Nume}}, {{ui:Profil}}, {{ui:Material}}, {{ui:Poziție}} sau {{ui:Rotire (°)}}.
3. Ca să o mutați, editați x, y și z ale {{ui:Început}} sau {{ui:Sfârșit}} sub {{ui:Capete (x, y, z mm)}}. Sub câmpuri apare numele de grilă al fiecărui capăt, sau coordonatele sale când este în afara grilei.

Fiecare modificare înseamnă un pas de anulare. Sub câmpuri vedeți {{ui:Marcă piesă}}, {{ui:Ansamblu}}, {{ui:Lungime de debitare}}, {{ui:Greutate}} (brută: găurile și decupările nu se scad) și catalogul din care provine profilul.

Barele nu pot fi încă trase sau puse în matrice. Pentru a face o altă bară asemănătoare, copiați și lipiți-o sau duplicați-o ({{key:Mod+D}}): vezi [Copiere, lipire și duplicare](topic:copy-paste).

## Ștergerea unei bare

Selectați-o și apăsați {{key:Delete}} sau {{key:Backspace}}, sau alegeți {{ui:Ștergere}}. Conexiunile ei dispar și ele. {{key:Mod+Z}} readuce totul.

## De știut

- **În ce direcție privește un stâlp.** La {{ui:Rotire (°)}} 0, tălpile unui stâlp privesc pe direcția x, spre liniile de grilă numerotate vecine. O grindă de la grila 1 la grila 2 se înfige într-o talpă; o grindă de la A la B se înfige în inimă. Plăcile de capăt se construiesc doar pe tălpi, deci dacă grinzile merg de la A la B, dați acelor stâlpi o rotire de 90.
- **Grinzile de la un nivel atârnă sub el** cu valoarea implicită {{ui:Partea de sus a oțelului pe axă}}. Alegeți {{ui:Centrat pe axă}} dacă nivelurile sunt axele barelor.
- **Stâlpii merg de la nivel la nivel.** Pentru un stâlp pe două etaje, puneți {{ui:Până la}} pe nivelul cel mai de sus.
- **Grinzile înclinate** sunt permise (alegeți capete la niveluri diferite), dar plăcile de capăt nu se construiesc încă pe ele.

Pasul următor: [Conectați grinzile de stâlpi cu plăci de capăt](topic:end-plates).
