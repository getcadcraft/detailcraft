---
title: Stálstigagerð
summary: Stálstigi út frá hæð milli hæða, lengd og breidd: uppstig og trédýpt eftir reglusafni sem þú velur, pallar, handrið og stafir, verkstæðisteikningar og skurðlisti með þyngdum.
keywords: stálstigi, stigagerð, stigabiti, þrep, mynstruð plata, rist, brotin plata, pallur, handrið, stafir, uppstig, trédýpt, osha, ibc, approved document k, skurðlisti, þyngdir, verkstæðisteikning
from: a4f0a985
---

Stigagerðin býr til heilan stálstiga úr fáum tölum: stigabitana, þrepin, stigapalla þegar stigalengjan er of há, handrið með staurum og stöfum, festingargötin í stigabitunum, skurðlista með þyngdum og verkstæðisteikningarnar. Hún byrjar í {{ui:Stigi}}-verkfærinu, eins og einfaldi stiginn (sjá Stigar), með einum rofa í viðbót.

## Staðsetja stálstiga

1. Veldu {{ui:Stigi}} í hópnum {{ui:Staðsetja}}, eða ýttu á {{key:S}}.
2. Hægra megin, hakaðu við {{ui:Nota stálstigagerðina}}.
3. Veldu **reglusafnið** fyrir þar sem stiginn er byggður, **hæðina** (gólf í gólf; 0 = upp að næsta kóta), **tiltæka stigalengd** (0 = láta regluna ráða), **lausa breidd** og **gerð þrepa**: mynstruð plata, rist eða brotin plötuþrep.
4. Stilltu snið stigabita, stigapalla (eftir reglunni, eða tölu), handrið (beggja megin, öðrum megin, engin), hæð handriðsins og bilið milli stafa.
5. Smelltu á ásskurð: það er fóturinn á fyrsta uppstiginu.

Veldu stigann (smelltu á stigabita, þrep eða handrið) til að breyta stillingu; eiginleikarnir sýna uppstigin, trédýptina, hallann, stigalengjur og stigapalla, stálið í honum, skurðlistann og heimildir reglusafnsins.

## Reglusöfnin

Reglusafnið takmarkar lögun stigans: hæð og trédýpt, 2 × uppstig + trédýpt, hallann, stigapallinn, hæð handriðsins og stærsta opið. DetailCraft býður þau sem eru hér fyrir neðan; svæðið er stilling, ekki ágiskun. Opnaðu **Hvaðan tölur þessa reglusafns koma** í eiginleikunum: hver tala nefnir heimild sína og segir hversu vel hún var athuguð.

- **International Building Code 2021**: uppstig 4 til 7 in., þrep að minnsta kosti 11 in., handrið 34 til 38 in. Mörkin 12 ft milli stigapalla eru sýnd sem *ekki lesin* og handriðstölurnar sem lesnar í kynningarefni sem vitnar í reglugerðina: staðfestu þær áður en þú treystir þeim.
- **OSHA 29 CFR 1910.25 og 1910.29** (iðnaðarstigar): 30° til 50°, uppstig mest 9.5 in., þrep að minnsta kosti 9.5 in., að minnsta kosti 22 in. breið, stigapallar jafnbreiðir stiganum og 30 in. djúpir, efra handrið notað sem handrið 36 til 38 in. Þetta var lesið í reglugerðinni sjálfri.
- **Approved Document K 2013, England** (almennir aðgangs- og nytjastigar): bil hæðar og trédýptar og 2 × uppstig + trédýpt 550 til 700 mm, lesið í skýrslu á vegum stjórnvalda sem tekur þau saman. Skjalið gefur DetailCraft enga hæð handriðs, þannig að hæðin sem þú stillir er notuð og listinn {{ui:Vandamál}} segir það.

Reglusafn sem er ekki hér er ekki giskað á: stiginn fylgir þá einföldu 600 til 650 mm þægindareglunni og segir að hann hafi enga reglu.

## Það sem hann reiknar út

- **Uppstig og trédýpt.** Fæstu uppstig sem 2 × uppstig + trédýpt liggur í miðju bils reglunnar, án þess að trédýptin fari undir lágmark reglunnar. Þegar stigalengd er gefin er trédýptin stigalengdin deilt í þrepin og allt utan reglunnar er sagt.
- **Stigalengjur og stigapallar.** Stigalengja sem er hærri en reglan leyfir er skipt með stigapalli sem er jafnbreiður stiganum og ekki minni en lágmark reglunnar; þú getur líka óskað eftir stigapöllum. Stigapallur er rammi úr tveimur hliðarbitum og tveimur þverhornjárnum undir yfirborði, á tveimur staurum.
- **Þrep.** Mynstruð plata er soðin plata (6 mm sjálfgefið, mynstrið er ekki lagt við þyngdina). Brotin plötuþrep hafa brún við nefið og eru boltuð gegnum sál stigabitans: tvö göt 2 mm stærri en boltinn á 0.3 og 0.7 af dýptinni. Rist er teiknuð sem plata af jafnri þyngd (dýpt burðarstangar × þykkt ÷ bil); þverstangir og bönd eru ekki talin og skurðlistinn segir það.
- **Handrið.** Rörhandrið efst á stöfum eftir hverri stigalengju og hverjum stigapalli, og bil milli stafa sem engin kúla stærri en opið samkvæmt reglunni kemst í gegnum (100 mm í mesta lagi sjálfgefið).

## Teikningar, skurðlisti, útflutningur

- Stigalengjan er ein samsetning; handriðin eru önnur (báðar hliðar eru sama samsetningin, gerð tvisvar). Hver hefur sína samsetningarteikningu og teikning stigabitans sýnir göt hans.
- **Stigablaðið** (ST-…) sýnir stigabita hverrar stigalengju beinan með gatastöðvunum skráðum frá neðri enda, og smáatriði þrepsins: þversnið, nef, brún og endaflans með götum sínum.
- {{ui:Skurðlisti og þyngdir}} í eiginleikunum listar hvert snið og lengd með magni og kílógrömmum; {{ui:Sækja skurðlistann (CSV)}} vistar hann.
- Allt fer í efnislistann, NC-skrár og IFC sem venjulegir hlutar (IfcMember, IfcColumn, IfcPlate).

## Gott að vita

- Þetta er upphafspunktur, ekki hönnun. Ekkert er athugað með tilliti til styrks eða durðar; reglusafnið takmarkar aðeins lögunina.
- Endar stigabita gegn gólfunum eru skornir beint og ekki útfærðir; staurar stigapalla standa á neðri hæðinni og hafa engar undirplötur.
- Að staðsetja stigann sem eitt frumefni í BimCraft er ekki tengt enn.
