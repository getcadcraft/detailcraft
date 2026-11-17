---
title: Voeg gate en uitsnydings by
summary: Tik gate in lywe, flense en plate, en sny die flense by 'n balkpunt uit, gemeet vanaf die deel se gesnyde einde.
keywords: gat, gate, boutgat, uitsnyding, insnyding, snit, boor, pons, lyfgat, flensgat
from: 33d12398
---

Gate en uitsnydings word met posisie ingetik. Hulle behoort aan die lid en beweeg saam daarmee.

Gate wat deur verbindings gemaak word (eindplate, voetplate), word vir jou bygevoeg; jy tik dié nie in nie. Hulle word gelys as "… gate van verbindings (wysig die verbinding)".

## Waar posisies gemeet word

- **x** loop langs die deel vanaf sy **gesnyde begin**: die begin-punt nadat enige verbinding dit teruggesny het. So x = 0 is die werklike einde van die staal, nie die roosterpunt nie.
- **y** word oor die vlak vanaf die afdeling se middellyn gemeet:
   - op die **lyf**: op (positief) of af vanaf halfdiepte;
   - op 'n **flens** of 'n **plaat**: oor die breedte, vanaf die middellyn.
- Die lid se begin is die eerste punt wat jy geklik het toe jy dit geplaas het. Die rye {{ui:Eindpunte (x, y, z mm)}} wys watter punt watter een is.

## Voeg 'n gat by

1. Kies die lid.
2. In die kassie {{ui:Gate}} van die paneel {{ui:Eienskappe}}, kies die {{ui:Kant}}: {{ui:Lyf}}, {{ui:Boonste flens}} of {{ui:Onderste flens}} (vir 'n I-vorm, kanaal of reghoekige buis), of {{ui:Plaatvlak}} (vir 'n plaat).
3. Tik {{ui:x langs (mm)}}, {{ui:y dwars (mm)}} en {{ui:Deursnee (mm)}}. Die vorm begin by x 100, y 0, deursnee 22.
4. Kies {{ui:Voeg gat by}}.

Die statusbalk sê "Gat bygevoeg. x is vanaf die gesnyde begin; y vanaf die afdelingsmiddelpunt (lyf: op, flens/plaat: dwars)." Die gat verskyn in die lys, en in die aansig as 'n donker prop deur die vlak.

Om 'n gat te verwyder, kies die × langs dit in die lys.

Hoeke en ronde buise neem nog nie gate nie: hul kassie {{ui:Gate}} sê so.

:::note
In die 3D-aansig word gate as donker proppe geteken, nie deur die staal gesny nie. Hulle is werklike gate in die NC-lêers, die werkswinkeltekeninge en die IFC-uitvoer.
:::

'n Gat waarvan x verby enige einde van die deel is, verskyn in die oortjie {{ui:Probleme}} as "’n gat is van die einde van die deel af".

## Voeg 'n uitsnyding by

Uitsnydings is vir I-vorms: hulle sny die boonste of onderste flens (en daardie diepte van die lyf) by een punt weg, sodat die balk 'n ander lid verbyloop.

1. Kies 'n I-vorm-lid.
2. In die kassie {{ui:Uitsnydings}}, kies {{ui:Einde}} ({{ui:Begin}} of {{ui:Einde}}) en {{ui:Kant}} ({{ui:Bo}} of {{ui:Onder}}).
3. Tik {{ui:Lengte (mm)}} (langs die balk vanaf daardie punt) en {{ui:Diepte (mm)}} (af vanaf die bo, of op vanaf die onder). Die vorm begin by 100 x 40.
4. Kies {{ui:Voeg uitsnyding by}}.

Die aansig wys die uitsnyding uit die staal gesny. Die lys lees byvoorbeeld "Bo by die begin: 100 x 40". Verwyder dit met sy ×.

Uitsnydings is vierkantig: daar is nog geen radius by die binne-hoek nie.

## Hoe gate en uitsnydings merke beïnvloed

Twee dele kry net dieselfde deelmerk as hul gate en uitsnydings binne 1 mm ooreenstem, met die toelating dat die deel omgedraai word. Om 'n gat by een balk van 'n groep te voeg, gee dit 'n nuwe merk. Sien [Merkreëls](topic:mark-rules).
