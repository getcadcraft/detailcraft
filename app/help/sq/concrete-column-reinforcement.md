---
title: Armo një kolonë betoni drejtkëndore
summary: Shembull i punuar i detajimit të një kolone betoni drejtkëndore në DetailCraft: vendose, jepi shufra gjatësore dhe lidhëse, lexo kontrollet, mbivendosjen mbi të dhe shenjat e shufrave, dhe vizato fletën e punëtorisë.
keywords: kolonë betoni, kolonë drejtkëndore, armaturë kolone, shufra gjatësore, shufra vertikale, lidhëse, kllapa, lidhëse kryqe, mbivendosje, mbivendosje pritëse, shufra pritëse, përqindja e çelikut të kolonës, 1 përqind, 8 përqind, distanca e lidhëseve, ACI 318-19 25.7.2, EN 1992-1-1 9.5, vizatim punëtorie, shenjat e shufrave, 8C1, 3C2
from: aee2a3ca
---

Ky temë merr një kolonë katrore nga zero deri te një detaj i kontrolluar, i vizatuar dhe i listuar. Rregullat e përgjithshme për trarët, pllakat dhe muret janë te [Detajimi i betonit të armuar](topic:reinforced-concrete); ky është aspekti i kolonës, me numra që mund t'i riprodhosh.

:::warning
DetailCraft detajon shufrat që i jep. Nuk i projekton. Shufrat më poshtë janë vlera fillestare për shembullin, jo rekomandim: inxhinieri i projektit zgjedh përmasën, numrin dhe distancën.
:::

## Çfarë është një kolonë këtu

Një kolonë drejtkëndore ka gjerësi (përgjatë x-it të saj lokal) dhe thellësi tërthore (përgjatë y-it lokal), mbulesë të lirë deri te lidhëset, shufra gjatësore në çdo faqe dhe lidhëse të mbyllura. Rrotullimi e kthen gjithë elementin; faqet mbeten "faqe gjerësie" dhe "faqe thellësie".

- Shufrat gjatësore jepen si numri në një faqe gjerësie dhe numri në një faqe thellësie. Shufrat e cepit numërohen në të dyja, kështu 3 dhe 3 bëjnë 8 shufra; 4 dhe 4 bëjnë 12.
- Lidhëset janë drejtkëndësha të mbyllur me dy grepa në një cep, 135° ose 90°. Lidhësja e parë është një distancë e caktuar mbi dyshemenë (dhe nën tjetrën), zonat e skajit kanë distancë më të ngushtë, mesi ka një më të gjerë.
- Çfarë bëjnë shufrat në majë: vazhdojnë dhe mbivendosen me shufrat sipër, kthehen me grepa 90° në dysheme, ose ndalen nën majën.

## Kolona e punuar

Një kolonë 400 × 400 mm, 3600 mm midis dyshemesë sipër dhe dyshemesë poshtë, shufra gjatësore #8, lidhëse #3, mbulesë e lirë 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, e brendshme.

1. Hap skedën {{ui:Beton}} dhe cakto vijat e rrjetit dhe nivelet ku qëndron kolona (paneli i majtë).
2. Te {{ui:Shto sipas rrjetit}}, zgjidh {{ui:Kolonë betoni}}, zgjidh kryqëzimin e rrjetit dhe dy nivelet, vendos {{ui:Gjerësia (mm)}} dhe {{ui:Thellësia tërthore (mm)}} në 400 dhe zgjidh {{ui:Shto}}.
3. Te paneli {{ui:Vetitë}} vendos:
   - {{ui:Mbulesa e lirë (mm)}} 40;
   - {{ui:Shufrat gjatësore}} #8, {{ui:Shufra në një faqe gjerësie}} 3, {{ui:Shufra në një faqe thellësie}} 3;
   - {{ui:Lidhëset}} #3, {{ui:Grepat}} 135°, {{ui:Distanca ndërmjet (mm)}} 300, {{ui:Gjatësia e zonës së skajit (mm)}} 600, {{ui:Distanca në zonat e skajeve (mm)}} 150, {{ui:I pari nga faqja (mm)}} 50;
   - {{ui:Shufrat në majë}} {{ui:Vazhdo dhe mbivendos me shufrat sipër}}.

Çdo ndryshim është një hap zhbërjeje.

### Çfarë merr

