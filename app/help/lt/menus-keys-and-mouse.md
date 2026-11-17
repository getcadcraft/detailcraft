---
title: Meniu, klavišai ir pelė
summary: Pasirinkite meniu stilių, atitinkantį jūsų įprastą darbo būdą, priskirkite bet kuriai komandai savo klavišą, perkelkite komandas tarp juostelės skirtukų ir nustatykite, ką daro ratukas bei pelės mygtukai.
keywords: meniu stilius, meniu, juostelė, įrankių juosta, komandų eilutė, klaviatūros trumpiniai, karšti klavišai, klavišai, tinkinti, perkelti klavišą, priskirti iš naujo, pelė, ratukas, apversti, mastelio kryptis, vidurinis mygtukas, dešinysis mygtukas, slinkti, sukti, eksportas, importas, perjungimas, pažįstamas, klasikinis braižymas, plieno juosta
from: 4132c6e5
---

DetailCraft komandos veikia vienodai, kaip ir jas pasiekiate. **Meniu stilius** nulemia tik tai, kur komandos yra ekrane, kaip jos ten vadinamos ir kokie klavišai jas paleidžia. Pasirinkite jį {{ui:Settings}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}}; pakeitimas taikomas iš karto, o ši naršyklė jį prisimena.

## Trys stiliai

| Stilius | Ką gaunate |
|---|---|
| {{ui:DetailCraft}} | Savo DetailCraft įrankių juosta (File, Place, Connect, Edit, Output) ir vienų raidžių klavišai: {{key:V}} pasirinkimas, {{key:B}} sija, {{key:C}} kolona, {{key:R}} įstrižainė, {{key:P}} plokštė, {{key:F}} pamatas, {{key:S}} laiptai. Pradinis stilius. |
| {{ui:Drafting classic}} | Skirta žmonėms, kurie rašo komandas: maža juostelė ({{ui:Home}}, {{ui:View}}, {{ui:Output}}) ir komandų eilutė. Įveskite BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (anuliuoti), ZOOM, PLAN, 3D, DRAWINGS, NC arba HELP ir paspauskite {{key:Enter}}; {{key:Enter}} tuščioje eilutėje pakartoja paskutinę komandą, {{key:Esc}} ją išvalo. Pradėję rašyti bet kurioje vietoje, raidės patenka į komandų eilutę. Vidurinis mygtukas slenka vaizdą; 3D vaizde {{key:Shift}} ir vidurinis mygtukas sukasi aplink modelį. |
| {{ui:Steel ribbon}} | Skirtukai, sutvarkyti taip, kaip plieno detalizavimo programos: {{ui:Modeling}} (elementai, betonas, laiptai), {{ui:Detailing}} (jungtys), {{ui:Edit}}, {{ui:Drawings}} (brėžiniai ir ataskaitos), {{ui:Fabrication}} (NC failai, IFC) ir {{ui:View}}, su meniu {{ui:File}} ir greitaisiais mygtukais dešinėje. Vienų raidžių klavišai lieka. Vidurinis mygtukas slenka vaizdą; 3D vaizde kairysis mygtukas sukasi aplink modelį. |

Visi stiliai palieka {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} ir {{key:Mod+A}}. Juostelėse taip pat yra vaizdo juostos mygtukai {{ui:3D}}, {{ui:Plan}}, {{ui:Elevation}} ir {{ui:Fit}}.

:::tip
Klavišas, kuris priklauso DetailCraft išdėstymui, bet jūsų stilius priskyrė kitai komandai, neveikia, o būsenos eilutėje nurodoma, kur nuėjo jo komanda (pvz., „Mano plieno juostoje Kolona yra Ctrl+Alt+C“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ir rodyklės visada išlaiko savo reikšmę, o kol elementas dar nebaigtas dėti ar kopija seka žymeklį, raidės priklauso DetailCraft.
:::

## Pritaikykite sau

1. Pasirinkite stilių, artimiausią jūsų norams, ir spustelėkite {{ui:Customize…}}.
2. Skiltyje {{ui:Keys and menus}} raskite komandą (padeda paieškos laukas). Spustelėkite {{ui:Add a key}} ir paspauskite klavišą arba du klavišus iš eilės dviejų raidžių klavišui. Spustelėkite klavišą, kad jį nuimtumėte.
3. Su juostele {{ui:Where it sits}} perkelia komandą į kitą skirtuką ir skydelį, į meniu {{ui:File}} arba į {{ui:Keys only}}.
4. Skiltyje {{ui:Mouse}} nustatykite ratuką, mygtukus, kurie slenka planą ir fasadus, bei ką kiekvienas mygtukas daro 3D vaizde.
5. Suteikite pavadinimą ir spustelėkite {{ui:Save}}.

Įrengto stiliaus išsaugojimas sukuria jūsų kopiją („Mano plieno juosta“); įrengtasis niekada nekeičiamas. Klavišas, priskirtas dviem komandoms, rodomas raudonai ir turi būti ištaisytas prieš išsaugant.

## Pelė

- **Pelės ratukas**: {{ui:Scroll up zooms in}} (pradžioje) arba {{ui:Scroll up zooms out}}, ir kaip greitai. Jutiklinės plokštės suspaudimas visada keičia mastelį taip, kaip juda pirštai.
- **Planui ir fasadams slinkti naudoti**: vidurinį mygtuką, dešinįjį mygtuką arba abu. Su įrankiu Select kairysis mygtukas visada braižo pasirinkimo langą.
- **Vilkti 3D vaizde**: {{ui:Each view's own}} palieka DetailCraft mygtukus (kairysis sukasi, vidurinis keičia mastelį, dešinysis slenka). Arba kiekvieną mygtuką nustatykite sukti, slinkti, keisti mastelį ar nieko nedaryti; {{key:Shift}} su mygtuku, kuris sukasi ar slenka, sukeičia abu veiksmus vietomis.

## Pasiimkite su savimi

{{ui:Export}} išsaugo naudojamą stilių kaip mažą `.ccinput.json` failą; {{ui:Import…}} jį prideda, pavyzdžiui iš kito kompiuterio ar kolegos. Importuotas failas gali nurodyti tik į DetailCraft komandas: kas kita jame išmetama ir įskaičiuojama būsenos eilutėje. {{ui:Delete this style}} pašalina vieną iš jūsų stilių.

:::note
Šie nustatymai lieka šioje naršyklėje. {{ui:Use this style in every app}} po stilių kortelėmis priverčia visas programas atsidaryti atitinkamame stilių (savo įrankių juosta, juostelė ar {{ui:Drafting classic}}), su jūsų pakeitimais kiekvienoje programoje. DetailCraft neturi meniu juostos stiliaus: kai visoms programoms pasirenkama kitos programos meniu juosta, DetailCraft lieka su savo įrankių juosta.
:::

Susiję: [Klavišai ir pelė](topic:keyboard) · [DetailCraft parametrai](topic:settings) · [Atvykstant iš kitos detalizavimo programinės įrangos](topic:coming-from)
