---
title: Čvorne ploče za spregove
summary: Spojite kraj sprega sa stupom ili gredom čvornom pločom: kutnici i ravne trake pričvršćeni vijcima, cijevi s utorom i zavarom.
keywords: čvorna ploča, gusset, spreg, vertikalni spreg, kutni spreg, ravna traka, traka, HSS spreg, nožasta ploča, cijev s utorom, spoj
from: 22f6598d
---

Čvorna ploča za spreg je ploča zavarena u radionici na stup (ili gredu) na koji sprega naliježe, u ravnini sprega. DetailCraft reže sprega na spoju tako da ne dira ništa, postavlja i dimenzionira čvornu ploču i spaja sprega s njom: **kutnik** ili **ravna traka** s jednim redom vijaka, ili **cijev** (kvadratna, pravokutna ili okrugla HSS) navučena preko čvorne ploče i zavarena.

## Gdje radi

- Kraj sprega leži na liniji stupa ili grede (unutar 1 mm), a sprega nije gotovo paralelna s tom linijom. Stup je oslonac ako postoji; inače greda.
- Čvorna ploča leži u ravnini sprega i u ravnini linije oslonca. **Kutnik** mora imati jedno krilo u toj ravnini, a **ravna traka** svoju plohu: zakrenite sprega ({{ui:Zakretanje (°)}}) dok to ne bude. Ako su krila kutnika pod 45° u odnosu na ravninu, DetailCraft to kaže i ništa ne gradi.
- I-profili i U-profili kao spregovi se ne spajaju.

## Dodavanje čvornih ploča

1. Odaberite jedan ili više sprega.
2. Odaberite {{ui:Čvorna ploča}} u izborniku {{ui:Više}} grupe {{ui:Povezivanje}}.
3. Svaki kraj odabranih sprega koji naliježe na stup ili gredu i nema čvornu ploču dobije je.

Odaberite čvornu ploču (kliknite ploču) da promijenite njezine postavke. {{ui:Primijeni na slične (n)}} kopira je na svaki slobodan kraj sprega s istim profilima sprega i oslonca.

## Što DetailCraft izračunava

- **Skraćivanje.** Spreg se na tom kraju skrati dok njegovi rubovi ne prođu pokraj svega u spoju: za {{ui:Zračnost sprega}} (25), svakog štapa u spoju (uz njega ili preko njegova kraja kad se štap tu završava) i podložne ploče ispod stupa.
- **Vijci (kutnici, ravne trake).** {{ui:Vijci}} (3) u jednom redu duž sprega, prvi na {{ui:Udaljenost vijka od kraja}} (40) od odrezanog kraja, na {{ui:Razmak vijaka}} (75). Kod kutnika prolaze kroz krilo u ravnini čvorne ploče, na {{ui:Raspon vijaka (gauge)}} od pete (0 = sredina krila); kod ravne trake na njezinoj središnjoj liniji (ili pomaknuto za raspon). Hvat vijka = krilo ili traka + čvorna ploča.
- **Čvorna ploča.** Pravokutnik: od lica oslonca do iza zadnjeg vijka za udaljenost od kraja, i duž oslonca koliko vijci trebaju. Naliježe na stražnju stranu krila kutnika (ili lice ravne trake). Za cijev prolazi kroz sredinu cijevi, pod {{ui:Preklop cijevi na čvornoj ploči}} (200) cijevi, uz prostor za zavare.
- **Spojevi.** Na bazi stupa čvorna ploča se spušta na podložnu ploču. Gdje greda presijeca spoj (sprega prema gore u spoj greda-stup), čvorna ploča ostaje ispod ili iznad grede. Ako to ostavi vijke ili preklop bez njihove udaljenosti od kraja, DetailCraft upozorava.
- **Zavari.** Čvorna ploča na oslonac, s obje strane. Cijev na čvornu ploču, četiri linije duž preklopa.

## Dobro je znati

- Čvorna ploča pripada sklopu oslonca (zavarena u radionici). Spreg dolazi s izbušenim rupama i ide u vlastitu NC datoteku.
- Utor cijevi nije izrezan u modelu; [provjera sudara](topic:clash-check) ostavlja spreg i njegovu čvornu ploču na miru.
- Čvorna ploča nije zavarena na gredu koju dodiruje. Čvorne ploče zavarene i na gredu i na stup, skošeni uglovi te raspored radnih točaka za spoj po metodi jednolike sile još nisu izrađeni.
- DetailCraft ne projektira čvornu ploču ni vijke (nema provjera čvrstoće); upozorenja se odnose na razmake i uklapanje.
