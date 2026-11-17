---
title: Pravidla označení
summary: Přesně kdy dva díly nebo dvě sestavy sdílejí označení, jak se označení číslují a jak fungují označení patek a prutů.
keywords: označení, číslování, označení dílu, označení sestavy, označení kusu, předpona, tolerance, shodné díly, označení prutů, označení patek
from: ce02c98e
---

DetailCraft přepočítá každé označení po každé změně. Nic se neukládá, takže označení vždy popisují model tak, jak je nyní. Jak je používat, viz [Kontrola označení a kusovníku](topic:marks-and-bom).

## Označení dílů

Dva díly sdílejí označení dílu, když se shodují všechna tato kritéria:

1. Typ dílu (nosník, sloup, ztužidlo nebo plech).
2. Název profilu (nerozlišuje velká a malá písmena).
3. Materiál (nerozlišuje velká a malá písmena).
4. Délka řezu v toleranci 1 mm.
5. Každý otvor: stěna, poloha podél a napříč v toleranci 1 mm, a průměr v toleranci 0.1 mm.
6. Každý výřez: konec, strana, délka a hloubka v toleranci 1 mm.

{{ui:Název}} prvku se nepočítá. Nezáleží ani na jeho poloze v modelu, na jeho natočení ani na tom, jakým směrem byl nakreslen, pokud je samotný díl stejný.

### Otočené díly

Díl se porovnává ve všech polohách, v nichž jej lze otočit tak, aby se jeho průřez zobrazil sám na sebe. Pokud některá z nich způsobí shodu s jiným dílem, sdílejí označení.

| Tvar | Otočení, která se počítají |
|---|---|
| I-profily, obdélníkové HSS, plechy | Konec za koncem (kolem svislé osy), konec za koncem (kolem vodorovné osy) a vzhůru nohama kolem vlastní délky |
| U-profily | Konec za koncem jen kolem vodorovné osy, takže stojina zůstává na téže straně |
| Úhelníky, kruhové HSS | Žádná: porovnává se tak, jak je umístěn |

Takže nosník s otvorem blízko levého konce se shoduje s nosníkem se stejným otvorem blízko pravého konce, a sloup s otvory v jedné pásnici se shoduje se sloupem se stejnými otvory v druhé pásnici.

### Číslování

| Typ | Předpona dílu | Předpona sestavy |
|---|---|---|
| Sloup | c | C |
| Nosník | b | B |
| Ztužidlo | br | BR |
| Plech (umístěný, koncový nebo patní) | p | P |

Označení se číslují od 1 v rámci každé předpony. Pořadí je: sloupy, pak nosníky, ztužidla a plechy; v rámci typu podle názvu profilu v přirozeném řazení (W8x10 před W12x26); pak delší díly dříve.

Protože číslování následuje toto pořadí, přidání nebo změna jednoho dílu může posunout čísla jiných.

## Označení sestav

- Každý díl, který není svařen k jinému dílu, je hlavním dílem své vlastní sestavy.
- Koncové plechy jsou svařeny k nosníku a patní plechy ke sloupu, takže patří do sestavy daného prvku.
- Dvě sestavy sdílejí označení, když jejich hlavní díly sdílejí označení dílu a jejich připojené díly mají stejná označení na stejných místech (v toleranci 1 mm), přičemž se připouštějí stejná otočení jako u hlavního dílu.
- Předpona sestavy vychází z hlavního dílu: nosník se dvěma koncovými plechy je sestava B.

Plechy, které umístíte nástrojem {{ui:Plech}}, nejsou k ničemu svařeny, takže každý je vlastní sestavou P.

## Označení patek

Patky se stejnou délkou, šířkou, hloubkou, popisem betonu, spodní sítí výztuže a startovacími pruty sdílejí označení: F1, F2 … v pořadí, v jakém byly umístěny. Poloha a natočení se nepočítají.

## Označení prutů

Pruty se stejnou velikostí, tvarem a rozměry A, B a C (zaokrouhleno na milimetr) sdílejí označení napříč všemi patkami. Označení tvoří číslo prutu, F a čítač podle velikosti prutu: 5F1, 5F2, 6F1. Prut v delším směru a prut v kratším směru čtvercové patky jsou tentýž prut a sdílejí označení; sloupec {{ui:Použito pro}} v tabulce uvádí obě použití.
