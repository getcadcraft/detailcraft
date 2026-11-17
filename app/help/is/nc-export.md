---
title: Senda NC-skrár í smiðjuna
summary: Flytja út DSTV NC-skrár fyrir hvert auðkenni hlutar (I-snið, rásir, horn, HSS, plötur), þjappaðar í zip-skrá, og yfirfara þær áður en þær berast í vél.
keywords: nc, nc1, dstv, cnc, vél, geislalína, borlína, plötuskurður, útflutningur, smíði, zip
from: 598b6091
---

DetailCraft skrifar eina DSTV NC-skrá (`.nc1`) fyrir hvert auðkenni hlutar, fyrir I-snið, rásir, horn, ferhyrnt og kringlótt HSS og plötur, og þjappar þeim saman í zip-skrá. Geislalínur og plötuvélar lesa þessar skrár til að saga, bora og skera.

## Útflutningur

1. Hreinsaðu flipann {{ui:Vandamál}} fyrst: tenging sem ekki tókst að byggja bætir engum götum við.
2. Vistaðu líkanið ({{key:Mod+S}}), svo NC-skrárnar passi við vistað líkan.
3. Veldu {{ui:NC-skrár}} í hópnum {{ui:Útkoma}}.
4. Vafrinn sækir `<name> NC.zip`. Stöðustikan segir hversu margar skrár hún geymir og telur upp þau auðkenni sem voru ekki skrifuð (horn eða kringlótt rör með úrtöku).

Inni í zip-skránni er hver skrá nefnd eftir auðkenni hlutar síns: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip-skráin er óþjöppuð og opnast með hvaða zip-forriti sem er.

Ef líkanið hefur engar hluti, segir stöðustikan það.

## Hvað hver skrá inniheldur

- **Haus (ST):** heiti líkansins sem pöntunin, auðkenni hlutar sem teikning og stykki, áfangi 1, efnisgæði, magn, sniðið og mál þess, massi á metra og málningarflötur á metra. Sagarskurðir eru ferkantaðir.
- **Ytri útlínur (AK):** útlína sálarinnar með úrtökum skornum úr, og útlína hvers flans styttist þar sem úrtaka tekur hann.
- **Göt (BO):** hvert gat með fleti, staðsetningu og þvermáli, þar með talin göt sem endaplötur og undirplötur gera.

Reit fyrir reit, með reglum um fleti og hnit: [Reitir NC-skráa](topic:nc1-fields).

## Það sem er ekki skrifað

- Horn og kringlótt rör með úrtöku: engin NC-skrá. Auðkenni þeirra eru talin upp í stöðustikunni.
- Göt í kringlóttum rörum (DetailCraft býr ekki til þau).
- Skávalir, innri útlínur, rispumerkingar og sagarhorn önnur en ferhyrnt.
- Langgöt (DetailCraft hefur aðeins kringlótt göt).

## Athugaðu áður en vélað er

NC-skrár DetailCraft eru lesnar til baka af eigin prófunarsvítu, en þær hafa ekki verið keyrðar á vélum verkstæðisins þíns.

1. Opnaðu skrárnar í NC-skoðara verkstæðisins eða hugbúnaði vélarinnar og berðu þær saman við verkstæðisteikningarnar.
2. Athugaðu einn hlut af hverri gerð á vélinni áður en þú keyrir lotu.
3. Athugaðu hvernig hugbúnaðurinn þinn les y-hnit flansa og fleti rása: DetailCraft mælir y flansa frá bakkanti og leggur rásir á bakið eins og staðallinn teiknar þær (sjá [Reitir NC-skráa](topic:nc1-fields#faces-and-coordinates)).
