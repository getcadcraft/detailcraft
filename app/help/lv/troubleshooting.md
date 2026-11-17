---
title: Problēmu novēršana
summary: Ko nozīmē DetailCraft ziņojumi un ko darīt, sākot no trūkstoša 3D skata līdz savienojumiem, kurus nevar izveidot.
keywords: problēma, kļūda, nedarbojas, palīdzība, labot, ziņojums, noraidīts, webgl, tukšs, brīdinājums, nevar, jautājums
from: f8c3b2b1
---

Lielāko daļu noraidījumu paskaidro statusa josla ekrāna apakšā vai cilne {{ui:Problēmas}}. Vispirms izlasiet tos. Zemāk ziņojumi citēti tā, kā tos rāda DetailCraft.

## Trūkst 3D skata

**"Šī pārlūkprogramma nevarēja palaist 3D grafiku (WebGL). Modelis, atskaites un eksports joprojām darbojas."**

Pārlūkprogramma nevarēja palaist WebGL, 3D grafiku, ar kuru DetailCraft zīmē.

1. Atjauniniet pārlūkprogrammu uz jaunāko versiju.
2. Ieslēdziet aparatūras paātrinājumu un restartējiet pārlūkprogrammu (skatiet zemāk).
3. Atjauniniet grafikas draiveri vai izmēģiniet citu pārlūkprogrammu. Attālās darbvirsmas un virtuālās mašīnas bieži nav WebGL.
4. Tikmēr jūs joprojām varat strādāt: novietojiet elementus ar formu {{ui:Pievienot pēc režģa}}, lasiet atskaites un eksportējiet. Tikai klikšķiem skatā vajag WebGL.

:::chromium
Lai ieslēgtu aparatūras paātrinājumu, atveriet **Settings, System** un ieslēdziet **Use graphics acceleration when available**, tad restartējiet.
:::

:::firefox
Lai ieslēgtu aparatūras paātrinājumu, atveriet **Settings, General, Performance**, noņemiet atzīmi no **Use recommended performance settings** un atzīmējiet **Use hardware acceleration when available**. Restartējiet Firefox.
:::

:::safari
Safari WebGL ir ieslēgts pēc noklusējuma. Atjauniniet macOS, ja skats joprojām nesākas, un pārbaudiet, vai neviens paplašinājums to nebloķē.
:::

Vairāk: [Pārlūkprogrammas un datori](common:browsers).

## Klikšķi skatā neko nedara

- **Nav krustpunkta tuvu klikšķim.** Novietošanas rīki piesaistās tikai režģa krustpunktiem. Klikšķis tālu no visiem punktiem neko nedara. Pietuviniet kursoru, līdz punkts iedegas.
- **Rīks ir {{ui:Atlasīt}}, un jūs noklikšķinājāt tukšā vietā.** Tas notīra atlasi.
- **Jūs vilkāt.** Nospiešana un atlaišana, kas atrodas vairāk par dažiem pikseļiem attālu, ir vilkšana: tā pagriež vai panoramē skatu.
- **Daļa ir nogriezta.** {{ui:Plāns}} un {{ui:Fasāde}} režīmos tērauds ārpus griezuma ir paslēpts un uz tā nevar noklikšķināt. Pārslēdzieties uz {{ui:3D}}.
- **Krustpunkts ir nepareizā līmenī.** {{ui:3D}} režīmā krustpunkti vairākos līmeņos var pārklāties ekrānā; klikšķis ņem tuvāko. Izmantojiet {{ui:Plāns}} vai {{ui:Fasāde}}.

## Novietošanas ziņojumi

| Ziņojums | Ko darīt |
|---|---|
| Kolonnai nav līmeņa virs Level 2, ko sasniegt. Vispirms pievienojiet līmeni. | Pievienojiet līmeni sadaļā {{ui:Līmeņi}} vai noklikšķiniet uz zemāka līmeņa |
| Izvēlieties citu krustpunktu otram galam. | Jūs noklikšķinājāt uz viena un tā paša punkta divreiz |
| Abi gali ir viens un tas pats punkts. | Formā {{ui:Pievienot pēc režģa}} punkti "No" un "To" ir vienādi |
| Pievienojiet režģa līnijas pa kreisi, lai novietotu elementus. | Modelī nav režģa līniju vienā virzienā |
| Nezināms profils "…" | Profila nav katalogā vai modeļa pielāgotajos profilos. Izvēlieties vienu no saraksta |
| Ierakstiet skaitli. | Skaitļa lauks bija tukšs vai satur tekstu |

## Savienojumus nevar izveidot

### "Šī sija nebeidzas uz kolonnas līnijas."

Galu plātnēm sijas galam jābūt tieši uz vertikālas kolonnas līnijas, starp tās apakšu un augšu (ar 1 mm precizitāti). Pārbaudiet sijas {{ui:Gali (x, y, z mm)}} un kolonnas pozīciju.

