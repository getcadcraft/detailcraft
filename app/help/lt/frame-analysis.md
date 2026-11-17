---
title: Rėmo analizė
summary: Sijų, kolonų ir įstrižainių jėgos, reakcijos ir įlinkiai, kaip nubraižyta, pagal jūsų nustatytus apkrovų atvejus ir derinius. Analizės pagalba, o ne kodo tikrinimas; projektavimo tikrinimai yra atskiras žingsnis.
keywords: analizė, konstrukcinė analizė, rėmo analizė, standumo metodas, apkrovos, apkrovos atvejis, derinys, savasis svoris, naudinga apkrova, reakcijos, lenkimo momentas, šlytis, ašinė jėga, įlinkis, deformuota forma, atramos, įsmeigtas, įtvirtintas, atlaisvinimas, ataskaita, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Apačioje esantis skirtukas {{ui:Analizė}} randa jėgas kiekvienoje modelio sijoje, kolonoje ir įstrižainėje, reakcijas kolonų pagrinduose ir tai, kiek elementai lenkiasi, pagal jūsų nurodytas apkrovas.

:::warning
Tai **analizės pagalba, o ne kodo tikrinimas**. Analizėje netaikomas joks projektavimo kodas: ji neparenka elementų dydžių, netikrina talpų ar jungčių ir nepasirenka apkrovos koeficientų. Inžinierius tikrina modelį, jo apkrovas ir atramas bei nusprendžia, ką reiškia skaičiai. Elementų tikrinimui pagal ASCE 7 / AISC 360 arba EN 1990 / EN 1993-1-1 žr. [Check steel members to a design code](topic:design-checks) – atskirą žingsnį, taip pat tik pagalbinį.
:::

## Paleidimas

1. Atidaryti skirtuką {{ui:Analizė}}.
2. Vaizde pasirinkite vieną ar kelis elementus, pasirinkite {{ui:Atvejis}}, {{ui:Apkrova}} ir {{ui:Kryptis}}, įveskite reikšmę ir paspauskite {{ui:Pridėti apkrovą}}. Apkrova, pasiskirsčiusi išilgai elemento, nurodoma kN/m, sutelkta apkrova – kN. Dažniausiai naudojama {{ui:Žemyn (gravitacija)}}.
3. Paspausti {{ui:Paleisti analizę}}.

Lentelėje išvardyta kiekvieno elemento didžiausia ašinė jėga N, šlytys Vz ir Vy, lenkimo momentai My ir Mz, sukimas T ir jo įlinkis, pirmiausia – didžiausias momentas. Spustelėkite elemento pavadinimą, kad jį pasirinktumėte. Žemiau pateiktos reakcijos kiekvienoje atramoje. {{ui:Ant modelio}} nubraižo deformuotą formą arba vieną jėgą kaip diagramą šalia kiekvieno elemento su didžiausia reikšme jos vietoje. Rezultatai tampa neaktualūs, kai tik pasikeičia modelis: paleiskite iš naujo.

Kiekviena apkrova, atvejis ir nustatymas yra vienas atšaukimo žingsnis ({{key:Mod+Z}}) ir įrašomas modelio faile.

## Apkrovų atvejai ir deriniai

Analizė prasideda trimis: **Pastovi** (elementų savasis svoris pagal nubraižytus profilius ir 7850 kg/m³), **Naudinga** (tuščia) ir **Pastovi + naudinga**. Pridėkite savo atvejų (vėjas, sniegas …) ir derinių: derinys sudeda atvejus su jūsų įvestais koeficientais. Analizė tiesinė, todėl kiekvienas atvejis sprendžiamas vieną kartą, o deriniai yra sumos. Koeficientus įveskite patys arba pasirinkite projektavimo kodą ir leiskite {{ui:Sudaryti derinius}} užrašyti kodo derinius ([Check steel members to a design code](topic:design-checks)).

## Iš ko sudarytas rėmas

- Sijos, kolonos ir įstrižainės, kiekviena savo darbinėje ašyje (jūsų nubraižytoje linijoje), o skerspjūvio tikrosios savybės apskaičiuojamos pagal jo kontūrą. Plokštės, laiptai, pamatai ir varžtai nėra rėmo dalis.
- Elementas perskeliamas ten, kur kito elemento galas remiasi į jį, todėl sija, prisijungianti prie kolonos per vidurio aukštį, jungiasi su kolona ten.
- **Kolonų pagrindai**: įtvirtinti (pradžia) arba įsmeigti (laikomi vietoje ir nuo sukimosi, laisvi pasisukti). Pagrindo plokštė visada sudaro atramą.
- **Sijų galai**: galinė plokštė standi, šlyties skardelė įsmeigta. {{ui:Sijų galai be jungties}} nustato likusius. **Įstrižainės** abiejuose galuose įsmeigtos.
- Pasirinkite vieną elementą, kad jo galams arba kolonos pagrindui nustatytumėte atskirą taisyklę.
- Visur plienas: E = 200 GPa, G = 77 GPa.

