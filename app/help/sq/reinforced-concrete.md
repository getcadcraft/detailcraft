---
title: Detajo trarët, kolonat, soletat dhe muret e betonit të armuar
summary: Shto trarë, kolona, soleta dhe mure betoni sipas rrjetës, jepu atyre shufra, strena dhe lidhje, kontrollo mbivendosjet dhe ankorimin sipas ACI 318-19 ose EN 1992-1-1, dhe bëj vizatime punëtorie dhe fleta përkuljeje shufrash.
keywords: beton i armuar, armaturë, armim, trarë, kolonë, soletë, mur, strena, lidhje, grepa, mbivendosje, mbivendosje shufrash, ankorim, gjatësi zhvillimi, ld, ldh, lbd, mbulesë, hapësirë, përforcime, hapje, rrjetë, shenja shufrash, tabela e përkuljes, bbs, vizatim punëtorie, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, importim IFC
from: 3835b7ec
---

Skeda {{ui:Beton}} nën pamjen detajon shufrat e trarëve, kolonave, soletave dhe mureve të betonit. Ju jepni madhësitë dhe shufrat; DetailCraft vendos çdo shufër, e numëron, kontrollon mbivendosjet, ankorimin, mbulesën dhe hapësirën sipas nenit nga vjen secili, dhe e vizaton.

:::warning
DetailCraft detajon shufrat që i jepni. Nuk i projekton ato. Çdo rezultat është për t'u kontrolluar nga një inxhinier.
:::

## Hapni skedën Beton

Zgjidhni skedën {{ui:Beton}} nën pamjen. Në një paraqitje me shirit, {{ui:Beton}} është te skeda {{ui:Modelimi}}, pranë {{ui:Themel}}. Me rreshtin e komandave të stilit të vizatimit, shkruani {{cmd:CONCRETE}}.

## Shto një element sipas rrjetës

Elementët e betonit vendosen mbi vijat e rrjetës dhe nivelet e modelit, prandaj përgatiti ato së pari (paneli i majtë).

1. Te {{ui:Shto sipas rrjetit}}, zgjidhni {{ui:Elementi}}: {{ui:Trarë betoni}}, {{ui:Kolonë betoni}}, {{ui:Soletë}} ose {{ui:Mur}}.
2. Zgjidhni vijat e rrjetës dhe nivelet:
   - një trari shtrihet nga një kryqëzim rrjete te tjetri, maja e tij në nivel;
   - një kolonë qëndron në një kryqëzim, nga një nivel te tjetri;
   - një soletë e mbush drejtkëndëshin ndërmjet dy vijave të rrjetës të numëruara dhe dy të shkronjëzuara, maja e saj në nivel;
   - një mur shtrihet përgjatë boshtit të tij qendror nga një kryqëzim te tjetri, nga një nivel te tjetri.
3. Jepni madhësinë dhe zgjidhni {{ui:Shto}}. Elementi zgjidhet dhe fushat e tij hapen te paneli {{ui:Vetitë}}.

Çdo element fillon me shufra që janë vlera fillestare, jo projektim: ndryshoji ato në ato të inxhinierit.

## Ndryshoni shufrat

Zgjidhni elementin (në pamje, ose emrin e tij në skedën {{ui:Beton}}). Paneli {{ui:Vetitë}} shfaq:

| Elementi | Çfarë vendosni |
|---|---|
| Trarë | Gjerësia, thellësia, mbulesa e lirë; shufrat e sipërme dhe të poshtme (madhësia, numri, grep i drejtë ose 90° në skaje); shufrat anësore; strenat (madhësia, grepa 135° ose 90°, distanca e të parës nga fytyra e mbështetjes, gjatësia dhe hapësira e zonës së skajit, hapësira ndërmjet); gjatësitë e mbështetjes; gjatësitë e mbivendosjes |
| Kolonë | Gjerësia, thellësia tërthore, rrotullimi, mbulesa; shufrat gjatësore në çdo faqe; lidhjet si strenat; çfarë bëjnë shufrat në krye (mbivendosje me kolonën mbi të, grep në dysheme, ose ndalim) |
| Soletë | Trashësia, madhësia, krye, mbulesat; rrjeta e poshtme dhe rrjeta e sipërme në çdo drejtim (madhësia dhe hapësira); shufrat U rreth skajeve; përforcimet; hapjet |
| Mur | Trashësia, mbulesa, një ose dy shtresa, shufrat horizontale dhe vertikale, shufrat U në skaje, shufrat vertikale të mbivendosura lart ose jo, përforcimet, hapjet |

