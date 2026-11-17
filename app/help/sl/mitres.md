---
title: Zajeralni spoji
summary: Povežite dva nosilca I-profila, ki se stikata pod kotom: oba konca odrežite na ravnini, ki razpolavlja kot, s čelnimi ploščami, vijaki in ojačitvami, če jih želite.
keywords: zajeralni spoj, zajeral, zajeralni spoj, koleno, rama, portalni okvir, sleme, vogal, rez pod kotom, poševni rez, čelna plošča, privijačena čelna plošča, ojačitev, poveži
from: cd8380d4
---

Zajeral poveže dva nosilca I-profila, katerih konca se stikata pod kotom, kot je koleno portalnega okvirja, sleme ali dva nosilca, ki obračata vogal v tlorisu. DetailCraft oba konca odreže na ravnini, ki razpolavlja kot med njima, tako da se odrezani ploskvi ujemata. Če želite, doda čelno ploščo na vsak odrezan konec, privije obe plošči skupaj in vstavi par rebrnih ojačitev v vsak element.

## Kje deluje

- Dva **I-profila** (IPE, HEA, HEB, W in podobni), katerih **konca se stikata v istem vozlišču**. Vsak element je mogoče narisati v katero koli smer.
- Kot med elementoma mora biti vsaj 15°. Elementi v isti črti so zavrnjeni: uporabite [stik](topic:splices).
- Navaden rez (brez plošč) deluje ne glede na to, kako se elementa stikata. **Čelne plošče** potrebujeta, da se elementa stikata v ravnini svojih rebrov, kot na portalnem kolenu ali slemenu. Dva nosilca, ki obračata vogal v tlorisu, se stikata v ravnini svojih pasnic, zato dobita samo navaden rez.
- Elementi različnih velikosti se povežejo, vendar z opozorilom: njuni odrezani ploskvi se ne ujemata.

## Dodajte zajeral

1. Izberite dva elementa: kliknite enega, nato {{key:Shift}}+klik na drugega.
2. Izberite {{ui:Mitre}} (Zajeralni spoj) v meniju {{ui:More}} (Več) skupine {{ui:Connect}} (Poveži). Odpre se pogovorno okno Zajeralni spoj.
3. Nastavite oštevilčena polja. Risba ob njih se naredi iz vaših številk, ko tipkate, njeni oštevilčeni krogi pa kažejo, kaj nastavi vsako polje.
4. Izberite {{ui:Add the mitre}} (Dodaj zajeralni spoj). Če ste izbrali več kot dva elementa, dobi vsak prost stik med njimi isti zajeral.

Zajeral kasneje spremenite tako, da ga izberete (kliknete eno od njegovih plošč) in v desnem podoknu izberete {{ui:Mitre dialog with preview}} (Pogovorno okno zajeralnega spoja s predogledom), ali pa tam spremenite nastavitve neposredno. Navaden rez nima plošč, na katere bi lahko kliknili: izberite njegova dva elementa in znova izberite {{ui:Mitre}} (Zajeralni spoj); pogovorno okno se odpre na tem zajeralu. {{ui:Apply to similar (n)}} (Uporabi za podobne (n)) ga kopira na vsak prost stik med elementi istih dveh profilov pod istim kotom.

## Oštevilčena polja (mm)

| Št. | Nastavitev | Privzeto | Kaj počne |
|---|---|---|---|
| 1 | Razmik med ploščama (ali med odrezanima koncema) | 0 | Prost razmik v stiku. Vsaka stran obdrži polovico |
| 2 | Čelne plošče, debelina plošče | vklopljeno, 20 | Čelna plošča, zvarjena po obodu na vsak odrezan konec. Odkljukajte za navaden rez |
| 3 | Vrste vijakov, razmik vrst, razmak, zunanja vrsta | 4, 0, 0, izklopljeno | Razmik 0 enakomerno razporedi vrste med pasnicama. Razmak 0 = polovica širine plošče, vsaj 2.4 × luknja. Zunanja vrsta gre v podaljšek plošče čez zunanjo pasnico |
| 4 | Plošča čez zunanjo pasnico | 0 | Kako daleč plošče segajo čez zunanjo pasnico, vzdolž reza |
| 5 | Plošča čez notranjo pasnico | 0 | Enako na notranji strani |
| 6 | Rebrne ojačitve, razdalja čez rez | izklopljeno, 50 | Par v vsakem elementu, na obeh straneh rebra, pravokotno na element, tako daleč čez njegov oddaljeni konec reza |
| 7 | Debelina ojačitve | 10 | |

Pod {{ui:Bolts}} (Vijaki): premer vijaka, luknja, razred in dodatek dolžine (20, 22, A325, 30), kot pri čelnih ploščah. Pod {{ui:Plates and welds}} (Plošče in zvari): širina plošče (0 = širina pasnice), velikost kotnega vara (8) in material plošče (A36).

## Kaj dobite

- **Rezi.** Konec vsakega elementa je odrezan na njegovi ravnini. Njegova dolžina v seznamih, risbah in datotekah NC je **skupna dolžina**, od njegovega pravokotnega konca do najbolj oddaljene točke reza.
- **Plošče** pripadajo svojemu elementu: sestav vsakega elementa je element, njegova čelna plošča in njegove ojačitve. Vijaki so terenski vijaki stika: kosovnica jih šteje enkrat, sestavna risba vsakega elementa pa jih navaja kot prosto vijake.
- **Risbe** prikazujejo poševne konce in plošče; delavniška risba zajeranega elementa navaja kot za vsak rez njegov kot od pravokotnega.
- **Datoteke NC** (DSTV) nosijo kote poševnega reza v glavi, kot zahteva standard, in konture, ki sledijo rezu. Preverite jih v pregledovalniku NC v vaši delavnici pred rezanjem, kot za vsako datoteko NC.
- **IFC** odreže izvlečenje vsakega elementa z njegovo ravnino reza, tako da drugi programi prikažejo pravi rez.
- **Oznake:** zajeran element je drug kos kot element enake dolžine z pravokotnim rezom. Dva elementa z istimi rezi imata isto oznako, kot dva kapnika slemena.

## Dobro je vedeti

- Zajeral ostane živ. Premaknite ali spremenite velikost enega od elementov in rez, plošče in vijaki sledijo. Izbrišite enega od elementov in zajeral izgine, konec drugega elementa je spet pravokoten.
- Opozorila uporabljajo iste najmanjše vrednosti EN 1993-1-8 kot druge povezave (razdalja do konca in roba 1.2 × luknja, razmik 2.2 × luknja, razmak 2.4 × luknja), poleg tega vrste vijakov preblizu pasnice, plošče, ožje od pasnic, in ojačitve brez prostora.
- Vrednosti so začetne, ne projekt. DetailCraft ne preverja nosilnosti povezave in ne naredi rame, zvarjenega zajerala s stikovnim varom ali ojačitev v liniji s pasnicami drugega elementa.
