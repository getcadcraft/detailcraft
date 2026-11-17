---
title: Almennar grunnmyndir og samsetningarteikningar
summary: Gerðu grunnmyndir, útlit og eina samsetningarteikningu fyrir hvert samsetningarmerki úr líkaninu, á A4 til A1 eða ANSI B til D blöðum, gefðu þær út með endurskoðunarstöfum, og sæktu sem PDF, DWG eða DXF.
keywords: faldar línur, fjarlæging falinna lína, strikalína, skýjalína, skýjalínur, endurskoðunarþríhyrningur, grunnmynd akkerisbolta, akkerisstangir, stangaskrá, skrá yfir undirstöðuplötur, ásasetning, útgáfa, endurskoðun, rev, endurskoðunartafla, endurútgáfa, útgáfuskrá, sendingarseðill, dwg, dxf, cad-skrá, flytja út teikningar, teikningar, almenn uppröðun, ga, grunnmynd, útlit, samsetningarteikning, blaðastærð, pappírsstærð, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, prenta, mælikvarði, titilreitur, tilvísun líkans
from: 709f8604
---

Veldu {{ui:Teikningar}} í hópnum {{ui:Útkoma}}. DetailCraft gerir allt settið úr líkaninu eins og það er núna. Ekkert er vistað: breyttu líkaninu, opnaðu {{ui:Teikningar}} aftur, og settið er gert aftur.

## Hvað er í settinu

- **Grunnmyndir**, ein fyrir hverja hæð sem hefur eitthvað á sér, séð ofan frá.
- **Útlit**, eitt fyrir hverja ásalínu sem hefur bita innan 1 m frá sér.
- **Grunnmynd akkerisbolta**, þegar líkanið hefur undirstöðuplötur: hver undirstöðuplata séð ofan frá með súlu sinni og akkerisstöngum, ásarnir með málunum sínum, dæmigert smáatriði af hverju stangamynstri (BP1, BP2 …) með bili stanga og fjarlægð að brún, og tvær skrár: akkerisstangirnar eftir merki (R1, R2 …: magn, þvermál, lengd, útstæð fyrir ofan plötu, innfelling, gæði) og undirstöðuplöturnar eftir ás (súla, mynstur, plata, stangir, efri brún plötu). Súla utan áss er staðsett eftir hnitum sínum.
- **Samsetningarteikningar**, ein fyrir hvert samsetningarmerki: framsýn, ofansýn og endasýn, keðjuð mál að götum og brúnum platna, hlutalistinn, lausir boltar og stangir, og athugasemdir um suðu og göt. Hver soðin plata hefur suðutákn fyrir hornsuðu í framsýn (AWS A2.4): örin bendir á samskeytin, þríhyrningurinn undir viðmiðunarlínunni þýðir örhliðina, talan vinstra megin er stærð suðunnar í mm, og hringur þar sem örin mætir línunni þýðir allan hringinn.

**Faldar línur.** Grunnmyndir og útlit sleppa línum hluta þar sem hluti sem er alveg fyrir framan þá hylur þá (bita séð endilangur á bak við súlu). Samsetningarteikningar teikna plötu strikaða þar sem aðalhluturinn hylur hana: á bak við vefinn í framsýn (séð frá −u hlið hlutans), undir efri vænglínu í ofansýn. Hlutar sem eru á sömu dýpt, eða skarast í dýpt, eru báðir teiknaðir að fullu.

Hvert blað hefur titilreit með teikningarnúmeri, mælikvarða, heiti líkansins, dagsetningu, blaðnúmeri með blaðastærð, og tilvísun líkans: kóða sem er gerður úr vistaða líkaninu, svo hægt sé að para útprentun við líkanið sem hún kom úr.

## Veldu blaðastærð

