---
title: Kopiranje, lijepljenje i dupliciranje
summary: Odaberite više dijelova, kopirajte ih s njihovim rupama, izrezima i spojevima te ih zalijepite na sjecište mreže, s pomakom, na isto mjesto ili u drugoj kartici. Izrežite, dupliciraj, izbrišite i odaberite sve.
keywords: kopiraj, zalijepi, izreži, dupliciraj, međuspremnik, zalijepi na isto mjesto, odaberi sve, poništi odabir, višestruki odabir, Shift klik, više, ponovi polje, kopiraj okvir, pomak, izbriši više, izbornik Uređivanje, izbornik Više
from: f25f1829
---

Grupa {{ui:Uređivanje}} na alatnoj traci ima {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} i {{ui:Zalijepi}}. Njezin izbornik {{ui:Više}} sadrži ostalo: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}, svaka sa svojom tipkom. Gumb ili stavka izbornika koja trenutno ne može djelovati je zasivljena; zadržite pokazivač iznad nje da pročitate zašto (na primjer „još ništa nije kopirano“).

Svako lijepljenje, izrezivanje, dupliciranje i brisanje je jedan korak: jedan {{key:Mod+Z}} sve to poništava.

## Odaberite nekoliko dijelova

- Kliknite dio da ga odaberete. Držite {{key:Shift}} (ili {{key:Ctrl}}, ili {{key:Mod}}) i kliknite još dijelova da ih dodate; kliknite odabrani na isti način da ga uklonite.
- {{key:Mod+A}} ili {{ui:Odaberi sve}} odabire svaki štap, spoj i temelj.
- {{key:Esc}} ili {{ui:Poništi odabir}} briše odabir.

Kad je odabrano više stvari, ploča {{ui:Svojstva}} naslovljena je „4 odabrano“ (ili koliko god ih je) i navodi štapove po vrsti, spojeve, temelje i bruto težinu čelika, s gumbima {{ui:Kopiraj}}, {{ui:Dupliciraj}} i {{ui:Izbriši}}.

## Kopiranje

1. Odaberite štapove i temelje koje želite.
2. Odaberite {{ui:Kopiraj}} ili pritisnite {{key:Mod+C}}.

Što se kopira:

- Svaki štap u cijelosti: profil, materijal, krajevi, položaj, rotacija, naziv, rupe i izrezi. Prilagođeni profil koji koristi također se kopira.
- Svaki temelj u cijelosti: dimenzije, beton, donja mreža i ispusti armature.
- Čeone ploče i podložne ploče, ali samo kad se kopiraju svi štapovi koje spoj povezuje: čeona ploča grede treba i gredu i njezin stup. Statusna traka kaže koliko je spojeva izostavljeno. Da biste namjerno izostavili spojeve, isključite **Kopiraj čeone ploče i podložne ploče sa štapovima** u [postavkama programa DetailCraft](topic:settings).

