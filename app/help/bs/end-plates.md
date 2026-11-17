---
title: Povezivanje greda sa stubovima čeonim pločama
summary: Dodaj zavrnute čeone ploče tamo gdje greda dolazi na pojas ili rebro stuba, postavi ploču, vijke i var, i kopiraj vezu na svaki sličan spoj.
keywords: čeona ploča, čeona ploča, momentna veza, zavrnuta veza, spoj, vijci, var, produžena čeona ploča, zamjena, slično, kopiraj vezu, komponenta
from: 21e028b2
---

Čeona ploča povezuje tako što se ploča zavari na kraj grede i zavrne za pojas ili rebro stuba. DetailCraft postavlja ploču, skraćuje gredu, buši odgovarajuće rupe u ploči i pojasu stuba, dodaje vijke i var, i provjerava udaljenosti od ivica i razmake.

:::warning
DetailCraft ne projektuje veze. Postavke su početne vrijednosti koje ti mijenjaš; ništa ne provjerava nosivost. Upozorenja o ivicama i razmacima koriste minimume iz EN 1993-1-8 Tabela 3.3, koji se mogu razlikovati od pravila kojima ti radiš.
:::

## Šta može povezati

- **Nivoa** gredu (oba kraja na istoj visini), uspravnu (rotacija 0), s I-profilom.
- U **pojas** ili **rebro** **vertikalnog** I-stuba, pod pravim uglom.
- Kraj grede mora biti na liniji stuba, između donje i gornje ivice stuba.

Kosе ili nagnute grede i profili koji nisu I-profili se odbijaju uz razlog: za njih koristi [spojne ploče za smicanje](topic:shear-tabs). Na rebru ploča i pojasevi grede moraju stati između pojaseva stuba; DetailCraft upozorava kada ne stanu.

:::tip
Pri rotaciji 0 pojasevi stuba gledaju duž smjera numerisane mreže (x). Greda koja ide od A do B dolazi na rebro i dobija čeonu ploču na rebru.
:::

## Dodaj čeone ploče na gredu

1. Izaberi {{ui:Odaberi}} ({{key:V}}) i klikni gredu.
2. Izaberi {{ui:Čeone ploče}} u grupi {{ui:Povezivanje}}, ili {{ui:Dodaj krajnje limove}} u panelu {{ui:Svojstva}}.
3. Svaki slobodan kraj grede koji dolazi na pojas ili rebro stuba pod pravim uglom dobija ploču. Statusna traka kaže: „Dodano je 2 čeone ploče. Odaberi jednu da promijeniš njenu ploču, vijke i var; Slično je kopira na slične spojeve.”
4. Prva nova čeona ploča se odabire i njene postavke su u panelu {{ui:Svojstva}}.

Ako se ništa ne desi, pročitaj statusnu traku:

- „Ova greda ne završava na liniji stuba. Čeone ploče idu tamo gdje kraj grede dolazi na uspravni stub.”
- „Ova greda dolazi na stub pod uglom ili je nagnuta: čeone ploče se prave za pravougaone, nivoe spojeve. Koristi Spojne ploče za smicanje.”
- „Oba kraja već imaju veze.”

## Promijeni ploču, vijke i var

Klikni čeonu ploču (ili jedan od njenih vijaka) da odabereš vezu. Pod {{ui:Ploča, vijci i var (mm)}}:

| Postavka | Zadano | Šta radi |
|---|---|---|
| Debljina ploče | 20 | Debljina ploče; također koliko se greda skraćuje iza pojasa |
| Širina ploče | 180 | Preko spoja |
| Produžetak iznad grede | 0 | Iznad gornjeg pojasa; iznad 0 pravi produženu čeonu ploču |
| Produžetak ispod grede | 0 | Ispod donjeg pojasa |
| Prečnik vijka | 20 | Nominalna veličina vijka |
| Prečnik rupe | 22 | Tvoj zazor za rupu u ploči i pojasu stuba |
| Klasa vijka | A325 | Tekst; štampa se u spisku materijala |
| Redovi vijaka | 4 | Redovi po dva vijka, centrirani na visinu ploče |
| Razmak redova | 75 | Vertikalni razmak između redova |
| Razmak vijaka | 100 | Horizontalni razmak između dva vijka jednog reda |
| Dodatak za dužinu vijka | 30 | Dodaje se stezanju za maticu, podlošku i navoj; vidi dolje |
| Dimenzija ugaonog vara | 8 | Sa svih strana kraja grede |
| Materijal ploče | A36 | Tekst |

Upiši novu vrijednost i pritisni {{key:Enter}} ili {{key:Tab}}. Ploča, rupe, vijci i dužina reza grede se odmah ažuriraju. Svaka promjena je jedan korak poništavanja.

Ispod postavki vidiš šta veza pravi:

- {{ui:Vijci}}: na primjer „8 × 20 × 70 A325 (stezanje 36,2)”.
- {{ui:Var}}: dimenzija, gdje i njegova dužina.
- {{ui:Ploča}}: njena veličina i oznaka dijela.

### Kako se računaju brojevi

- Greda se skraćuje za polovinu dubine stuba (na rebru: polovinu debljine rebra) plus debljinu ploče, tako da ploča sjedi na licu.
- Visina ploče je visina grede plus dva produžetka.
- Dužina vijka = stezanje (debljina ploče + debljina pojasa ili rebra stuba) + dodatak, zaokruženo na sljedećih 5 mm.
- Prikazana dužina vara je obim presjeka grede.

### Upozorenja

Veza se i dalje pravi, ali se ova upozorenja pojavljuju ispod nje i u kartici {{ui:Problemi}}:

- Redovi vijaka ili vijci bliže ivici ploče nego 1,2 × prečnik rupe.
- Razmak redova manji od 2,2 × prečnik rupe, ili razmak vijaka manji od 2,4 × prečnik rupe.
- Rupe koje zalaze u rebro stuba ili njegov zaobljeni prelaz, ili izlaze s pojasa stuba.
- Ploča šira od pojasa stuba ili (na rebru) šira od prostora između pojaseva; pojasevi grede koji ne stanu između njih.
- Red vijaka pretijesno uz pojas grede, ili razmak preuzak za rebro grede i njen var.

## Kopiraj na svaki sličan spoj

1. Odaberi vezu koju si postavio.
2. Izaberi {{ui:Primijeni na slične (n)}} u panelu {{ui:Svojstva}}, ili {{ui:Slično}} u meniju {{ui:Više}} grupe {{ui:Povezivanje}}. Broj u zagradi je koliko spojeva će je dobiti.
3. Svaki spoj s istim profilom grede i istim profilom stuba, greda u istu vrstu strane, koji još nema vezu dobija kopiju s istim postavkama. Statusna traka kaže koliko.

Kopije su nezavisne: kasnija promjena jedne ne mijenja ostale. Spojevi koji već imaju vezu ostaju netaknuti; obriši ih prvo ako želiš da budu zamijenjeni.

## Pomjeranje i brisanje

Veze se ponovo prave iz svojih postavki svaki put kada se model promijeni, pa pomjeranje ili promjena veličine grede ili stuba nosi i njene čeone ploče sa sobom. Ako promjena znači da spoj više ne odgovara, veza ostaje u modelu, a kartica {{ui:Problemi}} kaže zašto, na primjer „Kraj grede više nije na liniji stuba.”

Da obrišeš vezu, odaberi je i pritisni {{key:Delete}}. Brisanje grede ili stuba briše i njihove veze.

Sljedeće: [Dodavanje baznih ploča i sidrenih šipki](topic:base-plates).
