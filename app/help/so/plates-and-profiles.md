---
title: Dhig saxanno oo ku dar profile-yo gaar ah
summary: Dhig saxanno dhuuban oo leh dhumuc iyo ballac, oo qeex qaybo I, kanaal, xagal, tuubo ama bir fidsan oo gaar ah.
keywords: saxan, fidsan, profile gaar ah, profile isticmaale, parametric, qayb, qaab, qaybta gudaha, pl
from: c24c3b51
---

## Dhig saxan

Saxan waxaa loo dhigaa sida biim: wuxuu u dhexeeyaa laba isku xidhka, ballaciisu waa dhinac-dhinac, dhumucdiisuna waa kor.

1. Dooro {{ui:Saxan}} kooxda {{ui:Dhig}}, ama riix {{key:P}}.
2. Panelka {{ui:Sifooyinka}}, deji {{ui:Dhumuc (mm)}} iyo {{ui:Ballac (mm)}}. Default-ka waa 20 x 200 oo A36.
3. Deji {{ui:Agab}} iyo {{ui:Wareegga (°)}} haddii loo baahdo. Wareeg 90 wuxuu saxanka ka dhigaa mid taagan.
4. Guji laba isku xidhka, ama isticmaal foomka {{ui:Ku dar gridka}}.

Magaca profile-ka saxanka waxaa loo qoraa `PL<thickness>x<width>`, tusaale PL20x200. Dhererkiisa waa masaafada u dhexeysa laba barta.

Si aad saxan la dhigay u beddesho cabbirkiisa, dooro oo beddel {{ui:Dhumuc (mm)}} ama {{ui:Ballac (mm)}}.

Saxanada aad dhigto waa qaybo u gaar ah (calaamad p, isku-dhis P). Saxanada dhamaadka iyo saldhigga ee xidhiidhadu sameeyaan waa saxan sidoo kale, laakiin waxaad u beddeshaa xidhiidhkooda; eeg [Saxanada dhamaadka](topic:end-plates).

## Ku dar profile gaar ah

Marka qaybta aad u baahan tahay aysan ku jirin catalog-ka, samee cabbirradeeda. Profile gaar ah wuxuu hoos yimaadaa moodeelka wuxuuna lagu kaydiyaa. Si aad ugu isticmaasho moodeel cusub kasta, ku hay {{ui:My profiles}}, oo lagu sharaxay qaybta "Kaydi profile moodeelada cusub" hoos.

1. Panelka {{ui:Moodeel}} ee bidix, fur {{ui:Profile gaar ah}}.
2. Qor {{ui:Magaca}}, tusaale `W8x18-custom` ama `RHS 120x80x5`. Ma noqon karo magac catalog, ama mid u eg magaca saxanka.
3. Dooro {{ui:Qaabka}}: {{ui:Qaabka I}}, {{ui:Kanaal}}, {{ui:Xagal isku mid ah}}, {{ui:Tuubo afar-geesle ah}}, {{ui:Tuubo wareega ah}} ama {{ui:Bir fidsan}}.
4. Buuxi cabbirrada soo baxa, dhammaantood millimitir:

| Qaabka | Cabbirrada |
|---|---|
| Qaabka I | Qoto d, ballaca flange bf, web tw, flange tf, radius-ka fillet r (wuxuu noqon karaa 0) |
| Kanaal | Qoto d, ballaca flange bf, web tw, flange tf (geeso labajibbaaran) |
| Xagal isku mid ah | Ballac b (lug kasta), dhumuc t |
| Tuubo afar-geesle ah | Joog h, ballac b, dhumuc t (radius-ka geeska dibadda 2t) |
| Tuubo wareega ah | Dhexroor D, dhumuc t |
| Bir fidsan | Ballac b, dhumuc t |

5. Ka tag {{ui:Kaydi ku jira My profiles}} si uu u jiro moodeel kasta oo cusub (eeg hoos), ama ka saar tagga si uu moodeelkan keliya u jiro.
6. Dooro {{ui:Ku dar profile}}.

Status bar-ku wuxuu leeyahay "Profile "…" waa la daray; wuxuu ku jiraa dhammaan liisaska profile ee hoos Gaar ah." Waxay ka muuqataa liiska foomka hoostiisa iyo dhammaadka liis kasta oo {{ui:Muuqaal dherer}} ah.

DetailCraft wuu hubiyaa in qaabku jiri karo. Waxaad arki doontaa fariimo sida "Webka iyo flange-yada ma ku dhacaan qotada iyo ballaca.", "Radius-ka fillet-ka waa wayn yahay flange-ka." ama "Derbigu waa dhumuc badan yahay." Hagaaji tirooyinka oo mar kale dooro {{ui:Ku dar profile}}.

### Waxa profile-yada gaarka ah helaan

- Culeyska mitir kasta wuxuu ka imanayaa area × 7850 kg/m³ (cabbirrada catalog-ka waxay isticmaalaan miisaanka la daabacay).
- Biimaha I ee gaarka ah waxay qaadanayaan godad, cope-yo, saxanno dhamaad, faylal NC iyo naqshadaha warshadda sida biimaha I ee catalog-ka.
- Biirka fidsan ee gaarka ah wuxuu u dhaqmaa sida saxan.
- Kanaalada gaarka ah iyo tuubooyinka waxay qaadanayaan godad; xagallada iyo tuubooyinka wareega weli ma qaadan.

Marka profile gaar ah la daro, moodeel kasta kama wax ka beddeli karo ama ka saari karo (haddii qalad dhacday isla markiiba isticmaal {{key:Mod+Z}}). Mid la saxay magac cusub sii.

## Kaydi profile moodeelada cusub

{{ui:My profiles}}, hoosta foomka, waa liistaada profile-yada gaarka ah ee adiga. Waxay ku kaydsantahay browser-kan, kombiyuutarkan; ma aha faylka moodeel, mana aha akoonkaaga.

- Profile lagu daray {{ui:Kaydi ku jira My profiles}} oo la tikiyay wuxuu galaa liiska. Moodeel cusub kasta, oo ay ku jirto midka DetailCraft furo markaad bilowdo, wuxuu ku bilaabmaa dhammaan profile-yadiisa liisaska profile-ka.
- Profile horey u ku jiray moodeel laakiin aan liiska ku jirin, wuxuu leeyahay badhanka {{ui:Kaydi}} dhinacdiisa.
- Moodeel aan lagu jirin mid ka mid ah profile-yadaada (tusaale fayl hore), dooro {{ui:Isticmaal halkan}} si aad ugu darto.
- {{ui:Ka saar}} wuxuu ka saaraa profile liiska. Moodeelada hore u isticmaalay wuxuu hayaan nuqulkooda.
- Moodeel aad furto wuxuu hayaa profile-yada ku kaydsan faylkiisa. Faylka furiddu marna liistaada ma beddelo.
- Magac horay liiska ku jiray oo cabbirro kala duwan leh waa la diidaa: magac kale ku bixi.
- Nadiifinta xogta site-ka browser-ka, ama isticmaalka browser ama kombiyuutar kale, wuxuu bilaabaa liis madhan. Daaqadda gaarka ah (private) ma kaydin karto; app-ku wuu sheegaa.
