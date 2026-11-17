---
title: Hlola izakhi zekhonkrithi bese wenza imithwalo yokuzamazama
summary: Setha izinti zamabhimu ekhonkrithi namakholomu, uwahlole ngo-ACI 318-19, wenze amandla asecaleni ngokuya ku-ASCE 7-22 ophahleni oqinile, bese ubona ukudonsela ezitezini. Usizo lokuhlola kwenjiniyela.
keywords: ikhonkrithi, ikhonkrithi eqinisiwe, ACI 318, ACI 318-19, insimbi yokudweba, ibhimu, ikholomu, ukusika, izibopho, ukuzamazama, amandla asecaleni, ELF, ASCE 7-22, ukudonsela, ukudonsela ezitezini, amaphansi, isilabhu esiqinile, isisindo sesitezi, ukusetshenziswa, isakhiwo, injiniyela
from: 94d3001d
---

Amabhulokhi {{ui:Izakhi zekhonkrithi}} no-{{ui:Imithwalo yokuzamazama}} ethebhini {{ui:Ukuhlaziya}} ahlola amabhimu nezinsika zekhonkrithi eqinisiwe, futhi enze amandla asecaleni alandelwa yisiyaluyalu ezitezini zefreyimu. Zombili zilandela ukusebenza kwethebhu {{ui:Ukuhlaziya}} futhi zigcinwa ndawonye nemodeli.

:::warning
Imiphumela **ukuhlolwa yinjiniyela**: usizo kuze kubukwe yinjiniyela. Ukuhlola kwekhonkrithi kusebenzisa amandla e-first-order, ngaphandle kokuthi ikholomu kwifreyimu othi ayi-non-sway liklanywa ngomzuzu owandisiwe, ngaphandle kokwandiswa kwe-sway, akukho ukuklanywa kokuphendula, akukho ukuqinisa okungokokuzamazama (isahluko 18 se-ACI), nakho akukho ukwakhiwa kwezibopho. Imithwalo yokuzamazama ishiya ngaphandle isici sokweqa, umthelela wokuzamazama ohlangothini oluqondile, ukwandiswa kokuphendula nemiphumela ye-P-delta. Imithwalo yomoya akakakwakhiwa.
:::

## Dweba izinto

Dweba izinto zekhonkrithi njengezikwele ezinde: iprofayili {{ui:Ipuleti}} njenge `PL400x400` yekholomu ne `PL300x600` yebhimu inikeza isigaba. Amakholomu namabhimu ayabekwa njenganoma yiliphi elinye ilunga.

## Setha izigaba

Ibhulokhi {{ui:Izakhi zekhonkrithi}} ibala zonke izigaba ezisetshenziswa yizinto. Cindezela {{ui:Setha njengekhonkrithi…}} kulezo ezingezekhonkrithi. I-DetailCraft ifunda ububanzi **b** (ngokuya kwe-y yalelo lunga) nokujula **h** (ngokuya kwe-z) kusuka ekuprofayileni okudwetshiwe, bese icela:

- **ukumbozwa** kuya ephakathini wezinti, nezinti ezingaphezulu, ezingaphansi nezinhlangothini (zingaki nobubanzi bani) webhimu, noma **ukhetho lwezinti zekholomu** (izinti ngokuya ku-b nokuya ku-h, ububanzi bani, izibopho ezijikelezayo) lensika;
- **izibopho**: imilenze, ububanzi nesikhala;
- okwenziwa yilunga **njengo**: ibhimu, ikholomu, noma linqunywe ngamandla alo (ilunga elimile, noma elithwala ngaphezu kuka-0.10 f′c Ag, liyikholomu).

