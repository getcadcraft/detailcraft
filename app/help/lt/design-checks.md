---
title: Plieninių elementų tikrinimas pagal projektavimo normą
summary: Sudarykite apkrovų derinius pagal ASCE 7 arba EN 1990, patikrinkite kiekvieną plieninį dvitėjį profilį pagal AISC 360 arba EN 1993-1-1 ir matykite, kiek savo atsparumo kiekvienas elementas panaudoja. Pagalba, kol inžinierius jo nepatikrina.
keywords: projektavimas, projektavimo patikrinimas, plieno projektavimas, panaudojimas, atsparumas, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokodas, apkrovų deriniai, LRFD, Nacionalinis priedas, lenkimasis, šoninis-sukamasis lenkimasis, šlytis, lenkimas, sąveika, konstrukcinis, studentai, inžinierius
from: 66b6d545
---

Atlikę analizę, skirtuko {{ui:Analizė}} skyrius {{ui:Projektavimo patikrinimai}} paverčia jos jėgas kiekvieno plieninio elemento vertinimu: kiek atsparumo naudoja blogiausias derinys.

:::warning
Tai **pagalba, kol inžinierius jos nepatikrina**. Ji naudoja tik pirmosios eilės jėgas (be antrosios eilės poveikių), netikrina sukimo, plonų (4 klasės) dalių, lankstinių profilių ir jungčių, ir tai, ko negali patikrinti, praleidžia ir apie tai praneša. Ji nepakeičia inžinieriaus patikrinimo, o jos rezultatai nėra patvirtinimas.
:::

## Pasirinkite normą

{{ui:Projektavimo norma}} įrašoma kartu su modeliu; pasirinkite vieną iš dviejų šeimų:

- **ASCE 7 + AISC 360** (JAV, LRFD): ASCE 7-16 §2.3.1 apkrovų deriniai ir ANSI/AISC 360-16 elementų tikrinimai.
- **EN 1990 + EN 1993-1-1** (Eurokodas): EN 1990 deriniai (lygt. 6.10 arba 6.10a ir 6.10b) ir EN 1993-1-1 elementų tikrinimai.

Tada pasirinkite {{ui:Plieno markė}} (A992, A36 ir kitos; arba S235–S450, kai tekėjimo riba viršija 40 mm).

## Sudarykite derinius

Apkrovos atvejų sąraše kiekvienam atvejui nurodykite jo **rūšį** (nuolatinė, kintama, stogo kintama, sniego, vėjo, seisminė), tada spauskite {{ui:Sudaryti derinius}}. DetailCraft parašo normos derinius kaip jūsų atvejų derinius: visus stiprumo derinius, kuriuos norma nurodo jūsų turimoms rūšims, ir tarnavimo derinius įlinkiui. Patys įvesti deriniai lieka; jie su norma netikrinami. Atvejis, kurio rūšis yra {{ui:Kita}}, nekombinuojamas.

Eurokodui koeficientai yra EN 1990 priedo A1 **rekomenduojamos reikšmės** (γG 1,35, γQ 1,5, įvestinių, sniego ir vėjo apkrovų ψ reikšmės) ir EN 1993-1-1 (γM0 = γM1 = 1,0). Jūsų šalies nacionalinis priedas kai kuriuos iš jų keičia: atverkite {{ui:Nacionalinio priedo reikšmės}}, įveskite savo ir vėl sudarykite derinius. Jos įrašomos kartu su modeliu.

## Patikrinkite elementus

Spauskite {{ui:Patikrinti elementus}}. Kiekvienam plieniniam dvitėjam profiliui lentelėje rodomas jo **panaudojimas** (poreikis, padalytas iš atsparumo: 100 % yra riba), ar jis atitinka reikalavimus, kuris tikrinimas lemia ir kuris derinys. Elementai modelyje nudažomi: mėlynas – mažai naudojamas, žalias – maždaug pusė, ochros – arti ribos, raudonas – viršija, pilkas – netikrintas. Spustelėkite elemento pavadinimą, kad jį pasirinktumėte.

Tikrinimai, su kiekvieną atitinkančia norma nurodyta klauzule (jos išvardytos ataskaitoje):

- tempimas, gniuždymas su lenkiamuoju ir sukamuoju lenkimusi, lenkimas abiem ašimis su šoniniu-sukamuoju lenkimusi, šlytis ir lenkimas kartu su ašine jėga;
- tarnavimo derinių įlinkis, palyginti su jūsų nustatyta {{ui:Įlinkio riba}} (pradžioje L/360; tai projekto, o ne normos reikšmė).

**Ilgiai.** Suvaržytas ilgis yra kiekvieno analizuoto gabalo dalis (1 = nesuvaržytas); suvaržymai laikomi lygiai išdėstyti nuo pradžios. K koeficientai dauginami iš ilgio lenkimo tikrinimui. Vieta, kurioje prisijungia kitas elementas, padalija elementą, ir kiekvienas gabalas tikrinamas pagal savo ilgį, laikant, kad jis ten suvaržytas.

## Kas netikrinama

Elementas rodomas **netikrinamas**, su priežastimi, vietoj skaičiaus, kai jo skerspjūvis nėra dvitėjis profilis, kurį tikrinimai žino (vamzdžiai, kampuočiai, kanalai), kai tai pasirinktinė (lankstinė) forma arba kai lenkiant dalis yra plona (AISC) ar 4 klasės (Eurokodas). Plona dalis gniuždant išjungia gniuždymo tikrinimus, o elementas rodomas kaip *atitinka, iš dalies patikrinta*. Taip pat neįgyvendinta: antrosios eilės poveikiai, sukimas, šlyties stabilumo netekimas kartu su lenkimu, jungtys, nuovargis, gaisras ir seisminis detalizavimas. Betoniniams elementams ir seisminėms apkrovoms yra [atskiri tikrinimai](topic:concrete-and-seismic). Žr. [Dar neįgyvendinta](topic:not-built-yet).

## Ataskaita

{{ui:Ataskaita (PDF)}} ir {{ui:Ataskaita (CSV)}} papildomos projektavimo lentelėmis, kai jau atlikote tikrinimą: normų redakcijas, parametrus ir nacionalinio priedo reikšmes, panaudojimą pagal elementą, kiekvieną panaudotą klauzulę ir kiekvienam elementui – poreikį, atsparumą ir kiekvieno tikrinimo panaudojimą lemiančiame derinyje.
