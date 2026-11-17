---
title: Szélteher, szeizmikus helyszín és ASCE 7 kombinációk
summary: Szélteher-esetek készítése zárt, merev épülethez, a szeizmikus tervezési értékek meghatározása egy helyszínhez, és az ASCE 7 kombinációk létrehozása az Analízis lapon.
keywords: szél, szélterhelés, asce 7, irányított eljárás, kitettség, zártság, szeizmikus, talajosztály, ss, s1, sds, sd1, usgs, tervezési spektrum, teherkombinációk, lrfd, asd, kzt, kd, lökés
from: 676fcbf3
---

Három blokk az {{ui:Analízis}} lapon készíti elő a keret szél- és szeizmikus bemeneteit, és kombinálja azokat: {{ui:Szélterhek (ASCE 7 irányított eljárás)}}, {{ui:Szeizmikus helyszín és rendszer (ASCE 7)}} és {{ui:ASCE 7 teherkombinációk}}. Ezek segédeszközök: **nem tervezési előírás szerinti ellenőrzés; a mérnöknek kell átnéznie az eredményeket.**

## Mi a feladat

Szélteher-esetek készítése zárt, merev épülethez, a szeizmikus értékek kiválasztása egy helyszínhez, valamint az ezeket használó kombinációk létrehozása. A modellhez födémek kellenek, ezért előbb futtassa az analízist (lásd: [Erők, támaszreakciók és lehajlások](topic:frame-analysis)).

## Lépések

1. Nyissa meg az {{ui:Analízis}} lapot, és válassza a {{ui:Futtatás}} parancsot, hogy a födémek és az épület mérete ismertté váljon. Ha egy blokk szerint nincsenek födémek, válassza benne a {{ui:Födémek keresése}} parancsot.
2. A {{ui:Szélterhek (ASCE 7 irányított eljárás)}} blokkban válassza ki a {{ui:Kiadás}} értéket, írja be a {{ui:Alapszélsebesség V}} értéket a széltérképről, és válassza ki a {{ui:Sebességegység}} mértékegységet, majd a {{ui:Kitettség}} és a {{ui:Zártság}} értéket. Itt van még a Kzt, a Kd, a G, a terepszint, a szélárnyéki Cp, az excentricitás és az irány is.
3. Olvassa le a nyomást minden szinten és az egyes szintekre ható erőt a táblázatban, majd válassza a {{ui:Szélteher-esetek létrehozása}} parancsot. Az esetek: +X, -X, +Y és -Y.
4. A {{ui:Szeizmikus helyszín és rendszer (ASCE 7)}} blokkban válassza ki a kiadást, és írja be az Ss és S1 értékeket (ASCE 7-22 esetén SMS, SM1 és S1), adja meg az A–D talajosztályt, a kockázati kategóriát és a szeizmikus erőtálló rendszert. Vagy írja be a földrajzi szélességet és hosszúságot, és válassza a {{ui:Keresés az USGS-ből (online)}} parancsot; az online szolgáltatást csak akkor kérdezi le, amikor kiválasztja.
5. Olvassa le az Fa, Fv, SDS és SD1, az R, Cd és Omega0 értékeket és a tervezési spektrumot, majd válassza a {{ui:Használat a szeizmikus blokkban}} parancsot. A szeizmikus blokkban válassza a {{ui:Szeizmikus esetek készítése}} parancsot (lásd: [Betonelemek ellenőrzése és szeizmikus terhek készítése](topic:concrete-and-seismic)).
6. Az {{ui:ASCE 7 teherkombinációk}} blokkban válassza ki a {{ui:Módszer}} értéket (LRFD vagy ASD), majd válassza az {{ui:ASCE 7 kombinációk létrehozása}} parancsot. Futtassa újra az analízist.

## Tudnivalók

- Szél: csak zárt, merev épületre, irányított eljárással. Rugalmas épülethez a szabványból kell lökésfaktort venni, amelyet a DetailCraft nem készít.
- Az E és F talajosztályhoz helyszíni vizsgálat szükséges, és ezek még nincsenek elkészítve.
- A blokkok alján lévő forráslista megmutatja, honnan származik az egyes szám, és mi maradt ki.
- Az USGS-keresést helyettesítő szolgáltatáson tesztelték, nem az élő szolgáltatáson.
