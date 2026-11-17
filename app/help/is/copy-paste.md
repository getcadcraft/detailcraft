---
title: Afrita, líma og tvöfalda
summary: Veldu nokkra hluta, afritaðu þá ásamt götum, útskurðum og tengingum, og límdu þá á skurðpunkt áss, með færslu, á sama stað eða í öðrum flipa. Klippa, tvöfalda, eyða og velja allt.
keywords: afrita, líma, klippa, tvöfalda, klippiborð, líma á sama stað, velja allt, velja ekkert, margval, smella með Shift, nokkrir, endurtaka reit, afrita ramma, færsla, eyða nokkrum, valmynd breyta, valmynd meira
from: f25f1829
---

Hópurinn {{ui:Breyta}} á tækjastikunni hefur {{ui:Afturkalla}}, {{ui:Endurgera}}, {{ui:Afrita}} og {{ui:Líma}}. Valmyndin {{ui:Meira}} geymir hitt: {{ui:Klippa}}, {{ui:Afrita}}, {{ui:Líma}}, {{ui:Líma á sama stað}}, {{ui:Tvöfalda}}, {{ui:Eyða}}, {{ui:Velja allt}} og {{ui:Velja ekkert}}, hvert með sinn flýtilykil. Hnappur eða valmyndaratriði sem getur ekki virkað í augnablikinu er gráleitt; færðu bendilinn yfir það til að lesa af hverju (til dæmis „ekkert afritað enn“).

Hvert líma, klipping, tvöföldun og eyðing er eitt skref: eitt {{key:Mod+Z}} tekur það allt til baka.

## Velja nokkra hluta

- Smelltu á hluta til að velja hann. Haltu inni {{key:Shift}} (eða {{key:Ctrl}}, eða {{key:Mod}}) og smelltu á fleiri hluta til að bæta þeim við; smelltu á valinn hluta á sama hátt til að taka hann úr valinu.
- {{key:Mod+A}} eða {{ui:Velja allt}} velur sérhvern bita, tengingu og undirstöðu.
- {{key:Esc}} eða {{ui:Velja ekkert}} hreinsar valið.

Þegar nokkrir hlutir eru valdir er spjaldið {{ui:Eiginleikar}} með fyrirsögninni „4 valdir“ (eða hversu margir sem þeir eru) og listar bitana eftir tegund, tengingarnar, undirstöðurnar og heildarþyngd stálsins, með hnöppunum {{ui:Afrita}}, {{ui:Tvöfalda}} og {{ui:Eyða}}.

## Afrita

1. Veldu bitana og undirstöðurnar sem þú vilt.
2. Veldu {{ui:Afrita}} eða ýttu á {{key:Mod+C}}.

Hvað fylgir með:

- Hver bitinn í heild: prófíll, efni, endar, staða, snúningur, heiti, göt og útskurðir. Sérsniðinn prófíll sem hann notar er líka afritaður.
- Hver undirstaða í heild: stærð, steypa, neðra net og startstangir.
- Endaplötur og grunnplötur, en aðeins þegar sérhver bita sem tenging tengir er afrituð: endaplata bita þarf bitann og súluna hans. Stöðustikan segir hversu margar tengingar voru skildar eftir. Til að skilja tengingar eftir viljandi, taktu hakið úr **Afrita endaplötur og grunnplötur með bitunum sínum** í [stillingum DetailCraft](topic:settings).

