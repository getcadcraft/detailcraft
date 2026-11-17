---
title: Pridėti pagrindo plokštes ir inkarinius strypus
summary: Įdėkite suvirintą pagrindo plokštę su keturiais inkariniais strypais po kolona, nustatykite jos matmenis ir nukopijuokite ją į visas panašias kolonas.
keywords: pagrindo plokštė, pagrindo plokštė, inkariniai strypai, inkariniai varžtai, tvirtinimo varžtai, kolonos pagrindas, pamato varžtai, panašūs
from: 619ebc64
---

Pagrindo plokštės jungtis įdeda plokštę po kolona, nukerta koloną per plokštės storį, suvirina abi dalis ir prideda keturis inkarinius strypus per skyles plokštėje.

:::warning
Dydžiai yra pradinės reikšmės, o ne projektas. DetailCraft netikrina gniuždymo, strypų stiprio ar įleidimo į betoną.
:::

## Pridėti pagrindo plokštę

1. Pasirinkite {{ui:Pasirinkti}} ({{key:V}}) ir spustelėkite koloną. Ji turi būti vertikali.
2. Pasirinkite {{ui:Pagrindo plokštė}} grupėje {{ui:Jungti}} arba {{ui:Pridėti pamato plokštę}} skydelyje {{ui:Savybės}}.
3. Būsenos juostoje rašoma „Pagrindo plokštė pridėta su keturiais inkariniais strypais.“ Nauja jungtis pažymima.

Kolonai gali būti viena pagrindo plokštė. Jei ji jau turi, būsenos juostoje rašoma „Ši kolona jau turi pagrindo plokštę.“

## Keisti

Pasirinkite pagrindo plokštę (spustelėkite plokštę arba strypą). Skiltyje {{ui:Plokštė, varžtai ir suvirinimas (mm)}}:

| Nustatymas | Numatytoji reikšmė | Ką daro |
|---|---|---|
| Plokštės storis | 25 | Kolona sutrumpinama tiek |
| Plokštės ilgis | 450 | Išilgai kolonos gylio |
| Plokštės plotis | 400 | Skersai kolonos |
| Strypo skersmuo | 20 | Inkarinio strypo dydis |
| Skylės skersmuo | 33 | Skylė plokštėje |
| Varžto klasė | F1554 Gr 36 | Strypo klasė, kaip tekstas |
| Strypų žingsnis (išilgai gylio) | 350 | Tarp strypų centrų, išilgai plokštės ilgio |
| Strypų žingsnis (skersai) | 300 | Tarp strypų centrų, skersai |
| Strypo kyšulys virš plokštės | 100 | Nuo plokštės viršaus iki strypo viršaus |
| Strypo įleidimas po plokšte | 450 | Nuo plokštės apačios žemyn į betoną |
| Kampinės siūlės dydis | 8 | Aplink visą kolonos pagrindą |
| Plokštės medžiaga | A36 | Tekstas |
| Skiedinio tarpas | 0 | Tarpas tarp betono viršaus ir plokštės apačios |
| Standikliai | Nėra | Pasirinkite Nėra, 2 (vienoje linijoje su sienele) arba 4 (be to statmenai jai); žr. žemiau |
| Standiklio storis, aukštis | 12, 150 | |
| Šlyties kaiščio gylis | 0 | Kiek kaištis siekia po plokšte; 0 = be kaiščio |
| Šlyties kaiščio storis, plotis | 25, 150 | |
| Plokštinės poveržlės | Nėra | Ant kiekvieno strypo arba nėra |
| Poveržlės dydis, storis | 0, 0 | 0 = mažiausias dydis pagal AISC Design Guide 1 strypui |

Strypo ilgis = įleidimas + skiedinio tarpas + plokštės storis + kyšulys. Su numatytosiomis reikšmėmis tai 575 mm.

## Pagrindo detalės: skiedinys, standikliai, šlyties kaištis, poveržlės

Visi keturi išjungti naujoje pagrindo plokštėje ir pagrindo plokštėse iš modelių, sukurtų prieš DetailCraft 0.4.

- **Skiedinio tarpas.** Plokštė stovi tiek virš betono viršaus, o strypai pailgėja tiek pat. AISC Design Guide 1 (2.10) rekomenduoja 1 in. ant baigto grindinio ir 1½–2 in. ant pamato ar atramos; didesnėms plokštėms ir plokštėms su šlyties kaiščiu – daugiau.
- **Standikliai.** Vertikalios plokštės, suvirintos prie kolonos ir pagrindo plokštės, nuo kolonos paviršiaus iki plokštės krašto, kaip stačiakampiai (kol kas be nuožulnumo ar nuokrypos). **2** stovi vienoje linijoje su sienele, už kiekvieno flanšo; **4** prideda dar du, statmenus sienelei, tarp flanšų, iki plokštės šonų. Vamzdinėje kolonoje jie stovi kiekvieno paviršiaus viduryje. Kiekvienas suvirintas prie kolonos ir plokštės abiejose pusėse.
- **Šlyties kaištis.** Plokštė, suvirinta visu perimetru po pagrindo plokšte, išilgai kolonos gylio, centruota. DetailCraft įspėja, jei ji nėra gilesnė už skiedinio tarpą. Ji neišpjauna lizdo pamate; todėl [susidūrimų patikra](topic:clash-check) palieka kaištį ir pamatą nepaliestus.
- **Plokštinės poveržlės.** Kvadratinė plokštinė poveržlė ant kiekvieno strypo, gulinti ant pagrindo plokštės, ir kolonos surinkime įrašyta kaip laisva (pristatoma su kolona, ne suvirinta; Design Guide 1, 2.6). Jei dydis ir storis 0, DetailCraft paima mažiausią poveržlę iš AISC Design Guide 1, 2-osios laidos, 2.3 lentelės strypui; metrinis strypas gauna kitą colių dydį (M20 strypas – 7/8 in. eilutę: 2½ in. × 5/16 in.). Savybių skydelyje rodomas naudotas dydis. Poveržlės skylė lygi strypo skersmeniui + 1/16 in.: tai DetailCraft pasirinkimas, lentelė jos nenurodo. DetailCraft įspėja, kai strypai gali nekyšoti pakankamai, kad tilptų poveržlė ir veržlė (kyšulys mažesnis nei poveržlės storis + strypo skersmuo).

Design Guide 1, 2.3 lentelė taip pat rekomenduoja strypo skylę plokštėje: 1-5/16 in. ¾ in. strypui, 1-9/16 in. ⅞ in., 1-13/16 in. 1 in. DetailCraft jūsų skylės dydžio nekeičia.

Įspėjimai rodomi ir tada, kai strypų skylės yra arčiau nei 1.2 × skylės skersmuo iki plokštės krašto, kai strypai patenka į kolonos kontūrą arba kai plokštė mažesnė už koloną.

## Kopijuoti į panašias kolonas

1. Pasirinkite pagrindo plokštę.
2. Pasirinkite {{ui:Taikyti panašiems (n)}} arba {{ui:Panašūs}} grupės {{ui:Jungti}} meniu {{ui:Daugiau}}.
3. Kiekviena vertikali kolona su tuo pačiu profiliu, kuri neturi pagrindo plokštės ir nestovi ant kitos kolonos, gauna kopiją.

## Pagrindo plokštės ir pamatai

Pagrindo plokštei pamatas nereikalingas, o pamatas nežino apie virš jo esančią pagrindo plokštę: inkariniai strypai nesusieti su pamato armatūra. Pamatus įdėkite su {{ui:Pamatas}}; žr. [Pamatų su armatūra įdėjimas](topic:footings-and-rebar).
