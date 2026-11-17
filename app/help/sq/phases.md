---
title: Fazat
summary: Ndaj modelin në faza (sekuenca montimi ose dorëzime), shfaq ose fshih çdo fazë, vendos pjesë në një fazë dhe numëro shenjat për fazë.
keywords: fazë, faza, menaxher fazash, sekuencë montimi, dorëzim, lot, sekuencë, fshih fazën, shfaq fazën, filtër, numërim, prefiks shenje, për fazë
from: bae506f5
---

Një fazë është një grup pjesësh që prodhohen, dorëzohen ose montohen bashkë: një sekuencë montimi, një dorëzim, një lot. Çdo element dhe themel është në një fazë. Një lidhje është në fazën e elementit të saj kryesor: trari i një pllake fundore, kolona e një pllake baze. Një model i ri ka një fazë.

## Paneli i fazave

Seksioni {{ui:Fazat}} i panelit {{ui:Modeli}} liston çdo fazë:

- kutia e zgjedhjes shfaq ose fshih fazën në pamje;
- numri, dhe një emër që mund ta shkruash (bosh = "Faza 2" e kështu me radhë);
- sa pjesë ka në të;
- butoni {{ui:×}} heq një fazë. Vetëm një fazë e zbrazët mund të hiqet: vendos më parë pjesët e saj në një fazë tjetër.

{{ui:Shto fazë}} shton numrin e radhës dhe e bën atë fazën ku hyjnë pjesët e reja.

## Vendos pjesë në një fazë

- **Pjesët e reja:** {{ui:Pjesët e reja hyjnë në}} zgjedh fazën ku hyn çdo element dhe themel që vendos nga tani e tutje.
- **Një pjesë:** përzgjidhe dhe ndrysho {{ui:Faza}} në panelin {{ui:Vetitë}}.
- **Shumë pjesë:** përzgjidhi ato (një dritare, {{key:Shift}}+klik, {{key:Mod+A}}) dhe ndrysho {{ui:Faza}} në krye të panelit {{ui:Vetitë}}. Shfaqet **Ndryshon** kur ato janë në faza të ndryshme. Një ndryshim është një hap zhbërjeje.

Kopjet mbajnë fazën e pjesës nga e cila u kopjuan, edhe kur ngjiten në një model tjetër (faza shtohet atje).

## Shfaq dhe fshih fazat

Një fazë e fshehur nuk vizatohet në pamje, nuk mund të klikohet ose të kapet nga një dritare përzgjedhjeje, dhe {{key:Mod+A}} e lë jashtë. Ajo është ende në listën e materialeve, raportet, vizatimet dhe çdo eksport. Fshehja është vetëm për pamjen: nuk ruhet dhe nuk ka zhbërje.

## Shenjat për fazë

Me **Numëro shenjat për fazë** të ndezur (fillimisht është i ndezur) dhe pjesë në më shumë se një fazë, çdo fazë numërohet më vete dhe shenjat e saj fillojnë me numrin e fazës: shenjat e pjesëve 1-b1, 2-b1, shenjat e montimit 2-B1, themelet 2-F1. Dy trarë identikë në faza të ndryshme kanë atëherë shenja të ndryshme, sepse prodhohen dhe dërgohen në kohë të ndryshme. Me një fazë në përdorim, shenjat nuk kanë prefiks. Fikeni për të numëruar gjithë modelin si një, kështu që pjesët identike ndajnë një shenjë pavarësisht nga faza e tyre.

Faza shkruhet në eksportin IFC (grupi i vetive DetailCraft, Phase).

:::note
Modelet me faza ruhen në formatin e skedarit 2 të DetailCraft. Versioni 0.3 i DetailCraft nuk mund t'i hapë; ky i hap skedarët më të vjetër, me çdo pjesë në fazën 1.
:::