Jei rėmas gali judėti nieko nelenkdamas – mechanizmas, pavyzdžiui, įsmeigti pagrindai be įstrižainių viena kryptimi – paleidimas sustoja ir nurodo, kur ir kuria kryptimi; sulaikykite jį atrama, standžiu mazgu ar įstrižaine.

## Ženklai

N > 0 – tempimas. My > 0 įtempia elemento vietinę −z pusę: sija, nusilenkusi žemyn nuo gravitacijos, turi My > 0. Mz > 0 įtempia vietinę −y pusę. Įlinkis matuojamas nuo tiesios linijos tarp elemento galų. Elemento vietinė z ašis nukreipta aukštyn (kolonai – išilgai X); jo vietinės ašys pasisuka kartu su elemento pasukimu.

## Ataskaita

{{ui:Ataskaita (PDF)}} ir {{ui:Ataskaita (CSV)}} talpina viską: prielaidas, kuriomis sudarytas rėmas, pjūvius, atvejus ir derinius, o paskui kiekvienam atvejui ir deriniui – reakcijas (su apkrovų ir reakcijų sumomis, kurios subalansuotos), elementų jėgas ir poslinkius, bei visų atvejų obvalkas. {{ui:Eksportuoti kaip CraftScript}} įrašo tą patį rėmą kaip scenarijų PartCraft Script darbo srityje, kur bibliotekos funkcija `frame3d` jį sprendžia žingsnis po žingsnio įskaitomu kodu.

## Metodas

Tiesioginis standumo metodas, tiesinis ir pirmosios eilės, nebent pažymėsite Antros eilės (P-Delta): dvimazgiai sijos-kolonos su ašiniu, sukimo ir dviem lenkimo standumais (be šlyties deformacijos ir be deplanacijos), galų atlaisvinimai statiniu kondensavimu, apkrovos išilgai elementų per paties elemento formos funkcijas. Atsakymai patikrinti pagal klasikinius vadovėlių pavyzdžius (konsolės, paprastos, įtvirtintos ir ištisinės sijos, portalinis rėmas, sukamasis tinklelis, santvara).

**Antros eilės (P-Delta).** Pažymėkite *Antros eilės (P-Delta)* šalia {{ui:Paleisti}}: kiekvienas derinys sprendžiamas iš naujo, kai elementų ašinės jėgos veikia deformuotą rėmą (kiekvienas elementas padalytas į 4 dalis, todėl elemento lenkimas tarp galų taip pat įskaitomas), kol ašinės jėgos nusistovi. Rezultato eilutėje nurodomas perskaičiavimų skaičius ir kiek išaugo nuokrypis; momentai, įlinkiai, projektavimo tikrinimai ir ataskaita tuomet naudoja šiuos rezultatus. Viršijus rėmo tamprųjį kritinį apkrovimą, paleidimas sustoja ir apie tai praneša. Tai tampru su mažais pasisukimais, tik lenkimu, be standumo sumažinimo ir fiktyvių apkrovų (savaime tai nėra AISC tiesioginio analizės metodas); perdangos, sienos ir standžios grindys lieka pirmos eilės.

**Natūralieji dažniai (baigtiniai elementai).** Blokas {{ui:Baigtiniai elementai: natūralieji dažniai}} po rezultatais randa žemiausius to paties modelio modus baigtinių elementų varikliu: sijos su galų atlaisvinimais, perdangos ir sienos kaip plokšti keturmazgiai apvalkalai, standžios grindys, atramos. Pasirinkite modų skaičių (3, 6, 10 arba 20) ir perdangos elementą (keturmazgį apvalkalą storoms arba plonoms perdangoms arba plonos perdangos elementą) ir paspauskite {{ui:Rasti dažnius}}. Lentelėje pateikiamas kiekvieno modo dažnis Hz, periodas sekundėmis ir efektyvioji modalinė masė išilgai X, Y ir Z kaip dalis judančios masės; {{ui:Rodyti ant modelio}} nubraižo bet kurį modą taip, kaip braižoma deformuota forma. Masė yra medžiagos tankis, padaugintas iš tūrio: apkrovos masės nepridės, o medžiaga be tankio jos neturi. Ataskaita (PDF, CSV) talpina lentelę. Tai tampru ir tik mažiems judesiams; čia seisminė ar vėjo apkrova pagal kodą nesudaroma. Ne kodo tikrinimas; rezultatus peržiūri jūsų inžinierius.

