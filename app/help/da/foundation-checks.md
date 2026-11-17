---
title: Kontrol af fundamenter
summary: Kontrollér punktfundamenter, kombinerede fundamenter og plader på den jord, du beskriver, sætning, en fleksibel plade på fjedre, pælegrupper og støttemure. Et hjælpemiddel for en ingeniør at kontrollere.
keywords: fundament, punktfundament, kombineret fundament, plade, sætning, undergrundsmodul, fjedre, randsøjle, hjørnesøjle, bæretryk, glidning, væltning, gennemstansning, ensrettet forskydning, bøjning, forankring, minimumsarmering, pælegruppe, støttemur, ACI 318-19
from: 6961ad52
---

:::warning
Dette er førsteordenskontroller, som en ingeniør skal gennemgå, ikke en godkendelse af et projekt. Det tilladelige jordtryk og friktionskoefficienten er dine: DetailCraft kender ikke din jord.
:::

Fanen {{ui:Fundering}} kontrollerer fundamenterne i modellen mod de søjlelaster, du giver dem.

## Beskriv jorden

Skriv {{ui:Tilladeligt jordtryk}} og {{ui:Friktionskoefficient for fundament}}. Begge starter på 0, hvilket betyder »ikke indtastet«: kontrollen viser så trykket som en bemærkning og siger ikke, at det består. For sætning skriver du jordens modul {{ui:Es}} (MPa), dens Poissons forholdstal og den sætning, du tillader (25 mm til at starte med). For en fleksibel plade skriver du et undergrundsmodul {{ui:ks}}. Fyldjorden over fundamentet, jordens rumvægt, sikkerhedsfaktorerne for glidning og væltning (1.5 til at starte med) og armeringens flydespænding er også der.

## Angiv lasterne

Hvert fundament har en liste over søjlelaster. Brug {{ui:Tilføj en søjlelast}} og udfyld servicerækken (til bæretryk, glidning og væltning) og den faktorerede række (til styrkekontrollerne): den lodrette last P nedad, de vandrette kræfter Vx og Vy på fundamentets top, momenterne Mx og My, søjlens placering på fundamentet og dens størrelse.

Eller kør fanen {{ui:Analyse}} og tryk {{ui:Tag søjlelaster fra Analysen}}: hver understøtning, der står på et fundament, bliver til en søjlelast ud fra de service- og faktorerede sæt, du vælger. Et positivt My belaster fundamentets +x-side mere; et positivt Mx belaster −y-siden mere.

## Hvad der kontrolleres

Ud fra servicelasterne, med fundamentets egen vægt og fyldjorden lagt til:

- **Bæretryk:** trykket under et stift fundament. Inden for midterste tredjedel er hele bunden i kontakt; uden for den løfter en del af bunden sig, og toppen bliver højere. En resultant uden for bunden fejler.
- **Glidning:** friktion gange den lodrette last mod den vandrette kraft.
- **Væltning:** resultantens afstand fra kanten.
- **Sætning:** den elastiske sætning af gennemsnitstrykket på et halvrum med det modul, du angav, i midten og i et hjørne (Timoshenko og Goodiers løsning for en fleksibel rektangel), mod grænsen. Det er en øvre grænse for et stift fundament og udelader et jordlag af begrænset dybde, aflastning ved udgravet jord og konsolidering. Uden modul viser den trykket som en bemærkning.

Ud fra de faktorerede søjlelaster alene (ACI 318-19):

- **Bøjning** ved søjlens flade med minimumsarmeringen (0.0018 for 420 MPa-stænger) og de stænger, du tegnede.
- **Ensrettet forskydning** i afstanden d fra fladen.
- **Gennemstansningsforskydning** i afstanden d/2 omkring hver søjle, med søjlens moment. For en søjle nær en kant afskæres det kritiske snit af fundamentets kant (tre sider ved en kant, to ved et hjørne, ACI 318-19 22.6.4.1 og den mindre αs i tabel 22.6.5.2), og momentet om snittets eget centrum omfatter forskydningen af lasten.
- **Forankring** af stængerne forbi søjlens flade, lige eller med deres kroge.
- **Højde** over de nederste stænger (150 mm).

Et kombineret fundament eller en plade behandles som stiv, og forskydning og moment kommer fra statik på snit tværs over hele bredden.

## En fleksibel plade på fjedre

Sæt flueben ved {{ui:Analysér dette fundament som en fleksibel plade på fjedre}}, når fundamentet bærer mange søjler, og det stive fundament er for grovt. Fundamentet bliver til en plade af firenodede elementer på et leje af fjedre (den {{ui:ks}}, du skrev, samlet i knuderne), og hver søjles last fordeles over knuderne i sit eget fodaftryk. En anden tabel giver det største jordtryk og den største sætning (og forskellen mellem det højeste og laveste), bøjningsmomentet i hver retning med den armering, det kræver, træk i toppen mod det almindelige betons styrke (et fundament har ingen øverste stænger), ensrettet forskydning i afstanden d fra søjlerne og gennemstansning ud fra fjedrenes eget tryk. Nettet forfines, til en søjle er tre elementer bred; en stor plade tager få sekunder. Pladens egen vægt og jorden over den ophæver hinanden og udelades.

Hver kontrol, der fejler, står i panelet {{ui:Problemer}} med sin paragraf.

## Pælegrupper og støttemure

{{ui:Tilføj en pælegruppe}} placerer et gitter af pæle under en stiv pælehætte: angiv lasten og momenterne og, hvad én pæl må bære i tryk og i træk (pælekonstruktionens tal, ikke denne fanes). Hver pæls reaktion er P/n plus dens andel af momenterne (den elastiske metode), og den største trykkraft og eventuel trækkraft kontrolleres.

{{ui:Tilføj en støttemur}} kontrollerer en konsolmur på vandret tilbagefyld, pr. meter: Rankines aktive tryk, væltning om tåen, glidning og bundtrykket. Passivt tryk foran tåen udelades. Din assistent kan køre de samme kontroller med `pile_group_check` og `retaining_wall_check`.

Pælegrupper, mure og fleksibel-plade-kontakten gemmes i modelfilen, og en fejlet kontrol står i {{ui:Problemer}}.
