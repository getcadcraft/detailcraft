---
title: Ziara ya skrini
summary: Kila upau, paneli na kichupo cha DetailCraft kwa jina lake kwenye skrini, na kazi ya kila kimoja.
keywords: skrini, mpangilio, upau wa zana, paneli, sifa, upau wa hali, ripoti, kiolesura, ui, vichupo
from: 94f81073
---

DetailCraft inajaza dirisha la kivinjari chini ya upau wa programu. Kutoka juu hadi chini: upau wa zana, kisha safu tatu (paneli ya {{ui:Model}}, mwonekano, paneli ya {{ui:Properties}}), kisha vichupo vya ripoti, kisha upau wa hali.

## Upau wa programu

Upau mwembamba kabisa juu unahusu tovuti ya CadCraft, si modeli. Unaonyesha jina la programu na toleo, kiungo cha {{ui:About DetailCraft}}, {{ui:Help}} (au {{key:F1}}) kwa msaada huu, {{ui:Save for offline}}, kitufe cha hali ya skrini, na swichi ya {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} inahifadhi DetailCraft, mwonekano wake wa 3D na msaada huu kwenye kivinjari chako ili ifunguke bila muunganisho. Inasoma {{ui:Offline ready}} ikishahifadhiwa; bofya hapo kisha kwa {{ui:Save again (get the newest version)}} au {{ui:Remove the offline copy}}. Angalia [Kufanya kazi nje ya mtandao](common:offline).
- {{ui:Paper}} inatoa skrini nyepesi na {{ui:Model}} ya giza. Mwonekano wa 3D unafuata mara moja; hakuna kitu kwenye modeli yako kinachobadilika.
- Kitufe cha hali ya skrini na {{key:Ctrl+Shift+F}} vinazunguka kati ya kawaida, skrini nzima, na skrini nzima yenye pau zilizofichwa. {{key:Ctrl+Shift+F}} inatumia kitufe cha Control kwenye kila kompyuta, pamoja na Mac. Pau zikiwa zimefichwa, elekeza juu ya skrini (au gusa) ili zirudi. {{key:Esc}} inatoka kwenye skrini nzima.

## Upau wa zana

Upau wa zana una makundi matano. Elekeza kwenye kitufe ili uone kinachofanya na njia yake ya mkato.

