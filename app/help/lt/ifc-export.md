---
title: Eksportuoti IFC koordinavimui
summary: Įrašykite visą modelį į IFC4 failą – plieną, varžtus, pamatus ir armatūrą – bendrinimui su architektais, inžinieriais ir kita programine įranga.
keywords: ifc, ifc4, ifc2x3, bim, eksportas, importas, importuoti ifc, skylės, varžtai, laisvi varžtai, angos, tvirtikliai, koordinavimas, modelio mainai, step, openbim, susidūrimas, peržiūros priemonė
from: cfcb0cd6
---

IFC eksportas įrašo visą modelį kaip vieną IFC4 failą, kurį gali atidaryti BIM programos ir IFC peržiūros priemonės.

## Eksportas

1. Pasirinkite {{ui:IFC}} grupėje {{ui:Išvestis}}.
2. Naršyklė atsisiunčia `<name>.ifc`. Būsenos juostoje nurodoma, kas įtraukta, pavyzdžiui: „IFC4 eksportuota: 25 detalių, 88 tvirtikliai, 7 pamatai, 132 strypai.“

Jei modelyje nėra nei detalių, nei pamatų, nei strypų, būsenos juostoje rašoma „Kol kas nėra ko eksportuoti.“

## Kas yra faile

| DetailCraft | IFC faile |
|---|---|
| Kiekvienas lygis | Pastato aukštas (IfcBuildingStorey), po vienu projektu, sklypu ir pastatu |
| Tinkleliai | IfcGrid su ašimis ir žymėjimais |
| Kolonos, sijos, įstrižainės | IfcColumn, IfcBeam, IfcMember (įstrižainė), kiekvienas – standartinio profilio ekstruzija su tikraisiais matmenimis |
| Plokštės, galinės plokštės, pagrindo plokštės | IfcPlate |
| Skylės ir įpjovos | Angos (IfcOpeningElement), išpjautos iš detalės |
| Elementas ir jo suvirintos plokštės | Surinkimas (IfcElementAssembly), pažymėtas surinkimo žyma |
| Varžtai ir inkariniai strypai | IfcMechanicalFastener su skersmeniu ir ilgiu |
| Pamatai | IfcFooting (plokštuminis pamatas), su betono tekstu kaip medžiaga |
| Kiekvienas strypas | IfcReinforcingBar su strypo žyma, skersmeniu, plotu ir ilgiu, nutiestas išilgai tikrosios ašies su tikrais lankais posūkiuose |

Kiekvienos detalės žyma – jos detalės žymė. Kiekvienas elementas taip pat turi savybių rinkinį „DetailCraft“ su žymomis, profiliu ir svoriu. Kiekvienas elementas patenka į aukščiausią aukštą, esantį ties arba žemiau jo žemiausio taško. Medžiagos sugrupuojamos pagal klasę.

## Pastovūs id pakartotiniams eksportams

Kiekvieno elemento IFC id (GlobalId) apskaičiuojamas iš modelio pavadinimo ir paties elemento id modelyje. Tą patį modelį eksportavus du kartus, id sutampa, todėl programa, lyginanti versijas, gali nustatyti, kas pasikeitė.

:::warning
Pervadinus modelį, pasikeičia visi id. Tarp projekto išleidimų išlaikykite tokį patį modelio pavadinimą.
:::

## Patikrinkite

DetailCraft IFC failus perskaito nepriklausomas IFC skaitytuvas jos testų rinkinyje. Programos IFC skaito skirtingai, todėl prieš pasikliaudami failu atidarykite jį programoje, kurią naudoja jūsų komanda. CadCraft programa BimCraft taip pat atidaro IFC failus.

## Kol kas dar ne

- Jungčių, pamatų ir armatūros įkėlimas iš IFC failo. {{ui:Importuoti IFC}} įkelia sijas, kolonas, elementus, plokštes, tinklelius, lygius, skyles, įpjovas ir varžtus bei pateikia sąrašą to, ką paliko.
- Analitiniai ar konstrukcinės analizės duomenys.
- Bet kas kita nei IFC4 nuorodinis vaizdas.

## Importas

{{ui:Importuoti IFC}} grupėje {{ui:Failas}} (arba `.ifc` failo nuleidimas ant vaizdo) sukuria naują modelį iš IFC2X3 ar IFC4 failo:

- **Sijos, kolonos, elementai (įstrižainės) ir plokštės**, kurių korpusas yra viena ekstruduota profilio forma, žinoma DetailCraft; atitinka katalogą arba išlaikomos kaip pasirinktinis profilis; **tinkleliai** ir **lygiai** iš failo tinklelio ir aukštų.
- **Skylės:** kiekviena apvali anga (IfcOpeningElement), praskverbianti įkeltą detalę, statmena vienam iš detalės paviršių: dvitaurio ar kanalo sienelė arba flanšai, vamzdžio sienelės, plokštė, kampo kraštinės. Skylė per abi vamzdžio sienas įkeliama vieną kartą.
- **Įpjovos:** stačiakampė anga, užimanti visą dvitaurio ar kanalo plotį nuo vieno galo, iš viršaus žemyn arba iš apačios aukštyn.
- **Varžtai:** kiekvienas IfcMechanicalFastener ar IfcFastener su skersmeniu, ilgiu, klase ir rūšimi (varžtas ar inkarinis strypas) kaip **laisvas varžtas**. Laisvi varžtai rodomi vaizde, medžiagų sąraše ir IFC eksporte ir lieka vietoje, kai perkeliate elementus. Savybių skydelis, kai nieko nepasirinkta, juos suskaičiuoja ir turi {{ui:Pašalinti laisvus varžtus}} – kai vietoj jų pridedate jungtis.

Ataskaita išvardija visa kita pagal klasę su priežastimi, kodėl tai neįtraukta: sienas ir perdangas, pamatus ir strypus, pailgas skyles, skyles apvaliuose vamzdžiuose, jungtis (IFC faile yra jų plokštės ir varžtai, o ne taisyklė, pagal kurią jos sukurtos).
