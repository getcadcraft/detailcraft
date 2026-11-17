---
title: Preverjanje jeklenih elementov po projektnem predpisu
summary: Sestavite kombinacije obtežb po ASCE 7 ali EN 1990, preverite vsak jekleni I-profil po AISC 360 ali EN 1993-1-1 in preberite, kolikšen del nosilnosti porablja vsak element. Pripomoček, dokler ga ne pregleda inženir.
keywords: projektiranje, preverjanje, jeklena konstrukcija, izkoriščenost, nosilnost, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Evrokod, kombinacije obtežb, LRFD, nacionalni dodatek, uklon, bočno-torzijski uklon, strig, upogib, interakcija, konstrukcija, študenti, inženir
from: 66b6d545
---

Po zagonu analize blok {{ui:Preverjanja dimenzioniranja}} na zavihku {{ui:Analiza}} pretvori njegove sile v oceno za vsak jekleni element: kolikšen del nosilnosti porabi najslabša kombinacija.

:::warning
Je **pripomoček, dokler ga ne pregleda inženir**. Uporablja samo sile prvega reda (brez učinkov drugega reda), ne preverja torzije, vitkih delov (razred 4), varjenih profilov in spojev ter izpusti, kar ne more preveriti, in to tudi pove. Ne nadomešča preverjanja inženirja, njegovi rezultati pa niso žig.
:::

## Izberite predpis

{{ui:Projektni predpis}} se shrani z modelom; izberite eno od dveh družin:

- **ASCE 7 + AISC 360** (ZDA, LRFD): kombinacije ASCE 7-16 §2.3.1 in preverjanja elementov po ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Evrokod): kombinacije po EN 1990 (enačba 6.10 ali 6.10a in 6.10b) in preverjanja elementov po EN 1993-1-1.

Nato izberite {{ui:Razred jekla}} (A992, A36 in drugi; ali S235 do S450, pri čemer je meja tečenja nad 40 mm nižja).

## Sestavite kombinacije

Vsakemu primeru obtežbe dodelite **vrsto** (stalna, koristna, koristna na strehi, sneg, veter, potres) v seznamu primerov in pritisnite {{ui:Sestavi kombinacije}}. DetailCraft zapiše kombinacije predpisa kot kombinacije vaših primerov: vse kombinacije za nosilnost, ki jih predpis navaja za vrste, ki jih imate, in kombinacije uporabnosti za pomike. Kombinacije, ki ste jih vnesli sami, ostanejo; predpisu se ne preverjajo. Primer vrste {{ui:Drugo}} se ne kombinira.

Za Evrokod so faktorji **priporočene vrednosti** iz EN 1990, Priloga A1 (γG 1.35, γQ 1.5, vrednosti ψ za koristne, snežne in vetrne obtežbe) ter EN 1993-1-1 (γM0 = γM1 = 1.0). Nacionalni dodatek vaše države nekatere spremeni: odprite {{ui:Vrednosti nacionalnega dodatka}}, vnesite svoje in znova sestavite kombinacije. Shranijo se v model.

## Preverite elemente

Pritisnite {{ui:Preveri elemente}}. Za vsak jekleni I-profil tabela prikaže njegovo **izkoriščenost** (obremenitev glede na nosilnost: 100 % je meja), ali izpolnjuje pogoj, kateri preverjanje je odločilno in katera kombinacija. Elementi so na modelu obarvani: modro malo izkoriščen, zeleno približno do polovice, oker blizu meje, rdeče čez njo, sivo nepreverjen. Kliknite ime elementa, da ga izberete.

Preverjanja, z vsako točko predpisa, ki ji sledi (navedena so v poročilu):

- nateg, tlak z upogibnim in torzijskim uklonom, upogib okoli obeh osi z bočno-torzijskim uklonom, strig in upogib z osno silo;
- pomik kombinacij uporabnosti glede na {{ui:Omejitev upogiba}}, ki ste jo nastavili (na začetku L/360; projektna vrednost, ne vrednost predpisa).

**Dolžine.** Podprta dolžina je delež vsakega analiziranega kosa (1 = nepodprto); podpore so vzete enakomerno razporejene od začetka. Faktorji K množijo dolžino za uklon. Spoj, kjer se pripenja drug element, razdeli element, vsak kos pa se preveri na svoji dolžini, kot da je tam podprt.

## Kaj ni preverjeno

Element prikaže **ni preverjeno** z razlogom namesto številke, kadar njegov prerez ni I-profil, ki ga preverjanja poznajo (cevi, kotniki, U-profili), kadar je oblikovan po meri (varjen), ali kadar je del vitek (AISC) ali razred 4 (Evrokod) pri upogibu. Vitek del v tlaku izpusti preverjanja tlaka, element pa se prikaže kot *izpolnjuje, delno preverjeno*. Prav tako ni izdelano: učinki drugega reda, torzija, strig skupaj z upogibom, spoji, utrujanje, požar in potresno detajliranje. Betonski elementi in potresne obtežbe imajo [lastna preverjanja](topic:concrete-and-seismic). Glejte [Še ni izdelano](topic:not-built-yet).

## Poročilo

{{ui:Poročilo (PDF)}} in {{ui:Poročilo (CSV)}} dobita tabele preverjanj, ko ste preverili: različice predpisa, nastavitve in vrednosti nacionalnega dodatka, izkoriščenost po elementih, vsako uporabljeno točko predpisa ter za vsak element obremenitev, nosilnost in izkoriščenost vsakega preverjanja v odločilni kombinaciji.