| Pjesa | Rezultati |
|---|---|
| Shufrat gjatësore | 8 shufra #8 (një unazë 3 × 3), secila 4375 mm e gjatë: kolona 3600 mm plus një mbivendosje 775 mm sipër |
| Mbivendosja | 757 mm e nevojshme për një mbivendosje në shtypje (ACI 318-19 25.5.5.1, fy 420), 775 mm e siguruar: nevoja e rrumbullakosur lart në 25 mm më të afërt |
| Lidhëset | 17 lidhëse #3, secila me gjatësi prerjeje rreth 1359 mm, me distancë 150 mm në dy zonat e skajit 600 mm dhe 300 mm ndërmjet |
| Përqindja e çelikut | 2.5 % e prerjes bruto (kufijtë 1 % deri 8 %, ACI 318-19 10.6.1.1) |
| Distanca e lirë e shufrave | 112 mm (duhen të paktën 40 mm, ACI 318-19 25.2.3) |
| Distanca e lidhëseve | 300 mm (lejohen 400 mm: më e vogla nga 16 diametra shufre, 48 diametra lidhëse dhe ana më e vogël, ACI 318-19 25.7.2.1) |
| Përmasa e lidhëses | #3 (lejohet deri në 9.5 mm, ACI 318-19 25.7.2.2) |

Të gjitha këto janë në listën {{ui:Kontrollet}} të elementit; mbivendosja është gjithashtu te {{ui:Mbivendosjet dhe ankorimi}}.

## Lidhëset kryq

Me një lidhëse perimetrale të vetme, mbahen vetëm shufrat e cepit. ACI 318-19 25.7.2.3 lejon një shufër të mesme në një faqe të mbetet pa mbështetje nëse është brenda 150 mm të lirë nga një shufër cepi. Me 3 shufra në një faqe, siç më sipër, kjo plotësohet. Me 4 ose më shumë shufra në një faqe nuk plotësohet, dhe DetailCraft e thotë këtë si paralajmërim ({{ui:Kontrollet}} dhe {{ui:Problemet}}): nevojiten "lidhëse kryq". **Lidhëset kryq nuk vizatohen ende**: shtoji në vizatim me dorë, ose zgjidh më pak shufra në faqe.

Për EN 1992-1-1, DetailCraft kontrollon përmasën e shufrës (të paktën 8 mm), numrin e shufrave (të paktën 4), sipërfaqen e çelikut (0.2 % deri 4 % e prerjes), distancën e lirë dhe distancën e lidhëseve (9.5.2 dhe 9.5.3).

## Mbivendosja, themeli dhe kolona poshtë

- Kur **një themel i modelit qëndron nën kolonë**, kolona mbivendoset me shufrat pritëse të themelit, dhe mbivendosja e tyre kontrollohet gjithashtu.
- Kur **një kolonë tjetër e modelit qëndron nën të**, mbivendoset me shufrat e asaj kolone.
- Jep {{ui:Gjatësia e mbivendosjes (mm, 0 = sipas nevojës)}} të tyren për ta anashkaluar; një më e shkurtër se e nevojshme është problem dhe shënohet me * në tabelë.
- Mbivendosjet në shtypje përdoren si parazgjedhje ({{ui:Mbivendosje në shtypje}} te cilësimet); zgjidh {{ui:Mbivendosje në tërheqje}} kur kolona mund të jetë në tërheqje.

## Shenjat, tabela dhe fleta e punëtorisë

Shufrat identike ndajnë një shenjë: shufrat gjatësore të kolonës sipër janë 8C1, lidhëset e saj 17C2 (numri i pari, pastaj shkronja e llojit C për kolonë dhe numri rendor). Ato shfaqen te skeda {{ui:Tabela e përkuljes}}, me gjatësinë e prerjes dhe peshën, dhe në CSV nga {{ui:Dalja}} › {{ui:Më shumë}} › {{ui:Përkulja}}.

Zgjidh {{ui:Vizatimi i punëtorisë}} pranë kolonës për një fletë me kolonën në fasadë (çdo shufër, shenja e saj, zonat e lidhëseve dhe mbivendosja të kotatuara) dhe një prerje në mes, e ndjekur nga fleta e përkuljes së shufrave. Ruaje {{ui:Kjo fletë si PDF}}.

## Çfarë nuk bën kjo

- Kolona të rrumbullta dhe spirale, dhe kolona që nuk janë drejtkëndore: nuk janë bërë.
- Lidhëset e cepit dhe ato kryq brenda prerjes, dhe detajimi sizmik (ACI 318-19 kapitulli 18): nuk janë bërë.
- Bashkime në pozicione që zgjedh ti, ose të shtrembëruara: të gjitha shufrat mbivendosen në një prerje.
- Nëse shufrat mjaftojnë për ngarkesën: kjo është projektimi i inxhinierit.
