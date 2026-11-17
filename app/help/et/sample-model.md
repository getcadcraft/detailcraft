---
title: Uuri näidisraami
summary: Ava sisseehitatud kahe väljaga raam ja kasuta seda, et õppida, mida DetailCraft loob, märgistest NC-failideni.
keywords: näidis, näide, demo, raam, õpi, ekskursioon, proovi
from: 5c5944dd
---

Näidisraam on väike ja terviklik mudel: iga liiki asja, mida DetailCraft ehitab, esineb vähemalt üks kord. See on kiireim viis rakendust õppida ja eksporti enne testida, kui sellele loodad.

## Ava see

1. Vali rühmast {{ui:Fail}} {{ui:Näidis}}.
2. Kui praegusel mudelil on salvestamata muudatusi, vali {{ui:Salvesta esmalt}} või {{ui:Loobu muudatustest}}.
3. Olekuriba ütleb: „Näidisraam: 6 posti aluseplaatidega, 4 talad otsaplaatidega, diagonaal, 7 vundamenti armatuuriga.“

Näidis avaneb uue mudelina nimega „Näidisraam“. See ei muuda midagi muud ja sellel pole tagasivõtmist.

## Mis selles on

- **Ruudustikud** 1, 2, 3 6000 mm kaugusel ja A, B 7000 mm kaugusel. **Tasandid** Tasand 1 nullil ja Tasand 2 kõrgusel 4000.
- **Kuus posti**, W12x50, tasandilt 1 tasandile 2 igas ristumiskohas, igaüks 25 mm aluseplaadil neli ankruvarrast.
- **Neli talat**, W16x26, tasandil 2 mööda ruudustiku jooni A ja B, terase ülaosa tasandil, mõlemas otsas tasase poltidega kinnitatud otsaplaadiga (kokku kaheksa).
- **Üks diagonaal**, HSS4x4x1/4, tasandilt 1 punktist A/1 üles punkti A/2 tasandil 2.
- **Kuus plaatvundamenti**, 2000 x 2000 x 600, üks iga posti all, mõlemas suunas konksudega alumise võrguga.
- **Veel üks vundament** raami kõrval, 2400 x 1800 x 600, kuue konksudega ootevarrasega, mis seisavad püsti betoonsamba jaoks.

## Proovi järgmist

1. Klõpsa talal. Loe selle {{ui:Detailimärgis}}, {{ui:Koost}}, {{ui:Lõikepikkus}} ja {{ui:Lühendus}}: lõikepikkus on lühem kui 6000 mm ruudustiku samm, sest iga otsaplaat lühendab talat posti sügavuse poole ja plaadi paksuse võrra.
2. Klõpsa postil. Jaotises {{ui:Augud}} on loetletud otsaplaatide tehtud augud selle flantsis („8 auku ühendustest“; keskmistel postidel on 16, üks komplekt igas flantsis).
3. Vasakul asuvas loendis {{ui:Detailimärgised}} näed, et kõik neli talat jagavad ühte märgist: need on sama terasetükk. Nurgapostid jagavad samuti märgist, kuigi nende augud on vastupidi, sest post, mis on otsast-otsa pööratud, on sama tükk. Keskmised postid, mille aukud on mõlemas flantsis, saavad teise märgise.
4. Klõpsa otsaplaadil (või ühel selle poltidest). {{ui:Omadused}} paneel näitab plaadi, polti ja keevise sätteid, poltide, mida see teeb (koos pikkusega, mis arvutatakse haardest), ja kõiki servakauguse hoiatusi.
5. Ava vahekaart {{ui:Materjalinimekiri}}. Detailid, koosted (tala koos kahe otsaplaadiga on üks koost) ning poldid ja ankruvardad on loetletud kaaludega. Peaksid nägema kuut detailimärki: c1 (kaks keskmist posti) ja c2 (neli nurgaposti), mõlemad W12x50 pikkusega 3975 mm; b1, neli W16x26 talat pikkusega 5650 mm; br1, diagonaal; p1, kaheksa PL20x180 otsaplaati; ja p2, kuus PL25x400 aluseplaati. Kinnitusdetailid on 64 polti 20 x 70 A325 ja 24 ankruvarrast 20 x 575.
6. Ava vahekaart {{ui:Painutusloend}}. Kuus identset vundamenti jagavad varraste märgiseid; samba vundament lisab oma.
7. Klõpsa diagonaalil ja vaata rühma {{ui:Väljund}}: {{ui:Tööjoonis}} on hall (pole saadaval), sest tööjoonised katavad seni ainult I-profiile ja plaate.
8. Vali {{ui:NC-failid}}. ZIP-fail sisaldab faili iga I-profiili ja plaadi märgise jaoks; olekuriba loetleb diagonaali märgise kui kirjutamata.
9. Vali {{ui:IFC}} ja ava fail mis tahes IFC-vaatajas, et kontrollida, kuidas su muu tarkvara seda loeb.

## Kasuta lähtepunktina

Näidis on tavaline mudel. Muuda seda, seejärel anna sellele uus nimi väljal {{ui:Nimi}} ja salvesta uue nimega klahviga {{key:Mod+S}}.
