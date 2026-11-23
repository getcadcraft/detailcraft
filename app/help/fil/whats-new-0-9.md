---
title: Ano ang bago sa 0.9 (mas naunang bersyon)
summary: Mga laki ng UK Blue Book steel at unequal angles, shop drawing para sa bawat piyesa sa isang PDF set, My profiles para sa custom section, P-Delta at natural frequency, ASCE 7 wind load, seismic site at combination, at live cursor kasama ang Follow.
keywords: whats new 0.9, naunang release, ano ang bago, what's new, release notes, changelog, 0.9, uk steel, blue book, ub, uc, pfc, shs, rhs, chs, unequal angle, shop drawing, shop drawings, sheet set, part mark, pdf, my profiles, custom profile, p-delta, second order, natural frequency, finite elements, modal mass, wind load, asce 7, seismic, site class, usgs, load combination, lrfd, asd, live, cursors, follow, people, tooltips, ano ang bago, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, erection, crane, load chart, movie, autopilot, connections, rebar, congestion, foundation, footing, mat, settlement, framing, timber, light-gauge, cut list, constructability, weld access, supplier, stock, lead time, what breaks first, live, concrete, seismic, slab, mga wika, assistant
from: ab0c7f05
---

Ito ang mga nagbago sa DetailCraft 0.9, kumpara sa 0.8.1. Dala ng 0.9 ang mga laki ng UK steel, isang shop drawing para sa bawat piyesa nang sabay-sabay, mas malaking {{ui:Analysis}} tab para sa mga frame, at tanaw sa cursor ng isa't isa kapag nagtutulungan kayo.

## Bago

### UK steel at shop drawings

- **Mga laki ng UK steel.** Ang mga listahan ng profile ay may kasamang 976 na laki mula sa Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS at RHS, na may hiwalay na cold-formed hollow sections (nagsisimula ang mga pangalan nila sa CF). Isinusulat ang mga pangalan na nauuna ang pamilya, tulad ng UB305x165x40 o SHS100x100x5.0, at gumagana rin ang pag-type nito sa paraang ginagamit sa mga drawing: 305x165x40 UB, L100x100x10, SHS100x5. Tingnan ang [Profile catalog](topic:profile-catalog).
- **Unequal angles.** Pinananatili ng UEA angles ang parehong legs sa pag-import at pag-export ng IFC at sa mga NC file, at binabaligtad ng mirror ang piyesa mula dulo hanggang dulo.
- **Bawat shop drawing nang sabay.** Piliin ang {{ui:Shop drawing}} sa {{ui:Output}} group nang walang napiling piyesa. Inililista ng window ang bawat part mark, ipinapakita ang preview ng alinman sa mga ito, at ang {{ui:I-download lahat}} ay nagsa-save ng isang PDF na may isang pahina bawat mark, na may titulong "Sheet 3 of 42". Sine-save ng {{ui:I-download ang PDF}} ang sheet na tinitingnan mo. May sheet na rin ngayon ang mga channel, angle at hollow section. Tingnan ang [Make shop drawings](topic:shop-drawings).
- **My profiles.** Maaari nang itago ang custom profile para sa bawat bagong model. Sa Custom profile form, panatilihing naka-tick ang {{ui:Ilagay sa My profiles}}; may {{ui:Keep}}, {{ui:Use here}} at {{ui:Remove}} ang listahan ng {{ui:My profiles}} sa ilalim nito. Nananatili ang listahan sa browser na ito (hanggang 200), hindi sa iyong account. Tingnan ang [Plates and profiles](topic:plates-and-profiles).

### Analysis

- **Pangalawang order (P-Delta).** I-tick ang {{ui:Pangalawang order (P-Delta)}} sa tabi ng Run sa {{ui:Analysis}} tab at gagana ang axial forces sa nabaluktot na frame. Mananatiling first order ang mga plato at rigid floor, na may babala. Tingnan ang [Forces, reactions and deflections](topic:frame-analysis).
- **Natural frequency.** Hinahanap ng block na {{ui:Finite elements: natural frequencies}} sa ilalim ng mga resulta ang pinakamababang mode ng parehong model, kasama ang period at effective modal mass, at ipinapakita ang isang mode sa model. Tingnan ang [Forces, reactions and deflections](topic:frame-analysis).
- **Wind load at seismic site.** Tatlong bagong block sa {{ui:Analysis}} tab: {{ui:Wind load (ASCE 7 directional procedure)}}, {{ui:Seismic site at system (ASCE 7)}} at {{ui:ASCE 7 load combination}}. Tingnan ang [Wind, seismic site and ASCE 7 combinations](topic:wind-seismic-combinations).

### Sama-samang pagtatrabaho

- **Cursor at pangalan.** Sa isang Live session, iginuguhit sa model ang pointer ng bawat tao kasama ang kanyang pangalan at kulay, at may kahon ang anumang napili nila.
- **Sundan ang isang tao.** Buksan ang {{ui:Mga tao}} sa session at piliin ang {{ui:Sundan}} sa isang pangalan; gumagalaw ang view mo kasabay ng kanila. Maaaring piliin ng host ang {{ui:Sabihin sa lahat na sundan ako}}. Tingnan ang [Follow a person in a Live session](topic:follow-in-live).

