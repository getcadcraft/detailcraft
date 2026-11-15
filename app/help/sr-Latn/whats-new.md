---
title: Novosti u verzijama 0.8 i 0.8.1
summary: Film montaže iz tablice nosivosti dizalice, automatski pilot veza, mapa zgusnutosti armature, provere temelja, paneli drvenog i lakog okvira, provere izvodljivosti i pristupa zavarivanju, zalihe dobavljača, šta pukne prvo, uživo ponovno rešavanje, više provera betona, ispravke iz 0.8.1.
keywords: novosti, šta je novo, beleške o izdanju, izmene, 0.8, 0.8.1, verzija, nove funkcije, montaža, dizalica, tablica nosivosti, film, autopilot, veze, armatura, zgusnutost, temelj, mreža, sleganje, okvir, drvo, laki čelik, spisak za sečenje, izvodljivost, pristup zavarivanju, dobavljač, zaliha, rok isporuke, šta pukne prvo, uživo, beton, seizmički, ploča, jezici, asistent
from: 6e33e052
---

Ovo je šta se promenilo u DetailCraft 0.8 (1. novembar 2026) i 0.8.1 (2. novembar 2026), u poređenju sa 0.7. Verzija 0.7 je proveravala čelične štapove; verzija 0.8 planira dizanja, predlaže veze, proverava temelje i armaturu, i okvirava drvene i lake zidove, podove i krovove.

## Novo

### Montaža

- **Plan montaže i film.** U kartici {{ui:Montaža}} opišite dizalicu (gde stoji, njen najviši kuka, oprema koja nije u tablici) i unesite redove njene tablice nosivosti. DetailCraft podiže model jedan sklop po sklop, po redosledu faza i sloj po sloj, i proverava svako dizanje u odnosu na tablicu na njegovom radijusu i u odnosu na marginu koju ste zadali. {{ui:Sačuvaj film}} upisuje jednu HTML datoteku koja se reprodukuje van mreže u bilo kom pregledaču, pa i na telefonu. Dizanja koja premašuju tablicu, prelaze je ili su previsoka nalaze se u {{ui:Problemi}}. To je plan iz vaših brojeva, a ne plan dizanja. Pogledajte [Plan montaže i film](topic:erection-movie).

### Veze

- **Automatski pilot veza.** Kartica {{ui:Automatski pilot}} pregleda svaki spoj bez veze i predlaže vezu prema oblicima: bazne limove, smičuće limove, čeone limove za grede koje označite kao momentne grede, nastavke i čvorne limove. Zadajte ravnomerno opterećenje ili jednu krajnju silu smicanja, a broj zavrtnja prati projektnu čvrstoću zavrtnja. {{ui:Dodaj sve}} dodaje predloge kao jedan korak opozivanja. To su početne vrednosti za pregled, a ne projekat veze.
- **Provere izvodljivosti.** {{ui:Problemi}} za zavrtanj do kojeg ključ ne može da dođe, zavrtnje previše blizu za nasadni ključ, ugaone zavare van njihovih granica veličine i šuplje profile koji zadržavaju vodu. Pristup za zavarivanje je nov: ugaoni zavar po celom obimu do kojeg baklja zavarivača ne može da dođe prikazan je sa delom koji smeta i udelom zavara koji je pogođen. Pogledajte [Provere izvodljivosti](topic:constructability).

### Temelji i armatura

- **Provere temelja.** Kartica {{ui:Temelj}} proverava temelje, kombinovane temelje i ploče na tlu koje opišete: nosivost, klizanje i prevrtanje pod radnim opterećenjima; savijanje, smicanje, proboj, razvijanje i minimalni čelik iz faktorisanih opterećenja (ACI 318-19). Stub blizu ivice ili ugla proverava se sa presekom odsečenim ivicom temelja. Sleganje dolazi iz modula tla, fleksibilna ploča se rešava na oprugama iz modula podloge, a grupe pilota i potporni zidovi imaju sopstvene panele. Opterećenja stubova mogu se uneti ili preuzeti iz {{ui:Analiza}}. Pogledajte [Provere temelja](topic:foundation-checks).
- **Mapa zgusnutosti armature.** Kartica {{ui:Zgusnutost}} crta toplotnu mapu svakog temelja kako se vidi odozgo: gde šipke ostavljaju premalo prostora da beton dođe do dna, prema pravilu čistog razmaka i, ako ih zadate, najvećem agregatu i glavi vibratora. Pogledajte [Mapa zgusnutosti armature](topic:rebar-congestion).

