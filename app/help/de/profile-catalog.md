---
title: Profilkatalog
summary: Jede eingebaute Stahlgröße, wie Profilnamen geschrieben werden, woher die Abmessungen stammen und wie Bleche und eigene Querschnitte benannt werden.
keywords: Profile, Querschnitte, Katalog, Größen, W-Profile, Breitflansch, S-Profile, U-Profil, Winkel, HSS, Rohr, Pipe, IPE, HEA, HEB, UPN, UK, britisch, UB, UC, PFC, EA, UEA, ungleichschenklig, SHS, RHS, CHS, kaltgeformt, warmgefertigt, Blue Book, Blech, AISC, EN 10365, Benennung
from: cd9b2bc3
---

DetailCraft hat 2.311 eingebaute Größen, jede aus einer veröffentlichten Tabelle übernommen und von den Tests der App geprüft: Die aus den Abmessungen berechnete Fläche muss der veröffentlichten Fläche entsprechen, und das veröffentlichte Gewicht muss dieser Fläche mal der Dichte von Stahl entsprechen. Bleche und eigene Profile werden aus ihren Abmessungen erstellt.

## Benennung

- **US-Profile** werden so geschrieben, wie das AISC-Handbuch sie druckt, mit kleinem x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Bei der Eingabe spielt Groß- und Kleinschreibung keine Rolle.
- **Rohre** werden wie in der AISC-Datenbank geschrieben: Pipe4STD, Pipe4XS, Pipe4XXS (Standard, extra stark, doppelt extra stark).
- **Europäische Profile** werden wie in EN 10365 geschrieben: IPE200, HEA240, HEB300, UPN200 (ohne Leerzeichen).
- **UK-Profile** werden zuerst mit der Familie geschrieben, dann mit der Größe aus dem Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Kaltgeformte Hohlprofile beginnen mit CF: CFSHS100x100x5.0. Die Eingabe, wie sie in Zeichnungen oft steht, funktioniert ebenfalls: 305x165x40 UB, L100x100x10, SHS100x5.
- **Bleche** sind `PL<thickness>x<width>` in Millimetern: PL20x200 ist 20 mm dick und 200 mm breit. Jede Größe aus dem Werkzeug {{ui:Blech}} funktioniert.
- **Eigene Profile** haben den Namen, den Sie ihnen geben, solange er kein Katalogname ist und nicht wie ein Blechname aussieht.

In den {{ui:Profil}}-Listen nennt die Überschrift jeder Gruppe ihre Quelle, zum Beispiel „W shapes — AISC Shapes Database v16.0“.

## Quellen

| Gruppe | Quelle | Hinweise |
|---|---|---|
| W-Profile, S-Profile, U-Profile (C), Winkel (L), HSS, Pipe | AISC Shapes Database v16.0 | Abmessungen exakt von Zoll in Millimeter umgerechnet; Masse je Meter aus dem veröffentlichten lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimeter und kg/m wie veröffentlicht |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), Tabelle v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimeter und kg/m wie veröffentlicht |
| Bleche | Parametrisch | Masse aus Fläche × 7850 kg/m³ |
| Eigene Profile | Ihre Abmessungen | Masse aus Fläche × 7850 kg/m³ |

So werden Querschnitte gezeichnet:

- **W-Profile:** Die AISC-Datenbank gibt keinen Ausrundungsradius an, daher zeichnet DetailCraft die Ausrundung als r = kdes − tf.
- **S-Profile und U-Profile (C, UPN):** parallele Flansche mit der veröffentlichten mittleren Dicke, rechtwinklige Ecken (der echte Flansch ist geneigt).
- **Winkel:** rechtwinklige Ecken.
- **Rechteck-HSS:** die Entwurfswanddicke (0.93 × Nennmaß, wie AISC 360-22 B4.2 es erlaubt) mit einem äußeren Eckradius des Doppelten davon.
- **Rund-HSS und Pipe:** Entwurfswanddicke (0.93 × Nennmaß).
- **IPE, HEA, HEB, UB, UC:** der veröffentlichte Wurzelradius.
- **PFC, EA, UEA:** rechtwinklige Ecken (die veröffentlichte Masse und Fläche enthalten die Radien weiterhin).
- **SHS, RHS, CHS:** die Nennwand. Warmgefertigte Ecken: außen 1.5 t, innen t. Kaltgeformt: außen 2 t, innen t bis 6 mm; 2.5 t und 1.5 t bis 10 mm; 3 t und 2 t darüber.

