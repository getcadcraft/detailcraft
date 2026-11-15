---
title: Yfirlit yfir skjáinn
summary: Hver stika, spjald og flipi í DetailCraft eftir nafni á skjánum og til hvers hann er.
keywords: skjár, uppsetning, verkfærasláin, spjöld, eiginleikar, stöðustika, skýrslur, viðmót, ui, flipar
from: 94f81073
---

DetailCraft fyllir vafragluggann fyrir neðan forritastikuna. Ofan frá og niður: verkfærasláin, síðan þrír dálkar ({{ui:Líkan}}-spjaldið, sýnin, {{ui:Eiginleikar}}-spjaldið), síðan skýrsluflipar og loks stöðustikan.

## Forritastikan

Mjóa stikan efst tilheyrir CadCraft-vefsvæðinu, ekki líkaninu. Hún sýnir heiti og útgáfu forritsins, tengil á {{ui:Um DetailCraft}}, {{ui:Hjálp}} (eða {{key:F1}}) fyrir þessa hjálp, {{ui:Vista til notkunar án nettengingar}}, skjástillingarhnappinn og rofann {{ui:Blað}} / {{ui:Líkan}}.

- {{ui:Vista til notkunar án nettengingar}} geymir DetailCraft, þrívíddarsýnina og þessa hjálp í vafranum svo það opnist án tengingar. Hnappurinn sýnir {{ui:Tilbúið án nettengingar}} þegar það hefur verið vistað; smelltu þá á hann fyrir {{ui:Vista aftur (sækja nýjustu útgáfu)}} eða {{ui:Fjarlægja afritið án nettengingar}}. Sjá [Vinna án nettengingar](common:offline).
- {{ui:Blað}} gefur ljósan skjá og {{ui:Líkan}} dökkan. Þrívíddarsýnin fylgir strax; ekkert í líkaninu þínu breytist.
- Skjástillingarhnappurinn og {{key:Ctrl+Shift+F}} skipta á milli venjulegs skjás, alls skjás og alls skjás með stikunum faldar. {{key:Ctrl+Shift+F}} notar Control-takkann á öllum tölvum, líka Mac. Með stikunum faldar skaltu benda á efri brún skjásins (eða snerta hana) til að fá þær aftur. {{key:Esc}} hættir alls skjá.

## Verkfærasláin

Verkfærasláin hefur fimm hópa. Færðu bendilinn yfir hnapp til að sjá hvað hann gerir og flýtilykil hans.

| Hópur | Hnappar | Hvað þeir gera |
|---|---|---|
| {{ui:Skrá}} | {{ui:Nýtt}}, {{ui:Opna}}, {{ui:Flytja inn IFC}}, {{ui:Vista}}, {{ui:Sýnishorn}} | Byrja líkan, opna vistaðan `.detailcraft.json` eða IFC-skrá, vista eitt, eða opna sýnishornsgrindina |
| {{ui:Staðsetja}} | {{ui:Velja}}, {{ui:Biti}}, {{ui:Súla}}, {{ui:Skástífa}}, {{ui:Plata}}, {{ui:Undirstaða}}, {{ui:Stigi}} | Verkfærið sem næsti smellur í sýninni notar |
| {{ui:Tengja}} | {{ui:Endaplötur}}, {{ui:Undirplata}}, og í {{ui:Meira}}: {{ui:Klippiplötur}}, {{ui:Skeyti}}, {{ui:Kjálkaplata}}, {{ui:Svipað}} | Bæta tengingu við valinn bita, súlu eða skástífu, eða afrita valda tengingu í öll samsvarandi samskeyti |
| {{ui:Breyta}} | {{ui:Afturkalla}}, {{ui:Endurgera}}, {{ui:Afrita}}, {{ui:Líma}}, {{ui:Meira}} | Fara til baka og áfram í gegnum breytingar; afrita valið og líma það. {{ui:Meira}} opnar valmynd með {{ui:Klippa}}, {{ui:Afrita}}, {{ui:Líma}}, {{ui:Líma á sama stað}}, {{ui:Tvöfalda}}, {{ui:Eyða}}, {{ui:Velja allt}} og {{ui:Velja ekkert}}, hver með sínum flýtilykli |
| {{ui:Útkoma}} | {{ui:IFC}}, {{ui:NC-skrár}}, {{ui:Efnislisti}}, {{ui:Verkstæðisteikning}}, {{ui:Teikningar}}, og í {{ui:Meira}}: {{ui:Beygjulisti}}, {{ui:Þyngdarskýrsla eftir áfanga}}, {{ui:KISS-skrá fyrir smíðahugbúnað}} | Sækja útflutning eða opna teikningablöð |

