---
title: Referenca armature
summary: Velikosti palic, mere kljuk, oblikovne kode, dolžine rezov in stolpci izvlečka armature, ki jih uporablja DetailCraft.
keywords: armatura, velikosti palic, kljuke, premer upogiba, oblikovne kode, dolžina reza, izvleček armature, seznam palic, astm a615, aci 318
from: 1583535e
---

## Velikosti palic

Po ASTM A615/A615M, tabela 1 (oznake v palcih). Milimetri in kg/m so točni preračuni objavljenih vrednosti v palcih in lb/ft. Seznami prikazujejo vsako velikost kot na primer „#5 (15.9 mm)“.

| Palica | Premer (mm) | Masa (kg/m) | Površina (mm²) | Notranji premer upogiba | Krak 90° kljuke, zunanji do zunanjega (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

V [Nastavitve DetailCraft](topic:settings) ({{ui:Armatura}}) lahko **imena palic ASTM** te palice prikažejo z mehkimi metričnimi imeni A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (iste palice; ACI 315-99, tabela 1, navaja obe).

### Metrične palice (BS 4449)

| Palica | Premer (mm) | kg/m | Najm. polmer upogiba r (mm) | Krak kljuke = končni izstop P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masa je nazivni prerez, pomnožen s 7850 kg/m³. Polmer in končni izstop sta najmanjši vrednosti po BS 8666:2020 (njegova tabela najmanjših mer; prejšnji premer je 2r). Temelji z BS palicami dobijo krake kljuk P in dolžine rezov po spodnjih formulah BS 8666. Izbira evropskega jekla v nastavitvah začne nove temelje z mrežami H16 in čakalnimi palicami H20 v betonu C30/37.

## Kljuke

Palice ASTM: standardne 90° kljuke po ACI 318-19, tabela 25.3.1: notranji premer upogiba 6 db za #3 do #8 in 8 db za #9 do #11, z ravnim podaljškom 12 db za upogibom. Krak kljuke, izmerjen od zunanjega do zunanjega, je polovica premera upogiba + db + 12 db.

Če kljuka palice mreže ne sodi v globino temelja znotraj zaščitnega sloja, DetailCraft skrajša krak, da sodi, in navede opozorilo.

## Oblike

DetailCraft shrani tri oblike. Izvleček armature jih izpiše kot kode DetailCraft, kot tipe ACI 315 ali kot oblikovne kode BS 8666: izberite **Oblikovne kode izvlečka armature** v [Nastavitve DetailCraft](topic:settings) ({{ui:Armatura}}).

| Koda | Oblika | Mere |
|---|---|---|
| S | Ravna | A = dolžina |
| L | Ena 90° upogib | A = glavni krak, B = krak kljuke, oba zunanji do zunanjega |
| U | Dva 90° upogiba na isti strani | A = sredina, B in C = dva kraka, zunanji do zunanjega |

Palice mreže z vklopljeno {{ui:Kljuke na koncih}} so U, sicer S. Čakalne palice z vklopljeno {{ui:Kljuka spodaj}} so L, sicer S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (sl. 10) |
|---|---|---|
| S | 00, L = A | brez tipa številke |
| L | 11, L = A + B − 0.5r − d | brez tipa številke: slika nima palice z eno kljuko |
| U | 21, A in C kraka, B sredina: L = A + B + C − r − 2d | Tip 2, kljuki A in G, ravna B |

Pri kodah BS 8666 ali ACI 315 stolpci izvlečka A, B in C sledijo oznakam tega standarda (sredina U je B).

## Dolžina reza

Za palice BS 4449 je dolžina reza formula BS 8666 za oblikovno kodo palice (zgoraj). Za palice ASTM je to točna dolžina središčnice palice: ravni deli in upogibi kot loki s polmerom, enakim polovici premera upogiba plus polovica premera palice. Ne izračuna se iz tabele odbitkov za upogibe, zato se lahko od izvlečka, ki tako tabelo uporablja, razlikuje za nekaj milimetrov.

## Razporeditev

- Spodnja mreža: palice vzdolž L tvorijo spodnjo plast, palice vzdolž B ležijo na njih. Vsak sklop je enakomerno razporejen po temelju znotraj zaščitnega sloja, z razmikom, ki ga vnesete, ali manjšim, in z vsaj dvema palicama.
- Čakalne palice: mreža palic vzdolž L in vzdolž B v razmikih, ki jih vnesete, centrirana na temelju, stojijo na mreži in štrlijo nad vrh za izstop, ki ga vnesete. Vsaka kljuka kaže navzven.

## Preverjanja

| Preverjanje | Pravilo | Rezultat |
|---|---|---|
| Prostor za palice | Zaščitni sloj na obeh straneh pusti prostor za palice | Zavrnjeno, če ni |
| Globina za dve plasti | Globina minus dva zaščitna sloja zadostuje za obe plasti mreže | Zavrnjeno, če ni |
| Čakalne palice sodijo | Mreža čakalnih palic sodi znotraj zaščitnega sloja | Zavrnjeno, če ni |
| Prosti razmik | Vsaj večja od 25.4 mm in db (ACI 318-19, 25.2.1; velikost agregata se ne preverja) | Opozorilo |
| Globina kljuke | Krak kljuke sodi v globino znotraj zaščitnega sloja | Opozorilo, krak skrajšan |
| Kljuke čakalnih palic | Kljuke ostanejo zunaj zaščitnega sloja | Opozorilo |

## Stolpci izvlečka armature

Zavihek {{ui:Armaturni izvleček}} in njegov CSV imata te stolpce: Oznaka palice, Velikost, Oblika, A (mm), B (mm), C (mm), Število, Dolžina reza (mm), Skupna dolžina (m), kg/m, Teža posamezne (kg), Skupna teža (kg), Uporabljeno za. Zadnja vrstica sešteje število, dolžino in težo.
