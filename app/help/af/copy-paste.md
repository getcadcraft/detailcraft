---
title: Kopieer, plak en dupliseer
summary: Kies verskeie onderdele, kopieer hulle met hul gate, uitsnydings en verbindings, en plak hulle op 'n roosterkruising, by 'n verskuiwing, op dieselfde plek, of in 'n ander oortjie. Knip, dupliseer, skrap en kies alles.
keywords: kopieer, plak, knip, dupliseer, klembord, plak op dieselfde plek, kies alles, kies niks, meervoudige keuse, shift-klik, verskeie, herhaal 'n vak, kopieer 'n raam, verskuiwing, skrap verskeie, wysigkieslys, meer-kieslys
from: f25f1829
---

Die {{ui:Wysig}}-groep op die nutsbalk het {{ui:Ontdoen}}, {{ui:Herdoen}}, {{ui:Kopieer}} en {{ui:Plak}}. Die {{ui:Meer}}-kieslys bevat die res: {{ui:Knip}}, {{ui:Kopieer}}, {{ui:Plak}}, {{ui:Plak op dieselfde plek}}, {{ui:Dupliseer}}, {{ui:Skrap}}, {{ui:Kies alles}} en {{ui:Kies niks}}, elk met sy sleutel. 'n Knoppie of kieslysitem wat nou nie kan werk nie, is grys; hou die wyser daarop om te lees waarom (byvoorbeeld "nog niks gekopieer nie").

Elke plak, knip, dupliseer en skrap is een stap: een {{key:Mod+Z}} neem alles terug.

## Kies verskeie dele

- Klik op 'n onderdeel om dit te kies. Hou {{key:Shift}} (of {{key:Ctrl}}, of {{key:Mod}}) vas en klik op meer onderdele om hulle by te voeg; klik op 'n gekose een op dieselfde manier om dit uit te haal.
- {{key:Mod+A}} of {{ui:Kies alles}} kies elke lid, verbinding en fondasie.
- {{key:Esc}} of {{ui:Kies niks}} maak die keuse skoon.

As verskeie dinge gekies is, het die {{ui:Eienskappe}}-paneel die opskrif "4 gekies" (of hoeveel dit ook al is) en lys die lede volgens tipe, die verbindings, die fondasies en die bruto staalgewig, met knoppies {{ui:Kopieer}}, {{ui:Dupliseer}} en {{ui:Skrap}}.

## Kopieer

1. Kies die lede en fondasies wat jy wil hê.
2. Kies {{ui:Kopieer}} of druk {{key:Mod+C}}.

Wat saam kom:

- Elke lid heel: profiel, materiaal, eindes, posisie, rotasie, naam, gate en uitsnydings. 'n Pasgemaakte profiel wat dit gebruik, word ook gekopieer.
- Elke fondasie heel: grootte, beton, onderste matjie en aanloopstawe.
- Eindplate en basisplate, maar net wanneer elke lid wat 'n verbinding verbind, gekopieer word: 'n balk se eindplaat het die balk en sy kolom nodig. Die statusbalk sê hoeveel verbindings weggelaat is. Om verbindings doelbewus weg te laat, ontmerk **Kopieer eindplate en basisplate saam met hul lede** in [DetailCraft-instellings](topic:settings).

'n Verbinding op sy eie kan nie gekopieer word nie; kies eerder sy lede. Om ander verbindings dieselfde verbinding te gee, gebruik {{ui:Soortgelyk}} (sien [Eindplate](topic:end-plates#copy-it-to-every-similar-joint)).

Die kopie bly in hierdie blaaier totdat jy iets anders kopieer. 'n Ander DetailCraft-oortjie of -venster in dieselfde blaaier kan dit plak, so jy kan 'n raam uit een model kopieer en in 'n ander plak.

## Plak op 'n roosterkruising

1. Kies {{ui:Plak}} of druk {{key:Mod+V}}.
2. Beweeg die wyser oor die aansig. 'n Stippellyn-omtrek van die kopie volg die roosterkruising wat die naaste aan die wyser is.
3. Klik op 'n kruising. Die kopie se basispunt (sy laagste hoek: die kleinste x, y en z van alles wat gekopieer is) beland daar.

