---
title: Faasid
summary: Jaga mudel faasideks (montaažijärjestused või tarned), näita või peida iga faas, pane detailid faasi ja nummerda märgised faasi kaupa.
keywords: faas, faasid, faasihaldur, montaažijärjestus, tarne, partii, järjestus, peida faas, näita faas, filter, nummerdamine, märgise eesliide, faasi kaupa
from: bae506f5
---

Faas on rühm detaile, mis valmistatakse, tarnitakse või paigaldatakse koos: montaažijärjestus, tarne, partii. Iga element ja vundament on ühes faasis. Ühendus kuulub oma põhielemendi faasi: otsplaat talale, aluseplaat postile. Uuel mudelil on üks faas.

## Faasipaneel

Jaotis {{ui:Faasid}} paneelis {{ui:Mudel}} loetleb kõik faasid:

- märkeruut näitab või peidab faasi vaates;
- number ja nimi, mida saab kirjutada (tühi = „Faas 2“ jne);
- mitu detaili on selles faasis;
- nupp {{ui:×}} eemaldab faasi. Ainult tühja faasi saab eemaldada: pane selle detailid enne mõnda teise faasi.

{{ui:Lisa faas}} lisab järgmise numbri ja teeb selle faasi, kuhu uued detailid lähevad.

## Detailide paigutamine faasi

- **Uued detailid:** {{ui:Uued detailid lähevad}} valib faasi, kuhu lähevad kõik edaspidi paigutatavad elemendid ja vundamendid.
- **Üks detail:** vali see ja muuda {{ui:Faas}} paneelis {{ui:Omadused}}.
- **Mitu detaili:** vali need (aken, {{key:Shift}}+klõps, {{key:Mod+A}}) ja muuda {{ui:Faas}} paneeli {{ui:Omadused}} ülaosas. Kui need on eri faasides, näitab see **Erinev**. Üks muudatus on üks tagasivõtmise samm.

Koopiad säilitavad faasi, millest nad kopeeriti, ka siis, kui need kleebitakse teise mudelisse (faas lisatakse sinna).

## Faaside näitamine ja peitmine

Peidetud faasi ei joonistata vaates, seda ei saa klõpsata ega valikuaknaga haarata ning {{key:Mod+A}} jätab selle välja. See on siiski materjalinimekirjas, aruannetes, joonistel ja igas eksportis. Peitmine kehtib ainult vaate kohta: seda ei salvestata ja tagasivõtmist pole.

## Märgised faasi kaupa

Kui **Nummerda märgised faasi kaupa** on sisse lülitatud (alguses see on sees) ja detailid on rohkem kui ühes faasis, nummerdatakse iga faas eraldi ning selle märgised algavad faasi numbriga: detailimärgised 1-b1, 2-b1, koostemärgised 2-B1, vundamendid 2-F1. Kaks identset tala eri faasides saavad siis erinevad märgised, sest need valmistatakse ja saadetakse eri aegadel. Kui kasutuses on üks faas, pole märgistel eesliidet. Selle välja lülitamisel nummerdatakse kogu mudel ühena, nii et identsed tükid jagavad märgist, olenemata faasist.

Faas kirjutatakse IFC-ekspordi sisse (omaduste hulk DetailCraft, Phase).

:::note
Faasidega mudelid salvestatakse DetailCraft'i failivormingus 2. DetailCraft'i versioon 0.3 neid ei ava; see versioon avab vanemad failid, kus kõik detailid on faasis 1.
:::
