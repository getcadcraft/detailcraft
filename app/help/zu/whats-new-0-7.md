---
title: Okusha ku-0.7 (kwangaphambili)
summary: Ukuhlolwa kwedizayini kwezakhiwo zensimbi ze-I-shape nezinhlanganiso zemithwalo ezivela ku-ASCE 7 noma i-EN 1990, nokuhlolwa kwezingxenye ngokuya ku-AISC 360 noma i-EN 1993-1-1, ukuthumela imodeli yensimbi ku-USD, ithuluzi lomsizi we-USD, ibhande lensimbi elinezinkinobho ezinkulu nezincane, amaphaneli anganyamalala ngokuzenzakalelayo namadayalogu anyakazayo.
keywords: okusha 0.7, ukukhishwa kwangaphambili, amanothi okukhishwa, udaba lwezinguquko, izinguquko, 0.7, inguqulo, izici ezintsha, ukuhlolwa kwedizayini, ukuklama ngensimbi, ukusetshenziswa, izinhlanganiso zemithwalo, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, National Annex, uphahla oluphilayo, umkhawulo wokukhubazeka, usd, usda, usdc, usdz, openusd, umsizi, mcp, ibhande lensimbi, ibhande, inkinobho ehlukene, amayunithi, okuhlangene, amaphaneli, amadayalogu, isiPutukezi
from: 54a7a8f0
---

Lokhu kuguquke ku-DetailCraft 0.7, uqhathanisa ne-0.6. Ukuhlaziywa kwefreyimu ye-0.6 manje sekunesinyathelo sesibili: ukuhlola izingxenye zensimbi ngokuya ku-ikhodi yedizayini.

## Okusha

### Okuhlangana kwe-Mitre (0.7.1)

- **Izinhlangothi ezimbili ze-I-shape ezihlangana ngo-engeli**, njengegumbi lephothali noma uphahla: khetha zombili, khetha {{ui:Mitre}} kumenyu {{ui:More}} yeqembu {{ui:Connect}}, bese zombili iziphetho zinqunywa endizeni ehlukanisa i-engeli ibe izingxenye ezimbili ezilinganayo. Amaphuleti aphelile abotshelwe ndawonye nezinqamuleli zewebhu ayizinkamba ezikhethwayo kudayalogu entsha ye-Mitre, lapho izinkundla ezinezinombolo zihambisana nomdwebo wokuhlangana kwakho owenziwa njengoba uthayipha. I-mitre ilandela izakhiwo uma zinyakaza, iphinde idlulele kumadrowing, kumafayela e-NC (ukusikwa okuthambekile), ku-IFC nakuhlu lwezinto. Bona [Okuhlangana kwe-Mitre](topic:mitres).

### Ukuhlolwa kwedizayini

