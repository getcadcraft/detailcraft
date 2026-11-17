---
title: Izbira z oknom, premik, zasuk, zrcaljenje, spreminjanje več elementov
summary: Povlecite okno za izbiro, povlecite izbrane dele za premik, premaknite, zasukajte ali zrcalite izbor (ali njegovo kopijo) ali hkrati spremenite profil, material, položaj ali zasuk številnih elementov.
keywords: lasso, ograja, prostoročna izbira, povleci, povleci in spusti, premik z vlečenjem, lovljenje, okno, sekanje, izbira s škatlo, izbira z vlečenjem, izberi veliko, premakni, zasukaj, zrcali, obrni, kopiraj, spremeni veliko, več elementov, profil, material, položaj, zasuk, različno, mrežna os
from: 50b16f9a
---

Vsak od teh je en korak razveljavitve: en {{key:Mod+Z}} vse povrne.

## Izbira z oknom

- V {{ui:Tloris}} in {{ui:Pogled}} povlecite z levim gumbom z prazne točke. V {{ui:3D}} držite {{key:Shift}} in povlecite (navadno povlečenje zavrti model).
- Povlecite **v desno** za okno: zajame, kar je popolnoma znotraj, narisano s polno črto.
- Povlecite **v levo** za sekajoče okno: zajame vse, česar se dotakne, narisano črtkano.
- Držite {{key:Shift}} med začetkom povleka, da dodate k izboru namesto da ga zamenjate.
- Tloris ali pogled ponuja samo tisto, kar prikazuje: deli, odrezani nad tlorisom, ali več kot 1 m od mrežne osi pogleda, niso izbrani.
- {{key:Esc}} med povlekom opusti okno.

### Lasso

V [nastavitvah DetailCraft](topic:settings) izberite **Lasso** pod {{ui:Izbiranje z vlečenjem}} in isti povlek bo narisal prostoročno črto namesto pravokotnika.

- Njegov prvi premik vstran odloči, kako izbira: **v desno** – kar je popolnoma znotraj (polna črta); **v levo** – kar se dotika (črtkano).
- Pritisnite {{key:Space}} med povlekom, da preklopite med znotraj, dotika in **ograja**: odprta črta, ki zajame vse, kar prečka (pikasto, oranžno).
- {{key:Shift}} za dodajanje in {{key:Esc}} za opustitev delujeta kot pri oknu.

:::touch
Na zaslonu na dotik en prst kot prej pomika tloris in pogled; dele izberite s tapnjem.
:::

V {{ui:Tloris}} in {{ui:Pogled}} pomikajte z desnim ali srednjim gumbom, medtem ko je orodje {{ui:Izberi}} vklopljeno.

## Povlecite dele za premik

1. Najprej izberite dele (klik, {{key:Shift}}+klik ali okno).
2. Pritisnite na enega od izbranih delov in povlecite. Celoten izbor se premakne; črtkani obris kaže, kam gre.
3. Spustite, da ga postavite. {{key:Esc}} pred spustom vrne vse nazaj.

- V {{ui:3D}} in {{ui:Tloris}} se deli premikajo čez nivo. V {{ui:3D}} držite {{key:Mod}} med začetkom povleka, da jih premaknete navzgor in navzdol.
- V {{ui:Pogled}} se premikajo znotraj pogleda: vzdolž mrežne osi ter navzgor in navzdol.
- Del, ki ga držite, se pripne na presečišče mreže, ko njegov konec pride nekaj slikovnih točk blizu; presečišče zasveti in vrstica stanja ga poimenuje. Sicer premik teče v korakih po 10 mm.
- Pritisk na del, ki ni izbran, še vedno zavrti ali pomakne pogled, zato povlek nikoli ne premakne česa po nesreči.
- Povlek je en korak razveljavitve, kot {{ui:Premakni}}. Povezave sledijo svojim elementom.

## Sprememba lastnosti na več elementih

Izberite dva ali več elementov. Pod **Spremeni pri vseh** v podoknu {{ui:Lastnosti}}:

- {{ui:Profil}}, {{ui:Položaj}}: za nosilce, stebre in diagonale med njimi.
- {{ui:Debelina plošče (mm)}} in {{ui:Širina plošče (mm)}}: za plošče.
- {{ui:Material}} in {{ui:Zasuk (°)}}: za vse.

Polje prikaže **Različno**, kadar se elementi ne ujemajo. Izberite ali vpišite vrednost in vsak element, za katerega velja, jo prevzame; vrstica stanja pove, koliko se jih je spremenilo in koliko jih je ohranilo svojo.

Številska polja v podoknu {{ui:Lastnosti}} sprejmejo tudi račun: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Račun, ki ga ni mogoče prebrati, je zavrnjen, vrstica stanja pa pove, kje je napaka.

## Premik, zasuk ali zrcaljenje

Izberite elemente in temelje (tudi posamezen deluje), nato uporabite **Premakni, zasukaj, zrcali** v podoknu {{ui:Lastnosti}}. Povezave se ne premikajo same: sledijo svojim elementom. Če premaknete nosilec, ne pa njegovega stebra, vrstica stanja pove, koliko povezav zdaj veže premaknjen element na tistega, ki je ostal, in [Težave](topic:troubleshooting) pove, če se več ne prilegajo.

- **Premik:** vpišite x, y in z v milimetrih ter izberite {{ui:Premakni}}. Ali izberite {{ui:Izberite dve točki}} (ali pritisnite {{key:M}}): kliknite presečišče mreže, od koder premikate, nato tisto, kamor premikate. Črtkani obris sledi kazalcu.
- **Zasuk v tlorisu:** vpišite kot (v nasprotni smeri urnega kazalca, gledano od zgoraj) in izberite, okoli česa se zavrti: središča izbora ali presečišča mreže. Stebri se zavrtijo skupaj z okvirom.
- **Zrcaljenje:** izberite mrežno os. Zrcalna slika je isti profil, obrnjen na drugo stran: I-profil ohrani svoji pasnici, U-profil je obrnjen v drugo smer (njegov vrh in dno zamenjata mesti), luknje in zarezi grejo z delom.
- Označite **Ohrani original (naredi kopijo)**, da izbor pusti na mestu in premakne, zasuče ali zrcali kopijo. Njene povezave pridejo z, če je {{ui:Kopiraj čelne in podložne plošče skupaj z elementi}} vklopljeno v [nastavitvah DetailCraft](topic:settings).

Zasuk se vrti okoli navpične črte, zrcaljenje pa poteka v navpični ravnini, zato ostanejo nivoji vodoravni in temelji pokončni.
