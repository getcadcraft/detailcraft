---
title: Ekrano apžvalga
summary: Kiekviena DetailCraft juosta, skydelis ir skirtukas pagal jų pavadinimą ekrane ir jų paskirtis.
keywords: ekranas, išdėstymas, įrankių juosta, skydeliai, savybės, būsenos juosta, ataskaitos, sąsaja, ui, skirtukai
from: 454f74fd
---

DetailCraft užpildo naršyklės langą po programos juosta. Iš viršaus į apačią: įrankių juosta, tada trys stulpeliai ({{ui:Modelis}} skydelis, vaizdas, {{ui:Savybės}} skydelis), tada ataskaitų skirtukai, tada būsenos juosta.

## Programos juosta

Plona juosta viršuje priklauso CadCraft svetainei, o ne modeliui. Joje rodomas programos pavadinimas ir versija, nuoroda į {{ui:Apie DetailCraft}}, {{ui:Žinynas}} (arba {{key:F1}}) šiam žinynui, {{ui:Įrašyti neprisijungus}}, ekrano režimo mygtukas ir {{ui:Lapas}} / {{ui:Modelis}} jungiklis.

- {{ui:Įrašyti neprisijungus}} išlaiko DetailCraft, jo 3D vaizdą ir šį žinyną jūsų naršyklėje, kad jis atsidarytų be ryšio. Išsaugojus rodoma {{ui:Paruošta neprisijungus}}; tada spustelėkite jį, kad gautumėte {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} arba {{ui:Pašalinti kopiją neprisijungus}}. Žr. [Darbas neprisijungus](common:offline).
- {{ui:Lapas}} suteikia šviesų ekraną, o {{ui:Modelis}} – tamsų. 3D vaizdas pakinta iš karto; modelis nesikeičia.
- Ekrano režimo mygtukas ir {{key:Ctrl+Shift+F}} perjungia tarp įprasto, viso ekrano ir viso ekrano su paslėptomis juostomis. {{key:Ctrl+Shift+F}} visuose kompiuteriuose naudoja Control klavišą, įskaitant Mac. Kai juostos paslėptos, užveskite pelės žymeklį ant viršutinio ekrano krašto (arba palieskite jį), kad jos grįžtų. {{key:Esc}} palieka viso ekrano režimą.

## Įrankių juosta

Įrankių juostoje yra penkios grupės. Užveskite pelę ant mygtuko, kad pamatytumėte, ką jis daro, ir jo klavišą.

| Grupė | Mygtukai | Ką jie daro |
|---|---|---|
| {{ui:Failas}} | {{ui:Naujas}}, {{ui:Atidaryti}}, {{ui:Importuoti IFC}}, {{ui:Įrašyti}}, {{ui:Pavyzdys}} | Pradėti modelį, atidaryti įrašytą `.detailcraft.json` ar IFC failą, įrašyti modelį arba atidaryti pavyzdinį karkasą |
| {{ui:Įdėti}} | {{ui:Pasirinkti}}, {{ui:Sija}}, {{ui:Kolona}}, {{ui:Įstrižainė}}, {{ui:Plokštė}}, {{ui:Pamatas}}, {{ui:Laiptai}} | Įrankis, kurį naudoja kitas spustelėjimas vaizde |
| {{ui:Jungti}} | {{ui:Galinės plokštės}}, {{ui:Pagrindo plokštė}}, o meniu {{ui:Daugiau}}: {{ui:Šlyties plokštės}}, {{ui:Sujungimas}}, {{ui:Jungiamoji plokštė}}, {{ui:Panašūs}} | Pridėti jungtį pažymėtai sijai, kolonai ar įstrižainei arba nukopijuoti pažymėtą jungtį į kiekvieną panašią sujungimo vietą |
| {{ui:Redaguoti}} | {{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Daugiau}} | Žingsniuoti atgal ir pirmyn per pakeitimus; nukopijuoti pažymėtą pasirinkimą ir jį įklijuoti. {{ui:Daugiau}} atveria meniu su {{ui:Iškirpti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Įklijuoti vietoje}}, {{ui:Dubliuoti}}, {{ui:Naikinti}}, {{ui:Pasirinkti viską}} ir {{ui:Nieko nepasirinkti}}, kiekvienas su savo klavišu |
| {{ui:Išvestis}} | {{ui:IFC}}, {{ui:NC failai}}, {{ui:BOM}}, {{ui:Dirbtuvių brėžinys}}, {{ui:Brėžiniai}}, o meniu {{ui:Daugiau}}: {{ui:Lenkimas}}, {{ui:Svorio ataskaita pagal etapą}}, {{ui:KISS failas gamybos programai}} | Atsisiųsti eksportą arba atidaryti brėžinių lapus |