Çdo ndryshim është një hap zhbërjeje. Një ndryshim që nuk mund të ndërtohet refuzohet dhe shiriti i statusit thotë pse, për shembull "Hapja nuk përshtatet brenda elementit me mbulesën e tij."

Strenat dhe lidhjet janë të mbyllura, me të dy grepat në një qosh. Shufrat e trarit hyjnë në një kolonë betoni në skajet e tij deri te fytyra e largët e kolonës minus mbulesën; aty ku s'ka kolonë, jepni {{ui:Gjatësia e mbështetjes në fillim (mm)}} dhe në fund.

## Mbivendosjet dhe ankorimi

Shufrat më të gjata se {{ui:Gjatësia e shufrës në depo (mm)}} (fillimisht 12000) priten në copa me gjatësi të barabartë, të mbivendosura. Tabela {{ui:Mbivendosjet dhe ankorimi}} liston çdo mbivendosje dhe çdo ankorim: çfarë kërkohet, me nenin dhe kushtet e tij, dhe çfarë ka detaji.

- Gjatësia e mbivendosjes 0 do të thotë "sipas nevojës": gjatësia që jep kodi, e rrumbullakosur lart në 25 mm.
- Shkruani gjatësinë tuaj të mbivendosjes për ta përdorur atë në vend të saj. Nëse është më e shkurtër se e nevojshme, është problem (shih më poshtë), dhe shënohet me * në tabelë.
- Ankorimi matet nga fytyra e mbështetjes deri te fundi i shufrës brenda mbështetjes. Një trarë pa mbështetje të njohur e thotë këtë në vend që ta kontrollojë.
- Një kolonë që qëndron mbi një themel mbivendoset me shufrat nisëse të themelit, dhe mbi një kolonë tjetër me shufrat e asaj kolone: mbivendosja e tyre kontrollohet gjithashtu.

**ACI 318-19** (SI): shufra të drejta në tërheqje 25.4.2.3 (tabela, me ψt, ψe, ψg, λ), grepa standardë 25.4.3.1 (ψr 1.6 dhe ψo 1.25 merren përveç nëse njihen ndryshe), shufra në shtypje 25.4.9.2, mbivendosje në tërheqje 25.5.2.1 (Klasa B, ose Klasa A te cilësimet), mbivendosje në shtypje 25.5.5.1.

**EN 1992-1-1**: ankorimi 8.4.4 me fbd nga 8.4.2 (aderencë e mirë ose e dobët), mbivendosjet 8.7.3 me α6 për çdo shufër të mbivendosur në një seksion. γc, γs dhe αct fillojnë me vlerat e rekomanduara; vendosni ato të aneksit tuaj kombëtar.

## Kontrollet

Çdo kontroll që dështon shfaqet te paneli Problemet (burimi {{ui:Kontrollet e armimit}}), dhe te lista {{ui:Kontrollet}} e elementit:

| Kontrolli | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Mbulesa | Tabela 20.5.1.3.1, sipas ekspozimit | Minimumi i aderencës, Tabela 4.2 (mbulesa e qëndrueshmërisë e jepni ju) |
| Hapësira e lirë e shufrave | 25.2.1 (trarë, soleta, mure), 25.2.3 (kolona) | 8.2 (2) |
| Hapësira e strenave | 9.7.6.2.2 | 9.2.2 (6) |
| Armimi minimal i trarit | 9.6.1.2 | 9.2.1.1 (1) |
| Shufrat anësore të trarit mbi 900 mm thellësi | 9.7.2.3 | nuk kontrollohet |
| Raporti i çelikut të kolonës, numri i shufrave | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Lidhjet: hapësira, madhësia, lidhjet tërthore | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Hapësira e soletës, armimi minimal | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Hapësira e murit, armimi minimal, dy shtresa | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Mbivendosjet, ankorimi | sipas së lartshmes | sipas së lartshmes |

