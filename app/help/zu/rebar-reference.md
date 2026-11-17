---
title: Isethulo sezinti zokuqinisa
summary: Usayizi wezinti, izilinganiso zamahhuku, amakhodi esimo, ubude bokusika kanye nezikholomu zohlelo lokugoba ezisetshenziswa yi-DetailCraft.
keywords: insimbi yokuqinisa, usayizi wezinti, amahhuku, ububanzi bokugoba, amakhodi esimo, ubude bokusika, uhlelo lokugoba, uhlu lwezinti, astm a615, aci 318
from: 1583535e
---

## Usayizi wezinti

Kusuka ku-ASTM A615/A615M Table 1 (izinhlobo ze-inch-pound). Ama-millimeter kanye ne-kg/m ayizinguquko ezinembile zamanani e-inch ne-lb/ft ashicilelwe. Uhlu lubonisa ngayinye usayizi njengo, isibonelo, "#5 (15.9 mm)".

| Inti | Ububanzi (mm) | Isisindo (kg/m) | Indawo (mm²) | Ububanzi bokugoba ngaphakathi | Umlenze wehhuku, kusuka ngaphandle kuya ngaphandle (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Ku-[Izilungiselelo ze-DetailCraft](topic:settings) ({{ui:Rebar}}), **Amagama ezinti ze-ASTM** angabonisa lezi zinti ngamagama azo e-soft-metric A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (izinti ezifanayo; i-ACI 315-99 Table 1 ibhala zombili).

### Izinti zemethrikhi (BS 4449)

| Inti | Ububanzi (mm) | kg/m | Irediyasi encane yokugoba r (mm) | Umlenze wehhuku = ukuphuma kwesiphetho P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Isisindo sinikezwa ngokuphindaphinda isigaba esiyisisekelo nge-7850 kg/m³. Irediyasi kanye nokuphuma kwesiphetho ngamanani ancane e-BS 8666:2020 (ithebhu yobukhulu obuncane; ububanzi bangaphambili bu-2r). Izisekelo ezinezinti ze-BS zithola imilenze yamahhuku nge-P kanye nobude bokusika ngezifomula ze-BS 8666 ezingezansi. Ukukhetha insimbi yaseYurophu ezilungiselelweni kuqala izisekelo ezintsha ngemethi ye-H16 kanye nezinti zokuqala ze-H20 ekhonkolithini ye-C30/37.

## Amahhuku

Amahhuku e-ASTM: amahhuku ajwayelekile angu-90° kusuka ku-ACI 318-19 Table 25.3.1: ububanzi bokugoba ngaphakathi buyi-6 db ku-#3 kuya ku-#8 kanye ne-8 db ku-#9 kuya ku-#11, nesandiso esiqondile esingu-12 db ngemuva kokugoba. Umlenze wehhuku, ulinganiswa kusuka ngaphandle kuya ngaphandle, uyingxenye yesibili yobubanzi bokugoba + db + 12 db.

Uma ihhuku lenti yemethi lingafaki ngaphakathi kojuqu lesisekelo ngaphakathi kokumbozwa, i-DetailCraft ifinyeza umlenze ukuze ulingane futhi ibhale isexwayiso.

## Izimo

I-DetailCraft igcina izimo ezintathu. Uhlelo lokugoba zibonisa njengamakhodi e-DetailCraft, njengezinhlobo ze-ACI 315 noma njengamakhodi esimo e-BS 8666: khetha **Amakhodi esimo sohlelo lokugoba** ku-[Izilungiselelo ze-DetailCraft](topic:settings) ({{ui:Rebar}}).

| Ikhodi | Isimo | Izilinganiso |
|---|---|---|
| S | Okuqondile | A = ubude |
| L | Ukugoba okukodwa okungu-90° | A = umlenze omkhulu, B = umlenze wehhuku, kokubili kusuka ngaphandle kuya ngaphandle |
| U | Izigoba ezimbili ezingu-90° ohlangothini olufanayo | A = maphakathi, B kanye ne-C = imilenze emibili, kokubili kusuka ngaphandle kuya ngaphandle |

Izinti zemethi ne-{{ui:End hooks}} evuliwe zingu-U; ezingenayo, zingu-S. Izinti zokuqala ne-{{ui:Hook at the bottom}} evuliwe zingu-L; ezingenayo, zingu-S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | akukho inombolo yohlobo |
| L | 11, L = A + B − 0.5r − d | akukho inombolo yohlobo: umfanekiso awunayo inti enehhuku elilodwa |
| U | 21, A no-C imilenze, B maphakathi: L = A + B + C − r − 2d | Uhlobo 2, amahhuku A no-G, B eqondile |

Ngamakhodi e-BS 8666 noma e-ACI 315, izikholomu ze-A, B no-C zilandela inkomba yaleso sitandard (maphakathi we-U yi-B).

## Ubude bokusika

Ezintini ze-BS 4449 ubude bokusika yifomula ye-BS 8666 yekhodi lesimo senti (ngenhla). Ezintini ze-ASTM kuyubude obuqondile bomugqa ophakathi wenti: izingxenye eziqondile kanye nokugoba njengamasongo ngohhafu wobubanzi bokugoba kanye nohhafu wobubanzi benti. Ayibalwa ngethebhu yokukhishwa kokugoba, ngakho ingahluka ngamamilimitha ambalwa kuhlu olusebenzisa lelo thebhu.

## Ukubekwa

- Imethi esezansi: izinti ezihamba ngo-L zakha ungqimba olungezansi, izinti ezihamba ngo-B zihlala phezu kwazo. Ngasinye isethi isatshalaliswa ngokulinganayo kuso sonke isisekelo ngaphakathi kokumbozwa, ngamabanga onikezayo noma aseduze kakhulu, nezinti ezimbalwa zibe ezimbili.
- Izinti zokuqala: igridi yezinti ezihamba ngo-L nango-B ngamabanga onikezayo, zigxile esisekelweni, zime phezu kwemethi futhi ziphume phezu kwesiphezulu ngokuphuma onikezayo. Ihhuku ngalinye libheka ngaphandle.

## Ukuhlola

| Ukuhlola | Umthetho | Umphumela |
|---|---|---|
| Indawo yezinti | Ukumbozwa ngazo zombili izinhlangothi kusala indawo yezinti | Kuyenqatshwa uma kungenjalo |
| Ukujula kwezingqimba ezimbili | Ukujula ngaphandle kwezimbozo ezimbili kubamba izingqimba zemethi zombili | Kuyenqatshwa uma kungenjalo |
| Izinti zokuqala zilingana | Igridi yezinti zokuqala ilingana ngaphakathi kokumbozwa | Kuyenqatshwa uma kungenjalo |
| Ibanga elicacile | Okungenani okukhulu phakathi kuka-25.4 mm no-db (ACI 318-19 25.2.1; usayizi wezinhlayiya awuhlolwa) | Isexwayiso |
| Ukujula kwehhuku | Umlenze wehhuku ulingana ngaphakathi kokujula kokumbozwa | Isexwayiso, umlenze unciphisiwe |
| Amahhuku okuqala | Amahhuku ahlala ngaphandle kokumbozwa | Isexwayiso |

## Izikholomu zohlelo lokugoba

Ithebhu {{ui:Bending schedule}} kanye ne-CSV yayo zinezikholomu lezi: Ukumaka kwenti, Usayizi, Ukwakheka, A (mm), B (mm), C (mm), Inani, Ubude bokusika (mm), Ubude bonke (m), kg/m, Isisindo ngasinye (kg), Isisindo sonke (kg), Okusetshenziselwa. Umugqa wokugcina ufingqa inani, ubude kanye nesisindo.
