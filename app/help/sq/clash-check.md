---
title: Kontrollo përplasjet
summary: Gjej elementët, pllakat dhe themelet që futen në njëri-tjetrin, duke lënë jashtë pjesët që një lidhje synon të takohen, dhe shko te çdo përplasje.
keywords: përplasje, kontroll përplasjesh, përplasje, ndërhyrje, mbivendosje, prerje, përplasje e fortë, koordinim, kontroll modeli
from: 04d72d3b
---

Hap skedën {{ui:Përplasjet}} nën pamjen dhe zgjidh {{ui:Kontrollo tani}}. DetailCraft shikon çdo çift pjesësh në fazat e shfaqura: çelik me çelik, dhe çelik me një themel. Skeda liston çdo përplasje, më e thella e para, me:

- dy pjesët, sipas shenjës së pjesës (ose shenjës së themelit) dhe profilit;
- **Mbivendosja (mm)**: sa thellë një pikë e një pjese është brenda tjetrës, deri te fytyra më e afërt;
- **Afër**: kryqëzimi i rrjetit dhe niveli ku është, ose koordinatat e saj;
- {{ui:Shfaq}}: përzgjedh të dyja pjesët dhe e sjell vendin në mes të pamjes.

Titulli i skedës tregon sa përplasje gjeti kontrolli i fundit. Kontrolli nuk ekzekutohet vetë: pasi ndryshon modelin, lista e thotë këtë, dhe {{ui:Kontrollo tani}} e ekzekuton përsëri.

## Çfarë nuk është përplasje

- Pjesët që vetëm prekin: një pllakë te një flanxhë, një pllakë baze mbi themelin e saj, dy elementë skaj më skaj. **Toleranca (mm)** cakton sa mund të futen dy pjesë në njëra-tjetrën para se të llogaritet (1 mm në fillim; deri në 50).
- Pjesët që lidhja i bashkon: një pllakë skaji me trarin e vet dhe me flanxhën e kolonës ku është bulonuar, trari dhe kolona e asaj nyjeje, një pllakë baze me kolonën e saj, pllakat e një bashkimi me të dyja pjesët, një diagonale me pllakën e saj lidhëse (prerja e tubit nuk pritet në model). Lidhja synon që ato të takohen.
- Dhëmbi prerës i një pllake baze në themelin nën të (ai ndodhet në një xhep llaçi).
- Bulonat dhe shufrat e ankorimit (kalojnë nëpër vrima) dhe armatura.
- Pjesët në faza të fshehura. Shih [Fazat](topic:phases).

Një diagonale ose trari që hyn në një kolonë pa lidhje ndërmjet tyre **është** përplasje: ajo nyjë ende ka nevojë për një lidhje. Diagonalja e kornizës shembull e tregon këtë: nuk ka pllakë lidhëse. Përzgjidhe dhe zgjidh {{ui:Pllaka lidhëse}} ([Pllakat lidhëse të diagonaleve](topic:brace-gussets)) dhe përplasjet e saj zhduken.

## Mirë për t'u ditur

- Mbivendosja mat thellësinë në material, kështu një element i futur në themelin ose flanxhën e hollë të një kolone tregon vetëm disa milimetra edhe kur hyn shumë thellë.
- Pjesët kontrollohen ashtu si priten: prerjet dhe shkurtimi i trarit te pllakat e skajit merren parasysh. Vrimat jo.