### "Šī sija saskaras ar kolonnas sienu vai leņķī"

Vai {{ui:Problēmas}} panelī: "Sijas, kas iestiprinātas kolonnas sienā, vēl nav veidotas: pagrieziet kolonnu par 90° vai izmantojiet citu savienojumu."

Sija iestiprināta kolonnas sienā. Atlasiet kolonnu un iestatiet {{ui:Pagrieziens (°)}} uz 90, tad mēģiniet vēlreiz. Sašķiebti savienojumi nav veidoti.

### "Galu plātnes ir veidotas tikai horizontālām sijām (šī sija slīpa)."

Abiem sijas galiem jābūt vienādā augstumā.

### "Galu plātnēm sijai jābūt vertikālai (pagrieziens 0)."

Atjaunojiet sijas {{ui:Pagrieziens (°)}} uz 0.

### "Galu plātnēm vajadzīga I formas sija." / "Galu plātnēm vajadzīga I formas kolonna."

Galu plātnes ir pieejamas tikai I formām (W, IPE, HEA, HEB vai pielāgota I forma).

### "Sijas gals vairs nav uz kolonnas līnijas."

Pēc savienojuma pievienošanas jūs pārvietojāt ssiju vai kolonnu. Pārvietojiet to atpakaļ vai dzēsiet savienojumu.

### "Savienojumi nogrieza šo elementu līdz nullei."

Savienojumi abos galos nogriež elementu tālāk nekā tā garums, piemēram, ļoti īsa sija starp dziļām kolonnām. Pārbaudiet elementa galus un plātnes biezumu.

### "Nav citu līdzīgu savienojumu bez savienojuma…"

{{ui:Līdzīgs}} kopē tikai uz savienojumiem ar to pašu sijas profilu, kolonnas profilu un savienojuma veidu (sija pie flanšas), kuriem vēl nav savienojuma.

### "Abiem galiem jau ir savienojumi." / "Šai kolonnai jau ir pamata plātne."

Atlasiet esošo savienojumu, lai to mainītu, vai vispirms to dzēsiet.

## Brīdinājumi cilnē Problēmas

Brīdinājumi neaptur savienojuma vai pamata izveidi; tie lūdz pārbaudīt. Malu un soļa brīdinājumi izmanto EN 1993-1-8 Table 3.3 minimumus (mala 1.2 × caurums, solis 2.2 × caurums, attālums 2.4 × caurums). Ja jūsu projekts izmanto citus noteikumus, brīdinājums var nebūt piemērojams; DetailCraft nekonstruē savienojumus.

"caurums atrodas ārpus elementa gala" nozīmē, ka cauruma x ir mazāks par 0 vai lielāks par griezuma garumu. Atcerieties, ka x tiek mērīts no griezuma sākuma pēc tam, kad savienojumi elementu ir nogriezuši.

## Pamatu izmaiņas noraidītas

| Ziņojums | Ko darīt |
|---|---|
| Segums neatstāj vietas stieņiem šajā pamatā. | Padariet pamatu lielāku vai segumu mazāku |
| Pamats ir pārāk seklis divām stieņu kārtām segumā. | Padariet to dziļāku vai samaziniet segumu |
| Sākuma stieņi neiederas pamatā ar 75 mm segumu. | Mazāk sākuma stieņu, mazāks solis vai lielāks pamats |
| Stieņu solim jābūt 50–1000 mm. | Ierakstiet soli šajā diapazonā |
| Garumam jābūt 300–50000 mm. | Pamatu izmēriem ir ierobežojumi: garums un platums 300 līdz 50000, dziļums 150 līdz 10000 |

## Režģi un līmeņi noraidīti

| Ziņojums | Ko darīt |
|---|---|
| Numurētiem režģiem norādiet vienu soli starp katru līniju pāri (4). | Saskaitiet intervālus: piecām līnijām vajag četrus soļus |
| Burtiem apzīmētiem režģiem soļiem jābūt pozitīviem milimetriem. | Nav nulles, negatīvu vērtību vai teksta |
| Numurētiem režģiem režģa apzīmējumiem jābūt atšķirīgiem. | Divām līnijām ir viens un tas pats apzīmējums |
| Ne vairāk kā 60 režģa līnijas katrā virzienā. | Sadaliet modeli |
| Paturiet vismaz vienu līmeni. | Jūs noņēmāt visas līmeņu rindas |
| Katram līmenim jābūt nosaukumam. / Diviem līmeņiem ir nosaukums "…". | Dodiet katram līmenim atšķirīgu nosaukumu |

## Faila atvēršana neizdodas

