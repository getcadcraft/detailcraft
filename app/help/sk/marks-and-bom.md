---
title: Kontrola značiek a kusovníka
summary: Prečítajte si značky dielcov a zostáv, ktoré DetailCraft dáva každému kusu, skontrolujte kusovník a stiahnite ho ako CSV.
keywords: značky, číslovanie, značka dielca, značka zostavy, značka kusu, bom, kusovník, zoznam materiálu, hmotnosti, zoznam skrutiek, csv, číslovanie
from: caa2ee80
---

DetailCraft označuje model sám. Nie je tu žiadny príkaz na číslovanie a nič nespúšťate: po každej zmene zistí, ktoré dielce sú rovnaký kus ocele, a dá im jednu značku.

## Kde sa značky zobrazujú

- Zoznam {{ui:Part marks}} v paneli {{ui:Model}}: každá značka s profilom, dĺžkou a počtom. Kliknutím vyberiete prvý dielec s touto značkou.
- Panel {{ui:Properties}} vybraného prvku (a zoznam **Značky dielcov** v ľavom paneli): {{ui:Part mark}} a {{ui:Assembly}}. Nadpis panelu tiež nesie značku, napríklad „Nosník b1“.
- Karta {{ui:Bill of materials}}, CSV, názvy súborov NC, dielenské výkresy a export IFC (ako označenie každého prvku).

## Ako sa dielce označujú

- **Značky dielcov:** c pre stĺpy, b pre nosníky, br pre diagonály, st pre bočnice schodov, p pre dosky (vrátane čelných a pätných dosiek). Potom číslo: c1, c2, b1, p1 … Keď dielce sedia vo viacerých fázach, najskôr príde číslo fázy, napríklad 2-b1.
- **Značky zostáv:** C, B, BR alebo P. Zostava je hlavný prvok a dosky k nemu zvarené, napríklad nosník s dvoma čelnými doskami alebo stĺp s pätnou doskou.
- Dva dielce zdieľajú značku, keď majú rovnaký profil, materiál a rezanú dĺžku a rovnaké otvory a vyrezania, všetko v rámci 1 mm, aj keď je jeden otočený naopak alebo hore nohami voči druhému.
- Číslovanie ide najprv stĺpy, potom nosníky, diagonály a dosky; v rámci každého podľa názvu profilu, najdlhší prvý.

Úplné pravidlá vrátane toho, ktoré otočenia sa počítajú pri U-profiloch a uholníkoch: [Pravidlá značenia](topic:mark-rules).

:::warning
Značky sa po každej zmene počítajú nanovo, takže sa môžu prečíslovať. Pridanie dielca, zmena profilu alebo pridanie otvoru môže posunúť b3 na b4. Značky považujte za konečné až po dokončení modelu a kusovník, súbory NC a dielenské výkresy vytvorte z toho istého uloženého modelu.
:::

## Čítanie kusovníka

Otvorte kartu {{ui:Bill of materials}} dole. Má tri tabuľky.

**Dielce**, s celkovou hmotnosťou ocele v nadpise:

| Stĺpec | Význam |
|---|---|
| Part mark | Kliknutím vyberiete prvý dielec s touto značkou |
| Type | nosník, stĺp, diagonála, bočnica alebo doska |
| Profile | Napríklad W16x26 alebo PL20x180 |
| Material | Trieda, ktorú ste nastavili |
| Length (mm) | Rezaná dĺžka po spojoch |
| Count | Koľko kusov |
| Unit weight (kg) | Hmotnosť profilu na meter × dĺžka |
| Total weight (kg) | Hmotnosť na kus × počet |

Posledný riadok uvádza celkový počet a hmotnosť.

**Zostavy:** každá značka zostavy, jej hlavný dielec, všetky jej dielce (napríklad „b1 + p1 + p1“), počet, hmotnosť na kus a celková hmotnosť.

**Skrutky a kotevné tyče:** zoskupené podľa druhu, priemeru, dĺžky a triedy, s počtom.

:::note
Hmotnosti sú hrubé: otvory a vyrezania sa neodpočítavajú. Skrutky, matice, podložky a zvary nie sú v hmotnosti ocele.
:::

## Stiahnutie

Zvoľte {{ui:Download CSV}} na karte alebo {{ui:BOM}} v skupine {{ui:Output}}. Súbor `<name> BOM.csv` obsahuje tri tabuľky za sebou, každú pod jej nadpisom, s prázdnym riadkom medzi nimi. Otvorí sa v ľubovoľnom tabuľkovom programe.

## Kontrola pred odoslaním

1. Otvorte kartu {{ui:Problems}} a vyriešte každý riadok. Spoj, ktorý sa nedal vytvoriť, nepridá dosku, otvory ani skrutky, takže kusovník by bol kratší.
2. Hľadajte neočakávané značky. Dva nosníky, ktoré pokladáte za rovnaké, ale s rôznymi značkami, sa zvyčajne líšia otvorom, vyrezaním alebo rezanou dĺžkou; vyberte každý a porovnajte.
3. Uložte model a potom urobte všetky exporty z tohto uloženého stavu.