| Kundi | Vitufe | Kazi yake |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Anzisha modeli, fungua `.detailcraft.json` iliyohifadhiwa au faili ya IFC, hifadhi moja, au fungua fremu ya sampuli |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Zana ambayo bofyo lijalo kwenye mwonekano linatumia |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, na katika {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Ongeza muunganisho kwenye boriti, nguzo au mshikio uliochaguliwa, au nakili muunganisho uliochaguliwa kwenye kila kiungio kinachofanana nao |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Rudi nyuma na mbele kupitia mabadiliko; nakili uteuzi na ubandike. {{ui:More}} inafungua menyu yenye {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} na {{ui:Select none}}, kila moja na njia yake ya mkato |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, na katika {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Pakua uhamishaji nje, au fungua karatasi za michoro |

Vitufe na vipengee vya menyu visivyoweza kufanya kazi kwa sasa vinafifia, na kuelekeza juu yake kunaonyesha sababu. {{ui:End plates}} inahitaji boriti iliyochaguliwa, {{ui:Base plate}} nguzo iliyochaguliwa, {{ui:Similar}} muunganisho uliochaguliwa, {{ui:Shop drawing}} modeli yenye sehemu, {{ui:Copy}} kipengele au msingi uliochaguliwa, na {{ui:Paste}} kitu kilichonakiliwa. Angalia [Nakili, bandika na nakili mara mbili](topic:copy-paste).

## Paneli ya Modeli (kushoto)

- {{ui:Model}}: {{ui:Name}} ya modeli. Inataja kila faili unayohifadhi au kuhamisha nje.
- {{ui:Grids}}: mistari ya gridi na nafasi zake, na {{ui:Apply grids}}. Angalia [Weka gridi na viwango](topic:grids-and-levels).
- {{ui:Levels}}: safu moja kwa kila kiwango (jina na mwinuko kwa mm), {{ui:Add level}} na {{ui:Apply levels}}.
- {{ui:Custom profile}}: tengeneza sehemu yako ya kiparamentri. Imefungwa hadi uifungue.
- {{ui:Part marks}}: kila alama ya sehemu kwenye modeli pamoja na wasifu wake, urefu na idadi. Bofya alama ili kuchagua sehemu ya kwanza yenye alama hiyo.

{{ui:Grids}}, {{ui:Levels}} na {{ui:Custom profile}} zinakunjwa: bofya vichwa vyake.

## Mwonekano (katikati)

Mwonekano unaonyesha modeli kwa 3D. Juu yake, upau wa mwonekano una vitufe vitatu na orodha:

- {{ui:3D}}: zunguka modeli kwa uhuru.
- {{ui:Plan}}: angalia moja kwa moja chini kwenye kiwango kimoja. Orodha ya viwango inaonekana kando ya vitufe. Kila kitu kilicho zaidi ya 1.5 m juu ya kiwango kinakatwa ili uone na ubofye kiwango wazi.
- {{ui:Elevation}}: angalia moja kwa moja mstari mmoja wa gridi wenye herufi (Gridi A, Gridi B …). Orodha ya gridi zenye herufi inaonekana. Chuma kilicho ndani ya 1 m kutoka mstari huo tu ndicho kinachoonyeshwa.
- Kitufe cha kutoshea kilicho mwisho wa kulia wa upau wa mwonekano kinakuza ili uone modeli nzima.

Nukta ndogo zinaashiria kila makutano ya gridi kwenye kila kiwango. Zana ya kuweka ikiwa imewashwa, nukta iliyo karibu zaidi na kielekezi inawaka na upau wa hali unaitaja, kwa mfano "A/2 kwenye Kiwango 1". Rangi zinatofautisha aina za vipengele: nguzo, mihimili, mishikio na bamba kila moja ina rangi yake, bolti na vijiti vya nanga nyingine, misingi ni ya uwazi, na nondo zinachorwa kama mirija. Matundu yanaonekana kama plagi nyeusi; mikato imekatwa.

Jinsi ya kuzungusha, kuhamisha na kukuza: [Zunguka kwenye mwonekano wa 3D](topic:navigate-3d).

Modeli ikiwa tupu, mwonekano unaonyesha orodha fupi ya "Anza modeli". Unaweza pia kuacha faili ya modeli iliyohifadhiwa popote kwenye mwonekano ili kuifungua.

## Paneli ya Sifa (kulia)

Paneli hii inaonyesha kitu kinachotegemea unachofanya, na kichwa chake kinasema ni nini: "Modeli", "Weka boriti", "Boriti b2", "Muunganisho wa sahani ya mwisho", "Sahani ya msingi", "Msingi F1", "3 zimechaguliwa" au "Bandika".

- **Hakuna kilichochaguliwa:** muhtasari wa modeli (vipengele, miunganisho, misingi, sehemu, alama, bolti, uzito wa chuma na nondo, gridi, viwango).
- **Zana ya kuweka imewashwa:** chaguo za kipande kijacho (wasifu, nyenzo, nafasi, mzunguko, na kwa nguzo {{ui:Up to}}), muhtasari wa wasifu uliochaguliwa, na fomu ya {{ui:Add by grid}} ya kuweka bila kubofya kwenye mwonekano.
- **Kipengele kimechaguliwa:** jina lake, wasifu, nyenzo, nafasi, mzunguko, kuratibu za ncha zake mbili, alama zake, urefu wa kukata na uzito, matundu na mikato yake, na vitufe vya miunganisho, mchoro wake wa warsha na {{ui:Delete}}.
- **Muunganisho umechaguliwa:** kila mpangilio wa sahani, bolti na uchomeleaji, bolti na uchomeleaji unaotengeneza, maonyo yake, na {{ui:Apply to similar}}.
- **Msingi umechaguliwa:** nafasi na ukubwa wake, mkeka wa chini, nondo za kuanzia, na alama za nondo unazotumia.
- **Vitu kadhaa vimechaguliwa:** idadi ya vipengele vya kila aina, miunganisho na misingi, uzito wa chuma, na {{ui:Copy}}, {{ui:Duplicate}} na {{ui:Delete}}.
- **Kubandika:** kilichopo kwenye ubao wa kunakili, na fomu za kubandika kwa kukabiliana kilichoandikwa, au kwenye makutano ya gridi unayochagua kutoka orodha.

Sehemu za namba zinaanza kutumika unapobonyeza {{key:Enter}} au kuondoka kwenye sehemu. Kila mabadiliko ni hatua moja unayoweza kutendua.

## Vichupo vya ripoti (chini)

- {{ui:Problems}}: kila kitu ambacho DetailCraft haikuweza kujenga au inataka uangalie, pamoja na kitufe cha {{ui:Select}} kwenye kila mstari. Kichupo kinaonyesha idadi kwenye mabano.
- {{ui:Bill of materials}}: sehemu, mikusanyiko, na bolti na vijiti vya nanga, pamoja na uzito na kiungo cha {{ui:Download CSV}}. Bofya alama ya sehemu ili kuchagua sehemu hiyo.
- {{ui:Bending schedule}}: kila alama ya nondo katika kila msingi, pamoja na kiungo cha {{ui:Download CSV}}.

Kichupo kikiwa kimelengwa, {{key:Left}} na {{key:Right}} husogeza kati ya vichupo.

## Upau wa hali

Upau kando ya chini una sehemu tatu: makutano ya gridi chini ya kielekezi wakati wa kuweka, ujumbe wa karibuni (kilichotokea hivi karibuni, au kwa nini kitu kilikataliwa), na jumla zinazoendelea za sehemu, bolti, uzito wa chuma na uzito wa nondo. Kitendo kinapoonekana hakifanyi kitu, soma ujumbe hapa kwanza.

Kichupo cha kivinjari kinaanza na nukta (•) wakati modeli ina mabadiliko ambayo hujahifadhi.

## Kwenye skrini nyembamba

Chini ya takriban pikseli 760 kwa upana, safu zinapangwa juu ya nyingine: upau wa zana, mwonekano, upau wa hali, {{ui:Properties}}, vichupo vya ripoti, kisha paneli ya {{ui:Model}} mwisho. Sogeza ukurasa kuzifikia. DetailCraft imepangwa kwa skrini ya kompyuta ya mezani au kompyuta ndogo; simu inafaa kwa kutazama, si kwa kuunda.