Mygtukai ir meniu punktai, kurių dabar negalima naudoti, yra pilkai užtemdyti, o užvedus pelę ant jų rodoma priežastis. {{ui:Galinės plokštės}} reikia pažymėtos sijos, {{ui:Pagrindo plokštė}} – pažymėtos kolonos, {{ui:Panašūs}} – pažymėtos jungties, {{ui:Dirbtuvių brėžinys}} – pažymėtos I formos profilio ar plokštės detalės, {{ui:Kopijuoti}} – pažymėto elemento ar pamato, o {{ui:Įklijuoti}} – kažko nukopijuoto. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste).

## Modelio skydelis (kairėje)

- {{ui:Modelis}}: modelio {{ui:Pavadinimas}}. Pagal jį pavadinami visi įrašomi ar eksportuojami failai.
- {{ui:Tinkleliai}}: tinklelio linijos ir jų atstumai, bei {{ui:Taikyti tinklelius}}. Žr. [Tinklelių ir lygių nustatymas](topic:grids-and-levels).
- {{ui:Lygiai}}: po vieną eilutę kiekvienam lygiui (pavadinimas ir aukštis mm), {{ui:Pridėti lygį}} ir {{ui:Taikyti lygius}}.
- {{ui:Pasirinktinis profilis}}: sukurkite savo parametrinį skerspjūvį. Uždarytas, kol jo neatidarote.
- {{ui:Elementų žymenys}}: kiekvienas modelio detalės žymuo su profiliu, ilgiu ir kiekiu. Spustelėkite žymenį, kad pažymėtumėte pirmą detalę su juo.

{{ui:Tinkleliai}}, {{ui:Lygiai}} ir {{ui:Pasirinktinis profilis}} susiskleidžia: spustelėkite jų antraštes.

## Vaizdas (viduryje)

Vaizde modelis rodomas 3D. Virš jo esančioje vaizdo juostoje yra trys mygtukai ir sąrašas:

- {{ui:3D}}: laisvai sukite modelį apie jį patį.
- {{ui:Planas}}: žiūrėkite tiesiai žemyn į vieną lygį. Šalia mygtukų atsiranda lygių sąrašas. Viskas, kas aukščiau nei 1,5 m virš lygio, nukerpama, kad lygį galėtumėte aiškiai matyti ir spustelėti.
- {{ui:Fasadas}}: žiūrėkite tiesiai į vieną raidėmis pažymėtą tinklelio liniją (Tinklelis A, Tinklelis B …). Atsiranda raidinių tinklelių sąrašas. Rodomas tik plienas, esantis 1 m atstumu nuo tos linijos.
- Vaizdo juostos dešiniajame gale esantis mygtukas priartina, kad matytųsi visas modelis.

Mažos taškeliai žymi kiekvieną tinklelio susikirtimą kiekviename lygyje. Kol įjungtas įdėjimo įrankis, artimiausias žymeklio taškelis įsižiebia, o būsenos juostoje įvardijamas, pavyzdžiui „A/2 prie Lygio 1“. Spalvos skiria elementų tipus: kolonos, sijos, įstrižainės ir plokštės turi savo spalvas, varžtai ir inkariniai strypai – kitą, pamatai yra permatomi, o armatūra vaizduojama vamzdeliais. Skylės rodomos kaip tamsūs kamščiai; iškirpimai nupjauti.

Kaip sukti, slinkti ir keisti mastelį: [Judėjimas 3D vaizde](topic:navigate-3d).

Kai modelis tuščias, vaizde rodomas trumpas sąrašas „Pradėti modelį“. Taip pat galite nutempti įrašytą modelio failą bet kur į vaizdą, kad jį atidarytumėte.

