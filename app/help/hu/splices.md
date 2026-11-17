---
title: Toldások
summary: Két tartó- vagy oszlopdarab összekapcsolása véghez véget, csavarozott övfedőlemezekkel és gerinclemezekkel.
keywords: toldás, gerendatoldás, oszloptoldás, fedőlemez, toldólemez, övlemez, gerinclemez, csavarozott toldás, kapcsolat, emelés, csatlakoztatás
from: 97d141c2
---

A csavarozott toldás két darabot köt össze egy I-szelvény végén, véghez véget: minden öv külső oldalán van egy fedőlemez, a gerinc mindkét oldalán pedig egy-egy lemez, mindkét darabon át csavarozva. A DetailCraft a darabokat a résig visszavágja, elhelyezi a négy lemezt, kifúrja a lemezek és a két darab furatait, hozzáadja a csavarokat, és figyelmeztet a szélső távolságokra, az osztásra és az illeszkedésre.

## Hol működik

- Két gerenda vagy két oszlopemelés **azonos I-szelvényű profilból**, **egy vonalban, véghez véget csatlakozva**: a végek legfeljebb 50 mm távolságra vannak, a darabok párhuzamosak és egy vonalon vannak (1 mm-en belül). Mindkét darab bármelyik irányban rajzolható.
- Vízszintes, lejtős vagy függőleges darabok is működnek.
- Eltérő magasságú vagy övszélességű két darab nem fogadható el, csakúgy, mint csatornák, szögacélok és csövek.

## Toldások hozzáadása

1. Rajzolja meg a két darabot úgy, hogy véghez véget érjenek. Egy már megrajzolt tartót két darabként rajzoljon újra, ha fel akarja osztani.
2. Jelölje ki az egyiket (vagy mindkettőt), és válassza a {{ui:Splice}} lehetőséget a {{ui:Connect}} csoport {{ui:More}} menüjéből.
3. A kijelölt darabok minden szabad kapcsolata, amely ugyanolyan profilú másik darabbal érintkezik, toldást kap. Az állapotsor megmondja, hányat.

Toldás kiválasztásához kattintson valamelyik lemezére, és a jobb oldali panelen módosítsa a beállításait. Az {{ui:Alkalmazás hasonlókra (n)}} a toldást átmásolja minden más, ugyanolyan profilú darabok közötti szabad kapcsolatra.

## Beállítások (mm)

| Beállítás | Alapérték | Mit csinál |
|---|---|---|
| Távolság a végek között | 10 | Mindkét darabot a felével visszavágja |
| Csavarátmérő, furat, minőség, hosszráhagyás | 20, 22, A325, 30 | Mint a véglemezeknél |
| Övlemez vastagsága | 12 | A lemez akkora, mint az öv |
| Öv csavarsorai (mindkét oldalon) | 3 | Sorok az öv felett, a kapcsolat mindkét oldalán |
| Öv-csavarok osztása | 75 | A tartó mentén |
| Öv-csavarok sortávolsága | 0 | A két csavarvonal között; 0 = övszélesség mínusz 80 |
| Öv végtávolsága | 40 | A tartó végétől az első csavarig, és az utolsó csavartól a lemez végéig |
| Gerinclemez vastagsága | 8 | Egy-egy a gerinc két oldalán |
| Gerinc csavarsorai | 3 | Felfelé a gerincen, középre igazítva |
| Gerinc csavaroszlopai (mindkét oldalon) | 2 | A tartó mentén, a kapcsolat mindkét oldalán |
| Gerinc-csavarok osztása, fel a gerincen / a tartó mentén | 75, 75 | |
| Gerinc végtávolsága | 40 | Mint az öveknél |
| Gerinclemez magassága | 0 | 0 = a gerinc szabad magassága a kerekítések között, felül és alul 10 levonva |
| Lemez anyaga | A36 | Szöveg |

A lemezek hossza a csavaroktól függ: övlemez = távolság + 2 × (2 × végtávolság + (sorok − 1) × osztás); a gerinclemezek hasonlóan, az oszlopaik alapján. Az alapértékekkel az övlemezek hossza 470.

## Érdemes tudni

- A lemezek a két darab közül az **elsőként rajzolt darabhoz** tartoznak (a tulajdonságaiban ez az első darab): a darab összeállítási rajzán megjelennek, és csavarozva, nem hegesztve szállítódnak vele. A második darab összeállítási rajzán csak a furatai látszanak.
- Az öv-csavarok az övet és az övlemezt fogják, a gerinc-csavarok a gerincet és mindkét gerinclemezt. A csavarhosszak külön szerepelnek a tulajdonságok között.
- A figyelmeztetések ugyanazokat az EN 1993-1-8 minimumokat használják, mint a többi kapcsolat (szél- és végtávolság 1,2 × furat, osztás 2,2 × furat a tartó mentén és 2,4 × furat keresztben), továbbá figyelmeztetnek, ha a gerinclemez mélyebb a szabad gerincnél, és ha az öv-csavarok túl közel vannak a kerekítéshez.
- A DetailCraft nem tervezi a toldást (nincs szilárdsági ellenőrzés), és nem készít kitöltőlemezeket különböző vastagságú darabok közé.
- Két darab másolásakor a toldásuk is másolódik; bármelyik darab törlésekor a toldás is törlődik.
