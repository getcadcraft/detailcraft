---
title: DetailCraft-instellingen
summary: Start nieuwe leden als Amerikaanse of Europese profielen, stel in hoe ver Dupliceren een kopie verplaatst, kies of kopieën hun verbindingen meenemen, en toon of verberg bouten in de 3D-weergave.
keywords: instellingen, voorkeuren, bladformaat, papierformaat, tekeningen, opties, staal, aisc, en, europees, Amerikaanse profielen, Europese profielen, standaardprofiel, staalkwaliteit, s355, a992, offset bij dupliceren, offset bij plakken, verbindingen kopiëren, bouten, ankerstaven, bouten verbergen, opnieuw instellen
from: e46cea57
---

Open {{ui:Instellingen}} met het tandwiel in de appbalk of met {{key:Mod+,}}. Het eerste tabblad, {{ui:DetailCraft}}, bevat de instellingen die bij deze app horen; {{ui:Algemeen}} bevat die welke elke CadCraft-app deelt (thema, werkbalk, panelen). De DetailCraft-instellingen bestaan alleen in de app: u wijzigt ze hier, ze werken meteen, en deze browser onthoudt ze. Ze worden niet opgeslagen in uw modelbestand.

## Nieuwe leden

Welke profielen en staalkwaliteiten de plaatsingsgereedschappen beginnen met:

| Gereedschap | Amerikaanse profielen (AISC), A992 | Europese profielen (EN), S355 |
|---|---|---|
| {{ui:Ligger}} | W16x26, A992 | IPE300, S355 |
| {{ui:Kolom}} | W12x50, A992 | HEB200, S355 |
| {{ui:Verband}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plaat}} | A36 | S355 |

Amerikaanse profielen zijn de start. De Europese keuze gebruikt een HEA160 voor verbanden, omdat de EN-catalogus van DetailCraft nog geen holle profielen heeft ([Profielcatalogus](topic:profile-catalog)). U kunt voor het volgende stuk nog elk profiel en elke staalkwaliteit kiezen in het paneel {{ui:Eigenschappen}} terwijl een plaatsingsgereedschap aan staat. Leden die al in het model staan, behouden hun eigen profiel en staalkwaliteit.

## Dupliceren en plakken

- **Offset (mm)**: x, y en z. {{ui:Dupliceren}} ({{key:Mod+D}}) zet de kopie zoveel verder van het origineel, en het formulier {{ui:Plakken met een verschuiving (mm, vanaf het origineel)}} begint ermee. Het start op 6000, 0, 0: één vak van 6 m langs de genummerde rasters. Stel het in op uw vakafstand, of op een verdiepingshoogte in z om een vloer omhoog te kopiëren.
- **Kopplaten en voetplaten meekopiëren met hun staven** (aan bij de start): een verbinding komt alleen met een kopie mee wanneer elk lid dat ze verbindt, ook gekopieerd wordt. Zet het uit om leden en funderingen zonder hun verbindingen te kopiëren, bijvoorbeeld om op de kopie een andere verbinding te proberen.

Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

## 3D-weergave

**Bouten en ankerstaven tonen** (aan bij de start). Zet het uit om ze in de weergave te verbergen en de gaten en platen van een druk knooppunt te zien. Verborgen bouten kunnen niet worden aangeklikt; klik op de plaat om de verbinding te selecteren. De stuklijst, tekeningen en elke export bevatten nog steeds elke bout en ankerstaaf.

## Hoekindicator

Wat er in de hoek van de 3D-weergave staat: **Weergavekubus** (de start; rechtsboven — klik op een vlak, rand of hoek om vanaf daar te kijken, sleep om het model te draaien, sleep de kompasring om het model te draaien), **Assenpictogram** (een kleine X-, Y-, Z-markering linksonder die meedraait met de weergave: X rood, Y groen, Z blauw) of **Geen**. Alleen in {{ui:3D}}; {{ui:Plattegrond}} en {{ui:Gevel}} tonen geen van beide. Zie [De weergavekubus](topic:view-cube).

## Opnieuw instellen

{{ui:DetailCraft-instellingen opnieuw instellen}} onderaan het dialoogvenster zet deze terug naar de start (Amerikaanse profielen, offset 6000, 0, 0, verbindingen gekopieerd, bouten getoond), samen met die van {{ui:Algemeen}}.

## Tekeningen

**Bladformaat**: het formaat waarop de algemene tekeningen en werkplaatstekeningen liggend worden gemaakt: A4, A3 (de start), A2, A1, ANSI B, ANSI C of ANSI D. De vensters {{ui:Tekeningen}} en werkplaatstekening hebben dezelfde lijst. Zie [Algemene schikkingstekeningen en samenstellingstekeningen](topic:drawings).

## Wapening

- **ASTM-staafnamen**: #3 tot #11, of de zachte metrische #10 tot #36 voor dezelfde staven.
- **Vormcodes van de buigstaat**: DetailCraft's S, L, U; ACI 315-typen; of BS 8666-vormcodes. Zie [Wapeningsreferentie](topic:rebar-reference).

## Slepen om te selecteren

**Rechthoek** (zoals voorheen) of **Lasso**: een vrije lijn, waarbij {{key:Space}} tijdens het slepen wisselt tussen binnen, raken en hekje. Zie [Selecteren met een venster](topic:select-and-change#select-with-a-window).
