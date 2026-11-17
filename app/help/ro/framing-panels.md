---
title: Panouri de structură din lemn și din oțel ușor
summary: Panouri de pereți, planșee și acoperiș din lemn sau oțel ușor, cu fiecare piesă, o listă de tăiere, un desen de execuție și stocul de cumpărat.
keywords: structură, lemn, cherestea, lemn de construcție, oțel ușor, profil format la rece, montant, grindă de planșeu, căprior, grindă de peste gol, montant de gol, montant de sprijin, montant scurt, listă de tăiere, desen de execuție, panou
from: 3e38ffb9
---

Fila {{ui:Structură}} structurează panourile descrise și oferă ce cer o echipă de montaj și un depozit de cherestea. Panourile sunt salvate în fișierul modelului.

:::warning
Dimensiunile, distanțele și grinzile de peste goluri sunt stabilite de proiectant. DetailCraft nu verifică dacă un montant la distanța respectivă susține peretele sau dacă o grindă de peste gol acoperă golul: aceasta ține de tabelele codului de construcție și de inginer.
:::

## Adăugarea unui panou

Alegeți {{ui:Adăugare perete}}, {{ui:Adăugare planșeu}} sau {{ui:Adăugare acoperiș}}, apoi completați dimensiunile în milimetri, materialul (lemn sau oțel ușor) și dimensiunea elementului. Dimensiunile din lemn sunt denumirile nominale cu dimensiunile finisate (2×4 este 38 × 89 mm). Montanții din oțel sunt numiți după adâncime și grosime, de exemplu `C92-1.2`.

## Pereți

Un perete are o talpă de jos, una sau mai multe talpe de sus (o singură șină la oțel), montanți de capăt, montanți pe distanța dată și, pentru fiecare gol: doi montanți de gol, doi montanți de sprijin, o grindă de peste gol de dimensiunea și straturile alese și montanți scurți peste grindă (și sub pervazul unei ferestre). Fiecărui gol i se dă distanța de la capătul stâng, lățimea sa și partea de sus și de jos a golului brut, măsurate de la subpardoseală; o ușă are partea de jos 0.

## Planșee și acoperișuri

Un planșeu are grinzi pe lățimea sa, pe deschidere, grinzi de margine la ambele capete și, dacă este bifat, blocaje la mijlocul deschiderii. Un panou de acoperiș este un fronton: o pereche de căpriori la distanța dată (lungimea lor include streașina de pe pantă) și o grindă de coamă.

## Ce se obține

Fiecare panou arată piesele sale pe un desen la scară, cu fiecare piesă marcată, o listă de tăiere după marcaj și un total. Tabelul {{ui:Stoc de cumpărat}} încadrează toate tăierile panourilor în lungimi de stoc, cea mai scurtă care încape fiecare bară. {{ui:Salvare desen de execuție (SVG)}} scrie desenul; butonul {{ui:CSV}} scrie fiecare listă de tăiere și lista de stoc.

## Plasarea unui panou în model

Sub fiecare panou, se indică unde se află (x, y, z în milimetri și unghiul) și se apasă {{ui:Plasare ca elemente}}: fiecare piesă devine un element al modelului, cu secțiunea finisată a dimensiunii sale și greutatea materialului (circa 500 kg/m³ pentru lemn, oțel pentru montanți). Un perete merge de-a lungul unghiului de la capătul său stâng de jos, cu baza la z; grinzile unui planșeu stau cu partea de jos la z; elevația de fronton a unui acoperiș merge de-a lungul unghiului, cu z în partea de sus a talpelor peretelui. Fiecare strat al grinzii de peste gol este un element alături de celelalte. Apăsând din nou, se înlocuiesc elementele plasate înainte, iar {{ui:Eliminare elemente plasate}} le scoate; fiecare este un pas de anulare. Analiza lasă aceste elemente deoparte: nu sunt elemente de cadru din oțel.

## Planșe PDF

{{ui:Planșe PDF}} salvează câte o pagină A3 pentru fiecare panou: panoul la scară, cu fiecare piesă marcată, dimensiunile de ansamblu, lista de tăiere și o bandă de titlu.

Probleme în panoul {{ui:Probleme}}: un gol prea aproape de capătul unui perete sau de alt gol, o grindă de peste gol care nu încape sub talpele de sus, o piesă mai lungă decât cel mai lung stoc.

Panoul {{ui:Probleme}} listează și **Interfețe (LOD 350)** pentru panourile de perete și pentru pereții de beton: un gol care trece peste capătul sau peste partea de sus a peretelui, două goluri care se suprapun și un gol într-un perete de beton mai lat de 1000 mm, fără bară de margine. Sunt sfaturi, aceleași reguli pe care le rulează auditul BimCraft; lățimea este valoarea de start a CadCraft, nu un standard.
