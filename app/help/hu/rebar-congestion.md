---
title: Vasalássűrűség-térkép
summary: Lássa, mennyire sűrűn hagyja a vasalás az egyes alapokat ahhoz, hogy a beton lejusson, az Ön megadott adalékanyaggal és vibrátorral.
keywords: vasalás, sűrűség, távolság, tiszta távolság, betonozás, adalékanyag, vibrátor, indítórudak, horgok, alap, háló
from: 40d029e6
---

A {{ui:Zsúfoltság}} lap minden alapról felülnézetben hőtérképet rajzol. A halványkék nyitott; a sárga és a narancs szűkösödik; a piros szűkebb, mint amennyit a rudak igényelnek. A sötét cellák maguk a rudak.

## Mit mér a térkép

A beton rétegenként halad le az acélon, és a rétegek között oldalirányban is mozoghat. Ezért a térkép minden pontban a legszűkebb szabad rést veszi figyelembe bármelyik rétegben: az alsó háló rudai között, a következő rúdréteg között, és a felül lévő indítórudak horogszárai között. Az indítórudak mindegyiken átmennek.

## Mit tekintünk szűknek

Az igény a 25 mm és a rúdátmérő közül a nagyobb (ACI 318-19 25.2.1), BS 4449 rudak esetén pedig a rúdátmérő és a 20 mm közül a nagyobb (EN 1992-1-1 8.2). Két mező emeli meg:

- {{ui:Legnagyobb adalékanyag}}: az igény az adalékanyag méretének 4/3-a (ACI), vagy az adalékanyag + 5 mm (EN) lesz.
- {{ui:Vibrátorfej}}: az igény legalább a fej átmérője.

Mindkettő 0-ról indul, ami azt jelenti, hogy nem ismert: a DetailCraft nem ismeri az Ön betonkeverékét vagy szivattyúját.

## Problémák

Az alap, ahol az igénynél szűkebb hely van, a {{ui:Problémák}} panelben szerepel, a talált és a szükséges nyílás méretével. A térkép melletti {{ui:Kijelölés}} kijelöli az alapot.

A térkép nem látja a kötözőhuzalokat, a toldóelemeket, a csatornákat vagy az oszlop saját rúdjait.
