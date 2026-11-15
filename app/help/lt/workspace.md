---
title: Ekrano apžvalga
summary: Kiekviena DetailCraft juosta, skydelis ir skirtukas pagal jų pavadinimą ekrane bei paskirtį.
keywords: ekranas, išdėstymas, įrankių juosta, skydeliai, savybės, būsenos juosta, ataskaitos, sąsaja, ui, skirtukai
from: 94f81073
---

DetailCraft užpildo naršyklės langą po programos juosta. Iš viršaus į apačią: įrankių juosta, tada trys stulpeliai (skydelis {{ui:Modelis}}, vaizdas, skydelis {{ui:Savybės}}), tada ataskaitų skirtukai ir būsenos juosta.

## Programos juosta

Plona juosta viršuje priklauso CadCraft svetainei, o ne modeliui. Joje rodomas programos pavadinimas ir versija, nuoroda į {{ui:Apie DetailCraft}}, {{ui:Žinynas}} (arba {{key:F1}}) šiam žinynui, {{ui:Įrašyti neprisijungus}}, ekrano režimo mygtukas ir perjungiklis {{ui:Popierius}} / {{ui:Modelis}}.

- {{ui:Įrašyti neprisijungus}} išsaugo DetailCraft, jo 3D vaizdą ir šį žinyną naršyklėje, kad jis atsidarytų be ryšio. Įrašius mygtukas rodo {{ui:Paruošta neprisijungus}}; tada jį spustelėjus galima pasirinkti {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} arba {{ui:Pašalinti kopiją neprisijungus}}. Žr. [Darbas neprisijungus](common:offline).
- {{ui:Popierius}} suteikia šviesų ekraną, o {{ui:Modelis}} – tamsų. 3D vaizdas iš karto persijungia; modelis nesikeičia.
- Ekrano režimo mygtukas ir {{key:Ctrl+Shift+F}} perjungia įprastą, visą ekraną ir visą ekraną su paslėptomis juostomis. {{key:Ctrl+Shift+F}} visuose kompiuteriuose naudoja Control klavišą, įskaitant Mac. Kai juostos paslėptos, pelę nukreipkite į ekrano viršutinį kraštą (arba palieskite jį), kad juostos vėl atsirastų. {{key:Esc}} išeina iš viso ekrano režimo.

## Įrankių juosta

Įrankių juostoje yra penkios grupės. Užvedę pelę ant mygtuko pamatysite, ką jis daro, ir jo klavišą.

| Grupė | Mygtukai | Ką daro |
|---|---|---|
| {{ui:Failas}} | {{ui:Naujas}}, {{ui:Atidaryti}}, {{ui:Importuoti IFC}}, {{ui:Įrašyti}}, {{ui:Pavyzdys}} | Sukuria modelį, atidaro įrašytą `.detailcraft.json` arba IFC failą, įrašo modelį arba atidaro pavyzdinį rėmą |
| {{ui:Įdėti}} | {{ui:Pasirinkti}}, {{ui:Sija}}, {{ui:Kolona}}, {{ui:Įstrižainė}}, {{ui:Plokštė}}, {{ui:Pamatas}}, {{ui:Laiptai}} | Įrankis, kurį naudos kitas spustelėjimas vaizde |
| {{ui:Jungti}} | {{ui:Galinės plokštės}}, {{ui:Pagrindo plokštė}}, o {{ui:Daugiau}} meniu: {{ui:Šlyties plokštės}}, {{ui:Sujungimas}}, {{ui:Jungiamoji plokštė}}, {{ui:Panašūs}} | Prideda jungtį pažymėtai sijai, kolonai ar įstrižainei arba nukopijuoja pažymėtą jungtį į kiekvieną panašią sujungimo vietą |
| {{ui:Redaguoti}} | {{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Daugiau}} | Žingsnis atgal ir pirmyn per pakeitimus; nukopijuoja pasirinkimą ir jį įklijuoja. {{ui:Daugiau}} atveria meniu su {{ui:Iškirpti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Įklijuoti vietoje}}, {{ui:Dubliuoti}}, {{ui:Naikinti}}, {{ui:Pasirinkti viską}} ir {{ui:Nieko nepasirinkti}}, kiekvienas su savo klavišu |
| {{ui:Išvestis}} | {{ui:IFC}}, {{ui:NC failai}}, {{ui:BOM}}, {{ui:Dirbtuvių brėžinys}}, {{ui:Brėžiniai}}, o {{ui:Daugiau}} meniu: {{ui:Lenkimas}}, {{ui:Svorio ataskaita pagal etapą}}, {{ui:KISS failas gamybos programai}} | Atsisiunčia eksportą arba atidaro brėžinių lapus |

