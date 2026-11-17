---
title: Patikrinkite žymes ir medžiagų sąrašą
summary: Skaitykite kiekvienam gabalui DetailCraft suteiktas detalių ir surinkimų žymes, patikrinkite medžiagų sąrašą ir atsisiųskite jį kaip CSV.
keywords: žymės, numeravimas, detalės žyma, surinkimo žyma, gabalo žyma, bom, medžiagų sąrašas, svoriai, varžtų sąrašas, csv, numeravimas
from: caa2ee80
---

DetailCraft pats žymi modelį. Numeravimo komandos nėra ir nieko paleisti nereikia: po kiekvieno pakeitimo jis nustato, kurios detalės yra tas pats plieno gabalas, ir suteikia joms vieną žymę.

## Kur rodomos žymės

- {{ui:Elementų žymenys}} sąrašas skydelyje {{ui:Modelis}}: kiekviena žyma su profiliu, ilgiu ir kiekiu. Spustelėkite vieną, kad pasirinktumėte pirmą detalę su ta žyma.
- {{ui:Savybės}} skydelis pasirinkto elemento (ir **Elementų žymenys** sąrašas kairiajame skydelyje): {{ui:Detalės žyma}} ir {{ui:Surinkimas}}. Skydelio antraštėje taip pat rodoma žyma, pavyzdžiui „Sija b1“.
- {{ui:Medžiagų sąrašas}} skirtukas, CSV, NC failų pavadinimai, dirbtuvių brėžiniai ir IFC eksportas (kaip kiekvieno elemento žyma).

## Kaip žymimos detalės

- **Detalių žymos:** c – kolonoms, b – sijoms, br – įstrižainėms, st – laiptų stringeriams, p – plokštėms (įskaitant galines ir pagrindo plokštes). Tada numeris: c1, c2, b1, p1 … Kai detalės yra daugiau nei vienoje fazėje, pirmiausia rašomas fazės numeris, pavyzdžiui 2-b1.
- **Surinkimo žymos:** C, B, BR arba P. Surinkimas yra pagrindinis elementas ir prie jo suvirintos plokštės, pavyzdžiui sija su dviem galinėmis plokštėmis arba kolona su pagrindo plokšte.
- Dvi detalės turi tą pačią žymą, kai jos turi tą patį profilį, medžiagą ir pjovimo ilgį bei tas pačias skyles ir įpjovas, visa tai per 1 mm, net jei viena yra pasukta galu į galą ar aukštyn kojomis kitos atžvilgiu.
- Numeravimas eina pirmiausia kolonos, tada sijos, įstrižainės ir plokštės; kiekvienoje grupėje – pagal profilio pavadinimą, pirma ilgiausios.

Visos taisyklės, įskaitant tai, kurie pasukimai skaičiuojami kanalams ir kampams: [Žymėjimo taisyklės](topic:mark-rules).

:::warning
Žymos apskaičiuojamos iš naujo po kiekvieno pakeitimo, todėl gali persinumeruoti. Pridėjus detalę, pakeitus profilį ar pridėjus skylę, b3 gali tapti b4. Žymas laikykite galutinėmis tik tada, kai modelis baigtas, o medžiagų sąrašą, NC failus ir dirbtuvių brėžinius darykite iš to paties įrašyto modelio.
:::

## Skaitykite medžiagų sąrašą

Atidarykite {{ui:Medžiagų sąrašas}} skirtuką apačioje. Jame yra trys lentelės.

**Detalės**, su bendru plieno svoriu antraštėje:

| Stulpelis | Reikšmė |
|---|---|
| Detalės žyma | Spustelėkite, kad pasirinktumėte pirmą detalę su šia žyma |
| Tipas | sija, kolona, įstrižainė, stringeris ar plokštė |
| Profilis | Pavyzdžiui, W16x26 arba PL20x180 |
| Medžiaga | Jūsų nustatyta klasė |
| Ilgis (mm) | Pjovimo ilgis po jungčių |
| Kiekis | Kiek |
| Vieneto svoris (kg) | Profilio masė viename metre × ilgis |
| Bendras svoris (kg) | Vieneto svoris × kiekis |

Paskutinė eilutė pateikia bendrą kiekį ir svorį.

**Surinkimai:** kiekviena surinkimo žyma, jos pagrindinė detalė, visos jos detalės (pavyzdžiui „b1 + p1 + p1“), kiekis, vieneto svoris ir bendras svoris.

**Varžtai ir inkariniai strypai:** sugrupuoti pagal rūšį, skersmenį, ilgį ir klasę, su kiekiu.

:::note
Svoriai bruto: skylės ir įpjovos neatimamos. Varžtai, veržlės, poveržlės ir suvirinimai į plieno svorį neįtraukti.
:::

## Atsisiųskite

Pasirinkite {{ui:Atsisiųsti CSV}} skirtuke arba {{ui:BOM}} grupėje {{ui:Išvestis}}. Failas `<name> BOM.csv` talpina tris lenteles viena po kitos, kiekvieną su pavadinimu, tarp jų – tuščia eilutė. Jis atidaromas bet kurioje skaičiuoklėje.

## Patikrinkite prieš siųsdami

1. Atidarykite {{ui:Problemos}} skirtuką ir ištrinkite kiekvieną eilutę. Jungtis, kurios nepavyko sukurti, nepridės nei plokštės, nei skylių, nei varžtų, todėl medžiagų sąrašas bus neišsamus.
2. Ieškokite žymų, kurių nesitikėjote. Dvi sijos, kurias laikote vienodomis, bet su skirtingomis žymomis, dažniausiai skiriasi skyle, įpjova ar pjovimo ilgiu; pasirinkite kiekvieną ir palyginkite.
3. Įrašykite modelį, tada atlikite visus eksportus iš tos įrašytos būsenos.
