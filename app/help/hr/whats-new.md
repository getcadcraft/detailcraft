---
title: Što je novo u 0.7
summary: Proračunske provjere čeličnih I-profila s kombinacijama opterećenja prema ASCE 7 ili EN 1990 i provjere štapova prema AISC 360 ili EN 1993-1-1, USD izvoz čeličnog modela, alat za pomoćnike za USD, vrpca Steel s velikim i malim gumbima, ploče koje se sklanjaju i dijaloški okviri koji se pomiču.
keywords: što je novo, bilješke o izdanju, popis promjena, promjene, 0.7, verzija, nove značajke, proračunske provjere, proračun čelika, iskorištenost, kombinacije opterećenja, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokod, nacionalni dodatak, krovno pokretno, granica progiba, usd, usda, usdc, usdz, openusd, pomoćnik, mcp, vrpca steel, vrpca, podijeljeni gumb, jedinice, zbijeno, ploče, dijaloški okviri, portugalski
from: 17d1e0bb
---

Ovo se promijenilo u DetailCraftu 0.7 u odnosu na 0.6. Analiza okvira iz 0.6 sada ima drugi korak: provjeru čeličnih štapova prema propisu za proračun.

## Novo

### Zasječeni spojevi (0.7.1)

- **Dva I-profila koja se sastaju pod kutom**, poput kuta portalnog okvira ili sljemena: odaberite oba, odaberite {{ui:Zasjek}} u izborniku {{ui:Više}} skupine {{ui:Povezivanje}}, i oba kraja režu se po ravnini koja raspolavlja kut. Čeone ploče spojene vijcima i ukrute hrpta su potvrdni okviri u novom dijaloškom okviru Zasjek, čija numerirana polja odgovaraju crtežu vašeg spoja izrađenom dok upisujete. Zasjek prati štapove kad se pomiču i prenosi se na crteže, NC datoteke (kosi rezovi), IFC i sastavnicu. Vidi [Zasječeni spojevi](topic:mitres).

### Proračunske provjere

