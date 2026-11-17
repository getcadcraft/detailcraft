---
title: Konstruktyvumo patikrinimai
summary: Problemos dalykams, kuriuos detalizuotojas pastebi akimi – varžtas, į kurį neprieinama veržliaraktis, varžtai per arti lizdinei galvutei, kampiniai suvirinimai už savo dydžio ribų, suvirinimai, kurių nepasiekia degiklis, ir vamzdžiai, kuriuose kaupiasi vanduo.
keywords: konstruktyvumas, veržliaraktis, lizdinė galvutė, prieiga prie varžto, veržimas, suvirinimo dydis, kampinis suvirinimas, mažiausias suvirinimas, didžiausias suvirinimas, vanduo, ventiliacijos skylė, drenažo skylė, cinkavimas, tuščiavidurys profilis, problemos
from: 72315151
---

DetailCraft ieško keturių tipų problemų, kurių nerado jokia stiprumo patikra, ir jas išvardija skydelyje {{ui:Problemos}}. Tai įspėjimai ir pastabos, į kurias reikia pažvelgti, o ne klaidos: modelis vis tiek sukuriamas.

## Varžtas, į kurį neprieinama veržliaraktis

Kiekvienam varžtui DetailCraft užmauna galvutę ant galvos ir ant veržlės. Galvutė yra cilindras, toks platus kaip veržlė per kampus, plius 4 mm siena, 60 mm ilgio. Jei sijos sienelė, flanšas, plokštė ar įstrižainė stovi tame cilindre, problemoje nurodoma jungtis, kiek varžtų, kuri dalis trukdo ir kiek toli ji nuo varžto.

Galvutė yra tipinė smūginė galvutė. Veržliarakčiui reikia mažiau vietos, didesniam įrankiui – daugiau. Paprašykite savo prijungto asistento paleisti `constructability_check` su kitu `socketLength`, kad pamatytumėte, kaip keičiasi atsakymas.

## Varžtai per arti lizdinei galvutei

Galvutė ant vieno varžto neturi liestis su kito varžto galva. Jungties varžtai, kurie yra arčiau nei galvutės plotis plius kaimyno galva, išvardijami su rastu tarpu ir reikalingu tarpu.

## Kampinių suvirinimų dydžiai

AISC 360-16 lentelė J2.4 nustato mažiausią kampinį suvirinimą pagal plonesnės dalies storį (3 mm iki 6.35 mm storio, 5 mm iki 12.7, 6 mm iki 19.05, 8 mm virš to), o J2.2b – didžiausią palei medžiagos kraštą: ne didesnį už medžiagą, kai ji plonesnė nei 6.35 mm, kitu atveju – 1.6 mm mažiau. Jungtys su tuo pačiu dydžiu ant to paties storio išvardijamos kaip viena problema.

Naudojamas storis yra plonesnė dalis, įvardyta suvirinime, todėl 8 mm suvirinimas aplink siją su 6.35 mm sienele išvardijamas.

## Vanduo ir ventiliacija

- **Atviras viršutinis galas** tuščiavidurio profilio, kuris stovi vertikaliai arba nuokalnės didesnės nei 10°, įleidžia lietų.
- Tuščiavidurį profilį, **uždarytą iš abiejų galų**, reikia ventiliacijos ir drenažo skylės; karštasis cinkavimas ir įkaitinto oro slėgis abu to reikalauja.

## Ar suvirintojas gali pasiekti

Kampinis suvirinimas daromas degikliu per pusę tarp dviejų paviršių, kuriuos jungia. Kiekvienam aplink visą perimetrą kampiniam suvirinimui (galinė plokštė, pagrindo plokštė, įstrižai nupjauta plokštė) patikrinimas paima elemento pjūvio kontūrą prie plokštės ir kas 20 mm nubrėžia degiklio kelią, išeinantį 45° kampu nuo vietos, kur jo antgalis (pradžioje 10 mm spindulys) pirmą kartą atsilaisvina nuo abiejų paviršių, dar 30 mm. Jei kelias susikerta su paties sijos flanšu ar kita dalimi, ta suvirinimo dalis išvardijama su dalimi ir atstumu. Šie skaičiai tipiniai, o ne standarto: paklauskite savo gamintojo apie procesą ir antgalį. Suvirinimai palei dvi briaunas (šlyties skardelė) nelokalizuojami ir netikrinami.
