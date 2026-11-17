---
title: Imarisha nguzo ya zege ya mstatili
summary: Mfano uliokamilika wa kuweka maelezo ya nguzo ya zege ya mstatili kwenye DetailCraft: kuiweka, kuipa nondo za urefu na mafungo, kusoma ukaguzi, mwingiliano juu yake na alama za nondo, na kuchora karatasi yake ya warsha.
keywords: nguzo ya zege, nguzo ya mstatili, uimarishaji wa nguzo, nondo za urefu, nondo za wima, mafungo, mikanda, mikanda ya msalaba, mwingiliano wa kuunganisha, splice, nondo za kuanzia, asilimia ya chuma kwenye nguzo, asilimia 1, asilimia 8, nafasi ya mafungo, ACI 318-19 25.7.2, EN 1992-1-1 9.5, mchoro wa warsha, alama za nondo, 8C1, 3C2
from: aee2a3ca
---

Mada hii inachukua nguzo moja ya mraba kutoka mwanzo hadi maelezo yaliyokaguliwa, yaliyochorwa na kupangwa kwenye jedwali. Kanuni za jumla za boriti, slab na kuta ziko kwenye [Weka maelezo ya zege iliyoimarishwa](topic:reinforced-concrete); hii ni upande wa nguzo, pamoja na namba unazoweza kurudia.

:::warning
DetailCraft inaweka maelezo ya nondo unazotoa. Haisanifu. Nondo zilizo hapa chini ni thamani za kuanzia kwa mfano, si pendekezo: mhandisi mwenye jukumu huchagua ukubwa, idadi na nafasi.
:::

## Nguzo ni nini hapa

Nguzo ya mstatili ina upana (kando ya x yake ya ndani) na kina kuvuka (kando ya y yake ya ndani), kifuniko safi hadi kwenye mafungo, nondo za urefu kwenye kila uso na mafungo yaliyofungwa. Kuizungusha kunageuza kila kitu; nyuso zinabaki "uso wa upana" na "uso wa kina".

- Nondo za urefu zinatolewa kama idadi kwenye uso wa upana na idadi kwenye uso wa kina. Nondo za kona zinahesabiwa kwa pande zote mbili, hivyo 3 na 3 hufanya nondo 8; 4 na 4 hufanya 12.
- Mafungo ni mistatili iliyofungwa yenye ndoano mbili kwenye kona moja, 135° au 90°. Fungo la kwanza liko umbali uliowekwa juu ya sakafu (na chini ya lifuatalo), maeneo ya ncha yana nafasi ndogo zaidi, na sehemu ya kati ina nafasi pana zaidi.
- Nondo zinafanya nini juu: zinaendelea na kuingiliana na nondo zilizo juu, zinageuka ndani kwa ndoano za 90° kwenye sakafu, au zinasimama chini ya juu.

## Nguzo ya mfano

Nguzo ya 400 × 400 mm, 3600 mm kati ya sakafu iliyo juu na sakafu iliyo chini, nondo za urefu #8, mafungo #3, kifuniko safi cha 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, ya ndani.

1. Fungua kichupo cha {{ui:Zege}} kisha weka mistari ya gridi na viwango ambavyo nguzo inasimama juu yake (paneli ya kushoto).
2. Kwenye {{ui:Ongeza kwa gridi}}, chagua {{ui:Nguzo ya zege}}, chagua makutano ya gridi na viwango viwili, weka {{ui:Upana (mm)}} na {{ui:Kina kuvuka (mm)}} kuwa 400, kisha chagua {{ui:Ongeza}}.
3. Kwenye paneli ya {{ui:Sifa}} weka:
   - {{ui:Kifuniko safi (mm)}} 40;
   - {{ui:Nondo za urefu}} #8, {{ui:Nondo kwenye uso wa upana}} 3, {{ui:Nondo kwenye uso wa kina}} 3;
   - {{ui:Mafungo}} #3, {{ui:Ndoano}} 135°, {{ui:Nafasi kati ya (mm)}} 300, {{ui:Urefu wa eneo la ncha (mm)}} 600, {{ui:Nafasi kwenye maeneo ya ncha (mm)}} 150, {{ui:Ya kwanza kutoka uso (mm)}} 50;
   - {{ui:Nondo juu}} {{ui:Endelea na uingiliane na nondo zilizo juu}}.

Kila mabadiliko ni hatua moja ya kutendua.

### Utakachopata

