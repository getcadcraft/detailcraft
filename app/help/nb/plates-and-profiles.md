---
title: Plasser plater og legg til egendefinerte profiler
summary: Plasser løse plater etter tykkelse og bredde, og definer egne I-, U-, vinkel-, rør- eller flatstålprofiler.
keywords: plate, flat, egendefinert profil, brukerprofil, parametrisk, snitt, form, tverrsnitt, pl
from: c24c3b51
---

## Plasser en plate

En plate plasseres som en bjelke: den går mellom to skjæringer, med bredden på tvers og tykkelsen opp.

1. Velg {{ui:Plate}} i gruppen {{ui:Plasser}}, eller trykk {{key:P}}.
2. I panelet {{ui:Egenskaper}} setter du {{ui:Tykkelse (mm)}} og {{ui:Bredde (mm)}}. Standard er 20 x 200 i A36.
3. Sett {{ui:Materiale}} og {{ui:Rotasjon (°)}} ved behov. En rotasjon på 90 setter platen på kant.
4. Klikk to skjæringer, eller bruk skjemaet {{ui:Legg til etter rutenett}}.

Platens profilnavn skrives `PL<thickness>x<width>`, for eksempel PL20x200. Lengden er avstanden mellom de to punktene.

For å endre størrelsen på en plassert plate, velg den og endre {{ui:Tykkelse (mm)}} eller {{ui:Bredde (mm)}}.

Plater du plasserer er egne deler (delenummer p, sammenstilling P). Endeplater og fotplater laget av forbindelser er også plater, men du endrer dem gjennom forbindelsen; se [Endeplater](topic:end-plates).

## Legg til en egendefinert profil

Når profilet du trenger ikke finnes i katalogen, lager du det fra målene. En egendefinert profil tilhører modellen og lagres med den. For å bruke den i hver ny modell, behold den i {{ui:Mine profiler}}, beskrevet under «Behold en profil for nye modeller» nedenfor.

1. I panelet {{ui:Modell}} til venstre åpner du {{ui:Egendefinert profil}}.
2. Skriv inn et {{ui:Navn}}, for eksempel `W8x18-custom` eller `RHS 120x80x5`. Det kan ikke være et katalognavn, og det kan ikke ligne på et platenavn.
3. Velg en {{ui:Form}}: {{ui:I-profil}}, {{ui:U-profil}}, {{ui:Likebenet vinkelstål}}, {{ui:Rektangulært rør}}, {{ui:Rundt rør}} eller {{ui:Flatstål}}.
4. Fyll inn målene som vises, alle i millimeter:

| Form | Mål |
|---|---|
| I-profil | Dybde d, Flensbredde bf, Steg tw, Flens tf, Filetradius r (kan være 0) |
| U-profil | Dybde d, Flensbredde bf, Steg tw, Flens tf (kantede hjørner) |
| Likebenet vinkelstål | Bredde b (hvert ben), Tykkelse t |
| Rektangulært rør | Høyde h, Bredde b, Tykkelse t (ytre hjørneradius 2t) |
| Rundt rør | Diameter D, Tykkelse t |
| Flatstål | Bredde b, Tykkelse t |

5. La {{ui:Behold i Mine profiler}} være avkrysset for at profilet skal være i hver ny modell (se under), eller fjern krysset for å beholde det bare i denne modellen.
6. Velg {{ui:Legg til profil}}.

Statuslinjen sier «Profil "…" er lagt til; den finnes i alle profillister under Egendefinert.» Den vises i listen under skjemaet og nederst i hver {{ui:Profil}}-liste.

DetailCraft kontrollerer at formen kan finnes. Du vil se meldinger som «Steget og flensene får ikke plass innenfor dybden og bredden.», «Filetradiusen er for stor for flensen.» eller «Veggen er for tykk.» Rett tallene og velg {{ui:Legg til profil}} igjen.

### Hva egendefinerte profiler får

- Masse per meter fra arealet × 7850 kg/m³ (katalogstørrelser bruker den publiserte vekten i stedet).
- Egendefinerte I-profiler får hull, utklinkninger, endeplater, NC-filer og verkstedtegninger, likt katalog-I-profiler.
- Egendefinerte flatstål oppfører seg som plater.
- Egendefinerte U-profiler og rør får hull; vinkelstål og runde rør gjør det ikke ennå.

Du kan ikke redigere eller fjerne en egendefinert profil fra en modell når den er lagt til (bruk {{key:Mod+Z}} med en gang hvis du gjorde en feil). Gi en korrigert versjon et nytt navn.

## Behold en profil for nye modeller

{{ui:Mine profiler}}, under skjemaet, er din egen liste over egendefinerte profiler. Den lagres i denne nettleseren, på denne datamaskinen, ikke i en modellfil og ikke på kontoen din.

- En profil lagt til med {{ui:Behold i Mine profiler}} avkrysset havner i listen. Hver ny modell, inkludert den DetailCraft åpner når du starter det, begynner med alle i profillistene sine.
- En profil som allerede er i en modell, men ikke i listen, har en knapp {{ui:Behold}} ved siden av seg.
- I en modell som ikke har en av profilene dine (en eldre fil, for eksempel), velg {{ui:Bruk her}} for å legge den til.
- {{ui:Fjern}} tar en profil ut av listen. Modeller som allerede bruker den, beholder sin egen kopi.
- En modell du åpner beholder profilene som er lagret i filen. Å åpne en fil endrer aldri listen din.
- Et navn som allerede finnes i listen med andre mål, avvises: gi den nye et annet navn.
- Å tømme nettleserens nettstedsdata, eller bruke en annen nettleser eller datamaskin, starter med en tom liste. Et privat vindu kan ikke beholde den; appen sier fra om det.
