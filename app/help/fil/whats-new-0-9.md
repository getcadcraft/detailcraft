---
title: Ano ang bago sa 0.9
summary: Mga laki ng UK steel mula sa Blue Book at unequal angle, shop drawing para sa bawat piyesa sa iisang PDF set, My profiles para sa custom section, P-Delta at natural frequency, ASCE 7 wind load, seismic site at combination, at live cursor na may Follow.
keywords: ano ang bago, whats new, release notes, changelog, 0.9, uk steel, blue book, ub, uc, pfc, shs, rhs, chs, unequal angle, shop drawing, shop drawings, sheet set, part mark, pdf, my profiles, custom profile, p-delta, second order, natural frequency, finite elements, modal mass, wind load, asce 7, seismic, site class, usgs, load combinations, lrfd, asd, live, cursors, follow, people, tooltips, mga pagbabago, 0.8, 0.8.1, bersyon, mga bagong feature, erection, crane, load chart, movie, autopilot, connections, rebar, congestion, foundation, footing, mat, settlement, framing, timber, light-gauge, cut list, constructability, weld access, supplier, stock, lead time, what breaks first, concrete, seismic, slab, languages, assistant
from: 4c95a2de
---

Ito ang mga nagbago sa DetailCraft 0.9, kumpara sa 0.8.1. Dinadala ng 0.9 ang mga laki ng UK steel, isang shop drawing para sa bawat piyesa sa isang bagsakan, mas malaking tab na {{ui:Analysis}} para sa mga frame, at ang pagtingin sa cursor ng isa't isa kapag nagtutulungan kayo.

## Bago

### UK steel at shop drawing

- **Mga laki ng UK steel.** Ang mga listahan ng profile ay mayroon na ngayong 976 na laki mula sa Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS at RHS, kung saan nakahiwalay ang cold-formed hollow section (nagsisimula ang pangalan nila sa CF). Isinusulat ang mga pangalan nang nauuna ang pamilya, gaya ng UB305x165x40 o SHS100x100x5.0, at gumagana rin ang pag-type nito sa paraan ng pagsulat ng drawing: 305x165x40 UB, L100x100x10, SHS100x5. Tingnan ang [Profile catalog](topic:profile-catalog).
- **Unequal angle.** Pinananatili ng mga UEA angle ang parehong leg sa IFC in at out at sa mga NC file, at ang mirror ay nagpapaikot sa piyesa mula dulo hanggang dulo.
- **Lahat ng shop drawing nang sabay.** Piliin ang {{ui:Shop drawing}} sa group na {{ui:Output}} nang walang napiling anuman. Nakalista sa window ang bawat part mark, may preview ang alinman sa mga ito, at ang {{ui:I-download lahat}} ay nagse-save ng isang PDF na may isang pahina bawat mark, bawat isa ay may pamagat na "Sheet 3 of 42". Ang {{ui:I-download ang PDF}} ay nagse-save ng sheet na tinitingnan mo. Nakakakuha na rin ng sheet ang channel, angle at hollow section. Tingnan ang [Make shop drawings](topic:shop-drawings).
- **My profiles.** Maaari nang itago ang custom profile para sa bawat bagong model. Sa form ng Custom profile, iwanang naka-tick ang {{ui:Ilagay sa My profiles}}; ang listahang {{ui:My profiles}} sa ilalim nito ay may {{ui:Ilagay}}, {{ui:Gamitin dito}} at {{ui:Alisin}}. Nakatago ang listahan sa browser na ito (hanggang 200), hindi sa iyong account. Tingnan ang [Plates and profiles](topic:plates-and-profiles).

### Analysis

