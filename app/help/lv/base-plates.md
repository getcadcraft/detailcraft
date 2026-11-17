---
title: Balstplāksnes un enkurstieņi
summary: Novietot zem kolonnas metinātu balstplāksni ar četriem enkurstieņiem, iestatīt tās izmērus un kopēt uz visām līdzīgām kolonnām.
keywords: balstplāksne, pamatplāksne, enkurstieņi, enkurskrūves, turošās skrūves, kolonnas pamats, pamata skrūves, līdzīgs
from: 619ebc64
---

Balstplāksnes savienojums novieto plāksni zem kolonnas, saīsina kolonnu par plāksnes biezumu, sametina abas daļas kopā un pievieno četrus enkurstieņus, kas iet caur caurumiem plāksnē.

:::warning
Izmēri ir sākumvērtības, nevis projekts. DetailCraft nepārbauda balstspēju, stieņu izturību un iestiprinājuma dziļumu.
:::

## Balstplāksnes pievienošana

1. Izvēlieties {{ui:Atlasīt}} ({{key:V}}) un noklikšķiniet uz kolonnas. Tai jābūt vertikālai.
2. Izvēlieties {{ui:Balstplāksne}} grupā {{ui:Savienot}} vai {{ui:Pievienot pamatplāksni}} panelī {{ui:Rekvizīti}}.
3. Statusa joslā rakstīts: "Balstplāksne pievienota ar četriem enkurstieņiem." Jaunais savienojums ir atlasīts.

Kolonnai var būt viena balstplāksne. Ja tai jau ir, statusa joslā rakstīts: "Šai kolonnai jau ir balstplāksne."

## Maiņa

Atlasiet balstplāksni (noklikšķiniet uz plāksnes vai stieņa). Sadaļā {{ui:Plāksne, skrūves un metinājums (mm)}}:

| Iestatījums | Noklusējums | Ko tas dara |
|---|---|---|
| Plāksnes biezums | 25 | Kolonna tiek saīsināta par tādu pašu lielumu |
| Plāksnes garums | 450 | Pa kolonnas dziļumu |
| Plāksnes platums | 400 | Pāri kolonnai |
| Stieņa diametrs | 20 | Enkurstieņa izmērs |
| Cauruma diametrs | 33 | Caurums plāksnē |
| Skrūvju klase | F1554 Gr 36 | Stieņa klase kā teksts |
| Stieņu solis (pa dziļumu) | 350 | Starp stieņu centriem pa plāksnes garumu |
| Stieņu solis (šķērsām) | 300 | Starp stieņu centriem šķērsām |
| Stieņa izvirzījums virs plāksnes | 100 | No plāksnes augšas līdz stieņa augšai |
| Stieņa iestiprinājums zem plāksnes | 450 | No plāksnes apakšas lejup betonā |
| Stūra metinājuma izmērs | 8 | Visapkārt kolonnas pamatnei |
| Plāksnes materiāls | A36 | Teksts |
| Javas sprauga | 0 | Atstarpe starp betona augšu un plāksnes apakšu |
| Stingrinātāji | Nav | Izvēlieties Nav, 2 (vienā līnijā ar sienu) vai 4 (arī taisni pret to); skatiet tālāk |
| Stingrinātāja biezums, augstums | 12, 150 | |
| Bīdes ķīļa dziļums | 0 | Cik tālu ķīlis sniedzas zem plāksnes; 0 = nav ķīļa |
| Bīdes ķīļa biezums, platums | 25, 150 | |
| Plāksnes paplāksnes | Nav | Uz katra stieņa vai nevienā |
| Paplāksnes izmērs, biezums | 0, 0 | 0 = minimālais lielums pēc AISC Design Guide 1 šim stienim |

Stieņa garums = iestiprinājums + javas sprauga + plāksnes biezums + izvirzījums. Ar noklusējuma vērtībām tas ir 575 mm.

## Balstplāksnes detaļas: java, stingrinātāji, bīdes ķīlis, paplāksnes

