---
title: En rundtur på skærmen
summary: Hver bjælke, hvert panel og hver fane i DetailCraft under sit navn på skærmen, og hvad hver enkelt er til.
keywords: skærm, layout, værktøjslinje, paneler, egenskaber, statuslinje, rapporter, grænseflade, ui, faner
from: 94f81073
---

DetailCraft fylder browservinduet under appbaren. Oppefra og ned: værktøjslinjen, derefter tre kolonner (panelet {{ui:Model}}, visningen og panelet {{ui:Properties}}), derefter rapportfanerne og til sidst statuslinjen.

## Appbaren

Den smalle bjælke øverst hører til CadCraft-webstedet, ikke til modellen. Den viser appens navn og version, et link til {{ui:About DetailCraft}}, {{ui:Help}} (eller {{key:F1}}) for denne hjælp, {{ui:Save for offline}}, skærmtilstandsknappen og skifteren {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} holder DetailCraft, dets 3D-visning og denne hjælp i din browser, så den åbner uden forbindelse. Den viser {{ui:Offline ready}}, når den er gemt; klik så på den for {{ui:Save again (get the newest version)}} eller {{ui:Remove the offline copy}}. Se [Arbejd offline](common:offline).
- {{ui:Paper}} giver en lys skærm og {{ui:Model}} en mørk. 3D-visningen følger med med det samme; intet i din model ændrer sig.
- Skærmtilstandsknappen og {{key:Ctrl+Shift+F}} skifter mellem normal, fuld skærm og fuld skærm med bjælkerne skjult. {{key:Ctrl+Shift+F}} bruger Control-tasten på alle computere, også Mac. Med bjælkerne skjult peger du på skærmens øverste kant (eller trykker på den) for at få dem frem igen. {{key:Esc}} forlader fuld skærm.

## Værktøjslinjen

Værktøjslinjen har fem grupper. Hold musen over en knap for at se, hvad den gør, og hvilken tast den har.

