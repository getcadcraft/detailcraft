---
title: Korištenje DetailCraft-a sa AI asistentom
summary: Dozvolite svom AI asistentu ili skripti da čita model, njegove dijelove, probleme i sudare, dodaje elemente i spojeve, sprema i izvozi (i USD): dozvole, povezivanje preko CadCraft Studija i dnevnik aktivnosti.
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, dijelovi, sudari, spojevi, dozvole, prekid veze, aktivnost, poništi
from: d624c9a0
---

## Šta ćete naučiti

Kako dozvoliti AI asistentu (ili skripti koju ste napisali) da radi sa DetailCraft-om, i kako odlučiti šta sme da dira.

DetailCraft **nema sopstveni AI** i ništa nigdje ne šalje. Vi donosite asistenta: bilo koji program koji govori Model Context Protocol (MCP). DetailCraft mu samo daje alate, a vi birate koje.

## Uključite

1. Otvorite {{ui:Postavke}} (zupčanik u traci aplikacije, ili {{key:Mod+,}}) i idite na karticu {{ui:DetailCraft}}.
2. Pod {{ui:Asistenti}} označite **Dozvoli AI asistentima i skriptama da koriste DetailCraft**. Isključeno je dok to ne uradite.
3. Izaberite šta smije: **Čitanje** je označeno na početku; označite **Uređivanje**, **Spasi** ili **Izvoz** samo kada su vam potrebni.

Alati izvan dozvola koje ste označili se asistentu ne nude, a ako ipak zatraži jedan, DetailCraft ga odbija i zapisuje u dnevnik aktivnosti. Isključivanje prekidača odmah prekida sve veze.

## Povežite asistenta

Asistenti se povezuju preko **CadCraft Studija** na vašem računaru: Studio pokreće mali server kojem samo ovaj računar može pristupiti, zaštićen tokenom koji napravi svaki put kada se pokrene. U Studiju izaberite {{ui:Poveži asistenta}} i kopirajte adresu i token u svog asistenta (Studio pokazuje tačna podešavanja za lijepljenje). Nikada ne dijelite token.

:::note
Kartica pretraživača ne može otvoriti vezu za asistenta: u aplikacijama u pretraživaču prekidač nema učinka dok ne koristite CadCraft Studio na svom računaru.
:::

## Vi i dalje imate kontrolu

- **Svaka promjena je jedan korak poništavanja**, označen kao asistentov (na primjer "Asistent: dodaj gredu", "Asistent: dodaj ukrepe"). {{key:Mod+Z}} poništava asistentovu posljednju promjenu u cjelini. Asistentov vlastiti `undo` poništava samo njegove korake, nikad vaše, osim ako to izričito zatraži.
- **Čeka vas.** Dok postavljate element, pomjerate dijelove ili lijepite, DetailCraft odbija asistentove promjene i kaže mu da pokuša ponovo.
- **Znate kada je neko povezan.** Dugme u traci aplikacije imenuje asistenta dok je povezan; kliknite ga da vidite šta smije, ili da ga **prekinete**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:DetailCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, urađeno ili odbijeno. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može tražiti

Sve dužine su u milimetrima, tačke `[x, y, z]` sa z prema gore, kao u modelu.

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `model_describe` | Čitanje | Otvoreni model: mreže, nivoi, faze, elementi po tipu i profilu, spojevi, temelji, stepenice, dijelovi, težina čelika, problemi |
| `parts_list` | Čitanje | Oznake dijelova sa profilom, materijalom, dužinom reza, brojem, težinom, fazom i oznakama sklopa; po tipu, profilu, oznaci ili fazi |
| `problems_list` | Čitanje | Šta kartica {{ui:Problemi}} navodi, svako sa onim čime se bavi |
| `clash_check` | Čitanje | [Provjera sudara](topic:clash-check), sa njenom tolerancijom i fazama |
| `selection_get` | Čitanje | Šta ste izabrali |
| `selection_set` | Uređivanje | Bira elemente, spojeve, temelje ili stepenice (po ID-u ili oznaci dijela) da vam ih pokaže; ništa ne mijenja |
| `member_add` | Uređivanje | Greda, stub, dijagonala ili ploča između dvije tačke |
| `connection_add` | Uređivanje | Krajnje ploče, smičući jezičci, temeljne ploče, nastavci ili ukrepe tamo gdje se dati elementi spajaju, kao što to rade dugmad {{ui:Povezivanje}} |
| `undo` | Uređivanje | Poništava asistentove posljednje korake |
| `model_save` | Spasi | DetailCraft-ovo sopstveno spremanje |
| `model_export` | Izvoz | IFC, NC datoteke, BOM, raspored savijanja, KISS datoteka ili lista rezanja, kao što to prave dugmad {{ui:Izlaz}} |
| `usd_export` | Izvoz | Čelični model kao USD (.usda, .usdc ili .usdz), kako ga piše {{ui:Izlaz}} › {{ui:USD}} (vidi [Izvoz čeličnog modela u USD](topic:usd)); u Studiju može zapisati datoteku u fasciklu koju ste dozvolili |

## Ako nešto ne radi

- **Asistent ne vidi DetailCraft alate:** provjerite da je prekidač uključen u ovom prozoru i da je prozor otvoren u Studiju.
- **"treba dozvolu za uređivanje"** (ili spremanje, izvoz): označite je pod {{ui:Asistenti}}, pa ponovo pitajte.
- **"Korisnik postavlja element":** završite ono što radite (ili pritisnite {{key:Esc}}), pa pustite asistenta da pokuša ponovo.
- **Greške "401" ili "token":** token se promijenio (Studio je ponovo pokrenut ili {{ui:Novi token}}). Kopirajte novi u postavke asistenta.

## Vidi još

- [Recepti za AI asistente](common:assistants-recipes): primjeri sa radom, svaki sa alatima koje poziva.
