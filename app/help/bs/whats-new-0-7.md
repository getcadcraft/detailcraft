---
title: Šta je novo u 0.7 (ranije)
summary: Provjere projekta čeličnih I-profila s kombinacijama opterećenja iz ASCE 7 ili EN 1990 i provjere elemenata prema AISC 360 ili EN 1993-1-1, izvoz USD modela čelika, alat za USD za asistente, traka Čelik s velikim i malim dugmadima, paneli koji se sklanjaju i dijalozi koji se pomjeraju.
keywords: šta je novo 0.7, ranije izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, provjere projekta, projektovanje čelika, iskorištenost, utilization, kombinacije opterećenja, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokod, nacionalni aneks, krovno korisno opterećenje, granica progiba, usd, usda, usdc, usdz, openusd, asistent, mcp, traka čelika, ribbon, podijeljeno dugme, jedinice, zbijeno, paneli, dijalozi, portugalski
from: 54a7a8f0
---

Ovo je ono što se promijenilo u DetailCraft 0.7 u odnosu na 0.6. Proračun okvira iz 0.6 sada ima drugi korak: provjeru čeličnih elemenata prema projektnom normativu.

## Novo

### Kosi spojevi (0.7.1)

- **Dva I-profila koja se sastaju pod uglom**, kao što su portalno koljeno ili slijeme: odaberite oba, izaberite {{ui:Mitre}} u meniju {{ui:More}} grupe {{ui:Connect}}, i oba kraja se sijeku po ravni koja polovi ugao. Čeone ploče spojene vijcima i rebra na struku su polja za označavanje u novom dijalogu za kosi spoj, a njegova numerisana polja odgovaraju crtežu vašeg spoja koji se pravi dok kucate. Kosi spoj prati elemente kad se pomjere i prenosi se na crteže, NC datoteke (kose reze), IFC i specifikaciju materijala. Vidi [Kosi spojevi](topic:mitres).

### Provjere projekta