Setha f′c, ukuvuna kwezinti i-fy kanye nokuvuna kwezibopho i-fyt (u-420 MPa ophezulu ubalwa ekushayeni), i-K nokuthi ifreyimu iyi-sway noma i-non-sway ngaphezulu kwazo. Isigaba esisethwe njengekhonkrithi sihlaziywa njengekhonkrithi: E = 4700 √f′c, 2400 kg/m³, futhi ngokuzenzakalelayo ngezigaba **eziqhekekile** (amakholomu 0.70 Ig, amabhimu 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Khetha {{ui:Izigaba eziphelele}} ukuze ukuvale lokho.

## Yenza izinhlanganisela bese uhlola

Nikeza amacala omthwalo uhlobo lwawo, bese {{ui:Yenza izinhlanganisela}}: i-ACI 318-19 ithatha izinhlanganisela zamandla ze-ASCE 7 (§5.3.1). Cindezela {{ui:Hlola ikhonkrithi}} bese wonke ilunga lithola ukusetshenziswa, lidwetshwe emodelini njengokuhlolwa kwensimbi: ukugoba nensimbi encane (22.2, 9.6.1.2), isivuno esilawulwa ukuqina (9.3.3.1), ukushaya nezibopho (22.5, 9.6.3), isikhala sezibopho, nomthwalo ophakathi kanye nomzuzu wamakholomu (22.4, nendlela ka-Bresler yokugoba kwezinhlangothi ezimbili). Ilunga lapho isigaba esidwetshiwe sihluke ku-b × h oyithayile lifundeka njengo-*ohlolwe ngengxenye*, njengalokhu kwenzeka nasekholomu elide noma ekugoqeni ngaphezu komkhawulo: lezo azikaklanywa.

Izinto ezedlule ukukwazi kwazo zibhalwe ku-{{ui:Izinkinga}}; yamukela enye ngesizathu, noma lungisa isigaba.

## Amaphansi nemithwalo yokuzamazama

Iphansi iyinqwaba lapho imodeli ibanjwe khona yisilabhu esiqinile (**idayaphuramu eqinile**). Ebhulokini {{ui:Imithwalo yokuzamazama}} cindezela {{ui:Thola amaphansi}}: ithatha amazinga lapho amabhimu amabili noma ngaphezulu ehlangana khona. Bese unikeza ngalinye iphansi **isisindo sayo sokuzamazama**, uthayiphe noma ulifunde: {{ui:Thatha izisindo emacaleni}} ifaka imithwalo eqondile yamacala onikeza ifaktha (icala lesisindo lingu-1; engeza u-0.25 ocaleni lomthwalo wokugcina noma lukashukela uphahla oluyisicaba njengoba i-ASCE 7-22 12.7.2 ifuna). Umthwalo oqondile wenodi ngayinye uya kuphansi elingaphezulu noma elilingana nalo, ngakho ikholomu elisesikhaleni sephansi amabili linikeza isigamu sesisindo sayo kulo ngalinye.

Gcwalisa amanani okuklama: SDS, SD1, S1, R, Ie, Cd, TL, uhlelo lwesakhiwo (ngesikhathi) nezinga lobungozi. {{ui:Yenza amacala okuzamazama}} bese ibala isikhathi kusukela ekuphakameni kwesakhiwo (12.8.2.1), i-base shear V = Cs W (12.8.1), iyisabalalise phezulu ngamaphansi (12.8.3) bese ibhala amacala omthwalo amane, ku-X nasku-Y nokuphambuka kwe-torsion okungaqondile okungu-5 % ngakunye (12.8.4.2). Amandla esitezi nokuhlolwa kokudonsela kwesitezi (12.8.6, Table 12.12-1, ukudonsela Cd δxe / Ie kuya ku-0.020 hsx) avela ngemva kokusebenza; ukudonsela okudlula umkhawulo wakho nakho kuyinkinga. Cindezela futhi {{ui:Yenza izinhlanganisela}} ukuze uletha amacala okuzamazama ezinhlanganisweni.

**Isikhathi kusukela ekuhlaziyeni.** Isikhathi esiseduze i-Ta sivela ekuphakameni kwesakhiwo. Uma usuqhube ukuhlaziywa namacala okuzamazama, {{ui:Thatha isikhathi ekuhlaziyeni}} ifunda ukuthi ngabe iphansi ngalinye lanyakaza kangakanani ngaphansi kwamandla bese isebenzisa isikhathi ngendlela ka-Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), kanye ku-X kanye ku-Y; amacala okuzamazama aphinde enziwe ngaso. Isikhathi esisetshenzisiwe asikaze sedlule Cu·Ta (ASCE 7-22 12.8.2), ngakho imodeli ethambile ayikwazi ukwehlisa i-base shear ngaphansi kwalokho. Thatha isikhathi futhi ngemva kokusebenza kwesibili: sizinzile ezinyathelweni ezimbalwa. Susa ukukhethwa kwe-{{ui:Isikhathi esivela ekuhlaziyeni}} ukubuyela ku-Ta.

**Amakholomu amade (ACI 318-19 6.6.4.5).** Kwifreyimu oyibiza ngokuthi non-sway, ikholomu lapho k·ℓu/r lidlula 34 + 12·M1/M2 (kodwa kungadluli ku-40) liklanywa ngomzuzu owandisiwe Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² ngo-(EI)eff = 0.4 Ec Ig / (1 + βdns), kanye nomzuzu omncane Pu (15 + 0.03 h). I-βdns (0.6 ekuqaleni) iyingxenye yomthwalo oqondile ophindaphindwe oqinisekisiwe: thayipha eyakho. Ikholomu lapho i-Pu ifinyelela ku-0.75 Pc lehlulekela ukuhlolwa kwalo okuwumehluko. Umbiko ubala izinombolo zekholomu ngalinye elide. Kwifreyimu eyi-**sway** ikholomu elide isasalela "lihlolwe ngengxenye": ukukhulisa kwalo kudinga ukuhlaziywa kwe-second-order, okungakakhiwa.

**Amaslabhu.** Uma imodeli inamapuleti, ibhulokhi {{ui:Ukuqinisa kwesilabhu}} ithatha izikhathi zamapuleti zazo zonke izinhlanganisela zamandla futhi, ngomthetho ka-Wood–Armer (ukugoba nokupheka ndawonye), ibala insimbi edingekayo ngayinye yesendlalelo ngemitha: phansi nphezulu, ku-x nasku-y. Unikeza ukujula, ukumbozwa namabha; ithebhu ikhombisa edingekayo nenikeziwe, nokushaya kohlangothi olulodwa nokuthi φVc, nesendlalelo esiyisilinganiso esinqunyiwe liyinkinga nensika yayo. Ukudonsela, ukushaya ngaphansi kwamakholomu nezinti zokuvalela ezimbotsheni azifakiwe; nomzuzu phezu kwesekelo uhlangana kancane nama-plate amane-node.

Iphansi ngalinye olibhalayo liba yidayaphuramu eqinile ekuhlaziyeni: amabhimu alo akwazi umthwalo oqondile ngenxa yokunyakaza kwephansi. Ukukhishwa kwe-CraftScript akwenziwe kumodeli enamaphansi.

## Umbiko

{{ui:Umbiko (PDF)}} no-{{ui:Umbiko (CSV)}} bayathola amatafula ekhonkrithi (okuthathwayo, ukusetshenziswa ngelunga ngalinye, zonke izigatshana), amapharamitha okuzamazama ne-base shear, amandla ophansi nethebhu yokudonsela.
