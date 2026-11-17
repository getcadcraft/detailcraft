---
title: Menük, billentyűk és egér
summary: Válasszon olyan menüstílust, amely illeszkedik a megszokott munkamódjához, rendeljen saját billentyűt bármely parancshoz, helyezze át a parancsokat szalagfülek között, és állítsa be, mit csinál a görgő és az egér gombjai.
keywords: menüstílus, menük, szalag, eszköztár, parancssor, billentyűparancsok, gyorsbillentyűk, billentyűk, testreszabás, újrakiosztás, egér, görgő, megfordítás, nagyítás iránya, középső gomb, jobb gomb, eltolás, forgatás, exportálás, importálás, váltás, ismerős, klasszikus rajzolás, acél szalag
from: 4132c6e5
---

A DetailCraft parancsai mindig ugyanazok, bárhonnan éri el őket. A **menüstílus** csak azt határozza meg, hol helyezkednek el a képernyőn, milyen néven szerepelnek és mely billentyűk futtatják őket. Válassza ki a {{ui:Beállítások}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menük, billentyűk és egér}} alatt; a változás azonnal érvényes, és ez a böngészőben megmarad.

## A három stílus

| Stílus | Mit kap |
|---|---|
| {{ui:DetailCraft}} | A DetailCraft saját eszköztára (Fájl, Elhelyezés, Kapcsolás, Szerkesztés, Kimenet) és egybetűs billentyűi: {{key:V}} kijelölés, {{key:B}} gerenda, {{key:C}} oszlop, {{key:R}} merevítő, {{key:P}} lemez, {{key:F}} alap, {{key:S}} lépcső. Ez az alapértelmezés. |
| {{ui:Klasszikus rajzolás}} | Azoknak, akik parancsokat gépelnek: egy kis szalag ({{ui:Kezdőlap}}, {{ui:Nézet}}, {{ui:Kimenet}}) és egy parancssor. Írja be a BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, Visszavonás (U), ZOOM, PLAN, 3D, DRAWINGS, NC vagy HELP parancsot, majd nyomja meg az {{key:Enter}} billentyűt; üres sornál az {{key:Enter}} megismétli az utolsó parancsot, az {{key:Esc}} törli azt. Bárhol elkezdhet gépelni, és a betűk a parancssorba kerülnek. A középső gomb eltol; 3D-ben a {{key:Shift}} és a középső gomb forgat. |
| {{ui:Acél szalag}} | Olyan fülek, ahogyan az acélszerkezeti tervezőprogramok rendezik őket: {{ui:Modellezés}} (tagok, beton, lépcsők), {{ui:Részletezés}} (kapcsolatok), {{ui:Szerkesztés}}, {{ui:Rajzok}} (rajzok és jelentések), {{ui:Gyártás}} (NC-fájlok, IFC) és {{ui:Nézet}}, egy {{ui:Fájl}} menüvel és gyorsgombokkal a jobb oldalon. Az egybetűs billentyűk megmaradnak. A középső gomb eltol; 3D-ben a bal gomb forgat. |

Minden stílus megtartja a {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} és {{key:Mod+A}} billentyűket. A szalagokon a nézetsáv {{ui:3D}}, {{ui:Alaprajz}}, {{ui:Homlokzat}} és {{ui:Illesztés}} gombjai is megvannak.

:::tip
Az a billentyű, amely a DetailCraft saját kiosztásához tartozik, de a stílusában másik parancshoz van rendelve, nem tesz semmit, és az állapotsor megmondja, hová került a parancsa („A Saját acél szalagban az Oszlop a Ctrl+Alt+C”). A {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} és a nyilak mindig megtartják a jelentésüket, és ha egy tag félig elhelyezett vagy egy másolat a mutatót követi, a betűk a DetailCraftot illetik.
:::

## Állítsa a saját igényei szerint

1. Válassza ki a legközelebbi stílust, majd kattintson a {{ui:Testreszabás…}} gombra.
2. A {{ui:Billentyűk és menük}} részen keressen rá egy parancsra (a keresőmező segít). Kattintson a {{ui:Billentyű hozzáadása}} gombra, majd nyomja meg a billentyűt, vagy két billentyűt egymás után, ha kétbetűs billentyűt szeretne. Egy billentyűre kattintva eltávolítja.
3. Szalag esetén a {{ui:Hol van}} beállítás a parancsot másik fülre és panelre, a {{ui:Fájl}} menübe vagy a {{ui:Csak billentyűk}} helyre helyezi.
4. Az {{ui:Egér}} részen állítsa be a görgőt, a gombokat, amelyek az alaprajzot és a homlokzatokat tolják, és azt, hogy az egyes gombok mit csinálnak a 3D nézetben.
5. Adjon nevet, és kattintson a {{ui:Mentés}} gombra.

Beépített stílus mentése saját másolatot készít („Saját acél szalag”); a beépített stílus soha nem változik. Ha egy billentyű két parancshoz van rendelve, pirossal jelenik meg, és a mentés előtt javítani kell.

## Egér

- **Egérgörgő**: {{ui:A felfelé görgetés nagyít}} (kiindulási érték) vagy {{ui:A felfelé görgetés kicsinyít}}, és hogy milyen gyorsan. Az érintőpad csippentése mindig az ujjak mozgásának irányában nagyít.
- **Az alaprajz és a homlokzatok eltolása ezzel**: a középső gomb, a jobb gomb, vagy mindkettő. A {{ui:Kijelölés}} eszközzel a bal gomb mindig kijelölőablakot húz.
- **Húzás a 3D nézetben**: a {{ui:Nézetenként saját}} megtartja a DetailCraft gombjait (a bal forgat, a középső nagyít, a jobb eltol). Vagy állítsa be minden gombot forgatásra, eltolásra, nagyításra vagy semmire; a {{key:Shift}} a forgató vagy eltoló gombbal felcseréli a kettőt.

## Vigye magával

Az {{ui:Exportálás}} a használt stílust egy kis `.ccinput.json` fájlba menti; az {{ui:Importálás…}} egy ilyet hozzáad egy másik számítógépről vagy kollégától. Egy importált fájl csak a DetailCraft saját parancsaira mutathat: minden más kimarad, és az állapotsorban megszámolódik. Az {{ui:Ennek a stílusnak a törlése}} eltávolít egyet a saját stílusai közül.

:::note
Ezek a beállítások ebben a böngészőben maradnak. A stíluskártyák alatti {{ui:Ennek a stílusnak a használata minden alkalmazásban}} beállítás minden alkalmazást az ahhoz illő stílusban nyit meg (saját eszköztár, szalag vagy {{ui:Klasszikus rajzolás}}), azokkal a módosításokkal, amelyeket az egyes alkalmazásokban végzett. A DetailCraftban nincs menüsávos stílus: ha egy másik alkalmazás menüsávja van kiválasztva minden alkalmazásra, a DetailCraft megtartja a saját eszköztárát.
:::

Kapcsolódó: [Billentyűk és egér műveletei](topic:keyboard) · [DetailCraft beállításai](topic:settings) · [Áttérés más részletező szoftverekről](topic:coming-from)
