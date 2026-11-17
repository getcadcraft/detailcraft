---
title: Postavitev pločevin in dodajanje profilov po meri
summary: Postavite proste pločevine po debelini in širini ter določite svoje prereze I, U, kotnik, cev ali ploščato jeklo.
keywords: pločevina, ploščato, profil po meri, uporabniški profil, parametrično, prerez, oblika, prečni prerez, pl
from: c24c3b51
---

## Postavite pločevino

Pločevina se postavi kot nosilec: teče med dvema presečiščema, s širino čez in debelino navzgor.

1. Izberite {{ui:Plošča}} v skupini {{ui:Postavi}} ali pritisnite {{key:P}}.
2. V podoknu {{ui:Lastnosti}} nastavite {{ui:Debelina (mm)}} in {{ui:Širina (mm)}}. Privzeto je 20 x 200 v A36.
3. Po potrebi nastavite {{ui:Material}} in {{ui:Zasuk (°)}}. Zasuk 90 postavi pločevino na rob.
4. Kliknite dve presečišči ali uporabite obrazec {{ui:Dodaj po mreži}}.

Ime profila pločevine je zapisano kot `PL<thickness>x<width>`, na primer PL20x200. Njena dolžina je razdalja med obema točkama.

Za spremembo velikosti postavljene pločevine jo izberite in spremenite {{ui:Debelina (mm)}} ali {{ui:Širina (mm)}}.

Pločevine, ki jih postavite, so deli zase (oznaka p, sestav P). Čelne in podložne plošče, ki jih naredijo povezave, so prav tako pločevine, vendar jih spremenite prek povezave; glejte [Čelne plošče](topic:end-plates).

## Dodajte profil po meri

Kadar prereza, ki ga potrebujete, ni v katalogu, ga naredite iz njegovih mer. Profil po meri pripada modelu in se shrani z njim. Če ga želite uporabiti v vsakem novem modelu, ga hranite v {{ui:Moji profili}}, kot je opisano pod »Shranjevanje profila za nove modele«.

1. V podoknu {{ui:Model}} na levi odprite {{ui:Profil po meri}}.
2. Vtipkajte {{ui:Ime}}, na primer `W8x18-custom` ali `RHS 120x80x5`. Ne sme biti ime iz kataloga ali videti kot ime pločevine.
3. Izberite {{ui:Oblika}}: {{ui:Profil I}}, {{ui:Profil U}}, {{ui:Enakokraki kotnik}}, {{ui:Pravokotna cev}}, {{ui:Okrogla cev}} ali {{ui:Ploščato jeklo}}.
4. Izpolnite mere, ki se prikažejo, vse v milimetrih:

| Oblika | Mere |
|---|---|
| Profil I | Globina d, širina pasu bf, stojina tw, pas tf, polmer zaobljenja r (lahko 0) |
| Profil U | Globina d, širina pasu bf, stojina tw, pas tf (ostri vogali) |
| Enakokraki kotnik | Širina b (vsak krak), debelina t |
| Pravokotna cev | Višina h, širina b, debelina t (polmer zunanjega vogala 2t) |
| Okrogla cev | Premer D, debelina t |
| Ploščato jeklo | Širina b, debelina t |

5. Pustite {{ui:Shrani v Moji profili}} obkljukano, da bo profil v vsakem novem modelu (glejte spodaj), ali ga odkljukajte, da ostane samo v tem modelu.
6. Izberite {{ui:Dodaj profil}}.

Vrstica stanja pove: „Profil »…« dodan; je na vsakem seznamu profilov pod skupino Po meri.“ Prikaže se na seznamu pod obrazcem in na koncu vsakega seznama {{ui:Profil}}.

DetailCraft preveri, ali je oblika mogoča. Prikazala se bodo sporočila, na primer „Stojina in pasovi se ne prilegajo v globino in širino.“, „Polmer zaobljenja je prevelik za pas.“ ali „Stena je predebela.“ Popravite številke in znova izberite {{ui:Dodaj profil}}.

### Kaj dobijo profili po meri

- Masa na meter iz površine × 7850 kg/m³ (katalogske velikosti uporabljajo objavljeno težo).
- Profili I po meri dobijo izvrtine, izreze, čelne in podložne plošče, datoteke NC in delavniške risbe kot katalogski profili I.
- Ploščato jeklo po meri se obnaša kot pločevina.
- Profili U in cevi po meri dobijo izvrtine; kotniki in okrogle cevi še ne.

Profila po meri, ko je dodan, v modelu ne morete urejati ali odstraniti (če ste naredili napako, takoj uporabite {{key:Mod+Z}}). Popravljenemu profilu dajte novo ime.

## Shranjevanje profila za nove modele

{{ui:Moji profili}} pod obrazcem je vaš lastni seznam profilov po meri. Hrani se v tem brskalniku, na tem računalniku, ne v datoteki modela in ne v vašem računu.

- Profil, dodan z obkljukanim {{ui:Shrani v Moji profili}}, gre na seznam. Vsak novi model, vključno s tistim, ki ga DetailCraft odpre, ko ga zaženete, se začne z vsemi profili s seznama v svojih seznamih profilov.
- Profil, ki je že v modelu, a ni na seznamu, ima poleg sebe gumb {{ui:Shrani}}.
- V modelu, ki nima enega od vaših profilov (na primer starejša datoteka), izberite {{ui:Uporabi tukaj}}, da ga dodate.
- {{ui:Odstrani}} vzame profil s seznama. Modeli, ki ga že uporabljajo, ohranijo svojo kopijo.
- Model, ki ga odprete, ohrani profile, shranjene v njegovi datoteki. Odpiranje datoteke nikoli ne spremeni vašega seznama.
- Ime, ki je že na seznamu z drugimi merami, je zavrnjeno: novemu profilu dajte drugo ime.
- Če izbrišete podatke spletnega mesta v brskalniku ali uporabljate drug brskalnik ali računalnik, se začnete s praznim seznamom. Zasebno okno ga ne more ohraniti; aplikacija to pove.