Sam spoj ne može se kopirati; umjesto toga odaberite njegove štapove. Da biste drugim spojevima dali isti spoj, upotrijebite {{ui:Slično}} (vidi [Čeone ploče](topic:end-plates#copy-it-to-every-similar-joint)).

Kopija ostaje u ovom pregledniku dok ne kopirate nešto drugo. Druga kartica ili prozor programa DetailCraft u istom pregledniku može je zalijepiti, pa možete kopirati okvir iz jednog modela i zalijepiti ga u drugi.

## Lijepljenje na sjecište mreže

1. Odaberite {{ui:Zalijepi}} ili pritisnite {{key:Mod+V}}.
2. Pomaknite pokazivač nad prikaz. Isprekidani obris kopije prati sjecište mreže najbliže pokazivaču.
3. Kliknite sjecište. Bazna točka kopije (njezin najniži kut: najmanji x, y i z svega što je kopirano) pada upravo tu.

Zalijepljeni dijelovi nakon toga su odabrani, pa možete ponovno lijepiti na nekom drugom mjestu ili ih mijenjati. {{key:Esc}} otkazuje lijepljenje; kopija ostaje u međuspremniku. {{ui:Tlocrt}} i {{ui:Pročelje}} olakšavaju pogađanje pravog sjecišta.

:::tip
Da biste ponovili polje, odaberite štapove polja (ili sve pomoću {{key:Mod+A}}), kopirajte, zalijepite i kliknite sjecište jedno polje dalje od mjesta na kojem je bio najniži kut kopije.
:::

## Lijepljenje s tipkovnice

Dok lijepite, ploča {{ui:Svojstva}} pokazuje što je u međuspremniku i dva obrasca:

- {{ui:Zalijepi s pomakom (mm, od originala)}}: upišite x, y i z te odaberite {{ui:Zalijepi s ovim pomakom}}. Počinje s pomakom iz [postavki programa DetailCraft](topic:settings).
- {{ui:Zalijepi na sjecište mreže}}: odaberite slovnu mrežu, brojčanu mrežu i razinu te odaberite {{ui:Zalijepi ovdje}}. Bazna točka ide tamo.

## Zalijepi na isto mjesto

{{ui:Zalijepi na isto mjesto}} ({{key:Mod+Shift+V}}) stavlja kopiju na točno one koordinate s kojih je kopirana. Upotrijebite je nakon {{ui:Izreži}} ili da dijelove iz drugog modela dovedete na isto mjesto. Ako su originali još tu, kopija je preko njih i statusna traka vas upozorava: pomaknite kopije pomoću njihovih {{ui:Početak}} i {{ui:Kraj}} u {{ui:Svojstva}} ili poništite.

## Dupliciranje

{{ui:Dupliciraj}} ({{key:Mod+D}}) kopira odabir i odmah ga zalijepi, pomaknut za pomak iz [postavki programa DetailCraft] (na početku 6000 mm duž x). Ne mijenja ono što je u međuspremniku. Kopije su nakon toga odabrane, pa pritiskom na {{key:Mod+D}} ponovno nastaje sljedeća kopija od njih.

## Izrezivanje i brisanje

- {{ui:Izreži}} ({{key:Mod+X}}) kopira odabir, a zatim ga briše. Zalijepite ga tamo gdje pripada.
- {{ui:Izbriši}} ({{key:Delete}} ili {{key:Backspace}}) briše odabir. Brisanje štapa briše i njegove spojeve.

## Oznake nakon lijepljenja

Oznake pozicija i sklopova se nikad ne pohranjuju; DetailCraft ih ponovno broji iz modela nakon svake promjene ([Kako se dodjeljuju oznake](topic:mark-rules)). Zato:

- Kopija koja je isti komad kao original (isti profil, klasa, duljina reza, rupe i izrezi) dijeli oznaku originala, a broj u {{ui:Oznake pozicija}} i u sastavnici raste.
- Kopija koja ispadne drugačija dobiva vlastitu oznaku. Greda zalijepljena bez čeonih ploča, na primjer, nije odrezana natrag, pa je to drugi komad. Oznake se ponovno broje kroz cijeli model, pa se brojevi drugih dijelova također mogu promijeniti.

Svaki zalijepljeni štap, rupa, izrez, spoj i temelj dobiva novi identifikator, pa ništa u modelu nikad nije zajedničko kopiji i originalu.

## Ako je međuspremnik odbijen

Sadržaj međuspremnika provjerava se jednako pažljivo kao model datoteke koju otvarate: sve što nije valjani dio programa DetailCraft odbacuje se, a statusna traka kaže što. Međuspremnik koji je napunio noviji DetailCraft ili nešto drugo odbija se s porukom i ništa se ne zalijepi. Ako privatni prozor ne može spremiti kopiju u pohranu preglednika, kopija i dalje radi u toj kartici.
