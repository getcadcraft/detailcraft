---
title: Kontrola kolizí
summary: Najděte členy, plechy a patky, které do sebe zasahují, s vynecháním částí, které se spoj má setkat, a přejděte na každou kolizi.
keywords: kolize, kontrola kolizí, střet, zásah, překrytí, protínání, tvrdá kolize, koordinace, kontrola modelu
from: 04d72d3b
---

Otevřete kartu {{ui:Clashes}} pod pohledem a zvolte {{ui:Check now}}. DetailCraft prochází každou dvojici dílů ve fázích, které jsou zobrazeny: ocel do oceli a ocel do patky. Karta vypíše každou kolizi, nejhlubší nejdřív, s:

- oběma díly podle označení dílu (nebo označení patky) a profilu;
- **Překrytí (mm)**: jak hluboko je bod jednoho dílu uvnitř druhého, až k nejbližší ploše;
- **Poblíž**: průsečík os a úroveň, kde je, nebo jeho souřadnice;
- {{ui:Show}}: vybere oba díly a přesune místo doprostřed pohledu.

Název karty ukazuje, kolik kolizí našla poslední kontrola. Kontrola neběží sama: po změně modelu seznam to oznámí a {{ui:Check now}} ji spustí znovu.

## Co není kolize

- Díly, které se jen dotýkají: plech u příruby, patní plech na své patce, dva členy konec na konec. **Tolerance (mm)** nastavuje, jak daleko smějí dva díly zasahovat, než se to počítá (zpočátku 1 mm; až 50).
- Díly, které spoj spojuje: čelní deska s jejím nosníkem a s přírubou sloupu, na kterou je přišroubována, nosník a sloup téhož styku, patní plech se sloupem, plechy spoje s oběma částmi, ztužidlo s jeho styčníkem (drážka trubky se v modelu nevyřezává). Spoj je k sobě určuje, aby se setkaly.
- Smykový zub patního plechu v patce pod ním (sedí v kapse s injektáží).
- Šrouby a kotevní tyče (procházejí otvory) a výztuž.
- Díly ve skrytých fázích. Viz [Fáze](topic:phases).

Člen nebo nosník, který narazí do sloupu bez spoje mezi nimi, **je** kolize: tento styk ještě potřebuje spoj. Ukazuje to ztužidlo v ukázkovém rámu: nemá styčník. Vyberte je a zvolte {{ui:Gusset}} ([Styčníky ztužidel](topic:brace-gussets)) a jeho kolize zmizí.

## Dobré vědět

- Překrytí měří hloubku do materiálu, takže člen zarážející do tenké stojiny nebo pásnice sloupu ukáže jen několik milimetrů, i když zasahuje daleko.
- Díly se kontrolují podle toho, jak jsou řezány: výřezy a zkrácení nosníku na jeho koncových plechech se berou v úvahu. Otvory ne.
