---
title: Kontroleer betonlede en maak seismiese laste
summary: Stel die stawe van betonbalke en -kolomme op, kontroleer hulle volgens ACI 318-19, maak ekwivalente sywaartse kragte volgens ASCE 7-22 op starre vloere, en sien verdieping-dryf. 'n Hulpmiddel vir 'n ingenieur om na te kyk.
keywords: beton, gewapende beton, ACI 318, ACI 318-19, wapening, balk, kolom, skuif, bande, seismies, aardbewing, ekwivalente sywaartse krag, ELF, ASCE 7-22, dryf, verdiepingsdryf, vloere, starre diafragma, verdiepinggewig, benutting, struktureel, ingenieur
from: 94d3001d
---

Die {{ui:Betonlede}}- en {{ui:Seismiese laste}}-blokke in die {{ui:Ontleding}}-oortjie kontroleer gewapende betonbalke en -kolomme, en maak die sywaartse kragte van 'n aardbewing op die vloere van 'n raamwerk. Albei volg die {{ui:Ontleding}}-oortjie se lopie en word saam met die model gestoor.

:::warning
Die resultate is **vir nakontrolering deur 'n ingenieur**: 'n hulpmiddel totdat 'n ingenieur dit nagesien het. Betonkontroles gebruik eerste-orde kragte, behalwe dat 'n kolom in 'n raamwerk wat jy nie-swaai noem, ontwerp word vir sy vergrote moment, sonder swaai-vergroting, geen wringingsontwerp, geen seismiese detaillering (ACI-hoofstuk 18) en geen bandedetaillering nie. Die seismiese laste laat die oortolligheidsfaktor, die vertikale seismiese effek, wringingsvergroting en P-delta-effekte uit. Windlaste is nog nie gebou nie.
:::

## Teken die lede

Teken betonlede as reghoeke: 'n {{ui:Plaat}}-profiel soos `PL400x400` vir 'n kolom en `PL300x600` vir 'n balk gee die deursnit. Kolomme en balke word geplaas soos enige ander lid.

## Stel die deursnitte op

Die {{ui:Betonlede}}-blok lys elke deursnit wat die lede gebruik. Druk {{ui:Stel op as beton…}} op die wat beton is. DetailCraft lees die breedte **b** (langs die lid se eie y-as) en diepte **h** (langs z) uit die getekende profiel, en vra dan vir:

- die **dekking** tot by die middel van die stawe, en die **bo-**, **onder-** en **sy-**stawe (hoeveel en watter deursnee) vir 'n balk, of 'n **kolomkooi** (stawe langs b en langs h, watter deursnee, spiraalbande) vir 'n kolom;
- die **bande**: bene, deursnee en afstand;
- wat die lid **optree as**: 'n balk, 'n kolom, of besluit uit sy kragte ('n vertikale lid, of een wat meer as 0.10 f′c Ag dra, is 'n kolom).

Stel f′c, die stawe se vloeisterkte fy en die bandvloeisterkte fyt (hoogstens 420 MPa tel vir skuif), K en of die raamwerk bo hulle swaai of nie-swaai. 'n Deursnit wat as beton opgestel is, word as beton ontleed: E = 4700 √f′c, 2400 kg/m³, en standaard met **gebarste deursnitte** (kolomme 0.70 Ig, balke 0.35 Ig; ACI 318-19 Tabel 6.6.3.1.1(a)). Kies {{ui:Bruto snitte}} om dit af te skakel.

## Maak kombinasies en kontroleer

Gee die lasgevalle hul soort, en dan {{ui:Maak kombinasies}}: ACI 318-19 neem die sterktekombinasies van ASCE 7 (§5.3.1). Druk {{ui:Kontroleer beton}} en elke lid kry 'n benutting, gekleur op die model soos die staalkontroles: buiging en minimum staal (22.2, 9.6.1.2), trekbeheerde rek (9.3.3.1), skuif met die bande (22.5, 9.6.3), bandafstand, en aksiale las met moment vir kolomme (22.4, met Bresler se metode vir tweerigting-buiging). 'n Lid waar die getekende deursnit verskil van die b × h wat jy getik het, lees *gedeeltelik gekontroleer*, net soos 'n slanke kolom of wringing bo die drempel: dit is nie ontwerp nie.

Lede bo hul kapasiteit word in {{ui:Probleme}} gelys; aanvaar een met 'n rede, of verbeter die deursnit.

## Vloere en seismiese laste

