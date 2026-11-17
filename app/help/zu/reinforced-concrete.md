---
title: Hlaziya amabhimu, amakholomu, amaslebhu nodonga lwekhonkolithi eqinisiwe
summary: Engeza amabhimu, amakholomu, amaslebhu nodonga lwekhonkolithi ngegridi, unikeze izinti, izinti zokubopha nezibopho, uhlole ukugxuma nokubamba ngokuya ku-ACI 318-19 noma i-EN 1992-1-1, bese wenza imidwebo yokukhiqiza nemishidi yokugoba izinti.
keywords: ikhonkolithi eqinisiwe, insimbi yokuqinisa, ukuqiniswa, ibhimu, ikholomu, islebhu, udonga, izinti zokubopha, izibopho, ukugxuma, ukubamba, ubude bokuthuthukisa, ld, ldh, lbd, ukumbozwa, ibanga, izinti zokuqinisa, ukuvulwa, imethi, amamaki wenti, uhlelo lokugoba, bbs, umdwebo wokukhiqiza, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, ukungenisa i-IFC
from: 3835b7ec
---

Ithebhu {{ui:Concrete}} ngaphansi kombono iyasho izinti zamabhimu ekhonkolithi, amakholomu, amaslebhu nodonga. Unikeza usayizi nezinti; i-DetailCraft ibeka yonke into, iyinombolo, ihlole ukugxuma, ukubamba, ukumbozwa nebanga ngokuya esigabeni esivela kso, futhi iyidwebe.

:::warning
I-DetailCraft ibonisa izinti onazinikeza kuyo. Ayiziklamezi. Yonke imiphumela ingeyokuhlolwa yinjiniyela.
:::

## Vula ithebhu yeKhonkolithi

Khetha ithebhu {{ui:Concrete}} ngaphansi kombono. Ku-layout ye-ribbon, i-{{ui:Concrete}} isethebhini {{ui:Modeling}} eduze kwe-{{ui:Footing}}. Ngomugqa womyalo wesitayela sokudweba, thayipha {{cmd:CONCRETE}}.

## Engeza into ngegridi

Izinto zekhonkolithi zibekwa emigqeni yegridi kanye nezingqimba zemodeli, ngakho zilungiselele kuqala (ipaneli yesobunxele).

1. Ku-{{ui:Add by grid}}, khetha {{ui:Element}}: {{ui:Concrete beam}}, {{ui:Concrete column}}, {{ui:Slab}} noma {{ui:Wall}}.
2. Khetha imigqa yegridi namazinga:
   - ibhimu lihamba kusukela kwenye indawo yokuhlangana kuye kwenye, phezulu kwalo sekusezingeni;
   - ikholomu lime endaweni yokuhlangana, kusukela kwelinye izinga kuya kwelinye;
   - islebhu ligcwalisa unxande phakathi kwemigqa emibili yegridi enezinombolo nemibili enezinhlamvu, phezulu kwalo sekusezingeni;
   - udonga luhamba ngomugqa wayo maphakathi kusukela kwenye indawo yokuhlangana kuye kwenye, kusukela kwelinye izinga kuya kwelinye.
3. Nikeza usayizi bese ukhetha {{ui:Add}}. Into ikhethiwe futhi izinkambu zayo zivulwa ephaneli {{ui:Properties}}.

Ngayinye into iqala ngezinti ezingamanani okuqala, hhayi ukuklama: zishintshele ezezinjiniyela.

## Shintsha izinti

Khetha into (kumbono, noma igama layo ethebhini {{ui:Concrete}}). Ephaneli {{ui:Properties}} kukhona:

| Into | Okusethwayo |
|---|---|
| Ibhimu | Ububanzi, ubujulile, ukumbozwa okusobala; izinti eziphezulu nezingezansi (usayizi, inani, eziqondile noma amahhuku angu-90° emaphethelweni); izinti zohlangothi; izinti zokubopha (usayizi, amahhuku angu-135° noma angu-90°, ibanga lokubopha lokuqala kusuka ebusweni bokuxhasa, ubude nebanga lendawo yokuphela, nebanga phakathi); ubude bokuxhasa; ubude bokugxuma |
| Ikholomu | Ububanzi, ubujulile obuhamba ngaphesheya, ukujikeleza, ukumbozwa; izinti ezinde ebusweni ngabunye; izibopho njengezinti zokubopha; into izinti ezenza phezulu (ukugxuma nekholomu elingenhla, ukungena esilabhini, noma ukuma) |
| Islebhu | Ukujula, usayizi, phezulu, ukumbozwa; imethi engezansi nemethi engenhla ngayinye ngendlela yayo (usayizi nebanga); izinti ze-U ezungeze imiphetho; {{ui:Trimmer bars}}; ukuvulwa |
| Udonga | Ubukhulu, ukumbozwa, izingqimba eziyodwa noma ezimbili, izinti eziqondile nezimile, izinti ze-U emaphethelweni, izinti ezigxunyiwe ngaphezulu noma cha, {{ui:Trimmer bars}}, ukuvulwa |