### Okvir i snabdevanje

- **Drveni i laki okvir.** Kartica {{ui:Okvir}} okvirava zidne, podne i krovne panele sa svakim komadom, spiskom za sečenje, građom za kupovinu i radioničkim crtežom u razmeri. {{ui:Postavi kao štapove}} stavlja komade u model, a {{ui:PDF listovi}} čuva jedan list za svaki panel. Dimenzije, razmak i nadvratnici su vaši: DetailCraft ne proverava da li nose opterećenje. Pogledajte [Paneli drvenog i lakog okvira](topic:framing-panels).
- **Zalihe dobavljača i rokovi.** Kartica {{ui:Snabdevanje}} čita spisak zaliha dobavljača (CSV) i za svaki presek koji spisak za sečenje kupuje pokazuje da li ima dovoljno na zalihi i koliko traje čekanje. Manjkovi i kasni preseci nalaze se u {{ui:Problemi}}. Ništa se ne naručuje. Pogledajte [Zalihe dobavljača i rokovi](topic:supplier-stock).

### Analiza i projektovanje

- **Šta pukne prvo?** U kartici {{ui:Analiza}} dugme pronalazi merodavnu kombinaciju opterećenja, najslabiji štap, koliko opterećenja mogu da rastu pre nego što prvi štap dostigne svoju granicu, i najslabiji čeoni lim ili smičući lim, tamo gde je poznata čvrstoća smicanja njegovih zavrtnja. Potrebne su prvo kombinacije i projektni standard. Pritisak u ležištu, smicanje bloka, zavari i dejstvo poluge nisu provereni. Vaš povezani asistent može da pita isto.
- **Uživo.** Označite {{ui:Uživo: ponovo rešavaj posle svake izmene}} i okvir se ponovo rešava posle svake izmene.
- **Beton i još.** Vitak stub u okviru bez pomeranja projektuje se za svoj uvećani moment (ACI 318-19 6.6.4.5). Seizmički period može da se uzme iz analize Rejlijevom metodom. Ploča od limova dobija čelik koji svaki sloj treba iz svojih momenata, kao i jednosmerno smicanje. Pogledajte [Provere betonskih elemenata i seizmička opterećenja](topic:concrete-and-seismic).
- **Za inženjera na proveru.** Rezultati temelja, betona i „Šta pukne prvo?” su pomoćna sredstva. Opterećenja vetrom nisu izrađena.

### U svakoj aplikaciji

- **Jezici.** Pomoć je na 54 jezika. Svi osim engleskog su mašinski prevodi dok ih ne pročita izvorni govornik; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbečki).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} bira prelom, 2 reda ili 1 red. Traka koja već staje ostaje kakva jeste; ostale se pomeraju bočno.
- **Mreža svojstava.** Polja temelja koriste zajedničku mrežu: sklopive kategorije i kompaktnu gustinu. Unesena aritmetika, kao 2*450, i dalje radi.
- **Ulazni uređaji.** Tačpad, olovka, 3D miš, kontroler i MIDI mogu da upravljaju aplikacijama. Pogledajte [Kretanje u 3D](topic:navigate-3d).
- **Panel problema.** Upozorenja novih provera iznad pojavljuju se u istom panelu {{ui:Problemi}} kao ranije.
- **Povežite svoj AI.** Vaš sopstveni asistent, povezan preko CadCraft Studio, radi sa svih osam aplikacija i vidi samo ono što dozvolite. Povezivanje jednim klikom, hostovani konektor i vaš sopstveni API ključ u Studiju još dolaze. Pogledajte [Korišćenje DetailCraft sa AI asistentom](topic:use-with-ai-assistants).

## Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i pakovana izdanja mogu da promene jezik za vreme rada; ranije su bili samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne menja.
- **Izbor ukrštenim prozorom.** Instalateri 0.8.1 nose ponašanje izbora prozorom koje je već bilo ispravno u web verziji 0.8; stariji instalater ga nije imao.
- **Tableti u uspravnom položaju.** Višak visine mreže ide platnu, a raspored lista počinje na 760 px ili manje.

## Nije još u ovoj verziji

- **Slanje NC u mašinu** nije objavljeno.
- **Opterećenja vetrom** za beton nisu izrađena, a provere betona i temelja su za inženjera na pregled.
- **Potpisivanje koda.** Instalateri za Windows i .dmg za macOS nisu potpisani, pa Windows može da upozori, a macOS traži desni klik, pa Otvori.

Ranije promene su u [Novosti u verziji 0.7](topic:whats-new-0-7).
