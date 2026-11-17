---
title: Nastavci
summary: Spojite dva dela grede ili kraja stuba od kraja do kraja pomoću zavrtnjima pričvršćenih nastavnih limova za pojas i rebro.
keywords: nastavak, nastavak grede, nastavak stuba, nastavni lim, lim za nastavak, lim pojasa, lim rebra, nastavak sa zavrtnjima, spoj, deonica, povezivanje
from: 97d141c2
---

Nastavak sa zavrtnjima spaja dva dela jednog I-profila od kraja do kraja: nastavni lim sa spoljne strane svakog pojasa i po jedan lim sa svake strane rebra, zavrtnjima kroz oba dela. DetailCraft seče delove do razmaka, postavlja četiri lima, buši rupe u limovima i u oba dela, dodaje zavrtnje i upozorava na rastojanja od ivica, korak i uklapanje.

## Gde radi

- Dve grede ili dve deonice stuba, istog **I-profila**, koje se sastaju **kraj do kraja u istoj liniji**: krajevi najviše 50 mm razmaknuti, delovi paralelni i na jednoj liniji (u okviru 1 mm). Svaki deo može biti nacrtan u bilo kom smeru.
- Vodoravni, nagnuti i vertikalni delovi svi rade.
- Dva dela različite visine ili širine pojasa se odbijaju, kao i U-profili, uglovnici i cevi.

## Dodaj nastavke

1. Nacrtajte dva dela tako da se sastaju kraj do kraja. Da podelite element koji je već nacrtan, nacrtajte ga ponovo kao dva dela.
2. Izaberite jedan (ili oba) i izaberite {{ui:Nastavak}} u meniju {{ui:Više}} grupe {{ui:Poveži}}.
3. Svaki slobodni spoj izabranih delova sa drugim delom istog profila dobija nastavak. Statusna traka kaže koliko ih je.

Izaberite nastavak (kliknite jedan od njegovih limova) da promenite podešavanja u desnom panelu. {{ui:Primeni na slične (n)}} kopira ga na svaki drugi slobodni spoj između delova istog profila.

## Podešavanja (mm)

| Podešavanje | Podrazumevano | Šta radi |
|---|---|---|
| Razmak između krajeva | 10 | Svaki deo se seče za polovinu tog razmaka |
| Prečnik zavrtnja, rupa, kvalitet, dodatak za dužinu | 20, 22, A325, 30 | Kao kod krajnjih limova |
| Debljina lima pojasa | 12 | Lim je širok koliko i pojas |
| Redovi zavrtnja pojasa (sa svake strane) | 3 | Redovi preko pojasa sa svake strane spoja |
| Korak zavrtnja pojasa | 75 | Duž elementa |
| Razmak linija zavrtnja pojasa | 0 | Između dve linije zavrtnja; 0 = širina pojasa minus 80 |
| Rastojanje od kraja pojasa | 40 | Od kraja elementa do prvog zavrtnja i od poslednjeg zavrtnja do kraja lima |
| Debljina lima rebra | 8 | Po jedan sa svake strane rebra |
| Redovi zavrtnja rebra | 3 | Uz rebro, centrirano |
| Kolone zavrtnja rebra (sa svake strane) | 2 | Duž elementa, sa svake strane spoja |
| Korak zavrtnja rebra, po visini rebra / duž elementa | 75, 75 | |
| Rastojanje od kraja rebra | 40 | Kao kod pojaseva |
| Visina lima rebra | 0 | 0 = slobodno rebro između zaobljenja, minus 10 na vrhu i dnu |
| Materijal lima | A36 | Tekst |

Dužine limova proizilaze iz zavrtnjeva: lim pojasa = razmak + 2 × (2 × rastojanje od kraja + (redovi − 1) × korak); limovi rebra slično, sa svojim kolonama. Sa podrazumevanim vrednostima limovi pojasa su dugi 470.

## Dobro je znati

- Limovi pripadaju **prvom nacrtanom delu** od dva (njegova svojstva ga zovu prvi deo): prikazuju se na njegovom crtežu sklopa i isporučuju se uz njega, sa zavrtnjima, ne zavareni. Crtež sklopa drugog dela prikazuje samo njegove rupe.
- Zavrtnji pojasa hvataju pojas i njegov lim; zavrtnji rebra hvataju rebro i oba lima rebra. Dužine zavrtnja su navedene zasebno u svojstvima.
- Upozorenja koriste iste najmanje vrednosti iz EN 1993-1-8 kao i ostali spojevi (rastojanje od kraja i ivice 1,2 × rupa, korak 2,2 × rupa duž elementa i 2,4 × rupa poprečno), uz to lim rebra dublji od slobodnog rebra i zavrtnji pojasa preblizu rebru za zaobljenje.
- DetailCraft ne projektuje nastavak (nema proveru nosivosti) i ne pravi podmetače za delove različite debljine.
- Kopiranje oba dela kopira i njihov nastavak; brisanje bilo kog dela briše nastavak.