| Ziņojums | Cēlonis |
|---|---|
| DetailCraft atver savus modeļus (.detailcraft.json). IFC importēšana vēl nav veidota. | Fails nav `.json` fails |
| Šis nav DetailCraft modelis (nav JSON). | Fails ir bojāts vai ir cits JSON |
| Šis nav DetailCraft modelis. | JSON fails no citas programmas |
| Šo modeli saglabāja jaunāks DetailCraft (formāts 2). | Atveriet to jaunākajā DetailCraft, kurā tas tika saglabāts |
| Šis fails ir par lielu, lai būtu DetailCraft modelis. | Pāri 50 MB |

Kad fails atveras ar brīdinājumiem, piemēram, "2 elementi nebija derīgi un tika izlaisti.", pārējais modelis ir kārtībā. Nesaglabājiet pāri oriģinālam, līdz neesat pārbaudījis, kas tika izlaists.

## Eksporti

| Ziņojums | Cēlonis |
|---|---|
| Vēl nav ko eksportēt. | {{ui:IFC}} ar tukšu modeli |
| Nav I formas vai plātņu detaļu, kam rakstīt NC failus. | Modelī ir tikai kanāli, leņķi vai caurules |
| Nav rakstīts (līdz šim tikai I formas un plātnes): … | Šīs marķējumi nav I formas vai plātnes; pārējie ir rakstīti |
| Nav pamatu, tāpēc nav stieņu, ko plānot. | {{ui:Liekšana}} bez pamatiem |
| … rakstzīme(s) ārpus PDF fonta drukātas kā "?". | Modeļa nosaukumā vai klasē ir rakstzīmes, kuru PDF fontam nav |

{{ui:Darbnīcas rasējums}} pelēks: modelim vēl nav detaļu.

## Lejupielādes neparādās

Katrs saglabājums un eksports ir pārlūkprogrammas lejupielāde. Pārbaudiet pārlūkprogrammas lejupielāžu sarakstu. Ja pārlūkprogramma jautā pirms vairāku failu lejupielādes vai bloķē lejupielādes no šīs vietnes, atļaujiet tās. Safari pārbaudiet lejupielādes pogu rīkjoslā.

## Taustiņi nedara neko

- Kursors ir teksta vai skaitļu laukā: rīku taustiņi un {{key:Delete}} tajā tiek ignorēti, lai jūs varētu rakstīt. Nospiediet {{key:Tab}} vai noklikšķiniet skatā.
- Ir atvērts dialoga logs: vispirms aizveriet to.
- Pārlūkprogramma kontrolē tastatūru (piemēram, adrešu josla): noklikšķiniet DetailCraft iekšpusē.
- {{key:Ctrl+Shift+F}} izmanto Control arī uz Mac.

## Problēmas bezsaistē

Poga {{ui:Saglabāt bezsaistei}} lietotnes joslā rāda, kādā stāvoklī ir bezsaistes kopija. Kā darbojas saglabāšana: [Darbs bezsaistē](common:offline).

| Poga rāda | Ko tas nozīmē | Ko darīt |
|---|---|---|
| {{ui:Saglabāt bezsaistei}} | Šajā pārlūkprogrammā vēl nav bezsaistes kopijas | Izvēlieties to, kad esat tiešsaistē |
| Saving 5 of 20 | Notiek saglabāšana | Pagaidiet, līdz parādās {{ui:Gatavs darbam bezsaistē}}; paturiet cilni atvērtu |
| {{ui:Gatavs darbam bezsaistē}} | DetailCraft, tā 3D skats, katrs eksports un šī palīdzība darbojas bez savienojuma | Nekas. Noklikšķiniet, lai {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} vai {{ui:Noņemt bezsaistes kopiju}} |
| {{ui:Neizdevās saglabāt}} | Daži faili nav lejupielādēti | Pārbaudiet savienojumu un noklikšķiniet, lai mēģinātu vēlreiz |
| {{ui:Bezsaiste nav pieejama}} | Šis logs nevar glabāt bezsaistes kopiju: privātie logi un daži pārvaldīti datori to bloķē | Izmantojiet parasto logu vai strādājiet tiešsaistē |

Ja esat bezsaistē un poga nerāda {{ui:Gatavs darbam bezsaistē}}, nepārlādējiet un neaizveriet cilni: tas, kas jau ir ielādēts, turpina darboties. Saglabājiet modeli ar {{key:Mod+S}} un pagaidiet, līdz atkal esat tiešsaistē.

## Nesaglabāts darbs

Ja pārlūkprogramma jautā, vai atstāt lapu, DetailCraft ir nesaglabātas izmaiņas. Izvēlieties palikt un tad nospiediet {{key:Mod+S}}. DetailCraft nevar atjaunot modeli pēc cilnes aizvēršanas.

## Joprojām iestrēdzis

Pierakstiet, ko darījāt, un precīzo ziņojumu, un informējiet mūs caur [atbalsta lapu](https://getcadcraft.com/support).
