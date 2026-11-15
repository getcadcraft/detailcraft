---
title: Što je novo u verzijama 0.8 i 0.8.1
summary: Film montaže iz tablice nosivosti dizalice, automatski pilot spojeva, karta gustoće armature, provjere temelja, paneli za drveni i lagani čelični okvir, provjere izvedivosti i pristupa zavaru, zalihe dobavljača, što pukne prvo, uživo ponovno rješavanje, dodatne provjere betona i ispravci 0.8.1.
keywords: što je novo, novosti, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, montaža, dizalica, tablica nosivosti, film, pilot, spojevi, armatura, gustoća, temelj, slijeganje, okvir, drvo, lagani čelik, popis za rezanje, izvedivost, pristup zavaru, dobavljač, zaliha, rok isporuke, što pukne prvo, uživo, beton, potres, ploča, jezici, asistent
from: 6e33e052
---

Ovo je što se promijenilo u DetailCraftu 0.8 (1. studenoga 2026.) i 0.8.1 (2. studenoga 2026.) u odnosu na 0.7. Verzija 0.7 provjeravala je čelične štapove; 0.8 planira dizanja, predlaže spojeve, provjerava temelje i armaturu te izrađuje okvire za drvene i lagane čelične zidove, podove i krovove.

## Novo

### Montaža

- **Plan montaže i film.** U kartici {{ui:Montaža}} opišite dizalicu (gdje stoji, njezinu najvišu kuku, pribor za vješanje koji nije u tablici) i upišite retke njezine tablice nosivosti. DetailCraft podiže model po jedan sklop, prema redoslijedu faza i red po red, te provjerava svako dizanje prema tablici za njegov radijus i prema rezervi koju postavite. {{ui:Spremi film}} zapisuje jednu HTML datoteku koja se reproducira bez veze u bilo kojem pregledniku, pa i na telefonu. Dizanja koja su iznad tablice, izvan nje ili previsoka navedena su u {{ui:Problemi}}. To je plan prema vašim brojkama, a ne plan dizanja. Vidi [Plan montaže i film](topic:erection-movie).

### Spojevi

- **Automatski pilot spojeva.** Kartica {{ui:Autopilot}} pregledava svaki spoj bez veze i predlaže ga prema oblicima: podložne ploče, posmične pločice, čeone ploče za grede koje označite kao momentne, nastavke i čvorne ploče. Zadajte jednoliko opterećenje ili poprečnu silu na jednom kraju, a broj vijaka slijedi projektnu čvrstoću vijka. {{ui:Dodaj sve}} dodaje prijedloge kao jedan korak poništavanja. To su polazne vrijednosti za pregled, a ne proračun spoja.
- **Provjere izvedivosti.** {{ui:Problemi}} za vijak koji ključ ne može doseći, vijke pretijesno razmaknute za nasadni ključ, kutne zavare izvan granica njihove veličine i šuplje profile koji zadržavaju vodu. Pristup zavaru je novost: kutni zavar oko cijelog spoja koji plamenik zavarivača ne može doseći navodi se uz dio koji smeta i udio zavara koji je time pogođen. Vidi [Provjere izvedivosti](topic:constructability).

### Temelji i armatura

- **Provjere temelja.** Kartica {{ui:Temelji}} provjerava temelje samce, spojene temelje i podloge na tlu koji opišete: nosivost, klizanje i prevrtanje pod uporabnim opterećenjima; savijanje, poprečnu silu, probijanje, razvoj i minimalnu armaturu pod proračunskim opterećenjima (ACI 318-19). Stup blizu ruba ili kuta provjerava se s presjekom odsječenim rubom temelja. Slijeganje dolazi iz modula tla, fleksibilna podloga rješava se na oprugama iz modula podloge, a grupe pilota i potporni zidovi imaju vlastite panele. Opterećenja stupova mogu se upisati ili preuzeti iz {{ui:Analiza}}. Vidi [Provjere temelja](topic:foundation-checks).
- **Karta gustoće armature.** Kartica {{ui:Gustoća}} crta toplinsku kartu svakog temelja gledano odozgo: gdje šipke ostavljaju premalo prostora da beton dođe do dna, u odnosu na pravilo čistog razmaka i, ako ih zadate, na najveće zrno agregata i glavu vibratora. Vidi [Karta gustoće armature](topic:rebar-congestion).

### Okvir i opskrba

