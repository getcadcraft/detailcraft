---
title: Trikčių šalinimas
summary: Ką reiškia DetailCraft pranešimai ir ką daryti – nuo trūkstamo 3D vaizdo iki jungčių, kurių nepavyksta sukurti.
keywords: problema, klaida, neveikia, pagalba, ištaisyti, pranešimas, atmesta, webgl, tuščias, įspėjimas, negalima, gedimas
from: f8c3b2b1
---

Daugumos atmetimų paaiškinimas rodomas būsenos juostoje ekrano apačioje arba skirtuke {{ui:Problemos}}. Pirmiausia perskaitykite juos. Toliau pateikti pranešimai cituojami taip, kaip juos rodo DetailCraft.

## Trūksta 3D vaizdo

**„Ši naršyklė negalėjo paleisti 3D grafikos (WebGL). Modelis, ataskaitos ir eksportas vis dar veikia.“**

Naršyklė negalėjo paleisti WebGL – 3D grafikos, kuria piešia DetailCraft.

1. Atnaujinkite naršyklę į naujausią versiją.
2. Įjunkite aparatinį spartinimą ir paleiskite naršyklę iš naujo (žr. žemiau).
3. Atnaujinkite grafikos tvarkyklę arba išbandykite kitą naršyklę. Nuotoliniuose darbalaukiuose ir virtualiose mašinose WebGL dažnai nėra.
4. Tuo metu galite toliau dirbti: įdėti elementus forma {{ui:Pridėti pagal ašis}}, skaityti ataskaitas ir eksportuoti. Tik spustelėjimui vaizde reikia WebGL.

:::chromium
Norėdami įjungti aparatinį spartinimą, atidarykite **Nustatymai, Sistema** ir įjunkite **Naudoti grafikos spartinimą, kai galima**, tada paleiskite iš naujo.
:::

:::firefox
Norėdami įjungti aparatinį spartinimą, atidarykite **Nustatymai, Bendra, Našumas**, panaikinkite žymėjimą **Naudoti rekomenduojamus našumo nustatymus** ir pažymėkite **Naudoti aparatinį spartinimą, kai galima**. Iš naujo paleiskite Firefox.
:::

:::safari
Safari WebGL numatytai įjungtas. Jei vaizdas vis dar nepasileidžia, atnaujinkite macOS ir patikrinkite, ar nieko neblokuoja plėtinys.
:::

Daugiau skyriuje [Naršyklės ir kompiuteriai](common:browsers).

## Spustelėjimas vaizde nieko nedaro

- **Netoli spustelėjimo nėra susikirtimo.** Įdėjimo įrankiai prisitraukia tik prie tinklelio susikirtimų. Spustelėjimas toli nuo visų taškų nieko nedaro. Priartinkite, kol taškas nušvis.
- **Įrankis yra {{ui:Pasirinkti}}, o spustelėjote tuščią vietą.** Tai panaikina pasirinkimą.
- **Vilkote.** Paspaudimas ir atleidimas, nutolę daugiau nei keliais pikseliais, yra vilkimas: jis pasuka arba slenka vaizdą.
- **Dalis nukirsta.** Vaizduose {{ui:Planas}} ir {{ui:Fasadas}} plienas už pjūvio paslėptas ir negali būti spustelėtas. Perjunkite į {{ui:3D}}.
- **Susikirtimas yra neteisingame lygyje.** {{ui:3D}} vaizde susikirtimai keliuose lygiuose ekrane gali sutapti; spustelėjimas paima artimiausią. Naudokite {{ui:Planas}} arba {{ui:Fasadas}}.

## Įdėjimo pranešimai

| Pranešimas | Ką daryti |
|---|---|
| „Virš lygio 2 nėra lygio, iki kurio kolona galėtų pasiekti. Pirmiausia pridėkite lygį.“ | Pridėkite lygį skyriuje {{ui:Lygiai}} arba spustelėkite žemesnį lygį |
| „Pasirinkite kitą susikirtimą kitam galui.“ | Spustelėjote tą patį tašką du kartus |
| „Abu galai yra tas pats taškas.“ | Skyriuje {{ui:Pridėti pagal ašis}} pasirinkimai „Nuo“ ir „Iki“ yra vienodi |
| „Pridėkite tinklelio linijų kairėje pusėje, kad įdėtumėte elementus.“ | Modelyje nėra tinklelio linijų viena kryptimi |
| „Nežinomas profilis „…““ | Profilio nėra kataloge ar modelio pasirinktiniuose profiliuose. Pasirinkite iš sąrašo |
| „Įveskite skaičių.“ | Skaičiaus lauke nieko nėra arba įrašytas tekstas |

## Jungčių nepavyksta sukurti

### „Ši sija nesibaigia ant kolonos linijos.“

Galinėms plokštėms reikia, kad sijos galas būtų tiksliai ant vertikalios kolonos linijos tarp jos apačios ir viršaus (iki 1 mm tikslumu). Patikrinkite sijos {{ui:Galai (x, y, z mm)}} ir kolonos padėtį.

