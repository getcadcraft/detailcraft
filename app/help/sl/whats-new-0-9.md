---
title: Kaj je novega v 0.9 (prej)
summary: Britanski jekleni profili iz Blue Booka in neenakokraki kotniki, delavniške risbe za vsak del v enem nizu PDF, Moji profili za profile po meri, drugi red (P-Delta) in lastne frekvence, obremenitve vetra po ASCE 7, potresna lokacija in kombinacije ter kazalci v živo s sledenjem.
keywords: kaj je novega 0.9, prejšnja izdaja, kaj je novega, opombe ob izdaji, dnevnik sprememb, 0.9, britansko jeklo, blue book, ub, uc, pfc, shs, rhs, chs, neenakokraki kotnik, delavniška risba, delavniške risbe, komplet listov, oznaka dela, pdf, moji profili, profil po meri, p-delta, drugi red, lastna frekvenca, končni elementi, modalna masa, obremenitev vetra, asce 7, potresno, razred lokacije, usgs, kombinacije obremenitev, lrfd, asd, v živo, kazalci, sledenje, udeleženci, namigi, spremembe, 0.8, 0.8.1, različica, nove funkcije, montaža, dvigalo, tabela obremenitev, film, samodejno, spoji, armatura, zgoščenost, temelj, temeljna stopa, temeljna plošča, posedanje, okvirji, les, lahki profili, seznam rezanja, izvedljivost gradnje, dostop do vara, dobavitelj, zaloga, dobavni rok, kaj popusti prvo, beton, potresno, plošča, jeziki, pomočnik
from: ab0c7f05
---

To so spremembe v DetailCraft 0.9 v primerjavi z 0.8.1. 0.9 prinaša britanske jeklene dimenzije, delavniško risbo za vsak del naenkrat, večji zavihek {{ui:Analiza}} za okvirje ter pogled na kazalce drug drugega, ko delate skupaj.

## Novo

### Britansko jeklo in delavniške risbe

- **Britanske jeklene dimenzije.** Seznami profilov zdaj vsebujejo 976 dimenzij iz Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS in RHS, hladno oblikovani votli profili pa so ločeni (imena se začnejo z CF). Imena so zapisana najprej z družino, na primer UB305x165x40 ali SHS100x100x5.0, deluje pa tudi, če vnesete tako, kot jih navajajo risbe: 305x165x40 UB, L100x100x10, SHS100x5. Glejte [Katalog profilov](topic:profile-catalog).
- **Neenakokraki kotniki.** Kotniki UEA ohranijo oba kraka pri uvozu in izvozu IFC ter pri datotekah NC, zrcaljenje pa obrne kos s konca na konec.
- **Vse delavniške risbe naenkrat.** Izberite {{ui:Delavniška risba}} v skupini {{ui:Izhod}}, ko nič ni izbrano. Okno našteje vse oznake delov, predogleda katero koli od njih, {{ui:Prenesi vse}} pa shrani en PDF s stranjo za vsako oznako, z naslovom „List 3 od 42“. {{ui:Prenesi PDF}} shrani list, ki ga gledate. U-profili, kotniki in votli profili zdaj dobijo tudi liste. Glejte [Izdelava delavniških risb](topic:shop-drawings).
- **Moji profili.** Profil po meri lahko zdaj ohranite za vsak nov model. V obrazcu za profil po meri pustite {{ui:Shrani v Moji profili}} obkljukano; seznam {{ui:Moji profili}} pod njim ima {{ui:Shrani}}, {{ui:Uporabi tukaj}} in {{ui:Odstrani}}. Seznam se hrani v tem brskalniku (do 200), ne v vašem računu. Glejte [Plošče in profili](topic:plates-and-profiles).

### Analiza

- **Drugi red (P-Delta).** Obkljukajte {{ui:Drugi red (P-Delta)}} poleg Zaženi na zavihku {{ui:Analiza}}, in osne sile bodo delovale na deformiran okvir. Plošče in togi stropovi ostanejo prvega reda, z opozorilom. Glejte [Sile, reakcije in pomiki](topic:frame-analysis).
- **Lastne frekvence.** Blok {{ui:Končni elementi: lastne frekvence}} pod rezultati poišče najnižje oblike istega modela s periodo in efektivno modalno maso ter prikaže obliko na modelu. Glejte [Sile, reakcije in pomiki](topic:frame-analysis).
- **Obremenitve vetra in potresna lokacija.** Trije novi bloki na zavihku {{ui:Analiza}}: {{ui:Obremenitve vetra (ASCE 7, smerni postopek)}}, {{ui:Potresno mesto in sistem (ASCE 7)}} in {{ui:Kombinacije obremenitev po ASCE 7}}. Glejte [Veter, potresna lokacija in kombinacije ASCE 7](topic:wind-seismic-combinations).

### Delo skupaj

- **Kazalci in imena.** V seji v živo je kazalec vsake osebe narisan v modelu z njenim imenom in barvo, izbrano pa dobi okvir.
- **Sledenje osebi.** Odprite {{ui:Udeleženci}} v seji in izberite {{ui:Sledi}} ob imenu; vaš pogled se premakne skupaj z njihovim. Gostitelj lahko izbere {{ui:Naj vsi sledijo meni}}. Glejte [Sledenje osebi v seji v živo](topic:follow-in-live).

