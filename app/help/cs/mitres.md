---
title: Pokosové spoje
summary: Spojte dva I-profily, které se stýkají pod úhlem: oba konce řezány v rovině, která půlí úhel, s koncovými plechy, šrouby a výztuhami, pokud je chcete.
keywords: pokos, miter, pokosový spoj, koleno, náběh, portálová rámová konstrukce, hřeben, roh, šikmý řez, koncový plech, šroubovaný koncový plech, výztuha, spojit
from: cd8380d4
---

Pokos spojuje dva I-profily, jejichž konce se stýkají pod úhlem, například koleno portálové rámové konstrukce, hřeben nebo dva nosníky zatáčející roh v půdorysu. DetailCraft řeže oba konce v rovině, která půlí úhel mezi nimi, takže se obě řezné plochy shodují. Pokud chcete, přidá ke každému řezanému konci koncový plech, spojí oba plechy šrouby a do každého prvku vloží dvojici výztuh stojiny.

## Kde funguje

- Dva **I-profily** (IPE, HEA, HEB, W a podobné), jejichž **konce se stýkají ve stejném uzlu**. Oba prvky mohou být nakresleny v kterémkoli směru.
- Úhel mezi prvky musí být alespoň 15°. Prvky v jedné přímce se odmítnou: použijte [spoj přesahem](topic:splices).
- Prostý řez (bez plechů) funguje bez ohledu na to, jak se prvky stýkají. **Koncové plechy** vyžadují, aby se oba prvky stýkaly v rovině svých stojin, jako v portálovém koleni nebo hřebeni. Dva nosníky zatáčející roh v půdorysu se stýkají v rovině svých pásnic, takže dostanou jen prostý řez.
- Prvky různých velikostí se spojí, ale s varováním: jejich řezné plochy se neshodují.

## Přidání pokosu

1. Vyberte oba prvky: kliknutím na jeden, pak {{key:Shift}}+kliknutím na druhý.
2. Zvolte {{ui:Pokos}} v nabídce {{ui:Více}} skupiny {{ui:Spojit}}. Otevře se dialog Pokos.
3. Nastavte číslovaná pole. Výkres vedle nich se tvoří podle čísel, která zadáváte, a jeho očíslované kroužky ukazují, co které pole nastavuje.
4. Zvolte {{ui:Přidat pokos}}. Pokud jste vybrali více než dva prvky, každý volný spoj mezi nimi dostane stejný pokos.

Pro pozdější změnu pokosu jej vyberte (kliknutím na jeden z jeho plechů) a zvolte {{ui:Dialog pokosu s náhledem}} v pravém panelu, nebo tam změňte nastavení přímo. Prostý řez nemá plechy, na něž lze kliknout: vyberte oba jeho prvky a znovu zvolte {{ui:Pokos}}, a dialog se otevře na tomto pokosu. {{ui:Použít na podobné (n)}} jej zkopíruje na každý volný spoj mezi prvky stejných dvou profilů pod stejným úhlem.

## Číslovaná pole (mm)

| Č. | Nastavení | Výchozí | Co dělá |
|---|---|---|---|
| 1 | Mezera mezi plechy (nebo mezi řezanými konci) | 0 | Volná mezera ve spoji. Každá strana si z ní drží polovinu |
| 2 | Koncové plechy, tloušťka plechu | zapnuto, 20 | Koncový plech svařený kolem celého řezaného konce. Odškrtněte pro prostý řez |
| 3 | Řady šroubů, rozteč řad, rozchod, vnější řada | 4, 0, 0, vypnuto | Rozteč 0 rozloží řady rovnoměrně mezi pásnicemi. Rozchod 0 = polovina šířky plechu, nejméně 2.4 × otvor. Vnější řada jde do prodloužení plechu za vnější pásnici |
| 4 | Plech za vnější pásnicí | 0 | Jak daleko plechy sahají za vnější pásnici, podél řezu |
| 5 | Plech za vnitřní pásnicí | 0 | Totéž pro vnitřní stranu |
| 6 | Výztuhy stojiny, vzdálenost za řezem | vypnuto, 50 | Dvojice v každém prvku, na obou stranách stojiny, kolmo k prvku, tak daleko za vzdálenějším koncem jeho řezu |
| 7 | Tloušťka výztuhy | 10 | |

Pod {{ui:Šrouby}}: průměr šroubu, otvor, jakost a přídavek délky (20, 22, A325, 30), jako u koncových plechů. Pod {{ui:Desky a svary}}: šířka plechu (0 = šířka pásnice), velikost koutového svaru (8) a materiál plechu (A36).

## Co dostanete

- **Řezy.** Konec každého prvku je řezán v jeho rovině. Jeho délka v seznamech, výkresech a souborech NC je **celková délka**, od jeho kolmého konce k nejvzdálenějšímu bodu řezu.
- **Plechy** patří ke svému prvku: sestava každého prvku je prvek, jeho koncový plech a jeho výztuhy. Šrouby jsou montážní šrouby spoje: kusovník je počítá jednou a výkres sestavy každého prvku je uvádí jako volné šrouby.
- **Výkresy** zobrazují šikmé konce a plechy; dílenský výkres pokosového prvku uvádí u každého řezu úhel od kolmice.
- **Soubory NC** (DSTV) nesou úhly šikmých řezů v hlavičce, jak to norma vyžaduje, a obrysy, které sledují řez. Před řezáním je zkontrolujte v prohlížeči NC vaší dílny, jako u každého souboru NC.
- **IFC** ořeže vytažení každého prvku jeho rovinou řezu, takže ostatní programy ukážou skutečný řez.
- **Označení:** pokosový prvek je jiný kus než prvek s kolmým řezem stejné délky. Dva prvky se stejnými řezy sdílejí označení, jako dvě krokve hřebene.

## Dobré vědět

- Pokos zůstává živý. Přesunete-li nebo změníte velikost kteréhokoli prvku, řez, plechy a šrouby se přizpůsobí. Smažete-li kterýkoli prvek, pokos zmizí a konec druhého prvku je zase kolmý.
- Varování používají stejná minima podle EN 1993-1-8 jako ostatní spoje (vzdálenost konce a okraje 1.2 × otvor, rozteč 2.2 × otvor, rozchod 2.4 × otvor), navíc řady šroubů příliš blízko pásnice, plechy užší než pásnice a výztuhy bez místa.
- Hodnoty jsou výchozí, nejsou návrhem. DetailCraft nekontroluje pevnost spoje a nevytváří náběh, svařený pokos s tupým svarem ani výztuhy v přímce s pásnicemi druhého prvku.