Hnappar og valmyndaratriði sem geta ekki virkað núna eru dauf, og ef þú bendir á einn þeirra segir hvers vegna. {{ui:Endaplötur}} þarfnast valins bita, {{ui:Undirplata}} valinnar súlu, {{ui:Svipað}} valinnar tengingar, {{ui:Verkstæðisteikning}} líkans með hlutum, {{ui:Afrita}} valins burðarhluta eða undirstöðu, og {{ui:Líma}} einhvers sem hefur verið afritað. Sjá [Afrita, líma og tvöfalda](topic:copy-paste).

## Líkan-spjaldið (vinstra megin)

- {{ui:Líkan}}: heiti líkansins, {{ui:Heiti}}. Það nefnir allar skrár sem þú vistar eða flytur út.
- {{ui:Netlínur}}: netlínurnar og bilin á milli þeirra, og {{ui:Beita netlínum}}. Sjá [Setja upp netlínur og kóta](topic:grids-and-levels).
- {{ui:Kótar}}: ein röð fyrir hvern kóta (heiti og hæð í mm), {{ui:Bæta við kóta}} og {{ui:Beita kótum}}.
- {{ui:Sérsnið}}: búðu til þitt eigið breytanlega þversnið. Lokað þar til þú opnar það.
- {{ui:Merkingar hluta}}: sérhver hlutamerking í líkaninu með sniði, lengd og fjölda. Smelltu á merkingu til að velja fyrsta hlutinn með henni.

{{ui:Netlínur}}, {{ui:Kótar}} og {{ui:Sérsnið}} fellast saman: smelltu á fyrirsagnirnar þeirra.

## Sýnin (í miðjunni)

Sýnin sýnir líkanið í þrívídd. Fyrir ofan hana eru þrír hnappar og listi á sýnastikunni:

- {{ui:3D}}: snúðu líkaninu frjálslega.
- {{ui:Grunnmynd}}: horfðu beint niður á einn kóta. Listi yfir kóta birtist við hliðina á hnöppunum. Allt sem er meira en 1.5 m fyrir ofan kótann er skorið burt svo þú sjáir kótann og getir smellt á hann greinilega.
- {{ui:Útlit}}: horfðu beint á eina stafasetta netlínu (Netlína A, Netlína B …). Listi yfir stafasettar netlínur birtist. Aðeins stálið innan 1 m frá þeirri línu er sýnt.
- Hnappurinn til hægri á sýnastikunni aðlagar aðdrátt þannig að allt líkanið sést.

Litlir punktar merkja hvern netlínuskurðpunkt á hverjum kóta. Meðan staðsetningartól er virkt lýsist punkturinn næst bendlinum upp og stöðustikan nefnir hann, til dæmis „A/2 við Kóti 1“. Litir greina gerðir burðarhluta að: súlur, bitar, skástífur og plötur hafa hver sinn lit, boltar og stengur annan, undirstöður eru gegnsæjar og steypustyrktarjárn er teiknað sem rör. Göt sjást sem dökkir tappar; úrtökur eru skornar.

Að snúa, hliðra og aðdrátt: [Hreyfast um þrívíddarsýnina](topic:navigate-3d).