## Savybių skydelis (dešinėje)

Šis skydelis rodo priklausomai nuo to, ką darote, o jo antraštė nurodo, ką: „Modelis“, „Įdėti sijos“, „Sija b2“, „Galinės plokštės jungtis“, „Pagrindo plokštė“, „Pamatas F1“, „Pažymėta: 3“ arba „Įklijuoti“.

- **Nieko nepažymėta:** modelio santrauka (elementai, jungtys, pamatai, detalės, žymenys, varžtai, plieno ir armatūros svoris, tinkleliai, lygiai).
- **Įdėjimo įrankis įjungtas:** kito elemento nustatymai (profilis, medžiaga, padėtis, pasukimas ir kolonoms {{ui:Iki}}), pasirinkto profilio santrauka ir {{ui:Pridėti pagal ašis}} forma, skirta įdėti be spustelėjimo vaizde.
- **Elementas pažymėtas:** jo pavadinimas, profilis, medžiaga, padėtis, pasukimas, abiejų galų koordinatės, jo žymenys, pjovimo ilgis ir svoris, jo skylės ir iškirpimai, bei mygtukai jungtims, jo dirbtuvių brėžiniui ir {{ui:Naikinti}}.
- **Jungtis pažymėta:** kiekvienas plokštės, varžto ir suvirinimo nustatymas, varžtai ir suvirinimas, kuriuos ji sukuria, jos įspėjimai ir {{ui:Taikyti panašiems}}.
- **Pamatas pažymėtas:** jo padėtis ir dydis, apatinis tinklas, užvedimo strypai ir naudojami armatūros žymenys.
- **Pažymėta kelis dalykus:** kiek kiekvieno tipo elementų, jungčių ir pamatų, jų plieno svoris, bei {{ui:Kopijuoti}}, {{ui:Dubliuoti}} ir {{ui:Naikinti}}.
- **Įklijuojant:** kas yra iškarpinėje, ir formos įklijuoti pagal įvestą poslinkį arba ant tinklelio susikirtimo, pasirinkto iš sąrašų.

Skaičių laukai įsigalioja paspaudus {{key:Enter}} arba išėjus iš lauko. Kiekvienas pakeitimas yra vienas žingsnis, kurį galite atšaukti.

## Ataskaitų skirtukai (apačioje)

- {{ui:Problemos}}: viskas, ką DetailCraft nepavyko sukurti arba ko prašo patikrinti, su mygtuku {{ui:Pasirinkti}} kiekvienoje eilutėje. Skirtukas rodo skaičių laužtiniuose skliaustuose.
- {{ui:Medžiagų sąrašas}}: detalės, surinkimai, varžtai ir inkariniai strypai su svoriais ir nuoroda {{ui:Atsisiųsti CSV}}. Spustelėkite detalės žymenį, kad ją pažymėtumėte.
- {{ui:Lenkimo žiniaraštis}}: kiekvienas armatūros strypo žymuo kiekviename pamate su nuoroda {{ui:Atsisiųsti CSV}}.

Kai skirtukas pažymėtas, {{key:Left}} ir {{key:Right}} perkelia tarp skirtukų.

## Būsenos juosta

Juosta apačioje turi tris dalis: tinklelio susikirtimą po žymekliu įdėjimo metu, naujausią pranešimą (kas ką tik įvyko arba kodėl kažkas atmesta) ir bendras detalių, varžtų, plieno svorio ir armatūros svorio sumas. Kai veiksmas atrodo nieko nedaro, pirmiausia perskaitykite čia pateiktą pranešimą.

Naršyklės skirtuko pavadinimas prasideda tašku (•), kol modelyje yra neįrašytų pakeitimų.

## Siauras ekranas

Maždaug iki 760 pikselių pločio stulpeliai sustoja vienas po kito: įrankių juosta, vaizdas, būsenos juosta, {{ui:Savybės}}, ataskaitų skirtukai, o paskutinis – {{ui:Modelis}} skydelis. Slinkite puslapį, kad juos pasiektumėte. DetailCraft išdėstytas stalinio ar nešiojamo kompiuterio ekranui; telefonu galima žiūrėti, bet ne detalizuoti.