### Sa bawat app

- Ang mga tooltip ay Bootstrap tooltips, may close button ang start tip card, nag-i-scroll sa gilid ang mga tab strip kapag hindi kasya, at ang pangalan sa browser tab ay ang bukas na dokumento na sinusundan ng DetailCraft at CadCraft.

## Naayos

- Nawawala ang custom profile kapag nagsimula ka ng bagong model.
- Nawawala sa set ng shop drawing ang mga channel, angle at hollow section.

## Mga tapat na limitasyon

- Ang mga block ng wind, seismic at finite element ay mga tulong sa pag-check. Ang iyong engineer ang nagre-review ng mga resulta; hindi ito code check. Sinubukan ang USGS lookup sa stand-in, hindi sa live na serbisyo.
- Sinuri ang finite elements at P-Delta laban sa mano-manong at closed-form na sagot, hindi sa totoong gusali. Hindi pa nagagawa ang buckling analysis.
- Wala pang UK fabricator na sumubok ng mga laki ng UK, at hindi pa napatakbo sa makina ang mga NC file para sa unequal angles.
- PDF lamang ang set ng shop drawing.
- Ang mga wikang bukod sa English ay machine draft pa.
- Hindi naka-code sign ang mga Windows installer (More info, pagkatapos Run anyway); hindi notarized ang macOS disk image (right-click, pagkatapos Open).

Nasa mga tala ng 0.8 at 0.8.1 sa ibaba ng pahinang ito ang mga naunang pagbabago.

## Mas naunang: 0.8 at 0.8.1

Ito ang mga nagbago sa DetailCraft 0.8 (1 Nobyembre 2026) at 0.8.1 (2 Nobyembre 2026), kumpara sa 0.7. Tiningnan ng 0.7 ang mga steel member; ang 0.8 ay nagpaplano ng mga lift, nagmumungkahi ng mga connection, nagche-check ng mga pundasyon at rebar, at bumubuo ng frame para sa timber at light-gauge na pader, sahig at bubong.

### Bago

**Erection**

- **Erection plan at movie.** Sa {{ui:Erection}} tab, ilarawan ang isang crane (kung saan ito nakatayo, ang pinakamataas nitong hook, ang rigging na wala sa chart) at i-type ang mga row ng load chart nito. Ginagalaw ng DetailCraft ang model isang assembly sa isang pagkakataon, ayon sa phase order at tier by tier, at chine-check ang bawat lift laban sa chart sa radius nito at laban sa margin na itinakda mo. Ang {{ui:I-save ang movie}} ay nagsusulat ng isang HTML file na tumatakbo offline sa anumang browser, pati sa telepono. Ang mga lift na lampas sa chart, lampas dito o masyadong mataas ay nasa {{ui:Mga problema}}. Plano ito mula sa iyong mga numero, hindi lift plan. Tingnan ang [Erection plan and movie](topic:erection-movie).

**Connections**

- **Connection autopilot.** Tinitingnan ng {{ui:Autopilot}} tab ang bawat joint na walang connection at nagmumungkahi ng isa mula sa mga shape: base plates, shear tabs, end plates para sa mga beam na minarkahan mong moment beams, splices at gussets. Magbigay ng uniform load o isang end shear at susunod ang bilang ng bolt sa design strength ng bolt. Idinadagdag ng {{ui:Idagdag lahat}} ang mga mungkahi bilang isang undo step. Mga panimulang halaga ang mga ito na susuriin, hindi connection design.
- **Constructability checks.** {{ui:Mga problema}} para sa bolt na hindi maabot ng wrench, mga bolt na masyadong malapit para sa socket, fillet weld na lampas sa mga limitasyon ng laki nito, at hollow section na nakakakulong ng tubig. Bago ang weld access: ang all-round fillet weld na hindi maabot ng torch ng welder ay nakalista kasama ang piyesang humaharang at ang bahagi ng weld na apektado. Tingnan ang [Constructability checks](topic:constructability).

**Mga pundasyon at rebar**

- **Foundation checks.** Chine-check ng {{ui:Foundation}} tab ang footings, combined footings at mats sa lupang iyong ilalarawan: bearing, sliding at overturning mula sa service loads; flexure, shear, punching, development at minimum steel mula sa factored loads (ACI 318-19). Chine-check ang column na malapit sa gilid o sulok gamit ang section na pinutol ng gilid ng footing. Nagmumula ang settlement sa modulus ng lupa, nilulutas ang flexible mat sa springs mula sa subgrade modulus, at may sariling panel ang pile group at retaining wall. Maaaring i-type ang column loads o kunin mula sa {{ui:Analysis}}. Tingnan ang [Foundation checks](topic:foundation-checks).
- **Rebar congestion map.** Ang {{ui:Congestion}} tab ay gumuguhit ng heat map ng bawat footing na tinitingnan mula sa itaas: kung saan kulang ang espasyo ng mga bar para makapasok ang concrete, laban sa clear-spacing rule at, kung ibibigay mo, ang pinakamalaking aggregate at ang vibrator head. Tingnan ang [Rebar congestion map](topic:rebar-congestion).

