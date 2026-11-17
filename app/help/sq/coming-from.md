---
title: Duke ardhur nga programe të tjera detajimi
summary: Si zakonet e një pakete të plotë detajimi përkthehen në DetailCraft, dhe ndryshimet që befasojnë detajuesit me përvojë.
keywords: kalim, migrim, i njohur, rrjedhë pune, krahasim, ndryshime, numërim, komponentë, katalog, vizatime, zakone
from: 39639a5d
---

Nëse detajon në Tekla Structures, shumica e DetailCraft do t'ju duket e njohur: rrjete, nivele, profile nga një katalog, pjesë dhe montime, lidhje, numërim, skedarë NC, IFC. Shkalla është shumë e ndryshme: Tekla Structures është një sistem i plotë prodhimi, ndërsa DetailCraft është një aplikacion i vogël, i hershëm për shfletues që kryen disa punë nga fillimi në fund. Kjo faqe tregon ku zakonet tuaja vazhdojnë dhe ku jo.

:::tip
Nëse duart tuaja e njohin shiritin e Tekla Structures, zgjidh stilin e menusë {{ui:Shirit çeliku}} te {{ui:Cilësimet}} › {{ui:DetailCraft}} › {{ui:Menutë, tastet dhe miu}}: skedat Modelim, Detajim, Redaktim, Vizatime, Prodhim dhe Pamje, dhe butoni i mesit lëviz pamjen. Nëse vini nga AutoCAD dhe ju pëlqen të shkruani komanda, {{ui:Hartim klasik}} shton një rresht komandash (BEAM, COLUMN, ENDPLATE, ZOOM …). Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).
:::

## Hartë e shpejtë

| Jeni mësuar me | Në DetailCraft |
|---|---|
| Krijimi i rrjeteve me koordinata në një dialog rrjeti | {{ui:Rrjetet}} në panelin e majtë: etiketat dhe distancat ndërmjet vijave, jo koordinata absolute. Vijat e numëruara shkojnë në një drejtim, vijat me shkronja në tjetrin |
| Nivelet si koordinata Z të rrjetit | Një listë e veçantë {{ui:Nivelet}}, emri dhe lartësia për rresht, e zbatuar me {{ui:Zbato nivelet}} |
| Zgjedhja e pikave kudo me kapje | Klikimet kapen vetëm te kryqëzimet e rrjetit. Pikat jashtë rrjetit shkruhen te {{ui:Skajet (x, y, z mm)}} të një elementi |
| Komandat e kolonës, trarit dhe pllakës | {{ui:Kolona}} ({{key:C}}), {{ui:Trari}} ({{key:B}}), {{ui:Diagonalja}} ({{key:R}}), {{ui:Pllaka}} ({{key:P}}), {{ui:Themel}} ({{key:F}}) |
| Dialogu i vetive të pjesës (dy klikime te një pjesë) | Një klikim: paneli {{ui:Vetitë}} në të djathtë është gjithmonë aktiv; nuk ka dialog dhe nuk ka butona Modifiko ose Zbato |
| Pozicioni në plan, rrotullimi dhe cilësimet e thellësisë | {{ui:Pozicioni}} (maja e çelikut, në qendër ose poshtë mbi vijën) dhe {{ui:Rrotullimi (°)}}. Nuk ka zhvendosje horizontale të veçanta |
| Katalogu i profileve | Një listë e fiksuar me 2,311 përmasa të publikuara (AISC W, S, C, L, HSS, Pipe; europiane IPE, HEA, HEB, UPN; britanike UB, UC, PFC, EA, UEA, SHS, RHS, CHS dhe profile të zbrazëta të formuara në të ftohtë), plus pllaka parametrike dhe profilet tuaja {{ui:Profil i personalizuar}} |
| Katalogu i materialeve | Shtatë klasa në një listë: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Aplikimi i një komponenti lidhjeje dhe dialogu i tij | Përzgjidh trarin, zgjidh {{ui:Pllaka skaji}}. Cilësimet shfaqen te paneli {{ui:Vetitë}}. Ekzistojnë vetëm dy lidhje (pllakë skaji te flanxha e kolonës, pllakë baze) |
| Lidhja automatike, ose kopjimi i një nyjeje te nyje të ngjashme | Përzgjidh një lidhje, zgjidh {{ui:Zbato te të ngjashmet (n)}} |
| Numërimi me seri dhe numra fillestarë | Pa komandë: shenjat përditësohen vetvetiu pas çdo ndryshimi, me parashtesa fikse c, b, br, p dhe C, B, BR, P |
| Dialogët e bulonave dhe vrimave | Vrimat shkruhen sipas fytyrës dhe pozicionit. Bulonat vijnë vetëm nga lidhjet |
| Veglat e prerjes, përshtatjes dhe prerjes me shumëkëndësh | Prerjet (lart ose poshtë, në secilin skaj) vetëm te profilet I. Shkurtimet e lidhjes janë automatike |
| Raportet dhe shabllonet | Tre raporte të fiksuara në skeda poshtë, dhe shkarkime CSV |
| Krijimi i vizatimeve dhe lista e vizatimeve | Një vizatim punëtorie për çdo shenjë pjese, të gjitha të bëra njëherësh, shikohen më pas dhe shkarkohen si një PDF ose fletë për fletë. Asgjë nuk ruhet apo redaktohet |
| Eksporti i skedarëve NC | {{ui:Skedarët NC}}: një skedar DSTV për çdo shenjë pjese, vetëm profile I dhe pllaka, i zipuar |
| Eksporti IFC | {{ui:IFC}}: IFC4 i gjithë modelit, me armaturë |
| Armatura në çdo pjesë betoni | Armatura vetëm në themele drejtkëndore me bazë, përmasa shufrash US, me rrjet poshtë dhe shufra pritjeje |
| Modeli i ruajtur në një dosje projekti, shumë përdorues | Një skedar `.detailcraft.json` që shkarkon. Një përdorues, në kompjuterin tuaj |
| Historiku i zhbërjes | {{key:Mod+Z}} dhe {{key:Mod+Y}}, deri në 200 hapa, mbahen derisa hap ose nis një model tjetër |

