---
title: Vendos pllaka dhe shto profile të personalizuara
summary: Vendos pllaka të lira sipas trashësisë dhe gjerësisë, dhe përcakto prerjet e tua I, kanal, këndore, tub ose shirit të sheshtë.
keywords: pllakë, e sheshtë, profil i personalizuar, profil përdoruesi, parametrik, prerje, formë, prerje tërthore, pl
from: c24c3b51
---

## Vendos një pllakë

Një pllakë vendoset si një trare: shtrihet mes dy kryqëzimesh, me gjerësinë përgjatë dhe trashësinë lart.

1. Përzgjidh {{ui:Pllaka}} në grupin {{ui:Vendos}}, ose shtyp {{key:P}}.
2. Në panelin {{ui:Vetitë}}, cakto {{ui:Trashësia (mm)}} dhe {{ui:Gjerësia (mm)}}. Parazgjedhja është 20 x 200 në A36.
3. Cakto {{ui:Materiali}} dhe {{ui:Rrotullimi (°)}} nëse duhet. Një rrotullim prej 90 e vendos pllakën në skaj.
4. Kliko dy kryqëzime, ose përdor formën {{ui:Shto sipas rrjetit}}.

Emri i profilit të pllakës shkruhet `PL<thickness>x<width>`, për shembull PL20x200. Gjatësia e saj është distanca mes dy pikave.

Për të ndryshuar madhësinë e një pllake të vendosur, përzgjidhe dhe ndrysho {{ui:Trashësia (mm)}} ose {{ui:Gjerësia (mm)}}.

Pllakat që vendos janë pjesë të veta (shenja p, montimi P). Pllakat fundore dhe pllakat bazë të krijuara nga lidhjet janë gjithashtu pllaka, por i ndryshon përmes lidhjes së tyre; shih [Pllakat fundore](topic:end-plates).

## Shto një profil të personalizuar

Kur prerja që të duhet nuk është në katalog, krijoje nga përmasat e saj. Një profil i personalizuar i përket modelit dhe ruhet me të. Për ta përdorur në çdo model të ri, mbaje në {{ui:Profilet e mi}}, të përshkruar te "Ruaj një profil për modelet e reja" më poshtë.

1. Në panelin {{ui:Modeli}} në të majtë, hap {{ui:Profil i personalizuar}}.
2. Shkruaj një {{ui:Emri}}, për shembull `W8x18-custom` ose `RHS 120x80x5`. Nuk mund të jetë emër katalogu ose të duket si emër pllake.
3. Zgjidh një {{ui:Forma}}: {{ui:Formë I}}, {{ui:Kanal}}, {{ui:Këndore barabarte}}, {{ui:Tub drejtkëndor}}, {{ui:Tub rrethor}} ose {{ui:Shirit i sheshtë}}.
4. Plotëso përmasat që shfaqen, të gjitha në milimetra:

| Forma | Përmasat |
|---|---|
| Formë I | Thellësia d, Gjerësia e flanxhës bf, Rrjeta tw, Flanxha tf, Rrezja e rrumbullakimit r (mund të jetë 0) |
| Kanal | Thellësia d, Gjerësia e flanxhës bf, Rrjeta tw, Flanxha tf (qoshe të drejta) |
| Këndore barabarte | Gjerësia b (çdo krah), Trashësia t |
| Tub drejtkëndor | Lartësia h, Gjerësia b, Trashësia t (rrezja e jashtme e qoshes 2t) |
| Tub rrethor | Diametri D, Trashësia t |
| Shirit i sheshtë | Gjerësia b, Trashësia t |

5. Lëre {{ui:Ruaje në Profilet e mi}} të zgjedhur për ta pasur në çdo model të ri (shih më poshtë), ose hiqe zgjedhjen për ta mbajtur vetëm në këtë model.
6. Zgjidh {{ui:Shto profil}}.

Shiriti i statusit thotë "Profili "…" u shtua; është në çdo listë profilesh nën Personalizuar." Ai shfaqet në listën nën formë dhe në fund të çdo liste {{ui:Profili}}.

DetailCraft kontrollon që forma të mund të ekzistojë. Do të shohësh mesazhe si "Rrjeta dhe flanxhat nuk përshtaten brenda thellësisë dhe gjerësisë.", "Rrezja e rrumbullakimit është shumë e madhe për flanxhën." ose "Muri është shumë i trashë." Korrigjo numrat dhe zgjidh përsëri {{ui:Shto profil}}.

### Çfarë marrin profilet e personalizuara

- Masën për metër nga sipërfaqja × 7850 kg/m³ (madhësitë e katalogut përdorin peshën e publikuar).
- I-shape të personalizuara marrin vrima, prerje, pllaka fundore, skedarë NC dhe vizatime punishteje, si I-shape të katalogut.
- Shiritat e sheshtë të personalizuar sillen si pllaka.
- Kanalet dhe tubat e personalizuar marrin vrima; këndoret dhe tubat rrethorë jo ende.

Nuk mund të redaktosh ose heqësh një profil të personalizuar nga një model pasi të shtohet (përdor {{key:Mod+Z}} menjëherë nëse ke gabuar). Jep një emër të ri profilit të korrigjuar.

## Ruaj një profil për modelet e reja

{{ui:Profilet e mi}}, nën formën, është lista jote e profileve të personalizuara. Ruhet në këtë shfletues, në këtë kompjuter, jo në një skedar modeli dhe jo në llogarinë tënde.

- Një profil i shtuar me {{ui:Ruaje në Profilet e mi}} të zgjedhur shkon në listë. Çdo model i ri, përfshirë atë që DetailCraft hap kur e nis, fillon me të gjitha në listat e profileve.
- Një profil që tashmë është në një model por nuk është në listë ka një buton {{ui:Ruaj}} pranë vetes.
- Në një model që nuk ka një nga profilet e tua (p.sh. një skedar më i vjetër), zgjidh {{ui:Përdor këtu}} për ta shtuar.
- {{ui:Hiq}} heq një profil nga lista. Modelet që e përdorin tashmë e mbajnë kopjen e tyre.
- Një model që hapet mban profilet e ruajtura në skedarin e tij. Hapja e një skedari nuk e ndryshon kurrë listën tënde.
- Një emër që është tashmë në listë me përmasa të ndryshme refuzohet: jep të riut një emër tjetër.
- Pastrimi i të dhënave të faqes së shfletuesit, ose përdorimi i një shfletuesi ose kompjuteri tjetër, nis me një listë bosh. Një dritare private nuk e mban dot; aplikacioni e thotë këtë.
