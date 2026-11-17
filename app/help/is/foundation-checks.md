---
title: Athuganir á undirstöðu
summary: Athugið undirstöður, samsettar undirstöður og plötur á jarðvegi sem þú lýsir, setmyndun, sveigjanlega plötu á gormum, staurahópa og haldveggi. Hjálpargagn fyrir verkfræðing til yfirferðar.
keywords: undirstaða, samsett undirstaða, plata, setmyndun, undirlagsstuðull, gormar, jaðarsúla, hornsúla, burður, skrið, velting, gegnumstunga, einátta skurður, beygja, festing, lágmarksstál, staurahópur, haldveggur, ACI 318-19
from: 6961ad52
---

:::warning
Þetta eru fyrstu-stigs athuganir sem verkfræðingur á að yfirfara, ekki hönnunarsamþykki. Leyfilegur burðarþrýstingur og núningsstuðullinn eru þín mál: DetailCraft þekkir ekki jarðveginn þinn.
:::

Flipinn {{ui:Undirstaða}} athugar undirstöðurnar í líkaninu gegn súluálögunum sem þú gefur þeim.

## Lýstu jarðveginum

Sláðu inn {{ui:Leyfilegur burðarþrýstingur}} og {{ui:Núningsstuðull undirstöðu}}. Bæði byrja á 0, sem merkir ekki skráð: athugunin sýnir þá þrýstinginn sem athugasemd og segir ekki að hann standist. Fyrir setmyndun sláðu inn stuðul jarðvegsins {{ui:Es}} (MPa), Poissonstuðul hans og leyfilega setmyndun (25 mm til að byrja með). Fyrir sveigjanlega plötu sláðu inn undirlagsstuðul {{ui:ks}}. Fyllingin yfir undirstöðunni, eðlisþyngd jarðvegsins, öryggisstuðlar fyrir skrið og velting (1.5 til að byrja með) og flotmörk stálstanganna eru líka þar.

## Gefðu álögin

Hver undirstaða er með lista yfir súluálög. Notaðu {{ui:Bæta við súluálagi}} og fylltu inn notkunarlínuna (fyrir burð, skrið og velting) og hönnunarlínuna með stuðlum (fyrir styrkleikaathuganir): lóðrétta álagið P niður, láréttu kraftana Vx og Vy á efri brún undirstöðunnar, momentin Mx og My, stöðu súlunnar á undirstöðunni og stærð hennar.

Eða keyrðu flipann {{ui:Greining}} og ýttu á {{ui:Taka súluálag úr greiningunni}}: sérhver stuðningur sem stendur á undirstöðu verður að súluálagi, úr notkunar- og hönnunarsettunum sem þú velur. Jákvætt My álagar +x hlið undirstöðunnar meira; jákvætt Mx álagar −y hliðina meira.

## Hvað er athugað

Út frá notkunarálögunum, með eigin þyngd undirstöðunnar og fyllingunni bætt við:

- **Burður:** þrýstingurinn undir stífri undirstöðu. Innan miðþriðjungs liggur öll undirstaðan að; utan hans lyftist hluti hennar frá og hámarkið er hærra. Samverkandi kraftur utan undirstöðunnar stenst ekki.
- **Skrið:** núningur sinnum lóðrétta álagið gegn láréttu kraftinum.
- **Velting:** fjarlægð samverkandi krafts frá jaðrinum.
- **Setmyndun:** teygjanleg setmyndun meðalþrýstings á hálfrúmi með stuðlinum sem þú gafst, í miðju og á horni (lausn Timoshenkos og Goodiers fyrir sveigjanlegan ferhyrning), miðað við mörkin. Þetta er efri mörk fyrir stífa undirstöðu og sleppir jarðlagi með takmarkaða dýpt, léttingu af grafnum jarðvegi og þjöppun. Án stuðuls sýnir hún þrýstinginn sem athugasemd.

Út frá hönnunarsúluálögunum einum (ACI 318-19):

- **Beygja** við súluflötinn, með lágmarksstáli (0.0018 fyrir 420 MPa stangir) og stöngunum sem þú teiknaðir.
- **Einátta skurður** í fjarlægðinni d frá fletinum.
- **Gegnumstunguskurður** í d/2 umhverfis hverja súlu, með moment súlunnar. Fyrir súlu nærri jaðri er viðmiðunarsniðið skorið af jaðri undirstöðunnar (þrjár hliðar við jaðar, tvær við horn, ACI 318-19 22.6.4.1 og minni αs í töflu 22.6.5.2), og momentið um miðju sniðsins sjálfs tekur með tilfærslu álagsins.
- **Festing** stanganna framhjá súluflötinum, beinna eða með krókum.
- **Dýpt** yfir neðstu stöngunum (150 mm).

Samsett undirstaða eða plata er tekin sem stíf, og skurðkraftar og moment koma úr stöðufræði á sniðum þvert yfir alla breiddina.

## Sveigjanleg plata á gormum

Hakaðu við {{ui:Greina þessa undirstöðu sem sveigjanlega plötu á gormum}} þegar undirstaðan ber margar súlur og stífa undirstaðan er of gróf. Undirstaðan verður að plötu úr fjögurra hnúta frumefnum á bedi af gormum ({{ui:ks}} sem þú slóst inn, dreift á hnútana), og álag hverrar súlu er dreift á hnúta eigin grunnflatar. Önnur tafla gefur mesta jarðvegsþrýsting og setmyndun (og mismuninn á mesta og minnsta), beygjumomentið í hvora átt með stálinu sem þarf, tog efst miðað við styrk venjulegrar steypu (undirstaða hefur engar efri stangir), einátta skurð í d frá súlunum og gegnumstungu út frá þrýstingi gormanna sjálfra. Netið er fínkvarðað þar til súla er þrjú frumefni á breidd; stór plata tekur nokkrar sekúndur. Eigin þyngd plötunnar og jarðvegurinn ofan á henni vega hvort annað upp og eru látin sleppt.

Sérhver athugun sem stenst ekki er í glugganum {{ui:Vandamál}} ásamt ákvæðinu.

## Staurahópar og haldveggir

{{ui:Bæta við staurahópi}} setur net staura undir stífa hettu: sláðu inn álagið og momentin og hvað einn staur má bera í þrýstingi og togi (tölur staurahönnunarinnar, ekki þessa flipa). Viðbragð hvers staurs er P/n auk hlutdeildar hans í momentunum (teygjuaðferðin), og mesti þrýstingur og allt tog er athugað.

{{ui:Bæta við haldvegg}} athugar útskagaðan vegg á sléttri uppfyllingu, á hvern metra: virkan Rankine-þrýsting, velting um tána, skrið og þrýsting undir undirstöðunni. Óvirkur þrýstingur fyrir framan tána er ekki tekinn með. Aðstoðarmaðurinn þinn getur keyrt sömu athuganir með `pile_group_check` og `retaining_wall_check`.

Staurahópar, veggir og plötuvalið eru vistaðir í líkanaskránni, og athugun sem stenst ekki er í {{ui:Vandamál}}.
