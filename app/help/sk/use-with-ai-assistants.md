---
title: Použitie DetailCraft s AI asistentom
summary: Nechajte svojho AI asistenta alebo skript čítať model, jeho diely, problémy a kolízie, pridávať prvky a spoje, ukladať a exportovať (aj USD), s oprávneniami, pripojením cez CadCraft Studio a protokolom aktivity.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizácia, diely, kolízie, spoje, oprávnenia, odpojiť, aktivita, späť
from: d624c9a0
---

## Čo sa naučíte

Ako nechať AI asistenta (alebo skript, ktorý ste napísali) pracovať s DetailCraft a ako rozhodnúť, čoho sa môže dotknúť.

DetailCraft **nemá vlastnú AI** a nič nikam neposiela. Asistenta prinášate vy: ľubovoľný program, ktorý hovorí cez Model Context Protocol (MCP). DetailCraft mu len dá nástroje a vy vyberiete, ktoré.

## Zapnutie

1. Otvorte {{ui:Nastavenia}} (ozubené koliesko na paneli aplikácie alebo {{key:Mod+,}}) a prejdite na kartu {{ui:DetailCraft}}.
2. V časti {{ui:Asistenti}} označte **Povoliť AI asistentom a skriptom používať DetailCraft**. Kým to neurobíte, je to vypnuté.
3. Vyberte, čo smú robiť: **Čítanie** je na začiatku označené; označte **Úprava**, **Uloženie** alebo **Export**, len keď ich potrebujete.

Nástroje mimo oprávnení, ktoré ste označili, asistentovi nebudú ponúknuté; ak o ne napriek tomu požiada, DetailCraft ho odmietne a zapíše to do protokolu aktivity. Vypnutie prepínača ukončí všetky pripojenia naraz.

## Pripojenie asistenta

Asistenti sa pripájajú cez **CadCraft Studio** vo vašom počítači: Studio spúšťa malý server, ku ktorému sa dostane len tento počítač, chránený tokenom, ktorý pri každom spustení vytvorí. V Studiu vyberte {{ui:Pripojiť asistenta}} a skopírujte adresu a token do svojho asistenta (Studio ukáže presné nastavenia na vloženie). Token nikdy nezdieľajte.

:::note
Karta prehliadača nemôže otvoriť pripojenie pre asistenta: v aplikáciách v prehliadači prepínač nemá účinok, kým nepoužijete CadCraft Studio vo svojom počítači.
:::

## Vy máte kontrolu

- **Každá zmena je jeden krok späť**, označený ako asistentova (napríklad „Asistent: pridať nosník“, „Asistent: pridať výstuhy“). {{key:Mod+Z}} vráti naraz poslednú zmenu asistenta. Vlastné `undo` asistenta vráti späť len jeho vlastné kroky, nikdy vaše, pokiaľ o to explicitne nepožiada.
- **Čaká na vás.** Kým umiestňujete prvok, presúvate diely alebo vkladáte, DetailCraft zamietne zmeny asistenta a povie mu, aby to skúsil znova.
- **Viete, keď je pripojený.** Tlačidlo na paneli aplikácie pomenúva asistenta, kým je pripojený; kliknutím zistíte, čo smie robiť, alebo ho môžete **Odpojiť**.
- **Aktivita.** {{ui:Nastavenia}} › {{ui:DetailCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypisuje každé volanie: kedy, ktorý nástroj, hotové alebo odmietnuté. {{ui:Uložiť záznam}} uchová kópiu.

## Čo môže asistent požiadať

Všetky dĺžky sú v milimetroch, body `[x, y, z]` so z nahor, ako v modeli.

| Nástroj | Oprávnenie | Čo robí |
|---|---|---|
| `app_info`, `model_describe` | Čítanie | Otvorený model: mriežky, úrovne, fázy, prvky podľa typu a profilu, spoje, základy, schodiská, diely, hmotnosť ocele, problémy |
| `parts_list` | Čítanie | Značky dielov s profilom, materiálom, dĺžkou rezu, počtom, hmotnosťou, fázou a značkami zostáv; podľa typu, profilu, značky alebo fázy |
| `problems_list` | Čítanie | Čo vypisuje karta {{ui:Problémy}}, každé s tým, čoho sa týka |
| `clash_check` | Čítanie | [Kontrola kolízií](topic:clash-check), s jej toleranciou a fázami |
| `selection_get` | Čítanie | Čo ste vybrali |
| `selection_set` | Úprava | Vyberie prvky, spoje, základy alebo schodiská (podľa id alebo značky dielu), aby ste ich videli; nič nemení |
| `member_add` | Úprava | Nosník, stĺp, diagonálu alebo plech medzi dvoma bodmi |
| `connection_add` | Úprava | Čelné dosky, strižné plechy, pätné dosky, styky alebo výstuhy tam, kde sa stretnú dané prvky, ako to robia tlačidlá {{ui:Spoje}} |
| `undo` | Úprava | Vráti späť posledné kroky asistenta |
| `model_save` | Uloženie | Vlastné Uloženie DetailCraft |
| `model_export` | Export | IFC, súbory NC, kusovník, výkaz výstuže, výkaz ohýbania, súbor KISS alebo rezný plán, ako ich vytvárajú tlačidlá {{ui:Výstup}} |
| `usd_export` | Export | Oceľový model ako USD (.usda, .usdc alebo .usdz), ako ho zapisuje {{ui:Výstup}} › {{ui:USD}} (pozri [Export ocelového modelu do USD](topic:usd)); v Studiu môže zapísať súbor do priečinka, ktorý ste povolili |

## Ak niečo nefunguje

- **Asistent nevidí nástroje DetailCraft:** skontrolujte, či je prepínač v tomto okne zapnutý a či je okno otvorené v Studiu.
- **„needs the edit permission“** (alebo uloženie, export): označte to v {{ui:Asistenti}} a potom požiadajte znova.
- **„The person is placing a member“:** dokončite, čo robíte (alebo stlačte {{key:Esc}}), potom nechajte asistenta skúsiť znova.
- **Chyby „401“ alebo „token“:** token sa zmenil (Studio sa reštartovalo alebo ste vytvorili {{ui:Nový token}}). Skopírujte nový do nastavení asistenta.

## Pozri tiež

- [Recepty pre AI asistentov](common:assistants-recipes): prepracované príklady, každý s nástrojmi, ktoré volá.
