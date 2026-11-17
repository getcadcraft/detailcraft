---
title: Paiguta vundamendid armatuuriga
summary: Paiguta ristkülikukujulised isoleeritud vundamendid alumise võrgu ja ankurvarrastega, kontrolli neid ning laadi alla painutusloend.
keywords: vundament, isoleeritud vundament, armatuur, võrk, ankurvardad, dübelid, painutusloend, vardanimekiri, betoon, konksud, kattekiht
from: 41a048be
---

Sellel teemal on juttu ristkülikukujulistest isoleeritud vundamentidest. Talasid, poste, plaate ja seinu käsitleb [Betoonkonstruktsioonide detailimine](topic:reinforced-concrete). Igal vundamendil on mõlemas suunas alumine võrk ja soovi korral ka vundamendist üles ulatuvad ankurvardad. Vardad on USA suurustes #3 kuni #11.

## Vundamendi paigutamine

1. Vali {{ui:Plaan}} ja vali vundamendi ülaosa tasand.
2. Vali rühmas {{ui:Paiguta}} käsk {{ui:Vundament}} või vajuta {{key:F}}.
3. Määra vundament paneelil {{ui:Omadused}} (vt allpool) või jäta vaikeseaded.
4. Klõpsa ruudustiku ristumiskohal. Vundament paigutatakse ristumiskoha keskele, ülaosaga tasandil. Olekuribal on näiteks „Vundament 2000 x 2000 x 600 punkti A/1 all.”

Vundamendi saab paigutada ka paneeli allosas oleva vormiga {{ui:Lisa ruudustiku järgi}}.

Vundament joonistatakse läbipaistvana, et näha selle vardaid, mis joonistatakse tahketa toruna.

## Vundamendi seaded

| Väli | Vaikimisi | Märkused |
|---|---|---|
| Pikkus L (mm) | 2000 | Piki x; 300 kuni 50000 |
| Laius B (mm) | 2000 | Piki y; 300 kuni 50000 |
| Sügavus H (mm) | 600 | 150 kuni 10000 |
| Betoon | 4000 psi | Tekst, prinditakse IFC-ekspordis |

**Alumine võrk**

| Väli | Vaikimisi | Märkused |
|---|---|---|
| Pikad vardad | #5 | Piki L kulgevad vardad, alumine kiht |
| Samm (mm) | 250 | Suurim lubatud samm; vardad jaotatakse ühtlaselt sellise või tihedama sammuga |
| Lühikesed vardad | #5 | Piki B kulgevad vardad, paigutatud pikkade varraste peale |
| Samm (mm) | 250 | Nagu eespool |
| Kattekiht (mm) | 75 | Vaba kattekiht igal küljel |
| Otsakonksud | Sees | Keerab iga võrguvarda mõlemad otsad üles standardse 90° konksuga (kuju U); väljas annab sirged vardad (kuju S) |

**Ankurvardad**

| Väli | Vaikimisi | Märkused |
|---|---|---|
| Ankurvardad | Sees | Lülita välja vundamendi puhul, millel ankurvardaid pole |
| Varras | #6 | |
| Vardad piki L / vardad piki B | 2 / 2 | Vardade ruudustik, tsentreeritud vundamendi keskele |
| Samm piki L / samm piki B | 250 / 250 | Varraste keskpunktide vahel |
| Ulatus üle ülaosa | 600 | Kui kaugele vardad vundamendi ülaosast üles ulatuvad |
| Konks all | Sees | 90° konks, mis osutab väljapoole ja toetub võrgule (kuju L) |

Väljade all näitab DetailCraft pikkade varraste konksuharu, näiteks „Konksuharu #5 jaoks: 254 mm välisservast välisservani.”

## Paigutatud vundamendi muutmine

Vali vundament (klõpsa selle betoonil postidest eemal või ühel selle vardal). Saad samad väljad ning lisaks {{ui:Keskpunkt x}}, {{ui:Keskpunkt y}}, {{ui:Ülemine z}} ja {{ui:Pööre (°)}}. Nende all loetleb tabel selle vundamendi vardad koos märgise, arvu ja pikkusega ning betoonimahu kuupmeetrites.

Iga muudatus kontrollitakse enne salvestamist. Muudatus, mida ei saa ehitada, lükatakse tagasi ja olekuriba ütleb põhjuse, näiteks „Kattekiht ei jäta selles vundamendis vardadele ruumi.”, „Vundament on kahe armatuurikihi jaoks katte sees liiga madal.” või „Ankurvardad ei mahu 75 mm katteskihiga vundamendi sisse.”

Muudatused, mida saab ehitada, kuid mis vajavad üle vaatamist, on loetletud vundamendi all ja vahekaardil {{ui:Probleemid}}:

- „#11 vardad sammuga 59.6 mm jätavad alla 35.8 mm vaba vahe.” (ACI 318-19 25.2.1). Varraste vaba vahe peab olema vähemalt varda läbimõõt ja vähemalt 25.4 mm.
- „#5 konksud vajavad 254 mm sügavust; katte sees mahub ainult 150 mm.” Konksuharud lühendatakse siis sobivaks, mistõttu ei ole need enam standardsed konksud.
- „Ankurkonksud ulatuvad katteskihti.”
- „Ankurvardad on lähemal kui minimaalne vaba vahe.”

## Varraste märgistus ja painutusloend

Identsed vardad (sama suurus, kuju ja mõõdud millimeetrini) jagavad kõigi vundamentide vahel ühte varda märgist. Märgised kirjutatakse kujul `<varda number>F<n>`: 5F1 ja 5F2 #5 vardade jaoks, 6F1 esimese #6 varda jaoks jne. Vundamendid, millel on sama suurus, betoon, võrk ja ankurvardad, jagavad ühte vundamendi märgist: F1, F2 …

1. Ava allservas vahekaart {{ui:Painutusloend}}. Iga rida on üks varda märgis: suurus, kuju, mõõdud A, B ja C, arv, lõikepikkus, kogupikkus, meetripikkuse mass, igaühe mass, kogumass ja varda kasutusotstarve.
2. Vali vahekaardil {{ui:Laadi alla CSV}} või rühmas {{ui:Väljund}} menüüst {{ui:Veel}} käsk {{ui:Painutamine}}, et saada fail `<name> bending schedule.csv`.

Kujud on DetailCraft'i enda koodid, mitte standardi omad: S sirge, L üks painutus, U kaks painutust. Mõõdud on välisservast välisservani; lõikepikkus on täpne keskjoone pikkus läbi painutuste. Vt [Armatuuri viide](topic:rebar-reference).

## Mida DetailCraft ei kontrolli

- Arendus- ja ülekattepikkused ning kas ankurvardad on piisavalt pikad kohal oleva posti jaoks.
- Vaba vahe reegli killustikumõõdu osa (programm ei tea segu koostist).
- Kõik, mis puudutab kohal olevat posti või alusplaati: vundamendid ja teras on eraldi.

Vt ka [Mis pole veel valmis](topic:not-built-yet).
