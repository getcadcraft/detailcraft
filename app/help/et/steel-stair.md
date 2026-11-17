---
title: Terastrepi generaator
summary: Terastrepp korruste vahelisest kõrgusest, ulatusest ja laiusest: tõus ja astme sügavus valitud reeglistiku järgi, vahepodestid, piirded ja balistrid, tööjoonised ning lõikenimekiri koos kaaludega.
keywords: terastrepp, trepigeneraator, trepikaar, astmeplaat, rombmustriga plaat, restkate, volditud plaatalus, vahepodest, käsipuu, balistrid, tõus, astme sügavus, osha, ibc, approved document k, lõikenimekiri, kaalud, tööjoonis
from: a4f0a985
---

Trepigeneraator teeb terve terastrepi mõnest arvust: trepikaared, astmeplaadid, vahepodestid, kui trepilend on liiga kõrge, käsipuud postide ja balistritega, trepikaarte kinnitusavad, lõikenimekirja kaaludega ja tööjoonised. See algab tööriistast {{ui:Trepp}}, nagu lihtne trepp (vt Trepid), kuhu on lisatud üks lüliti.

## Terastrepi paigutamine

1. Vali rühmas {{ui:Paiguta}} nupp {{ui:Trepp}} või vajuta {{key:S}}.
2. Paremal märgi {{ui:Kasuta terastrepi generaatorit}}.
3. Vali **reeglistik** selle järgi, kus trepp ehitatakse, **tõus** (korruselt korrusele; 0 = kuni järgmise tasandini), **saadaolev ulatus** (0 = las reegel otsustab), **vaba laius** ja **astmeplaadi tüüp**: rombmustriga plaat, restkate või volditud plaatalus.
4. Määra trepikaare profiil, vahepodestid (reegli järgi või arvuna), käsipuud (mõlemal küljel, ühel, puudub), käsipuu kõrgus ja balistrivahe.
5. Klõpsa ruudustiku ristumispunktil: see on esimese astmekõrguse alus.

Mis tahes seadete muutmiseks vali trepp (klõpsa trepikaarel, astmeplaadil või käsipuul); omadused näitavad astmekõrgusi, astme sügavust, kallet, trepilende ja vahepodeste, selles olevat terast, lõikenimekirja ning reeglistiku allikaid.

## Reeglistikud

Reeglistik piirab trepi kuju: tõusu ja astme sügavust, 2 × astmekõrgus + astme sügavus, kallet, vahepodest, käsipuu kõrgust ja suurimat ava. DetailCraft pakub allpool toodud reeglistikke; piirkond on seade, mitte oletus. Ava omaduste paneelil **Millest selle reeglistiku arvud pärinevad**: iga arv nimetab oma allikat ja ütleb, kui hästi see on kontrollitud.

- **International Building Code 2021**: astmekõrgus 4 kuni 7 in., astme sügavus vähemalt 11 in., käsipuud 34 kuni 38 in. Vahepodestite vaheline 12 ft piirang on märgitud kui *ei loetud* ning käsipuude arvud on loetud koodi tsiteerivatest materjalidest: enne nende kasutamist kontrolli neid.
- **OSHA 29 CFR 1910.25 ja 1910.29** (tööstuslikud standardtrepid): 30° kuni 50°, astmekõrgus kõige rohkem 9.5 in., astme sügavus vähemalt 9.5 in., vähemalt 22 in. laiad, vahepodestid trepi laiused ja 30 in. sügavad, ülemine piire, mida kasutatakse käsipuuna, 36 kuni 38 in. Need loeti otse määrusest.
- **Approved Document K 2013, Inglismaa** (üldised juurdepääsu- ja abitrepid): tõusu ja astme sügavuse vahemikud ning 2 × astmekõrgus + astme sügavus 550 kuni 700 mm, loetud valitsuse tellitud aruandest, mis neid tabelis esitab. Dokument ei anna DetailCraftile käsipuu kõrgust, seega kasutatakse sinu määratud kõrgust ja probleemide loend ütleb seda.

Reeglistikku, mida siin pole, ei oletata: trepp järgib siis tavalist 600 kuni 650 mm mugavusreeglit ja ütleb, et sellel pole reeglit.

## Mida see arvutab

- **Astmekõrgused ja astme sügavus.** Kõige vähem astmekõrgusi, mille 2 × astmekõrgus + astme sügavus jääb reegli vahemiku keskele, nii et astme sügavus ei lange reegli miinimumi alla. Kui ulatus on antud, on astme sügavus ulatus jagatud astmeplaatide arvuga ning kõik reeglist väljaspool olev teatatakse.
- **Trepilendid ja vahepodestid.** Trepilend, mis on kõrgem kui reegel lubab, jaotatakse vahepodestiga, mis on trepi laiune ja mitte kitsam kui reegli miinimum; vahepodest võib tellida ka ise. Vahepodest on raam kahest külgtalast ja kahest ristsuunalisest nurkraudast katte all, kahel postil.
- **Astmed.** Rombmustriga plaat on keevitatud plaat (vaikimisi 6 mm; mustrit kaalule ei lisata). Volditud plaatalus on serval ümbervoltimisega ja poltidega läbi trepikaare seina: kaks ava, mis on 2 mm suuremad kui polt, sügavusel 0.3 ja 0.7. Restkate joonistatakse võrdse kaaluga plaadina (kandev riba sügavus × paksus ÷ samm); ristsuunalisi ribasid ja ääristusi ei arvestata ning lõikenimekiri ütleb seda.
- **Piirded.** Torust ülemine piire postidel mööda igat trepilendi ja igat vahepodest, ning balistrivahe, mida ükski reegli avast suurem kera ei läbi (vaikimisi kõige rohkem 100 mm).

## Joonised, lõikenimekiri, eksport

- Trepilend on üks koost; piirded on teine (mõlemad küljed on sama koost, tehakse kaks korda). Igal on oma koostejoonis ja trepikaare joonisel on näha selle avad.
- **Trepi leht** (ST-…) näitab iga trepilendi trepikaart sirgena, avade asukohad kirjutatud alumisest otsast, ning astme detaili: lõige, astmeserv, ümbervolt ja otsaflants oma aukudega.
- {{ui:Lõikenimekiri ja kaalud}} omadustes loetleb iga profiili ja pikkuse koos kogustega ja kilogrammides; {{ui:Laadi lõikenimekiri alla (CSV)}} salvestab selle.
- Kõik läheb materjalinimekirja, NC-failidesse ja IFC-sse tavaliste detailidena (IfcMember, IfcColumn, IfcPlate).

## Hea teada

- See on lähtepunkt, mitte projekt. Midagi ei kontrollita tugevuse ega läbipaindumise järgi; reeglistik piirab ainult kuju.
- Trepikaarte otsad korruste vastu on lõigatud risti ja neid ei detailita; vahepodesti postid seisavad allpool oleval korrusel ja neil pole aluseplaate.
- Trepi paigutamine BimCraftis ühe elemendina ei ole veel ühendatud.
