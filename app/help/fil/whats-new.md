---
title: Ano ang bago sa 0.7
summary: Mga design check ng steel I-shape na may load combination mula sa ASCE 7 o EN 1990 at member check ayon sa AISC 360 o EN 1993-1-1, USD export ng steel model, assistant tool para sa USD, Steel ribbon na may malaki at maliit na button, mga panel na kusang nagtatago at dialog na nagagalaw.
keywords: ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.7, bersyon, bagong feature, design checks, steel design, utilisation, utilization, load combinations, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, National Annex, roof live, deflection limit, usd, usda, usdc, usdz, openusd, assistant, mcp, steel ribbon, ribbon, split button, mga unit, compact, panel, dialog, Portuges
from: 17d1e0bb
---

Ito ang mga nagbago sa DetailCraft 0.7, kumpara sa 0.6. May ikalawang hakbang na ngayon ang frame analysis ng 0.6: ang pagsusuri ng mga steel member ayon sa design code.

## Bago

### Mitre joints (0.7.1)

- **Dalawang I-shape na nagtatagpo sa anggulo**, gaya ng portal knee o ridge: piliin ang dalawa, piliin ang {{ui:Mitre}} sa {{ui:Higit pa}} menu ng {{ui:Connect}} group, at parehong dulo ay puputulin sa eroplanong naghahati sa anggulo. Ang mga end plate na pinagdugtong ng bolt at web stiffener ay mga tick box sa bagong Mitre dialog, na ang mga numerong field ay tumutugma sa drawing ng joint mo na ginagawa habang nagta-type ka. Sumusunod ang mitre sa mga member kapag gumalaw ang mga ito, at dinadala sa drawing, NC file (skew cut), IFC at bill of materials. Tingnan ang [Mitre joints](topic:mitres).

### Design checks

