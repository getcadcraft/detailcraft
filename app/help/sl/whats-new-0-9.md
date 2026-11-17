---
title: Kaj je novega v 0.9
summary: Jeklene dimenzije UK po Blue Book in neenakokraki koti, risbe delavnice za vsak del v enem naboru PDF, Moji profili za profile po meri, P-Delta in lastne frekvence, obremenitve vetra po ASCE 7, potresno mesto in kombinacije ter kazalci v živo s sledenjem.
keywords: kaj je novega, opombe ob izdaji, dnevnik sprememb, 0.9, jeklo UK, blue book, ub, uc, pfc, shs, rhs, chs, neenakokraki kot, risba delavnice, komplet listov, oznaka dela, pdf, moji profili, profil po meri, p-delta, drugi red, lastna frekvenca, končni elementi, modalna masa, obremenitev vetra, asce 7, potres, razred mesta, usgs, kombinacije obremenitev, lrfd, asd, v živo, kazalci, sledenje, osebe, namigi, spremembe, 0.8, 0.8.1, različica, nove funkcije, montaža, dvigalo, diagram nosilnosti, film, samodejno, spoji, armatura, zgostitev, temelji, temeljna plošča, posedanje, okvirji, les, lahka tankostenska konstrukcija, seznam rezanja, izvedljivost, dostop do zvara, dobavitelj, zaloga, dobavni rok, kaj popusti prvo, beton, plošča, jeziki, pomočnik
from: 4c95a2de
---

To so spremembe v DetailCraft 0.9 v primerjavi z 0.8.1. 0.9 prinaša jeklene dimenzije UK, risbo delavnice za vsak del hkrati, večji zavihek {{ui:Analiza}} za okvirje ter ogled kazalcev drug drugega, ko delate skupaj.

## Novo

### Jeklo UK in risbe delavnice

- **Dimenzije jekla UK.** Seznami profilov zdaj vsebujejo 976 dimenzij iz Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS in RHS, hladno oblikovani votli prerezi pa so ločeni (njihova imena se začnejo s CF). Imena so zapisana najprej z družino, na primer UB305x165x40 ali SHS100x100x5.0, vnos tako, kot je zapisano na risbah, pa deluje tudi: 305x165x40 UB, L100x100x10, SHS100x5. Glejte [Katalog profilov](topic:profile-catalog).
- **Neenakokraki koti.** Koti UEA ohranjajo obe kraki pri uvozu in izvozu IFC ter v datotekah NC, zrcaljenje pa obrne kos s konca na konec.
- **Vse risbe delavnice naenkrat.** Izberite {{ui:Delavniška risba}} v skupini {{ui:Izhod}}, ko ni izbrano ničesar. Okno našteje vse oznake delov, predogleda katerokoli od njih, {{ui:Prenesi vse}} pa shrani en PDF s stranjo za vsako oznako, vsaka z naslovom „List 3 od 42“. {{ui:Prenesi PDF}} shrani list, ki ga gledate. Zdaj dobijo liste tudi U-profili, koti in votli prerezi. Glejte [Izdelava delavniških risb](topic:shop-drawings).
- **Moji profili.** Profil po meri lahko zdaj shranite za vsak nov model. V obrazcu Profil po meri pustite označeno {{ui:Shrani v Moji profili}}; seznam {{ui:Moji profili}} pod njim ima {{ui:Shrani}}, {{ui:Uporabi tukaj}} in {{ui:Odstrani}}. Seznam se hrani v tem brskalniku (do 200), ne v vašem računu. Glejte [Plošče in profili](topic:plates-and-profiles).

### Analiza

- **Drugi red (P-Delta).** Označite {{ui:Drugi red (P-Delta)}} ob {{ui:Zaženi}} v zavihku {{ui:Analiza}}, in osne sile delujejo na ukrivljen okvir. Plošče in togi stropi ostanejo prvega reda, z opozorilom. Glejte [Sile, reakcije in progibi](topic:frame-analysis).
- **Lastne frekvence.** Blok {{ui:Končni elementi: lastne frekvence}} pod rezultati najde najnižje lastne oblike istega modela, z nihajnim časom in efektivno modalno maso, ter prikaže lastno obliko na modelu. Glejte [Sile, reakcije in progibi](topic:frame-analysis).
- **Obremenitve vetra in potresno mesto.** Trije novi bloki v zavihku {{ui:Analiza}}: {{ui:Obremenitve vetra (ASCE 7, smerni postopek)}}, {{ui:Potresno mesto in sistem (ASCE 7)}} in {{ui:Kombinacije obremenitev po ASCE 7}}. Glejte [Veter, potresno mesto in kombinacije ASCE 7](topic:wind-seismic-combinations).

### Skupno delo

- **Kazalci in imena.** V seji Live je kazalec vsake osebe narisan v modelu z njenim imenom in barvo, izbrano pa dobi okvir.
- **Sledenje osebi.** V seji odprite {{ui:Osebe}} in pri imenu izberite {{ui:Sledi}}; vaš pogled se premika skupaj z njihovim. Gostitelj lahko izbere {{ui:Naj vsi sledijo meni}}. Glejte [Sledenje osebi v seji Live](topic:follow-in-live).

