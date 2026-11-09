---
title: Šta je novo u verziji 0.8 i 0.8.1
summary: Montažni film iz tablice nosivosti dizalice, autopilot veza, mapa zagušenja armature, provjere temelja, paneli drvenih i lahkih okvirnih zidova, provjere izvodljivosti i pristupa zavarima, zalihe dobavljača, šta puca prvo, ponovno rješavanje uživo, više provjera betona i ispravke verzije 0.8.1.
keywords: šta je novo, izdanja, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, montaža, dizalica, tablica nosivosti, film, autopilot, veze, armatura, zagušenje, temelj, temelji, slijeganje, okvir, drvo, lahki okvir, lista rezanja, izvodljivost, pristup zavaru, dobavljač, zaliha, vrijeme isporuke, šta puca prvo, uživo, beton, seizmički, ploča, jezici, asistent
from: 6e33e052
---

Ovo je šta se promijenilo u DetailCraft 0.8 (1. novembar 2026) i 0.8.1 (2. novembar 2026), u odnosu na 0.7. Verzija 0.7 je provjeravala čelične elemente; 0.8 planira podizanja, predlaže veze, provjerava temelje i armaturu, i uokviruje drvene i lahke zidove, podove i krovove.

## Novo

### Montaža

- **Plan montaže i film.** Na kartici {{ui:Montaža}} opišite dizalicu (gdje stoji, njen najviši kuka, opremu za podizanje koja nije u tablici) i upišite redove njene tablice nosivosti. DetailCraft podiže model jedan sklop po sklop, po fazama i sloj po sloj, i provjerava svako podizanje u odnosu na tablicu na njegovom radijusu i u odnosu na granicu koju postavite. {{ui:Sačuvaj video}} piše jednu HTML datoteku koja se pušta bez veze u bilo kojem pregledniku, i na telefonu. Podizanja koja su preko tablice, iza nje ili previsoka su u {{ui:Problemi}}. To je plan iz vaših brojeva, a ne plan podizanja. Vidi [Plan montaže i film](topic:erection-movie).

### Veze

- **Autopilot veza.** Kartica {{ui:Autopilot}} pregleda svaki spoj koji nema vezu i predlaže jednu na osnovu oblika: temeljne ploče, smične ploče, čeone ploče za grede koje označite kao momentne grede, nastavke i čvorne limove. Zadajte ravnomjerno opterećenje ili jednu krajnju smičnu silu, i broj zavrtnja prati projektnu čvrstoću zavrtnja. {{ui:Dodaj sve}} dodaje prijedloge kao jedan korak poništavanja. To su početne vrijednosti za pregled, a ne projekat veze.
- **Provjere izvodljivosti.** {{ui:Problemi}} za zavrtanj do kojeg ključ ne može doći, zavrtnje previše blizu za nasadni ključ, ugaone zavare van njihovih granica veličine i šuplje profile koji zadržavaju vodu. Pristup zavaru je nov: ugaoni zavar koji se oko cijelog spoja ne može dohvatiti gorionikom zavarivača navodi se sa dijelom koji smeta i udjelom zahvaćenog zavara. Vidi [Provjere izvodljivosti](topic:constructability).

### Temelji i armatura

- **Provjere temelja.** Kartica {{ui:Temelji}} provjerava temelje, kombinovane temelje i ploče na tlu koje opišete: nosivost, klizanje i prevrtanje pod radnim opterećenjima; savijanje, smicanje, probijanje, razvoj i minimalnu armaturu pod faktorisanim opterećenjima (ACI 318-19). Stub blizu ivice ili ugla provjerava se sa presjekom odsječenim ivicom temelja. Slijeganje dolazi iz modula tla, fleksibilna ploča se rješava na oprugama iz modula podloge, a grupe pilota i potporni zidovi imaju sopstvene panele. Opterećenja stubova se mogu upisati ili preuzeti iz {{ui:Analiza}}. Vidi [Provjere temelja](topic:foundation-checks).
- **Mapa zagušenja armature.** Kartica {{ui:Zagušenje}} crta toplotnu mapu svakog temelja gledanog odozgo: gdje šipke ostavljaju premalo mjesta da beton dođe do dna, u odnosu na pravilo čistog razmaka i, ako ih unesete, najveći agregat i glavu vibratora. Vidi [Mapa zagušenja armature](topic:rebar-congestion).

### Okvir i snabdijevanje

