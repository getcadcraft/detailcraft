---
title: Pārbaudīt betona elementus un veidot seismiskās slodzes
summary: Iestatiet betona sijų un kolonnu stiegrojumu, pārbaudiet to pēc ACI 318-19, veidojiet ekvivalentos horizontālos spēkus pēc ASCE 7-22 uz stingrām pārsegām un redziet stāvu nobīdi. Palīglīdzeklis inženierim pārbaudei.
keywords: betons, dzelzsbetons, ACI 318, ACI 318-19, stiegrojums, sija, kolonna, bīde, saites, seismika, zemestrīce, ekvivalents horizontālais spēks, ELF, ASCE 7-22, nobīde, stāvu nobīde, pārsegi, stingrs diafragma, stāva svars, izmantojums, konstrukcija, inženieris
from: 94d3001d
---

Bloki {{ui:Betona elementi}} un {{ui:Seismiskās slodzes}} cilnē {{ui:Aprēķins}} pārbauda dzelzsbetona sijas un kolonnas un veido zemestrīces sānu spēkus uz rāmja stāviem. Abi seko cilnes {{ui:Aprēķins}} palaišanai un tiek saglabāti kopā ar modeli.

:::warning
Rezultāti ir **paredzēti inženiera pārbaudei**: palīglīdzeklis, līdz kāds tos ir pārskatījis. Betona pārbaudēs izmanto pirmās kārtas spēkus, izņemot to, ka kolonna rāmī bez sānu nobīdes (non-sway) tiek projektēta pēc tās palielinātā momenta, bez nobīdes palielināšanas, bez griezes projektēšanas, bez seismiskās detalizēšanas (ACI 18. nodaļa) un bez saišu detalizēšanas. Seismiskās slodzes neņem vērā redundances koeficientu, vertikālo seismisko efektu, griezes palielināšanu un P-delta efektus. Vēja slodzes vēl nav izveidotas.
:::

## Elementu zīmēšana

Zīmējiet betona elementus kā taisnstūrus: {{ui:Plāksne}} profils, piemēram, `PL400x400` kolonnai un `PL300x600` sijai, dod šķērsgriezumu. Kolonnas un sijas novietojas tāpat kā jebkurš cits elements.

## Šķērsgriezumu iestatīšana

Bloks {{ui:Betona elementi}} uzskaita katru šķērsgriezumu, ko elementi izmanto. Nospiediet {{ui:Iestatīt kā betonu…}} tiem, kas ir betona. DetailCraft nolasa platumu **b** (pa paša elementa y asi) un dziļumu **h** (pa z) no zīmētā profila un pēc tam pieprasa:

- **aizsargslāni** līdz stieņu centram un **augšējos**, **apakšējos** un **sānu** stieņus (cik un kāda diametra) sijai vai **kolonnas karkasu** (stieņi pa b un pa h, kāds diametrs, spirālveida saites) kolonnai;
- **saites**: kāju skaits, diametrs un solis;
- ko elements **darbojas kā**: sija, kolonna vai nosaka pēc tā spēkiem (vertikāls elements vai tāds, kas nes vairāk nekā 0.10 f′c Ag, ir kolonna).

