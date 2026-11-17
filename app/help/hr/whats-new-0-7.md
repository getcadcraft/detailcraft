---
title: Što je novo u verziji 0.7 (ranije)
summary: Proračunske provjere čeličnih I-profila s kombinacijama opterećenja prema ASCE 7 ili EN 1990 i provjere štapova prema AISC 360 ili EN 1993-1-1, izvoz USD-a čeličnog modela, alat za pomoćnika za USD, čelična vrpca s velikim i malim gumbima, paneli koji se sklanjaju i dijaloški okviri koji se pomiču.
keywords: što je novo 0.7, ranije izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove značajke, proračunske provjere, projektiranje čelika, iskorištenost, kombinacije opterećenja, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Nacionalni dodatak, krovno korisno opterećenje, granica progiba, usd, usda, usdc, usdz, openusd, pomoćnik, mcp, čelična vrpca, vrpca, podijeljeni gumb, jedinice, zbijeno, paneli, dijaloški okviri, portugalski
from: 54a7a8f0
---

Ovo su promjene u programu DetailCraft 0.7 u odnosu na 0.6. Analiza okvira iz verzije 0.6 sada ima drugi korak: provjeru čeličnih štapova prema projektnom propisu.

## Novo

### Zasječeni spojevi (0.7.1)

- **Dva I-profila koja se susreću pod kutom**, kao koljeno portalnog okvira ili sljeme: odaberite oba, u izborniku {{ui:Više}} grupe {{ui:Povezivanje}} odaberite {{ui:Zasjek}}, i oba se kraja režu u ravnini koja raspolavlja kut. Čeone ploče spojene vijcima i ukrute hrpta označene su potvrdnim okvirima u novom dijaloškom okviru Zasjek, čija numerirana polja odgovaraju crtežu vašeg spoja koji nastaje dok tipkate. Zasjek slijedi štapove kad se pomaknu i prenosi se na crteže, NC datoteke (kose rezove), IFC i sastavnicu. Vidi [Zasječeni spojevi](topic:mitres).

### Proračunske provjere

