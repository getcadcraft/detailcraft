---
title: Šta je novo u 0.7
summary: Provere projekta čeličnih I-profila sa kombinacijama opterećenja po ASCE 7 ili EN 1990 i provere elemenata po AISC 360 ili EN 1993-1-1, USD izvoz čeličnog modela, alatka asistenta za USD, Čelična traka sa velikim i malim dugmadima, paneli koji se sklanjaju i dijalozi koji se pomeraju.
keywords: šta je novo, beleške o izdanju, izmene, promene, 0.7, verzija, nove funkcije, provere projekta, čelični proračun, iskorišćenost, kombinacije opterećenja, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Evrokod, nacionalni aneks, krovno korisno opterećenje, granica progiba, usd, usda, usdc, usdz, openusd, asistent, mcp, čelična traka, traka, podeljeno dugme, jedinice, zbijeno, paneli, dijalozi, portugalski
from: 17d1e0bb
---

Ovo je šta se promenilo u DetailCraft 0.7 u odnosu na 0.6. Analiza okvira iz 0.6 sada ima drugi korak: proveru čeličnih elemenata prema projektnom propisu.

## Novo

### Gerovanje spojeva (0.7.1)

- **Dva I-profila koji se sastaju pod uglom**, kao kolenica portala ili sleme: izaberite oba, izaberite {{ui:Gerovanje}} u meniju {{ui:Više}} grupe {{ui:Poveži}}, i oba kraja se seku po ravni koja polovi ugao. Čeoni limovi zavrnuti jedan za drugi i rebra za ukrućenje su polja za štikliranje u novom dijalogu Gerovanje, čiji numerisani nazivi polja se poklapaju sa crtežom vašeg spoja koji se pravi dok kucate. Gerovanje prati elemente kada se oni pomere, i prenosi se na crteže, NC datoteke (kose preseke), IFC i spisak materijala. Pogledajte [Gerovanje spojeva](topic:mitres).

### Proračunske provere

