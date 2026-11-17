---
title: Stubišta
summary: Postavite ravno čelično stubište iz visine uspona, gaza i širine: dvije tetive i gazišta od ploča, jedan zavareni sklop.
keywords: stubište, stepenice, tetiva, gazište, čelo stuba, gaz, nosing, krak, čelično stubište, ibc 1011, blondel
from: 62fa3845
---

Ravno čelično stubište: dvije tetive (kanali s krilima okrenutim prema unutra ili ravne trake postavljene na rub) i gazište od ploče na svakom stupnju, zavareno između njih. DetailCraft izračunava broj čela stuba iz visine uspona, provjerava ih prema ograničenjima građevinskog propisa i izrađuje stubište kao jedan radionički sklop.

## Postavljanje stubišta

1. Odaberite {{ui:Stubište}} u grupi {{ui:Postavljanje}}, ili pritisnite {{key:S}}.
2. Postavite stubište desno: **smjer uspona** (0° se penje duž +x, 90° duž +y), **visinu uspona** (0 = do sljedeće etaže), **gaz**, **svijetlu širinu** između tetiva, **najveću dopuštenu visinu čela**, **tetivu**, **debljinu ploče gazišta**, **istak (nosing)** i materijal.
3. Kliknite sjecište mreže: to je podnožje prvog čela stuba, na središnjoj liniji stubišta.

Statusna traka kaže koliko je čela izrađeno. Odaberite stubište (kliknite tetivu ili gazište) da promijenite bilo koju postavku, njegov položaj ili fazu; svojstva također prikazuju čela, gazišta, ukupni hod, nagib i 2 × čelo + gaz.

## Što DetailCraft izračunava

- **Čela stuba.** Najmanje koliko je potrebno da svako čelo ostane na ili ispod najviše dopuštene visine: visina uspona od 3000 mm uz 178 mm ili manje daje 17 čela od 176.5 mm. Gazišta ima jedno manje nego čela (posljednja etaža je zadnji stupanj).
- **Gazišta.** Ploča dubine gaz + istak (280 + 25 = PL6x305 po zadanom) i duga koliko svijetla širina, s gornjom stranom na visini svakog čela, a prednjim rubom (istakom) ispred linije čela.
- **Tetive.** Pod nagibom stubišta, od mjesta gdje spajaju donju etažu do mjesta gdje spajaju gornju, tik izvan svijetle širine, s gornjim rubom 50 mm iznad linije istaka. Krila kanala okrenuta su prema unutrašnjosti stubišta; ravna traka poput PL12x250 stoji na rubu.
- **Zavari.** Svako gazište na obje tetive. Gazišta i desna tetiva zavareni su na lijevu tetivu, pa stubište dobiva jednu oznaku sklopa (ST1) i vlastiti crtež sklopa; tetive dobivaju oznake dijelova st…, a gazišta p….
- **Provjere.** Upozorenja kad je čelo izvan raspona od 4 do 7 in. (102 do 178 mm) ili je gaz manji od 11 in. (279 mm), granice iz IBC 2021, odjeljak 1011.5.2; kad je 2 × čelo + gaz izvan 600 do 650 mm (uobičajeno pravilo udobnosti); i kad je tetiva preplitka da nosi gazišta. Nepoznat profil tetive sprječava izradu stubišta.

## Dobro je znati

- Pomakni, zakreni, zrcali, kopiraj, zalijepi, izbriši i faze rade na stubištu kao na štapu. Zakretanje okreće uspon, a zrcaljenje ga šalje zrcalno.
- Tetive se izvoze u IFC kao IfcMember, a gazišta kao IfcPlate; oba idu u NC datoteke i sastavnicu. Provjera sudara ostavlja vlastite dijelove stubišta na miru (zavareni su zajedno).
- Ovo obično stubište je jedan krak s gazištima od ploča. Za podeste, ograde s balustrima, gazišta od savijenog lima ili rešetke, skup pravila koji birate, popis za rezanje i crteže otvora tetive uključite {{ui:Koristi generator čeličnih stubišta}} u alatu Stubište (vidi Generator čeličnih stubišta).
- Tetive su odrezane okomito: njihovi rezovi uz etaže nisu izrađeni.
- DetailCraft ne projektira stubište: tetive i gazišta se ne provjeravaju na čvrstoću ni progib.