Virs tiem iestatiet f′c, stieņu tecēšanas robežu fy un saišu tecēšanas robežu fyt (bīdei skaitās līdz 420 MPa), K un to, vai rāmis ir ar sānu nobīdi vai bez tās. Šķērsgriezums, kas iestatīts kā betons, tiek analizēts kā betons: E = 4700 √f′c, 2400 kg/m³, un pēc noklusējuma ar **plaisātiem šķērsgriezumiem** (kolonnām 0.70 Ig, sijām 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Izvēlieties {{ui:Bruto griezumi}}, lai to izslēgtu.

## Kombināciju veidošana un pārbaude

Norādiet slodžu gadījumiem to veidu, pēc tam {{ui:Izveidot kombinācijas}}: ACI 318-19 pieņem ASCE 7 izturības kombinācijas (§5.3.1). Nospiediet {{ui:Pārbaudīt betonu}}, un katram elementam tiek piešķirts izmantojums, kas modelī iekrāsots kā tērauda pārbaudēs: liece un minimālais tērauds (22.2, 9.6.1.2), spriedzes kontrolēta deformācija (9.3.3.1), bīde ar saitēm (22.5, 9.6.3), saišu solis un aksiālā slodze ar momentu kolonnām (22.4, ar Bresler metodi divvirzienu liecei). Elements, kur zīmētais šķērsgriezums atšķiras no ierakstītā b × h, tiek parādīts kā *daļēji pārbaudīts*, tāpat kā tieva kolonna vai griezne virs sliekšņa: tās nav projektētas.

Elementi, kas pārsniedz savu kapacitāti, uzskaitīti {{ui:Problēmas}}; pieņemiet vienu ar pamatojumu vai labojiet šķērsgriezumu.

## Stāvi un seismiskās slodzes

Stāvs ir līmenis, kur rāmi saista stingra plātne (**stingrs diafragma**). Blokā {{ui:Seismiskās slodzes}} nospiediet {{ui:Atrast stāvus}}: tiek ņemti līmeņi, kur sastopas divas vai vairākas sijas. Pēc tam katram stāvam piešķiriet tā **seismisko svaru**, ierakstītu vai nolasītu: {{ui:Ņemt svarus no gadījumiem}} saskaita vertikālās slodzes tiem gadījumiem, kuriem norādāt koeficientu (pastāvīgajai slodzei ir 1; pievienojiet 0.25 glabāšanas mainīgajai slodzei vai sniegam plakanam jumtam, kā prasa ASCE 7-22 12.7.2). Katra mezgla vertikālā slodze nonāk stāvā tajā vai virs tā, tāpēc kolonna starp diviem stāviem divus pusēs dod pusi sava svara katram.

Aizpildiet projektēšanas vērtības: SDS, SD1, S1, R, Ie, Cd, TL, konstrukcijas sistēmu (periodam) un riska kategoriju. {{ui:Izveidot seismiskos gadījumus}} pēc tam aprēķina periodu no ēkas augstuma (12.8.2.1), pamatbīdi V = Cs W (12.8.1), sadala to pa stāviem (12.8.3) un raksta četrus slodzes gadījumus X un Y virzienos ar 5 % nejaušo griezi katrā virzienā (12.8.4.2). Stāvu spēki un stāvu nobīdes pārbaude (12.8.6, 12.12-1 tabula, nobīde Cd δxe / Ie pret 0.020 hsx) parādās pēc palaišanas; nobīde virs robežas ir arī problēma. Vēlreiz nospiediet {{ui:Izveidot kombinācijas}}, lai seismiskie gadījumi tiktu iekļauti kombinācijās.

**Periods no analīzes.** Aptuvenais periods Ta iegūts no ēkas augstuma. Kad esat palaidis analīzi ar seismiskajiem gadījumiem, {{ui:Ņemt periodu no analīzes}} nolasa, cik tālu katrs stāvs pārvietojās zem spēkiem, un aprēķina periodu pēc Reilija metodes, T = 2π √(Σ w δ² / (g Σ f δ)), atsevišķi X un Y; ar to seismiskie gadījumi tiek veidoti vēlreiz. Izmantotais periods nekad nepārsniedz Cu·Ta (ASCE 7-22 12.8.2), tāpēc mīksts modelis nevar pazemināt pamatbīdi zem šīs vērtības. Pēc otrās palaišanas periodu ņemiet vēlreiz: tas nostabilizējas vienā vai divos soļos. Lai atgrieztos pie Ta, noņemiet atzīmi no {{ui:Periods no analīzes}}.

**Tievas kolonnas (ACI 318-19 6.6.4.5).** Rāmim bez sānu nobīdes kolonna, kuras k·ℓu/r pārsniedz 34 + 12·M1/M2 (ne vairāk kā 40), tiek projektēta pēc palielinātā momenta Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² ar (EI)eff = 0.4 Ec Ig / (1 + βdns), un minimālais moments Pu (15 + 0.03 h). βdns (sākumā 0.6) ir noturētās aksiālās slodzes daļa no faktorizētās: ierakstiet savu. Kolonna, kuras Pu sasniedz 0.75 Pc, neizpildās ar savu pārbaudi. Atskaitē uzskaitīti katras tievās kolonnas skaitļi. Rāmī **ar sānu nobīdi** tieva kolonna joprojām ir „daļēji pārbaudīta”: tās palielināšanai nepieciešama otrās kārtas analīze, kas vēl nav izveidota.

**Pārsegi.** Ja modelī ir plāksnes, bloks {{ui:Pārseguma stiegrojums}} ņem katras izturības kombinācijas plākšņu momentus un pēc Vuda–Armera likuma (liece un vērpe kopā) aprēķina, cik tērauda katram slānim vajadzīgs metrā: apakšā un augšā, x un y virzienos. Jūs norādāt biezumu, aizsargslāni un stieņus; tabulā redzams nepieciešamais pret doto un vienvirziena bīde pret φVc, un slānis, kas nesasniedz, ir problēma ar attiecīgo punktu. Novirze, caurspiešana pie kolonnām un atveru malu stieņi nav aptverti, un moments virs balsta ar četrmezglu plāksnēm konverģē lēni.

Katrs jūsu uzskaitītais stāvs analīzē kļūst par stingru diafragmu: tā sijas nenes aksiālo spēku no stāva pārvietošanās. CraftScript eksports nav paredzēts modelim ar stāviem.

## Atskaite

{{ui:Atskaite (PDF)}} un {{ui:Atskaite (CSV)}} papildinās ar betona tabulām (pieņēmumi, izmantojums pa elementiem, katrs punkts), seismiskajiem parametriem un pamatbīdi, spēkiem uz stāviem un nobīdes tabulu.
