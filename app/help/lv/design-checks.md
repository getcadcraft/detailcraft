---
title: Tērauda elementu pārbaude pēc projektēšanas normas
summary: Izveidojiet slodžu kombinācijas pēc ASCE 7 vai EN 1990, pārbaudiet katru tērauda I profilu pēc AISC 360 vai EN 1993-1-1 un redziet, cik lielu kapacitātes daļu izmanto katrs elements. Palīglīdzeklis, līdz inženieris to ir pārskatījis.
keywords: projektēšana, projektēšanas pārbaude, tērauda projektēšana, noslodze, noslodzes pārbaude, kapacitāte, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eirokods, slodžu kombinācijas, LRFD, nacionālais pielikums, izliekšanās, sānu-vērpes izliekšanās, bīde, liece, mijiedarbība, konstrukcija, studenti, inženieris
from: 15685c4e
---

Pēc aprēķina palaišanas bloks {{ui:Projektēšanas pārbaudes}} cilnē {{ui:Aprēķins}} pārvērš tā spēkus slēdzienā katram tērauda elementam: cik lielu daļu no tā kapacitātes izmanto vissmagākā kombinācija.

:::warning
Tas ir **palīglīdzeklis, līdz inženieris to ir pārskatījis**. Tas izmanto tikai pirmās kārtas spēkus (bez otrās kārtas ietekmēm), nepārbauda vērpi, plānas (4. klases) daļas, metinātus šķērsgriezumus un savienojumus, un to, ko nevar pārbaudīt, atstāj neaizpildītu un par to informē. Tas neaizstāj inženiera pārbaudi, un tā rezultāti nav apstiprinājuma zīmogs.
:::

## Izvēlieties normu

{{ui:Projektēšanas norma}} tiek saglabāta kopā ar modeli; izvēlieties vienu no divām saimēm:

- **ASCE 7 + AISC 360** (ASV, LRFD): ASCE 7-16 §2.3.1 slodžu kombinācijas un ANSI/AISC 360-16 elementu pārbaudes.
- **EN 1990 + EN 1993-1-1** (Eirokods): EN 1990 kombinācijas (6.10. izteiksme jeb 6.10a un 6.10b) un EN 1993-1-1 elementu pārbaudes.

Pēc tam izvēlieties {{ui:Tērauda klase}} (A992, A36 un citas; vai S235 līdz S450, ar zemāko tecēšanas robežu virs 40 mm).

## Izveidojiet kombinācijas

Katram slodzes gadījumam sarakstā piešķiriet tā **veidu** (pastāvīgā, lietderīgā, jumta lietderīgā, sniega, vēja, seismiskā) un pēc tam nospiediet {{ui:Izveidot kombinācijas}}. DetailCraft uzraksta normas kombinācijas kā jūsu gadījumu kombinācijas: katru stiprības kombināciju, ko norma uzskaita jūsu veidiem, un ekspluatācijas kombinācijas pārvietojumam. Tās kombinācijas, ko esat ierakstījis pats, paliek; tās netiek pārbaudītas pret normu. Gadījums ar veidu {{ui:Cita}} netiek kombinēts.

Eirokodam koeficienti ir EN 1990 A1 pielikuma **ieteicamās vērtības** (γG 1.35, γQ 1.5, ψ vērtības lietderīgajām, sniega un vēja slodzēm) un EN 1993-1-1 (γM0 = γM1 = 1.0). Jūsu valsts nacionālais pielikums dažas no tām maina: atveriet {{ui:Nacionālā pielikuma vērtības}}, ievadiet savas un izveidojiet kombinācijas vēlreiz. Tās tiek saglabātas modelī.

## Pārbaudiet elementus

Nospiediet {{ui:Pārbaudīt elementus}}. Katram tērauda I profilam tabula rāda tā **noslodzi** (pieprasījums pret kapacitāti: 100 % ir robeža), to, vai tas iztur, kura pārbaude nosaka rezultātu un kura kombinācija. Elementi modelī ir krāsoti: zils — maz noslogots, zaļš — apmēram pusi, ohra — tuvu robežai, sarkans — pāri tai, pelēks — nav pārbaudīts. Noklikšķiniet uz elementa nosaukuma, lai to atlasītu.

Pārbaudes ar klauzulu, kuru katra no tām seko (tās uzskaitītas atskaitē):

- stiepe, spiede ar lieces un vērpes izliekšanos, lieces ap abām asīm ar sānu-vērpes izliekšanos, bīde un lieces ar aksiālo spēku;
- ekspluatācijas kombināciju pārvietojums salīdzinājumā ar {{ui:Pārvietojuma limits}}, ko esat iestatījis (sākumā L/360; tā ir projekta, nevis normas vērtība).

**Garumi.** Atbalstītais garums ir katra analizētā posma daļa (1 = neatbalstīts); atbalsti tiek ņemti vienmērīgi izvietoti no sākuma. K koeficienti reizina garumu izliekšanai. Mezgls, kurā nonāk cits elements, sadala elementu, un katrs posms tiek pārbaudīts pēc sava garuma, it kā tas tur būtu atbalstīts.

## Kas netiek pārbaudīts

Elements rāda **nav pārbaudīts** ar iemeslu, nevis skaitli, ja tā šķērsgriezums nav profils, ko pārbaudes pazīst (leņķi, kanāli; taisnstūra un apaļas caurules tiek pārbaudītas, ja to sienas ir kompaktas), ja tas ir pielāgots (metināts) profils vai ja kāda daļa lieces laikā ir plāna (AISC) vai 4. klases (Eirokods). Plāna daļa spiedē izslēdz spiedes pārbaudes, un elements tiek rādīts kā *iztur, daļēji pārbaudīts*. Metinājumi mezglos ir [savā pārbaudē](topic:weld-checks). Vēl nav izveidotas: otrās kārtas ietekmes, vērpe, bīdes izliekšanās kopā ar lieci, bultu savienojumi, nogurums, ugunsdrošība un seismiskā detalizācija. Betona elementiem un seismiskajām slodzēm ir [savas pārbaudes](topic:concrete-and-seismic). Skatiet [Vēl nav izveidots](topic:not-built-yet).

## Atskaite

{{ui:Atskaite (PDF)}} un {{ui:Atskaite (CSV)}} pēc pārbaudes papildinās ar projektēšanas tabulām: normu izdevumi, iestatījumi un nacionālā pielikuma vērtības, noslodze pa elementiem, katra izmantotā klauzula un katram elementam pieprasījums, kapacitāte un katras pārbaudes noslodze tās noteicošajā kombinācijā.
