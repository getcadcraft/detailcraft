---
title: Nastavci
summary: Spojite dva dijela grede ili kraja stupa od kraja do kraja vijčanim pokrovnim pločama pojasnica i hrbata.
keywords: nastavak, nastavak grede, nastavak stupa, pokrovna ploča, nastavna ploča, ploča pojasnice, ploča hrbata, vijčani nastavak, spoj, dizanje, povezivanje
from: 97d141c2
---

Vijčani nastavak spaja dva dijela jednog I-profila od kraja do kraja: pokrovna ploča s vanjske strane svake pojasnice i ploča s obje strane hrbata, pričvršćene vijcima kroz oba dijela. DetailCraft reže dijelove do razmaka, postavlja četiri ploče, buši rupe u pločama i u oba dijela, dodaje vijke i upozorava na udaljenosti do ruba, razmake i uklapanje.

## Gdje radi

- Dvije grede ili dva nastavka stupa **istog I-profila** koji se spajaju **od kraja do kraja u liniji**: krajevi najviše 50 mm udaljeni, dijelovi paralelni i na jednoj liniji (unutar 1 mm). Svaki dio može biti nacrtan u bilo kojem smjeru.
- Vodoravni, nagnuti i okomiti dijelovi rade podjednako.
- Dva dijela različite visine ili širine pojasnice se odbijaju, kao i U-profili, kutnici i cijevi.

## Dodavanje nastavaka

1. Nacrtajte dva dijela tako da se spoje od kraja do kraja. Da biste podijelili element koji je već nacrtan, nacrtajte ga ponovno kao dva dijela.
2. Odaberite jedan (ili oba) i odaberite {{ui:Nastavak}} u izborniku {{ui:Više}} u grupi {{ui:Povezivanje}}.
3. Svaki slobodni spoj odabranih dijelova s drugim dijelom istog profila dobiva nastavak. Statusna traka kaže koliko ih je.

Odaberite nastavak (kliknite jednu od njegovih ploča) da biste promijenili postavke u desnoj ploči. {{ui:Primijeni na slično (n)}} kopira ga na svaki drugi slobodni spoj između dijelova istog profila.

## Postavke (mm)

| Postavka | Zadano | Što radi |
|---|---|---|
| Razmak između krajeva | 10 | Svaki dio se skraćuje za polovicu |
| Promjer vijka, rupa, razred, dodatak duljine | 20, 22, A325, 30 | Kao kod čeonih ploča |
| Debljina pojasne ploče | 12 | Ploča je jednako široka kao pojasnica |
| Redovi vijaka pojasnice (sa svake strane) | 3 | Redovi preko pojasnice sa svake strane spoja |
| Korak vijaka pojasnice | 75 | Duž elementa |
| Razmak vijaka pojasnice | 0 | Između dviju linija vijaka; 0 = širina pojasnice minus 80 |
| Udaljenost krajeva pojasnice | 40 | Od kraja elementa do prvog vijka i od zadnjeg vijka do kraja ploče |
| Debljina ploče hrbata | 8 | Po jedna sa svake strane hrbata |
| Redovi vijaka hrbata | 3 | Uz hrbat, centrirano |
| Stupci vijaka hrbata (sa svake strane) | 2 | Duž elementa sa svake strane spoja |
| Korak vijaka hrbata, uz hrbat / duž elementa | 75, 75 | |
| Udaljenost krajeva hrbata | 40 | Kao kod pojasnica |
| Visina ploče hrbata | 0 | 0 = slobodni hrbat između zaobljenja, minus 10 na vrhu i dnu |
| Materijal ploče | A36 | Tekst |

Duljine ploča slijede iz vijaka: pojasna ploča = razmak + 2 × (2 × udaljenost krajeva + (redovi − 1) × korak); ploče hrbata jednako sa svojim stupcima. Sa zadanim vrijednostima pojasne ploče su duge 470.

## Dobro je znati

- Ploče pripadaju **prvom nacrtanom dijelu** od dva (u njegovim svojstvima zove se prvi dio): prikazuju se na njegovom crtežu sklopa i isporučuju se s njim, vijčano, a ne zavareno. Crtež sklopa drugog dijela prikazuje samo njegove rupe.
- Vijci pojasnice hvataju pojasnicu i njezinu ploču; vijci hrbata hvataju hrbat i obje ploče hrbata. Duljine vijaka navedene su zasebno u svojstvima.
- Upozorenja koriste iste najmanje vrijednosti EN 1993-1-8 kao i ostali spojevi (udaljenost krajeva i ruba 1.2 × rupa, korak 2.2 × rupa duž elementa i 2.4 × rupa poprijeko), uz to ploča hrbata dublja od slobodnog hrbata i vijci pojasnice preblizu hrbatu za zaobljenje.
- DetailCraft ne projektira nastavak (nema provjere nosivosti) i ne izrađuje podložne ploče za dijelove različite debljine.
- Kopiranje oba dijela kopira i njihov nastavak; brisanje bilo kojeg dijela briše ga.
