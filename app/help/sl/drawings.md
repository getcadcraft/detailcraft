---
title: Splošne in sestavne risbe
summary: Iz modela izdelajte tlorise, poglede in eno sestavno risbo za vsako oznako sestava, na listih A4 do A1 ali ANSI B do D, jih izdajte z revizijskimi črkami in prenesite kot PDF, DWG ali DXF.
keywords: skrite črte, odstranjevanje skritih črt, črtkano, revizijski oblak, oblaki, revizijski trikotnik, tloris sidrnih palic, sidrne palice, shema palic, shema podložnih plošč, zakoličba, izdaja, revizija, rev, revizijska tabela, ponovna izdaja, dnevnik izdaj, pošiljka dokumentov, dwg, dxf, datoteka cad, izvoz risb, risbe, splošna razporeditev, tloris, pogled, sestavna risba, velikost lista, velikost papirja, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, tisk, merilo, glava risbe, sklic na model
from: 709f8604
---

Izberite {{ui:Risbe}} v skupini {{ui:Izhod}}. DetailCraft izdela celoten komplet iz modela, kakršen je zdaj. Nič se ne shrani: spremenite model, znova odprite {{ui:Risbe}} in komplet se izdela znova.

## Kaj je v kompletu

- **Tlorisi**, po en za vsak nivo, na katerem je kaj, gledano od zgoraj.
- **Pogledi**, po eden za vsako mrežno os, pri kateri so elementi znotraj 1 m od nje.
- **Tloris sidrnih palic**, kadar ima model podložne plošče: vsaka podložna plošča, gledana od zgoraj, s stebrom in sidrnimi palicami, mreže z njihovimi merami, tipični detajl vsake sheme palic (BP1, BP2 …) z razmikom palic in robnimi razdaljami ter dve tabeli: sidrne palice po oznaki (R1, R2 …: količina, premer, dolžina, izstopanje nad ploščo, vgraditev, razred) in podložne plošče po mreži (steber, shema, plošča, palice, zgornji rob plošče). Steber zunaj mreže je določen s svojimi koordinatami.
- **Sestavne risbe**, po ena za vsako oznako sestava: pogled od spredaj, zgoraj in s strani, verižne mere do lukenj in robov plošč, seznam delov, prosti vijaki in palice ter opombe o varih in luknjah. Vsaka varjena plošča ima v pogledu od spredaj simbol kotnega vara (AWS A2.4): puščica kaže na spoj, trikotnik pod referenčno črto pomeni stran puščice, številka levo od njega je velikost vara v mm, krog tam, kjer puščica sreča črto, pa pomeni okoli celotnega spoja.

**Skrite črte.** Tlorisi in pogledi izpustijo črte dela, kjer ga v celoti pred njim pokriva drug del (nosilec, gledan s konca za stebrom). Sestavne risbe črtkano narišejo ploščo tam, kjer jo prekriva glavni del: za steno v pogledu od spredaj (gledano z strani −u dela), pod zgornjo pasnico v pogledu od zgoraj. Deli, ki so na isti globini ali se globinsko prekrivajo, so narisani v celoti.

Vsak list ima glavo risbe s številko risbe, merilom, imenom modela, datumom, številko lista z velikostjo lista in **sklicem na model**: kodo, izdelano iz shranjenega modela, da se izpis lahko ujame z modelom, iz katerega izvira.

## Izberite velikost lista

