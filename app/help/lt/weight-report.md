---
title: Medžiagų ir svorių ataskaita pagal etapą
summary: Pjovimo ilgiai, kiekiai, svoriai ir dažymo plotai kiekvienam etapui su jo varžtais ir armatūra – lentelė, CSV arba PDF.
keywords: ataskaita, svoris, tonažas, kg, dažai, dažymo plotas, paviršiaus plotas, danga, pjovimo ilgis, medžiagų sąrašas, etapas, BOM, csv, pdf
from: 337d6d92
---

Grupėje {{ui:Išvestis}} atidarykite {{ui:Daugiau}} ir pasirinkite {{ui:Svorio ataskaita pagal etapą}}, arba atidarykite skirtuką {{ui:Pagal etapą}} po vaizdu. Rodoma:

- **Suvestinė pagal etapą**: kiekvienam etapui detalių skaičius, plieno svoris, dažymo plotas, varžtai ir inkaro strypai bei armatūra; tada bendros sumos.
- **Viena lentelė kiekvienam etapui**: kiekvienos detalės žymė joje su tipu, profiliu, medžiaga, pjovimo ilgiu, kiekiu, vieneto svoriu, svoriu ir dažymo plotu; tada jos varžtai ir inkaro strypai.

{{ui:Atsisiųsti CSV}} įrašo tas pačias lenteles viename CSV faile (`<name> weight report.csv`). {{ui:Atsisiųsti PDF}} sukuria ataskaitą pagal [DetailCraft parametrus](topic:settings#drawings) nustatytu lapo formatu: pirmiausia suvestinė, po jos kiekvienas etapas, ilgos lentelės perkeliamos į kitą puslapį ir kiekvienas puslapis sunumeruotas.

## Kaip skaičiuojami rodikliai

- **Svoriai** yra bruto, kaip medžiagų sąraše: profilio vieno metro svoris, padaugintas iš pjovimo ilgio. Skylės ir išpjovos neatimamos.
- **Dažymo plotas** yra profilio išorė išilgai pjovimo ilgio: I formos profiliui – visi flanšų ir sienelės paviršiai, plokštei – abu paviršiai ir briaunos, vamzdžiui – tik išorė. Galai ir skylės neskaičiuojami.
- **Armatūra** yra etapo pamatų strypų svoris pagal [lenkimo grafiką](topic:footings-and-rebar).
- Jungties plokštės ir varžtai įskaičiuojami į pagrindinio jos elemento etapą. Žr. [Etapai](topic:phases).

Kai įjungtos [žymos pagal etapą](topic:phases#marks-per-phase), kiekvienas etapas turi savo žymas (1-b1, 2-b1). Kai išjungta, viena žyma gali būti keliuose etapuose: kiekviename etape išvardijamos jame esančios dalys.
