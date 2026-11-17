---
title: Brug DetailCraft med en AI-assistent
summary: Lad din egen AI-assistent eller dit script læse modellen, dens dele, problemer og kollisioner, tilføje elementer og forbindelser, gemme og eksportere (også USD): tilladelser, forbindelse via CadCraft Studio og aktivitetsloggen.
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, dele, kollisioner, forbindelser, tilladelser, afbryd, aktivitet, fortryd
from: d624c9a0
---

## Hvad du lærer

Hvordan du lader en AI-assistent (eller et script, du har skrevet) arbejde med DetailCraft, og hvordan du bestemmer, hvad den må røre ved.

DetailCraft har **ingen egen AI** og sender intet nogen steder hen. Du medbringer assistenten: ethvert program, der taler Model Context Protocol (MCP). DetailCraft giver den blot værktøjer, og du vælger hvilke.

## Slå det til

1. Åbn {{ui:Indstillinger}} (tandhjulet i appbjælken, eller {{key:Mod+,}}) og gå til fanen {{ui:DetailCraft}}.
2. Under {{ui:Assistenter}} sætter du kryds ved **Lad AI-assistenter og scripts bruge DetailCraft**. Det er slået fra, indtil du gør det.
3. Vælg hvad den må: **Læs** er markeret fra start; sæt kryds ved **Rediger**, **Gem** eller **Eksporter** først, når du har brug for dem.

Værktøjer uden for de tilladelser, du har sat kryds ved, tilbydes ikke assistenten, og hvis den alligevel beder om et, afviser DetailCraft det og skriver det i aktivitetsloggen. Når kontakten slås fra, afbrydes alle forbindelser med det samme.

## Forbind din assistent

Assistenter forbinder sig via **CadCraft Studio** på din computer: Studio kører en lille server, som kun denne computer kan nå, beskyttet af en token, den laver, hver gang den starter. I Studio vælger du {{ui:Forbind en assistent}} og kopierer adressen og tokenen over i din assistent (Studio viser de præcise indstillinger, du skal indsætte). Del aldrig tokenen.

:::note
En browserfane kan ikke åbne en forbindelse for en assistent: i browserapperne har kontakten ingen virkning, før du bruger CadCraft Studio på din computer.
:::

## Du har stadig kontrollen

- **Hver ændring er ét fortrydelsestrin**, mærket som assistentens (for eksempel »Assistent: tilføj bjælke« eller »Assistent: tilføj knudeplader«). {{key:Mod+Z}} tager assistentens sidste ændring tilbage som helhed. Assistentens egen `undo` tager kun dens egne trin tilbage, aldrig dine, medmindre den udtrykkeligt beder om det.
- **Den venter på dig.** Mens du placerer et element, flytter dele eller indsætter, afviser DetailCraft assistentens ændringer og beder den prøve igen.
- **Du ved, når en er forbundet.** En knap i appbjælken navngiver assistenten, mens den er forbundet; klik på den for at se, hvad den må, eller for at **Afbryde forbindelsen** til den.
- **Aktivitet.** {{ui:Indstillinger}} › {{ui:DetailCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} lister hvert kald: hvornår, hvilket værktøj, udført eller afvist. {{ui:Gem loggen}} gemmer en kopi.

## Hvad en assistent kan bede om

Alle længder er i millimeter, punkter `[x, y, z]` med z op, som i modellen.

| Værktøj | Tilladelse | Hvad det gør |
|---|---|---|
| `app_info`, `model_describe` | Læs | Den åbne model: gitter, niveauer, faser, elementer efter type og profil, forbindelser, fundamenter, trapper, dele, stålvægt, problemer |
| `parts_list` | Læs | Positionsnumre med profil, materiale, skærelængde, antal, vægt, fase og samlingsnumre; efter type, profil, mærke eller fase |
| `problems_list` | Læs | Det fanen {{ui:Problemer}} lister, hver med hvad den handler om |
| `clash_check` | Læs | [Kollisionskontrollen](topic:clash-check), med dens tolerance og faser |
| `selection_get` | Læs | Det du har valgt |
| `selection_set` | Rediger | Vælger elementer, forbindelser, fundamenter eller trapper (efter id eller positionsnummer) for at vise dem til dig; ændrer intet |
| `member_add` | Rediger | En bjælke, søjle, afstivning eller plade mellem to punkter |
| `connection_add` | Rediger | Endeplader, skærplader, fodplader, stød eller knudeplader, hvor de angivne elementer mødes, ligesom knapperne {{ui:Forbind}} gør |
| `undo` | Rediger | Tager assistentens sidste trin tilbage |
| `model_save` | Gem | DetailCraft's egen Gem |
| `model_export` | Eksporter | IFC, NC-filer, stykliste, bukkeliste, KISS-fil eller tilskæringsliste, ligesom knapperne {{ui:Uddata}} laver dem |
| `usd_export` | Eksporter | Stålmodellen som USD (.usda, .usdc eller .usdz), som {{ui:Uddata}} › {{ui:USD}} skriver den (se [Eksportér stålmodellen som USD](topic:usd)); i Studio kan den skrive filen til en mappe, du har tilladt |

## Hvis noget ikke virker

- **Assistenten ser ingen DetailCraft-værktøjer:** kontrollér at kontakten er slået til i dette vindue, og at vinduet er åbent i Studio.
- **»needs the edit permission«** (eller save, export): sæt kryds ved den under {{ui:Assistenter}}, og spørg så igen.
- **»The person is placing a member«:** afslut det, du laver (eller tryk {{key:Esc}}), og lad derefter assistenten prøve igen.
- **Fejl med »401« eller »token«:** tokenen er ændret (Studio blev genstartet, eller {{ui:Ny token}}). Kopiér den nye over i assistentens indstillinger.

## Se også

- [Opskrifter til AI-assistenter](common:assistants-recipes): gennemarbejdede eksempler, hver med de værktøjer, de kalder.
