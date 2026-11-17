---
title: Kas dar neįgyvendinta
summary: Ko šis ankstyvas DetailCraft leidimas dar negali ir ką daryti šiandien vietoj to.
keywords: ribos, apribojimai, trūksta, planas, nepalaikoma, artėjanti, planuojama, laikinas sprendimas, darytina
from: ea411885
---

DetailCraft yra ankstyvas leidimas. Šiame puslapyje išvardyta, ko jis dar nedaro, kad galėtumėte planuoti. Čia nieko nėra pažadas dėl datos.

## Modeliavimas

| Dar ne | Vietoj to, šiandien |
|---|---|
| Elemento galo tempimas (vieno galo keitimas vilkimu) | Redaguokite {{ui:Pradžia}} arba {{ui:Galas}} skiltyje {{ui:Galai (x, y, z mm)}} skydelyje {{ui:Savybės}} |
| Pasirinkimo filtras (tik sijos, tik vienas profilis) | Nuvilkite langą, tada spragtelėkite su {{key:Shift}}, kad pašalintumėte detales |
| Pasirinkimo kopijavimas masyvu; sukimas aplink nuožulnią ašį; atspindys nuožulniame plokštumoje | Nukopijuokite ir įklijuokite su poslinkiu arba {{ui:Dubliuoti}}; sukimas ir atspindys veikia plane ([Pasirinkimas langu, perkėlimas, sukimas, atspindys, keitimas daugeliui](topic:select-and-change)) |
| Taškai, esantys ne tinklelyje, spragtelint | Dėkite ant tinklelio, tada įveskite galo koordinates |
| Fasadai išilgai numeruotų ašių; išsaugoti vaizdai; darbo plokštumos | Naudokite {{ui:3D}} arba {{ui:Pridėti pagal ašis}} |
| Skylės, nubraižytos kaip tikri pjūviai 3D vaizde | Skylės rodomos kaip tamsūs kamščiai; jos tikros visuose eksportuose |
| Suapvalintos arba įstrižos išpjovos, kiti pjūviai ir sujungimai | Tik statmenos išpjovos ant I formos profilių |
| Skylės, kurias pridedate kampuotiniams ir apvaliems vamzdžiams | Kampuotinių skylės tik iš [įstrižainių jungiamųjų plokščių](topic:brace-gussets) |
| Colių įvestis | Įveskite milimetrus (25.4 viename colyje) |
| Pasirinktinio profilio redagavimas arba šalinimas | Pridėkite pataisytą profilį nauju pavadinimu |

## Laiptai

| Dar ne | Vietoj to, šiandien |
|---|---|
| Turėklai, aikštelės, pakopų kraštinės, grotelių pakopos, sraigtiniai ir dvilinkiai laiptai | Tik tiesūs laiptų ruožai; žr. [Laiptai](topic:stairs) |
| Laiptų sijų galų pjovimas pagal perdangas | Statmenai nupjautos laiptų sijos; pjaukite jas savo gamybos programinėje įrangoje |

## Jungtys

DetailCraft sukuria šešias jungtis: įstrižainės jungiamąją plokštę (žr. [Įstrižainių jungiamosios plokštės](topic:brace-gussets)); varžtais sujungiamą sujungimą tarp dviejų vienos I formos profilio dalių (žr. [Sujungimai](topic:splices)); įstrižą sujungimą tarp dviejų I formos profilių, susiliejančių kampu, – tik nupjautą arba su varžtais tvirtinamomis galinėmis plokštėmis (žr. [Įstrižos jungtys](topic:mitres)); lygiai įleistą arba išplėstą varžtais tvirtinamą galinę plokštę nuo lygio, vertikalios I formos sijos iki kolonos I formos diržo arba sienelės; kirpimo plokštelę nuo sijos (statmenai, įstrižai arba nuožulniai) iki kolonos diržo arba sienelės; ir kolonos pagrindo plokštę su keturiais inkarinių strypų.