**Atsako spektras, laiko istorija ir stūmimas.** Žemiau natūraliųjų dažnių yra dar trys blokai, naudojantys tą patį baigtinių elementų modelį. Visiems jų masė yra medžiagos tankis plius pažymėtų atvejų žemyn nukreiptos apkrovos, kiekviena padauginta iš jūsų įvesto koeficiento (pavyzdžiui, Pastovi su 1, o Naudinga su dalimi, kurią laikote mase).

{{ui:Atsako spektras}} nuskaito kiekvieną modą iš jūsų nurodyto spektro (periodo ir pagreičio lentelės arba ASCE 7 forma pagal SDS, SD1 ir TL; mygtukas {{ui:Naudoti seisminio bloko reikšmes}} nukopijuoja šias reikšmes iš seisminio bloko) ir sujungia modus CQC, SRSS, dešimties procentų taisykle arba absoliučia suma, tada sudeda X, Y ir Z kryptis (100 % + 30 % arba SRSS). Pateikiamas pagrindo šlytis, aukštų poslinkiai, elementų galų jėgos ir modų lentelė, kuri įspėja, kai naudojami modai turi mažiau nei 90 % masės. Rezultatus galite padauginti iš koeficiento arba iki jūsų įvestos pagrindo šlyties; pats blokas tos pagrindo šlyties niekada neskaičiuoja. Rezultatai be ženklo.

{{ui:Laiko istorija}} atlieka žemės pagreičio skaičiavimą moduline superpozicija (tiksli įrašo tiesėms tarp taškų) arba tiesiogine integracija (Newmark vidutinio pagreičio metodu su Rayleigh slopinimu). Įvestis – išgalvota sinusoidė arba impulsas (visada pažymėtas kaip sintetinis), įklijuotas įrašas arba atidaromas tekstinis failas (laikas ir pagreitis, vienas pagreitis eilutėje su žingsniu, arba PEER tipo failas su DT= antrašte; g arba m/s²). Pateikiamas stogo poslinkis ir pagrindo šlytis laiko atžvilgiu, kiekvieno aukšto poslinkis ir elementų galų jėgų obvalkas. Modeliai su labai ilgu įrašu jį išsaugo tik sesijai.

{{ui:Stūmimas (pushover)}} stumia stogą į šoną mažais žingsniais (kaip pirmasis modas arba tolygiai), su plastiniais lankstais elementų galuose, turinčiuose I formos skerspjūvį. Lankstas plastiškai tekėja plastiniu momentu, kuris mažėja didėjant ašinei jėgai (apskaičiuota pagal nubraižytą formą, apvalinimai neįskaitomi); sustiprėjimas pasirenkamas, P-delta pasirenkamas, o gravitacinį derinį galima pritaikyti pirmiau. Pateikiama talpos kreivė (pagrindo šlytis priklausomai nuo stogo poslinkio), pirmasis lankstas ir kiekvieno lanksto būsena bei plastinis pasisukimas. {{ui:Vykdyti netiesinę laiko istoriją}} vykdo tuos pačius lankstus pagal {{ui:Laiko istorija}} bloko įrašą mažuose modeliuose. Lankstai formuojasi tik elementų galuose (mazgą dėkite ten, kur turėtų susiformuoti, tarpatramyje); elementas, atlaisvintas abiejuose galuose, jų negauna, o įstrižainių tekėjimas ir išlinkimas nemodeliuojami; perdangos ir sienos lieka tamprios; priėmimo kriterijų nepateikiama. Ne kodo tikrinimas; rezultatus peržiūri jūsų inžinierius. Nustatymai įrašomi su modeliu, o ataskaita talpina lenteles.

Dar nepadaryta: išlinkimo analizė, trūkstamos masės korekcija atsako spektrui, įrašų mastelio keitimas, lankstų priėmimo kriterijai (dinaminis atsakas yra, aukščiau), plotų ir vėjo apkrovos sudaromos automatiškai (žemės drebėjimo jėgos perdangose yra [Check concrete members and make seismic loads](topic:concrete-and-seismic)), elementų poslinkiai, įstrižainės tik tempimui. Žr. [Not built yet](topic:not-built-yet).