Yonke inguquko ingenye isinyathelo se-undo. Inguquko engakwazi ukwakhiwa iyenqatshwa futhi ibha yesimo itshela ngani, isibonelo "Ukuvulwa akulingani ngaphakathi kwento nokumbozwa kwayo."

Izibopho nezinti zokubopha zivaliwe, zinamahhuku omabili ekhoneni elilodwa. Izinti zebhimu ezingena ekholomini lekhonkolithi emaphethelweni azo zifinyelela ebusweni obukude bekholomu ngaphandle kokumbozwa; lapho kungekho kholomu, nikeza i-{{ui:Support length at the start (mm)}} nasekugcineni.

## Ukugxuma nokubamba

Izinti ezinde kuno-{{ui:Stock bar length (mm)}} (12000 ukuqala nalo) zinqunywa zibe izingxenye ezilinganayo, zigxunyiwe. Ithebhu {{ui:Laps and anchorage}} ilanda yonke ukugxuma nokubamba: okudingekayo, nesigatshana sakho nemigomo yaso, nokuthi isakhiwo sinani.

- Ubude bokugxuma obungu-0 kusho "njengoba kudingeka": ubude okunikezwa yikhodi, bujikelezwe baye ku-25 mm.
- Thayipha ubude bokugxuma bakho ukuze usebenzise lokho. Uma bumfushane kunalokho okudingekayo, kuyinkinga (bheka ngezansi), futhi buphawulwa * ethebhuleni.
- Ukubamba kulinganiswa kusuka ebusweni bokuxhasa kuya ekugcineni kwenti ngaphakathi kokuxhasa. Ibhimu elingenaso isixhasi esaziwayo liyasho lokho esikhundleni sokukuhlola.
- Ikholomu emi esisekelweni ligxuma nezinti zokuqala zesisekelo, nekholomu elinye nezinti zalo: nokugxuma kwazo kuyahlolwa.

**ACI 318-19** (SI): izinti eziqondile ngokuqinile 25.4.2.3 (ithebhu, nge-ψt, ψe, ψg, λ), amahhuku ajwayelekile 25.4.3.1 (ψr 1.6 no-ψo 1.25 athathwa uma engaziwa ngenye indlela), izinti ngokucindezeleka 25.4.9.2, ukugxuma ngokuqinile 25.5.2.1 (Class B, noma Class A ezilungiselelweni), ukugxuma ngokucindezeleka 25.5.5.1.

**EN 1992-1-1**: ukubamba 8.4.4 nofbd kusuka ku-8.4.2 (ukubopha okuhle noma okubi), ukugxuma 8.7.3 no-α6 kuyo yonke inti egxunyiwe ngesigaba esisodwa. γc, γs no-αct aqala ngamanani anconyiwe; wabeka awe-annex yakho yezwe.

## Izinhlolo

Yonke inhlolo ehlulekayo itholakala ephaneli yezinkinga ye-shell (umthombo {{ui:Reinforcement checks}}), nohlwini {{ui:Checks}} lento:

| Ukuhlola | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Ukumbozwa | Ithebhu 20.5.1.3.1, ngokuvezwa | Ubuncane bokubopha, Ithebhu 4.2 (ukumbozwa kokuqina kuyawe ukukunikeza) |
| Ibanga elicacile lezinti | 25.2.1 (amabhimu, amasilabhu, odonga), 25.2.3 (amakholomu) | 8.2 (2) |
| Ibanga lezinti zokubopha | 9.7.6.2.2 | 9.2.2 (6) |
| Ubuncane bensimbi yebhimu | 9.6.1.2 | 9.2.1.1 (1) |
| Izinti zohlangothi zebhimu ezidlula ku-900 mm ubujulile | 9.7.2.3 | akuhlolwa |
| Ibanga lensimbi yekholomu, inani lezinti | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Izibopho: ibanga, usayizi, izibopho ezidlulayo | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Ibanga lesilabhu, ubuncane bensimbi | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Ibanga lodonga, ubuncane bensimbi, izingqimba ezimbili | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Ukugxuma, ukubamba | njengasenhla | njengasenhla |

