---
title: Tööjooniste tegemine
summary: Üks leht detailimärgise kohta, tehtud kõik korraga: eelvaata neid ükshaaval ning laadi alla üks leht või kogu komplekt PDF-ina formaadis A4 kuni A1 või ANSI B kuni D, koos avade, väljalõigete, mõõtmete ja tiitliplokiga.
keywords: tööjoonis, tööjoonised, kõik detailid, partii, terve komplekt, ühe detaili joonis, valmistusjoonis, pdf, detailijoonis, tükijoonis, printimine
from: d25fe035
---

DetailCraft teeb ühe lehe detailimärgise kohta, iga tala, posti, diagonaali ja plaadi jaoks mudelis, kõik korraga: neid ei pea valima ükshaaval. Identsed tükid saavad ühe märgise ja seega ühe lehe. Lehed tehakse kohapeal mudelist; neid ei salvestata ega muudeta.

## Tee terve komplekt

1. Vali rühmas {{ui:Väljund}} nupp {{ui:Tööjoonis}}. Midagi ei pea olema valitud. Kui detail on valitud, avaneb aken selle detaili lehel. Paneelil {{ui:Omadused}} on sama nupp elementide puhul nimega {{ui:Tööjoonis}} ja ühenduste puhul nimega {{ui:Plaadi joonis}}.
2. Avaneb eelvaade, mille pealkiri on detailimärgis, näiteks „Tööjoonis b1“. Pealkirja kõrval olev esimene loend sisaldab iga detailimärgist koos profiili, pikkuse ja kogusega: vali üks, et näha selle lehte. Teine loend muudab lehe suurust; kogu komplekt tehakse selles suuruses uuesti (vt [Üldpaigutus- ja koostejoonised](topic:drawings#choose-the-sheet-size)).
3. Vali {{ui:Laadi kõik alla}} (nupul on lehtede arv) ühe PDF-i jaoks, kus on leht iga detailimärgise kohta, `<name> Shop drawings.pdf`. Iga leht ütleb oma tiitliplokis „Leht 3 / 42“. Või vali {{ui:Laadi PDF alla}} praegu vaadatava lehe jaoks, `<name> <mark>.pdf`.
4. Sulge eelvaade × nupuga või {{key:Esc}}.

Kui {{ui:Tööjoonis}} on hallina, pole mudelis veel ühtegi detaili.

## Mis lehel on

I-profiili puhul:

- **Vaade**, profiili seina poolt: detail, väljalõigetega, seina avad ringidena ja flantside avad peidetud (katkendjoontena).
- **Ülemise flantsi plaan**, ülevalt vaadatuna, kui mõnel flantsil on avad. Alumise flantsi avad on katkendjoontena.
- **Lõige** läbi profiili.
- **Mõõtmed:** avade asukohad ahelana mööda detaili ning üldpikkus, seina avade kõrgused, vahe ja väljalõigete mõõtmed.
- **Avade loend:** iga avarühm, näiteks „8 x Ø22 ülemises flantsis“.
- **Keevis**, kui detailile on keevitatud plaadid.
- **Tiitliplokk:** detailimärgis, koostemärgis, profiil, materjal, pikkus, arv, ühe detaili kaal ja kogukaal, mudeli nimi ja kuupäev.

U-profiili, nurkraua või õõnsa profiili korral on leht sama, vaadatuna seina või külje poolt: toru seinad on peidetud (katkendjoontena), lõige annab seina paksuse.

Plaadi korral: plaadi pind koos avadega ja selle serv lõikena.

## Mõõtkavad

Mõõtkava valitakse loendist (1:1 kuni 1:200), et detail mahuks lehele. Pikk ja madal detail oleks ühes mõõtkavas liiga õhuke, et seda lugeda, seega kui sügavus tuleks paberil alla 30 mm, joonistatakse sügavus suuremas mõõtkavas kui pikkus. Vaatepealkirjas on see öeldud, näiteks „pikkus 1:20, sügavus 1:5 (mitte ühes mõõtkavas; määravad mõõtmed)“. Suurusi loe alati mõõtmetelt, mitte lehte mõõtes.

## Hea teada

- Arv on mudelis selle märgisega detailide arv. Märgised võivad pärast muudatust ümber nummerdada; vt [Märgiste kontrollimine ja materjalinimekiri](topic:marks-and-bom).
- Iga leht on üks detail omaette, ilma keevisemärgisteta; koostejoonised (keevisemärgistega) ja üldpaigutusjoonised on [Joonised](topic:drawings) all. Lehte ei saa DetailCraftis muuta ega märkida. Märkimiseks ava PDF PDF-märgistusrakenduses, näiteks MarkupCraft.
- Tiitliplokis on „DetailCraft lab build — millimeters“.
- Tekst kasutab standardset PDF-i fonti Helvetica. Märgid, mis ei kuulu Lääne-Euroopa tähestikku, prinditakse küsimärgina „?“ ning olekuriba loeb need kokku.

## Printimine

Ava allalaaditud PDF oma PDF-vaatajas ja prindi see 100% (ilma „sobita lehele“) valitud suuruses paberile, kui soovid, et öeldud mõõtkavad kehtiksid. Väiksemale lehele skaleeri ja tugine mõõtmetele.
