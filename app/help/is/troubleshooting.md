---
title: Úrræðaleit
summary: Hvað skilaboð DetailCraft þýða og hvað á að gera, frá vantandi þrívíddarmynd til tenginga sem ekki er hægt að smíða.
keywords: vandamál, villa, virkar ekki, hjálp, laga, skilaboð, hafnað, webgl, autt, aðvörun, get ekki, vandi
from: f8c3b2b1
---

Flestum synjunum er útskýrt í stöðustikunni neðst á skjánum, eða í flipanum {{ui:Vandamál}}. Lestu þær fyrst. Skilaboðin hér fyrir neðan eru tilvitnuð eins og DetailCraft sýnir þau.

## Þrívíddarmyndina vantar

**"Þessi vafri gat ekki ræst þrívíddargrafík (WebGL). Líkanið, skýrslurnar og útflutningurinn virka samt."**

Vafrinn gat ekki ræst WebGL, þrívíddargrafíkina sem DetailCraft teiknar með.

1. Uppfærðu vafrann í nýjustu útgáfu.
2. Kveiktu á vélbúnaðarhröðun og endurræstu vafrann (sjá hér fyrir neðan).
3. Uppfærðu skjákortsrekilinn, eða prófaðu annan vafra. Fjarskjáborð og sýndarvélar eru oft án WebGL.
4. Á meðan geturðu samt unnið: settu inn stykki með eyðublaðinu {{ui:Bæta við eftir ás}}, lestu skýrslurnar og fluttu út. Aðeins smellir í myndina þurfa WebGL.

:::chromium
Til að kveikja á vélbúnaðarhröðun, opnaðu **Stillingar, Kerfi** og kveiktu á **Nota skjákortshröðun þegar hún er tiltæk**, og ræstu síðan vafrann aftur.
:::

:::firefox
Til að kveikja á vélbúnaðarhröðun, opnaðu **Stillingar, Almennt, Afköst**, afhakaðu **Nota ráðlagðar afkaststillingar** og merktu við **Nota vélbúnaðarhröðun þegar hún er tiltæk**. Endurræstu Firefox.
:::

:::safari
Safari er með WebGL kveikt sjálfgefið. Uppfærðu macOS ef myndin ræsist enn ekki, og athugaðu að engin viðbót loki fyrir það.
:::

Meira í [Vafrar og tölvur](common:browsers).

## Smellir í myndina gera ekkert

- **Enginn skurðpunktur nálægt smellinum.** Staðsetningarverkfæri smella aðeins á skurðpunkta ása. Smellur þar sem enginn punktur er gerir ekkert. Færðu þig nær þar til punkturinn lýsir upp.
- **Verkfærið er {{ui:Velja}} og þú smelltir á autt svæði.** Það hreinsar valið.
- **Þú dróst.** Ýting og slepping sem eru meira en nokkrum pixlum í sundur er drag: það snýr eða hliðrar myndinni.
- **Hluturinn er skorinn burt.** Í {{ui:Grunnmynd}} og {{ui:Útlit}} er stál utan sniðsins falið og ekki hægt að smella á það. Skiptu yfir í {{ui:3D}}.
- **Skurðpunkturinn er á röngu kóta.** Í {{ui:3D}} geta skurðpunktar á mörgum hæðum skarast á skjánum; smellurinn tekur þann næsta. Notaðu {{ui:Grunnmynd}} eða {{ui:Útlit}}.

## Skilaboð við staðsetningu

| Skilaboð | Hvað á að gera |
|---|---|
| Engin hæð er yfir Level 2 sem súlan nær í. Bættu fyrst við hæð. | Bættu við hæð í {{ui:Kótar}}, eða smelltu á lægri hæð |
| Veldu annan skurðpunkt fyrir hinn endann. | Þú smelltir tvisvar á sama punkt |
| Endarnir tveir eru sami punktur. | Í {{ui:Bæta við eftir ás}} eru „Frá“ og „Til“ valin á sama stað |
| Bættu við ásalínum til að staðsetja stykki. | Líkanið hefur engar ásalínur í annarri stefnunni |
| Óþekkt snið „…“ | Sniðið er ekki í safninu né í sérsniðnum sniðum líkansins. Veldu eitt af listanum |
| Skrifaðu tölu. | Reitur fyrir tölu var auður eða með texta í sér |

## Tengingar smíðast ekki

### "Þessi biti endar ekki á súlulínu."

Endaplötur krefjast þess að endi bitans liggi nákvæmlega á lóðréttri línu súlu, milli neðri og efri enda hennar (innan 1 mm). Athugaðu {{ui:Endar (x, y, z mm)}} bitans og staðsetningu súlunnar.

