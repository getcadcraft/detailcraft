---
title: Vendos kolona, trarë dhe diagonale
summary: Zgjidh një profil, materialin dhe pozicionin, pastaj kliko kryqëzimet e rrjetës ose shkruaji ato për të vendosur elementë çeliku.
keywords: kolonë, trari, diagonale, element, vendos, profil, material, rrotullim, pozicion, zhvendosje, fut, shto sipas rrjetit
from: d6db0dc1
---

Elementët vendosen në kryqëzimet e rrjetës: një kolonë në një, një trarë ose një diagonale mes dy. Vendos më parë [rrjetat dhe nivelet](topic:grids-and-levels).

## Zgjidh një mjet dhe opsionet e tij

1. Përzgjidh {{ui:Kolona}} ({{key:C}}), {{ui:Trari}} ({{key:B}}) ose {{ui:Diagonalja}} ({{key:R}}) në grupin {{ui:Vendos}}.
2. Paneli {{ui:Vetitë}} në të djathtë bëhet "Vendos një kolonë" (ose trarë, ose diagonale) dhe shfaq opsionet për elementin e radhës:
   - {{ui:Profili}}: zgjidh nga lista. Madhësitë grupohen sipas katalogut (W shapes, Channels, Angles, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, dhe profilet e tua të personalizuara). Shih [Katalogu i profileve](topic:profile-catalog).
   - {{ui:Materiali}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ose S355.
   - {{ui:Pozicioni}}: ku ndodhet prerja mbi vijën midis dy pikave: {{ui:Maja e çelikut në vijë}}, {{ui:Qendërzuar në vijë}} ose {{ui:Fundi në vijë}}.
   - {{ui:Rrotullimi (°)}}: rrotullon prerjen rreth boshtit të vet të elementit.
   - {{ui:Deri në}} (vetëm për kolonat): {{ui:Nivelin e ardhshëm sipër}}, ose emrin e një niveli.
3. Poshtë opsioneve, një kuti {{ui:Profili}} liston përmasat e prerjes së zgjedhur, sipërfaqen, masën për metër dhe katalogun nga vjen.

Parazgjedhjet janë W12x50 në A992 për kolonat (të qendërzuara), W16x26 në A992 për trarët (maja e çelikut në vijë) dhe HSS6x6x1/4 në A500 Gr C për diagonalet (të qendërzuara). Opsionet mbeten të caktuara derisa t'i ndryshosh.

## Vendos me klikim

### Një kolonë

1. Përzgjidh {{ui:Planimetria}} dhe zgjidh nivelin nga i cili fillon kolona.
2. Përzgjidh {{ui:Kolona}}.
3. Lëviz treguesin pranë një kryqëzimi. Pika më e afërt ndriçon dhe shiriti i statusit e emërton.
4. Kliko. Kolona shtrihet nga ai nivel deri në nivelin e radhës sipër (ose deri te niveli {{ui:Deri në}}). Shiriti i statusit thotë, për shembull, "Kolona W12x50 në A/1, Niveli 1 deri Niveli 2."
5. Vazhdo të klikosh për të vendosur të tjera. Shtyp {{key:Esc}} kur të mbarosh.

Nëse nuk ka nivel mbi atë ku klikove, shiriti i statusit thotë "Nuk ka nivel mbi Niveli 2 që kolona të arrijë. Shto më parë një nivel."

### Një trare

1. Përzgjidh {{ui:Planimetria}} dhe zgjidh nivelin e trarit.
2. Përzgjidh {{ui:Trari}}.
3. Kliko kryqëzimin e parë. Shiriti i statusit thotë "Nga A/1 në Niveli 2. Tani kliko skajin tjetër (Esc anulon)." Një vijë me pika ndjek treguesin.
4. Kliko kryqëzimin e dytë. Trari shfaqet.
5. Kliko përsëri për të nisur trarin e radhës, ose shtyp {{key:Esc}}.

{{key:Esc}} pas klikimit të parë anulon vetëm atë pikë; një {{key:Esc}} i dytë e largon mjetin.

### Një diagonale

Një diagonale shtrihet mes dy kryqëzimesh në nivele të ndryshme, prandaj është më e lehtë në {{ui:Fasada}}.

1. Përzgjidh {{ui:Fasada}} dhe zgjidh vijën e rrjetës me shkronjë ku është diagonalja.
2. Përzgjidh {{ui:Diagonalja}}.
3. Kliko skajin e poshtëm, pastaj skajin e sipërm.

Elevacionet ekzistojnë vetëm për vijat e rrjetës me shkronja. Për një diagonale në një kornizë përgjatë një vije numerike (nga A deri B), përdor {{ui:3D}} ose formën {{ui:Shto sipas rrjetit}} më poshtë.

:::touch
Në ekran me prekje, prek afër kryqëzimit: një prekje zgjedh pikën më të afërt brenda një distance të shkurtër dhe nuk bën asgjë nëse nuk ka pikë afër. Nuk ka ndriçim para se të prekësh, prandaj kontrollo mesazhin e shiritit të statusit pas çdo prekjeje. Tërheqjet me një gisht rrotullojnë ose lëvizin pamjen në vend që të vendosin.
:::

## Vendos sipas rrjetës, pa klikim

Çdo mjet vendosjeje ka një formë {{ui:Shto sipas rrjetit}} në fund të panelit {{ui:Vetitë}}. Punon vetëm me tastierë dhe nuk ka nevojë për pamjen 3D.

1. Zgjidh mjetin, për shembull {{ui:Trari}}.
2. Te {{ui:Shto sipas rrjetit}}, zgjidh {{ui:Nga rrjeti (shkronjë)}}, {{ui:Nga rrjeti (numër)}} dhe {{ui:Nga niveli}}.
3. Zgjidh {{ui:Deri te rrjeti (shkronjë)}}, {{ui:Deri te rrjeti (numër)}} dhe {{ui:Deri te niveli}}.
4. Zgjidh {{ui:Shto}}.

Për një kolonë ose një themel forma ka vetëm një pikë: {{ui:Rrjeti (shkronjë)}}, {{ui:Rrjeti (numër)}} dhe {{ui:Niveli}}.

## Ndrysho një element pas vendosjes

1. Shtyp {{key:Esc}} (ose zgjidh {{ui:Përzgjidh}}, {{key:V}}) dhe kliko elementin.
2. Në panelin {{ui:Vetitë}}, ndrysho {{ui:Emri}}, {{ui:Profili}}, {{ui:Materiali}}, {{ui:Pozicioni}} ose {{ui:Rrotullimi (°)}}.
3. Për ta lëvizur, redakto x, y dhe z të {{ui:Fillimi}} ose {{ui:Fundi}} nën {{ui:Skajet (x, y, z mm)}}. Emri i rrjetës së çdo skaji shfaqet poshtë, ose koordinatat e tij kur është jashtë rrjetës.

Çdo ndryshim është një hap zhbërjeje. Poshtë fushave shikon {{ui:Shenja e pjesës}}, {{ui:Montimi}}, {{ui:Gjatësia e prerjes}}, {{ui:Pesha}} (bruto: vrimat dhe prerjet nuk zbriten) dhe nga cili katalog vjen profili.

Elementët nuk mund të tërhiqen ose rreshtohen ende. Për të bërë një element tjetër si ky, kopjoje dhe ngjite, ose dyfisho ({{key:Mod+D}}): shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste).

