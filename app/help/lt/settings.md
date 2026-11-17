---
title: DetailCraft parametrai
summary: Nustatykite, ar naujos detalės pradedamos kaip JAV ar europiniai profiliai, kiek toli kopija nukeliama su Dubliuoti, ar kopijos atsiveda savo jungtis ir ar 3D rodinyje rodomi varžtai.
keywords: parametrai, nuostatos, lapo dydis, popieriaus dydis, brėžiniai, parinktys, plienas, aisc, en, europiniai, JAV profiliai, metriniai profiliai, numatytasis profilis, klasė, s355, a992, dubliavimo poslinkis, įklijavimo poslinkis, kopijuoti jungtis, varžtai, inkariniai strypai, slėpti varžtus, atstatyti
from: e46cea57
---

Atidarykite {{ui:Parametrai}} krumpliaračio piktograma programos juostoje arba {{key:Mod+,}}. Pirmasis skirtukas, {{ui:DetailCraft}}, turi šios programos parametrus; {{ui:Bendra}} turi tuos, kuriuos bendrai naudoja visos CadCraft programos (tema, įrankių juosta, skydeliai). DetailCraft parametrai egzistuoja tik programoje: keiskite juos čia, jie įsigalioja iškart, ir ši naršyklė juos prisimena. Jie neįrašomi į jūsų modelio failą.

## Naujos detalės

Su kokiais profiliais ir markėmis pradeda įrankiai, kuriais dedama:

| Įrankis | JAV profiliai (AISC), A992 | Europiniai profiliai (EN), S355 |
|---|---|---|
| {{ui:Sija}} | W16x26, A992 | IPE300, S355 |
| {{ui:Kolona}} | W12x50, A992 | HEB200, S355 |
| {{ui:Įstrižainė}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plokštė}} | A36 | S355 |

Pradžioje – JAV profiliai. Europiniam pasirinkimui įstrižainėms naudojamas HEA160, nes DetailCraft EN kataloge kol kas nėra tuščiavidurių profilių ([Profilių katalogas](topic:profile-catalog)). Vis tiek galite pasirinkti bet kokį profilį ir markę kitai detalei skydelyje {{ui:Savybės}}, kol įjungtas detalių dėjimo įrankis. Modelyje jau esantys elementai išlaiko savo profilį ir markę.

## Dubliavimas ir įklijavimas

- **Poslinkis (mm)**: x, y ir z. {{ui:Dubliuoti}} ({{key:Mod+D}}) padeda kopiją tiek toli nuo originalo, o forma {{ui:Įklijuoti poslinkiu (mm, nuo originalo)}} prasideda nuo jo. Pradžioje jis yra 6000, 0, 0: vienas 6 m laukas išilgai numeruotų tinklelių. Nustatykite savo lauko žingsnį arba aukščio lygį z, kad nukopijuotumėte aukštą į viršų.
- **Kopijuoti galines plokštes ir pagrindo plokštes kartu su elementais** (pradžioje įjungta): jungtis kartu su kopija keliauja tik tada, kai nukopijuojami visi elementai, kuriuos ji jungia. Išjunkite, kad kopijuotumėte elementus ir pamatus be jungčių, pavyzdžiui, norėdami išbandyti kitą jungtį kopijoje.

Žr. [Kopijavimas, įklijavimas ir dubliavimas](topic:copy-paste).

## 3D rodinys

**Rodyti varžtus ir inkarinius strypus** (pradžioje įjungta). Išjunkite, kad jie būtų paslėpti rodinyje ir matytumėte skyles bei plokštes perkrautoje jungtyje. Paslėptų varžtų negalima spustelėti; spustelėkite plokštę, kad pasirinktumėte jungtį. Medžiagų sąrašas, brėžiniai ir visi eksportai vis tiek apima kiekvieną varžtą ir strypą.

## Kampo indikatorius

Kas rodoma 3D rodinio kampe: **Vaizdo kubas** (pradžioje; viršuje dešinėje – spustelėkite paviršių, kraštą ar kampą, kad žiūrėtumėte iš ten, vilkite, kad sukiotumėte, vilkite jo kompaso žiedą, kad pasuktumėte modelį), **Ašių piktograma** (mažas X, Y, Z žymeklis apačioje kairėje, kuris sukasi kartu su vaizdu: X raudona, Y žalia, Z mėlyna) arba **Nėra**. Tik {{ui:3D}}; {{ui:Planas}} ir {{ui:Fasadas}} nerodo nei vieno. Žr. [Vaizdo kubas](topic:view-cube).

## Atstatymas

{{ui:Atstatyti DetailCraft parametrus}} dialogo apačioje grąžina juos į pradžią (JAV profiliai, poslinkis 6000, 0, 0, jungtys kopijuojamos, varžtai rodomi), kartu su {{ui:Bendra}} parametrais.

## Brėžiniai

**Lapo dydis**: lapų brėžiniai ir dirbtuvių brėžiniai daromi horizontaliai: A4, A3 (pradžioje), A2, A1, ANSI B, ANSI C arba ANSI D. Langai {{ui:Brėžiniai}} ir dirbtuvių brėžinio turi tą patį sąrašą. Žr. [Bendrieji planai ir surinkimo brėžiniai](topic:drawings).

## Armatūra

- **ASTM strypų pavadinimai**: nuo #3 iki #11 arba minkštasis metrinis #10–#36 tiems patiems strypams.
- **Lenkimo žiniaraščio formos kodai**: DetailCraft S, L, U; ACI 315 tipai; arba BS 8666 formų kodai. Žr. [Armatūros žinynas](topic:rebar-reference).

## Pasirinkimas vilkiant

**Stačiakampis** (kaip anksčiau) arba **Laisvas rėmelis**: laisvos formos linija, o {{key:Space}} perjungia tarp viduje, liečiant ir tvoros, kol vilkiate. Žr. [Pasirinkimas rėmeliu](topic:select-and-change#select-with-a-window).
