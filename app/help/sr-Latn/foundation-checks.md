---
title: Provere temelja
summary: Proveri temelje, kombinovane temelje i ploče na tlu koje opišeš, sleganje, fleksibilnu ploču na oprugama, grupe šipova i potporne zidove. Pomoć inženjeru za proveru.
keywords: temelj, kombinovani temelj, ploča, sleganje, modul podloge, opruge, ivični stub, ugaoni stub, nosivost, klizanje, prevrtanje, proboj, jednosmerno smicanje, savijanje, razvijanje, minimalna armatura, grupa šipova, potporni zid, ACI 318-19
from: 6961ad52
---

:::warning
Ovo su provere prvog reda za inženjera na pregled, a ne odobrenje projekta. Dozvoljeni pritisak na tlo i koeficijent trenja su tvoji: DetailCraft ne zna tvoje tlo.
:::

Kartica {{ui:Temelj}} proverava temelje u modelu prema opterećenjima stubova koja im zadaš.

## Opiši tlo

Upiši {{ui:Dozvoljeni pritisak na tlo}} i {{ui:Koeficijent trenja na osnovi}}. Oba počinju od 0, što znači „nije uneto“: provera tada prikazuje pritisak kao napomenu i ne kaže da prolazi. Za sleganje upiši modul tla {{ui:Es}} (MPa), njegov Puasonov koeficijent i dozvoljeno sleganje (25 mm za početak). Za fleksibilnu ploču upiši modul podloge {{ui:ks}}. Tu su i nasip iznad temelja, jedinična težina tla, koeficijenti sigurnosti za klizanje i prevrtanje (1.5 za početak) i granica tečenja armature.

## Unesi opterećenja

Svaki temelj ima listu opterećenja stubova. Koristi {{ui:Dodaj opterećenje stuba}} i popuni red upotrebe (za nosivost, klizanje i prevrtanje) i red sa faktorima (za provere čvrstoće): vertikalnu silu P nadole, horizontalne sile Vx i Vy na gornjoj ivici temelja, momente Mx i My, mesto stuba na temelju i njegovu veličinu.

Ili otvori karticu {{ui:Analiza}} i pritisni {{ui:Preuzmi opterećenja stubova iz analize}}: svaki oslonac koji stoji na temelju postaje opterećenje stuba, iz skupova upotrebe i skupova sa faktorima koje izabereš. Pozitivan My jače opterećuje +x stranu temelja; pozitivan Mx jače opterećuje −y stranu.

## Šta se proverava

Iz opterećenja upotrebe, uz sopstvenu težinu temelja i dodati nasip:

- **Nosivost:** pritisak ispod krutog temelja. Unutar srednje trećine cela osnova je u kontaktu; van nje deo osnove se odvaja od tla i vrh pritiska je veći. Rezultanta van osnove znači neuspeh.
- **Klizanje:** trenje puta vertikalno opterećenje naspram horizontalne sile.
- **Prevrtanje:** rastojanje rezultante od ivice.
- **Sleganje:** elastično sleganje srednjeg pritiska na poluprostoru sa modulom koji si uneo, u sredini i u uglu (Timošenko i Gudijer, rešenje za fleksibilni pravougaonik), naspram granice. Predstavlja gornju granicu za kruti temelj i zanemaruje sloj tla ograničene dubine, rasterećenje iskopanim tlom i konsolidaciju. Bez modula pritisak se prikazuje kao napomena.

Iz samih faktorisanih opterećenja stubova (ACI 318-19):

- **Savijanje** na licu stuba, sa minimalnom armaturom (0.0018 za šipke 420 MPa) i šipkama koje si nacrtao.
- **Jednosmerno smicanje** na rastojanju d od lica.
- **Proboj smicanjem** na d/2 oko svakog stuba, sa momentom stuba. Za stub blizu ivice kritični presek je odsečen ivicom temelja (tri strane na ivici, dve na uglu, ACI 318-19 22.6.4.1 i manje αs u tabeli 22.6.5.2), a moment oko sopstvenog centra preseka uključuje pomeranje opterećenja.
- **Razvijanje** šipki iza lica stuba, ravnih ili sa kukama.
- **Dubina** iznad donjih šipki (150 mm).

Kombinovani temelj ili ploča uzimaju se kao kruti, a smicanje i moment dolaze iz statike na presecima preko cele širine.

## Fleksibilna ploča na oprugama

Označi {{ui:Analiziraj ovaj temelj kao fleksibilnu ploču na oprugama}} kada temelj nosi mnogo stubova, a kruti temelj je previše grub. Temelj postaje ploča od četvoročvornih konačnih elemenata na podlozi od opruga (uneseni {{ui:ks}}, raspoređeni u čvorovima), a opterećenje svakog stuba raspoređuje se na čvorove sopstvenog otiska. Druga tabela daje najveći pritisak tla i sleganje (i razliku između najvećeg i najmanjeg), moment savijanja u oba pravca sa potrebnom armaturom, zatezanje na vrhu naspram čvrstoće običnog betona (temelj nema gornje šipke), jednosmerno smicanje na d od stubova i proboj na sopstvenom pritisku opruga. Mreža se gusti dok stub ne bude širok tri elementa; velika ploča traje nekoliko sekundi. Sopstvena težina ploče i tlo iznad nje se poništavaju i nisu uključeni.

Svaka neuspela provera nalazi se u panelu {{ui:Problemi}} sa svojom klauzulom.

## Grupe šipova i potporni zidovi

{{ui:Dodaj grupu šipova}} stavlja mrežu šipova ispod krute kape: unesi opterećenje i momente i ono što jedan šip sme da nosi na pritisak i na zatezanje (brojevi iz proračuna šipova, a ne iz ove kartice). Reakcija svakog šipa je P/n plus njegov udeo u momentima (elastična metoda), a najveći pritisak i svako zatezanje se proveravaju.

{{ui:Dodaj potporni zid}} proverava konzolni zid na horizontalnom zasipu, po metru: Rankinov aktivni pritisak, prevrtanje oko prsta, klizanje i pritisak ispod osnove. Pasivni pritisak ispred prsta je izostavljen. Tvoj asistent može da izvede iste provere komandama `pile_group_check` i `retaining_wall_check`.

Grupe šipova, zidovi i prekidač ploče čuvaju se u datoteci modela, a neuspela provera nalazi se u {{ui:Problemi}}.
