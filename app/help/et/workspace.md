---
title: Ekraani tutvustus
summary: Iga riba, paneel ja vahekaart DetailCraft-is nende ekraanil nähtava nime järgi ning nende otstarve.
keywords: ekraan, paigutus, tööriistariba, paneelid, omadused, olekuriba, aruanded, liides, ui, vahekaardid
from: 454f74fd
---

DetailCraft täidab brauseriakna rakenduseriba all. Ülevalt alla: tööriistariba, siis kolm veergu ({{ui:Mudel}} paneel, vaade, {{ui:Omadused}} paneel), siis aruandevahekaardid ja olekuriba.

## Rakenduseriba

Kõige peenem riba kõige ülaservas kuulub CadCraft-i saidile, mitte mudelile. See näitab rakenduse nime ja versiooni, lingi {{ui:Teave DetailCraft-i kohta}}, nupu {{ui:Abi}} (või {{key:F1}}) selle abi jaoks, nupu {{ui:Salvesta võrguks}}, ekraanirežiimi nupu ja lüliti {{ui:Paber}} / {{ui:Mudel}}.

- {{ui:Salvesta võrguks}} hoiab DetailCraft-i, selle 3D-vaate ja selle abi sinu brauseris, et see avaneks ilma ühenduseta. Pärast salvestamist loeb see {{ui:Valmis ka võrguta}}; klõpsa siis selle peale, et valida {{ui:Salvesta uuesti (võta uusim versioon)}} või {{ui:Eemalda võrguvälise koopia}}. Vt [Töö võrguta](common:offline).
- {{ui:Paber}} annab heleda ekraani ja {{ui:Mudel}} tumeda. 3D-vaade järgib kohe; sinu mudel ei muutu.
- Ekraanirežiimi nupp ja {{key:Ctrl+Shift+F}} vahetavad režiime: tavaline, täisekraan ja täisekraan peidetud ribadega. {{key:Ctrl+Shift+F}} kasutab igal arvutil Control-klahvi, Mac kaasa arvatud. Peidetud ribadega vajuta ekraani ülaserva (või puuduta seda), et need tagasi tuua. {{key:Esc}} väljub täisekraanist.

## Tööriistariba

Tööriistaribal on viis rühma. Nupu kohal hoides näed, mida see teeb ja milline on selle klahv.

| Rühm | Nupud | Mida nad teevad |
|---|---|---|
| {{ui:Fail}} | {{ui:Uus}}, {{ui:Ava}}, {{ui:Impordi IFC}}, {{ui:Salvesta}}, {{ui:Näidis}} | Alusta mudelit, ava salvestatud `.detailcraft.json` või IFC-fail, salvesta mudel või ava näidisraam |
| {{ui:Paiguta}} | {{ui:Vali}}, {{ui:Tala}}, {{ui:Post}}, {{ui:Diagonaal}}, {{ui:Plaat}}, {{ui:Vundament}}, {{ui:Trepp}} | Tööriist, mida järgmine klõps vaates kasutab |
| {{ui:Ühenda}} | {{ui:Otsaplaadid}}, {{ui:Aluseplaat}}, ja menüüs {{ui:Veel}}: {{ui:Lõikeplaadid}}, {{ui:Skarv}}, {{ui:Sõlmeplaat}}, {{ui:Sarnane}} | Lisa ühendus valitud talale, postile või diagonaalile või kopeeri valitud ühendus igale sarnasele liitekohale |
| {{ui:Muuda}} | {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Veel}} | Liigu muudatuste vahel tagasi ja edasi; kopeeri valik ja kleebi see. {{ui:Veel}} avab menüü koos {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi samasse kohta}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Vali kõik}} ja {{ui:Tühista valik}}, igaühel oma klahv |
| {{ui:Väljund}} | {{ui:IFC}}, {{ui:NC-failid}}, {{ui:BOM}}, {{ui:Tööjoonis}}, {{ui:Joonised}}, ja menüüs {{ui:Veel}}: {{ui:Painutamine}}, {{ui:Kaalu aruanne faasiti}}, {{ui:KISS-fail valmistamistarkvarale}} | Laadi alla eksport või ava joonislehed |

Nupud ja menüüelemendid, mis praegu ei saa toimida, on hallid ja nende kohal hoides näed põhjust. {{ui:Otsaplaadid}} vajab valitud talat, {{ui:Aluseplaat}} valitud posti, {{ui:Sarnane}} valitud ühendust, {{ui:Tööjoonis}} valitud I-profiili või plaadi detaili, {{ui:Kopeeri}} valitud elementi või vundamenti ja {{ui:Kleebi}} midagi kopeeritud. Vt [Kopeeri, kleebi ja dubleeri](topic:copy-paste).

## Mudelipaneel (vasakul)

- {{ui:Mudel}}: mudeli {{ui:Nimi}}. See annab nime igale salvestatud või eksporditud failile.
- {{ui:Ruudustik}}: ruudustikujooned ja nende vahed ning {{ui:Rakenda ruudustik}}. Vt [Ruudustike ja tasandite seadistamine](topic:grids-and-levels).
- {{ui:Tasandid}}: üks rida iga tasandi kohta (nimi ja kõrgus mm-des), {{ui:Lisa tasand}} ja {{ui:Rakenda tasandid}}.
- {{ui:Kohandatud profiil}}: tee oma parameetriline lõige. Kinni, kuni selle avad.
- {{ui:Detailimärgised}}: iga detailimärgis mudelis koos profiili, pikkuse ja arvuga. Klõpsa märgisel, et valida esimene selle märgisega detail.

