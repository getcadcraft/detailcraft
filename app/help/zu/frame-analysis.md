---
title: Hlaziya uhlaka
summary: Amandla, ukuchithwa nokusonteka kwamabhimu, amakholomu nezinkomba njengoba zidwetshwe, ngaphansi kwezimo zomthwalo nezinhlanganisela ozisethayo. Isisekeli sokuhlaziya, hhayi ukuhlolwa kwekhodi; ukuhlolwa kwedizayini kuyisinyathelo esihlukile.
keywords: ukuhlaziya, ukuhlaziya kwesakhiwo, ukuhlaziya kohlaka, indlela yokuqina, imithwalo, ikeyisi yomthwalo, inhlanganisela, umthwalo ongunaphakade, umthwalo oguqukayo, isisindo sokuzimela, isisindo sakho, izinkomba, ukugoba kwemizamo, ukushelela, amandla angeqondile, ukuchithwa, isimo esigobile, izimpendulo, ukubambezela, ukubopha, ukukhishwa, umbiko, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Ithebhu {{ui:Ukuhlaziya}} ngaphansi ithola amandla kuwo wonke amabhimu, amakholomu nezinkomba zemodeli, izimpendulo ezisezisekelweni zamakholomu, nokuthi amalungu agoba kangakanani, ngemithwalo oyinikeza yona.

:::warning
Yisisekeli sokuhlaziya, **hhayi ukuhlolwa kwekhodi**. Ukuhlaziya akusebenzisi ikhodi yedizayini: akulinganisi amalungu, akuhloli amandla noma uxhumano, futhi akukhethi izinto zomthwalo. Injiniyela ihlola imodeli, imithwalo nezisekelo, futhi inquma ukuthi amanani asho ukuthini. Ukuhlolwa kwamalungu ngokuya kwe-ASCE 7 / AISC 360 noma i-EN 1990 / EN 1993-1-1 bheka [Hlola amalungu ensimbi ngekhodi yomklamo](topic:design-checks), isinyathelo esihlukile nesona isisekeli.
:::

## Qalisa

1. Vula ithebhu {{ui:Ukuhlaziya}}.
2. Khetha amalungu amodwa noma amaningi ku-view, khetha {{ui:Ikeyisi}}, {{ui:Umthwalo}} ne-{{ui:Iqondo}}, bhala inani bese ucindezela {{ui:Engeza umthwalo}}. Umthwalo osakazeka ngokuhamba kwelungu usekN/m, umthwalo wephoyinti usekN. {{ui:Phansi (ukudonsela komhlaba)}} ngowejwayelekile.
3. Cindezela {{ui:Qalisa ukuhlaziya}}.

Ithebhu iveza amandla amakhulu ka-N, ama-shear Vz no Vy, imizamo yokugoba My no Mz, i-torsion T nokuchithwa kwelungu ngalinye, umzamo omkhulu kakhulu uqala; chofoza igama lelungu ukuliyekela. Ngezansi kukhona izimpendulo kuyo yonke imisebenzi. I-{{ui:Emodelini}} idweba isimo esigobile, noma isenzo esisodwa njengedayagremu ecaleni kwelungu ngalinye nenani lalo elikhulu kakhulu embhalwe endaweni yalo. Imiphumela iba indala uma imodeli ishintsha: qalisa futhi.

Ukuthi ngayinye yomthwalo, ikeyisi nesethingi kuyisinyathelo esisodwa sokuhlehlisa ({{key:Mod+Z}}) futhi igcinwa efayelweni lemodeli.

## Izimo zomthwalo nezinhlanganisela

