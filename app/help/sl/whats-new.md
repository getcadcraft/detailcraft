---
title: Kaj je novega v različicah 0.8 in 0.8.1
summary: Filmski posnetek montaže iz tabele nosilnosti žerjava, samodejni pilot povezav, zemljevid zgostitve armature, preverbe temeljev, okvirni paneli iz lesa in lahkih profilov, preverbe izdelovalnosti in dostopa do varov, zaloga dobavitelja, kaj se pokvari prvo, sprotno ponovno reševanje, več preverb betona in popravki 0.8.1.
keywords: kaj je novega, opombe ob izdaji, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove funkcije, montaža, dvig, žerjav, tabela nosilnosti, film, pilot, povezave, armatura, zgostitev, temelj, temeljna stopa, posedek, ogrodje, les, lahka konstrukcija, seznam rezanja, izdelovalnost, dostop do varov, dobavitelj, zaloga, dobavni rok, kaj se pokvari prvo, v živo, beton, potres, plošča, jeziki, pomočnik
from: 6e33e052
---

To je, kaj se je spremenilo v DetailCraft 0.8 (1. november 2026) in 0.8.1 (2. november 2026), v primerjavi z 0.7. Različica 0.7 je preverjala jeklene elemente; 0.8 načrtuje dvige, predlaga povezave, preverja temelje in armaturo ter ogrodi lesene in lahke stenske, talne in strešne panele.

## Novo

### Montaža

- **Načrt montaže in film.** V zavihku {{ui:Erection}} opišite žerjav (kje stoji, njegova najvišja kljuka, oprema, ki ni v tabeli) in vpišite vrstice tabele nosilnosti. DetailCraft dvigne model po enega sestava naenkrat, po vrstnem redu faz in plast za plastjo, ter preveri vsak dvig glede na tabelo pri njegovem polmeru in glede na rezervo, ki jo nastavite. {{ui:Save movie}} zapiše eno datoteko HTML, ki se predvaja brez povezave v vsakem brskalniku, tudi na telefonu. Dvigi, ki presegajo tabelo, so zunaj nje ali previsoki, so v {{ui:Problems}}. Gre za načrt iz vaših številk, ne za načrt dviga. Glejte [Načrt montaže in film](topic:erection-movie).

### Povezave

- **Samodejni pilot povezav.** Zavihek {{ui:Autopilot}} pregleda vsak spoj brez povezave in iz oblik predlaga povezavo: podložne plošče, strižne ploščice, čelne plošče za nosilce, ki jih označite kot momentne nosilce, nadaljevanja in vozliščne plošče. Podajte enakomerno obtežbo ali eno prečno silo na enem koncu, število vijakov pa sledi projektni nosilnosti vijaka. {{ui:Add them all}} doda predloge kot en korak razveljavitve. To so začetne vrednosti za pregled, ne načrt povezave.
- **Preverbe izdelovalnosti.** {{ui:Problems}} za vijak, do katerega ne seže ključ, vijake pretesno za vtičnik, kotne vare zunaj njihovih mejnih velikosti in votle profile, ki zadržujejo vodo. Dostop do varov je nov: obodni kotni var, do katerega ne seže varilčev gorilnik, je naveden z delom, ki ovira, in deležem prizadetega vara. Glejte [Preverbe izdelovalnosti](topic:constructability).

### Temelji in armatura

- **Preverbe temeljev.** Zavihek {{ui:Foundation}} preverja temeljne stope, združene temelje in plošče na tleh, ki jih opišete: nosilnost, zdrs in prevrnitev pri obratovalnih obremenitvah; upogib, strig, prebijanje, sidranje in najmanjšo armaturo pri faktoriziranih obremenitvah (ACI 318-19). Steber blizu roba ali kota je preverjen z odsekom, odrezanim z robom temelja. Posedek izhaja iz modula tal, prožna plošča se reši na vzmeteh iz modula podlage, skupine pilotov in podporni zidovi pa imajo lastne plošče. Obremenitve stebrov lahko vpišete ali vzamete iz {{ui:Analysis}}. Glejte [Preverbe temeljev](topic:foundation-checks).
- **Zemljevid zgostitve armature.** Zavihek {{ui:Congestion}} nariše toplotni zemljevid vsake temeljne stope, gledano od zgoraj: kjer palice pustijo premalo prostora, da beton pride dol, glede na pravilo najmanjšega prostega razmika in, če ga podate, največje agregatno zrno in glavo vibratorja. Glejte [Zemljevid zgostitve armature](topic:rebar-congestion).

### Ogrodje in dobava