## Fshi një element

Zgjidhe dhe shtyp {{key:Delete}} ose {{key:Backspace}}, ose zgjidh {{ui:Fshi}}. Lidhjet mbi të shkojnë gjithashtu. {{key:Mod+Z}} sjell gjithçka përsëri.

## Gjëra për të ditur

- **Nga ana ku kthehen flanxhat e kolonës.** Te {{ui:Rrotullimi (°)}} 0, flanxhat e kolonës kthehen përgjatë x, drejt vijave të rrjetës numerike ngjitur. Një trare nga rrjeta 1 deri te rrjeta 2 lidhet me një flanxhë; një trare nga A deri B lidhet me rrjetën. Pllakat fundore vendosen vetëm në flanxha, kështu që nëse trarët shkojnë nga A deri B, jepi atyre kolonave një rrotullim prej 90.
- **Trarët në një nivel varen poshtë tij** me {{ui:Maja e çelikut në vijë}} të parazgjedhur. Zgjidh {{ui:Qendërzuar në vijë}} nëse nivelet e tua janë boshte qendrore të elementeve.
- **Kolonat shtrihen nivel më nivel.** Për një kolonë që kalon nëpër dy kate, vendos {{ui:Deri në}} në nivelin më të lartë.
- **Trarët e pjerrët** lejohen (zgjidh skaje në nivele të ndryshme), por pllakat fundore nuk ndërtohen mbi to ende.

Më pas: [Lidh trarët me kolonat me pllaka fundore](topic:end-plates).