Die geplakte onderdele word daarna gekies, sodat jy weer elders kan plak, of hulle kan verander. {{key:Esc}} kanselleer 'n plak; die kopie bly op die klembord. {{ui:Plan}} en {{ui:Aansig}} maak dit makliker om die regte kruising te tref.

:::tip
Om 'n vak te herhaal, kies die vak se lede (of alles met {{key:Mod+A}}), kopieer, plak, en klik op die kruising een vak verder vanaf waar die kopie se laagste hoek was.
:::

## Plak met die sleutelbord

Terwyl jy plak, wys die {{ui:Eienskappe}}-paneel wat op die klembord is, en twee vorms:

- {{ui:Plak by verskuiwing (mm, vanaf die oorspronklike)}}: tik x, y en z en kies {{ui:Plak by hierdie verskuiwing}}. Dit begin met die verskuiwing uit [DetailCraft-instellings](topic:settings).
- {{ui:Plak op 'n roosterkruising}}: kies 'n letterrooster, 'n nommerrooster en 'n vlak, en kies {{ui:Plak hier}}. Die basispunt gaan daarheen.

## Plak op dieselfde plek

{{ui:Plak op dieselfde plek}} ({{key:Mod+Shift+V}}) sit die kopie presies op die koördinate waar dit gekopieer is. Gebruik dit na {{ui:Knip}}, of om onderdele uit 'n ander model op dieselfde plek te bring. As die oorspronklikes nog daar is, lê die kopie bo-op hulle en waarsku die statusbalk jou: skuif die kopieë by hul {{ui:Begin}} en {{ui:Einde}} in {{ui:Eienskappe}}, of ontdoen.

## Dupliseer

{{ui:Dupliseer}} ({{key:Mod+D}}) kopieer die keuse en plak dit dadelik, verskuif volgens die verskuiwing in [DetailCraft-instellings](topic:settings) (6000 mm langs x om mee te begin). Dit verander nie wat op die klembord is nie. Die kopieë word daarna gekies, so as jy {{key:Mod+D}} weer druk, maak dit die volgende uit hulle.

## Knip en skrap

- {{ui:Knip}} ({{key:Mod+X}}) kopieer die keuse en skrap dit dan. Plak dit waar dit hoort.
- {{ui:Skrap}} ({{key:Delete}} of {{key:Backspace}}) skrap die keuse. As 'n lid geskrap word, word sy verbindings ook geskrap.

## Merke na 'n plak

Onderdeel- en samestellingsmerke word nooit gestoor nie; DetailCraft nommer hulle na elke verandering weer uit die model ([Hoe merke gegee word](topic:mark-rules)). So:

- 'n Kopie wat dieselfde stuk as sy oorspronklike is (dieselfde profiel, graad, snylengte, gate en uitsnydings), deel die oorspronklike se merk, en die telling in {{ui:Deelmerke}} en die materiaallys styg.
- 'n Kopie wat anders eindig, kry sy eie merk. 'n Balk wat sonder sy eindplate geplak word, byvoorbeeld, word nie teruggesny nie, so dit is 'n ander stuk. Merke word oor die hele model weer genommer, so ander onderdele se nommers kan ook verander.

Elke geplakte lid, gat, uitsnyding, verbinding en fondasie kry 'n nuwe id, sodat niks in die model ooit tussen 'n kopie en sy oorspronklike gedeel word nie.

## As die klembord geweier word

Wat op die klembord is, word so noukeurig nagegaan soos 'n modellêer wat jy oopmaak: enigiets wat nie 'n geldige DetailCraft-onderdeel is nie, word laat val, en die statusbalk sê wat. 'n Klembord wat deur 'n nuwer DetailCraft of deur iets anders gevul is, word met 'n boodskap geweier en niks word geplak nie. As 'n privaatvenster die kopie nie in blaaierberging kan hou nie, werk die kopie steeds in daardie oortjie.
