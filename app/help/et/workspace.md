---
title: Ekraani tutvustus
summary: Iga riba, paneel ja vahekaart DetailCraftis nende ekraanil oleva nime järgi ning nende otstarve.
keywords: ekraan, paigutus, tööriistariba, paneelid, omadused, olekuriba, aruanded, liides, ui, vahekaardid
from: 94f81073
---

DetailCraft täidab brauseriakna rakenduse ribast allapoole. Ülevalt alla: tööriistariba, seejärel kolm veergu (paneel {{ui:Mudel}}, vaade, paneel {{ui:Omadused}}), seejärel aruandevahekaardid ja olekuriba.

## Rakenduse riba

Õhuke riba kõige ülemisel real kuulub CadCrafti saidile, mitte mudelile. Seal on rakenduse nimi ja versioon, link {{ui:Teave DetailCrafti kohta}}, {{ui:Abi}} (või {{key:F1}}) selle abi jaoks, {{ui:Salvesta võrguks}}, ekraanirežiimi nupp ning lüliti {{ui:Paber}} / {{ui:Mudel}}.

- {{ui:Salvesta võrguks}} hoiab DetailCrafti, selle 3D-vaate ja seda abi sinu brauseris, et rakendus avaneks ilma ühenduseta. Pärast salvestamist loeb nupp {{ui:Valmis ka võrguta}}; klõpsa siis sellel, et valida {{ui:Salvesta uuesti (võta uusim versioon)}} või {{ui:Eemalda võrguvälise koopia}}. Vt [Töö võrguta](common:offline).
- {{ui:Paber}} annab heleda ekraani ja {{ui:Mudel}} tumeda. 3D-vaade järgib kohe; mudelis ei muutu midagi.
- Ekraanirežiimi nupp ja {{key:Ctrl+Shift+F}} vahetavad tavalise, täisekraani ja täisekraani režiimi, kus ribad on peidetud. {{key:Ctrl+Shift+F}} kasutab igal arvutil klahvi Control, sealhulgas Macil. Kui ribad on peidetud, too need tagasi, viies osuti ekraani ülaservale (või koputades seal). {{key:Esc}} väljub täisekraanist.

## Tööriistariba

Tööriistaribal on viis gruppi. Nupu kohal hoides näed, mida see teeb ja millist klahvi kasutada.

| Grupp | Nupud | Mida nad teevad |
|---|---|---|
| {{ui:Fail}} | {{ui:Uus}}, {{ui:Ava}}, {{ui:Impordi IFC}}, {{ui:Salvesta}}, {{ui:Näidis}} | Alusta mudelit, ava salvestatud `.detailcraft.json` või IFC-fail, salvesta mudel või ava näidisraam |
| {{ui:Paiguta}} | {{ui:Vali}}, {{ui:Tala}}, {{ui:Post}}, {{ui:Diagonaal}}, {{ui:Plaat}}, {{ui:Vundament}}, {{ui:Trepp}} | Tööriist, mida järgmine klõps vaates kasutab |
| {{ui:Ühenda}} | {{ui:Otsaplaadid}}, {{ui:Aluseplaat}}, ja menüüs {{ui:Veel}}: {{ui:Lõikeplaadid}}, {{ui:Skarv}}, {{ui:Sõlmeplaat}}, {{ui:Sarnane}} | Lisa valitud talale, postile või diagonaalile ühendus või kopeeri valitud ühendus igale sarnasele liitekohale |
| {{ui:Muuda}} | {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Veel}} | Liigu muudatuste vahel tagasi ja edasi; kopeeri valik ja kleebi see. {{ui:Veel}} avab menüü koos {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi samasse kohta}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Vali kõik}} ja {{ui:Tühista valik}} punktidega, igaühel oma klahv |
| {{ui:Väljund}} | {{ui:IFC}}, {{ui:NC-failid}}, {{ui:BOM}}, {{ui:Tööjoonis}}, {{ui:Joonised}}, ja menüüs {{ui:Veel}}: {{ui:Painutamine}}, {{ui:Kaalu aruanne faasiti}}, {{ui:KISS-fail valmistamistarkvarale}} | Laadi eksport alla või ava joonislehed |

Nupud ja menüüpunktid, mis praegu ei saa toimida, on hallid ning nende kohal hoides öeldakse põhjus. {{ui:End plates}} nõuab valitud talat, {{ui:Base plate}} valitud posti, {{ui:Similar}} valitud ühendust, {{ui:Shop drawing}} mudelit, millel on detaile, {{ui:Copy}} valitud elementi või vundamenti ning {{ui:Paste}} midagi kopeeritud. Vt [Kopeerimine, kleepimine ja dubleerimine](topic:copy-paste).

## Mudelipaneel (vasak)

- {{ui:Mudel}}: mudeli {{ui:Nimi}}. See nimetab iga salvestatud või eksporditud faili.
- {{ui:Ruudustik}}: ruudustiku jooned ja nende vahed ning {{ui:Rakenda ruudustik}}. Vt [Ruudustike ja tasandite seadistamine](topic:grids-and-levels).
- {{ui:Tasandid}}: üks rida iga tasandi kohta (nimi ja kõrgus mm-des), {{ui:Lisa tasand}} ja {{ui:Rakenda tasandid}}.
- {{ui:Kohandatud profiil}}: tee oma parameetriline lõige. On kinni, kuni seda avad.
- {{ui:Detailimärgised}}: iga detailimärgis mudelis koos profiili, pikkuse ja arvuga. Klõpsa märgisel, et valida esimene sellega detail.