## Die Größen

Jede Größe, die die Tabellen in diesen Gruppen auflisten, kleinste zuerst:

| Gruppe | Größen |
|---|---|
| W-Profile (289) | W4x13 bis W44x408 |
| S-Profile (28) | S3x5.7 bis S24x121 |
| U-Profile (32) | C3x3.5 bis C15x50 |
| Winkel, gleiche Schenkel (61) | L2x2x1/8 bis L12x12x1-3/8 |
| HSS, rechteckig und quadratisch (525) | HSS1-1/2x1-1/2x1/8 bis HSS34x10x1 |
| HSS, rund (189) | HSS1.660x0.140 bis HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD bis Pipe26XS |
| IPE (18) | IPE80 bis IPE600 |
| HEA (24) | HEA100 bis HEA1000 |
| HEB (24) | HEB100 bis HEB1000 |
| UPN (18) | UPN50 bis UPN400 |
| Winkel, ungleiche Schenkel (76) | L2-1/2x1-1/2x3/16 bis L8x6x1 |
| UB (107) | UB127x76x13 bis UB1016x305x584 |
| UC (46) | UC152x152x23 bis UC356x406x1299 |
| PFC (16) | PFC100x50x10 bis PFC430x100x64 |
| EA (42) | EA20x20x3.0 bis EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 bis UEA200x150x18.0 |
| SHS, warmgefertigt (123) | SHS40x40x3.2 bis SHS400x400x17.5 |
| RHS, warmgefertigt (161) | RHS50x30x3.2 bis RHS500x300x17.5 |
| CHS, warmgefertigt (103) | CHS42.4x3.2 bis CHS508.0x17.5 |
| CFSHS, kaltgeformt (96) | CFSHS25x25x2.0 bis CFSHS400x400x12.5 |
| CFRHS, kaltgeformt (137) | CFRHS50x25x2.0 bis CFRHS500x300x12.5 |
| CFCHS, kaltgeformt (106) | CFCHS33.7x3.0 bis CFCHS508.0x16.0 |

Ein gespiegelter ungleichschenkliger Winkel ist dasselbe Teil, um die Enden gedreht, so wie eine Werkstatt die Gegenform fertigt: Seine Löcher, Ausklinkungen und Knotenbleche gehen mit.

Wählen Sie ein Platzierungswerkzeug und eine Größe, um Tiefe, Flanschbreite, Steg- und Flanschdicke, Ausrundungsradius, Fläche (cm²), Masse (kg/m) und Quelle im Kasten {{ui:Profil}} des Panels {{ui:Eigenschaften}} zu sehen.

## Was jede Form kann

| Form | Löcher | Ausklinkungen | Stirnplatten und Fußplatten | NC-Datei | Werkstattzeichnung |
|---|---|---|---|---|---|
| I-Profile (W, S, IPE, HEA, HEB, UB, UC, eigene I) | Steg, oberer Flansch, unterer Flansch | Ja | Stirnplatten: Träger und Stütze. Fußplatten: ja | Ja | Ja |
| U-Profile (C, UPN, PFC) | Steg, oberer Flansch, unterer Flansch | Nein | Nur Fußplatten | Ja | Ja |
| Rechteck-HSS, SHS, RHS | Seitenwand (Steg), oben, unten | Nein | Nur Fußplatten | Ja | Ja |
| Rund-HSS, Pipe, CHS | Noch nicht | Nein | Nur Fußplatten | Ja | Ja |
| Winkel (L, EA, UEA) | Noch nicht | Nein | Nur Fußplatten | Ja | Ja |
| Bleche und eigene Flachstähle | Blechfläche | Nein | Nein | Ja | Ja |

Bei einem Rechteckrohr geht ein Loch auf der Fläche „Steg“ durch beide Seitenwände. Was jede NC-Datei enthält, steht in [NC-Datei-Felder](topic:nc1-fields).

## Brauchen Sie eine andere Größe?

Fügen Sie sie als [eigenes Profil](topic:plates-and-profiles#add-a-custom-profile) hinzu. Die eingebaute Liste lässt sich in der App noch nicht bearbeiten.
