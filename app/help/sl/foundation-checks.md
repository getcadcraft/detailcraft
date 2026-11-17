---
title: Preverjanje temeljev
summary: Preverite temeljne stope, združene temeljne stope in plošče na tleh, ki jih opišete, posedek, prožno ploščo na vzmeteh, skupine pilotov in oporne stene. Pomoč inženirju pri pregledu.
keywords: temelj, temeljna stopa, združena temeljna stopa, plošča, posedek, modul podlage, vzmeti, robni steber, vogalni steber, nosilnost, zdrsavanje, prevrnitev, predrtje, strig v eni smeri, upogib, sidranje, najmanjša armatura, skupina pilotov, oporni zid, ACI 318-19
from: 6961ad52
---

:::warning
To so preverbe prvega reda za pregled inženirja, ne odobritev projekta. Dovoljeni tlak na tla in koeficient trenja vnesete sami: program DetailCraft ne pozna vašega tla.
:::

Zavihek {{ui:Temelji}} preveri temeljne stope v modelu glede na obtežbe stebrov, ki jih vnesete.

## Opis tal

Vnesite {{ui:Dovoljeni nosilni tlak}} in {{ui:Koeficient trenja na temelju}}. Obe vrednosti sta na začetku 0, kar pomeni, da nista vneseni: preverba nato tlak prikaže kot opombo in ne pove, da je ustrezen. Za posedek vnesite modul tal {{ui:Es}} (MPa), Poissonovo število in dovoljeni posedek (za začetek 25 mm). Za prožno ploščo vnesite modul podlage {{ui:ks}}. Tu so tudi nasip nad temeljno stopo, specifična teža tal, varnostni faktorji za zdrs in prevrnitev (za začetek 1.5) ter natezna trdnost armature.

## Vnos obtežb

Vsaka temeljna stopa ima seznam obtežb stebrov. Uporabite {{ui:Dodaj obtežbo stebra}} in izpolnite vrstico za uporabnost (za nosilnost, zdrs in prevrnitev) ter vrstico s faktorji (za preverbe trdnosti): navpično silo P navzdol, vodoravni sili Vx in Vy na zgornjem robu temeljne stope, momenta Mx in My, mesto stebra na temeljni stopi in njegovo velikost.

Ali pa zaženite zavihek {{ui:Analiza}} in pritisnite {{ui:Prevzemi obtežbe stebrov iz analize}}: vsaka podpora na temeljni stopi postane obtežba stebra iz nizov za uporabnost in s faktorji, ki jih izberete. Pozitiven My bolj obremeni stran +x temeljne stope; pozitiven Mx bolj obremeni stran −y.

## Kaj se preverja

Iz obtežb za uporabnost, z dodano lastno težo temeljne stope in nasipom:

- **Nosilnost:** tlak pod togo temeljno stopo. Znotraj srednje tretjine je vsa spodnja ploskev v stiku; zunaj nje se del spodnje ploskve dvigne in največji tlak je višji. Rezultanta zunaj temeljne ploskve pomeni neuspeh.
- **Zdrs:** trenje, pomnoženo z navpično silo, proti vodoravni sili.
- **Prevrnitev:** oddaljenost rezultante od roba.
- **Posedek:** elastični posedek povprečnega tlaka na polprostoru z modulom, ki ste ga vnesli, na sredini in v vogalu (Timoshenkova in Goodierjeva rešitev za prožni pravokotnik), v primerjavi z mejo. Je zgornja meja za togo temeljno stopo in ne upošteva plasti tal omejene globine, razbremenitve zaradi izkopane zemlje ter konsolidacije. Brez modula prikaže tlak kot opombo.

Samo iz obtežb stebrov s faktorji (ACI 318-19):

- **Upogib** na licu stebra z najmanjšo armaturo (0.0018 za palice 420 MPa) in palicami, ki ste jih narisali.
- **Strig v eni smeri** na razdalji d od lica.
- **Strig predrtja** na razdalji d/2 okoli vsakega stebra, z momentom stebra. Za steber blizu roba kritični prerez odreže rob temeljne stope (trije robovi ob robu, dva ob vogalu; ACI 318-19 22.6.4.1 in manjši αs iz Tabele 22.6.5.2), moment okoli središča prereza pa vključuje premik obtežbe.
- **Sidranje** palic za licem stebra, ravnih ali s kavlji.
- **Globina** nad spodnjimi palicami (150 mm).

Združena temeljna stopa ali plošča se obravnava kot toga, strig in moment pa izhajata iz statike na prerezih čez celotno širino.

## Prožna plošča na vzmeteh

Označite {{ui:Analiziraj to temeljno stopo kot prožno ploščo na vzmeteh}}, kadar temeljna stopa nosi veliko stebrov in toga temeljna stopa ni dovolj natančna. Temeljna stopa postane plošča iz štirivozliščnih končnih elementov na postelji vzmeti (vneseni {{ui:ks}}, zbran v vozliščih), obtežba vsakega stebra pa se razporedi po vozliščih njegovega lastnega tlorisnega odtisa. Druga tabela poda največji tlak tal in posedek (ter razliko med največjim in najmanjšim), upogibni moment v obeh smereh s potrebno armaturo, natezno napetost zgoraj v primerjavi z navadno trdnostjo betona (temeljna stopa nima zgornjih palic), strig v eni smeri na razdalji d od stebrov ter predrtje po lastnem tlaku vzmeti. Mreža se zgosti, dokler steber ni širok tri elemente; velika plošča potrebuje nekaj sekund. Lastna teža plošče in tal nad njo se izničita in nista vključeni.

Vsaka neuspešna preverba je v podoknu {{ui:Težave}} z navedbo točke predpisa.

## Skupine pilotov in oporne stene

{{ui:Dodaj skupino pilotov}} postavi mrežo pilotov pod togo kapo: vnesite obtežbo in momente ter kolikšno obremenitev sme posamezen pilot prenesti na tlak in na nateg (številke iz načrtovanja pilotov, ne iz tega zavihka). Reakcija posameznega pilota je P/n plus njegov delež momentov (elastična metoda), preverita pa se največji tlak in morebitni nateg.

{{ui:Dodaj oporni zid}} preveri konzolni zid na vodoravnem zasipu, na meter: Rankinov aktivni tlak, prevrnitev okoli prstnega roba, zdrs in tlak pod temeljem. Pasivni tlak pred prstnim robom ni upoštevan. Vaš pomočnik lahko zažene enaka preverjanja z `pile_group_check` in `retaining_wall_check`.

Skupine pilotov, zidovi in stikalo za prožno ploščo se shranijo v datoteko modela, neuspešna preverba pa je na voljo v {{ui:Težave}}.
