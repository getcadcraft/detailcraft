---
title: Provjere temelja
summary: Provjeri temelje, kombinovane temelje i temeljne ploče na tlu koje opišete, slijeganje, fleksibilnu ploču na oprugama, grupe pilota i potporne zidove. Pomoćno sredstvo za inženjera za provjeru.
keywords: temelj, kombinovani temelj, temeljna ploča, slijeganje, modul podloge, opruge, rubni stub, ugaoni stub, nosivost, klizanje, prevrtanje, proboj, posmik u jednom pravcu, savijanje, razvoj, minimalna armatura, grupa pilota, potporni zid, ACI 318-19
from: 6961ad52
---

:::warning
Ovo su provjere prvog reda za pregled inženjera, a ne odobrenje projekta. Dopušteni pritisak na tlo i koeficijent trenja su vaši: DetailCraft ne poznaje vaše tlo.
:::

Kartica {{ui:Temelji}} provjerava temelje u modelu prema opterećenjima stubova koja im zadate.

## Opišite tlo

Upišite {{ui:Dopušteni pritisak na tlo}} i {{ui:Koeficijent trenja na podlozi}}. Oba počinju od 0, što znači da nije uneseno: provjera tada prikazuje pritisak kao napomenu i ne kaže da prolazi. Za slijeganje upišite modul tla {{ui:Es}} (MPa), njegov Poissonov koeficijent i dozvoljeno slijeganje (25 mm za početak). Za fleksibilnu temeljnu ploču upišite modul podloge {{ui:ks}}. Tu su također nasip iznad temelja, jedinična težina tla, faktori sigurnosti za klizanje i prevrtanje (1.5 za početak) i granica tečenja armature.

## Unesite opterećenja

Svaki temelj ima listu opterećenja stubova. Koristite {{ui:Dodaj opterećenje stuba}} i popunite radni red (za nosivost, klizanje i prevrtanje) i red s faktorima (za provjere čvrstoće): vertikalno opterećenje P naniže, horizontalne sile Vx i Vy na gornjoj ivici temelja, momente Mx i My, položaj stuba na temelju i njegovu veličinu.

Ili pokrenite karticu {{ui:Analiza}} i pritisnite {{ui:Preuzmi opterećenja stubova iz Analize}}: svaki oslonac koji stoji na temelju postaje opterećenje stuba, iz radnog ili faktorisanog skupa koji izaberete. Pozitivan My više opterećuje stranu +x temelja; pozitivan Mx više opterećuje stranu −y.

## Šta se provjerava

Iz radnih opterećenja, uz vlastitu težinu temelja i dodani nasip:

- **Nosivost:** pritisak ispod krutog temelja. Unutar srednje trećine cijela baza je u kontaktu; izvan nje dio baze se odlijepi i vrh je viši. Rezultanta izvan baze ne prolazi.
- **Klizanje:** trenje puta vertikalno opterećenje naspram horizontalne sile.
- **Prevrtanje:** udaljenost rezultante od ivice.
- **Slijeganje:** elastično slijeganje srednjeg pritiska na poluprostoru s modulom koji ste unijeli, u sredini i u uglu (Timoshenko i Goodierovo rješenje za fleksibilni pravougaonik), naspram granice. To je gornja granica za kruti temelj i ne uzima u obzir sloj tla ograničene dubine, rasterećenje iskopanim tlom i konsolidaciju. Bez modula pritisak se prikazuje kao napomena.

Iz samo faktorisanih opterećenja stuba (ACI 318-19):

- **Savijanje** na licu stuba, s minimalnom armaturom (0.0018 za šipke 420 MPa) i šipkama koje ste nacrtali.
- **Posmik u jednom pravcu** na udaljenosti d od lica.
- **Proboj** na d/2 oko svakog stuba, s momentom stuba. Za stub blizu ivice kritični presjek je odsječen ivicom temelja (tri strane na ivici, dvije na uglu; ACI 318-19 22.6.4.1 i manji αs u tabeli 22.6.5.2), a moment oko vlastitog središta presjeka uključuje pomak opterećenja.
- **Razvoj** šipki iza lica stuba, ravnih ili s kukama.
- **Dubina** iznad donjih šipki (150 mm).

Kombinovani temelj ili temeljna ploča uzima se kao kruta, a posmik i moment dolaze iz statike na presjecima kroz punu širinu.

## Fleksibilna temeljna ploča na oprugama

Uključite {{ui:Analiziraj ovaj temelj kao fleksibilnu temeljnu ploču na oprugama}} kada temelj nosi mnogo stubova, a kruti temelj je pregrub. Temelj postaje ploča od četvoročvornih konačnih elemenata na podlozi od opruga (upisani {{ui:ks}}, raspoređen na čvorove), a opterećenje svakog stuba raspoređuje se na čvorove vlastitog otiska. Druga tabela daje najveći pritisak tla i slijeganje (i razliku između najvećeg i najmanjeg), moment savijanja u oba pravca s armaturom koju zahtijeva, zatezanje na vrhu naspram čvrstoće običnog betona (temelj nema gornjih šipki), posmik u jednom pravcu na udaljenosti d od stubova i proboj na pritisku samih opruga. Mreža se zgušnjava dok stub nije širok tri elementa; velika ploča traje nekoliko sekundi. Vlastita težina ploče i tla iznad nje se poništavaju i nisu uračunate.

Svaka neuspjela provjera nalazi se na panelu {{ui:Problemi}} sa svojom tačkom propisa.

## Grupe pilota i potporni zidovi

{{ui:Dodaj grupu pilota}} postavlja mrežu pilota ispod krute kape: upišite opterećenje i momente i ono što jedan pilot smije nositi na pritisak i zatezanje (brojevi iz proračuna pilota, a ne iz ove kartice). Reakcija svakog pilota je P/n plus njegov udio u momentima (elastična metoda), a najveći pritisak i svako zatezanje se provjeravaju.

{{ui:Dodaj potporni zid}} provjerava konzolni zid na ravnom zasipu, po metru: Rankineov aktivni pritisak, prevrtanje oko prsta, klizanje i pritisak na bazu. Pasivni pritisak ispred prsta nije uključen. Vaš asistent može pokrenuti iste provjere pomoću `pile_group_check` i `retaining_wall_check`.

Grupe pilota, zidovi i prekidač temeljne ploče čuvaju se u datoteci modela, a neuspjela provjera je na panelu {{ui:Problemi}}.
