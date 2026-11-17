---
title: Kiadások, revíziók és a rajzváltozás-napló
summary: Tartson egy kiadási előzménylistát az építész modelljével: olvassa be a kiadásokat, rögzítsen helyszíni utasításokat, gyártmányterveket és hivatkozott modelleket egy kiadáshoz, és olvassa a rajzváltozás-naplót.
keywords: kiadás, revízió, revíziók, változásnapló, rajzváltozás-napló, rajzjegyzék, helyszíni utasítás, gyártmányterv, hivatkozott modell, ajánlattétel, kivitelezés, kiadási előzmények, gyártmánytervek, gyártás
from: 4b9a1b7b
---

## Teendők

Dolgozzon ugyanabból a kiadási előzménylistából, mint a csapat többi tagja. Nézze meg, mely rajzlapok melyik revízióval mentek ki, és a helyszínen történteket kösse a hozzájuk tartozó kiadáshoz.

## Lépések

1. Nyissa meg a **Kiadások és revíziók** menüpontot.
2. Válassza a **Kiadási előzmények beolvasása** lehetőséget, és jelölje ki a BimCraftból vagy egy másik alkalmazásból mentett `.issues.json` fájlt. A benne lévő kiadások és bejegyzések hozzáadódnak a meglévőkhöz. Semmi sem íródik felül.
3. Válassza a **Bejegyzés hozzáadása** lehetőséget helyszíni utasításhoz, gyártmányterv-hez, jelölés-készlethez, hivatkozott modellhez vagy megjegyzéshez. Válassza ki, melyik kiadáshoz tartozik, és annak állapotát. A kiválasztott fájl nevét, méretét és SHA-256 értékét rögzíti a rendszer; a fájl a helyén marad.
4. A **Rajzváltozás-napló** soronként egy lapot, oszloponként egy kiadást mutat. A zárójelben lévő revízió azt jelenti, hogy változatlanul újra ki lett adva.
5. A **Változásnapló letöltése (CSV)** menti a kiadásokat, a lapjegyzéket és a bejegyzéseket. A **Kiadási előzmények mentése** olyan fájlt ír, amelyet a többi alkalmazás is olvas.

## Jó tudni

- A lapok kiadása továbbra is lapról lapra történik a Rajzokban. Ezek a kiadások itt jelennek meg: az, amely lapok ugyanazon a napon, ugyanazzal a megjegyzéssel adódtak ki, egy kiadást alkot.
- A beolvasott kiadások és bejegyzések a modellfájlban mentődnek. Minden változtatás egy visszavonási lépés.
- Ugyanazt a fájlt kétszer beolvasva semmi sem adódik hozzá kétszer. Ha két példányban ugyanaz a bejegyzés szerepel, az újabb marad meg.
