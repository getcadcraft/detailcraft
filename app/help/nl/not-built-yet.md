---
title: Wat nog niet beschikbaar is
summary: Wat deze vroege DetailCraft-versie nog niet kan, en wat u nu in plaats daarvan kunt doen.
keywords: beperkingen, ontbrekend, routekaart, niet ondersteund, komt, gepland, omweg, todo
from: ea411885
---

DetailCraft is een vroege versie. Deze pagina somt op wat het nog niet doet, zodat u er rekening mee kunt houden. Niets hier is een belofte van een datum.

## Modelleren

| Nog niet | In plaats daarvan, nu |
|---|---|
| Een uiteinde van een onderdeel verslepen (uitrekken) | Bewerk {{ui:Begin}} of {{ui:Einde}} onder {{ui:Uiteinden (x, y, z mm)}} in het paneel {{ui:Eigenschappen}} |
| Een selectiefilter (alleen liggers, alleen één profiel) | Sleep een venster en klik daarna met {{key:Shift}}+klik om onderdelen uit de selectie te halen |
| Een selectie als array plaatsen; roteren om een hellende as; spiegelen in een hellend vlak | Kopieer en plak op een verschuiving, of {{ui:Dupliceren}} de selectie; roteren en spiegelen werken in het grondplan ([Selecteren met een venster, verplaatsen, roteren, spiegelen, veel tegelijk wijzigen](topic:select-and-change)) |
| Punten naast het raster aanklikken | Plaats op het raster, typ daarna de eindcoördinaten in |
| Gevels langs genummerde rasterlijnen; opgeslagen weergaven; werkvlakken | Gebruik {{ui:3D}}, of {{ui:Toevoegen via raster}} |
| Gaten als echte sneden in de 3D-weergave | Gaten zijn als donkere stoppen zichtbaar; in elke export zijn ze echt |
| Afgeronde of schuine copings, andere sneden en aansluitstukken | Vierkante copings, alleen op I-profielen |
| Gaten die u aan hoekstaal en ronde buizen toevoegt | Hoekstaalgaten komen alleen van [knoopplaten](topic:brace-gussets) |
| Invoer in inches | Typ millimeters (25.4 per inch) |
| Een eigen profiel bewerken of verwijderen | Voeg een gecorrigeerd profiel toe onder een nieuwe naam |

## Trappen

| Nog niet | In plaats daarvan, nu |
|---|---|
| Leuningen, bordessen, teenplaten, roostertredes, spiraal- en dog-leg-trappen | Alleen rechte lopen; zie [Trappen](topic:stairs) |
| Snij-einden van trapbomen tegen de vloeren | Vierkant gesneden trapbomen; snijd ze bij in uw werkplaatssoftware |

## Verbindingen

DetailCraft bouwt zes verbindingen: een knoopplaat voor een verband (zie [Knoopplaten voor verbanden](topic:brace-gussets)); een geboute splitsing tussen twee delen van één I-profiel (zie [Splitsingen](topic:splices)); een verstek tussen twee I-profielen die onder een hoek samenkomen, alleen gesneden of met geboute kopplaten (zie [Verstekverbindingen](topic:mitres)); een gelijkliggende of verlengde geboute kopplaat van een horizontale, rechtopstaande I-profielligger naar een flens of lijf van een I-profielkolom; een dwarskrachtplaat van een ligger (recht, scheef of hellend) naar een kolomflens of -lijf; en een voetplaat van een kolom met vier ankerbouten.

