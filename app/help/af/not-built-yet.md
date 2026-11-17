---
title: Wat nog nie gebou is nie
summary: Wat hierdie vroeë DetailCraft-bou nie kan doen nie, en wat jy vandag in plaas daarvan kan doen.
keywords: beperkings, limiete, ontbrekend, padkaart, nie ondersteun nie, binnekort, beplan, tydelike oplossing, te-doen
from: ea411885
---

DetailCraft is 'n vroeë bou. Hierdie bladsy lys wat dit nog nie doen nie, sodat jy daaromheen kan beplan. Niks hier is 'n belofte van 'n datum nie.

## Modellering

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Sleep een einde van 'n lid (rek dit) | Wysig {{ui:Begin}} of {{ui:Einde}} onder {{ui:Eindpunte (x, y, z mm)}} in die {{ui:Eienskappe}}-paneel |
| 'n Kiesfilter (net balke, net een profiel) | Sleep 'n venster, dan {{key:Shift}}+klik om dele uit te haal |
| Skik 'n keuse in 'n reeks; draai om 'n skuins as; spieël in 'n skuins vlak | Kopieer en plak dit met 'n verskuiwing, of {{ui:Dupliseer}} dit; draai en spieël werk in grondplan ([Kies per venster, skuif, draai, spieël, verander baie](topic:select-and-change)) |
| Punte buite die rooster wanneer jy klik | Plaas op die rooster, dan tik die eindkoördinate |
| Aansigte langs genommerde roosterlyne; gestoorde aansigte; werkvlakke | Gebruik {{ui:3D}}, of {{ui:Voeg by rooster}} |
| Gate wat as werklike snitte in die 3D-aansig geteken word | Gate wys as donker proppe; hulle is werklik in elke uitvoer |
| Afgeronde of skuins uitsnitte, ander snitte en toebehore | Vierkantige uitsnitte op I-vorms net |
| Gate wat jy by hoeke en ronde buise voeg | Hoekgate kom net van [skoorkopplate](topic:brace-gussets) |
| Imperiale invoer | Tik millimeter in (25.4 per duim) |
| Wysig of verwyder 'n pasgemaakte profiel | Voeg 'n verbeterde profiel onder 'n nuwe naam by |

## Trappe

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Leuninge, landings, bordplate, roosterstrepe, spiraaltrappe en L-trappe | Net reguit lope; sien [Trappe](topic:stairs) |
| Stringer-eindsnitte teen die vloere | Vierkantig gesnyde stringers; snit hulle in jou werkswinkelprogram |

## Verbindings

DetailCraft bou ses verbindings: 'n skoorkopplaat (sien [Skoorkopplate](topic:brace-gussets)); 'n geboutde skarnier tussen twee stukke van een I-vorm (sien [Skarnierings](topic:splices)); 'n gaffelvoeg tussen twee I-vorms wat by 'n hoek ontmoet, net gesny of met geboutde eindplate (sien [Gaffelvoegings](topic:mitres)); 'n gelykvlakke of verlengde geboutde eindplaat vanaf 'n vlak, regop I-vorm-balk na 'n I-vorm-kolomflens of -lyf; 'n skuifoor vanaf 'n balk (vierkantig, skeef of skuins) na 'n kolomflens of -lyf; en 'n kolombasisplaat met vier ankerstawe.

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Skeef of skuins eindplate | Gebruik [skuifore](topic:shear-tabs), wat skeef en skuins balke neem |
| Klemhoeke; skarnier-vulplate en skarniere tussen verskillende groottes; hoekskoorkopplate wat aan balk en kolom gelas is; afgeskuinsde kopplate | Teken dit in ander sagteware, of voeg plate en gate met die hand by as losse dele; sien [Skarnierings](topic:splices), [Skoorkopplate](topic:brace-gussets) |
| Afgeskuinsde of taps toelopende basisversteviging; vulmiddelgate; die fondasie-holte vir 'n skuiflip | Reghoekige verstywings; sien [Basisplate](topic:base-plates) |
| Aanskuiwings; gelaste gaffels met 'n stompnaat; verstywings in lyn met die ander lid se flense | 'n [Gaffelvoeg](topic:mitres) met eindplate en lyfverstywings, of 'n gewone gaffelsnit; voeg ander plate met die hand by as losse dele |
| Verbindingsontwerpkontroles (sterkte) | Kontroleer verbindings met jou ingenieur se berekeninge; DetailCraft waarsku net oor randafstand en spasiëring |
| Gleufgate | Net ronde gate |