'n Vloer is 'n vlak waar die raamwerk deur 'n starre plaat bymekaar gehou word ('n **starre diafragma**). In die {{ui:Seismiese laste}}-blok druk {{ui:Vind vloere}}: dit neem die vlakke waar twee of meer balke ontmoet. Gee dan elke vloer sy **seismiese gewig**, getik of gelees. {{ui:Neem gewigte uit gevalle}} tel die vertikale laste van die gevalle op wat jy 'n faktor gee (die dooie geval is 1; voeg 0.25 by op 'n stoor-lewendige geval of sneeu op 'n plat dak, soos ASCE 7-22 12.7.2 vra). Elke knoop se vertikale las gaan na die vloer op of bo dit, so 'n kolom tussen twee vloere gee die helfte van sy gewig aan elkeen.

Vul die ontwerpwaardes in: SDS, SD1, S1, R, Ie, Cd, TL, die struktuurstelsel (vir die periode) en die risikokategorie. {{ui:Maak seismiese gevalle}} bereken dan die periode uit die gebouhoogte (12.8.2.1), die basisskuif V = Cs W (12.8.1), versprei dit op na die vloere (12.8.3) en skryf vier lasgevalle, in X en Y met die 5 % toevallige wringing elk rigting toe (12.8.4.2). Die verdieping-kragte en die verdieping-dryfkontrole (12.8.6, Tabel 12.12-1, die dryf Cd δxe / Ie teen 0.020 hsx) verskyn na 'n loop; 'n dryf bo sy limiet is ook 'n probleem. Druk {{ui:Maak kombinasies}} weer om die seismiese gevalle in die kombinasies te bring.

**Die periode uit die analise.** Die benaderde periode Ta kom uit die gebou se hoogte. As jy die analise met die seismiese gevalle geloop het, lees {{ui:Neem die periode uit die analise}} hoe ver elke vloer onder die kragte beweeg het en bereken die periode volgens Rayleigh se metode, T = 2π √(Σ w δ² / (g Σ f δ)), een keer vir X en een keer vir Y; die seismiese gevalle word weer daarmee gemaak. Die gebruikte periode is nooit meer as Cu·Ta nie (ASCE 7-22 12.8.2), so 'n sagte model kan die basisskuif nie onder dit verlaag nie. Neem die periode weer na die tweede loop: dit stabiliseer in 'n stap of twee. Haal die merkie by {{ui:Periode uit die analise}} uit om terug na Ta te gaan.

**Slanke kolomme (ACI 318-19 6.6.4.5).** Vir 'n raamwerk wat jy nie-swaai noem, word 'n kolom waarvan k·ℓu/r bo 34 + 12·M1/M2 is (hoogstens 40) ontwerp vir die vergrote moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² met (EI)eff = 0.4 Ec Ig / (1 + βdns), en die minimum moment Pu (15 + 0.03 h). βdns (0.6 om mee te begin) is die aandeel van die gefaktoriseerde aksiale las wat volhou: tik jou eie in. 'n Kolom waarvan Pu 0.75 Pc bereik, faal met sy eie kontrole. Die verslag lys elke slanke kolom se getalle. In 'n **swaai**-raamwerk bly 'n slanke kolom "gedeeltelik gekontroleer": die vergroting daarvan vereis 'n tweede-orde-analise, wat nog nie gebou is nie.

**Plate.** As die model plate het, neem 'n {{ui:Plaatwapening}}-blok die plaatmomente van elke sterktekombinasie en, volgens die Wood–Armer-reël (buiging en wringing saam), bereken die staal wat elke laag per meter nodig het: onder en bo, in x en in y. Jy gee die dikte, die dekking en die stawe; die tabel wys benodig teenoor gegee en die eenrigtingskuif teenoor φVc, en 'n laag wat kort is, is 'n probleem met sy klousule. Deurbuiging, deurslag by kolomme en omraamstawe by openings is nie gedek nie, en 'n moment oor 'n steun konvergeer stadig met vier-knoop-plate.

Elke vloer wat jy lys, word 'n starre diafragma in die analise: sy balke dra geen aksiale krag uit die vloer se beweging nie. Die CraftScript-uitvoer is nie gemaak vir 'n model met vloere nie.

## Die verslag

{{ui:Verslag (PDF)}} en {{ui:Verslag (CSV)}} kry die betontabelle (aannames, benutting per lid, elke klousule), die seismiese parameters en basisskuif, die kragte op die vloere en die dryftabel.