### "Þessi biti mætir vefjar súlu eða er í horni"

Eða í {{ui:Vandamál}}: "Bitar sem ganga inn í vef súlu eru ekki smíðaðir enn: snúðu súlunni 90° eða notaðu aðra tengingu."

Bitinn gengur inn í vef súlunnar. Veldu súluna og stilltu {{ui:Snúningur (°)}} á 90, og reyndu síðan aftur. Skáar tengingar eru ekki smíðaðar.

### "Endaplötur eru smíðaðar fyrir lárétta bita eingöngu (þessi biti hallar)."

Báðir endar bitans verða að vera í sömu hæð.

### "Endaplötur krefjast þess að bitinn standi upprétt (snúningur 0)."

Stilltu {{ui:Snúningur (°)}} bitans aftur á 0.

### "Endaplötur krefjast I-sniðs bita." / "Endaplötur krefjast I-sniðs súlu."

Aðeins I-snið (W, IPE, HEA, HEB eða sérsniðið I) geta fengið endaplötur.

### "Endi bitans er ekki lengur á súlulínunni."

Þú færðir bitann eða súluna eftir að tengingin var sett inn. Færðu hana til baka, eða eyddu tengingunni.

### "Tengingar skera þetta stykki niður í ekkert."

Tengingarnar í báðum endum skera stykkið lengra niður en lengd þess, til dæmis mjög stuttur biti milli tveggja djúpra súlna. Athugaðu endana á stykkinu og þykkt plötunnar.

### "Engin önnur samskeyti eins og þessi … eru án tengingar."

{{ui:Svipað}} afritar aðeins á samskeyti með sama bitasniði, sama súlusniði og sömu tegund tengingar (bita inn í flans) sem hafa enga tengingu enn.

### "Báðir endar hafa þegar tengingar." / "Þessi súla er þegar með grunnplötu."

Veldu núverandi tengingu til að breyta henni, eða eyddu henni fyrst.

## Aðvaranir í flipanum Vandamál

Aðvaranir stöðva ekki tengingu eða undirstöðu frá því að smíðast; þær biðja þig um að athuga hana. Brúnar- og bilaaðvaranirnar nota lágmörk EN 1993-1-8 töflu 3.3 (brún 1.2 × gat, bil 2.2 × gat, bil þvert 2.4 × gat). Ef verkefnið notar aðrar reglur á aðvörunin kannski ekki við; DetailCraft hannar ekki tengingar.

„gat er utan við enda hlutans“ þýðir að x gats er minna en 0 eða meira en skurðlengdin. Mundu að x er frá upphafi skurðarins, eftir að tengingar hafa skorið hlutann til.

## Breytingar á undirstöðu eru ekki samþykktar

| Skilaboð | Hvað á að gera |
|---|---|
| Þekjan skilur ekkert rúm eftir fyrir stangir í þessari undirstöðu. | Gerðu undirstöðuna stærri eða þekjuna minni |
| Undirstaðan er of grunn fyrir tvö lög af stöngum innan þekjunnar. | Gerðu hana dýpri eða minnkaðu þekjuna |
| Upphafsstangirnar komast ekki inn í undirstöðuna með 75 mm þekju. | Færri upphafsstangir, þéttara bil, eða stærri undirstaða |
| Bil stanga verður að vera 50–1000 mm. | Skrifaðu bil innan þessa marka |
| Lengd verður að vera 300–50000 mm. | Stærðir undirstöðu hafa mörk: lengd og breidd 300 til 50000, dýpt 150 til 10000 |

## Ásnet og hæðir eru ekki samþykkt

| Skilaboð | Hvað á að gera |
|---|---|
| Númeruð ásnet: gefðu upp eitt bil milli hvers pars línna (4). | Teldu bilin: fimm línur þurfa fjögur bil |
| Stafanet: bil verða að vera jákvæðir millimetrar. | Engin núll, neikvæð gildi eða texti |
| Númeruð ásnet: merkimiðar ása verða að vera ólíkir. | Tvær línur hafa sama merki |
| Mest 60 ásalínur í hvora átt. | Skiptu líkaninu |
| Hafðu að minnsta kosti eina hæð. | Þú fjarlægðir allar hæðaraðirnar |
| Sérhver hæð þarf nafn. / Tvær hæðir heita „…“. | Gefðu hverri hæð ólíkt nafn |

## Opnun skráar mistekst