- **Second order (P-Delta).** Lagyan ng tick ang {{ui:Second order (P-Delta)}} sa tabi ng Run sa tab na {{ui:Analysis}}, at kikilos ang axial force sa frame na nalihis. Nananatiling first order ang mga plate at rigid floor, na may babala. Tingnan ang [Forces, reactions and deflections](topic:frame-analysis).
- **Natural frequency.** Hinahanap ng block na {{ui:Finite elements: natural frequency}} sa ilalim ng mga resulta ang pinakamababang mode ng parehong model, kasama ang period at effective modal mass, at ipinapakita ang isang mode sa model. Tingnan ang [Forces, reactions and deflections](topic:frame-analysis).
- **Wind load at seismic site.** Tatlong bagong block sa tab na {{ui:Analysis}}: {{ui:Wind load (ASCE 7 directional procedure)}}, {{ui:Seismic site at system (ASCE 7)}} at {{ui:ASCE 7 load combination}}. Tingnan ang [Wind, seismic site and ASCE 7 combinations](topic:wind-seismic-combinations).

### Sabay na pagtatrabaho

- **Mga cursor at pangalan.** Sa isang Live session, iginuguhit sa model ang pointer ng bawat tao kasama ang kanyang pangalan at kulay, at may kahon ang anumang napili nila.
- **Sundan ang isang tao.** Buksan ang {{ui:Mga tao}} sa sesyon at piliin ang {{ui:Sundan}} sa isang pangalan; gagalaw ang view mo kasama ng sa kanila. Maaaring piliin ng host ang {{ui:Sabihin sa lahat na sundan ako}}. Tingnan ang [Follow a person in a Live session](topic:follow-in-live).

### Sa bawat app

- Ang mga tooltip ay Bootstrap tooltip, may close button ang kard ng start tip, nagsa-scroll pahalang ang mga tab strip kapag hindi kasya, at ipinapakita ng pangalan ng browser tab ang bukas na dokumento na sinusundan ng DetailCraft at CadCraft.

## Naayos

- Nawawala ang custom profile kapag nagsimula ka ng bagong model.
- Wala sa set ng shop drawing noon ang channel, angle at hollow section.

## Mga tapat na limitasyon

- Gabay lamang sa pag-check ang mga block ng hangin, lindol at finite element. Sinusuri ng iyong engineer ang mga resulta; hindi ito code check. Sinubukan ang paghahanap sa USGS gamit ang panggagaya, hindi sa aktwal na serbisyo.
- Sinuri ang finite element at P-Delta laban sa manwal at closed-form na sagot, hindi laban sa totoong gusali. Hindi pa nagagawa ang buckling analysis.
- Wala pang UK fabricator na sumubok sa mga laki ng UK, at hindi pa napapatakbo sa makina ang mga NC file para sa unequal angle.
- PDF lamang ang set ng shop drawing.
- Ang mga wikang higit sa Ingles ay mga draft ng makina.
- Hindi naka-code-sign ang mga Windows installer (Higit pang impormasyon, pagkatapos Patakbuhin pa rin); hindi na-notarize ang macOS disk image (i-right-click, pagkatapos Buksan).

Nasa ibaba ng pahinang ito ang mga naunang pagbabago sa tala ng 0.8 at 0.8.1.

## Mas luma: 0.8 at 0.8.1

Ito ang mga nagbago sa DetailCraft 0.8 (1 Nobyembre 2026) at 0.8.1 (2 Nobyembre 2026), kumpara sa 0.7. Nag-check ng steel member ang 0.7; pinaplano ng 0.8 ang mga lift, nagmumungkahi ng mga connection, sinusuri ang mga pundasyon at rebar, at gumagawa ng frame para sa timber at light-gauge na pader, sahig at bubong.

### Bago

**Erection**

