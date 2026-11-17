---
title: Mga key at mouse action
summary: Bawat keyboard shortcut at bawat aksyon ng mouse, trackpad at touch sa DetailCraft, mula sa code.
keywords: keyboard, mga shortcut, mga hotkey, mga key, mouse, trackpad, touch, ctrl, command, talaan ng mga shortcut
from: 05a2dea0
---

Paano isinusulat ang mga key sa help na ito: [Mga key, mouse at trackpad](common:keys). Sa Mac, ang {{key:Mod}} ay ang Command key; sa iba, Ctrl.

## Mga tool

Gumagana ang mga ito kapag wala ang cursor sa text o number field.

| Key | Ginagawa |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:B}} | {{ui:Beam}} |
| {{key:C}} | {{ui:Column}} |
| {{key:R}} | {{ui:Brace}} |
| {{key:P}} | {{ui:Plate}} |
| {{key:F}} | {{ui:Footing}} |
| {{key:S}} | {{ui:Stair}} |
| {{key:M}} | Ilipat ang selection sa pamamagitan ng pagpili ng dalawang grid intersection ([Piliin sa pamamagitan ng window, ilipat, paikutin, i-mirror, baguhin nang marami](topic:select-and-change)) |
| {{key:Esc}} | I-drop ang selection window na hinihila, o ibalik ang mga parteng hinihila; kanselahin ang paglipat, ang unang punto ng beam, brace o plate, o paste; pindutin muli para bumalik sa {{ui:Select}}; sa {{ui:Select}}, alisin ang selection. Kapag bukas ang menu na {{ui:More}}, isara ito |
| {{key:Delete}} o {{key:Backspace}} | Burahin ang selection (lahat ng napili, sa iisang undo step) |

## File at edit

| Key | Ginagawa |
|---|---|
| {{key:Mod+S}} | I-save ang model (download). Gumagana kahit habang nagta-type sa field |
| {{key:Mod+O}} | Buksan ang model. Gumagana kahit habang nagta-type sa field |
| {{key:Mod+Z}} | I-undo (sa labas ng text field; sa loob nito, binabawi nito ang iyong pagta-type) |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | I-redo |

## Kopyahin at i-paste

Gumagana ang mga ito kapag wala ang cursor sa text o number field (doon, kinokopya, pina-paste at pinipili ang iyong text gaya ng dati). Bawat paste, cut, duplicate o delete ay isang undo step. Higit pa: [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

| Key | Ginagawa |
|---|---|
| {{key:Mod+C}} | {{ui:Copy}} ng mga napiling member at footing (kasama ang kanilang mga butas, cope at koneksyon) |
| {{key:Mod+X}} | {{ui:Cut}}: kopyahin ang selection, saka burahin ito |
| {{key:Mod+V}} | {{ui:Paste}}: sumusunod sa pointer ang kopya; i-click ang grid intersection para dito |
| {{key:Mod+Shift+V}} | {{ui:Paste in place}}: sa mga coordinate kung saan ito kinopya |
| {{key:Mod+D}} | {{ui:Duplicate}}: agad na kopya, inilipat ng offset sa [mga setting ng DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Select all}}: bawat member, koneksyon at footing |
| {{key:Esc}} | {{ui:Select none}} |

Kung may napili kang text sa pahina (halimbawa sa report table) at walang napili sa model, kokopyahin ng {{key:Mod+C}} ang text, gaya ng dati.

{{ui:New}}, {{ui:Sample}} at ang mga export ay walang key; gamitin ang toolbar.

Walang gagawin ang alinman sa mga key na ito habang may bukas na dialog (ang preview ng shop drawing o isang tanong).

## Mga field at panel

| Key | Ginagawa |
|---|---|
| {{key:Enter}} o {{key:Tab}} | Ilapat ang tinype na value (bawat pagbabago ay isang undo step) |
| {{key:Enter}} sa field ng {{ui:Grids}}, {{ui:Levels}}, {{ui:Custom profile}}, butas o cope | Pareho sa pagpindot sa button ng form na iyon |
| {{key:Left}} {{key:Right}} | Lumipat sa pagitan ng mga tab na {{ui:Problems}}, {{ui:Bill of materials}} at {{ui:Bending schedule}} kapag may focus ang isang tab |
| {{key:Esc}} | Isara ang preview ng shop drawing o dialog ng tanong (pareho sa {{ui:Cancel}}) |

## Screen at help

