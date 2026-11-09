---
title: Ano ang bago sa 0.8 at 0.8.1
summary: Isang erection movie mula sa load chart ng crane, isang connection autopilot, isang rebar congestion map, mga foundation check, mga panel ng timber at light-gauge framing, mga constructability at weld access check, supplier stock, ano ang unang masisira, live re-solve, mas maraming concrete check at ang mga ayos ng 0.8.1.
keywords: ano ang bago, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, erection, crane, load chart, movie, autopilot, connections, rebar, congestion, foundation, footing, mat, settlement, framing, timber, light-gauge, cut list, constructability, weld access, supplier, stock, lead time, what breaks first, live, concrete, seismic, slab, languages, assistant
from: 6e33e052
---

Ito ang mga pagbabagong naganap sa DetailCraft 0.8 (1 Nobyembre 2026) at 0.8.1 (2 Nobyembre 2026), kumpara sa 0.7. Sinuri ng 0.7 ang mga steel member; sa 0.8, pinaplano na ang mga lift, iminumungkahi ang mga connection, sinusuri ang mga pundasyon at ang rebar, at nagfa-frame ito ng timber at light-gauge na pader, sahig at bubong.

## Bago

### Erection

- **Erection plan at movie.** Sa {{ui:Erection}} tab, ilarawan ang isang crane (kung saan ito nakatayo, ang pinakamataas nitong hook, ang rigging na wala sa chart) at itype ang mga hilera ng load chart nito. Itinataas ng DetailCraft ang model isang assembly sa bawat pagkakataon, ayon sa phase order at tier by tier, at sinusuri ang bawat lift laban sa chart sa radius nito at sa margin na itinakda mo. Ang {{ui:Save movie}} ay nagsusulat ng isang HTML file na tumatakbo offline sa anumang browser, kahit sa telepono. Ang mga lift na lampas sa chart, lagpas dito o masyadong mataas ay nasa {{ui:Problems}}. Plano ito mula sa mga numero mo, hindi lift plan. Tingnan ang [Erection plan at movie](topic:erection-movie).

### Connections

- **Connection autopilot.** Tinitingnan ng {{ui:Autopilot}} tab ang bawat joint na walang connection at nagmumungkahi ng isa mula sa mga hugis: base plate, shear tab, end plate para sa mga beam na minarkahan mong moment beam, splice at gusset. Magbigay ng uniform load o isang end shear, at susunod ang bilang ng bolt sa design strength ng bolt. Idinadagdag ng {{ui:Add them all}} ang mga mungkahi bilang isang undo step. Mga panimulang halaga ang mga ito na dapat suriin, hindi connection design.
- **Constructability checks.** {{ui:Problems}} para sa bolt na hindi maabot ng wrench, mga bolt na masyadong magkalapit para sa socket, fillet weld na lampas sa limitasyon ng laki nila, at hollow section na nakakulong ang tubig. Bago ang weld access: ang all-round fillet weld na hindi maabot ng torch ng welder ay nakalista kasama ang piyesang nakaharang at ang bahagi ng weld na apektado. Tingnan ang [Constructability checks](topic:constructability).

### Mga foundation at rebar

- **Foundation checks.** Sinusuri ng {{ui:Foundation}} tab ang mga footing, combined footing at mat sa lupang inilarawan mo: bearing, sliding at overturning mula sa service load; flexure, shear, punching, development at minimum steel mula sa factored load (ACI 318-19). Sinusuri ang column na malapit sa gilid o sulok gamit ang seksyong pinutol ng gilid ng footing. Galing sa modulus ng lupa ang settlement, nilulutas ang flexible mat sa mga spring mula sa subgrade modulus, at may sariling panel ang pile group at retaining wall. Maaaring itype ang column load o kunin mula sa {{ui:Analysis}}. Tingnan ang [Foundation checks](topic:foundation-checks).
- **Rebar congestion map.** Gumuguhit ang {{ui:Congestion}} tab ng heat map ng bawat footing kung titingnan mula sa itaas: kung saan kulang ang puwang ng mga bar para makababa ang concrete, laban sa clear-spacing rule at, kung ibibigay mo, ang pinakamalaking aggregate at ulo ng vibrator. Tingnan ang [Rebar congestion map](topic:rebar-congestion).

### Framing at supply

