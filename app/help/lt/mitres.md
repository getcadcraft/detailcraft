---
title: Įstrižiniai sujungimai
summary: Sujunkite du I formos elementus, susitinkančius kampu: abu galai nupjauti plokštuma, dalijančia kampą pusiau, su galinėmis plokštėmis, varžtais ir briaunomis, jei norite.
keywords: įstrižinis sujungimas, įstrižinis, įstrižinio sujungimo mazgas, mazgas, portalinio rėmo mazgas, kraigas, kampas, įstrižinis pjūvis, galinė plokštė, varžtais tvirtinama galinė plokštė, standumo briauna, jungti
from: cd8380d4
---

Įstrižinis sujungimas jungia du I formos elementus, kurių galai susitinka kampu, pavyzdžiui portalinio rėmo mazgą, kraigą ar dvi sijas, besisukančias kampe plane. DetailCraft nupjauna abu galus plokštuma, dalijančia kampą tarp jų pusiau, todėl dvi pjūvio plokštumos sutampa. Jei norite, jis prideda galinę plokštę prie kiekvieno nupjauto galo, sujungia dvi plokštes varžtais ir įdeda po porą sienelės standumo briaunų į kiekvieną elementą.

## Kur tai veikia

- Du **I formos** profiliai (IPE, HEA, HEB, W ir panašūs), kurių **galai susitinka tame pačiame mazge**. Bet kuris elementas gali būti nubraižytas bet kuria kryptimi.
- Kampas tarp elementų turi būti bent 15°. Tiesiai einantys elementai atmetami: tam naudokite [ilginimo sujungimą](topic:splices).
- Paprastas pjūvis (be plokščių) veikia, kaip tik elementai susitiktų. **Galinėms plokštėms** elementai turi susitikti savo sienelių plokštumoje, kaip portalinio rėmo mazge ar kraige. Dvi sijos, besisukančios kampe plane, susitinka savo flanšų plokštumoje, todėl joms tinka tik paprastas pjūvis.
- Skirtingų dydžių elementai sujungiami, bet su įspėjimu: jų pjūvio paviršiai nesutaps.

## Įstrižinio sujungimo pridėjimas

1. Pažymėkite du elementus: spustelėkite vieną, tada {{key:Shift}}+spustelėkite kitą.
2. Pasirinkite {{ui:Mitre}} grupės {{ui:Connect}} meniu {{ui:More}}. Atsidaro įstrižinio sujungimo dialogas.
3. Nustatykite numeruotus laukus. Greta jų esantis brėžinys sudaromas pagal jūsų skaičius, kai rašote, o jo numeruoti apskritimai rodo, ką nustato kiekvienas laukas.
4. Pasirinkite {{ui:Add the mitre}}. Jei pažymėjote daugiau nei du elementus, kiekviena laisva jungtis tarp jų gauna tą patį įstrižinį sujungimą.

Kad vėliau pakeistumėte įstrižinį sujungimą, pažymėkite jį (spustelėkite vieną iš jo plokščių) ir dešiniajame skydelyje pasirinkite {{ui:Mitre dialog with preview}}, arba pakeiskite nustatymus ten tiesiogiai. Paprastas pjūvis neturi plokščių, į kurias galima spustelėti: pažymėkite du jo elementus ir vėl pasirinkite {{ui:Mitre}}, o dialogas atsidarys su tuo įstrižiniu sujungimu. {{ui:Apply to similar (n)}} nukopijuoja jį į kiekvieną laisvą jungtį tarp tų pačių dviejų profilių tuo pačiu kampu.

## Numeruoti laukai (mm)

