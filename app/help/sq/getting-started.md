---
title: Fillimi me DetailCraft
summary: Çfarë bën DetailCraft sot, si ta hapësh dhe një model i parë, nga rrjetet deri te një vizatim punëtorie, në dhjetë minuta.
keywords: fillim, modeli i parë, hyrje, detajimi i çelikut, armatura, fillim i shpejtë, mësim, përmbledhje
from: e4f16bbe
---

DetailCraft është aplikacioni i detajimit të çelikut dhe armaturës në familjen CadCraft. Ti ndërton një model 3D të një skeleti çeliku mbi rrjete dhe nivele, e lidh, dhe merr atë që i duhet punëtorisë: shenjat e pjesëve dhe montimeve, një listë materialesh, vizatime punëtorie për çdo pjesë, skedarë NC DSTV, një model IFC dhe një tabelë përkuljeje për themelet.

Kjo është një version i hershëm. Bën një listë të shkurtër gjërash me kujdes, në vend që gjithçka njëherësh. Lexo [Çfarë nuk është ndërtuar ende](topic:not-built-yet) përpara se të planifikosh punë reale me të.

## Çfarë bën sot

- Rrjetet dhe nivelet që shkruan, në milimetra.
- Kolona, trarë, diagonale dhe pllaka nga katalogët e publikuar të profileve (AISC W, S, C, L, HSS dhe Pipe; IPE, HEA, HEB dhe UPN evropiane; UB, UC, PFC, EA, UEA, SHS, RHS dhe CHS britanike), plus profilet e tua parametrike.
- Dy lidhje: një pllakë skaji me bulona nga një trar te flanxha e një kolone, dhe një pllakë baze kolone me katër shufra ankorimi. Secila mund të kopjohet te çdo bashkim i ngjashëm.
- Vrima dhe prerje të shkruara sipas pozicionit.
- Themele drejtkëndore me bllok në fund dhe shufra fillestare.
- Shenja pjesësh dhe montimesh që përditësohen vetë pas çdo ndryshimi.
- Eksporte: IFC4, skedarë NC DSTV (profile me I dhe pllaka), lista e materialeve si CSV, tabela e përkuljes si CSV, dhe një PDF vizatimi punëtorie të një pjese.

## Hap DetailCraft

1. Hap DetailCraft në një shfletues desktop: Chrome, Edge, Firefox ose Safari. Shih [Shfletuesit dhe kompjuterët](common:browsers).
2. Prit që ekrani të mbushet. Shiriti i statusit në fund shkruan "Gati. Hap Shembullin, ose vendos rrjetet dhe nivelet dhe fillo të vendosësh elementët."

Pamja e modelit ka nevojë për grafikë 3D (WebGL). Nëse mesi i ekranit shkruan "Ky shfletues nuk mundi ta nisë grafikën 3D (WebGL)", shih [Zgjidhja e problemeve](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modelet e tua qëndrojnë në kompjuterin tënd. Hapja e një modeli e lexon në shfletues, dhe ruajtja shkarkon një skedar. Asgjë nuk ngarkohet. Ruajtja në cloud nuk është ende e disponueshme. Shih [Ku shkojnë skedarët e tu](common:your-files). Për ta përdorur DetailCraft pa lidhje më vonë, zgjidh {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit një herë ndërsa je online; shih [Puna offline](common:offline).
:::

:::offline
Je offline. DetailCraft funksionon pa lidhje vetëm nëse është ruajtur më parë për përdorim offline: butoni {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit shkruan atëherë {{ui:Gati jashtë linje}}. Shih [Puna offline](common:offline).
:::

## Shiko fillimisht shembullin

Mënyra më e shpejtë për të parë atë që prodhon DetailCraft është skeleti shembull.

1. Zgjidh {{ui:Shembull}} në grupin {{ui:Skedar}} të shiritit të veglave.
2. Pamja tregon një skelet me dy hapësira: gjashtë kolona me pllaka baze, katër trarë me pllaka skaji, një diagonale dhe shtatë themele me armaturë.
3. Kliko një trar. Paneli {{ui:Vetitë}} në të djathtë tregon shenjën e pjesës, gjatësinë e prerë, peshën dhe vrimat që bëri pllaka e skajit.
4. Hap skedën {{ui:Lista e materialeve}} në fund për të parë çdo shenjë pjese me numrin dhe peshën e saj.

Udhëzuesi [Eksploro skeletin shembull](topic:sample-model) shkon nëpër të pjesë për pjesë.

## Modeli yt i parë

Një model i ri ka tashmë rrjetet 1 deri në 3 me A deri në B me 6000 mm dhe dy nivele, Niveli 1 në 0 dhe Niveli 2 në 4000.

1. Zgjidh {{ui:I ri}}. Nëse modeli aktual ka ndryshime, DetailCraft pyet nëse do t'i ruash së pari.
2. Zgjidh {{ui:Planimetria}} mbi pamje. Lista e niveleve pranë saj zgjedh Nivelin 1.
3. Zgjidh {{ui:Kolona}} në shiritin e veglave, ose shtyp {{key:C}}.
4. Kliko pikëprerjen e rrjetit A/1. Një kolonë W12x50 shfaqet nga Niveli 1 deri në Nivelin 2. Shiriti i statusit thotë ku shkoi.
5. Kliko B/1, A/2 dhe B/2 për të vendosur tre të tjera.
6. Zgjidh Nivelin 2 në listën e niveleve, pastaj zgjidh {{ui:Trari}} ose shtyp {{key:B}}.
7. Kliko A/1, pastaj A/2. Një trar W16x26 lidh majat e dy kolonave, me majën e çelikut në nivel.
8. Shtyp {{key:Esc}} për t'u kthyer te {{ui:Përzgjidh}}, pastaj kliko trarin.
9. Zgjidh {{ui:Pllakat e skajit}} në grupin {{ui:Lidh}}. Të dy skajet marrin një pllakë skaji me bulona, trarin e pret përsëri që të përshtatet, dhe pllaka e parë e skajit është tani e zgjedhur.
10. Kliko trarin përsëri.
11. Zgjidh {{ui:Vizatimi i punëtorisë}} në grupin {{ui:Dalja}}. Hapet një pamje paraprake e vizatimit të punëtorisë të trarit. Zgjidh {{ui:Shkarko PDF}}.
12. Shtyp {{key:Mod+S}} për të ruajtur modelin. Shfletuesi shkarkon `Untitled.detailcraft.json`.

Riemërto modelin te fusha {{ui:Emri}} lart majtas përpara se ta ruash, që skedari dhe çdo eksport ta mbajnë emrin e tij.

## Ku të shkosh më pas

- [Një shëtitje në ekran](topic:workspace)
- [Vendos rrjetet dhe nivelet](topic:grids-and-levels)
- [Lëviz në pamjen 3D](topic:navigate-3d), me miun, touchpad-in ose ekranin me prekje
- [Nga programe të tjera detajimi](topic:coming-from), nëse vjen nga një paketë e madhe detajimi
- [Përdorimi i kësaj ndihme](common:help)
