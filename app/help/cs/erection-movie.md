---
title: Plán montáže a film o montáži
summary: Zadejte jeřáb a jeho tabulku nosnosti, zkontrolujte každý zdvih proti tabulce v pořadí fází a uložte film o montáži, který se přehraje offline v libovolném telefonu.
keywords: montáž, jeřáb, zdvih, tabulka nosnosti, vzdálenost, nosnost, úvazová výstroj, pořadí, film, animace, telefon, offline, plán zdvihů
from: fa7b0133
---

Karta {{ui:Erection}} převádí model na pořadí montáže a kontroluje každý zdvih proti jeřábu, který popíšete. Plánuje podle čísel, která zadáte. Není to plán zdvihů: ten vypracuje vazač a obsluha jeřábu.

## Popis jeřábu

Zvolte {{ui:Add a crane}} a vyplňte:

- **Střed jeřábu X a Y:** kde jeřáb stojí, v milimetrech.
- **Nejvyšší háček:** nejvýše, kam se háček může zdvihnout, v milimetrech. 0 znamená, že se žádný limit nekontroluje.
- **Kladkostroj a úvazová výstroj nejsou v tabulce:** kilogramy odečtené z tabulky předtím, než se přidá zatížení, pokud vaše tabulka to už neudělala sama.
- **Tabulka nosnosti:** jeden řádek na řádek, vzdálenost v metrech a potom nosnost v kilogramech. Řádky zkopírujte z vlastní tabulky jeřábu.

Tabulka se čte tak, jak se čte tabulka nosnosti: nosnost uvedená pro vzdálenost platí až do této vzdálenosti. Zatížení na vzdálenosti mezi dvěma řádky dostane nosnost **vzdálenějšího** řádku, nikdy hodnotu mezi nimi. Uvnitř prvního řádku platí nosnost prvního řádku. Za posledním řádkem jeřáb nemůže zvedat vůbec. Vzdálenost, která se počítá pro zdvih, je větší z vzdálenosti zvedání a vzdálenosti položení.

Druhý jeřáb se přidá stejným způsobem. Každý zdvih připadne prvnímu jeřábu, který jej zvládne v rámci vaší rezervy.

## Co plán dělá

- Jeden zdvih na montážní celek: nosník s jeho čelními deskami, sloup s jeho patním plechem, schodiště.
- Pořadí se řídí nejprve fázemi, potom patro za patrem: sloupy, nosníky, které nesou, ztužidla, plechy, schodiště. Díl se nikdy nezvedne dříve, než to, co jej nese.
- Každý zdvih ukazuje svou hmotnost (celková hmotnost modelu plus {{ui:Rigging added to each weight}}), svou vzdálenost, podíl tabulky, který využívá, a minutu, kdy začíná.
- {{ui:Most of the chart a lift may use}} je vaše bezpečnostní rezerva. Zdvih nad ní je označen **Nad vaší rezervou**; nad tabulkou **Nad tabulkou**; za poslední vzdáleností tabulky **Za tabulkou**; a díl výše než háček **Háček příliš nízko**.

Otvory a výřezy se od hmotností neodečítají; šrouby kryje procento pro úvazovou výstroj.

## Problémy

Každý zdvih, který je nad, za, příliš vysoko nebo naplánován dříve, než to, co jej nese, se objeví v panelu {{ui:Problems}}. Nosník bez spojení, které by jej neslo, je uveden jako potřebující dočasnou podporu.

## Uložení filmu

{{ui:Save movie}} zapíše jeden soubor HTML. Otevřete jej v libovolném prohlížeči, i v telefonu, bez sítě a bez účtu: přehrávat a pozastavit, přetáhnout posuvník na libovolnou minutu, otáčet model prstem, přiblížit stažením prstů. Popisek pojmenuje každý zdvih, jeho hmotnost, vzdálenost a podíl tabulky. Model je vykreslen jako prosté kvádry: ukazuje pořadí a zdvihy, ne skutečné profily.

Stejná tabulka se uloží jako CSV tlačítkem {{ui:CSV}}. Jeřáb a tabulka se uloží v souboru modelu a každá změna je jeden krok zpět.