### „Ši sija susiliečia su kolonos sienele arba kampu“

Arba skirtuke {{ui:Problemos}}: „Sijos, prijungtos prie kolonos sienelės, dar nekuriamos: pasukite koloną 90° arba naudokite kitą jungtį.“

Sija prijungiama prie kolonos sienelės. Pasirinkite koloną, nustatykite {{ui:Pasukimas (°)}} į 90 ir bandykite dar kartą. Įstrižos jungtys nekuriamos.

### „Galinės plokštės kuriamos tik horizontalioms sijoms (ši sija nuožulni).“

Abu sijos galai turi būti tame pačiame aukštyje.

### „Galinėms plokštėms sija turi būti stati (pasukimas 0).“

Nustatykite sijos {{ui:Pasukimas (°)}} vėl į 0.

### „Galinėms plokštėms reikia I formos sijos.“ / „Galinėms plokštėms reikia I formos kolonos.“

Galinės plokštės tinka tik I formos profiliams (W, IPE, HEA, HEB arba pasirinktinis I).

### „Sijos galas nebėra ant kolonos linijos.“

Po jungties įdėjimo perkėlėte sijos ar kolonos padėtį. Perkelkite atgal arba ištrinkite jungtį.

### „Jungtys šį elementą nupjovė iki nieko.“

Jungtys abiejuose galuose nupjauna elementą giliau, nei jo ilgis, pavyzdžiui labai trumpa sija tarp dviejų gilių kolonų. Patikrinkite elemento galus ir plokštės storį.

### „Kitų panašių jungčių … be jungties nėra.“

{{ui:Panašūs}} kopijuoja tik į jungtis su ta pačia sijos profiliu, kolonos profiliu ir jungties rūšimi (sija į flanšą), kurios dar neturi jungties.

### „Abu galai jau turi jungtis.“ / „Ši kolona jau turi pamato plokštę.“

Pasirinkite esamą jungtį, kad ją pakeistumėte, arba pirmiausia ją ištrinkite.

## Įspėjimai skirtuke Problemos

Įspėjimai neuždraudžia jungties ar pamato kurti; jie tik prašo ją patikrinti. Krašto ir tarpų įspėjimai naudoja EN 1993-1-8 lentelės 3.3 minimalias reikšmes (kraštas 1.2 × skylė, žingsnis 2.2 × skylė, skersinis atstumas 2.4 × skylė). Jei jūsų projekte taikomos kitos taisyklės, įspėjimas gali būti netaikomas; DetailCraft jungčių neprojektuoja.

Pranešimas „skylė yra už elemento galo“ reiškia, kad skylės x yra mažesnis nei 0 arba didesnis nei pjovimo ilgis. Atminkite, kad x matuojamas nuo pjovimo pradžios, po to, kai jungtys elementą nupjovė.

## Pamato pakeitimai atmetami

| Pranešimas | Ką daryti |
|---|---|
| „Apsauginis sluoksnis nepalieka vietos armatūros strypams šiame pamate.“ | Padarykite pamatą didesnį arba apsauginį sluoksnį mažesnį |
| „Pamatas per seklus dviem armatūros strypų sluoksniams po apsauginiu sluoksniu.“ | Padarykite jį gilesnį arba sumažinkite apsauginį sluoksnį |
| „Laukiantieji strypai netelpa pamate su 75 mm apsauginiu sluoksniu.“ | Mažiau laukiančiųjų strypų, tankesnis žingsnis arba didesnis pamatas |
| „Strypų žingsnis turi būti 50–1000 mm.“ | Įveskite žingsnį šiame intervale |
| „Ilgis turi būti 300–50000 mm.“ | Pamato matmenys turi ribas: ilgis ir plotis nuo 300 iki 50000, gylis nuo 150 iki 10000 |

## Tinklelis ir lygiai atmetami

| Pranešimas | Ką daryti |
|---|---|
| „Numeruotam tinkleliui nurodykite vieną žingsnį tarp kiekvienos linijų poros (4).“ | Suskaičiuokite tarpus: penkioms linijoms reikia keturių žingsnių |
| „Raidėmis žymimo tinklelio žingsniai turi būti teigiami milimetrai.“ | Be nulių, neigiamų reikšmių ar teksto |
| „Numeruotam tinkleliui tinklelio žymos turi skirtis.“ | Dvi linijos turi tą pačią žymą |
| „Daugiausia 60 tinklelio linijų kiekvienai krypčiai.“ | Padalykite modelį |
| „Palikite bent vieną lygį.“ | Pašalinote visas lygių eilutes |
| „Kiekvienam lygiui reikia pavadinimo.“ / „Du lygiai pavadinti „…“.“ | Suteikite kiekvienam lygiui skirtingą pavadinimą |

## Failo atidarymas nepavyksta

