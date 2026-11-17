---
title: Ikhathalogi yeprofayili
summary: Usayizi wensimbi wakha wonke, indlela amagama eprofayili abhalwa ngayo, lapho izilinganiso zivela khona, nokuthi amapuleti nezigaba ezenziwe ngezifiso zibizwa kanjani.
keywords: amaprofayili, izigaba, ikhathalogi, usayizi, w shapes, wide flange, s shapes, ichaneli, i-engeli, hss, ithyubhu, ipayipi, ipe, hea, heb, upn, uk, british, ub, uc, pfc, ea, uea, i-engeli elingalingani, shs, rhs, chs, cold formed, hot finished, blue book, ipuleti, aisc, en 10365, ukuqamba amagama
from: cd9b2bc3
---

I-DetailCraft inosayizi abangu-2,311 wakhiwe ngaphakathi, ngamunye ukopishwe kwithebhula elishicilelwe futhi wahlolwa yizivivinyo zohlelo: indawo ebalwa ngezilinganiso kufanele ihambisane nendawo eshicilelwe, nesisindo esishicilelwe kufanele sihambisane nale ndawo ephindwe ngokuminyana kwensimbi. Amapuleti namaprofayili wezifiso yakhiwa ngezilinganiso zawo.

## Ukuqamba amagama

- **Amashepu ase-US** abhalwa njengoba i-AISC Manual iwashicilela, ngo-x omncane: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Ukuthayipha akubaluleki ngamagama amakhulu noma amancane.
- **Ipayipi** libhalwa njengoba kunjalo kudathabhesi ye-AISC: Pipe4STD, Pipe4XS, Pipe4XXS (ejwayelekile, eqinile kakhulu, eqinile kakhulu kakhulu).
- **Amashepu aseYurophu** abhalwa njengoba kunjalo ku-EN 10365: IPE200, HEA240, HEB300, UPN200 (ngaphandle kwesikhala).
- **Amashepu aseNgilandi** abhalwa ngomndeni kuqala, bese kulandela usayizi we-Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Amathubhu ayisakhiwo esibandayo aqala nge-CF: CFSHS100x100x5.0. Ukuthayipha njengoba amadrowing ngokuvamile esho kuyasebenza futhi: 305x165x40 UB, L100x100x10, SHS100x5.
- **Amapuleti** ayi-`PL<thickness>x<width>` ngamamilimitha: PL20x200 ingu-20 mm ukuqina nango-200 mm ububanzi. Noma yisiphi usayizi wethuluzi le-{{ui:Ipuleti}} uyasebenza.
- **Iphrofayili yezifiso** inegama olinika lona, uma nje lingeyona igama lekhathalogi futhi lingabonakali njengegama lepuleti.

Ezinhlu ze-{{ui:Iphrofayili}}, ikhanda lalo ngalinye liveza umthombo wayo, isibonelo "W shapes — AISC Shapes Database v16.0".

## Imithombo

| Iqoqo | Umthombo | Amanothi |
|---|---|---|
| W shapes, S shapes, Amachaneli (C), Ama-engeli (L), HSS, Pipe | I-AISC Shapes Database v16.0 | Izilinganiso eziguqulwe ukusuka kumayintshi zaba ngamamilimitha ngokunembile; ubunzima ngemitha kusuka ku-lb/ft ezishicilelwe |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Amamilimitha nama-kg/m njengoba eshicilelwe |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | I-Steel for Life Blue Book (UK), ithebhula v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Amamilimitha nama-kg/m njengoba eshicilelwe |
| Amapuleti | Iparamitriki | Ubunzima kusuka endaweni × 7850 kg/m³ |
| Okwezifiso | Izilinganiso zakho | Ubunzima kusuka endaweni × 7850 kg/m³ |

Indlela amashepu adwetshwa ngayo:

- **W shapes:** idathabhesi ye-AISC ayinikezi iradiyasi yefillet, ngakho i-DetailCraft idweba i-fillet njenge-r = kdes − tf.
- **S shapes namachaneli (C, UPN):** amaflenji alinganayo ngobukhulu besilinganiso esishicilelwe, amakhona asikwele (iflenji langempela liyathambeka).
- **Ama-engeli:** amakhona asikwele.
- **HSS engunxande:** ubukhulu bodonga lokwakha (0.93 × ubukhulu olubizwayo, njengoba i-AISC 360-22 B4.2 ivumela) neradiyasi yekhona langaphandle eyizikhathi ezimbili lokho.
- **HSS ejikelezayo nePipe:** ubukhulu bodonga lokwakha (0.93 × ubukhulu olubizwayo).
- **IPE, HEA, HEB, UB, UC:** iradiyasi yempande eshicilelwe.
- **PFC, EA, UEA:** amakhona asikwele (ubunzima nendawo eshicilelwe busafaka nama-radii).
- **SHS, RHS, CHS:** udonga olubizwayo. Amakhona ashiswe ngokushisa: angaphandle 1.5 t, angaphakathi t. Abumbiwe ngaphandle kokushisa: angaphandle 2 t, angaphakathi t uze ufike ku-6 mm; 2.5 t no-1.5 t uze ufike ku-10 mm; 3 t no-2 t ngaphezu kwalokho.