| Key | Ginagawa |
|---|---|
| {{key:Ctrl+Shift+F}} | Ikutin ang normal, full screen, at full screen na nakatago ang mga bar. Control sa bawat computer, kasama ang Mac |
| {{key:Mod+,}} | Buksan ang {{ui:Settings}} ([Mga setting ng DetailCraft](topic:settings)) |
| {{key:Esc}} | Lumabas sa full screen |
| {{key:F1}} | Buksan ang help na ito |

## Mouse

| Aksyon | Sa 3D | Sa Plan at Elevation |
|---|---|---|
| Click | Pumili ng parte, o ilagay sa pinakamalapit na intersection kapag may nakabukas na placing tool (o i-paste doon habang nagpe-paste) | Pareho |
| {{key:Shift}}, {{key:Ctrl}} o {{key:Mod}} at click | Idagdag ang parte sa selection, o alisin ito | Pareho |
| Pindutin ang napiling parte at i-drag | Ilipat ang selection sa buong level; kapag hawak ang {{key:Mod}}, pataas at pababa | Ilipat ang selection (sa elevation: kasama nito, at pataas at pababa) |
| I-drag gamit ang kaliwang button | Paikutin ang model | Gamit ang {{ui:Select}}: selection window (pakanan: nasa loob lang; pakaliwa: nakadikit). Habang naglalagay: pan |
| {{key:Shift}} at i-drag gamit ang kaliwang button | Gamit ang {{ui:Select}}: selection window, idinagdag sa selection. Habang naglalagay: pan | Gamit ang {{ui:Select}}: selection window, idinagdag sa selection |
| {{key:Ctrl}} o {{key:Mod}} at i-drag gamit ang kaliwang button | Pan | Walang nangyayari |
| I-drag gamit ang kanang button | Pan | Pan |
| Wheel | Mag-zoom patungo sa gitna ng view | Zoom |
| I-drag gamit ang gitnang button | Zoom | Gamit ang {{ui:Select}}: pan. Kung hindi, zoom |
| I-drop ang file na `.detailcraft.json` sa app | Buksan ito | Buksan ito |

Bibilangin lang ang click kung mas mababa sa humigit-kumulang 5 pixel ang galaw ng pointer sa pagitan ng press at release; ang mas mahabang galaw ay drag.

## Trackpad

| Aksyon | Ginagawa |
|---|---|
| Two-finger swipe pataas o pababa, o pinch | Zoom |
| Press at drag | Paikutin (3D) o pan (Plan at Elevation) |
| {{key:Shift}} at press at drag | Pan sa 3D |
| Two-finger click | Right-click (walang menu sa view) |

## Touch

Sa tablet o touch screen:

| Aksyon | Ginagawa |
|---|---|
| Tap | Pumili ng parte, o ilagay sa pinakamalapit na grid intersection kapag may nakabukas na placing tool (ang tap sa loob ng humigit-kumulang isang lapad ng daliri nito ay binibilang) |
| Long press sa parte | Idagdag ito sa selection, o alisin (ang ginagawa ng {{key:Shift}}+click gamit ang mouse) |
| Isang daliri sa napiling parte, saka i-drag | Ilipat ang selection, dumidikit sa grid intersection |
| Isang daliri sa ibang bahagi | Paikutin ang model (3D) o pan (Plan at Elevation) |
| Dalawang daliri | Pinch para mag-zoom, sabay-galaw para mag-pan |

Mas malaki ang mga button, listahan at field kapag touch lang ang screen. Kailangan ng mouse ang mga selection window; gamit ang daliri, tap at long-press.

## Mga key na inaangkin ng browser

May ilang shortcut na pag-aari ng browser at hindi ito magagamit ng anumang pahina, halimbawa {{key:Mod+W}} (isara ang tab), {{key:Mod+T}} (bagong tab) at {{key:Mod+N}} (bagong window). Kung binubuksan ng {{key:Mod+Y}} ang history ng browser sa halip na mag-redo, gamitin ang {{key:Mod+Shift+Z}}.

Naaabot lang ng mga shortcut ang DetailCraft kapag may keyboard ang pahina. Kung walang nangyayari sa isang key, o kumikilos ang browser dito, i-click muna ang walang lamang bahagi ng window ng DetailCraft (halimbawa pagkatapos mag-type sa address bar).

## Nasaan ang Move

Walang command na Move: pumili ng parte at i-drag ito sa buong level (pindutin ang {{key:Mod}} para i-drag pataas at pababa), o i-edit ang {{ui:Start}} at {{ui:End}} nito sa {{ui:Properties}}.
