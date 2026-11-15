---
title: Tour ng screen
summary: Bawat bar, panel at tab ng DetailCraft ayon sa pangalan nito sa screen, at kung para saan ang bawat isa.
keywords: screen, layout, toolbar, panel, properties, status bar, ulat, interface, ui, tab
from: 94f81073
---

Pinupuno ng DetailCraft ang window ng browser sa ibaba ng app bar. Mula itaas hanggang ibaba: ang toolbar, saka tatlong column (ang {{ui:Model}} panel, ang view, ang {{ui:Properties}} panel), saka ang report tab, at ang status bar.

## Ang app bar

Ang manipis na bar sa pinakataas ay bahagi ng site ng CadCraft, hindi ng model. Ipinapakita nito ang pangalan at bersyon ng app, isang link papunta sa {{ui:About DetailCraft}}, ang {{ui:Help}} (o {{key:F1}}) para sa help na ito, ang {{ui:Save for offline}}, ang screen-mode button, at ang switch na {{ui:Paper}} / {{ui:Model}}.

- Pinananatili ng {{ui:Save for offline}} ang DetailCraft, ang 3D view nito at ang help na ito sa browser mo para magbukas ito nang walang koneksyon. Magbabasa ito ng {{ui:Offline ready}} kapag na-save na; i-click ito pagkatapos para sa {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}}. Tingnan ang [Pagtatrabaho offline](common:offline).
- Nagbibigay ang {{ui:Paper}} ng maliwanag na screen at ang {{ui:Model}} ng madilim. Agad na susunod ang 3D view; walang nagbabago sa iyong model.
- Nagpapalit-palit ang screen-mode button at ang {{key:Ctrl+Shift+F}} sa normal, full screen, at full screen na nakatago ang mga bar. Gumagamit ang {{key:Ctrl+Shift+F}} ng Control key sa bawat computer, kasama ang Mac. Kapag nakatago ang mga bar, ituro ang itaas na gilid ng screen (o i-tap ito) para ibalik ang mga ito. Lumalabas sa full screen ang {{key:Esc}}.

## Ang toolbar

May limang group ang toolbar. I-hover ang isang button para makita kung ano ang ginagawa nito at ang key nito.