## Ndryshimet që i ngatërrojnë njerëzit

### Shenjat ndryshojnë vetvetiu

Nuk ka hap numërimi. Shenjat rillogariten pas çdo ndryshimi, kështu janë gjithmonë aktuale, por mund edhe të rinumërohen: shto një kolonë dhe c3 i djeshëm mund të jetë tani c4. Nuk ka "historik numërimi" që të ruajë shenjat e vjetra. Mbaro modelin, pastaj nxirr BOM, skedarët NC dhe vizatimet e punëtorisë së bashku nga një skedar i ruajtur.

### Butoni i mesit të miut zmadhon; nuk lëviz pamjen

Në pamjen 3D: tërheqja me butonin e majtë rrotullon, tërheqja me të djathtin lëviz pamjen, rrota zmadhon, dhe tërheqja me butonin e mesit gjithashtu zmadhon. Mbajtja e {{key:Shift}} gjatë tërheqjes së majtë lëviz gjithashtu pamjen. Rrota zmadhon drejt mesit të pamjes, jo drejt treguesit. Nuk ka zgjedhje të qendrës së rrotullimit: modeli rrotullohet rreth mesit të pamjes. Shih [Lëviz rreth pamjes 3D](topic:navigate-3d).

### Kolonat kanë një drejtim si parazgjedhje

Me rrotullim 0, flanxhat e një kolone drejtohen sipas drejtimit të rrjetit të numëruar. Trarët që kalojnë midis vijave të rrjetit me shkronja lidhen në themel, dhe pllakat e skajit refuzohen aty ("Trarët që lidhen në themelin e kolonës nuk janë bërë ende"). Rrotullo ato kolona 90° përpara se të shtosh lidhje.

### Fasadat vetëm te vijat me shkronja

{{ui:Fasada}} shikon vetëm përgjatë vijave të rrjetit me shkronja. Nuk ka pamje përgjatë vijave të numëruara, nuk ka pamje të ruajtura dhe nuk ka plane pune. Përdor {{ui:3D}} ose {{ui:Shto sipas rrjetit}} për kornizat në vijat e numëruara.

### Përzgjedhja, kopjimi dhe zhvendosja

Përzgjidh disa pjesë me {{key:Shift}}+klik ose {{key:Mod+A}}, pastaj kopjo, prer, ngjit (te një kryqëzim rrjeti, në një zhvendosje të shkruar, ose në vend) dhe dublo, duke përfshirë lidhjet ([Kopjo, ngjit dhe dublo](topic:copy-paste)). Nuk ka përzgjedhje me dritare, nuk ka filtër përzgjedhjeje, nuk ka zhvendosje, pasqyrim ose grilë përsëritjesh, dhe vetitë ndryshohen një element në një kohë te paneli {{ui:Vetitë}}.

### Rrjetet nuk tërheqin elementët me vete

Elementët mbajnë koordinatat e tyre kur ndryshon distancën e rrjetit; asgjë nuk lëviz me vijat e rrjetit. Ndrysho rrjetin përpara se të vendosësh çelikun, ose redakto më pas koordinatat e skajit të çdo elementi.

### Lidhjet nuk projektohen

Dy lidhjet vendosin pllaka, vrima, bulona dhe saldime nga numrat që jep. Nuk ka kontroll projektimi të asnjë lloji, vetëm paralajmërime për skajet dhe distancat (nga EN 1993-1-8 Tabela 3.3).

### Vrimat nuk priten në pamjen 3D

Vrimat shfaqen si tapa të errët. Ato janë vrima të vërteta në skedarët NC, vizatimet e punëtorisë dhe skedarin IFC. Prerjet priten në pamje.

### Peshat janë bruto

Pesha e çelikut nuk zbret vrimat ose prerjet, dhe pesha e bulonave nuk përfshihet.

### Vetëm milimetra

Gjithçka shkruhet dhe shfaqet në milimetra, edhe për profilet AISC. Emrat e profileve ruajnë formën e tyre të publikuar (W12x50, HSS6x6x1/4).

### Pa vizatime për t'u menaxhuar

Nuk ka listë vizatimesh, nuk ka redaktor vizatimesh, nuk ka vizatime të përgjithshme apo montimi. Një vizatim punëtorie bëhet kur e kërkon dhe shkarkohet; për ta ndryshuar, ndrysho modelin dhe bëje përsëri.

### Funksionon në shfletues

Ruajtja shkarkon një skedar. Shkurtoret e tastierës që shfletuesi i mban për vete nuk mund të përdoren. Modelet tuaja nuk largohen kurrë nga kompjuteri juaj: shih [Ku shkojnë skedarët e tu](common:your-files).

## Çfarë të vazhdosh të bësh në programin tënd aktual

Sot DetailCraft i përshtatet kornizave të vogla, kontrollit të një ideje, mësimdhënies, ose prodhimit të skedarëve NC dhe vizatimeve të punëtorisë për punë të thjeshta me trarë dhe kolona. Mbaj lidhjet komplekse, vizatimet e përgjithshme, vizatimet e montimit, projektet me shumë përdorues dhe çdo gjë të listuar te [Çfarë nuk është bërë ende](topic:not-built-yet) në programin që përdor tani.