- **Kombinacije opterećenja iz propisa.** Na kartici {{ui:Analiza}} novi blok {{ui:Proračunske provjere}} ima {{ui:Projektni propis}}: ASCE 7 + AISC 360 (SAD, LRFD) ili EN 1990 + EN 1993-1-1 (Eurokod). Svakom slučaju opterećenja zadajte vrstu (stalno, pokretno, novo krovno pokretno, snijeg, vjetar, potres), pritisnite {{ui:Izradi kombinacije}} i DetailCraft zapisuje propisane kombinacije za granično stanje nosivosti i uporabljivosti vaših slučajeva. Kombinacije koje ste sami upisali ostaju. Vidi [Izrada kombinacija](topic:design-checks#make-the-combinations).
- **Vrijednosti nacionalnog dodatka.** Za Eurokod faktori počinju na preporučenim vrijednostima; {{ui:Vrijednosti nacionalnog dodatka}} omogućuju da upišete vrijednosti svoje države, a spremaju se u modelu. Vidi [Izrada kombinacija](topic:design-checks#make-the-combinations).
- **Provjera štapova.** {{ui:Provjeri štapove}} provjerava svaki čelični I-profil na vlak, tlak s izvijanjem, savijanje s bočnim torzijskim izvijanjem, posmik, savijanje s osnom silom i progib prema {{ui:Granica progiba}} koju postavite. Tablica prikazuje iskorištenost svakog štapa, mjerodavnu provjeru i njezinu kombinaciju, a štapovi su obojeni na modelu (plavo, zeleno, oker, crveno, sivo za neprovjereno). Vidi [Provjera štapova](topic:design-checks#check-the-members).
- **U izvješću.** {{ui:Izvješće (PDF)}} i {{ui:Izvješće (CSV)}} dodaju izdanja propisa, postavke, iskorištenost po štapu i svaki korišteni članak. Vidi [Izvješće](topic:design-checks#the-report).
- **Pomagalo dok ga inženjer ne pregleda.** Koristi samo sile prvog reda. Cijevi, kutnici, U-profili, zavareni profili i vitki dijelovi ili dijelovi klase 4 kažu „neprovjereno“, s razlogom; torzija, spojevi i beton se ne provjeravaju. Vidi [Što se ne provjerava](topic:design-checks#what-is-not-checked).

### USD

- **Izvoz čeličnog modela kao USD.** {{ui:USD}} u skupini {{ui:Izlaz}} zapisuje model kao {{ui:Tekst (.usda)}}, {{ui:Binarno (.usdc)}} ili {{ui:Paket (.usdz)}} za programe za renderiranje i slaganje scena: svaki sklop sadrži svoje dijelove, svaki dio je njegov presjek provučen duž duljine s urezanim izrezima, a svaki nosi svoju oznaku dijela, profil, kvalitetu, duljinu i masu. Provrti za vijke, vijci, zavari i temelji nisu u USD mrežama. Vidi [Izvoz čeličnog modela kao USD](topic:usd).

### AI pomoćnici

- **USD za pomoćnike.** Vaš vlastiti pomoćnik, povezan preko CadCraft Studija, može izvesti model kao USD (`usd_export`), a u Studiju ga zapisati u mapu koju ste dopustili. Vidi [Što pomoćnik može tražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Promijenjeno

- **Vrpca Steel** ima velike i male gumbe: veliki {{ui:Greda}} pored malih {{ui:Stup}}, {{ui:Spreg}} i {{ui:Ploča}} na {{ui:Modeliranje}} › {{ui:Štapovi}}; veliki {{ui:Čeone ploče}} na {{ui:Detaljiranje}} › {{ui:Priključci}}, s {{ui:Nastavak}} i {{ui:Čvorna ploča}} koji dijele jedan podijeljeni gumb; veliki {{ui:Zalijepi}} na {{ui:Uređivanje}} › {{ui:Međuspremnik}}, s {{ui:Zalijepi na isto mjesto}} i {{ui:Dupliciraj}} iza strelice skupine. {{ui:Izrada}} › {{ui:Razmjena}} ima {{ui:Izvezi USD}} pored IFC-a. Ostali stilovi izbornika izgledaju kao prije. Vidi [Izbornici, tipke i miš](topic:menus-keys-and-mouse#the-three-styles).
- [Analiza okvira](topic:frame-analysis) sada upućuje na proračunske provjere, a njezine se kombinacije mogu izraditi prema propisu.

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, obujam, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa je zasebna jedinica). Isključite jedinice koje nikad ne koristite i one napuštaju popise jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava vlastitu jedinicu. DetailCraftovi vlastiti okviri još ne prate popise: njegove se duljine i dalje upisuju u milimetrima. Vidi [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} smješta više na zaslon (zasloni osjetljivi na dodir i mobiteli zadržavaju velike gumbe). Svaka bočna ploča ima usku naslovnu traku: povucite je da usidrite ili odvojite ploču, ispustite je na traku druge ploče da dijele jedan okvir kao kartice, prikvačite je da se uvlači do ruba ili je sakrijte i vratite s ruba. Vidi [Raspored ploča](common:arrange-panels#make-the-layout-denser).
- **Dijaloški okviri se pomiču.** Povucite dijaloški okvir za naslovnu traku da ga maknete s puta crtežu; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovno centrirate. Vidi [Pomicanje dijaloškog okvira](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset razrađenih zahtjeva za vašeg pomoćnika (urediti crtež, plotati komplet, provjeriti crteže, postavljati pitanja modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dopuštenjima koja treba, a svaki ponovno izvodimo našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje još nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, loš potpis) umjesto samo „Gotovo“ te prestaje vraćati karticu Što je novo koju ste zatvorili dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket Microsoft Storea premješteni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 pored svake datoteke na getcadcraft.com/download. Na Windowsima, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, a zatim {{ui:Svejedno pokreni}}. Na Macu, prvi put, desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovini aplikacija i još nema verzije za iPad ni iPhone.
- Popisi kuta i nagiba u {{ui:Jedinice}} su spremljeni, ali ih još nijedan okvir ne čita.
- **Proračunske provjere još nije pregledao inženjer.** Naši testovi uspoređuju ih s tiskanim vrijednostima iz tablica i ručno izračunatim formulama, još ne s razrađenim primjerima iz priručnika za projektiranje. Do pregleda su pomagalo: štapove koji su važni provjerite ručno.
- Proračunske provjere koriste sile prvog reda (bez učinaka drugog reda) i provjeravaju samo I-profile. Nije izrađeno: cijevi, kutnici, U-profili, zavareni profili, vitki (AISC) dijelovi ili dijelovi klase 4 (Eurokod) u savijanju, torzija, posmično izbočivanje zajedno sa savijanjem, spojevi, zamor, požar, potresno detaljiranje i beton. Vitki tlačni dio izostavlja provjere tlaka, a štap glasi „zadovoljava, djelomično provjereno“.
- Analiza okvira je i dalje prvog reda i linearna, a inženjer je još nije isprobao na pravom poslu.
- Provrti za vijke, vijci, zavari i temelji nisu u USD izvozu.

Sve ostalo je u [Što još nije izrađeno](topic:not-built-yet).
