---
title: Kontrollera stålstänger mot en dimensioneringsnorm
summary: Gör lastkombinationer enligt ASCE 7 eller EN 1990, kontrollera varje stål-I-profil mot AISC 360 eller EN 1993-1-1, och se hur stor del av dess kapacitet varje stång använder. Ett hjälpmedel tills en ingenjör har granskat det.
keywords: dimensionering, dimensioneringskontroll, stålkonstruktion, utnyttjande, utnyttjandegrad, kapacitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, lastkombinationer, LRFD, nationell bilaga, knäckning, sidodragen knäckning, skjuvning, böjning, interaktion, konstruktion, studenter, ingenjör
from: 66b6d545
---

När du har kört analysen gör blocket {{ui:Dimensioneringskontroller}} i fliken {{ui:Analys}} om dess krafter till ett utslag för varje stålstång: hur stor del av kapaciteten den värsta kombinationen använder.

:::warning
Det är ett **hjälpmedel tills en ingenjör har granskat det**. Det använder bara förstaordningskrafter (inga effekter av andra ordningen), kontrollerar ingen vridning, inga slanka delar (klass 4), inga svetsade profiler och inga anslutningar, och det utelämnar det det inte kan kontrollera och säger till om det. Det ersätter inte en ingenjörs kontroll, och dess resultat är inget godkännande.
:::

## Välj en norm

{{ui:Dimensioneringsnorm}} sparas med modellen; välj en av två familjer:

- **ASCE 7 + AISC 360** (USA, LRFD): lastkombinationerna i ASCE 7-16 §2.3.1 och stångkontrollerna i ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinationerna i EN 1990 (ekv. 6.10, eller 6.10a och 6.10b) och stångkontrollerna i EN 1993-1-1.

Välj sedan {{ui:Stålkvalitet}} (A992, A36 med flera; eller S235 till S450, där den lägre sträckgränsen gäller över 40 mm).

## Gör kombinationerna

Ge varje lastfall dess **typ** (egentyngd, nyttig last, takets nyttiga last, snö, vind, seismisk) i lastfallslistan och tryck sedan på {{ui:Skapa kombinationer}}. DetailCraft skriver normens kombinationer som kombinationer av dina lastfall: varje brottgränskombination som normen anger för de typer du har, och bruksgränskombinationer för nedböjning. De du skrev själv finns kvar; de kontrolleras inte mot normen. Ett lastfall av typen {{ui:Övrig}} kombineras inte.

För Eurokoden är faktorerna de **rekommenderade värdena** i EN 1990 bilaga A1 (γG 1.35, γQ 1.5, ψ-värdena för nyttiga laster, snö- och vindlaster) och EN 1993-1-1 (γM0 = γM1 = 1.0). Ditt lands nationella bilaga ändrar några av dem: öppna {{ui:Värden i nationell bilaga}}, skriv in dina och skapa kombinationerna igen. De sparas i modellen.

## Kontrollera stängerna

Tryck på {{ui:Kontrollera stänger}}. För varje stål-I-profil visar tabellen dess **utnyttjandegrad** (belastning över kapacitet: 100 % är gränsen), om den godkänns, vilken kontroll som styr och vilken kombination. Stängerna färgas i modellen: blått för lite använd, grönt för cirka hälften, ockra nära gränsen, rött över den och grått för ej kontrollerad. Klicka på en stångs namn för att markera den.

Kontrollerna, med den klausul var och en följer (de står i rapporten):

- drag, tryck med böj- och vridknäckning, böjning kring båda axlarna med sidodragen knäckning, skjuvning och böjning med normalkraft;
- nedböjning för bruksgränskombinationerna mot den {{ui:Nedböjningsgräns}} du angav (L/360 till en början; ett projektvärde, inte ett normvärde).

**Längder.** Den stagade längden är en andel av varje analyserad del (1 = ostagad); stagen antas vara jämnt fördelade från början. K-faktorer multiplicerar längden vid knäckning. En knutpunkt där en annan stång ansluter delar en stång, och varje bit kontrolleras på sin egen längd, som stagad där.

## Vad som inte kontrolleras

En stång visar **ej kontrollerad**, med skälet, i stället för ett tal när dess tvärsnitt inte är en I-profil som kontrollerna känner till (rör, vinkelstål, U-profiler), när det är en egen (svetsad) profil, eller när en del är slank (AISC) eller klass 4 (Eurokod) vid böjning. En slank del i tryck tar bort tryckkontrollerna, och stången visar *godkänd, delvis kontrollerad*. Inte heller byggt: effekter av andra ordningen, vridning, skjuvknäckning tillsammans med böjning, anslutningar, utmattning, brand och seismisk detaljering. Betongstänger och seismiska laster har [egna kontroller](topic:concrete-and-seismic). Se [Finns inte ännu](topic:not-built-yet).

## Rapporten

{{ui:Rapport (PDF)}} och {{ui:Rapport (CSV)}} får dimensioneringstabellerna när du har kontrollerat: normutgåvorna, inställningarna och värdena i den nationella bilagan, utnyttjandet per stång, varje använd klausul och, för varje stång, belastning, kapacitet och utnyttjande för varje kontroll i dess styrande kombination.