| Pranešimas | Priežastis |
|---|---|
| „DetailCraft atidaro savo modelius (.detailcraft.json). IFC importavimas dar neįdiegtas.“ | Failas nėra `.json` failas |
| „Tai nėra DetailCraft modelis (ne JSON).“ | Failas pažeistas arba tai kitas JSON failas |
| „Tai nėra DetailCraft modelis.“ | JSON failas iš kitos programos |
| „Šis modelis įrašytas naujesne DetailCraft versija (2 formatas).“ | Atidarykite jį naujesne DetailCraft versija, kuri jį įrašė |
| „Šis failas per didelis, kad būtų DetailCraft modelis.“ | Daugiau nei 50 MB |

Kai failas atsidaro su įspėjimais, pavyzdžiui „2 elementai buvo netinkami ir praleisti.“, likusi modelio dalis yra tinkama. Neįrašykite virš originalo, kol nepatikrinote, kas buvo praleista.

## Eksportas

| Pranešimas | Priežastis |
|---|---|
| „Dar nėra ko eksportuoti.“ | {{ui:IFC}} su tuščiu modeliu |
| „Nėra I formos ar plokščių detalių NC failams rašyti.“ | Modelyje yra tik kanalai, kampuotieji profiliai ar vamzdžiai |
| „Neįrašyta (kol kas tik I formos ir plokštės): …“ | Šios žymos nėra I formos ar plokštės; kitos įrašytos |
| „Nėra pamatų, todėl nėra strypų, kuriuos reikėtų suplanuoti.“ | {{ui:Lenkimas}} be pamatų |
| … simbolis (-iai) už PDF šrifto ribų spausdinamas kaip „?“. | Modelio pavadinime ar klasėje yra simbolių, kurių nėra PDF šrifte |

{{ui:Dirbtuvių brėžinys}} išjungtas: modelyje dar nėra detalių.

## Atsisiuntimai nerodomi

Kiekvienas įrašymas ir eksportas yra naršyklės atsisiuntimas. Patikrinkite naršyklės atsisiuntimų sąrašą. Jei naršyklė prieš atsisiuntimą klausia dėl kelių failų arba blokuoja atsisiuntimus iš šios svetainės, leiskite juos. Safari patikrinkite atsisiuntimų mygtuką įrankių juostoje.

## Klavišai nieko nedaro

- Žymeklis yra teksto ar skaičių lauke: įrankių klavišai ir {{key:Delete}} ten ignoruojami, kad galėtumėte rašyti. Paspauskite {{key:Tab}} arba spustelėkite vaizdą.
- Atidarytas dialogo langas: pirmiausia uždarykite jį.
- Klaviatūrą valdo naršyklė (pavyzdžiui, adreso juosta): spustelėkite DetailCraft viduje.
- {{key:Ctrl+Shift+F}} naudoja Control net ir Mac kompiuteryje.

## Problemos neprisijungus

Mygtukas {{ui:Įrašyti neprisijungus}} programos juostoje rodo, kokioje būsenoje yra kopija neprisijungus. Kaip veikia įrašymas: [Darbas neprisijungus](common:offline).

| Mygtukas rodo | Ką tai reiškia | Ką daryti |
|---|---|---|
| {{ui:Įrašyti neprisijungus}} | Šioje naršyklėje kopijos neprisijungus dar nėra | Pasirinkite, kai esate prisijungę |
| Įrašoma 5 iš 20 | Įrašymas vyksta | Palaukite, kol pasirodys {{ui:Paruošta neprisijungus}}; palikite skirtuką atidarytą |
| {{ui:Paruošta neprisijungus}} | DetailCraft, jo 3D vaizdas, visi eksportai ir ši pagalba veikia be ryšio | Nieko. Spustelėkite jį, kad pasirinktumėte {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} arba {{ui:Pašalinti kopiją neprisijungus}} |
| {{ui:Nepavyko įrašyti}} | Kai kurie failai neatsisiųsti | Patikrinkite ryšį ir spustelėkite, kad bandytumėte dar kartą |
| {{ui:Naudojimas neprisijungus negalimas}} | Šis langas negali saugoti kopijos neprisijungus: privatūs langai ir kai kurie valdomi kompiuteriai tai blokuoja | Naudokite įprastą langą arba dirbkite prisijungę |

Jei esate neprisijungę, o mygtukas nerodo {{ui:Paruošta neprisijungus}}, neperkraukite ir neuždarykite skirtuko: tai, kas jau įkelta, tebeveikia. Įrašykite modelį su {{key:Mod+S}} ir palaukite, kol vėl būsite prisijungę.

## Neįrašyti darbai

Jei naršyklė klausia, ar palikti puslapį, DetailCraft turi neįrašytų pakeitimų. Pasirinkite likti, tada paspauskite {{key:Mod+S}}. Uždarius skirtuką DetailCraft negali atkurti modelio.

## Vis dar nepavyksta

Užsirašykite, ką darėte, ir tikslų pranešimą, tada parašykite mums per [pagalbos puslapį](https://getcadcraft.com/support).
