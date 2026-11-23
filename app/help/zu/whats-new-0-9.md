---
title: Okusha ku-0.9 (kwangaphambili)
summary: Izinhlobo zensimbi yase-UK kanye ne-angle ezingalingani, imidwebo yokukhiqiza yazo zonke izingxenye ku-PDF eyodwa, Iziphrofayili zami zamaphrofayili okwenziwe ngezifiso, P-Delta namafrikhwensi wemvelo, imithwalo yomoya ye-ASCE 7, indawo yokunyakaza komhlaba nezinhlanganiso, kanye namakhesa aphilayo nokulandela.
keywords: okusha ku-0.9, inguqulo yangaphambili, okusha, amanothi okutholwa, 0.9, uk steel, blue book, ub, uc, pfc, shs, rhs, chs, unequal angle, shop drawing, imidwebo yokukhiqiza, ishidi, part mark, pdf, iziphrofayili zami, custom profile, p-delta, second order, natural frequency, finite elements, modal mass, wind load, asce 7, seismic, site class, usgs, load combinations, lrfd, asd, live, cursors, follow, abantu, tooltips, okusha, 0.8, 0.8.1, inguqulo, izici ezintsha, erection, crane, load chart, movie, autopilot, connections, rebar, congestion, foundation, footing, mat, settlement, framing, timber, light-gauge, cut list, constructability, weld access, supplier, stock, lead time, what breaks first, concrete, seismic, slab, izilimi, umsizi
from: ab0c7f05
---

Lokhu yikho okushintshile ku-DetailCraft 0.9, uma kuqhathaniswa ne-0.8.1. I-0.9 iletha izinhlobo zensimbi yase-UK, imidwebo yokukhiqiza yazo zonke izingxenye ngesikhathi esisodwa, ithebhu ye-{{ui:Analysis}} enkulu yefreyimu, kanye nokubona amakhesa abanye nabanye uma nisebenza ndawonye.

## Okusha

### Insimbi yase-UK kanye nemidwebo yokukhiqiza

- **Izinhlobo zensimbi yase-UK.** Izinhlu zamaphrofayili sekuqukethe izinhlobo ezingu-976 ezivela ku-Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS kanye ne-RHS, nezigaba zensimbi ezigoqwe ebandeni ezihlukaniswe (amagama azo aqala nge-CF). Amagama abhalwa umndeni kuqala, njenge-UB305x165x40 noma i-SHS100x100x5.0, nokubhala njengoba imidwebo ichaza kuyasebenza: 305x165x40 UB, L100x100x10, SHS100x5. Bona [Uhlu lwamaphrofayili](topic:profile-catalog).
- **Ama-angle angalingani.** Ama-angle e-UEA agcina zombili izinhlangothi ngesikhathi se-IFC ephumayo nengenayo nasemafayelweni e-NC, nesibonakalisi siguqula ingxenye ngokuphambene.
- **Yonke imidwebo yokukhiqiza ngasikhathi sinye.** Khetha {{ui:Shop drawing}} eqenjini le-{{ui:Output}} ngaphandle kokukhethwa kwanoma yini. Iwindi libala zonke izimaki zezingxenye, libonisele noma yiziphi zazo, futhi {{ui:Download all}} igcina i-PDF eyodwa enekhasi ngemaki ngalinye, ngayinye ithi "Sheet 3 of 42". {{ui:Download this sheet}} igcina eyodwa oyibukayo. Ama-channel, ama-angle namatyubhu avulekile manje nawo athola amashidi. Bona [Yenza imidwebo yokukhiqiza](topic:shop-drawings).
- **Iziphrofayili zami.** Iphrofayili yokwenziwe ngezifiso manje ingagcinwa kuyo yonke imodeli emisha. Kwifomu le-Custom profile, shiya {{ui:Keep in My profiles}} ukhonjiwe; uhlu lwe-{{ui:My profiles}} oluphansi kwayo lunoma yiluphi {{ui:Keep}}, {{ui:Use here}} kanye {{ui:Remove}}. Uhlu lugcinwa kulesi sishayeli, hhayi ku-akhawunti yakho (kuze kube ngu-200). Bona [Amapuleti namaphrofayili](topic:plates-and-profiles).

### Ukuhlaziya