### V vseh aplikacijah

- Namigi so Bootstrap namigi, kartica začetnega namiga ima gumb za zapiranje, vrstice zavihkov se vodoravno pomikajo, kadar se ne prilegajo, ime zavihka brskalnika pa navaja odprti dokument, za njim pa DetailCraft in CadCraft.

## Popravljeno

- Profil po meri se je izgubil, ko ste začeli nov model.
- U-profili, kotniki in votli profili so manjkali v nizu delavniških risb.

## Omejitve, ki jih iskreno navajamo

- Bloki vetra, potresa in končnih elementov so pripomočki za preverjanje. Vaš inženir pregleda rezultate; to ni preverjanje predpisa. Iskanje USGS je bilo preizkušeno na nadomestku, ne na živi storitvi.
- Končni elementi in P-Delta sta bila preverjena z ročnimi in zaprtimi rešitvami, ne na resnični stavbi. Analiza uklona ni izdelana.
- Še noben britanski izdelovalec jeklenih konstrukcij ni preizkusil britanskih dimenzij, datoteke NC za neenakokrake kotnike pa še niso bile zagnane na stroju.
- Niz delavniških risb je samo PDF.
- Jeziki poleg angleščine so strojni osnutki.
- Namestitveni programi za Windows niso podpisani s kodo (Več informacij, nato Vseeno zaženi); disk slika za macOS ni notarizirana (desni klik, nato Odpri).

Prejšnje spremembe so v opombah za 0.8 in 0.8.1 nižje na tej strani.

## Prej: 0.8 in 0.8.1

To so spremembe v DetailCraft 0.8 (1. novembra 2026) in 0.8.1 (2. novembra 2026) v primerjavi z 0.7. 0.7 je preverjal jeklene elemente; 0.8 načrtuje dvige, predlaga spoje, preverja temelje in armaturo ter oblikuje okvirje za lesene in lahke stene, tla in strehe.

### Novo

**Montaža**

- **Načrt montaže in film.** Na zavihku {{ui:Montaža}} opišite dvigalo (kje stoji, njegova najvišja kljuka, oprema za dviganje, ki ni v tabeli obremenitev) in vnesite vrstice tabele obremenitev dvigala. DetailCraft dvigne model po enega sklopa naenkrat, po vrstnem redu faz in nivo za nivojem, ter preveri vsak dvig glede na tabelo pri njegovem dosegu in glede na rezervo, ki ste jo nastavili. {{ui:Shrani film}} zapiše eno datoteko HTML, ki se predvaja brez povezave v katerem koli brskalniku, tudi na telefonu. Dvigi, ki so nad tabelo, zunaj nje ali previsoki, so v {{ui:Težave}}. To je načrt iz vaših številk, ne načrt dvigovanja. Glejte [Načrt montaže in film](topic:erection-movie).

**Spoji**

- **Samodejni pilot spojev.** Zavihek {{ui:Samodejno}} pogleda vsak spoj, ki nima spoja, in predlaga spoj glede na oblike: temeljne plošče, strižne pločevine, čelne plošče za grede, ki jih označite kot upogibne, nastavke in vezne pločevine. Podajte enakomerno obremenitev ali eno strižno silo na koncu, in število vijakov sledi projektni trdnosti vijaka. {{ui:Dodaj vse}} doda predloge kot en korak razveljavitve. To so izhodiščne vrednosti za pregled, ne projektiranje spoja.
- **Preverjanja izvedljivosti.** {{ui:Težave}} za vijak, do katerega ključ ne seže, za vijake preblizu za nasadni ključ, za kotne vare zunaj mej velikosti in za votle profile, ki zadržujejo vodo. Dostop do vara je nov: obodni kotni var, do katerega varilnikov plamenik ne seže, je naveden s delom na poti in deležem prizadetega vara. Glejte [Preverjanja izvedljivosti gradnje](topic:constructability).

**Temelji in armatura**

- **Preverjanja temeljev.** Zavihek {{ui:Temelji}} preverja temeljne stope, združene stope in temeljne plošče na tleh, ki jih opišete: nosilnost tal, zdrs in prevrnitev pri obremenitvah uporabnosti; upogib, strig, prebijanje, sidranje in najmanjšo armaturo pri faktoriziranih obremenitvah (ACI 318-19). Steber blizu roba ali vogala je preverjen s prerezom, odrezanim z robom temeljne stope. Posedanje izhaja iz modula tal, prožna plošča pa se reši na vzmeteh iz modula podlage; skupine pilotov in podporni zidovi imajo lastne sklope. Obremenitve stebrov lahko vnesete ali vzamete iz {{ui:Analiza}}. Glejte [Preverjanja temeljev](topic:foundation-checks).
- **Karta zgoščenosti armature.** Zavihek {{ui:Zgostitev}} nariše toplotno karto vsake temeljne stope, gledano od zgoraj: kjer palice pustijo premalo prostora, da beton pride do dna, glede na pravilo proste razdalje med palicami in, če ju vnesete, glede na največje zrno agregata ter glavo vibratorja. Glejte [Karta zgoščenosti armature](topic:rebar-congestion).

