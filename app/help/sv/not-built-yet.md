---
title: Det som finns inte ännu
summary: Vad denna tidiga DetailCraft-version inte kan göra, och vad du gör i stället idag.
keywords: begränsningar, begränsningar, saknas, färdplan, stöds inte, kommer, planerad, lösning, att göra
from: ea411885
---

DetailCraft är en tidig version. Den här sidan listar vad den inte kan göra ännu, så att du kan planera runt det. Inget här är ett löfte om ett datum.

## Modellering

| Finns inte ännu | I stället, idag |
|---|---|
| Att dra i ena änden av ett element (töja det) | Redigera {{ui:Start}} eller {{ui:End}} under {{ui:Ends (x, y, z mm)}} i panelen {{ui:Properties}} |
| Ett urvalsfilter (bara balkar, bara en profil) | Dra ett fönster och klicka sedan med {{key:Shift}} för att ta bort delar ur urvalet |
| Göra en matris av ett urval; rotera kring en lutande axel; spegla i ett lutande plan | Kopiera och klistra in den med en förskjutning, eller {{ui:Duplicate}} den; rotation och spegling fungerar i plan ([Markera med fönster, flytta, rotera, spegla, ändra många](topic:select-and-change)) |
| Punkter utanför rutnätet vid klick | Placera på rutnätet, skriv sedan in slutkoordinaterna |
| Fasader längs numrerade rutnätslinjer; sparade vyer; arbetsplan | Använd {{ui:3D}}, eller {{ui:Add by grid}} |
| Hål ritade som verkliga skär i 3D-vyn | Hål visas som mörka pluggar; de är verkliga i alla exporter |
| Rundade eller vinklade urtag, andra skär och beslag | Raka urtag endast på I-balkar |
| Hål du lägger till i vinkelstål och runda rör | Vinkelhål kommer endast från [stagknutplåtar](topic:brace-gussets) |
| Inmatning i amerikanska enheter | Skriv in millimeter (25.4 per tum) |
| Redigera eller ta bort en egen profil | Lägg till en rättad profil under ett nytt namn |

## Trappor

| Finns inte ännu | I stället, idag |
|---|---|
| Räcken, vilplan, tåplåtar, gallersteg, spiraltrappor och tvåarmade trappor | Endast raka löp; se [Trappor](topic:stairs) |
| Trappvångarnas ändskärningar mot golven | Trappvangar med rakt skuren ände; kapa dem i din verkstadsprogramvara |

## Förbindelser

DetailCraft bygger sex förbindelser: en stagknutplåt (se [Stagknutplåtar](topic:brace-gussets)); en bultad skarv mellan två delar av en I-balk (se [Skarvar](topic:splices)); en geringsskarv mellan två I-balkar som möts i en vinkel, endast kapad eller med bultade ändplattor (se [Geringsskarvar](topic:mitres)); en plan eller utskjuten bultad ändplatta från en vågrät I-balk med normal orientering till en I-balkspelares fläns eller liv; en skjuvplåt från en balk (rak, skev eller lutande) till en pelarfläns eller ett pelarliv; och en pelarfot med fotplåt och fyra ankarbultar.

| Finns inte ännu | I stället, idag |
|---|---|
| Skeva eller lutande ändplattor | Använd [skjuvplåtar](topic:shear-tabs), som tar skeva och lutande balkar |
| Klippvinklar; fyllplåtar för skarvar och skarvar mellan olika storlekar; hörnknutplåtar svetsade till balk och pelare; fasade knutplåtar | Detaljera dem i annan programvara, eller lägg till plåtar och hål för hand som lösa delar; se [Skarvar](topic:splices), [Stagknutplåtar](topic:brace-gussets) |
| Fasade eller avsmalnande bottenstyvningar; injekteringshål; plintfickan för en skjuvtapp | Rektangulära styvningar; se [Fotplåtar](topic:base-plates) |
| Voutor; svetsade geringar med stumsvets; styvningar i linje med den andra delens flänsar | En [geringsskarv](topic:mitres) med ändplattor och livstyvningar, eller en vanlig geringskapning; lägg till andra plåtar för hand som lösa delar |
| Dimensioneringskontroller av förbindelser (hållfasthet) | Kontrollera förbindelser med din konstruktörs beräkningar; DetailCraft varnar bara för kantavstånd och avstånd |
| Långhål | Endast runda hål |

## Analys

| Finns inte ännu | I stället, idag |
|---|---|
| Dimensioneringskontroller utöver stål-I-balkar: rör, vinkelstål, U-profiler, svetsade profiler, slanka delar eller klass 4-delar, vridning, förbindelser; betong: sidoförskjutning, slankhet, vridning, seismisk detaljering, plattor och väggar | Fliken {{ui:Analysis}} kontrollerar stål-I-balkar mot AISC 360 eller EN 1993-1-1 ([Kontrollera stålelement mot en dimensioneringskod](topic:design-checks)); övrigt lämnas markerat som "ej kontrollerat"; en konstruktör granskar allt |
| Knäckningsanalys, vibration | Andra ordningens analys är endast P-Delta (elastisk); ingen knäckningsanalys (modal, responsspektrum, tidshistorik och pushover finns i fliken Analys) |
| Dimensioneringskontroller som en konstruktör har granskat | De är ett hjälpmedel tills dess: kontrollera två eller tre element för hand eller i din konstruktörs egen programvara innan du litar på dem |
| Golv-, vind- och snölaster beräknade åt dig från ytor | Lägg laster på element för hand, i kN/m eller kN |
| Elementförskjutningar, excentriska förbindelser, dragstag, plåtar och plintar i ramen | Element analyseras på sina arbetslinjer; stag tar både drag och tryck |

