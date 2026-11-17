---
title: Pripojenie nosníkov na stĺpy pomocou čelných dosiek
summary: Pridajte skrutkované čelné dosky tam, kde nosník spája prírubu alebo stojinu stĺpa, nastavte dosku, skrutky a zvar a skopírujte spoj na každý podobný uzol.
keywords: čelná doska, endplate, momentový spoj, skrutkový spoj, spoj, skrutky, zvar, predĺžená čelná doska, zarovnaná, podobné, kopírovať spoj, komponent
from: 21e028b2
---

Spoj čelnou doskou privarí dosku ku koncu nosníka a priskrutkuje ju k prírube alebo stojine stĺpa. DetailCraft umiestni dosku, orezá nosník, vyvŕta zodpovedajúce otvory v doske a v prírube stĺpa, pridá skrutky a zvar a skontroluje okrajové vzdialenosti a rozstupy.

:::warning
DetailCraft nenavrhuje spoje. Nastavenia sú počiatočné hodnoty, ktoré môžete zmeniť; nič nekontroluje pevnosť. Upozornenia na okraje a rozstupy používajú minimá z EN 1993-1-8, tabuľka 3.3, ktoré sa môžu líšiť od pravidiel, podľa ktorých pracujete.
:::

## Čo sa dá spojiť

- Vodorovný nosník (oba konce v rovnakej výške), kolmý (rotácia 0), s I-profilom.
- Do **príruby** alebo **stojiny** zvislého I-stĺpa, kolmo naň.
- Koniec nosníka musí ležať na osi stĺpa, medzi spodkom a vrchom stĺpa.

Šikmé alebo sklonené nosníky a neprofilové prierezy sú odmietnuté s dôvodom: pre ne použite [shear tabs](topic:shear-tabs). Na stojine sa doska a pásnice nosníka musia zmestiť medzi pásnice stĺpa; DetailCraft varuje, keď sa nezmestia.

:::tip
Pri rotácii 0 smerujú pásnice stĺpa pozdĺž číslovaného smeru mriežky (x). Nosník idúci od A po B narazí na stojinu a dostane čelnú dosku na stojine.
:::

## Pridanie čelných dosiek k nosníku

1. Zvoľte {{ui:Vybrať}} ({{key:V}}) a kliknite na nosník.
2. Zvoľte {{ui:Čelné dosky}} v skupine {{ui:Spoje}}, alebo {{ui:Pridať čelné dosky}} na paneli {{ui:Vlastnosti}}.
3. Každý voľný koniec nosníka, ktorý štvorcovo narazí na prírubu alebo stojinu stĺpa, dostane dosku. Stavový riadok hovorí: „Pridané 2 čelné dosky. Vyberte jednu a zmeňte jej dosku, skrutky a zvar; Podobné ju skopíruje na podobné spoje.“
4. Prvá nová čelná doska je vybraná a jej nastavenia sú na paneli {{ui:Vlastnosti}}.

Ak sa nič nestane, prečítajte stavový riadok:

- „Tento nosník nekončí na osi stĺpa. Čelné dosky sa umiestňujú tam, kde koniec nosníka narazí na zvislý stĺpec.“
- „Tento nosník naráža na stĺpec pod uhlom alebo je sklonený: čelné dosky sú navrhnuté pre štvorcové, vodorovné spoje. Použite Shear tabs.“
- „Oba konce už majú spoje.“

## Zmena dosky, skrutiek a zvaru

Kliknite na čelnú dosku (alebo na jednu z jej skrutiek) a vyberte spoj. Pod {{ui:Doska, skrutky a zvar (mm)}}:

| Nastavenie | Predvolené | Čo robí |
|---|---|---|
| Hrúbka dosky | 20 | Hrúbka dosky; tiež koľko je nosník orezaný za prírubou |
| Šírka dosky | 180 | Naprieč spojom |
| Predĺženie nad nosníkom | 0 | Nad hornou prírubou; nad 0 vznikne predĺžená čelná doska |
| Predĺženie pod nosníkom | 0 | Pod spodnou prírubou |
| Priemer skrutky | 20 | Menovitá veľkosť skrutky |
| Priemer otvoru | 22 | Vaša vôľa otvoru v doske a v prírube stĺpa |
| Trieda skrutky | A325 | Text; vytlačí sa v kusovníku |
| Počet radov skrutiek | 4 | Rady po dvoch skrutkách, vycentrované na výšku dosky |
| Rozstup radov | 75 | Zvislý rozstup radov |
| Rozchod | 100 | Vodorovný rozstup dvoch skrutiek v rade |
| Prídavok dĺžky skrutky | 30 | Pripočíta sa k zovretiu na maticu, podložku a závit; pozri nižšie |
| Veľkosť rohového zvaru | 8 | Okolo celého konca nosníka |
| Materiál dosky | A36 | Text |

Zadajte novú hodnotu a stlačte {{key:Enter}} alebo {{key:Tab}}. Doska, otvory, skrutky a rezná dĺžka nosníka sa hneď aktualizujú. Každá zmena je jeden krok späť.

Pod nastaveniami vidíte, čo spoj vytvára:

- {{ui:Skrutky}}: napríklad „8 × 20 × 70 A325 (zovretie 36.2)“.
- {{ui:Zvar}}: veľkosť, kde a jeho dĺžka.
- {{ui:Doska}}: jej rozmer a jej značka dielu.

### Ako sa počítajú čísla

- Nosník sa orezáva o polovicu hĺbky stĺpa (na stojine o polovicu hrúbky stojiny) plus hrúbka dosky, aby doska ležala na čele.
- Výška dosky je hĺbka nosníka plus obe predĺženia.
- Dĺžka skrutky = zovretie (hrúbka dosky + hrúbka príruby alebo stojiny stĺpa) + prídavok, zaokrúhlené nahor na najbližších 5 mm.
- Zobrazená dĺžka zvaru je obvod prierezu nosníka.

### Upozornenia

Spoj sa stále vytvorí, ale tieto sa zobrazia pod ním a na karte {{ui:Problémy}}:

- Rady skrutiek alebo skrutky bližšie k okraju dosky než 1.2 × priemer otvoru.
- Rozstup radov pod 2.2 × priemer otvoru, alebo rozchod pod 2.4 × priemer otvoru.
- Otvory, ktoré zasahujú do stojiny stĺpa alebo jej zaoblenia, alebo mimo prírubu stĺpa.
- Doska širšia než príruba stĺpa, alebo (na stojine) širšia než priestor medzi prírubami; pásnice nosníka, ktoré sa medzi nimi nezmestia.
- Rad skrutiek príliš blízko k prírube nosníka, alebo rozchod príliš tesný pre stojinu nosníka a jej zvar.

## Skopírovanie na každý podobný spoj

1. Vyberte spoj, ktorý ste nastavili.
2. Zvoľte {{ui:Použiť na podobné (n)}} na paneli {{ui:Vlastnosti}}, alebo {{ui:Podobné}} v ponuke {{ui:Viac}} skupiny {{ui:Spoje}}. Číslo v zátvorke je počet spojov, ktoré ho dostanú.
3. Každý spoj s rovnakým profilom nosníka a stĺpa, s nosníkom do rovnakého druhu plochy, ktorý ešte nemá spoj, dostane kópiu s rovnakými nastaveniami. Stavový riadok povie, koľko ich bolo.

Kópie sú nezávislé: zmena jednej neovplyvní ostatné. Spoje, ktoré už majú spoj, sa nechávajú na pokoji; ak ich chcete nahradiť, najprv ich zmažte.

## Presúvanie a mazanie

Spoje sa znova vytvoria z ich nastavení vždy, keď sa model zmení, takže presun alebo zmena veľkosti nosníka či stĺpa prenesie aj jeho čelné dosky. Ak zmena znamená, že spoj už nesedí, spoj zostane v modeli a karta {{ui:Problémy}} povie prečo, napríklad „Koniec nosníka už nie je na osi stĺpa.“

Na zmazanie spoja ho vyberte a stlačte {{key:Delete}}. Zmazanie nosníka alebo stĺpa zmaže aj ich spoje.

Ďalej: [Pridanie pätných dosiek a kotevných tyčí](topic:base-plates).
