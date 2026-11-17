---
title: Kontrolli betoonelemente ja koosta seismilised koormused
summary: Seadista betoontalade ja -postide armatuur, kontrolli neid ACI 318-19 järgi, koosta ekvivalentsed külgjõud ASCE 7-22 järgi jäikadele põrandatele ja vaata korruse triivi. Abivahend insenerile kontrollimiseks.
keywords: betoon, armeeritud betoon, ACI 318, ACI 318-19, armatuur, tala, post, lõige, sidemed, seismiline, maavärin, ekvivalentne külgjõud, ELF, ASCE 7-22, triiv, korruse triiv, põrandad, jäik diafragma, korruse kaal, kasutusaste, utilization, konstruktsioon, insener
from: 94d3001d
---

Plokid {{ui:Betoonelemendid}} ja {{ui:Seismilised koormused}} vahekaardil {{ui:Analüüs}} kontrollivad armeeritud betoontalasid ja -posti ning koostavad raamistiku põrandatele mõjuva maavärina külgjõud. Mõlemad järgivad vahekaardi {{ui:Analüüs}} käivitust ja salvestatakse koos mudeliga.

:::warning
Tulemused on **insenerile kontrollimiseks**: abivahend, kuni insener on need üle vaadanud. Betoonikontrollid kasutavad esimese järgu jõude, välja arvatud see, et post raamistikus, mille kutsud küljeliikumiseta (non-sway), on arvutatud oma suurendatud momendi järgi, ilma küljeliikumise suurenduseta, väändeprojekteerimiseta, ilma seismilise detailideta (ACI peatükk 18) ja ilma sidemete detailideta. Seismilised koormused jätavad välja redundantsiteguri, vertikaalse seismilise mõju, väände võimendamise ja P-delta mõjud. Tuulekoormused ei ole veel ehitatud.
:::

## Joonista liikmed

Joonista betoonliikmed ristkülikutena: {{ui:Plaat}} profiil, nagu `PL400x400` posti puhul ja `PL300x600` tala puhul, annab lõike. Postid ja talad paigutatakse nagu iga teine liige.

## Seadista lõiked

Plokk {{ui:Betoonelemendid}} loetleb kõik lõiked, mida liikmed kasutavad. Vajuta {{ui:Seadista betoonina…}} nende peal, mis on betoonist. DetailCraft loeb joonistatud profiilist laiuse **b** (mööda liikme enda y-telge) ja sügavuse **h** (mööda z-telge) ning küsib:

- **kaitsekihi** kuni varraste keskpunktini ning **ülemised**, **alumised** ja **küljevardad** (mitu ja millise läbimõõduga) talale või **posti korvi** (varrased mööda b ja mööda h, millise läbimõõduga, spiraalsidemed) postile;
- **sidemed**: harud, läbimõõt ja samm;
- mida liige **teeb**: talana, postina või otsustatud jõudude järgi (vertikaalne liige või see, mis kannab rohkem kui 0.10 f′c Ag, on post).

Sea nende kohal f′c, varda voolavuspiir fy ja sideme voolavuspiir fyt (nihke puhul arvestatakse kõige rohkem 420 MPa), K ning kas raamistik on küljeliikuv (sway) või mittekõikuv (non-sway). Lõiku, mis on seatud betoonina, analüüsitakse betoonina: E = 4700 √f′c, 2400 kg/m³, ja vaikimisi **pragunenud lõikena** (postid 0.70 Ig, talad 0.35 Ig; ACI 318-19 tabel 6.6.3.1.1(a)). Selle väljalülitamiseks vali {{ui:Brutolõiked}}.

## Tee kombinatsioonid ja kontrolli

Anna koormusjuhtudele nende liik ja vali {{ui:Koosta kombinatsioonid}}: ACI 318-19 võtab tugevuskombinatsioonid ASCE 7-st (§5.3.1). Vajuta {{ui:Kontrolli betooni}} ja iga liige saab kasutusastme, mis on mudelil värvitud nagu terase kontrollides: paine ja minimaalne terasehulk (22.2, 9.6.1.2), tõmbega juhitud deformatsioon (9.3.3.1), nihe koos sidemetega (22.5, 9.6.3), sideme samm ning posti telg- ja momentkoormus (22.4, kahesuunalise paine korral Bresleri meetodiga). Liige, mille joonistatud lõige erineb sinu sisestatud b × h-st, loeb *osaliselt kontrollitud*, nagu ka karge post või väänd üle piiri: neid ei projekteerita.

Liikmed üle oma kandevõime on loetletud jaotises {{ui:Probleemid}}; aktsepteeri üks põhjendusega või paranda lõiku.

## Põrandad ja seismilised koormused

