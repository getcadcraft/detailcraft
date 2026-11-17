---
title: Korišćenje DetailCraft-a sa AI asistentom
summary: Dozvolite svom AI asistentu ili skripti da čita model, njegove delove, probleme i sudare, dodaje elemente i veze, čuva i izvozi (i USD): dozvole, povezivanje preko CadCraft Studija i dnevnik aktivnosti.
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, delovi, sudari, veze, dozvole, prekid veze, aktivnost, opozovi
from: d624c9a0
---

## Šta ćete naučiti

Kako da dozvolite AI asistentu (ili skripti koju ste napisali) da radi sa DetailCraft-om, i kako da odredite šta sme da dira.

DetailCraft **nema sopstveni AI** i ništa nigde ne šalje. Vi donosite asistenta: bilo koji program koji govori Model Context Protocol (MCP). DetailCraft mu daje samo alate, a vi birate koje.

## Uključite ga

1. Otvorite {{ui:Podešavanja}} (zupčanik na traci aplikacije ili {{key:Mod+,}}) i idite na karticu {{ui:DetailCraft}}.
2. Pod {{ui:Asistenti}}, označite **Dozvoli AI asistentima i skriptama da koriste DetailCraft**. Isključeno je dok to ne uradite.
3. Izaberite šta sme: **Čitanje** je označeno na početku; označite **Izmena**, **Sačuvaj** ili **Izvoz** samo kada su vam potrebni.

Alati van dozvola koje ste označili se asistentu ne nude, a ako ipak zatraži jedan, DetailCraft ga odbija i upisuje u dnevnik aktivnosti. Isključivanje prekidača odmah prekida sve veze.

## Povežite asistenta

Asistenti se povezuju preko **CadCraft Studija** na vašem računaru: Studio pokreće mali server koji samo ovaj računar može da dostigne, zaštićen tokenom koji napravi pri svakom pokretanju. U Studiju izaberite {{ui:Poveži asistenta}} i kopirajte adresu i token u svog asistenta (Studio prikazuje tačna podešavanja za unos). Nikada ne delite token.

:::note
Kartica pregledača ne može da otvori vezu za asistenta: u aplikacijama u pregledaču prekidač nema efekta dok ne koristite CadCraft Studio na svom računaru.
:::

## Vi ostajete zaduženi

- **Svaka izmena je jedan korak opozivanja**, obeležen kao asistentov (na primer "Asistent: dodaj gredu" ili "Asistent: dodaj rebra"). {{key:Mod+Z}} opoziva poslednju izmenu asistenta u celini. Sopstveni `undo` asistenta opoziva samo njegove korake, nikada vaše, osim ako to izričito zatraži.
- **Čeka vas.** Dok postavljate element, pomerate delove ili lepite, DetailCraft odbija izmene asistenta i traži da pokuša ponovo.
- **Znate kada je povezan.** Dugme na traci aplikacije imenuje asistenta dok je povezan; kliknite ga da vidite šta sme ili da ga **Prekinete** (Disconnect).
- **Aktivnost.** {{ui:Podešavanja}} › {{ui:DetailCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, urađen ili odbijen. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može da traži

Sve dužine su u milimetrima, tačke `[x, y, z]` sa z naviše, kao u modelu.

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `model_describe` | Čitanje | Otvoreni model: mreže, nivoi, faze, elementi po tipu i profilu, veze, temelji, stepeništa, delovi, težina čelika, problemi |
| `parts_list` | Čitanje | Oznake delova sa profilom, materijalom, dužinom sečenja, brojem, težinom, fazom i oznakama sklopova; po tipu, profilu, oznaci ili fazi |
| `problems_list` | Čitanje | Šta navodi kartica {{ui:Problemi}}, svaki sa onim čemu se odnosi |
| `clash_check` | Čitanje | [Provera sudara](topic:clash-check), sa tolerancijom i fazama |
| `selection_get` | Čitanje | Šta ste izabrali |
| `selection_set` | Izmena | Bira elemente, veze, temelje ili stepeništa (po id-u ili oznaci dela) da vam ih prikaže; ništa ne menja |
| `member_add` | Izmena | Gredu, stub, dijagonalu ili lim između dve tačke |
| `connection_add` | Izmena | Krajnje limove, smičuće jezičke, temeljne ploče, nastavke ili rebra tamo gde se dati elementi spajaju, kao što to rade dugmad {{ui:Poveži}} |
| `undo` | Izmena | Opoziva poslednje korake asistenta |
| `model_save` | Sačuvaj | Sopstveno čuvanje DetailCraft-a |
| `model_export` | Izvoz | IFC, NC datoteke, BOM, spisak savijanja, KISS datoteku ili listu sečenja, kako to prave dugmad {{ui:Izlaz}} |
| `usd_export` | Izvoz | Čelični model kao USD (.usda, .usdc ili .usdz), kako ga {{ui:Izlaz}} › {{ui:USD}} upisuje (vidi [Izvoz čeličnog modela kao USD](topic:usd)); u Studiju može da upiše datoteku u fasciklu koju ste dozvolili |

## Ako nešto ne radi

- **Asistent ne vidi DetailCraft alate:** proverite da je prekidač uključen u ovom prozoru i da je prozor otvoren u Studiju.
- **"potrebna je dozvola za izmenu"** (ili za čuvanje, izvoz): označite je pod {{ui:Asistenti}}, pa ponovo pitajte.
- **"Korisnik postavlja element":** završite šta radite (ili pritisnite {{key:Esc}}), pa pustite asistenta da pokuša ponovo.
- **Greške "401" ili "token":** token se promenio (Studio je ponovo pokrenut ili {{ui:Novi token}}). Kopirajte novi u podešavanja asistenta.

## Pogledajte i

- [Recepti za AI asistente](common:assistants-recipes): primeri rada, svaki sa alatima koje poziva.