### V vseh aplikacijah

- Namigi so Bootstrap namigi, kartica z nasveti ob zagonu ima gumb za zapiranje, vrstice zavihkov se pomikajo vstran, kadar se ne prilegajo, zavihek brskalnika pa imenuje odprt dokument, za njim pa DetailCraft in CadCraft.

## Popravljeno

- Profil po meri se je izgubil, ko ste začeli nov model.
- U-profili, koti in votli prerezi so manjkali v naboru risb delavnice.

## Iskrene omejitve

- Bloki za veter, potres in končne elemente so pomoč pri preverjanju. Inženir pregleda rezultate; to ni preverjanje po predpisu. Iskanje USGS je bilo preizkušeno na nadomestni storitvi, ne na živi storitvi.
- Končni elementi in P-Delta sta bila preverjena z ročnimi in analitičnimi rešitvami, ne z resničnim objektom. Analiza uklona še ni izdelana.
- Še noben izdelovalec v Združenem kraljestvu ni preizkusil dimenzij UK, datoteke NC za neenakokrake kote pa še niso bile zagnane na stroju.
- Nabor risb delavnice je samo v PDF.
- Jeziki poleg angleščine so strojni osnutki.
- Namestitveni programi za Windows niso podpisani s kodo ({{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}); slika diska za macOS ni notarizirana (desni klik, nato {{ui:Odpri}}).

Starejše spremembe so v opombah za 0.8 in 0.8.1 nižje na tej strani.

## Prej: 0.8 in 0.8.1

To so spremembe v DetailCraft 0.8 (1. novembra 2026) in 0.8.1 (2. novembra 2026) v primerjavi z 0.7. 0.7 je preverjal jeklene elemente; 0.8 načrtuje dvige, predlaga spoje, preverja temelje in armaturo ter pripravlja okvirje lesenih in lahkih tankostenskih sten, plošč in streh.

### Novo

**Montaža**

- **Načrt montaže in film.** V zavihku {{ui:Montaža}} opišite dvigalo (kje stoji, najvišjo kljuko, pritrditev, ki ni v diagramu) in vpišite vrstice njegovega diagrama nosilnosti. DetailCraft dviga model po en sestav naenkrat, po fazah in nivo za nivojem, ter preverja vsak dvig z diagramom pri njegovem dosegu in glede na rezervo, ki ste jo nastavili. {{ui:Shrani film}} zapiše eno datoteko HTML, ki se predvaja brez povezave v vsakem brskalniku, tudi na telefonu. Dvigi, ki so nad diagramom, čez njega ali previsoki, so v {{ui:Težave}}. Gre za načrt iz vaših številk, ne za načrt dvigovanja. Glejte [Načrt montaže in film](topic:erection-movie).

**Spoji**

- **Samodejni načrt spojev.** Zavihek {{ui:Samodejno}} pregleda vsak stik brez spoja in predlaga enega glede na oblike: podnožne plošče, strižne ploščice, čelne plošče za nosilce, ki jih označite kot momentne, nadaljevanja in vozliščne plošče. Vnesite enakomerno obtežbo ali strižno silo na enem koncu, število vijakov pa sledi projektni nosilnosti vijaka. {{ui:Dodaj vse}} doda predloge kot en korak razveljavitve. To so izhodiščne vrednosti za pregled, ne projektiranje spoja.
- **Preverjanja izvedljivosti.** {{ui:Težave}} za vijak, do katerega ključ ne seže, vijake, preblizu za nasadni ključ, kotne zvare zunaj njihovih mejnih velikosti in votle prereze, v katerih se zadržuje voda. Dostop do zvara je nov: kotni zvar po celem obodu, do katerega varilni plamenik ne seže, je naveden skupaj z oviranim delom in deležem prizadetega zvara. Glejte [Preverjanja izvedljivosti](topic:constructability).

**Temelji in armatura**

- **Preverjanja temeljev.** Zavihek {{ui:Temelji}} preverja temeljne stope, združene temeljne stope in temeljne plošče na tleh, ki jih opišete: nosilnost tal, zdrs in prevrnitev iz obratovalnih obremenitev; upogib, strig, prebijanje, sidranje armature in najmanjšo armaturo iz faktoriziranih obremenitev (ACI 318-19). Steber blizu roba ali vogala se preveri z odrezanim prerezom ob robu temeljne stope. Posedanje izhaja iz modula tal, prožna plošča se reši na vzmeteh iz modula podlage, skupine pilotov in podporne stene pa imajo svoje panele. Obremenitve stebrov lahko vpišete ali prevzamete iz {{ui:Analiza}}. Glejte [Preverjanja temeljev](topic:foundation-checks).
- **Karta zgoščenosti armature.** Zavihek {{ui:Zgostitev}} riše toplotno karto vsake temeljne stope, gledano od zgoraj: kjer palice pustijo premalo prostora, da beton pride do dna, glede na pravilo proste razdalje in, če jih vnesete, največji agregat in glavo vibratorja. Glejte [Karta zgoščenosti armature](topic:rebar-congestion).

**Les in lahka tankostenska konstrukcija**

- **Lesni in lahki tankostenski okvirji.** Zavihek {{ui:Okvirji}} izdela okvirje sten, plošč in streh z vsakim kosom, seznamom rezanja, materialom za nakup in risbo delavnice v merilu. {{ui:Postavi kot elemente}} postavi kose v model, {{ui:Listi PDF}} pa shrani en list za vsak panel. Dimenzije, razmik in nadglavni nosilci so vaši: DetailCraft ne preverja, ali nosijo obremenitev. Glejte [Paneli lesenih in lahkih tankostenskih okvirjev](topic:framing-panels).

**Dobava**

- **Zaloga dobavitelja in dobavni roki.** Zavihek {{ui:Dobava}} prebere seznam zaloge dobavitelja (CSV) in za vsak profil, ki ga seznam rezanja kupuje, pokaže, ali je na zalogi dovolj in kako dolgo traja čakanje. Pomanjkanja in zamudni profili so v {{ui:Težave}}. Ničesar se ne naroči. Glejte [Zaloga dobavitelja in dobavni roki](topic:supplier-stock).

**Analiza in projektiranje**

- **Kaj popusti prvo?** V zavihku {{ui:Analiza}} gumb poišče odločilno kombinacijo nosilnosti, najšibkejši element, za koliko se lahko obremenitve povečajo, preden prvi element doseže svojo mejo, ter najšibkejšo čelno ploščo ali strižno ploščico, kjer je znana strižna nosilnost njenih vijakov. Najprej potrebuje kombinacije in projektni predpis. Nosilnost tal, bločni strig, zvari in vzvod se ne preverjajo. Vaš povezani pomočnik lahko zahteva isto.
- **V živo.** Označite {{ui:V živo: po vsaki spremembi reši znova}}, in okvir se po vsaki spremembi znova reši.
- **Več o betonu.** Vitek steber v okviru brez bočnega premika se projektira za svoj povečani moment (ACI 318-19 6.6.4.5). Potresna perioda se lahko vzame iz analize po Rayleighovi metodi. Plošča iz plošč dobi armaturo, ki jo vsak sloj potrebuje iz svojih momentov, ter enosmerni strig. Glejte [Preverjanje betonskih elementov in potresne obremenitve](topic:concrete-and-seismic).
- **Za preverbo inženirja.** Rezultati temeljev, betona in Kaj popusti prvo so pomoč. Obremenitve vetra še niso izdelane.

**V vseh aplikacijah**

- **Jeziki.** Pomoč je v 54 jezikih. Tisti, ki so poleg angleščine, so strojni osnutki, dokler jih izvorni govorec ne prebere; deset je novih (litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikanščina, filipinščina, svahili, uzbeščina).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} izbere prelom vrstic, 2 vrstici ali 1 vrstico. Vrstica, ki se že prilega, ostane takšna; ostale se pomikajo vstran.
- **Mreža lastnosti.** Polja temeljne stope uporabljajo skupno mrežo: zložljive kategorije in strnjena gostota. Vpisano računanje, kot je 2*450, še vedno deluje.
- **Vhodne naprave.** Sledilna ploščica, pisalo, 3D miška, krmilnik in MIDI lahko upravljajo aplikacije. Glejte [Krmarjenje v 3D](topic:navigate-3d).
- **Podokno Težave.** Opozorila novih preverjanj zgoraj se prikazujejo v istem podoknu {{ui:Težave}} kot prej.
- **Povežite svojo umetno inteligenco.** Vaš lastni pomočnik, povezan prek CadCraft Studio, deluje z vsemi osmimi aplikacijami in vidi le tisto, kar dovolite. Povezava z enim klikom, konektor v oblaku in vaš lastni API ključ v Studiu so še v pripravi. Glejte [Uporaba DetailCraft s pomočnikom z umetno inteligenco](topic:use-with-ai-assistants).

**Popravljeno v 0.8.1**

- **Jeziki v Studiu.** Studio in zapakirane izdaje lahko med delovanjem preklapljajo jezik; prej so bile samo v angleščini. Še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.
- **Izbor s prečnim oknom.** Namestitveni programi 0.8.1 že vsebujejo vedenje izbire z oknom iz spletne izdaje 0.8; starejši namestitveni program tega ni imel.
- **Tablični računalniki v pokončni postavitvi.** Odvečna višina mreže gre na platno, postavitev lista pa se začne pri 760 px ali manj.

### Še ni v tej različici

- **Pošiljanje NC na stroj** še ni izdano.
- **Obremenitve vetra** za beton še niso izdelane, preverjanja betona in temeljev pa so za pregled inženirja.
- **Podpisovanje kode.** Namestitveni programi za Windows in datoteka .dmg za macOS nista podpisana, zato lahko Windows opozori, macOS pa zahteva desni klik, nato {{ui:Odpri}}.

Starejše spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).