- **Load combination mula sa code.** Sa {{ui:Analysis}} tab, ang bagong {{ui:Mga design check}} block ay may {{ui:Design code}}: ASCE 7 + AISC 360 (US, LRFD) o EN 1990 + EN 1993-1-1 (Eurocode). Bigyan ang bawat load case ng uri nito (dead, live, ang bagong roof live, snow, wind, seismic), pindutin ang {{ui:Gumawa ng combination}}, at isinusulat ng DetailCraft ang strength at serviceability combination ng code para sa mga case mo. Mananatili ang mga combination na ikaw mismo ang nag-type. Tingnan ang [Gawin ang combinations](topic:design-checks#make-the-combinations).
- **Mga halaga ng National Annex.** Para sa Eurocode, nagsisimula ang mga factor sa mga inirerekomendang halaga; hinahayaan ka ng {{ui:Mga halaga ng National Annex}} na i-type ang sa bansa mo, at naka-save ang mga ito sa model. Tingnan ang [Gawin ang combinations](topic:design-checks#make-the-combinations).
- **I-check ang mga member.** Sinusuri ng {{ui:I-check ang mga member}} ang bawat steel I-shape para sa tension, compression na may buckling, bending na may lateral-torsional buckling, shear, bending na may axial force, at deflection laban sa {{ui:Limitasyon ng deflection}} na itinakda mo. Ipinapakita ng table ang utilisation ng bawat member, ang check na nangingibabaw at ang combination nito, at kinukulayan ang mga member sa model (asul, berde, ocher, pula, kulay abo para sa hindi nasuri). Tingnan ang [I-check ang mga member](topic:design-checks#check-the-members).
- **Sa report.** Dinadagdag ng {{ui:Ulat (PDF)}} at {{ui:Ulat (CSV)}} ang mga edisyon ng code, ang mga setting, utilisation ayon sa member at bawat clause na ginamit. Tingnan ang [Ang report](topic:design-checks#the-report).
- **Gabay lang hanggang suriin ito ng engineer.** First-order na pwersa lang ang gamit nito. Ang tube, angle, channel, welded shape at payat o class 4 na piyesa ay nababasang "not checked", kasama ang dahilan; hindi sinusuri ang torsion, connection at concrete. Tingnan ang [Ano ang hindi sinusuri](topic:design-checks#what-is-not-checked).

### USD

- **I-export ang steel model bilang USD.** Isinusulat ng {{ui:USD}} sa {{ui:Output}} group ang model bilang {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} o {{ui:Package (.usdz)}} para sa mga rendering program at scene assembly: may laman na piyesa ang bawat assembly, ang bawat piyesa ay ang seksyon nito na tumatakbo sa haba nito na may putol na cope, at bawat isa ay may dalang part mark, profile, grade, haba at timbang. Wala sa mga USD mesh ang butas ng bolt, bolt, weld at footing. Tingnan ang [I-export ang steel model bilang USD](topic:usd).

### AI assistant

- **USD para sa mga assistant.** Ang sarili mong assistant, na nakakonekta sa pamamagitan ng CadCraft Studio, ay makapag-e-export ng model bilang USD (`usd_export`), at sa Studio, maisusulat ito sa folder na pinayagan mo. Tingnan ang [Ano ang maaaring hilingin ng assistant](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Binago

- **Ang Steel ribbon** ay may malaki at maliit na button: malaking {{ui:Beam}} sa tabi ng maliit na {{ui:Column}}, {{ui:Brace}} at {{ui:Plato}} sa {{ui:Modeling}} › {{ui:Mga member}}; malaking {{ui:End plates}} sa {{ui:Detailing}} › {{ui:Mga connection}}, kasama ang {{ui:Splice}} at {{ui:Gusset}} na magkasamang nasa iisang split button; malaking {{ui:I-paste}} sa {{ui:Edit}} › {{ui:Clipboard}}, kasama ang {{ui:I-paste sa mismong lugar}} at {{ui:Duplicate}} sa likod ng arrow ng group. Nasa {{ui:Fabrication}} › {{ui:Exchange}} ang {{ui:I-export ang USD}} sa tabi ng IFC. Pareho pa rin ang itsura ng iba pang menu style. Tingnan ang [Menu, key at mouse](topic:menus-keys-and-mouse#the-three-styles).
- Itinuturo na ngayon ng [Analyse the frame](topic:frame-analysis) ang mga design check, at ginagawa ng code ang mga combination nito.

## Sa lahat ng app

- **Mga unit.** {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga unit}} ay may isang list para sa haba, lawak, volume, anggulo at slope, na may eksaktong laki ayon sa depinisyon ng mga unit (ang US survey foot ay sarili nitong unit). Patayin ang mga unit na hindi mo ginagamit at aalis ang mga ito sa mga unit list; i-star ang isa at ang bagong trabaho ay magsisimula roon. Laging pinapanatili ng file ang sarili nitong unit. Hindi pa sumusunod ang mga box ng DetailCraft sa mga list: ang haba nito ay ita-type pa rin sa millimeter. Tingnan ang [Mga unit, typed na halaga at mga unit list](common:unit-lists).
- **Mas siksik na layout at mga panel na kusang nagtatago.** {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Density ng layout}} › {{ui:Siksik}} ay nagkakasya ng mas marami sa screen (ang touch screen at telepono ay nananatili sa malalaking button). Ang bawat side panel ay may manipis na title bar: i-drag ito para i-dock o ilutang ang panel, i-drop sa title bar ng ibang panel para magbahagi ng isang frame bilang mga tab, i-pin para dumulas papunta sa gilid, o itago ito at ibalik mula sa gilid. Tingnan ang [Ayusin ang mga panel](common:arrange-panels#make-the-layout-denser).
- **Gumagalaw ang mga dialog.** I-drag ang dialog sa pamamagitan ng title bar nito palayo sa drawing; babalik ito sa kung saan mo ito iniwan. I-double-click ang title bar para ibalik ito sa gitna. Tingnan ang [Ilipat ang dialog](common:arrange-panels#move-a-dialog).
- **Mga recipe para sa AI assistant.** Sampung halimbawang hiling para sa sarili mong assistant (linisin ang drawing, i-plot ang set, suriin ang mga drawing, magtanong tungkol sa model, sumahin ang takeoff, subukan ang variant ng piyesa…), bawat isa ay may tool na tinatawag nito at permiso na kailangan, at bawat isa ay inuulit ng aming mga test. Walang AI ang mga app. Tingnan ang [Mga recipe para sa AI assistant](common:assistants-recipes).
- **Mga wika.** Bago sa {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Wika}} ang **Português (Portugal)**. Ito, ang **Português (Brasil)**, **Español (México)** at **Bahasa Indonesia** ay mayroon na ngayong bawat salita ng mga app, bilang mga draft na hindi pa nasuri ng katutubong nagsasalita. Nasa Ingles ang mga help topic.
- **Ipinapaliwanag ng CadCraft Studio** kung bakit nabigo ang pagsusuri ng update (walang file para sa system mo pa, walang network, maling signature) sa halip na "Done" lang, at hindi na ibinabalik ang What's new card na isinara mo hangga't walang mas bagong release.

## Wala pa sa bersyong ito

- **Hindi pa code-signed ang 0.7.** Ang signing, at ang Microsoft Store package, ay inilipat sa 0.8 dahil hindi pa dumarating ang pag-validate ng certificate. Suriin ang SHA-256 sa tabi ng bawat file sa getcadcraft.com/download. Sa Windows, kung hihinto ang SmartScreen sa installer, piliin ang {{ui:More info}}, saka {{ui:Run anyway}}. Sa Mac, sa unang pagkakataon, i-right-click ang CadCraft Studio at piliin ang {{ui:Open}}. Wala pa sa app store ang CadCraft Studio, at wala pang build para sa iPad o iPhone.
- Naka-save ang mga anggulo at slope list sa {{ui:Units}}, pero wala pang box na bumabasa sa mga ito.
- **Hindi pa nasusuri ng engineer ang mga design check.** Ang mga test namin ay nagkukumpara sa mga nakalimbag na halaga ng table at sa mga formula na kinuwenta nang manu-mano, hindi pa sa mga worked example ng design guide. Hanggang sa may review, gabay lang ang mga ito: suriin nang manu-mano ang mga member na mahalaga.
- First-order na pwersa (walang second-order effect) ang gamit ng design check at I-shape lang ang sinusuri nito. Hindi pa nabubuo: tube, angle, channel, welded shape, payat (AISC) o class 4 (Eurocode) na piyesa sa bending, torsion, shear buckling kasabay ng bending, connection, fatigue, sunog, seismic detailing at concrete. Iniiwan sa labas ng compression check ang payat na piyesa sa compression, at nababasa ang member bilang "passes, partly checked".
- Linear at first-order pa rin ang frame analysis, at hindi pa ito nasubukan ng engineer sa totoong trabaho.
- Wala sa USD export ang butas ng bolt, bolt, weld at footing.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet).
