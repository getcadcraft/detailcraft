---
title: Kontrollera stålstänger mot en dimensioneringsnorm
summary: Skapa lastkombinationer från ASCE 7 eller EN 1990, kontrollera varje stålprofil med I-form mot AISC 360 eller EN 1993-1-1 och se hur stor del av sin kapacitet varje stång använder. Ett hjälpmedel tills en ingenjör har granskat det.
keywords: dimensionering, dimensioneringskontroll, stålkonstruktion, utnyttjande, kapacitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, lastkombinationer, LRFD, nationell bilaga, knäckning, vippning, skjuvning, böjning, interaktion, konstruktion, studenter, ingenjör
from: 15685c4e
---

När du har kört analysen gör blocket {{ui:Dimensioneringskontroller}} på fliken {{ui:Analys}} om dess krafter till ett omdöme för varje stålstång: hur stor del av sin kapacitet den värsta kombinationen använder.

:::warning
Det är ett **hjälpmedel tills en ingenjör har granskat det**. Det använder endast krafter av första ordningen (inga effekter av andra ordningen), kontrollerar ingen vridning, inga slanka delar (klass 4), inga svetsade profiler och inga förband, och det utelämnar det det inte kan kontrollera och säger det. Det ersätter inte en ingenjörs kontroll, och dess resultat är inte en godkännandestämpel.
:::

## Välj en norm

{{ui:Dimensioneringsnorm}} sparas med modellen; välj en av två familjer:

- **ASCE 7 + AISC 360** (USA, LRFD): lastkombinationerna i ASCE 7-16 §2.3.1 och stångkontrollerna i ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinationerna i EN 1990 (ekv. 6.10, eller 6.10a och 6.10b) och stångkontrollerna i EN 1993-1-1.

Välj sedan {{ui:Stålkvalitet}} (A992, A36 med flera; eller S235 till S450, med lägre sträckgräns över 40 mm).

## Skapa kombinationerna

Ge varje lastfall dess **typ** (egenlast, nyttig last, takets nyttiga last, snö, vind, seismisk) i lastfallslistan och tryck sedan på {{ui:Skapa kombinationer}}. DetailCraft skriver normens kombinationer som kombinationer av dina lastfall: alla hållfasthetskombinationer som normen listar för de typer du har, och bruksgränstillståndskombinationer för nedböjning. De du har skrivit själv finns kvar; de kontrolleras inte mot normen. Ett lastfall av typen {{ui:Övrig}} kombineras inte.

För Eurokoden är faktorerna de **rekommenderade värdena** i EN 1990 bilaga A1 (γG 1.35, γQ 1.5, ψ-värdena för nyttig last, snö och vind) och i EN 1993-1-1 (γM0 = γM1 = 1.0). Ditt lands nationella bilaga ändrar några av dem: öppna {{ui:Värden i nationell bilaga}}, skriv in dina och skapa kombinationerna på nytt. De sparas i modellen.

## Kontrollera stängerna

Tryck på {{ui:Kontrollera stänger}}. För varje stålprofil med I-form visar tabellen dess **utnyttjande** (belastning delat med kapacitet: 100 % är gränsen), om den klarar kontrollen, vilken kontroll som är styrande och vilken kombination. Stängerna färgas i modellen: blå lite utnyttjad, grön ungefär hälften, ockra nära gränsen, röd över gränsen, grå ej kontrollerad. Klicka på en stångs namn för att markera den.

Kontrollerna, med den punkt de följer (de anges i rapporten):

- dragning, tryck med böjknäckning och vridknäckning, böjning kring båda axlarna med vippning, skjuvning och böjning med normalkraft;
- nedböjning för bruksgränstillstånden mot den {{ui:Nedböjningsgräns}} du angett (L/360 som start; ett projektvärde, inte ett normvärde).

**Längder.** Den förankrade längden är en andel av varje analyserad del (1 = oförankrad); förankringarna antas vara jämnt fördelade från början. K-faktorer multiplicerar längden för knäckning. En knut där en annan stång ansluter delar upp en stång, och varje del kontrolleras för sig efter sin egen längd, som förankrad där.

## Vad som inte kontrolleras

En stång visar **ej kontrollerad**, med skälet, i stället för ett tal när dess tvärsnitt inte är en form som kontrollerna känner till (vinkelstål, U-profiler; rektangulära och runda rör kontrolleras när deras väggar är kompakta), när det är en specialprofil (svetsad), eller när en del är slank (AISC) eller klass 4 (Eurokod) vid böjning. En slank del i tryck tar bort tryckkontrollerna och stången visar *godkänd, delvis kontrollerad*. Svetsarna i knutarna har [en egen kontroll](topic:weld-checks). Inte heller byggt: effekter av andra ordningen, vridning, skjuvknäckning tillsammans med böjning, bultförband, utmattning, brand och seismisk detaljering. Betongstänger och seismiska laster har [egna kontroller](topic:concrete-and-seismic). Se [Finns inte ännu](topic:not-built-yet).

## Rapporten

{{ui:Rapport (PDF)}} och {{ui:Rapport (CSV)}} får dimensioneringstabellerna när du har kontrollerat: normutgåvorna, inställningarna och värdena för den nationella bilagan, utnyttjandet per stång, varje använd punkt och för varje stång belastning, kapacitet och utnyttjande för varje kontroll i dess styrande kombination.
