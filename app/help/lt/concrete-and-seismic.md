---
title: Patikrinkite betono elementus ir sudarykite seismines apkrovas
summary: Nustatykite betoninių sijų ir kolonų armatūrą, patikrinkite pagal ACI 318-19, sudarykite ekvivalentines skersines jėgas pagal ASCE 7-22 ant standžių perdangų ir pamatykite aukšto poslinkį. Pagalbinė priemonė inžinieriui patikrinti.
keywords: betonas, gelžbetonis, ACI 318, ACI 318-19, armatūra, sija, kolona, šlytis, surišimai, seisminis, žemės drebėjimas, ekvivalentinė skersinė jėga, ELF, ASCE 7-22, poslinkis, aukšto poslinkis, perdangos, standi diafragma, aukšto svoris, panaudojimo koeficientas, konstrukcinis, inžinierius
from: 94d3001d
---

{{ui:Betoniniai elementai}} ir {{ui:Seisminės apkrovos}} blokai skirtuke {{ui:Analizė}} tikrina gelžbetonines sijas ir kolonas bei sudaro žemės drebėjimo horizontaliąsias jėgas, veikiančias rėmo perdangas. Abu seka {{ui:Analizė}} skirtuko paleidimą ir išsaugomi kartu su modeliu.

:::warning
Rezultatai **skirti inžinieriui patikrinti**: pagalbinė priemonė, kol jis jų neperžiūrėjo. Betono patikrinimai naudoja pirmos eilės jėgas, išskyrus tai, kad kolona rėme, kurį pažymėjote kaip nestumiamą (non-sway), projektuojama pagal jos padidintą momentą; be stumimo padidinimo, be sukimo projektavimo, be seisminio detalizavimo (ACI skyrius 18) ir be surišimų detalizavimo. Seisminės apkrovos nepaiso redundancijos koeficiento, vertikalaus seisminio poveikio, sukimo stiprinimo ir P-delta efektų. Vėjo apkrovos dar nepadarytos.
:::

## Nubraižykite elementus

Betoninius elementus braižykite kaip stačiakampius: {{ui:Plokštė}} profilis, pavyzdžiui `PL400x400` kolonai ir `PL300x600` sijai, suteikia pjūvį. Kolonos ir sijos dedamos kaip ir bet kuris kitas elementas.

## Nustatykite pjūvius

Blokas {{ui:Betoniniai elementai}} išvardija visus pjūvius, kuriuos naudoja elementai. Ant tų pjūvių, kurie yra betoniniai, paspauskite {{ui:Nustatyti kaip betoną…}}. DetailCraft nuskaito plotį **b** (išilgai elemento savo y ašies) ir gylį **h** (išilgai z) iš nubraižyto profilio, tada klausia:

- **dangos** iki strypų centro ir **viršutinių**, **apatinių** bei **šoninių** strypų (kiek ir kokio skersmens) sijai arba **kolonos karkaso** (strypai išilgai b ir išilgai h, koks skersmuo, spiraliniai surišimai) kolonai;
- **surišimų**: kilpų skaičius, skersmuo ir žingsnis;
- ką elementas **atlieka**: siją, koloną, arba nusprendžiama pagal jėgas (vertikalus elementas arba toks, kuris perduoda daugiau nei 0.10 f′c Ag, yra kolona).

Virš jų nustatykite f′c, strypų takumo ribą fy ir surišimų takumo ribą fyt (skaičiuojant šlytį – ne daugiau kaip 420 MPa), K, ir ar rėmas yra stumiamas (sway) ar nestumiamas (non-sway). Pjūvis, nustatytas kaip betonas, analizuojamas kaip betonas: E = 4700 √f′c, 2400 kg/m³, ir pagal numatytuosius nustatymus su **įtrūkusiais pjūviais** (kolonoms 0.70 Ig, sijoms 0.35 Ig; ACI 318-19 lentelė 6.6.3.1.1(a)). Norėdami tai išjungti, pasirinkite {{ui:Bendrieji pjūviai}}.

## Sudarykite derinius ir patikrinkite

Suteikite apkrovų atvejams jų tipą, tada {{ui:Sudaryti derinius}}: ACI 318-19 naudoja ASCE 7 stiprumo derinius (§5.3.1). Paspauskite {{ui:Tikrinti betoną}}, ir kiekvienas elementas gauna panaudojimo koeficientą, nuspalvintą modelyje kaip plieno patikros: lenkimas ir minimalus plienas (22.2, 9.6.1.2), tempimo valdoma deformacija (9.3.3.1), šlytis su surišimais (22.5, 9.6.3), surišimų žingsnis ir ašinė jėga su momentu kolonoms (22.4, su Bresler metodu dvikryptiam lenkimui). Elementas, kurio nubraižytas pjūvis skiriasi nuo jūsų įvesto b × h, rodomas kaip *iš dalies patikrintas*, taip pat ir liekna kolona ar sukimas virš ribos: jų neprojektuojama.

Elementai, viršijantys savo talpą, išvardijami {{ui:Problemos}}; priimkite vieną su priežastimi arba pataisykite pjūvį.

