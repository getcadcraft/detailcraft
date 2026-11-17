---
title: Botimet, revizionet dhe regjistri i ndryshimeve të vizatimeve
summary: Mbaj një histori të vetme botimesh me modelin e arkitektit: lexo botimet, regjistro udhëzimet e vendit, vizatimet e prodhimit dhe modelet e lidhura kundrejt një botimi, dhe lexo regjistrin e ndryshimeve të vizatimeve.
keywords: botim, revizion, revizione, regjistër ndryshimesh, regjistri i ndryshimeve të vizatimeve, regjistër vizatimesh, udhëzim vendi, vizatim prodhimi, model i lidhur, tender, ndërtim, histori botimesh, vizatime prodhimi, prodhim
from: 4b9a1b7b
---

## Çfarë do të bësh

Punoje me të njëjtën histori botimesh si pjesa tjetër e ekipit. Shiko cilat fletë u dërguan në cilin revizion, dhe mbaj çfarë ndodh në terren kundrejt botimit ku i përket.

## Hapat

1. Hap **Botimet dhe revizionet**.
2. Zgjidh **Lexo një histori botimesh** dhe përzgjidh skedarin `.issues.json` të ruajtur nga BimCraft ose nga një aplikacion tjetër. Botimet dhe regjistrimet e tij shtohen te të tuat. Asgjë nuk zëvendësohet.
3. Zgjidh **Shto regjistrim** për një udhëzim vendi, një vizatim prodhimi, një grup shënimesh, një model të lidhur ose një shënim. Përzgjidh botimin ku bën fjalë dhe statusin e tij. Një skedar që zgjedh regjistrohet me emrin, madhësinë dhe SHA-256; skedari mbetet aty ku është.
4. **Regjistri i ndryshimeve të vizatimeve** shfaq një rresht për çdo fletë dhe një kolonë për çdo botim. Një revizion në kllapa u botua sërish pa ndryshim.
5. **Shkarko regjistrin e ndryshimeve (CSV)** ruan botimet, tabelën e fletëve dhe regjistrimet. **Ruaj historinë e botimeve** shkruan një skedar që lexohet nga aplikacionet e tjera.

## Mirë për t'uditur

- Fletët vazhdojnë të botohen nga Vizatimet, fletë për fletë. Këto botime shfaqen këtu: fletët e botuara në një datë me një shënim të vetëm janë një botim.
- Regjistrimet dhe botimet që lexon ruhen në skedarin e modelit. Çdo ndryshim është një hap Zhbëj.
- Leximi i të njëjtit skedar dy herë nuk shton asgjë dy herë. Kur dy kopje mbajnë të njëjtin regjistrim, mbahet ai më i ri.
