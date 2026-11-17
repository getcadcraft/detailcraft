---
title: Lidhjet me mitër
summary: Bashko dy elemente me formë I që takohen në një kënd: të dy skajet prerë në planin që përgjysmon këndin, me pllaka skaji, bulona dhe ngurtësues nëse i dëshiron.
keywords: mitër, lidhje mitër, gjunjë, mbështetës, kornizë portali, kulm, qoshe, prerje këndi, prerje e pjerrët, pllakë skaji, pllakë skaji me bulona, ngurtësues, lidh
from: cd8380d4
---

Një mitër bashkon dy elemente me formë I, skajet e të cilëve takohen në një kënd, si gjunjëza e një kornize portali, një kulm, ose dy trarë që kthejnë një qoshe në plan. DetailCraft i pret të dy skajet në planin që përgjysmon këndin midis tyre, kështu që dy sipërfaqet e prera përputhen. Nëse dëshiron, shton një pllakë skaji në secilin skaj të prerë, lidh me bulona të dy pllakat, dhe vendos një çift ngurtësuesish të trupit në çdo element.

## Ku funksionon

- Dy **forma I** (IPE, HEA, HEB, W dhe të ngjashme) me **skajet që takohen në të njëjtin nyje**. Çdo element mund të vizatohet në cilindo drejtim.
- Këndi midis elementeve duhet të jetë të paktën 15°. Elementët në vijë refuzohen: përdor një [bashkim](topic:splices).
- Prerja e thjeshtë (pa pllaka) funksionon sido që takohen elementet. **Pllakat e skajit** kërkojnë që dy elementet të takohen në planin e trupave të tyre, si te një gjunjë portali ose një kulm. Dy trarë që kthejnë një qoshe në plan takohen në planin e flanxhave të tyre, kështu që marrin vetëm prerjen e thjeshtë.
- Elementët me madhësi të ndryshme bashkohen, por me një paralajmërim: sipërfaqet e tyre të prera nuk përputhen.

## Shto një mitër

1. Përzgjidh dy elementet: kliko njërin, pastaj {{key:Shift}}+klikim te tjetri.
2. Zgjidh {{ui:Mitër}} te menuja {{ui:Më shumë}} e grupit {{ui:Lidh}}. Dialogu i mitrës me pamje paraprake hapet.
3. Vendos fushat e numëruara. Vizatimi pranë tyre formohet nga numrat e tu ndërsa shkruan, dhe rrathët e numëruar të tij tregojnë çfarë vendos secila fushë.
4. Zgjidh {{ui:Shto mitrën}}. Nëse ke përzgjedhur më shumë se dy elementë, çdo kyçje e lirë midis tyre merr të njëjtën mitër.

Për të ndryshuar më vonë një mitër, përzgjidhe (kliko një nga pllakat e saj) dhe zgjidh {{ui:Dialogu i mitrës me pamje paraprake}} në panelin e djathtë, ose ndrysho cilësimet e saj drejtpërdrejt aty. Një prerje e thjeshtë nuk ka pllaka për t'u klikuar: përzgjidh dy elementet e saj dhe zgjidh sërish {{ui:Mitër}}, dhe dialogu hapet te ajo mitër. {{ui:Apliko te të ngjashmet (n)}} e kopjon te çdo kyçje e lirë midis elementeve të të dy profileve të njëjta, në të njëjtin kënd.

## Fushat e numëruara (mm)

| Nr. | Cilësimi | Parazgjedhja | Çfarë bën |
|---|---|---|---|
| 1 | Hapësira midis pllakave (ose skajeve të prera) | 0 | Hapësirë e pastër te kyçja. Secila anë mban gjysmën e saj |
| 2 | Pllakat e skajit, trashësia e pllakës | aktive, 20 | Një pllakë skaji e saldur gjithandej në çdo skaj të prerë. Hiqe shenjën për një prerje të thjeshtë |
| 3 | Rreshtat e bulonave, hapësira e rreshtit, gjurma, rreshti i jashtëm | 4, 0, 0, joaktiv | Hapësira 0 shpërndan rreshtat në mënyrë të barabartë midis flanxhave. Gjurma 0 = gjysma e gjerësisë së pllakës, të paktën 2.4 × vrima. Rreshti i jashtëm vendoset te zgjatimi i pllakës përtej flanxhës së jashtme |
| 4 | Pllaka përtej flanxhës së jashtme | 0 | Sa larg arrijnë pllakat përtej flanxhës së jashtme, përgjatë prerjes |
| 5 | Pllaka përtej flanxhës së brendshme | 0 | Njëlloj në anën e brendshme |
| 6 | Ngurtësuesit e trupit, distanca përtej prerjes | joaktiv, 50 | Një çift në çdo element, në të dy anët e trupit, pingul me elementin, në këtë distancë përtej skajit të largët të prerjes së tij |
| 7 | Trashësia e ngurtësuesit | 10 | |

Nën {{ui:Bulonat}}: diametri i bulonit, vrima, klasa dhe lejimi i gjatësisë (20, 22, A325, 30), si për pllakat e skajit. Nën {{ui:Pllakat dhe saldimet}}: gjerësia e pllakës (0 = gjerësia e flanxhës), madhësia e saldimit me kënd (8) dhe materiali i pllakës (A36).

## Çfarë merr

- **Prerjet.** Skaji i çdo elementi prehet në planin e tij. Gjatësia e tij në lista, vizatime dhe skedarë NC është **gjatësia totale**, nga skaji i tij drejtkëndësh deri te pika më e largët e prerjes.
- **Pllakat** i takojnë elementit të vet: montimi i çdo elementi është elementi, pllaka e skajit dhe ngurtësuesit e tij. Bulonat janë bulona vendi të kyçjes: lista e materialeve i numëron një herë, dhe vizatimi i montimit të çdo elementi i liston si bulona të lirë.
- **Vizatimet** tregojnë skajet e pjerrëta dhe pllakat; vizatimi i prodhimit të një elementi me mitër shënon këndin e çdo prerjeje nga kënd i drejtë.
- **Skedarët NC** (DSTV) mbajnë këndet e prerjeve të pjerrëta në kokë, siç kërkon standardi, dhe konturet që ndjekin prerjen. Kontrolloji në shfaqësin NC të punishtes tënde përpara prerjes, si për çdo skedar NC.
- **IFC** pret ekstrudimin e çdo elementi sipas planit të tij të prerjes, kështu që programet e tjera tregojnë prerjen e vërtetë.
- **Shenjat:** një element me mitër është një copë tjetër nga një element me prerje të drejtë me të njëjtën gjatësi. Dy elementë me të njëjtat prerje ndajnë një shenjë, si dy rrasat e një kulmi.

## Mirë për t'uditur

- Mitra mbetet aktive. Zhvendos ose ndrysho madhësinë e njërit element dhe prerja, pllakat dhe bulonat ndjekin. Fshi njërin element dhe mitra zhduket, dhe skaji i elementit tjetër kthehet sërish i drejtë.
- Paralajmërimet përdorin të njëjtat minimume EN 1993-1-8 si lidhjet e tjera (distanca e skajit dhe e buzës 1.2 × vrima, hapësira 2.2 × vrima, gjurma 2.4 × vrima), plus rreshta bulonash shumë afër një flanxhe, pllaka më të ngushta se flanxhat dhe ngurtësues pa vend.
- Vlerat janë vlera fillestare, jo një projekt. DetailCraft nuk kontrollon forcën e lidhjes, dhe nuk bën zgjerim (haunch), asnjë mitër të saldur me saldim përballë, dhe asnjë ngurtësues në vijë me flanxhat e elementit tjetër.
