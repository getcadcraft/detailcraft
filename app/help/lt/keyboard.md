---
title: Klavišai ir pelės veiksmai
summary: Visi DetailCraft klaviatūros trumpiniai ir pelės, jutiklinės plokštės bei lietimo veiksmai, surinkti iš kodo.
keywords: klaviatūra, trumpiniai, karšti klavišai, klavišai, pelė, jutiklinė plokštė, lietimas, ctrl, command, trumpas žinynas
from: 05a2dea0
---

Kaip šioje pagalboje rašomi klavišai: [Klavišai, pelės ir jutiklinės plokštės](common:keys). Mac kompiuteryje {{key:Mod}} yra Command klavišas; kitur – Ctrl.

## Įrankiai

Veikia, kai žymeklis nėra teksto ar skaičių lauke.

| Klavišas | Ką daro |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:B}} | {{ui:Beam}} |
| {{key:C}} | {{ui:Column}} |
| {{key:R}} | {{ui:Brace}} |
| {{key:P}} | {{ui:Plate}} |
| {{key:F}} | {{ui:Footing}} |
| {{key:S}} | {{ui:Stair}} |
| {{key:M}} | Perkelti pasirinkimą pažymint du tinklelio susikirtimus ([Pasirinkimas langu, perkėlimas, sukimas, veidrodinis atspindys, keitimas keliems](topic:select-and-change)) |
| {{key:Esc}} | Nutraukti vilkiamo pasirinkimo langą arba grąžinti vilkiamus elementus; atšaukti perkėlimą, pirmą sijos, įstrižainės ar plokštės tašką arba įklijavimą; paspaudus dar kartą grįžti į {{ui:Select}}; {{ui:Select}} režime išvalyti pasirinkimą. Jei atidarytas {{ui:More}} meniu, jį uždaryti |
| {{key:Delete}} arba {{key:Backspace}} | Naikinti pasirinkimą (visa pažymėta, vienu anuliavimo žingsniu) |

## Failas ir redagavimas

| Klavišas | Ką daro |
|---|---|
| {{key:Mod+S}} | Įrašyti modelį (atsisiųsti). Veikia net rašant lauke |
| {{key:Mod+O}} | Atidaryti modelį. Veikia net rašant lauke |
| {{key:Mod+Z}} | Anuliuoti (ne teksto laukuose; teksto lauke anuliuoja jūsų rašymą) |
| {{key:Mod+Y}} arba {{key:Mod+Shift+Z}} | Perdaryti |

## Kopijavimas ir įklijavimas

Veikia, kai žymeklis nėra teksto ar skaičių lauke (ten kopijuojamas, įklijuojamas ir pažymimas tekstas įprastai). Kiekvienas įklijavimas, iškirpimas, dubliavimas ar naikinimas yra vienas anuliavimo žingsnis. Daugiau: [Kopijavimas, įklijavimas ir dubliavimas](topic:copy-paste).

| Klavišas | Ką daro |
|---|---|
| {{key:Mod+C}} | {{ui:Copy}} pažymėtus elementus ir pamatus (su skylėmis, išpjovomis ir jungtimis) |
| {{key:Mod+X}} | {{ui:Cut}}: nukopijuoti pasirinkimą, tada jį naikinti |
| {{key:Mod+V}} | {{ui:Paste}}: kopija seka žymeklį; spustelėkite tinklelio susikirtimą, kad ją padėtumėte |
| {{key:Mod+Shift+V}} | {{ui:Paste in place}}: tose koordinatėse, iš kurių buvo nukopijuota |
| {{key:Mod+D}} | {{ui:Duplicate}}: iš karto sukuriama kopija, perkelta per poslinkį, nustatytą [DetailCraft parametruose](topic:settings) |
| {{key:Mod+A}} | {{ui:Select all}}: kiekvienas elementas, jungtis ir pamatas |
| {{key:Esc}} | {{ui:Select none}} |

Jei puslapyje pažymėjote tekstą (pvz., ataskaitos lentelėje), o modelyje nieko, {{key:Mod+C}} nukopijuoja tekstą įprastai.

{{ui:New}}, {{ui:Sample}} ir eksportams klavišų nėra; naudokite įrankių juostą.

Nė vienas šių klavišų neveikia, kol atidarytas dialogas (brėžinio peržiūra ar klausimas).

## Laukai ir skydeliai

| Klavišas | Ką daro |
|---|---|
| {{key:Enter}} arba {{key:Tab}} | Pritaikyti įvestą reikšmę (kiekvienas pakeitimas yra vienas anuliavimo žingsnis) |
| {{key:Enter}} {{ui:Grids}}, {{ui:Levels}}, {{ui:Custom profile}}, skylės ar išpjovos lauke | Tas pats, kas paspaudus tos formos mygtuką |
| {{key:Left}} {{key:Right}} | Perjungti skirtukus {{ui:Problems}}, {{ui:Bill of materials}} ir {{ui:Bending schedule}}, kai fokusuotas skirtukas |
| {{key:Esc}} | Uždaryti brėžinio peržiūrą ar klausimo dialogą (tas pats, kas {{ui:Cancel}}) |

## Ekranas ir pagalba

