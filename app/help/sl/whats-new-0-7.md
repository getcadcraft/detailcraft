---
title: Kaj je novega v 0.7 (prej)
summary: Preverjanje dimenzioniranja jeklenih I-profilov s kombinacijami obremenitev po ASCE 7 ali EN 1990 ter preverjanje elementov po AISC 360 ali EN 1993-1-1, izvoz USD jeklenega modela, pomočnik za USD, jekleni trak z velikimi in majhnimi gumbi, podokna, ki se samodejno skrijejo, in pogovorna okna, ki se lahko premikajo.
keywords: kaj je novega 0.7, prejšnja izdaja, opombe ob izdaji, dnevnik sprememb, spremembe, 0.7, različica, nove funkcije, preverjanja dimenzioniranja, dimenzioniranje jeklenih konstrukcij, izkoriščenost, kombinacije obremenitev, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Evrokod, nacionalni dodatek, strešna koristna obtežba, omejitev progiba, usd, usda, usdc, usdz, openusd, pomočnik, mcp, jekleni trak, trak, razdeljeni gumb, enote, kompaktno, podokna, pogovorna okna, portugalščina
from: 54a7a8f0
---

To so spremembe v DetailCraft 0.7 v primerjavi z 0.6. Analiza okvirja iz 0.6 ima zdaj drugi korak: preverjanje jeklenih elementov po projektnem predpisu.

## Novo

### Zajeralni spoji (0.7.1)

- **Dva I-profila, ki se stikata pod kotom**, na primer kolenski spoj okvirja ali slemen: izberite oba, v meniju {{ui:Več}} v skupini {{ui:Poveži}} izberite {{ui:Zajeralni spoj}}, nato pa sta oba konca odrezana na ravnini, ki razpolavlja kot. Čelne plošče, sestavljene z vijaki, in ojačitve stojine so potrditvena polja v novem pogovornem oknu Zajeralni spoj; oštevilčena polja se ujemajo z risbo vašega spoja, ki nastaja med vnašanjem. Zajeralni spoj se premika skupaj z elementi in se prenese v risbe, datoteke NC (poševni rezi), IFC in kosovnico. Glejte [Zajeralni spoji](topic:mitres).

### Preverjanja dimenzioniranja