| Dar ne | Vietoj to, šiandien |
|---|---|
| Įstrižos arba nuožulnios galinės plokštės | Naudokite [kirpimo plokšteles](topic:shear-tabs), kurios tinka įstrižoms ir nuožulnioms sijoms |
| Fiksavimo kampuočiai; sujungimo užpildo plokštės ir sujungimai tarp skirtingų dydžių; kampinės jungiamosios plokštės, suvirintos prie sijos ir kolonos; nupjautos kampinės jungiamosios plokštės | Detalizuokite kitoje programinėje įrangoje arba pridėkite plokštes ir skyles rankiniu būdu kaip laisvas detales; žr. [Sujungimai](topic:splices), [Įstrižainių jungiamosios plokštės](topic:brace-gussets) |
| Nuožulnūs arba siaurėjantys pagrindo stiprintuvai; injekcinės skylės; pamato kišenė kirpimo kilpai | Stačiakampiai stiprintuvai; žr. [Pagrindo plokštės](topic:base-plates) |
| Išlinkimai (haunches); suvirintos įstrižos jungtys su sandūriniu siūliu; stiprintuvai, išlygiuoti su kito elemento diržais | [Įstrižos jungtys](topic:mitres) su galinėmis plokštėmis ir sienelės stiprintuvais arba paprastas įstrižas pjūvis; kitas plokštes pridėkite rankiniu būdu kaip laisvas detales |
| Jungčių projektavimo patikros (stiprumas) | Patikrinkite jungtis savo inžinieriaus skaičiavimais; DetailCraft tik įspėja apie krašto atstumą ir tarpus |
| Ilgosios skylės | Tik apvalios skylės |

## Analizė

| Dar ne | Vietoj to, šiandien |
|---|---|
| Projektavimo patikros, išskyrus plieno I formos profilius: vamzdžius, kampuotinius, kanalus, suvirintas formas, lieknus arba 4 klasės elementus, sukimą, jungtis; betonas: sijų lieknumą, sukimą, seisminį detalizavimą, perdangas ir sienas | Skirtukas {{ui:Analizė}} tikrina plieno I formos profilius pagal AISC 360 arba EN 1993-1-1 ([Patikrinkite plieno elementus pagal projektavimo normą](topic:design-checks)); likusius skirtukas palieka pažymėtus „netikrinta“; visą tai peržiūri inžinierius |
| Lenkimo (buckling) analizė, vibracija | Antros eilės analizė tik P-Delta (tampri); lenkimo analizės nėra (modalinė, atsako spektro, laiko istorijos ir pushover analizė yra skirtuke {{ui:Analizė}}) |
| Projektavimo patikros, kurias inžinierius yra peržiūrėjęs | Iki tol jos yra pagalba: prieš jomis pasikliaudami patikrinkite du ar tris elementus rankiniu būdu arba savo inžinieriaus programa |
| Perdangos, vėjo ir sniego apkrovos, sukurtos automatiškai iš plotų | Apkrovas elementams dėkite rankiniu būdu, kN/m arba kN |
| Elementų poslinkiai, ekscentriniai sujungimai, tik tempiamosios įstrižainės, plokštės ir pamatai rėmuose | Elementai analizuojami pagal savo darbo linijas; įstrižainės perima tempimą ir gniuždymą |

## Armatūra