| Nog niet | In plaats daarvan, nu |
|---|---|
| Scheve of hellende kopplaten | Gebruik [dwarskrachtplaten](topic:shear-tabs), die scheve en hellende liggers aankunnen |
| Clipshoeken; vulplaten bij splitsingen en splitsingen tussen verschillende maten; hoekknoopplaten gelast aan ligger en kolom, afgeschuinde knoopplaten | Detailleer ze in andere software, of voeg platen en gaten met de hand toe als losse onderdelen; zie [Splitsingen](topic:splices), [Knoopplaten voor verbanden](topic:brace-gussets) |
| Afgeschuinde of taps toelopende voetverstijvers; injectiegaten; de funderingsuitsparing voor een schuifnok | Rechthoekige verstijvers; zie [Voetplaten](topic:base-plates) |
| Voutjes; gelaste verstekken met een stomp las; verstijvers in lijn met de flenzen van het andere onderdeel | Een [verstek](topic:mitres) met kopplaten en lijfverstijvers, of een gewoon verstek; voeg andere platen met de hand toe als losse onderdelen |
| Verbindingscontroles op sterkte | Controleer verbindingen met de berekeningen van uw constructeur; DetailCraft waarschuwt alleen voor randafstand en hartafstand |
| Langgaten | Alleen ronde gaten |

## Analyse

| Nog niet | In plaats daarvan, nu |
|---|---|
| Ontwerpcontroles voor meer dan stalen I-profielen: buizen, hoekstaal, U-profielen, gelaste profielen, slanke of klasse 4-onderdelen, torsie, verbindingen; beton: slankheid bij zijdelingse verplaatsing, torsie, seismische detaillering, vloeren en wanden | Het tabblad {{ui:Analyse}} controleert stalen I-profielen volgens AISC 360 of EN 1993-1-1 ([Stalen onderdelen controleren volgens een ontwerpnorm](topic:design-checks)); de rest blijft gemarkeerd als "niet gecontroleerd"; een constructeur controleert alles |
| Knikanalyse, trillingen | Tweede orde is alleen P-Delta (elastisch); geen knikanalyse (modaal, responsspectrum, tijdgeschiedenis en pushover staan in het tabblad Analyse) |
| Ontwerpcontroles die een constructeur heeft nagekeken | Tot die tijd zijn ze een hulpmiddel: controleer twee of drie onderdelen met de hand of in de eigen software van uw constructeur voordat u erop vertrouwt |
| Vloer-, wind- en sneeuwbelastingen die voor u uit oppervlakken worden gemaakt | Breng belastingen met de hand op onderdelen aan, in kN/m of kN |
| Verschuivingen van onderdelen, excentrische verbindingen, alleen-trekverbanden, platen en funderingen in het raamwerk | Onderdelen worden geanalyseerd op hun werklijnen; verbanden dragen trek en druk |

## Wapening