- **Erection plan at movie.** Sa tab na {{ui:Erection}}, ilarawan ang isang crane (kung nasaan ito, ang pinakamataas nitong hook, ang rigging na wala sa chart) at i-type ang mga hanay ng load chart nito. Ang DetailCraft ay nagbubuhat ng model isang assembly sa bawat pagkakataon, ayon sa phase order at tier by tier, at sinusuri ang bawat lift laban sa chart sa radius nito at sa margin na itinakda mo. Ang {{ui:I-save ang movie}} ay nagsusulat ng isang HTML file na tumatakbo offline sa anumang browser, pati sa phone. Ang mga lift na lampas sa chart, lampas dito o masyadong mataas ay nasa {{ui:Mga problema}}. Plano ito mula sa iyong mga numero, hindi lift plan. Tingnan ang [Erection plan and movie](topic:erection-movie).

**Mga connection**

- **Connection autopilot.** Tinitingnan ng tab na {{ui:Autopilot}} ang bawat joint na walang connection at nagmumungkahi ng isa mula sa mga shape: base plate, shear tab, end plate para sa mga beam na minarkahan mo bilang moment beam, splice at gusset. Magbigay ng uniform load o isang end shear at susunod ang bilang ng bolt sa design strength ng bolt. Idinadagdag ng {{ui:Idagdag lahat}} ang mga mungkahi bilang isang undo step. Mga panimulang halaga ang mga ito na susuriin, hindi connection design.
- **Constructability check.** Ang {{ui:Mga problema}} ay para sa bolt na hindi maabot ng wrench, mga bolt na masyadong magkalapit para sa socket, fillet weld na lampas sa limitasyon ng laki nila, at hollow section na nakakakulong ng tubig. Bago ang weld access: ang all-round fillet weld na hindi maabot ng torch ng welder ay nakalista kasama ang part na nasa daan at ang bahagi ng weld na apektado. Tingnan ang [Constructability checks](topic:constructability).

**Mga pundasyon at rebar**

- **Foundation check.** Sinusuri ng tab na {{ui:Foundation}} ang footing, combined footing at mat sa lupang inilarawan mo: bearing, sliding at overturning mula sa service load; flexure, shear, punching, development at minimum steel mula sa factored load (ACI 318-19). Sinusuri ang column na malapit sa gilid o sulok gamit ang section na putol ayon sa gilid ng footing. Nagmumula ang settlement sa modulus ng lupa, nilulutas ang flexible mat sa mga spring mula sa subgrade modulus, at may sariling panel ang pile group at retaining wall. Maaaring i-type ang column load o kunin mula sa {{ui:Analysis}}. Tingnan ang [Foundation checks](topic:foundation-checks).
- **Rebar congestion map.** Gumuguhit ang tab na {{ui:Congestion}} ng heat map ng bawat footing na tinitingnan mula sa itaas: kung saan iniiwan ng bar ang kaunting espasyo para makapasok ang concrete, laban sa clear-spacing rule at, kung ibibigay mo, ang pinakamalaking aggregate at ang vibrator head. Tingnan ang [Rebar congestion map](topic:rebar-congestion).

**Framing at supply**

- **Timber at light-gauge framing.** Ang tab na {{ui:Framing}} ay bumubuo ng wall, floor at roof panel na may bawat piraso, cut list, ang stock na bibilhin at shop drawing sa tamang sukat. Inilalagay ng {{ui:Ilagay bilang mga member}} ang mga piraso sa model, at nagse-save ang {{ui:PDF sheet}} ng isang sheet para sa bawat panel. Ikaw ang nagtatakda ng laki, spacing at header: hindi sinusuri ng DetailCraft kung kaya ng mga ito ang load. Tingnan ang [Timber and light-gauge framing panels](topic:framing-panels).
- **Supplier stock at lead time.** Binabasa ng tab na {{ui:Supply}} ang listahan ng stock ng supplier (CSV) at ipinapakita, para sa bawat section na binibili ng cut list, kung sapat ang stock at gaano katagal ang paghihintay. Nasa {{ui:Mga problema}} ang mga kulang at late na section. Walang inoorder. Tingnan ang [Supplier stock and lead times](topic:supplier-stock).

**Analysis at design**

