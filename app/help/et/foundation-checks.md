---
title: Vundamendi kontrollid
summary: Kontrolli vundamente, kombineeritud vundamente ja plaate sinu kirjeldatud pinnases, vajumist, vedrudel toetuvat paindlikku plaati, vaiagruppe ja tugiseinu. Abivahend insenerile kontrollimiseks.
keywords: vundament, kombineeritud vundament, plaat, vajumine, aluspinnase moodul, vedrud, servapost, nurgapost, kandevõime, libisemine, kummutamine, läbilõikamine, ühesuunaline nihe, paindumine, arendus, miinimumarmatuur, vaiagrupp, tugisein, ACI 318-19
from: 6961ad52
---

:::warning
Need on esmased kontrollid, mida insener peab üle vaatama, mitte projekteerimise kinnitus. Lubatud survesurve pinnasele ja hõõrdetegur on sinu määrata: DetailCraft ei tunne sinu pinnast.
:::

Vahekaart {{ui:Vundament}} kontrollib mudelis olevaid vundamente sinu antud postikoormuste vastu.

## Kirjelda pinnast

Sisesta {{ui:Lubatud survesurve pinnasele}} ja {{ui:Aluse hõõrdetegur}}. Mõlemad algavad väärtusest 0, mis tähendab „pole sisestatud”: siis kontroll näitab survesurvet märkusena ega ütle, et see läbib. Vajumise jaoks sisesta pinnase moodul {{ui:Es}} (MPa), selle Poissoni tegur ja lubatud vajumine (algselt 25 mm). Paindliku plaadi jaoks sisesta aluspinnase moodul {{ui:ks}}. Siin on ka vundamendi kohal oleva täite, pinnase mahukaalu, libisemise ja kummutamise ohutustegurid (algselt 1.5) ning armatuuri voolavuspiir.

## Anna koormused

Igal vundamendil on postikoormuste loend. Kasuta nuppu {{ui:Lisa posti koormus}} ja täida teenindusrida (survele, libisemisele ja kummutamisele) ning arvutusrida (tugevuskontrollide jaoks): vertikaalkoormus P allapoole, horisontaaljõud Vx ja Vy vundamendi ülaosal, momendid Mx ja My, posti asukoht vundamendil ning selle mõõtmed.

Või käivita vahekaart {{ui:Analüüs}} ja vajuta {{ui:Võta posti koormused analüüsist}}: iga toetus, mis seisab vundamendil, muutub postikoormuseks valitud teenindus- ja arvutushulkade põhjal. Positiivne My koormab vundamendi +x poolt rohkem; positiivne Mx koormab −y poolt rohkem.

## Mida kontrollitakse

Teenindusvoolude põhjal, lisades vundamendi enda kaalu ja täite:

- **Survesurve:** surve jäigal vundamendil. Keskmise kolmandiku sees on kogu alus kontaktis; väljaspool tõuseb osa alusest pinnasest lahti ja tippsurve on suurem. Resultant väljaspool alust ebaõnnestub.
- **Libisemine:** hõõrdetegur korda vertikaalkoormus, võrreldes horisontaaljõuga.
- **Kummutamine:** resultandi kaugus servast.
- **Vajumine:** keskmise surve elastne vajumine poolruumis sinu antud mooduliga, keskel ja nurgas (Timoshenko ja Goodier'i lahend paindlikule ristkülikule), võrreldes lubatud piiriga. See on jäiga vundamendi ülempiir ning jätab välja piiratud sügavusega pinnaskihi, väljakaevatud pinnase vähendava mõju ja konsolideerumise. Ilma mooduli sisestamata näitab see survesurvet märkusena.

Ainult arvutuskoormustest (ACI 318-19):

- **Paindumine** posti servas, miinimumarmatuuriga (0.0018 420 MPa vardade jaoks) ja sinu joonistatud vardadega.
- **Ühesuunaline nihe** kaugusel d servast.
- **Läbilõikamine** kaugusel d/2 iga posti ümber koos posti momendiga. Posti lähedal servas lõigatakse kriitiline lõige vundamendi servast (servas kolmelt küljelt, nurgas kahelt; ACI 318-19 22.6.4.1 ja tabeli 22.6.5.2 väiksem αs), ning lõigu enda keskpunkti suhtes oleva momendi hulka kuulub koormuse nihe.
- **Varraste arendus** posti servast väljapoole, kas sirgena või koos konksudega.
- **Sügavus** alumiste varraste kohal (150 mm).

Kombineeritud vundament või plaat võetakse jäigana ning nihe ja moment tulenevad staatikast üle kogu laiuse tehtud lõigetel.

## Paindlik plaat vedrudel

Märgi {{ui:Analüüsi seda vundamenti paindliku plaadina vedrudel}}, kui vundament kannab palju poste ja jäik vundament on liiga jäme. Vundament muutub neljasõlmsete elementide plaadiks, mis toetub vedrudele (sinu sisestatud {{ui:ks}}, koondatuna sõlmedesse), ning iga posti koormus jaotub selle enda jalajälje sõlmede vahel. Teine tabel annab suurima pinnasesurve ja vajumise (ning nende vahe), paindemomendi mõlemas suunas koos vajaliku armatuuriga, tõmbe pealmises osas võrreldes tavalise betooni tugevusega (vundamendil pole ülemisi vardaid), ühesuunalise nihke kaugusel d postidest ning läbilõikamise vedrude enda surve järgi. Võrk tihendatakse, kuni post on kolme elemendi laiune; suur plaat võtab mõne sekundi. Plaadi enda kaal ja selle kohal olev pinnas tühistavad teineteist ning jäetakse välja.

Iga ebaõnnestunud kontroll on paneelil {{ui:Probleemid}} koos oma punktiga.

## Vaiagrupid ja tugiseinad

{{ui:Lisa vaiagrupp}} paigutab jäiga kübara alla vaiade ruudustiku: sisesta koormus ja momendid ning see, mida üks vaia tohib kanda survel ja tõmbel (vaiaprojekteerimise arvud, mitte selle vahekaardi omad). Iga vaia reaktsioon on P/n pluss selle osa momentidest (elastne meetod); kontrollitakse suurimat survet ja kõiki tõmbeid.

{{ui:Lisa tugisein}} kontrollib konsoolseina tasasel tagasitäitel meetri kohta: Rankine'i aktiivne surve, kummutamine varba ümber, libisemine ja aluse surve. Passiivne surve varba ees jäetakse välja. Sinu assistent saab samu kontrolle käivitada käskudega `pile_group_check` ja `retaining_wall_check`.

Vaiagrupid, seinad ja paindliku plaadi lüliti salvestatakse mudelifaili ning ebaõnnestunud kontroll on vahekaardil {{ui:Probleemid}}.
