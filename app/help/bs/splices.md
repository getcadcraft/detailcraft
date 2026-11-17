---
title: Nastavci
summary: Spojite dva dijela grede ili kraja stuba od kraja do kraja vijčanim prirubničkim i rebrenim pokrivnim pločama.
keywords: nastavak, nastavak grede, nastavak stuba, pokrivna ploča, ploča nastavka, prirubnička ploča, rebrena ploča, vijčani nastavak, spoj, dizanje, povezivanje
from: 97d141c2
---

Vijčani nastavak spaja dva dijela jednog I-profila od kraja do kraja: pokrivna ploča sa vanjske strane svake prirubnice i ploča sa svake strane rebra, zavrnute kroz oba dijela. DetailCraft reže dijelove do razmaka, postavlja četiri ploče, buši rupe u pločama i u oba dijela, dodaje vijke i upozorava na udaljenosti do ivice, razmake i prilijeganje.

## Gdje radi

- Dvije grede ili dva nastavka stuba istog **I-profila**, koji se spajaju **od kraja do kraja u liniji**: krajevi najviše 50 mm udaljeni, dijelovi paralelni i na jednoj liniji (unutar 1 mm). Svaki dio može biti nacrtan u bilo kojem smjeru.
- Horizontalni, nagnuti i vertikalni dijelovi svi rade.
- Dva dijela različite visine ili širine prirubnice se odbijaju, kao i kanali, uglovnici i cijevi.

## Dodavanje nastavaka

1. Nacrtajte dva dijela tako da se spajaju od kraja do kraja. Da podijelite element koji je već nacrtan, nacrtajte ga ponovo kao dva dijela.
2. Odaberite jedan (ili oba) i izaberite {{ui:Nastavak}} u meniju {{ui:Više}} grupe {{ui:Povezivanje}}.
3. Svaki slobodni spoj odabranih dijelova sa drugim dijelom istog profila dobija nastavak. Statusna traka kaže koliko ih je.

Odaberite nastavak (kliknite jednu od njegovih ploča) da promijenite postavke u desnom panelu. {{ui:Primijeni na slične (n)}} kopira ga na svaki drugi slobodni spoj između dijelova istog profila.

## Postavke (mm)

| Postavka | Zadano | Šta radi |
|---|---|---|
| Razmak između krajeva | 10 | Svaki dio se skraćuje za polovinu toga |
| Prečnik vijka, rupa, kvalitet, dodatak za dužinu | 20, 22, A325, 30 | Kao kod krajnjih ploča |
| Debljina prirubničke ploče | 12 | Ploča je široka koliko i prirubnica |
| Redovi vijaka prirubnice (sa svake strane) | 3 | Redovi preko prirubnice sa svake strane spoja |
| Korak vijaka prirubnice | 75 | Duž elementa |
| Razmak vijaka prirubnice | 0 | Između dvije linije vijaka; 0 = širina prirubnice umanjena za 80 |
| Udaljenost krajeva prirubnice | 40 | Od kraja elementa do prvog vijka i od posljednjeg vijka do kraja ploče |
| Debljina rebrene ploče | 8 | Jedna sa svake strane rebra |
| Redovi vijaka rebra | 3 | Gore duž rebra, centrirano |
| Kolone vijaka rebra (sa svake strane) | 2 | Duž elementa sa svake strane spoja |
| Korak vijaka rebra, gore po rebru / duž elementa | 75, 75 | |
| Udaljenost krajeva rebra | 40 | Kao za prirubnice |
| Visina rebrene ploče | 0 | 0 = slobodno rebro između zaobljenja umanjeno za 10 gore i dolje |
| Materijal ploče | A36 | Tekst |

Dužine ploča slijede iz vijaka: prirubnička ploča = razmak + 2 × (2 × udaljenost krajeva + (redovi − 1) × korak); rebrene ploče slično, sa svojim kolonama. Sa zadanim vrijednostima prirubničke ploče su dugačke 470.

## Dobro je znati

- Ploče pripadaju **prvom nacrtanom dijelu** od dva (njegova svojstva ga zovu prvi dio): prikazuju se na njegovom sklopnom crtežu i isporučuju se uz njega, zavrnute, ne zavarene. Sklopni crtež drugog dijela prikazuje samo njegove rupe.
- Vijci prirubnice hvataju prirubnicu i njenu ploču; vijci rebra hvataju rebro i obje rebrene ploče. Dužine vijaka su navedene posebno u svojstvima.
- Upozorenja koriste iste minimume EN 1993-1-8 kao i ostali spojevi (udaljenost krajeva i ivice 1.2 × rupa, korak 2.2 × rupa duž elementa i 2.4 × rupa poprijeko), plus rebrena ploča dublja od slobodnog rebra i vijci prirubnice preblizu rebru za zaobljenje.
- DetailCraft ne projektuje nastavak (nema provjere čvrstoće) i ne pravi podložne ploče za dijelove različite debljine.
- Kopiranje oba dijela kopira i njihov nastavak; brisanje bilo kojeg dijela briše ga.