{{ui:Ruudustik}}, {{ui:Tasandid}} ja {{ui:Kohandatud profiil}} voldivad kokku: klõpsa nende pealkirjadel.

## Vaade (keskel)

Vaade näitab mudelit 3D-s. Selle kohal on vaateriba kolme nupu ja loendiga:

- {{ui:3D}}: pöörle mudeli ümber vabalt.
- {{ui:Plaan}}: vaata otse alla ühele tasandile. Nuppude kõrvale ilmub tasandite loend. Kõik, mis on tasandist üle 1.5 m kõrgemal, lõigatakse ära, et tasand oleks selgelt näha ja klõpsatav.
- {{ui:Vaade}}: vaata otse ühele tähtedega tähistatud ruudustikujoonele (Ruudustik A, Ruudustik B …). Ilmub tähtedega ruudustike loend. Nähtav on ainult selle joone 1 m piires olev teras.
- Vaateriba parempoolses otsas olev sobitusnupp suumib, et näha kogu mudelit.

Väikesed punktid tähistavad iga ruudustiku ristumiskohta igal tasandil. Kui paigutustööriist on sees, süttib kursorile lähim punkt ja olekuriba nimetab selle, näiteks „A/2 tasandil 1“. Värvid eristavad elementide tüüpe: postidel, taladel, diagonaalidel ja plaatidel on igaühel oma värv, polditel ja varrastel veel üks, vundamendid on läbipaistvad ning armatuur on joonistatud torudena. Augud on näidatud tumedate täppidena; väljalõiked on lõigatud.

Kuidas pöörata, nihutada ja suumida: [Liikumine 3D-vaates](topic:navigate-3d).

Kui mudel on tühi, näitab vaade lühikest loetelu „Alusta mudelit“. Salvestatud mudelifaili saad avada ka lohistades selle vaatesse.

## Omadused paneel (paremal)

See, mida paneel näitab, sõltub sellest, mida teed, ja selle pealkiri ütleb, mis see on: „Mudel“, „Paiguta tala“, „Tala b2“, „Otsaplaadiga ühendus“, „Aluseplaat“, „Vundament F1“, „3 valitud“ või „Kleebi“.

- **Midagi pole valitud:** mudeli kokkuvõte (elemendid, ühendused, vundamendid, detailid, märgised, poldid, terase ja armatuuri kaal, ruudustikud, tasandid).
- **Paigutustööriist on sees:** järgmise detaili valikud (profiil, materjal, asukoht, pöörlemine ja postide puhul {{ui:Ulatub kuni}}), valitud profiili kokkuvõte ning vorm {{ui:Lisa ruudustiku järgi}}, et paigutada ilma vaates klõpsamata.
- **Element on valitud:** selle nimi, profiil, materjal, asukoht, pöörlemine, mõlema otsa koordinaadid, märgised, lõikepikkus ja kaal, augud ja väljalõiked ning nupud ühendustele, selle tööjoonisele ja {{ui:Kustuta}}.
- **Ühendus on valitud:** iga plaadi, polti ja keevise seadistus, poldid ja keevis, mida see teeb, selle hoiatused ning {{ui:Rakenda sarnastele}}.
- **Vundament on valitud:** selle asukoht ja mõõtmed, põhjavõrk, algusvarrad ja kasutatavad varda märgised.
- **Mitu asja on valitud:** iga tüübi elementide arv, ühenduste ja vundamentide arv, nende terase kaal ning {{ui:Kopeeri}}, {{ui:Dubleeri}} ja {{ui:Kustuta}}.
- **Kleepimine:** lõikelauale kopeeritu ning vormid kleepimiseks trükitud nihkega või ruudustiku ristumiskohale, mille valid loenditest.

Arvuväljad rakenduvad, kui vajutad {{key:Enter}} või lahkud väljalt. Iga muudatus on üks samm, mille saad tagasi võtta.

## Aruandevahekaardid (all)

- {{ui:Probleemid}}: kõik, mida DetailCraft ei saanud ehitada või mida tuleb kontrollida, iga rea juures nupp {{ui:Vali}}. Vahekaart näitab arvu sulgudes.
- {{ui:Materjalinimekiri}}: detailid, koostud ning poldid ja ankurvardad koos kaalude ja lingiga {{ui:Laadi alla CSV}}. Klõpsa detailimärgisel, et see detail valida.
- {{ui:Painutusloend}}: iga armatuurvarda märgis igas vundamendis koos lingiga {{ui:Laadi alla CSV}}.

Kui vahekaart on fookuses, liiguvad {{key:Left}} ja {{key:Right}} vahekaartide vahel.

## Olekuriba

Allserva riba koosneb kolmest osast: ruudustiku ristumiskoht kursori all paigutamise ajal, viimane teade (mis just juhtus või miks midagi keelduti) ning detailide, poldide, terase kaalu ja armatuuri kaalu jooksvad summad. Kui toiming näib mitte midagi tegevat, loe esmalt siit teade.

Brauseri vahekaardi pealkiri algab punktiga (•), kui mudelil on salvestamata muudatusi.

## Kitsas ekraan

Alla umbes 760 pikslit laiuse korral paigutuvad veerud üksteise peale: tööriistariba, vaade, olekuriba, {{ui:Omadused}}, aruandevahekaardid ja viimasena {{ui:Mudel}} paneel. Pääsemiseks keri lehte. DetailCraft on kujundatud töölaua- või sülearvutiekraanile; telefonis saab vaadata, mitte detailida.
