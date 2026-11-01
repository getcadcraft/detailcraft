---
title: Paglilibot sa screen
summary: Bawat bar, panel at tab sa DetailCraft ayon sa pangalan nito sa screen, at kung para saan ang bawat isa.
keywords: screen, layout, toolbar, panel, properties, status bar, report, interface, ui, tab
from: 454f74fd
---

Pinupuno ng DetailCraft ang window ng browser sa ibaba ng app bar. Mula itaas hanggang ibaba: ang toolbar, saka tatlong column (ang {{ui:Model}} panel, ang view, ang {{ui:Properties}} panel), saka ang report tab, saka ang status bar.

## Ang app bar

Ang manipis na bar sa pinakataas ay pag-aari ng site ng CadCraft, hindi ng model. Ipinapakita nito ang pangalan at bersyon ng app, link papunta sa Tungkol sa DetailCraft, {{ui:Help}} (o {{key:F1}}) para sa help na ito, {{ui:Save for offline}}, ang button ng screen mode at ang switch na {{ui:Paper}} / {{ui:Model}}.

- Itinatabi ng {{ui:Save for offline}} ang DetailCraft, ang 3D view nito at ang help na ito sa browser mo para magbukas ito nang walang koneksyon. Nagbabasa ito ng {{ui:Handa offline}} kapag na-save na; i-click ito pagkatapos para sa {{ui:I-save ulit (kunin ang pinakabagong bersyon)}} o {{ui:Alisin ang offline copy}}. Tingnan ang [Pagtatrabaho offline](common:offline).
- Ang {{ui:Paper}} ay nagbibigay ng maliwanag na screen at ang {{ui:Model}} ng madilim. Agad sumusunod ang 3D view; walang nagbabago sa model mo.
- Pinapalipat-lipat ng button ng screen mode at ng {{key:Ctrl+Shift+F}} ang normal, full screen, at full screen na nakatago ang mga bar. Gumagamit ang {{key:Ctrl+Shift+F}} ng Control key sa bawat computer, kasama ang Mac. Kapag nakatago ang mga bar, ituro ang itaas na gilid ng screen (o i-tap ito) para maibalik ang mga ito. Ang {{key:Esc}} ang nagla-labas sa full screen.

## Ang toolbar

Limang group ang toolbar. I-hover ang button para makita kung ano ang ginagawa nito at ang key nito.

