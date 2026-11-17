---
title: Gumalaw sa paligid ng 3D view
summary: Paikutin, i-pan at i-zoom gamit ang mouse, trackpad o touch screen, at kailan gagamitin ang Plan at Elevation sa halip.
keywords: orbit, rotate, pan, zoom, mag-navigate, view, camera, trackpad, touch, plan, elevation, fit, mouse
from: 02c9c7b9
---

Tatlo ang mode ng view, pinipili sa view bar sa itaas nito: {{ui:3D}}, {{ui:Plan}} at {{ui:Elevation}}. Iba ang ginagawa ng mga button ng mouse sa 3D kaysa sa Plan at Elevation, kaya basahin ang parehong talahanayan.

## Sa 3D

:::mouse
| Para sa | Gawin ito |
|---|---|
| Paikutin ang model | I-drag gamit ang kaliwang button |
| I-pan | I-drag gamit ang kanang button, o hawakan ang {{key:Shift}} at i-drag gamit ang kaliwang button |
| Mag-zoom | Ikutin ang wheel, o i-drag pataas at pababa gamit ang gitnang button (nakapindot ang wheel) |
| Pumili ng parte | I-click ito (click na gumagalaw nang mas mababa sa ilang pixel) |
| Tingnan ang buong model | Ang fit button sa dulong kanan ng view bar |
:::

:::touch
| Para sa | Gawin ito |
|---|---|
| Paikutin ang model | I-drag gamit ang isang daliri |
| I-pan | I-drag gamit ang dalawang daliri |
| Mag-zoom | Pinch gamit ang dalawang daliri |
| Pumili ng parte | I-tap ito |
| Tingnan ang buong model | Ang fit button sa dulong kanan ng view bar |
:::

Ang view cube sa kanang itaas (sa ilalim ng view bar) ay umiikot kasama ng model: i-click ang isang face, edge o corner para tingnan mula roon, i-drag ito para paikutin, o i-click ang house button nito para bumalik sa panimula. Tingnan ang [Ang view cube](topic:view-cube).

Umiikot ang model sa gitna ng view, at ang wheel ay nag-zoom patungo sa gitna ng view, hindi sa pointer. Para tingnan nang malapitan ang isang sulok, i-pan muna ito sa gitna, saka mag-zoom.

## Sa Plan at Elevation

Direktang tinitingnan ng mga view na ito ang model at hindi maaaring paikutin.

:::mouse
| Para sa | Gawin ito |
|---|---|
| I-pan | I-drag gamit ang kaliwa o kanang button |
| Mag-zoom | Ikutin ang wheel, o i-drag pataas at pababa gamit ang gitnang button |
| Pumili ng parte | I-click ito |
:::

:::touch
| Para sa | Gawin ito |
|---|---|
| I-pan | I-drag gamit ang isang daliri |
| Mag-zoom | Pinch gamit ang dalawang daliri (nagpa-pan din ang pag-drag gamit ang dalawang daliri) |
| Pumili ng parte | I-tap ito |
:::

## Sa Mac trackpad

:::mac
- **Zoom:** mag-swipe pataas o pababa gamit ang dalawang daliri, o mag-pinch. Parehong nagiging zoom sa view.
- **Turn (3D):** pindutin ang trackpad at i-drag gamit ang isang daliri. Kung gumagamit ka ng tap to click, gumagana rin ang double-tap at drag kapag naka-on ang dragging sa **System Settings, Accessibility, Pointer Control, Trackpad Options**.
- **Pan (3D):** hawakan ang {{key:Shift}} at i-drag. Gumagana rin ang pan kapag hawak ang {{key:Ctrl}} o {{key:Mod}} habang nag-di-drag. Ang two-finger click ay right-click, pero mahirap mag-drag gamit ito sa trackpad.
- **Pan (Plan at Elevation):** i-drag lang.
- Walang gitnang button ang Magic Mouse: gamitin ang pag-drag gamit ang {{key:Shift}} para mag-pan, at swipe sa ibabaw nito para mag-zoom.
:::

Higit pa tungkol sa right-click at pag-pan nang walang mouse: [Mga key, mouse at trackpad](common:keys).

## Ginagawang madali ng Plan at Elevation ang paglalagay

Sa {{ui:3D}}, maaaring magkapatong sa screen ang mga intersection na nasa magkaibang level, at napupunta ang click sa pinakamalapit na tuldok. Sa {{ui:Plan}} at {{ui:Elevation}}, ang mga tuldok lang ng level o grid line na tinitingnan mo ang mapipili.

1. Piliin ang {{ui:Plan}}, saka pumili ng level sa listahan sa tabi ng mga button. Tinitingnan ng view pababa sa level na iyon; anumang mas mataas sa 1.5 m doon ay tinatabas.
2. O piliin ang {{ui:Elevation}}, saka pumili ng may letrang grid line ("Grid A", "Grid B" …). Direktang tinitingnan ng view ang linyang iyon; tanging steel sa loob ng 1 m nito ang ipinapakita.

Sa mga may letrang grid line lang ang elevation. Para magtrabaho sa linya ng mga numerong grid (frame mula A hanggang B), gamitin ang {{ui:3D}}, o maglagay sa pamamagitan ng pag-type sa form na {{ui:Add by grid}}. Tingnan ang [Maglagay ng column, beam at brace](topic:place-members#place-by-grid-without-clicking).

## Pagpili

- I-click ang parte para piliin ito. Nagiging kulay ng highlight ito at ipinapakita ito ng panel na {{ui:Properties}}.
- I-click ang bakanteng espasyo, o pindutin ang {{key:Esc}}, para alisin ang selection.
- Nananalo ang steel laban sa concrete: ang click sa column sa loob ng see-through footing ay pumipili ng column. I-click ang footing palayo sa column, o sa isa sa mga bar nito, para piliin ang footing.
- Ang pag-click sa bolt o end plate ay pumipili ng koneksyon nito.
- Sa Plan at Elevation, hindi maaaring i-click ang mga parteng tinabas.
- Hawakan ang {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) at i-click para idagdag o alisin ang parte sa selection; pinipili ng {{key:Mod+A}} ang lahat. Wala pang selection window (i-drag ang kahon). Ang maaari mong gawin sa maraming parte: [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

Maaari ka ring pumili mula sa mga listahan: i-click ang marka sa {{ui:Part marks}} sa kaliwa, ang part mark sa tab na {{ui:Bill of materials}}, o ang {{ui:Select}} sa tabi ng linya sa {{ui:Problems}}.

## Kung mukhang mali ang view

- Nawala ang model? Piliin ang fit button.
- Blangko o kulay abo ang view na may mensahe tungkol sa WebGL: tingnan ang [Paglutas ng problema](topic:troubleshooting#the-3d-view-is-missing).
- Gumagana pa rin ang lahat nang walang 3D view maliban sa pag-click doon: tumatakbo ang mga panel, report at export, at naglalagay ang {{ui:Add by grid}} ng mga member sa pamamagitan ng pag-type.