| Klavišas | Ką daro |
|---|---|
| {{key:Ctrl+Shift+F}} | Keisti režimus: įprastas, visas ekranas, visas ekranas su paslėptomis juostomis. Ctrl yra kiekviename kompiuteryje, įskaitant Mac |
| {{key:Mod+,}} | Atidaryti {{ui:Settings}} ([DetailCraft parametrai](topic:settings)) |
| {{key:Esc}} | Išeiti iš viso ekrano |
| {{key:F1}} | Atidaryti šį žinyną |

## Pelė

| Veiksmas | 3D vaizde | Planas ir fasadas |
|---|---|---|
| Spustelėjimas | Pasirinkti elementą arba padėti artimiausiame susikirtime, kai įjungtas dėjimo įrankis (arba įklijuoti ten, kai įklijuojate) | Tas pats |
| {{key:Shift}}, {{key:Ctrl}} arba {{key:Mod}} ir spustelėjimas | Pridėti elementą prie pasirinkimo arba jį išimti | Tas pats |
| Paspauskite pažymėtą elementą ir vilkite | Perkelti pasirinkimą per aukštį; laikant {{key:Mod}}, aukštyn ir žemyn | Perkelti pasirinkimą (fasade – išilgai jo ir aukštyn bei žemyn) |
| Vilkti kairiuoju mygtuku | Sukti modelį | Su {{ui:Select}}: pasirinkimo langas (į dešinę: visiškai viduje; į kairę: liečiant). Dedant: slinkti |
| {{key:Shift}} ir vilkti kairiuoju mygtuku | Su {{ui:Select}}: pasirinkimo langas, pridedamas prie pasirinkimo. Dedant: slinkti | Su {{ui:Select}}: pasirinkimo langas, pridedamas prie pasirinkimo |
| {{key:Ctrl}} arba {{key:Mod}} ir vilkti kairiuoju mygtuku | Slinkti | Nieko |
| Vilkti dešiniuoju mygtuku | Slinkti | Slinkti |
| Ratukas | Keisti mastelį link vaizdo vidurio | Keisti mastelį |
| Vilkti vidurio mygtuku | Keisti mastelį | Su {{ui:Select}}: slinkti. Kitu atveju keisti mastelį |
| Numesti `.detailcraft.json` failą ant programos | Atidaryti | Atidaryti |

Spustelėjimas laikomas tik tada, kai žymeklis tarp paspaudimo ir atleidimo pajuda mažiau nei apie 5 pikselius; ilgesnis judesys yra vilkimas.

## Jutiklinė plokštė

| Veiksmas | Ką daro |
|---|---|
| Dviejų pirštų braukimas aukštyn ar žemyn arba suspaudimas | Keisti mastelį |
| Paspausti ir vilkti | Sukti (3D) arba slinkti (Planas ir fasadas) |
| {{key:Shift}} ir paspausti bei vilkti | Slinkti 3D vaizde |
| Dviejų pirštų spustelėjimas | Dešinysis spustelėjimas (vaizde meniu nėra) |

## Lietimas

Planšetėje ar jutiklinio ekrano įrenginyje:

| Veiksmas | Ką daro |
|---|---|
| Palietimas | Pasirinkti elementą arba padėti artimiausiame tinklelio susikirtime, kai įjungtas dėjimo įrankis (palietimas maždaug per piršto plotį nuo jo laikomas) |
| Ilgas paspaudimas ant elemento | Pridėti prie pasirinkimo arba išimti (ką su pele daro {{key:Shift}}+spustelėjimas) |
| Vienas pirštas ant pažymėto elemento, tada vilkti | Perkelti pasirinkimą, prisitraukiant prie tinklelio susikirtimų |
| Vienas pirštas kitur | Sukti modelį (3D) arba slinkti (Planas ir fasadas) |
| Du pirštai | Suspausti, kad keistumėte mastelį; judinti kartu, kad slinktumėte |

Mygtukai, sąrašai ir laukai, kai ekranas tik jutiklinis, būna didesni. Pasirinkimo langams reikia pelės; pirštais naudokite palietimą ir ilgą paspaudimą.

## Klavišai, kuriuos palaiko naršyklė

Kai kurie trumpiniai priklauso naršyklei, ir joks puslapis jų naudoti negali, pavyzdžiui {{key:Mod+W}} (uždaryti kortelę), {{key:Mod+T}} (nauja kortelė) ir {{key:Mod+N}} (naujas langas). Jei {{key:Mod+Y}} atveria naršyklės istoriją vietoj perdarymo, naudokite {{key:Mod+Shift+Z}}.

Trumpiniai pasiekia DetailCraft tik tada, kai puslapis turi klaviatūrą. Jei klavišas nieko nedaro arba jį apdoroja naršyklė, pirmiausia spustelėkite tuščią DetailCraft lango vietą (pvz., po rašymo adreso juostoje).

## Kur yra perkėlimas

Perkėlimo komandos nėra: pažymėkite elementą ir vilkite jį per aukštį (laikykite {{key:Mod}}, kad vilktumėte aukštyn ir žemyn), arba redaguokite jo {{ui:Start}} ir {{ui:End}} reikšmes skydelyje {{ui:Properties}}.