{{ui:Ruudustik}}, {{ui:Tasandid}} ja {{ui:Kohandatud profiil}} kokku voldivad: klõpsa nende pealkirjadel.

## Vaade (keskel)

Vaade näitab mudelit 3D-s. Selle kohal on vaateriba kolme nupu ja loendiga:

- {{ui:3D}}: pöörle mudeli ümber vabalt.
- {{ui:Plaan}}: vaata otse alla ühele tasandile. Nuppude kõrvale ilmub tasandite loend. Kõik, mis on tasandist rohkem kui 1.5 m kõrgemal, lõigatakse ära, et saaksid tasandi selgelt näha ja klõpsata.
- {{ui:Vaade}}: vaata otse ühele tähega ruudustikujoonele (Ruudustik A, Ruudustik B …). Ilmub tähistatud ruudustike loend. Näidatakse ainult selle joone 1 m piires olevat terast.
- Vaateriba parempoolses servas olev nupp suumib kogu mudeli nähtavale.

Väikesed täpid tähistavad iga ruudustiku ristumiskohta igal tasandil. Kui paigutamise tööriist on sees, süttib lähim täpp osuti all ja olekuriba nimetab selle, näiteks „A/2 Tasand 1“. Värvid eristavad elementide tüüpe: postid, talad, diagonaalid ja plaadid igaühel oma värvi, poldid ja ankurdused teist värvi, vundamendid on läbipaistvad ning armatuur joonistatakse torudena. Avad on näidatud tumedate tappidena; lõiked on sisse lõigatud.

Kuidas pöörata, nihutada ja suumida: [Liikumine 3D-vaates](topic:navigate-3d).

Kui mudel on tühi, näitab vaade lühikest loendit „Alusta mudelit“. Salvestatud mudelifaili saad avada ka lohistades selle kuhugi vaatesse.

## Omaduste paneel (paremal)

Selle paneeli sisu sõltub sellest, mida teed, ja pealkiri ütleb, mis see on: „Mudel“, „Paiguta tala“, „Tala b2“, „Otsaplaadi ühendus“, „Aluseplaat“, „Vundament F1“, „3 valitud“ või „Kleebi“.

- **Midagi pole valitud:** mudeli kokkuvõte (elemendid, ühendused, vundamendid, detailid, märgised, poldid, terase ja armatuuri kaal, ruudustikud, tasandid).
- **Paigutamise tööriist on sees:** järgmise detaili valikud (profiil, materjal, asukoht, pööre ja postide puhul {{ui:Ulatub kuni}}), valitud profiili kokkuvõte ning {{ui:Lisa ruudustiku järgi}} vorm, et paigutada ilma vaates klõpsamata.
- **Element on valitud:** selle nimi, profiil, materjal, asukoht, pööre, mõlema otspunkti koordinaadid, märgised, lõikepikkus ja kaal, avad ja lõiked ning nupud ühendustele, selle tööjoonisele ja {{ui:Kustuta}}.
- **Ühendus on valitud:** iga plaadi, polti ja keevise seade, poldid ja keevis, mida see teeb, selle hoiatused ning {{ui:Rakenda sarnastele}}.
- **Vundament on valitud:** selle asukoht ja mõõdud, alumine võrk, algusvardad ja armatuurimärgised, mida see kasutab.
- **Mitu asja on valitud:** mitu iga tüüpi elementi, ühendust ja vundamenti, nende terase kaal ning {{ui:Kopeeri}}, {{ui:Dubleeri}} ja {{ui:Kustuta}}.
- **Kleepimine:** mis on lõikelaual, ning vormid kleepimiseks trükitud nihke järgi või ruudustiku ristumiskohale, mille valid loenditest.

Numbriväljad rakenduvad, kui vajutad {{key:Enter}} või lahkud väljalt. Iga muudatus on üks samm, mida saad tagasi võtta.

## Aruandevahekaardid (all)

- {{ui:Probleemid}}: kõik, mida DetailCraft ei saanud ehitada või mida ta soovib, et sa kontrolliksid, koos nupuga {{ui:Vali}} igal real. Vahekaart näitab arvu sulgudes.
- {{ui:Materjalinimekiri}}: detailid, koosted ning poldid ja ankurvardad koos kaalude ja lingiga {{ui:Laadi alla CSV}}. Klõpsa detailimärgisel, et valida see detail.
- {{ui:Painutusloend}}: iga armatuurimärgis igas vundamendis koos lingiga {{ui:Laadi alla CSV}}.

Kui vahekaart on fokusseeritud, liigutavad {{key:Left}} ja {{key:Right}} vahekaartide vahel.

## Olekuriba

Riba allservas on kolm osa: ruudustiku ristumiskoht osuti all paigutamisel, viimane teade (mis just juhtus või miks midagi keelduti) ning jooksvad summad detailidest, poltidest, terase kaalust ja armatuuri kaalust. Kui tegevus näib midagi mitte tegevat, loe esmalt siit teadet.

Brauseri vahelehe pealkirja alguses on punkt (•), kui mudelil on salvestamata muudatusi.

## Kitsas ekraan

Alla umbes 760 pikslit laiuse ekraani korral veerud pinevad: tööriistariba, vaade, olekuriba, {{ui:Omadused}}, aruandevahekaardid ja viimasena paneel {{ui:Mudel}}. Kerige lehte, et neile jõuda. DetailCraft on paigutatud töölaua- või sülearvutiekraanile; telefon sobib vaatamiseks, mitte detailimiseks.
