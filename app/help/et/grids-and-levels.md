---
title: Seadista ruudustik ja tasandid
summary: Sisesta ruudustiku jooned, nende vahed ja tasandid, millele iga element paigutatakse.
keywords: ruudustik, ruudustikud, teljed, ruudustiku jooned, tasandid, kõrgusmärgid, korrused, põrandad, vahe, seadistus
from: 9cad233c
---

Iga element DetailCraftis paigutatakse tasandil ruudustiku ristumiskohale. Seadista ruudustik ja tasandid esimesena; hiljem saab neid muuta.

## Kuidas ruudustik siin töötab

- **Nummerdatud jooned** kulgevad ühes suunas, **tähistatud jooned** teises. Nimed on lihtsalt harjumus: silt võib olla mis tahes tekst kuni 8 märki (1, 2, 3 või A1, A2, või 10, 20).
- Sisestad sildid ja nendevahelised vahed, mitte koordinaadid. Iga komplekti esimene joon asub punktis 0.
- Nummerdatud jooned on pidevalt x-i väärtusega jooned; tähistatud jooned on pidevalt y-i väärtusega jooned. Nii kulgeb tala ruudustikult 1 ruudustikule 2 piki x-i ja tala A-st B-ni piki y-i.
- Kõik väärtused on millimeetrites.

Uus mudel algab nummerdatud joontega 1 2 3 vahedega 6000 6000, tähistatud joontega A B vahega 6000 ja kahe tasandiga.

## Ruudustiku seadistamine

1. Vasakul paneelil {{ui:Mudel}} ava {{ui:Ruudustik}}, kui see on kokku volditud.
2. Väljal {{ui:Nummerdatud jooned}} sisesta sildid tühikutega eraldatult, näiteks `1 2 3 4 5`.
3. Väljal {{ui:Vahed}} selle all sisesta iga vahe kohta üks väärtus, näiteks `6000 6000 7500 6000`. Viie joone puhul on neli vahet.
4. Tee sama väljadel {{ui:Tähistatud jooned}} ja nende {{ui:Vahed}}, näiteks `A B C` ja `8000 8000`.
5. Vali {{ui:Rakenda ruudustik}}.

Olekuribal on „Ruudustik uuendatud.” ning vaade suumib uue ruudustiku peale. Komad töötavad samuti eraldajatena.

Kui midagi ei klapi, ei muutu midagi ning olekuribal öeldakse põhjus, näiteks „Nummerdatud ruudustikud: anna iga kahe joone vahele üks vahe (4).” Muud kontrollid: vahed peavad olema positiivsed millimeetrid, sildid peavad erinema ning igas suunas võib olla kuni 60 joont.

:::note
Elemendid säilitavad oma koordinaadid, kui ruudustik liigub. Kui muudad vahet pärast terase paigutamist, jääb teras oma kohale ega ole enam ruudustikul. Muuda kõigepealt ruudustikku või liiguta elemente, muutes nende otspunktide koordinaate.
:::

## Tasandite seadistamine

1. Ava {{ui:Tasandid}} paneelil {{ui:Mudel}}.
2. Igal real on tasandi nimi ja selle kõrgusmärk millimeetrites. Muuda neid vabalt.
3. Vali {{ui:Lisa tasand}}, et lisada uus rida. See saab nimeks „Tasand 3” (ja nii edasi) ning paigutatakse 4000 mm kõrgemale kõige kõrgemast tasandist; muuda mõlemat, kui vaja.
4. Tasandi eemaldamiseks vali rea lõpus nupp ×.
5. Vali {{ui:Rakenda tasandid}}.

Midagi ei muutu enne, kui valid {{ui:Rakenda tasandid}}. Tasandid sorteeritakse rakendamisel kõrgusmärgi järgi. Igal tasandil peab olema nimi, kaks tasandit ei tohi jagada nime ning peab jääma vähemalt üks tasand.

Tasandid võivad olla nullist allpool (keldrikorrus väärtusega `-3500`) ega pea olema ühtlaste vahedega.

## Kuidas tasandeid kasutatakse

- Tasandil paigutatud post ulatub kuni järgmise tasandini või tasandini, mille valid väljal {{ui:Ülemine tasand}}.
- Talad ja plaadid paigutatakse kahe ristumiskoha vahele tasandil, millel klõpsad.
- Vundamendid paigutatakse nii, et nende ülaosa on tasandil, millel klõpsad.
- {{ui:Plaan}} vaatab alla ühele tasandile korraga.
- IFC-eksport teeb iga tasandi kohta ühe hoonekorruse.

## Tagasivõtmine

Ruudustiku ja tasandite muudatused on tavalised muudatused nagu kõik teised: {{key:Mod+Z}} paneb eelmise ruudustiku tagasi.

## Järgmine

[Paiguta postid, talad ja diagonaalid](topic:place-members)