- **Okwesibili (P-Delta).** Khonjisa {{ui:Second order (P-Delta)}} eduze kwe-Run kuthebhu ye-{{ui:Analysis}} bese amandla e-axial asebenza kufreyimu egobekile. Amapuleti namafulowa aqinile asahlala ekuqaleni, nesexwayiso. Bona [Amandla, izinsimbi namagobeka](topic:frame-analysis).
- **Amafrikhwensi wemvelo.** Ibhloko ye-{{ui:Finite elements: natural frequencies}} ngaphansi kwemiphumela ithola izindlela eziphansi zemodeli efanayo, nesikhathi nobuningi bemodali esebenzayo, bese ikhombisa indlela emodeli. Bona [Amandla, izinsimbi namagobeka](topic:frame-analysis).
- **Imithwalo yomoya nendawo yokunyakaza komhlaba.** Amabhloko amathathu amasha kuthebhu ye-{{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} kanye {{ui:ASCE 7 load combinations}}. Bona [Umoya, indawo yokunyakaza komhlaba kanye nezinhlanganiso ze-ASCE 7](topic:wind-seismic-combinations).

### Ukusebenzisana ndawonye

- **Amakhesa namagama.** Kuseshini ephilayo, isikhombi somuntu ngamunye sidwetshwa emodeli ngegama lakhe nombala wakhe, nalokho akukhethile kuthola ibhokisi.
- **Landela umuntu.** Vula {{ui:People}} kuseshini bese ukhetha {{ui:Follow}} egameni; ukubona kwakho kuyahamba nokwakhe. Umphathi angakhetha {{ui:Ask everyone to follow me}}. Bona [Landela umuntu kuseshini ephilayo](topic:follow-in-live).

### Kuzo zonke izinhlelo

- Ama-tooltip angama-Bootstrap tooltip, ikhadi lesiqondiso sokuqala linenkinobho yokuvala, amathebhu ayaskrola ngokuseceleni uma engalingani, futhi igama lethebhu yesiphequluli libonisa idokhumenti evulekile ilandelwe yi-DetailCraft ne-CadCraft.

## Olungiswe

- Iphrofayili yokwenziwe ngezifiso ibilahlekile uma uqala imodeli emisha.
- Amachannel, ama-angle namatyubhu avulekile ayengekho esethini yemidwebo yokukhiqiza.

## Imikhawulo eqotho

- Amabhloko omoya, indawo yokunyakaza komhlaba kanye ne-finite element yizisiza zokuhlola. Injiniyela yakho iyawubuyekeza imiphumela; awona ukuhlolwa kwekhodi. Ukuthola kwe-USGS kuhlolwe kusevisi yokuzama, hhayi kwisevisi ephilayo.
- I-finite elements ne-P-Delta zihlolwe ngezimpendulo ezingezwa ngesandla nezingokoqobo, hhayi isakhiwo sangempela. Ukuhlaziywa kokugoba akwakhiwe.
- Akukakabi khona umakhi waseUK owazama izinhlobo zensimbi yase-UK, futhi amafayela e-NC wama-angle angalingani awakaqhubi kumshini.
- Isethi yemidwebo yokukhiqiza yi-PDF kuphela.
- Izilimi ngaphandle kwesiNgisi ziyizinhlaka ezenziwe ngomshini kuze kube yilapho isipikha somdabu sizifundile.
- Abafakeli be-Windows abasayinwanga ngekhodi (More info, bese Run anyway); isithombe sediski se-macOS asinikwanga ukuqinisekiswa (right-click, bese Open).

Izinguquko zangaphambili zisemanothini ka-0.8 no-0.8.1 ngaphansi kwalelikhasi.

## Kwangaphambili: 0.8 no-0.8.1

Lokhu yikho okushintshile ku-DetailCraft 0.8 (1 Novemba 2026) ne-0.8.1 (2 Novemba 2026), kuqhathaniswa ne-0.7. I-0.7 yahlola izingxenye zensimbi; i-0.8 yahlela ukuphakanyiswa, yahlola uxhumano, yahlola izisekelo nensimbi yokuqinisa, futhi yakha izindonga, amafulowa namaphuphu wezinkuni nensimbi encane.

### Okusha

**Ukumisa**

- **Uhlelo lokumisa nefilimu.** Ethebhleni le-{{ui:Erection}}, chaza ikhreyini (lapho imi khona, ukhoko lwayo olusezingeni eliphezulu, izinto zokubopha ezingekho ocwaningweni lwayo) bese ubhala imigqa yohlu lwayo lokulayisha. I-DetailCraft iphakamisa imodeli ingxenye eyodwa ngesikhathi, ngokulandelana kwezigaba nangamazinga, futhi ihlola ukuphakanyiswa ngakunye ngocwaningo ebangeni lakhe nangomkhawulo owusethile. {{ui:Save movie}} ibhala ifayela eyodwa ye-HTML elidlala ngaphandle kwe-inthanethi kunoma yisiphequluli, nakufoni. Ukuphakanyiswa okudlulele ocwaningweni, noma okude, noma okuphakeme kakhulu kusohlwini lwe-{{ui:Problems}}. Kuyisihlelo esivela kumanani akho, hhayi uhlelo lokuphakamisa. Bona [Uhlelo lokumisa nefilimu](topic:erection-movie).

**Ukuxhumana**

- **I-autopilot yokuxhumana.** Ithebhu ye-{{ui:Autopilot}} ibheka wonke amaxhumano angenaxhumano bese iphakamisa enye ngokusuka emumweni: amapuleti esisekelo, amathebhu okusika, amapuleti okuphela kwamabhimu owamaka njengamabhimu anamandla okugoba, izixhumanisi namaslifu. Nikeza umthwalo ofanayo noma ukusika kwesinye isiphetho bese inani lamabhawodi lilandela amandla adizayinelwe ibhawodi. {{ui:Add them all}} ingeza izincomo njengesinyathelo esisodwa se-undo. Ziyizinani zokuqala zokubuyekezwa, hhayi udizayini woxhumano.
- **Izinhlolo zokwakheka.** {{ui:Problems}} zebhawodi ukhiye engenakufinyelelwa, amabhawodi asondelene kakhulu ukuze asokhethi, amawelda e-fillet angaphandle kwemikhawulo yosayizi wawo kanye namatyubhu avulekile ayaphethe amanzi. Ukufinyelela kwewelda kusha: iwelda ye-fillet yonke izungeze engafinyeleleki yithoshi lomshishisi ibhalwa ngengxenye evimbelayo nengxenye yewelda ethinteka. Bona [Izinhlolo zokwakheka](topic:constructability).

**Izisekelo nensimbi yokuqinisa**

- **Izinhlolo zesisekelo.** Ithebhu ye-{{ui:Foundation}} ihlola izinsekelo, izinsekelo ezixhunyiwe nemathi ezinhlabathini ochaza: ukuthwala, ukushelela nokuguquka ngemuva kwemithwalo yokusebenza; ukugoba, ukusika, ukuhlaselwa, ukuthuthukiswa nensimbi encane kakhulu kusuka kumthwalo oqinisiwe (ACI 318-19). Ikholomu eseduze nomphetho noma nekhoni ihlolwa ngesigaba esinqunywe umphetho wensekelo. Ukuhlala kuvela kumodulus yenhlabathi, imathi evumelekile ichazwa ngamasipringi ngokusuka kumodulus yokwehla, futhi amaqoqo wamapayile namadonga okubambezela anamaphaneli awo. Imithwalo yamakholomu ingabhalwa noma ithathwe ku-{{ui:Analysis}}. Bona [Izinhlolo zesisekelo](topic:foundation-checks).
- **Imephu yokuminyana kwensimbi yokuqinisa.** Ithebhu ye-{{ui:Congestion}} idweba imephu yokushisa yesisekelo ngasinye njengoba libonakala evela phezulu: lapho izinduku zishiya indawo encane kakhulu ukuthi ukhonkolo ingene, ngokuqhathaniswa nomthetho wesikhala esicacile kanye, uma unikeza, nesiqhoqo esikhulu kakhulu nekhanda lesidlidlizi. Bona [Imephu yokuminyana kwensimbi yokuqinisa](topic:rebar-congestion).

**Ukwakha ngezinkuni nensimbi encane**

- **Ukwakheka kwezinkuni nensimbi encane.** Ithebhu ye-{{ui:Framing}} yakha amaphaneli wezindonga, wamafulowa nophahla ngayo yonke ingxenye, uhlu lokusika, impahla ozothenga kanye nomdwebo wokukhiqiza ngesilinganiso. I-{{ui:Place as members}} ibeka izingxenye emodelini, futhi i-{{ui:PDF sheets}} igcina ishidi elilodwa ngephaneli ngalinye. Usayizi, ukuhlukaniswa kanye nezinhloko ziyizinto zakho: i-DetailCraft ayihloli ukuthi ziyawuthwala umthwalo. Bona [Amaphaneli okwakha ngezinkuni nensimbi encane](topic:framing-panels).
- **Impahla yomhlinzeki nezikhathi zokulethwa.** Ithebhu ye-{{ui:Supply}} ifunda uhlu lwempahla yomhlinzeki (CSV) futhi ikhombisa, ngayinye yezigaba uhlu lokusika olufuna ukuthenga, ukuthi kukhona ngokwanele yini nokuthi ukulinda kuzothatha isikhathi esingakanani. Okuncane nezigaba ezilibele zisohlwini lwe-{{ui:Problems}}. Akukho okuodolwayo. Bona [Impahla yomhlinzeki nezikhathi zokulethwa](topic:supplier-stock).

**Ukuhlaziya nodizayini**

- **Yini eqhekeka kuqala?** Kuthebhu ye-{{ui:Analysis}}, inkinobho ithola inhlanganiso yamandla ebusayo, ilungu elibuthakathaka kakhulu, ukuthi imithwalo ingakanani ingakhula ngaphambi kokuthi ilungu lokuqala lifike emkhawulweni walo, kanye nepuleti lokuphela elibuthakathaka kakhulu noma ithebhu yokusika lapho amandla okusika amabhawodi awo esaziwa khona. Idinga izinhlanganiso kanye nekhodi yodizayini kuqala. I-bearing, i-block shear, amawelda nokuprying ayihlolwa. Umsizi wakho oxhunyiwe angacela okufanayo.
- **Ephilayo.** Khonjisa {{ui:Live: solve again after each edit}} bese ifreyimu ixazululwa futhi ngemva kokuhlela ngakunye.
- **Ukhonkolo, okuningi.** Ikholomu encane esakhiweni esingenakunyakazisa iyadizayinelwa ngomlilo wayo owandile (ACI 318-19 6.6.4.5). Isikhathi sokunyakaza komhlaba singathathwa ekuhlaziyweni ngendlela ka-Rayleigh. Isilabhu esenziwe ngamapuleti sithola insimbi ngayinye yezendlalelo idingayo kusuka emanzini ayo, nokusika kwendlela eyodwa. Bona [Hlola izinhlobo zekhonkrithi wenze imithwalo yokunyakaza komhlaba](topic:concrete-and-seismic).
- **Ukuhlolwa yinjiniyela.** Imiphumela yesisekelo, yekhonkolo kanye ne-What breaks first yizisiza. Imithwalo yomoya ayikakwakhiwa.

**Kuzo zonke izinhlelo**

- **Izilimi.** Usizo lutholakala ngezilimi ezingu-54. Ezingaphandle kwesiNgisi ziyizinhlaka ezenziwe ngomshini kuze kube yilapho isipikha somdabu sizifundile; ezilitshumi ziyizintsha (isiLithuania, isiLatvia, isiBosnia, isiMarathi, isiTelugu, isiAlbania, isiAfrikaans, isiFilipino, isiSwahili, isiUzbek).
- **Amathebhu ezixhumanisi.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ikhetha wrap, imigqa engu-2 noma umugqa oyi-1. Ibha esevele ilingana ihlala njengoba iyiyo; eminye iyaskrola ngokuseceleni.
- **Ugridi wepropathi.** Izinkambu zesisekelo zisebenzisa ugridi ovamile: izigaba ezingasongeka kanye nobukhulu obuncane. Izibalo ezibhalwe njenge-2*450 zisasebenza.
- **Amadivayisi okufaka.** I-trackpad, ipeni, imouse ye-3D, isilawuli kanye ne-MIDI kungasebenzisa izinhlelo. Bona [Hamba kuthuthuka ku-3D](topic:navigate-3d).
- **Ipaneli yezexwayiso.** Izexwayiso zezinhlolo ezintsha ezingenhla zivela epaneli efanayo ye-{{ui:Problems}} njengakuqala.
- **Xhuma i-AI yakho.** Umsizi wakho, oxhunywe nge-CadCraft Studio, usebenza nazo zonke izinhlelo eziyisishiyagalombili futhi ubona lokho kuphela ovumela kukho. Ukuxhuma ngenkinobho eyodwa, isixhumi esiphethwe ngabanye kanye nekhiye yakho ye-API ku-Studio sekusalindele. Bona [Sebenzisa i-DetailCraft nomsizi we-AI](topic:use-with-ai-assistants).

### Olungiswe ku-0.8.1

- **Izilimi ku-Studio.** I-Studio nezinguqulo ezipakishiwe zingashintsha ulimi ngesikhathi sokusebenza; ngaphambili kwakuyisiNgisi kuphela. Akuhlolwanga kuzo zonke izinkundla: sitshele uma ulimi lungashintshi.
- **Ukukhetha ngewindi elidlula.** Abafakeli be-0.8.1 bayakhipha ukukhetha ngewindi ngendlela efanele esehla kwebhilidi ye-0.8 ye-web; ufakelo omdala awuzange.
- **Amathebhulethi ngokuma.** Ukuphakama kwegridi okusalayo kuya kukhanvasi, nelayisi lemidwebo liqala ku-760 px noma ngaphansi kwalokho.

### Akukatholakali kuleli nguqulo

- **Thumela i-NC emshinini** akukakhishwa.
- **Imithwalo yomoya** yekhonkolo akwakhiwe, futhi izinhlolo zekhonkolo nesisekelo zezokubuyekezwa yinjiniyela.
- **Ukuqinisekiswa kwekhodi.** Abafakeli be-Windows kanye ne-.dmg ye-macOS abasayinwanga, ngakho i-Windows ingaxwayisa futhi i-macOS icela i-right-click, bese Open.

Izinguquko zangaphambili zisku-[Okusha ku-0.7](topic:whats-new-0-7).