Madhësia e agregatit nuk njihet, prandaj hapësira e lirë kontrollohet pa të.

## Hapjet, përforcimet dhe shufrat e skajit

Zgjidhni {{ui:Shto një hapje}} nën një soletë ose mur të zgjedhur dhe vendosni ku është dhe madhësinë e saj. Shufrat që e kalojnë ndalen në mbulesë nga skaji i saj. Përforcimet shtohen në çdo anë, në të njëjtën shtresë, duke mbartur gjysmën e sipërfaqes së shufrave të prera, një gjatësi ankorimi përtej hapjes. Ky është rregulli fillestar i DetailCraft, jo një nen kodi: ndryshoni {{ui:Përforcimet}} në ato të inxhinierit. Shufrat e qosheve nuk shtohen.

Shufrat U rreth skajeve të lira të soletës dhe në skajet e murit kanë krahë me gjatësi një mbivendosjeje.

## Shenjat e shufrave dhe tabela e përkuljes

Shufrat identike ndajnë një shenjë: themelet mbajnë shenjat F (5F1), trarët marrin B, kolonat C, soletat S dhe muret W (7B1, 8C1, 4S2). Skeda {{ui:Tabela e përkuljes}} dhe CSV-ja e saj tani listojnë çdo shufër të strukturës, fillimisht themelet. {{ui:Dalja}} › {{ui:Më shumë}} › {{ui:Përkulja}} e shkarkon atë.

## Vizatimet e punëtorisë

Zgjidhni {{ui:Dalja}} › {{ui:Më shumë}} › {{ui:Vizatime armimi}}, {{ui:Vizatime armimi}} te skeda {{ui:Beton}}, ose {{ui:Vizatimi i punëtorisë}} pranë një elementi. Çdo element merr një fletë me një fasadë (një planimetri për soletën) që tregon çdo shufër dhe shenjën e saj, zonat e strenave ose lidhjeve dhe mbivendosjet me kota, dhe një prerje në mes; pastaj fletët e përkuljes së shufrave listojnë çdo shenjë me një skicë të formës së saj, dimensionet, numrin, gjatësinë e prerjes dhe peshën.

Fletët bëhen nga modeli çdo herë, dhe përsëri pas çdo ndryshimi ndërsa dritarja është e hapur: blloku i titullit mban referencën e modelit. Ruani {{ui:Kjo fletë si PDF}} ose {{ui:Të gjitha fletët si PDF}}.

## Shufrat nga një skedar IFC

{{ui:Skedar}} › {{ui:Importo IFC}} tani lexon IfcReinforcingBar: disku i zhvendosur përgjatë boshtit qendror kthehet si krahë të drejtë dhe përkulje, me diametrin e tij, shenjën e tij dhe elementin që e mban. Shufrat mbahen ashtu siç u lexuan (nuk shndërrohen në rregulla të një trari ose soletë), shfaqen në pamje, listohen në tabelën e përkuljes dhe shkruhen përsëri me eksportin IFC. Raporti i importit thotë sa shufra u lexuan, të çfarë madhësish, në sa elementë, dhe çfarë u la jashtë dhe pse.

Një trarë, kolonë, soletë ose mur i atij skedari që mban shufra ose material betoni nuk merret për çelik; raporti e thotë këtë. Eksportimi IFC i vetë DetailCraft mban përkufizimin e çdo elementi betoni, kështu kthehet si vetvetja, dhe shufrat e tij krijohen përsëri nga ai.

:::note
Leximi i skedarëve të vetë një programi projektimi strukturor (jo IFC) nuk është ndërtuar: eksportoni IFC nga ai.
:::

## Eksportimi IFC

Trarët, kolonat, soletat (me hapje) dhe muret e betonit dalin si IfcBeam, IfcColumn, IfcSlab dhe IfcWall, çdo i yi me shufrat e tij si IfcReinforcingBar (shufrat kryesore, lidhjet për strenat dhe lidhjet, shufrat e skajit) të grupuara te ai, çdo shufër një disk i zhvendosur përgjatë boshtit qendror me harqe të vërteta në përkulje, shenjën e saj dhe gjatësinë e prerjes.
