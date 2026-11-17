---
title: Crteži opšteg rasporeda i sklopova
summary: Napravi osnove, izglede i po jedan crtež sklopa za svaku oznaku sklopa iz modela, na listovima od A4 do A1 ili ANSI B do D, izdaj ih sa slovnim revizijama i preuzmi ih kao PDF, DWG ili DXF.
keywords: skrivene linije, uklanjanje skrivenih linija, isprekidano, revizioni oblak, oblaci, revizioni trougao, plan sidrenih šipki, sidrene šipke, spisak šipki, spisak osnovnih limova, obeležavanje, izdanje, revizija, rev, tabela revizija, ponovno izdanje, dnevnik izdanja, transmitalni list, dwg, dxf, CAD fajl, izvoz crteža, crteži, opšti raspored, plan, izgled, crtež sklopa, veličina lista, veličina papira, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, štampa, razmera, natpisni blok, referenca modela
from: 709f8604
---

Izaberi {{ui:Crteži}} u grupi {{ui:Izlaz}}. DetailCraft pravi ceo skup od modela kakav je sada. Ništa se ne čuva: promeni model, ponovo otvori {{ui:Crteži}} i skup se pravi ponovo.

## Šta je u skupu

- **Osnove**, jedna za svaki nivo na kome ima nešto, gledano odozgo.
- **Izgledi**, jedan za svaku liniju mreže sa elementima u rastojanju od 1 m od nje.
- **Plan sidrenih šipki**, kad model ima osnovne limove: svaki osnovni lim gledan odozgo, sa svojim stubom i sidrenim šipkama, linije mreže sa svojim kotama, tipičan detalj svakog rasporeda šipki (BP1, BP2 …) sa razmakom šipki i rastojanjima do ivica, i dva spiska: sidrene šipke po oznaci (R1, R2 …: količina, prečnik, dužina, istak iznad lima, ugrađena dužina, klasa) i osnovni limovi po mreži (stub, raspored, lim, šipke, gornja ivica lima). Stub van mreže određen je svojim koordinatama.
- **Crteži sklopova**, jedan za svaku oznaku sklopa: pogledi sprijeda, odozgo i sa kraja, lančane kote do rupa i ivica limova, spisak delova, rasuti zavrtnji i šipke, i napomene o zavarima i rupama. Svaki zavareni lim ima simbol ugaonog zavara u pogledu sprijeda (AWS A2.4): strelica pokazuje na spoj, trougao ispod referentne linije znači stranu strelice, brojka levo od njega je veličina zavara u mm, a kružić tamo gde strelica dodiruje liniju znači zavarivanje sa svih strana.

**Skriveni vodovi.** Osnove i izgledi izostavljaju linije dela kad ga u celini pokriva deo koji stoji ispred njega (greda gledana sa kraja iza stuba). Crteži sklopova crtaju lim isprekidano tamo gde ga pokriva glavni deo: iza rebra u pogledu sprijeda (gledano sa −u strane dela), ispod gornje pojasnice u pogledu odozgo. Delovi koji stoje na istoj dubini, ili se preklapaju po dubini, crtaju se u punoj liniji.

Svaki list ima natpisni blok sa brojem crteža, razmerom, nazivom modela, datumom, brojem lista sa veličinom lista i referencom modela: šifrom napravljenom od sačuvanog modela, pa se odštampani primerak može uporediti sa modelom iz kog je nastao.

## Izaberi veličinu lista

