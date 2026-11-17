---
title: Smykové plechy
summary: Přišroubujte stojinu nosníku k plechu svařenému v dílně k přírubě nebo stojině sloupu, také tam, kde se nosník setkává se sloupem pod úhlem v půdorysu nebo ve sklonu.
keywords: smykový plech, jednoduchý plech, žebrový plech, jednoduchý spoj, spoj stojiny, šikmý, zkosený, skloněný, nosník pod úhlem, šroubovaný, spojit
from: 18afc8ab
---

Smykový plech (jednoduchý plech, žebrový plech) je plech svařený se sloupem v dílně; na stavbě se stojina nosníku přišroubuje k němu jednou svislou řadou šroubů. DetailCraft umístí plech, zkrátí nosník tak, aby byl volný od sloupu, vyvrtá otvory v plechu a ve stojině nosníku, přidá šrouby a svar, a varuje před vzdálenostmi od okrajů a usazením.

## Kde funguje

- Nosník (I-profil nebo U-profil), jehož konec leží na ose **svislého** I-profilu sloupu a dotýká se jeho **příruby** nebo **stojiny**.
- **Kolmý, zkosený v půdorysu nebo skloněný**: plech sleduje stojinu nosníku a nosník se zkrátí tak, aby jeho nejbližší roh zachoval mezeru ke sloupu. Nosník stoupající nebo klesající pod více než 60° se odmítne.

## Přidání smykových plechů

1. Vyberte nosník.
2. Ve skupině {{ui:Spojit}} otevřete {{ui:Více}} a zvolte {{ui:Smykové plechy}} (nebo zvolte {{ui:Přidat smykové plechy}} v panelu {{ui:Vlastnosti}}).
3. Každý volný konec nosníku, který se setkává se sloupem, dostane plech. Každý konec nosníku přijme jeden spoj: smykový plech, nebo čelní desku.

Vyberte plech (klikněte na něj nebo na šroub), abyste viděli a změnili jeho nastavení. {{ui:Použít na podobné}} jej zkopíruje jako smykový plech na každý podobný spoj, který ještě žádný spoj nemá.

## Nastavení (mm)

| Nastavení | Začíná na | Význam |
|---|---|---|
| Tloušťka plechu | 10 | Tloušťka plechu |
| Šířka plechu | 115 | Jak daleko plech vystupuje z líce sloupu, podél nosníku |
| Průměr šroubu, průměr otvoru, jakost šroubu | 20, 22, A325 | Jako u čelních desek |
| Řady šroubů, rozteč řad | 3, 75 | Šrouby ve svislé řadě |
| Vzdálenost od okraje (horní a spodní šrouby) | 38 | Od horních a spodních šroubů ke koncům plechu; plech je hluboký řady × rozteč + 2 × tato hodnota |
| Skupina šroubů posunutá o | 0 | 0 vycentruje šrouby na hloubku nosníku |
| Mezera ke sloupu | 13 | Volná mezera mezi sloupem a nejbližším rohem nosníku |
| Osa šroubů od líce sloupu | 65 | Podél nosníku, od líce sloupu k šroubům |
| Přídavek délky šroubu | 30 | Přidá se k upnutí (plech + stojina nosníku), zaokrouhleno nahoru na 5 mm |
| Velikost koutového svaru | 6 | Na obou stranách plechu ke sloupu |

## Dobré vědět

- Plech je součástí sestavy sloupu (svařen v dílně); sestava nosníku má jen své otvory.
- Šikmý nebo skloněný nosník se zkrátí dál než kolmý, aby jeho nejbližší roh zachoval mezeru. DetailCraft řeže nosníky kolmo: zhotovitel konec upraví. Hrana plechu u sloupu je také kreslena kolmo.
- DetailCraft nekontroluje pevnost. Varování používají minima z EN 1993-1-8, tabulka 3.3, pro vzdálenosti od okrajů a rozteče, a říkají, když je plech hlubší než stojina nosníku mezi jeho zaobleními, nebo když šrouby sedí příliš blízko řezaného konce nosníku.
- [Kontrola kolizí](topic:clash-check) nehlásí plech a prvky, které spojuje, jako kolizi: mají se setkat.
