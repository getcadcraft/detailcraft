---
title: Spajanje greda sa stubovima čeonim limovima
summary: Dodaj zavrtnjima pričvršćene čeone limove gde greda dodiruje pojasnicu ili rebro stuba, podesi lim, zavrtnje i var, i kopiraj vezu na svaki sličan spoj.
keywords: čeoni lim, čeoni limovi, krut spoj, spoj zavrtnjima, spoj, zavrtnji, var, produženi čeoni lim, naliježe, slično, kopiraj vezu, komponenta
from: 21e028b2
---

Čeoni spoj vari lim na kraj grede i pričvršćuje ga zavrtnjima za pojasnicu ili rebro stuba. DetailCraft postavlja lim, skraćuje gredu, buši odgovarajuće rupe u limu i pojasnici stuba, dodaje zavrtnje i var, i proverava rastojanja do ivica i razmake.

:::warning
DetailCraft ne projektuje veze. Podešavanja su polazne vrednosti koje ti menjaš; ništa ne proverava nosivost. Upozorenja o ivicama i razmacima koriste najmanje vrednosti iz EN 1993-1-8 tabela 3.3, koje se mogu razlikovati od pravila kojima ti radiš.
:::

## Šta može da spoji

- **Nivelisana** greda (oba kraja na istoj visini), uspravna (rotacija 0), sa I-profilom.
- U **pojasnicu** ili **rebro** **uspravnog** I-stuba, normalno na njega.
- Kraj grede mora biti na liniji stuba, između donje i gornje ivice stuba.

Kose ili nagnute grede i profili koji nisu I-profili se odbijaju uz razlog: za njih koristi [smičuće pločice](topic:shear-tabs). Na rebru lim i pojasnice greda moraju stati između pojasnica stuba; DetailCraft upozorava kad ne stanu.

:::tip
Pri rotaciji 0 pojasnice stuba gledaju duž numerisane mreže (x). Greda koja ide od A do B dodiruje rebro i dobija čeoni lim na rebru.
:::

## Dodaj čeone limove na gredu

1. Izaberi {{ui:Izaberi}} ({{key:V}}) i klikni gredu.
2. Izaberi {{ui:Čeoni limovi}} u grupi {{ui:Poveži}}, ili {{ui:Dodaj krajnje limove}} u panelu {{ui:Svojstva}}.
3. Svaki slobodan kraj grede koji pravo dodiruje pojasnicu ili rebro stuba dobija lim. Statusna traka kaže: „Dodata su 2 čeona lima. Izaberi jedan da promeniš njegov lim, zavrtnje i var; Slično ga kopira na slične spojeve.“
4. Prvi novi čeoni lim je izabran, a njegova podešavanja su u panelu {{ui:Svojstva}}.

Ako se ništa ne dogodi, pročitaj statusnu traku:

- „Ova greda se ne završava na liniji stuba. Čeoni limovi idu tamo gde kraj grede dodiruje uspravni stub.“
- „Ova greda dodiruje stub pod uglom ili je nagnuta: čeoni limovi su napravljeni za prave, nivelisane spojeve. Koristi Smičuće pločice.“
- „Oba kraja već imaju veze.“

## Promeni lim, zavrtnje i var

Klikni čeoni lim (ili jedan od njegovih zavrtnja) da izabereš vezu. Pod {{ui:Lim, zavrtnji i var (mm)}}:

| Podešavanje | Podrazumevano | Šta radi |
|---|---|---|
| Debljina lima | 20 | Debljina lima; i koliko se greda skraćuje preko pojasnice |
| Širina lima | 180 | Preko spoja |
| Produžetak iznad grede | 0 | Iznad gornje pojasnice; iznad 0 pravi produženi čeoni lim |
| Produžetak ispod grede | 0 | Ispod donje pojasnice |
| Prečnik zavrtnja | 20 | Nominalna veličina zavrtnja |
| Prečnik rupe | 22 | Tvoj zazor u rupi u limu i pojasnici stuba |
| Klasa zavrtnja | A325 | Tekst; štampa se u specifikaciji materijala |
| Redovi zavrtnja | 4 | Redovi od po dva zavrtnja, centrirani po visini lima |
| Korak redova | 75 | Vertikalni razmak između redova |
| Razmak | 100 | Horizontalni razmak između dva zavrtnja u redu |
| Dodatak dužine zavrtnja | 30 | Dodaje se steži za maticu, podlošku i navoj; vidi ispod |
| Veličina ugaonog zavara | 8 | Sa svih strana kraja grede |
| Materijal lima | A36 | Tekst |

Upiši novu vrednost i pritisni {{key:Enter}} ili {{key:Tab}}. Lim, rupe, zavrtnji i odsečena dužina grede se odmah menjaju. Svaka promena je jedan korak poništavanja.

Ispod podešavanja vidiš šta veza pravi:

- {{ui:Zavrtnji}}: na primer „8 × 20 × 70 A325 (steža 36.2)“.
- {{ui:Var}}: veličina, gde je i njegova dužina.
- {{ui:Lim}}: njegova veličina i oznaka dela.

### Kako se računaju brojevi

- Greda se skraćuje za polovinu dubine stuba (na rebru: polovinu debljine rebra) plus debljinu lima, tako da lim naleže na lice.
- Visina lima je dubina grede plus dva produžetka.
- Dužina zavrtnja = steža (debljina lima + debljina pojasnice ili rebra stuba) + dodatak, zaokruženo naviše na sledećih 5 mm.
- Prikazana dužina zavara je obim preseka grede.

### Upozorenja

Veza se i dalje pravi, ali ova upozorenja se pojavljuju ispod nje i na kartici {{ui:Problemi}}:

- Redovi zavrtnja ili zavrtnji bliži ivici lima nego 1.2 × prečnik rupe.
- Korak redova manji od 2.2 × prečnik rupe, ili razmak manji od 2.4 × prečnik rupe.
- Rupe koje zalaze u rebro stuba ili njegov zaobljeni prelaz, ili izlaze sa pojasnice stuba.
- Lim širi od pojasnice stuba, ili (na rebru) širi od prostora između pojasnica; pojasnice greda koje ne stanu između njih.
- Red zavrtnja previše blizu pojasnice grede, ili razmak previše tesan za rebro grede i njen var.

## Kopiraj na svaki sličan spoj

1. Izaberi vezu koju si podesio.
2. Izaberi {{ui:Primeni na slične (n)}} u panelu {{ui:Svojstva}}, ili {{ui:Slično}} u meniju {{ui:Više}} grupe {{ui:Poveži}}. Broj u zagradi je koliko spojeva će je dobiti.
3. Svaki spoj sa istim profilom grede i profilom stuba, grede u istu vrstu lica, koji još nema vezu, dobija kopiju sa istim podešavanjima. Statusna traka kaže koliko.

Kopije su nezavisne: kasnija promena jedne ne menja druge. Spojevi koji već imaju vezu ostaju netaknuti; obriši ih prvo ako želiš da budu zamenjeni.

## Pomeranje i brisanje

Veze se ponovo prave iz svojih podešavanja svaki put kad se model promeni, pa pomeranje ili promena veličine grede ili stuba nosi i njene čeone limove. Ako promena znači da spoj više ne odgovara, veza ostaje u modelu, a kartica {{ui:Problemi}} kaže zašto, na primer „Kraj grede više nije na liniji stuba.“

Da obrišeš vezu, izaberi je i pritisni {{key:Delete}}. Brisanje grede ili stuba briše i njihove veze.

Sledeće: [Dodavanje osnovnih limova i sidrenih šipki](topic:base-plates).
