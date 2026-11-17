---
title: Nacrti općeg rasporeda i sklopova
summary: Izradite tlocrte, pročelja i jedan crtež sklopa po oznaci sklopa iz modela, na listovima A4 do A1 ili ANSI B do D, izdajte ih s revizijskim slovima i preuzmite kao PDF, DWG ili DXF.
keywords: skrivene linije, uklanjanje skrivenih linija, isprekidano, revizijski oblak, oblaci, revizijski trokut, tlocrt sidrenih vijaka, sidreni štapovi, popis štapova, popis podložnih ploča, postavljanje, izdanje, revizija, rev, tablica revizija, ponovno izdanje, dnevnik izdanja, otpremnica, dwg, dxf, CAD datoteka, izvoz crteža, crteži, opći raspored, ga, tlocrt, pročelje, crtež sklopa, veličina lista, veličina papira, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, ispis, mjerilo, zaglavlje, referenca modela
from: 709f8604
---

Odaberite {{ui:Crteži}} u grupi {{ui:Izlaz}}. DetailCraft izrađuje cijeli skup iz modela onakvog kakav je sada. Ništa se ne pohranjuje: promijenite model, ponovno otvorite {{ui:Crteži}} i skup se izrađuje iznova.

## Što je u skupu

- **Tlocrti**, po jedan za svaku razinu na kojoj nešto stoji, gledano odozgo.
- **Pročelja**, po jedno za svaku mrežnu liniju s štapovima unutar 1 m od nje.
- **Tlocrt sidrenih vijaka**, kad model ima podložne ploče: svaka podložna ploča gledana odozgo sa svojim stupom i sidrenim štapovima, mreže s njihovim kotama, tipični detalj svakog uzorka štapova (BP1, BP2 …) s razmakom štapova i udaljenostima od rubova te dva popisa: sidreni štapovi po oznaci (R1, R2 …: količina, promjer, duljina, istak iznad ploče, ugradnja, klasa) i podložne ploče po mreži (stup, uzorak, ploča, štapovi, gornji rub ploče). Stup izvan mreže određen je svojim koordinatama.
- **Crteži sklopova**, po jedan za svaku oznaku sklopa: pogled sprijeda, odozgo i s krajeva, kote lancem do rupa i rubova ploča, popis dijelova, slobodni vijci i štapovi te bilješke o zavarima i rupama. Svaka zavarena ploča ima simbol kutnog zavara na pogledu sprijeda (AWS A2.4): strelica pokazuje na spoj, trokut ispod referentne linije znači stranu strelice, broj lijevo od njega je veličina zavara u mm, a krug tamo gdje strelica dodiruje liniju znači zavar oko cijelog spoja.

**Skrivene linije.** Tlocrti i pročelja izostavljaju linije dijela koji potpuno pokriva dio ispred njega (greda gledana s kraja iza stupa). Crteži sklopova crtaju ploču isprekidano tamo gdje je pokriva glavni dio: iza hrpta u pogledu sprijeda (gledano sa strane −u dijela), ispod gornje pojasnice u pogledu odozgo. Dijelovi koji su na istoj dubini ili se preklapaju u dubini crtaju se u cijelosti.

Svaki list ima zaglavlje crteža s brojem crteža, mjerilom, nazivom modela, datumom, brojem lista s veličinom lista i referencom modela: kodom napravljenim iz spremljenog modela, pa se ispis može povezati s modelom iz kojeg dolazi.

## Odaberite veličinu lista

