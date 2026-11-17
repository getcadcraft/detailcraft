---
title: Šta je novo u 0.7 (ranije)
summary: Proračunske provere čeličnih I-profila sa kombinacijama opterećenja prema ASCE 7 ili EN 1990 i proverom elemenata prema AISC 360 ili EN 1993-1-1, izvoz USD modela čelika, alat za asistente za USD, traka za čelik sa velikim i malim dugmadima, paneli koji se sklanjaju i dijalozi koji se pomeraju.
keywords: šta je novo 0.7, ranije izdanje, beleške o izdanju, dnevnik promena, promene, 0.7, verzija, nove funkcije, proračunske provere, projektovanje čelika, iskorišćenost, utilization, kombinacije opterećenja, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, nacionalni aneks, krovno živo opterećenje, ograničenje progiba, usd, usda, usdc, usdz, openusd, asistent, mcp, traka za čelik, traka, podeljeni taster, jedinice, zbijeno, paneli, dijalozi, portugalski
from: 54a7a8f0
---

Ovo je ono što se promenilo u DetailCraft 0.7 u poređenju sa 0.6. Analiza okvira iz 0.6 sada ima drugi korak: proveru čeličnih elemenata prema projektnom propisu.

## Novo

### Gerovani spojevi (0.7.1)

- **Dva I-profila koja se spajaju pod uglom**, na primer kolenasti spoj ramovskog okvira ili sleme: izaberi oba, izaberi {{ui:Mitre}} u meniju {{ui:More}} grupe {{ui:Connect}}, i oba kraja se seku po ravni koja deli ugao na pola. Čeoni limovi spojeni zavrtnjevima i rebra na struku su polja za štikliranje u novom dijalogu Mitre, čija se numerisana polja podudaraju sa crtežom vašeg spoja koji se pravi dok kucate. Gerovanje prati elemente kada se pomere i prenosi se na crteže, NC datoteke (kose sečenice), IFC i predmer. Pogledaj [Gerovani spojevi](topic:mitres).

### Proračunske provere

