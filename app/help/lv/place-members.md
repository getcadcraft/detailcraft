---
title: Novietot kolonnas, sijas un saites
summary: Izvēlieties profilu, materiālu un pozīciju, tad noklikšķiniet režģa krustpunktos vai ierakstiet tos, lai novietotu tērauda elementus.
keywords: kolonna, sija, saite, elements, novietot, profils, materiāls, pagrieziens, pozīcija, nobīde, ievietot, pievienot pēc režģa
from: d6db0dc1
---

Elementi tiek novietoti režģa krustpunktos: kolonna vienā, sija vai saite starp diviem. Vispirms iestatiet [režģus un līmeņus](topic:grids-and-levels).

## Izvēlieties rīku un tā opcijas

1. Izvēlieties {{ui:Kolonna}} ({{key:C}}), {{ui:Sija}} ({{key:B}}) vai {{ui:Saite}} ({{key:R}}) grupā {{ui:Novietot}}.
2. Labajā pusē esošais panelis {{ui:Rekvizīti}} kļūst par "Novietot kolonnu" (vai siju, vai saiti) un rāda nākamā elementa opcijas:
   - {{ui:Profils}}: izvēlieties no saraksta. Izmēri ir sagrupēti pēc kataloga (W profili, kanāli, leņķi, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS un jūsu pielāgotie profili). Skatiet [Profilu katalogs](topic:profile-catalog).
   - {{ui:Materiāls}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 vai S355.
   - {{ui:Pozīcija}}: kur sekcija atrodas uz līnijas starp diviem punktiem: {{ui:Tērauda augša uz līnijas}}, {{ui:Centrēts uz līnijas}} vai {{ui:Apakša uz līnijas}}.
   - {{ui:Pagrieziens (°)}}: pagriež sekciju ap paša elementa asi.
   - {{ui:Līdz}} (tikai kolonnām): {{ui:Nākamajam augstākajam līmenim}} vai līmeņa nosaukums.
3. Zem opcijām lauks {{ui:Profils}} uzskaita izvēlētās sekcijas izmērus, laukumu, masu uz metru un katalogu, no kura tā nāk.

Noklusētās vērtības ir W12x50 A992 kolonnām (centrēts), W16x26 A992 sijām (tērauda augša uz līnijas) un HSS6x6x1/4 A500 Gr C saitēm (centrēts). Opcijas paliek iestatītas, līdz tās maināt.

## Novietošana ar klikšķi

### Kolonna

1. Izvēlieties {{ui:Plāns}} un izvēlieties līmeni, no kura kolonna sākas.
2. Izvēlieties {{ui:Kolonna}}.
3. Pavirziet rādītāju tuvu krustpunktam. Tuvākais punkts iedegas, un statusa josla to nosauc.
4. Noklikšķiniet. Kolonna iet no šā līmeņa līdz nākamajam augstākajam līmenim (vai līdz līmenim {{ui:Līdz}}). Statusa josla saka, piemēram, "Kolonna W12x50 pie A/1, Līmenis 1 līdz Līmenis 2."
5. Turpiniet klikšķināt, lai novietotu vairāk. Kad esat pabeidzis, nospiediet {{key:Esc}}.

Ja virs līmeņa, uz kura noklikšķinājāt, nav neviena cita līmeņa, statusa josla saka "Virs līmeņa "Līmenis 2" nav cita līmeņa, ko kolonnai sasniegt. Vispirms pievienojiet līmeni."

### Sija

1. Izvēlieties {{ui:Plāns}} un izvēlieties sijas līmeni.
2. Izvēlieties {{ui:Sija}}.
3. Noklikšķiniet pirmajā krustpunktā. Statusa josla saka "No A/1 pie Līmenis 2. Tagad noklikšķiniet otrajam galam (Esc atceļ)." Punktēta līnija seko rādītājam.
4. Noklikšķiniet otrajā krustpunktā. Sija parādās.
5. Noklikšķiniet vēlreiz, lai sāktu nākamo siju, vai nospiediet {{key:Esc}}.

{{key:Esc}} pēc pirmā klikšķa atceļ tikai šo punktu; otrais {{key:Esc}} noliek rīku nost.

### Saite

Saite iet starp diviem krustpunktiem dažādos līmeņos, tāpēc vieglāk to darīt {{ui:Fasāde}}.

1. Izvēlieties {{ui:Fasāde}} un izvēlieties burtu apzīmētu režģa līniju, uz kuras atrodas saite.
2. Izvēlieties {{ui:Saite}}.
3. Noklikšķiniet apakšējam galam, tad augšējam galam.

Fasādes pastāv tikai burtu apzīmētām režģa līnijām. Saitei rāmī gar numurētu līniju (no A līdz B) izmantojiet {{ui:3D}} vai zemāk esošo formu {{ui:Pievienot pēc režģa}}.

:::touch
Skārienekrānā pieskarieties tuvu krustpunktam: pieskāriens izvēlas tuvāko punktu nelielā attālumā un neko nedara, ja punkta nav tuvumā. Pirms pieskāriena izcēluma nav, tāpēc pēc katra pieskāriena pārbaudiet statusa joslas ziņojumu. Vilkšana ar vienu pirkstu pagriež vai pārvieto skatu, nevis novieto elementu.
:::

## Novietot pēc režģa, bez klikšķināšanas

Katram novietošanas rīkam ir forma {{ui:Pievienot pēc režģa}} paneļa {{ui:Rekvizīti}} apakšā. Tā darbojas tikai ar tastatūru un nav vajadzīgs 3D skats.

1. Izvēlieties rīku, piemēram, {{ui:Sija}}.
2. Formā {{ui:Pievienot pēc režģa}} izvēlieties {{ui:No režģa (burts)}}, {{ui:No režģa (cipars)}} un {{ui:No līmeņa}}.
3. Izvēlieties {{ui:Līdz režģim (burts)}}, {{ui:Līdz režģim (cipars)}} un {{ui:Līdz līmenim}}.
4. Izvēlieties {{ui:Pievienot}}.

Kolonnai vai pamatam formai ir tikai viens punkts: {{ui:Režģis (burts)}}, {{ui:Režģis (cipars)}} un {{ui:Līmenis}}.

## Mainīt elementu pēc novietošanas

1. Nospiediet {{key:Esc}} (vai izvēlieties {{ui:Atlasīt}}, {{key:V}}) un noklikšķiniet uz elementa.
2. Panelī {{ui:Rekvizīti}} mainiet {{ui:Nosaukums}}, {{ui:Profils}}, {{ui:Materiāls}}, {{ui:Pozīcija}} vai {{ui:Pagrieziens (°)}}.
3. Lai to pārvietotu, rediģējiet x, y un z vērtības {{ui:Sākums}} vai {{ui:Gals}} zem {{ui:Gali (x, y, z mm)}}. Zem katra gala tiek rādīts režģa nosaukums, vai tā koordinātas, ja tas nav uz režģa.

Katra izmaiņa ir viens atsaukšanas solis. Zem laukiem redzat elementa {{ui:Detaļas zīme}}, {{ui:Mezgls}}, {{ui:Griešanas garums}}, {{ui:Masa}} (bruto: caurumi un izgriezumi netiek atskaitīti) un to, no kura kataloga nāk profils.

Elementus vēl nevar vilkt vai veidot masīvā. Lai izveidotu citu tādu pašu, kopējiet un ielīmējiet to vai dublējiet ({{key:Mod+D}}): skatiet [Kopēt, ielīmēt un dublēt](topic:copy-paste).

## Dzēst elementu

Atlasiet to un nospiediet {{key:Delete}} vai {{key:Backspace}}, vai izvēlieties {{ui:Dzēst}}. Savienojumi uz tā tiek dzēsti līdzi. {{key:Mod+Z}} atgriež visu.

## Lietas, kas jāzina

- **Kurā virzienā kolonna vērsta.** Ar {{ui:Pagrieziens (°)}} 0 kolonnas flanši ir vērsti pa x, uz blakus esošajām numurētajām režģa līnijām. Sija no 1. režģa līdz 2. režģim ieliekas flanšā; sija no A līdz B ieliekas stīpā. Galu plāksnes tiek veidotas tikai flanšos, tāpēc, ja jūsu sijas iet no A līdz B, dodiet šīm kolonnām pagriezienu 90.
- **Sijas uz līmeņa karājas zem tā** ar noklusēto {{ui:Tērauda augša uz līnijas}}. Izvēlieties {{ui:Centrēts uz līnijas}}, ja jūsu līmeņi ir elementu centrālās līnijas.
- **Kolonnas iet no līmeņa līdz līmenim.** Kolonnai caur diviem stāviem iestatiet {{ui:Līdz}} uz augstāko līmeni.
- **Slīpas sijas** ir atļautas (izvēlieties galus dažādos līmeņos), bet galu plāksnes uz tām vēl netiek veidotas.

Nākamais: [Savienojiet sijas ar kolonnām, izmantojot galu plāksnes](topic:end-plates).
