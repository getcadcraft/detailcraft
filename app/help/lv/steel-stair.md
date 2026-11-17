---
title: Tērauda kāpņu ģenerators
summary: Tērauda kāpnes pēc stāvu augstuma, garuma un platuma: pacēlums un solis pēc izvēlētā noteikumu kopuma, laukumi, margas un balsti, darbnīcas rasējumi un griešanas saraksts ar svariem.
keywords: tērauda kāpnes, kāpņu ģenerators, sānsija, pakāpiens, rifelēta plāksne, režģis, salocīta paplāte, laukums, margas, balsti, pacēlums, solis, osha, ibc, approved document k, griešanas saraksts, svari, darbnīcas rasējums
from: a4f0a985
---

Kāpņu ģenerators izveido veselas tērauda kāpnes no dažiem skaitļiem: sānsijas, pakāpienus, laukumus, ja lidojums ir pārāk augsts, margas ar stabiņiem un balstiem, stiprinājuma caurumus sānsijās, griešanas sarakstu ar svariem un darbnīcas rasējumus. Tas sākas ar rīku {{ui:Kāpnes}}, kā vienkāršās kāpnes (skatiet Kāpnes), tikai ar vienu papildu slēdzi.

## Tērauda kāpņu novietošana

1. Izvēlieties {{ui:Kāpnes}} grupā {{ui:Novietot}} vai nospiediet {{key:S}}.
2. Labajā pusē atzīmējiet {{ui:Izmantot tērauda kāpņu ģeneratoru}}.
3. Izvēlieties **noteikumu kopu** vietai, kur tiek būvētas kāpnes, **pacēlumu** (no stāva līdz stāvam; 0 = līdz nākamajam līmenim), **pieejamo garumu** (0 = ļaut noteikumam izlemt), **brīvo platumu** un **pakāpiena veidu**: rifelēta plāksne, režģis vai salocīta plāksnes paplāte.
4. Iestatiet sānsijas profilu, laukumus (pēc noteikuma vai skaitli), margas (abās pusēs, vienā, nav), margu augstumu un balstu atstarpi.
5. Noklikšķiniet uz režģa krustpunkta: tas ir pirmā paaugstinājuma pamats.

Atlasiet kāpnes (noklikšķiniet uz sānsijas, pakāpiena vai margas), lai mainītu jebkuru iestatījumu; rekvizīti rāda paaugstinājumus, soli, slīpumu, lidojumus un laukumus, tajās esošo tēraudu, griešanas sarakstu un noteikumu kopas avotus.

## Noteikumu kopas

Noteikumu kopa ierobežo kāpņu formu: pacēlumu un soli, 2 × paaugstinājums + solis, slīpumu, laukumu, margas augstumu un lielāko atvērumu. DetailCraft piedāvā tālāk minētās; reģions ir iestatījums, nevis minējums. Rekvizītos atveriet **Kur ir šīs noteikumu kopas skaitļu avoti**: katrs skaitlis nosauc savu avotu un norāda, cik labi tas pārbaudīts.

- **International Building Code 2021**: paaugstinājums 4 līdz 7 in., pakāpiens vismaz 11 in., margas 34 līdz 38 in. 12 ft ierobežojums starp laukumiem rādīts kā *nav nolasīts*, un margu skaitļi – kā nolasīti materiālos, kas citē kodeksu: pirms paļaušanās tos apstipriniet.
- **OSHA 29 CFR 1910.25 un 1910.29** (rūpnieciskās standarta kāpnes): 30° līdz 50°, paaugstinājums ne vairāk kā 9.5 in., pakāpiens vismaz 9.5 in., vismaz 22 in. plats, laukumi tikpat plati kā kāpnes un 30 in. dziļi, augšējā mala, kas izmantota kā margas, 36 līdz 38 in. Šie tika nolasīti pašā regulā.
- **Approved Document K 2013, Anglija** (vispārējas piekļuves un saimniecības kāpnes): pacēluma un soļa diapazoni un 2 × paaugstinājums + solis 550 līdz 700 mm, nolasīti valdības pasūtītajā ziņojumā, kas tos tabulē. Dokuments DetailCraft nedod margu augstumu, tāpēc tiek izmantots jūsu iestatītais augstums, un Problēmas sarakstā par to ir paziņots.

Noteikumu kopa, kura šeit nav, netiek minēta: kāpnes tad seko vienkāršajam 600 līdz 650 mm komforta noteikumam un paziņo, ka noteikuma nav.

## Ko tas aprēķina

- **Paaugstinājumi un solis.** Mazākais paaugstinājumu skaits, kura 2 × paaugstinājums + solis atrodas noteikuma diapazona vidū, bez soļa, kas krīt zem noteikuma minimuma. Ja garums ir dots, solis ir garums, dalīts ar pakāpieniem, un viss, kas atrodas ārpus noteikuma, tiek paziņots.
- **Lidojumi un laukumi.** Lidojums, kas augstāks par noteikumā pieļaujamo, tiek sadalīts ar laukumu, tikpat plašu kā kāpnes un ne mazāku par noteikuma minimumu; varat arī pieprasīt laukumus. Laukums ir rāmis no divām sānu sijām un diviem šķērsleņķiem zem seguma, uz diviem stabiņiem.
- **Pakāpieni.** Rifelēta plāksne ir metināta plāksne (pēc noklusējuma 6 mm, raksts svaram netiek pieskaitīts). Salocītai plāksnes paplātei ir atloks priekšmalā un tā ir pieskrūvēta caur sānsijas sienu: divi caurumi, kas par 2 mm lielāki par skrūvi, 0.3 un 0.7 dziļuma. Režģis tiek zīmēts kā plāksne ar tādu pašu svaru (balsta joslas dziļums × biezums ÷ solis); šķērsjoslas un apmales netiek skaitītas, un griešanas sarakstā tas ir norādīts.
- **Margas.** Caurules augšējā mala uz stabiņiem gar katru lidojumu un katru laukumu, un balstu atstarpe, caur kuru nevar iziet lode, lielāka par noteikuma atvērumu (pēc noklusējuma ne vairāk kā 100 mm).

## Rasējumi, griešanas saraksts, eksports

- Lidojums ir viens mezgls; margas ir cits (abas puses ir tas pats mezgls, izveidots divreiz). Katram ir sava mezgla rasējums, un sānsijas rasējums rāda tās caurumus.
- **Kāpņu lapa** (ST-…) rāda katra lidojuma sānsiju taisnu ar caurumu punktiem, kas uzrakstīti no apakšējā gala, un pakāpiena detaļu: griezumu, priekšmalu, atloku un galējo flanci ar tā caurumiem.
- {{ui:Griešanas saraksts un svari}} rekvizītos uzskaita katru profilu un garumu ar daudzumiem un kilogramiem; {{ui:Lejupielādēt griešanas sarakstu (CSV)}} to saglabā.
- Viss iet materiālu sarakstā, NC failos un IFC kā parastas detaļas (IfcMember, IfcColumn, IfcPlate).

## Noderīga informācija

- Tas ir sākumpunkts, nevis projekts. Nekas netiek pārbaudīts izturībai vai saliecei; noteikumu kopa tikai ierobežo formu.
- Sānsiju gali pret stāviem ir griezti taisni un nav detalizēti; laukumu stabiņi stāv uz apakšējā stāva un nav ar balstplāksnēm.
- Kāpņu novietošana kā viens elements BimCraft vēl nav pieslēgta.
