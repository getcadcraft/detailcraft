---
title: DetailCraft'i kasutamine tehisintellekti assistendiga
summary: Lase oma tehisintellekti assistendil või skriptil lugeda mudelit, selle osi, probleeme ja kokkupõrkeid, lisada elemente ja ühendusi, salvestada ja eksportida (ka USD): load, ühendamine CadCraft Studio kaudu ja tegevuslogi.
keywords: ai, tehisintellekt, assistent, agent, mcp, model context protocol, skript, automatiseerimine, osad, kokkupõrked, ühendused, load, ühenduse katkestamine, tegevus, võta tagasi
from: d624c9a0
---

## Mida sa õpid

Kuidas lasta tehisintellekti assistendil (või sinu kirjutatud skriptil) DetailCraft'iga töötada ja kuidas otsustada, mida see tohib puudutada.

DetailCraft'il **ei ole oma tehisintellekti** ega saada midagi kuhugi. Assistendi toob sina: mis tahes programm, mis räägib Model Context Protocol'i (MCP). DetailCraft annab sellele ainult tööriistu ja sina valid, millised.

## Lülita sisse

1. Ava {{ui:Sätted}} (hammasratas rakenduse ribal või {{key:Mod+,}}) ja mine vahekaardile {{ui:DetailCraft}}.
2. Jaotises {{ui:Assistendid}} märgi **Luba tehisintellekti assistentidel ja skriptidel DetailCraft'i kasutada**. See on algul väljas.
3. Vali, mida see tohib teha: **Lugemine** on algul märgitud; märgi **Redigeerimine**, **Salvestamine** või **Eksport** ainult siis, kui neid vaja on.

Tööriistad, mis jäävad märgitud õiguste välja, ei ole assistendile pakutud, ja kui ta siiski küsib, keeldub DetailCraft ning kirjutab selle tegevuslogisse. Lüliti väljalülitamine lõpetab kõik ühendused korraga.

## Ühenda assistent

Assistendid ühenduvad sinu arvutis asuva **CadCraft Studio** kaudu: Studio käivitab väikese serveri, mida pääseb ligi ainult sellest arvutist ja mida kaitseb token, mille see igal käivitamisel loob. Studios vali {{ui:Ühenda assistent}} ja kopeeri aadress ning token oma assistenti (Studio näitab täpseid seadeid, mida kleepida). Ära kunagi jaga tokenit.

:::note
Brauserivahekaart ei saa avada ühendust assistendile: brauserirakendustes lüliti ei mõju enne, kui kasutad oma arvutis CadCraft Studio't.
:::

## Sina jääd juhiks

- **Iga muudatus on üks tagasivõtmise samm**, märgitud assistendi omana (näiteks „Assistent: lisa tala“, „Assistent: lisa tugiplaadid“). {{key:Mod+Z}} võtab assistendi viimase muudatuse tervikuna tagasi. Assistendi enda `undo` võtab tagasi ainult tema samme, mitte sinu omi, kui ta seda just selgelt ei palu.
- **Ta ootab sind.** Kui paigutad elementi, liigutad osi või kleebid, keeldub DetailCraft assistendi muudatustest ja palub tal uuesti proovida.
- **Sa tead, kui see on ühendatud.** Rakenduse ribal olev nupp nimetab assistenti, kui see on ühendatud; klõpsa seda, et näha, mida ta tohib, või **Katkesta ühendus**.
- **Tegevus.** {{ui:Sätted}} › {{ui:DetailCraft}} › {{ui:Assistendid}} › {{ui:Tegevus}} loetleb iga kutse: millal, milline tööriist, tehtud või keeldutud. {{ui:Salvesta logi}} hoiab koopia.

## Mida assistent võib küsida

Kõik pikkused on millimeetrites, punktid `[x, y, z]` z-telg üles, nagu mudelis.

| Tööriist | Luba | Mida see teeb |
|---|---|---|
| `app_info`, `model_describe` | Lugemine | Avatud mudel: ruudustikud, tasandid, faasid, elemendid tüübi ja profiili järgi, ühendused, vundamendid, trepid, osad, terase kaal, probleemid |
| `parts_list` | Lugemine | Detailimärgised koos profiili, materjali, lõikepikkuse, arvu, kaalu, faasi ja koostemärgistega; tüübi, profiili, märgise või faasi järgi |
| `problems_list` | Lugemine | Mida vahekaart {{ui:Probleemid}} loetleb, iga punkt koos sellega, millest see räägib |
| `clash_check` | Lugemine | [Kokkupõrkekontroll](topic:clash-check), koos selle tolerantsi ja faasidega |
| `selection_get` | Lugemine | Mis on sinu valitud |
| `selection_set` | Redigeerimine | Valib elemendid, ühendused, vundamendid või trepid (id või detailimärgise järgi), et neid sulle näidata; midagi ei muuda |
| `member_add` | Redigeerimine | Tala, post, diagonaal või plaat kahe punkti vahel |
| `connection_add` | Redigeerimine | Otsaplaadid, nihkeplaadid, aluseplaadid, skarvid või tugiplaadid, kus antud elemendid kohtuvad, nagu nupud {{ui:Ühenda}} teevad |
| `undo` | Redigeerimine | Võtab assistendi viimased sammud tagasi |
| `model_save` | Salvestamine | DetailCraft'i enda salvestamine |
| `model_export` | Eksport | IFC, NC-failid, BOM, painutusloend, KISS-fail või lõikenimekiri, nagu need teevad nupud {{ui:Väljund}} |
| `usd_export` | Eksport | Terasmudel USD-na (.usda, .usdc või .usdz), nagu kirjutab {{ui:Väljund}} › {{ui:USD}} (vt [Terasmudeli eksportimine USD-na](topic:usd)); Studios saab see kirjutada faili kausta, mille lubasid |

## Kui midagi ei tööta

- **Assistent ei näe DetailCraft'i tööriistu:** kontrolli, et lüliti on selles aknas sisse lülitatud ja et aken on Studios avatud.
- **„vajab redigeerimisõigust“** (või salvestamise, ekspordi õigust): märgi see jaotises {{ui:Assistendid}}, seejärel küsi uuesti.
- **„Kasutaja paigutab elementi“:** lõpeta, mida teed (või vajuta {{key:Esc}}), seejärel lase assistendil uuesti proovida.
- **„401“ või „token“ vead:** token muutus (Studio taaskäivitati või {{ui:Uus token}}). Kopeeri uus token assistendi seadetesse.

## Vaata ka

- [Retseptid tehisintellekti assistentidele](common:assistants-recipes): töötavad näited, igaüks koos tööriistadega, mida see kutsub.