| Sehemu | Matokeo |
|---|---|
| Nondo za urefu | nondo 8 #8 (pete ya 3 × 3), kila moja urefu wa 4375 mm: nguzo ya 3600 mm pamoja na mwingiliano wa 775 mm juu yake |
| Mwingiliano | 757 mm zinahitajika kwa mwingiliano wa mgandamizo (ACI 318-19 25.5.5.1, fy 420), 775 mm zimetolewa: hitaji limezungushwa juu hadi 25 mm inayofuata |
| Mafungo | mafungo 17 #3, kila moja na urefu wa kukata wa takriban 1359 mm, yaliyopangwa 150 mm katika maeneo mawili ya ncha ya 600 mm na 300 mm katikati |
| Uwiano wa chuma | 2.5 % ya sehemu kamili (mipaka asilimia 1 hadi 8, ACI 318-19 10.6.1.1) |
| Nafasi safi ya nondo | 112 mm (inahitaji angalau 40 mm, ACI 318-19 25.2.3) |
| Nafasi ya mafungo | 300 mm (inaruhusiwa 400 mm: kiwango cha chini kati ya kipenyo 16 cha nondo, kipenyo 48 cha fungo na upande mdogo, ACI 318-19 25.7.2.1) |
| Ukubwa wa fungo | #3 (inaruhusiwa hadi 9.5 mm, ACI 318-19 25.7.2.2) |

Vyote hivi viko kwenye orodha ya {{ui:Ukaguzi}} ya kipengele; mwingiliano pia uko kwenye {{ui:Miingiliano na nanga}}.

## Mikanda ya msalaba

Kwa fungo moja la mzunguko, ni nondo za kona pekee zinazoshikiliwa. ACI 318-19 25.7.2.3 huruhusu nondo ya kati kwenye uso isiyoshikiliwa ikiwa iko ndani ya 150 mm safi kutoka nondo ya kona. Kwa nondo 3 kwenye uso, kama hapo juu, hilo linatimia. Kwa nondo 4 au zaidi kwenye uso halitimii, na DetailCraft inalisema kama onyo ({{ui:Ukaguzi}} na Matatizo): "mikanda ya msalaba" inahitajika. **Mikanda ya msalaba bado haijachorwa**: iongeze kwenye mchoro kwa mkono, au chagua nondo chache kwenye uso.

Kwa EN 1992-1-1, DetailCraft inakagua ukubwa wa nondo (angalau 8 mm), idadi ya nondo (angalau 4), eneo la chuma (asilimia 0.2 hadi 4 ya sehemu), nafasi safi na nafasi ya mafungo (9.5.2 na 9.5.3).

## Mwingiliano, msingi na nguzo iliyo chini

- Mahali **msingi wa modeli unaposimama chini ya nguzo**, nguzo inaingiliana na nondo za kuanzia za msingi, na mwingiliano wao nao unakaguliwa.
- Mahali **nguzo nyingine ya modeli inaposimama chini yake**, inaingiliana na nondo za nguzo hiyo.
- Toa {{ui:Urefu wa mwingiliano (mm, 0 = kadri inavyohitajika)}} wako ili kubatilisha; fupi kuliko inavyohitajika ni tatizo na inawekwa alama * kwenye jedwali.
- Mwingiliano wa mgandamizo hutumika kwa chaguo-msingi ({{ui:Mwingiliano wa mgandamizo}} katika mipangilio); chagua {{ui:Mwingiliano wa mvutano}} wakati nguzo inaweza kuwa katika mvutano.

## Alama, ratiba na karatasi ya warsha

Nondo zinazofanana zinashiriki alama moja: nondo za urefu za nguzo iliyo juu ni 8C1, mafungo yake ni 17C2 (namba kwanza, kisha herufi ya aina C kwa nguzo na namba ya mfululizo). Zinaonekana kwenye kichupo cha {{ui:Ratiba ya kupinda}}, pamoja na urefu wa kukata na uzito, na kwenye CSV kutoka {{ui:Matokeo}} › {{ui:Zaidi}} › {{ui:Kupinda}}.

Chagua {{ui:Mchoro wa warsha}} kando ya nguzo kwa karatasi yenye nguzo kwenye mwinuko (kila nondo, alama yake, maeneo ya mafungo na mwingiliano vina vipimo) na sehemu katikati, ikifuatiwa na karatasi ya kupinda nondo. Hifadhi {{ui:Karatasi hii kama PDF}}.

## Isichofanya

- Nguzo za duara na ond, na nguzo zisizo za mstatili: bado hazijatengenezwa.
- Mikanda ya kona na ya msalaba ndani ya sehemu, na maelezo ya tetemeko (ACI 318-19 sura ya 18): bado hayajatengenezwa.
- Mwingiliano wa kuunganisha kwenye nafasi unazochagua, au vilivyopishana: nondo zote huingiliana kwenye sehemu moja.
- Kama nondo zinatosha kwa mzigo: hiyo ni usanifu wa mhandisi.