Izaberi veličinu na listi na vrhu prozora {{ui:Crteži}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ili {{ui:ANSI D}} (22 × 34 in). Svaki list je položen. Skup se odmah pravi ponovo na novoj veličini, a ista veličina se koristi i za radioničke crteže. Nalazi se i u [DetailCraft podešavanjima](topic:settings#drawings), a ovaj pregledač je pamti.

- Veći list se crta u većoj razmeri. Razmere su uvek standardne (1:10, 1:20, 1:25, 1:50, 1:100 i tako dalje).
- Tekst ostaje iste veličine na svakom listu, pa ostaje čitljiv kad se štampa.
- Na malom listu dugačak, tanak sklop može imati veću razmeru po dubini nego po dužini. Naslov pogleda tada navodi obe razmere, a kote su merodavne.

## Izdavanje crteža i revizije

Red iznad pregleda kaže u kakvom je stanju prikazani list: **Još nije izdat**, **Rev B, izdat … ; nepromenjen od tada**, ili, crveno, **Promenjen od rev B: potrebno ponovno izdavanje**. Spisak listova obeležava izdate listove njihovom revizijom, a listove kojima treba ponovno izdavanje.

- Upiši čemu je izdanje (u početku piše „Izdato za izradu“) i izaberi {{ui:Izdaj ovaj list}}, ili {{ui:Izdaj promenjene listove}} za svaki list koji je nov ili se promenio od poslednjeg izdanja.
- Prvo izdanje lista je revizija A, pa B, C i tako dalje (I i O se preskaču).
- Natpisni blok pokazuje broj crteža sa njegovom revizijom („A-B1  rev B“), a pored njega tabela revizija navodi poslednja izdanja: revizija, datum i opis. Na malom listu prikazuje koliko stane.
- List se menja kad se promeni ono što je na njemu nacrtano: pomeren element, nova rupa, preimenovana oznaka. Datum, broj listova i sama tabela revizija se ne računaju. Promena veličine lista menja svaki list.
- Dnevnik izdanja se čuva u fajlu modela, a izdavanje je jedan korak poništavanja. [KISS fajl](topic:kiss-export) nosi najnoviju reviziju svakog crteža.

### Revizioni oblaci

Od drugog izdanja lista nadalje, svaki deo ili temelj koji se promenio crta se unutar revizionog oblaka sa revizionim trouglom u kome je slovo.

- Dok se list menja od poslednjeg izdanja, oblaci pokazuju šta se promenilo od tada, sa sledećom revizijom u trouglu (rev B izdat i promenjen: trouglovi kažu C).
- Kad ga izdaš, oblaci ostaju na listu te revizije, kao na odštampanom skupu, dok se list opet ne promeni.
- Svaki list oblači samo promene koje prikazuje. Osnove i izgledi ne crtaju rupe ni zasečke, pa oblače element koji se pomerio, okrenuo ili promenio veličinu, ili čija se oznaka promenila. Crteži sklopova i plan sidrenih šipki oblače i nove ili pomerene rupe i zasečke.
- Preimenovana oznaka se računa: kad promena napravi gredu novim sklopom, grede čija je oznaka prešla na veći broj (B1 u B2) oblače se na osnovama i izgledima.
- Deo koji je obrisan ne ostavlja ništa za oblačenje.
- Listovi izdati pre uvođenja revizionih oblaka (DetailCraft 0.4) počinju da se oblače od sledećeg izdanja.
- Oblaci su u PDF, DXF i DWG preuzimanjima i sami se nikad ne računaju kao promena.

## Preuzimanje

Izaberi format u listi pored dugmadi, pa {{ui:Ovaj list}} za prikazani list ili {{ui:Svi listovi}} za ceo skup.

- **PDF**: za štampu ili slanje. {{ui:Svi listovi}} pravi jedan PDF, sa po jednom stranom za svaki list, svaka strana izabrane veličine.
- **DWG**, u formatu 2018, 2013, 2010, 2007, 2004 ili 2000: za otvaranje listova u CAD programu. Izaberi stariji format za stariji program.
- **DXF (R12)**: verzija koju gotovo svaki CAD program otvara.

DWG ili DXF list se crta u punoj veličini: jedna jedinica crteža je jedan milimetar na papiru, pa se štampa u 1:1 i svaki pogled zadržava razmeru koju njegov naslov navodi. Svaka olovka je svoj sloj: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID i tako dalje, sa svojom debljinom linije (DWG) i svojim crticama. Reči su tekst u stilu teksta DetailCraft-a (Arial). Kote su linije i brojevi koje vidiš, a ne objekti kota. {{ui:Svi listovi}} stavlja DWG ili DXF fajlove u jedan zip, po jedan fajl za svaki list.

:::note
DXF R12 nema debljine linija ni popune: slojevi zadržavaju svoja imena, pa olovke podesi po sloju kad štampaš, a popunjeni oblici se izostavljaju (statusna traka kaže koliko ih je).
:::

Štampaj na 100 % (bez „uklapanja na stranu“) na papiru iste veličine ako želiš da navedene razmere važe.