**Framing at supply**

- **Timber at light-gauge framing.** Ang {{ui:Framing}} tab ay bumubuo ng frame ng wall, floor at roof panel na may bawat piyesa, cut list, stock na bibilhin at shop drawing na naka-scale. Inilalagay ng {{ui:Ilagay bilang mga member}} ang mga piyesa sa model, at ang {{ui:PDF sheet}} ay nagsa-save ng isang sheet para sa bawat panel. Ang mga laki, spacing at header ay sa iyo: hindi chine-check ng DetailCraft kung kaya nila ang load. Tingnan ang [Timber and light-gauge framing panels](topic:framing-panels).
- **Supplier stock at lead time.** Binabasa ng {{ui:Supply}} tab ang listahan ng stock ng supplier (CSV) at ipinapakita, para sa bawat section na binibili ng cut list, kung sapat ang nasa stock at gaano katagal ang paghihintay. Nasa {{ui:Mga problema}} ang kulang at mga late na section. Walang inoorder. Tingnan ang [Supplier stock and lead times](topic:supplier-stock).

**Analysis at design**

- **Ano ang unang masisira?** Sa {{ui:Analysis}} tab, hinahanap ng button ang strength combination na nangingibabaw, ang pinakamahinang member, kung gaano kalayo maaaring tumaas ang mga load bago maabot ng unang member ang limitasyon nito, at ang pinakamahinang end plate o shear tab kung alam ang shear strength ng mga bolt nito. Kailangan muna ang mga combination at isang design code. Hindi chine-check ang bearing, block shear, mga weld at prying. Maitatanong din ito ng iyong nakakonektang assistant.
- **Live.** I-tick ang {{ui:Live: lutasin ulit pagkatapos ng bawat edit}} at muling sosolusyunan ang frame pagkatapos ng bawat edit.
- **Concrete, higit pa.** Dinisenyo ang isang slender column sa non-sway frame para sa magnified moment nito (ACI 318-19 6.6.4.5). Maaaring kunin ang seismic period mula sa analysis gamit ang paraan ni Rayleigh. Nakakakuha ang slab na gawa sa mga plato ng bakal na kailangan ng bawat layer mula sa mga moment nito, at ang one-way shear nito. Tingnan ang [Check concrete members and make seismic loads](topic:concrete-and-seismic).
- **Para i-check ng isang engineer.** Ang foundation, concrete at mga resulta ng What breaks first ay mga tulong lamang. Hindi pa nagagawa ang wind loads.

**Sa bawat app**

- **Mga wika.** Nasa 54 na wika ang tulong. Ang mga wikang bukod sa English ay machine draft hanggang may basang native speaker na magbasa; sampu ang bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek).
- **Mga toolbar row.** Ang {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga row ng toolbar}} ay pumipili ng wrap, 2 row o 1 row. Nananatili sa dati ang bar na kasya na; ang iba ay nag-i-scroll sa gilid.
- **Property grid.** Ginagamit ng mga field ng footing ang shared grid: mga collapsible na kategorya at compact na density. Gumagana pa rin ang tinype na aritmetika tulad ng 2*450.
- **Input device.** Maaaring kontrolin ang mga app gamit ang trackpad, pen, 3D mouse, controller at MIDI. Tingnan ang [Navigate in 3D](topic:navigate-3d).
- **Problems panel.** Lumalabas sa parehong {{ui:Mga problema}} panel ang mga babala ng mga bagong check sa itaas.
- **Ikonekta ang iyong AI.** Ang sarili mong assistant, na nakakonekta sa pamamagitan ng CadCraft Studio, ay gumagana sa lahat ng walong app at nakikita lamang ang pinapayagan mo. Darating pa ang one-click connect, ang hosted connector at ang sarili mong API key sa Studio. Tingnan ang [Use DetailCraft with an AI assistant](topic:use-with-ai-assistants).

### Naayos sa 0.8.1

- **Mga wika sa Studio.** Maaaring palitan ng Studio at ng mga packed edition ang wika habang tumatakbo; dati, English lamang. Hindi pa ito nasusubok sa lahat ng platform: sabihin sa amin kung hindi nagbabago ang wika.
- **Crossing-window select.** Taglay na ng mga installer ng 0.8.1 ang tamang pag-select-by-window na nasa web build ng 0.8; hindi ito tama sa mas lumang installer.
- **Tablet sa portrait.** Napupunta sa canvas ang sobrang taas ng grid, at nagsisimula ang layout ng sheet sa 760 px o mas mababa.

### Wala pa sa bersyong ito

- **Pagpapadala ng NC sa makina** ay hindi pa inilalabas.
- **Wind loads** para sa concrete ay hindi pa nagagawa, at ang mga check ng concrete at foundation ay para sa engineer na mag-review.
- **Code signing.** Hindi naka-sign ang mga Windows installer at ang macOS .dmg, kaya maaaring magbabala ang Windows at hihingi ang macOS ng right-click, pagkatapos Open.

Nasa [What's new in 0.7](topic:whats-new-0-7) ang mga naunang pagbabago.
