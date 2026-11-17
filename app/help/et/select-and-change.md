---
title: Vali akna abil, teisalda, pööra, peegelda, muuda paljusid
summary: Lohista aken valimiseks, lohista valitud detailid nende teisaldamiseks, teisalda, pööra või peegelda valikut (või selle koopiat) või muuda paljude elementide profiili, materjali, asendit või pööret korraga.
keywords: lasso, piire, vabakäeline valik, lohistamine, lohista ja aseta, kinnitus, aken, ristuv valik, kasti valik, lohista valides, vali palju, teisalda, pööra, peegelda, kopeeri, muuda paljusid, mitu elementi, profiil, materjal, asend, pööre, erinev, ruudustikujoon
from: 50b16f9a
---

Igaüks neist on üks tagasivõtmise samm: üks {{key:Mod+Z}} võtab kõik tagasi.

## Valimine akna abil

- Vaadetes {{ui:Plaan}} ja {{ui:Vaade}} lohista vasaku nupuga tühjast kohast. Vaates {{ui:3D}} hoia all {{key:Shift}} ja lohista (tavaline lohistamine pöörab mudelit).
- Lohista **paremale** akna jaoks: see võtab selle, mis on täielikult sees, joonistatud pideva servaga.
- Lohista **vasakule** ristuva akna jaoks: see võtab kõik, mida puudutab, joonistatud katkendjoonega.
- Hoia {{key:Shift}} all lohistamise alustamisel, et lisada valikule, mitte seda asendada.
- Plaan või vaade pakub ainult seda, mida näitab: plaanist üleval lõigatud detaile või rohkem kui 1 m vaate ruudustikujoonest kaugemal asuvaid detaile ei valita.
- {{key:Esc}} lohistamise ajal tühistab akna.

### Lasso

Vali **Lasso** jaotises {{ui:Lohistamine valimiseks}} [DetailCraft'i sätetes](topic:settings) ja sama lohistamine joonistab ristkülik asemel vabakäelise joone.

- Esimene külgsuunaline liigutus määrab valiku: **paremale** – mis on täielikult sees (pidev joon); **vasakule** – mida puudutab (katkendjoon).
- Vajuta lohistamise ajal {{key:Space}}, et vahetada sees, puudutab ja **piire** vahel: avatud joon, mis võtab kõik, mida ületab (punktiirjoon, oranž).
- {{key:Shift}} lisamiseks ja {{key:Esc}} tühistamiseks töötavad nagu akna puhul.

:::touch
Puuteekraanil liigutab üks sõrm plaani ja vaadet nagu varem; vali detailid koputades neid.
:::

Vaadetes {{ui:Plaan}} ja {{ui:Vaade}} nihuta vaadet parema või keskmise nupuga, kui tööriist {{ui:Vali}} on sees.

## Lohista detailid teisaldamiseks

1. Vali kõigepealt detailid (klõps, {{key:Shift}}+klõps või aken).
2. Vajuta valitud detaili peale ja lohista. Kogu valik liigub; katkendjoon näitab, kuhu see läheb.
3. Lase lahti, et paigutada. {{key:Esc}} enne lahtilaskmist paneb kõik tagasi.

- Vaadetes {{ui:3D}} ja {{ui:Plaan}} liiguvad detailid üle tasandi. Vaates {{ui:3D}} hoia lohistamise alustamisel all {{key:Mod}}, et need hoopis üles ja alla liigutada.
- Vaates {{ui:Vaade}} liiguvad need vaate piires: mööda ruudustikujoont ning üles ja alla.
- Detail, mida hoiad, kinnitub ruudustiku ristumispunkti külge, kui selle ots jõuab sellele mõne pikslini lähedale (ristumispunkt süttib ja olekuriba nimetab selle). Mujal liigub teisaldus 10 mm sammudes.
- Valimata detaili peale vajutamine pöörab või nihutab siiski vaadet, nii et lohistamine ei teisalda juhuslikult midagi.
- Lohistamine on üks tagasivõtmise samm, nagu {{ui:Teisalda}}. Ühendused järgivad oma elemente.

## Muuda omadust paljudel elementidel

Vali kaks või rohkem elementi. Paneelil {{ui:Omadused}} jaotises **Muuda kõigil neil**:

- {{ui:Profiil}}, {{ui:Asend}}: nende seas olevatele taladele, postidele ja diagonaalidele.
- {{ui:Plaadi paksus (mm)}} ja {{ui:Plaadi laius (mm)}}: plaatidele.
- {{ui:Materjal}} ja {{ui:Pööre (°)}}: kõigile.

Väli näitab **Erinev**, kui elemendid ei ühti. Vali või sisesta väärtus ja iga element, kellele see kehtib, saab selle; olekuribal on öeldud, mitu muutus ja mitu jäi oma väärtuse juurde.

Arvväljad paneelil {{ui:Omadused}} võtavad vastu ka arvutuse: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Arvutust, mida ei saa lugeda, ei võeta vastu ning olekuribal on öeldud, kus viga on.

## Teisalda, pööra või peegelda

Vali elemendid ja vundamendid (ka üks töötab), seejärel kasuta paneelil {{ui:Omadused}} käsku **Teisalda, pööra, peegelda**. Ühendusi ei teisaldata eraldi: need järgivad oma elemente. Kui teisaldad talat, aga mitte selle posti, ütleb olekuriba, mitu ühendust ühendab nüüd teisaldatud elemendi selle elemendiga, mis jäi paigale, ja [Probleemid](topic:troubleshooting) ütleb, kui need enam ei sobi.

- **Teisalda:** sisesta x, y ja z millimeetrites ning vali {{ui:Teisalda}}. Või vali {{ui:Määra kaks punkti}} (või vajuta {{key:M}}): klõpsa ruudustiku ristumispunkti, kust alustada, ja siis seda, kuhu liikuda. Katkendjoon järgib kursorit.
- **Pööra plaanis:** sisesta nurk (vastupäeva, ülevalt vaadatuna) ja vali, mille ümber pöörata: valiku keskpunkt või ruudustiku ristumispunkt. Postid pööravad koos raamiga.
- **Peegelda:** vali ruudustikujoon. Peegelpilt on sama profiil teistpidi keeratud: I-profiil säilitab oma flantsid, U-profiil on teises suunas (ülemine ja alumine serv vahetuvad) ning avad ja väljalõiked liiguvad detailiga kaasa.
- Märgi **Jäta originaal alles (tee koopia)**, et jätta valik paika ja teisaldada, pöörata või peegeldada koopiat. Selle ühendused tulevad kaasa, kui {{ui:Kopeeri otsaplaadid ja aluseplaadid koos elementidega}} on sisse lülitatud [DetailCraft'i sätetes](topic:settings).

Pööramine toimub vertikaalse joone ümber ja peegeldamine vertikaalsel tasandil, nii et tasandid jäävad horisontaalseks ja vundamendid püsti.