| Group | Mga button | Ang ginagawa nila |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Gumawa ng model, buksan ang na-save na `.detailcraft.json` o IFC file, i-save ang isa, o buksan ang sample frame |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Ang tool na gagamitin ng susunod na click sa view |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, at sa {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Magdagdag ng connection sa napiling beam, column o brace, o kopyahin ang napiling connection sa bawat joint na katulad nito |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Bumalik at sumulong sa mga edit; kopyahin ang pinili at i-paste ito. Nagbubukas ang {{ui:More}} ng menu na may {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} at {{ui:Select none}}, bawat isa kasama ang key nito |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, at sa {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Mag-download ng export, o buksan ang mga drawing sheet |

Ang mga button at item ng menu na hindi makakilos sa sandaling iyon ay naka-gray out, at sinasabi ng hover kung bakit. Kailangan ng {{ui:End plates}} ng napiling beam, ng {{ui:Base plate}} ng napiling column, ng {{ui:Similar}} ng napiling connection, ng {{ui:Shop drawing}} ng model na may mga piyesa, ng {{ui:Copy}} ng napiling member o footing, at ng {{ui:Paste}} ng may nakopya. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

## Ang Model panel (kaliwa)

- {{ui:Model}}: ang {{ui:Name}} ng model. Ito ang pangalan ng bawat file na sine-save o ine-export mo.
- {{ui:Grids}}: ang mga linya ng grid at ang espasyo ng mga ito, at ang {{ui:Apply grids}}. Tingnan ang [Mag-set up ng grid at level](topic:grids-and-levels).
- {{ui:Levels}}: isang hilera bawat level (pangalan at elevation sa mm), ang {{ui:Add level}} at ang {{ui:Apply levels}}.
- {{ui:Custom profile}}: gumawa ng sarili mong parametric na seksyon. Nakasara ito hanggang buksan mo.
- {{ui:Part marks}}: bawat part mark sa model kasama ang profile, haba at bilang nito. I-click ang isang mark para piliin ang unang piyesang may ganoong mark.

Natutupi ang {{ui:Grids}}, {{ui:Levels}} at {{ui:Custom profile}}: i-click ang kanilang mga heading.

## Ang view (gitna)

Ipinapakita ng view ang model sa 3D. Sa itaas nito, may tatlong button at isang list ang view bar:

- {{ui:3D}}: umikot sa model nang malaya.
- {{ui:Plan}}: tumingin nang tuwid pababa sa isang level. Lumilitaw sa tabi ng mga button ang isang list ng mga level. Anumang higit sa 1.5 m sa itaas ng level ay pinuputol para makita at ma-click mo nang malinaw ang level.
- {{ui:Elevation}}: tumingin nang tuwid sa isang grid line na may letra (Grid A, Grid B …). Lumilitaw ang isang list ng mga grid na may letra. Nakikita lang ang bakal sa loob ng 1 m mula sa linyang iyon.
- Ang fit button sa dulong kanan ng view bar ay nag-zoom para ipakita ang buong model.

Maliliit na tuldok ang nagmamarka sa bawat grid intersection sa bawat level. Habang aktibo ang placing tool, sumisindi ang tuldok na pinakamalapit sa pointer at pinangalanan ito ng status bar, halimbawa "A/2 at Level 1". Ginagawang magkakaiba ang kulay ng mga uri ng member: may sariling kulay ang column, beam, brace at plato, ang bolt at rod ay may isa pa, transparent ang mga footing at iginuguhit bilang tubo ang rebar. Ipinapakita ang mga butas bilang madilim na plug; putol ang mga cope.

Paano umikot, mag-pan at mag-zoom: [Gumalaw sa 3D view](topic:navigate-3d).

Kapag walang laman ang model, nagpapakita ang view ng maikling listahan ng "Start a model". Maaari ka ring mag-drop ng na-save na model file kahit saan sa view para buksan ito.

## Ang Properties panel (kanan)

Nakadepende sa ginagawa mo ang ipinapakita ng panel na ito, at sinasabi ng heading nito kung alin: "Model", "Place a beam", "Beam b2", "End plate connection", "Base plate", "Footing F1", "3 selected" o "Paste".

- **Walang napili:** buod ng model (mga member, connection, footing, piyesa, mark, bolt, timbang ng steel at rebar, grid, level).
- **Naka-on ang placing tool:** ang mga opsyon para sa susunod na piyesa (profile, material, posisyon, rotation, at para sa mga column, ang {{ui:Up to}}), buod ng napiling profile, at isang {{ui:Add by grid}} form para maglagay nang hindi nagki-click sa view.
- **May napiling member:** ang pangalan nito, profile, material, posisyon, rotation, ang coordinate ng dalawang dulo nito, ang mga mark, cut length at timbang nito, ang mga butas at cope nito, at mga button para sa mga connection, shop drawing nito at {{ui:Delete}}.
- **May napiling connection:** bawat setting ng plato, bolt at weld, ang mga bolt at weld na ginagawa nito, ang mga babala nito, at ang {{ui:Apply to similar}}.
- **May napiling footing:** ang posisyon at laki nito, ang bottom mat, ang mga starter bar, at ang mga bar mark na ginagamit nito.
- **Ilang bagay ang napili:** ilan ang member ng bawat uri, mga connection at footing, ang timbang ng steel nila, at ang {{ui:Copy}}, {{ui:Duplicate}} at {{ui:Delete}}.
- **Pag-paste:** ang nasa clipboard, at mga form para mag-paste ayon sa tinype na offset o sa grid intersection na pipiliin mo mula sa mga list.

Nagkakaroon ng bisa ang mga number field kapag pinindot mo ang {{key:Enter}} o umalis sa field. Bawat pagbabago ay isang hakbang na maaari mong i-undo.

## Ang report tab (ibaba)

- {{ui:Problems}}: lahat ng hindi maitayo ng DetailCraft o gusto nitong suriin mo, may {{ui:Select}} button sa bawat linya. Ipinapakita ng tab ang bilang sa loob ng bracket.
- {{ui:Bill of materials}}: mga piyesa, assembly, at bolt at anchor rod, kasama ang mga timbang at isang {{ui:Download CSV}} link. I-click ang isang part mark para piliin ang piyesang iyon.
- {{ui:Bending schedule}}: bawat bar mark sa bawat footing, kasama ang isang {{ui:Download CSV}} link.

Kapag nakatutok ang isang tab, gumagalaw sa pagitan ng mga tab ang {{key:Left}} at {{key:Right}}.

## Ang status bar

Ang bar sa ibaba ay may tatlong bahagi: ang grid intersection sa ilalim ng pointer habang naglalagay, ang pinakabagong mensahe (ang kakatapos lang na nangyari, o kung bakit tinanggihan ang isang bagay), at ang kabuuang bilang ng mga piyesa, bolt, timbang ng steel at timbang ng rebar. Kapag tila walang nangyari sa isang aksyon, basahin muna ang mensahe rito.

Nagsisimula sa tuldok (•) ang pamagat ng browser tab habang may mga pagbabago sa model na hindi mo pa na-save.

## Sa makitid na screen

Kapag mas makitid sa humigit-kumulang 760 pixel, nagpapatong-patong ang mga column: toolbar, view, status bar, {{ui:Properties}}, report tab, saka ang {{ui:Model}} panel sa huli. I-scroll ang page para maabot ang mga ito. Nakaayos ang DetailCraft para sa screen ng desktop o laptop; sa telepono, pwede itong tingnan pero hindi para sa detailing.
