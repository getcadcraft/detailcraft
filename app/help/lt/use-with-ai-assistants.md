---
title: Naudoti DetailCraft su DI asistentu
summary: Leiskite savo DI asistentui ar scenarijui skaityti modelį, jo dalis, problemas ir susikirtimus, pridėti elementus ir jungtis, įrašyti ir eksportuoti (taip pat USD): leidimai, prijungimas per CadCraft Studio ir veiklos žurnalas.
keywords: DI, DI asistentas, agentas, mcp, modelio konteksto protokolas, scenarijus, automatizavimas, detalės, susikirtimai, jungtys, leidimai, atjungti, veikla, anuliuoti
from: d624c9a0
---

## Ką sužinosite

Kaip leisti DI asistentui (arba jūsų parašytam scenarijui) dirbti su DetailCraft ir kaip nuspręsti, ko jis gali liesti.

DetailCraft **neturi savo DI** ir niekur nieko nesiunčia. Asistentą atsinešate patys: bet kurią programą, kalbančią Modelio konteksto protokolu (MCP). DetailCraft jam tik suteikia įrankius, o pasirenkate, kuriuos.

## Įjunkite

1. Atidarykite {{ui:Parametrai}} (krumpliaratį programos juostoje arba {{key:Mod+,}}) ir eikite į {{ui:DetailCraft}} skirtuką.
2. Skiltyje {{ui:Asistentai}} pažymėkite **Leisti DI asistentams ir scenarijams naudoti DetailCraft**. Iš pradžių tai išjungta.
3. Pasirinkite, ką jis gali daryti: **Skaitymas** iš pradžių pažymėtas; pažymėkite **Redagavimas**, **Įrašymas** ar **Eksportas** tik tada, kai jų reikia.

Įrankiai, neįeinantys į jūsų pažymėtus leidimus, asistentui nepasiūlomi, o jei jis vis tiek paprašo vieno iš jų, DetailCraft jį atmeta ir įrašo į veiklos žurnalą. Išjungus jungiklį, visi ryšiai iš karto nutrūksta.

## Prijunkite asistentą

Asistentai prisijungia per **CadCraft Studio** jūsų kompiuteryje: Studio paleidžia nedidelį serverį, kurį pasiekia tik šis kompiuteris, apsaugotą prieigos raktu, kurį sukuria kiekvieną kartą paleidžiant. Studio programoje pasirinkite {{ui:Prijungti asistentą}} ir nukopijuokite adresą bei prieigos raktą į savo asistentą (Studio rodo tikslius nustatymus įklijavimui). Niekada nesidalykite prieigos raktu.

:::note
Naršyklės skirtukas negali atidaryti ryšio asistentui: naršyklės programose jungiklis neveikia, kol nenaudojate CadCraft Studio savo kompiuteryje.
:::

## Jūs ir toliau valdote

- **Kiekvienas pakeitimas yra vienas anuliavimo žingsnis**, pažymėtas kaip asistento (pavyzdžiui, „Asistentas: pridėti siją“, „Asistentas: pridėti sustiprinimo plokštes“). {{key:Mod+Z}} anuliuoja paskutinį asistento pakeitimą visą iš karto. Paties asistento `undo` anuliuoja tik jo žingsnius, niekada jūsų, nebent jis to aiškiai paprašo.
- **Jis laukia jūsų.** Kol įdedate elementą, perkeliate detales ar įklijuojate, DetailCraft atmeta asistento pakeitimus ir liepia bandyti dar kartą.
- **Žinote, kada jis prijungtas.** Programos juostos mygtukas, kol asistentas prijungtas, pavadina jį; spustelėkite, kad pamatytumėte, ką jis gali daryti, arba kad jį **Atjungtumėte**.
- **Veikla.** {{ui:Parametrai}} › {{ui:DetailCraft}} › {{ui:Asistentai}} › {{ui:Veikla}} rodo kiekvieną kvietimą: kada, kurį įrankį, atlikta ar atmesta. {{ui:Įrašyti žurnalą}} išsaugo kopiją.

## Ko gali prašyti asistentas

Visi ilgiai yra milimetrais, taškai `[x, y, z]` su z aukštyn, kaip modelyje.

| Įrankis | Leidimas | Ką daro |
|---|---|---|
| `app_info`, `model_describe` | Skaitymas | Atidaryto modelio: tinkleliai, lygiai, etapai, elementai pagal tipą ir profilį, jungtys, pamatai, laiptai, detalės, plieno svoris, problemos |
| `parts_list` | Skaitymas | Detalių žymos su profiliu, medžiaga, pjovimo ilgiu, kiekiu, svoriu, etapu ir surinkimo žymomis; pagal tipą, profilį, žymą ar etapą |
| `problems_list` | Skaitymas | Tai, ką rodo skirtukas {{ui:Problemos}}, kiekvienas su jo tema |
| `clash_check` | Skaitymas | [Susikirtimų patikra](topic:clash-check), su jos tolerancija ir etapais |
| `selection_get` | Skaitymas | Ką pasirinkote |
| `selection_set` | Redagavimas | Pasirenka elementus, jungtis, pamatus ar laiptus (pagal id ar detalės žymą), kad jums juos parodytų; nieko nekeičia |
| `member_add` | Redagavimas | Sija, kolona, įstrižinė atrama ar plokštė tarp dviejų taškų |
| `connection_add` | Redagavimas | Galinės plokštės, šlyties skardelės, pamato plokštės, sujungimai ar sustiprinimo plokštės ten, kur susiliečia nurodyti elementai, kaip daro mygtukai {{ui:Jungti}} |
| `undo` | Redagavimas | Anuliuoja paskutinius asistento žingsnius |
| `model_save` | Įrašymas | Paties DetailCraft įrašymas |
| `model_export` | Eksportas | IFC, NC failai, BOM, lenkimo grafikas, KISS failas ar pjovimo sąrašas, kaip daro {{ui:Išvestis}} mygtukai |
| `usd_export` | Eksportas | Plieninis modelis kaip USD (.usda, .usdc arba .usdz), kaip rašo {{ui:Išvestis}} › {{ui:USD}} (žr. [Eksportuoti plieninį modelį į USD](topic:usd)); Studio programoje jis gali įrašyti failą į jūsų leistą aplanką |

## Jei kas nors neveikia

- **Asistentas nemato DetailCraft įrankių:** patikrinkite, ar šiame lange jungiklis įjungtas, ir ar langas atidarytas Studio.
- **„reikia redagavimo leidimo“** (arba įrašymo, eksporto): pažymėkite jį skiltyje {{ui:Asistentai}}, tada vėl paprašykite.
- **„Naudotojas įdeda elementą“:** baikite tai, ką darote (arba paspauskite {{key:Esc}}), tada leiskite asistentui bandyti dar kartą.
- **Klaidos „401“ arba „token“:** prieigos raktas pasikeitė (Studio buvo paleistas iš naujo arba {{ui:Naujas prieigos raktas}}). Nukopijuokite naują į asistento nustatymus.

## Taip pat žr.

- [DI asistentų receptai](common:assistants-recipes): darbo pavyzdžiai, kiekvienas su įrankiais, kuriuos jie kviečia.