- **Kombinacije opterećenja iz propisa.** Na kartici {{ui:Analiza}} novi blok {{ui:Proračunske provere}} ima {{ui:Projektni propis}}: ASCE 7 + AISC 360 (SAD, LRFD) ili EN 1990 + EN 1993-1-1 (Evrokod). Dajte svakom slučaju opterećenja njegovu vrstu (stalno, korisno, novo krovno korisno, sneg, vetar, seizmičko), pritisnite {{ui:Napravi kombinacije}}, i DetailCraft upisuje kombinacije propisa za nosivost i upotrebljivost vaših slučajeva. Kombinacije koje ste sami upisali ostaju. Pogledajte [Napravi kombinacije](topic:design-checks#make-the-combinations).
- **Vrednosti nacionalnog aneksa.** Za Evrokod faktori počinju od preporučenih vrednosti; {{ui:Vrednosti nacionalnog aneksa}} vam omogućava da upišete vrednosti vaše zemlje, a one se čuvaju u modelu. Pogledajte [Napravi kombinacije](topic:design-checks#make-the-combinations).
- **Proveri elemente.** {{ui:Proveri elemente}} proverava svaki čelični I-profil na zatezanje, pritisak sa izvijanjem, savijanje sa bočnim izvijanjem i torzijom, smicanje, savijanje sa aksijalnom silom i progib prema {{ui:Granica progiba}} koju postavite. Tabela pokazuje iskorišćenost svakog elementa, dominantnu proveru i njenu kombinaciju, a elementi su obojeni na modelu (plavo, zeleno, oker, crveno, sivo za neproveren). Pogledajte [Proveri elemente](topic:design-checks#check-the-members).
- **U izveštaju.** {{ui:Izveštaj (PDF)}} i {{ui:Izveštaj (CSV)}} dodaju izdanja propisa, podešavanja, iskorišćenost po elementu i svaku korišćenu klauzulu. Pogledajte [Izveštaj](topic:design-checks#the-report).
- **Pomoćno sredstvo dok inženjer ne pregleda.** Koristi samo sile prvog reda. Cevi, uglovnici, kanali, zavareni profili i vitki ili delovi klase 4 se označavaju kao „nije proveren”, uz razlog; torzija, veze i beton se ne proveravaju. Pogledajte [Šta nije proveren](topic:design-checks#what-is-not-checked).

### USD

- **Izvoz čeličnog modela kao USD.** {{ui:USD}} u grupi {{ui:Izlaz}} upisuje model kao {{ui:Tekst (.usda)}}, {{ui:Binarni (.usdc)}} ili {{ui:Paket (.usdz)}} za programe za renderovanje i sastavljanje scene: svaki sklop sadrži svoje delove, svaki deo je njegov presek duž dužine sa izrezima, a svaki nosi oznaku dela, profil, klasu čelika, dužinu i težinu. Rupe za zavrtnje, zavrtnji, zavari i temelji nisu u USD mrežama. Pogledajte [Izvoz čeličnog modela kao USD](topic:usd).

### AI asistenti

- **USD za asistente.** Vaš sopstveni asistent, povezan preko CadCraft Studio, može da izveze model kao USD (`usd_export`), a u Studio ga upisuje u fasciklu koju ste dozvolili. Pogledajte [Šta asistent može da traži](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Promenjeno

- **Čelična traka** ima velika i mala dugmad: veliko {{ui:Greda}} pored malih {{ui:Stub}}, {{ui:Dijagonala}} i {{ui:Lim}} na {{ui:Modelovanje}} › {{ui:Elementi}}; veliko {{ui:Čeoni limovi}} na {{ui:Detaljisanje}} › {{ui:Veze}}, sa {{ui:Nastavak}} i {{ui:Čvorni lim}} u jednom podeljenom dugmetu; veliko {{ui:Nalepi}} na {{ui:Uredi}} › {{ui:Ostava}}, sa {{ui:Nalepi na mestu}} i {{ui:Dupliraj}} iza strelice grupe. {{ui:Izrada}} › {{ui:Razmena}} ima {{ui:Izvezi USD}} pored IFC. Drugi stilovi menija izgledaju kao ranije. Pogledajte [Meniji, tasteri i miš](topic:menus-keys-and-mouse#the-three-styles).
- [Analiza okvira](topic:frame-analysis) sada upućuje na proveru projekta, a njene kombinacije mogu da se naprave prema propisu.

## U svim aplikacijama

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka anketna stopa je sopstvena jedinica). Isključite jedinice koje nikada ne koristite i one napuštaju liste; označite jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava sopstvenu jedinicu. Polja DetailCraft-a još ne prate liste: njegove dužine se i dalje unose u milimetrima. Pogledajte [Jedinice, uneseni brojevi i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da pričvrstite ili otkačite panel, ispustite je na naslovnu traku drugog panela da delite jedan okvir kao kartice, zakačite da panel skliže do ivice, ili ga sakrijte i vratite sa ivice. Pogledajte [Rasporedite panele](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevucite dijalog za naslovnu traku van puta crteža; vraća se tamo gde ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Pogledajte [Pomerite dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahteva za vašeg asistenta (srediti crtež, iscrtati skup, proveriti crteže, postaviti pitanja o modelu, zbrojiti predmer, isprobati varijantu dela…), svaki sa alatima koje poziva i dozvolama koje mu trebaju, i svaki ponovljen našim testovima. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. Ona, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis), umesto samo „Gotovo”, i prestaje da vraća karticu „Šta je novo” koju ste zatvorili, dok ne bude novijeg izdanja.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i Microsoft Store paket prebačeni su u 0.8, jer provera sertifikata još nije stigla. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desnim klikom na CadCraft Studio izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih nijedno polje još ne čita.
- **Proračunske provere još nije pregledao inženjer.** Naši testovi ih upoređuju sa odštampanim vrednostima tabela i formulama urađenim ručno, a ne još sa radnim primerima iz priručnika za projektovanje. Do pregleda, to su pomoćna sredstva: ručno proverite elemente koji su bitni.
- Proračunske provere koriste sile prvog reda (bez efekata drugog reda) i proveravaju samo I-profile. Nije izgrađeno: cevi, uglovnici, kanali, zavareni profili, vitki (AISC) ili delovi klase 4 (Evrokod) u savijanju, torzija, smicanje sa izvijanjem zajedno sa savijanjem, veze, zamor, požar, seizmičko detaljisanje i beton. Vitki element u pritisku izostavlja provere pritiska, a element glasi „prolazi, delimično proveren”.
- Analiza okvira je i dalje linearna i prvog reda, i još je nije isprobao inženjer na pravom poslu.
- Rupe za zavrtnje, zavrtnji, zavari i temelji nisu u USD izvozu.

Sve ostalo je u [Šta još nije izgrađeno](topic:not-built-yet).
