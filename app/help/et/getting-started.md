---
title: Alustamine rakendusega DetailCraft
summary: Mida DetailCraft praegu teeb, kuidas seda avada ning esimene mudel ruudustikest tööjoonisteni kümne minutiga.
keywords: alusta, esimene mudel, sissejuhatus, terasdetailid, armatuur, kiirstart, õpetus, ülevaade
from: 3682c0d8
---

DetailCraft on terasdetailide ja armatuuri detailimise rakendus CadCraft-perekonnas. Sa koostad ruudustikel ja tasanditel põhineva terasraami 3D-mudeli, ühendad selle ja saad, mida tootmine vajab: detailide ja koostude märgised, materjalinimekirja, üksikute detailide tööjoonised, DSTV NC-failid, IFC-mudeli ja vundamentide painutusloendi.

See on varajane versioon. See teeb lühikese loetelu asju hoolikalt, mitte kõike korraga. Enne tõelise töö planeerimist loe [Mida veel ei ole](topic:not-built-yet).

## Mida see praegu teeb

- Ruudustikud ja tasandid, mille sisestad millimeetrites.
- Postid, talad, diagonaalid ja plaadid avaldatud profiilikataloogidest (AISC W, S, C, L, HSS ja Pipe; Euroopa IPE, HEA, HEB ja UPN) ning sinu enda parameetrilised profiilid.
- Kaks ühendust: poldiga kinnitatud otsaplaat talast posti flantsini ning posti aluseplaat nelja ankurvardaga. Kumbagi saab kopeerida igale sarnasele liitekohale.
- Augud ja väljalõiked, mis sisestatakse asukoha järgi.
- Ristkülikukujulised plaatvundamendid põhjavõrgu ja algusvarrastega.
- Detailide ja koostude märgised, mis uuenevad iga muudatuse järel ise.
- Eksport: IFC4, DSTV NC-failid (I-profiilid ja plaadid), materjalinimekiri CSV-na, painutusloend CSV-na ja ühe detaili tööjoonise PDF.

## Ava DetailCraft

1. Ava DetailCraft töölauabrauseris: Chrome, Edge, Firefox või Safari. Vt [Brauserid ja arvutid](common:browsers).
2. Oota, kuni ekraan täitub. Allservas olev olekuriba ütleb: „Valmis. Ava Näidis või määra ruudustikud ja tasandid ning alusta elementide paigutamist.“

Mudelivaade vajab 3D-graafikat (WebGL). Kui ekraani keskel on tekst „Brauser ei saanud 3D-graafikat (WebGL) käivitada“, vt [Probleemide lahendamine](topic:troubleshooting#the-3d-view-is-missing).

:::note
Sinu mudelid jäävad sinu arvutisse. Mudeli avamine loeb selle brauseris ja salvestamine laadib faili alla. Midagi ei laadita üles. Pilvesalvestus ei ole veel saadaval. Vt [Kuhu sinu failid lähevad](common:your-files). Et DetailCraft-i hiljem ilma ühenduseta kasutada, vali rakenduse ribal kord võrgus olles {{ui:Salvesta võrguks}}; vt [Töö võrguta](common:offline).
:::

:::offline
Oled võrguta. DetailCraft töötab ilma ühenduseta ainult siis, kui see on enne võrguks salvestatud: rakenduse riba nupp {{ui:Salvesta võrguks}} loeb siis {{ui:Valmis ka võrguta}}. Vt [Töö võrguta](common:offline).
:::

## Vaata kõigepealt näidist

Kiireim viis näha, mida DetailCraft teeb, on näidisraam.

1. Vali tööriistariba rühmas {{ui:Fail}} {{ui:Näidis}}.
2. Vaade näitab kahe väljaga raami: kuus posti koos aluseplaatidega, neli tala koos otsaplaatidega, üks diagonaal ja seitse vundamenti armatuuriga.
3. Klõpsa talale. Paremal asuv {{ui:Omadused}} paneel näitab selle detailimärgist, lõikepikkust, kaalu ja otsaplaatide tehtud auke.
4. Ava allservas vahekaart {{ui:Materjalinimekiri}}, et näha iga detailimärgist koos arvu ja kaaluga.

Juhend [Uuri näidisraami](topic:sample-model) käib selle läbi tükkhaaval.

## Sinu esimene mudel

Uuel mudelil on juba ruudustikud 1 kuni 3 ja A kuni B vahega 6000 mm ning kaks tasandit: Tasand 1 kõrgusel 0 ja Tasand 2 kõrgusel 4000.

1. Vali {{ui:Uus}}. Kui praegusel mudelil on muudatusi, küsib DetailCraft enne, kas need salvestada.
2. Vali vaate kohal {{ui:Plaan}}. Selle kõrval olev tasandite loend valib Tasand 1.
3. Vali tööriistaribal {{ui:Post}} või vajuta {{key:C}}.
4. Klõpsa ruudustiku ristumiskohal A/1. Post W12x50 ilmub tasandilt 1 tasandile 2. Olekuriba ütleb, kuhu see läks.
5. Klõpsa B/1, A/2 ja B/2, et paigutada veel kolm posti.
6. Vali tasandite loendist Tasand 2 ja vali seejärel {{ui:Tala}} või vajuta {{key:B}}.
7. Klõpsa A/1 ja seejärel A/2. Tala W16x26 ühendab kahe posti ülaosad, terase ülaserv on tasandil.
8. Vajuta {{key:Esc}}, et naasta valikule {{ui:Vali}}, ja klõpsa siis talale.
9. Vali rühmas {{ui:Ühenda}} {{ui:Otsaplaadid}}. Mõlemale otsale tuleb poldiga kinnitatud otsaplaat, tala lõigatakse sobivaks ja esimene otsaplaat on nüüd valitud.
10. Klõpsa talale uuesti.
11. Vali rühmas {{ui:Väljund}} {{ui:Tööjoonis}}. Avaneb tala tööjoonise eelvaade. Vali {{ui:Laadi alla PDF}}.
12. Vajuta {{key:Mod+S}}, et mudel salvestada. Brauser laadib alla faili `Untitled.detailcraft.json`.

Nimeta mudel ümber väljal {{ui:Nimi}} vasakul ülal enne salvestamist, et fail ja iga eksport kannaks selle nime.

## Kuhu edasi minna

- [Ekraani tutvustus](topic:workspace)
- [Ruudustike ja tasandite seadistamine](topic:grids-and-levels)
- [Liikumine 3D-vaates](topic:navigate-3d), hiire, puuteplaadi või puuteekraaniga
- [Tulek teistest detailimisprogrammidest](topic:coming-from), kui tead mõnda suurt detailimispaketti
- [Selle abi kasutamine](common:help)