| Nr. | Parametras | Numatytoji | Ką daro |
|---|---|---|---|
| 1 | Tarpas tarp plokščių (arba pjūvio galų) | 0 | Laisvas tarpas jungtyje. Kiekviena pusė išlaiko pusę jo |
| 2 | Galinės plokštės, plokštės storis | įjungta, 20 | Galinė plokštė, suvirinta aplink kiekvieną nupjautą galą. Nuimkite žymėjimą, jei norite paprasto pjūvio |
| 3 | Varžtų eilės, eilių žingsnis, skersinis atstumas, išorinė eilė | 4, 0, 0, išjungta | Žingsnis 0 paskirsto eiles tolygiai tarp flanšų. Skersinis atstumas 0 = pusė plokštės pločio, bent 2,4 × skylė. Išorinė eilė patenka į plokštės išplėtimą už išorinio flanšo |
| 4 | Plokštė už išorinio flanšo | 0 | Kiek plokštės išsikiša už išorinio flanšo, išilgai pjūvio |
| 5 | Plokštė už vidinio flanšo | 0 | Tas pats vidinei pusei |
| 6 | Sienelės standumo briaunos, atstumas už pjūvio | išjungta, 50 | Pora kiekviename elemente, abiejose sienelės pusėse, statmenai elementui, tiek už jo pjūvio tolimo galo |
| 7 | Standumo briaunos storis | 10 | |

Skiltyje {{ui:Bolts}}: varžto skersmuo, skylė, markė ir ilgio atsargos (20, 22, A325, 30), kaip ir galinėms plokštėms. Skiltyje {{ui:Plates and welds}}: plokštės plotis (0 = flanšo plotis), kampinio suvirinimo dydis (8) ir plokštės medžiaga (A36).

## Ką gausite

- **Pjūviai.** Kiekvieno elemento galas nupjaunamas jo plokštumoje. Jo ilgis sąrašuose, brėžiniuose ir NC failuose yra **bendras ilgis**, nuo jo stataus galo iki toliausio pjūvio taško.
- **Plokštės** priklauso jų elementui: kiekvieno elemento surinkimas yra elementas, jo galinė plokštė ir jo standumo briaunos. Varžtai yra jungties montavimo varžtai: medžiagų sąraše jie skaičiuojami vieną kartą, o kiekvieno elemento surinkimo brėžinys juos nurodo kaip laisvus varžtus.
- **Brėžiniai** rodo įstrižus galus ir plokštes; įstrižai pjaunamo elemento dirbtuvių brėžinys nurodo kiekvieno pjūvio kampą nuo statmens.
- **NC failai** (DSTV) pateikia įstrižo pjūvio kampus antraštėje, kaip reikalauja standartas, ir kontūrus, sekančius pjūvį. Prieš pjaudami patikrinkite juos savo dirbtuvių NC peržiūros programoje, kaip ir visus NC failus.
- **IFC** apkarpo kiekvieno elemento ištrauką pagal jo pjūvio plokštumą, todėl kitos programos rodo tikrą pjūvį.
- **Žymės:** įstrižai pjaunamas elementas yra kitokia detalė nei statmenai nupjautas to paties ilgio elementas. Du elementai su tais pačiais pjūviais turi tą pačią žymę, kaip kraigo dvi sijos.

## Verta žinoti

- Įstrižinis sujungimas lieka gyvas. Perkėlus ar pakeitus bet kurio elemento dydį, pjūvis, plokštės ir varžtai seka pakeitimą. Ištrynus bet kurį elementą, įstrižinis sujungimas išnyksta, o kito elemento galas vėl tampa status.
- Įspėjimai naudoja tuos pačius EN 1993-1-8 minimalius dydžius kaip ir kitos jungtys (galo ir krašto atstumas 1,2 × skylė, žingsnis 2,2 × skylė, skersinis atstumas 2,4 × skylė), be to, varžtų eiles per arti flanšo, plokštes siauresnes už flanšus ir standumo briaunas be vietos.
- Reikšmės yra pradinės, o ne projektas. DetailCraft nepatikrina jungties stiprumo ir nesudaro nei įtvirtinimo, nei suvirinto įstrižinio sujungimo su stumiamuoju suvirinimu, nei standumo briaunų, išlygiuotų su kito elemento flanšais.
