---
title: Harta aglomerării armăturii
summary: Vedeți cât de strânsă lasă armătura fiecare fundație pentru ca betonul să ajungă jos, cu agregatul și vibratorul pe care le indicați.
keywords: armătură, aglomerare, distanță, distanță liberă, turnare beton, agregat, vibrator, bare de așteptare, cârlige, fundație, plasă de armătură
from: 40d029e6
---

Fila {{ui:Aglomerare armătură}} desenează o hartă termică a fiecărei fundații, văzută de sus. Albastrul deschis înseamnă liber; galbenul și portocaliul sunt din ce în ce mai strânse; roșul este mai strâns decât cer barele. Celulele întunecate sunt chiar barele.

## Ce măsoară harta

Betonul coboară prin oțel strat după strat și se poate mișca lateral între straturi. Deci în fiecare punct harta ia cel mai îngust spațiu liber din orice strat: între barele plasei de jos, între stratul următor de bare și între cârligele barelor de așteptare de sus. Barele de așteptare trec prin toate.

## Ce înseamnă strâns

Necesarul este mai mare dintre 25 mm și diametrul barei (ACI 318-19 25.2.1), sau, pentru barele BS 4449, mai mare dintre diametrul barei și 20 mm (EN 1992-1-1 8.2). Două casete îl ridică:

- {{ui:Agregatul cel mai mare}}: necesarul devine 4/3 din dimensiunea agregatului (ACI) sau agregatul plus 5 mm (EN).
- {{ui:Capul vibratorului}}: necesarul este cel puțin diametrul capului.

Ambele pornesc de la 0, adică necunoscut: DetailCraft nu cunoaște compoziția betonului folosit sau pompa.

## Probleme

O fundație cu un loc mai strâns decât necesarul este listată în panoul {{ui:Probleme}}, cu deschiderea găsită și deschiderea necesară. {{ui:Selectare}} de lângă o hartă selectează fundația.

Harta nu vede etrierii, manșoanele, conductele sau barele proprii stâlpului.
