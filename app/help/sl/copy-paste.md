---
title: Kopiranje, prilepljanje in podvajanje
summary: Izberite več delov, kopirajte jih skupaj z njihovimi luknjami, izrezi in spoji ter jih prilepite na presečišče mreže, z odmikom, na isto mesto ali v drug zavihek. Izrezovanje, podvajanje, brisanje in izbor vsega.
keywords: kopiraj, prilepi, izreži, podvoji, odložišče, prilepi na isto mesto, izberi vse, prekliči izbor, več izbranih, shift klik, več, ponovi polje, kopiraj okvir, odmik, izbriši več, meni uredi, meni več
from: f25f1829
---

Skupina {{ui:Uredi}} na orodni vrstici ima {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}} in {{ui:Prilepi}}. Njen meni {{ui:Več}} vsebuje ostalo: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Prilepi na isto mesto}}, {{ui:Podvoji}}, {{ui:Izbriši}}, {{ui:Izberi vse}} in {{ui:Prekliči izbor}}, vsak s svojo bližnjico. Gumb ali element menija, ki trenutno ne more delovati, je zasivljen; nanj postavite kazalec, da preberete razlog (na primer „še ni nič kopirano“).

Vsako prilepljanje, izrezovanje, podvajanje in brisanje je en korak: en {{key:Mod+Z}} vse to razveljavi.

## Izbira več delov

- Kliknite del, da ga izberete. Držite {{key:Shift}} (ali {{key:Ctrl}}, ali {{key:Mod}}) in kliknite še dele, da jih dodate; izbrani del odstranite tako, da nanj kliknete na enak način.
- {{key:Mod+A}} ali {{ui:Izberi vse}} izbere vse elemente, spoje in temelje.
- {{key:Esc}} ali {{ui:Prekliči izbor}} počisti izbor.

Z več izbranimi predmeti je na plošči {{ui:Lastnosti}} naslov „4 izbrani“ (ali kolikor jih je) in prikazuje elemente po vrsti, spoje, temelje in skupno bruto težo jekla, z gumbi {{ui:Kopiraj}}, {{ui:Podvoji}} in {{ui:Izbriši}}.

## Kopiranje

1. Izberite elemente in temelje, ki jih želite.
2. Izberite {{ui:Kopiraj}} ali pritisnite {{key:Mod+C}}.

Kar se kopira:

- Vsak element v celoti: profil, material, konca, položaj, zasuk, ime, luknje in izrezi. Uporabljen profil po meri se kopira prav tako.
- Vsak temelj v celoti: velikost, beton, spodnja mreža in začetne palice.
- Čelne in podložne plošče, vendar le, če so kopirani vsi elementi, ki jih spoj povezuje: čelna plošča nosilca potrebuje nosilec in njegov steber. Vrstica stanja pove, koliko spojev je bilo izpuščenih. Če želite spoje namenoma izpustiti, počistite **Kopiraj čelne in podložne plošče skupaj z elementi** v [nastavitvah DetailCraft](topic:settings).

