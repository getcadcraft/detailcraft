---
title: Ang view cube
summary: I-click ang face, edge, o corner ng cube sa sulok ng view para tumingin mula roon, i-drag ito para mag-orbit, paikutin ang compass ring, lumipat-lipat sa face-on view, at bumalik sa home.
keywords: view cube, viewcube, cube, compass, hilaga, home view, karaniwang views, top, front, right, iso, corner, edge, orbit, paikutin ang view, axis icon, indicator sa sulok, navigation
from: 3666ea8a
---

Nasa kanang itaas ng 3D view ang view cube, sa ilalim ng view bar (sa {{ui:3D}} lamang: nakatingin na nang tuwid sa model ang {{ui:Plan}} at {{ui:Elevation}}). Umiikot ito kasabay ng view, kaya palaging ipinapakita nito kung saang direksyon ka nakatingin: nasa itaas ang {{ui:Top}}, nakaharap sa timog ang {{ui:Front}} (ang gilid na tinitingnan ang mga letter grid sa {{ui:Elevation}}), at nakaharap sa silangan ang {{ui:Right}}, kasama ang mga numbered grid. Nananatili itong transparent hanggang ituro mo ito.

## Tumingin mula sa gilid, edge, o corner

1. Ituro ang cube. Naiilawan ang bahaging nasa ilalim ng pointer: ang gitna ng face, isang edge (naiilaw ito sa parehong face na nagbabahagi nito), o isang corner (sa lahat ng tatlong face).
2. I-click ito. Iikot ang view para tumingin mula roon, pinapanatili ang parehong gitna at zoom.

May 26 na puwedeng i-click: 6 na face ({{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}), 12 edge, at 8 corner. Ang corner ay nagbibigay ng klasikong three-quarter view; ang edge ay tumitingin sa gitna ng dalawang face.

Ang face view ng cube ay 3D view, hindi {{ui:Plan}} o {{ui:Elevation}}: walang naputol, at maaari pa ring paikutin ang model.

## I-orbit sa pamamagitan ng pag-drag ng cube

I-drag ang cube para paikutin ang view, gaya ng pag-orbit sa mismong view. Hindi kailanman itinuturing na click ang drag, kaya maaari mong hawakan ang cube saanman.

## Ang compass ring

Ang ring sa ilalim ng cube ay may N, E, S, at W.

- **I-drag ang ring** para paikutin ang model sa patayong axis, na para bang nakatayo ito sa turntable. Sumusunod ang ring sa pointer.
- **I-click ang isang letra** para tumingin mula sa gilid na iyon, pinapanatili kung gaano ka-tarik ang pagtingin pababa. Sa view na tuwid mula sa itaas, ang letrang na-click mo ay mapupunta sa ibaba ng screen.

## Face-on view: mga palaso

Kapag tuwid kang tumitingin sa isang face, may lumilitaw na maliliit na palaso sa paligid ng cube:

- Ang apat na **triangle** ay ipinapaharap ang face sa gilid na iyon: ang triangle sa itaas ng cube ay nagpapakita ng face na dating nasa itaas, at ganoon din sa iba.
- Ang dalawang **curved arrow** sa kanang itaas ay umiikot sa larawan ng isang quarter turn pakanan o pakaliwa, nang hindi binabago kung aling face ang tinitingnan mo. Gamitin ang mga ito para paikutin ang plano para tumawid sa screen ang mahabang pader.

## Home

Ang house button sa kaliwang itaas ng cube ay bumabalik sa panimulang three-quarter view at kinakasya ang buong model, gaya ng fit button. Ginagawa rin ito ng {{key:Home}} habang may focus ang keyboard ang cube.

## Gamit ang keyboard

{{key:Tab}} papunta sa cube, pagkatapos:

| Key | Ginagawa |
|---|---|
| {{key:left}} / {{key:right}} | pumili ng gilid, edge, o corner sa paligid ng cube, sa mga hakbang na ikawalong bahagi ng pag-ikot (sinasabi ng screen reader kung alin) |
| {{key:up}} / {{key:down}} | pumili ng mas mataas o mas mababang isa, hanggang {{ui:Top}} o pababa sa {{ui:Bottom}} |
| {{key:Enter}} o {{key:Space}} | tumingin mula sa napili |
| {{key:Shift+left}} / {{key:Shift+right}} | paikutin ang view ng isang quarter turn sa patayong axis |
| {{key:Home}} | ang home view |
| {{key:Esc}} | lumabas sa cube |

Nananatili sa cube ang mga key na pinindot doon: hindi nito sinisimulan ang mga tool ng DetailCraft.

## Axis icon o wala na lang

Buksan ang {{ui:Settings}} ({{key:Mod+,}}), ang tab na {{ui:DetailCraft}}, at itakda ang **Indicator sa sulok** sa {{ui:View cube}} (ang panimula), {{ui:Axis icon}} (maliit na marker na X, Y, Z sa ibabang kaliwa: pula ang X, berde ang Y, asul ang Z), o {{ui:None}}. Tinatandaan ng browser na ito ang pinili. Tingnan ang [DetailCraft settings](topic:settings#corner-indicator).
