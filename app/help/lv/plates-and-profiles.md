---
title: Novietot plāksnes un pievienot pielāgotus profilus
summary: Novietojiet atsevišķas plāksnes pēc biezuma un platuma un definējiet savus I, kanālu, leņķu, cauruļu vai plakanas joslas šķērsgriezumus.
keywords: plāksne, plakana, pielāgots profils, lietotāja profils, parametrisks, šķērsgriezums, forma, PL
from: c24c3b51
---

## Novietot plāksni

Plāksne tiek novietota kā sija: tā iet starp diviem krustpunktiem, ar platumu šķērsām un biezumu augšup.

1. Izvēlieties {{ui:Plāksne}} grupā {{ui:Novietot}} vai nospiediet {{key:P}}.
2. Panelī {{ui:Rekvizīti}} iestatiet {{ui:Biezums (mm)}} un {{ui:Platums (mm)}}. Noklusētais ir 20 x 200 A36.
3. Iestatiet {{ui:Materiāls}} un {{ui:Pagrieziens (°)}}, ja vajadzīgs. Pagrieziens 90 noliek plāksni uz malas.
4. Noklikšķiniet uz diviem krustpunktiem vai izmantojiet formu {{ui:Pievienot pēc režģa}}.

Novietotās plāksnes profila nosaukums ir rakstīts kā `PL<biezums>x<platums>`, piemēram, PL20x200. Tās garums ir attālums starp diviem punktiem.

Lai mainītu novietotas plāksnes izmēru, atlasiet to un mainiet {{ui:Biezums (mm)}} vai {{ui:Platums (mm)}}.

Plāksnes, ko novietojat, ir atsevišķas detaļas (detaļas zīme p, mezgls P). Galu plāksnes un pamatnes plāksnes, ko veido savienojumi, arī ir plāksnes, bet tās maināt caur savienojumu; skatiet [Galu plāksnes](topic:end-plates).

## Pievienot pielāgotu profilu

Ja vajadzīgā sekcija nav katalogā, izveidojiet to pēc tās izmēriem. Pielāgotais profils pieder modelim un tiek saglabāts kopā ar to. Lai to izmantotu katrā jaunā modelī, turiet to sadaļā {{ui:Mani profili}}, kā aprakstīts zemāk, sadaļā "Saglabāt profilu jauniem modeļiem".

1. Kreisajā panelī {{ui:Modelis}} atveriet {{ui:Pielāgots profils}}.
2. Ierakstiet {{ui:Nosaukums}}, piemēram, `W8x18-custom` vai `RHS 120x80x5`. Tas nevar būt kataloga nosaukums vai izskatīties kā plāksnes nosaukums.
3. Izvēlieties {{ui:Forma}}: {{ui:I profils}}, {{ui:Kanāls}}, {{ui:Vienādu malu leņķis}}, {{ui:Taisnstūra caurule}}, {{ui:Apaļa caurule}} vai {{ui:Plakana josla}}.
4. Aizpildiet parādītos izmērus, visus milimetros:

| Forma | Izmēri |
|---|---|
| I profils | Dziļums d, flanša platums bf, stīpa tw, flanša biezums tf, noapaļojuma rādiuss r (var būt 0) |
| Kanāls | Dziļums d, flanša platums bf, stīpa tw, flanša biezums tf (taisni stūri) |
| Vienādu malu leņķis | Platums b (katra mala), biezums t |
| Taisnstūra caurule | Augstums h, platums b, biezums t (ārējais stūra rādiuss 2t) |
| Apaļa caurule | Diametrs D, biezums t |
| Plakana josla | Platums b, biezums t |

5. Atstājiet {{ui:Saglabāt Mani profili}} atzīmētu, lai profils būtu katrā jaunā modelī (skatiet zemāk), vai noņemiet atzīmi, lai to saglabātu tikai šajā modelī.
6. Izvēlieties {{ui:Pievienot profilu}}.

Statusa josla saka "Profils "…" pievienots; tas ir katrā profilu sarakstā sadaļā Pielāgots." Tas parādās sarakstā zem formas un katra {{ui:Profils}} saraksta beigās.

DetailCraft pārbauda, vai forma var eksistēt. Jūs redzēsiet ziņojumus, piemēram, "Stīpa un flanši neietilpst dziļumā un platumā.", "Noapaļojuma rādiuss flanšam ir par lielu." vai "Siena ir pārāk bieza." Izlabojiet skaitļus un vēlreiz izvēlieties {{ui:Pievienot profilu}}.

### Ko saņem pielāgotie profili

- Masa uz metru no laukuma × 7850 kg/m³ (kataloga izmēriem tiek izmantota publicētā masa).
- Pielāgotie I profili saņem caurumus, izgriezumus, galu plāksnes, NC failus un darbnīcas rasējumus kā kataloga I profili.
- Pielāgotās plakanās joslas uzvedas kā plāksnes.
- Pielāgotie kanāli un caurules saņem caurumus; leņķi un apaļās caurules vēl ne.

Kad pielāgots profils ir pievienots, to modelī nevar rediģēt vai noņemt (ja kļūdījāties, uzreiz izmantojiet {{key:Mod+Z}}). Labotam profilam dodiet jaunu nosaukumu.

## Saglabāt profilu jauniem modeļiem

{{ui:Mani profili}} zem formas ir jūsu pašu pielāgoto profilu saraksts. To glabā šajā pārlūkprogrammā, šajā datorā, nevis modeļa failā un nevis jūsu kontā.

- Profils, kas pievienots ar atzīmētu {{ui:Saglabāt Mani profili}}, nonāk sarakstā. Katrs jauns modelis, arī tas, ko DetailCraft atver, kad to palaižat, sākas ar visiem tiem profilu sarakstos.
- Profilam, kas jau ir modelī, bet nav sarakstā, blakus ir poga {{ui:Saglabāt}}.
- Modelī, kurā nav kāda no jūsu profiliem (piemēram, vecākā failā), izvēlieties {{ui:Izmantot šeit}}, lai to pievienotu.
- {{ui:Noņemt}} izņem profilu no saraksta. Modeļi, kas jau to izmanto, paturēs savu kopiju.
- Modelis, ko atverat, paturē profilus, kas saglabāti tā failā. Faila atvēršana nekad nemaina jūsu sarakstu.
- Nosaukumu, kas jau ir sarakstā ar citiem izmēriem, noraida: dodiet jaunajam citu nosaukumu.
- Pārlūkprogrammas vietnes datu notīrīšana vai citas pārlūkprogrammas vai datora izmantošana sāk ar tukšu sarakstu. Privātais logs to nevar saglabāt, un lietotne par to paziņo.
