---
title: ’n Rondleiding deur die skerm
summary: Elke balk, paneel en oortjie in DetailCraft volgens sy naam op die skerm, en waarvoor elkeen is.
keywords: skerm, uitleg, nutsbalk, paneel, eienskappe, statusbalk, verslae, koppelvlak, ui, oortjies
from: 94f81073
---

DetailCraft vul die blaaiervenster onder die programbalk. Van bo na onder: die nutsbalk, dan drie kolomme (die {{ui:Model}}-paneel, die aansig, die {{ui:Eienskappe}}-paneel), dan die verslagoortjies, dan die statusbalk.

## Die programbalk

Die dunne balk heel bo hoort by die CadCraft-webwerf, nie by die model nie. Dit wys die programnaam en weergawe, ’n skakel na {{ui:Oor DetailCraft}}, {{ui:Hulp}} (of {{key:F1}}) vir hierdie hulp, {{ui:Stoor vir vanlyn}}, die skermmodusknoppie en die {{ui:Papier}} / {{ui:Model}}-skakelaar.

- {{ui:Stoor vir vanlyn}} hou DetailCraft, sy 3D-aansig en hierdie hulp in jou blaaier, sodat dit sonder ’n verbinding oopmaak. Dit lees {{ui:Vanlyn gereed}} sodra dit gestoor is; klik dan daarop vir {{ui:Stoor weer (kry die nuutste weergawe)}} of {{ui:Verwyder die vanlyn-kopie}}. Sien [Werk vanlyn](common:offline).
- {{ui:Papier}} gee ’n ligte skerm en {{ui:Model}} ’n donker een. Die 3D-aansig volg dadelik; niks in jou model verander nie.
- Die skermmodusknoppie en {{key:Ctrl+Shift+F}} wissel deur normaal, volskerm, en volskerm met die balke versteek. {{key:Ctrl+Shift+F}} gebruik die Control-sleutel op elke rekenaar, ook ’n Mac. Met die balke versteek, wys na die boonste rand van die skerm (of tik daarop) om hulle terug te bring. {{key:Esc}} verlaat volskerm.

## Die nutsbalk

Die nutsbalk het vyf groepe. Hou die muiswyser oor ’n knoppie om te sien wat dit doen en sy sleutel.

| Groep | Knoppies | Wat hulle doen |
|---|---|---|
| {{ui:Lêer}} | {{ui:Nuut}}, {{ui:Maak oop}}, {{ui:Voer IFC in}}, {{ui:Stoor}}, {{ui:Voorbeeld}} | Begin ’n model, maak ’n gestoorde `.detailcraft.json` of ’n IFC-lêer oop, stoor een, of maak die voorbeeldraamwerk oop |
| {{ui:Plaas}} | {{ui:Kies}}, {{ui:Balk}}, {{ui:Kolom}}, {{ui:Skoor}}, {{ui:Plaat}}, {{ui:Fondasie}}, {{ui:Trap}} | Die gereedskap wat die volgende klik in die aansig gebruik |
| {{ui:Koppel}} | {{ui:Eindplate}}, {{ui:Basisplaat}}, en in {{ui:Meer}}: {{ui:Skuifplate}}, {{ui:Skarf}}, {{ui:Kopplaat}}, {{ui:Soortgelyk}} | Voeg ’n verbinding by die gekose balk, kolom of skoor, of kopieer die gekose verbinding na elke soortgelyke knoop |
| {{ui:Wysig}} | {{ui:Ontdoen}}, {{ui:Herdoen}}, {{ui:Kopieer}}, {{ui:Plak}}, {{ui:Meer}} | Gaan terug en vorentoe deur wysigings; kopieer die keuse en plak dit. {{ui:Meer}} maak ’n kieslys oop met {{ui:Knip}}, {{ui:Kopieer}}, {{ui:Plak}}, {{ui:Plak op dieselfde plek}}, {{ui:Dupliseer}}, {{ui:Skrap}}, {{ui:Kies alles}} en {{ui:Kies niks}}, elk met sy sleutel |
| {{ui:Uitvoer}} | {{ui:IFC}}, {{ui:NC-lêers}}, {{ui:BOM}}, {{ui:Werkswinkeltekening}}, {{ui:Tekeninge}}, en in {{ui:Meer}}: {{ui:Buig}}, {{ui:Gewigsverslag per fase}}, {{ui:KISS-lêer vir vervaardigingsagteware}} | Laai ’n uitvoer af, of maak die tekeningblaaie oop |

Knoppies en kieslysitems wat nie nou kan optree nie, is grys, en as jy oor een hou, sê dit waarom. {{ui:Eindplate}} benodig ’n gekose balk, {{ui:Basisplaat}} ’n gekose kolom, {{ui:Soortgelyk}} ’n gekose verbinding, {{ui:Werkswinkeltekening}} ’n model met dele, {{ui:Kopieer}} ’n gekose lid of fondasie, en {{ui:Plak}} iets wat gekopieer is. Sien [Kopieer, plak en dupliseer](topic:copy-paste).

## Die Model-paneel (links)

- {{ui:Model}}: die model se {{ui:Naam}}. Dit noem elke lêer wat jy stoor of uitvoer.
- {{ui:Roosters}}: die roosterlyne en hul spasiëring, en {{ui:Pas roosters toe}}. Sien [Stel roosters en vlakke op](topic:grids-and-levels).
- {{ui:Vlakke}}: een ry per vlak (naam en hoogte in mm), {{ui:Voeg vlak by}} en {{ui:Pas vlakke toe}}.
- {{ui:Pasgemaakte profiel}}: maak jou eie parametriese snit. Toe totdat jy dit oopmaak.
- {{ui:Deelmerke}}: elke onderdeelmerk in die model met sy profiel, lengte en telling. Klik op ’n merk om die eerste deel daarmee te kies.