- **Izinhlanganiso zemithwalo evela ekhodini.** Ethebhini {{ui:Analysis}}, ibhlokhi entsha {{ui:Design checks}} inombolo {{ui:Design code}}: ASCE 7 + AISC 360 (i-US, LRFD) noma EN 1990 + EN 1993-1-1 (i-Eurocode). Nikeza ngalinye lecala lomthwalo uhlobo lwalo (lifu, liphilayo, uphahla oluphilayo olusha, iqhwa, umoya, ukuzamazama komhlaba), cindezela {{ui:Make combinations}}, bese i-DetailCraft ibhala izinhlanganiso zamandla nezokuqina zekhodi zamacala akho. Izinhlanganiso owazithayipha wena ziyahlala. Bona [Ukwenza izinhlanganiso](topic:design-checks#make-the-combinations).
- **Amanani e-National Annex.** Ku-Eurocode izinto zokuphindaphinda ziqala ngamanani anconyiwe; {{ui:National Annex values}} ikuvumela ukuthayipha amanani ezwe lakho, futhi agcinwa kumodeli. Bona [Ukwenza izinhlanganiso](topic:design-checks#make-the-combinations).
- **Hlola izingxenye.** {{ui:Check members}} ihlola yonke i-I-shape yensimbi ukuthola ukucindezeleka, ukuqina, ukugoba nokuguqulwa ngokugoba kwe-lateral-torsional, ukusika, ukugoba nomthwalo ophakathi, nokukhubazeka ngokuya ku-{{ui:Deflection limit}} oyisethayo. Ithebhula likhombisa ukusetshenziswa kwengxenye ngayinye, ukuhlola okulawulayo nenhlanganiso yalo, futhi izakhiwo zidayiswa ngemibala emodelini (eluhlaza okwesibhakabhaka, eluhlaza, ochre, obomvu, imvi lapho kungahlolwanga). Bona [Hlola izingxenye](topic:design-checks#check-the-members).
- **Embikweni.** {{ui:Report (PDF)}} ne-{{ui:Report (CSV)}} zengeza izinguqulo zekhodi, izilungiselelo, ukusetshenziswa ngokwezingxenye kanye nazo zonke izigaba ezisetshenzisiwe. Bona [Umbiko](topic:design-checks#the-report).
- **Isisebenzisi esisiza kuze kubhekwe unjiniyela.** Lisebenzisa amandla we-first-order kuphela. Ama-tube, ama-angle, ama-channel, izakhiwo ezishiselwe kanye nezingxenye ezincane noma ezingu-class 4 zifunda "akuhlolwanga", nesizathu; ukuphotheka, izixhumanisi nekhonkrithi akuhlolwa. Bona [Okungahlolwanga](topic:design-checks#what-is-not-checked).

### USD

- **Thumela imodeli yensimbi njenge-USD.** {{ui:USD}} eqenjini {{ui:Output}} ibhala imodeli njenge-{{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} noma {{ui:Package (.usdz)}} yezinhlelo zokuveza nokuhlanganisa isimo: isakhiwo ngasinye sibamba izingxenye zaso, ingxenye ngayinye iyisigaba sayo esihamba ngobude bayo ngokusikwa okuphelile, futhi ngayinye inophawu lwayo, iphrofayili, igreyidi, ubude nesisindo. Izimbobo zeboli, amaboli, ukushisela nezisekelo akukho kuma-mesh e-USD. Bona [Thumela imodeli yensimbi njenge-USD](topic:usd).

### Abasizi be-AI

- **USD yabasizi.** Umsizi wakho, oxhunywe nge-CadCraft Studio, angathumela imodeli njenge-USD (`usd_export`), futhi ku-Studio angayibhala kufolda oyivumele. Bona [Okungacelwa umsizi](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Okushintshiwe

- **Ibhande lensimbi** linezinkinobho ezinkulu nezincane: {{ui:Beam}} enkulu eseceleni kwe-{{ui:Column}}, {{ui:Brace}} ne-{{ui:Plate}} ezincane ku-{{ui:Modeling}} › {{ui:Members}}; {{ui:End plates}} enkulu ku-{{ui:Detailing}} › {{ui:Connections}}, ne-{{ui:Splice}} ne-{{ui:Gusset}} zabelana ngenkinobho eyodwa ehlukene; {{ui:Paste}} enkulu ku-{{ui:Edit}} › {{ui:Clipboard}}, ne-{{ui:Paste in place}} ne-{{ui:Duplicate}} ngemuva komcibisholo weqembu. {{ui:Fabrication}} › {{ui:Exchange}} inawe {{ui:Export USD}} eseceleni kwe-IFC. Ezinye izitayela zemenyu zibukeka njengakuqala. Bona [Imenyu, izinkinobho nemouse](topic:menus-keys-and-mouse#the-three-styles).
- [Hlaziya ifreyimu](topic:frame-analysis) manje ikhomba ezihlolweni zedizayini, nezinhlanganiso zayo zingenziwa yikhodi.

## Kuzo zonke izinhlelo

- **Amayunithi.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} inohlu olulodwa ngalunye lobude, indawo, ivolumu, i-engeli nokuthambeka, ngosayizi abaqondile njengoba izincazelo zeyunithi zinikeza (i-US survey foot iyiyunithi yayo). Vala amayunithi ongawasebenzisi nawo ayophuma ohlwini lwamayunithi; wenze inkanyezi, futhi umsebenzi omusha uqala kuwo. Ifayela ngokuhlala ligcina iyunithi yalo. Amabhokisi e-DetailCraft awalandeli amalulu okwamanje: ubude bawo busabhalwa ngamamilimitha. Bona [Amayunithi, amanani athayipheke nohlu lwamayunithi](common:unit-lists).
- **Isakhiwo esiminyene namaphaneli anganyamalala.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} ifaka okwengeziwe esikrinini (izikrini zokuthinta nama-fone zigcina izinkinobho zazo ezinkulu). Iphaneli ngalinye eliseceleni linebha yesihloko encane: yidonse ukuze uyihlanganise noma uyenze idayiswe, uyilahle ebhareni lephaneli elinye ukuze wabelane ngefreyimu njengamathebhu, uyibophe ukuze ishelele ngasemphethendweni, noma uyifihle bese uyibuyisa emphethendweni. Bona [Hlela amaphaneli](common:arrange-panels#make-the-layout-denser).
- **Amadayalogu ayanyakaza.** Dona idayalogu ngebha yesihloko ukuyisusa endleleni yomdwebo; ibuyela lapho uyishiya khona. Chofoza kabili ebhareni lesihloko ukuyibuyisela maphakathi. Bona [Hambisa idayalogu](common:arrange-panels#move-a-dialog).
- **Izincomo zabasizi be-AI.** Izicelo eziyishumi ezisebenzayo zomsizi wakho (hlanza umdwebo, cwebezela isethi, hlola imidwebo, buza imodeli imibuzo, bala ithebula lamanani, zama inguqulo yengxenye…), ngayinye ngamathuluzi ayibizayo nezimvume ezidingekayo, futhi ngayinye iphindwa yizivivinyo zethu. Izinhlelo azinayo i-AI. Bona [Izincomo zabasizi be-AI](common:assistants-recipes).
- **Izilimi.** **Português (Portugal)** itholakala kusha ku-{{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Yona, **Português (Brasil)**, **Español (México)** ne-**Bahasa Indonesia** manje zinawo wonke amagama ezinhlelo, njengokuhumusha okungakahlolwa umkhulumi wendabuko. Izihloko zosizo sezisesiNgisini.
- **I-CadCraft Studio** itshela ukuthi kungani ukuhlola isibuyekezo kuhlulekile (akukho ifayela lesistimu yakho okwamanje, akukho inethiwekhi, isiginecha esingalungile) esikhundleni sokuthi "Kwenziwe", futhi ayiphindi ibuyisele ikhadi elithi What's new eliwuvalile kuze kube khona ukukhishwa okusha.

## Akukafiki kulolu hlobo

- **0.7 ayisayinwanga ngekhodi.** Ukusayina, nephakheji yeMicrosoft Store, kudluliselwe ku-0.8 ngoba ukuqinisekiswa kwesitifiketi akukafiki. Hlola i-SHA-256 eseceleni kwefayela ngalinye ku-getcadcraft.com/download. Ku-Windows, uma i-SmartScreen imisa i-installer, khetha {{ui:More info}}, bese {{ui:Run anyway}}. Ku-Mac, okokuqala, cindezela ngesokudla ku-CadCraft Studio bese ukhetha {{ui:Open}}. I-CadCraft Studio akukakafiki kuzitolo zama-app, futhi akukakho ukwakhiwa kwe-iPad noma i-iPhone.
- Amalulu e-engeli nokuthambeka ku-{{ui:Units}} ayagcinwa, kodwa akukho bhokisi elikufundayo okwamanje.
- **Izinhlolo zedizayini azikahlolwa unjiniyela.** Izivivinyo zethu ziqhathanisa nezinani etafuleni elishicilelwe nezifomula ezenziwe ngesandla, hhayi namanje nezibonelo ezisebenzayo zesiqondiso sedizayini. Kuze kube kube ukubuyekezwa, ziyisisizo: hlola izingxenye ezibalulekile ngesandla.
- Izinhlolo zedizayini zisebenzisa amandla we-first-order (akukho imiphumela ye-second-order) futhi zihlola ama-I-shape kuphela. Akukakhiwa: ama-tube, ama-angle, ama-channel, izakhiwo ezishiselwe, izingxenye ezincane (AISC) noma ezingu-class 4 (Eurocode) ekugobeni, ukuphotheka, ukusika okuhlanganiswe nokugoba, izixhumanisi, ukukhathala, umlilo, ukwakhiwa ngokuzamazama komhlaba kanye nekhonkrithi. Ingxenye encane ecindezelweni ishiya ukuhlolwa kokucindezeleka ngaphandle, futhi isakhiwo sifunda "sidlula, sihlolwe ngokwengxenye".
- Ukuhlaziywa kwefreyimu kusenguya ye-first-order nomugqa, futhi unjiniyela akukakuzami emsebenzini wangempela.
- Imingcele yobukhulu, amaboli, ukushisela nezisekelo akusiyo ku-USD export.

Bona [Okungakakhiwa](topic:not-built-yet).
