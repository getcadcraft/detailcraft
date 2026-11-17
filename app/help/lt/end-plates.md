---
title: Sijų jungimas prie kolonų galinėmis plokštėmis
summary: Pridėkite varžtuotas galines plokštes ten, kur sija susitinka su kolonos flanšu ar sienele, nustatykite plokštę, varžtus ir suvirinimą bei nukopijuokite jungtį į visas panašias sandūras.
keywords: galinė plokštė, galinės plokštės, momentinė jungtis, varžtuota jungtis, sandūra, varžtai, suvirinimas, išplėstinė galinė plokštė, lygi, panašus, kopijuoti jungtį, komponentas
from: 21e028b2
---

Galinė plokštė jungtis prijungia plokštę prie sijos galo suvirinimu ir prisuka ją prie kolonos flanšo arba sienelės. DetailCraft patalpina plokštę, nukerpa sijos galą, išgręžia atitinkamas skylės plokštėje ir kolonos flanše, prideda varžtus bei suvirinimą ir patikrina kraštų atstumus bei tarpus.

:::warning
DetailCraft nesuprojektuoja jungčių. Parametrai yra pradinės reikšmės, kurias jūs keičiate; niekas netikrina stiprumo. Kraštų ir tarpų įspėjimai naudoja EN 1993-1-8 3.3 lentelės minimalias reikšmes, kurios gali skirtis nuo taisyklių, kuriomis dirbate.
:::

## Ką ji gali sujungti

- **Lygią** siją (abu galai tame pačiame aukštyje), vertikalią (pasukimas 0), su dvitėjiu profiliu.
- Į **flanšą** arba **sienelę** **vertikalaus** dvitėjo profilio kolonos, statmenai jai.
- Sijos galas turi būti ant kolonos linijos, tarp kolonos apačios ir viršaus.

Įstrižos arba nuožulnios sijos ir ne dvitėjiai profiliai atmetami su priežastimi: tokioms naudokite [šlyties skardeles](topic:shear-tabs). Ant sienelės plokštė ir sijos flanšai turi tilpti tarp kolonos flanšų; DetailCraft įspėja, jei jie nettelpa.

:::tip
Esant 0 pasukimui, kolonos flanšai nukreipti išilgai numeruotos ašies krypties (x). Sija, einanti nuo A iki B, susitinka su sienele ir gauna galinę plokštę ant sienelės.
:::

## Pridėkite galines plokštes prie sijos

1. Pasirinkite {{ui:Pasirinkti}} ({{key:V}}) ir spustelėkite siją.
2. Pasirinkite {{ui:Galinės plokštės}} grupėje {{ui:Jungti}}, arba {{ui:Pridėti galo plokštes}} skydelyje {{ui:Savybės}}.
3. Kiekvienas laisvas sijos galas, kuris statmenai susitinka su kolonos flanšu ar sienele, gauna plokštę. Būsenos juostoje rašoma: „Pridėta 2 galinės plokštės. Pasirinkite vieną, kad pakeistumėte jos plokštę, varžtus ir suvirinimą; {{ui:Panašūs}} nukopijuoja ją į panašias sandūras.“
4. Pirmoji nauja galinė plokštė pasirenkama, o jos parametrai rodomi skydelyje {{ui:Savybės}}.

Jei nieko nevyksta, perskaitykite būsenos juostą:

- „Ši sija nesibaigia ant kolonos linijos. Galinės plokštės dedamos ten, kur sijos galas susitinka su vertikalia kolona.“
- „Ši sija susitinka su kolona kampu arba yra nuožulni: galinės plokštės skirtos statmenoms, lygioms sandūroms. Naudokite šlyties skardeles.“
- „Abu galai jau turi jungtis.“

## Pakeiskite plokštę, varžtus ir suvirinimą

Spustelėkite galinę plokštę (arba vieną iš jos varžtų), kad pasirinktumėte jungtį. Skyriuje {{ui:Plokštė, varžtai ir suvirinimas (mm)}}:

| Parametras | Numatyta | Ką daro |
|---|---|---|
| Plokštės storis | 20 | Plokštės storis; taip pat kiek sija nukerpama atgal už flanšo |
| Plokštės plotis | 180 | Per visą sandūrą |
| Pratęsimas virš sijos | 0 | Virš viršutinio flanšo; didesnis nei 0 padaro išplėstinę galinę plokštę |
| Pratęsimas po sija | 0 | Po apatiniu flanšu |
| Varžto skersmuo | 20 | Nominalus varžto dydis |
| Skylės skersmuo | 22 | Jūsų tarpas skylėms plokštėje ir kolonos flanše |
| Varžto markė | A325 | Tekstas; spausdinamas medžiagų sąraše |
| Varžtų eilės | 4 | Dviejų varžtų eilės, centruotos pagal plokštės aukštį |
| Eilių žingsnis | 75 | Vertikalus atstumas tarp eilių |
| Tarpas | 100 | Horizontalus atstumas tarp dviejų eilės varžtų |
| Varžto ilgio priedas | 30 | Pridedamas prie suspaudimo ilgio veržlei, poveržlei ir sriegiui; žr. žemiau |
| Kampinio suvirinimo dydis | 8 | Aplink visą sijos galą |
| Plokštės medžiaga | A36 | Tekstas |

Įveskite naują reikšmę ir paspauskite {{key:Enter}} arba {{key:Tab}}. Plokštė, skylės, varžtai ir sijos supjovimo ilgis atsinaujina iš karto. Kiekvienas pakeitimas yra vienas atšaukiamas žingsnis.

Po parametrais matote, ką jungtis sukuria:

- {{ui:Varžtai}}: pavyzdžiui, „8 × 20 × 70 A325 (suspaudimas 36,2)“.
- {{ui:Suvirinimas}}: dydis, vieta ir ilgis.
- {{ui:Plokštė}}: jos dydis ir elemento žymuo.

### Kaip skaičiuojami skaičiai

- Sija nukerpama atgal per pusę kolonos gylio (ant sienelės: per pusę sienelės storio) plus plokštės storis, kad plokštė gulėtų ant paviršiaus.
- Plokštės aukštis yra sijos gylis plus abu pratęsimai.
- Varžto ilgis = suspaudimas (plokštės storis + kolonos flanšo arba sienelės storis) + priedas, suapvalintas iki artimiausių 5 mm.
- Rodomas suvirinimo ilgis yra sijos pjūvio perimetras.

### Įspėjimai

Jungtis vis tiek sukuriama, bet po ja ir skirtuke {{ui:Problemos}} rodomi šie įspėjimai:

- Varžtų eilės ar varžtai arčiau plokštės krašto nei 1,2 × skylės skersmuo.
- Eilių žingsnis mažesnis nei 2,2 × skylės skersmuo arba tarpas mažesnis nei 2,4 × skylės skersmuo.
- Skylės, įeinančios į kolonos sienelę ar jos apvalinimą arba išeinančios iš kolonos flanšo.
- Plokštė platesnė už kolonos flanšą arba (ant sienelės) platesnė už tarpą tarp flanšų; sijos flanšai netelpa tarp jų.
- Varžtų eilė per arti sijos flanšo arba tarpas per siauras sijos sienelei ir jos suvirinimui.

## Nukopijuokite ją į visas panašias sandūras

1. Pasirinkite jungtį, kurią sukonfigūravote.
2. Pasirinkite {{ui:Taikyti panašiems (n)}} skydelyje {{ui:Savybės}}, arba {{ui:Panašūs}} grupės {{ui:Jungti}} meniu {{ui:Daugiau}}. Skaičius skliaustuose – kiek sandūrų ją gaus.
3. Kiekviena sandūra su ta pačia sijos profilio ir kolonos profilio pora, sija į tokio paties tipo paviršių, kuri dar neturi jungties, gauna kopiją su tais pačiais parametrais. Būsenos juostoje rodoma, kiek jų.

Kopijos yra nepriklausomos: vėliau pakeitus vieną, kitos nepasikeičia. Sandūros, kurios jau turi jungtį, paliekamos nepaliestos; jei norite jas pakeisti, pirma jas ištrinkite.

## Perkėlimas ir naikinimas

Jungtys iš naujo sukuriamos pagal savo parametrus kiekvieną kartą, kai pasikeičia modelis, todėl perkėlus ar pakeitus sijos ar kolonos dydį, galinės plokštės keliauja kartu. Jei pakeitimas reiškia, kad sandūra nebetinka, jungtis lieka modelyje, o skirtukas {{ui:Problemos}} paaiškina priežastį, pavyzdžiui, „Sijos galas nebėra ant kolonos linijos.“

Norėdami ištrinti jungtį, pasirinkite ją ir paspauskite {{key:Delete}}. Ištrinus siją ar koloną, ištrinamos ir jų jungtys.

Toliau: [Pridėkite pagrindo plokštes ir inkaro strypus](topic:base-plates).
