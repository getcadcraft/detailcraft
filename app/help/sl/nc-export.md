---
title: Pošiljanje datotek NC v delavnico
summary: Izvozite datoteke DSTV NC za vsako oznako dela (profili I, profili U, kotniki, pravokotni in okrogli votli profili HSS, pločevine), stisnjene v arhiv, in jih preverite, preden pridejo do stroja.
keywords: nc, nc1, dstv, cnc, stroj, linija za nosilce, linija za vrtanje, rezanje pločevine, izvoz, izdelava, zip
from: 598b6091
---

DetailCraft zapiše eno datoteko DSTV NC (`.nc1`) za vsako oznako dela, za profile I, profile U, kotnike, pravokotne in okrogle votle profile HSS ter pločevine, in jih stisne v arhiv. Linije za nosilce in stroji za pločevino preberejo te datoteke za žaganje, vrtanje in rezanje.

## Izvoz

1. Najprej počistite zavihek {{ui:Težave}}: povezava, ki je ni mogoče izdelati, ne doda nobene izvrtine.
2. Shranite model ({{key:Mod+S}}), da datoteke NC ustrezajo shranjenemu modelu.
3. Izberite {{ui:Datoteke NC}} v skupini {{ui:Izhod}}.
4. Brskalnik prenese `<name> NC.zip`. Vrstica stanja pove, koliko datotek je v njem, in našteje oznake, ki jih ni zapisal (kotnik ali okrogli votli profil z izrezom).

V arhivu je vsaka datoteka poimenovana po svoji oznaki dela: `b1.nc1`, `c1.nc1`, `p1.nc1` … Arhiv je nekompresiran in se odpre z vsakim orodjem za arhive.

Če model nima delov, vrstica stanja to pove.

## Kaj vsebuje vsaka datoteka

- **Glava (ST):** ime modela kot naročilo, oznaka dela kot risba in kos, faza 1 ali faza dela, kakovost jekla, količina, profil in njegove mere, masa na meter in površina premaza na meter. Reži žaganja so pravokotni.
- **Zunanji obrisi (AK):** obris stojine z vsemi izrezi in vsak pas, skrajšan tam, kjer izrez odstrani pas.
- **Izvrtine (BO):** vsaka izvrtina z ploskvijo, položajem in premerom, vključno z izvrtinami, ki jih naredijo čelne plošče in podložne plošče.

Polje za poljem, s pravili za ploskve in koordinate: [Polja datotek NC](topic:nc1-fields).

## Kaj se ne zapiše

- Kotniki in okrogli votli profili z izrezom: ni datoteke NC. Njihove oznake so navedene v vrstici stanja.
- Izvrtine v okroglih votlih profilih (DetailCraft jih ne izdeluje).
- Skosi, notranji obrisi, označbe delov (risanje) in koti žaganja, ki niso pravokotni.
- Podolgovate izvrtine (DetailCraft ima samo okrogle izvrtine).

## Preverite pred obdelavo

Datoteke NC DetailCrafta prebere nazaj njegov lastni testni paket, vendar še niso bile preizkušene na strojih vaše delavnice.

1. Odprite datoteke v pregledovalniku NC vaše delavnice ali v programski opremi stroja in jih primerjajte z delavniškimi risbami.
2. Pred zagonom serije preverite na stroju po en del vsake vrste.
3. Preverite, kako vaša programska oprema bere koordinate y pasov in ploskve profilov U: DetailCraft meri y pasov od zadnjega roba in polaga profile U na hrbet, kot jih prikazuje standard (glejte [Polja datotek NC](topic:nc1-fields#faces-and-coordinates)).
