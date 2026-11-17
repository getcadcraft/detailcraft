---
title: Koma frá öðrum teikningahugbúnaði
summary: Hvernig venjur úr fullkomnum smáatriðahugbúnaði yfirfærast yfir í DetailCraft, og munurinn sem kemur reyndum smáatriðateiknurum á óvart.
keywords: skipti, flutningur, kunnuglegt, verkflæði, samanburður, munur, númerun, íhlutir, vörulisti, teikningar, venjur
from: 39639a5d
---

Ef þú teiknar smáatriði í Tekla Structures verður flest í DetailCraft kunnuglegt: ásar, kótar, prófílar úr vörulista, hlutir og samsetningar, tengingar, númerun, NC-skrár, IFC. Umfangið er mjög ólíkt: Tekla Structures er fullkomið framleiðslukerfi, en DetailCraft er lítið og ungt vafraforrit sem gerir fá verk frá enda til enda. Þessi síða segir þér hvar venjur þínar haldast og hvar ekki.

:::tip
Ef hendurnar þekkja borðann í Tekla Structures, veldu valmyndarstílinn {{ui:Stálborði}} í {{ui:Stillingar}} › {{ui:DetailCraft}} › {{ui:Valmyndir, takkar og mús}}: flipana Módelun, Smáatriði, Breyta, Teikningar, Smíði og Sýn, og miðtakkinn hliðrar. Ef þú kemur frá AutoCAD og vilt slá inn skipanir, bætir {{ui:Klassískt teikniforrit}} við skipanalínu (BEAM, COLUMN, ENDPLATE, ZOOM …). Sjá [Valmyndir, takkar og mús](topic:menus-keys-and-mouse).
:::

## Hraðkort

| Þú ert vanur að | Í DetailCraft |
|---|---|
| Búa til ása með hnitum í ásglugga | {{ui:Netlínur}} í vinstra spjaldinu: merki og bil milli lína, ekki algildir hnit. Tölulínur liggja í aðra átt, stafalínur í hina |
| Kótum sem hnitum Z-ása | Sérstakur listi {{ui:Kótar}}, heiti og hæð í hverri röð, beitt með {{ui:Beita kótum}} |
| Að velja punkta hvar sem er með smellifestingu | Smellir festast aðeins á skurðpunkta ása. Punktar utan ása eru slegnir inn í {{ui:Endar (x, y, z mm)}} hlutar |
| Skipanir fyrir súlur, bita og plötur | {{ui:Súla}} ({{key:C}}), {{ui:Biti}} ({{key:B}}), {{ui:Skástífa}} ({{key:R}}), {{ui:Plata}} ({{key:P}}), {{ui:Undirstaða}} ({{key:F}}) |
| Eiginleikagluggi hluta (tvísmelltu á hlut) | Smelltu einu sinni: spjaldið {{ui:Eiginleikar}} hægra megin er alltaf virkt; það er enginn gluggi og enginn hnappur Breyta eða Beita |
| Staðsetning á fleti, snúningur og dýptarstillingar | {{ui:Staðsetning}} (efst á stáli, miðjuð eða neðst á línunni) og {{ui:Snúningur (°)}}. Engar sérstakar láréttar hliðranir |
| Prófílasafnið | Fastur listi yfir 2,311 birt stærðir (AISC W, S, C, L, HSS, Pipe; evrópsk IPE, HEA, HEB, UPN; bresk UB, UC, PFC, EA, UEA, SHS, RHS, CHS og kaldmótuð holprófíl), auk parametrískra platna og þinna eigin {{ui:Sérsniðinna}} prófíla |
| Efnissafnið | Sjö gæðaflokkar í lista: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Notkun á tengingaríhlut og glugga hans | Veldu bitann og veldu {{ui:Endaplötur}}. Stillingarnar birtast í spjaldinu {{ui:Eiginleikar}}. Aðeins tvær tengingar eru til (endaplata við flans súlu, undirplata) |
| Sjálfvirk tenging, eða afritun samskeytis yfir á svipuð samskeyti | Veldu tengingu, veldu {{ui:Beita á svipaðar (n)}} |
| Númerun með röðum og upphafsnúmerum | Engin skipun: merki uppfærast af sjálfu sér eftir hverja breytingu, með föstum forskeytum c, b, br, p og C, B, BR, P |
| Bolta- og gatagluggar | Göt eru slegin inn eftir fleti og staðsetningu. Boltar koma aðeins frá tengingum |
| Skurðar-, passunar- og marghyrningsskurðarverkfæri | Afskurðir (efst eða neðst, í hvorum enda) á I-prófílum eingöngu. Skurður til baka í tengingum er sjálfvirkur |
| Skýrslur og sniðmát | Þrjár fastar skýrslur í flipum neðst, og CSV-niðurhal |
| Gerð teikninga og teikningalistinn | Ein verkstæðisteikning fyrir hvert hlutamerki, allt gert í einu, forskoðað og síðan sótt sem ein PDF eða blað fyrir blað. Ekkert er geymt eða breytt |
| NC-skráaútflutningur | {{ui:NC-skrár}}: ein DSTV-skrá fyrir hvert hlutamerki, aðeins I-prófílar og plötur, þjappað saman |
| IFC-útflutningur | {{ui:IFC}}: IFC4 af öllu líkaninu, með steypustáli |
| Steypustál í hvaða steyptum hluta sem er | Steypustál aðeins í rétthyrndum flatundirstöðum, US-stangastærðir, með neðra neti og upphafsstöngum |
| Líkan vistað í verkmöppu, fyrir marga notendur | Ein `.detailcraft.json` skrá sem þú sækir. Einn notandi, á tölvunni þinni |
| Afturköllunarsaga | {{key:Mod+Z}} og {{key:Mod+Y}}, allt að 200 skref, geymt þar til þú opnar eða byrjar annað líkan |

