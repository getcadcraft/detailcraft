---
title: Kagua alama na orodha ya vifaa
summary: Soma alama za sehemu na za mkusanyiko ambazo DetailCraft inatoa kila kipande, kagua orodha ya vifaa, na uipakue kama CSV.
keywords: alama, kuhesabu, alama ya sehemu, alama ya mkusanyiko, alama ya kipande, bom, orodha ya vifaa, orodha ya nyenzo, uzito, orodha ya bolti, csv, nambari
from: caa2ee80
---

DetailCraft inaweka alama kwenye modeli yenyewe. Hakuna amri ya kuhesabu wala kitu cha kuendesha: baada ya kila mabadiliko, inakokotoa ni sehemu zipi ni kipande kimoja cha chuma na kuzipa alama moja.

## Mahali alama zinapoonekana

- Orodha ya {{ui:Alama za sehemu}} katika kidirisha cha {{ui:Modeli}}: kila alama yenye wasifu wake, urefu na idadi. Bofya moja ili kuchagua sehemu ya kwanza yenye alama hiyo.
- Kidirisha cha {{ui:Sifa}} cha kipengele kilichochaguliwa (na orodha ya **Alama za sehemu** kwenye kidirisha cha kushoto): {{ui:Alama ya sehemu}} na {{ui:Mkusanyiko}}. Kichwa cha kidirisha pia kina alama, kwa mfano "Boriti b1".
- Kichupo cha {{ui:Orodha ya vifaa}}, CSV, majina ya faili za NC, michoro ya warsha, na uhamishaji wa IFC (kama lebo ya kila kipengele).

## Jinsi sehemu zinavyopewa alama

- **Alama za sehemu:** c kwa nguzo, b kwa boriti, br kwa brace, st kwa stringer za ngazi, p kwa mabamba (pamoja na mabamba ya mwisho na sahani za msingi). Kisha namba: c1, c2, b1, p1 … Sehemu zikiwa katika awamu zaidi ya moja, namba ya awamu huja kwanza, kwa mfano 2-b1.
- **Alama za mkusanyiko:** C, B, BR au P. Mkusanyiko ni kipengele kikuu pamoja na mabamba yaliyochomelewa juu yake, kama boriti yenye mabamba yake mawili ya mwisho, au nguzo yenye sahani yake ya msingi.
- Sehemu mbili zinashiriki alama zikiwa na wasifu, nyenzo na urefu uliokatwa unaofanana, pamoja na matundu na vipunguzo vilevile, zote ndani ya 1 mm, hata kama moja imegeuzwa ncha kwa ncha au juu chini kulinganisha na nyingine.
- Kuhesabu kunaanza kwa nguzo, kisha boriti, brace na mabamba; ndani ya kila kundi, kwa jina la wasifu, kisha ndefu zaidi kwanza.

Kanuni kamili, ikijumuisha zamu zipi zinahesabika kwa chaneli na pembe: [Kanuni za alama](topic:mark-rules).

:::warning
Alama zinakokotolewa upya baada ya kila mabadiliko, kwa hiyo zinaweza kuhesabiwa upya. Kuongeza sehemu, kubadilisha wasifu au kuongeza tundu kunaweza kuhamisha b3 kuwa b4. Chukulia alama kuwa za mwisho tu modeli ikishakamilika, na tengeneza BOM, faili za NC na michoro ya warsha kutoka modeli ile ile iliyohifadhiwa.
:::

## Soma orodha ya vifaa

Fungua kichupo cha {{ui:Orodha ya vifaa}} chini. Kina jedwali tatu.

**Sehemu**, pamoja na jumla ya uzito wa chuma kwenye kichwa:

| Safu | Maana |
|---|---|
| Alama ya sehemu | Bofya ili kuchagua sehemu ya kwanza yenye alama hii |
| Aina | boriti, nguzo, brace, stringer au bamba |
| Wasifu | Kwa mfano W16x26 au PL20x180 |
| Nyenzo | Daraja uliloweka |
| Urefu (mm) | Urefu uliokatwa, baada ya miunganisho |
| Idadi | Ni kiasi gani |
| Uzito wa kitengo (kg) | Uzito wa wasifu kwa mita × urefu |
| Jumla ya uzito (kg) | Uzito wa kitengo × idadi |

Safu ya mwisho inatoa jumla ya idadi na uzito.

**Mikusanyiko:** kila alama ya mkusanyiko, sehemu yake kuu, sehemu zake zote (kwa mfano "b1 + p1 + p1"), idadi, uzito wa kitengo na jumla ya uzito.

**Bolti na fimbo za nanga:** zimepangwa kwa aina, kipenyo, urefu na daraja, pamoja na idadi.

:::note
Uzito ni wa jumla: matundu na vipunguzo havitolewi. Bolti, nati, washer na chomeleo hazimo kwenye uzito wa chuma.
:::

## Ipakue

Chagua {{ui:Pakua CSV}} kwenye kichupo, au {{ui:BOM}} katika kikundi cha {{ui:Matokeo}}. Faili `<name> BOM.csv` lina jedwali tatu moja baada ya jingine, kila moja chini ya kichwa chake, na mstari tupu kati yao. Hufunguka kwenye programu yoyote ya lahajedwali.

## Kagua kabla ya kutuma

1. Fungua kichupo cha {{ui:Matatizo}} na ufute kila mstari. Muunganisho ambao haukuweza kujengwa hauongezi sahani, matundu wala bolti, hivyo BOM itakuwa pungufu.
2. Angalia alama usizotarajia. Boriti mbili unazodhani ni sawa lakini zenye alama tofauti kwa kawaida hutofautiana kwa tundu, kipunguzo au urefu uliokatwa; chagua kila moja uilinganishe.
3. Hifadhi modeli, kisha fanya uhamishaji wote kutoka hali hiyo iliyohifadhiwa.