- **Kombinacije opterećenja iz normativa.** Na kartici {{ui:Analysis}} novi blok {{ui:Design checks}} ima {{ui:Design code}}: ASCE 7 + AISC 360 (SAD, LRFD) ili EN 1990 + EN 1993-1-1 (Eurokod). Dajte svakom slučaju opterećenja njegovu vrstu (stalno, korisno, novo krovno korisno, snijeg, vjetar, seizmika), pritisnite {{ui:Make combinations}}, i DetailCraft upisuje kombinacije nosivosti i upotrebljivosti normativa za vaše slučajeve. Kombinacije koje ste sami upisali ostaju. Vidi [Napravi kombinacije](topic:design-checks#make-the-combinations).
- **Vrijednosti nacionalnog aneksa.** Za Eurokod faktori počinju od preporučenih vrijednosti; {{ui:National Annex values}} omogućava da upišete vrijednosti vaše zemlje, i one se čuvaju u modelu. Vidi [Napravi kombinacije](topic:design-checks#make-the-combinations).
- **Provjeri elemente.** {{ui:Check members}} provjerava svaki čelični I-profil na zatezanje, pritisak s izvijanjem, savijanje s bočnim torzionim izvijanjem, smicanje, savijanje s uzdužnom silom i progib u odnosu na {{ui:Deflection limit}} koju postavite. Tabela prikazuje iskorištenost svakog elementa, merodavnu provjeru i njenu kombinaciju, a elementi su obojeni na modelu (plavo, zeleno, oker, crveno, sivo za neprovjereno). Vidi [Provjera elemenata](topic:design-checks#check-the-members).
- **U izvještaju.** {{ui:Report (PDF)}} i {{ui:Report (CSV)}} dodaju izdanja normativa, postavke, iskorištenost po elementu i svaku korištenu klauzulu. Vidi [Izvještaj](topic:design-checks#the-report).
- **Pomoćno sredstvo dok inženjer ne pregleda rezultate.** Koriste se samo sile prvog reda. Šuplji profili, uglovi, U-profili, zavareni profili i vitki dijelovi ili dijelovi klase 4 imaju oznaku "nije provjereno", uz razlog; torzija, veze i beton se ne provjeravaju. Vidi [Šta nije provjereno](topic:design-checks#what-is-not-checked).

### USD

- **Izvezite model čelika kao USD.** {{ui:USD}} u grupi {{ui:Output}} zapisuje model kao {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} ili {{ui:Package (.usdz)}} za programe za renderovanje i slaganje scene: svaki sklop nosi svoje dijelove, svaki dio je njegov presjek duž dužine sa isječenim krajevima, i svaki nosi svoju oznaku dijela, profil, kvalitet, dužinu i težinu. Rupe za vijke, vijci, zavari i temelji nisu u USD mrežama. Vidi [Izvoz modela čelika kao USD](topic:usd).

### AI asistenti

- **USD za asistente.** Vaš vlastiti asistent, povezan preko CadCraft Studio, može izvesti model kao USD (`usd_export`), a u Studiju ga zapisati u folder koji ste dozvolili. Vidi [Šta asistent može tražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Promijenjeno

- **Traka Čelik** ima velika i mala dugmad: veliko {{ui:Beam}} pored malih {{ui:Column}}, {{ui:Brace}} i {{ui:Plate}} na {{ui:Modeling}} › {{ui:Members}}; veliko {{ui:End plates}} na {{ui:Detailing}} › {{ui:Connections}}, s {{ui:Splice}} i {{ui:Gusset}} u jednom podijeljenom dugmetu; veliko {{ui:Paste}} na {{ui:Edit}} › {{ui:Clipboard}}, s {{ui:Paste in place}} i {{ui:Duplicate}} iza strelice grupe. {{ui:Fabrication}} › {{ui:Exchange}} ima {{ui:Export USD}} pored IFC. Ostali stilovi menija izgledaju kao ranije. Vidi [Meniji, tasteri i miš](topic:menus-keys-and-mouse#the-three-styles).
- [Analiziraj okvir](topic:frame-analysis) sada upućuje na provjere projekta, a njegove kombinacije može napraviti normativ.

## U svim aplikacijama

- **Jedinice.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je posebna jedinica). Isključite jedinice koje nikad ne koristite i one nestaju iz lista; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. Vlastita polja DetailCraft još ne prate liste: njegove dužine se i dalje unose u milimetrima. Vidi [Jedinice, unesene vrijednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da zakačite ili izdvojite panel, ispustite je na traku drugog panela da dijelite jedan okvir kao kartice, zakačite je da se panel izvuče do ivice, ili ga sakrijte i vratite s ivice. Vidi [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Prevucite dijalog za naslovnu traku izvan crteža; vraća se tamo gdje ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Vidi [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primjera zahtjeva za vaš vlastiti asistent (srediti crtež, iscrtati skup listova, provjeriti crteže, postaviti pitanja o modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje mu trebaju, i svaki ponovo pokrenut našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Taj jezik, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju sve riječi aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sistem, nema mreže, neispravan potpis) umjesto samo "Gotovo", i prestaje ponovo prikazivati karticu Šta je novo koju ste zatvorili dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalator, izaberite {{ui:More info}}, zatim {{ui:Run anyway}}. Na Macu, prvi put, desni klik na CadCraft Studio i izaberite {{ui:Open}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema izdanja za iPad ili iPhone.
- Liste za ugao i nagib u {{ui:Units}} se čuvaju, ali ih još nijedno polje ne čita.
- **Provjere projekta još nije pregledao inženjer.** Naši testovi ih upoređuju s tabličnim vrijednostima i formulama urađenim ručno, a ne još s primjerima iz priručnika za projektovanje. Do pregleda su pomoćno sredstvo: elemente koji su bitni provjerite ručno.
- Provjere projekta koriste sile prvog reda (bez efekata drugog reda) i provjeravaju samo I-profile. Nije izrađeno: šuplji profili, uglovi, U-profili, zavareni profili, vitki (AISC) ili dijelovi klase 4 (Eurokod) pri savijanju, torzija, izvijanje smicanjem zajedno sa savijanjem, veze, zamor, požar, seizmičko detaljisanje i beton. Vitki dio pri pritisku isključuje provjere pritiska, a element se čita kao "prolazi, djelimično provjereno".
- Proračun okvira je i dalje prvog reda i linearan, i inženjer ga još nije isprobao na stvarnom projektu.
- Rupe za vijke, vijci, zavari i temelji nisu u USD izvozu.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet).