- **Timber at light-gauge framing.** Ang {{ui:Framing}} tab ay nagfa-frame ng wall, floor at roof panel na may bawat piraso, cut list, ang stock na bibilhin at shop drawing na nasa tamang sukat. Inilalagay ng {{ui:Place as members}} ang mga piraso sa model, at nagse-save ang {{ui:PDF sheets}} ng isang sheet para sa bawat panel. Ikaw ang nagtatakda ng laki, spacing at header: hindi tinitiyak ng DetailCraft na kakayanin ng mga ito ang load. Tingnan ang [Timber at light-gauge framing panel](topic:framing-panels).
- **Supplier stock at lead time.** Binabasa ng {{ui:Supply}} tab ang stock list ng isang supplier (CSV) at ipinapakita, para sa bawat section na binibili ng cut list, kung sapat ang stock at gaano katagal ang paghihintay. Nasa {{ui:Problems}} ang mga kulang at late na section. Walang inoorder. Tingnan ang [Supplier stock at lead time](topic:supplier-stock).

### Analysis at design

- **Ano ang unang masisira?** Sa {{ui:Analysis}} tab, hinahanap ng button ang strength combination na nangingibabaw, ang pinakamahinang member, kung gaano kalaki ang maaaring tumaas ng mga load bago maabot ng unang member ang limitasyon nito, at ang pinakamahinang end plate o shear tab kung saan alam ang shear strength ng mga bolt nito. Kailangan muna ng mga combination at design code. Hindi tinitingnan ang bearing, block shear, weld at prying. Maaari ring itanong ito ng konektadong assistant mo.
- **Live.** Lagyan ng tsek ang {{ui:Live: solve again after each edit}} at muling lulutasin ang frame pagkatapos ng bawat edit.
- **Concrete, at higit pa.** Dinidisenyo ang isang payat na column sa non-sway frame para sa pinalaking moment nito (ACI 318-19 6.6.4.5). Maaaring kunin ang seismic period mula sa analysis gamit ang paraan ni Rayleigh. Ang slab na gawa sa mga plato ay nakakakuha ng steel na kailangan ng bawat layer mula sa moments nito, at ang one-way shear. Tingnan ang [Suriin ang concrete member at gumawa ng seismic load](topic:concrete-and-seismic).
- **Para sa engineer na susuri.** Ang resulta ng foundation, concrete at What breaks first ay gabay lamang. Hindi pa nagagawa ang wind load.

### Sa bawat app

- **Mga wika.** Nasa 54 na wika ang help. Ang mga higit sa English ay machine draft hanggang mabasa ng native speaker; sampu ang bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek).
- **Mga toolbar row.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ang pumipili ng wrap, 2 row o 1 row. Ang bar na kasya na ay nananatili; ang iba ay nag-i-scroll pahalang.
- **Property grid.** Ginagamit ng mga field ng footing ang shared grid: mga collapsible na kategorya at compact na density. Gumagana pa rin ang typed arithmetic gaya ng 2*450.
- **Mga input device.** Maaaring kontrolin ng trackpad, pen, 3D mouse, controller at MIDI ang mga app. Tingnan ang [Mag-navigate sa 3D](topic:navigate-3d).
- **Problems panel.** Lumalabas sa parehong {{ui:Problems}} panel ang mga babala ng mga bagong check sa itaas, gaya ng dati.
- **Ikonekta ang AI mo.** Gumagana sa lahat ng walong app ang sarili mong assistant, na nakakonekta sa pamamagitan ng CadCraft Studio, at nakikita lang nito ang pinayagan mo. Darating pa ang one-click connect, ang hosted connector at ang sarili mong API key sa Studio. Tingnan ang [Gamitin ang DetailCraft kasama ang AI assistant](topic:use-with-ai-assistants).

## Naayos sa 0.8.1

- **Mga wika sa Studio.** Maaaring magpalit ng wika habang tumatakbo ang Studio at ang mga packed na edisyon; dati, English lang. Hindi pa ito nasusubukan sa lahat ng platform: sabihin sa amin kung hindi nagbabago ang wika.
- **Crossing-window select.** Dala ng 0.8.1 installer ang tamang pag-select-by-window na gawi na nasa 0.8 web build na; hindi ito nasa mas lumang installer.
- **Tablet sa portrait.** Napupunta sa canvas ang sobrang taas ng grid, at nagsisimula ang layout ng sheet sa 760 px o mas mababa.

## Wala pa sa bersyon na ito

- **Ipadala ang NC sa makina** ay hindi pa inilalabas.
- **Wind load** para sa concrete ay hindi pa nagagawa, at ang concrete at foundation check ay para suriin ng engineer.
- **Code signing.** Hindi pa naka-sign ang mga installer ng Windows at ang macOS .dmg, kaya maaaring magbabala ang Windows, at hihingi ang macOS ng right-click, saka Open.

Nasa [Ano ang bago sa 0.7](topic:whats-new-0-7) ang mga naunang pagbabago.
