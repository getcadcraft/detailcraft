---
title: Armuokite stačiakampę betoninę koloną
summary: Pavyzdys, kaip detalizuoti stačiakampę betoninę koloną DetailCraft: ją išdėstyti, suteikti išilginius strypus ir surišimus, perskaityti patikrinimus, persiklojimą virš jos bei strypų žymas ir nubraižyti jos dirbtuvių lapą.
keywords: betoninė kolona, stačiakampė kolona, kolonos armavimas, išilginiai strypai, vertikalūs strypai, surišimai, kilpos, skersiniai surišimai, persiklojimas, sujungimas, paleidimo strypai, kolonos plieno santykis, 1 procentas, 8 procentai, surišimų žingsnis, ACI 318-19 25.7.2, EN 1992-1-1 9.5, dirbtuvių brėžinys, strypų žymos, 8C1, 3C2
from: aee2a3ca
---

Šis skyrius paima vieną kvadratinę koloną nuo nieko iki patikrintos, nubraižytos ir surašytos detalės. Bendrosios sijų, perdangų ir sienų taisyklės yra [Detalizuokite gelžbetonį](topic:reinforced-concrete); čia – kolonos pusė su skaičiais, kuriuos galite atkartoti.

:::warning
DetailCraft detalizuoja jums duotus strypus. Jis jų neprojektuoja. Toliau pateikti strypai yra pradinės pavyzdžio reikšmės, ne rekomendacija: projekto inžinierius parenka dydį, kiekį ir žingsnį.
:::

## Kas čia yra kolona

Stačiakampė kolona turi plotį (išilgai jos vietinės x ašies) ir gylį skersai (išilgai vietinės y ašies), grynąją dangą iki surišimų, išilginius strypus ant kiekvieno paviršiaus ir uždarus surišimus. Pasukus ją, pasisuka visa; paviršiai lieka „ploties paviršius“ ir „gylio paviršius“.

- Išilginiai strypai nurodomi kaip skaičius ant ploties paviršiaus ir skaičius ant gylio paviršiaus. Kampiniai strypai skaičiuojami abiem, todėl 3 ir 3 duoda 8 strypus; 4 ir 4 – 12.
- Surišimai yra uždari stačiakampiai su dviem kabliukais viename kampe, 135° arba 90°. Pirmasis surišimas yra nustatytu atstumu virš grindų (ir žemiau kito), galo zonose žingsnis tankesnis, viduryje – platesnis.
- Ką strypai daro viršuje: tęsiasi ir sujungiami su strypais virš, įlenkiami su 90° kabliukais į perdangą arba baigiasi po viršumi.

## Pavyzdinė kolona

400 × 400 mm kolona, 3600 mm tarp viršutinės ir apatinės perdangų, #8 išilginiai strypai, #3 surišimai, 40 mm grynoji danga, f'c 28 MPa, fy 420 MPa, ACI 318-19, vidinė.

1. Atidarykite skirtuką {{ui:Betonas}} ir nustatykite tinklelio linijas bei lygius, ant kurių stovi kolona (kairysis skydelis).
2. {{ui:Pridėti pagal ašis}}: pasirinkite {{ui:Betoninė kolona}}, pasirinkite tinklelio sankirtą ir du lygius, nustatykite {{ui:Plotis (mm)}} ir {{ui:Gylis per (mm)}} į 400, ir pasirinkite {{ui:Pridėti}}.
3. Skydelyje {{ui:Savybės}} nustatykite:
   - {{ui:Grynasis apsauginis sluoksnis (mm)}} 40;
   - {{ui:Išilginiai strypai}} #8, {{ui:Strypai ploties paviršiuje}} 3, {{ui:Strypai gylio paviršiuje}} 3;
   - {{ui:Surišimai}} #3, {{ui:Kabliukai}} 135°, {{ui:Žingsnis tarp (mm)}} 300, {{ui:Galo zonos ilgis (mm)}} 600, {{ui:Žingsnis galo zonose (mm)}} 150, {{ui:Pirmoji nuo paviršiaus (mm)}} 50;
   - {{ui:Strypai viršuje}} – {{ui:Tęsti ir persiklot su viršuje esančiais strypais}}.

Kiekvienas pakeitimas – vienas atšaukimo žingsnis.

### Ką gausite