Visi četri ir izslēgti jaunai balstplāksnei un balstplāksnēm no modeļiem, kas izveidoti pirms DetailCraft 0.4.

- **Javas sprauga.** Plāksne atrodas tikpat augstu virs betona augšas, un stieņi par to kļūst garāki. AISC Design Guide 1 (2.10) iesaka 1 in. uz gatavas grīdas un 1½ līdz 2 in. uz pamata vai pīlāra; vairāk lielām plāksnēm un plāksnēm ar bīdes ķīli.
- **Stingrinātāji.** Vertikālas plāksnes, kas metinātas pie kolonnas un balstplāksnes, no kolonnas virsmas līdz plāksnes malai, kā taisnstūri (vēl bez nošķelšanas vai sašaurināšanas). **2** atrodas vienā līnijā ar sienu, aiz katra flanša; **4** pievieno vēl divus taisni pret sienu, starp flanšiem, līdz plāksnes malām. Caurules kolonnā tie atrodas katras virsmas vidū. Katrs ir metināts pie kolonnas un plāksnes abās pusēs.
- **Bīdes ķīlis.** Plāksne, kas visapkārt metināta zem balstplāksnes, vienā līnijā ar kolonnas dziļumu, centrēta. DetailCraft brīdina, ja tā nav dziļāka par javas spraugu. Tā neizgriež ieplaku pamatā; [sadursmju pārbaude](topic:clash-check) šā iemesla dēļ neiekļauj ķīli un pamatu.
- **Plāksnes paplāksnes.** Kvadrātveida plāksnes paplāksne uz katra stieņa, balstoties uz balstplāksnes; kolonnas komplektā tā norādīta kā brīva (tiek piegādāta kopā ar kolonnu, nav metināta: Design Guide 1, 2.6). Ar izmēru un biezumu 0 DetailCraft ņem minimālo paplāksni no AISC Design Guide 1, 2. izdevums, 2.3. tabula šim stienim; metriskam stienim tiek ņemts nākamais collu izmērs (M20 stienis iegūst 7/8 in. rindu: 2½ in. × 5/16 in.). Rekvizītu panelī redzams izmantotais izmērs. Paplāksnes caurums ir stieņa diametrs + 1/16 in.: to izvēlējies DetailCraft, tabula to nedod. DetailCraft brīdina, ja stieņi, iespējams, nepietiekami izvirzās, lai paplāksnei un uzgrieznim būtu vieta (izvirzījums mazāks par paplāksnes biezumu + stieņa diametru).

AISC Design Guide 1, 2.3. tabula arī iesaka stieņa caurumu plāksnē: 1-5/16 in. ¾ in. stienim, 1-9/16 in. ⅞ in. stienim, 1-13/16 in. 1 in. stienim. DetailCraft neizmaina jūsu cauruma izmēru.

Brīdinājumi parādās arī tad, ja stieņu caurumi ir tuvāk plāksnes malai nekā 1.2 × cauruma diametrs, ja stieņi atrodas kolonnas kontūrā vai ja plāksne ir mazāka par kolonnu.

## Kopēšana uz līdzīgām kolonnām

1. Atlasiet balstplāksni.
2. Izvēlieties {{ui:Piemērot līdzīgiem (n)}} vai {{ui:Līdzīgs}} grupas {{ui:Savienot}} izvēlnē {{ui:Vairāk}}.
3. Katrai vertikālai kolonnai ar tādu pašu profilu, kurai nav balstplāksnes un kura nestāv uz citas kolonnas, tiek izveidota kopija.

## Balstplāksnes un pamati

Balstplāksnei pamats nav vajadzīgs, un pamats nezina par virs tā esošo balstplāksni: enkurstieņi netiek savienoti ar pamata armatūras stieņiem. Pamatus novietojiet ar {{ui:Pamats}}; skatiet [Pamatu novietošana ar armatūru](topic:footings-and-rebar).