| Gruppe | Knapper | Hvad de gør |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Start en model, åbn en gemt `.detailcraft.json`-fil eller en IFC-fil, gem en model, eller åbn eksempelrammen |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Værktøjet, det næste klik i visningen bruger |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, og i {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Tilføj en forbindelse til den valgte bjælke, søjle eller afstivning, eller kopiér den valgte forbindelse til alle lignende samlinger |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Gå tilbage og frem gennem redigeringer; kopiér markeringen og indsæt den. {{ui:More}} åbner en menu med {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} og {{ui:Select none}}, hver med sin tast |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, og i {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Download en eksport, eller åbn tegningsarkene |

Knapper og menupunkter, der ikke kan virke lige nu, er gråtonede, og hvis du holder musen over en, siger den hvorfor. {{ui:End plates}} kræver en valgt bjælke, {{ui:Base plate}} en valgt søjle, {{ui:Similar}} en valgt forbindelse, {{ui:Shop drawing}} en model med dele, {{ui:Copy}} en valgt del eller et valgt fundament, og {{ui:Paste}} at noget er kopieret. Se [Kopiér, indsæt og duplikér](topic:copy-paste).

## Panelet Model (venstre)

- {{ui:Model}}: modellens {{ui:Name}}. Det navngiver hver fil, du gemmer eller eksporterer.
- {{ui:Grids}}: gitterlinjerne og deres afstande, samt {{ui:Apply grids}}. Se [Opsæt gitre og niveauer](topic:grids-and-levels).
- {{ui:Levels}}: én række pr. niveau (navn og kote i mm), {{ui:Add level}} og {{ui:Apply levels}}.
- {{ui:Custom profile}}: lav din egen parametriske profil. Den er lukket, indtil du åbner den.
- {{ui:Part marks}}: hvert positionsnummer i modellen med dets profil, længde og antal. Klik på et mærke for at vælge den første del med det.

{{ui:Grids}}, {{ui:Levels}} og {{ui:Custom profile}} kan klappes sammen: klik på deres overskrifter.

## Visningen (midten)

Visningen viser modellen i 3D. Over den har visningslinjen tre knapper og en liste:

- {{ui:3D}}: drej frit rundt om modellen.
- {{ui:Plan}}: se lige ned på ét niveau. En liste over niveauer vises ved siden af knapperne. Alt, der er mere end 1.5 m over niveauet, skæres væk, så du kan se og klikke på niveauet tydeligt.
- {{ui:Elevation}}: se lige på én bogstavsgitterlinje (gitterlinje A, gitterlinje B …). En liste over bogstavsgitterlinjer vises. Kun stålet inden for 1 m fra linjen vises.
- Tilpas-knappen i den højre ende af visningslinjen zoomer, så hele modellen vises.

Små prikker markerer hvert gitterkryds på hvert niveau. Mens et placeringsværktøj er slået til, lyser prikken nærmest markøren op, og statuslinjen navngiver den, for eksempel "A/2 på Niveau 1". Farver skelner elementtyperne: søjler, bjælker, afstivninger og plader har hver sin farve, bolte og ankerbolte en anden, fundamenter er gennemsigtige, og armering tegnes som rør. Huller vises som mørke propper; udskæringer er skåret ud.

Sådan drejer, panorerer og zoomer du: [Bevæg dig rundt i 3D-visningen](topic:navigate-3d).

Når modellen er tom, viser visningen en kort liste med "Start en model". Du kan også slippe en gemt modelfil et sted i visningen for at åbne den.

## Panelet Egenskaber (højre)

Hvad panelet viser, afhænger af, hvad du laver, og overskriften siger, hvilket: "Model", "Placér en bjælke", "Bjælke b2", "Endepladeforbindelse", "Fodplade", "Punktfundament F1", "3 valgt" eller "Indsæt".

- **Intet valgt:** et resumé af modellen (elementer, forbindelser, fundamenter, dele, mærker, bolte, stål- og armeringsvægt, gitre og niveauer).
- **Et placeringsværktøj er slået til:** indstillingerne for det næste stykke (profil, materiale, position, rotation og for søjler {{ui:Up to}}), et resumé af den valgte profil og en formular {{ui:Add by grid}} til at placere uden at klikke i visningen.
- **En del er valgt:** dens navn, profil, materiale, position, rotation, koordinaterne for dens to ender, dens mærker, skærelængde og vægt, dens huller og udskæringer samt knapper til forbindelser, dens værkstedstegning og {{ui:Delete}}.
- **En forbindelse er valgt:** alle plade-, bolt- og svejseindstillinger, de bolte og svejsninger den laver, dens advarsler og {{ui:Apply to similar}}.
- **Et fundament er valgt:** dets position og størrelse, bundarmeringen, startjernene og de armeringsmærker, det bruger.
- **Flere ting er valgt:** hvor mange elementer af hver type, forbindelser og fundamenter der er, deres stålvægt og {{ui:Copy}}, {{ui:Duplicate}} og {{ui:Delete}}.
- **Indsætning:** hvad der ligger på udklipsholderen, og formularer til at indsætte efter en indtastet forskydning eller på et gitterkryds, du vælger fra lister.

Talfelter træder i kraft, når du trykker {{key:Enter}} eller forlader feltet. Hver ændring er ét trin, som du kan fortryde.

## Rapportfanerne (nederst)

- {{ui:Problems}}: alt, DetailCraft ikke kunne bygge, eller som du skal kontrollere, med en {{ui:Select}}-knap på hver linje. Fanen viser antallet i parentes.
- {{ui:Bill of materials}}: dele, samlinger samt bolte og ankerbolte med vægte og et {{ui:Download CSV}}-link. Klik på et positionsnummer for at vælge den del.
- {{ui:Bending schedule}}: hvert armeringsmærke i hvert fundament med et {{ui:Download CSV}}-link.

Når en fane har fokus, flytter {{key:Left}} og {{key:Right}} mellem fanerne.

## Statuslinjen

Linjen langs bunden har tre dele: gitterkrydset under markøren, mens du placerer, den seneste besked (hvad der lige skete, eller hvorfor noget blev afvist), og løbende summer af dele, bolte, stålvægt og armeringsvægt. Når en handling ser ud til ikke at gøre noget, så læs beskeden her først.

Browserfanens titel starter med en prik (•), mens modellen har ændringer, du ikke har gemt.

## På en smal skærm

Under cirka 760 pixels bredde stables kolonnerne: værktøjslinje, visning, statuslinje, {{ui:Properties}}, rapportfaner og til sidst panelet {{ui:Model}}. Rul siden for at nå dem. DetailCraft er lavet til en desktop- eller laptopskærm; en telefon virker til at kigge, ikke til at detaljere.
