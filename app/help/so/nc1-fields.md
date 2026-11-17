---
title: Goobaha faylka NC
summary: Waxa DetailCraft ku qoro fayl kasta oo DSTV NC, goob-goob, iyo sida wajiyada iyo kala-sareynta loo cabbiro.
keywords: nc1, dstv, faylka nc, bloogga st, ak, bo, madax, wajiyada, kala-sareynta, cnc, qaab
from: 1b676fc1
---

Fayl kasta oo `.nc1` wuxuu sharaxaa hal calaamad qayb. Khadadku waxay ku dhammaadaan CR LF. Qoraalka goobaha wuxuu yeelan ASCII oo kaliya; xarfaha kale waxay noqdaan "?". Safka labaad waa faallo: `** DetailCraft <mark>.nc1`.

## Madaxa (ST)

| Goob | Biim I, kanaal | Xagal | HSS afar-geesle | HSS wareega | Saxan |
|---|---|---|---|---|---|
| Amarka | Magaca moodeelka | ← | ← | ← | ← |
| Naqshad, qayb | Calaamadda qaybta | ← | ← | ← | ← |
| Marxalad | Marxaladda qaybta, ama 1 | ← | ← | ← | ← |
| Tayada birta | Darajada birta | ← | ← | ← | ← |
| Tirada | Tirada qaybaha leh calaamaddan | ← | ← | ← | ← |
| Profile | Magaca profile-ka, tusaale W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Koodhka profile-ka | I ama U (kanaal) | L | M | RO | B |
| Dherer | Dherer gooyga | ← | ← | ← | Dherer |
| Joog | Qoto d | Lug | Joog | Dhexroor | Ballaca saxanka |
| Ballaca flange | bf | Lug | Ballac | Dhexroor | 0 |
| Dhumucda flange | tf | t | Derbi t | Derbi t | 0 |
| Dhumucda web | tw | t | Derbi t | Derbi t | Dhumucda saxanka |
| Radius | Radius-ka fillet (0 kanaalada AISC) | 0 | Radius-ka geesta dibadda | 0 | 0 |
| Miisaanka mitirkiiba | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Dusha rinjiga mitirkiiba | Wareegga dibadda, m²/m | ← | ← | ← | 2 (labada wejiba, m²/m²) |
| Xagallada sawka (4 goob) | 0 (labajibbaaran) | ← | ← | ← | ← |
| Qoraalka goobaha (4) | `-` | ← | ← | ← | ← |

Saxanada waxay raacaan tiirka xeerka "xaashiyaha". Xeerku ma leh tiir tuubooyinka wareega: DetailCraft wuxuu qoraa dhexroorka sidii joog iyo ballac flange, derbigana sidii labada dhumuc.

## Kontuurrada dibadda (AK)

- **Biimaha I iyo kanaalada:** darbiga (v), oo leh notch afar-geesle cope kasta; flange kasta (o iyo u), oo laga gaabiyay geed kasta meel uu cope-ku ugu yaraan yahay sida flange-ka qoto ahaan.
- **HSS afar-geesle:** labada derbiga dhinacyada (v iyo h), oo lagu notch-ayo cope-yada, iyo derbiyada sare iyo hoose (o iyo u).
- **Xagallada:** hal afar-geesle lug kasta (v iyo u). Cope-yada xagallada lama qoro; qaybtaasi waxay ku liistaa inaan la qorin. Xidhe xagal oo lagu xiray [gusset](topic:brace-gussets) godadkiisa waxay ku yaalaan lugta la xiray: v lugta u-ga qaybta, u lugta v-ga qaybta.
- **HSS wareega:** hal afar-geesle v, tuubada oo hore laga arko (dherer × dhexroor).
- **Saxanada:** hal afar-geesle wajiga v.

Kontuur kasta waa xiran yahay (barta koowaad ayaa dib loo celiyaa dhamaadka) waxayna socotaa wareegta saacadda ka soo horjeedda.

## Godadka (BO)

Hal khad god kasta: wajiga, x, y, dhexroorka, qoto 0 (god dhan). Dhammaan godadka waa lagu daraa, kuwa aad gelisay iyo kuwa xidhiidhadu sameeyeen. God ku jira derbiyada dhinacyada HSS afar-geesle waxaa loo qoraa laba jeer, mar v mar h.

## Wajiyada iyo kala-sareynta

Profile kasta waxaa lagu dhigaa sida sawirka booska profile-yada ee xeerku muujiyo (DSTV 1998, p. 7): x wuxuu ku socdaa qaybta, Y wuxuu ku socdaa dhinaca, Z wuxuu kor u kacaa dhabarka dambe, barta eber waxay ku taal geeska dibadda. DetailCraft ma rogo qayb si ay ugu habboonaato sawirka.

| Wajiga | Biim I | Kanaal | Xagal | HSS afar-geesle | Saxan |
|---|---|---|---|---|---|
| v | Darbiga, hore | Darbiga, laga arko dhinaca toes-ka | Lugta ku socota u-ga qaybta | Derbiga dhinaca −u | Wajiga saxanka |
| h | | | | Derbiga dhinaca +u | |
| o | Flange-ka sare | **Flange-ka hoose** | | Derbiga sare | |
| u | Flange-ka hoose | **Flange-ka sare** | Lugta ku socota v-ga qaybta | Derbiga hoose | |

- **x** wuxuu ku socdaa qaybta laga bilaabo bilowga gooyga.
- **Biimaha I iyo HSS afar-geesle:** y darbiga ama derbiyada dhinacyada waxaa laga cabbiraa hoosta profile-ka; y flange-ka ama derbiyada sare iyo hoose waxaa laga cabbiraa geeskiisa dhinaca dambe (dhinaca +u ee qaybta).
- **Kanaalada** waxay ku jiraan dhabarkooda, toes-ka oo kor u taagan, sida sawirka xeerku muujiyo. Markaa y darbiga wuxuu ka bilaabmaa dibadda flange-ka sare oo hoos u socda; flange-ka sare waa wajiga u, flange-ka hoose waa wajiga o; y flange-ka wuxuu ka socdaa dambe darbiga ilaa toe-ka.
- **Xagallada:** y lug kasta waxaa laga cabbiraa heel-ka.
- **Saxanada:** y waxaa laga cabbiraa geeska −u ee saxanka.

Ka hor gooynta, hubi sida softwareka mashiinkaaga u akhristo wajiyada kanaalada: qaar barnaamijyo kanaalada way u rogaan.

## Waxa aan la qorin

Bevels, kontuurrada gudaha, calaamadaha (SI), xagallada sawka ee aan labajibbaaran ahayn, godadka dalool-ka, godadka tuubooyinka wareega (DetailCraft ma leh), iyo cope-yada xagallada iyo tuubooyinka wareega.