| Dalis | Rezultatas |
|---|---|
| Išilginiai strypai | 8 strypai #8 (3 × 3 žiedas), kiekvienas 4375 mm ilgio: 3600 mm kolona ir 775 mm persiklojimas virš jos |
| Persiklojimas | Gniuždymo persiklojimui reikia 757 mm (ACI 318-19 25.5.5.1, fy 420), numatyta 775 mm: reikalingas dydis suapvalintas iki kito 25 mm |
| Surišimai | 17 surišimų #3, kiekvieno pjovimo ilgis apie 1359 mm, 150 mm žingsnis dviejose 600 mm galo zonose ir 300 mm tarp jų |
| Plieno santykis | 2.5 % bruto pjūvio (ribos nuo 1 % iki 8 %, ACI 318-19 10.6.1.1) |
| Grynasis strypų tarpas | 112 mm (reikia bent 40 mm, ACI 318-19 25.2.3) |
| Surišimų žingsnis | 300 mm (leidžiama 400 mm: mažiausias iš 16 strypo skersmenų, 48 surišimo skersmenų ir mažesnės pusės, ACI 318-19 25.7.2.1) |
| Surišimo dydis | #3 (leidžiama mažiausiai 9.5 mm, ACI 318-19 25.7.2.2) |

Visi jie yra elemento sąraše {{ui:Patikrinimai}}; persiklojimas taip pat yra {{ui:Persiklojimai ir įtvirtinimas}}.

## Skersiniai surišimai

Su vienu perimetriniu surišimu laikomi tik kampiniai strypai. ACI 318-19 25.7.2.3 leidžia vidurinį strypą paviršiuje palikti be atramos, jei jis yra ne toliau kaip 150 mm grynai nuo kampinio strypo. Su 3 strypais paviršiuje, kaip aukščiau, tai įvykdyta. Su 4 ar daugiau strypų paviršiuje – ne, ir DetailCraft tai praneša kaip įspėjimą ({{ui:Patikrinimai}} ir Problemos): reikia „skersinių surišimų“. **Skersiniai surišimai dar nenubraižyti**: įdėkite juos brėžinyje rankiniu būdu arba pasirinkite mažiau strypų paviršiuje.

EN 1992-1-1 atveju DetailCraft tikrina strypo dydį (bent 8 mm), strypų skaičių (bent 4), plieno plotą (nuo 0.2 % iki 4 % pjūvio), grynąjį tarpą ir surišimų žingsnį (9.5.2 ir 9.5.3).

## Persiklojimas, pamatas ir kolona apačioje

- Kai **modelio pamatas stovi po kolona**, kolona persiklioja su pamato paleidimo strypais, ir jų persiklojimas taip pat tikrinamas.
- Kai **kita modelio kolona stovi po ja**, ji persiklioja su tos kolonos strypais.
- Įveskite savo {{ui:Persiklojimo ilgis (mm, 0 = pagal poreikį)}}, kad perrašytumėte; trumpesnis nei reikia – problema, ir lentelėje pažymimas *.
- Gniuždymo persiklojimai naudojami pagal numatytuosius nustatymus ({{ui:Gniuždymo persiklojimas}} nustatymuose); pasirinkite {{ui:Tempimo persiklojimas}}, kai kolona gali būti tempiama.

## Žymos, žiniaraštis ir dirbtuvių lapas

Identiški strypai turi vieną žymą: virš esančios kolonos išilginiai strypai yra 8C1, jos surišimai – 17C2 (pirmiausia skaičius, tada rūšies raidė C kolonai ir einamasis numeris). Jie rodomi skirtuke {{ui:Lenkimo žiniaraštis}}, su pjovimo ilgiu ir svoriu, ir CSV faile iš {{ui:Išvestis}} › {{ui:Daugiau}} › {{ui:Lenkimas}}.

Pasirinkite {{ui:Dirbtuvių brėžinys}} šalia kolonos lapui su kolona fasade (kiekvienas strypas, jo žyma, surišimų zonos ir persiklojimas pažymėti matmenimis) ir pjūviu viduryje, o po to – strypų lenkimo lapas. Išsaugokite {{ui:Šis lapas kaip PDF}}.

## Ko tai nedaro

- Apvalių kolonų, spiralių ir nestačiakampių kolonų: nepadaryta.
- Vidinių kampinių ir skersinių surišimų pjūvio viduje bei seisminio detalizavimo (ACI 318-19 18 skyrius): nepadaryta.
- Sujungimų pagal jūsų pasirinktas vietas ar su poslinkiu: visi strypai persiklioja vienoje pjūvio vietoje.
- Ar strypų pakanka apkrovai: tai inžinieriaus projektas.
