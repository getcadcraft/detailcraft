---
title: Kontrola označení a kusovníku
summary: Přečtěte si označení dílů a sestav, které DetailCraft přiřadí každému kusu, zkontrolujte kusovník a stáhněte jej jako CSV.
keywords: označení, číslování, označení dílu, označení sestavy, označení kusu, kusovník, seznam materiálu, hmotnosti, seznam šroubů, csv, číslování
from: caa2ee80
---

DetailCraft označuje model sám. Není zde žádný příkaz pro číslování a nic se nespouští: po každé změně zjistí, které díly jsou stejný kus oceli, a dá jim jedno označení.

## Kde se označení zobrazují

- Seznam {{ui:Označení dílů}} v panelu {{ui:Model}}: každé označení s profilem, délkou a počtem. Kliknutím vyberete první díl s tímto označením.
- Panel {{ui:Vlastnosti}} vybraného prutu (a seznam **Označení dílů** v levém panelu): {{ui:Označení dílu}} a {{ui:Sestava}}. Nadpis panelu také nese označení, například „Nosník b1“.
- Karta {{ui:Kusovník}}, CSV, názvy souborů NC, dílenské výkresy a export IFC (jako značka každého prvku).

## Jak se díly označují

- **Označení dílů:** c pro sloupce, b pro nosníky, br pro ztužidla, st pro tětivy schodiště, p pro plechy (včetně čelních desek a patních plechů). Pak číslo: c1, c2, b1, p1 … Když díly leží ve více fázích, číslo fáze jde první, například 2-b1.
- **Označení sestav:** C, B, BR nebo P. Sestava je hlavní prut a plechy k němu svařené, například nosník se dvěma čelními deskami nebo sloupec s patním plechem.
- Dva díly mají stejné označení, pokud mají stejný profil, materiál a délku řezu a stejné otvory a výřezy, vše v toleranci 1 mm, i když je jeden otočen z konce na konec nebo vzhůru nohama vůči druhému.
- Číslování probíhá nejdřív sloupce, pak nosníky, ztužidla a plechy; v každé skupině podle názvu profilu, nejdelší jako první.

Úplná pravidla, včetně toho, která otočení se u U-profilů a L-profilů počítají: [Pravidla označování](topic:mark-rules).

:::warning
Označení se po každé změně přepočítávají od začátku, takže se mohou přečíslovat. Přidání dílu, změna profilu nebo přidání otvoru může posunout b3 na b4. Označení považujte za konečná až po dokončení modelu a kusovník, soubory NC a dílenské výkresy vytvořte ze stejného uloženého modelu.
:::

## Čtení kusovníku

Otevřete kartu {{ui:Kusovník}} dole. Má tři tabulky.

**Díly**, s celkovou hmotností oceli v nadpisu:

| Sloupec | Význam |
|---|---|
| Označení dílu | Kliknutím vyberete první díl s tímto označením |
| Typ | nosník, sloupec, ztužidlo, tětiva nebo plech |
| Profil | Například W16x26 nebo PL20x180 |
| Materiál | Třída, kterou jste nastavili |
| Délka (mm) | Délka řezu, po spojích |
| Počet | Kolik kusů |
| Hmotnost za kus (kg) | Hmotnost profilu na metr × délka |
| Celková hmotnost (kg) | Hmotnost za kus × počet |

Poslední řádek uvádí celkový počet a hmotnost.

**Sestavy:** každé označení sestavy, její hlavní díl, všechny její díly (například „b1 + p1 + p1“), počet, hmotnost za kus a celková hmotnost.

**Šrouby a kotevní tyče:** seskupené podle druhu, průměru, délky a třídy, s počtem.

:::note
Hmotnosti jsou hrubé: otvory a výřezy se neodečítají. Šrouby, matice, podložky a svary nejsou v hmotnosti oceli.
:::

## Stažení

Zvolte {{ui:Stáhnout CSV}} na kartě, nebo {{ui:Kusovník}} ve skupině {{ui:Výstup}}. Soubor `<name> BOM.csv` obsahuje tři tabulky za sebou, každou pod svým nadpisem, s prázdným řádkem mezi nimi. Otevře se v jakémkoli tabulkovém procesoru.

## Kontrola před odesláním

1. Otevřete kartu {{ui:Problémy}} a odstraňte každý řádek. Spoj, který nešlo vytvořit, nepřidá plech, otvory ani šrouby, takže kusovník by byl neúplný.
2. Hledejte neočekávaná označení. Dva nosníky, které považujete za stejné, ale mají různá označení, se obvykle liší otvorem, výřezem nebo délkou řezu; vyberte každý a porovnejte je.
3. Uložte model a pak proveďte všechny exporty z tohoto uloženého stavu.
