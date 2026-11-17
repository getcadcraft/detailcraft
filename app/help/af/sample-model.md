---
title: Verken die voorbeeldraamwerk
summary: Maak die ingeboude tweevak-raamwerk oop en gebruik dit om te leer wat DetailCraft maak, van merke tot NC-lêers.
keywords: voorbeeld, demo, raamwerk, leer, toer, probeer
from: 5c5944dd
---

Die voorbeeldraamwerk is 'n klein, volledige model: elke soort ding wat DetailCraft bou, verskyn minstens een keer. Dit is die vinnigste manier om die program te leer en 'n uitvoer te toets voordat jy daarop staatmaak.

## Maak dit oop

1. Kies {{ui:Voorbeeld}} in die {{ui:Lêer}}-groep.
2. As jou huidige model ongestoorde veranderinge het, kies {{ui:Stoor eerst}} of {{ui:Gooi veranderinge weg}}.
3. Die statusbalk sê "Voorbeeldraamwerk: 6 kolomme met basisplate, 4 balke met eindplate, 'n skoor, 7 fondasies met wapening."

Die voorbeeld open as 'n nuwe model met die naam "Voorbeeldraamwerk". Dit verander niks anders nie, en daar is niks om ongedaan te maak nie.

## Wat daarin is

- **Roosters** 1, 2, 3 op 6000 mm en A, B op 7000 mm. **Vlakke** Vlak 1 op 0 en Vlak 2 op 4000.
- **Ses kolomme**, W12x50, van Vlak 1 tot Vlak 2 by elke kruising, elk op 'n 25 mm basisplaat met vier ankerstawe.
- **Vier balke**, W16x26, op Vlak 2 langs roosterlyne A en B, met die staal se bokant op die vlak, en 'n gebouteerde eindplaat, gelyk met die vlak, aan albei punte (agt altesaam).
- **Een skoor**, HSS4x4x1/4, van A/1 op Vlak 1 op tot A/2 op Vlak 2.
- **Ses plat fondasies**, 2000 x 2000 x 600, een onder elke kolom, met 'n gehaakte onderste mat na albei kante.
- **Nog een fondasie** langs die raamwerk, 2400 x 1800 x 600, met ses gehaakte aanloopstawe wat regop staan vir 'n betonpilaar.

## Dinge om te probeer

1. Klik op 'n balk. Lees sy {{ui:Deelmerk}}, {{ui:Samestelling}}, {{ui:Snitlengte}} en {{ui:Terugsny}}: die snitlengte is korter as die 6000 mm roosterafstand omdat elke eindplaat die balk terugsny met die helfte van die kolomdiepte plus die plaatdikte.
2. Klik op 'n kolom. Onder {{ui:Gate}} lys dit die gate wat die eindplate in sy flens gemaak het ("8 gate uit verbindings"; die middelkolomme het 16, een stel in elke flens).
3. In die {{ui:Deelmerke}}-lys links, sien dat al vier balke een merk deel: hulle is dieselfde stuk staal. Die hoekkolomme deel ook 'n merk, al wys hul gate in teenoorgestelde rigtings, omdat 'n kolom wat end-tot-end omgedraai is, dieselfde stuk is. Die middelkolomme, met gate in albei flense, kry 'n ander merk.
4. Klik op 'n eindplaat (of een van sy bouts). Die {{ui:Eienskappe}}-paneel wys die plaat-, bout- en lasinstellings, die bouts wat dit maak (met hul lengte uitgewerk uit die greep) en enige waarskuwings oor randafstand.
5. Open die {{ui:Materiaallys}}-oortjie. Onderdele, samestellings ('n balk met sy twee eindplate is een samestelling), en bouts en ankerstawe word met gewigte gelys. Jy behoort ses deelmerke te sien: c1 (die twee middelkolomme) en c2 (die vier hoekkolomme), albei W12x50 op 3975 mm; b1, vier W16x26-balke op 5650 mm; br1, die skoor; p1, agt PL20x180-eindplate; en p2, ses PL25x400-basisplate. Die bevestigers is 64 bouts 20 x 70 A325 en 24 ankerstawe 20 x 575.
6. Open die {{ui:Buigskedule}}-oortjie. Die ses identiese fondasies deel staafmerke; die pilaarfondasie voeg sy eie by.
7. Klik op die skoor en kyk na die {{ui:Uitvoer}}-groep: {{ui:Werkswinkeltekening}} is gegrys, omdat werkswinkeltekeninge tot dusver net I-profiele en plate dek.
8. Kies {{ui:NC-lêers}}. Die zip hou 'n lêer vir elke I-profiel- en plaatmerk; die statusbalk lys die skoormerk as nie geskryf nie.
9. Kies {{ui:IFC}} en open die lêer in enige IFC-kyker om te sien hoe jou ander sagteware dit lees.

## Gebruik dit as 'n beginpunt

Die voorbeeld is 'n gewone model. Verander dit, hernoem dit dan in die {{ui:Naam}}-veld en stoor dit onder sy nuwe naam met {{key:Mod+S}}.
