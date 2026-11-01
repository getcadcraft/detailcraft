---
title: Fillimi me DetailCraft
summary: Çfarë bën DetailCraft sot, si ta hapësh, dhe një model i parë nga rrjetet deri te një vizatim punëtorie në dhjetë minuta.
keywords: fillimi, modeli i parë, hyrje, detajimi i çelikut, armatura, fillim i shpejtë, udhëzues, mësim, përmbledhje
from: 3682c0d8
---

DetailCraft është aplikacioni për detajimin e çelikut dhe armaturës në familjen CadCraft. Ndërton një model 3D të një kornize çeliku mbi rrjete dhe nivele, e lidh, dhe merr atë që i nevojitet punëtorisë: shenjat e pjesëve dhe montimeve, një listë materialesh, vizatime punëtorie të një pjese, skedarë NC DSTV, një model IFC, dhe një tabelë përkuljeje për themelet.

Ky është një version i hershëm. Bën me kujdes një listë të shkurtër gjërash, në vend që gjithçka njëherësh. Lexo [Çfarë nuk është ndërtuar ende](topic:not-built-yet) përpara se të planifikosh punë reale rreth tij.

## Çfarë bën sot

- Rrjete dhe nivele që shkruan, në milimetra.
- Kolona, trarë, diagonale dhe pllaka nga katalogët e publikuar të profileve (AISC W, S, C, L, HSS dhe Pipe; IPE, HEA, HEB dhe UPN evropiane), plus profilet e tua parametrike.
- Dy lidhje: një pllakë skaji e bulonuar nga një trar te flanxha e një kolone, dhe një pllakë baze kolone me katër shufra ankorimi. Secila mund të kopjohet te çdo bashkim i ngjashëm.
- Vrima dhe prerje të shkruara sipas pozicionit.
- Themele drejtkëndore me bllok të poshtëm dhe shufra fillestare.
- Shenja pjesësh dhe montimesh që përditësohen vetë pas çdo ndryshimi.
- Eksportime: IFC4, skedarë NC DSTV (profile I dhe pllaka), lista e materialeve si CSV, tabela e përkuljes si CSV, dhe një PDF vizatimi punëtorie të një pjese.

## Hap DetailCraft

1. Hap DetailCraft në një shfletues desktop: Chrome, Edge, Firefox ose Safari. Shih [Shfletuesit dhe kompjuterat](common:browsers).
2. Prit derisa ekrani të mbushet. Shiriti i statusit në fund thotë "Gati. Hap Shembullin, ose vendos rrjetet dhe nivelet dhe fillo të vendosësh elementë."

Pamja e modelit ka nevojë për grafikë 3D (WebGL). Nëse mesi i ekranit thotë "Ky shfletues nuk mundi të nisë grafikën 3D (WebGL)", shih [Zgjidhja e problemeve](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modelet e tua qëndrojnë në kompjuterin tënd. Hapja e një modeli e lexon në shfletues, dhe ruajtja shkarkon një skedar. Asgjë nuk ngarkohet. Ruajtja në cloud nuk është ende e disponueshme. Shih [Ku shkojnë skedarët e tu](common:your-files). Për ta përdorur DetailCraft më vonë pa lidhje, zgjidh {{ui:Save for offline}} në shiritin e aplikacionit një herë ndërkohë që je online; shih [Puna offline](common:offline).
:::

:::offline
Je offline. DetailCraft funksionon pa lidhje vetëm nëse është ruajtur më parë për përdorim offline: butoni {{ui:Save for offline}} në shiritin e aplikacionit atëherë shfaq {{ui:Offline ready}}. Shih [Puna offline](common:offline).
:::

## Shiko fillimisht shembullin

Mënyra më e shpejtë për të parë atë që prodhon DetailCraft është korniza shembull.

1. Zgjidh {{ui:Sample}} te grupi {{ui:File}} i shiritit të veglave.
2. Pamja shfaq një kornizë me dy hapësira: gjashtë kolona me pllaka baze, katër trarë me pllaka skaji, një diagonale dhe shtatë themele me armaturë.
3. Kliko një trar. Paneli {{ui:Properties}} në të djathtë shfaq shenjën e pjesës, gjatësinë e prerë, peshën dhe vrimat që bënë pllakat e skajit.
4. Hap skedën {{ui:Bill of materials}} në fund për të parë çdo shenjë pjese me numrin dhe peshën e saj.

Udhëzuesi [Eksploro kornizën shembull](topic:sample-model) e kalon atë pjesë për pjesë.

## Modeli yt i parë

Një model i ri ka tashmë rrjetet 1 deri 3 nga A deri në B me 6000 mm dhe dy nivele, Level 1 në 0 dhe Level 2 në 4000.

1. Zgjidh {{ui:New}}. Nëse modeli aktual ka ndryshime, DetailCraft pyet nëse duhet t'i ruash më parë.
2. Zgjidh {{ui:Plan}} mbi pamje. Lista e niveleve pranë saj zgjedh Level 1.
3. Zgjidh {{ui:Column}} në shiritin e veglave, ose shtyp {{key:C}}.
4. Kliko kryqëzimin e rrjetit A/1. Një kolonë W12x50 shfaqet nga Level 1 deri në Level 2. Shiriti i statusit thotë ku shkoi.
5. Kliko B/1, A/2 dhe B/2 për të vendosur tre të tjera.
6. Zgjidh Level 2 në listën e niveleve, pastaj zgjidh {{ui:Beam}} ose shtyp {{key:B}}.
7. Kliko A/1, pastaj A/2. Një trar W16x26 bashkon majat e dy kolonave, me kulmin e çelikut në nivel.
8. Shtyp {{key:Esc}} për t'u kthyer te {{ui:Select}}, pastaj kliko traun.
9. Zgjidh {{ui:End plates}} te grupi {{ui:Connect}}. Të dy skajet marrin një pllakë skaji të bulonuar, trari pritet për t'u përshtatur, dhe pllaka e parë e skajit tani është e zgjedhur.
10. Kliko traun përsëri.
11. Zgjidh {{ui:Shop drawing}} te grupi {{ui:Output}}. Hapet një pamje paraprake e vizatimit të punëtorisë së traut. Zgjidh {{ui:Download PDF}}.
12. Shtyp {{key:Mod+S}} për të ruajtur modelin. Shfletuesi shkarkon `Untitled.detailcraft.json`.

Riemërto modelin te fusha {{ui:Name}} lart majtas përpara se ta ruash, që skedari dhe çdo eksport ta mbajë emrin e tij.

## Ku të shkosh më pas

- [Një shfletim i ekranit](topic:workspace)
- [Vendos rrjetet dhe nivelet](topic:grids-and-levels)
- [Lëviz në pamjen 3D](topic:navigate-3d), me miun, me trackpad-in ose me ekranin me prekje
- [Kalimi nga softueri tjetër detajimi](topic:coming-from), nëse e njeh një paketë të madhe detajimi
- [Përdorimi i kësaj ndihme](common:help)
