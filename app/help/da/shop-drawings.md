---
title: Lav værkstedstegninger
summary: Ét ark per positionsnummer, lavet på én gang: forhåndsvis hvilket som helst af dem, og download ét ark eller hele sættet som PDF på A4 til A1 eller ANSI B til D, med huller, udskæringer, mål og tegningshoved.
keywords: værkstedstegning, værkstedstegninger, alle dele, batch, hele sættet, enkeltdelstegning, fremstillingstegning, pdf, detaljetegning, stykketegning, print
from: d25fe035
---

DetailCraft laver ét ark per positionsnummer, for hver bjælke, søjle, afstivning og plade i modellen, på én gang: du behøver ikke vælge dem én for én. Identiske stykker deler et mærke og dermed et ark. Arkene laves på stedet ud fra modellen; de gemmes ikke og redigeres ikke.

## Lav hele sættet

1. Vælg {{ui:Værkstedstegning}} i gruppen {{ui:Uddata}}. Intet behøver være valgt. Med en del valgt åbner vinduet på den delens ark. I panelet {{ui:Egenskaber}} hedder den samme knap {{ui:Værkstedstegning}} for stålprofiler og {{ui:Pladetegning}} for forbindelser.
2. En forhåndsvisning åbnes, med titlen positionsnummeret, for eksempel »Værkstedstegning b1«. Den første liste ved siden af titlen holder hvert positionsnummer med sin profil, længde og mængde: vælg et for at se dets ark. Den anden liste ændrer arkstørrelsen; hele sættet laves igen i den (se [Oversigts- og samlingstegninger](topic:drawings#choose-the-sheet-size)).
3. Vælg {{ui:Download alle}} (knappen viser antallet af ark) for én PDF med en side per positionsnummer, `<name> Shop drawings.pdf`. Hvert ark siger »Ark 3 af 42« i sit tegningshoved. Eller vælg {{ui:Download PDF}} for det ark, du kigger på, `<name> <mark>.pdf`.
4. Luk forhåndsvisningen med × eller {{key:Esc}}.

Hvis {{ui:Værkstedstegning}} er gråtonet, har modellen ingen dele endnu.

## Hvad er på arket

For en I-profil:

- **Facade**, set mod livet: delen med sine udskæringer udskåret, livhuller som cirkler og flangehuller som skjulte (stiplede) linjer.
- **Plan over øverste flange**, set oppefra, når en flange har huller. Huller i den nederste flange vises stiplet.
- **Snit** gennem profilen.
- **Mål:** kædede hulpositioner langs delen plus den samlede længde, livhullernes højder, skruemålet og udskæringernes størrelser.
- **Hulliste:** hver gruppe af huller, for eksempel »8 x Ø22 i den øverste flange«.
- **Svejsning**, når delen har plader svejst til sig.
- **Tegningshoved:** positionsnummer, samlingsmærke, profil, materiale, længde, antal, vægt pr. stk. og samlet vægt, modelnavn og dato.

For en U-profil, vinkel eller hulprofil er arket det samme, set mod livet eller siden: et rørs vægge er skjulte (stiplede) linjer, og snittet giver vægtykkelsen.

For en plade: pladens flade med dens huller, og dens kant som snit.

## Målestoksforhold

Målestokken vælges fra en liste (1:1 op til 1:200), så delen passer på arket. En lang, lav del ville være for tynd at læse i én målestok, så når dybden ville blive under 30 mm på papir, tegnes dybden i en større målestok end længden. Visningens titel siger det, for eksempel »længde 1:20, dybde 1:5 (ikke i samme målestok; målene er gældende)«. Læs altid størrelser fra målene, ikke ved at måle på arket.

## Ting at vide

- Antallet er antallet af dele med det mærke i modellen. Mærker kan blive nummereret om efter en ændring; se [Kontrollér positionsnumre og stykliste](topic:marks-and-bom).
- Hvert ark er én del for sig, uden svejsesymboler; samlingstegninger (med svejsesymboler) og oversigtstegninger er i [Tegninger](topic:drawings). Arket kan ikke redigeres eller annoteres i DetailCraft. For at markere det op, åbn PDF'en i et PDF-markeringsprogram såsom MarkupCraft.
- Tegningshovedet siger »DetailCraft lab build — millimeters«.
- Teksten bruger standardskrifttypen Helvetica i PDF. Tegn uden for det vesteuropæiske tegnsæt udskrives som »?«, og statuslinjen tæller dem.

## Udskriv den

Åbn den downloadede PDF i din PDF-læser, og udskriv den i 100 % (ikke »tilpas til side«) på papir af den størrelse, du valgte, hvis de angivne målestoksforhold skal passe. På et mindre ark skaleres den, og du må stole på målene.
