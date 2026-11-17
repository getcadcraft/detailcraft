---
title: Upotreba programa DetailCraft s AI pomoćnikom
summary: Neka vaš AI pomoćnik ili skripta čita model, njegove dijelove, probleme i sudare, dodaje elemente i spojeve, sprema i izvozi (i USD): dopuštenja, povezivanje kroz CadCraft Studio i dnevnik aktivnosti.
keywords: ai, pomoćnik, agent, mcp, model context protocol, skripta, automatizacija, dijelovi, sudari, spojevi, dopuštenja, odspajanje, aktivnost, poništi
from: d624c9a0
---

## Što ćete naučiti

Kako dopustiti AI pomoćniku (ili skripti koju ste napisali) da radi s DetailCraftom i kako odlučiti čega smije dirati.

DetailCraft **nema vlastitu umjetnu inteligenciju** i ništa nikamo ne šalje. Vi donosite pomoćnika: bilo koji program koji govori Model Context Protocol (MCP). DetailCraft mu daje samo alate, a vi birate koje.

## Uključite ga

1. Otvorite {{ui:Postavke}} (zupčanik u traci aplikacije ili {{key:Mod+,}}) i idite na karticu {{ui:DetailCraft}}.
2. Pod {{ui:Pomoćnici}} označite **Dopusti AI pomoćnicima i skriptama da koriste DetailCraft**. Isključeno je dok to ne učinite.
3. Odaberite što smije: **Čitanje** je na početku označeno; označite **Uređivanje**, **Spremi** ili **Izvoz** tek kada ih trebate.

Alati izvan dopuštenja koja ste označili nisu ponuđeni pomoćniku, a ako ga zatraži svejedno, DetailCraft ga odbija i zapisuje u dnevnik aktivnosti. Isključivanje prekidača odmah prekida sve veze.

## Povežite pomoćnika

Pomoćnici se povezuju kroz **CadCraft Studio** na vašem računalu: Studio pokreće mali poslužitelj kojem može pristupiti samo ovo računalo, zaštićen tokenom koji stvara pri svakom pokretanju. U Studiju odaberite {{ui:Poveži pomoćnika}} i kopirajte adresu i token u svog pomoćnika (Studio prikazuje točne postavke za lijepljenje). Nikada ne dijelite token.

:::note
Kartica preglednika ne može otvoriti vezu za pomoćnika: u aplikacijama u pregledniku prekidač nema učinka dok ne upotrijebite CadCraft Studio na svom računalu.
:::

## Vi ostajete na čelu

- **Svaka promjena je jedan korak poništavanja**, označen kao pomoćnikov (npr. "Pomoćnik: dodaj gredu", "Pomoćnik: dodaj rebra"). {{key:Mod+Z}} vraća pomoćnikovu zadnju promjenu u cjelini. Pomoćnikov vlastiti `undo` poništava samo njegove korake, nikada vaše, osim ako to izričito zatraži.
- **Čeka vas.** Dok postavljate element, pomičete dijelove ili lijepite, DetailCraft odbija pomoćnikove promjene i kaže mu da pokuša ponovno.
- **Znate kada je jedan povezan.** Gumb u traci aplikacije imenuje pomoćnika dok je povezan; kliknite ga da vidite što smije ili da ga **Odspojite**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:DetailCraft}} › {{ui:Pomoćnici}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, izvršen ili odbijen. {{ui:Spremi zapisnik}} čuva kopiju.

## Što pomoćnik može tražiti

Sve duljine su u milimetrima, točke `[x, y, z]` s z prema gore, kao u modelu.

| Alat | Dopuštenje | Što radi |
|---|---|---|
| `app_info`, `model_describe` | Čitanje | Otvoreni model: mreže, razine, faze, elementi po vrsti i profilu, spojevi, temelji, stubišta, dijelovi, masa čelika, problemi |
| `parts_list` | Čitanje | Oznake dijelova s profilom, materijalom, duljinom reza, brojem, masom, fazom i oznakama sklopova; po vrsti, profilu, oznaci ili fazi |
| `problems_list` | Čitanje | Što kartica {{ui:Problemi}} navodi, svaki s onim čime se bavi |
| `clash_check` | Čitanje | [Provjera sudara](topic:clash-check), s tolerancijom i fazama |
| `selection_get` | Čitanje | Što ste odabrali |
| `selection_set` | Uređivanje | Odabire elemente, spojeve, temelje ili stubišta (po ID-u ili oznaci dijela) da vam ih pokaže; ne mijenja ništa |
| `member_add` | Uređivanje | Greda, stup, dijagonala ili ploča između dviju točaka |
| `connection_add` | Uređivanje | Čeone ploče, smične pločice, temeljne ploče, nastavci ili rebra gdje se zadani elementi spajaju, kao što to rade gumbi {{ui:Povezivanje}} |
| `undo` | Uređivanje | Poništava pomoćnikove zadnje korake |
| `model_save` | Spremi | Vlastito spremanje DetailCrafta |
| `model_export` | Izvoz | IFC, NC datoteke, sastavnica, plan savijanja, KISS datoteka ili popis za rezanje, kao što to rade gumbi {{ui:Izlaz}} |
| `usd_export` | Izvoz | Čelični model kao USD (.usda, .usdc ili .usdz), kao što {{ui:Izlaz}} › {{ui:USD}} zapisuje (vidi [Izvoz čeličnog modela kao USD](topic:usd)); u Studiju može zapisati datoteku u mapu koju ste dopustili |

## Ako nešto ne radi

- **Pomoćnik ne vidi alate DetailCrafta:** provjerite je li prekidač uključen u ovom prozoru i je li prozor otvoren u Studiju.
- **"treba dopuštenje za uređivanje"** (ili spremanje, izvoz): označite ga pod {{ui:Pomoćnici}}, zatim ga ponovno pitajte.
- **"Osoba postavlja element":** dovršite što radite (ili pritisnite {{key:Esc}}), zatim pustite pomoćnika da pokuša ponovno.
- **Greške "401" ili "token":** token se promijenio (Studio se ponovno pokrenuo ili {{ui:Novi token}}). Kopirajte novi u postavke pomoćnika.

## Vidi također

- [Recepti za AI pomoćnike](common:assistants-recipes): primjeri koji rade, svaki s alatima koje zove.
