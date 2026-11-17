---
title: Kopiranje, nalepljivanje i dupliranje
summary: Izaberi više delova, kopiraj ih sa njihovim rupama, zasečcima i vezama, pa ih nalepi na presek linija mreže, pomerajem, na mestu ili u drugoj kartici. Iseci, dupliraj, izbriši i izaberi sve.
keywords: kopiraj, nalepi, iseci, dupliraj, klipbord, nalepi na mestu, izaberi sve, ukloni izbor, višestruki izbor, shift klik, više, ponovi polje, kopiraj okvir, pomeraj, izbriši više, meni uredi, meni više
from: f25f1829
---

Grupa {{ui:Uredi}} na traci sa alatkama ima {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} i {{ui:Nalepi}}. Njen meni {{ui:Više}} sadrži ostalo: {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Nalepi na mestu}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Izaberi sve}} i {{ui:Ukloni izbor}}, svaka sa svojim tasterom. Dugme ili stavka menija koja trenutno ne može da radi je zasivljena; zadrži pokazivač iznad nje da pročitaš zašto (na primer „još ništa nije kopirano“).

Svako nalepljivanje, isecanje, dupliranje i brisanje je jedan korak: jedan {{key:Mod+Z}} sve vraća.

## Izaberi više delova

- Klikni deo da ga izabereš. Drži {{key:Shift}} (ili {{key:Ctrl}}, ili {{key:Mod}}) i klikni još delova da ih dodaš; isto tako klikni već izabrani deo da ga ukloniš iz izbora.
- {{key:Mod+A}} ili {{ui:Izaberi sve}} bira svaki element, vezu i temelj.
- {{key:Esc}} ili {{ui:Ukloni izbor}} briše izbor.

Kad je izabrano više stvari, panel {{ui:Svojstva}} ima naslov „4 izabrana“ (ili koliko ih već ima) i navodi elemente po tipu, veze, temelje i ukupnu bruto težinu čelika, sa dugmićima {{ui:Kopiraj}}, {{ui:Dupliraj}} i {{ui:Izbriši}}.

## Kopiranje

1. Izaberi elemente i temelje koje želiš.
2. Izaberi {{ui:Kopiraj}} ili pritisni {{key:Mod+C}}.

Šta se kopira:

- Svaki element u celini: profil, materijal, krajevi, položaj, rotacija, naziv, rupe i zasečci. Prilagođeni profil koji koristi takođe se kopira.
- Svaki temelj u celini: dimenzije, beton, donja mreža i polazne šipke.
- Čeoni limovi i osnovni limovi, ali samo kad su kopirani svi elementi koje veza spaja: čeoni lim grede traži gredu i njen stub. Statusna traka kaže koliko je veza ostavljeno van. Da namerno izostaviš veze, isključi **Kopiraj čeone limove i osnovne limove sa njihovim elementima** u [DetailCraft podešavanjima](topic:settings).

Sama veza ne može da se kopira; izaberi njene elemente. Da drugim spojevima daš istu vezu, koristi {{ui:Slično}} (vidi [Čeoni limovi](topic:end-plates#copy-it-to-every-similar-joint)).

Kopija ostaje u ovom pregledaču dok ne kopiraš nešto drugo. Druga kartica ili prozor DetailCraft-a u istom pregledaču može je nalepiti, pa možeš kopirati okvir iz jednog modela i nalepiti ga u drugi.

## Nalepljivanje na presek linija mreže

1. Izaberi {{ui:Nalepi}} ili pritisni {{key:Mod+V}}.
2. Pomeri pokazivač preko prikaza. Isprekidani obris kopije prati presek mreže najbliži pokazivaču.
3. Klikni presek. Osnovna tačka kopije (njen najniži ugao: najmanji x, y i z svega što je kopirano) se smesti tamo.

Nalepljeni delovi se posle biraju, pa možeš opet da nalepiš na drugom mestu ili da ih menjaš. {{key:Esc}} otkazuje nalepljivanje; kopija ostaje u klipbordu. {{ui:Osnova}} i {{ui:Izgled}} olakšavaju pogađanje pravog preseka.

:::tip
Da ponoviš polje, izaberi elemente polja (ili sve sa {{key:Mod+A}}), kopiraj, nalepi i klikni presek jedno polje dalje od mesta na kome je bio najniži ugao kopije.
:::

## Nalepljivanje sa tastature

Dok lepiš, panel {{ui:Svojstva}} prikazuje šta je u klipbordu i dva obrasca:

- {{ui:Nalepi pomerajem (mm, od originala)}}: upiši x, y i z i izaberi {{ui:Nalepi na ovom pomeraju}}. Počinje sa pomerajem iz [DetailCraft podešavanja](topic:settings).
- {{ui:Nalepi na presek linija mreže}}: izaberi slovnu liniju mreže, brojčanu liniju mreže i nivo, pa izaberi {{ui:Nalepi ovde}}. Osnovna tačka odlazi tamo.

## Nalepljivanje na mestu

{{ui:Nalepi na mestu}} ({{key:Mod+Shift+V}}) stavlja kopiju tačno na koordinate sa kojih je kopirana. Koristi to posle {{ui:Iseci}} ili da dovučeš delove iz drugog modela na isto mesto. Ako originali još postoje, kopija stoji preko njih i statusna traka upozorava: pomeri kopije preko njihovog {{ui:Početak}} i {{ui:Kraj}} u {{ui:Svojstva}}, ili opozovi.

## Dupliranje

{{ui:Dupliraj}} ({{key:Mod+D}}) kopira izbor i odmah ga nalepi, pomerenog za pomeraj iz [DetailCraft podešavanja](topic:settings) (6000 mm duž x u početku). Ne menja šta je u klipbordu. Kopije se posle biraju, pa pritisak na {{key:Mod+D}} ponovo pravi sledeću od njih.

## Isecanje i brisanje

- {{ui:Iseci}} ({{key:Mod+X}}) kopira izbor, pa ga briše. Nalepi ga tamo gde pripada.
- {{ui:Izbriši}} ({{key:Delete}} ili {{key:Backspace}}) briše izbor. Brisanje elementa briše i njegove veze.

## Oznake posle nalepljivanja

Oznake delova i sklopova se nikad ne čuvaju; DetailCraft ih ponovo numeriše iz modela posle svake promene ([Kako se daju oznake](topic:mark-rules)). Zato:

- Kopija koja je isti komad kao original (isti profil, klasa, dužina sečenja, rupe i zasečci) deli oznaku originala, a broj u {{ui:Oznake delova}} i specifikaciji materijala raste.
- Kopija koja ispadne drugačija dobija sopstvenu oznaku. Greda nalepljena bez svojih čeonih limova, na primer, nije skraćena, pa je drugi komad. Oznake se ponovo numerišu u celom modelu, pa se mogu promeniti i brojevi drugih delova.

Svaki nalepljeni element, rupa, zasek, veza i temelj dobija novi identifikator, pa ništa u modelu nikad nije zajedničko kopiji i originalu.

## Kad se klipbord odbije

Sadržaj klipborda se proverava jednako pažljivo kao model koji otvaraš: sve što nije važeći deo DetailCraft-a se odbacuje, a statusna traka kaže šta. Klipbord koji je napravio noviji DetailCraft ili nešto drugo se odbija uz poruku i ništa se ne nalepljuje. Ako privatni prozor ne može da sačuva kopiju u memoriji pregledača, kopija i dalje radi u toj kartici.
