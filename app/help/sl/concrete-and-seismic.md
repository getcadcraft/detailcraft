---
title: Preverjanje betonskih elementov in potresne obtežbe
summary: Nastavite armaturo betonskih nosilcev in stebrov, jih preverite po ACI 318-19, naredite ekvivalentne vodoravne sile po ASCE 7-22 na togih ploščah in poglejte medetažni zamik. Pripomoček za inženirja, da preveri.
keywords: beton, armirani beton, ACI 318, ACI 318-19, armatura, nosilec, steber, striženje, vezi, potres, potresni, ekvivalentna vodoravna sila, ELF, ASCE 7-22, zamik, medetažni zamik, etaže, toga diafragma, teža etaže, izkoriščenost, konstrukcijski, inženir
from: 94d3001d
---

Bloka {{ui:Betonski elementi}} in {{ui:Potresne obtežbe}} v zavihku {{ui:Analiza}} preverjata armiranobetonske nosilce in stebre ter ustvarita vodoravne sile potresa na etažah okvirja. Oba sledita zagonu zavihka {{ui:Analiza}} in se shranita z modelom.

:::warning
Rezultati so **za preverjanje s strani inženirja**: pripomoček, dokler jih inženir ne pregleda. Betonska preverjanja uporabljajo sile prvega reda, razen da steber v okvirju, ki ga imenujete nepremični, dimenzioniramo na povečani moment, brez povečanja zaradi premika, brez dimenzioniranja zasuka, brez potresnega detajliranja (ACI poglavje 18) in brez detajliranja vezi. Potresne obtežbe ne upoštevajo faktorja redundance, navpičnega potresnega učinka, povečanja zaradi zasuka in učinkov P-delta. Obremenitve zaradi vetra še niso izdelane.
:::

## Risanje elementov

Betonske elemente rišite kot pravokotnike: profil {{ui:Plošča}}, kot je `PL400x400` za steber in `PL300x600` za nosilec, določa prerez. Stebri in nosilci se postavljajo kot vsak drug element.

## Nastavitev prerezov

Blok {{ui:Betonski elementi}} našteje vsak prerez, ki ga elementi uporabljajo. Pri tistih, ki so beton, pritisnite {{ui:Nastavi kot beton …}}. DetailCraft iz narisanega profila prebere širino **b** (vzdolž lastne osi y elementa) in globino **h** (vzdolž z), nato zahteva:

- **zaščitni sloj** do središča palic ter **zgornje**, **spodnje** in **stranske** palice (koliko in kateri premer) za nosilec ali **armaturni koš** stebra (palice vzdolž b in h, kateri premer, spiralne vezi);
- **vezi**: veje, premer in razmik;
- kako element **deluje**: kot nosilec, kot steber ali se odloči iz njegovih sil (navpični element ali tisti, ki nosi več kot 0.10 f′c Ag, je steber).

Nastavite f′c, mejo tečenja palic fy, mejo tečenja vezi fyt (za striž se šteje največ 420 MPa), K in ali je okvir premičen ali nepremičen. Prerez, nastavljen kot beton, se analizira kot beton: E = 4700 √f′c, 2400 kg/m³, privzeto z **razpokanimi prerezi** (stebri 0.70 Ig, nosilci 0.35 Ig; ACI 318-19, preglednica 6.6.3.1.1(a)). Če to želite izključiti, izberite {{ui:Bruto prerezi}}.

## Sestavljanje kombinacij in preverjanje

Vsakemu primeru obtežbe določite vrsto, nato {{ui:Sestavi kombinacije}}: ACI 318-19 prevzame kombinacije nosilnosti iz ASCE 7 (§5.3.1). Pritisnite {{ui:Preveri beton}} in vsak element dobi izkoriščenost, obarvano na modelu kot jeklena preverjanja: upogib in najmanjša armatura (22.2, 9.6.1.2), deformacija z nateznim vodenjem (9.3.3.1), striženje z vezmi (22.5, 9.6.3), razmik vezi ter osna sila z momentom za stebre (22.4, z Breslerjevo metodo za dvosmerni upogib). Element, pri katerem se narisani prerez razlikuje od vpisanega b × h, se prikaže kot *delno preverjen*, prav tako vitek steber ali zasuk nad mejo: ti niso dimenzionirani.

Elementi čez svojo nosilnost so našteti v {{ui:Težave}}; sprejmite jo z razlogom ali popravite prerez.

## Etaže in potresne obtežbe

