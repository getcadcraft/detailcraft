---
title: Puit- ja kergterasest karkassi paneelid
summary: Koosta puidust või kergterasest seina-, põranda- ja katusepaneelid kõigi detailide, lõikenimekirja, töökoja joonise ja ostetava materjaliga.
keywords: karkass, puit, saematerjal, puit, kergteras, külmvormitud, postik, laehari, sarikas, päistala, kuningpostik, abipostik, lühipostik, lõikenimekiri, töökoja joonis, paneel
from: 3e38ffb9
---

Vahekaart {{ui:Karkass}} koostab sinu kirjeldatud paneelid ja annab sulle selle, mida karkassi meeskond ja saeveski küsivad. Paneelid salvestatakse mudelifaili.

:::warning
Mõõdud, vahed ja päistalad on sinu määrata. DetailCraft ei kontrolli, kas selle vahega postik kannab seda seina või kas päistala katab seda ava: selleks on vaja sinu normi tabeleid ja insenerit.
:::

## Lisa paneel

Vali {{ui:Lisa sein}}, {{ui:Lisa põrand}} või {{ui:Lisa katus}} ning täida mõõdud millimeetrites, materjal (puit või kergteras) ja elemendi suurus. Puitmõõdud on nominaalsed nimetused koos hööveldatud mõõtudega (2×4 on 38 × 89 mm). Teraspostikud on nimetatud sügavuse ja paksuse järgi, näiteks `C92-1.2`.

## Seinad

Seinal on alumine rõhtpuit, üks või mitu ülemist rõhtpuitu (teraspuhul üks rada), otspostikud, postikud sinu antud sammuga ning iga ava kohta: kaks kuningpostikut, kaks abipostikut, päistala valitud suuruses ja kihtides ning lühipostikud päistala kohal (ja akna alumise riiviga akna all). Anna iga avale kaugus vasakust otsast, laius ning ligikaudne ülemine ja alumine serv, mõõdetuna aluspõrandast; uksel on alumine serv 0.

## Põrandad ja katused

Põrandal on laehari üle laiuse, piki ulatust, servalaeharid mõlemas otsas ning, kui märgid, vahetoed keskel. Katusepaneel on viil: sarikate paar sinu antud sammuga (nende pikkus sisaldab räästa ulatust mööda kaldu) ja harjalaud.

## Mida sa saad

Iga paneel näitab oma osi mõõtkavas joonisel, iga osa on märgistatud, lõikenimekiri on märgise järgi ja kogusumma. Tabel {{ui:Osta materjali}} paigutab kõigi paneelide lõiked standardpikkustesse, kõige lühema, mis iga varda lõigetele mahub. {{ui:Salvesta töökoja joonis (SVG)}} kirjutab joonise; nupp {{ui:CSV}} kirjutab kõik lõikenimekirjad ja materjalinimekirja.

## Paneeli paigutamine mudelisse

Iga paneeli all anna, kuhu see läheb (x, y, z millimeetrites ja nurk) ning vajuta {{ui:Paiguta elementidena}}: iga osa muutub mudeli elemendiks, millel on selle mõõdu profiil ja materjali mass (puidu puhul umbes 500 kg/m³, postikute puhul teras). Sein kulgeb nurga all oma alumisest vasakust otsast, alumine serv z tasemel; põranda laeharid lamavad alumise servaga z tasemel; katuse viilvaade kulgeb nurga all, z on seina rõhtpuidu ülaservas. Iga päistala kiht on kõrvuti asetsev element. Kui vajutad uuesti, asendatakse varem paigutatud elemendid, ning {{ui:Eemalda paigutatud elemendid}} võtab need välja; igaüks on üks tagasivõtmise samm. Analüüs jätab need elemendid välja: need ei ole terase raami elemendid.

## PDF-lehed

{{ui:PDF-lehed}} salvestab iga paneeli kohta ühe A3 lehe: paneel mõõtkavas koos kõigi osadega märgistatud, üldmõõdud, lõikenimekiri ja tiitelriba.

Probleemid paneelil {{ui:Probleemid}}: ava, mis on liiga lähedal seina otsale või teisele avale, päistala, mis ei mahu ülemiste rõhtpuitude alla, ning osa, mis on pikem kui pikim standardpikkus.

Paneel {{ui:Probleemid}} loetleb ka **Liidesed (LOD 350)** seinapaneelide ja betoonseinte jaoks: ava, mis ulatub üle seina otsa või ülaosa, kaks kattuvat ava ning betoonseina ava, mis on laiem kui 1000 mm ilma servatalata. Need on soovitused, samad reeglid, mida käitab BimCrafti audit; laius on CadCrafti algväärtus, mitte standard.