- **Kombinacije opterećenja iz propisa.** Na kartici {{ui:Analysis}} novi blok {{ui:Design checks}} ima {{ui:Design code}}: ASCE 7 + AISC 360 (SAD, LRFD) ili EN 1990 + EN 1993-1-1 (Eurocode). Svakom slučaju opterećenja zadaj vrstu (stalno, korisno, novo krovno korisno, sneg, vetar, seizmika), pritisni {{ui:Make combinations}}, i DetailCraft upisuje kombinacije nosivosti i upotrebljivosti propisa za vaše slučajeve. Kombinacije koje ste sami uneli ostaju. Pogledaj [Napravi kombinacije](topic:design-checks#make-the-combinations).
- **Vrednosti nacionalnog aneksa.** Za Eurocode faktori počinju od preporučenih vrednosti; {{ui:National Annex values}} vam omogućava da unesete vrednosti svoje zemlje, i one se čuvaju u modelu. Pogledaj [Napravi kombinacije](topic:design-checks#make-the-combinations).
- **Proveri elemente.** {{ui:Check members}} proverava svaki čelični I-profil na zatezanje, pritisak sa izvijanjem, savijanje sa bočnim torzionim izvijanjem, smicanje, savijanje sa aksijalnom silom i progib u odnosu na {{ui:Deflection limit}} koje postavite. Tabela prikazuje iskorišćenost svakog elementa, merodavnu proveru i njenu kombinaciju, a elementi su obojeni na modelu (plavo, zeleno, ocker, crveno, sivo za neproveren). Pogledaj [Proveri elemente](topic:design-checks#check-the-members).
- **U izveštaju.** {{ui:Report (PDF)}} i {{ui:Report (CSV)}} dodaju izdanja propisa, podešavanja, iskorišćenost po elementu i svaku korišćenu klauzulu. Pogledaj [Izveštaj](topic:design-checks#the-report).
- **Pomoćni alat dok inženjer ne pregleda.** Koristi samo sile prvog reda. Cevi, uglovnici, U-profili, zavareni profili i vitki ili klase 4 delovi dobijaju oznaku „nije proveren“, uz razlog; uvijanje, spojevi i beton nisu provereni. Pogledaj [Šta nije provereno](topic:design-checks#what-is-not-checked).

### USD

- **Izvezi čelični model kao USD.** {{ui:USD}} u grupi {{ui:Output}} upisuje model kao {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} ili {{ui:Package (.usdz)}} za programe za renderovanje i sastavljanje scene: svaki sklop sadrži svoje delove, svaki deo je svoj presek duž dužine sa isečenim zarezima, i svaki nosi svoju oznaku dela, profil, kvalitet, dužinu i težinu. Rupe za zavrtnjeve, zavrtnji, varovi i temelji nisu u USD mrežama. Pogledaj [Izvoz čeličnog modela kao USD](topic:usd).

### Asistenti

- **USD za asistente.** Tvoj sopstveni asistent, povezan preko CadCraft Studija, može da izveze model kao USD (`usd_export`), a u Studiju da ga upiše u fasciklu koju si odobrio. Pogledaj [Šta asistent može da traži](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Promenjeno

- **Traka za čelik** ima velika i mala dugmad: veliko {{ui:Beam}} pored malih {{ui:Column}}, {{ui:Brace}} i {{ui:Plate}} na {{ui:Modeling}} › {{ui:Members}}; veliko {{ui:End plates}} na {{ui:Detailing}} › {{ui:Connections}}, sa {{ui:Splice}} i {{ui:Gusset}} koji dele jedno podeljeno dugme; veliko {{ui:Paste}} na {{ui:Edit}} › {{ui:Clipboard}}, sa {{ui:Paste in place}} i {{ui:Duplicate}} iza strelice grupe. {{ui:Fabrication}} › {{ui:Exchange}} ima {{ui:Export USD}} pored IFC. Drugi stilovi menija izgledaju kao ranije. Pogledaj [Meniji, tasteri i miš](topic:menus-keys-and-mouse#the-three-styles).
- [Analiza okvira](topic:frame-analysis) sada upućuje na proračunske provere, a njegove kombinacije mogu da se naprave prema propisu.

## U svim aplikacijama

- **Jedinice.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sopstvena jedinica). Isključite jedinice koje nikad ne koristite i one nestaju iz lista; označite jednu zvezdicom i novi radovi počinju u njoj. Datoteka uvek zadržava svoju jedinicu. Polja DetailCraft-a još ne prate liste: njegove dužine se i dalje unose u milimetrima. Pogledaj [Jedinice, uneti podaci i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} stane više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevuci je da bi se panel prikačio ili odvojio, ispusti je na traku drugog panela da biste delili jedan okvir kao kartice, zakači je da bi kliznuo do ivice, ili ga sakrij i vrati sa ivice. Pogledaj [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevuci dijalog za naslovnu traku van puta crtežu; vraća se tamo gde ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Pogledaj [Pomeri dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primera zahteva za tvog asistenta (srediti crtež, iscrtati set, proveriti crteže, postaviti pitanja o modelu, sabrati predmer, isprobati varijantu dela…), svaki sa alatima koje poziva i dozvolama koje traži, i svaki ponovo proveren našim testovima. Aplikacije ne sadrže AI. Pogledaj [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ono, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis) umesto samo „Gotovo“, i prestaje da vraća karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer validacija sertifikata još nije stigla. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalaciju, izaberi {{ui:More info}}, pa {{ui:Run anyway}}. Na Mac-u, prvi put, desni klik na CadCraft Studio i izaberi {{ui:Open}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Units}} se čuvaju, ali ih još nijedno polje ne čita.
- **Proračunske provere još nije pregledao inženjer.** Naši testovi ih porede sa štampanim vrednostima iz tablica i formulama urađenim ručno, ali još ne sa primerima iz priručnika za projektovanje. Do pregleda, to su pomoćni alati: važne elemente proverite ručno.
- Proračunske provere koriste sile prvog reda (bez efekata drugog reda) i proveravaju samo I-profile. Nisu urađeni: cevi, uglovnici, U-profili, zavareni profili, vitki (AISC) ili klase 4 (Eurocode) delovi u savijanju, uvijanje, izvijanje smicanjem zajedno sa savijanjem, spojevi, zamor, požar, seizmička detaljizacija i beton. Vitki deo u pritisku izostavlja provere pritiska, a element dobija oznaku „prolazi, delimično proveren“.
- Analiza okvira je i dalje linearna analiza prvog reda i još je nije probao inženjer na stvarnom poslu.
- Rupe za zavrtnjeve, zavrtnji, varovi i temelji nisu u USD izvozu.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet).