Spoja samega po sebi ni mogoče kopirati; izberite raje njegove elemente. Da drugim stikom dodelite enak spoj, uporabite {{ui:Podobno}} (glejte [Čelne plošče](topic:end-plates#copy-it-to-every-similar-joint)).

Kopija ostane v tem brskalniku, dokler ne kopirate nečesa drugega. Lahko jo prilepi drug zavihek ali okno DetailCraft v istem brskalniku, zato lahko kopirate okvir iz enega modela in ga prilepite v drugega.

## Prilepljanje na presečišče mreže

1. Izberite {{ui:Prilepi}} ali pritisnite {{key:Mod+V}}.
2. Premaknite kazalec nad pogled. Črtkan obris kopije sledi presečišču mreže, ki je najbližje kazalcu.
3. Kliknite presečišče. Izhodiščna točka kopije (njen najnižji vogal: najmanjši x, y in z vsega kopiranega) pride tja.

Prilepljeni deli so nato izbrani, zato lahko prilepite še kje drugje ali jih spremenite. {{key:Esc}} prekliče prilepljanje; kopija ostane v odložišču. {{ui:Tloris}} in {{ui:Pogled}} olajšata zadetek pravega presečišča.

:::tip
Za ponovitev polja izberite elemente polja (ali vse s {{key:Mod+A}}), kopirajte, prilepite in kliknite presečišče za eno polje naprej od tistega, kjer je bil najnižji vogal kopije.
:::

## Prilepljanje s tipkovnico

Med prilepljanjem plošča {{ui:Lastnosti}} prikaže, kaj je v odložišču, in dve obliki:

- {{ui:Prilepi z odmikom (mm, od izvirnika)}}: vnesite x, y in z ter izberite {{ui:Prilepi s tem odmikom}}. Začne se z odmikom iz [nastavitev DetailCraft](topic:settings).
- {{ui:Prilepi na presečišče mreže}}: izberite črkovno mrežo, številčno mrežo in nivo ter izberite {{ui:Prilepi sem}}. Izhodiščna točka pride tja.

## Prilepljanje na isto mesto

{{ui:Prilepi na isto mesto}} ({{key:Mod+Shift+V}}) postavi kopijo na natančno koordinate, s katerih je bila kopirana. Uporabite jo po {{ui:Izreži}} ali da prenesete dele iz drugega modela na isto mesto. Če izvirniki še obstajajo, je kopija na njih in vrstica stanja vas opozori: premaknite kopije z njunima {{ui:Začetek}} in {{ui:Konec}} v {{ui:Lastnosti}} ali razveljavite.

## Podvajanje

{{ui:Podvoji}} ({{key:Mod+D}}) kopira izbor in ga takoj prilepi, premaknjenega za odmik v [nastavitvah DetailCraft](topic:settings) (na začetku 6000 mm vzdolž x). Ne spremeni vsebine odložišča. Kopije so nato izbrane, zato ponovni pritisk na {{key:Mod+D}} naredi naslednjo iz njih.

## Izrezovanje in brisanje

- {{ui:Izreži}} ({{key:Mod+X}}) kopira izbor in ga nato izbriše. Prilepite ga tam, kamor sodi.
- {{ui:Izbriši}} ({{key:Delete}} ali {{key:Backspace}}) izbriše izbor. Brisanje elementa izbriše tudi njegove spoje.

## Oznake po prilepljanju

Oznake delov in sestavov se nikoli ne shranjujejo; DetailCraft jih po vsaki spremembi ponovno oštevilči iz modela ([Kako se določajo oznake](topic:mark-rules)). Zato:

- Kopija, ki je enak kos kot izvirnik (enak profil, razred, dolžina reza, luknje in izrezi), deli oznako izvirnika, število v {{ui:Oznake delov}} in v kosovnici pa se poveča.
- Kopija, ki postane drugačna, dobi svojo oznako. Nosilec, prilepljen brez čelnih plošč, na primer ni obrezan, zato je drug kos. Oznake se ponovno oštevilčijo po celotnem modelu, zato se lahko spremenijo tudi številke drugih delov.

Vsak prilepljen element, luknja, izrez, spoj in temelj dobi novo identiteto, zato v modelu nikoli ni nič deljenega med kopijo in izvirnikom.

## Če je odložišče zavrnjeno

Vsebina odložišča se preveri enako natančno kot model, ki ga odprete: vse, kar ni veljaven del DetailCraft, se izpusti, vrstica stanja pa pove, kaj. Odložišče, ki ga je napolnil novejši DetailCraft ali kaj drugega, je zavrnjeno s sporočilom in nič se ne prilepi. Če zasebno okno ne more hraniti kopije v shrambi brskalnika, kopija v tem zavihku še vedno deluje.