Tenging ein sér er ekki hægt að afrita; veldu bitana hennar í staðinn. Til að gefa öðrum samskeytum sömu tengingu, notaðu {{ui:Svipað}} (sjá [Endaplötur](topic:end-plates#copy-it-to-every-similar-joint)).

Afritið er áfram í þessum vafra þar til þú afritar eitthvað annað. Annar DetailCraft-flipi eða gluggi í sama vafra getur límt það, svo þú getur afritað ramma úr einu líkani og límt hann inn í annað.

## Líma á skurðpunkt áss

1. Veldu {{ui:Líma}} eða ýttu á {{key:Mod+V}}.
2. Færðu bendilinn yfir sýnina. Brotalínuð útlína af afritinu fylgir skurðpunkti áss sem er næst bendlinum.
3. Smelltu á skurðpunkt. Grunnpunktur afritsins (neðra horn þess: minnsta x, y og z af öllu sem var afritað) lendir þar.

Límdu hlutarnir eru valdir eftir á, svo þú getur límt aftur annars staðar eða breytt þeim. {{key:Esc}} hættir við límingu; afritið er áfram á klippiborðinu. {{ui:Grunnmynd}} og {{ui:Útlit}} gera réttan skurðpunkt auðveldari að hitta.

:::tip
Til að endurtaka reit skaltu velja hluti reitsins (eða allt með {{key:Mod+A}}), afrita, líma og smella á skurðpunktinn einum reit frá þar sem neðra horn afritsins var.
:::

## Líma af lyklaborði

Meðan á límingu stendur sýnir spjaldið {{ui:Eiginleikar}} hvað er á klippiborðinu og tvö eyðublöð:

- {{ui:Líma með færslu (mm, frá upprunalegu)}}: sláðu inn x, y og z og veldu {{ui:Líma á þessari færslu}}. Það byrjar með færslunni úr [stillingum DetailCraft](topic:settings).
- {{ui:Líma á skurðpunkt áss}}: veldu bókstafaás, tölustafaás og hæð og veldu {{ui:Líma hér}}. Grunnpunktinn fer þangað.

## Líma á sama stað

{{ui:Líma á sama stað}} ({{key:Mod+Shift+V}}) setur afritið á nákvæmlega þau hnit sem það var afritað frá. Notaðu það eftir {{ui:Klippa}}, eða til að færa hluta úr öðru líkani á sama stað. Ef upprunalegu hlutirnir eru enn til staðar liggur afritið ofan á þeim og stöðustikan varar þig við: færðu afritin eftir {{ui:Upphaf}} og {{ui:Endi}} í {{ui:Eiginleikar}}, eða afturkallaðu.

## Tvöfalda

{{ui:Tvöfalda}} ({{key:Mod+D}}) afritar valið og límir það strax, færðu um færsluna í [stillingum DetailCraft] (6000 mm eftir x til að byrja með). Það breytir ekki því sem er á klippiborðinu. Afritin eru valin eftir á, þannig að ef ýtt er aftur á {{key:Mod+D}} býr það til það næsta út frá þeim.

## Klippa og eyða

- {{ui:Klippa}} ({{key:Mod+X}}) afritar valið og eyðir því svo. Límdu það þar sem það á heima.
- {{ui:Eyða}} ({{key:Delete}} eða {{key:Backspace}}) eyðir valinu. Þegar bita er eytt, eyðast tengingar hans líka.

## Merkingar eftir límingu

Hlutamerki og samsetningarmerki eru aldrei vistuð; DetailCraft númerar þau aftur út frá líkaninu eftir hverja breytingu ([Hvernig merkingar eru gefnar](topic:mark-rules)). Því:

- Afrit sem er sami hluturinn og upprunalegi (sami prófíll, gæði, skurðarlengd, göt og útskurðir) deilir merki upprunalega hlutarins og fjöldinn í {{ui:Merkingar hluta}} og efnislistanum hækkar.
- Afrit sem verður öðruvísi fær sitt eigið merki. Bita sem er límdur án endaplatna sinna til dæmis er ekki sniðinn til, svo hann er annar hlutur. Merkingar eru númeraðar aftur yfir allt líkanið, svo númer annarra hluta geta líka breyst.

Sérhver límdur biti, gat, útskurður, tenging og undirstaða fær nýtt auðkenni, svo ekkert í líkaninu er nokkurn tímann deilt milli afrits og upprunalegs.

## Ef klippiborðið er hafnað

Það sem er á klippiborðinu er athugað jafn vandlega og líkanaskrá sem þú opnar: allt sem er ekki gildur DetailCraft-hluti er fjarlægt og stöðustikan segir hvað. Klippiborð sem var fyllt af nýrri útgáfu DetailCraft, eða af einhverju öðru, er hafnað með skilaboðum og ekkert er límt. Ef einkagluggi getur ekki geymt afritið í vafrageymslu virkar afritið enn í þeim flipa.
