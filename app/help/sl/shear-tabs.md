---
title: Strižne ploščice
summary: Privijačite steno nosilca na ploščo, zvarjeno v delavnici na pas ali steno stebra, tudi tam, kjer nosilec v tlorisu stoji poševno ali se vzpenja oziroma spušča.
keywords: strižna ploščica, enojna plošča, plavutna plošča, enostaven spoj, spoj stene, poševno, poševen, nagnjen, nosilec pod kotom, privijačen, poveži
from: 18afc8ab
---

Strižna ploščica (enojna plošča, plavutna plošča) je plošča, zvarjena na steber v delavnici; na gradbišču se steno nosilca privijači nanjo z eno navpično vrsto vijakov. DetailCraft postavi ploščico, odreže nosilec stran od stebra, izvrta luknje v ploščici in steni nosilca, doda vijake in var ter opozarja na robne razdalje in prileganje.

## Kje deluje

- Nosilec (I-profil ali kanal), katerega konec leži na črti **navpičnega** I-profila stebra, in se stika z njegovo **pasnico** ali njegovo **steno**.
- **Pravokotno, poševno v tlorisu ali nagnjeno**: ploščica sledi steni nosilca, nosilec pa se odreže tako, da njegov najbližji vogal ohrani zazor do stebra. Nosilec, ki se vzpenja ali spušča za več kot 60°, je zavrnjen.

## Dodajte strižne ploščice

1. Izberite nosilec.
2. V skupini {{ui:Poveži}} odprite {{ui:Več}} in izberite {{ui:Strižne ploščice}} (ali izberite {{ui:Dodaj strižne ploščice}} v podoknu {{ui:Lastnosti}}).
3. Vsak prosti konec nosilca, ki se stika s stebrom, dobi ploščico. Vsak konec nosilca sprejme en spoj: strižno ploščico ali čelno ploščo.

Izberite ploščico (kliknite jo ali vijak), da vidite in spremenite njene nastavitve. {{ui:Uporabi za podobne}} jo kot strižno ploščico skopira na vsak podoben spoj, ki še nima spoja.

## Nastavitve (mm)

| Nastavitev | Začetna vrednost | Pomen |
|---|---|---|
| Debelina plošče | 10 | Debelina ploščice |
| Širina plošče | 115 | Kako daleč ploščica sega od lica stebra, vzdolž nosilca |
| Premer vijaka, premer luknje, kakovost vijaka | 20, 22, A325 | Enako kot pri čelnih ploščah |
| Vrste vijakov, korak vrst | 3, 75 | Vijaki v navpični vrsti |
| Robna razdalja (zgornji in spodnji vijaki) | 38 | Od zgornjih in spodnjih vijakov do koncev ploščice; ploščica je globoka vrste × korak + 2 × to vrednost |
| Dvig skupine vijakov | 0 | 0 postavi vijake v središče višine nosilca |
| Zazor do stebra | 13 | Prosti zazor med stebrom in najbližjim vogalom nosilca |
| Vrsta vijakov od lica stebra | 65 | Vzdolž nosilca, od lica stebra do vijakov |
| Dodatek dolžine vijaka | 30 | Prišteto prijemu (ploščica + stena nosilca), zaokroženo navzgor na 5 mm |
| Velikost kotnega vara | 6 | Na obeh straneh ploščice do stebra |

## Dobro je vedeti

- Ploščica je del sestava stebra (zvarjena v delavnici); sestav nosilca ima samo luknje.
- Poševni ali nagnjeni nosilec je odrezan bolj nazaj kot pravokotni, da njegov najbližji vogal ohrani zazor. DetailCraft odreže nosilce pravokotno: izdelovalec konec prilagodi. Rob ploščice ob stebru je prav tako narisan pravokotno.
- DetailCraft ne preverja trdnosti. Opozorila uporabljajo najmanjše vrednosti iz EN 1993-1-8, tabela 3.3, za robne razdalje in korak, in povedo, kadar je ploščica globlja od stene nosilca med njegovima zaokrožitvama ali kadar vijaki ležijo preblizu odrezanega konca nosilca.
- [Preverjanje kolizij](topic:clash-check) izloči ploščico in elemente, ki jih povezuje: ti se morajo srečati.