Ukuhlaziya kuqala ngezintathu: **Dead** (isisindo sayo ngokwayo samalungu, kusuka ezigabeni zawo ezidwetshwe nokuthi 7850 kg/m³), **Live** (ize) kanye **Dead + live**. Engeza amakheyisi akho (umoya, ukhilimu …) nezinhlanganisela: inhlanganisela ifaka amakheyisi ndawonye ngezinto ozibhalayo. Ukuhlaziya kulinganiselwe, ngakho ikheyisi ngayinye ixazululwa kanye futhi izinhlanganisela ziyizimpendulo. Bhala izinto ngokwakho, noma khetha ikhodi yedizayini uvumele {{ui:Dala izinhlanganisela}} ibhale eyekhodi ([Hlola amalungu ensimbi ngekhodi yomklamo](topic:design-checks)).

## Uhlaka lwenziwe ngani

- Amabhimu, amakholomu nezinkomba, ngayinye emgqeni wayo womsebenzi (umugqa owudwebile), namandla angempela esigaba ebalwe kusuka emkhawulweni wayo. Amapuleti, izitebhisi, izisekelo namabholthi akusiwona ingxenye yohlaka.
- Ilungu liyahlukaniswa lapho omunye ilungu ufika khona, ngakho ibhimu elingena ekholomu esigxeni salo lihlanganiswa khona.
- **Izisekelo zamakholomu**: ziqinile (ukuqala) noma zibambekile (zibanjiwe endaweni nasekugingqikeni, zikhululekile ukuphendukela). Ipuleti lesisekelo lihlala lenza ukwesekwa.
- **Amaphethelo amabhimu**: ipuleti lomphetho liqinile, itabhu yokushelela ibambekile. Ukuthi {{ui:Iziphetho zebhimu ezingenalo uxhumano}} kusetha okunye. **Izinkomba** zibambekile emaphethweni womabili.
- Khetha ilungu elilodwa ukunikeza amaphethelo alo, noma isisekelo sekholomu, umthetho walo siqu.
- Insimbi yonke: E = 200 GPa, G = 77 GPa.

Uma uhlaka lunganyakaza ngaphandle kokugoba lutho, yingxube, isibonelo izisekelo ezibambekile ngaphandle kokubopha ngaphansi kwesiqondiso esisodwa, ukuhlaziya kuyayeka kutshele lapho nasendleleni; yibambe lapho ngokwesekwa, ukuxhumana okuqinile noma ukubopha.

## Izimpawu

N > 0 ingokokuqina. My > 0 ibeka uhlangothi lwe-−z lwelungu lendawo ekuqineni: ibhimu elilele ngaphansi kwesisindo lina-My > 0. Mz > 0 ibeka uhlangothi lwe-−y lendawo ekuqineni. Ukuchithwa kulinganiswa kusukela emugqeni oqondile phakathi kwamaphethelo elungu. I-z yendawo yelungu ibheka phezulu (kukholomu: ngokuya ku-X); ama-axis awo endawo aphendukela ngokujikeleza kwelungu.

## Umbiko

{{ui:Umbiko (PDF)}} ne{{ui:Umbiko (CSV)}} zibamba konke: izinto ezakhe uhlaka, izigaba, amakheyisi nezinhlanganisela, bese kuthi ngalo lonke ikheyisi nenhlanganisela izimpendulo (namasamba omthwalo nezimpendulo, akhulumisana), amandla amalungu nokuchithwa, nenvelophu yakho yonke ikheyisi. {{ui:Thumela njenge-CraftScript}} ibhala lolu hlaka njengeskripthi sendawo ye-Script ye-PartCraft, lapho umsebenzi wethala `frame3d` uluxazulula sisinyathelo ngesinyathelo ngekhodi efundeka kalula.

## Indlela

Indlela yokuqina eqondile, eyinhlobo yokuqala futhi elinganiselwe ngaphandle uma uthick i-*Ukuhlaziya kwesibili (P-Delta)*: amakholomu-amabhimu anamaphoyinti amabili anokuqina okungu-axial, i-torsion nokuqina kwezindlela ezimbili zokugoba (ngaphandle kokuguquka kwe-shear, ngaphandle kokukhwesha), ukukhululwa kwemaphethelo ngokuncishiswa okuzinzile, imithwalo ehamba ngamalungu ngokusebenzisa izimo zamalungu ngokwawo. Izimpendulo zawo ziyahlolwa ngezimo zethekisi ezidumile (ama-cantilever, amabhimu alula, aqinile nalandelanayo, uhlaka lwe-portal, igridi ku-torsion, ithruss).

