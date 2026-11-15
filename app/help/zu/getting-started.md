---
title: Ukuqala nge-DetailCraft
summary: Okwenziwa yi-DetailCraft manje, indlela yokuyivula, nemodeli yokuqala kusuka emagridini kuya kumdwebo wokukhiqiza ngemizuzu eyi-10.
keywords: qala, imodeli yokuqala, isingeniso, ukuhlela insimbi, insimbi yokuqinisa, ukuqala ngokushesha, isifundo, ukubuka konke
from: e4f16bbe
---

I-DetailCraft uhlelo lokuhlela insimbi nezinduku zokuqinisa olusemndenini we-CadCraft. Wakha imodeli ye-3D yohlaka lwensimbi ephezu kwamagridi namazinga, uyixhume, futhi uthole okudingwa yisitolo: amamaki ezingxenye nezinhlanganisela, uhlu lwempahla, imidwebo yokukhiqiza yengxenye eyodwa, amafayela e-DSTV NC, imodeli ye-IFC, nohlu lokugoba lwezisekelo.

Lena inguqulo yokuqala. Yenza izinto ezimbalwa ngokucophelela kunokuthi yenze konke ngesikhathi esisodwa. Funda [Okungakakhiwa okwamanje](topic:not-built-yet) ngaphambi kokuhlela umsebenzi wangempela ngayo.

## Okwenziwa manje

- Amagridi namazinga owafakayo, ngamamilimitha.
- Insika, amabhimu, amabhulaketi namapuleti kusuka emakhathalogini ashicilelwe wamaphrofayili (AISC W, S, C, L, HSS ne-Pipe; IPE, HEA, HEB ne-UPN zaseYurophu; UB, UC, PFC, EA, UEA, SHS, RHS ne-CHS zaseBrithani), kanye namaphrofayili wakho ezinhlobo zepharamitha.
- Izixhumo ezimbili: ipuleti lokuphela eliboshiwe lisuka kubhimu liye kuflenji yensika, nepuleti lesisekelo lensika elinezinti zokumisa ezine. Ngayinye ingakopishwa kuyo yonke indawo ehlangana ifanayo.
- Izimbobo nokusikwa okufakwa ngokuma kwazo.
- Izisekelo zamaphedi amakhona amane ngaphansi kwesendlalelo sensimbi nezinduku zokuqala.
- Amamaki ezingxenye nezinhlanganisela ezivuselela ngokwazo ngemva kwawo wonke amashintsho.
- Ukuthumela ngaphandle: IFC4, amafayela e-DSTV NC (amaphrofayili e-I namapuleti), uhlu lwempahla njenge-CSV, uhlu lokugoba njenge-CSV, nomdwebo wokukhiqiza we-PDF wengxenye eyodwa.

## Vula i-DetailCraft

1. Vula i-DetailCraft kusiphequluli sedeskithophu: Chrome, Edge, Firefox noma Safari. Bheka [Izisakazi namakhompyutha](common:browsers).
2. Linda isikrini sigcwale. Ibha yesimo esiphansi ithi "Ilungile. Vula iSampula, noma setha amagridi namazinga uqale ukubeka izinto."

