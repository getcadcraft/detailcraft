---
title: Tvorba dílenských výkresů
summary: Jeden list na označení dílu, vytvořený najednou: prohlédněte kterýkoli z nich a stáhněte jeden list nebo celou sadu jako PDF ve formátu A4 až A1 nebo ANSI B až D, s otvory, výřezy, kótami a razítkem.
keywords: dílenský výkres, dílenské výkresy, všechny díly, dávka, celá sada, výkres jednoho dílu, výrobní výkres, pdf, výkres detailu, výkres kusu, tisk
from: d25fe035
---

DetailCraft vytvoří jeden list pro každé označení dílu, pro každý nosník, sloupec, ztužidlo a plech v modelu, všechny najednou: nemusíte je vybírat jednotlivě. Stejné kusy mají stejné označení, takže sdílejí jeden list. Listy se vytvářejí na místě z modelu; neukládají se ani neupravují.

## Vytvoření celé sady

1. Zvolte {{ui:Dílenský výkres}} ve skupině {{ui:Výstup}}. Nic není třeba vybrat. Když je díl vybrán, okno se otevře na jeho listu. V panelu {{ui:Vlastnosti}} se stejné tlačítko jmenuje {{ui:Dílenský výkres}} pro pruty a {{ui:Výkres plechu}} pro spoje.
2. Otevře se náhled s názvem podle označení dílu, například „Dílenský výkres b1“. První seznam vedle názvu obsahuje každé označení dílu s profilem, délkou a počtem: vyberte jedno a uvidíte jeho list. Druhý seznam mění formát listu; celá sada se pak vytvoří znovu v něm (viz [Výkresy celkového uspořádání a sestav](topic:drawings#choose-the-sheet-size)).
3. Zvolte {{ui:Stáhnout vše}} (tlačítko ukazuje počet listů) pro jedno PDF se stránkou pro každé označení dílu, `<name> Shop drawings.pdf`. Každý list má v razítku „List 3 z 42“. Nebo zvolte {{ui:Stáhnout PDF}} pro list, na který se právě díváte, `<name> <mark>.pdf`.
4. Náhled zavřete křížkem × nebo klávesou {{key:Esc}}.

Pokud je {{ui:Dílenský výkres}} šedé, model zatím nemá žádné díly.

## Co je na listu

Pro profil I:

- **Pohled** na stojinu: díl s vyříznutými výřezy, otvory ve stojině jako kružnice a otvory v pásnicích jako skryté (čárkované) čáry.
- **Půdorys horní pásnice**, shora, když má některá pásnice otvory. Otvory dolní pásnice jsou čárkovány.
- **Řez** profilem.
- **Kóty:** řetězené polohy otvorů podél dílu plus celková délka, výšky otvorů ve stojině, rozchod a velikosti výřezů.
- **Seznam otvorů:** každá skupina otvorů, například „8 x Ø22 v horní pásnici“.
- **Svar**, pokud má díl k sobě svařené plechy.
- **Razítko:** označení dílu, označení sestavy, profil, materiál, délka, počet, hmotnost za kus a celková hmotnost, název modelu a datum.

Pro U-profil, L-profil nebo dutý profil je list stejný, s pohledem na stojinu nebo na bok: stěny trubky jsou skryté (čárkované) čáry, řez udává tloušťku stěny.

Pro plech: plocha plechu s otvory a jeho hrana jako řez.

## Měřítka

Měřítko se vybírá ze seznamu (1:1 až 1:200), aby se díl vešel na list. Dlouhý a mělký díl by byl při jednom měřítku příliš tenký na čtení, proto když by hloubka na papíře vyšla pod 30 mm, hloubka se kreslí v jiném (větším) měřítku než délka. Název pohledu to pak uvede, například „délka 1:20, hloubka 1:5 (ne v jednom měřítku; rozhodují kóty)“. Velikosti vždy čtěte z kót, ne měřením listu.

## Na co si dát pozor

- Množství je počet dílů s tímto označením v modelu. Označení se mohou po změně přečíslovat; viz [Kontrola označení a kusovníku](topic:marks-and-bom).
- Každý list je jeden díl sám o sobě, bez svarových značek; výkresy sestav (se svarovými značkami) a výkresy celkového uspořádání jsou v [Výkresy](topic:drawings). List nelze v DetailCraft upravit ani anotovat. Pro poznámky otevřete PDF v aplikaci pro úpravu PDF, například MarkupCraft.
- Razítko uvádí „DetailCraft lab build — millimeters“.
- Text používá standardní písmo PDF Helvetica. Znaky mimo západoevropskou sadu se vytisknou jako „?“ a stavový řádek je počítá.

## Tisk

Otevřete staženou PDF v prohlížeči PDF a vytiskněte ji na 100 % (bez „Přizpůsobit stránce“) na papír zvoleného formátu, chcete-li, aby uvedená měřítka platila. Na menším listu ji zmenšete a spolehněte se na kóty.