Velikost izberite na seznamu na vrhu okna {{ui:Risbe}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ali {{ui:ANSI D}} (22 × 34 in). Vsi listi so ležeči. Komplet se takoj izdela znova v novi velikosti, enaka velikost pa se uporabi tudi za delavniške risbe. Je tudi v [nastavitvah DetailCraft](topic:settings#drawings), ta brskalnik pa si jo zapomni.

- Večji list riše v večjem merilu. Merila so vedno standardna (1:10, 1:20, 1:25, 1:50, 1:100 in tako naprej).
- Besedilo ostane enako veliko na vsakem listu, zato je pri tisku berljivo.
- Na majhnem listu lahko dolga, tanka sestava dobi večje merilo po globini kot po dolžini. Naslov pogleda nato navede obe meril, odločilne pa so mere.

## Izdaja risb in revizije

Vrstica nad predogledom pove, v kakšnem stanju je prikazani list: **Še ni izdano**, **revizija B, izdano …; nespremenjeno od takrat** ali, rdeče, **Spremenjeno od revizije B: potrebna ponovna izdaja**. Seznam listov označi izdane liste z revizijo in tiste, ki potrebujejo ponovno izdajo.

- Vpišite, za kaj je izdaja (privzeto je „Izdano za izdelavo“), in izberite {{ui:Izdaj ta list}} ali {{ui:Izdaj spremenjene liste}} za vse liste, ki so novi ali so se od zadnje izdaje spremenili.
- Prva izdaja lista je revizija A, nato B, C in tako naprej (črki I in O se preskočita).
- Glava risbe prikaže številko risbe z revizijo („A-B1  rev B“), poleg nje pa revizijska tabela našteje zadnje izdaje: revizijo, datum in opis. Na majhnem listu prikaže toliko vrstic, kolikor jih gre.
- List se spremeni, ko se spremeni, kar je na njem narisano: premaknjen element, nova luknja, preštevilčena oznaka. Datum, število listov in sama revizijska tabela se ne štejejo. Sprememba velikosti lista spremeni vse liste.
- Dnevnik izdaj je shranjen v datoteki modela, izdaja pa je en korak razveljavitve. [Datoteka KISS](topic:kiss-export) prenese zadnjo revizijo vsake risbe.

### Revizijski oblaki

Od druge izdaje lista naprej je vsak element ali temelj, ki se je spremenil, narisan znotraj revizijskega oblaka z revizijskim trikotnikom, v katerem je črka.

- Medtem ko se list od zadnje izdaje spreminja, oblaki kažejo, kaj se je od takrat spremenilo, v trikotniku pa je prihodnja revizija (revizija B izdana in spremenjena: trikotniki kažejo C).
- Ko jo izdate, oblaki ostanejo na listu te revizije, kot na natisnjenem kompletu, dokler se list znova ne spremeni.
- Vsak list oblači le spremembe, ki jih prikazuje. Tlorisi in pogledi ne rišejo lukenj in izrezov, zato oblačijo element, ki se je premaknil, zavrtel ali spremenil velikost, ali element, katerega oznaka se je spremenila. Sestavne risbe in tloris sidrnih palic oblačijo tudi nove ali premaknjene luknje in izreze.
- Šteje se preštevilčena oznaka: ko sprememba naredi nosilec za novo sestavo, se nosilci, katerih oznaka se je pomaknila navzgor (B1 v B2), v tlorisih in pogledih oblačijo.
- Izbrisan del ne pusti ničesar za oblačenje.
- Listi, izdani pred revizijskimi oblaki (DetailCraft 0.4), začnejo oblačiti pri naslednji izdaji.
- Oblaki so v prenosih PDF, DXF in DWG, sami po sebi pa se nikoli ne štejejo kot sprememba.

## Prenos

Izberite obliko na seznamu ob gumbih, nato {{ui:Ta list}} za prikazani list ali {{ui:Vsi listi}} za celoten komplet.

- **PDF**: za tisk ali pošiljanje. {{ui:Vsi listi}} naredi en PDF, eno stran na list, vsaka stran v izbrani velikosti.
- **DWG**, v formatu 2018, 2013, 2010, 2007, 2004 ali 2000: za odpiranje listov v programu CAD. Za starejši program izberite starejši format.
- **DXF (R12)**: različica, ki jo odpre skoraj vsak program CAD.

List DWG ali DXF je narisan v polni velikosti: ena enota risbe je en milimeter na papirju, zato se natisne v merilu 1:1 in vsak pogled ohrani merilo, ki ga navaja njegov naslov. Vsako pero je svoj sloj: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID in tako naprej, z debelino črte (DWG) in s črtkanjem. Besedilo je v slogu besedila DetailCraft (Arial). Mere so črte in številke, ki jih vidite, ne kotni objekti. {{ui:Vsi listi}} da datoteke DWG ali DXF v eno zip datoteko, po ena datoteka na list.

:::note
DXF R12 nima debelin črt in polnil: sloji ohranijo svoja imena, zato pera nastavite po slojih, ko tiskate, oblike s polnilom pa so izpuščene (vrstica stanja pove, koliko jih je).
:::

Tiskajte pri 100 % (brez „prilagodi na stran“) na papirju iste velikosti, če želite, da navedena merila držijo.
