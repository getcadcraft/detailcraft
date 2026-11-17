---
title: A nézetkocka
summary: Kattintson a kocka egy lapjára, élére vagy sarkára, hogy onnan nézzen; húzza a körbeforgatáshoz, forgassa az iránytű gyűrűjét, lépkedjen egy szembenéző nézet körül, és térjen vissza a kezdőnézetbe.
keywords: nézetkocka, viewcube, kocka, iránytű, észak, kezdőnézet, szabványos nézetek, felül, elöl, jobbra, izo, sarok, él, körbefordítás, nézet forgatása, tengelyikon, sarokjelző, navigáció
from: 3666ea8a
---

A nézetkocka a 3D nézet jobb felső sarkában van, a nézetsáv alatt (csak a {{ui:3D}} nézetben: a {{ui:Plan}} és az {{ui:Elevation}} már egyenesen a modellre néz). A nézettel együtt fordul, így mindig látszik, merre néz: {{ui:Top}} felfelé, {{ui:Front}} délre néz (az oldal, ahonnan a betűs rácsvonalak láthatók az {{ui:Elevation}} nézetben), {{ui:Right}} keletre néz, a számozott rácsvonalak mentén. Addig áttetsző, amíg rá nem mutat.

## Nézet oldalról, élről vagy sarokból

1. Mutasson a kockára. A mutató alatti rész kivilágosodik: egy lap közepe, egy él (mindkét lap, amely osztozik rajta), vagy egy sarok (mindhárom lap).
2. Kattintson rá. A nézet arra felé fordul, megtartva ugyanazt a középpontot és nagyítást.

26 kattintási hely van: 6 lap ({{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}), 12 él és 8 sarok. A sarok a klasszikus háromnegyedes nézetet adja; az él a két lap közötti félúton nézi a modellt.

A kocka lapnézete 3D nézet, nem {{ui:Plan}} vagy {{ui:Elevation}}: semmi nincs levágva, és a modell továbbra is forgatható.

## Körbefordítás a kocka húzásával

Húzza a kockát a nézet elfordításához, ugyanúgy, mint a nézet körbefordításakor. A húzást sosem vesszük kattintásnak, így a kocka bárhol megfogható.

## Az iránytű gyűrű

A kocka alatti gyűrűn É, K, D és Ny betűk vannak.

- **Húzza a gyűrűt**, hogy a modellt a függőleges tengely körül forgassa, mintha egy forgóasztalon állna. A gyűrű követi a mutatót.
- **Kattintson egy betűre**, hogy arra az oldalra nézzen, megtartva, milyen meredeken néz lefelé. Felülnézetben a kattintott betű a képernyő alján lesz.

## Szembenéző nézetek: nyilak

Ha egyenesen egy lapra néz, kis nyilak jelennek meg a kocka körül:

- A négy **háromszög** az adott oldal lapját hozza elő: a kocka feletti háromszög a korábban felül lévő lapot mutatja, és így tovább.
- A két **ívelt nyíl** a jobb felső sarokban negyed fordulatot forgat a képen, óramutató járásával egyező vagy ellentétes irányba, anélkül, hogy megváltoztatná, melyik lapra néz. Ezzel úgy forgathat egy alaprajzot, hogy egy hosszú fal keresztben fusson a képernyőn.

## Kezdőnézet

A kocka bal felső sarkában lévő házgomb visszaáll a kezdő háromnegyedes nézetre, és beilleszti a teljes modellt, ugyanúgy, mint az illesztés gomb. A {{key:Home}} ugyanezt teszi, ha a kocka billentyűzetfókuszban van.

## Billentyűzettel

Lépjen a kockára a {{key:Tab}} billentyűvel, majd:

| Billentyű | Hatás |
|---|---|
| {{key:left}} / {{key:right}} | válasszon egy oldalt, élt vagy sarkot a kocka körül, nyolcad fordulatos lépésekben (a képernyőolvasók mondják, melyiket) |
| {{key:up}} / {{key:down}} | válasszon magasabb vagy alacsonyabb pozíciót, egészen a {{ui:Top}} vagy a {{ui:Bottom}} pozícióig |
| {{key:Enter}} vagy {{key:Space}} | nézzen a kiválasztott pozícióból |
| {{key:Shift+left}} / {{key:Shift+right}} | forgassa a nézetet negyed fordulattal a függőleges tengely körül |
| {{key:Home}} | kezdőnézet |
| {{key:Esc}} | kilépés a kockából |

A kockán lenyomott billentyűk a kockánál maradnak: nem indítanak DetailCraft-eszközt.

## Tengelyikon vagy semmi

Nyissa meg a {{ui:Settings}} menüt ({{key:Mod+,}}), a {{ui:DetailCraft}} fület, és állítsa a **Sarokjelző** beállítást {{ui:View cube}} (a kezdeti), {{ui:Axis icon}} (egy kis X, Y, Z jelölő a bal alsó sarokban: X piros, Y zöld, Z kék) vagy {{ui:None}} értékre. Ez a böngésző megjegyzi a választást. Lásd: [A DetailCraft beállításai](topic:settings#corner-indicator).
