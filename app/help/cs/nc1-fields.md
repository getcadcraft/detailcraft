---
title: Pole souboru NC
summary: Co DetailCraft zapisuje do každého souboru DSTV NC, pole po poli, a jak se měří strany a souřadnice.
keywords: nc1, dstv, soubor nc, blok st, ak, bo, hlavička, strany, souřadnice, cnc, formát
from: 1b676fc1
---

Každý soubor `.nc1` popisuje jedno označení dílu. Řádky končí CR LF. Textová pole obsahují prostý ASCII; ostatní znaky se nahradí znakem "?". Druhý řádek je komentář `** DetailCraft <mark>.nc1`.

## Hlavička (ST)

| Pole | I-profil, U-profil | Úhelník | Obdélníková HSS | Kruhová HSS | Plech |
|---|---|---|---|---|---|
| Zakázka | Název modelu | ← | ← | ← | ← |
| Výkres, kus | Označení dílu | ← | ← | ← | ← |
| Fáze | Fáze dílu, nebo 1 | ← | ← | ← | ← |
| Jakost oceli | Třída materiálu | ← | ← | ← | ← |
| Množství | Počet dílů s tímto označením | ← | ← | ← | ← |
| Profil | Název profilu, například W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Kód profilu | I nebo U (U-profil) | L | M | RO | B |
| Délka | Délka řezu | ← | ← | ← | Délka |
| Výška | Výška d | Rameno | Výška | Průměr | Šířka plechu |
| Šířka pásnice | bf | Rameno | Šířka | Průměr | 0 |
| Tloušťka pásnice | tf | t | Tloušťka stěny t | Tloušťka stěny t | 0 |
| Tloušťka stojiny | tw | t | Tloušťka stěny t | Tloušťka stěny t | Tloušťka plechu |
| Poloměr | Poloměr zaoblení (0 pro U-profily AISC) | 0 | Vnější poloměr rohu | 0 | 0 |
| Hmotnost na metr | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Plocha nátěru na metr | Vnější obvod, m²/m | ← | ← | ← | 2 (obě strany, m²/m²) |
| Úhly řezu (4 pole) | 0 (kolmo) | ← | ← | ← | ← |
| Textová pole (4) | `-` | ← | ← | ← | ← |

Plechy se řídí sloupcem normy "pro plechy". Norma nemá sloupec pro kruhové trubky: DetailCraft zapisuje průměr jako výšku i šířku pásnice a stěnu jako obě tloušťky.

## Vnější obrysy (AK)

- **I-profily a U-profily:** stojina (v), s obdélníkovým výřezem pro každé vybrání; každá pásnice (o a u), zkrácená na konci, kde vybrání je aspoň tak hluboké jako pásnice.
- **Obdélníková HSS:** obě boční stěny (v a h), vyříznuté pro vybrání, a horní a spodní stěny (o a u).
- **Úhelníky:** jeden obdélník na rameno (v a u). Vybrání u úhelníků se nezapisují: takový díl je uveden jako nezapsaný. Úhelníkové ztužidlo přišroubované k [ztužidlovému plechu](topic:brace-gussets) má otvory na šroubovaném rameni: v pro rameno podél u dílu, u pro rameno podél v dílu.
- **Kruhová HSS:** jeden obdélník na v, trubka pohledem zepředu (délka × průměr).
- **Plechy:** jeden obdélník na straně v.

Každý obrys je uzavřený (první bod se na konci zopakuje) a jde proti směru hodinových ručiček.

## Otvory (BO)

Jeden řádek na otvor: strana, x, y, průměr, hloubka 0 (průchozí). Zahrnuty jsou všechny otvory, ty, které jste zadali, i ty, které vytvořily spoje. Otvor procházející bočními stěnami obdélníkové HSS se zapíše dvakrát, jednou na v a jednou na h.

## Strany a souřadnice

Každý profil je umístěn tak, jak ho kreslí obrázek poloh profilů v normě (DSTV 1998, s. 7): x podél dílu, Y napříč, Z nahoru od zadní strany, s nulovým bodem ve vnějším rohu. DetailCraft nikdy díl nezrcadlí, aby seděl na obrázek.

| Strana | I-profil | U-profil | Úhelník | Obdélníková HSS | Plech |
|---|---|---|---|---|---|
| v | Stojina, přední | Stojina, pohled od strany konců pásnic | Rameno podél u dílu | Boční stěna při −u | Čelo plechu |
| h | | | | Boční stěna při +u | |
| o | Horní pásnice | **Spodní** pásnice | | Horní stěna | |
| u | Spodní pásnice | **Horní** pásnice | Rameno podél v dílu | Spodní stěna | |

- **x** běží podél dílu od začátku řezu.
- **I-profily a obdélníková HSS:** y na stojině nebo bočních stěnách se měří od spodní strany profilu; y na pásnici nebo na horní a spodní stěně se měří od jejího okraje na zadní straně (na straně +u dílu).
- **U-profily** leží na zádech s konci pásnic nahoru, jako na obrázku normy. Y na stojině tedy běží od vnější strany horní pásnice dolů, horní pásnice je strana u a spodní pásnice strana o, a y na pásnici běží od zadní strany stojiny směrem ke konci pásnice.
- **Úhelníky:** y na každém rameni od paty.
- **Plechy:** y od hrany plechu při −u.

Zkontrolujte, jak váš software pro stroje čte strany U-profilů, dřív než začnete řezat: některé programy je otáčejí opačně.

## Nezapisuje se

Zkosení, vnitřní obrysy, značení (SI), úhly řezu jiné než kolmé, podlouhlé otvory, otvory v kruhových trubkách (DetailCraft žádné nemá) a vybrání na úhelnících a kruhových trubkách.
