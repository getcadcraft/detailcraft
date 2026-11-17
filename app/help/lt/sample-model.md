---
title: Išnagrinėkite pavyzdinį rėmą
summary: Atidarykite įmontuotą dviejų laukų rėmą ir naudokite jį, kad sužinotumėte, ką DetailCraft sukuria – nuo elementų žymių iki NC failų.
keywords: pavyzdys, pavyzdinis, demonstracija, rėmas, mokytis, ekskursija, bandyti
from: 5c5944dd
---

Pavyzdinis rėmas yra mažas, baigtas modelis: kiekvienos rūšies daiktas, kurį DetailCraft sukuria, pasirodo bent kartą. Tai greičiausias būdas išmokti programą ir patikrinti eksportą prieš jį naudojant.

## Atidarykite

1. Pasirinkite {{ui:Pavyzdys}} grupėje {{ui:Failas}}.
2. Jei dabartiniame modelyje yra neįrašytų pakeitimų, pasirinkite {{ui:Pirmiausia įrašyti}} arba {{ui:Atmesti pakeitimus}}.
3. Būsenos juostoje rašoma „Pavyzdinis rėmas: 6 kolonos su pagrindo plokštėmis, 4 sijos su galinėmis plokštėmis, įstrižainė, 7 pamatai su armatūra.“

Pavyzdys atsidaro kaip naujas modelis, pavadintas „Pavyzdinis rėmas“. Jis nieko kito nekeičia ir neturi ko anuliuoti.

## Kas jame yra

- **Tinkleliai** 1, 2, 3 po 6000 mm ir A, B po 7000 mm. **Lygiai**: 1 lygis ties 0, 2 lygis ties 4000.
- **Šešios kolonos**, W12x50, nuo 1 lygio iki 2 lygio kiekvienoje sankirtoje, kiekviena ant 25 mm pagrindo plokštės su keturiais inkariniais strypais.
- **Keturios sijos**, W16x26, 2 lygyje išilgai tinklelio linijų A ir B, plieno viršus lygyje, su lygiai priveržtomis galinėmis plokštėmis abiejuose galuose (iš viso aštuonios).
- **Viena įstrižainė**, HSS4x4x1/4, nuo A/1 1 lygyje iki A/2 2 lygyje.
- **Šeši plokšti pamatai**, 2000 x 2000 x 600, po vieną kiekvienai kolonai, su kabliukais apatiniu tinklu abiem kryptimis.
- **Dar vienas pamatas** šalia rėmo, 2400 x 1800 x 600, su šešiais kabliukais išsikišančiais strypais betoniniam stulpui.

## Ką išbandyti

1. Spustelėkite sijos. Perskaitykite jos {{ui:Detalės žymė}}, {{ui:Surinkimas}}, {{ui:Pjovimo ilgis}} ir {{ui:Atkirpimas}}: pjovimo ilgis trumpesnis nei 6000 mm tinklelio žingsnis, nes kiekviena galinė plokštė nukerpa siją atgal per pusę kolonos gylio plius plokštės storį.
2. Spustelėkite koloną. Skiltyje {{ui:Skylės}} išvardytos skylės, kurias galinės plokštės padarė jos flanše („8 skylės iš jungčių“; vidurinėse kolonose yra 16, po vieną rinkinį kiekviename flanše).
3. Kairiajame sąraše {{ui:Elementų žymenys}} pamatykite, kad visos keturios sijos turi vieną žymę: tai tas pats plieno gabalas. Kampinės kolonos taip pat turi vieną žymę, nors jų skylės nukreiptos priešingai, nes kolona, apversta galais, yra tas pats gabalas. Vidurinės kolonos, turinčios skyles abiejuose flanšuose, gauna kitą žymę.
4. Spustelėkite galinę plokštę (arba vieną iš jos varžtų). Skydelis {{ui:Savybės}} rodo plokštės, varžto ir suvirinimo parametrus, jos sukuriamus varžtus (su ilgiu, apskaičiuotu pagal sukibimą) ir visus kraštinio atstumo įspėjimus.
5. Atidarykite skirtuką {{ui:Medžiagų sąrašas}}. Detalės, surinkimai (sija su dviem galinėmis plokštėmis yra vienas surinkimas), varžtai ir inkariniai strypai išvardyti su svoriais. Turėtumėte matyti šešias detalių žymes: c1 (dvi vidurinės kolonos) ir c2 (keturios kampinės kolonos), abi W12x50 po 3975 mm; b1, keturios W16x26 sijos po 5650 mm; br1, įstrižainė; p1, aštuonios PL20x180 galinės plokštės; ir p2, šešios PL25x400 pagrindo plokštės. Tvirtinimo detalės – 64 varžtai 20 x 70 A325 ir 24 inkariniai strypai 20 x 575.
6. Atidarykite skirtuką {{ui:Lenkimo žiniaraštis}}. Šeši vienodi pamatai dalijasi strypų žymėmis; stulpo pamatas prideda savąją.
7. Spustelėkite įstrižainę ir pažvelkite į grupę {{ui:Išvestis}}: {{ui:Dirbtuvių brėžinys}} yra pilkas, nes dirbtuvių brėžiniai kol kas apima tik dvitavrius profilius ir plokštes.
8. Pasirinkite {{ui:NC failai}}. ZIP archyve yra failas kiekvienai dvitavrio profilio ir plokštės žymei; būsenos juostoje įstrižainės žymė nurodoma kaip neįrašyta.
9. Pasirinkite {{ui:IFC}} ir atidarykite failą bet kurioje IFC peržiūros programoje, kad patikrintumėte, kaip ją skaito kita jūsų programinė įranga.

## Naudokite kaip atskaitos tašką

Pavyzdys yra įprastas modelis. Pakeiskite jį, tada pervadinkite lauke {{ui:Pavadinimas}} ir įrašykite su nauju pavadinimu naudodami {{key:Mod+S}}.