Þegar líkanið er tómt sýnir sýnin stuttan lista „Byrjaðu líkan“. Þú getur líka sleppt vistaðri líkanaskrá hvar sem er á sýninni til að opna hana.

## Eiginleikaspjaldið (hægra megin)

Það sem þetta spjald sýnir fer eftir því hvað þú ert að gera, og fyrirsögnin segir hvað: „Líkan“, „Staðsetja bita“, „Biti b2“, „Endaplötutenging“, „Undirplata“, „Undirstaða F1“, „3 valin“ eða „Líma“.

- **Ekkert valið:** samantekt á líkaninu (burðarhlutar, tengingar, undirstöður, hlutar, merkingar, boltar, þyngd stáls og steypustyrktarjárns, netlínur, kótar).
- **Staðsetningartól virkt:** valkostirnir fyrir næsta hlut (snið, efni, staðsetning, snúningur og fyrir súlur {{ui:Upp að}}), samantekt á völdu sniði og {{ui:Bæta við eftir ás}}-form til að staðsetja án þess að smella í sýninni.
- **Burðarhluti valinn:** nafn hans, snið, efni, staðsetning, snúningur, hnit beggja enda, merkingar hans, skurðarlengd og þyngd, göt og úrtökur, og hnappar fyrir tengingar, verkstæðisteikningu og {{ui:Eyða}}.
- **Tenging valin:** hver einasta stilling fyrir plötur, bolta og suðu, boltarnir og suðan sem hún gerir, viðvaranir hennar og {{ui:Beita á svipað}}.
- **Undirstaða valin:** staðsetning og stærð, neðra netið, byrjunarstengurnar og merkingar stanga sem hún notar.
- **Nokkrir hlutir valdir:** hversu margir burðarhlutir af hverri gerð, tengingar og undirstöður, stálþyngd þeirra, og {{ui:Afrita}}, {{ui:Tvöfalda}} og {{ui:Eyða}}.
- **Líma:** hvað er á klippiborðinu, og form til að líma eftir innsleginni fjarlægð eða á netlínuskurðpunkt sem þú velur úr listum.

Talnareitir taka gildi þegar þú ýtir á {{key:Enter}} eða yfirgefur reitinn. Sérhver breyting er eitt skref sem þú getur afturkallað.

## Skýrsluflipar (neðst)

- {{ui:Vandamál}}: allt sem DetailCraft gat ekki smíðað eða vill að þú athugir, með hnappi {{ui:Velja}} á hverri línu. Flipinn sýnir fjöldann í svigum.
- {{ui:Efnislisti}}: hlutar, samsetningar, boltar og akkerisstengur, með þyngdum og tengli á {{ui:Sækja CSV}}. Smelltu á hlutamerkingu til að velja þann hlut.
- {{ui:Beygjulisti}}: sérhver stangarmerking í sérhverri undirstöðu, með tengli á {{ui:Sækja CSV}}.

Þegar flipi er valinn færa {{key:Left}} og {{key:Right}} þig milli flipa.

## Stöðustikan

Stikan neðst hefur þrjá hluta: netlínuskurðpunktinn undir bendlinum meðan verið er að staðsetja, nýjustu skilaboðin (hvað gerðist nýlega, eða hvers vegna eitthvað var hafnað) og samanlagðar tölur fyrir hluta, bolta, stálþyngd og þyngd steypustyrktarjárns. Þegar aðgerð virðist ekki gera neitt skaltu fyrst lesa skilaboðin hér.

Titill vafraflipans byrjar á punkti (•) meðan líkanið hefur breytingar sem þú hefur ekki vistað.

## Á mjóum skjá

Undir um 760 pixlum á breidd raðast dálkarnir hver ofan á annan: verkfærasláin, sýnin, stöðustikan, {{ui:Eiginleikar}}, skýrsluflipar og loks {{ui:Líkan}}-spjaldið. Skrollaðu síðunni til að ná í þá. DetailCraft er hannað fyrir skjá á borðtölvu eða fartölvu; sími dugar til að skoða, ekki til að vinna í líkaninu.
