---
title: Bashkimet
summary: Bashko dy pjesë të një trau ose kolone skaj më skaj me pllaka mbulese flanxhe dhe mureje me bulona.
keywords: bashkim, bashkim trau, bashkim kolone, pllakë mbulese, pllakë bashkimi, pllakë flanxhe, pllakë muri, bashkim me bulona, nyje, ngritje, lidh
from: 97d141c2
---

Një bashkim me bulona lidh dy pjesë të një profili I skaj më skaj: një pllakë mbulese jashtë çdo flanxhe dhe një pllakë në secilën anë të murit, të bulonuara përmes të dyja pjesëve. DetailCraft i pret pjesët prapa deri në hapësirën midis tyre, vendos të katër pllakat, shpon vrimat në pllaka dhe në të dyja pjesët, shton bulonat dhe paralajmëron për distancat nga skaji, hapësirat dhe përshtatjen.

## Ku funksionon

- Dy trarë, ose dy segmente kolone, të të njëjtit **profil I**, që takohen **skaj më skaj në linjë**: skajet jo më larg se 50 mm, pjesët paralele dhe në një vijë (brenda 1 mm). Secila pjesë mund të vizatohet në cilindo drejtim.
- Pjesët horizontale, të pjerrëta ose vertikale funksionojnë të gjitha.
- Dy pjesë me lartësi ose gjerësi flanxhe të ndryshme refuzohen, po ashtu kanalet, këndoret dhe tubat.

## Shto bashkime

1. Vizato dy pjesët që takohen skaj më skaj. Për të ndarë një element që është vizatuar tashmë, vizatoje përsëri si dy pjesë.
2. Përzgjidh njërën (ose të dyja) dhe zgjidh {{ui:Bashkim}} te menyja {{ui:Më shumë}} e grupit {{ui:Lidh}}.
3. Çdo nyje e lirë e pjesëve të përzgjedhura me një pjesë tjetër të të njëjtit profil merr një bashkim. Shiriti i statusit tregon sa janë.

Përzgjidh bashkimin (kliko një nga pllakat e tij) për të ndryshuar cilësimet e tij në panelin e djathtë. {{ui:Zbato te të ngjashmet (n)}} e kopjon atë te çdo nyje tjetër e lirë midis pjesëve të të njëjtit profil.

## Cilësimet (mm)

| Cilësimi | Parazgjedhja | Çfarë bën |
|---|---|---|
| Hapësira midis skajeve | 10 | Secila pjesë prritet prapa me gjysmën e saj |
| Diametri i bulonit, vrima, klasa, toleranca e gjatësisë | 20, 22, A325, 30 | Njëjtë si për pllakat e skajit |
| Trashësia e pllakës së flanxhës | 12 | Pllaka është po aq e gjerë sa flanxha |
| Rreshtat e bulonave të flanxhës (secila anë) | 3 | Rreshta përgjatë flanxhës në secilën anë të nyjes |
| Hapi i bulonave të flanxhës | 75 | Përgjatë elementit |
| Gjurma e bulonave të flanxhës | 0 | Midis dy vijave të bulonave; 0 = gjerësia e flanxhës minus 80 |
| Distanca e skajit të flanxhës | 40 | Nga skaji i elementit te bulloni i parë, dhe nga bulloni i fundit te skaji i pllakës |
| Trashësia e pllakës së murit | 8 | Një në secilën anë të murit |
| Rreshtat e bulonave të murit | 3 | Lart përgjatë murit, në qendër |
| Kolonat e bulonave të murit (secila anë) | 2 | Përgjatë elementit në secilën anë të nyjes |
| Hapi i bulonave të murit, lart / përgjatë elementit | 75, 75 | |
| Distanca e skajit të murit | 40 | Njëjtë si për flanxhat |
| Lartësia e pllakës së murit | 0 | 0 = muri i lirë midis filetove minus 10 lart dhe poshtë |
| Materiali i pllakës | A36 | Tekst |

Gjatësitë e pllakave varen nga bulonat: pllaka e flanxhës = hapësira + 2 × (2 × distanca e skajit + (rreshta − 1) × hapi); pllakat e murit njëlloj me kolonat e tyre. Me parazgjedhjet, pllakat e flanxhës janë 470 të gjata.

## Dobishme për t'u ditur

- Pllakat i përkasin **pjesës së parë të vizatuar** nga të dyja (te vetitë e saj quhet pjesa e parë): ato shfaqen në vizatimin e montimit të saj dhe dërgohen me të, të bulonuara, jo të saldara. Vizatimi i montimit të pjesës së dytë shfaq vetëm vrimat e saj.
- Bulonat e flanxhës i kapin flanxhën dhe pllakën e saj; bulonat e murit kapin murin dhe të dyja pllakat e murit. Gjatësitë e bulonave listohen veçmas te vetitë.
- Paralajmërimet përdorin të njëjtat minimume EN 1993-1-8 si lidhjet e tjera (distanca e skajit dhe e buzës 1.2 × vrima, hapi 2.2 × vrima përgjatë dhe 2.4 × vrima tërthor), plus një pllakë muri më e thellë se muri i lirë dhe bulona flanxhe shumë afër murit për filetin.
- DetailCraft nuk e projekton bashkimin (pa kontroll forcash), dhe nuk bën pllaka mbushëse për pjesë me trashësi të ndryshme.
- Kopjimi i të dyja pjesëve kopjon bashkimin e tyre; fshirja e njërës prej pjesëve e fshin atë.
