---
title: Spajanje greda sa stupovima čeonim pločama
summary: Dodajte vijčane čeone ploče tamo gdje greda dolazi do pojasnice ili hrpta stupa, postavite ploču, vijke i zavar te kopirajte spoj na svaki sličan spoj.
keywords: čeona ploča, endplate, momentni spoj, vijčani spoj, spoj, vijci, zavar, produžena čeona ploča, poravnata, slično, kopiraj spoj, komponenta
from: 21e028b2
---

Spoj čeonom pločom zavari ploču na kraj grede i pričvrsti je vijcima na pojasnicu ili hrbat stupa. DetailCraft postavlja ploču, odrezuje gredu, buši odgovarajuće rupe u ploči i pojasnici stupa, dodaje vijke i zavar te provjerava udaljenosti od rubova i razmake.

:::warning
DetailCraft ne projektira spojeve. Postavke su početne vrijednosti koje vi mijenjate; ništa ne provjerava nosivost. Upozorenja o rubovima i razmacima koriste najmanje vrijednosti iz EN 1993-1-8 tablica 3.3, koje se mogu razlikovati od pravila kojih se vi držite.
:::

## Što može spojiti

- **Razinsku** gredu (oba kraja na istoj visini), uspravnu (rotacija 0), s I-profilom.
- U **pojasnicu** ili **hrbat** **okomitog** I-profila stupa, pod pravim kutom.
- Kraj grede mora biti na liniji stupa, između dna i vrha stupa.

Kose ili nagnute grede i profili koji nisu I-profili odbijaju se s razlogom: za njih upotrijebite [spojne ploče](topic:shear-tabs). Na hrptu ploča i pojasnice grede moraju stati između pojasnica stupa; DetailCraft upozorava kad ne stanu.

:::tip
Pri rotaciji 0 pojasnice stupa okrenute su duž brojčane mreže (x). Greda koja ide od A do B dolazi do hrpta i dobiva čeonu ploču na hrptu.
:::

## Dodajte čeone ploče gredi

1. Odaberite {{ui:Odaberi}} ({{key:V}}) i kliknite gredu.
2. Odaberite {{ui:Čeone ploče}} u grupi {{ui:Povezivanje}}, ili {{ui:Dodaj čeone ploče}} na ploči {{ui:Svojstva}}.
3. Svaki slobodni kraj grede koji dolazi do pojasnice ili hrpta stupa pod pravim kutom dobiva ploču. Statusna traka kaže: „Dodane su 2 čeone ploče. Odaberite jednu da promijenite njezinu ploču, vijke i zavar; {{ui:Slično}} je kopira na slične spojeve.“
4. Prva nova čeona ploča je odabrana, a njezine postavke su na ploči {{ui:Svojstva}}.

Ako se ništa ne dogodi, pročitajte statusnu traku:

- „Ova greda ne završava na liniji stupa. Čeone ploče idu tamo gdje kraj grede dolazi do uspravnog stupa.“
- „Ova greda dolazi do stupa pod kutom ili je nagnuta: čeone ploče izrađene su za okomite, vodoravne spojeve. Upotrijebite spojne ploče.“
- „Oba kraja već imaju spojeve.“

## Promijenite ploču, vijke i zavar

Kliknite čeonu ploču (ili jedan od njezinih vijaka) da odaberete spoj. Pod {{ui:Ploča, vijci i zavar (mm)}}:

| Postavka | Zadano | Što radi |
|---|---|---|
| Debljina ploče | 20 | Debljina ploče; ujedno i koliko se greda odreže iza pojasnice |
| Širina ploče | 180 | Poprijeko spoja |
| Produljenje iznad grede | 0 | Iznad gornje pojasnice; iznad 0 čini produženu čeonu ploču |
| Produljenje ispod grede | 0 | Ispod donje pojasnice |
| Promjer vijka | 20 | Nazivna veličina vijka |
| Promjer rupe | 22 | Vaš zazor u rupi ploče i pojasnice stupa |
| Klasa vijka | A325 | Tekst; ispisuje se u sastavnici |
| Redovi vijaka | 4 | Redovi od dva vijka, centrirani po visini ploče |
| Korak redova | 75 | Okomiti razmak između redova |
| Razmak | 100 | Vodoravni razmak između dva vijka u redu |
| Dodatak duljini vijka | 30 | Dodaje se obuhvatu za maticu, podložnu pločicu i navoj; vidi dolje |
| Veličina kutnog zavara | 8 | Oko cijelog kraja grede |
| Materijal ploče | A36 | Tekst |

Upišite novu vrijednost i pritisnite {{key:Enter}} ili {{key:Tab}}. Ploča, rupe, vijci i rezna duljina grede odmah se ažuriraju. Svaka promjena je jedan korak poništavanja.

Ispod postavki vidi se što spoj stvara:

- {{ui:Vijci}}: na primjer „8 × 20 × 70 A325 (obuhvat 36.2)“.
- {{ui:Zavar}}: veličina, mjesto i njegova duljina.
- {{ui:Ploča}}: njezina veličina i oznaka pozicije.

### Kako se brojevi računaju

- Greda se odreže za polovicu dubine stupa (na hrptu: polovicu debljine hrpta) plus debljinu ploče, tako da ploča sjedi na licu.
- Visina ploče je dubina grede plus dva produljenja.
- Duljina vijka = obuhvat (debljina ploče + debljina pojasnice ili hrpta stupa) + dodatak, zaokruženo naviše na sljedećih 5 mm.
- Prikazana duljina zavara je opseg presjeka grede.

### Upozorenja

Spoj se i dalje izrađuje, ali se ova upozorenja pojavljuju ispod njega i na kartici {{ui:Problemi}}:

- Redovi vijaka ili vijci bliži rubu ploče nego 1.2 × promjer rupe.
- Korak redova manji od 2.2 × promjer rupe ili razmak manji od 2.4 × promjer rupe.
- Rupe koje zalaze u hrbat stupa ili njegov radijus, ili izlaze s pojasnice stupa.
- Ploča šira od pojasnice stupa ili (na hrptu) šira od razmaka između pojasnica; pojasnice grede koje ne stanu među njima.
- Red vijaka preblizu pojasnici grede ili razmak pretijesan za hrbat grede i njezin zavar.

## Kopirajte na svaki sličan spoj

1. Odaberite spoj koji ste postavili.
2. Odaberite {{ui:Primijeni na slične (n)}} na ploči {{ui:Svojstva}}, ili {{ui:Slično}} u izborniku {{ui:Više}} grupe {{ui:Povezivanje}}. Broj u zagradi je koliko će spojeva dobiti spoj.
3. Svaki spoj s istim profilom grede i profilom stupa, grede u istu vrstu strane, koji još nema spoj, dobiva kopiju s istim postavkama. Statusna traka kaže koliko.

Kopije su neovisne: promjena jedne kasnije ne mijenja druge. Spojevi koji već imaju spoj ostaju netaknuti; prvo ih izbrišite ako ih želite zamijeniti.

## Premještanje i brisanje

Spojevi se ponovno izrađuju iz svojih postavki svaki put kad se model promijeni, pa premještanje ili promjena veličine grede ili stupa nosi i njihove čeone ploče. Ako promjena znači da spoj više ne odgovara, spoj ostaje u modelu, a kartica {{ui:Problemi}} kaže zašto, na primjer „Kraj grede više nije na liniji stupa.“

Da biste obrisali spoj, odaberite ga i pritisnite {{key:Delete}}. Brisanje grede ili stupa briše i njezine spojeve.

Sljedeće: [Dodajte temeljne ploče i sidrene štapove](topic:base-plates).
