---
title: Postavljanje limova i dodavanje prilagođenih profila
summary: Postavi slobodne limove po debljini i širini, i definiši vlastite I, kanal, ugao, cijev ili ravnu traku.
keywords: lim, ravni, prilagođeni profil, korisnički profil, parametarski, presjek, oblik, poprečni presjek, pl
from: c24c3b51
---

## Postavljanje lima

Lim se postavlja kao greda: ide između dva presjeka, sa širinom poprijeko i debljinom gore.

1. Odaberi {{ui:Plate}} u grupi {{ui:Place}}, ili pritisni {{key:P}}.
2. U panelu {{ui:Properties}} postavi {{ui:Thickness (mm)}} i {{ui:Width (mm)}}. Zadano je 20 x 200 u A36.
3. Postavi {{ui:Material}} i {{ui:Rotation (°)}} ako treba. Rotacija 90 stavlja lim na ivicu.
4. Klikni dva presjeka, ili koristi obrazac {{ui:Add by grid}}.

Naziv profila lima se piše `PL<thickness>x<width>`, na primjer PL20x200. Njegova dužina je rastojanje između dvije tačke.

Da promijeniš veličinu postavljenog lima, odaberi ga i promijeni {{ui:Thickness (mm)}} ili {{ui:Width (mm)}}.

Limovi koje postaviš su zasebni dijelovi (oznaka p, sklop P). Krajnje ploče i bazne ploče koje prave veze su takođe limovi, ali ih mijenjaš kroz vezu; vidi [Krajnje ploče](topic:end-plates).

## Dodavanje prilagođenog profila

Kad presjek koji ti treba nije u katalogu, napravi ga iz njegovih dimenzija. Prilagođeni profil pripada modelu i čuva se sa njim. Da ga koristiš u svakom novom modelu, čuvaj ga u {{ui:My profiles}}, opisano u "Čuvanje profila za nove modele" ispod.

1. U panelu {{ui:Model}} s lijeve strane otvori {{ui:Custom profile}}.
2. Upiši {{ui:Name}}, na primjer `W8x18-custom` ili `RHS 120x80x5`. Ne može biti naziv iz kataloga niti izgledati kao naziv lima.
3. Izaberi {{ui:Shape}}: {{ui:I-shape}}, {{ui:Channel}}, {{ui:Equal angle}}, {{ui:Rectangular tube}}, {{ui:Round tube}} ili {{ui:Flat bar}}.
4. Popuni dimenzije koje se pojave, sve u milimetrima:

| Oblik | Dimenzije |
|---|---|
| I-profil | Dubina d, širina pojasnice bf, rebro tw, pojasnica tf, radijus zaobljenja r (može biti 0) |
| Kanal | Dubina d, širina pojasnice bf, rebro tw, pojasnica tf (oštri uglovi) |
| Jednakokraki ugao | Širina b (svaki krak), debljina t |
| Pravougaona cijev | Visina h, širina b, debljina t (vanjski radijus ugla 2t) |
| Okrugla cijev | Prečnik D, debljina t |
| Ravna traka | Širina b, debljina t |

5. Ostavi {{ui:Keep in My profiles}} štiklirano da bude u svakom novom modelu (vidi ispod), ili ga odštikliraj da ostane samo u ovom modelu.
6. Odaberi {{ui:Add profile}}.

Statusna traka kaže "Profil "…" je dodat; nalazi se u svakoj listi profila pod Prilagođeno." Pojavljuje se na listi ispod obrasca i na kraju svake liste {{ui:Profile}}.

DetailCraft provjerava da li oblik može postojati. Vidjećeš poruke kao što su "Rebro i pojasnice ne stanu u dubinu i širinu.", "Radijus zaobljenja je prevelik za pojasnicu." ili "Zid je previše debeo." Ispravi brojeve i ponovo odaberi {{ui:Add profile}}.

### Šta dobijaju prilagođeni profili

- Masa po metru iz površine × 7850 kg/m³ (veličine iz kataloga koriste objavljenu težinu).
- Prilagođeni I-profili primaju rupe, izreze, krajnje ploče, NC datoteke i radioničke crteže kao I-profili iz kataloga.
- Prilagođene ravne trake se ponašaju kao limovi.
- Prilagođeni kanali i cijevi primaju rupe; uglovi i okrugle cijevi još ne.

Ne možeš urediti ni ukloniti prilagođeni profil iz modela kad je jednom dodat (odmah koristi {{key:Mod+Z}} ako si pogriješio). Ispravljenom daj novi naziv.

## Čuvanje profila za nove modele

{{ui:My profiles}}, ispod obrasca, je tvoja lista prilagođenih profila. Čuva se u ovom pregledniku, na ovom računaru, a ne u datoteci modela niti na tvom računu.

- Profil dodat sa štiklianim {{ui:Keep in My profiles}} ide na listu. Svaki novi model, uključujući onaj koji DetailCraft otvori kad ga pokreneš, počinje sa svim njima u listama profila.
- Profil koji je već u modelu, ali nije na listi, ima dugme {{ui:Keep}} pored sebe.
- U modelu koji nema jedan od tvojih profila (na primjer stariji fajl), odaberi {{ui:Use here}} da ga dodaš.
- {{ui:Remove}} uklanja profil sa liste. Modeli koji ga već koriste zadržavaju svoju kopiju.
- Model koji otvoriš zadržava profile sačuvane u svojoj datoteci. Otvaranje datoteke nikad ne mijenja tvoju listu.
- Naziv koji je već na listi sa drugačijim dimenzijama se odbija: daj novom drugi naziv.
- Brisanje podataka sajta u pregledniku, ili korištenje drugog preglednika ili računara, počinje sa praznom listom. Privatni prozor to ne može zadržati; aplikacija to kaže.