| Dar ne | Vietoj to, šiandien |
|---|---|
| Apvalūs stulpai, spiralės, nuožulnios arba lenktos sijos, perdangos, kurios nėra stačiakampės, sienos, kurios nėra tiesios | Stačiakampės sijos, kolonos, perdangos ir sienos ([Armuoti gelžbetonį](topic:reinforced-concrete)) |
| Strypai, įlenkti į persiklojimą; išdėstyti persiklojimai; persiklojimai pasirinktose vietose | Persiklojimai vienodais žingsniais, kiekvienas strypas persiklojęs vienoje pjūvio vietoje (ACI Class B, EN α6 = 1.5) |
| Kampiniai strypai prie angų, perkirpimo armavimas, seisminis detalizavimas (ACI 318-19 18 skyrius) | Papildomi strypai kiekvienoje angos pusėje; likusį patikrinkite patys |
| Konstrukcinės projektavimo programos failų skaitymas | Eksportuokite IFC iš jos: jos IfcReinforcingBar įkeliami kaip strypai ([Strypai iš IFC failo](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Lenkimo formos, išskyrus tiesią, vieną lenkimą ir U; ACI 315 tipai tiesiems ir vieno kablio strypams | Trys formos spausdinamos kaip BS 8666 00, 11, 21 arba ACI Type 2; žr. [Armatūros žinynas](topic:rebar-reference) |
| Metriniai strypai, kitokie nei BS 4449 H8–H40 (pvz., CSA 10M–35M) | ASTM minkštųjų metrinių pavadinimai #10–#36 arba BS strypai |

## Brėžiniai ir eksportai

| Dar ne | Vietoj to, šiandien |
|---|---|
| Vertikalūs lapai, A0 ir jūsų dydžio lapai; bendrieji išdėstymo vaizdai ant įstrižų ašių | Horizontalūs A4–A1 ir ANSI B–D lapai ([Bendrieji ir surinkimo brėžiniai](topic:drawings)); PDF mastelį pakeiskite, kad spausdintumėte kitu dydžiu |
| Suvirinimo simboliai vienos detalės gamybiniuose brėžiniuose; simboliai, kitokie nei kampiniai siūliai | Surinkimo brėžiniuose yra kampinių siūlių simboliai; gamybiniame brėžinyje suvirinimas nurodomas tekstu |
| Brėžinio redagavimas programoje | Pakeiskite modelį ir brėžinį sukurkite iš naujo; PDF žymėkite PDF programa, pavyzdžiui MarkupCraft |
| Brėžiniai DWG formatu su matmenų objektais arba modelis natūraliu dydžiu modelio erdvėje su lapais kaip išdėstymais | Kiekvienas lapas yra pilno dydžio DWG arba DXF popieriaus brėžinys, matmenys – kaip linijos ir skaičiai ([Bendrieji ir surinkimo brėžiniai](topic:drawings#download)) |
| NC skylės apvaliuose vamzdžiuose, išpjovos kampuotiniuose ir apvaliuose vamzdžiuose NC failuose | Neįrašoma; žr. [NC failo laukai](topic:nc1-fields) |
| Nuožulnos, žymėjimai ir vidiniai kontūrai NC failuose | Šiuo metu nėra |
| Varžtų skylės, varžtai, suvirinimai ir pamatai USD eksporte | Jie yra IFC, NC ir medžiagų sąrašo išvestyse; žr. [Eksportuoti plieno modelį USD formatu](topic:usd) |
| Jungčių, pamatų, ilgųjų ar stačiakampių skylių ir skylių apvaliuose vamzdžiuose įkėlimas iš IFC failo | {{ui:Importuoti IFC}} įkelia sijas, kolonas, elementus, plokštes, ašis, lygius, apvalias skyles, išpjovas, varžtus ir armatūros strypus, o jo ataskaitoje nurodoma, ką paliko |
| Pasirinktiniai ataskaitų maketai | Trys CSV failai |

## Skydeliai

| Dar ne | Vietoj to, šiandien |
|---|---|
| Apatinių ataskaitų perkėlimas ({{ui:Problemos}}, {{ui:Medžiagų sąrašas}}, {{ui:Lenkimo žiniaraštis}}) | Perkelti galima tik skydelius {{ui:Modelis}} ir {{ui:Savybės}}. Žr. [Skydelių išdėstymas](common:arrange-panels) |

## Darbas kartu ir įrašymas

| Dar ne | Vietoj to, šiandien |
|---|---|
| Debesies įrašymas ir sinchronizavimas tarp kompiuterių | Įrašykite `.detailcraft.json` failus ir dalinkitės jais kaip bet kuriuo failu. Debesies įrašymas dar nepasiekiamas |
| Kitų žmonių žymekliai ir „redaguoja“ žymos Live TeamWork sesijoje; tinklai, lygiai ir etapai sujungiami elementas po elemento | Pakeitimai vis dar sujungiami (tinklai, lygiai ir etapai perkeliami visi, laimi vėlesnis pakeitimas); žr. [Vieną struktūrą detalizuokite kartu, tiesiogiai](topic:work-live) |
| Kvietimo nuorodos į Live TeamWork sesiją per internetą | Prisijunkite trumpu kodu tame pačiame tinkle |

## Platformos

- DetailCraft skirtas stalinio, nešiojamojo ar planšetinio kompiuterio ekranui. Jis veikia ir telefone: modelis išlaiko ekraną ir skydelius, o ataskaitos atsidaro kaip lapai iš juostos apačioje, tačiau skydeliams vietos nedaug.
- Darbui neprisijungus pirmiausia reikia įrašyti DetailCraft neprisijungus, naudojant {{ui:Įrašyti neprisijungus}} programos viršutinėje juostoje; kai parodoma {{ui:Paruošta neprisijungus}}, viskas šiame leidime veikia be ryšio. Žr. [Darbas neprisijungus](common:offline).

Jei kuris nors iš šių trūkumų blokuoja jūsų darbą, praneškite per [palaikymo puslapį](https://getcadcraft.com/support); tai padeda nuspręsti, ką kurti toliau.
