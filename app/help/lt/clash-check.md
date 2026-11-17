---
title: Tikrinti susidūrimus
summary: Raskite elementus, plokštes ir pamatus, kurie įsiskverbia vienas į kitą, nepaisydami dalių, kurias jungtis tyčia sujungia, ir pereikite prie kiekvieno susidūrimo.
keywords: susidūrimas, susidūrimų tikrinimas, kolizija, įsiskverbimas, persidengimas, sankirta, kietas susidūrimas, koordinavimas, modelio tikrinimas
from: 04d72d3b
---

Atidarykite skirtuką {{ui:Susidūrimai}} po vaizdu ir pasirinkite {{ui:Tikrinti dabar}}. DetailCraft tikrina kiekvieną dalių porą rodomose fazėse: plienas su plienu ir plienas su pamatu. Skirtuke išvardijamas kiekvienas susidūrimas, giliausias pirmas, su:

- dviem dalimis pagal detalės žymą (arba pamato žymą) ir profilį;
- **Persidengimas (mm)**: kiek taškas vienoje dalyje yra kitos viduje, iki artimiausio paviršiaus;
- **Arti**: tinklelio sankirta ir lygis, kuriame jis yra, arba jo koordinatės;
- {{ui:Rodyti}}: pažymi abi dalis ir nukreipia vietą į vaizdo vidurį.

Skirtuko pavadinime rodoma, kiek susidūrimų rado paskutinis tikrinimas. Tikrinimas savaime nevyksta: pakeitus modelį, sąrašas tai praneša, o {{ui:Tikrinti dabar}} paleidžia tikrinimą iš naujo.

## Kas nėra susidūrimas

- Dalys, kurios tik liečiasi: plokštė prie flanšo, pagrindo plokštė ant pamato, dvi sijos galas į galą. **Leistinas nuokrypis (mm)** nustato, kiek dvi dalys gali įsiskverbti viena į kitą, kol tai bus laikoma susidūrimu (pradžioje 1 mm; iki 50).
- Dalys, kurias jungtis jungia: galinė plokštė su jos sija ir su kolonos flanšu, prie kurio ji prisukta; sija ir kolona tos jungties; pagrindo plokštė su kolona; sujungimo plokštės su abiem dalimis; įstrižainė su jungiamąja plokšte (vamzdžio įpjova modelyje neišpjaunama). Jungtis reiškia, kad jos turi susiliesti.
- Pagrindo plokštės šlyties atrama pamate po ja (ji guli skiedinio lizde).
- Varžtai ir pamatiniai strypai (jie eina per skyles) bei armatūra.
- Dalys paslėptose fazėse. Žr. [Fazės](topic:phases).

Įstrižainė ar sija, kuri įsiremia į koloną be jungties tarp jų, **yra** susidūrimas: tai jungčiai vis dar reikia jungties. Pavyzdinio rėmo įstrižainė tai parodo: ji neturi jungiamosios plokštės. Pažymėkite ją ir pasirinkite {{ui:Jungiamoji plokštė}} ([Įstrižainių jungiamosios plokštės](topic:brace-gussets)) – ir jos susidūrimai dings.

## Verta žinoti

- Persidengimas matuoja gylį į medžiagą, todėl elementas, įsiskverbęs į ploną kolonos sienelę ar flanšą, rodo tik kelis milimetrus, net jei eina toli.
- Dalys tikrinamos tokios, kokios yra iškirptos: įpjovos (copes) ir sijos nukirtimai prie galinių plokščių įskaičiuojami. Skylės neįskaičiuojamos.
