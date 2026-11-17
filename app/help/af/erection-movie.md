---
title: Oprigtingsplan en film
summary: Voer 'n kraan en sy laaikaart in, sien elke hysing teen die kaart nagegaan in fase-volgorde, en stoor 'n oprigtingsfilm wat aflyn op enige foon speel.
keywords: oprigting, kraan, hysing, laaikaart, radius, kapasiteit, takelwerk, volgorde, film, animasie, foon, aflyn, hysplan
from: fa7b0133
---

Die {{ui:Oprigting}}-oortjie verander die model in 'n oprigtingsbevel en kontroleer elke hysing teen 'n kraan wat jy beskryf. Dit beplan uit getalle wat jy tik. Dit is nie 'n hysplan nie: die takelaar en die kraanoperateur maak dit.

## Beskryf die kraan

Kies {{ui:Voeg 'n kraan by}}, en vul dan in:

- **Kraansentrum X en Y:** waar die kraan staan, in millimeter.
- **Hoogste haak:** die hoogste die haak kan styg, in millimeter. 0 beteken geen limiet word nagegaan nie.
- **Haakblok en takelwerk nie in die kaart nie:** kilogram wat van die kaart afgetrek word voordat 'n lading bygevoeg word, wanneer jou kaart dit nie reeds doen nie.
- **Laaikaart:** een ry per lyn, radius in meter en dan die kapasiteit in kilogram. Kopieer die rye uit die kraan se eie kaart.

Die kaart word gelees soos 'n laaikaart gelees word: die kapasiteit wat vir 'n radius gelys is, geld tot by daardie radius. 'n Lading op 'n radius tussen twee rye kry die kapasiteit van die **verste** ry, nooit 'n waarde tussenin nie. Binne die eerste ry geld die eerste ry se kapasiteit. Verder as die laaste ry kan die kraan glad nie hys nie. Die radius wat vir 'n hysing tel, is die groter van die oppik-radius en die stel-radius.

'n Tweede kraan word op dieselfde manier bygevoeg. Elke hysing gaan na die eerste kraan wat dit binne jou marge kan neem.

## Wat die plan doen

- Een hysing per samestelling: 'n balk met sy eindplate, 'n kolom met sy basisplaat, 'n trap.
- Die volgorde volg eers die fases, dan laag vir laag: kolomme, die balke wat hulle dra, skoringe, plate, trappe. 'n Onderdeel word nooit gehys voordat wat dit dra nie.
- Elke hysing wys sy gewig (die model se bruto gewig, plus {{ui:Takelwerk by elke gewig gevoeg}}), sy radius, die aandeel van die kaart wat dit gebruik en die minuut waarop dit begin.
- {{ui:Die meeste van die kaart wat 'n hysing mag gebruik}} is jou veiligheidsmarge. 'n Hysing bo dit word gemerk **Oor jou marge**; bo die kaart, **Oor die kaart**; verder as die kaart se laaste radius, **Verby die kaart**; en 'n onderdeel hoër as die haak, **Haak te laag**.

Gate en uitsnydings word nie van die gewigte afgetrek nie, en boute word deur die takelwerkpersentasie gedek.

## Probleme

Elke hysing wat oor, verby, te hoog is, of voor wat dit dra geplaas word, verskyn in die {{ui:Probleme}}-paneel. 'n Balk sonder 'n verbinding om dit te dra, word gelys as iets wat tydelike ondersteuning nodig het.

## Stoor die film

{{ui:Stoor fliek}} skryf een HTML-lêer. Maak dit oop in enige blaaier, ook op 'n foon, sonder netwerk en sonder rekening: speel en pouseer, sleep die balk na enige minuut, draai die model met 'n vinger, knyp om te zoem. Die onderskrif noem elke hysing, sy gewig, radius en aandeel van die kaart. Die model word as eenvoudige blokke getrek: dit wys die volgorde en die hysings, nie die ware profiele nie.

Dieselfde tabel stoor as CSV met die {{ui:CSV}}-knoppie. Die kraan en kaart word in die modellêer gestoor, en elke verandering is een ontdoen-stap.
