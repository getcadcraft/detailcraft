---
title: En rundvisning på skærmen
summary: Hver linje, hvert panel og hver fane i DetailCraft ved deres navn på skærmen, og hvad hver af dem er til.
keywords: skærm, layout, værktøjslinje, paneler, egenskaber, statuslinje, rapporter, brugerflade, ui, faner
from: 454f74fd
---

DetailCraft fylder browservinduet under appfeltet. Oppefra og ned: værktøjslinjen, derefter tre kolonner (panelet {{ui:Model}}, visningen, panelet {{ui:Egenskaber}}), derefter rapportfanerne, derefter statuslinjen.

## Appfeltet

Den slanke linje helt øverst hører til CadCraft-webstedet, ikke til modellen. Den viser appens navn og version, et link til {{ui:Om DetailCraft}}, {{ui:Hjælp}} (eller {{key:F1}}) til denne hjælp, {{ui:Gem til offline brug}}, skærmtilstandsknappen og kontakten {{ui:Papir}} / {{ui:Model}}.

- {{ui:Gem til offline brug}} beholder DetailCraft, dens 3D-visning og denne hjælp i din browser, så den åbnes uden forbindelse. Den siger {{ui:Klar offline}}, når den er gemt; klik på den da for {{ui:Gem igen (hent den nyeste version)}} eller {{ui:Fjern offlinekopien}}. Se [Arbejd offline](common:offline).
- {{ui:Papir}} giver en lys skærm og {{ui:Model}} en mørk. 3D-visningen følger med det samme; intet i din model ændrer sig.
- Skærmtilstandsknappen og {{key:Ctrl+Shift+F}} skifter mellem normal, fuld skærm og fuld skærm med skjulte linjer. {{key:Ctrl+Shift+F}} bruger Control-tasten på alle computere, også Mac. Med skjulte linjer peger du på skærmens øverste kant (eller trykker dér) for at få dem tilbage. {{key:Esc}} forlader fuld skærm.

## Værktøjslinjen

Værktøjslinjen har fem grupper. Hold markøren over en knap for at se, hvad den gør, og dens tast.

| Gruppe | Knapper | Det de gør |
|---|---|---|
| {{ui:Fil}} | {{ui:Ny}}, {{ui:Åbn}}, {{ui:Importér IFC}}, {{ui:Gem}}, {{ui:Eksempel}} | Start en model, åbn en gemt `.detailcraft.json` eller en IFC-fil, gem en, eller åbn eksempelrammen |
| {{ui:Placér}} | {{ui:Vælg}}, {{ui:Bjælke}}, {{ui:Søjle}}, {{ui:Afstivning}}, {{ui:Plade}}, {{ui:Punktfundament}}, {{ui:Trappe}} | Det værktøj, næste klik i visningen bruger |
| {{ui:Forbind}} | {{ui:Endeplader}}, {{ui:Fodplade}} og i {{ui:Mere}}: {{ui:Forskydningsplader}}, {{ui:Stød}}, {{ui:Samleplade}}, {{ui:Tilsvarende}} | Tilføj en forbindelse til den markerede bjælke, søjle eller afstivning, eller kopiér den markerede forbindelse til hver samling som den |
| {{ui:Rediger}} | {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Mere}} | Træd tilbage og frem gennem ændringer; kopiér markeringen og sæt den ind. {{ui:Mere}} åbner en menu med {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér}}, {{ui:Slet}}, {{ui:Vælg alle}} og {{ui:Fravælg alle}}, hver med sin tast |
| {{ui:Uddata}} | {{ui:IFC}}, {{ui:NC-filer}}, {{ui:Stykliste}}, {{ui:Værkstedstegning}}, {{ui:Tegninger}} og i {{ui:Mere}}: {{ui:Bukning}}, {{ui:Vægtrapport pr. fase}}, {{ui:KISS-fil til fremstillingssoftware}} | Download en eksport, eller åbn tegningsarkene |

Knapper og menupunkter, der ikke kan gøre noget lige nu, er grå, og hvis du holder markøren over én, står hvorfor. {{ui:Endeplader}} kræver en markeret bjælke, {{ui:Fodplade}} en markeret søjle, {{ui:Tilsvarende}} en markeret forbindelse, {{ui:Værkstedstegning}} en markeret I-profil eller pladedel, {{ui:Kopiér}} en markeret stålprofil eller et fundament og {{ui:Sæt ind}} noget kopieret. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).

## Panelet Model (til venstre)

- {{ui:Model}}: modellens {{ui:Navn}}. Det navngiver hver fil, du gemmer eller eksporterer.
- {{ui:Gitre}}: gitterlinjerne og deres afstande samt {{ui:Anvend gitre}}. Se [Sæt gitre og niveauer op](topic:grids-and-levels).
- {{ui:Niveauer}}: én række pr. niveau (navn og kote i mm), {{ui:Tilføj niveau}} og {{ui:Anvend niveauer}}.
- {{ui:Egen profil}}: lav dit eget parametriske tværsnit. Lukket, til du åbner det.
- {{ui:Positionsnumre}}: hvert positionsnummer i modellen med dets profil, længde og antal. Klik på et nummer for at markere den første del med det.

