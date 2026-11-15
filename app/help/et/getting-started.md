---
title: DetailCrafti alustamine
summary: Mida DetailCraft praegu teeb, kuidas seda avada ja esimene mudel ruudustikest töökoopiani kümne minutiga.
keywords: alusta, esimene mudel, sissejuhatus, terasdetailide koostamine, armatuur, kiirjuhend, õpetus, ülevaade
from: e4f16bbe
---

DetailCraft on terasdetailide ja armatuuri koostamise rakendus CadCrafti perekonnas. Sa koostad terasraami 3D-mudeli ruudustikul ja tasanditel, ühendad selle ning saad, mida töökoda vajab: detail- ja koostemärgised, materjalinimekirja, üksikdetailide tööjoonised, DSTV NC-failid, IFC-mudeli ja vundamentide armatuuri loendi.

See on varajane versioon. See teeb lühikese loetelu asju hoolikalt, mitte kõike korraga. Loe enne [Mis pole veel valmis](topic:not-built-yet), enne kui tegeliku töö ümber plaane.

## Mida see praegu teeb

- Ruudustikud ja tasandid, mille sisestad millimeetrites.
- Postid, talad, diagonaalid ja plaadid avaldatud profiilikataloogidest (AISC W, S, C, L, HSS ja Pipe; Euroopa IPE, HEA, HEB ja UPN; Ühendkuningriigi UB, UC, PFC, EA, UEA, SHS, RHS ja CHS), ning sinu enda parameetrilised profiilid.
- Kaks ühendust: poldiga kinnitatud otsaplaat talast posti flensi külge ning posti aluseplaat nelja ankurvardaga. Kumbagi saab kopeerida igale sarnasele liitekohale.
- Avad ja lõiked, mis sisestatakse asukoha järgi.
- Ristkülikukujulised padjandvundamendid, mille all on põhivõrk ja algusvardad.
- Detail- ja koostemärgised, mis uuenevad pärast iga muudatust iseseisvalt.
- Eksportid: IFC4, DSTV NC-failid (I-profiilid ja plaadid), materjalinimekiri CSV-na, armatuuri loend CSV-na ning ühe detaili tööjoonise PDF.

## Ava DetailCraft

1. Ava DetailCraft töölaua brauseris: Chrome, Edge, Firefox või Safari. Vt [Brauserid ja arvutid](common:browsers).
2. Oota, kuni ekraan täitub. Allservas olev olekuriba ütleb: „Valmis. Ava näidis või määra ruudustikud ja tasandid ning alusta elementide paigutamist.“

Mudelivaade vajab 3D-graafikat (WebGL). Kui ekraani keskel on tekst „Sinu brauser ei suutnud käivitada 3D-graafikat (WebGL)“, vt [Veaotsing](topic:troubleshooting#the-3d-view-is-missing).

:::note
Sinu mudelid jäävad sinu arvutisse. Mudeli avamisel loetakse see brauseris ja salvestamisel laaditakse fail alla. Midagi ei laadita üles. Pilvesalvestus ei ole veel saadaval. Vt [Kuhu su failid lähevad](common:your-files). Et kasutada DetailCraftit hiljem ilma ühenduseta, vali rakenduse ribal kord, kui oled võrgus, {{ui:Salvesta võrguks}}; vt [Töö võrguta](common:offline).
:::

:::offline
Oled võrguta. DetailCraft töötab ilma ühenduseta ainult siis, kui see salvestati enne võrguta kasutamiseks: nupp {{ui:Salvesta võrguks}} rakenduse ribal loeb siis {{ui:Valmis ka võrguta}}. Vt [Töö võrguta](common:offline).
:::

## Vaata kõigepealt näidist

Kiireim viis näha, mida DetailCraft teeb, on näidisraam.

1. Vali tööriistaribal grupis {{ui:Fail}} nupp {{ui:Näidis}}.
2. Vaade näitab kahe travee raami: kuus posti aluseplaatidega, neli talad otsaplaatidega, üks diagonaal ja seitse vundamenti armatuuriga.
3. Klõpsa talal. Paneel {{ui:Omadused}} paremal näitab selle detailimärgist, lõikepikkust, kaalu ja otsaplaatide tehtud avasid.
4. Ava allservas vahekaart {{ui:Materjalinimekiri}}, et näha iga detailimärgist koos arvu ja kaaluga.

Läbikäik [Näidisraami tutvustus](topic:sample-model) käib selle tükkhaaval läbi.

## Sinu esimene mudel

Uues mudelis on juba ruudustikud 1 kuni 3 ja A kuni B, 6000 mm sammuga, ning kaks tasandit: Tasand 1 kõrgusel 0 ja Tasand 2 kõrgusel 4000.

1. Vali {{ui:Uus}}. Kui praegusel mudelil on muudatusi, küsib DetailCraft, kas need enne salvestada.
2. Vali vaate kohal {{ui:Plaan}}. Tasandiloend selle kõrval valib Tasand 1.
3. Vali tööriistaribal {{ui:Post}} või vajuta {{key:C}}.
4. Klõpsa ruudustiku ristumiskohal A/1. Tasandist 1 kuni tasandini 2 ilmub W12x50 post. Olekuriba ütleb, kuhu see läks.
5. Klõpsa B/1, A/2 ja B/2, et lisada veel kolm.
6. Vali tasandiloendist Tasand 2 ja seejärel {{ui:Tala}} või vajuta {{key:B}}.
7. Klõpsa A/1, siis A/2. W16x26 tala ühendab kahe posti tipud, terase ülemine serv on tasandil.
8. Vajuta {{key:Esc}}, et naasta režiimi {{ui:Vali}}, ja klõpsa siis talal.
9. Vali grupis {{ui:Ühenda}} {{ui:Otsaplaadid}}. Mõlemale otsale tuleb poltidega kinnitatud otsaplaat, tala lõigatakse sobivaks ja esimene otsaplaat on nüüd valitud.
10. Klõpsa talal uuesti.
11. Vali grupis {{ui:Väljund}} {{ui:Tööjoonis}}. Avaneb talatööjoonise eelvaade. Vali {{ui:Laadi PDF alla}}.
12. Vajuta {{key:Mod+S}}, et mudel salvestada. Brauser laadib alla faili `Untitled.detailcraft.json`.

Enne salvestamist nimeta mudel ümber väljal {{ui:Nimi}} vasakus ülanurgas, et fail ja iga eksport kannaks selle nime.

## Kuhu edasi

- [Ekraani tutvustus](topic:workspace)
- [Ruudustike ja tasandite seadistamine](topic:grids-and-levels)
- [Liikumine 3D-vaates](topic:navigate-3d), hiire, puuteplaadi või puuteekraaniga
- [Tulles teistest detailimisprogrammidest](topic:coming-from), kui tead mõnda suurt detailimispakketti
- [Selle abi kasutamine](common:help)
