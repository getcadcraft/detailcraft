---
title: Opšti raspored i crteži sklopova
summary: Napravi osnove, izglede i jedan crtež sklopa po oznaci sklopa iz modela, na listovima A4 do A1 ili ANSI B do D, izdaj ih s revizionim slovima i preuzmi kao PDF, DWG ili DXF.
keywords: skrivene linije, uklanjanje skrivenih linija, isprekidano, revizioni oblak, oblaci, revizioni trougao, plan sidrenih šipki, sidrene šipke, spisak šipki, spisak baznih ploča, postavljanje, izdavanje, revizija, rev, revizijska tabela, ponovno izdavanje, dnevnik izdavanja, transmittal, dwg, dxf, CAD datoteka, izvoz crteža, crteži, opšti raspored, ga, osnova, izgled, crtež sklopa, veličina lista, format papira, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, štampa, razmjera, naslovni blok, referenca modela
from: 709f8604
---

Izaberi {{ui:Crteži}} u grupi {{ui:Izlaz}}. DetailCraft pravi cijeli skup iz modela onakvog kakav je sada. Ništa se ne čuva: promijeni model, ponovo otvori {{ui:Crteži}} i skup se pravi ponovo.

## Šta je u skupu

- **Osnove**, po jedna za svaki nivo na kome nešto stoji, gledano odozgo.
- **Izgledi**, po jedan za svaku mrežnu liniju s elementima unutar 1 m od nje.
- **Plan sidrenih šipki**, kada model ima bazne ploče: svaka bazna ploča gledana odozgo sa svojim stubom i sidrenim šipkama, mreže s njihovim kotama, tipičan detalj svakog uzorka šipki (BP1, BP2 …) s razmakom šipki i udaljenostima od ivica, i dva spiska: sidrene šipke po oznaci (R1, R2 …: količina, prečnik, dužina, istak iznad ploče, ukopavanje, kvalitet) i bazne ploče po mreži (stub, uzorak, ploča, šipke, gornja ivica ploče). Stub van mreže se označava svojim koordinatama.
- **Crteži sklopova**, po jedan za svaku oznaku sklopa: pogledi sprijeda, odozgo i sa kraja, lančane kote do rupa i ivica ploča, spisak dijelova, slobodni vijci i šipke, te napomene o varovima i rupama. Svaka zavarena ploča ima simbol ugaonog vara u pogledu sprijeda (AWS A2.4): strelica pokazuje na spoj, trougao ispod referentne linije znači stranu strelice, broj lijevo od njega je dimenzija vara u mm, a kružić tamo gdje strelica dodiruje liniju znači oko cijelog spoja.

**Skrivene linije.** Osnove i izgledi izostavljaju linije dijela tamo gdje ga u potpunosti pokriva dio koji je ispred njega (greda gledana s kraja iza stuba). Crteži sklopova crtaju ploču isprekidano tamo gdje je pokriva glavni dio: iza rebra u pogledu sprijeda (gledano sa strane −u dijela), ispod gornjeg pojasa u pogledu odozgo. Dijelovi koji su na istoj dubini ili se preklapaju po dubini crtaju se u cijelosti.

Svaki list ima naslovni blok s brojem crteža, razmjerom, nazivom modela, datumom, brojem lista s veličinom lista i referencu modela: šifru napravljenu od sačuvanog modela, pa se odštampani primjerak može povezati s modelom iz kojeg je nastao.

## Odaberi veličinu lista

