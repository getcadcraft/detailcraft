---
title: Plaas plate en voeg pasgemaakte profiele by
summary: Plaas los plate volgens dikte en wydte, en definieer jou eie I-, kanaal-, hoek-, buis- of platstaal-snitte.
keywords: plaat, platstaal, pasgemaakte profiel, gebruikersprofiel, parametries, snit, vorm, dwarssnit, pl
from: c24c3b51
---

## Plaas 'n plaat

'n Plaat word soos 'n balk geplaas: dit loop tussen twee kruisings, met sy wydte dwars en sy dikte op.

1. Kies {{ui:Plaat}} in die {{ui:Plaas}}-groep, of druk {{key:P}}.
2. In die {{ui:Eienskappe}}-paneel, stel {{ui:Dikte (mm)}} en {{ui:Wydte (mm)}}. Die verstek is 20 x 200 in A36.
3. Stel {{ui:Materiaal}} en {{ui:Rotasie (°)}} indien nodig. 'n Rotasie van 90 staan die plaat op sy kant.
4. Klik twee kruisings, of gebruik die {{ui:Voeg by rooster}}-vorm.

Die plaat se profielnaam word geskryf `PL<dikte>x<wydte>`, byvoorbeeld PL20x200. Die lengte is die afstand tussen die twee punte.

Om 'n geplaasde plaat te verander, kies dit en verander {{ui:Dikte (mm)}} of {{ui:Wydte (mm)}}.

Plate wat jy plaas, is eie dele (merk p, samestelling P). Eindplate en basisplate wat deur verbindings gemaak word, is ook plate, maar jy verander hulle deur hul verbinding; sien [Eindplate](topic:end-plates).

## Voeg 'n pasgemaakte profiel by

Wanneer die snit wat jy nodig het nie in die katalogus is nie, maak dit uit sy afmetings. 'n Pasgemaakte profiel behoort aan die model en word saam daarmee gestoor. Om dit in elke nuwe model te gebruik, hou dit in {{ui:My profiele}}, wat hieronder onder "Hou 'n profiel vir nuwe modelle" beskryf word.

1. In die {{ui:Model}}-paneel aan die linkerkant, maak {{ui:Pasgemaakte profiel}} oop.
2. Tik 'n {{ui:Naam}}, byvoorbeeld `W8x18-custom` of `RHS 120x80x5`. Dit kan nie 'n katalogusnaam wees of soos 'n plaatnaam lyk nie.
3. Kies 'n {{ui:Vorm}}: {{ui:I-vorm}}, {{ui:Kanaal}}, {{ui:Gelykbeenhoek}}, {{ui:Reghoekige buis}}, {{ui:Ronde buis}} of {{ui:Platstaal}}.
4. Vul die afmetings in wat verskyn, almal in millimeter:

| Vorm | Afmetings |
|---|---|
| I-vorm | Diepte d, Flenswydte bf, Lyf tw, Flens tf, Vulradius r (kan 0 wees) |
| Kanaal | Diepte d, Flenswydte bf, Lyf tw, Flens tf (vierkantige hoeke) |
| Gelykbeenhoek | Wydte b (elke been), Dikte t |
| Reghoekige buis | Hoogte h, Wydte b, Dikte t (buitehoekradius 2t) |
| Ronde buis | Deursnee D, Dikte t |
| Platstaal | Wydte b, Dikte t |

5. Laat {{ui:Hou in My profiele}} aangevink om dit in elke nuwe model te hê (sien hieronder), of ontmerk dit om dit net in hierdie model te hou.
6. Kies {{ui:Voeg profiel by}}.

Die statusbalk sê "Profiel "…" bygevoeg; dit is in elke profiellys onder Pasgemaakte." Dit verskyn in die lys onder die vorm en aan die einde van elke {{ui:Profiel}}-lys.

DetailCraft kontroleer dat die vorm kan bestaan. Jy sal boodskappe sien soos "Die lyf en flense pas nie binne die diepte en wydte nie.", "Die vulradius is te groot vir die flens." of "Die wand is te dik." Maak die getalle reg en kies {{ui:Voeg profiel by}} weer.

### Wat pasgemaakte profiele kry

- Massa per meter uit die oppervlakte × 7850 kg/m³ (katalogusgroottes gebruik die gepubliseerde gewig).
- Pasgemaakte I-vorms kry gate, uitsnitte, eindplate, NC-lêers en werkswinkeltekeninge soos katalogus-I-vorms.
- Pasgemaakte platstaal gedra hulle soos plate.
- Pasgemaakte kanale en buise kry gate; hoeke en ronde buise nog nie.

Jy kan 'n pasgemaakte profiel nie in 'n model wysig of verwyder nadat dit bygevoeg is nie (gebruik {{key:Mod+Z}} dadelik as jy 'n fout gemaak het). Gee 'n verbeterde een 'n nuwe naam.

## Hou 'n profiel vir nuwe modelle

{{ui:My profiele}}, onder die vorm, is jou eie lys pasgemaakte profiele. Dit word in hierdie blaaier, op hierdie rekenaar, gehou, nie in 'n modellêer en nie in jou rekening nie.

- 'n Profiel wat bygevoeg is met {{ui:Hou in My profiele}} aangevink, gaan in die lys. Elke nuwe model, insluitend die een wat DetailCraft oopmaak wanneer jy dit begin, begin met hulle almal in sy profiellyste.
- 'n Profiel wat reeds in 'n model is maar nie in die lys nie, het 'n {{ui:Hou}}-knoppie daarnaas.
- In 'n model wat nie een van jou profiele het nie (byvoorbeeld 'n ouer lêer), kies {{ui:Gebruik hier}} om dit by te voeg.
- {{ui:Verwyder}} haal 'n profiel uit die lys. Modelle wat dit reeds gebruik, hou hul eie kopie.
- 'n Model wat jy oopmaak, hou die profiele wat in sy lêer gestoor is. Om 'n lêer oop te maak, verander nooit jou lys nie.
- 'n Naam wat reeds in die lys is met ander afmetings, word geweier: gee die nuwe een 'n ander naam.
- Die uitvee van die blaaier se webwerfdata, of die gebruik van 'n ander blaaier of rekenaar, begin met 'n leë lys. 'n Privaatvenster kan dit nie hou nie; die program sê dit.