Mygtukai ir meniu punktai, kurių dabar negalima naudoti, yra pilki, o užvedus pelę parodoma priežastis. {{ui:Galinės plokštės}} reikia pažymėtos sijos, {{ui:Pagrindo plokštė}} – pažymėtos kolonos, {{ui:Panašūs}} – pažymėtos jungties, {{ui:Dirbtuvių brėžinys}} – modelio su detalėmis, {{ui:Kopijuoti}} – pažymėto elemento ar pamato, o {{ui:Įklijuoti}} – kažko nukopijuoto. Žr. [Kopijavimas, įklijavimas ir dubliavimas](topic:copy-paste).

## Modelio skydelis (kairėje)

- {{ui:Modelis}}: modelio {{ui:Pavadinimas}}. Juo pavadinamas kiekvienas įrašytas ar eksportuotas failas.
- {{ui:Tinkleliai}}: tinklelio linijos ir jų atstumai bei {{ui:Taikyti tinklelius}}. Žr. [Tinklelių ir lygių nustatymas](topic:grids-and-levels).
- {{ui:Lygiai}}: po vieną eilutę kiekvienam lygiui (pavadinimas ir aukštis mm), {{ui:Pridėti lygį}} ir {{ui:Taikyti lygius}}.
- {{ui:Pasirinktinis profilis}}: sukurkite savo parametrinį skerspjūvį. Uždaryta, kol jį atidarysite.
- {{ui:Detalių žymenys}}: kiekvienas detalės žymuo modelyje su profiliu, ilgiu ir kiekiu. Spustelėkite žymenį, kad pažymėtumėte pirmą detalę su juo.

{{ui:Tinkleliai}}, {{ui:Lygiai}} ir {{ui:Pasirinktinis profilis}} susiskleidžia: spustelėkite jų antraštes.

## Vaizdas (viduryje)

Vaizde modelis rodomas 3D. Virš jo vaizdo juostoje yra trys mygtukai ir sąrašas:

- {{ui:3D}}: laisvai sukite modelį.
- {{ui:Planas}}: žiūrėkite tiesiai iš viršaus į vieną lygį. Šalia mygtukų atsiranda lygių sąrašas. Viskas, kas aukščiau nei 1,5 m virš lygio, nupjaunama, kad lygį galėtumėte aiškiai matyti ir spustelėti.
- {{ui:Fasadas}}: žiūrėkite tiesiai į vieną raidinę tinklelio liniją (A tinklelis, B tinklelis …). Atsiranda raidžių tinklelių sąrašas. Rodomas tik plienas, esantis 1 m atstumu nuo tos linijos.
- Vaizdo juostos dešiniajame gale esantis mygtukas „tilpti“ priartina, kad matytumėte visą modelį.

Maži taškai žymi kiekvieną tinklelio susikirtimą kiekviename lygyje. Kol įjungtas įdėjimo įrankis, artimiausias žymeklio taškas įsižiebia, o būsenos juostoje įvardijamas, pvz., „A/2 – Lygis 1“. Spalvos išskiria elementų tipus: kolonos, sijos, įstrižainės ir plokštės turi savo spalvas, varžtai ir strypai – kitą, pamatai yra permatomi, o armatūra rodoma kaip vamzdeliai. Skylės rodomos kaip tamsūs kamščiai; iškirpimai yra iškirpti.

Kaip sukti, perstumti ir keisti mastelį: [Judėjimas 3D vaizde](topic:navigate-3d).

Kai modelis tuščias, vaizde rodomas trumpas sąrašas „Pradėti modelį“. Taip pat galite nuvilkti įrašytą modelio failą bet kur ant vaizdo, kad jį atidarytumėte.