**Ukuhlaziya kwesibili (P-Delta).** Thika *Ukuhlaziya kwesibili (P-Delta)* eduze kwe-Run: inhlanganisela ngayinye ixazululwa futhi nge-axial yamalungu esebenza kuhlaka oluphambukile (ilungu ngalinye lisikwe libe izingxenye ezi-4, ukuze nokugoba kwelungu phakathi kwamaphethelo kubalwe), kuze kuzinze amandla e-axial. Umugqa womphumela unikeza inani lamapasi nokuthi ukuhamba kukhule kangakanani; izimpendulo, ukuchithwa, ukuhlolwa kwedizayini nombiko kusebenzisa lezi zimpendulo. Ngaphezu komthwalo obalulekile wokuqina woluhlaka, ukuqalisa kuyayeka kutshele lokho. Kuyi-elastic nezinhlamvu ezincane zokujikeleza, i-flexural kuphela, ngaphandle kokuncishiswa kokuqina noma imithwalo engaqondile (akusiyo indlela ye-AISC direct analysis ngokwayo); izilaba, izindonga namasilabhu aqinile zihlala zingu-first order.

**Ama-frikhwensi emvelo (izakhi eziphelele).** Ibhulokhi {{ui:Izakhi eziphelele: amafrikhwensi wemvelo}} ngaphansi kwemiphumela ithola izindlela eziphansi kakhulu zalemodeli efanayo nenjini yezakhi eziphelele: amabhimu namaphethelo awo akhululekile, izilaba nezindonga njengezigobolondo ezine-nodi, amasilabhu aqinile, nokubopha. Khetha inani lezindlela (3, 6, 10 noma 20) nesakhi selaba (igobolondo elinenodi ezine zelaba elijulile noma elincane, noma lelo elincane) bese ucindezela {{ui:Thola amafrikhwensi}}. Ithebhu inikeza ifrikhwensi yendlela ngayinye ngo-Hz, isikhathi sayo ngamasekhondi nobuningi bayo obusebenzayo obuhamba ngo-X, Y no Z njengesabelo sobuningi obungahamba. {{ui:Bonisa kumodeli}} idweba noma iyiphi indlela njengoba kudwetshwa isimo esigobile. Ubuningi kuyinkomba yezinto ezikhona kanye nevolumu: imithwalo ayengezi ubuningi, nezinto ezingenankomba yobuningi azinabo. Umbiko (PDF, CSV) uthwele ithebhu. Ukusebenza kwawo kuyi-elastic nokunyakaza okuncane kuphela, akukho mthwalo wokuzamazama noma wemoya owenziwe ngekhodi lapha. Akuyona ukuhlolwa kwekhodi; injiniyela yakho ibuyekeza imiphumela.

**Impendulo yesipektiramu, umlando wesikhathi nokusunduza.** Ezinye izibhulokhi ezintathu zisezansi kwamafrikhwensi, zisebenzisa imodeli efanayo yezakhi eziphelele. Ubuningi bazo bonke buyinkomba yezinto ezikhona kanye nemithwalo ephansi yamakheyisi okhethile, ngayinye ephindwe ngesilinganiso osibhalayo (isibonelo Dead ku-1 ne-Live ngesabelo osibala njengobuningi).