- **Drveni i lahki okvir.** Kartica {{ui:Okvir}} uokviruje panele zidova, podova i krovova sa svakim komadom, listom rezanja, građom za kupovinu i radioničkim crtežom u razmjeri. {{ui:Postavi kao elemente}} stavlja komade u model, a {{ui:PDF listovi}} snima jedan list za svaki panel. Dimenzije, razmak i nadprozorници su vaši: DetailCraft ne provjerava da li nose opterećenje. Vidi [Paneli drvenog i lahkog okvira](topic:framing-panels).
- **Zalihe dobavljača i rokovi isporuke.** Kartica {{ui:Nabavka}} čita listu zaliha dobavljača (CSV) i za svaki presjek koji lista rezanja kupuje pokazuje da li ga ima dovoljno na zalihi i koliko dugo se čeka. Manjkovi i zakašnjeli presjeci su u {{ui:Problemi}}. Ništa se ne naručuje. Vidi [Zalihe dobavljača i rokovi isporuke](topic:supplier-stock).

### Analiza i projektovanje

- **Šta puca prvo?** Na kartici {{ui:Analiza}}, dugme pronalazi kombinaciju opterećenja čvrstoće koja upravlja, najslabiji element, koliko se opterećenja mogu povećati prije nego prvi element dostigne svoju granicu, i najslabiju čeonu ploču ili smičnu ploču tamo gdje je poznata smična čvrstoća njihovih zavrtnjeva. Potrebne su prvo kombinacije i projektni standard. Pritisak, bločno smicanje, zavari i izvijanje nisu provjereni. Vaš povezani asistent može pitati isto.
- **Uživo.** Označite {{ui:Uživo: ponovo riješi nakon svake izmjene}} i okvir se ponovo rješava nakon svake izmjene.
- **Beton, više.** Vitki stub u okviru bez pomaka projektuje se za svoj uvećani moment (ACI 318-19 6.6.4.5). Seizmički period se može uzeti iz analize Rejlijevom metodom. Ploča od elemenata dobija čelik koji svaki sloj treba iz svojih momenata, i jednosmjerno smicanje. Vidi [Provjere betonskih elemenata i seizmička opterećenja](topic:concrete-and-seismic).
- **Za inženjera na pregled.** Rezultati temelja, betona i funkcije Šta puca prvo su pomoćna sredstva. Opterećenja od vjetra nisu izrađena.

### U svim aplikacijama

- **Jezici.** Pomoć je na 54 jezika. Oni osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik; deset je novih (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbečki).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} bira prelamanje, 2 reda ili 1 red. Traka koja već staje ostaje kakva jeste; ostale se pomjeraju bočno.
- **Mreža svojstava.** Polja temelja koriste zajedničku mrežu: sklopive kategorije i kompaktnu gustinu. Upisana aritmetika, kao 2*450, i dalje radi.
- **Ulazni uređaji.** Pločica osjetljiva na dodir, olovka, 3D miš, kontroler i MIDI mogu upravljati aplikacijama. Vidi [Kretanje u 3D](topic:navigate-3d).
- **Panel Problemi.** Upozorenja novih provjera iznad pojavljuju se u istom panelu {{ui:Problemi}} kao i ranije.
- **Povežite svoj AI.** Vaš vlastiti asistent, povezan preko CadCraft Studio, radi sa svih osam aplikacija i vidi samo ono što dozvolite. Povezivanje jednim klikom, hostovani konektor i vaš vlastiti API ključ u Studiju tek dolaze. Vidi [Korištenje DetailCraft sa AI asistentom](topic:use-with-ai-assistants).

## Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i upakovana izdanja mogu promijeniti jezik u toku rada; prije su bila samo na engleskom. Još nije provjereno na svim platformama: javite nam ako se jezik ne mijenja.
- **Izbor prozorom koji ukršta.** Instalateri 0.8.1 nose ispravno ponašanje izbora prozorom koje je već bilo u web verziji 0.8; stariji instalater nije.
- **Tableti u uspravnom položaju.** Slobodna visina mreže ide platnu, a raspored lista počinje na 760 px ili manje.

## Nije u ovoj verziji još

- **Slanje NC-a na mašinu** nije objavljeno.
- **Opterećenja od vjetra** za beton nisu izrađena, a provjere betona i temelja su za inženjera na pregled.
- **Potpisivanje koda.** Instalateri za Windows i macOS .dmg nisu potpisani, pa Windows može upozoriti, a macOS traži desni klik, pa Otvori.

Ranije promjene su u [Šta je novo u verziji 0.7](topic:whats-new-0-7).