Usayizi wezinhlayiya zesihlungo awaziwa, ngakho ibanga elicacile lihlolwa ngaphandle kwawo.

## Izimbobo, izinti zokuqinisa namaphethelo

Khetha {{ui:Add an opening}} ngaphansi kwesilabhu noma udonga oselikhethiwe bese usetha lapho kukhona nosayizi walo. Izinti ezidlula kuso zimisa ekumbozweni emaphethelweni alo. {{ui:Trimmer bars}} ziyengezwa ohlangothini ngalunye, endaweni efanayo, zithwele uhhafu wendawo yezinti ezisikiwe, nobude bokubamba obodwa ngemuva kokuvuleka. Lokhu kuyisimiso sokuqala se-DetailCraft, hhayi isigatshana sekhodi: shintsha {{ui:Trimmer bars}} ibe yezinjiniyela. Izinti zamakhona azengezwa.

Izinti ze-U ezungeze imiphetho ekhululekile yesilabhu nasemaphethelweni kadonga zinemilenze ngobude bokugxuma obulodwa.

## Amamaki wenti nohlelo lokugoba

Izinti ezifanayo zabelana ngomaki owodwa: izisekelo zigcina amamaki e-F (5F1), amabhimu athola B, amakholomu C, amasilabhu S kanti odonga W (7B1, 8C1, 4S2). Ithebhu {{ui:Bending schedule}} kanye ne-CSV yayo manje zibala yonke inti yesakhiwo, izisekelo kuqala. {{ui:Output}} › {{ui:More}} › {{ui:Bending}} iyayilanda.

## Imidwebo yokukhiqiza

Khetha {{ui:Output}} › {{ui:More}} › {{ui:Reinforcement drawings}}, {{ui:Reinforcement drawings}} ethebhini {{ui:Concrete}}, noma {{ui:Shop drawing}} eduze kwento eyodwa. Ngayinye into ithola ishidi elinombono wokuphakama (ipulani uma kuyisilabhu) elibonisa yonke inti nomaki wayo, izindawo zezinti zokubopha nezibopho, nokugxuma okunezilinganiso, kanye nesigaba esisemaphakathi. Kulandela imishidi yokugoba izinti ebala yonke imaki ngesimo sayo, izilinganiso zayo, inani, ubude bokusika kanye nesisindo.

Imishidi yenziwa njengemodeli njalo, futhi ngemva kwenguquko ngayinye ngenkathi ifasitela livulekile: ibhulokhi yesihloko iphatha inkomba yemodeli. Londoloza {{ui:This sheet as PDF}} noma {{ui:All sheets as PDF}}.

## Izinti ezivela kufayela le-IFC

{{ui:File}} › {{ui:Import IFC}} manje ifunda i-IfcReinforcingBar: diski ehamba ngomugqa wayo maphakathi ibuyela njengemilenze eqondile nokugoba, ngobubanzi bayo, ngomaki wayo nento eyibambayo. Izinti zigcinwa njengoba zafundwa (azikhishwa zibe yimithetho yebhimu noma yesilabhu), zibonakala embonweni, zibalwe ohlwini lohlelo lokugoba, bese zibhalwa kabusha ngokuthunyelwa kwe-i-IFC. Umbiko wokungenisa uyasho ukuthi zingaki izinti ezifundiwe, zazinosayizi bani, ezingeni elingaki, kanye nokuthi yini eyashiywa nangani.

Ibhimu, ikholomu, isilabhu noma udonga kulowo mafayela okunezinti noma okungeyensimbi ekhonkolithi akuthathwa njengensimbi; umbiko uyasho lokho. Ukuthunyelwa kwe-i-IFC kwe-DetailCraft kugcina incazelo yento ngayinye yekhonkolithi, ngakho ibuyela njengayo, nezinti zayo ziphinde zenziwe kuyo.

:::note
Ukufunda amafayela ohlelo lokuklama lwesakhiwo (hhayi i-IFC) akukakwakhiwa: thumela i-IFC kuwo.
:::

## Ukuthunyelwa kwe-IFC

Amabhimu, amakholomu, amasilabhu (anemingcele) nodonga lwekhonkolithi kuphuma njengo-IfcBeam, IfcColumn, IfcSlab kanye ne-IfcWall, ngayinye ine-IfcReinforcingBar yezinti zayo (izinti eziyinhloko, izinti zokubopha nezibopho, izinti zemiphetho) ehlanganiswe nayo, ngayinye yidiski ehamba ngomugqa wayo maphakathi nezigoba eziqondile ezigobeni, ngomaki wayo nobude bayo bokusika.
