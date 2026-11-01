---
title: Šta je novo u verziji 0.7
summary: Provjere projekta čeličnih I-profila s kombinacijama opterećenja prema ASCE 7 ili EN 1990 i provjere elemenata prema AISC 360 ili EN 1993-1-1, USD izvoz čeličnog modela, alat za USD za asistente, čelična traka s velikim i malim dugmadima, paneli koji se sklanjaju i dijalozi koji se pomjeraju.
keywords: šta je novo, novosti, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, provjere projekta, čelični proračun, iskorištenje, kombinacije opterećenja, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokod, nacionalni aneks, krovno korisno opterećenje, granica progiba, usd, usda, usdc, usdz, openusd, asistent, mcp, čelična traka, traka, dugme s padajućim izborom, jedinice, zbijeno, paneli, dijalozi, portugalski
from: 17d1e0bb
---

Ovo je šta se promijenilo u DetailCraft-u 0.7, u odnosu na 0.6. Proračun okvira iz 0.6 sada ima drugi korak: provjeru čeličnih elemenata prema projektnom normativu.

## Novo

### Kosi spojevi (0.7.1)

- **Dva I-profila koji se sastaju pod uglom**, kao koljeno portala ili sljeme: izaberite oba, odaberite {{ui:Kosi spoj}} u meniju {{ui:Više}} grupe {{ui:Povezivanje}}, i oba kraja se sijeku po ravni koja polovi ugao. Čeone ploče spojene zavrtnjima i rebra za ukrućenje su polja za štikliranje u novom dijalogu Kosi spoj, čija numerisana polja odgovaraju crtežu vašeg spoja koji se pravi dok kucate. Kosi spoj prati elemente kad se pomjere i prenosi se na crteže, NC datoteke (kose rezove), IFC i spisak materijala. Vidi [Kosi spojevi](topic:mitres).

### Provjere projekta

