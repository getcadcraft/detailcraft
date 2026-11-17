---
title: Placér plader og tilføj egne profiler
summary: Placér løse plader efter tykkelse og bredde, og definér dine egne I-, U-, vinkel-, rør- eller fladstålsprofiler.
keywords: plade, flad, egen profil, brugerprofil, parametrisk, sektion, form, tværsnit, pl
from: c24c3b51
---

## Placér en plade

En plade placeres som en bjælke: den løber mellem to skæringer, med bredden på tværs og tykkelsen op.

1. Vælg {{ui:Plade}} i gruppen {{ui:Placér}}, eller tryk {{key:P}}.
2. I panelet {{ui:Egenskaber}} sæt {{ui:Tykkelse (mm)}} og {{ui:Bredde (mm)}}. Standarden er 20 x 200 i A36.
3. Sæt {{ui:Materiale}} og {{ui:Rotation (°)}} om nødvendigt. En rotation på 90 stiller pladen på kant.
4. Klik på to skæringer, eller brug formularen {{ui:Tilføj efter gitter}}.

Pladens profilnavn skrives `PL<tykkelse>x<bredde>`, for eksempel PL20x200. Dens længde er afstanden mellem de to punkter.

For at ændre størrelsen på en placeret plade vælges den, og {{ui:Tykkelse (mm)}} eller {{ui:Bredde (mm)}} ændres.

Plader, du placerer, er dele for sig (positionsnummer p, samling P). Endeplader og fodplader, som forbindelser laver, er også plader, men du ændrer dem via forbindelsen; se [Endeplader](topic:end-plates).

## Tilføj en egen profil

Når det tværsnit, du har brug for, ikke er i kataloget, laves det ud fra dets mål. En egen profil hører til modellen og gemmes med den. For at bruge den i hver ny model, behold den i {{ui:Mine profiler}}, som beskrives under "Behold en profil til nye modeller" nedenfor.

1. Åbn {{ui:Egen profil}} i panelet {{ui:Model}} til venstre.
2. Skriv et {{ui:Navn}}, for eksempel `W8x18-custom` eller `RHS 120x80x5`. Det må ikke være et katalognavn eller ligne et pladenavn.
3. Vælg en {{ui:Form}}: {{ui:I-profil}}, {{ui:U-profil}}, {{ui:Ligebenet vinkelstål}}, {{ui:Rektangulært rør}}, {{ui:Rundt rør}} eller {{ui:Fladstål}}.
4. Udfyld de mål, der vises, alle i millimeter:

| Form | Mål |
|---|---|
| I-profil | Højde d, flangebredde bf, steg tw, flange tf, hjørneradius r (må være 0) |
| U-profil | Højde d, flangebredde bf, steg tw, flange tf (skarpe hjørner) |
| Ligebenet vinkelstål | Bredde b (hvert ben), tykkelse t |
| Rektangulært rør | Højde h, bredde b, tykkelse t (udvendig hjørneradius 2t) |
| Rundt rør | Diameter D, tykkelse t |
| Fladstål | Bredde b, tykkelse t |

5. Lad {{ui:Behold i Mine profiler}} stå afkrydset for at have den i hver ny model (se nedenfor), eller fjern krydset for kun at beholde den i denne model.
6. Vælg {{ui:Tilføj profil}}.

Statuslinjen siger "Profil "…" tilføjet; den står i alle profillister under Egen." Den vises på listen under formularen og til sidst i hver {{ui:Profil}}-liste.

DetailCraft kontrollerer, at formen kan eksistere. Du vil se beskeder som "Steget og flangerne passer ikke inden for højde og bredde.", "Hjørneradius er for stor til flangen." eller "Væggen er for tyk." Ret tallene, og vælg {{ui:Tilføj profil}} igen.

### Hvad egne profiler får

- Masse pr. meter ud fra areal × 7850 kg/m³ (katalogstørrelser bruger den publicerede vægt i stedet).
- Egne I-profiler får huller, udskæringer, endeplader, NC-filer og værkstedstegninger ligesom katalog-I-profiler.
- Egne fladstål opfører sig som plader.
- Egne U-profiler og rør får huller; vinkelstål og runde rør gør det endnu ikke.

Du kan ikke ændre eller fjerne en egen profil fra en model, når den er tilføjet (brug {{key:Mod+Z}} med det samme, hvis du har lavet en fejl). Giv en rettet en nyt navn.

## Behold en profil til nye modeller

{{ui:Mine profiler}}, under formularen, er din egen liste over egne profiler. Den gemmes i denne browser, på denne computer, ikke i en modelfil og ikke på din konto.

- En profil tilføjet med {{ui:Behold i Mine profiler}} afkrydset går ind i listen. Hver ny model, inklusive den DetailCraft åbner, når du starter det, begynder med alle dem i sine profillister.
- En profil, der allerede er i en model, men ikke på listen, har en knap {{ui:Behold}} ved siden af.
- I en model, der ikke har en af dine profiler (en ældre fil for eksempel), vælg {{ui:Brug her}} for at tilføje den.
- {{ui:Fjern}} tager en profil ud af listen. Modeller, der allerede bruger den, beholder deres egen kopi.
- En model, du åbner, beholder de profiler, der er gemt i dens fil. Åbning af en fil ændrer aldrig din liste.
- Et navn, der allerede er på listen med andre mål, afvises: giv den nye et andet navn.
- Rydning af browserens webstedsdata, eller brug af en anden browser eller computer, starter med en tom liste. Et privat vindue kan ikke gemme den; appen siger det.