| Group | Button | Ginagawa |
|---|---|---|
| {{ui:File}} | {{ui:Bago}}, {{ui:Buksan}}, {{ui:Import IFC}}, {{ui:I-save}}, {{ui:Sample}} | Gumawa ng model, buksan ang na-save na `.detailcraft.json` o IFC file, i-save ang isa, o buksan ang sample frame |
| {{ui:Place}} | {{ui:Piliin}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plato}}, {{ui:Footing}}, Stair | Ang tool na gagamitin ng susunod na click sa view |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, at sa {{ui:Higit pa}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Magdagdag ng connection sa napiling beam, column o brace, o kopyahin ang napiling connection sa bawat katulad na joint |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Higit pa}} | Bumalik at sumulong sa mga pagbabago; kopyahin ang pinili at i-paste ito. Nagbubukas ang {{ui:Higit pa}} ng menu na may {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:I-paste sa mismong lugar}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} at {{ui:Select none}}, bawat isa kasama ang key nito |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Mga Drawing}}, at sa {{ui:Higit pa}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | I-download ang export, o buksan ang mga drawing sheet |

Naka-grey out ang mga button at menu item na hindi makagagawa sa sandaling ito, at sinasabi ng hover kung bakit. Kailangan ng {{ui:End plates}} ang napiling beam, ang {{ui:Base plate}} ng napiling column, ang {{ui:Similar}} ng napiling connection, ang {{ui:Shop drawing}} ng napiling I-shape o plato, ang {{ui:Copy}} ng napiling member o footing, at ang {{ui:Paste}} ng may nakopya. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

## Ang Model panel (kaliwa)

- {{ui:Model}}: ang {{ui:Name}} ng model. Ito ang pangalan ng bawat file na sine-save o ine-export mo.
- {{ui:Grids}}: ang mga linya ng grid at ang espasyo ng mga ito, at ang {{ui:Ilapat ang grids}}. Tingnan ang [Mag-set up ng grid at level](topic:grids-and-levels).
- {{ui:Levels}}: isang hilera bawat level (pangalan at elevation sa mm), ang {{ui:Magdagdag ng level}} at {{ui:Ilapat ang levels}}.
- {{ui:Custom profile}}: gumawa ng sarili mong parametric na seksyon. Nakasara ito hanggang buksan mo.
- {{ui:Mga part mark}}: bawat part mark sa model kasama ang profile, haba at bilang nito. I-click ang mark para piliin ang unang piyesang may ganoong mark.

Natutupi ang {{ui:Grids}}, {{ui:Levels}} at {{ui:Custom profile}}: i-click ang mga heading nito.

## Ang view (gitna)

Ipinapakita ng view ang model sa 3D. Sa itaas nito, may tatlong button at isang list ang view bar:

- {{ui:3D}}: umikot sa paligid ng model nang malaya.
- {{ui:Plano}}: tumingin nang diretso pababa sa isang level. Lalabas ang list ng mga level sa tabi ng mga button. Anumang higit sa 1.5 m sa itaas ng level ay natatabas para malinaw mong makita at ma-click ang level.
- {{ui:Elevation}}: tumingin nang diretso sa isang may letrang grid line (Grid A, Grid B …). Lalabas ang list ng mga may letrang grid. Ang bakal lang na nasa loob ng 1 m mula sa linyang iyon ang ipinapakita.
- Ang fit button sa dulong kanan ng view bar ay nag-zoom para ipakita ang buong model.

Maliliit na tuldok ang nagmamarka sa bawat intersection ng grid sa bawat level. Habang nakabukas ang placing tool, sumisindi ang tuldok na pinakamalapit sa pointer at pinangalanan ito ng status bar, halimbawa "A/2 at Level 1". Ang mga kulay ang nagpapakilala sa mga uri ng member: may kanya-kanyang kulay ang column, beam, brace at plato, may isa pang kulay ang bolt at rod, transparent ang mga footing, at iginuguhit bilang tubo ang rebar. Lumalabas na madilim na plug ang mga butas; putol ang mga cope.

Paano umikot, mag-pan at mag-zoom: [Gumalaw sa 3D view](topic:navigate-3d).

Kapag walang laman ang model, nagpapakita ang view ng maikling list na "Start a model". Maaari mo ring i-drop ang na-save na model file kahit saan sa view para buksan ito.

## Ang Properties panel (kanan)

Nakadepende sa ginagawa mo ang ipinapakita ng panel na ito, at sinasabi ng heading nito kung alin: "Model", "Maglagay ng beam", "Beam b2", "Koneksyon ng end plate", "Base plate", "Footing F1", "3 ang napili" o "I-paste".

- **Walang napili:** buod ng model (mga member, connection, footing, piyesa, mark, bolt, timbang ng bakal at rebar, grid, level).
- **Nakabukas ang placing tool:** ang mga opsyon para sa susunod na piyesa (profile, materyal, posisyon, rotation, at para sa column ang {{ui:Hanggang}}), buod ng napiling profile, at form na {{ui:Idagdag ayon sa grid}} para maglagay nang hindi nagki-click sa view.
- **Napiling member:** ang pangalan nito, profile, materyal, posisyon, rotation, coordinate ng dalawang dulo nito, mga mark, haba ng putol at timbang, mga butas at cope nito, at mga button para sa connection, shop drawing nito at {{ui:Delete}}.
- **Napiling connection:** bawat setting ng plato, bolt at weld, ang mga bolt at weld na ginagawa nito, mga babala nito, at ang Ilapat sa mga katulad.
- **Napiling footing:** posisyon at laki nito, ang bottom mat, ang mga starter bar, at ang mga bar mark na ginagamit nito.
- **Ilang bagay ang napili:** ilang member ng bawat uri, connection at footing, timbang ng bakal ng mga ito, at ang {{ui:Copy}}, {{ui:Duplicate}} at {{ui:Delete}}.
- **Pag-paste:** ang laman ng clipboard, at mga form para mag-paste sa pamamagitan ng typed na offset o sa grid intersection na pipiliin mo mula sa mga list.

Nagkakabisa ang mga number field kapag pinindot mo ang {{key:Enter}} o umalis sa field. Bawat pagbabago ay isang hakbang na maaari mong i-undo.

## Ang report tab (ibaba)

- {{ui:Mga problema}}: lahat ng hindi nabuo ng DetailCraft o gustong suriin mo, na may {{ui:Select}} button sa bawat linya. Ipinapakita ng tab ang bilang sa loob ng bracket.
- {{ui:Bill of materials}}: mga piyesa, assembly, at bolt at anchor rod, kasama ang timbang at ang link na {{ui:I-download ang CSV}}. I-click ang part mark para piliin ang piyesang iyon.
- {{ui:Bending schedule}}: bawat bar mark sa bawat footing, kasama ang link na {{ui:I-download ang CSV}}.

Kapag nakatutok ang isang tab, ang {{key:Left}} at {{key:Right}} ay lumilipat sa pagitan ng mga tab.

## Ang status bar

May tatlong bahagi ang bar sa ibaba: ang grid intersection sa ilalim ng pointer habang naglalagay, ang pinakahuling mensahe (ang kakatapos lang na nangyari, o kung bakit tinanggihan ang isang bagay), at ang tuloy-tuloy na kabuuan ng mga piyesa, bolt, timbang ng bakal at timbang ng rebar. Kapag parang walang nangyari sa isang aksyon, basahin muna rito ang mensahe.

Nagsisimula sa tuldok (•) ang title ng browser tab habang may pagbabago sa model na hindi mo pa na-save.

## Sa makitid na screen

Kapag mas makitid sa mga 760 pixel, pinagsasama-sama ang mga column: toolbar, view, status bar, {{ui:Properties}}, report tab, at ang {{ui:Model}} panel sa huli. I-scroll ang pahina para maabot ang mga ito. Ginawa ang layout ng DetailCraft para sa desktop o laptop na screen; pwedeng pang-tingin lang ang telepono, hindi pang-detailing.
