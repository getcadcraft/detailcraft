---
title: Správa o materiáli a hmotnosti podľa fáz
summary: Dĺžky rezov, počty, hmotnosti a plochy náterov pre každú fázu, vrátane jej skrutiek a výstuže, ako tabuľka, CSV alebo PDF.
keywords: správa, hmotnosť, kg, náter, plocha náteru, povrch, dĺžka rezu, zoznam materiálu, fáza, kusovník, csv, pdf
from: 337d6d92
---

V skupine {{ui:Výstup}} otvorte {{ui:Viac}} a zvoľte {{ui:Správa o hmotnosti podľa fáz}}, alebo otvorte kartu {{ui:Podľa fáz}} pod zobrazením. Zobrazuje:

- **Súhrn podľa fáz**: pre každú fázu počet dielov, hmotnosť ocele, plochu náteru, skrutky a kotevné tyče a výstuž; potom súčty.
- **Jedna tabuľka na fázu**: každá značka dielu v nej s typom, profilom, materiálom, dĺžkou rezu, počtom, hmotnosťou kusa, hmotnosťou a plochou náteru; potom jej skrutky a kotevné tyče.

{{ui:Stiahnuť CSV}} uloží tie isté tabuľky do jedného CSV súboru (`<name> weight report.csv`). {{ui:Stiahnuť PDF}} vytvorí správu na formáte z [nastavení DetailCraft](topic:settings#drawings), so súhrnom na začiatku, každou fázou za ním, dlhými tabuľkami prenesenými na ďalšiu stranu a očíslovaním každej strany.

## Ako sa počítajú údaje

- **Hmotnosti** sú hrubé, ako v kusovníku: hmotnosť profilu na meter krát dĺžka rezu. Otvory a zárezy sa neodpočítavajú.
- **Plocha náteru** je vonkajšia strana prierezu pozdĺž dĺžky rezu: pri profile I každá plocha pásnic a stojiny, pri plechu obidve strany a hrany, pri rúre len vonkajšok. Konce a otvory sa nepočítajú.
- **Výstuž** je hmotnosť prútov v základoch fázy, z [výkazu výstuže](topic:footings-and-rebar).
- Plechy a skrutky spoja sa počítajú vo fáze jeho hlavného prvku. Pozri [Fázy](topic:phases).

Pri zapnutých [značkách podľa fáz](topic:phases#marks-per-phase) má každá fáza vlastné značky (1-b1, 2-b1). Pri vypnutých sa značka môže objaviť vo viacerých fázach: každá fáza uvádza kusy, ktoré má.