- **Kombinacije obremenitev iz predpisa.** V zavihku {{ui:Analiza}} ima novi blok {{ui:Preverjanja dimenzioniranja}} polje {{ui:Projektni predpis}}: ASCE 7 + AISC 360 (ZDA, LRFD) ali EN 1990 + EN 1993-1-1 (Evrokod). Vsakemu primeru obremenitve določite vrsto (stalna, koristna, strešna koristna obtežba, sneg, veter, potres), pritisnite {{ui:Sestavi kombinacije}}, DetailCraft pa zapiše mejne in uporabnostne kombinacije vaših primerov iz predpisa. Kombinacije, ki ste jih vpisali sami, ostanejo. Glejte [Sestavi kombinacije](topic:design-checks#make-the-combinations).
- **Vrednosti nacionalnega dodatka.** Pri Evrokodu se faktorji začnejo pri priporočenih vrednostih; {{ui:Vrednosti nacionalnega dodatka}} vam omogoča, da vpišete vrednosti svoje države, ki se shranijo v model. Glejte [Sestavi kombinacije](topic:design-checks#make-the-combinations).
- **Preveri elemente.** {{ui:Preveri elemente}} preveri vsak jekleni I-profil na natezno obremenitev, tlak z uklonom, upogib z bočnim zvrnitvenim uklonom, strig, upogib z osno silo in progib glede na {{ui:Omejitev progiba}}, ki ste jo nastavili. Tabela prikazuje izkoriščenost vsakega elementa, merilo, ki je odločilno, in njegovo kombinacijo; elementi so na modelu obarvani (modro, zeleno, okra, rdeče, sivo za nepreverjeno). Glejte [Preveri elemente](topic:design-checks#check-the-members).
- **V poročilu.** {{ui:Poročilo (PDF)}} in {{ui:Poročilo (CSV)}} dodata izdaje predpisov, nastavitve, izkoriščenost po elementih in vsako uporabljeno določilo. Glejte [Poročilo](topic:design-checks#the-report).
- **Pomoč, dokler inženir ne pregleda.** Uporablja le sile prvega reda. Cevi, koti, L-profili, U-profili, zvarjeni profili ter vitki ali razreda 4 deli so označeni z razlogom kot „ni preverjeno“; torzija, spoji in beton se ne preverjajo. Glejte [Kaj ni preverjeno](topic:design-checks#what-is-not-checked).

### USD

- **Jekleni model izvozite kot USD.** {{ui:USD}} v skupini {{ui:Izhod}} zapiše model kot {{ui:Besedilo (.usda)}}, {{ui:Dvojiško (.usdc)}} ali {{ui:Paket (.usdz)}} za upodabljalne programe in sestavljanje prizorov: vsak sestav vsebuje svoje dele, vsak del je svoj prerez, potegnjen po dolžini z izrezi, in vsak nosi svojo oznako dela, profil, kakovostni razred, dolžino in težo. Vijačne luknje, vijaki, zvari in temeljne stope niso v mrežah USD. Glejte [Izvoz jeklenega modela kot USD](topic:usd).

### Pomočniki z umetno inteligenco

- **USD za pomočnike.** Vaš lastni pomočnik, povezan prek CadCraft Studio, lahko model izvozi kot USD (`usd_export`), v Studiu pa ga zapiše v mapo, ki ste jo dovolili. Glejte [Kaj lahko pomočnik zahteva](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Spremenjeno

- **Jekleni trak** ima velike in majhne gumbe: velik {{ui:Nosilec}} ob majhnih {{ui:Steber}}, {{ui:Diagonala}} in {{ui:Plošča}} na {{ui:Modeliranje}} › {{ui:Elementi}}; velik {{ui:Čelne plošče}} na {{ui:Detajliranje}} › {{ui:Spoji}}, pri čemer {{ui:Nadaljevanje}} in {{ui:Vozliščna plošča}} delita en razdeljeni gumb; velik {{ui:Prilepi}} na {{ui:Uredi}} › {{ui:Odložišče}}, pri čemer sta {{ui:Prilepi na isto mesto}} in {{ui:Podvoji}} za puščico skupine. {{ui:Izdelava}} › {{ui:Izmenjava}} ima {{ui:Izvozi USD}} ob IFC. Drugi slogi menijev so videti kot prej. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse#the-three-styles).
- [Analizirajte okvir](topic:frame-analysis) zdaj kaže na preverjanja dimenzioniranja, njegove kombinacije pa lahko sestavi predpis.

## V vseh aplikacijah

- **Enote.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}} ima po en seznam za dolžino, površino, prostornino, kot in naklon, z natančnimi velikostmi, ki jih dajo definicije enot (ameriška geodetska stopa je posebna enota). Izklopite enote, ki jih nikoli ne uporabljate, in te izginejo s seznamov enot; eno označite z zvezdico, in novo delo se začne v njej. Datoteka vedno ohrani svojo enoto. Lastna polja DetailCraft se še ne ravnajo po seznamih: dolžine so še vedno vpisane v milimetrih. Glejte [Enote, vpisane vrednosti in seznami enot](common:unit-lists).
- **Gostejša postavitev in podokna, ki se lahko skrijejo.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Gostota postavitve}} › {{ui:Strnjeno}} na zaslonu prikaže več vsebine (zasloni na dotik in telefoni ohranijo velike gumbe). Vsako stransko podokno ima ozko naslovno vrstico: povlecite jo, da podokno pripnete ali naredite plavajoče; spustite jo na vrstico drugega podokna, da si delita en okvir kot zavihke; zaklenete jo, da se umakne k robu; ali jo skrijete in ponovno prikažete z roba. Glejte [Razporeditev podokon](common:arrange-panels#make-the-layout-denser).
- **Pogovorna okna se premikajo.** Pogovorno okno povlecite za naslovno vrstico stran od risbe; ob naslednjem odpiranju se odpre tam, kjer ste ga pustili. Dvoklik na naslovno vrstico ga znova postavi na sredino. Glejte [Premik pogovornega okna](common:arrange-panels#move-a-dialog).
- **Recepti za pomočnike z umetno inteligenco.** Deset zgledov zahtev za vašega pomočnika (uredi risbo, izriši komplet, preveri risbe, zastavi vprašanja o modelu, seštej predizmere, preizkusi različico dela …), vsak z orodji, ki jih kliče, in dovoljenji, ki jih potrebuje, in vsak ponovno preizkušen z našimi testi. Aplikacije ne vsebujejo umetne inteligence. Glejte [Recepti za pomočnike z umetno inteligenco](common:assistants-recipes).
- **Jeziki.** **Português (Portugal)** je nov v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Jezik}}. Ta jezik ter **Português (Brasil)**, **Español (México)** in **Bahasa Indonesia** imajo zdaj vse besede aplikacij, kot osnutke, ki jih izvorni govorec še ni pregledal. Teme pomoči so v angleščini.
- **CadCraft Studio** pove, zakaj preverjanje posodobitev ni uspelo (za vaš sistem še ni datoteke, ni omrežja, podpis ni veljaven), namesto da bi samo pisal „Končano“, in ne prikazuje več kartice Kaj je novega, ki ste jo zaprli, dokler ni na voljo novejša izdaja.

## Še ni v tej različici

- **0.7 ni podpisana s kodo.** Podpisovanje in paket za Microsoft Store so bili prestavljeni v 0.8, ker potrdilo o podpisu še ni bilo odobreno. Preverite SHA-256 ob vsaki datoteki na getcadcraft.com/download. V sistemu Windows, če SmartScreen ustavi namestitveni program, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu ob prvem zagonu z desnim klikom kliknite CadCraft Studio in izberite {{ui:Odpri}}. CadCraft Studio še ni v trgovini z aplikacijami, iPad ali iPhone različica pa še ni na voljo.
- Seznama kotov in naklonov v {{ui:Enote}} sta shranjena, vendar ju nobeno polje še ne bere.
- **Preverjanja dimenzioniranja inženir še ni pregledal.** Naši preizkusi jih primerjajo s tiskanimi tabelami vrednosti in s formulami, izračunanimi ročno, še ne s primeri iz priročnika za projektiranje. Do pregleda so pomoč: pomembne elemente preverite ročno.
- Preverjanja dimenzioniranja uporabljajo sile prvega reda (brez učinkov drugega reda) in preverjajo le I-profile. Še ni izdelano: cevi, koti, U-profili, zvarjeni profili, vitki deli (AISC) ali deli razreda 4 (Evrokod) pri upogibu, torzija, strižni uklon skupaj z upogibom, spoji, utrujanje, požar, potresno detajliranje in beton. Vitek del v tlaku izpusti preverjanja tlaka, element pa je označen kot „izpolnjuje, delno preverjeno“.
- Analiza okvirja je še vedno prvega reda in linearna, inženir je še ni preizkusil na pravem projektu.
- Vijačne luknje, vijaki, zvari in temeljne stope niso v izvozu USD.

Vse drugo je v [Kaj še ni izdelano](topic:not-built-yet).
