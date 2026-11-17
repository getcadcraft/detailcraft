---
title: Kontroly zhotovitelnosti
summary: Problémy pro věci, které detailér zachytí pohledem: šroub, který klíč nedosáhne, šrouby příliš blízko pro nástrčný klíč, koutové svary mimo jejich mezní velikosti, svary, ke kterým hořák nedosáhne, a trubky, které drží vodu.
keywords: zhotovitelnost, klíč, nástrčný klíč, přístup ke šroubu, utahování, velikost svaru, koutový svar, minimální svar, maximální svar, voda, odvzdušňovací otvor, odvodňovací otvor, žárové zinkování, duté profily, problémy
from: 72315151
---

DetailCraft hledá čtyři druhy potíží, které žádná pevnostní kontrola nenajde, a vypisuje je v panelu {{ui:Problems}}. Jsou to varování a poznámky, na které se má podívat, ne chyby: model se postaví dál.

## Šroub, který klíč nedosáhne

U každého šroubu DetailCraft nasadí nástrčku na hlavu a na matici. Nástrčka je válec široký jako matice přes rohy plus stěna 4 mm, dlouhý 60 mm. Pokud uvnitř tohoto válce stojí stojina nosníku, příruba, plech nebo ztužidlo, problém uvede spoj, počet šroubů, který díl překáží, a jak daleko od šroubu je.

Nástrčka je typická rázová nástrčka. Klíč potřebuje méně místa a větší nástroj více. Požádejte připojeného asistenta, ať spustí `constructability_check` s jiným `socketLength`, a uvidíte, jak se odpověď změní.

## Šrouby příliš blízko pro nástrčku

Nástrčka na jednom šroubu se nesmí dotýkat hlavy dalšího. Šrouby spoje, které jsou blíž než šířka nástrčky plus hlava souseda, jsou vypsány se zjištěnou roztečí a potřebnou roztečí.

## Velikosti koutových svarů

AISC 360-16 tabulka J2.4 stanoví nejmenší koutový svar podle tloušťky tenčí části (3 mm až do tloušťky 6.35 mm, 5 mm do 12.7, 6 mm do 19.05, 8 mm nad to), a J2.2b největší podél hrany materiálu: nejvýše tolik, kolik je materiál, je-li tenčí než 6.35 mm, jinak o 1.6 mm méně. Spoje se stejnou velikostí na stejné tloušťce jsou vypsány jako jeden problém.

Použitá tloušťka je nejtenčí díl, který svar jmenuje, takže 8 mm svar po celém obvodu nosníku se stojinou 6.35 mm je vypsán.

## Voda a odvětrání

- **Otevřený horní konec** dutého profilu, který stojí svisle nebo má sklon větší než 10°, pouští dovnitř déšť.
- Dutý profil **uzavřený na obou koncích** potřebuje odvzdušňovací a odvodňovací otvor; žárové zinkování i tlak ohřátého vzduchu jeden takový vyžadují.

## Dosáhne svářeč ke svaru?

Koutový svar se dělá s hořákem uprostřed mezi dvěma plochami, které spojuje. U každého koutového svaru po celém obvodu (čelní deska, patní plech, pokosový plech) kontrola vezme obrys průřezu členu u plechu a každých 20 mm vede dráhu hořáku pod úhlem 45° od místa, kde jeho tryska (zpočátku poloměr 10 mm) poprvé uvolní obě plochy, o dalších 30 mm. Pokud dráha narazí na vlastní přírubu nosníku nebo na jiný díl, je tato část svaru vypsána s dílem a vzdáleností. Tato čísla jsou typická, nejsou z normy: zeptejte se svého zhotovitele na postup a trysku. Svary podél dvou hran (smykový plech) nejsou lokalizovány a nekontrolují se.