- **Lesni in lahki okvirni paneli.** Zavihek {{ui:Framing}} ogrodi stenske, talne in strešne panele z vsakim kosom, seznamom rezanja, zalogo za nakup in delavniško risbo v merilu. {{ui:Place as members}} postavi kose v model, {{ui:PDF sheets}} pa shrani en list za vsak panel. Velikosti, razmiki in preklade so vaši: DetailCraft ne preverja, ali nosijo obremenitev. Glejte [Lesni in lahki okvirni paneli](topic:framing-panels).
- **Zaloga dobavitelja in dobavni roki.** Zavihek {{ui:Supply}} prebere seznam zalog dobavitelja (CSV) in za vsak prerez, ki ga seznam rezanja kupuje, pokaže, ali ga je dovolj na zalogi in kako dolgo traja čakanje. Kratki kosi in zamudni prerezi so v {{ui:Problems}}. Ničesar se ne naroči. Glejte [Zaloga dobavitelja in dobavni roki](topic:supplier-stock).

### Analiza in zasnova

- **Kaj se pokvari prvo?** V zavihku {{ui:Analysis}} gumb poišče kombinacijo nosilnosti, ki odloča, najšibkejši element, za koliko se obremenitve lahko povečajo, preden prvi element doseže svojo mejo, in najšibkejšo čelno ploščo ali strižno ploščico, kjer je znana strižna nosilnost njenih vijakov. Najprej potrebuje kombinacije in projektni predpis. Pritisk na ležišče, bločni strig, vari in vzvodni učinek se ne preverjajo. Vaš povezani pomočnik lahko zahteva isto.
- **V živo.** Označite {{ui:Live: solve again after each edit}} in okvir se po vsaki spremembi znova reši.
- **Beton in več.** Vitki steber v okvirju brez nihanja je zasnovan za svoj povečani moment (ACI 318-19 6.6.4.5). Potresna perioda se lahko vzame iz analize z Rayleighovo metodo. Plošča iz plošč dobi jeklo, ki ga potrebuje vsaka plast, iz svojih momentov, ter enosmerni strig. Glejte [Preverite betonske elemente in ustvarite potresne obtežbe](topic:concrete-and-seismic).
- **Za preverjanje inženirja.** Rezultati temeljev, betona in „Kaj se pokvari prvo?“ so le pomoč. Obremenitve vetra niso zgrajene.

### V vseh aplikacijah

- **Jeziki.** Pomoč je na voljo v 54 jezikih. Tisti razen angleškega so strojni osnutki, dokler jih ne prebere izvorni govorec; deset jih je novih (litovščina, latvijščina, bosanščina, maratščina, telugu, albanščina, afrikanščina, filipinščina, svahili, uzbeščina).
- **Vrstice orodne vrstice.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} izbere prelom, 2 vrstici ali 1 vrstico. Vrstica, ki se že prilega, ostane takšna; ostale se pomikajo vodoravno.
- **Mreža lastnosti.** Polja temeljne stope uporabljajo skupno mrežo: zložljive kategorije in kompaktno gostoto. Vpisane računske operacije, kot je 2*450, še vedno delujejo.
- **Vhodne naprave.** Sledilna ploščica, pisalo, 3D miška, krmilnik in MIDI lahko upravljajo aplikacije. Glejte [Krmarjenje v 3D](topic:navigate-3d).
- **Plošča težav.** Opozorila novih preverb zgoraj se prikažejo v isti plošči {{ui:Problems}} kot prej.
- **Povežite svojega pomočnika AI.** Vaš lastni pomočnik, povezan prek CadCraft Studia, deluje z vsemi osmimi aplikacijami in vidi samo tisto, kar dovolite. Povezava z enim klikom, gostujoči priključek in vaš lastni ključ API v Studiu so še v pripravi. Glejte [Uporaba DetailCraft s pomočnikom AI](topic:use-with-ai-assistants).

## Popravljeno v 0.8.1

- **Jeziki v Studiu.** Studio in pakirane izdaje lahko menjajo jezik med delovanjem; prej so bile samo v angleščini. Še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.
- **Izbor z oknom za sekanje.** Namestitveni programi 0.8.1 že vsebujejo pravilno vedenje izbora z oknom iz spletne izdaje 0.8; starejši namestitveni program ga ni imel.
- **Tablice v pokončni postavitvi.** Odvečna višina mreže gre na platno, postavitev lista pa se začne pri 760 slikovnih točkah ali manj.

## Še ni v tej različici

- **Pošiljanje NC na stroj** še ni izdano.
- **Obremenitve vetra** za beton še niso zgrajene; preverbe betona in temeljev mora pregledati inženir.
- **Podpisovanje kode.** Namestitveni programi za Windows in datoteka .dmg za macOS nista podpisana, zato Windows lahko opozori, macOS pa zahteva desni klik in Odpri.

Prejšnje spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).
