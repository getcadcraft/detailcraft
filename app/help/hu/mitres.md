---
title: Gérvágású csatlakozások
summary: Két, szögben találkozó I-szelvényű tag összekötése: mindkét vég a szöget felező síkban van vágva, véglemezekkel, csavarokkal és merevítőkkel, ha kéri.
keywords: gérvágás, gérvágású csatlakozás, könyök, könyökerősítés, portálkeret, gerinc, sarok, szögvágás, ferdevágás, véglemez, csavarozott véglemez, merevítő, csatlakoztatás
from: cd8380d4
---

A gérvágás két I-szelvényű tagot köt össze, amelyek végei szögben találkoznak, például egy portálkeret könyökénél, egy gerincnél, vagy két, alaprajzban sarkot alkotó gerendánál. A DetailCraft mindkét végét a két tag közötti szöget felező síkban vágja, így a két vágási felület illeszkedik. Ha kéri, minden vágott végre véglemezt tesz, a két lemezt összecsavarozza, és mindkét tagba gerincmerevítő-párt helyez.

## Hol működik

- Két **I-szelvény** (IPE, HEA, HEB, W és hasonlók), amelyek **végei ugyanabban a csomópontban** találkoznak. Bármelyik tag bármelyik irányban rajzolható.
- A tagok közötti szögnek legalább 15°-nak kell lennie. Egy vonalba eső tagok nem fogadhatók el: használjon [toldást](topic:splices).
- A sima vágás (lemezek nélkül) bármilyen találkozásnál működik. A **véglemezekhez** szükséges, hogy a két tag a gerincük síkjában találkozzon, például egy portálkönyöknél vagy gerincnél. Két, alaprajzban sarkot alkotó gerenda az övük síkjában találkozik, ezért csak sima vágást kapnak.
- Különböző méretű tagok is összeköthetők, de figyelmeztetéssel: vágási felületeik nem illeszkednek.

## Gérvágás hozzáadása

1. Jelöljön ki két tagot: kattintson az egyikre, majd tartsa lenyomva a {{key:Shift}} billentyűt, és kattintson a másikra.
2. Válassza a {{ui:Gérvágás}} lehetőséget a {{ui:Kapcsolás}} csoport {{ui:Továbbiak}} menüjében. Megnyílik a Gérvágás párbeszédpanel.
3. Állítsa be a számozott mezőket. A mellettük lévő rajz a számaiból készül, ahogy gépel, és a számozott körei mutatják, hogy melyik mezőt mit állítja.
4. Válassza a {{ui:A gérvágás hozzáadása}} lehetőséget. Ha kettőnél több tagot jelölt ki, minden köztük lévő szabad csomópont ugyanazt a gérvágást kapja.

Gérvágás későbbi módosításához jelölje ki (kattintson egy lemezére), és a jobb oldali panelen válassza a {{ui:Gérvágás párbeszédpanel előnézettel}} lehetőséget, vagy állítsa be a beállításait közvetlenül ott. A sima vágásnak nincs kattintható lemeze: jelölje ki a két tagját, és válassza újra a {{ui:Gérvágás}} lehetőséget; a párbeszédpanel az adott gérvágással nyílik meg. A {{ui:Hasonlókra alkalmazás (n)}} ugyanezt másolja minden olyan szabad csomópontra, amely ugyanazon két szelvényű tagok között van, ugyanabban a szögben.

## A számozott mezők (mm)

| Sz. | Beállítás | Alapérték | Mit csinál |
|---|---|---|---|
| 1 | Távolság a lemezek között (vagy a vágott végek között) | 0 | Szabad hézag a csomópontban. Mindegyik oldal a felét tartja meg |
| 2 | Véglemezek, lemezvastagság | be, 20 | Minden vágott végre körbe hegesztett véglemez. Sima vágáshoz törölje a jelölést |
| 3 | Csavarsorok, sorosztás, keresztosztás, külső sor | 4, 0, 0, ki | 0 sorosztás esetén a sorok egyenletesen oszlanak el az övek között. Keresztosztás 0 = a lemez szélességének fele, legalább 2,4 × furat. A külső sor a lemez külső öv túli nyúlványába kerül |
| 4 | Lemez túlnyúlása a külső övön | 0 | Milyen messze nyúlnak túl a lemezek a külső övön, a vágás mentén |
| 5 | Lemez túlnyúlása a belső övön | 0 | Ugyanaz belül |
| 6 | Gerincmerevítők, távolság a vágáson túl | ki, 50 | Egy pár minden tagban, a gerinc mindkét oldalán, a tagra merőlegesen, ennyire a vágás távoli vége mögött |
| 7 | Merevítő vastagsága | 10 | |

A {{ui:Csavarok}} alatt: csavarátmérő, furat, minőség és hosszráhagyás (20, 22, A325, 30), a véglemezeknél megadottak szerint. A {{ui:Lemezek és varratok}} alatt: lemezszélesség (0 = az öv szélessége), sarokvarrat mérete (8) és lemezanyag (A36).

## Mit kap

- **A vágások.** Minden tag végét a saját síkjában vágja. A hossza listákban, rajzokon és NC-fájlokban a **teljes hossz**, a négyszögletes végtől a vágás legtávolabbi pontjáig.
- **A lemezek** az adott taghoz tartoznak: minden tag összeállítása a tag, a véglemeze és a merevítői. A csavarok a csomópont helyszíni csavarjai: az anyagjegyzék egyszer számolja őket, és minden tag összeállítási rajza laza csavarokként sorolja fel őket.
- **A rajzok** mutatják a ferde végeket és a lemezeket; a gérvágású tag gyártmányterve minden vágás szögét a merőlegestől megjegyzi.
- **NC-fájlok** (DSTV) a fejlécben tartalmazzák a ferdevágás szögeit, ahogy a szabvány kéri, és a vágást követő kontúrokat. Ellenőrizze őket a műhely saját NC-nézegetőjében vágás előtt, mint minden NC-fájlt.
- **IFC**: minden tag kiemelését a vágósíkjával vágja le, így más programok a valódi vágást mutatják.
- **Jelölések:** a gérvágású tag más darab, mint az azonos hosszúságú, merőlegesen vágott. Két azonos vágással rendelkező tag egy jelölést kap, ahogy a gerincnél lévő két szaru is.

## Jó tudni

- A gérvágás élő marad. Mozgassa vagy méretezze át bármelyik tagot, és a vágás, a lemezek és a csavarok követik. Töröljön bármelyik tagot, és a gérvágás megszűnik, a másik tag vége pedig ismét négyzetes lesz.
- A figyelmeztetések ugyanazokat az EN 1993-1-8 minimumokat használják, mint a többi csatlakozás (vég- és szélső távolság 1,2 × furat, sorosztás 2,2 × furat, keresztosztás 2,4 × furat), és emellett jelzik azokat a csavarsorokat, amelyek túl közel vannak az övhöz, az övnél keskenyebb lemezeket és a merevítőket, amelyeknek nincs helyük.
- Az értékek kiindulási értékek, nem tervezés. A DetailCraft nem ellenőrzi a csatlakozás szilárdságát, és nem készít könyökerősítést, tompavarrattal hegesztett gérvarratot, sem olyan merevítőt, amely a másik tag öveivel egy vonalban van.
