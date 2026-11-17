---
title: Kopeerimine, kleepimine ja dubleerimine
summary: Vali mitu detaili, kopeeri need koos avade, lõigete ja ühendustega ning kleebi ruudustiku ristumiskohale, nihkega, samasse kohta või teise sakki. Lõika, dubleeri, kustuta ja vali kõik.
keywords: kopeeri, kleebi, lõika, dubleeri, lõikelaud, kleebi samasse kohta, vali kõik, tühista valik, mitmikvalik, Shift-klõps, mitu, korda vahet, kopeeri raam, nihe, kustuta mitu, muuda menüü, veel menüü
from: f25f1829
---

Tööriistaribal on rühm {{ui:Muuda}}, kus on {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}} ja {{ui:Kleebi}}. Selle menüüs {{ui:Veel}} on ülejäänud käsud: {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi samasse kohta}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Vali kõik}} ja {{ui:Tühista valik}}, igaüks oma kiirklahviga. Nupp või menüükäsk, mis praegu ei saa töötada, on hallina; vaata selle peale hiirega, et lugeda põhjust (näiteks „midagi pole veel kopeeritud").

Iga kleepimine, lõikamine, dubleerimine ja kustutamine on üks samm: üks {{key:Mod+Z}} võtab kõik tagasi.

## Vali mitu detaili

- Klõpsa detailil, et see valida. Hoia all {{key:Shift}} (või {{key:Ctrl}}, või {{key:Mod}}) ja klõpsa rohkematel detailidel, et need lisada; valitud detaili klõpsamine samamoodi eemaldab selle valikust.
- {{key:Mod+A}} või {{ui:Vali kõik}} valib kõik elemendid, ühendused ja alused.
- {{key:Esc}} või {{ui:Tühista valik}} tühistab valiku.

Kui on valitud mitu asja, on paneelil {{ui:Omadused}} pealkiri „4 valitud" (või mitu, kui palju on valitud) ning see loetleb elemendid tüübi järgi, ühendused, alused ja terase bruttomassi, ning seal on nupud {{ui:Kopeeri}}, {{ui:Dubleeri}} ja {{ui:Kustuta}}.

## Kopeerimine

1. Vali elemendid ja alused, mida tahad.
2. Vali {{ui:Kopeeri}} või vajuta {{key:Mod+C}}.

Kaasa tuleb:

- Iga element tervena: profiil, materjal, otsad, asend, pööre, nimi, avad ja lõiked. Kasutatud kohandatud profiil kopeeritakse samuti.
- Iga alus tervena: mõõdud, betoon, alumine armatuur ja algusvardad.
- Otsaplaadid ja aluseplaadid, kuid ainult siis, kui iga element, mida ühendus seob, on kopeeritud: talapõhja otsaplaat vajab talad ja selle sammast. Olekuribal on öeldud, mitu ühendust jäi maha. Ühenduste tahtlikuks mahajätmiseks eemalda märkeruut **Kopeeri otsaplaadid ja aluseplaadid koos nende elementidega** jaotises [DetailCraft'i sätted](topic:settings).

Ainsat ühendust ei saa kopeerida; vali selle asemel selle elemendid. Teistele liitekohtadele sama ühenduse andmiseks kasuta nuppu {{ui:Sarnane}} (vt [Otsaplaadid](topic:end-plates#copy-it-to-every-similar-joint)).

Koopia jääb sellesse brauserisse, kuni kopeerid midagi muud. Teine DetailCraft'i kaart või aken samas brauseris saab selle kleepida, nii et võid kopeerida raami ühest mudelist ja kleepida teise.

## Kleepimine ruudustiku ristumiskohale

1. Vali {{ui:Kleebi}} või vajuta {{key:Mod+V}}.
2. Liiguta kursorit vaate kohal. Koopia katkendlik piirjoon jälgib kursorile lähimat ruudustiku ristumiskohta.
3. Klõpsa ristumiskohal. Koopia baaspunkt (selle madalaim nurk: kõigi kopeeritud asjade väikseimad x, y ja z) asetub sinna.

Kleebitud detailid on pärast valitud, nii et saad kleepida veel mujale või neid muuta. {{key:Esc}} tühistab kleepimise; koopia jääb lõikelauale. {{ui:Plaan}} ja {{ui:Vaade}} aitavad õiget ristumiskohta lihtsamini tabada.

:::tip
Vahe kordamiseks vali vahe elemendid (või kõik klahviga {{key:Mod+A}}), kopeeri, kleebi ja klõpsa ristumiskohal, mis on üks vahe võrra kaugemal kohast, kus oli koopia madalaim nurk.
:::

## Kleepimine klaviatuuriga

Kleepimise ajal näitab paneel {{ui:Omadused}}, mis on lõikelaual, ning kaks vormi:

- {{ui:Kleebi nihkega (mm, algsest)}}: sisesta x, y ja z ning vali {{ui:Kleebi sellise nihkega}}. Väärtused algavad [DetailCraft'i sätetest](topic:settings).
- {{ui:Kleebi ruudustiku ristumiskohale}}: vali tähisega ruudustik, numbriga ruudustik ja tasand ning vali {{ui:Kleebi siia}}. Baaspunkt läheb sinna.

## Kleepimine samasse kohta

{{ui:Kleebi samasse kohta}} ({{key:Mod+Shift+V}}) asetab koopia täpselt samadesse koordinaatidesse, kust see kopeeriti. Kasuta seda pärast {{ui:Lõika}}, või et tuua detailid teisest mudelist samasse kohta. Kui algsed on veel alles, asetub koopia nende peale ning olekuriba hoiatab sind: nihuta koopiaid paneelil {{ui:Omadused}} nende {{ui:Algus}} ja {{ui:Lõpp}} järgi või võta tagasi.

## Dubleerimine

{{ui:Dubleeri}} ({{key:Mod+D}}) kopeerib valiku ja kleebib selle kohe, nihutatuna [DetailCraft'i sätetes](topic:settings) oleva nihke võrra (algselt 6000 mm piki x-telge). See ei muuda lõikelaual olevat. Koopiad on pärast valitud, nii et {{key:Mod+D}} uuesti vajutamine teeb neist järgmise.

## Lõikamine ja kustutamine

- {{ui:Lõika}} ({{key:Mod+X}}) kopeerib valiku ja kustutab siis selle. Kleebi see sinna, kuhu see kuulub.
- {{ui:Kustuta}} ({{key:Delete}} või {{key:Backspace}}) kustutab valiku. Elemendi kustutamine kustutab ka selle ühendused.

## Märgised pärast kleepimist

Detailimärgiseid ja koostemärgiseid ei salvestata; DetailCraft nummerdab need pärast iga muudatust mudelist uuesti ([kuidas märgised antakse](topic:mark-rules)). Seega:

- Koopia, mis on sama tükk kui originaal (sama profiil, klass, lõikepikkus, avad ja lõiked), saab originaali märgise ning loend jaotises {{ui:Detailimärgised}} ja materjalide nimekirjas suureneb.
- Koopia, mis osutub erinevaks, saab oma märgise. Näiteks talasse, mis on kleebitud ilma otsaplaatideta, ei lõigata tagasi, seega on see teine tükk. Märgised nummerdatakse uuesti kogu mudeli ulatuses, nii et teiste detailide numbrid võivad samuti muutuda.

Iga kleebitud element, auk, lõige, ühendus ja alus saab uue ID, nii et midagi mudelis ei jagune koopia ja originaali vahel.

## Kui lõikelauda ei võeta vastu

Lõikelaual olevat kontrollitakse sama hoolikalt nagu avatavat mudelifaili: kõik, mis ei ole kehtiv DetailCraft'i detail, visatakse välja ning olekuriba ütleb, mis juhtus. Uuem DetailCraft või muu programm lõikelauale pandud andmed lükatakse tagasi koos teatega ja midagi ei kleebita. Kui privaatne aken ei saa koopiat brauseri salvestusruumi hoida, töötab koopia siiski selles kaardis.
