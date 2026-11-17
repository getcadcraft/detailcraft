---
title: Caurumu un izgriezumu pievienošana
summary: Ierakstiet caurumus sienās, flanšos un plāksnēs un izgrieziet flanšus sijas galā, mērot no detaļas griezuma gala.
keywords: caurums, caurumi, skrūves caurums, izgriezums, iegriezums, griezums, izgriešana, urbums, sienas caurums, flanšu caurums, caurumošana
from: 33d12398
---

Caurumi un izgriezumi tiek ierakstīti pēc pozīcijas. Tie pieder elementam un pārvietojas kopā ar to.

Caurumus, ko veido savienojumi (galu plāksnes, balstplāksnes), pievieno jums automātiski; tos jūs neievadāt. Tie ir sarakstā kā "… caurumi no savienojumiem (rediģējiet savienojumu)".

## No kurienes mēra pozīcijas

- **x** iet pa detaļu no tās **griezuma sākuma**: sākuma gals pēc tam, kad savienojums to ir nogriezis atpakaļ. Tātad x = 0 ir tērauda faktiskais gals, nevis režģa punkts.
- **y** mēra pāri virsmai no šķērsgriezuma centra:
   - uz **sienas**: uz augšu (pozitīvi) vai uz leju no vidējā augstuma;
   - uz **flanša** vai **plāksnes**: pāri platumam, no centra līnijas.
- Elementa sākums ir pirmais punkts, uz kuru noklikšķinājāt, to novietojot. Rindas {{ui:Gali (x, y, z mm)}} parāda, kurš gals ir kurš.

## Caurumu pievienošana

1. Atlasiet elementu.
2. Lodziņā {{ui:Caurumi}} panelī {{ui:Rekvizīti}} izvēlieties {{ui:Virsma}}: {{ui:Stienis}}, {{ui:Augšējais flanšs}} vai {{ui:Apakšējais flanšs}} (I-veida, kanāla vai taisnstūra caurules gadījumā) vai {{ui:Plāksnes virsma}} (plāksnei).
3. Ierakstiet {{ui:x pa garumu (mm)}}, {{ui:y šķērsām (mm)}} un {{ui:Diametrs (mm)}}. Forma sākas ar x 100, y 0, diametru 22.
4. Izvēlieties {{ui:Pievienot caurumu}}.

Statusa joslā parādās "Caurums pievienots. x ir no griezuma sākuma; y no šķērsgriezuma centra (siena: uz augšu, flanšs/plāksne: pāri platumam)." Caurums parādās sarakstā un skatā kā tumšs aizbāznis caur virsmu.

Lai noņemtu caurumu, izvēlieties × blakus tam sarakstā.

:::note
3D skatā caurumi ir attēloti kā tumši aizbāžņi, nevis izgriezti caur tēraudu. Tie ir īsti caurumi NC failos, darbnīcas rasējumos un IFC eksportā.
:::

Caurums, kura x ir aiz kāda detaļas gala, cilnē {{ui:Problems}} parādās kā "caurums atrodas aiz detaļas gala".

Leņķiem un apaļām caurulēm caurumi vēl nav iespējami: to lodziņā {{ui:Caurumi}} tas ir norādīts.

## Izgriezuma pievienošana

Izgriezumi ir paredzēti I-veida profiliem: tie izgriež augšējo vai apakšējo flanšu (un tādu sienas dziļumu) vienā galā, lai sija nepieskartos citam elementam.

1. Atlasiet I-veida elementu.
2. Lodziņā {{ui:Izgriezumi}} izvēlieties {{ui:Gals}} ({{ui:Sākums}} vai {{ui:Gals}}) un {{ui:Puse}} ({{ui:Augša}} vai {{ui:Apakša}}).
3. Ierakstiet {{ui:Garums (mm)}} (pa sijas no šī gala) un {{ui:Dziļums (mm)}} (uz leju no augšas vai uz augšu no apakšas). Forma sākas ar 100 x 40.
4. Izvēlieties {{ui:Pievienot izgriezumu}}.

Skats parāda izgriezumu, izgrieztu no tērauda. Sarakstā rakstīts, piemēram, "Augšā sākumā: 100 x 40". Noņemiet to ar tā ×.

Izgriezumi ir kvadrāti: iekšējā stūrī rādiusa vēl nav.

## Kā caurumi un izgriezumi ietekmē marķējumus

Divas detaļas saņem vienu un to pašu detaļas marķējumu tikai tad, ja to caurumi un izgriezumi sakrīt ar 1 mm precizitāti, ņemot vērā, ka detaļa var būt apgriezta. Pievienojot caurumu vienai sijai grupā, tā saņem jaunu marķējumu. Skatiet [Marķējumu noteikumi](topic:mark-rules).