**Okvirji in dobava**

- **Lesen in lahki okvirji.** Zavihek {{ui:Okvirje}} oblikuje okvirje za panele sten, tal in streh z vsakim kosom, seznamom rezanja, zalogo za nakup in delavniško risbo v merilu. {{ui:Postavi kot elemente}} postavi kose v model, {{ui:Listi PDF}} pa shrani en list za vsak panel. Velikosti, razmik in nadglavja so vaši: DetailCraft ne preverja, ali nosijo obremenitev. Glejte [Paneli lesenih in lahkih okvirjev](topic:framing-panels).
- **Zaloga dobavitelja in dobavni roki.** Zavihek {{ui:Dobava}} prebere seznam zaloge dobavitelja (CSV) in za vsak prerez, ki ga seznam rezanja kupuje, pokaže, ali ga je dovolj na zalogi in kako dolg je čakalni rok. Manjkajoči kosi in zamude so v {{ui:Težave}}. Ničesar ne naroči. Glejte [Zaloga dobavitelja in dobavni roki](topic:supplier-stock).

**Analiza in projektiranje**

- **Kaj popusti prvo?** Na zavihku {{ui:Analiza}} gumb poišče odločilno kombinacijo nosilnosti, najšibkejši element, za koliko lahko obremenitve rastejo, preden prvi element doseže svojo mejo, in najšibkejšo čelno ali strižno pločevino, kjer je znana strižna trdnost njenih vijakov. Najprej potrebuje kombinacije in projektni predpis. Ležišče, bločni strig, vari in vzvodni učinek niso preverjeni. Vaš povezani pomočnik lahko vpraša isto.
- **V živo.** Obkljukajte {{ui:V živo: po vsaki spremembi reši znova}} in okvir se po vsaki spremembi reši znova.
- **Beton in še več.** Vitek steber v okvirju brez premikanja se projektira za povečani moment (ACI 318-19 6.6.4.5). Potresna perioda se lahko vzame iz analize z Rayleighovo metodo. Plošča iz plošč dobi iz svojih momentov jeklo, ki ga potrebuje vsak sloj, in enosmerni strig. Glejte [Preverite betonske elemente in ustvarite potresne obremenitve](topic:concrete-and-seismic).
- **Za pregled inženirja.** Rezultati temeljev, betona in Kaj popusti prvo so pripomočki. Obremenitve vetra niso izdelane.

**V vseh aplikacijah**

- **Jeziki.** Pomoč je v 54 jezikih. Tisti poleg angleščine so strojni osnutki, dokler jih ne prebere materni govorec; deset jih je novih (litovščina, latvijščina, bosanščina, maratščina, telugu, albanščina, afrikanščina, filipinščina, svahilščina, uzbeščina).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} izbere prelom, 2 vrstici ali 1 vrstico. Vrstica, ki se že prilega, ostane takšna; ostale se pomikajo vodoravno.
- **Mreža lastnosti.** Polja temeljne stope uporabljajo skupno mrežo: zložljive kategorije in kompaktna gostota. Vpisani računi, kot je 2*450, še vedno delujejo.
- **Vhodne naprave.** Sledilna ploščica, pisalo, 3D-miška, krmilnik in MIDI lahko upravljajo aplikacije. Glejte [Krmarjenje v 3D](topic:navigate-3d).
- **Plošča s težavami.** Opozorila novih preverjanj zgoraj se prikažejo v isti plošči {{ui:Težave}} kot prej.
- **Povežite svojega pomočnika z umetno inteligenco.** Vaš lastni pomočnik, povezan prek CadCraft Studio, deluje z vsemi osmimi aplikacijami in vidi samo tisto, kar dovolite. Povezava z enim klikom, gostovani konektor in vaš lastni ključ API v Studiu so še v pripravi. Glejte [Uporaba DetailCraft s pomočnikom z umetno inteligenco](topic:use-with-ai-assistants).

### Popravljeno v 0.8.1

- **Jeziki v Studiu.** Studio in pakirane izdaje lahko zamenjajo jezik med delovanjem; prej so bili samo v angleščini. Še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.
- **Izbor s sekajočim oknom.** Namestitveni programi 0.8.1 že vsebujejo pravilno obnašanje izbora z oknom, kot ga ima spletna različica 0.8; starejši namestitveni program ga ni imel.
- **Tablični računalniki v pokončni postavitvi.** Prosta višina mreže gre na platno, postavitev lista pa se začne pri 760 px ali manj.

### Še ni v tej različici

- **Pošiljanje NC na stroj** še ni izdano.
- **Obremenitve vetra** za beton niso izdelane; betonska in temeljna preverjanja so za pregled inženirja.
- **Podpisovanje s kodo.** Namestitveni programi za Windows in datoteka .dmg za macOS nista podpisana, zato Windows lahko opozori, macOS pa zahteva desni klik, nato Odpri.

Prejšnje spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).