- **Kombinacije opterećenja iz normativa.** Na kartici {{ui:Analiza}} novi blok {{ui:Provjere projekta}} ima {{ui:Projektni normativ}}: ASCE 7 + AISC 360 (SAD, LRFD) ili EN 1990 + EN 1993-1-1 (Eurokod). Dodijelite svakom slučaju opterećenja njegovu vrstu (stalno, korisno, novo krovno korisno, snijeg, vjetar, seizmičko), pritisnite {{ui:Napravi kombinacije}}, i DetailCraft upisuje kombinacije nosivosti i upotrebljivosti normativa za vaše slučajeve. Kombinacije koje ste sami upisali ostaju. Vidi [Napravite kombinacije](topic:design-checks#make-the-combinations).
- **Vrijednosti nacionalnog aneksa.** Za Eurokod faktori počinju od preporučenih vrijednosti; {{ui:Vrijednosti nacionalnog aneksa}} vam omogućava da upišete vaše, a one se spašavaju u modelu. Vidi [Napravite kombinacije](topic:design-checks#make-the-combinations).
- **Provjeri elemente.** {{ui:Provjeri elemente}} provjerava svaki čelični I-profil na zatezanje, pritisak s izvijanjem, savijanje s bočno-torzionim izvijanjem, smicanje, savijanje s aksijalnom silom i progib prema {{ui:Granica progiba}} koju postavite. Tabela pokazuje iskorištenje svakog elementa, provjeru koja upravlja i njegovu kombinaciju, a elementi su obojeni na modelu (plava, zelena, oker, crvena, siva za neprovjereno). Vidi [Provjera elemenata](topic:design-checks#check-the-members).
- **U izvještaju.** {{ui:Izvještaj (PDF)}} i {{ui:Izvještaj (CSV)}} dodaju izdanja normativa, postavke, iskorištenje po elementu i svaku korištenu klauzulu. Vidi [Izvještaj](topic:design-checks#the-report).
- **Pomagalo dok inženjer ne pregleda.** Koristi samo sile prvog reda. Cijevi, uglovnici, U-profili, zavareni oblici i vitki ili dijelovi klase 4 pišu "nije provjereno", s razlogom; torzija, veze i beton nisu provjereni. Vidi [Šta nije provjereno](topic:design-checks#what-is-not-checked).

### USD

- **Izvoz čeličnog modela kao USD.** {{ui:USD}} u grupi {{ui:Izlaz}} zapisuje model kao {{ui:Tekst (.usda)}}, {{ui:Binarni (.usdc)}} ili {{ui:Paket (.usdz)}} za programe za renderovanje i sastavljanje scene: svaki sklop drži svoje dijelove, svaki dio je njegov presjek duž dužine s izrezima, i svaki nosi svoju oznaku dijela, profil, kvalitet, dužinu i težinu. Rupe za vijke, vijci, zavari i temelji nisu u USD mrežama. Vidi [Izvoz čeličnog modela kao USD](topic:usd).

### AI asistenti

- **USD za asistente.** Vaš vlastiti asistent, povezan preko CadCraft Studio, može izvesti model kao USD (`usd_export`), a u Studiju ga upisati u folder koji ste dozvolili. Vidi [Šta asistent može tražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Promijenjeno

- **Čelična traka** ima velika i mala dugmad: veliki {{ui:Greda}} pored malih {{ui:Stub}}, {{ui:Dijagonala}} i {{ui:Lim}} na {{ui:Modeliranje}} › {{ui:Elementi}}; veliki {{ui:Čeone ploče}} na {{ui:Detaljisanje}} › {{ui:Veze}}, sa {{ui:Nastavak}} i {{ui:Čvorni lim}} u jednom dugmetu s padajućim izborom; veliki {{ui:Zalijepi}} na {{ui:Uređivanje}} › {{ui:Međuspremnik}}, s {{ui:Zalijepi na mjesto}} i {{ui:Dupliraj}} iza strelice grupe. {{ui:Izrada}} › {{ui:Razmjena}} ima {{ui:Izvezi USD}} pored IFC. Ostali stilovi menija izgledaju kao ranije. Vidi [Meniji, tipke i miš](topic:menus-keys-and-mouse#the-three-styles).
- [Analiza okvira](topic:frame-analysis) sada upućuje na provjere projekta, a njene kombinacije se mogu napraviti prema normativu.

## Na svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka anketna stopa je sopstvena jedinica). Isključite jedinice koje nikad ne koristite i one nestanu s lista jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. Polja DetailCraft-a još ne prate liste: dužine se i dalje upisuju u milimetrima. Vidi [Jedinice, upisane vrijednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da zakačite ili izdvojite panel, spustite je na traku drugog panela da dijelite jedan okvir kao kartice, pričvrstite je da se sklanja do ivice, ili sakrijte panel i vratite ga s ivice. Vidi [Razmještaj panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Prevucite dijalog za naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Vidi [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primjera zahtjeva za vašeg asistenta (srediti crtež, iscrtati skup, provjeriti crteže, postaviti pitanja o modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovo pokrenut našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj jezik, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom jeziku.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sistem, nema mreže, loš potpis) umjesto samo "Gotovo", i prestaje vraćati karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Nije još u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i Microsoft Store paket prebačeni su na 0.8 jer validacija certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu, prvi put, desnim klikom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, a iPad ili iPhone verzija još ne postoji.
- Liste uglova i nagiba u {{ui:Jedinice}} su spašene, ali ih nijedno polje još ne čita.
- **Provjere projekta još nije pregledao inženjer.** Naši testovi ih upoređuju s odštampanim vrijednostima iz tablica i formulama urađenim ručno, a ne još s radnim primjerima iz priručnika za projektovanje. Do pregleda, to je pomagalo: ručno provjerite elemente koji su bitni.
- Provjere projekta koriste sile prvog reda (bez efekata drugog reda) i provjeravaju samo I-profile. Nije izrađeno: cijevi, uglovnici, U-profili, zavareni oblici, vitki (AISC) ili dijelovi klase 4 (Eurokod) u savijanju, torzija, izvijanje od smicanja zajedno sa savijanjem, veze, zamor, požar, seizmička detaljisanja i beton. Vitki dio u pritisku isključuje provjere pritiska, a element piše "prolazi, djelimično provjereno".
- Analiza okvira je još prvog reda i linearna, i inženjer je još nije isprobao na stvarnom poslu.
- Rupe za vijke, vijci, zavari i temelji nisu u USD izvozu.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet).
