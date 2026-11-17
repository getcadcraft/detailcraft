---
title: Paiguta postid, talad ja diagonaalid
summary: Vali profiil, materjal ja asend, seejärel klõpsa ruudustiku ristumiskohtadel või sisesta need, et paigutada terasdetailid.
keywords: post, tala, diagonaal, element, paiguta, profiil, materjal, pööre, asend, nihe, sisesta, lisa ruudustiku järgi
from: d6db0dc1
---

Elemendid paigutatakse ruudustiku ristumiskohtadele: post ühele, tala või diagonaal kahe vahele. Seadista enne [ruudustikud ja tasandid](topic:grids-and-levels).

## Vali tööriist ja selle valikud

1. Vali rühmas {{ui:Paiguta}} {{ui:Post}} ({{key:C}}), {{ui:Tala}} ({{key:B}}) või {{ui:Diagonaal}} ({{key:R}}).
2. Paremal asuv paneel {{ui:Omadused}} muutub pealkirjaks „Paiguta post“ (või tala, või diagonaal) ja näitab järgmise elemendi valikuid:
   - {{ui:Profiil}}: vali nimekirjast. Suurused on grupeeritud kataloogi järgi (W-profiilid, kanalid, nurgikud, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS ja sinu kohandatud profiilid). Vt [Profiilikataloog](topic:profile-catalog).
   - {{ui:Materjal}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 või S355.
   - {{ui:Asend}}: kuhu lõik paigutub joone suhtes kahe punkti vahel: {{ui:Terase ülaserv joonel}}, {{ui:Keskel joonel}} või {{ui:Alumine serv joonel}}.
   - {{ui:Pööre (°)}}: pöörab lõiku elemendi enda telje ümber.
   - {{ui:Ulatub kuni}} (ainult postidel): {{ui:Järgmine tasand ülespoole}} või tasandi nimi.
3. Valikute all näitab {{ui:Profiil}} kast valitud lõigu mõõtmeid, pindala, massi meetri kohta ja kataloogi, kust see pärineb.

Vaikimisi on postidel W12x50 materjalis A992 (keskel), talade puhul W16x26 materjalis A992 (terase ülaserv joonel) ja diagonaalidel HSS6x6x1/4 materjalis A500 Gr C (keskel). Valikud jäävad seatuks, kuni neid muudad.

## Paiguta klõpsates

### Post

1. Vali {{ui:Plaan}} ja vali tasand, millest post algab.
2. Vali {{ui:Post}}.
3. Liiguta kursor ristumiskoha lähedale. Lähim punkt süttib ja olekuriba nimetab selle.
4. Klõpsa. Post ulatub sellest tasandist järgmise tasandini (või {{ui:Ulatub kuni}} tasandini). Olekuriba ütleb näiteks „Post W12x50 kohal A/1, Tasand 1 kuni Tasand 2.“
5. Hoia klõpsamist, et panna veel. Vajuta {{key:Esc}}, kui oled lõpetanud.

Kui klõpsatud tasandist ülespoole tasandit pole, ütleb olekuriba: „Pole tasandit, mida post Tasand 2-st ulatuks. Lisa esmalt tasand.“

### Tala

1. Vali {{ui:Plaan}} ja tala tasand.
2. Vali {{ui:Tala}}.
3. Klõpsa esimesel ristumiskohal. Olekuriba ütleb „Algab A/1 tasandil 2. Nüüd klõpsa teisele otsale (Esc tühistab).“ Katkendjoon järgib kursorit.
4. Klõpsa teisel ristumiskohal. Tala ilmub.
5. Klõpsa uuesti, et alustada järgmist talat, või vajuta {{key:Esc}}.

{{key:Esc}} pärast esimest klõpsu tühistab ainult selle punkti; teine {{key:Esc}} paneb tööriista kõrvale.

### Diagonaal

Diagonaal kulgeb kahe ristumiskoha vahel eri tasanditel, seega on see kõige lihtsam vaates {{ui:Vaade}}.

1. Vali {{ui:Vaade}} ja vali tähistatud ruudustikujoon, millel diagonaal on.
2. Vali {{ui:Diagonaal}}.
3. Klõpsa alumisel otsal, seejärel ülemisel.

Vaateid on ainult tähistatud ruudustikujoontele. Diagonaali jaoks raamis nummerdatud joone järgi (A-st B-ni) kasuta {{ui:3D}} või allpool olevat vormi {{ui:Lisa ruudustiku järgi}}.

:::touch
Puuteekraanil koputa ristumiskohale lähedale: koputus valib lähima punkti lühikesel kaugusel ja ei tee midagi, kui punkt pole lähedal. Enne koputamist ei ole esiletõstmist, seega kontrolli pärast iga koputust olekuriba teadet. Ühe sõrmega lohistamine pöörab või nihutab vaadet, mitte ei paiguta.
:::

## Paiguta ruudustiku järgi, klõpsamata

Igal paigutustööriistal on {{ui:Lisa ruudustiku järgi}} vorm {{ui:Omadused}} paneeli all. See töötab ainult klaviatuuriga ega vaja 3D-vaadet.

1. Vali tööriist, näiteks {{ui:Tala}}.
2. Vormis {{ui:Lisa ruudustiku järgi}} vali {{ui:Ruudustikust (täht)}}, {{ui:Ruudustikust (number)}} ja {{ui:Tasandist}}.
3. Vali {{ui:Ruudustikuni (täht)}}, {{ui:Ruudustikuni (number)}} ja {{ui:Tasandini}}.
4. Vali {{ui:Lisa}}.

Posti või vundamendi puhul on vormil ainult üks punkt: {{ui:Ruudustik (täht)}}, {{ui:Ruudustik (number)}} ja {{ui:Tasand}}.

## Muuda elementi pärast paigutamist

1. Vajuta {{key:Esc}} (või vali {{ui:Vali}}, {{key:V}}) ja klõpsa elemendil.
2. Paneelis {{ui:Omadused}} muuda {{ui:Nimi}}, {{ui:Profiil}}, {{ui:Materjal}}, {{ui:Asend}} või {{ui:Pööre (°)}}.
3. Liigutamiseks muuda {{ui:Otspunktid (x, y, z mm)}} all {{ui:Algus}} või {{ui:Lõpp}} x-, y- ja z-väärtusi. Iga otsa ruudustiku nimi kuvatakse all, või selle koordinaadid, kui see on ruudustikust väljas.

Iga muudatus on üks tagasivõtmise samm. Väljade all näed elemendi {{ui:Detailimärgis}}, {{ui:Koost}}, {{ui:Lõikepikkus}}, {{ui:Mass}} (brutto: auke ja väljalõikeid maha ei arvestata) ja kataloogi, kust profiil pärineb.

Elemente ei saa veel lohistada ega massiivina paigutada. Et teha sellega sarnane element, kopeeri ja kleebi see või dubleeri ({{key:Mod+D}}): vt [Kopeeri, kleebi ja dubleeri](topic:copy-paste).

## Kustuta element

Vali see ja vajuta {{key:Delete}} või {{key:Backspace}} või vali {{ui:Kustuta}}. Selle ühendused kustuvad koos sellega. {{key:Mod+Z}} toob kõik tagasi.

## Mida peaks teadma

- **Mis suunas post on.** Pöördel {{ui:Pööre (°)}} 0 on posti tiivad x-suunas, numbriliste ruudustikujoonte poole. Tala ruudustikujoonelt 1 ruudustikujooneni 2 ühineb tiiva sisse; tala A-st B-ni ühineb vööti. Otsplaadid ehitatakse ainult tiibadesse, seega kui su talad kulgevad A-st B-ni, anna neile postidele pööre 90.
- **Talad tasandil ripuvad selle all** vaikeseadel {{ui:Terase ülaserv joonel}}. Vali {{ui:Keskel joonel}}, kui su tasandid on elementide telgjooned.
- **Postid ulatuvad tasandist tasandini.** Kahe korruse läbivat posti puhul sea {{ui:Ulatub kuni}} kõrgemaks tasandiks.
- **Kaldtalad** on lubatud (vali otsad eri tasanditel), kuid otsplaate neile veel ei ehitata.

Järgmine: [Ühenda talad postidega otsplaatidega](topic:end-plates).
