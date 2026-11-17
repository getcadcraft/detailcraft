---
title: Mga menu, key at mouse
summary: Pumili ng istilo ng menu na tugma sa paraan ng iyong pagtatrabaho, bigyan ang anumang command ng sarili mong key, ilipat ang mga command sa pagitan ng mga ribbon tab, at itakda kung ano ang ginagawa ng wheel at ng mga button ng mouse.
keywords: istilo ng menu, menus, ribbon, toolbar, command line, keyboard shortcuts, hotkeys, keys, customize, remap, rebind, mouse, wheel, invert, direksyon ng zoom, middle button, right button, pan, orbit, export, import, paglipat, pamilyar, drafting classic, steel ribbon
from: 4132c6e5
---

Pareho ang mga command ng DetailCraft kahit paano mo maabot ang mga ito. Ang **istilo ng menu** ay nagpapasya lang kung saan sila nakalagay sa screen, kung ano ang tawag sa mga ito roon, at aling mga key ang nagpapatakbo sa mga ito. Pumili sa {{ui:Settings}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}}; agad ang pagbabago, at naaalala ito ng browser na ito.

## Ang tatlong istilo

| Istilo | Ang makukuha mo |
|---|---|
| {{ui:DetailCraft}} | Sariling toolbar ng DetailCraft (File, Ilagay, Connect, Edit, Output) at ang mga single-letter key nito: {{key:V}} piliin, {{key:B}} beam, {{key:C}} column, {{key:R}} brace, {{key:P}} plate, {{key:F}} footing, {{key:S}} stair. Ang panimula. |
| {{ui:Drafting classic}} | Para sa mga taong nagta-type ng command: isang maliit na ribbon ({{ui:Home}}, {{ui:View}}, {{ui:Output}}) at isang command line. I-type ang BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (I-undo), ZOOM, PLAN, 3D, DRAWINGS, NC o HELP at pindutin ang {{key:Enter}}; ang {{key:Enter}} sa wala ay inuulit ang huling command, at nililinis ito ng {{key:Esc}}. Mag-type kahit saan at mapupunta ang mga letra sa command line. Ang gitnang button ay nagpa-pan; sa 3D, {{key:Shift}} at ang gitnang button ang nag-oorbit. |
| {{ui:Steel ribbon}} | Mga tab ayon sa paraan ng pag-aayos ng mga steel detailing program sa mga ito: {{ui:Modeling}} (members, concrete, stair), {{ui:Detailing}} (mga koneksyon), {{ui:Edit}}, {{ui:Drawings}} (mga drawing at report), {{ui:Fabrication}} (mga NC file, IFC) at {{ui:View}}, kasama ang menu na {{ui:File}} at mga mabilis na button sa kanan. Nananatili ang mga single-letter key. Ang gitnang button ay nagpa-pan; sa 3D, ang kaliwang button ang nag-oorbit. |

Pinapanatili ng bawat istilo ang {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} at {{key:Mod+A}}. Hawak din ng mga ribbon ang {{ui:3D}}, {{ui:Plan}}, {{ui:Elevation}} at {{ui:Fit}} ng view bar.

:::tip
Ang key na pag-aari ng sariling layout ng DetailCraft pero ibinigay ng iyong istilo sa ibang command ay walang gagawin, at sinasabi ng status line kung saan napunta ang command nito ("Sa My Steel ribbon, Column ay Ctrl+Alt+C"). Laging nananatili ang kahulugan ng {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} at mga arrow, at habang kalahating nailalagay ang member o may kopyang sumusunod sa pointer, sa DetailCraft ang mga letra.
:::

## Gawin itong sa iyo

1. Piliin ang istilong pinakamalapit sa gusto mo, saka i-click ang {{ui:Customize…}}.
2. Sa {{ui:Keys and menus}}, hanapin ang command (nakakatulong ang search box). I-click ang {{ui:Add a key}} at pindutin ang key, o dalawang key sunod-sunod para sa dalawang-letrang key. I-click ang key para alisin ito.
3. Sa ribbon, inililipat ng {{ui:Where it sits}} ang command sa ibang tab at panel, sa menu na {{ui:File}}, o sa {{ui:Keys only}}.
4. Sa {{ui:Mouse}}, itakda ang wheel, ang mga button na nagpa-pan sa plan at elevation, at kung ano ang ginagawa ng bawat button sa 3D view.
5. Bigyan ito ng pangalan at i-click ang {{ui:Save}}.

Ang pag-save ng built-in na istilo ay gumagawa ng sarili mong kopya ("My Steel ribbon"); hindi nagbabago ang built-in. Ang key na ibinigay sa dalawang command ay ipinapakita sa pula at kailangang ayusin bago mo ito ma-save.

## Mouse

- **Mouse wheel**: {{ui:Scroll up zooms in}} (ang panimula) o {{ui:Scroll up zooms out}}, at kung gaano kabilis. Palaging nag-zoom ang pinch ng trackpad ayon sa galaw ng iyong mga daliri.
- **I-pan ang plan at elevation gamit ang**: ang gitnang button, ang kanang button, o pareho. Sa Select tool, ang kaliwang button ay palaging gumuguhit ng selection window.
- **I-drag sa 3D view**: {{ui:Each view's own}} ang nagpapanatili sa mga button ng DetailCraft (kaliwa nag-oorbit, gitna nag-zoom, kanan nagpa-pan). O itakda ang bawat button na mag-orbit, mag-pan, mag-zoom o walang gagawin; ang {{key:Shift}} kasama ang button na nag-oorbit o nagpa-pan ay nagpapalitan sa dalawa.

## Dalhin mo ito

{{ui:Export}} ay nagse-save ng istilong ginagamit bilang maliit na `.ccinput.json` file; {{ui:Import…}} ay nagdadagdag nito, mula sa ibang computer o katrabaho. Ang inangkat na file ay maaari lamang tumukoy sa sariling command ng DetailCraft: anumang iba pa roon ay tinatanggal at binibilang sa status line. Binubura ng {{ui:Delete this style}} ang isa sa sarili mo.

:::note
Nananatili sa browser na ito ang mga setting na ito. Ang {{ui:Use this style in every app}} sa ilalim ng mga style card ay nagpapabukas sa bawat app sa katumbas nitong istilo (sariling toolbar nito, isang ribbon o Drafting classic), kasama ang mga pagbabagong ginawa mo sa bawat app. Walang menu-bar na istilo ang DetailCraft: kapag pinili ang menu bar ng ibang app para sa lahat ng app, pinananatili ng DetailCraft ang sarili nitong toolbar.
:::

Kaugnay: [Keyboard at mouse](topic:keyboard) · [Mga setting ng DetailCraft](topic:settings) · [Lumilipat mula sa ibang detailing software](topic:coming-from)
