---
title: DetailCraft-indstillinger
summary: Start nye elementer som amerikanske eller europæiske profiler, angiv, hvor langt Duplikér flytter en kopi, vælg om kopier medtager deres forbindelser, og vis eller skjul bolte i 3D-visningen.
keywords: indstillinger, præferencer, arkstørrelse, papirstørrelse, tegninger, valgmuligheder, stål, aisc, en, europæiske, amerikanske profiler, metriske profiler, standardprofil, stålkvalitet, s355, a992, forskydning ved duplikering, forskydning ved indsætning, kopiér forbindelser, bolte, ankerstænger, skjul bolte, nulstil
from: e46cea57
---

Åbn {{ui:Indstillinger}} med tandhjulet i appbaren eller med {{key:Mod+,}}. Den første fane, {{ui:DetailCraft}}, indeholder de indstillinger, der hører til denne app; {{ui:Generelt}} indeholder dem, alle CadCraft-apps deler (tema, værktøjslinje, paneler). DetailCraft-indstillingerne findes kun i appen: du ændrer dem her, de træder i kraft med det samme, og denne browser husker dem. De gemmes ikke i din modelfil.

## Nye elementer

Hvilke profiler og kvaliteter de placerende værktøjer starter med:

| Værktøj | Amerikanske profiler (AISC), A992 | Europæiske profiler (EN), S355 |
|---|---|---|
| {{ui:Bjælke}} | W16x26, A992 | IPE300, S355 |
| {{ui:Søjle}} | W12x50, A992 | HEB200, S355 |
| {{ui:Afstivning}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plade}} | A36 | S355 |

Amerikanske profiler er udgangspunktet. Det europæiske valg bruger en HEA160 til afstivninger, fordi DetailCraft's EN-katalog endnu ikke har hule profiler ([Profilkatalog](topic:profile-catalog)). Du kan stadig vælge en hvilken som helst profil og kvalitet til næste del i panelet {{ui:Egenskaber}}, mens et placerende værktøj er tændt. Elementer, der allerede er i modellen, beholder deres egen profil og kvalitet.

## Duplikér og indsæt

- **Forskydning (mm)**: x, y og z. {{ui:Duplikér}} ({{key:Mod+D}}) placerer kopien så langt fra originalen, og formularen {{ui:Sæt ind med forskydning (mm, fra originalen)}} starter med den. Den starter ved 6000, 0, 0: ét 6 m felt langs de nummererede gitterlinjer. Sæt den til din feltafstand, eller til en etagehøjde i z for at kopiere en etage op.
- **Kopiér endeplader og fodplader med deres elementer** (slået til fra start): en forbindelse følger med en kopi kun, når hvert element, den forbinder, kopieres. Fjern markeringen for kun at kopiere elementer og fundamenter uden deres forbindelser, fx for at prøve en anden forbindelse på kopien.

Se [Kopiér, sæt ind og duplikér](topic:copy-paste).

## 3D-visning

**Vis bolte og ankerstænger** (slået til fra start). Fjern markeringen for at skjule dem i visningen og se hullerne og pladerne i en travl samling. Skjulte bolte kan ikke klikkes; klik på pladen for at vælge forbindelsen. Stykliste, tegninger og alle eksporter medtager stadig hver bolt og stang.

## Hjørneindikator

Hvad der vises i hjørnet af 3D-visningen: **ViewCube** (start; øverst til højre — klik på en flade, kant eller hjørne for at se derfra, træk den for at kredse, træk dens kompasring for at dreje modellen), **Aksesymbol** (et lille X-, Y-, Z-mærke nederst til venstre, der drejer med visningen: X rød, Y grøn, Z blå) eller **Ingen**. Kun i {{ui:3D}}; {{ui:Plan}} og {{ui:Facade}} viser ingen af dem. Se [ViewCube](topic:view-cube).

## Nulstil

{{ui:Nulstil DetailCraft-indstillinger}} nederst i dialogboksen sætter disse tilbage til start (amerikanske profiler, forskydning 6000, 0, 0, forbindelser kopieres, bolte vises) sammen med dem under {{ui:Generelt}}.

## Tegninger

**Arkstørrelse**: de arkstørrelser, tegningerne og værkstedstegningerne laves på, i liggende format: A4, A3 (start), A2, A1, ANSI B, ANSI C eller ANSI D. Vinduerne {{ui:Tegninger}} og værkstedstegning har den samme liste. Se [Generelle opstillings- og samlingstegninger](topic:drawings).

## Armering

- **ASTM-jernnavne**: #3 til #11, eller de bløde metriske #10 til #36 for de samme jern.
- **Formkoder til bukkeliste**: DetailCraft's S, L, U; ACI 315-typer; eller BS 8666-formkoder. Se [Armeringsreference](topic:rebar-reference).

## Træk for at vælge

**Rektangel** (som før) eller **Lasso**: en fri linje, hvor {{key:Space}} skifter mellem inde, rørende og hegn, mens du trækker. Se [Vælg med et vindue](topic:select-and-change#select-with-a-window).