{{ui:Roosters}}, {{ui:Vlakke}} en {{ui:Pasgemaakte profiel}} vou weg: klik op hul opskrifte.

## Die aansig (middel)

Die aansig wys die model in 3D. Bo dit het die aansigbalk drie knoppies en ’n lys:

- {{ui:3D}}: draai vry om die model.
- {{ui:Plan}}: kyk reguit af na een vlak. ’n Lys van vlakke verskyn langs die knoppies. Alles meer as 1.5 m bo die vlak word weggesny, sodat jy die vlak duidelik kan sien en klik.
- {{ui:Aansig}}: kyk reguit na een roosterlyn met ’n letter (Rooster A, Rooster B …). ’n Lys van roosters met letters verskyn. Net die staal binne 1 m van daardie lyn word gewys.

- Die passaknoppie aan die regterkant van die aansigbalk zoem in om die hele model te wys.

Klein stippies merk elke roosterkruising op elke vlak. Terwyl ’n plaasgereedskap aan is, lig die stippie naaste aan die wyser op en die statusbalk noem dit, byvoorbeeld "A/2 by Vlak 1". Kleure onderskei die lidtipes: kolomme, balke, skore en plate elk het sy eie kleur, bouts en stawe ’n ander, fondasies is deursigtig en wapening word as buise geteken. Gate wys as donker proppe; uitsnydings is gesny.

Hoe om te draai, te pan en te zoem: [Beweeg rond in die 3D-aansig](topic:navigate-3d).

As die model leeg is, wys die aansig ’n kort lys "Begin ’n model". Jy kan ook ’n gestoorde modellêer enige plek op die aansig laat val om dit oop te maak.

## Die Eienskappe-paneel (regs)

Wat hierdie paneel wys, hang af van wat jy doen, en sy opskrif sê watter een: "Model", "Plaas ’n balk", "Balk b2", "Eindplaatverbinding", "Basisplaat", "Fondasie F1", "3 gekies" of "Plak".

- **Niks gekies nie:** ’n opsomming van die model (lede, verbindings, fondasies, dele, merke, bouts, staal- en wapeninggewig, roosters, vlakke).
- **’n Plaasgereedskap aan:** die opsies vir die volgende stuk (profiel, materiaal, posisie, rotasie, en vir kolomme {{ui:Tot}}), ’n opsomming van die gekose profiel, en ’n {{ui:Voeg by rooster}}-vorm om sonder klik in die aansig te plaas.
- **’n Lid gekies:** sy naam, profiel, materiaal, posisie, rotasie, die koördinate van sy twee punte, sy merke, snylengte en gewig, sy gate en uitsnydings, en knoppies vir verbindings, sy werkswinkeltekening en {{ui:Skrap}}.
- **’n Verbinding gekies:** elke plaat-, bout- en lasinstelling, die bouts en las wat dit maak, sy waarskuwings, en {{ui:Pas op soortgelyke toe}}.
- **’n Fondasie gekies:** sy posisie en grootte, die onderste mat, die beginstawe, en die staafmerke wat dit gebruik.
- **Verskeie dinge gekies:** hoeveel lede van elke tipe, verbindings en fondasies, hul staalgewig, en {{ui:Kopieer}}, {{ui:Dupliseer}} en {{ui:Skrap}}.
- **Plak:** wat op die knipbord is, en vorms om volgens ’n getikte verskuiwing of op ’n roosterkruising wat jy uit lyste kies, te plak.

Getalvelde tree in werking wanneer jy {{key:Enter}} druk of die veld verlaat. Elke verandering is een stap wat jy kan ontdoen.

## Die verslagoortjies (onder)

- {{ui:Probleme}}: alles wat DetailCraft nie kon bou nie of wil hê jy moet nagaan, met ’n {{ui:Kies}}-knoppie op elke reël. Die oortjie wys die telling tussen hakies.
- {{ui:Materiaallys}}: dele, samestellings, en bouts en ankerstawe, met gewigte en ’n {{ui:Laai CSV af}}-skakel. Klik op ’n onderdeelmerk om daardie deel te kies.
- {{ui:Buigskedule}}: elke staafmerk in elke fondasie, met ’n {{ui:Laai CSV af}}-skakel.

Met ’n oortjie in fokus, beweeg {{key:Left}} en {{key:Right}} tussen oortjies.

## Die statusbalk

Die balk langs die onderkant het drie dele: die roosterkruising onder die wyser terwyl jy plaas, die jongste boodskap (wat net gebeur het, of waarom iets geweier is), en lopende totale van dele, bouts, staalgewig en wapeninggewig. As ’n handeling lyk asof dit niks doen nie, lees eers die boodskap hier.

Die blaaieroortitel begin met ’n stippie (•) solank die model veranderinge het wat jy nog nie gestoor het nie.

## Op ’n smal skerm

Onder ongeveer 760 pixels breed stapel die kolomme: nutsbalk, aansig, statusbalk, {{ui:Eienskappe}}, verslagoortjies, en die {{ui:Model}}-paneel laaste. Rol die bladsy om hulle te bereik. DetailCraft is vir ’n rekenaar- of skootrekenaarskerm uitgelê; ’n foon werk om te kyk, nie om te detailleer nie.