## Analise

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Ontwerpkontroles verder as staal-I-vorms: buise, hoeke, kanale, gelaste vorms, slanke of klas 4-dele, wringing, verbindings; beton: swaai-slankheid, wringing, seismiese detaillering, plate en mure | Die {{ui:Ontleding}}-oortjie kontroleer staal-I-vorms teen AISC 360 of EN 1993-1-1 ([Kontroleer staalelemente teen 'n ontwerpkode](topic:design-checks)); die res laat dit as "nie gekontroleer nie" gemerk; 'n ingenieur hersien alles |
| Knikanalise, vibrasie | Tweede orde is net P-Delta (elasties); geen knikanalise nie (modaal, responsspektrum, tydgeskiedenis en pushover is in die Ontleding-oortjie) |
| Ontwerpkontroles wat 'n ingenieur hersien het | Hulle is 'n hulpmiddel tot dan: kontroleer twee of drie lede met die hand of in jou ingenieur se eie sagteware voordat jy op hulle staatmaak |
| Vloer-, wind- en sneeulaste wat vir jou uit oppervlaktes gemaak word | Plaas laste op lede met die hand, in kN/m of kN |
| Lidverskuiwings, eksentriese verbindings, trek-slegs-skoore, plate en fondamente in die raam | Lede word ontleed op hul werklyne; skoore dra trek en druk |

## Wapening

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Ronde kolomme, spirale, skuins of geboë balke, plate behalwe reghoeke, mure wat nie reguit is nie | Reghoekige balke, kolomme, plate en mure ([Detailleer gewapende beton](topic:reinforced-concrete)) |
| Stawe wat in 'n oorlapping gebuig is, verspringde oorlappings, oorlappings wat jy kies | Oorlappings op gelyke stappe, elke staaf oorlap by een snit (ACI Klas B, EN α6 = 1.5) |
| Hoekstawe by openings, ponsskuifwapening, seismiese detaillering (ACI 318-19 hoofstuk 18) | Trimmers aan elke kant van 'n opening; kontroleer die res self |
| Lees 'n strukturele ontwerpprogram se eie lêers | Voer IFC daaruit uit: sy IfcReinforcingBar kom in as stawe ([Stawe uit 'n IFC-lêer](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Vormkodes buite reguit, een buiging en 'n U; ACI 315-tipes vir reguit en een-haak-stawe | Die drie vorms word as BS 8666 00, 11, 21 of ACI Tipe 2 gedruk; sien [Wapeningsverwysing](topic:rebar-reference) |
| Metrieke stawe behalwe BS 4449 H8–H40 (bv. CSA 10M–35M) | ASTM sag-metrieke name #10–#36, of BS-stawe |

## Tekeninge en uitvoere

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Portretbladsye, A0, en bladsye van jou eie grootte; algemene-skikkingsaansigte op skeef roosters | Liggende A4 tot A1 en ANSI B tot D ([Algemene skikkings- en samestellingstekeninge](topic:drawings)); skaal die PDF om op 'n ander grootte te druk |
| Lassimbole op enkelonderdeel-werkswinkeltekeninge; simbole anders as kantlasse | Samestellingstekeninge dra kantlassimbole; die werkswinkeltekening gee die las as teks |
| Wysig 'n tekening in die program | Verander die model en maak die tekening weer; merk die PDF op in 'n PDF-program soos MarkupCraft |
| Tekeninge as DWG met maatobjekte, of die model op volle skaal in modelruimte met die blaaie as uitlegte | Elke blad is 'n volgrootte DWG of DXF van die papier, afmetings as lyne en syfers ([Algemene skikkings- en samestellingstekeninge](topic:drawings#download)) |
| NC-gate in ronde buise, uitsnitte op hoeke en ronde buise in NC-lêers | Nie geskryf nie; sien [NC-lêervelde](topic:nc1-fields) |
| Skuinssnitte, merkings en binnelyne in NC-lêers | Niks vandag nie |
| Boutgate, bouts, lasse en fondamente in die USD-uitvoer | Hulle is in die IFC-, NC- en BOM-uitvoere; sien [Voer die staalmodel uit as USD](topic:usd) |
| Verbindings, fondamente, gleuf- of reghoekige gate en gate in ronde buise inbring uit 'n IFC-lêer | {{ui:Voer IFC in}} bring balke, kolomme, lede, plate, roosters, vlakke, ronde gate, uitsnitte, bouts en wapeningstawe in, en die verslag lys wat dit gelaat het |
| Pasgemaakte verslaguitlegte | Die drie CSV-lêers |

## Panele

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Die verslae onder ({{ui:Probleme}}, {{ui:Materiaallys}}, {{ui:Buigskedule}}) skuif | Slegs die {{ui:Model}}- en {{ui:Eienskappe}}-panele skuif. Sien [Rangskik die panele](common:arrange-panels) |

## Saam werk en stoor

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Wolkberging en sinkronisering tussen rekenaars | Stoor `.detailcraft.json`-lêers en deel hulle soos enige lêer. Wolkberging is nog nie beskikbaar nie |
| Ander mense se wysers en "wysig"-etikette in 'n Live TeamWork-sessie; roosters, vlakke en fases saamgevoeg item vir item | Wysigings word steeds saamgevoeg (roosters, vlakke en fases gaan heel oor, die latere verandering wen); sien [Detailleer een struktuur saam, lewendig](topic:work-live) |
| Uitnodigingskakels na 'n Live TeamWork-sessie oor die internet | Sluit aan met 'n kort kode op dieselfde netwerk |

## Platforms

- DetailCraft is gemaak vir 'n rekenaar-, skootrekenaar- of tabletskerm. Dit werk ook op 'n foon: die model hou die skerm en die panele, en verslae open as blaaie vanaf 'n balk onder, maar daar is min ruimte vir die panele.
- Aflyn-gebruik vereis dat DetailCraft eers vir vanlyn-gebruik gestoor word, met {{ui:Stoor vir vanlyn}} in die programbalk; sodra dit {{ui:Vanlyn gereed}} lees, werk alles in hierdie bou sonder 'n verbinding. Sien [Werk vanlyn](common:offline).

As een van hierdie gapings jou werk blokkeer, vertel ons deur die [ondersteuningsbladsy](https://getcadcraft.com/support); dit help ons besluit wat om volgende te bou.