- **Ano ang unang babagsak?** Sa tab na {{ui:Analysis}}, hinahanap ng button ang strength combination na nangingibabaw, ang pinakamahinang member, kung gaano kalaki pa ang puwedeng dagdagan ng load bago maabot ng unang member ang limitasyon nito, at ang pinakamahinang end plate o shear tab kung alam ang shear strength ng bolt nito. Kailangan muna ng mga combination at isang design code. Hindi sinusuri ang bearing, block shear, weld at prying. Maaari ring itanong ito ng iyong nakakonektang assistant.
- **Live.** Lagyan ng tick ang {{ui:Live: solve again after each edit}} at muling lulutasin ang frame pagkatapos ng bawat edit.
- **Concrete, at iba pa.** Dinidisenyo ang slender column sa non-sway frame para sa magnified moment nito (ACI 318-19 6.6.4.5). Maaaring kunin mula sa analysis ang seismic period sa pamamagitan ng paraan ni Rayleigh. Nakakakuha ang slab na gawa sa plate ng steel na kailangan ng bawat layer mula sa mga moment nito, at ang one-way shear. Tingnan ang [Check concrete members and make seismic loads](topic:concrete-and-seismic).
- **Para suriin ng isang engineer.** Gabay lamang ang mga resulta ng foundation, concrete at Ano ang unang babagsak. Hindi pa nagagawa ang wind loads.

**Sa bawat app**

- **Mga wika.** Nasa 54 na wika ang help. Ang mga higit sa Ingles ay mga machine draft hanggang basahin ng isang native speaker; sampu ang bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek).
- **Toolbar rows.** Pinipili ng {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga row ng toolbar}} ang wrap, 2 rows o 1 row. Ang bar na kasya na ay nananatili; ang iba ay nagsa-scroll pahalang.
- **Property grid.** Ginagamit ng mga field ng footing ang karaniwang grid: mga kategoryang maaaring itiklop at compact na density. Gumagana pa rin ang typed arithmetic gaya ng 2*450.
- **Input device.** Maaaring paandarin ng trackpad, pen, 3D mouse, controller at MIDI ang mga app. Tingnan ang [Navigate in 3D](topic:navigate-3d).
- **Panel ng Problems.** Lumalabas sa parehong panel na {{ui:Mga problema}} ang mga babala ng mga bagong check sa itaas.
- **Ikonekta ang iyong AI.** Ang sarili mong assistant, na nakakonekta sa pamamagitan ng CadCraft Studio, ay gumagana sa lahat ng walong app at nakikita lamang ang pinayagan mo. Ang one-click connect, ang hosted connector at ang sarili mong API key sa Studio ay darating pa. Tingnan ang [Use DetailCraft with an AI assistant](topic:use-with-ai-assistants).

### Naayos sa 0.8.1

- **Mga wika sa Studio.** Nakakapagpalit ng wika habang tumatakbo ang Studio at ang mga packed edition; dati, Ingles lamang. Hindi pa nasusubukan sa lahat ng platform: sabihin sa amin kung hindi nagbabago ang wika.
- **Crossing-window select.** Tama na sa web build ng 0.8 ang pagpili gamit ang window; dala na ito ng mga installer ng 0.8.1. Hindi ito nasa mas lumang installer.
- **Mga tablet sa portrait.** Napupunta sa canvas ang natitirang taas ng grid, at nagsisimula ang sheet layout sa 760 px o mas mababa.

### Wala pa sa bersyong ito

- **Hindi pa available ang pagpapadala ng NC sa makina.**
- **Hindi pa nagagawa ang wind loads** para sa concrete, at ang mga concrete at foundation check ay para suriin ng isang engineer.
- **Code signing.** Hindi naka-sign ang mga Windows installer at ang macOS .dmg, kaya maaaring magbabala ang Windows at hihingi ang macOS ng right-click, pagkatapos Buksan.

Nasa [Ano ang bago sa 0.7](topic:whats-new-0-7) ang mga naunang pagbabago.
