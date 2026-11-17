---
title: Pamatu pārbaudes
summary: Pārbaudiet pamatus, savienotos pamatus un plātnes uz jūsu aprakstītās grunts, sēšanos, elastīgu plātni uz atsperēm, pāļu grupas un atbalsta sienas. Palīglīdzeklis inženierim pārbaudei.
keywords: pamats, savienots pamats, plātne, sēšanās, pamatnes modulis, atsperes, malas kolonna, stūra kolonna, nesošā spēja, slīdēšana, apgāšanās, caursitums, vienvirziena bīde, lieces, iestrāde, minimālā armatūra, pāļu grupa, atbalsta siena, ACI 318-19
from: 6961ad52
---

:::warning
Šīs ir pirmā pakāpes pārbaudes, ko inženierim jāpārskata, nevis projekta apstiprinājums. Pieļaujamo nesošo spiedienu un berzes koeficientu nosakāt jūs: DetailCraft nezina jūsu grunti.
:::

Cilne {{ui:Foundation}} pārbauda modeļa pamatus pret kolonnu slodzēm, ko jūs tiem norādāt.

## Aprakstiet grunti

Ierakstiet {{ui:Pieļaujamais nesošais spiediens}} un {{ui:Pamatnes berzes koeficients}}. Abi sākas ar 0, kas nozīmē "nav ievadīts": pārbaude tad parāda spiedienu kā piezīmi un nesniedz apstiprinājumu. Sēšanai ierakstiet grunts moduli {{ui:Es}} (MPa), tās Puasona koeficientu un pieļaujamo sēšanos (sākumā 25 mm). Elastīgai plātnei ierakstiet pamatnes moduli {{ui:ks}}. Tur ir arī uzbērums virs pamata, grunts tilpuma svars, drošības koeficienti slīdēšanai un apgāšanās (sākotnēji 1.5) un armatūras tecēšanas stiprums.

## Ievadiet slodzes

Katram pamatam ir kolonnu slodžu saraksts. Izmantojiet {{ui:Add a column load}} un aizpildiet ekspluatācijas rindu (nesošajai spējai, slīdēšanai un apgāšanās) un faktorizēto rindu (stiprības pārbaudēm): vertikālo slodzi P uz leju, horizontālos spēkus Vx un Vy uz pamata augšas, momentus Mx un My, kolonnas vietu uz pamata un tās izmēru.

Vai arī izpildiet cilni {{ui:Analysis}} un nospiediet {{ui:Take column loads from the Analysis}}: katrs balsts, kas stāv uz pamata, kļūst par kolonnas slodzi no ekspluatācijas un faktorizētajām kopām, ko izvēlaties. Pozitīvs My vairāk noslogo pamata +x pusi; pozitīvs Mx vairāk noslogo −y pusi.

## Ko pārbauda

No ekspluatācijas slodzēm, pievienojot pamata pašsvaru un uzbērumu:

- **Nesošā spēja:** spiediens zem stingra pamata. Iekšējā trešdaļā visa pamatne ir saskarē; ārpus tās daļa pamatnes atrauties, un maksimums ir augstāks. Rezultante ārpus pamatnes neiztur pārbaudi.
- **Slīdēšana:** berzes koeficients reizināts ar vertikālo slodzi pret horizontālo spēku.
- **Apgāšanās:** rezultantes attālums līdz malai.
- **Sēšanās:** elastīgā sēšanās vidējam spiedienam pusbezgalīgā telpā ar jūsu ievadīto moduli, centrā un stūrī (Timošenko un Gudjera risinājums elastīgai taisnstūra plātnei), pret robežu. Tā ir augšējā robeža stingram pamatam, un tā neiekļauj ierobežota dziļuma grunts slāni, izrakto grunts radīto atslodzi un konsolidāciju. Bez moduļa tā parāda spiedienu kā piezīmi.

No faktorizētajām kolonnu slodzēm vien (ACI 318-19):

- **Lieces** kolonnas virsmā ar minimālo armatūru (0.0018 420 MPa stieņiem) un jūsu uzzīmētajiem stieņiem.
- **Vienvirziena bīde** attālumā d no virsmas.
- **Caursitumbīde** attālumā d/2 ap katru kolonnu, ar kolonnas momentu. Kolonnai pie malas kritisko griezumu apgriež pamata mala (trīs pusēs pie malas, divās pie stūra; ACI 318-19 22.6.4.1 un mazākais αs tabulā 22.6.5.2), un moments griezuma paša centrā ietver slodzes nobīdi.
- **Stieņu iestrāde** aiz kolonnas virsmas, taisni vai ar āķiem.
- **Dziļums** virs apakšējiem stieņiem (150 mm).

Savienots pamats vai plātne tiek uzskatīta par stingru, un bīde un moments iegūti no statikas griezumiem pāri visam platumam.

## Elastīga plātne uz atsperēm

Atzīmējiet {{ui:Analizēt šo pamatu kā elastīgu plātni uz atsperēm}}, kad pamats nes daudz kolonnu un stingrais pamats ir pārāk rupjš. Pamats kļūst par plātni no četrmezglu elementiem uz atsperu pamatnes (ievadītais {{ui:ks}}, sadalīts pa mezgliem), un katras kolonnas slodze tiek izplatīta pa tās pašas nospieduma mezgliem. Otrā tabula dod lielāko grunts spiedienu un sēšanos (un starpību starp lielāko un mazāko), lieces momentu katrā virzienā ar nepieciešamo armatūru, stiepi augšā pret vienkārša betona stiprību (pamatam nav augšējo stieņu), vienvirziena bīdi attālumā d no kolonnām un caursitumu pēc atsperu paša spiediena. Tīkls tiek sablīvēts, līdz kolonna ir trīs elementi plata; liela plātne aizņem dažas sekundes. Plātnes pašsvars un grunts virs tās atceļas un netiek ieskaitīts.

Katra neizturētā pārbaude ir {{ui:Problems}} panelī ar tās klauzulu.

## Pāļu grupas un atbalsta sienas

{{ui:Add a pile group}} novieto pāļu režģi zem stingra vāciņa: ievadiet slodzi un momentus un to, ko viens pāls var nest spiedē un stiepē (pāļa projekta skaitļi, nevis šīs cilnes skaitļi). Katra pāla reakcija ir P/n plus tā daļa no momentiem (elastīgā metode), un tiek pārbaudīts lielākais spiediens un jebkura stiepe.

{{ui:Add a retaining wall}} pārbauda konsoles atbalsta sienu uz līmeņa aizbēruma, uz metru: Rankina aktīvo spiedienu, apgāšanos ap pēdu, slīdēšanu un pamatnes spiedienu. Pasīvais spiediens pēdas priekšā netiek ieskaitīts. Jūsu asistents var izpildīt tās pašas pārbaudes ar `pile_group_check` un `retaining_wall_check`.

Pāļu grupas, sienas un plātnes slēdzis tiek saglabāti modeļa failā, un neizturētā pārbaude ir {{ui:Problems}} panelī.
