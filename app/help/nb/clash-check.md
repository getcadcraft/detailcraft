---
title: Kontroller for kollisjoner
summary: Finn elementer, plater og fundamenter som går inn i hverandre, med unntak for delene en forbindelse skal møte, og gå til hver kollisjon.
keywords: kollisjon, kollisjonskontroll, sammenstøt, interferens, overlapp, skjæring, hard kollisjon, koordinering, kontroller modell
from: 04d72d3b
---

Åpne fanen {{ui:Kollisjoner}} under visningen og velg {{ui:Kontroller nå}}. DetailCraft ser på hvert par av deler i de viste fasene: stål mot stål, og stål mot et fundament. Fanen lister hver kollisjon, den dypeste først, med:

- de to delene, etter delenummer (eller fundamentnummer) og profil;
- **Overlapp (mm)**: hvor langt et punkt i den ene delen er inne i den andre, til nærmeste flate;
- **Nær**: rutenettskjæringen og nivået den er ved, eller koordinatene;
- {{ui:Vis}}: velger begge delene og flytter stedet til midten av visningen.

Fanens tittel viser hvor mange kollisjoner den siste kontrollen fant. Kontrollen kjøres ikke av seg selv: etter at du endrer modellen, sier listen fra om det, og {{ui:Kontroller nå}} kjører den på nytt.

## Dette er ikke en kollisjon

- Deler som bare berører hverandre: en plate mot en flens, en fotplate på fundamentet sitt, to elementer ende mot ende. **Toleranse (mm)** angir hvor langt to deler kan gå inn i hverandre før det telles (1 mm til å begynne med; opptil 50).
- Deler en forbindelse kobler sammen: en endeplate med bjelken sin og med søylens flens den er boltet til, bjelken og søylen i den forbindelsen, en fotplate med søylen, platene i en skjøt med begge delene, en avstivning med knutepunktsplaten sin (spesets i et rør kuttes ikke i modellen). Forbindelsen mener at de skal møtes.
- En fotplates skjærtapp i fundamentet under den (den står i en støpelomme).
- Bolter og ankerstenger (de går gjennom hull) og armering.
- Deler i skjulte faser. Se [Faser](topic:phases).

En avstivning eller bjelke som går inn i en søyle uten forbindelse mellom dem, **er** en kollisjon: den forbindelsen trenger fortsatt en forbindelse. Avstivningen i eksempelrammen viser dette: den har ingen knutepunktsplate. Velg den og velg {{ui:Knutepunktsplate}} ([Knutepunktsplater for avstivninger](topic:brace-gussets)), så forsvinner kollisjonene.

## Greit å vite

- Overlapp måler dybden inn i materialet, så et element som er kjørt inn i en tynn søylesteg eller -flens viser bare noen få millimeter, selv når det går langt inn.
- Delene kontrolleres slik de er kuttet: utklinkinger og kappingen av en bjelke ved endeplatene tas med i betraktning. Hull tas ikke med.
