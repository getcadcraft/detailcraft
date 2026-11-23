---
title: Preverite jeklene elemente po projektnem predpisu
summary: Sestavite kombinacije obremenitev po ASCE 7 ali EN 1990, preverite vsak jekleni I-profil po AISC 360 ali EN 1993-1-1 in poglejte, kolikšen del nosilnosti uporablja vsak element. Pripomoček, dokler elemente ne pregleda inženir.
keywords: projektiranje, preverjanje dimenzioniranja, projektiranje jekla, izkoriščenost, nosilnost, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, kombinacije obremenitev, LRFD, nacionalni dodatek, uklon, bočno-torzijski uklon, strig, upogib, interakcija, konstrukcijsko, študenti, inženir
from: 15685c4e
---

Po zagonu analize blok {{ui:Preverjanja dimenzioniranja}} na zavihku {{ui:Analiza}} pretvori njegove sile v oceno za vsak jekleni element: kolikšen del nosilnosti uporablja najneugodnejša kombinacija.

:::warning
To je **pripomoček, dokler ga ne pregleda inženir**. Upošteva le sile prvega reda (brez učinkov drugega reda), ne preverja torzije, vitkih delov (razred 4), varjenih profilov in spojev ter izpušča, kar ne more preveriti, in to tudi pove. Ne nadomešča preverjanja inženirja, njegovi rezultati pa niso žig odobritve.
:::

## Izberite predpis

{{ui:Projektni predpis}} se shrani z modelom; izberite eno od dveh družin:

- **ASCE 7 + AISC 360** (ZDA, LRFD): kombinacije obremenitev iz ASCE 7-16 §2.3.1 in preverjanja elementov po ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinacije iz EN 1990 (enačba 6.10 ali 6.10a in 6.10b) in preverjanja elementov po EN 1993-1-1.

Nato izberite {{ui:Razred jekla}} (A992, A36 in drugi ali S235 do S450, pri čemer se nad 40 mm uporabi nižja meja tečenja).

## Sestavite kombinacije

V seznamu primerov obremenitev določite vsakemu primeru njegovo **vrsto** (stalna, koristna, koristna na strehi, sneg, veter, potres), nato pritisnite {{ui:Sestavi kombinacije}}. DetailCraft zapiše kombinacije predpisa kot kombinacije vaših primerov: vsako kombinacijo nosilnosti, ki jo predpis navaja za vrste, ki jih imate, ter kombinacije uporabnosti za pomik. Kombinacije, ki ste jih vnesli sami, ostanejo; predpisu se ne preverjajo. Primer vrste {{ui:Drugo}} se ne kombinira.

Za Eurocode so faktorji **priporočene vrednosti** iz EN 1990, dodatek A1 (γG 1.35, γQ 1.5, vrednosti ψ za koristne, snegovne in veterne obremenitve) ter EN 1993-1-1 (γM0 = γM1 = 1.0). Nacionalni dodatek vaše države nekatere od njih spremeni: odprite {{ui:Vrednosti nacionalnega dodatka}}, vnesite svoje in znova sestavite kombinacije. Shranjene so v modelu.

## Preverite elemente

Pritisnite {{ui:Preveri elemente}}. Za vsak jekleni I-profil tabela prikaže njegovo **izkoriščenost** (zahteva glede na nosilnost: 100 % je meja), ali izpolnjuje pogoj, katero preverjanje je odločilno in katera kombinacija. Elementi so na modelu obarvani: modro malo izkoriščeni, zeleno približno do polovice, oker blizu meje, rdeče čez njo, sivo nepreverjeni. Za izbor elementa kliknite njegovo ime.

Preverjanja s členom, ki mu sledi vsako od njih (navedena so v poročilu):

- natezanje, tlak z upogibnim in torzijskim uklonom, upogib okoli obeh osi z bočno-torzijskim uklonom, strig in upogib z osno silo;
- pomik kombinacij uporabnosti glede na {{ui:Omejitev pomika}}, ki ste jo nastavili (najprej L/360; to je projektna vrednost, ne vrednost predpisa).

**Dolžine.** Podprta dolžina je delež vsakega analiziranega kosa (1 = nepodprto); podpore so vzete enakomerno razporejene od začetka. Faktorji K množijo dolžino za uklon. Spoj, v katerem se priključi drug element, razdeli element, vsak kos pa se preveri na svoji dolžini, kot da je tam podprt.

## Kaj ni preverjeno

Element prikaže **ni preverjeno** z razlogom namesto številke, kadar njegov prerez ni oblika, ki jo preverjanja poznajo (kotniki, U-profili; pravokotne in okrogle cevi se preverijo, kadar so stene kompaktne), kadar gre za posebno (varjeno) obliko ali kadar je del pri upogibu vitek (AISC) oziroma razreda 4 (Eurocode). Vitek del v tlaku izključi preverjanja tlaka, element pa je prikazan kot *izpolnjuje, delno preverjeno*. Vari v spojih imajo [svoje preverjanje](topic:weld-checks). Prav tako niso izdelani: učinki drugega reda, torzija, strižni uklon skupaj z upogibom, vijačni spoji, utrujanje, požar in potresno detajliranje. Betonski elementi in potresne obremenitve imajo [svoja preverjanja](topic:concrete-and-seismic). Glejte [Še ni izdelano](topic:not-built-yet).

## Poročilo

{{ui:Poročilo (PDF)}} in {{ui:Poročilo (CSV)}} dobita tabele dimenzioniranja, ko preverjanje opravite: izdaje predpisov, nastavitve in vrednosti nacionalnega dodatka, izkoriščenost po elementih, vsak uporabljeni člen ter za vsak element zahtevo, nosilnost in izkoriščenost vsakega preverjanja v odločilni kombinaciji.