Veldu stærðina í listanum efst í glugganum {{ui:Teikningar}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 tommur), {{ui:ANSI C}} (17 × 22 tommur) eða {{ui:ANSI D}} (22 × 34 tommur). Öll blöð eru lárétt. Settið er gert aftur á nýju stærðinni strax, og sama stærð er notuð fyrir verkstæðisteikningar. Hún er einnig í [stillingum DetailCraft](topic:settings#drawings), og þessi vafri man hana.

- Stærra blað teiknast í stærri mælikvarða. Mælikvarðar eru alltaf staðlaðir (1:10, 1:20, 1:25, 1:50, 1:100 og svo framvegis).
- Texti helst jafn stór á öllum blöðum, svo hann er læsilegur þegar hann er prentaður.
- Á litlu blaði getur löng, mjó samsetning fengið stærri mælikvarða þvert á dýpt en eftir lengd. Heiti sýnarinnar segir þá báða mælikvarðana, og málin ráða.

## Útgáfa teikninga og endurskoðanir

Línan fyrir ofan forskoðunina segir hvar blaðið sem er sýnt stendur: **Ekki gefið út ennþá**, **Endurskoðun B, útgefið … ; óbreytt síðan**, eða, í rauðu, **Breytt frá endurskoðun B: þarf að gefa út aftur**. Blaðalistinn merkir útgefin blöð með endurskoðun sinni og þau sem þarf að gefa út aftur.

- Skrifaðu til hvers útgáfan er (hún byrjar sem „Gefið út til smíði“) og veldu {{ui:Gefa út þetta blað}}, eða {{ui:Gefa út breytt blöð}} fyrir hvert blað sem er nýtt eða hefur breyst síðan það var síðast gefið út.
- Fyrsta útgáfa blaðs er endurskoðun A, síðan B, C og svo framvegis (I og O eru sleppt).
- Titilreiturinn sýnir teikningarnúmerið með endurskoðun sinni („A-B1  endurskoðun B“), og endurskoðunartafla við hliðina listar nýjustu útgáfurnar: endurskoðun, dagsetningu og lýsingu. Á litlu blaði sýnir hún eins margar og rúmast.
- Blað „breytist“ þegar það sem er teiknað á því breytist: færður bita, nýtt gat, endurnúmerað merki. Dagsetningin, fjöldi blaða og endurskoðunartaflan sjálf telja ekki. Breyting á blaðastærð breytir öllum blöðum.
- Útgáfuskráin er vistuð í líkanaskránni, og útgáfa er eitt skref í afturköllun. [KISS-skráin](topic:kiss-export) ber nýjustu endurskoðun hverrar teikningar.

### Skýjalínur endurskoðunar

Frá annarri útgáfu blaðs er sérhver hluti eða undirstaða sem breyttist teiknaður innan skýjalínu endurskoðunar með endurskoðunarþríhyrningi sem ber stafinn.

- Meðan blað hefur breyst síðan það var síðast gefið út sýna skýjalínurnar hvað breyttist síðan þá, með komandi endurskoðun í þríhyrningnum (endurskoðun B útgefin og breytt: þríhyrningarnir segja C).
- Þegar þú gefur það út, haldast skýjalínurnar á blaði þeirrar endurskoðunar, eins og á prentuðu setti, þar til blaðið breytist aftur.
- Hvert blað setur ský aðeins um breytingar sem það sýnir. Grunnmyndir og útlit teikna engin göt eða útskurði, svo þau setja ský um bita sem hefur verið færður, snúinn eða stærðarbreyttur, eða sem merki hans breyttist. Samsetningarteikningar og grunnmynd akkerisbolta setja ský einnig um ný eða færð göt og útskurði.
- Endurnúmerað merki telur: þegar breyting gerir bita að nýrri samsetningu, eru bitar sem merki þeirra færðist upp (B1 í B2) settir í ský á grunnmyndum og útlitum.
- Hluti sem var eytt skilur ekkert eftir til að setja ský um.
- Blöð sem voru gefin út áður en skýjalínur endurskoðunar komu (DetailCraft 0.4) byrja að setja ský við næstu útgáfu.
- Skýjalínur eru í PDF-, DXF- og DWG-niðurhölunum, og teljast aldrei sjálfar sem breyting.

## Niðurhal

Veldu sniðið í listanum við hliðina á hnöppunum, og síðan {{ui:Þetta blað}} fyrir blaðið sem sést eða {{ui:Öll blöð}} fyrir allt settið.

- **PDF**: til að prenta eða senda. {{ui:Öll blöð}} býr til eina PDF-skrá, eina síðu fyrir hvert blað, hver síða í valinni stærð.
- **DWG**, í 2018, 2013, 2010, 2007, 2004 eða 2000 sniði: til að opna blöðin í CAD-forriti. Veldu eldra snið fyrir eldra forrit.
- **DXF (R12)**: útgáfan sem nánast öll CAD-forrit opna.

DWG- eða DXF-blað er teiknað í fullri stærð: ein teikningareining er einn millimetri á pappírnum, þannig að það prentast í 1:1 og sérhver sýn heldur mælikvarðanum sem titill hennar segir. Hver penni er eigið lag: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID og svo framvegis, með línubreidd sinni (DWG) og strikum sínum. Orð eru texti í DetailCraft-textastílnum (Arial). Mál eru línurnar og tölurnar sem þú sérð, ekki málahlutir. {{ui:Öll blöð}} setur DWG- eða DXF-skrárnar í eina zip-skrá, ein skrá fyrir hvert blað.

:::note
DXF R12 hefur engar línubreiddir og engar fyllingar: lögin halda nöfnum sínum, svo stilltu pennana eftir lagi þegar þú teiknar út, og fylltar form eru skilin eftir (stöðustikan segir hversu mörg).
:::

Prentaðu í 100% (ekki „passa á síðu“) á pappír af sömu stærð ef þú vilt að gefnu mælikvarðarnir haldist.