| Nog niet | In plaats daarvan, nu |
|---|---|
| Ronde kolommen, spiralen, hellende of gebogen liggers, vloeren die geen rechthoek zijn, wanden die niet recht zijn | Rechthoekige liggers, kolommen, vloeren en wanden ([Gewapend beton detailleren](topic:reinforced-concrete)) |
| Staven die in een overlapping worden gebogen, verspringende overlappingen, overlappingen op een plek naar keuze | Overlappingen op gelijke stappen, elke staaf overlapt op één doorsnede (ACI Class B, EN α6 = 1.5) |
| Hoekstaven bij openingen, ponsschuifwapening, seismische detaillering (ACI 318-19 hoofdstuk 18) | Omlijstingswapening aan elke kant van een opening; controleer de rest zelf |
| Bestanden van het eigen ontwerpprogramma van een constructeur lezen | Exporteer IFC daaruit: de IfcReinforcingBar komen binnen als staven ([Staven uit een IFC-bestand](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Vormcodes voorbij recht, één buiging en een U; ACI 315-typen voor rechte en eenhaakse staven | De drie vormen worden afgedrukt als BS 8666 00, 11, 21 of ACI Type 2; zie [Wapeningsreferentie](topic:rebar-reference) |
| Metrische staven anders dan BS 4449 H8–H40 (bijv. CSA 10M–35M) | ASTM-zachtemetrische namen #10–#36, of BS-staven |

## Tekeningen en exports

| Nog niet | In plaats daarvan, nu |
|---|---|
| Staande bladen, A0 en bladen van uw eigen formaat; algemene aanzichten op scheve roosters | Liggend A4 tot A1 en ANSI B tot D ([Algemene opstelling en montagetekeningen](topic:drawings)); schaal de PDF om op een ander formaat af te drukken |
| Lassymbolen op losse werkplaatstekeningen; andere symbolen dan hoeklassen | Montagetekeningen tonen hoeklassymbolen; de werkplaatstekening geeft de las als tekst |
| Een tekening in de app bewerken | Wijzig het model en maak de tekening opnieuw; markeer de PDF in een PDF-app zoals MarkupCraft |
| Tekeningen als DWG met maatvoeringsobjecten, of het model op ware grootte in de modelruimte met de bladen als indelingen | Elk blad is een DWG of DXF op ware grootte van het papier, met maatvoering als lijnen en cijfers ([Algemene opstelling en montagetekeningen](topic:drawings#download)) |
| NC-gaten in ronde buizen, copings op hoekstaal en ronde buizen in NC-bestanden | Niet geschreven; zie [NC-bestandsvelden](topic:nc1-fields) |
| Afschuiningen, markeringen en binnencontouren in NC-bestanden | Vandaag geen |
| Boutgaten, bouten, lassen en funderingen in de USD-export | Die staan in de IFC-, NC- en stuklijstuitvoer; zie [Het staalmodel exporteren als USD](topic:usd) |
| Verbindingen, funderingen, langgaten, rechthoekige gaten en gaten in ronde buizen uit een IFC-bestand inlezen | {{ui:IFC importeren}} haalt liggers, kolommen, onderdelen, platen, rasters, niveaus, ronde gaten, copings, bouten en wapeningsstaven binnen, en het rapport somt op wat is weggelaten |
| Aangepaste rapportopmaak | De drie CSV-bestanden |

## Paneel

| Nog niet | In plaats daarvan, nu |
|---|---|
| Verplaatsen van de rapporten onderaan ({{ui:Problemen}}, {{ui:Stuklijst}}, {{ui:Buigstaat}}) | Alleen de panelen {{ui:Model}} en {{ui:Eigenschappen}} zijn verplaatsbaar. Zie [Panelen indelen](common:arrange-panels) |

## Samenwerken en opslaan

| Nog niet | In plaats daarvan, nu |
|---|---|
| Cloudopslag en synchronisatie tussen computers | Sla `.detailcraft.json`-bestanden op en deel ze zoals elk ander bestand. Cloudopslag is nog niet beschikbaar |
| Cursors van anderen en labels "bewerkt nu" in een Live TeamWork-sessie; rasters, niveaus en fasen die item voor item worden samengevoegd | Bewerkingen worden nog steeds samengevoegd (rasters, niveaus en fasen gaan als geheel, de latere wijziging wint); zie [Een constructie samen bewerken, live](topic:work-live) |
| Uitnodigingslinks voor een Live TeamWork-sessie via internet | Doe mee met een korte code op hetzelfde netwerk |

## Platforms

- DetailCraft is gemaakt voor het scherm van een desktop, laptop of tablet. Het werkt ook op een telefoon: het model houdt het scherm en de panelen, en rapporten openen als bladen vanaf een balk onderaan, maar er is weinig ruimte voor de panelen.
- Offline gebruik vereist dat DetailCraft eerst is opgeslagen voor offline gebruik, met {{ui:Opslaan voor offline gebruik}} in de app-balk; zodra er {{ui:Klaar voor offline gebruik}} staat, werkt alles in deze versie zonder verbinding. Zie [Offline werken](common:offline).

Als een van deze hiaten uw werk blokkeert, laat het ons weten via de [supportpagina](https://getcadcraft.com/support); dat helpt ons bepalen wat we hierna bouwen.
