---
title: Preverjanje kolizij
summary: Poiščite elemente, plošče in temelje, ki segajo drug v drugega, brez delov, ki naj se v spoju namenoma stikajo, in pojdite k vsaki koliziji.
keywords: kolizija, preverjanje kolizij, trk, interferenca, prekrivanje, sekanje, trda kolizija, koordinacija, preverjanje modela
from: 04d72d3b
---

Pod pogledom odprite zavihek {{ui:Kolizije}} in izberite {{ui:Preveri zdaj}}. DetailCraft preveri vsak par delov v prikazanih fazah: jeklo v jeklo in jeklo v temelj. Zavihek našteje vsako kolizijo, najgloblja je prva, z:

- dvema deloma, z oznako dela (ali oznako temelja) in profilom;
- **Prekrivanje (mm)**: kako daleč je točka enega dela znotraj drugega, do najbližje ploskve;
- **Blizu**: presečišče mreže in nivo, na katerem je, ali njene koordinate;
- {{ui:Pokaži}}: izbere oba dela in pripelje mesto v sredino pogleda.

Naslov zavihka kaže, koliko kolizij je našlo zadnje preverjanje. Preverjanje ne teče samo od sebe: po spremembi modela seznam to pove, {{ui:Preveri zdaj}} pa ga požene znova.

## Kaj ni kolizija

- Deli, ki se samo dotikajo: plošča ob pasnici, podložna plošča na temelju, dva elementa konec ob koncu. **Toleranca (mm)** določa, koliko se dva dela smeta zapičiti drug v drugega, preden se šteje (na začetku 1 mm; do 50).
- Deli, ki jih spoj povezuje: čelna plošča z nosilcem in s pasnico stebra, na katero je privijačena, nosilec in steber tega spoja, podložna plošča s stebrom, plošče stika z obema kosoma, diagonala z vozliščno ploščo (utor cevi se v modelu ne izreže). Spoj jih namerava stakniti.
- Strižni zob podložne plošče v temelju pod njo (sedi v žepu z malto).
- Vijaki in sidrne palice (gredo skozi luknje) ter armatura.
- Deli v skritih fazah. Glejte [Faze](topic:phases).

Diagonala ali nosilec, ki zaide v steber brez povezave med njima, **je** kolizija: temu spoju še manjka povezava. To pokaže diagonala vzorčnega okvira: nima vozliščne plošče. Izberite jo in izberite {{ui:Vozliščna plošča}} ([Vozliščne plošče diagonal](topic:brace-gussets)), in njene kolizije izginejo.

## Dobro je vedeti

- Prekrivanje meri globino v materialu, zato element, ki zaide v tanko steno ali pasnico stebra, kaže le nekaj milimetrov, tudi če gre daleč noter.
- Deli se preverijo, kot so izrezani: izrezi (copes) in skrajšanje nosilca na koncu pri čelnih ploščah se upoštevata. Luknje se ne.
