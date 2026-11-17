---
title: Kopiranje, lijepljenje i dupliranje
summary: Odaberi više dijelova, kopiraj ih s rupama, izrezima i vezama, pa ih zalijepi na presjek mreže, s pomakom, na mjestu ili u drugoj kartici. Izreži, dupliraj, izbriši i odaberi sve.
keywords: kopiraj, zalijepi, izreži, dupliraj, međuspremnik, zalijepi na mjestu, odaberi sve, poništi odabir, višestruki odabir, shift klik, više, ponovi traku, kopiraj okvir, pomak, izbriši više, meni uređivanja, meni više
from: f25f1829
---

Grupa {{ui:Uređivanje}} na traci s alatima sadrži {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} i {{ui:Zalijepi}}. Njen meni {{ui:Više}} sadrži ostalo: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na mjesto}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}, svaka s pripadajućom tipkom. Dugme ili stavka menija koja trenutno ne može da radi je zasivljena; pređi pokazivačem preko nje da pročitaš zašto (na primjer „ništa nije kopirano”).

Svako lijepljenje, izrezivanje, dupliranje i brisanje je jedan korak: jedno {{key:Mod+Z}} sve vraća.

## Odabir više dijelova

- Klikni dio da ga odabereš. Drži {{key:Shift}} (ili {{key:Ctrl}}, ili {{key:Mod}}) i klikni još dijelova da ih dodaš; isto tako klikni odabrani da ga ukloniš iz odabira.
- {{key:Mod+A}} ili {{ui:Odaberi sve}} odabira svaki element, vezu i temelj.
- {{key:Esc}} ili {{ui:Poništi odabir}} briše odabir.

Kada je odabrano više stvari, panel {{ui:Svojstva}} ima naslov „4 odabrano” (ili koliko već) i navodi elemente po vrsti, veze, temelje i ukupnu bruto težinu čelika, uz dugmad {{ui:Kopiraj}}, {{ui:Dupliraj}} i {{ui:Izbriši}}.

## Kopiranje

1. Odaberi elemente i temelje koje želiš.
2. Izaberi {{ui:Kopiraj}} ili pritisni {{key:Mod+C}}.

Šta se kopira:

- Svaki element u cjelini: profil, materijal, krajevi, položaj, rotacija, naziv, rupe i izrezi. Prilagođeni profil koji koristi također se kopira.
- Svaki temelj u cjelini: dimenzije, beton, donja mreža i početne šipke.
- Čeone i bazne ploče, ali samo kada su kopirani svi elementi koje veza spaja: čeona ploča grede treba i gredu i njen stub. Statusna traka kaže koliko veza je ostalo van kopije. Da namjerno izostaviš veze, isključi **Kopiraj čeone i bazne ploče zajedno sa njihovim elementima** u [DetailCraft postavkama](topic:settings).

Samostalna veza ne može se kopirati; odaberi umjesto njenih elemenata. Da drugi spojevi dobiju istu vezu, koristi {{ui:Slično}} (vidi [Čeone ploče](topic:end-plates#copy-it-to-every-similar-joint)).

Kopija ostaje u ovom pregledaču dok ne kopiraš nešto drugo. Druga DetailCraft kartica ili prozor u istom pregledaču može je zalijepiti, pa možeš kopirati okvir iz jednog modela i zalijepiti ga u drugi.

## Lijepljenje na presjek mreže

1. Izaberi {{ui:Zalijepi}} ili pritisni {{key:Mod+V}}.
2. Pomjeri pokazivač preko prikaza. Isprekidani obris kopije prati presjek mreže najbliži pokazivaču.
3. Klikni presjek. Osnovna tačka kopije (njen najniži ugao: najmanji x, y i z svega što je kopirano) se smješta tu.

Zalijepljeni dijelovi se nakon toga odabiru, pa možeš ponovo zalijepiti na drugom mjestu ili ih mijenjati. {{key:Esc}} otkazuje lijepljenje; kopija ostaje u međuspremniku. {{ui:Osnova}} i {{ui:Izgled}} olakšavaju pogađanje pravog presjeka.

:::tip
Da ponoviš polje, odaberi elemente polja (ili sve s {{key:Mod+A}}), kopiraj, zalijepi i klikni presjek jedno polje dalje od mjesta gdje je bila najniža tačka kopije.
:::

## Lijepljenje s tastature

Dok lijepiš, panel {{ui:Svojstva}} prikazuje šta je u međuspremniku i dva obrasca:

- {{ui:Zalijepi s pomakom (mm, od originala)}}: upiši x, y i z i izaberi {{ui:Zalijepi s ovim pomakom}}. Počinje s pomakom iz [DetailCraft postavki](topic:settings).
- {{ui:Zalijepi na presjek mreže}}: odaberi slovnu mrežu, brojčanu mrežu i nivo, pa izaberi {{ui:Zalijepi ovdje}}. Osnovna tačka ide tamo.

## Zalijepi na mjesto

{{ui:Zalijepi na mjesto}} ({{key:Mod+Shift+V}}) stavlja kopiju tačno na koordinate s kojih je kopirana. Koristi to nakon {{ui:Izreži}} ili da dovedeš dijelove iz drugog modela na isto mjesto. Ako originali još postoje, kopija je preko njih i statusna traka upozorava: pomjeri kopije preko njihovih {{ui:Početak}} i {{ui:Kraj}} u {{ui:Svojstva}}, ili poništi.

## Dupliraj

{{ui:Dupliraj}} ({{key:Mod+D}}) kopira odabir i odmah ga zalijepi, pomjeren za pomak iz [DetailCraft postavki](topic:settings) (u početku 6000 mm duž x). Ne mijenja ono što je u međuspremniku. Kopije se nakon toga odaberu, pa ponovno pritiskanje {{key:Mod+D}} pravi sljedeću od njih.

## Izrezivanje i brisanje

- {{ui:Izreži}} ({{key:Mod+X}}) kopira odabir pa ga briše. Zalijepi ga tamo gdje pripada.
- {{ui:Izbriši}} ({{key:Delete}} ili {{key:Backspace}}) briše odabir. Brisanje elementa briše i njegove veze.

## Oznake nakon lijepljenja

Oznake dijelova i sklopova se nikad ne čuvaju; DetailCraft ih ponovo numeriše iz modela nakon svake promjene ([Kako se daju oznake](topic:mark-rules)). Zato:

- Kopija koja je isti komad kao original (isti profil, klasa, dužina reza, rupe i izrezi) dijeli oznaku originala, a broj u {{ui:Oznake dijelova}} i spisku materijala se povećava.
- Kopija koja se na kraju razlikuje dobija vlastitu oznaku. Greda zalijepljena bez svojih čeonih ploča, na primjer, nije skraćena, pa je to drugi komad. Oznake se ponovo numerišu za cijeli model, pa se brojevi drugih dijelova također mogu promijeniti.

Svaki zalijepljeni element, rupa, izrez, veza i temelj dobija novi identifikator, tako da ništa u modelu nikad nije zajedničko između kopije i originala.

## Ako je međuspremnik odbijen

Sadržaj međuspremnika se provjerava jednako pažljivo kao model koji otvaraš: sve što nije valjan DetailCraft dio se odbacuje, a statusna traka kaže šta. Međuspremnik koji je napravio noviji DetailCraft ili nešto drugo se odbija uz poruku i ništa se ne lijepi. Ako privatni prozor ne može sačuvati kopiju u pohrani pregledača, kopija i dalje radi u toj kartici.
