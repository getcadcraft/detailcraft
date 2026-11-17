---
title: Izinkambu zefayela le-NC
summary: Okubhalwa yi-DetailCraft kuyo yonke ifayela le-DSTV NC, inkambu ngenkambu, nokulinganiswa kobuso nezindawo.
keywords: nc1, dstv, ifayela le-nc, ibhlokhi ye-st, ak, bo, ikhanda, ubuso, izindawo, cnc, ifomethi
from: 1b676fc1
---

Ifayela ngalinye le-`.nc1` lichaza ukumaka kwengxenye eyodwa. Imigqa iphela nge-CR LF. Izinkambu zombhalo zithwala i-ASCII evamile; ezinye izinhlamvu ziba "?". Umugqa wesibili uyikhomenti, `** DetailCraft <mark>.nc1`.

## Ikhanda (ST)

| Inkambu | I-shape, ichaneli | I-engeli | HSS engunxande | HSS ejikelezayo | Ipuleti |
|---|---|---|---|---|---|
| Umyalo | Igama lemodeli | ← | ← | ← | ← |
| Idrowing, ucezu | Ukumaka kwengxenye | ← | ← | ← | ← |
| Isigaba | Isigaba sengxenye, noma 1 | ← | ← | ← | ← |
| Ikhwalithi yensimbi | Igredi yempahla | ← | ← | ← | ← |
| Inani | Inani lezingxenye ezinalo lokumaka | ← | ← | ← | ← |
| Iphrofayili | Igama leprofayili, isibonelo W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Ikhodi yephrofayili | I noma U (ichaneli) | L | M | RO | B |
| Ubude | Ubude bokusika | ← | ← | ← | Ubude |
| Ukuphakama | Ukujula d | Umlenze | Ukuphakama | Idayamitha | Ububanzi bepuleti |
| Ububanzi beflenji | bf | Umlenze | Ububanzi | Idayamitha | 0 |
| Ukuqina keflenji | tf | t | Udonga t | Udonga t | 0 |
| Ukuqina kwewebu | tw | t | Udonga t | Udonga t | Ukuqina kwepuleti |
| Iradiyasi | Iradiyasi yefillet (0 kumachaneli e-AISC) | 0 | Iradiyasi yekhona langaphandle | 0 | 0 |
| Isisindo ngemitha | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Indawo yopende ngemitha | Ububanzi bangaphandle, m²/m | ← | ← | ← | 2 (zombili izinhlangothi, m²/m²) |
| Izingonyama zesaha (izinkambu ezi-4) | 0 (isikwele) | ← | ← | ← | ← |
| Izinkambu zombhalo (4) | `-` | ← | ← | ← | ← |

Amapuleti alandela ikholomu "for the sheets" yesitandard. Isitandard asinayo ikholomu yamathyubhu ajikelezayo: i-DetailCraft ibhala idayamitha njengokuphakama nobubanzi beflenji, nodonga njengokuqina kokubili.

## Amakhonco angaphandle (AK)

- **I-shape namachaneli:** iwebu (v), ngenotshi elinxande ngayinye ye-cope; ngayinye yeflenji (o no u), ifushanisiwe ekugcineni lapho i-cope ijule ngaphezu noma ilingane neflenji.
- **HSS engunxande:** zombili izinhlangothi zodonga (v no h), ezinotshi ngama-cope, nodonga oluphezulu nolungezansi (o no u).
- **Ama-engeli:** isikwele ngomlenze ngamunye (v no u). Ama-cope kuma-engeli awabhalwa; ingxenye enjalo ibhalwa njengengabhalwanga. Iseshi le-engeli elibotshwe ku-[i-gusset](topic:brace-gussets) linezimbobo zalo emlenzeni obotshiwe: v emlenzeni ohambisana no-u wengxenye, u emlenzeni ohambisana no-v wayo.
- **HSS ejikelezayo:** isikwele esisodwa ku-v, ithyubhu libonakala ngaphambili (ubude × idayamitha).
- **Amapuleti:** isikwele esisodwa ebusweni v.

Ikhonco ngalinye livaliwe (iphoyinti lokuqala liphindwa ekugcineni) futhi lihamba ngokuphambene nokujikeleza kwamawashi.

## Izimbobo (BO)

Ulayini oyedwa ngembobo ngayinye: ubuso, x, y, idayamitha, ukujula 0 (kuwo wonke). Zonke izimbobo ziyafakwa, ezo owazithayipha nezo amaxhumano awenzayo. Imbobo edlula ezindongeni zangaseceleni ze-HSS engunxande ibhalwa kabili, kanye ku-v nakanye ku-h.

## Izindawo nokulinganisa

Iphrofayili ngayinye ibekwa njengoba umfanekiso wezikhundla zeprofayili wesitandard uwudweba (DSTV 1998, p. 7): x ecaleni lengxenye, Y kuya kolunye uhlangothi, Z iphakama kusuka ebusweni obusemuva, nephoyinti zero esikhundleni sekhona langaphandle. I-DetailCraft ayikaze iguqule ingxenye ngokubonisa ukuze ifanele umfanekiso.

| Ubuso | I-shape | Ichaneli | I-engeli | HSS engunxande | Ipuleti |
|---|---|---|---|---|---|
| v | Iwebu, ngaphambili | Iwebu, libonakala ohlangothini lwamaflenji | Umlenze ohambisana no-u wengxenye | Udonga lohlangothi ku −u | Ubuso bepuleti |
| h | | | | Udonga lohlangothi ku +u | |
| o | Iflenji elingaphezulu | **Iflenji elingezansi** | | Udonga oluphezulu | |
| u | Iflenji elingezansi | **Iflenji elingaphezulu** | Umlenze ohambisana no-v wengxenye | Udonga oluphansi | |

- **x** ihamba ecaleni lengxenye kusuka ekuqaleni kokusika.
- **I-shape namaHSS engunxande:** y ewebini noma kodonga lwangaseceleni isuka ngaphansi kweprofayili; y eflenjini noma kodonga oluphezulu nolungezansi isuka emphethelweni wayo ohlangothini lwangemuva (uhlangothi lwe-+u wengxenye).
- **Amachaneli:** ilele emhlane ngamaflenji akhe phezulu, njengoba umfanekiso wesitandard ukubonisa. Ngakho y ewebini ihamba isuka ngaphezulu kweflenji elingaphezulu iye ezansi, iflenji elingaphezulu liyibuso u, nelingezansi liyibuso o, futhi y eflenjini ihamba isuka emuva kewebu iye emphethelweni weflenji.
- **Ama-engeli:** y emlenzeni ngamunye isuka esithendeni.
- **Amapuleti:** y isuka emphethelweni we-−u wepuleti.

Hlola ukuthi isofthiwe yomshini wakho ifunda kanjani ubuso bamachaneli ngaphambi kokusika: amanye amaprogram aguqula amachaneli ngendlela ephambene.

## Akubhalwa

Ama-bevel, amakhonco angaphakathi, izimpawu (SI), amagumbi esaha angaphandle kwesikwele, izimbobo ezinde, izimbobo emithini ejikelezayo (i-DetailCraft ayinazo), namakhona kuma-engeli nasemithini ejikelezayo.
