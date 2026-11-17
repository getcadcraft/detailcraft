---
title: Izilungiselelo ze-DetailCraft
summary: Qala izinto ezintsha njengamaphrofayili aseMelika noma aseYurophu, setha ukuthi ikhophi ye-Duplicate ihamba kangakanani, khetha ukuthi amakhophi aletha yini ukuxhumeka kwawo, futhi ukhombise noma ufihle amabhawodi ku-3D.
keywords: izilungiselelo, izintandokazo, usayizi wephepha, imidwebo, izinketho, insimbi, aisc, en, amaphrofayili aseYurophu, amaphrofayili aseMelika, iphrofayili ezenzakalelayo, ibanga, s355, a992, ukuphambuka kwe-duplicate, ukuphambuka kokunamathisela, ukukopisha ukuxhumeka, amabhawodi, izinduku zokubamba, ukufihla amabhawodi, setha kabusha
from: e46cea57
---

Vula {{ui:Settings}} ngegiya ebhendeni lohlelo noma ngo-{{key:Mod+,}}. Ithebhu yokuqala, {{ui:DetailCraft}}, iqukethe izilungiselelo zalolu hlelo; {{ui:General}} iqukethe ezabelwa yizo zonke izinhlelo ze-CadCraft (itimu, ithuluzi, amaphaneli). Izilungiselelo ze-DetailCraft zikhona kuhlelo kuphela: uzishintsha lapha, zisebenza ngokushesha, futhi lesi siphequluli siyazikhumbula. Azigcinwa kufayela lemodeli yakho.

## Izinto ezintsha

Amaphrofayili namamaki okuqala emathuluzini okubeka:

| Ithuluzi | Amashejini aseMelika (AISC), A992 | Amashejini aseYurophu (EN), S355 |
|---|---|---|
| {{ui:Beam}} | W16x26, A992 | IPE300, S355 |
| {{ui:Column}} | W12x50, A992 | HEB200, S355 |
| {{ui:Brace}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plate}} | A36 | S355 |

Amashejini aseMelika yisiqalo. Ukukhetha kwaseYurophu kusebenzisa i-HEA160 yamabhulaketi ngoba ikhathalogi ye-EN ye-DetailCraft ayikabi nezinhlobo ezingenalutho ([Ikhathalogi yephrofayili](topic:profile-catalog)). Ungakhetha noma yiphrofayili namaki okusebenza kokulandelayo ephaneli {{ui:Properties}} ngesikhathi ithuluzi lokubeka livuliwe. Izinto ezisemodelini ziqhubeka zinephrofayili nomaki wazo.

## Phinda nomunamathisela

- **Ukuphambuka (mm)**: x, y no-z. {{ui:Duplicate}} ({{key:Mod+D}}) ibeka ikhophi kulo kude nomsuka, nefomu {{ui:Paste by offset (mm, from the original)}} liqala ngalo. Liqala ku-6000, 0, 0: ibheyi eyodwa ye-6 m ngemigqa egxunyiwe. Yisethe ibe ibanga lebheyi yakho, noma ubude bezinga ku-z ukukopisha ifuloli iye phezulu.
- **{{ui:Copy end plates and base plates with their members}}** (kuvulwe ekuqaleni): uxhumo luhamba nekhophi kuphela uma yonke into okuxhumanisa iyakhopishwa. Ukucisha lokhu ukuze kukopishwe izinto nezisekelo ngaphandle kwezixhumo zazo, isibonelo ukuze uzame uxhumo oluhlukile ekhophini.

Bheka [Kopisha, namathisela nophinda](topic:copy-paste).

## Ukubuka kwe-3D

**Bonisa amabhawodi nezinduku zokubamba** (kuvulwe ekuqaleni). Ukucisha ukuze uwafihle embonweni ukuze ubone izimbobo namaphuleti ehlanganisweni elinabantu. Amabhawodi afihliwe awakwazi ukuchofozwa; chofoza iphuleti ukuze ukhethe uxhumo. Uhlu lwempahla, imidwebo nakho konke ukuthunyelwa kuqukethe bonke amabhawodi nezinduku.

## Isikhombi sekhona

Lokhu okuvela ekhoneni lombono we-3D: **Ikhyubhu lombono** (okuqalayo; phezulu kwesokudla — chofoza ubuso, umphetho noma ikhona ukuze ubuke kusuka lapho, udonse ukuze uzungezise, udonse indilinga yekhampasi ukuze uzungezise imodeli), **Isithonjana sendiza** (uphawu olulula lwe-X, Y, Z ngaphansi kwesobunxele oluguqukayo nombono: X bomvu, Y oluhlaza, Z oluhlaza okwesibhakabhaka) noma **Akukho**. Kuphela ku-{{ui:3D}}; ku-{{ui:Plan}} nasekubukekeni kohlangothi akukho okuboniswayo kulezi. Bheka [Ikhyubhu lombono](topic:view-cube).

## Setha kabusha

{{ui:Reset DetailCraft settings}} ngaphansi kwedayalogi kubuyisela lokhu ekuqaleni (amashejini aseMelika, ukuphambuka 6000, 0, 0, amaxhumo akopishwe, namabhawodi ayabonakala), kanye nezabe-{{ui:General}}.

## Imidwebo

**Usayizi weshidi**: imidwebo yamashidi nemidwebo yokukhiqiza yenziwa ngokuthe xaxa: A4, A3 (eyokuqala), A2, A1, ANSI B, ANSI C noma ANSI D. Amawindi {{ui:Drawings}} nemidwebo yokukhiqiza anohlu olufanayo. Bheka [Imidwebo yendawo yonke nokuhlanganisa](topic:drawings).

## Izinti zokuqinisa

- **Amagama ezinti ze-ASTM**: #3 kuya ku-#11, noma i-soft-metric #10 kuya ku-#36 ngezinti ezifanayo.
- **Amakhodi esimo sohlelo lokugoba**: S, L, U ka-DetailCraft; izinhlobo ze-ACI 315; noma amakhodi esimo e-BS 8666. Bheka [Isethulo sezinti zokuqinisa](topic:rebar-reference).

## Ukudonsa ukuze ukhethe

**Unxande** (njengakuqala) noma **Ilasso**: umugqa ngesandla, kanye no-{{key:Space}} oshintsha phakathi kwangaphakathi, kuthintwayo nefensi ngesikhathi udonsa. Bheka [Khetha ngewindi](topic:select-and-change#select-with-a-window).
