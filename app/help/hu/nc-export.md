---
title: NC-fájlok küldése a műhelybe
summary: DSTV NC-fájlok exportálása minden alkatrészjelhez (I-szelvények, U-szelvények, szögacélok, HSS-csövek, lemezek), tömörítve, és ellenőrzés, mielőtt gépre kerülnek.
keywords: nc, nc1, dstv, cnc, gép, gerendavonal, fúrovonal, lemezvágás, exportálás, gyártás, zip
from: 598b6091
---

A DetailCraft alkatrészjelenként egy DSTV NC-fájlt (`.nc1`) ír I-szelvényekhez, U-szelvényekhez, szögacélokhoz, négyszög és kör keresztmetszetű HSS-csövekhez, valamint lemezekhez, majd ezeket egy tömörített fájlba zippeli. A gerendavonalak és a lemezvágó gépek ezeket a fájlokat olvassák be fűrészeléshez, fúráshoz és vágáshoz.

## Exportálás

1. Először ürítse ki a {{ui:Problémák}} lapot: az a kapcsolat, amelyet nem sikerült megépíteni, nem ad lyukakat.
2. Mentse el a modellt ({{key:Mod+S}}), hogy az NC-fájlok a mentett modellnek feleljenek meg.
3. Válassza az {{ui:NC-fájlok}} elemet a {{ui:Kimenet}} csoportban.
4. A böngésző letölti a `<name> NC.zip` fájlt. Az állapotsor megmutatja, hány fájl van benne, és felsorolja azokat a jeleket, amelyekhez nem írt fájlt (szögacélt vagy kivágással ellátott kör keresztmetszetű csövet).

A zip-fájlon belül minden fájl az alkatrészjeléről kapja a nevét: `b1.nc1`, `c1.nc1`, `p1.nc1` … A zip-fájl tömörítetlen, és bármilyen zip-eszközzel megnyitható.

Ha a modellben nincs alkatrész, az állapotsor ezt jelzi.

## Az egyes fájlok tartalma

- **Fejléc (ST):** a modell neve megrendelésként, az alkatrészjel rajzként és darabként, az 1. fázis vagy az alkatrész fázisa, az acélminőség, a mennyiség, a szelvény és méretei, a tömeg méterenként és a festendő felület méterenként. A fűrészvágások derékszögűek.
- **Külső kontúrok (AK):** a gerinc körvonala a kivágásokkal kimetszve, és minden öv rövidebb ott, ahol kivágás távolítja el.
- **Lyukak (BO):** minden lyuk a felületével, pozíciójával és átmérőjével, beleértve a véglemezek és talplemezek lyukait is.

Mezőnként, a síkok és a koordináták szabályaival együtt: [NC-fájl mezői](topic:nc1-fields).

## Mi nem íródik meg

- Kivágással ellátott szögacélok és kör keresztmetszetű csövek: nincs NC-fájl. A jelük az állapotsorban szerepel.
- Lyukak kör keresztmetszetű csövekben (a DetailCraft nem készít ilyet).
- Élletörések, belső kontúrok, alkatrészjelölések (karcolás) és a derékszögtől eltérő fűrészszögek.
- Hosszúlyukak (a DetailCraft csak kerek lyukakat készít).

## Ellenőrzés megmunkálás előtt

A DetailCraft NC-fájljait a saját tesztcsomagja visszaolvassa, de nem futtatták őket az Ön műhelyének gépein.

1. Nyissa meg a fájlokat a műhelye NC-megjelenítőjében vagy a gépvezérlő szoftverben, és hasonlítsa össze őket a műhelyrajzokkal.
2. Minden fajtából egy alkatrészt ellenőrizzen a gépen, mielőtt egy köteget indítana.
3. Ellenőrizze, hogyan olvassa a szoftver az övek y-koordinátáit és az U-szelvények síkjait: a DetailCraft az övek y-értékét a hátoldali széltől méri, és az U-szelvényeket a szabvány ábrájának megfelelően a hátukon fekvőnek tekinti (lásd: [NC-fájl mezői](topic:nc1-fields#faces-and-coordinates)).
