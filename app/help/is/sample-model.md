---
title: Skoða sýnishornsgrindina
summary: Opnaðu innbyggðu tveggja bila grindina og notaðu hana til að læra hvað DetailCraft býr til, frá merkingum til NC-skráa.
keywords: sýnishorn, dæmi, kynning, grind, bil, læra, skoðunarferð, prófa
from: 5c5944dd
---

Sýnishornsgrindin er lítið, heilt líkan: sérhver tegund hluta sem DetailCraft býr til kemur fyrir að minnsta kosti einu sinni. Það er fljótlegasta leiðin til að læra forritið og prófa útflutning áður en þú treystir á hann.

## Opnaðu hana

1. Veldu {{ui:Sýnishorn}} í hópnum {{ui:Skrá}}.
2. Ef núverandi líkan þitt hefur óvistaðar breytingar skaltu velja {{ui:Vista fyrst}} eða {{ui:Henda breytingum}}.
3. Stöðustikan segir „Sýnishornsgrind: 6 súlur með undirplötum, 4 bitar með endaplötum, ein skástífa, 7 undirstöður með styrkingu.“

Sýnishornið opnast sem nýtt líkan sem heitir „Sýnishornsgrind“. Það breytir engu öðru og hefur ekkert til að afturkalla.

## Hvað er í henni

- **Ásar** 1, 2, 3 við 6000 mm og A, B við 7000 mm. **Kótar** Kóti 1 við 0 og Kóti 2 við 4000.
- **Sex súlur**, W12x50, frá Kóta 1 að Kóta 2 á hverjum skurðpunkti, hver á 25 mm undirplötu með fjórum akkerisstöngum.
- **Fjórir bitar**, W16x26, á Kóta 2 eftir ásalínum A og B, efri brún stáls í hæðinni, með sléttri boltaðri endaplötu á báðum endum (átta alls).
- **Ein skástífa**, HSS4x4x1/4, frá A/1 á Kóta 1 upp í A/2 á Kóta 2.
- **Sex púðaundirstöður**, 2000 x 2000 x 600, ein undir hverri súlu, með krækjuðu neðra lagneti í báðar áttir.
- **Ein undirstaða til viðbótar** við grindina, 2400 x 1800 x 600, með sex krækjuðum tengistöngum sem standa upp fyrir steyptan stöpul.

## Hlutir til að prófa

1. Smelltu á bita. Lestu {{ui:Auðkenni hlutar}}, {{ui:Samsetning}}, {{ui:Sniðlengd}} og {{ui:Stytt um}}: skurðarlengdin er styttri en 6000 mm ásbilið, því hver endaplata sker bitann til baka um hálfa súludýptina auk þykktar plötunnar.
2. Smelltu á súlu. Undir {{ui:Göt}} sýnir hún götin sem endaplöturnar gerðu í flönsinni („8 göt úr tengingum“; miðsúlurnar hafa 16, eitt sett í hvorum flans).
3. Í listanum {{ui:Merkingar hluta}} til vinstri sérðu að allir fjórir bitarnir deila einni merkingu: þeir eru sami stálhluti. Hornsúlurnar deila líka merkingu þótt göt þeirra snúi gagnstætt, því súla sem snúið er við endanum á henni er sami hluti. Miðsúlurnar, með götum í báðum flönsum, fá aðra merkingu.
4. Smelltu á endaplötu (eða einn bolta hennar). Spjaldið {{ui:Eiginleikar}} sýnir stillingar plötunnar, bolta og suðu, boltana sem hún gerir (með lengd þeirra reiknaðri út frá klemmunni) og allar viðvaranir um fjarlægð frá brún.
5. Opnaðu flipann {{ui:Efnislisti}}. Hlutar, samsetningar og boltar og akkerisstangir eru skráð með þyngdum. Þú ættir að sjá sex merkingar hluta: c1 (tvær miðsúlurnar) og c2 (fjórar hornsúlurnar), báðar W12x50 við 3975 mm; b1, fjórir W16x26 bitar við 5650 mm; br1, skástífan; p1, átta PL20x180 endaplötur; og p2, sex PL25x400 undirplötur. Festingarnar eru 64 boltar 20 x 70 A325 og 24 akkerisstangir 20 x 575.
6. Opnaðu flipann {{ui:Beygjulisti}}. Sex eins undirstöðurnar deila merkingum stanga; stöpulundirstaðan bætir við sínum eigin.
7. Smelltu á skástífuna og skoðaðu hópinn {{ui:Útkoma}}: {{ui:Verkstæðisteikning}} er óvirk, því verkstæðisteikningar ná enn aðeins yfir I-snið og plötur.
8. Veldu {{ui:NC-skrár}}. Zip-skráin geymir skrá fyrir sérhverja merkingu I-sniðs og plötu; stöðustikan telur merkingu skástífunnar upp sem óskrifaða.
9. Veldu {{ui:IFC}} og opnaðu skrána í hvaða IFC-skoðunarforriti sem er til að athuga hvernig annar hugbúnaður þinn les hana.

## Notaðu hana sem upphaf

Sýnishornið er venjulegt líkan. Breyttu því, endurnefndu það í reitnum {{ui:Heiti}} og vistaðu það undir nýja heitinu með {{key:Mod+S}}.
