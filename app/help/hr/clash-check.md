---
title: Provjera sudara
summary: Pronađite štapove, ploče i temelje koji zalaze jedni u druge, izuzimajući dijelove koje spoj namjerava spojiti, i idite na svaki sudar.
keywords: sudar, provjera sudara, kolizija, interferencija, preklapanje, presijecanje, tvrdi sudar, koordinacija, provjera modela
from: 04d72d3b
---

Otvorite karticu {{ui:Sudari}} ispod prikaza i odaberite {{ui:Provjeri sada}}. DetailCraft provjerava svaki par dijelova u prikazanim fazama: čelik u čelik i čelik u temelj. Kartica navodi svaki sudar, od najdubljeg prema najplićem, s:

- dva dijela, prema oznaci dijela (ili oznaci temelja) i profilu;
- **Preklapanje (mm)**: koliko je točka jednog dijela unutar drugoga, do najbliže plohe;
- **Blizu**: presječište mreže i etaža na kojem je, ili njegove koordinate;
- {{ui:Prikaži}}: odabire oba dijela i dovodi mjesto na sredinu prikaza.

Naslov kartice pokazuje koliko je sudara pronašla zadnja provjera. Provjera se ne pokreće sama: nakon promjene modela popis to kaže, a {{ui:Provjeri sada}} je pokreće ponovno.

## Što nije sudar

- Dijelovi koji se samo dodiruju: ploča uz pojasnicu, podložna ploča na temelju, dva štapa čeono. **Tolerancija (mm)** određuje koliko dva dijela smiju zalaziti jedan u drugi prije nego se računa (1 mm za početak; do 50).
- Dijelovi koje spoj spaja: čeona ploča s gredom i s pojasnicom stupa za koju je pričvršćena, greda i stup tog spoja, podložna ploča sa stupom, ploče nastavka s oba dijela, spreg s čvornom pločom (useknuće cijevi nije izrezano u modelu). Spoj ih namjerava spojiti.
- Smični zub podložne ploče u temelju ispod nje (sjedi u džepu za mort).
- Vijci i sidreni vijci (prolaze kroz rupe) i armatura.
- Dijelovi u skrivenim fazama. Vidi [Faze](topic:phases).

Greda ili spreg koji ulazi u stup bez spoja između njih **je** sudar: taj spoj još treba spoj. Spreg iz primjera okvira to pokazuje: nema čvornu ploču. Odaberite ga i izaberite {{ui:Čvorna ploča}} ([Čvorne ploče spregova](topic:brace-gussets)) i njegovi sudari nestaju.

## Dobro je znati

- Preklapanje mjeri dubinu u materijalu, pa štap koji zalazi u tanki hrbat ili pojasnicu stupa pokazuje samo nekoliko milimetara čak i kada zalazi daleko.
- Dijelovi se provjeravaju onako kako su rezani: izrezi (copes) i skraćenje grede na njezinim čeonim pločama uzimaju se u obzir. Rupe se ne uzimaju.