- **Kombinacije opterećenja prema propisu.** Na kartici {{ui:Analiza}} novi blok {{ui:Proračunske provjere}} ima {{ui:Projektni propis}}: ASCE 7 i AISC 360 (SAD, LRFD) ili EN 1990 i EN 1993-1-1 (Eurokod). Svakom slučaju opterećenja zadajte vrstu (stalno, korisno, novo krovno korisno, snijeg, vjetar, potres), pritisnite {{ui:Izradi kombinacije}}, i DetailCraft zapisuje granične i uporabne kombinacije propisa za vaše slučajeve. Kombinacije koje ste sami upisali ostaju. Vidi [Izrada kombinacija](topic:design-checks#make-the-combinations).
- **Vrijednosti nacionalnog dodatka.** Za Eurokod faktori počinju od preporučenih vrijednosti; {{ui:Vrijednosti nacionalnog dodatka}} omogućuje upis vrijednosti vaše zemlje, a spremaju se u model. Vidi [Izrada kombinacija](topic:design-checks#make-the-combinations).
- **Provjeri štapove.** {{ui:Provjeri štapove}} provjerava svaki čelični I-profil na vlak, tlak s izvijanjem, savijanje s bočno-torzijskim izvijanjem, posmik, savijanje s uzdužnom silom i progib prema {{ui:Granica progiba}} koju postavite. Tablica prikazuje iskorištenost svakog štapa, provjeru koja je mjerodavna i njezinu kombinaciju, a štapovi su obojeni na modelu (plavo, zeleno, ocker, crveno, sivo za neprovjereno). Vidi [Provjera štapova](topic:design-checks#check-the-members).
- **U izvješću.** {{ui:Izvješće (PDF)}} i {{ui:Izvješće (CSV)}} dodaju izdanja propisa, postavke, iskorištenost po štapu i svaku korištenu klauzulu. Vidi [Izvješće](topic:design-checks#the-report).
- **Pomoćno sredstvo dok inženjer ne pregleda.** Koristi samo sile prvog reda. Cijevni profili, kutnici, U-profili, zavareni profili i vitki ili dijelovi klase 4 označeni su kao „nije provjereno“, uz razlog; torzija, priključci i beton nisu provjereni. Vidi [Što nije provjereno](topic:design-checks#what-is-not-checked).

### USD

- **Izvezite čelični model kao USD.** {{ui:USD}} u grupi {{ui:Izlaz}} zapisuje model kao {{ui:Tekst (.usda)}}, {{ui:Binarno (.usdc)}} ili {{ui:Paket (.usdz)}} za programe za prikaz i sastavljanje scena: svaki sklop sadrži svoje dijelove, svaki dio je svoj presjek duž cijele duljine s izrezima, a svaki nosi oznaku pozicije, profil, kvalitetu, duljinu i težinu. Rupe za vijke, vijci, zavari i temelji nisu u USD mrežama. Vidi [Izvoz čeličnog modela kao USD](topic:usd).

### Pomoćnici s umjetnom inteligencijom

- **USD za pomoćnike.** Vaš vlastiti pomoćnik, povezan kroz CadCraft Studio, može izvesti model kao USD (`usd_export`), a u Studiju ga zapisati u mapu koju ste dopustili. Vidi [Što pomoćnik može zatražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Promijenjeno

- **Čelična vrpca** ima velike i male gumbe: veliki {{ui:Greda}} uz male {{ui:Stup}}, {{ui:Spreg}} i {{ui:Ploča}} na {{ui:Modeliranje}} › {{ui:Štapovi}}; velike {{ui:Čeone ploče}} na {{ui:Detaljiranje}} › {{ui:Priključci}}, a {{ui:Nastavak}} i {{ui:Čvorna ploča}} dijele jedan podijeljeni gumb; veliki {{ui:Zalijepi}} na {{ui:Uređivanje}} › {{ui:Međuspremnik}}, uz {{ui:Zalijepi na isto mjesto}} i {{ui:Dupliciraj}} iza strelice grupe. {{ui:Izrada}} › {{ui:Razmjena}} ima {{ui:Izvezi USD}} uz IFC. Ostali stilovi izbornika izgledaju kao prije. Vidi [Izbornici, tipke i miš](topic:menus-keys-and-mouse#the-three-styles).
- [Analiziraj okvir](topic:frame-analysis) sada upućuje na proračunske provjere, a njegove kombinacije mogu se izraditi prema propisu.

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, volumen, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa je zasebna jedinica). Isključite jedinice koje nikad ne koristite i one nestaju s popisa jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. Okviri koje ima sam DetailCraft još ne slijede popise: njegove duljine i dalje se upisuju u milimetrima. Vidi [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} stavlja više na zaslon (dodirni zasloni i telefoni zadržavaju velike gumbe). Svaki bočni panel ima tanku naslovnu traku: povucite je da usidrite ili odvojite panel, ispustite je na traku drugog panela da dijelite jedan okvir kao kartice, prikačite je da kliže do ruba, ili je sakrijte i vratite s ruba. Vidi [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijaloški okviri se pomiču.** Povucite dijaloški okvir za naslovnu traku izvan crteža; vraća se tamo gdje ste ga ostavili. Dvostruki klik na naslovnu traku ponovno ga centrira. Vidi [Pomicanje dijaloškog okvira](common:arrange-panels#move-a-dialog).
- **Recepti za pomoćnike s umjetnom inteligencijom.** Deset primjera zahtjeva za vašeg pomoćnika (urediti crtež, ispisati set, provjeriti crteže, postaviti pitanja modelu, zbrojiti predmjer, isprobati varijantu dijela...), svaki s alatima koje poziva i dopuštenjima koja treba, a naši testovi ponavljaju svaki. Aplikacije ne sadrže nikakvu umjetnu inteligenciju. Vidi [Recepti za pomoćnike s umjetnom inteligencijom](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, neispravan potpis), umjesto samo „Gotovo“, i prestaje ponovno prikazivati kartici Što je novo koju ste zatvorili dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **Verzija 0.7 nije potpisana kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu, prvi put, desnim klikom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovini aplikacija, a još nema izrade za iPad ni iPhone.
- Popisi kutova i nagiba u {{ui:Jedinice}} su spremljeni, ali ih još nijedan okvir ne čita.
- **Proračunske provjere nisu pregledao inženjer.** Naši testovi uspoređuju ih s tiskanim vrijednostima tablica i formulama izračunatim ručno, a ne još s radnim primjerima iz projektnog priručnika. Do pregleda su pomoćno sredstvo: važne štapove provjerite ručno.
- Proračunske provjere koriste sile prvog reda (bez efekata drugog reda) i provjeravaju samo I-profile. Nisu izrađeni: cijevni profili, kutnici, U-profili, zavareni profili, vitki (AISC) ili dijelovi klase 4 (Eurokod) u savijanju, torzija, izvijanje posmikom zajedno sa savijanjem, priključci, zamor, požar, potresno detaljiranje i beton. Vitki dio u tlaku ispušta provjere tlaka, a štap je označen kao „prolazi, djelomično provjereno“.
- Analiza okvira i dalje je prvog reda i linearna, i inženjer je još nije isprobao na stvarnom poslu.
- Rupe za vijke, vijci, zavari i temelji nisu u USD izvozu.

Sve ostalo nalazi se u [Što nije izrađeno](topic:not-built-yet).