Etaža je nivo, na katerem okvir drži skupaj toga plošča (**toga diafragma**). V bloku {{ui:Potresne obtežbe}} pritisnite {{ui:Najdi etaže}}: vzame nivoje, kjer se stikata dva ali več nosilcev. Nato vsaki etaži določite njeno **potresno težo**, vpisano ali prebrano: {{ui:Vzemi teže iz primerov}} sešteje navpične obtežbe primerov, ki jim dodelite faktor (stalni primer je 1; na skladiščni koristni primer ali sneg na ravni strehi dodajte 0.25, kot zahteva ASCE 7-22, 12.7.2). Navpična obtežba vsakega vozlišča gre na etažo na ali nad njim, zato steber med dvema etažama da polovico svoje teže vsaki.

Vpišite projektne vrednosti: SDS, SD1, S1, R, Ie, Cd, TL, konstrukcijski sistem (za nihajni čas) in kategorijo tveganja. {{ui:Naredi potresne primere}} nato izračuna nihajni čas iz višine stavbe (12.8.2.1), osnovno strižno silo V = Cs W (12.8.1), jo razporedi po etažah (12.8.3) in zapiše štiri primere obtežbe, v X in Y z 5 % naključnim zasukom v vsako smer (12.8.4.2). Etažne sile in preverjanje etažnega zamika (12.8.6, preglednica 12.12-1, zamik Cd δxe / Ie proti 0.020 hsx) se prikažeta po zagonu; zamik čez mejo je prav tako težava. Ponovno pritisnite {{ui:Sestavi kombinacije}}, da potresne primere vnesete v kombinacije.

**Nihajni čas iz analize.** Približni nihajni čas Ta izhaja iz višine stavbe. Ko ste analizo zagnali s potresnimi primeri, {{ui:Vzemi nihajni čas iz analize}} prebere, za koliko se je vsaka etaža premaknila pod silami, in izračuna nihajni čas po Rayleighovi metodi, T = 2π √(Σ w δ² / (g Σ f δ)), enkrat za X in enkrat za Y; potresni primeri se nato z njim naredijo znova. Uporabljeni nihajni čas ni nikoli večji od Cu·Ta (ASCE 7-22, 12.8.2), zato mehak model osnovne strižne sile ne more spustiti pod to. Nihajni čas ponovno vzemite po drugem zagonu: ustali se v enem ali dveh korakih. Odznačite {{ui:Nihajni čas iz analize}}, da se vrnete na Ta.

**Vitki stebri (ACI 318-19, 6.6.4.5).** Za okvir, ki ga imenujete nepremičen, je steber, katerega k·ℓu/r presega 34 + 12·M1/M2 (največ 40), dimenzioniran na povečani moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² z (EI)eff = 0.4 Ec Ig / (1 + βdns), in najmanjši moment Pu (15 + 0.03 h). βdns (na začetku 0.6) je delež trajno delujoče osne obtežbe: vpišite svojega. Steber, katerega Pu doseže 0.75 Pc, ne uspe s svojim preverjanjem. Poročilo našteje številke za vsak vitek steber. V **premičnem** okviru je vitek steber še vedno „delno preverjen“: njegovo povečanje zahteva analizo drugega reda, ta pa ni izdelana.

**Plošče.** Če model vsebuje plošče, blok {{ui:Armatura plošč}} vzame momente plošč iz vsake kombinacije nosilnosti in po pravilu Wood–Armer (upogib in zvijanje skupaj) izračuna, koliko jekla potrebuje vsaka plast na meter: spodaj in zgoraj, v x in v y. Vnesete debelino, zaščitni sloj in palice; preglednica prikaže potrebno proti danemu ter enosmerni striž proti φVc, plast, ki ne zadosti, pa je težava s svojo točko. Upogib, prebijanje pri stebrih in obrobne palice ob odprtinah niso zajeti, moment nad podporo pa se s štirivozliščnimi ploščami počasi zbližuje.

Vsaka etaža, ki jo navedete, postane toga diafragma v analizi: njeni nosilci zaradi premikanja etaže ne nosijo osne sile. Izvoz CraftScript ni izdelan za model z etažami.

## Poročilo

{{ui:Poročilo (PDF)}} in {{ui:Poročilo (CSV)}} dobita betonske preglednice (predpostavke, izkoriščenost po elementih, vsaka točka), potresne parametre in osnovno strižno silo, sile na etažah in preglednico zamikov.
