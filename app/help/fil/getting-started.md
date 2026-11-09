---
title: Pagsisimula sa DetailCraft
summary: Ano ang ginagawa ng DetailCraft ngayon, paano ito buksan, at unang model mula grid hanggang shop drawing sa sampung minuto.
keywords: simula, unang model, panimula, steel detailing, rebar, mabilis na simula, tutorial, pangkalahatang-ideya
from: e4f16bbe
---

Ang DetailCraft ay ang steel at rebar detailing app ng CadCraft family. Gumagawa ka ng 3D model ng steel frame sa mga grid at level, ikinokonekta ito, at nakukuha ang kailangan ng shop: mga part at assembly mark, bill of materials, single-part na shop drawing, DSTV NC file, IFC model, at bending schedule para sa mga footing.

Maaga pa ang build na ito. Ginagawa nito nang maingat ang maikling listahan ng mga bagay sa halip na lahat nang sabay-sabay. Basahin muna ang [Ano ang hindi pa nagagawa](topic:not-built-yet) bago ka magplano ng totoong trabaho dito.

## Ano ang ginagawa nito ngayon

- Mga grid at level na itinatype mo, sa millimeter.
- Mga column, beam, brace at plato mula sa mga inilathalang profile catalog (AISC W, S, C, L, HSS at Pipe; European IPE, HEA, HEB at UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS at CHS), at sarili mong parametric profile.
- Dalawang connection: bolted end plate mula beam papunta sa column flange, at column base plate na may apat na anchor rod. Maaaring kopyahin ang bawat isa sa bawat katulad na joint.
- Mga butas at cope na itinatype ayon sa posisyon.
- Mga rectangular pad footing na may bottom mat at starter bar.
- Mga part at assembly mark na kusang nag-a-update pagkatapos ng bawat pagbabago.
- Mga export: IFC4, DSTV NC file (I-shape at plato), bill of materials bilang CSV, bending schedule bilang CSV, at shop drawing PDF ng isang piyesa.

## Buksan ang DetailCraft

1. Buksan ang DetailCraft sa desktop browser: Chrome, Edge, Firefox o Safari. Tingnan ang [Mga browser at computer](common:browsers).
2. Hintayin na mapuno ang screen. Sinasabi ng status bar sa ibaba: "Ready. Open the Sample, or set grids and levels and start placing members."

Kailangan ng model view ang 3D graphics (WebGL). Kung sinasabi ng gitna ng screen na "This browser could not start 3D graphics (WebGL)", tingnan ang [Troubleshooting](topic:troubleshooting#the-3d-view-is-missing).

:::note
Nananatili ang iyong mga model sa iyong computer. Binabasa ng browser ang model kapag binubuksan ito, at nagda-download ng file kapag sine-save. Walangina-upload. Hindi pa available ang cloud saving. Tingnan ang [Saan napupunta ang mga file mo](common:your-files). Para magamit ang DetailCraft nang walang koneksyon sa susunod, piliin nang isang beses ang {{ui:Save for offline}} sa app bar habang online; tingnan ang [Pagtatrabaho offline](common:offline).
:::

:::offline
Offline ka. Gumagana ang DetailCraft nang walang koneksyon kung na-save muna ito para sa offline na gamit: magbabasa ng {{ui:Offline ready}} ang button na {{ui:Save for offline}} sa app bar. Tingnan ang [Pagtatrabaho offline](common:offline).
:::

## Tingnan muna ang sample

Ang pinakamabilis na paraan para makita ang kayang gawin ng DetailCraft ay ang sample frame.

1. Piliin ang {{ui:Sample}} sa {{ui:File}} group ng toolbar.
2. Ipinapakita ng view ang isang frame na may dalawang bay: anim na column na may base plate, apat na beam na may end plate, isang brace at pitong footing na may rebar.
3. I-click ang isang beam. Ipinapakita ng {{ui:Properties}} panel sa kanan ang part mark nito, cut length, timbang at ang mga butas na ginawa ng end plate.
4. Buksan ang {{ui:Bill of materials}} tab sa ibaba para makita ang bawat part mark kasama ang bilang at timbang nito.

Tinatalakay ng walkthrough na [Tuklasin ang sample frame](topic:sample-model) ang bawat bahagi nito.

## Ang unang model mo

Ang bagong model ay mayroon nang mga grid 1 hanggang 3 at A hanggang B sa 6000 mm, at dalawang level: Level 1 sa 0 at Level 2 sa 4000.

1. Piliin ang {{ui:New}}. Kung may pagbabago ang kasalukuyang model, tatanungin ka ng DetailCraft kung ise-save muna ang mga ito.
2. Piliin ang {{ui:Plan}} sa itaas ng view. Pipiliin ng level list sa tabi nito ang Level 1.
3. Piliin ang {{ui:Column}} sa toolbar, o pindutin ang {{key:C}}.
4. I-click ang grid intersection na A/1. Lalabas ang W12x50 column mula Level 1 hanggang Level 2. Sinasabi ng status bar kung saan ito napunta.
5. I-click ang B/1, A/2 at B/2 para maglagay ng tatlo pa.
6. Piliin ang Level 2 sa level list, saka piliin ang {{ui:Beam}} o pindutin ang {{key:B}}.
7. I-click ang A/1, saka ang A/2. Dudugtong ang W16x26 beam sa dalawang tuktok ng column, na ang top of steel ay nasa level.
8. Pindutin ang {{key:Esc}} para bumalik sa {{ui:Select}}, saka i-click ang beam.
9. Piliin ang {{ui:End plates}} sa {{ui:Connect}} group. Bawat dulo ay makakakuha ng bolted end plate, puputulin ang beam para magkasya, at napili na ang unang end plate.
10. I-click muli ang beam.
11. Piliin ang {{ui:Shop drawing}} sa {{ui:Output}} group. Magbubukas ang preview ng shop drawing ng beam. Piliin ang {{ui:Download PDF}}.
12. Pindutin ang {{key:Mod+S}} para i-save ang model. Dina-download ng browser ang `Untitled.detailcraft.json`.

Palitan ang pangalan ng model sa {{ui:Name}} field sa itaas-kaliwa bago mag-save, para dala ng file at ng bawat export ang pangalan nito.

## Saan pupunta susunod

- [Tour ng screen](topic:workspace)
- [Mag-set up ng grid at level](topic:grids-and-levels)
- [Gumalaw sa 3D view](topic:navigate-3d), gamit ang mouse, trackpad o touch screen
- [Galing sa ibang detailing software](topic:coming-from), kung kilala mo ang isang malaking detailing package
- [Paggamit ng help na ito](common:help)
