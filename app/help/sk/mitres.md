---
title: Pokosové spoje
summary: Spojte dva I-profily, ktoré sa stretávajú pod uhlom: obe konce rezané v rovine, ktorá rozpoľuje uhol, s čelnými doskami, skrutkami a výstuhami, ak ich chcete.
keywords: pokos, pokosový spoj, koleno, náběh, portálový rám, hrebeň, roh, uhlový rez, šikmý rez, čelná doska, skrutkovaná čelná doska, výstuha, spojiť
from: cd8380d4
---

Pokos spája dva I-profily, ktorých konce sa stretávajú pod uhlom, napríklad koleno portálového rámu, hrebeň alebo dva nosníky otáčajúce roh v pôdoryse. DetailCraft rezá oba konce v rovine, ktorá rozpoľuje uhol medzi nimi, takže sa obe rezné plochy zhodujú. Ak chcete, pridá čelnú dosku ku každému rezanému koncu, spojí dve dosky skrutkami a vloží do každého prvku dvojicu stojinových výstuh.

## Kde to funguje

- Dva **I-profily** (IPE, HEA, HEB, W a podobné), ktorých **konce sa stretávajú v tom istom uzle**. Ktorýkoľvek prvok môže byť nakreslený v ktoromkoľvek smere.
- Uhol medzi prvkami musí byť aspoň 15°. Prvky v priamke sa odmietnu: použite [nadväzovanie](topic:splices).
- Obyčajný rez (bez dosiek) funguje bez ohľadu na to, ako sa prvky stretávajú. **Čelné dosky** vyžadujú, aby sa obe prvky stretávali v rovine ich stojín, ako pri portálovom kolene alebo hrebeni. Dva nosníky otáčajúce roh v pôdoryse sa stretávajú v rovine ich pásníc, takže dostanú iba obyčajný rez.
- Prvky rôznych veľkostí sa spájajú, ale s upozornením: ich rezné plochy sa nezhodujú.

## Pridanie pokosu

1. Vyberte dva prvky: kliknite na jeden, potom {{key:Shift}}+kliknite na druhý.
2. Zvoľte {{ui:Pokos}} v ponuke {{ui:Viac}} skupiny {{ui:Spoje}}. Otvorí sa dialóg Pokos.
3. Nastavte očíslované polia. Výkres vedľa nich sa vytvára z vašich čísel, ako píšete, a jeho očíslované kruhy ukazujú, čo každé pole nastavuje.
4. Zvoľte {{ui:Pridať pokos}}. Ak ste vybrali viac než dva prvky, každý voľný spoj medzi nimi dostane rovnaký pokos.

Ak chcete pokos neskôr zmeniť, vyberte ho (kliknite na jednu z jeho dosiek) a zvoľte {{ui:Dialóg pokosu s ukážkou}} v pravom paneli, alebo tam zmeňte jeho nastavenia priamo. Obyčajný rez nemá dosky, na ktoré by sa dalo kliknúť: vyberte jeho dva prvky a znova zvoľte {{ui:Pokos}}; dialóg sa otvorí na tomto pokose. {{ui:Použiť na podobné (n)}} skopíruje ho na každý voľný spoj medzi prvkami s rovnakými dvoma profilmi a pod rovnakým uhlom.

## Očíslované polia (mm)

| Č. | Nastavenie | Predvolené | Čo robí |
|---|---|---|---|
| 1 | Medzera medzi doskami (alebo medzi rezanými koncami) | 0 | Voľná medzera v spoji. Každá strana si drží jej polovicu |
| 2 | Čelné dosky, hrúbka dosky | zapnuté, 20 | Čelná doska zvarená okolo každého rezaného konca. Zrušte označenie pre obyčajný rez |
| 3 | Rady skrutiek, rozstup radov, rozchod, vonkajší rad | 4, 0, 0, vypnuté | Rozstup 0 rozloží rady rovnomerne medzi pásnicami. Rozchod 0 = polovica šírky dosky, najmenej 2.4 × otvor. Vonkajší rad ide do predĺženia dosky za vonkajšou pásnicou |
| 4 | Doska za vonkajšou pásnicou | 0 | Ako ďaleko dosky siahajú za vonkajšiu pásnicu, pozdĺž rezu |
| 5 | Doska za vnútornou pásnicou | 0 | To isté na vnútornej strane |
| 6 | Stojinové výstuhy, vzdialenosť za rezom | vypnuté, 50 | Dvojica v každom prvku, na oboch stranách stojiny, kolmo na prvok, toľko za jeho vzdialeným koncom rezu |
| 7 | Hrúbka výstuhy | 10 | |

Pod {{ui:Skrutky}}: priemer skrutky, otvor, trieda a prídavok dĺžky (20, 22, A325, 30), ako pri čelných doskách. Pod {{ui:Dosky a zvary}}: šírka dosky (0 = šírka pásnice), veľkosť koutového zvaru (8) a materiál dosky (A36).

## Čo dostanete

- **Rezy.** Koniec každého prvku je rezaný v jeho rovine. Jeho dĺžka v zoznamoch, výkresoch a súboroch NC je **celková dĺžka**, od jeho kolmého konca po najvzdialenejší bod rezu.
- **Dosky** patria ich vlastnému prvku: zostava každého prvku je prvok, jeho čelná doska a jeho výstuhy. Skrutky sú montážne skrutky spoja: kusovník ich počíta raz a výkres zostavy každého prvku ich uvádza ako voľné skrutky.
- **Výkresy** zobrazujú šikmé konce a dosky; dielenský výkres prvku s pokosom uvádza uhol každého rezu od kolmice.
- **Súbory NC** (DSTV) nesú uhly šikmých rezov v hlavičke, ako norma vyžaduje, a obrysy, ktoré sledujú rez. Pred rezaním ich skontrolujte vo svojom prehliadači NC, ako pri každom súbore NC.
- **IFC** orezáva vytlačenie každého prvku jeho reznou rovinou, takže iné programy zobrazia skutočný rez.
- **Značky:** prvok s pokosom je iný kus než prvok s kolmým rezom rovnakej dĺžky. Dva prvky s rovnakými rezmi zdieľajú značku, ako dva krokvy hrebeňa.

## Dobré vedieť

- Pokos zostáva živý. Presuňte alebo zmeňte veľkosť ktoréhokoľvek prvku a rez, dosky a skrutky ho nasledujú. Zmažte ktorýkoľvek prvok a pokos zmizne a koniec druhého prvku je znova kolmý.
- Upozornenia používajú rovnaké minimá EN 1993-1-8 ako ostatné spoje (vzdialenosť konca a okraja 1.2 × otvor, rozstup 2.2 × otvor, rozchod 2.4 × otvor), plus rady skrutiek príliš blízko pásnice, dosky užšie než pásnice a výstuhy bez miesta.
- Hodnoty sú východiskové, nie návrh. DetailCraft nekontroluje pevnosť spoja a nerobí náběh, zvarený pokos s tupým zvarom ani výstuhy v priamke s pásnicami druhého prvku.