Izaberi veličinu na listi na vrhu prozora {{ui:Crteži}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ili {{ui:ANSI D}} (22 × 34 in). Svi listovi su položeni. Skup se odmah pravi ponovo na novoj veličini, a ista veličina se koristi i za radioničke crteže. Također je u [DetailCraft postavkama](topic:settings#drawings), a ovaj pregledač je pamti.

- Veći list crta se u većoj razmjeri. Razmjere su uvijek standardne (1:10, 1:20, 1:25, 1:50, 1:100 i tako dalje).
- Tekst ostaje iste veličine na svakom listu, pa ostaje čitljiv pri štampi.
- Na malom listu dugačak, tanak sklop može imati veću razmjeru po dubini nego po dužini. Naslov pogleda tada navodi obje razmjere, a kote su mjerodavne.

## Izdavanje crteža i revizije

Linija iznad pregleda kaže u kakvom je stanju prikazani list: **Još nije izdat**, **Rev B, izdat …; nepromijenjen od tada** ili, crveno, **Promijenjeno od rev B: potrebno ponovno izdavanje**. Lista listova označava izdate listove s njihovom revizijom i one kojima treba ponovno izdavanje.

- Upiši čemu izdanje služi (u početku piše „Izdato za izradu”) i izaberi {{ui:Izdaj ovaj list}}, ili {{ui:Izdaj izmijenjene listove}} za svaki list koji je nov ili se promijenio od posljednjeg izdanja.
- Prvo izdanje lista je revizija A, pa B, C i tako dalje (I i O se preskaču).
- Naslovni blok prikazuje broj crteža s revizijom („A-B1  rev B”), a pored njega revizijska tabela navodi posljednja izdanja: revizija, datum i opis. Na malom listu prikazuje onoliko koliko stane.
- List se „mijenja” kada se promijeni ono što je na njemu nacrtano: pomjeren element, nova rupa, preimenovana oznaka. Sam datum, broj listova i revizijska tabela se ne računaju. Promjena veličine lista mijenja svaki list.
- Dnevnik izdanja se čuva u datoteci modela, a izdavanje je jedan korak poništavanja. [KISS datoteka](topic:kiss-export) nosi posljednju reviziju svakog crteža.

### Revizioni oblaci

Od drugog izdanja lista nadalje, svaki dio ili temelj koji se promijenio crta se unutar revizionog oblaka s revizionim trouglom koji nosi slovo.

- Dok se list promijenio od posljednjeg izdanja, oblaci pokazuju šta se promijenilo od tada, a sljedeća revizija je u trouglu (rev B izdat i promijenjen: trouglovi kažu C).
- Kada ga izdaš, oblaci ostaju na listu te revizije, kao u odštampanom skupu, dok se list ponovo ne promijeni.
- Svaki list oblači samo promjene koje prikazuje. Osnove i izgledi ne crtaju rupe ni izreze, pa oblače element koji se pomjerio, okrenuo ili promijenio veličinu, ili čija se oznaka promijenila. Crteži sklopova i plan sidrenih šipki također oblače nove ili pomjerene rupe i izreze.
- Preimenovana oznaka se računa: kada promjena od grede napravi novi sklop, grede čija se oznaka pomjerila gore (B1 u B2) oblače se na osnovama i izgledima.
- Dio koji je obrisan ne ostavlja ništa da se oblači.
- Listovi izdati prije uvođenja revizionih oblaka (DetailCraft 0.4) počinju s oblacima od sljedećeg izdanja.
- Oblaci su u PDF, DXF i DWG preuzimanjima i sami se nikad ne računaju kao promjena.

## Preuzimanje

Izaberi format na listi pored dugmadi, pa {{ui:Ovaj list}} za prikazani list ili {{ui:Svi listovi}} za cijeli skup.

- **PDF**: za štampu ili slanje. {{ui:Svi listovi}} pravi jedan PDF, jednu stranicu po listu, svaka stranica odabrane veličine.
- **DWG**, u formatu 2018, 2013, 2010, 2007, 2004 ili 2000: za otvaranje listova u CAD programu. Izaberi stariji format za stariji program.
- **DXF (R12)**: verzija koju gotovo svaki CAD program otvara.

List DWG ili DXF crta se u punoj veličini: jedna jedinica crteža je jedan milimetar na papiru, pa se štampa u 1:1 i svaki pogled zadržava razmjeru koju navodi njegov naslov. Svako pero je zaseban sloj: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID i tako dalje, sa svojom debljinom linije (DWG) i isprekidanjem. Riječi su tekst u DetailCraft stilu teksta (Arial). Kote su linije i brojevi koje vidiš, a ne objekti kota. {{ui:Svi listovi}} stavlja DWG ili DXF datoteke u jedan zip, jedna datoteka po listu.

:::note
DXF R12 nema debljine linija ni ispune: slojevi zadržavaju svoje nazive, pa postavi pera po sloju kada štampaš, a ispunjeni oblici se izostavljaju (statusna traka kaže koliko).
:::

Štampaj na 100 % (bez „prilagodi stranici”) na papiru iste veličine ako želiš da navedene razmjere važe.