## Osayizi

Yonke usayizi amathebhula alolu qoqo awulandisa, owncane kakhulu kuqala:

| Iqoqo | Osayizi |
|---|---|
| W shapes (289) | W4x13 kuya ku-W44x408 |
| S shapes (28) | S3x5.7 kuya ku-S24x121 |
| Amachaneli (32) | C3x3.5 kuya ku-C15x50 |
| Ama-engeli, amacala alinganayo (61) | L2x2x1/8 kuya ku-L12x12x1-3/8 |
| HSS, engunxande nesikwele (525) | HSS1-1/2x1-1/2x1/8 kuya ku-HSS34x10x1 |
| HSS, ejikelezayo (189) | HSS1.660x0.140 kuya ku-HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD kuya ku-Pipe26XS |
| IPE (18) | IPE80 kuya ku-IPE600 |
| HEA (24) | HEA100 kuya ku-HEA1000 |
| HEB (24) | HEB100 kuya ku-HEB1000 |
| UPN (18) | UPN50 kuya ku-UPN400 |
| Ama-engeli, amacala angalingani (76) | L2-1/2x1-1/2x3/16 kuya ku-L8x6x1 |
| UB (107) | UB127x76x13 kuya ku-UB1016x305x584 |
| UC (46) | UC152x152x23 kuya ku-UC356x406x1299 |
| PFC (16) | PFC100x50x10 kuya ku-PFC430x100x64 |
| EA (42) | EA20x20x3.0 kuya ku-EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 kuya ku-UEA200x150x18.0 |
| SHS, ashiswe ngokushisa (123) | SHS40x40x3.2 kuya ku-SHS400x400x17.5 |
| RHS, ashiswe ngokushisa (161) | RHS50x30x3.2 kuya ku-RHS500x300x17.5 |
| CHS, ashiswe ngokushisa (103) | CHS42.4x3.2 kuya ku-CHS508.0x17.5 |
| CFSHS, abunjwe ngaphandle kokushisa (96) | CFSHS25x25x2.0 kuya ku-CFSHS400x400x12.5 |
| CFRHS, abunjwe ngaphandle kokushisa (137) | CFRHS50x25x2.0 kuya ku-CFRHS500x300x12.5 |
| CFCHS, abunjwe ngaphandle kokushisa (106) | CFCHS33.7x3.0 kuya ku-CFCHS508.0x16.0 |

I-engeli engalinganayo ebonakala ngesibonakaliso iyisiqephu esifanayo esijikwe ngasemuva, njengoba isitolo esenza ohlangothini olumelene nalo: izimbobo zalo, amakhona nesigxobo kuhamba nalo.

Khetha ithuluzi lokubeka bese ukhetha usayizi ukuze ubone ukujula kwayo, ububanzi beflenji, iwebu nokuqina kweflenji, iradiyasi yefillet, indawo (cm²), ubunzima (kg/m) nomthombo ebhokisini {{ui:Iphrofayili}} lepaneli {{ui:Izakhiwo}}.

## Ukuthi yiliphi ishepu elingakwenza

| Ishepu | Izimbobo | Amakhona | Amapuleti okuphela nezisekelo | Ifayela le-NC | Idrowing yeshophu |
|---|---|---|---|---|---|
| Ama-I-shape (W, S, IPE, HEA, HEB, UB, UC, I wezifiso) | Iwebu, iflenji elingaphezulu, iflenji elingezansi | Yebo | Ama-end plate: ibhimu nensika. Amapuleti esisekelo: yebo | Yebo | Yebo |
| Amachaneli (C, UPN, PFC) | Iwebu, iflenji elingaphezulu, iflenji elingezansi | Cha | Amapuleti esisekelo kuphela | Yebo | Yebo |
| HSS engunxande, SHS, RHS | Udonga lohlangothi (iwebu), oluphezulu, oluphansi | Cha | Amapuleti esisekelo kuphela | Yebo | Yebo |
| HSS ejikelezayo, Pipe, CHS | Akukakwenziwa | Cha | Amapuleti esisekelo kuphela | Yebo | Yebo |
| Ama-engeli (L, EA, UEA) | Akukakwenziwa | Cha | Amapuleti esisekelo kuphela | Yebo | Yebo |
| Amapuleti namabha asicaba wezifiso | Ubuso bepuleti | Cha | Cha | Yebo | Yebo |

Kwithuba elinxande, izimbobo ebusweni "iwebu" zidlula kodonga lwangaseceleni zombili. Okuqukethwe yifayela ngalinye le-NC kukuhlanganisa: [Izinkambu zefayela le-NC](topic:nc1-fields).

## Udinga olunye usayizi?

Engeza njenge[phrofayili yezifiso](topic:plates-and-profiles#add-a-custom-profile). Uhlu lwangaphakathi alukakalungiswa ngaphakathi kohlelo okwamanje.