## Munur sem kemur fólki á óvart

### Merki breytast af sjálfu sér

Það er ekkert númerunarskref. Merki eru endurreiknuð eftir hverja breytingu, þannig að þau eru alltaf rétt, en þau geta líka fengið nýtt númer: bættu við súlu og c3 í gær gæti verið c4 núna. Það er engin „númerunarsaga“ sem geymir gömul merki. Ljúktu við líkanið og gefðu síðan út BOM, NC-skrár og verkstæðisteikningar saman úr einni vistaðri skrá.

### Miðtakkinn aðdrættar; hann hliðrar ekki

Í þrívíddarsýninni: vinstri dráttur snýr, hægri dráttur hliðrar, hjólið aðdrættar, og dráttur með miðtakkanum aðdrættar líka. Með {{key:Shift}} haldið niðri meðan vinstri dráttur hliðrar líka. Hjólið aðdrættar að miðju sýnarinnar, ekki að bendlinum. Það er enginn valmöguleiki á snúningsmiðju: líkanið snýst um miðju sýnarinnar. Sjá [Hreyfa um þrívíddarsýnina](topic:navigate-3d).

### Súlur snúa einni átt sjálfgefið

Við snúning 0 vísa flansar súlu í átt að tölusettu ásunum. Bitar sem liggja á milli stafalína skerast inn í sálina, og endaplötur eru þar hafnaðar („Bitar sem skerast inn í súlusálina eru ekki smíðaðir enn“). Snúðu þessum súlum um 90° áður en þú bætir við tengingum.

### Sýnir aðeins á stafalínum

{{ui:Útlit}} skoðar aðeins eftir stafalínum ása. Það eru engar sýnir eftir tölulínum, engar vistaðar sýnir og engir vinnuflatir. Notaðu {{ui:3D}} eða {{ui:Bæta við eftir ás}} fyrir ramma á tölulínum.

### Val, afritun og færsla

Veldu marga hluti með {{key:Shift}}+smelli eða {{key:Mod+A}}, og afritaðu, klipptu, límdu (á skurðpunkt ása, á slegna færslu eða á staðnum) og tvöfaldaðu þá, tengingar meðtaldar ([Afrita, líma og tvöfalda](topic:copy-paste)). Ekki er hægt að velja með glugga, engin valsía, engin færsla, speglun eða fylki, og eiginleikar eru breyttir einn hlut í einu í spjaldinu {{ui:Eiginleikar}}.

### Ásar draga ekki hluti með sér

Hlutir halda hnitum sínum þegar þú breytir bili ása; ekkert færist með ásalínunum. Breyttu ásnum áður en þú setur stál, eða breyttu endahnitum hvers hlutar á eftir.

### Tengingar eru ekki hannaðar

Tengingarnar tvær setja plötur, göt, bolta og suður eftir tölunum sem þú gefur. Engin hönnunarathugun er gerð, aðeins viðvaranir um brúnarfjarlægð og bil (úr EN 1993-1-8 töflu 3.3).

### Göt eru ekki skorin í þrívíddarsýninni

Göt sjást sem dökkir tappar. Þau eru raunveruleg göt í NC-skránum, verkstæðisteikningunum og IFC-skránni. Afskurðir eru skornir í sýninni.

### Þyngdir eru brúttó

Stálþyngdin dregur ekki frá göt eða afskurði, og boltaþyngdin er ekki með.

### Aðeins millimetrar

Allt er slegið inn og sýnt í millimetrum, líka AISC-prófílar. Prófílaheiti halda birtri mynd sinni (W12x50, HSS6x6x1/4).

### Engar teikningar til að halda utan um

Það er enginn teikningalisti, enginn teikniritill, engar almennar uppstillingar- eða samsetningarteikningar. Verkstæðisteikning er gerð þegar þú biður um hana og henni er síðan hlaðið niður; til að breyta henni þarftu að breyta líkaninu og gera hana aftur.

### Það keyrir í vafra

Vistun sækir skrá. Flýtilyklar sem vafrinn heldur fyrir sjálfan sig er ekki hægt að nota. Líkönin þín fara aldrei úr tölvunni þinni: sjá [Hvert skrárnar þínar fara](common:your-files).

## Það sem þú heldur áfram að gera í núverandi hugbúnaði

Í dag hentar DetailCraft litlum römmum, því að prófa hugmynd, kennslu, eða að framleiða NC-skrár og verkstæðisteikningar fyrir einfalda bita- og súluvinnu. Haltu áfram að nota hugbúnaðinn sem þú notar núna fyrir flóknar tengingar, almennar uppstillingarteikningar, uppsetningarteikningar, fjölnotendaverkefni og allt sem er skráð í [Það sem er ekki smíðað enn](topic:not-built-yet).
