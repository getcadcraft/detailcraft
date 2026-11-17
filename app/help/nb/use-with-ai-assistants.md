---
title: Bruk DetailCraft med en AI-assistent
summary: La din egen AI-assistent eller ditt skript lese modellen, delene, problemene og kollisjonene, legge til stav og forbindelser, lagre og eksportere (også USD): tillatelser, tilkobling via CadCraft Studio og aktivitetsloggen.
keywords: ai, assistent, agent, mcp, model context protocol, skript, automatisering, deler, kollisjoner, forbindelser, tillatelser, koble fra, aktivitet, angre
from: d624c9a0
---

## Hva du lærer

Hvordan du lar en AI-assistent (eller et skript du har skrevet) arbeide med DetailCraft, og hvordan du bestemmer hva den har lov til å røre.

DetailCraft har **ingen egen AI** og sender ingenting noe sted. Du tar med assistenten: et hvilket som helst program som snakker Model Context Protocol (MCP). DetailCraft gir den bare verktøy, og du velger hvilke.

## Slå den på

1. Åpne {{ui:Innstillinger}} (tannhjulet i programlinjen, eller {{key:Mod+,}}) og gå til fanen {{ui:DetailCraft}}.
2. Under {{ui:Assistenter}} merker du av for **La AI-assistenter og skript bruke DetailCraft**. Den er av helt til du gjør det.
3. Velg hva den får gjøre: **Les** er merket av fra start; merk av for **Rediger**, **Lagre** eller **Eksporter** bare når du trenger dem.

Verktøy utenfor tillatelsene du har merket av for, tilbys ikke assistenten. Ber den likevel om et slikt verktøy, avviser DetailCraft det og skriver det i aktivitetsloggen. Slår du av bryteren, avsluttes alle tilkoblinger med én gang.

## Koble til assistenten

Assistenter kobler seg til gjennom **CadCraft Studio** på datamaskinen din: Studio kjører en liten tjener som bare denne datamaskinen kan nå, beskyttet av et token som den lager hver gang den starter. I Studio velger du {{ui:Koble til en assistent}} og kopierer adressen og tokenet inn i assistenten din (Studio viser de nøyaktige innstillingene som skal limes inn). Del aldri tokenet.

:::note
En nettleserfane kan ikke åpne en tilkobling for en assistent: i nettleserversjonene har bryteren ingen virkning før du bruker CadCraft Studio på datamaskinen din.
:::

## Du har kontrollen

- **Hver endring er ett angrettrinn**, merket som assistentens (for eksempel "Assistent: legg til bjelke", "Assistent: legg til knutepunktsplater"). {{key:Mod+Z}} tar tilbake assistentens siste endring som helhet. Assistentens egen `undo` tar bare tilbake sine egne trinn, aldri dine, med mindre den ber om det uttrykkelig.
- **Den venter på deg.** Mens du plasserer et stav, flytter deler eller limer inn, avviser DetailCraft assistentens endringer og ber den prøve igjen.
- **Du vet når en er tilkoblet.** En knapp i programlinjen viser navnet på assistenten mens den er tilkoblet; klikk på den for å se hva den har lov til, eller for å **Koble fra** den.
- **Aktivitet.** {{ui:Innstillinger}} › {{ui:DetailCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} lister hvert kall: når, hvilket verktøy, og om det ble utført eller avvist. {{ui:Lagre loggen}} lagrer en kopi.

## Hva en assistent kan be om

Alle lengder er i millimeter, punkter `[x, y, z]` med z opp, slik som i modellen.

| Verktøy | Tillatelse | Hva det gjør |
|---|---|---|
| `app_info`, `model_describe` | Les | Modellen som er åpen: rutenett, nivåer, faser, stav etter type og profil, forbindelser, fundamenter, trapper, deler, stålvekt, problemer |
| `parts_list` | Les | Delemerker med profil, materiale, kuttlengde, antall, vekt, fase og sammenstillingsmerker; etter type, profil, merke eller fase |
| `problems_list` | Les | Det fanen {{ui:Problemer}} lister, hver med hva den gjelder |
| `clash_check` | Les | [Kollisjonskontrollen](topic:clash-check), med toleransen og fasene sine |
| `selection_get` | Les | Det du har valgt |
| `selection_set` | Rediger | Velger stav, forbindelser, fundamenter eller trapper (etter id eller delemerke) for å vise dem til deg; endrer ingenting |
| `member_add` | Rediger | En bjelke, søyle, avstivning eller plate mellom to punkter |
| `connection_add` | Rediger | Endeplater, skjærplater, fotplater, skjøter eller knutepunktsplater der de gitte stavene møtes, slik knappene i {{ui:Forbind}} gjør |
| `undo` | Rediger | Tar tilbake assistentens siste trinn |
| `model_save` | Lagre | DetailCraft sin egen lagring |
| `model_export` | Eksporter | IFC, NC-filer, stykkliste, bøyeliste, KISS-fil eller kappeliste, slik knappene i {{ui:Utdata}} lager dem |
| `usd_export` | Eksporter | Stålmodellen som USD (.usda, .usdc eller .usdz), slik {{ui:Utdata}} › {{ui:USD}} skriver den (se [Eksporter stålmodellen som USD](topic:usd)); i Studio kan den skrive filen til en mappe du har tillatt |

## Hvis noe ikke virker

- **Assistenten ser ingen DetailCraft-verktøy:** sjekk at bryteren er på i dette vinduet, og at vinduet er åpent i Studio.
- **"trenger redigeringstillatelsen"** (eller lagre- eller eksporttillatelsen): merk den av under {{ui:Assistenter}}, og spør igjen.
- **"Personen plasserer et stav":** fullfør det du gjør (eller trykk {{key:Esc}}), og la assistenten prøve igjen.
- **"401"- eller "token"-feil:** tokenet er endret (Studio startet på nytt, eller {{ui:Nytt token}}). Kopier det nye tokenet inn i assistentens innstillinger.

## Se også

- [Oppskrifter for AI-assistenter](common:assistants-recipes): arbeidseksempler, hver med verktøyene den kaller.