| Skilaboð | Orsök |
|---|---|
| DetailCraft opnar sín eigin líkön (.detailcraft.json). IFC-innflutningur er ekki smíðaður enn. | Skráin er ekki `.json`-skrá |
| Þetta er ekki DetailCraft-líkan (ekki JSON). | Skráin er skemmd eða er önnur JSON-skrá |
| Þetta er ekki DetailCraft-líkan. | JSON-skrá frá öðru forriti |
| Þetta líkan var vistað með nýrri útgáfu DetailCraft (snið 2). | Opnaðu það í nýrri DetailCraft sem vistaði það |
| Þessi skrá er of stór til að vera DetailCraft-líkan. | Yfir 50 MB |

Þegar skrá opnast með aðvörunum eins og „2 stykki voru ógild og skilin eftir.“ er afgangurinn af líkaninu í lagi. Ekki vista yfir upprunalegu skránni fyrr en þú hefur athugað hvað var skilið eftir.

## Útflutningur

| Skilaboð | Orsök |
|---|---|
| Ekkert til að flytja út enn. | {{ui:IFC}} með tómu líkani |
| Engir I-snið- eða plötuhlutir til að skrifa NC-skrár fyrir. | Aðeins rásir, hornjárn eða rör í líkaninu |
| Ekki skrifað (hingað til aðeins I-snið og plötur): … | Þau merki eru ekki I-snið eða plötur; hin voru skrifuð |
| Engar undirstöður, svo engar stangir til að áætla. | {{ui:Beygjulisti}} án undirstaða |
| … stafur/stafir utan PDF-leturs prentaðir sem „?“. | Heiti líkansins eða gæðaflokkur hefur stafi sem PDF-letrið hefur ekki |

{{ui:Verkstæðisteikning}} er grár: líkanið hefur engin stykki ennþá.

## Niðurhal birtast ekki

Hver vistun og útflutningur er niðurhal í vafranum. Athugaðu niðurhalalista vafrans. Ef vafrinn spyr áður en hann sækir nokkrar skrár, eða lokar fyrir niðurhal af þessari síðu, leyfðu þau. Í Safari, athugaðu niðurhalshnappinn á tækjastikunni.

## Lyklar gera ekkert

- Bendillinn er í texta- eða talnareit: verkfæralyklar og {{key:Delete}} eru hunsaðir þar svo þú getir skrifað. Ýttu á {{key:Tab}} eða smelltu á myndina.
- Gluggi er opinn: lokaðu honum fyrst.
- Vafrinn hefur lyklaborðið (til dæmis veffangastikuna): smelltu inni í DetailCraft.
- {{key:Ctrl+Shift+F}} notar Control, jafnvel á Mac.

## Vandamál án nettengingar

Hnappurinn {{ui:Vista til notkunar án nettengingar}} í forritastikunni sýnir stöðu afritsins án nettengingar. Hvernig vistun virkar: [Vinna án nettengingar](common:offline).

| Hnappurinn sýnir | Hvað það þýðir | Hvað á að gera |
|---|---|---|
| {{ui:Vista til notkunar án nettengingar}} | Ekkert afrit án nettengingar í þessum vafra enn | Veldu það meðan þú ert á netinu |
| Vistar 5 af 20 | Vistun er í gangi | Bíddu eftir {{ui:Tilbúið án nettengingar}}; hafðu flipann opinn |
| {{ui:Tilbúið án nettengingar}} | DetailCraft, 3D-myndin, allur útflutningur og þessi hjálp virka án tengingar | Ekkert. Smelltu á það fyrir {{ui:Vista aftur (sækja nýjustu útgáfu)}} eða {{ui:Fjarlægja afritið án nettengingar}} |
| {{ui:Ekki tókst að vista}} | Sumar skrár sóttust ekki | Athugaðu tenginguna og smelltu á það til að reyna aftur |
| {{ui:Notkun án nettengingar er ekki í boði}} | Þessi gluggi getur ekki geymt afrit án nettengingar: einkagluggar og sumar stýrðar tölvur loka fyrir það | Notaðu venjulegan glugga, eða vinndu á netinu |

Ef þú ert án nettengingar og hnappurinn sýnir ekki {{ui:Tilbúið án nettengingar}}, ekki endurhlaða eða loka flipanum: það sem hefur hlaðist heldur áfram að virka. Vistaðu líkanið með {{key:Mod+S}} og bíddu þar til þú ert aftur á netinu.

## Óvistuð vinna

Ef vafrinn spyr hvort þú viljir yfirgefa síðuna, eru óvistaðar breytingar í DetailCraft. Veldu að vera áfram og ýttu síðan á {{key:Mod+S}}. DetailCraft getur ekki endurheimt líkan eftir að flipanum hefur verið lokað.

## Enn fastur

Skrifaðu niður hvað þú gerðir og nákvæm skilaboð, og láttu okkur vita í gegnum [stuðningssíðuna](https://getcadcraft.com/support).