## Armering

| Finns inte ännu | I stället, idag |
|---|---|
| Runda pelare, spiraler, lutande eller krökta balkar, plattor som inte är rektangulära, väggar som inte är raka | Rektangulära balkar, pelare, plattor och väggar ([Detaljera armerad betong](topic:reinforced-concrete)) |
| Armeringsjärn bockade till skarv, förskjutna skarvar, skarvar placerade där du väljer | Skarvar med lika steg, varje järn skarvat vid ett snitt (ACI Class B, EN α6 = 1.5) |
| Hörnjärn vid öppningar, armering mot genomstansning, seismisk detaljering (ACI 318-19 kapitel 18) | Kantjärn på varje sida om en öppning; kontrollera resten själv |
| Att läsa ett konstruktionsprograms egna filer | Exportera IFC från det: dess IfcReinforcingBar kommer in som armering ([Armering från en IFC-fil](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Formkoder utöver rak, en böj och ett U; ACI 315-typer för raka järn och järn med en krok | De tre formerna skrivs ut som BS 8666 00, 11, 21 eller ACI Type 2; se [Armeringsreferens](topic:rebar-reference) |
| Metriska järn andra än BS 4449 H8–H40 (t.ex. CSA 10M–35M) | ASTM soft-metric-namn #10–#36, eller BS-järn |

## Ritningar och exporter

| Finns inte ännu | I stället, idag |
|---|---|
| Stående blad, A0, och blad i din egen storlek; översiktsvyer på skeva rutnät | Liggande A4 till A1 och ANSI B till D ([Översikts- och sammanställningsritningar](topic:drawings)); skala PDF:en för att skriva ut i annan storlek |
| Svetssymboler på enskilda verkstadsritningar; symboler andra än filéer | Sammanställningsritningar har filésvetssymboler; verkstadsritningen anger svetsen som text |
| Att redigera en ritning i appen | Ändra modellen och gör ritningen på nytt; markera PDF:en i ett PDF-program, till exempel MarkupCraft |
| Ritningar som DWG med måttobjekt, eller modellen i full skala i modellrummet med bladen som layouter | Varje blad är en DWG eller DXF i full storlek av papperet, med mått som linjer och siffror ([Översikts- och sammanställningsritningar](topic:drawings#download)) |
| NC-hål i runda rör, urtag på vinkelstål och runda rör i NC-filer | Skrivs inte; se [NC-filens fält](topic:nc1-fields) |
| Fasningar, märkningar och innerkonturer i NC-filer | Inga idag |
| Bulthål, bultar, svetsar och plintar i USD-exporten | De finns i IFC-, NC- och stycklistans utdata; se [Exportera stålmodellen som USD](topic:usd) |
| Att föra in förbindelser, plintar, långa eller rektangulära hål och hål i runda rör från en IFC-fil | {{ui:Import IFC}} tar in balkar, pelare, element, plåtar, rutnät, nivåer, runda hål, urtag, bultar och armeringsjärn, och dess rapport listar vad som lämnades utanför |
| Egna rapportlayouter | De tre CSV-filerna |

## Paneler

| Finns inte ännu | I stället, idag |
|---|---|
| Att flytta rapporterna längst ned ({{ui:Problems}}, {{ui:Bill of materials}}, {{ui:Bending schedule}}) | Endast panelerna {{ui:Model}} och {{ui:Properties}} flyttas. Se [Ordna panelerna](common:arrange-panels) |

## Samarbete och sparning

| Finns inte ännu | I stället, idag |
|---|---|
| Molnsparning och synkning mellan datorer | Spara `.detailcraft.json`-filer och dela dem som vilka filer som helst. Molnsparning finns inte ännu |
| Andra personers markörer och etiketter ”redigerar” i en Live TeamWork-session; rutnät, nivåer och etapper slagna samman objekt för objekt | Ändringar slås fortfarande ihop (rutnät, nivåer och etapper går som helhet, den senare ändringen vinner); se [Detaljera en konstruktion tillsammans, live](topic:work-live) |
| Inbjudningslänkar till en Live TeamWork-session över internet | Anslut med en kort kod på samma nätverk |

## Plattformar

- DetailCraft är gjord för skärmar på dator, bärbar dator eller surfplatta. Den fungerar även på telefon: modellen behåller hela skärmen, och paneler och rapporter öppnas som blad från en rad längst ned, men det finns lite utrymme för panelerna.
- Offlineanvändning kräver att DetailCraft först sparas för offline, med {{ui:Save for offline}} i appfältet; när det står {{ui:Offline ready}} fungerar allt i den här versionen utan anslutning. Se [Arbeta offline](common:offline).

Om någon av dessa luckor blockerar ditt arbete, berätta för oss via [supportsidan](https://getcadcraft.com/support); det hjälper oss att avgöra vad vi bygger härnäst.
