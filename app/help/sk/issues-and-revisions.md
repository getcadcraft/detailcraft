---
title: Problémy, revízie a denník zmien výkresov
summary: Veďte jednu históriu problémov s modelom architekta: načítajte problémy, zaznamenávajte pokyny na stavbe, dielenské výkresy a prepojené modely k problému a čítajte denník zmien výkresov.
keywords: problém, revízia, revízie, denník zmien, denník zmien výkresov, register výkresov, pokyn na stavbe, dielenský výkres, prepojený model, súťaž, stavba, história problémov, dielenské výkresy, výroba
from: 4b9a1b7b
---

## Čo budete robiť

Pracujte s rovnakou históriou problémov ako zvyšok tímu. Pozrite si, ktoré listy boli vydané v akej revízii, a zaznamenávajte to, čo sa deje na stavbe, k problému, ku ktorému to patrí.

## Postup

1. Otvorte **Problémy a revízie**.
2. Zvoľte **Načítať históriu problémov** a vyberte súbor `.issues.json` uložený z BimCraft alebo inej aplikácie. Jeho problémy a záznamy sa pridajú k vašim. Nič sa nenahradí.
3. Zvoľte **Pridať záznam** pre pokyn na stavbe, dielenský výkres, sadu poznámok, prepojený model alebo poznámku. Vyberte problém, ku ktorému patrí, a jeho stav. Súbor, ktorý zvolíte, sa zaznamená podľa názvu, veľkosti a SHA-256; súbor zostane tam, kde je.
4. **Denník zmien výkresov** zobrazuje jeden riadok pre každý list a jeden stĺpec pre každý problém. Revízia v hranatých zátvorkách bola znovu vydaná bez zmeny.
5. **Stiahnuť denník zmien (CSV)** uloží problémy, tabuľku listov a záznamy. **Uložiť históriu problémov** zapíše súbor, ktorý čítajú ostatné aplikácie.

## Dobré vedieť

- Listy sa stále vydávajú z Výkresov, list po liste. Tieto vydania sa zobrazia tu: listy vydané v jeden dátum s jednou poznámkou sú jeden problém.
- Záznamy a problémy, ktoré načítate, sa uložia do súboru modelu. Každá zmena je jeden krok Späť.
- Opakované načítanie rovnakého súboru nič nepridá dvakrát. Keď dve kópie obsahujú rovnaký záznam, ponechá sa novší.