Põrand on tase, kus raamistikku hoiab kokku jäik plaat (**jäik diafragma**). Plokis {{ui:Seismilised koormused}} vajuta {{ui:Leia korrused}}: see võtab tasemed, kus kohtuvad kaks või enam talad. Seejärel anna igale põrandale tema **seismiline kaal**, sisestatud või loetud: {{ui:Võta kaalud juhtumitest}} summeerib vertikaalsed koormused juhtumitest, millele annad teguri (surnud koormusel 1; lao elukoormusel või lameda katuse lumel lisa 0.25, nagu ASCE 7-22 12.7.2 nõuab). Iga sõlme vertikaalne koormus läheb sellele põrandale, mis on tema kohal või tasemel, nii et kahe põranda vahel olev post annab poole oma kaalust kumbagi.

Täida projekteerimisväärtused: SDS, SD1, S1, R, Ie, Cd, TL, konstruktsioonisüsteem (perioodi jaoks) ja riskikategooria. Seejärel {{ui:Koosta seismilised juhtumid}} arvutab perioodi hoone kõrgusest (12.8.2.1), baaslõike V = Cs W (12.8.1), jaotab selle üles põrandatele (12.8.3) ja kirjutab neli koormusjuhtumit, X- ja Y-suunas koos 5 % juhusliku väänamisega kummalegi poole (12.8.4.2). Korruste jõud ja korruse triivi kontroll (12.8.6, tabel 12.12-1, triiv Cd δxe / Ie võrreldes 0.020 hsx-ga) ilmuvad pärast käivitust; piirist üle minev triiv on samuti probleem. Vajuta {{ui:Koosta kombinatsioonid}} uuesti, et seismilised juhtumid kombinatsioonidesse tuua.

**Periood analüüsist.** Ligikaudne periood Ta tuleb hoone kõrgusest. Kui oled analüüsi seismiliste juhtumitega käivitanud, loeb {{ui:Võta periood analüüsist}} kui palju iga põrand jõudude mõjul liikus ja arvutab perioodi Rayleighi meetodil, T = 2π √(Σ w δ² / (g Σ f δ)), kord X-i ja kord Y-i jaoks; seismilised juhtumid tehakse uuesti selle järgi. Kasutatav periood ei ole kunagi suurem kui Cu·Ta (ASCE 7-22 12.8.2), seega pehme mudel ei saa baaslõiget sellest allapoole viia. Võta periood uuesti pärast teist käivitust: see stabiliseerub ühe-kaks sammuga. Ta juurde tagasi minemiseks eemalda märge {{ui:Periood analüüsist}}.

**Karged postid (ACI 318-19 6.6.4.5).** Raamistiku puhul, mille kutsud mittekõikuvaks (non-sway), arvutatakse post, mille k·ℓu/r on üle 34 + 12·M1/M2 (kõige rohkem 40), oma suurendatud momendi Mc = δns · M2 järgi: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)², kus (EI)eff = 0.4 Ec Ig / (1 + βdns), ja minimaalne moment Pu (15 + 0.03 h). βdns (algselt 0.6) on koormatud aksiaaljõu püsiv osa: sisesta oma väärtus. Post, mille Pu jõuab 0.75 Pc-ni, ebaõnnestub oma kontrolliga. Aruanne loetleb iga karge posti arvud. **Küljeliikuvas** raamistikus jääb karge post „osaliselt kontrollituks“, sest selle suurendus vajab teist järku analüüsi, mida ei ole ehitatud.

**Plaadid.** Kui mudelil on plaadid, võtab plokk {{ui:Plaadi armatuur}} iga tugevuskombinatsiooni plaadimomendid ja Wood–Armeri reegli järgi (paine ja väänd koos) arvutab terase, mida iga kiht vajab meetri kohta: alumine ja ülemine, x- ja y-suunas. Sisestad paksuse, kaitsekihi ja varrased; tabel näitab vajalikku vs antud ning ühesuunalist nihet vs φVc, ja kiht, mis ei piisa, on probleem koos oma paragrahviga. Läbipainet, punktlõikumist postide juures ja avade ümbritsevaid varrasid ei kata; tugi üle momendi konvergeerub neljasõlmeliste plaatidega aeglaselt.

Iga loetletud põrand muutub analüüsis jäikaks diafragmaks: selle talad ei kanna põranda liikumisest aksiaaljõudu. CraftScripti eksport ei ole tehtud põrandatega mudelile.

## Aruanne

{{ui:Aruanne (PDF)}} ja {{ui:Aruanne (CSV)}} saavad juurde betoonitabelid (eeldused, kasutusaste liikme kaupa, iga paragrahv), seismilised parameetrid ja baaslõige, jõud põrandatel ning triivi tabel.
