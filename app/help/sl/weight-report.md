---
title: Poročilo o materialu in teži po fazah
summary: Dolžine rezov, števila, teže in površine barvanja za vsako fazo, z vijaki in sidrnimi palicami ter armaturo, kot tabela, CSV ali PDF.
keywords: poročilo, teža, tone, kg, barva, površina barvanja, površina, premaz, dolžina reza, seznam materiala, faza, kosovnica, csv, pdf
from: 337d6d92
---

V skupini {{ui:Izhod}} odprite {{ui:Več}} in izberite {{ui:Poročilo o teži po fazah}}, ali odprite zavihek {{ui:Po fazah}} pod pogledom. Prikaže:

- **Povzetek po fazah**: za vsako fazo število delov, težo jekla, površino barvanja, vijake in sidrne palice ter armaturo; nato skupne vsote.
- **Ena tabela na fazo**: vsaka oznaka dela v njej z vrsto, profilom, materialom, dolžino reza, številom, težo na kos, težo in površino barvanja; nato njeni vijaki in sidrne palice.

{{ui:Prenesi CSV}} shrani iste tabele v eno CSV datoteko (`<name> weight report.csv`). {{ui:Prenesi PDF}} pripravi poročilo na formatu lista iz [nastavitev DetailCraft](topic:settings#drawings), s povzetkom na začetku, za njim vsaka faza; dolge tabele se nadaljujejo na naslednji strani in vsaka stran je oštevilčena.

## Kako se izračunajo podatki

- **Teže** so bruto, kot v kosovnici: teža profila na meter, pomnožena z dolžino reza. Lukenj in izrezov se ne odšteva.
- **Površina barvanja** je zunanjost prereza vzdolž dolžine reza: pri I-profilu vse ploskve pasov in stebla, pri plošči obe ploskvi in robovi, pri cevi samo zunanjost. Konci in luknje se ne štejejo.
- **Armatura** je teža palic v temeljih faze iz [razporeda upogibanja](topic:footings-and-rebar).
- Plošče in vijaki povezave se štejejo v fazi njenega glavnega elementa. Glejte [Faze](topic:phases).

Ko so [oznake po fazah](topic:phases#marks-per-phase) vklopljene, ima vsaka faza svoje oznake (1-b1, 2-b1). Ko so izklopljene, se lahko oznaka pojavi v več fazah: vsaka faza našteje kose, ki jih ima.