## Savybių skydelis (dešinėje)

Šio skydelio turinys priklauso nuo to, ką darote, o jo antraštė nurodo, kas tai: „Modelis“, „Sijos įdėjimas“, „Sija b2“, „Galinės plokštės jungtis“, „Pagrindo plokštė“, „Pamatas F1“, „3 pasirinkta“ arba „Įklijavimas“.

- **Nieko nepasirinkta:** modelio santrauka (elementai, jungtys, pamatai, detalės, žymenys, varžtai, plieno ir armatūros svoris, tinkleliai, lygiai).
- **Įdėjimo įrankis įjungtas:** kito elemento parametrai (profilis, medžiaga, padėtis, pasukimas, o kolonoms – {{ui:Iki}}), pasirinkto profilio santrauka ir forma {{ui:Pridėti pagal tinklelį}}, kad elementus įdėtumėte nespustelėdami vaizde.
- **Pasirinktas elementas:** jo pavadinimas, profilis, medžiaga, padėtis, pasukimas, abiejų galų koordinatės, žymenys, pjovimo ilgis ir svoris, skylės bei iškirpimai, mygtukai jungtims, jo dirbtuvių brėžiniui ir {{ui:Naikinti}}.
- **Pasirinkta jungtis:** visi plokščių, varžtų ir suvirinimo nustatymai, jos sukuriami varžtai bei suvirinimas, įspėjimai ir {{ui:Taikyti panašioms}}.
- **Pasirinktas pamatas:** jo padėtis ir dydis, apatinis tinklelis, įleidžiami strypai ir naudojami armatūros žymenys.
- **Pasirinkta kelis dalykai:** kiek kiekvieno tipo elementų, jungčių ir pamatų, jų plieno svoris, bei {{ui:Kopijuoti}}, {{ui:Dubliuoti}} ir {{ui:Naikinti}}.
- **Įklijavimas:** tai, kas yra iškarpinėje, ir formos įklijuoti pagal įrašytą poslinkį arba ant pasirinkto tinklelio susikirtimo iš sąrašų.

Skaičių laukai įsigalioja, kai paspaudžiate {{key:Enter}} arba išeinate iš lauko. Kiekvienas pakeitimas yra vienas žingsnis, kurį galima atšaukti.

## Ataskaitų skirtukai (apačioje)

- {{ui:Problemos}}: viskas, ko DetailCraft nepavyko sukurti arba ką reikia patikrinti, su mygtuku {{ui:Pasirinkti}} kiekvienoje eilutėje. Skirtuke skliausteliuose rodomas skaičius.
- {{ui:Medžiagų sąrašas}}: detalės, surinkimai, varžtai ir kotvų strypai su svoriais bei nuoroda {{ui:Atsisiųsti CSV}}. Spustelėkite detalės žymenį, kad pažymėtumėte tą detalę.
- {{ui:Lenkimo žiniaraštis}}: kiekvienas strypo žymuo kiekviename pamate su nuoroda {{ui:Atsisiųsti CSV}}.

Kai skirtukas pažymėtas, {{key:Left}} ir {{key:Right}} perjungia tarp skirtukų.

## Būsenos juosta

Apatinė juosta turi tris dalis: tinklelio susikirtimą po žymekliu įdėjimo metu, naujausią pranešimą (kas ką tik įvyko arba kodėl kažkas atmesta) ir bendras sumas: detales, varžtus, plieno svorį ir armatūros svorį. Kai veiksmas, regis, nieko nedaro, pirmiausia perskaitykite čia rodomą pranešimą.

Naršyklės skirtuko pavadinimo pradžioje rodomas taškas (•), kol modelyje yra neįrašytų pakeitimų.

## Siauras ekranas

Kai ekranas siauresnis nei maždaug 760 pikselių, stulpeliai sustumiami į vieną eilę: įrankių juosta, vaizdas, būsenos juosta, {{ui:Savybės}}, ataskaitų skirtukai, o skydelis {{ui:Modelis}} paskutinis. Slinkite puslapį, kad pasiektumėte juos. DetailCraft sukurtas darbalaukio ar nešiojamo kompiuterio ekranui; telefonu galima žiūrėti, bet ne detalizuoti.
