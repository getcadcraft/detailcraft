---
title: Gebruik DetailCraft met ’n KI-assistent
summary: Laat jou eie KI-assistent of skrip die model, sy dele, probleme en botsings lees, lede en verbindings byvoeg, stoor en uitvoer (ook USD): toestemmings, koppel deur CadCraft Studio, en die aktiwiteitslogboek.
keywords: ki, assistent, agent, mcp, model context protocol, skrip, outomatisering, dele, botsings, verbindings, toestemmings, ontkoppel, aktiwiteit, ontdoen
from: d624c9a0
---

## Wat jy sal leer

Hoe om ’n KI-assistent (of ’n skrip wat jy geskryf het) met DetailCraft te laat werk, en hoe om te besluit wat dit mag aanraak.

DetailCraft het **geen eie KI nie** en stuur niks êrens nie. Jy bring die assistent: enige program wat die Model Context Protocol (MCP) praat. DetailCraft gee dit net gereedskap, en jy kies watter.

## Skakel dit aan

1. Maak {{ui:Instellings}} oop (die rat in die programbalk, of {{key:Mod+,}}) en gaan na die {{ui:DetailCraft}}-oortjie.
2. Onder {{ui:Assistente}}, merk **Laat KI-assistente en skrifte DetailCraft gebruik**. Dit is af totdat jy dit aanskakel.
3. Kies wat dit mag doen: **Lees** is van die begin af gemerk; merk **Wysig**, **Stoor** of **Uitvoer** net wanneer jy dit nodig het.

Gereedskap buite die toestemmings wat jy gemerk het, word nie aan die assistent aangebied nie, en as dit tog een vra, weier DetailCraft dit en skryf dit in die aktiwiteitslogboek. Skakel die skakelaar af, en alle verbindings eindig dadelik.

## Koppel jou assistent

Assistente koppel deur **CadCraft Studio** op jou rekenaar: Studio laat ’n klein bediener loop wat net hierdie rekenaar kan bereik, beskerm deur ’n token wat dit elke keer maak wanneer dit begin. In Studio, kies {{ui:Koppel ’n assistent}} en kopieer die adres en die token na jou assistent (Studio wys die presiese instellings om in te plak). Deel nooit die token nie.

:::note
’n Blaaiertjie kan nie ’n verbinding vir ’n assistent oopmaak nie: in die blaaierprogramme het die skakelaar geen effek totdat jy CadCraft Studio op jou rekenaar gebruik nie.
:::

## Jy bly in beheer

- **Elke verandering is een ontdoen-stap**, geëtiketteer as die assistent s’n (byvoorbeeld "Assistent: voeg balk by", "Assistent: voeg kopplate by"). {{key:Mod+Z}} neem die assistent se laaste verandering as geheel terug. Die assistent se eie `undo` neem net sy eie stappe terug, nooit joune nie, tensy dit dit uitdruklik vra.
- **Dit wag vir jou.** Terwyl jy ’n lid plaas, dele skuif of plak, weier DetailCraft die assistent se veranderinge en sê vir dit om weer te probeer.
- **Jy weet wanneer een gekoppel is.** ’n Knoppie in die programbalk noem die assistent terwyl dit gekoppel is; klik dit om te sien wat dit mag doen, of om dit te **Ontkoppel**.
- **Aktiwiteit.** {{ui:Instellings}} › {{ui:DetailCraft}} › {{ui:Assistente}} › {{ui:Aktiwiteit}} lys elke oproep: wanneer, watter gereedskap, en of dit klaar of geweier is. {{ui:Stoor die logboek}} hou ’n afskrif.

## Wat ’n assistent kan vra

Alle lengtes is in millimeter, punte `[x, y, z]` met z op, soos in die model.

| Gereedskap | Toestemming | Wat dit doen |
|---|---|---|
| `app_info`, `model_describe` | Lees | Die oop model: roosters, vlakke, fases, lede volgens tipe en profiel, verbindings, fondasies, trappe, dele, staalgewig, probleme |
| `parts_list` | Lees | Onderdeelmerke met profiel, materiaal, snitlengte, getal, gewig, fase en samestellingsmerke; volgens tipe, profiel, merk of fase |
| `problems_list` | Lees | Wat die {{ui:Probleme}}-oortjie lys, elk met waaroor dit gaan |
| `clash_check` | Lees | Die [botsingskontrole](topic:clash-check), met sy toleransie en fases |
| `selection_get` | Lees | Wat jy gekies het |
| `selection_set` | Wysig | Kies lede, verbindings, fondasies of trappe (volgens id of onderdeelmerk) om dit aan jou te wys; verander niks nie |
| `member_add` | Wysig | ’n Balk, kolom, skoor of plaat tussen twee punte |
| `connection_add` | Wysig | Eindplate, skuiflappe, voetplate, skarwe of gussets waar die gegewe lede ontmoet, soos die {{ui:Koppel}}-knoppies doen |
| `undo` | Wysig | Neem die assistent se laaste stappe terug |
| `model_save` | Stoor | DetailCraft se eie Stoor |
| `model_export` | Uitvoer | IFC, NC-lêers, BOM, buigskedule, KISS-lêer of snylys, soos die {{ui:Uitvoer}}-knoppies dit maak |
| `usd_export` | Uitvoer | Die staalmodel as USD (.usda, .usdc of .usdz), soos {{ui:Uitvoer}} › {{ui:USD}} dit skryf (sien [Voer die staalmodel as USD uit](topic:usd)); in Studio kan dit die lêer na ’n gids skryf wat jy toegelaat het |

## As iets nie werk nie

- **Die assistent sien geen DetailCraft-gereedskap nie:** kontroleer dat die skakelaar in hierdie venster aan is, en dat die venster in Studio oop is.
- **"benodig die wysig-toestemming"** (of stoor- of uitvoer-toestemming): merk dit onder {{ui:Assistente}}, en vra dan weer.
- **"Die persoon plaas ’n lid":** klaar wat jy doen (of druk {{key:Esc}}), en laat dan die assistent weer probeer.
- **"401"- of "token"-foute:** die token het verander (Studio is herbegin, of {{ui:Nuwe token}}). Kopieer die nuwe een na die assistent se instellings.

## Sien ook

- [Resepte vir KI-assistente](common:assistants-recipes): uitgewerkte voorbeelde, elk met die gereedskap wat dit roep.
