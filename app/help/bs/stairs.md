---
title: Stepenice
summary: Postavi ravne čelične stepenice iz visine uspona, gaza i širine: dva kosnika i gazišne ploče, jedan zavareni sklop.
keywords: stepenice, stepenište, kosnik, gazište, stupnica, gaz, istak, krak, čelične stepenice, ibc 1011, blondel
from: 62fa3845
---

Ravne čelične stepenice: dva kosnika (U-profili sa krajevima okrenutim prema unutra, ili ravne trake postavljene na ivicu) i gazišna ploča na svakom stepenu, zavarene između njih. DetailCraft izračunava broj stupnica iz uspona, provjerava ih prema granicama građevinskog propisa i pravi stepenice kao jedan sklop u radionici.

## Postavi stepenice

1. Izaberi {{ui:Stepenice}} u grupi {{ui:Postavljanje}}, ili pritisni {{key:S}}.
2. Postavi stepenice desno: **smjer penjanja** (0° ide duž +x, 90° duž +y), **uspon** (0 = do sljedećeg nivoa), **gaz**, **svijetla širina** između kosnika, **najveća dozvoljena stupnica**, **kosnik**, **debljina gazišne ploče**, **istak** i materijal.
3. Klikni presjek mreže: to je podnožje prve stupnice, na središnjoj liniji stepenica.

Statusna traka kaže koliko je stupnica napravljeno. Odaberi stepenice (klikni kosnik ili gazište) da promijeniš bilo koju postavku, položaj ili fazu; svojstva takođe prikazuju stupnice, gazišta, dužinu, hod, nagib i 2 × stupnica + gaz.

## Šta DetailCraft izračunava

- **Stupnice.** Što manje, tako da svaka stupnica ostane na najvećoj dozvoljenoj ili ispod nje: uspon od 3000 mm uz najviše 178 mm daje 17 stupnica od 176.5 mm. Gazišta ima jedno manje od stupnica (najviši sprat je posljednji stepen).
- **Gazišta.** Ploča dubine gaz + istak (280 + 25 = PL6x305 podrazumijevano) i duga koliko svijetla širina, s gornjom stranom na visini svake stupnice, a prednja ivica (istak) ispred linije stupnice.
- **Kosnici.** Pod nagibom stepenica, od mjesta gdje dodiruju donji sprat do mjesta gdje dodiruju gornji, tik izvan svijetle širine, s gornjom ivicom 50 mm iznad linije istaka. Krajevi U-profila okrenuti su prema unutra; ravna traka kao PL12x250 stoji na ivici.
- **Varovi.** Svako gazište za oba kosnika. Gazišta i desni kosnik zavareni su za lijevi kosnik, pa stepenice dobijaju jednu oznaku sklopa (ST1) i sopstveni sklopni crtež; kosnici dobijaju oznake dijelova st…, a gazišta p….
- **Provjere.** Upozorenja kad je stupnica izvan 4 do 7 in. (102 do 178 mm) ili je gaz manji od 11 in. (279 mm), granice IBC 2021, odjeljak 1011.5.2, kad je 2 × stupnica + gaz izvan 600 do 650 mm (uobičajeno pravilo udobnosti), i kad je kosnik preplitak da nosi gazišta. Nepoznat profil kosnika sprječava izradu stepenica.

## Dobro je znati

- Pomjeranje, rotiranje, zrcaljenje, kopiranje, zalijepljivanje, brisanje i faze rade na stepenicama kao na elementu. Rotacija okreće penjanje; zrcaljenje ga šalje zrcalnim smjerom.
- Kosnici se izvoze u IFC kao IfcMember, a gazišta kao IfcPlate; oba idu u NC datoteke i spisak materijala. Provjera sudara ostavlja vlastite dijelove stepenica na miru (zavareni su zajedno).
- Ove obične stepenice su jedan krak sa gazištima od ploče. Za podeste, rukohvate sa balustrima, gazišta od savijenog lima ili rešetke, skup pravila po izboru, spisak rezanja i crteže rupa u kosnicima, označi {{ui:Koristi generator čeličnih stepenica}} u alatu Stepenice (vidi Generator čeličnih stepenica).
- Kosnici su isječeni pod pravim uglom: rezovi na krajevima prema podovima nisu urađeni.
- DetailCraft ne projektuje stepenice: kosnici i gazišta se ne provjeravaju na čvrstoću ni na progib.
