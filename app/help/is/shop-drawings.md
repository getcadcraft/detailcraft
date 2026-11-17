---
title: Gera verkstæðisteikningar
summary: Eitt blað fyrir hverja hluta-merkingu, gert allt í einu: forskoðaðu hvert þeirra og sæktu eitt blað eða allt settið sem PDF á A4 til A1 eða ANSI B til D, með götum, úrtökum, málsetningum og titilreit.
keywords: verkstæðisteikning, verkstæðisteikningar, allir hlutar, lota, allt settið, teikning af einum hluta, smíðateikning, pdf, smáatriðateikning, stykkjateikning, prentun
from: d25fe035
---

DetailCraft gerir eitt blað fyrir hverja hluta-merkingu, fyrir hvern bita, súlu, skástífu og plötu í líkaninu, allt í einu: þú þarft ekki að velja þá einn og einn. Eins stykki deila merkingu og þar með blaði. Blöðin eru gerð á staðnum úr líkaninu; þau eru ekki geymd né breytt.

## Gera allt settið

1. Veldu {{ui:Verkstæðisteikning}} í hópnum {{ui:Útkoma}}. Ekkert þarf að vera valið. Með hlut valinn opnast glugginn á blaði þess hlutar. Í {{ui:Eiginleikar}}-glugganum heitir sami hnappurinn {{ui:Verkstæðisteikning}} fyrir liði og {{ui:Plötuteikning}} fyrir tengingar.
2. Forskoðun opnast, með titli merkingar hlutarins, til dæmis „Verkstæðisteikning b1“. Fyrsti listinn við hliðina á titlinum geymir hverja hluta-merkingu með sniði sínu, lengd og magni: veldu eina til að sjá blaðið hennar. Annar listinn breytir stærð blaðsins; allt settið er gert aftur í þeirri stærð (sjá [Yfirlitsteikningar og samsetningarteikningar](topic:drawings#choose-the-sheet-size)).
3. Veldu {{ui:Sækja allt}} (hnappurinn sýnir fjölda blaða) fyrir eina PDF-skrá með einni síðu fyrir hverja hluta-merkingu, `<name> Shop drawings.pdf`. Hvert blað segir „Blað 3 af 42“ í titilreitnum. Eða veldu {{ui:Sækja PDF}} fyrir það blað sem þú ert að skoða, `<name> <mark>.pdf`.
4. Lokaðu forskoðuninni með × eða {{key:Esc}}.

Ef {{ui:Verkstæðisteikning}} er grátt, er líkanið ekki með neina hluta enn.

## Hvað er á blaðinu

Fyrir I-prófíl:

- **Útlit**, horft á sálina: hluturinn með úrtökunum skornum inn, göt í sálinni sem hringir og göt í flönsum sem faldar (strikaðar) línur.
- **Grunnmynd efri flans**, séð að ofan, þegar einhver flans er með göt. Göt í neðri flans birtast strikuð.
- **Þversnið** í gegnum sniðið.
- **Málsetningar:** keðjaðar staðsetningar gata eftir hlutanum auk heildarlengdar, hæða gata í sálinni, boltabils og stærðir úrtaka.
- **Listi yfir göt:** hver hópur gata, til dæmis „8 x Ø22 í efri flans“.
- **Suða**, þegar hluturinn er með plötum soðnum við sig.
- **Titilreitur:** merking hluta, samsetningarmerking, snið, efni, lengd, magn, þyngd hvers og heildarþyngd, heiti líkans og dagsetning.

Fyrir U-prófíl, hornjárn eða holsnið er blaðið eins, horft á sálina eða hliðina: veggir rörs eru faldar (strikaðar) línur, þversniðið sýnir veggþykktina.

Fyrir plötu: flöt plötunnar með götum sínum, og brún hennar sem þversnið.

## Mælikvarðar

Mælikvarðinn er valinn af lista (1:1 upp í 1:200) svo hluturinn passi á blaðið. Langur, grunnur hlutur yrði of þunnur til að lesa í einum mælikvarða, þannig að þegar dýptin yrði undir 30 mm á pappír er dýptin teiknuð í stærri mælikvarða en lengdin. Titill sýnarinnar segir það þá, til dæmis „lengd 1:20, dýpt 1:5 (ekki í sama mælikvarða; málsetningar gilda)“. Lesið stærðir alltaf af málsetningunum, ekki með því að mæla blaðið.

## Gott að vita

- Magnið er fjöldi hluta með þeirri merkingu í líkaninu. Merkingar geta endurnúmerast eftir breytingu; sjá [Athugaðu merkingar og efnislista](topic:marks-and-bom).
- Hvert blað er einn hluti út af fyrir sig, án suðutákna; samsetningarteikningar (með suðutáknum) og yfirlitsteikningar eru í [Teikningum](topic:drawings). Ekki er hægt að breyta né skrifa athugasemdir á blaðið í DetailCraft. Til að merkja það, opnaðu PDF-skrána í PDF-merkingarforriti eins og MarkupCraft.
- Titilreiturinn segir „DetailCraft tilraunaútgáfa — millimetrar“.
- Texti notar staðlaða PDF-leturgerðina Helvetica. Tákn utan vesturevrópska stafasettsins prentast sem „?“, og stöðustikan telur þau.

## Prentun

Opnaðu sóttu PDF-skrána í PDF-skoðaranum og prentaðu hana í 100% (án „passa á síðu“) á pappír í þeirri stærð sem þú valdir ef þú vilt að gefnir mælikvarðar standist. Á minna blaði skalaðu hana og treystu málsetningunum.
