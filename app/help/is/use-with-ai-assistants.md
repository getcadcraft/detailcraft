---
title: Notaðu DetailCraft með gervigreindaraðstoðarmanni
summary: Leyfðu eigin gervigreindaraðstoðarmanni eða skriftu að lesa líkanið, stykki, vandamál og árekstra, bæta við stykkjum og tengingum, vista og flytja út (USD líka): heimildir, tenging í gegnum CadCraft Studio og virknilistinn.
keywords: gervigreind, aðstoðarmaður, umboðsmaður, mcp, model context protocol, skrifta, sjálfvirkni, stykki, árekstrar, tengingar, heimildir, aftengja, virkni, afturkalla
from: d624c9a0
---

## Hvað þú lærir

Hvernig þú leyfir gervigreindaraðstoðarmanni (eða skriftu sem þú skrifaðir) að vinna með DetailCraft, og hvernig þú ákveður hvað hann má snerta.

DetailCraft hefur **enga gervigreind sjálft** og sendir ekkert neitt. Þú kemur með aðstoðarmanninn: hvaða forrit sem talar Model Context Protocol (MCP). DetailCraft gefur honum aðeins verkfæri, og þú velur hver.

## Kveiktu á því

1. Opnaðu {{ui:Stillingar}} (tannhjólið í forritastikunni, eða {{key:Mod+,}}) og farðu í flipann {{ui:DetailCraft}}.
2. Undir {{ui:Aðstoðarmenn}} hakarðu við **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota DetailCraft**. Það er slökkt þar til þú gerir það.
3. Veldu hvað það má gera: **Lesa** er hakað sjálfgefið; hakaðu við **Breyta**, **Vista** eða **Flytja út** aðeins þegar þú þarft þá.

Verkfæri utan heimildanna sem þú hakaðir við eru ekki boðin aðstoðarmanninum, og ef hann biður um eitt þeirra samt, hafnar DetailCraft því og skrifar það í virknilistann. Að slökkva á rofanum lokar öllum tengingum í einu.

## Tengdu aðstoðarmanninn

Aðstoðarmenn tengjast í gegnum **CadCraft Studio** á tölvunni þinni: Studio keyrir lítinn netþjón sem aðeins þessi tölva nær til, varinn með lykli sem hann býr til í hvert skipti sem hann ræsist. Í Studio veldurðu {{ui:Tengja aðstoðarmann}} og afritar vistfangið og lykilinn yfir í aðstoðarmanninn (Studio sýnir nákvæmar stillingar sem þú átt að líma inn). Deildu aldrei lyklinum.

:::note
Vafraflipi getur ekki opnað tengingu fyrir aðstoðarmann: í vafraforritunum hefur rofinn engin áhrif fyrr en þú notar CadCraft Studio á tölvunni þinni.
:::

## Þú hefur stjórnina

- **Sérhver breyting er eitt afturkallsskref**, merkt sem breyting aðstoðarmannsins (til dæmis "Assistant: add beam" og "Assistant: add gussets"). {{key:Mod+Z}} tekur til baka síðustu breytingu aðstoðarmannsins í heild. Eigið `undo` aðstoðarmannsins tekur aðeins til baka hans eigin skref, aldrei þín, nema hann biðji sérstaklega um það.
- **Hann bíður eftir þér.** Meðan þú staðsetur stykki, færir hluti eða límir, hafnar DetailCraft breytingum aðstoðarmannsins og segir honum að reyna aftur.
- **Þú veist þegar einn er tengdur.** Hnappur í forritastikunni nefnir aðstoðarmanninn meðan hann er tengdur; smelltu á hann til að sjá hvað hann má, eða til að **Aftengja** hann.
- **Virkni.** {{ui:Stillingar}} › {{ui:DetailCraft}} › {{ui:Aðstoðarmenn}} › {{ui:Virkni}} sýnir hvert kall: hvenær, hvaða verkfæri, og hvort það var lokið eða hafnað. {{ui:Vista atburðaskrána}} geymir afrit.

## Hvað aðstoðarmaður getur beðið um

Allar lengdir eru í millimetrum, punktar `[x, y, z]` með z upp á við, eins og í líkaninu.

| Verkfæri | Heimild | Hvað það gerir |
|---|---|---|
| `app_info`, `model_describe` | Lesa | Líkanið sem er opið: ásnet, hæðir, áfangar, stykki eftir gerð og sniði, tengingar, undirstöður, stigar, hlutar, stálþyngd, vandamál |
| `parts_list` | Lesa | Hlutanúmer með sniði, efni, skurðlengd, fjölda, þyngd, áfanga og samsetningarnúmerum; eftir gerð, sniði, númeri eða áfanga |
| `problems_list` | Lesa | Það sem flipinn {{ui:Vandamál}} sýnir, hvert með því sem það varðar |
| `clash_check` | Lesa | [Árekstrarathugunin](topic:clash-check), með þoli og áföngum |
| `selection_get` | Lesa | Það sem þú hefur valið |
| `selection_set` | Breyta | Velur stykki, tengingar, undirstöður eða stiga (eftir auðkenni eða hlutanúmeri) til að sýna þér þá; breytir engu |
| `member_add` | Breyta | Bita, súlu, skástífu eða plötu milli tveggja punkta |
| `connection_add` | Breyta | Endaplötur, skerflipa, grunnplötur, skeyti eða styrkjara þar sem gefnu stykkin mætast, eins og {{ui:Tengja}}-hnapparnir gera |
| `undo` | Breyta | Tekur til baka síðustu skref aðstoðarmannsins |
| `model_save` | Vista | Vistun DetailCraft sjálfs |
| `model_export` | Flytja út | IFC, NC-skrár, BOM, beygjuáætlun, KISS-skrá eða skurðarlisti, eins og {{ui:Útkoma}}-hnapparnir gera |
| `usd_export` | Flytja út | Stálslíkanið sem USD (.usda, .usdc eða .usdz), eins og {{ui:Útkoma}} › {{ui:USD}} skrifar það (sjá [Flytja út stálslíkanið sem USD](topic:usd)); í Studio getur það skrifað skrána í möppu sem þú leyfðir |

## Ef eitthvað virkar ekki

- **Aðstoðarmaðurinn sér engin DetailCraft-verkfæri:** athugaðu að rofinn sé kveiktur í þessum glugga, og að glugginn sé opinn í Studio.
- **„needs the edit permission“** (eða vista, flytja út): hakaðu við það undir {{ui:Aðstoðarmenn}} og spurðu síðan aftur.
- **„The person is placing a member“:** ljúktu því sem þú ert að gera (eða ýttu á {{key:Esc}}), og leyfðu síðan aðstoðarmanninum að reyna aftur.
- **„401“ eða „token“ villur:** lykillinn breyttist (Studio var endurræst, eða {{ui:Nýr lykill}}). Afritaðu nýja lykilinn í stillingar aðstoðarmannsins.

## Sjá einnig

- [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes): unnin dæmi, hvert með verkfærunum sem það kallar á.