Odaberite veličinu s popisa na vrhu prozora {{ui:Crteži}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ili {{ui:ANSI D}} (22 × 34 in). Svaki list je vodoravno položen. Skup se odmah ponovno izrađuje u novoj veličini, a ista se veličina koristi i za radioničke crteže. Također je u [postavkama programa DetailCraft](topic:settings#drawings), a ovaj preglednik je pamti.

- Veći list crta se u većem mjerilu. Mjerila su uvijek standardna (1:10, 1:20, 1:25, 1:50, 1:100 i tako dalje).
- Tekst je jednake veličine na svakom listu, pa ostaje čitljiv kad se ispiše.
- Na malom listu dugačak, tanak sklop može imati veće mjerilo po dubini nego po duljini. Naslov pogleda tada navodi oba mjerila, a kote vrijede.

## Izdajte crteže i revizije

Redak iznad pregleda kaže u kakvom je stanju prikazani list: **Još nije izdano**, **Rev B, izdano …; nepromijenjeno od tada** ili, crveno, **Promijenjeno od rev B: treba ponovno izdati**. Popis listova označava izdane listove njihovom revizijom, a one koji trebaju ponovno izdanje.

- Upišite čemu je izdanje namijenjeno (počinje kao „Izdano za izradu“) i odaberite {{ui:Izdaj ovaj list}}, ili {{ui:Izdaj promijenjene listove}} za svaki list koji je nov ili se promijenio od posljednjeg izdanja.
- Prvo izdanje lista je revizija A, zatim B, C i tako dalje (I i O se preskaču).
- Zaglavlje crteža pokazuje broj crteža s njegovom revizijom („A-B1  rev B“), a pored njega tablica revizija navodi posljednja izdanja: revizija, datum i opis. Na malom listu prikazuje onoliko koliko stane.
- List se „mijenja“ kad se promijeni ono što je na njemu nacrtano: pomaknut štap, nova rupa, preimenovana oznaka. Datum, broj listova i sama tablica revizija se ne računaju. Promjena veličine lista mijenja svaki list.
- Dnevnik izdanja sprema se u datoteku modela, a izdavanje je jedan korak poništavanja. [KISS datoteka](topic:kiss-export) nosi posljednju reviziju svakog crteža.

### Revizijski oblaci

Od drugog izdanja lista na svaki dio ili temelj koji se promijenio crta se revizijski oblak s revizijskim trokutom koji nosi slovo.

- Dok se list promijenio od posljednjeg izdanja, oblaci pokazuju što se promijenilo od tada, a nadolazeća revizija je u trokutu (rev B izdana i promijenjena: trokuti kažu C).
- Kad ga izdate, oblaci ostaju na listu te revizije, kao na ispisanom skupu, dok se list ponovno ne promijeni.
- Svaki list oblači samo promjene koje prikazuje. Tlocrti i pročelja ne crtaju rupe ni izreze, pa oblače štap koji se pomaknuo, okrenuo ili promijenio veličinu ili čija se oznaka promijenila. Crteži sklopova i tlocrt sidrenih vijaka oblače i nove ili pomaknute rupe i izreze.
- Preimenovana oznaka se računa: kad promjena od grede napravi novi sklop, grede čija se oznaka pomaknula gore (B1 u B2) oblače se na tlocrtima i pročeljima.
- Dio koji je obrisan ne ostavlja ništa za oblačenje.
- Listovi izdani prije revizijskih oblaka (DetailCraft 0.4) počinju oblačiti od sljedećeg izdanja.
- Oblaci su u preuzimanjima PDF, DXF i DWG i nikad se sami ne računaju kao promjena.

## Preuzimanje

Odaberite format s popisa pored gumba, zatim {{ui:Ovaj list}} za prikazani list ili {{ui:Svi listovi}} za cijeli skup.

- **PDF**: za ispis ili slanje. {{ui:Svi listovi}} izrađuje jedan PDF, jednu stranicu po listu, svaka stranica u odabranoj veličini.
- **DWG**, u formatu 2018, 2013, 2010, 2007, 2004 ili 2000: za otvaranje listova u CAD programu. Odaberite stariji format za stariji program.
- **DXF (R12)**: verzija koju gotovo svaki CAD program otvara.

List u DWG ili DXF crta se u punoj veličini: jedna jedinica crteža je jedan milimetar na papiru, pa se ispisuje u 1:1 i svaki pogled zadržava mjerilo koje njegov naslov navodi. Svako pero je zaseban sloj: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID i tako dalje, s debljinom linije (DWG) i crtkama. Riječi su tekst u stilu teksta DetailCraft (Arial). Kote su linije i brojke koje vidite, a ne objekti kota. {{ui:Svi listovi}} stavlja DWG ili DXF datoteke u jednu zip datoteku, jednu datoteku po listu.

:::note
DXF R12 nema debljine linija ni ispune: slojevi zadržavaju svoje nazive, pa pera postavite po sloju pri plotanju, a ispunjeni oblici se izostavljaju (statusna traka kaže koliko).
:::

Ispišite na 100 % (bez „prilagodi stranici“) na papiru iste veličine ako želite da navedena mjerila vrijede.
