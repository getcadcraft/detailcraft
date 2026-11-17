---
title: Armeeri ristkülikukujuline betoonpost
summary: Töötatud näide ristkülikukujulise betoonposti detailimisest DetailCraftis: paiguta see, anna sellele pikivarred ja sidemed, loe kontrollid, selle kohal olev ülekate ja armatuurimärgid ning joonista selle tööleht.
keywords: betoonpost, ristkülikukujuline post, postiarmatuur, pikivarred, vertikaalsed varrad, sidemed, kontuursidemed, ristsidemed, ülekatteliide, ootevardad, postiterase suhe, 1 protsent, 8 protsent, sideme samm, ACI 318-19 25.7.2, EN 1992-1-1 9.5, tööjoonis, armatuurimärgid, 8C1, 3C2
from: aee2a3ca
---

Selles teemas viiakse üks ruudukujuline post nullist kontrollitud, joonistatud ja loetletud detailini. Üldised reeglid talade, plaatide ja seinte kohta on jaotises [Detailimine armeeritud betoon](topic:reinforced-concrete); see on posti pool sellest, arvudega, mida saad ise korrata.

:::warning
DetailCraft detailib sulle antud varrad. Ta ei projekteeri neid. Allpool olevad varrad on näite lähteväärtused, mitte soovitus: projekteerimisinsener valib suuruse, arvu ja vahe.
:::

## Mis on post siin

Ristkülikukujulisel postil on laius (mööda tema kohalikku x-telge) ja sügavus üle (mööda y-telge), selge kaitsekiht sidemeni, pikivarred igal küljel ja suletud sidemed. Pööramine pöörab kogu asja; küljed jäävad „laiuse küljeks“ ja „sügavuse küljeks“.

- Pikivarrad antakse arvuna laiuse küljel ja arvuna sügavuse küljel. Nurgavarred loetakse mõlemal, nii et 3 ja 3 teevad 8 varrast; 4 ja 4 teevad 12.
- Sidemed on suletud ristkülikud kahe konksuga ühes nurgas, 135° või 90°. Esimene side on kindla kauguse võrra põrandast üleval (ja järgmisest all); otsatsoonidel on tihedam samm, keskel laiem.
- Mida varrased teevad ülaosas: jätkuvad ja ülekattuvad kohal olevate varrastega, pööratakse 90° konksudega põranda sisse või peatuvad ülaosa all.

## Töötatud post

400 × 400 mm post, 3600 mm ülemise ja alumise põranda vahel, #8 pikivarred, #3 sidemed, 40 mm selge kaitsekiht, f'c 28 MPa, fy 420 MPa, ACI 318-19, sisemine.

1. Ava vahekaart {{ui:Betoon}} ja seadista ruudustikujooned ja tasandid, millel post seisab (vasak paneel).
2. Valikus {{ui:Lisa ruudustiku järgi}} vali {{ui:Betoonpost}}, vali ruudustiku ristumine ja kaks tasandit, sea {{ui:Laius (mm)}} ja {{ui:Sügavus läbi (mm)}} väärtuseks 400 ning vali {{ui:Lisa}}.
3. Paneelil {{ui:Omadused}} sea:
   - {{ui:Puhas kaitsekiht (mm)}} 40;
   - {{ui:Pikivarrased}} #8, {{ui:Varraste arv laiuse küljel}} 3, {{ui:Varraste arv sügavuse küljel}} 3;
   - {{ui:Sidemed}} #3, {{ui:Konksud}} 135°, {{ui:Vahe (mm)}} 300, {{ui:Otsatsooni pikkus (mm)}} 600, {{ui:Samm otsatsoonides (mm)}} 150, {{ui:Esimene pinnast (mm)}} 50;
   - {{ui:Varrased ülaosas}} {{ui:Jätkub ja ülekattub kohal olevate varrastega}}.

Iga muudatus on üks tagasivõtmise samm.

### Mida sa saad

