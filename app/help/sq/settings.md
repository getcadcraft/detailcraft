---
title: Cilësimet e DetailCraft
summary: Nis anëtarët e rinj si profile US ose evropiane, cakto sa larg e zhvendos Dyfisho një kopje, zgjidh nëse kopjet sjellin lidhjet e tyre, dhe shfaq ose fshih bulonat në pamjen 3D.
keywords: cilësime, preferenca, madhësia e fletës, madhësia e letrës, vizatime, opsione, çelik, aisc, en, evropiane, profile US, profile metrike, profili parazgjedhur, klasa, s355, a992, zhvendosja e dyfishimit, zhvendosja e ngjitjes, kopjo lidhjet, bulona, shufra ankorimi, fshih bulonat, rivendos
from: e46cea57
---

Hapni {{ui:Cilësimet}} me rrotën e cilësimeve te shiriti i aplikacionit ose me {{key:Mod+,}}. Skeda e parë, {{ui:DetailCraft}}, mban cilësimet që i përkasin këtij aplikacioni; {{ui:Të përgjithshme}} mban ato që i ndajnë të gjitha aplikacionet CadCraft (tema, shiriti i veglave, panelet). Cilësimet e DetailCraft ekzistojnë vetëm në aplikacion: i ndryshoni këtu, hyjnë në fuqi menjëherë, dhe ky shfletues i mban mend. Ato nuk ruhen në skedarin e modelit tuaj.

## Anëtarët e rinj

Me cilat profile dhe klasa fillojnë mjetet e vendosjes:

| Mjeti | Forma US (AISC), A992 | Forma evropiane (EN), S355 |
|---|---|---|
| {{ui:Trari}} | W16x26, A992 | IPE300, S355 |
| {{ui:Kolona}} | W12x50, A992 | HEB200, S355 |
| {{ui:Diagonalja}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Pllaka}} | A36 | S355 |

Forma US (AISC) është fillimi. Zgjedhja evropiane përdor një HEA160 për diagonalet sepse katalogu EN i DetailCraft nuk ka ende profile të zbrazëta ([Katalogu i profileve](topic:profile-catalog)). Mund të zgjidhni ende çdo profil dhe klasë për pjesën e radhës te paneli {{ui:Vetitë}} ndërsa një mjet vendosjeje është aktiv. Anëtarët që janë tashmë në model mbajnë profilin dhe klasën e tyre.

## Dyfisho dhe ngjit

- **Zhvendosja (mm)**: x, y dhe z. {{ui:Dyfisho}} ({{key:Mod+D}}) e vendos kopjen kaq larg nga origjinali, dhe forma {{ui:Ngjit me zhvendosje (mm, nga origjinali)}} fillon me të. Fillon në 6000, 0, 0: një hapësirë 6 m përgjatë rrjetave të numëruara. Vendoseni në hapësirën tuaj, ose në lartësinë e nivelit në z për të kopjuar një kat lart.
- **Kopjo pllakat e skajit dhe të bazës bashkë me elementët e tyre** (i ndezur në fillim): një lidhje vjen me një kopje vetëm kur kopjohet çdo anëtar që ajo bashkon. Hiqeni zgjedhjen për të kopjuar anëtarët dhe themelet pa lidhjet e tyre, për shembull për të provuar një lidhje tjetër në kopje.

Shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste).

## Pamja 3D

**Shfaq bulonat dhe shufrat e ankorimit** (i ndezur në fillim). Hiqeni zgjedhjen për t'i fshehur në pamje dhe për të parë vrimat dhe pllakat e një nyje të ngarkuar. Bulonat e fshehur nuk mund të klikohen; klikoni pllakën për të zgjedhur lidhjen. Lista e materialeve, vizatimet dhe çdo eksport ende përfshijnë çdo bulon dhe shufër.

## Tregues këndi

Çfarë shfaqet në qoshen e pamjes 3D: **Kubi i pamjes** (fillimi; lart djathtas — klikoni një faqe, brinjë ose qoshe për të parë prej andej, tërhiqeni për të rrotulluar, tërhiqni unazën e busullës për ta kthyer modelin), **Ikona e boshtit** (një shenjues i vogël X, Y, Z poshtë majtas që kthehet me pamjen: X e kuqe, Y e gjelbër, Z blu) ose **Asnjë**. Vetëm te {{ui:3D}}; {{ui:Planimetria}} dhe {{ui:Fasada}} nuk shfaqin asnjërin. Shih [Kubi i pamjes](topic:view-cube).

## Rivendosja

{{ui:Rivendos cilësimet e DetailCraft}} në fund të dialogut i kthen këto në fillim (forma US, zhvendosja 6000, 0, 0, lidhjet të kopjuara, bulonat të shfaqur), bashkë me ato {{ui:Të përgjithshme}}.

## Vizatimet

**Madhësia e fletës**: vizatimet e fletës dhe vizatimet e punëtorisë bëhen mbi të, horizontalisht: A4, A3 (fillimi), A2, A1, ANSI B, ANSI C ose ANSI D. Dritaret {{ui:Vizatimet}} dhe të vizatimeve të punëtorisë kanë të njëjtën listë. Shih [Vizatimet e vendosjes së përgjithshme dhe montimit](topic:drawings).

## Armatura

- **Emrat ASTM të shufrave**: #3 deri #11, ose #10 deri #36 metrike të butë për të njëjtat shufra.
- **Kodet e formave të tabelës së përkuljes**: S, L, U të DetailCraft; tipet ACI 315; ose kodet e formave BS 8666. Shih [Referenca e armaturës](topic:rebar-reference).

## Tërheqja për përzgjedhje

**Drejtkëndësh** (si më parë) ose **Lasso**: një vijë e lirë, me {{key:Space}} që kalon midis brenda, prekjes dhe gardhit ndërsa tërhiqni. Shih [Përzgjidh me dritare](topic:select-and-change#select-with-a-window).
