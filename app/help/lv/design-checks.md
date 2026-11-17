---
title: Tērauda elementu pārbaude pēc projektēšanas normas
summary: Izveidojiet slodžu kombinācijas pēc ASCE 7 vai EN 1990, pārbaudiet katru tērauda I profilu pēc AISC 360 vai EN 1993-1-1 un redziet, cik lielu tā kapacitātes daļu izmanto katrs elements. Palīglīdzeklis, līdz inženieris to ir pārskatījis.
keywords: projektēšana, projektēšanas pārbaude, tērauda projektēšana, izmantojums, kapacitāte, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eirokods, slodžu kombinācijas, LRFD, Nacionālais pielikums, izliekšanās, sānu izliekšanās, bīde, liece, mijiedarbība, konstrukcija, studenti, inženieris
from: 66b6d545
---

Pēc aprēķina veikšanas bloks {{ui:Projektēšanas pārbaudes}} cilnē {{ui:Aprēķins}} pārvērš tā spēkus spriedumā par katru tērauda elementu: cik lielu tā kapacitātes daļu izmanto vissmagākā kombinācija.

:::warning
Tas ir **palīglīdzeklis, līdz inženieris to ir pārskatījis**. Tas izmanto tikai pirmās kārtas spēkus (bez otrās kārtas efektiem), nepārbauda vērpi, slaidās (4. klases) daļas, metinātas formas un savienojumus, un to, ko nevar pārbaudīt, izlaiž un par to paziņo. Tas neaizstāj inženiera pārbaudi, un tā rezultāti nav apliecinājums.
:::

## Izvēlieties normu

{{ui:Projektēšanas norma}} tiek saglabāta kopā ar modeli; izvēlieties vienu no divām saimēm:

- **ASCE 7 + AISC 360** (ASV, LRFD): ASCE 7-16 §2.3.1 slodžu kombinācijas un ANSI/AISC 360-16 elementu pārbaudes.
- **EN 1990 + EN 1993-1-1** (Eirokods): EN 1990 kombinācijas (Vien. 6.10 vai 6.10a un 6.10b) un EN 1993-1-1 elementu pārbaudes.

Tad izvēlieties {{ui:Tērauda klase}} (A992, A36 un citas; vai S235 līdz S450, ar zemāko tecēšanas robežu virs 40 mm).

## Izveidojiet kombinācijas

Katrai slodzes gadījumam piešķiriet tā **veidu** (pastāvīgā, mainīgā, jumta mainīgā, sniega, vēja, seismiskā) gadījumu sarakstā un nospiediet {{ui:Izveidot kombinācijas}}. DetailCraft uzraksta normas kombinācijas kā jūsu gadījumu kombinācijas: katru stiprības kombināciju, ko norma uzskaita jūsu veidiem, un lietojamības kombinācijas deformācijai. Tās, ko ierakstījāt paši, paliek; tās netiek pārbaudītas pēc normas. Gadījums ar veidu {{ui:Cita}} netiek kombinēts.

Eirokodam koeficienti ir EN 1990 A1 pielikuma **ieteicamās vērtības** (γG 1.35, γQ 1.5, uzliktās, sniega un vēja slodžu ψ vērtības) un EN 1993-1-1 (γM0 = γM1 = 1.0). Jūsu valsts Nacionālais pielikums dažus no tiem maina: atveriet {{ui:Nacionālā pielikuma vērtības}}, ierakstiet savas un izveidojiet kombinācijas vēlreiz. Tās tiek saglabātas modelī.

## Pārbaudiet elementus

Nospiediet {{ui:Pārbaudīt elementus}}. Katram tērauda I profilam tabulā redzams tā **izmantojums** (pieprasījums pret kapacitāti: 100 % ir robeža), vai tas atbilst, kura pārbaude nosaka rezultātu un kura kombinācija. Elementi modelī ir iekrāsoti: zils — maz izmantots, zaļš — apmēram puse, ohra — tuvu robežai, sarkans — pāri tai, pelēks — nav pārbaudīts. Noklikšķiniet uz elementa nosaukuma, lai to atlasītu.

Pārbaudes ar klauzulu, ko katra seko (tās uzskaitītas atskaitē):

- stiepe, spiede ar lieces un vērpes izliekšanos, lieces ap abām asīm ar sānu izliekšanos, bīde un lieces kopā ar aksiālo spēku;
- lietojamības kombināciju deformācija salīdzinājumā ar {{ui:Deformācijas ierobežojums}}, ko iestatījāt (sākumā L/360; projekta vērtība, nevis normas vērtība).

**Garumi.** Sastiprinātais garums ir daļa no katra analizētā gabala (1 = nesastiprināts); sastiprinājumi tiek ņemti vienmērīgi izvietoti no sākuma. K koeficienti reizina garumu izliekšanai. Mezgls, kur pieslēdzas cits elements, sadala elementu, un katrs gabals tiek pārbaudīts pēc sava garuma, it kā tur būtu sastiprinājums.

## Kas netiek pārbaudīts

Elements rāda **nav pārbaudīts** ar iemeslu, nevis skaitli, ja tā šķērsgriezums nav I profils, ko pārbaudes pazīst (caurules, leņķi, kanāli), ja tā ir pielāgota (metināta) forma vai ja kāda daļa lieces laikā ir slaida (AISC) vai 4. klases (Eirokods). Slaida daļa spiedē izslēdz spiedes pārbaudes, un elements tiek rādīts kā *atbilst, daļēji pārbaudīts*. Vēl nav ieviesti: otrās kārtas efekti, vērpe, bīdes izliekšanās kopā ar lieci, savienojumi, nogurums, ugunsizturība un seismiskā detalizācija. Betona elementiem un seismiskām slodzēm ir [savas pārbaudes](topic:concrete-and-seismic). Skatiet [Vēl nav izveidots](topic:not-built-yet).

## Atskaite

{{ui:Atskaite (PDF)}} un {{ui:Atskaite (CSV)}} pēc pārbaudes iegūst projektēšanas tabulas: normu izdevumus, iestatījumus un Nacionālā pielikuma vērtības, izmantojumu pa elementiem, katru izmantoto klauzulu un katram elementam — pieprasījumu, kapacitāti un izmantojumu katrai pārbaudei tās noteicošajā kombinācijā.
