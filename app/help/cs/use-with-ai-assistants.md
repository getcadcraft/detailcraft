---
title: Použití DetailCraft s AI asistentem
summary: Nechte svého AI asistenta nebo skript číst model, jeho díly, problémy a kolize, přidávat prvky a spoje, ukládat a exportovat (včetně USD): oprávnění, připojení přes CadCraft Studio a protokol aktivit.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizace, díly, kolize, spoje, oprávnění, odpojení, aktivita, zpět
from: d624c9a0
---

## Co se naučíte

Jak nechat AI asistenta (nebo skript, který jste napsali) pracovat s DetailCraft a jak rozhodnout, čeho se smí dotýkat.

DetailCraft **nemá vlastní AI** a nikam nic neodesílá. Asistenta přinesete vy: jakýkoli program, který mluví protokolem Model Context Protocol (MCP). DetailCraft mu pouze poskytne nástroje a vy vyberete, které.

## Zapnutí

1. Otevřete {{ui:Nastavení}} (ozubené kolo na liště aplikace nebo {{key:Mod+,}}) a přejděte na kartu {{ui:DetailCraft}}.
2. V části {{ui:Asistenti}} zaškrtněte **Povolit AI asistentům a skriptům používat DetailCraft**. Dokud to neuděláte, je vypnuto.
3. Zvolte, co smí dělat: **Čtení** je zaškrtnuto od začátku; zaškrtněte **Úpravy**, **Uložit** nebo **Export** jen tehdy, když je potřebujete.

Nástroje mimo oprávnění, která jste zaškrtli, asistentovi nejsou nabídnuty; pokud si o některý přesto řekne, DetailCraft ho odmítne a zapíše do protokolu aktivit. Vypnutí přepínače ukončí všechna připojení najednou.

## Připojení asistenta

Asistenti se připojují přes **CadCraft Studio** v tomto počítači: Studio spouští malý server, ke kterému má přístup jen tento počítač, chráněný tokenem, který při každém spuštění vytvoří. Ve Studiu zvolte {{ui:Připojit asistenta}} a zkopírujte adresu a token do svého asistenta (Studio ukáže přesná nastavení k vložení). Token nikdy nesdílejte.

:::note
Karta prohlížeče nemůže pro asistenta otevřít připojení: v aplikacích v prohlížeči přepínač nemá žádný účinek, dokud nepoužijete CadCraft Studio v tomto počítači.
:::

## Vy máte kontrolu

- **Každá změna je jeden krok zpět**, označený jako asistentova (například "Asistent: přidat nosník", "Asistent: přidat výztužné plechy"). {{key:Mod+Z}} vrátí asistentovu poslední změnu jako celek. Vlastní `undo` asistenta vrací zpět jen jeho vlastní kroky, nikdy vaše, pokud si to výslovně nevyžádá.
- **Čeká na vás.** Dokud umísťujete prvek, přesouváte díly nebo vkládáte, DetailCraft změny asistenta odmítne a řekne mu, aby to zkusil znovu.
- **Víte, kdy je připojen.** Tlačítko na liště aplikace pojmenuje asistenta, dokud je připojen; kliknutím zjistíte, co smí dělat, nebo jej **odpojíte**.
- **Aktivita.** {{ui:Nastavení}} › {{ui:DetailCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypisuje každé volání: kdy, který nástroj, provedeno nebo odmítnuto. {{ui:Uložit záznam}} uchová kopii.

## Co může asistent požadovat

Všechny délky jsou v milimetrech, body `[x, y, z]` s osou z nahoru, jako v modelu.

| Nástroj | Oprávnění | Co dělá |
|---|---|---|
| `app_info`, `model_describe` | Čtení | Otevřený model: osy, úrovně, fáze, prvky podle typu a profilu, spoje, základy, schodiště, díly, hmotnost oceli, problémy |
| `parts_list` | Čtení | Značky dílů s profilem, materiálem, délkou řezu, počtem, hmotností, fází a značkami sestav; podle typu, profilu, značky nebo fáze |
| `problems_list` | Čtení | Co vypisuje karta {{ui:Problémy}}, každé s tím, čeho se týká |
| `clash_check` | Čtení | [Kontrola kolizí](topic:clash-check), s její tolerancí a fázemi |
| `selection_get` | Čtení | Co jste vybrali |
| `selection_set` | Úpravy | Vybere prvky, spoje, základy nebo schodiště (podle id nebo značky dílu), aby vám je ukázal; nic nemění |
| `member_add` | Úpravy | Nosník, sloup, ztužidlo nebo plech mezi dvěma body |
| `connection_add` | Úpravy | Koncové plechy, smykové plechy, patní plechy, spojky nebo výztužné plechy tam, kde se dané prvky stýkají, stejně jako tlačítka {{ui:Spojit}} |
| `undo` | Úpravy | Vrátí zpět poslední kroky asistenta |
| `model_save` | Uložit | Vlastní Uložit DetailCraft |
| `model_export` | Export | IFC, soubory NC, kusovník (BOM), rozvrh ohýbání, soubor KISS nebo řezný plán, tak jak je vytvářejí tlačítka {{ui:Výstup}} |
| `usd_export` | Export | Ocelový model jako USD (.usda, .usdc nebo .usdz), tak jak jej zapisuje {{ui:Výstup}} › {{ui:USD}} (viz [Export ocelového modelu do USD](topic:usd)); ve Studiu může zapsat soubor do složky, kterou jste povolili |

## Když něco nefunguje

- **Asistent nevidí žádné nástroje DetailCraft:** zkontrolujte, že je přepínač v tomto okně zapnutý a že je okno otevřené ve Studiu.
- **"vyžaduje oprávnění k úpravám"** (nebo uložení, export): zaškrtněte je v části {{ui:Asistenti}} a pak požádejte znovu.
- **"Uživatel umisťuje prvek":** dokončete, co děláte (nebo stiskněte {{key:Esc}}), a pak nechte asistenta zkusit to znovu.
- **Chyby "401" nebo "token":** token se změnil (Studio se restartovalo, nebo {{ui:Nový token}}). Zkopírujte nový do nastavení asistenta.

## Viz také

- [Recepty pro AI asistenty](common:assistants-recipes): propracované příklady, každý s nástroji, které volá.