{{ui:Gitre}}, {{ui:Niveauer}} og {{ui:Egen profil}} kan foldes sammen: klik på deres overskrifter.

## Visningen (i midten)

Visningen viser modellen i 3D. Over den har visningslinjen tre knapper og en liste:

- {{ui:3D}}: drej frit rundt om modellen.
- {{ui:Plan}}: se lige ned på ét niveau. En liste over niveauer vises ved siden af knapperne. Alt, der er mere end 1,5 m over niveauet, skæres væk, så du tydeligt kan se og klikke på niveauet.
- {{ui:Facade}}: se lige på én gitterlinje med bogstav (Grid A, Grid B …). En liste over gitre med bogstaver vises. Kun stålet inden for 1 m fra den linje vises.
- Tilpasningsknappen yderst til højre på visningslinjen zoomer for at vise hele modellen.

Små prikker markerer hver gitterskæring på hvert niveau. Mens et placeringsværktøj er slået til, lyser den prik, der er nærmest markøren, op, og statuslinjen navngiver den, for eksempel "A/2 at Level 1". Farver adskiller stålprofiltyperne: søjler, bjælker, afstivninger og plader har hver sin farve, bolte og stænger en anden, fundamenter er gennemsigtige, og armering tegnes som rør. Huller vises som mørke propper; udskæringer er skåret.

Hvordan du drejer, panorerer og zoomer: [Bevæg dig rundt i 3D-visningen](topic:navigate-3d).

Når modellen er tom, viser visningen en kort liste "Start en model". Du kan også slippe en gemt modelfil hvor som helst på visningen for at åbne den.

## Panelet Egenskaber (til højre)

Hvad dette panel viser, afhænger af det, du gør, og dets overskrift siger hvad: "Model", "Placér en bjælke", "Bjælke b2", "Endepladeforbindelse", "Fodplade", "Punktfundament F1", "3 markeret" eller "Sæt ind".

- **Intet markeret:** en oversigt over modellen (stålprofiler, forbindelser, fundamenter, dele, positionsnumre, bolte, vægt af stål og armering, gitre, niveauer).
- **Et placeringsværktøj slået til:** tilvalgene for det næste stykke (profil, materiale, position, drejning og for søjler {{ui:Op til}}), en oversigt over den valgte profil og en formular {{ui:Tilføj efter gitter}} til at placere uden at klikke i visningen.
- **En stålprofil markeret:** dens navn, profil, materiale, position, drejning, koordinaterne for dens to ender, dens positionsnumre, tilskårne længde og vægt, dens huller og udskæringer og knapper til forbindelser, dens værkstedstegning og {{ui:Slet}}.
- **En forbindelse markeret:** hver plade-, bolt- og svejseindstilling, de bolte og den svejsning, den giver, dens advarsler og {{ui:Anvend på tilsvarende}}.
- **Et fundament markeret:** dets position og størrelse, bundmåtten, studsarmeringen og de jernmærker, det bruger.
- **Flere ting markeret:** hvor mange stålprofiler af hver type, forbindelser og fundamenter, deres stålvægt og {{ui:Kopiér}}, {{ui:Duplikér}} og {{ui:Slet}}.
- **Sæt ind:** hvad der er på udklipsholderen, og formularer til at sætte ind med en indtastet forskydning eller på en gitterskæring, du vælger fra lister.

Talfelter træder i kraft, når du trykker på {{key:Enter}} eller forlader feltet. Hver ændring er ét trin, du kan fortryde.

## Rapportfanerne (nederst)

- {{ui:Problemer}}: alt, DetailCraft ikke kunne bygge, eller vil have dig til at kontrollere, med en knap {{ui:Vælg}} på hver linje. Fanen viser antallet i parentes.
- {{ui:Stykliste}}: dele, samlinger og bolte og ankerbolte, med vægte og et link {{ui:Download CSV}}. Klik på et positionsnummer for at markere den del.
- {{ui:Bukkeliste}}: hvert jernmærke i hvert fundament, med et link {{ui:Download CSV}}.

Med en fane i fokus flytter {{key:Left}} og {{key:Right}} mellem faner.

## Statuslinjen

Linjen langs bunden har tre dele: gitterskæringen under markøren under placering, den seneste besked (hvad der lige skete, eller hvorfor noget blev afvist) og løbende summer af dele, bolte, stålvægt og armeringsvægt. Når en handling ser ud til ikke at gøre noget, så læs først beskeden her.

Browserfanens titel begynder med en prik (•), mens modellen har ændringer, du ikke har gemt.

## På en smal skærm

Under omkring 760 pixel i bredden stables kolonnerne: værktøjslinje, visning, statuslinje, {{ui:Egenskaber}}, rapportfaner og til sidst panelet {{ui:Model}}. Rul siden for at nå dem. DetailCraft er lagt ud til en skærm på en computer eller bærbar; en telefon duer til at kigge, ikke til at detaljere.
