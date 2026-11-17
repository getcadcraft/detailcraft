---
title: Izdelava delavniških risb
summary: En list za vsako oznako dela, izdelan vse naenkrat: predogled poljubnega lista in prenos enega lista ali celotnega niza kot PDF na A4 do A1 ali ANSI B do D, z luknjami, zarezi, kotami in glavo risbe.
keywords: delavniška risba, delavniške risbe, vsi deli, skupinsko, celoten niz, risba posameznega dela, izdelovalna risba, detajlna risba, risba kosa, pdf, tiskanje
from: d25fe035
---

DetailCraft izdela en list za vsako oznako dela, za vsak nosilec, steber, diagonalo in ploščo v modelu, vse naenkrat: ni treba izbirati enega za drugim. Enaki kosi imajo isto oznako, zato delijo en list. Listi se izdelajo sproti iz modela; niso shranjeni ali urejeni.

## Izdelava celotnega niza

1. Izberite {{ui:Delavniška risba}} v skupini {{ui:Izhod}}. Ničesar ni treba izbrati. Če je izbran del, se okno odpre na listu tega dela. V podoknu {{ui:Lastnosti}} se isti gumb za elemente imenuje {{ui:Delavniška risba}}, za povezave pa {{ui:Risba plošče}}.
2. Odpre se predogled, naslovljen z oznako dela, na primer „Delavniška risba b1“. Prvi seznam ob naslovu vsebuje vsako oznako dela z njenim profilom, dolžino in količino: izberite eno, da vidite njen list. Drugi seznam spremeni velikost lista; celoten niz se izdela znova na njej (glejte [Splošne in sestavne risbe](topic:drawings#choose-the-sheet-size)).
3. Izberite {{ui:Prenesi vse}} (gumb prikaže število listov) za eno PDF datoteko s stranjo za vsako oznako dela, `<name> Shop drawings.pdf`. Vsak list v glavi risbe pove „List 3 od 42“. Ali izberite {{ui:Prenesi PDF}} za tistega, ki ga gledate, `<name> <mark>.pdf`.
4. Predogled zaprite z × ali {{key:Esc}}.

Če je {{ui:Delavniška risba}} zasivljena, model še nima delov.

## Kaj je na listu

Za I-profil:

- **Pogled**, gledan na stojino: del z zarezi, luknje v stojini kot krogi, luknje v pasnicah kot skrite (črtkane) črte.
- **Tloris zgornje pasnice**, gledan od zgoraj, kadar ima katera pasnica luknje. Luknje na spodnji pasnici so črtkane.
- **Prerez** skozi profil.
- **Kote:** povezane položaje lukenj vzdolž dela in skupno dolžino, višine lukenj v stojini, razmik in velikosti zarezov.
- **Seznam lukenj:** vsaka skupina lukenj, na primer „8 x Ø22 v zgornji pasnici“.
- **Var**, kadar ima del nanj zavarjene plošče.
- **Glava risbe:** oznaka dela, oznaka sestava, profil, material, dolžina, količina, teža posameznega in skupna teža, ime modela in datum.

Pri U-profilu, kotniku ali votlem profilu je list enak, gledano na stojino ali stran: stene cevi so skrite (črtkane) črte, prerez pa poda debelino stene.

Za ploščo: ploskev plošče z luknjami in njen rob kot prerez.

## Merila

Merilo se izbere s seznama (od 1:1 do 1:200), da del pade na list. Dolg, plitev del bi bil pri enem merilu pretanek za branje, zato se, kadar bi globina na papirju bila pod 30 mm, globina riše v večjem merilu kot dolžina. Naslov pogleda to tedaj pove, na primer „dolžina 1:20, globina 1:5 (ni v enem merilu; merodajne so kote)“. Velikosti vedno berite iz kot, ne z merjenjem lista.

## Dobro je vedeti

- Količina je število delov s to oznako v modelu. Oznake se lahko po spremembi preštevilčijo; glejte [Preverjanje oznak in kosovnice](topic:marks-and-bom).
- Vsak list je en del sam, brez simbolov varov; sestavne risbe (s simboli varov) in splošne postavitvene risbe so v [Risbe](topic:drawings). List v DetailCraft ni mogoče urejati ali označevati. Za označevanje odprite PDF v programu za označevanje PDF, na primer MarkupCraft.
- Glava risbe pravi „DetailCraft laboratorijska različica — milimetri“.
- Besedilo uporablja standardno pisavo PDF Helvetica. Znaki zunaj zahodnoevropskega nabora se natisnejo kot „?“, vrstica stanja pa jih prešteje.

## Tiskanje

Če želite, da navedena merila veljajo, odprite preneseno PDF v bralniku PDF in ga natisnite pri 100 % (brez prilagajanja na stran) na papir izbrane velikosti. Na manjšem listu ga pomanjšajte in se zanesite na kote.