| Osa | Tulemus |
|---|---|
| Pikivarred | 8 varrast #8 (3 × 3 rõngas), igaüks 4375 mm pikk: 3600 mm post pluss 775 mm ülekate üleval |
| Ülekate | 757 mm on vajalik survepiirangu ülekatteks (ACI 318-19 25.5.5.1, fy 420), 775 mm on ette nähtud: vajadus ümardatud üles järgmise 25 mm-ni |
| Sidemed | 17 sidet #3, igaühe lõikepikkus umbes 1359 mm, 150 mm sammuga kahes 600 mm otsatsoonis ja 300 mm vahedega |
| Terasesuhe | 2.5 % brutolõikest (piirid 1 % kuni 8 %, ACI 318-19 10.6.1.1) |
| Varraste selge vahe | 112 mm (vaja vähemalt 40 mm, ACI 318-19 25.2.3) |
| Sideme samm | 300 mm (lubatud 400 mm: väikseim neist 16 varda läbimõõtu, 48 sideme läbimõõtu ja väiksem külg, ACI 318-19 25.7.2.1) |
| Sideme suurus | #3 (lubatud kuni 9.5 mm, ACI 318-19 25.7.2.2) |

Need kõik on elemendi loendis {{ui:Kontrollid}}; ülekate on ka {{ui:Ülekatted ja ankurdus}} all.

## Ristsidemed

Ühe perimeetrilise sidemega on kinni hoitud ainult nurkvardad. ACI 318-19 25.7.2.3 lubab külje keskvardal jääda toetamata, kui see on 150 mm selge kaugusega nurkvarrast. Kolm varrast külje kohta, nagu eespool, täidab selle. Neli või enam varrast külje kohta ei täida, ning DetailCraft ütleb seda hoiatusena ({{ui:Kontrollid}} ja Probleemid): „ristsidemed“ on vajalikud. **Ristsidemeid ei joonistata veel**: lisa need joonisele käsitsi või vali külje jaoks vähem varrasid.

EN 1992-1-1 korral kontrollib DetailCraft varda suurust (vähemalt 8 mm), varraste arvu (vähemalt 4), terase pindala (0.2 % kuni 4 % lõikest), selget vahet ja sidemete vahet (9.5.2 ja 9.5.3).

## Ülekate, vundament ja all olev post

- Kui **mudeli vundament seisab posti all**, ülekattub post vundamendi ootevardadega ning ka nende ülekate kontrollitakse.
- Kui **mudeli teine post seisab selle all**, ülekattub see selle posti vardadega.
- Anna oma {{ui:Ülekatte pikkus (mm, 0 = vajaduse järgi)}}, et seda üle kirjutada; lühem kui vaja on, on probleem ja tabelis märgitud *.
- Vaikimisi kasutatakse survepiirangu ülekatteid (sätetes {{ui:Surveülekate}}); vali {{ui:Tõmbeülekate}}, kui post võib olla tõmbes.

## Märgid, loend ja tööleht

Identsed varrad jagavad ühte märki: ülal oleva posti pikivarred on 8C1, sidemed 17C2 (esimene number, siis tüübitäht C posti jaoks ja järjekorranumber). Need on vahekaardil {{ui:Painutusloend}} koos lõikepikkuse ja kaaluga ning CSV-s, mille annab {{ui:Väljund}} › {{ui:Veel}} › {{ui:Painutamine}}.

Vali posti kõrval {{ui:Tööjoonis}}: leht, kus post on vaates (iga varras, selle märk, sideme tsoonid ja ülekate mõõdetud) ning keskel lõige, millele järgneb varraste painutusleht. Salvesta {{ui:See leht PDF-ina}}.

## Mida see ei tee

- Ümarad postid ja spiraalid ning mittekandilised postid: ei ole ehitatud.
- Nurk- ja ristsidemed lõike sees ning seismiline detailimine (ACI 318-19 peatükk 18): ei ole ehitatud.
- Ülekatted sinu valitud kohtades või nihutatult: kõik varrad ülekattuvad ühes lõikes.
- Kas varrad piisavad koormusele: see on projekteerimisinseneri töö.
