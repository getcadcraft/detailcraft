---
title: Savienojumi
summary: Savienojiet divus sijas vai kolonnu gala posmus ar skrūvētām flanšu un stieņa pārsegplātnēm.
keywords: savienojums, sijas savienojums, kolonnas savienojums, pārsegplātne, savienojuma plātne, flanšu plātne, stieņa plātne, skrūvēts savienojums, savienojums, pacelšana, savienot
from: 97d141c2
---

Skrūvēts savienojums savieno divus vienas I formas profila posmus gals pie gala: katrai flanšai ārpusē ir pārsegplātne, un katrā stieņa pusē ir plātne, kas skrūvēta cauri abiem posmiem. DetailCraft nogriež posmus līdz spraugai, novieto četras plātnes, izurbj caurumus plātnēs un abos posmos, pievieno skrūves un brīdina par malu attālumiem, soli un atbilstību.

## Kur tas darbojas

- Divas sijas vai divi kolonnu posmi ar **to pašu I formas profilu**, kas saiet **gals pie gala vienā līnijā**: galu attālums ne vairāk kā 50 mm, posmi paralēli un vienā līnijā (ar 1 mm precizitāti). Jebkurš posms var būt zīmēts jebkurā virzienā.
- Horizontāli, slīpi un vertikāli posmi darbojas.
- Divus posmus ar atšķirīgu augstumu vai flanšas platumu noraida, tāpat kā kanālus, leņķus un caurules.

## Savienojumu pievienošana

1. Zīmējiet divus posmus tā, lai tie saskartos gals pie gala. Lai sadalītu jau uzzīmētu elementu, zīmējiet to vēlreiz kā divus posmus.
2. Atlasiet vienu (vai abus) un izvēlieties {{ui:Savienojums}} grupas {{ui:Savienot}} izvēlnē {{ui:Vairāk}}.
3. Katrs brīvs savienojums starp atlasītajiem posmiem un citu tāda paša profila posmu saņem savienojumu. Statusa josla parāda, cik savienojumu izveidots.

Atlasiet savienojumu (noklikšķiniet uz vienas no tā plātnēm), lai mainītu tā iestatījumus labajā panelī. {{ui:Pielietot līdzīgiem (n)}} nokopē to uz katru citu brīvu savienojumu starp tāda paša profila posmiem.

## Iestatījumi (mm)

| Iestatījums | Noklusējums | Ko tas dara |
|---|---|---|
| Sprauga starp galiem | 10 | Katrs posms tiek nogriezts par pusi no tās |
| Skrūves diametrs, caurums, klase, garuma rezerve | 20, 22, A325, 30 | Kā galu plātnēm |
| Flanšas plātnes biezums | 12 | Plātne ir tikpat plata kā flanša |
| Flanšas skrūvju rindas (katrā pusē) | 3 | Rindas pāri flanšai katrā savienojuma pusē |
| Flanšas skrūvju solis | 75 | Gar elementu |
| Flanšas skrūvju attālums | 0 | Starp abām skrūvju līnijām; 0 = flanšas platums mīnus 80 |
| Flanšas galu attālums | 40 | No elementa gala līdz pirmajai skrūvei un no pēdējās skrūves līdz plātnes galam |
| Stieņa plātnes biezums | 8 | Viena katrā stieņa pusē |
| Stieņa skrūvju rindas | 3 | Augšup pa stieni, centrēti |
| Stieņa skrūvju kolonnas (katrā pusē) | 2 | Gar elementu katrā savienojuma pusē |
| Stieņa skrūvju solis augšup pa stieni / gar elementu | 75, 75 | |
| Stieņa galu attālums | 40 | Kā flanšām |
| Stieņa plātnes augstums | 0 | 0 = brīvais stienis starp rādiusiem mīnus 10 augšā un apakšā |
| Plātnes materiāls | A36 | Teksts |

Plātņu garums izriet no skrūvēm: flanšas plātne = sprauga + 2 × (2 × galu attālums + (rindas − 1) × solis); stieņa plātnes līdzīgi ar savām kolonnām. Ar noklusējuma vērtībām flanšas plātnes ir 470 garas.

## Vērts zināt

- Plātnes pieder **pirmajam zīmētajam** no diviem posmiem (tā īpašībās tas saukts par pirmo posmu): tās redzamas tā montāžas rasējumā un tiek piegādātas kopā ar to, skrūvētas, nevis metinātas. Otrā posma montāžas rasējumā redzami tikai tā caurumi.
- Flanšas skrūves satver flanšu un tās plātni; stieņa skrūves satver stieni un abas stieņa plātnes. Skrūvju garumi ir uzskaitīti atsevišķi īpašībās.
- Brīdinājumi izmanto tos pašus EN 1993-1-8 minimumus kā citi savienojumi (gala un malas attālums 1.2 × caurums, solis 2.2 × caurums gar elementu un 2.4 × caurums šķērsvirzienā), kā arī brīdinājumu par stieņa plātni, kas dziļāka par brīvo stieni, un par flanšu skrūvēm, kas ir pārāk tuvu stienim līdz pārejai.
- DetailCraft nekonstruē savienojumu (stiprības pārbaudes nav), un tas neveido aizpildījuma plātnes posmiem ar atšķirīgu biezumu.
- Abu posmu kopēšana kopē arī to savienojumu; dzēšot jebkuru posmu, dzēšas arī savienojums.