- **Drveni i lagani čelični okvir.** Kartica {{ui:Okvir}} izrađuje okvire panela zidova, podova i krovova sa svakim komadom, popisom za rezanje, zalihama za kupnju i radioničkim crtežom u mjerilu. {{ui:Postavi kao štapove}} stavlja komade u model, a {{ui:PDF listovi}} sprema jedan list za svaki panel. Dimenzije, razmak i nadvoji su vaši: DetailCraft ne provjerava nosi li opterećenje. Vidi [Paneli za drveni i lagani čelični okvir](topic:framing-panels).
- **Zalihe dobavljača i rokovi isporuke.** Kartica {{ui:Nabava}} čita popis zaliha dobavljača (CSV) i za svaki presjek koji popis za rezanje kupuje pokazuje ima li ga dovoljno na zalihi i koliko dugo se čeka. Manjkovi i zakašnjeli presjeci navedeni su u {{ui:Problemi}}. Ništa se ne naručuje. Vidi [Zalihe dobavljača i rokovi isporuke](topic:supplier-stock).

### Analiza i proračun

- **Što pukne prvo?** U kartici {{ui:Analiza}} gumb pronalazi mjerodavnu kombinaciju opterećenja, najslabiji štap, koliko se opterećenja mogu povećati prije nego prvi štap dosegne svoju granicu te najslabiju čeonu ploču ili posmičnu pločicu tamo gdje je poznata čvrstoća smicanja njihovih vijaka. Prvo su potrebne kombinacije i projektni propis. Ležaj, bločno smicanje, zavari i odizanje nisu provjereni. Vaš povezani pomoćnik može zatražiti isto.
- **Uživo.** Označite {{ui:Uživo: ponovno riješi nakon svake izmjene}} i okvir se ponovno rješava nakon svake izmjene.
- **Beton, i još.** Vitki stup u okviru bez pomaka projektira se za svoj uvećani moment (ACI 318-19 6.6.4.5). Period potresa može se uzeti iz analize Rayleighovom metodom. Ploča sastavljena od ploča dobiva čelik koji svaki sloj treba prema svojim momentima, te jednosmjernu poprečnu silu. Vidi [Provjere betonskih elemenata i potresna opterećenja](topic:concrete-and-seismic).
- **Za provjeru inženjera.** Rezultati temelja, betona i „Što pukne prvo?” pomoćni su alati. Opterećenja vjetrom nisu izrađena.

### U svakoj aplikaciji

- **Jezici.** Pomoć je na 54 jezika. Oni osim engleskog su strojni prijevodi koji čekaju pregled izvornog govornika; deset je novih (litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili, uzbečki).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} bira prelamanje, 2 retka ili 1 redak. Traka koja već stane ostaje kakva jest; ostale se pomiču vodoravno.
- **Mreža svojstava.** Polja temelja koriste zajedničku mrežu: sklopive kategorije i kompaktnu gustoću. Upisana aritmetika, poput 2*450, i dalje radi.
- **Uređaji za unos.** Dodirna podloga, olovka, 3D miš, kontroler i MIDI mogu upravljati aplikacijama. Vidi [Kretanje u 3D-u](topic:navigate-3d).
- **Panel problema.** Upozorenja novih provjera iznad pojavljuju se u istom panelu {{ui:Problemi}} kao i prije.
- **Povežite svoj AI.** Vaš vlastiti pomoćnik, povezan kroz CadCraft Studio, radi sa svih osam aplikacija i vidi samo ono što dopustite. Povezivanje jednim klikom, hostirani konektor i vlastiti API ključ u Studiju tek dolaze. Vidi [Korištenje DetailCraftu s AI pomoćnikom](topic:use-with-ai-assistants).

## Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i paketirana izdanja mogu promijeniti jezik za vrijeme rada; prije su bili samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne promijeni.
- **Odabir prozorom križanja.** Instalateri 0.8.1 sadrže ponašanje odabira prozorom križanja koje je već bilo ispravno u web verziji 0.8; stariji instalater nije.
- **Tableti u uspravnom položaju.** Slobodna visina mreže pripada platnu, a raspored lista počinje na 760 px ili manje.

## Još nije u ovoj verziji

- **Slanje NC-a na stroj** nije objavljeno.
- **Opterećenja vjetrom** za beton nisu izrađena, a provjere betona i temelja namijenjene su inženjeru za pregled.
- **Potpisivanje koda.** Instalateri za Windows i .dmg za macOS nisu potpisani, pa Windows može prikazati upozorenje, a macOS traži desni klik, zatim Otvori.

Ranije promjene nalaze se u [Što je novo u 0.7](topic:whats-new-0-7).
