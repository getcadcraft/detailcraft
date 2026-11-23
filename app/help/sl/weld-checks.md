---
title: Preverite vare, kjer se elementi stikajo
summary: Po preverjanju dimenzioniranja preizkusite kotne in čelne vare okoli vsakega elementa tam, kjer se stika z drugim elementom ali podporo, po AISC 360-16, poglavje J, ali EN 1993-1-8 ter poglejte, katera skupina varov je najbolj izkoriščena in pri kateri kombinaciji. Pripomoček, dokler elemente ne pregleda inženir.
keywords: var, vari, preverjanje varov, kotni var, čelni var, polna penetracija, AISC 360, EN 1993-1-8, skupina varov, izkoriščenost, nosilnost, spoj, povezava, konstrukcijsko, inženir
from: e8eebbe6
---

Blok {{ui:Preverjanje varov}} na zavihku {{ui:Analiza}}, pod {{ui:Preverjanja dimenzioniranja}}, vzame sile zadnjega rešenega okvirja in kombinacije nosilnosti, ki ste jih sestavili, ter preizkusi var okoli vsakega elementa na vsakem spoju: tam, kjer element stika drug element ali stoji na podpori.

:::warning
To je **pripomoček, dokler ga ne pregleda inženir**. Preverja var, narisan okoli celotnega prereza kot eno skupino, iz lastnih končnih sil okvirja. Ne prebere velikosti ali dolžine varov, narisanih v delavniških risbah, in ne preverja vijakov, pločevin, obremenitev na ležišču, bločnega striga ali vzvodnega učinka. Njegovi rezultati niso žig odobritve.
:::

## Zaženite ga

1. Rešite okvir na zavihku {{ui:Analiza}}, izberite {{ui:Projektni predpis}} v {{ui:Preverjanja dimenzioniranja}} in nato pritisnite {{ui:Sestavi kombinacije}} (preverjanje varov potrebuje enake kombinacije nosilnosti).
2. V {{ui:Preverjanje varov}} nastavite {{ui:Kateta kotnega vara (mm, 0 = stena, največ 8)}}. 0 pomeni, da kateta sledi tanjši steni prereza, vendar največ 8 mm. Po predpisu AISC je {{ui:Trdnost kovine vara F_EXX (MPa)}} trdnost kovine vara (482.6 MPa je elektroda E70). Po EN 1993 razred jekla določi trdnost kovine vara in korelacijski faktor.
3. Pritisnite {{ui:Preveri vare}}.

Vsaka vrstica tabele je ena skupina varov (konec spoja elementa). Številke: **izkoriščenost** odločilnega preverjanja, stanje (izpolnjuje ali ne izpolnjuje) ter katero preverjanje in člen sta bila odločilna pri kateri kombinaciji. Skupina, ki je preverjanje ne more presoditi, pove razlog (ni razreda jekla, ni korelacijskega faktorja za razred v EN 1993-1-8, tabela 4.1, na tem prerezu ni vara) namesto številke.

Če spremenite katet ali kovino vara ali uredite model, se tabela izbriše, ker je veljala za stare vrednosti. Znova pritisnite {{ui:Preveri vare}}.

## Kaj se preverja

- **ASCE 7 + AISC 360:** kovina kotnega vara (kot obremenitve glede na var se upošteva, J2.4), strig osnovnega materiala (J4.2) in čelni vari s polno penetracijo (tabela J2.5).
- **EN 1990 + EN 1993:** kotni vari po poenostavljeni metodi EN 1993-1-8, 4.5.3.3, in čelni vari po 4.7.1.
- Opozorila o detajliranju glede na najmanjšo in največjo katet ter najmanjšo dolžino, z vrednostjo, s katero so bila primerjana.

Skupina varov se obravnava kot linijski prerez in jo obremeni elastična vektorska metoda: vsak del vara prevzame silo iz osne sile elementa, obeh strižnih sil, torzije in obeh upogibnih momentov, seštetih kot vektorji.

## Kaj ni preverjeno

Niso izdelani: vari s delno penetracijo, poševni kotni vari, zatični in režni vari, prekinjeni vari, metoda trenutnega središča, usmerjena metoda EN, utrujanje in bločni strig osnovnega materiala. Nekatere konstante standardov so bile zapisane po standardih in še niso primerjane s tiskano izdajo; poročilo navaja, od kod prihaja vsaka številka ({{ui:Poročilo (PDF)}} dobi tabele varov, ko preverjanje opravite). Glejte [Preverite jeklene elemente](topic:design-checks) in [Še ni izdelano](topic:not-built-yet).
