---
title: Tixraaca rebar-ka
summary: Cabbirrada birta, cabbirrada qallooca, qaababka, dherer gooyga iyo tiirarka jadwalka qallooca ee DetailCraft isticmaasho.
keywords: rebar, cabbirrada birta, qallooca, dhexroorka qallooca, calaamadaha qaabka, dherer gooyga, jadwalka qallooca, liiska birta, astm a615, aci 318
from: 1583535e
---

## Cabbirrada birta

Waxaa laga soo qaatay ASTM A615/A615M Miiska 1 (magacyada inch-pound). Millimitirka iyo kg/m waa beddel saxda ah oo ka yimid qiimayaasha inch iyo lb/ft ee la daabacay. Liisaska waxay muujinayaan cabbir kasta sida, tusaale ahaan, "#5 (15.9 mm)".

| Birta | Dhexroor (mm) | Culeys (kg/m) | Bedka (mm²) | Dhexroorka gudaha ee qallooca | Lugta qallooca 90°, dibadda ilaa dibadda (mm) |
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

Ee [Dejinta DetailCraft](topic:settings) ({{ui:Rebar}}), **magacyada birta ASTM** ayaa birahan ku muujin kara magacyadooda metric-ka A615M ee soft-ka ah: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (birtaas isku mid bay yihiin; ACI 315-99 Miiska 1 labadaba wuu liisanayaa).

### Birta metric-ka (BS 4449)

| Birta | Dhexroor (mm) | kg/m | Radiyaska ugu yar ee qallooca r (mm) | Lugta qallooca = dhismaha dhammaadka P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Culeysku waa qaybta magacaaban oo lagu dhufto 7850 kg/m³. Radiyaska iyo dhismaha dhammaadka waa ugu yarista BS 8666:2020 (miiskeeda cabbirrada ugu yar; dhexroorkii hore waa 2r). Aasaaska birta BS-ka ku jirta waxay helaan lugaha qallooca P iyo dherer gooyga iyada oo la raacayo qaacidooyinka BS 8666 ee hoose. Marka aad dejinta ku doorato birta Yurub, aasaasyada cusub waxay ka bilaabanayaan mataanno H16 iyo birta bilowga H20 oo ku jira kaadhida C30/37.

## Qallooca

Birta ASTM: qallooca 90° ee caadiga ah ee ACI 318-19 Miiska 25.3.1: dhexroorka gudaha ee qallooca 6 db oo loogu talagalay #3 ilaa #8, iyo 8 db oo loogu talagalay #9 ilaa #11, iyo fidin toosan oo 12 db ah oo ka dambeeya qallooca. Lugta qallooca, oo lagu cabbiray dibadda ilaa dibadda, waa badhka dhexroorka qallooca + db + 12 db.

Haddii qallooca birta mataanka aanu ku habboonayn qotada aasaaska gudaha daboolka, DetailCraft wuu gaabinayaa lugta si ay ugu habboonaato oo digniin ayuu liistaa.

## Qaababka

DetailCraft wuxuu kaydiyaa saddex qaab. Jadwalka qallooca wuxuu ku daabacaa iyagoo ah calaamadaha DetailCraft, nooca ACI 315 ama calaamadaha qaabka BS 8666: dooro **Calaamadaha qaabka jadwalka qallooca** ee [Dejinta DetailCraft](topic:settings) ({{ui:Rebar}}).

| Calaamad | Qaab | Cabbirrada |
|---|---|---|
| S | Toosan | A = dherer |
| L | Hal qallooc 90° | A = lugta weyn, B = lugta qallooca, labaduba dibadda ilaa dibadda |
| U | Laba qallooc 90° isla dhinac | A = dhexda, B iyo C = labada lug, dibadda ilaa dibadda |

Birta mataanka oo leh {{ui:End hooks}} la shaqeeyo waa U; aan lahayn waa S. Birta bilowga oo leh {{ui:Hook at the bottom}} la shaqeeyo waa L; aan lahayn waa S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | lambar nooc ma leh |
| L | 11, L = A + B − 0.5r − d | lambar nooc ma leh: sawirku ma leh birta leh hal qallooc oo kaliya |
| U | 21, A iyo C lugaha, B dhexda: L = A + B + C − r − 2d | Nooca 2, qallooca A iyo G, B toosan |

Marka aad isticmaalayso calaamadaha BS 8666 ama ACI 315, tiirarka A, B iyo C ee jadwalku waxay raacaan xarfaha caadigaas (dhexda U waa B).

## Dherer gooyga

Birta BS 4449 ahaan, dherer gooyga waa qaacidada BS 8666 ee calaamadda qaabka birta (kor ku xusan). Birta ASTM ahaan, waa dhererka saxda ah ee khadka dhexe ee birta: qaybaha toosan iyo qallooca oo ah qaws ah oo dhexroorka qallooca badhkiisa, oo lagu daro badhka dhexroorka birta. Lama shaqeeyo iyada oo laga soo qaadayo miis ka jara qallooca, sidaas darteed waxay ka duwan kartaa dhowr millimitir jadwal miis isticmaala.

## Qaabaynta

- Mataanka hoose: birta dhinaca L waxay sameysaa lakabka hoose, birta dhinaca B waxay ku korraysaa. Kulli koox waxaa loo kala firdhiyaa si siman aasaaska gudihiisa daboolka, masaafada aad siiso ama ka yar, oo ugu yaraan laba birood.
- Birta bilowga: shabakad birta ah oo dhinaca L iyo dhinaca B ah, masaafooyinka aad siiso, oo dhexda aasaaska lagu dhejiyay, istaagta mataanka oo ka soo baxda dusha sare masaafada aad siiso. Qallooc kasta wuxuu u jeedaa dibadda.

## Hubinta

| Hubin | Xeerka | Natiijada |
|---|---|---|
| Booska birta | Daboolka labada dhinac wuxuu bixiyaa meel birta u ah | Diidmo haddii aanu jirin |
| Qoto laba lakab | Qotada ka dhimista laba daboolood waxay haysaa labada lakab ee mataanka | Diidmo haddii aanu jirin |
| Birta bilowga oo ku habboon | Shabakadda birta bilowga waxay ku habboonaatay daboolka gudihiisa | Diidmo haddii aanu jirin |
| Masaafada furan | Ugu yaraan intii ka weyn 25.4 mm iyo db (ACI 318-19 25.2.1; cabbirka walxaha isku dhafka lama hubiyo) | Digniin |
| Qotada qallooca | Lugta qallooca waxay ku habboonaatay qotada gudaha daboolka | Digniin, lugta waa la gaabiyay |
| Qallooyinka birta bilowga | Qallooyinku waxay ku sii jiraan dibadda daboolka | Digniin |

## Tiirarka jadwalka qallooca

Gallka {{ui:Bending schedule}} iyo CSV-ga ay leedahay tiirarkan: Calaamadda birta, Cabbirka, Qaabka, A (mm), B (mm), C (mm), Tirada, Dherer gooyga (mm), Dherer guud (m), kg/m, Miisaanka mid kasta (kg), Miisaanka guud (kg), Loo adeegsaday. Safka u dambeeya wuxuu soo koobayaa tirada, dhererka iyo miisaanka.
