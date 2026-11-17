---
title: Zgjidh me dritare, zhvendos, rrotullo, pasqyro, ndrysho shumë
summary: Tërhiq një dritare për të zgjedhur, tërhiq pjesët e zgjedhura për t'i zhvendosur, zhvendos, rrotullo ose pasqyro zgjedhjen (ose një kopje të saj), ose ndrysho profilin, materialin, pozicionin ose rrotullimin e shumë elementeve njëherësh.
keywords: lasso, gardh, zgjedhje e lirë, tërheqje, tërhiq dhe lësho, zhvendos me tërheqje, ngjitje, dritare, kryqëzim, zgjedhje kutie, zgjedhje me tërheqje, zgjedh shumë, zhvendos, rrotullo, pasqyro, kthe, kopjo, ndrysho shumë, disa elementë, profil, material, pozicion, rrotullim, linjë rrjeti
from: 50b16f9a
---

Secili prej këtyre është një hap i vetëm zhbërjeje: një {{key:Mod+Z}} i kthen gjithçka mbrapsht.

## Zgjidh me dritare

- Te {{ui:Plan}} dhe {{ui:Elevation}}, tërhiq me butonin e majtë nga një pikë e zbrazët. Te {{ui:3D}}, mbaj {{key:Shift}} dhe tërhiq (tërheqja e thjeshtë e kthen modelin).
- Tërhiq **djathtas** për një dritare: merr atë që është tërësisht brenda, e vizatuar me kufi të plotë.
- Tërhiq **majtas** për një dritare kryqëzuese: merr gjithçka që prek, e vizatuar me vija të ndërprera.
- Mbaj {{key:Shift}} gjatë fillimit të tërheqjes për të shtuar te zgjedhja në vend që ta zëvendësosh.
- Një plan ose fasadë ofron vetëm atë që shfaq: pjesët e prera mbi plan, ose më shumë se 1 m larg vijës së rrjetit të fasadës, nuk zgjidhen.
- {{key:Esc}} gjatë tërheqjes e heq dritaren.

### Lasso

Zgjidh **Lasso** te {{ui:Dragging to select}} te [cilësimet e DetailCraft](topic:settings) dhe e njëjta tërheqje vizaton një vijë të lirë në vend të një drejtkëndëshi.

- Lëvizja e parë anash vendos si zgjedh: **djathtas**, ajo që është tërësisht brenda (vijë e plotë); **majtas**, ajo që prek (e ndërprerë).
- Shtyp {{key:Space}} gjatë tërheqjes për të ndërruar midis brenda, prekjes dhe **gardhit**: një vijë e hapur që merr çdo gjë që kryqëzon (me pika, portokalli).
- {{key:Shift}} për të shtuar dhe {{key:Esc}} për ta hequr funksionojnë si për dritaren.

:::touch
Në një ekran me prekje, një gisht lëviz planin dhe fasadën si më parë; zgjidh pjesët duke i prekur.
:::

Te {{ui:Plan}} dhe {{ui:Elevation}}, lëviz pamjen me butonin e djathtë ose të mesit ndërsa mjeti {{ui:Select}} është aktiv.

## Tërhiq pjesët për t'i zhvendosur

1. Zgjidh pjesët së pari (klik, {{key:Shift}}+klik ose një dritare).
2. Shtyp mbi një nga pjesët e zgjedhura dhe tërhiq. Gjithë zgjedhja lëvizet; një kontur me vija të ndërprera tregon ku shkon.
3. Lësho për ta vendosur. {{key:Esc}} përpara se ta lëshosh i kthen gjithçka në vend.

- Te {{ui:3D}} dhe {{ui:Plan}} pjesët lëvizin në të njëjtin nivel. Mbaj {{key:Mod}} gjatë fillimit të tërheqjes te {{ui:3D}} për t'i lëvizur lart e poshtë.
- Te {{ui:Elevation}} ato lëvizin brenda fasadës: përgjatë vijës së rrjetit dhe lart e poshtë.
- Pjesa që mban ngjitet në një kryqëzim rrjeti kur skaji i saj arrin brenda disa pikselësh nga një i tillë (kryqëzimi ndriçon dhe shiriti i gjendjes e emëron). Gjetkë lëvizja shkon me hapa 10 mm.
- Shtypja mbi një pjesë që nuk është zgjedhur ende e rrotullon ose e lëviz pamjen, kështu që një tërheqje nuk zhvendos kurrë diçka pa dashje.
- Tërheqja është një hap zhbëjeje, si {{ui:Move}}. Lidhjet ndjekin elementët e tyre.

## Ndrysho një veti te shumë elementë

Zgjidh dy ose më shumë elementë. Te **Ndrysho te të gjithë** në panelin {{ui:Properties}}:

- {{ui:Profile}}, {{ui:Position}}: për trarët, kolonat dhe diagonalet midis tyre.
- {{ui:Plate thickness (mm)}} dhe {{ui:Plate width (mm)}}: për pllakat.
- {{ui:Material}} dhe {{ui:Rotation (°)}}: për të gjithë.

Një fushë tregon **Ndryshon** kur elementët nuk përputhen. Zgjidh ose shkruaj një vlerë dhe çdo element që zbatohet e merr; shiriti i gjendjes thotë sa u ndryshuan dhe sa mbajtën të tyren.

Fushat numerike në panelin {{ui:Properties}} pranojnë edhe një llogaritje: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Një llogaritje që nuk lexohet refuzohet, dhe shiriti i gjendjes thotë ku ka gabuar.

## Zhvendos, rrotullo ose pasqyro

Zgjidh elementë dhe themele (edhe një i vetëm punon), pastaj përdor **Zhvendos, rrotullo, pasqyro** në panelin {{ui:Properties}}. Lidhjet nuk zhvendosen vetë: ndjekin elementët e tyre. Nëse zhvendos një trarë por jo kolonën e tij, shiriti i gjendjes thotë sa lidhje tani bashkojnë një element të lëvizur me një që qëndroi, dhe [Problemet](topic:troubleshooting) thotë nëse nuk përshtaten më.

- **Zhvendos:** shkruaj x, y dhe z në milimetra dhe zgjidh {{ui:Move}}. Ose zgjidh {{ui:Pick two points}} (ose shtyp {{key:M}}): kliko kryqëzimin e rrjetit nga ku të lëvizësh, pastaj atë ku të shkosh. Një kontur me vija të ndërprera ndjek treguesin.
- **Rrotullo në plan:** shkruaj këndin (në drejtim kundërorar, të parë nga lart) dhe zgjidh rreth çfarë rrotullohet: mesi i zgjedhjes, ose një kryqëzim rrjeti. Kolonat rrotullohen me kornizën.
- **Pasqyro:** zgjidh një vijë rrjeti. Imazhi i pasqyruar është i njëjti profil i kthyer në drejtim tjetër: një profil I e mban flanxhat e tij, një kanal shikon në drejtim tjetër (lart dhe poshtë ndërrohen), dhe vrimat dhe prerjet shkojnë me pjesën.
- Shëno **Mbaje origjinalin (bëj një kopje)** për ta lënë zgjedhjen aty ku është dhe për të zhvendosur, rrotulluar ose pasqyruar një kopje. Lidhjet e saj vijnë me të kur {{ui:Copy end plates and base plates with their members}} është aktiv te [cilësimet e DetailCraft](topic:settings).

Rrotullimi bëhet rreth një vije vertikale dhe pasqyrimi është në një plan vertikal, kështu që nivelet mbeten horizontale dhe themelet mbeten vertikalë.