Ukubuka kwemodeli kudinga ukubonakala kwe-3D (WebGL). Uma maphakathi nesikrini kuthi "Lesi siphequluli sehlulekile ukuqala ukubonakala kwe-3D (WebGL)", bheka [Ukuxazulula izinkinga](topic:troubleshooting#the-3d-view-is-missing).

:::note
Amamodeli akho ahlala kukhompyutha yakho. Ukuvula imodeli kufunda kusiphequluli, nokulondoloza kulanda ifayela. Akukho okulayishwayo. Ukulondoloza efwini akukatholakali okwamanje. Bheka [Lapho amafayela akho aya khona](common:your-files). Ukuze usebenzise i-DetailCraft ngaphandle kokuxhumeka ngesikhathi esizayo, khetha {{ui:Save for offline}} kubha yohlelo kanye ngenkathi uxhunyiwe; bheka [Ukusebenza ngaphandle kwe-inthanethi](common:offline).
:::

:::offline
Awuxhunyiwe. I-DetailCraft isebenza ngaphandle kokuxhumeka kuphela uma yayilondolozelwe ukusetshenziswa ngaphandle kwe-inthanethi kuqala: inkinobho ethi {{ui:Save for offline}} kubha yohlelo ibe seyithi {{ui:Offline ready}}. Bheka [Ukusebenza ngaphandle kwe-inthanethi](common:offline).
:::

## Bheka isampula kuqala

Indlela esheshayo yokubona ukuthi i-DetailCraft yenza ini ukubona uhlaka lwesampula.

1. Khetha {{ui:Sample}} eqenjini ethi {{ui:File}} kwethuluzi.
2. Ukubuka kubonisa uhlaka olunezindawo ezimbili: izinsika eziyisithupha ezinezisekelo zepuleti, amabhimu amane namaphuleti okuphela, ibhulaketi elilodwa nezisekelo eziyisikhombisa ezinezinduku zokuqinisa.
3. Chofoza ibhimu. Iphaneli ethi {{ui:Properties}} ngakwesokudla ikhombisa imaki yengxenye yalo, ubude besikhwama, isisindo namaholo amaphuleti okuphela awenzile.
4. Vula ithebhu ethi {{ui:Bill of materials}} ngaphansi ukuze ubone yonke imaki yengxenye ngenani layo nesisindo.

Uhambo [Hlola uhlaka lwesampula](topic:sample-model) luyalidlulisa ngocezu ngocezu.

## Imodeli yakho yokuqala

Imodeli esha isinamagridi 1 kuya ku-3 ngo-A kuya ku-B ngo-6000 mm namazinga amabili, iZinga 1 ku-0 neZinga 2 ku-4000.

1. Khetha {{ui:New}}. Uma imodeli yamanje inezinguquko, i-DetailCraft iyakubuza ukuthi ufuna ukuzilondoloza kuqala yini.
2. Khetha {{ui:Plan}} phezu kokubuka. Uhlu lwamazinga eduze kwalo likhetha iZinga 1.
3. Khetha {{ui:Column}} ethulusini, noma cindezela {{key:C}}.
4. Chofoza ukuhlangana kwegridi A/1. Insika ye-W12x50 iyavela isuka eZingeni 1 iye eZingeni 2. Ibha yesimo ithi ifike kuphi.
5. Chofoza B/1, A/2 no-B/2 ukuze ubeke ezinye ezintathu.
6. Khetha iZinga 2 ohlwini lwamazinga, bese ukhetha {{ui:Beam}} noma cindezela {{key:B}}.
7. Chofoza A/1, bese A/2. Ibhimu le-W16x26 lihlanganisa izingaphezulu zezinsika ezimbili, ingaphezulu lalo lensimbi lisezingeni.
8. Cindezela {{key:Esc}} ukuze ubuyele emsebenzini {{ui:Select}}, bese uchofoza ibhimu.
9. Khetha {{ui:End plates}} eqenjini {{ui:Connect}}. Zombili izinhlangothi zithola ipuleti lokuphela eliboshiwe, ibhimu linqunyelwa ukuze lilingane, futhi ipuleti lokuphela lokuqala selikhethiwe.
10. Chofoza ibhimu futhi.
11. Khetha {{ui:Shop drawing}} eqenjini {{ui:Output}}. Ukubuka kwangaphambili komdwebo wokukhiqiza webhimu kuyavuleka. Khetha {{ui:Download PDF}}.
12. Cindezela {{key:Mod+S}} ukulondoloza imodeli. Isiphequluli silanda `Untitled.detailcraft.json`.

Qamba kabusha imodeli enkambweni ethi {{ui:Name}} phezulu ngakwesobunxele ngaphambi kokulondoloza, ukuze ifayela nakho konke okuthunyelwa ngaphandle kuthwele igama layo.

## Okulandelayo

- [Ukuhamba esikrinini](topic:workspace)
- [Setha amagridi namazinga](topic:grids-and-levels)
- [Hambisa ububonakalo be-3D](topic:navigate-3d), ngemouse, nge-trackpad noma isikrini sokuthinta
- [Uvela kwezinye izinhlelo zokuhlela](topic:coming-from), uma uyazi enye inhlelo enkulu yokuhlela
- [Ukusebenzisa lolu usizo](common:help)