## Perdangos ir seisminės apkrovos

Perdanga – aukštis, kuriame rėmas sujungtas standžia plokšte (**standi diafragma**). Bloke {{ui:Seisminės apkrovos}} paspauskite {{ui:Rasti perdangas}}: jis paima aukščius, kuriuose susitinka dvi ar daugiau sijų. Tada kiekvienai perdangai suteikite jos **seisminį svorį**, įvestą arba nuskaitytą: {{ui:Paimti svorius iš atvejų}} sudeda vertikalias apkrovas atvejų, kuriems nurodytas koeficientas (nuolatinis atvejis yra 1; pridėkite 0.25 sandėliavimo kintamam atvejui arba sniegui ant plokščio stogo, kaip reikalauja ASCE 7-22 12.7.2). Kiekvieno mazgo vertikali apkrova tenka perdangai, esančiai jam ar virš jo, todėl kolona tarp dviejų perdangų po pusę savo svorio atiduoda kiekvienai.

Įveskite projektines reikšmes: SDS, SD1, S1, R, Ie, Cd, TL, konstrukcinę sistemą (periodui) ir rizikos kategoriją. {{ui:Sudaryti seisminius atvejus}} tada apskaičiuoja periodą pagal pastato aukštį (12.8.2.1), bazinę jėgą V = Cs W (12.8.1), paskirsto ją per perdangas (12.8.3) ir įrašo keturis apkrovos atvejus, X ir Y kryptimis, su 5 % atsitiktiniu sukimu kiekviena kryptimi (12.8.4.2). Aukštų jėgos ir aukšto poslinkio patikrinimas (12.8.6, lentelė 12.12-1, poslinkis Cd δxe / Ie prieš 0.020 hsx) atsiranda po paleidimo; poslinkis virš ribos taip pat yra problema. Dar kartą paspauskite {{ui:Sudaryti derinius}}, kad seisminiai atvejai patektų į derinius.

**Periodas iš analizės.** Apytikslis periodas Ta gaunamas iš pastato aukščio. Kai paleidžiate analizę su seisminiais atvejais, {{ui:Paimti periodą iš analizės}} nuskaito, kiek kiekviena perdanga pajudėjo veikiama jėgų, ir apskaičiuoja periodą Reilėjaus metodu, T = 2π √(Σ w δ² / (g Σ f δ)), atskirai X ir Y kryptimis; seisminiai atvejai sudaromi iš naujo su juo. Naudojamas periodas niekada nėra didesnis už Cu·Ta (ASCE 7-22 12.8.2), todėl minkštas modelis negali nuleisti bazinės jėgos žemiau tos ribos. Paimkite periodą iš naujo po antro paleidimo: jis nusistovi per vieną ar du žingsnius. Nuimkite žymę nuo {{ui:Periodas iš analizės}}, kad grįžtumėte prie Ta.

**Liekni kolonos (ACI 318-19 6.6.4.5).** Rėmui, kurį pažymėjote kaip nestumiamą (non-sway), kolona, kurios k·ℓu/r viršija 34 + 12·M1/M2 (ne daugiau kaip 40), projektuojama pagal padidintą momentą Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)², su (EI)eff = 0.4 Ec Ig / (1 + βdns), ir mažiausias momentas Pu (15 + 0.03 h). βdns (pradžioje 0.6) yra tiesiogiai veikiančios ašinės apkrovos dalis, kuri išlieka ilgai: įveskite savo. Kolona, kurios Pu pasiekia 0.75 Pc, nepraeina savo patikros. Ataskaitoje išvardijami kiekvienos lieknos kolonos skaičiai. **Stumiamame** rėme liekna kolona vis dar „iš dalies patikrinta“: jos padidinimui reikia antros eilės analizės, kurios nėra.

**Perdangos.** Kai modelyje yra plokščių, blokas {{ui:Perdangos armatūra}} ima plokščių momentus iš kiekvieno stiprumo derinio ir pagal Wood–Armer taisyklę (lenkimas ir sukimas kartu) apskaičiuoja plieno kiekį, reikalingą kiekvienam sluoksniui metre: apatinis ir viršutinis, x ir y kryptimis. Įvedate storį, dangą ir strypus; lentelėje rodoma reikalinga ir turima armatūra bei vienkryptė šlytis prieš φVc, o sluoksnis, kuris neatitinka, yra problema su savo punktu. Įlinkis, įspaudimas (punching) ties kolonomis ir apvadiniai strypai angose nenagrinėjami, o momentas virš atramos su keturių mazgų plokštėmis konverguoja lėtai.

Kiekviena jūsų įrašyta perdanga analizėje tampa standžia diafragma: jos sijos nepatiria ašinės jėgos dėl perdangos judėjimo. CraftScript eksportas nepritaikytas modeliui su perdangomis.

## Ataskaita

{{ui:Ataskaita (PDF)}} ir {{ui:Ataskaita (CSV)}} papildomos betono lentelėmis (prielaidos, panaudojimas pagal elementą, kiekvienas punktas), seisminiais parametrais ir bazine jėga, jėgomis perdangose bei poslinkių lentele.
