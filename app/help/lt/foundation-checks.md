---
title: Pamatų patikrinimai
summary: Patikrinkite pamatus, sujungtus pamatus ir plokštes pagal jūsų aprašytą gruntą, nusėdimą, lanksčią plokštę ant spyruoklių, polių grupes ir atraminės sienas. Pagalba inžinieriui tikrinimui.
keywords: pamatas, sujungtas pamatas, plokštė, nusėdimas, pagrindo modulis, spyruoklės, kraštinė kolona, kampinė kolona, laikomumas, slinkimas, apvirtimas, prakiurimas, vienpusis šlytis, lenkimas, įtvirtinimas, minimali armatūra, polių grupė, atraminė siena, ACI 318-19
from: 6961ad52
---

:::warning
Tai pirminiai patikrinimai, skirti inžinieriui peržiūrėti, o ne projekto patvirtinimas. Leistinas grunto slėgis ir trinties koeficientas yra jūsų: DetailCraft nežino jūsų grunto.
:::

Skirtukas {{ui:Pamatai}} tikrina modelio pamatus pagal jūsų nurodytas kolonų apkrovas.

## Grunto aprašymas

Įveskite {{ui:Leistinas gruntų slėgis}} ir {{ui:Pagrindo trinties koeficientas}}. Abu pradžioje lygūs 0, t. y. nėra įvesta: tuomet tikrinimas slėgį rodo kaip pastabą ir nesako, kad jis tinka. Nusėdimui įveskite grunto modulį {{ui:Es}} (MPa), jo Puasono koeficientą ir leidžiamą nusėdimą (pradžioje 25 mm). Lanksčiai plokštei įveskite pagrindo modulį {{ui:ks}}. Čia taip pat yra užpylimas virš pamato, grunto tankis, slinkimo ir apvirtimo saugos koeficientai (pradžioje 1.5) ir strypų takumo riba.

## Apkrovų nurodymas

Kiekvienas pamatas turi kolonų apkrovų sąrašą. Naudokite {{ui:Pridėti kolonos apkrovą}} ir užpildykite eksploatacinę eilutę (laikomumui, slinkimui ir apvirtimui) bei koeficientais padaugintą eilutę (stiprumo tikrinimams): vertikalią apkrovą P žemyn, horizontalias jėgas Vx ir Vy pamato viršuje, momentus Mx ir My, kolonos vietą pamate ir jos dydį.

Arba atidaryti skirtuką {{ui:Analizė}} ir paspausti {{ui:Imti kolonų apkrovas iš analizės}}: kiekviena atrama, stovinti ant pamato, tampa kolonos apkrova iš jūsų pasirinktų eksploatacinių ir koeficientais padaugintų rinkinių. Teigiamas My labiau apkrauna pamato +x pusę; teigiamas Mx labiau apkrauna −y pusę.

## Ką tikrina

Pagal eksploatacines apkrovas, pridėjus paties pamato svorį ir užpylimą:

- **Laikomumas:** slėgis po standžiu pamatu. Vidurinės trečdalio ribose visas pagrindas liečiasi su gruntu; už jos dalis pagrindo atsiskiria ir didžiausias slėgis yra didesnis. Atstojamoji jėga už pagrindo ribų neatitinka reikalavimų.
- **Slinkimas:** trinties koeficientas, padaugintas iš vertikaliosios apkrovos, lyginamas su horizontaliąja jėga.
- **Apvirtimas:** atstojamosios jėgos atstumas iki krašto.
- **Nusėdimas:** tamprusis vidutinio slėgio nusėdimas pusiau erdvėje su jūsų įvestu moduliu, viduryje ir kampe (Timošenkos ir Gudjero sprendinys lanksčiam stačiakampiui), palyginus su riba. Tai standaus pamato viršutinė riba; ji neįskaito ribotos gylio grunto sluoksnio, iškasto grunto apkrovos sumažėjimo ir konsolidacijos. Be modulio slėgis rodomas kaip pastaba.

Vien pagal koeficientais padaugintas kolonų apkrovas (ACI 318-19):

- **Lenkimas** kolonos paviršiuje, su minimalia armatūra (0.0018, kai strypai 420 MPa) ir jūsų nubraižytais strypais.
- **Vienpusis šlytis** d atstumu nuo paviršiaus.
- **Prakiurimo šlytis** d/2 atstumu aplink kiekvieną koloną, su kolonos momentu. Kolonai netoli krašto kritinį pjūvį apkerpa pamato kraštas (prie krašto – trys pusės, kampe – dvi; ACI 318-19 22.6.4.1 ir mažesnis αs 22.6.5.2 lentelėje), o momentas apie paties pjūvio centrą apima apkrovos poslinkį.
- **Įtvirtinimas** strypų už kolonos paviršiaus, tiesių arba su lenkimais.
- **Gylis** virš apatinių strypų (150 mm).

Sujungtas pamatas ar plokštė laikomi standžiais, o šlytis ir momentas gaunami iš statikos pjūvių per visą plotį.

## Lanksti plokštė ant spyruoklių

Pažymėkite {{ui:Analizuoti šį pamatą kaip lanksčią plokštę ant spyruoklių}}, kai pamatas nešą daug kolonų ir standus pamatas per šiurkštus. Pamatas tampa keturmazgių elementų plokšte ant spyruoklių pagrindo (jūsų įvestas {{ui:ks}}, sutelktas mazguose); kiekvienos kolonos apkrova paskirstoma mazgams jos pagrindo plotui. Antroje lentelėje pateikiami didžiausias grunto slėgis ir nusėdimas (bei skirtumas tarp didžiausio ir mažiausio), lenkimo momentas kiekviena kryptimi su reikalinga armatūra, įtempimas viršuje, palyginti su paprasto betono stiprumu (pamatas neturi viršutinių strypų), vienpusis šlytis d atstumu nuo kolonų ir prakiurimas pagal paties spyruoklių slėgį. Tinklelis tankinamas, kol kolona yra trijų elementų pločio; didelė plokštė skaičiuojama kelias sekundes. Paties plokštės svoris ir virš jos esantis gruntas kompensuojasi ir neįtraukiami.

Kiekvienas nepraeitas tikrinimas yra skydelyje {{ui:Problemos}} su savo punktu.

## Polių grupės ir atraminės sienos

{{ui:Pridėti polių grupę}} įdeda polių tinklelį po standžiu rostverku: įveskite apkrovą ir momentus bei tai, ką vienas polis gali atlaikyti gniuždomas ir tempiamas (polių projekto skaičiai, ne šio skirtuko). Kiekvieno poliaus reakcija – P/n plius jo dalis momentų (tamprusis metodas); tikrinamas didžiausias gniuždymas ir bet koks tempimas.

{{ui:Pridėti atraminę sieną}} tikrina konsolinę sieną ant horizontalaus užpylimo, vienam metrui: Rankino aktyvųjį slėgį, apvirtimą apie kojos tašką, slinkimą ir pagrindo slėgį. Pasyvusis slėgis prieš kojos tašką neįskaitomas. Jūsų asistentas gali atlikti tuos pačius tikrinimus su `pile_group_check` ir `retaining_wall_check`.

Polių grupės, sienos ir plokštės perjungiklis įrašomi modelio faile, o nepraeitas tikrinimas rodomas {{ui:Problemos}}.
