---
title: Išleidimai, revizijos ir brėžinių pakeitimų žurnalas
summary: Laikykite vieną išleidimų istoriją kartu su architekto modeliu: nuskaitykite išleidimus, įrašykite statybvietės nurodymus, dirbtuvių brėžinius ir susietus modelius pagal išleidimą bei skaitykite brėžinių pakeitimų žurnalą.
keywords: išleidimas, revizija, revizijos, pakeitimų žurnalas, brėžinių pakeitimų žurnalas, brėžinių registras, statybvietės nurodymas, dirbtuvių brėžinys, susietas modelis, pasiūlymas, statyba, išleidimų istorija, dirbtuvių brėžiniai, gamyba
from: 4b9a1b7b
---

## Ką darysite

Dirbkite su ta pačia išleidimų istorija, kaip ir visa komanda. Žiūrėkite, kurie lapai išleisti kuria revizija, ir susiekite tai, kas vyksta statybvietėje, su išleidimu, kuriam tai priklauso.

## Žingsniai

1. Atidarykite **Išleidimai ir revizijos**.
2. Pasirinkite **Nuskaityti išleidimų istoriją** ir nurodykite `.issues.json` failą, įrašytą iš BimCraft ar kitos programos. Jo išleidimai ir įrašai pridedami prie jūsų. Nieko nepakeičiama.
3. Pasirinkite **Pridėti įrašą** statybvietės nurodymui, dirbtuvių brėžiniui, žymėjimų rinkiniui, susietam modeliui ar pastabai. Nurodykite išleidimą, kuriam jis priklauso, ir jo būseną. Pasirinktas failas įrašomas pagal savo pavadinimą, dydį ir SHA-256; pats failas lieka ten, kur buvo.
4. **Brėžinių pakeitimų žurnalas** rodo po vieną eilutę kiekvienam lapui ir po vieną stulpelį kiekvienam išleidimui. Revizija laužtiniuose skliaustuose reiškia, kad ji buvo išleista iš naujo be pakeitimų.
5. **Atsisiųsti pakeitimų žurnalą (CSV)** išsaugo išleidimus, lapų lentelę ir įrašus. **Įrašyti išleidimų istoriją** sukuria failą, kurį skaito kitos programos.

## Verta žinoti

- Lapai vis dar išleidžiami iš {{ui:Drawings}}, lapas po lapo. Tie išleidimai rodomi čia: lapai, išleisti vienai datai su viena pastaba, sudaro vieną išleidimą.
- Įrašai ir išleidimai, kuriuos nuskaitėte, įrašomi modelio faile. Kiekvienas pakeitimas atšaukiamas vienu **Anuliuoti**.
- Nuskaičius tą patį failą du kartus, nieko nepridedama dvigubai. Kai dvejose kopijose yra tas pats įrašas, paliekama naujesnė.
