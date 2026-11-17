---
title: Provjere izvodljivosti
summary: Problemi za stvari koje projektant uoči okom: vijak do kojeg ključ ne može doći, vijci previše blizu za nasadni ključ, ugaoni zavari van granica veličine, zavari do kojih baklja ne može doći i cijevi koje zadržavaju vodu.
keywords: izvodljivost, ključ, nasadni ključ, pristup vijku, zatezanje, veličina vara, ugaoni var, minimalni var, maksimalni var, voda, odzračna rupa, drenažna rupa, galvanizacija, šuplji profil, problemi
from: 72315151
---

DetailCraft traži četiri vrste problema koje nijedna provjera čvrstoće ne nalazi i navodi ih u panelu {{ui:Problemi}}. To su upozorenja i napomene koje treba pogledati, a ne greške: model se i dalje gradi.

## Vijak do kojeg ključ ne može doći

Za svaki vijak, DetailCraft stavlja nasadni ključ preko glave i preko matice. Nasadni ključ je cilindar širok koliko matica preko uglova, plus zid od 4 mm, dugačak 60 mm. Ako rebro grede, pojasnica, ploča ili dijagonala stoje unutar tog cilindra, problem navodi spoj, koliko vijaka, koji dio smeta i koliko je daleko od vijka.

Nasadni ključ je tipična udarna glava. Običan ključ treba manje prostora, a veći alat više. Zamolite svog povezanog asistenta da pokrene `constructability_check` sa drugim `socketLength` da vidite kako se odgovor mijenja.

## Vijci previše blizu za nasadni ključ

Nasadni ključ preko jednog vijka ne smije dodirivati glavu sljedećeg. Vijci spoja koji su bliži od širine nasadnog ključa plus glave susjeda navedeni su sa pronađenim razmakom i potrebnim razmakom.

## Veličine ugaonih zavara

AISC 360-16 tabela J2.4 određuje najmanji ugaoni var prema debljini tanjeg dijela (3 mm do 6.35 mm debljine, 5 mm do 12.7, 6 mm do 19.05, 8 mm iznad), a J2.2b najveći duž ivice materijala: ne veći od materijala kada je tanji od 6.35 mm, inače 1.6 mm manji. Spojevi sa istom veličinom na istoj debljini navode se kao jedan problem.

Debljina koja se koristi je najtanji dio koji var imenuje, pa je var od 8 mm sa svih strana grede sa rebrom od 6.35 mm naveden.

## Voda i odzračivanje

- **Otvoren gornji kraj** šupljeg profila koji stoji uspravno ili se nagiba za više od 10° propušta kišu.
- Šuplji profil **zatvoren na oba kraja** treba odzračnu i drenažnu rupu; vruće galvaniziranje i pritisak zagrijanog zraka traže jednu.

## Može li zavarivač doći do njega

Ugaoni var se radi tako da je baklja na pola puta između dvije površine koje spaja. Za svaki ugaoni var sa svih strana (čeona ploča, temeljna ploča, zakošena ploča), provjera uzima obris presjeka elementa na ploči i, svakih 20 mm, pušta putanju baklje van pod 45° od mjesta gdje njena mlaznica (poluprečnik 10 mm za početak) prvi put prolazi oba lica, još 30 mm. Ako putanja udari u sopstvenu pojasnicu grede ili drugi dio, taj dio vara je naveden sa dijelom i razmakom. Ovi brojevi su tipični, a ne standard: pitaj svog izrađivača za postupak i mlaznicu. Varovi duž dvije ivice (smični lim) nisu lokalizovani i ne provjeravaju se.