{{ui:Impendulo yesipektiramu}} ifunda inani lendlela ngayinye kusipektiramu onikezayo (ithebhu yesikhathi nokuphendulwa, noma ukwakheka kwe-ASCE 7 kusuka ku-SDS, SD1 ne-TL; inkinobho ethi {{ui:Sebenzisa amanani webhulokhi yokuzamazama}} ikopisha lawo kusuka kwibhulokhi yokuzamazama) futhi ihlanganise izindlela nge-CQC, SRSS, umthetho wamaphesenti ayishumi noma isamba esiphelele, bese ihlanganisa izinqubo ze-X, Y no Z (100 % + 30 % noma SRSS). Inikeza i-base shear, ukwehla kwezingqimba, amandla emaphethelo amalungu nethebhu yezindlela esexwayisa uma izindlela ezisetshenzisiwe ziphethe ngaphansi kuka-90 % wobuningi. Imiphumela ingalinganiswa ngesilinganiso noma ibe ngaphezulu kwe-base shear oyibhalayo; ibhulokhi ayikaze ibale leyo base shear ngokwayo. Imiphumela ayinasimpawu.

{{ui:Umlando wesikhathi}} iqalisa ukuphakama komhlaba ngokuhlanganisa kwezindlela (kuchanekile kumigqa eqondile yerekhodi phakathi kwamaphoyinti) noma ngokuhlanganiswa okuqondile (i-Newmark average acceleration ne-Rayleigh damping). Ukufakwa kungaba isine noma i-pulse eyenziwe (ihlala ilebhulwe njengesynthetic), irekhodi oyilinamathelisayo, noma ifayela lombhalo oyilivulayo (isikhathi nokuphakama, ukuphakama kunye ngomugqa nesinyathelo, noma ifayela elifana ne-PEER elinesihlokwana se-DT=; ku-g noma m/s²). Inikeza ukuchithwa kophahla nesisekelo se-shear ngesikhathi, ukuhamba kwezingqimba ngayinye, nenvelophu yamandla amaphethelo amalungu. Amamodeli anerekhodi elide kakhulu ayigcina kuseshini kuphela.

{{ui:Ukusunduza}} kushayela uphahla ngakohlangothi ngezinyathelo ezincane (iphethini efana nendlela yokuqala, noma efanayo), nemisangoza ye-plastic emaphethelweni amalungu anesimo se-I. Isangoza siyakhiqiza ku-plastic moment, eyehla njengoba i-axial force ikhula (ibalwa kusuka esimweni esidwetshwe, kungabalwa ukuqina kwamaphethelo); ukuqina kokukhulu kuyinkhetho, i-P-delta iyinkhetho, futhi inhlanganisela yomphakathi ingasetshenziswa kuqala. Inikeza ijika lamandla (base shear ngokumelene nokuchithwa kophahla), isangoza lokuqala, nesimo nokujikeleza kwe-plastic kwesangoza ngasinye. {{ui:Qalisa umlando wesikhathi ongalingani}} uqalisa lezi zangoza ngaphansi kwerekhodi lebhulokhi yomlando wesikhathi emamodeli amancane. Izangoza zakheka emaphethelweni amalungu kuphela (beka inodi lapho kufanele kwakheke khona ngaphakathi kwesigaba); ilungu elikhululwe emaphethelweni womabili alithola lutho; ukukhiqizeka nokukhwishiliza kwezinkomba akumelelwe; izilaba nezindonga zihlala zi-elastic; akukho mibandela yokwamukelwa enikeziwe. Akuyona ukuhlolwa kwekhodi; injiniyela yakho ibuyekeza imiphumela. Izilungiselelo zigcinwa kanye nemodeli, nombiko uthwala amathebhu.

Akukakwakhiwa okwamanje: ukuhlaziya kokukhwishiliza, ukulungiswa kobuningi obungekho kwempendulo yesipektiramu, ukuskeyila kwerekhodi, izinqubomgomo zokwamukelwa zezangoza (ukuphendula okuguquguqukayo kukhona, ngaphezulu), imithwalo yendawo nomoya eyenziwa ngokwakho (amandla okuzamazama emagumbini akhona ku-[Hlola amalungu ekhonkolo futhi wenze imithwalo yokuzamazama](topic:concrete-and-seismic)), ukubekwa kwamalungu, izinkomba ezibambelela ekuqineni kuphela. Bheka [Akukakwakhiwa okwamanje](topic:not-built-yet).
