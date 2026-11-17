---
title: Ano ang bago sa 0.7 (mas luma)
summary: Design check ng steel I-shape gamit ang load combination mula sa ASCE 7 o EN 1990 at member check ayon sa AISC 360 o EN 1993-1-1, USD export ng steel model, assistant tool para sa USD, Steel ribbon na may malalaki at maliliit na button, mga panel na kusang nagtatago at mga dialog na nagagalaw.
keywords: whats new 0.7, naunang release, release notes, changelog, mga pagbabago, 0.7, bersyon, mga bagong feature, design checks, steel design, utilisation, utilization, load combinations, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, National Annex, roof live, deflection limit, usd, usda, usdc, usdz, openusd, assistant, mcp, steel ribbon, ribbon, split button, units, compact, panels, dialogs, portuguese
from: 54a7a8f0
---

Ito ang mga nagbago sa DetailCraft 0.7, kumpara sa 0.6. Ang frame analysis ng 0.6 ay may ikalawang hakbang na ngayon: ang pag-check ng mga steel member ayon sa design code.

## Bago

### Mitre joints (0.7.1)

- **Dalawang I-shape na nagtatagpo sa isang anggulo**, gaya ng portal knee o ridge: piliin ang dalawa, piliin ang {{ui:Mitre}} sa menu na {{ui:More}} ng group na {{ui:Connect}}, at puputulin ang parehong dulo sa eroplanong naghahati sa anggulo. Ang mga end plate na naka-bolt nang magkasama at ang web stiffener ay mga check box sa bagong Mitre dialog, na ang mga numerong field ay tumutugma sa drawing ng iyong joint na ginagawa habang nagta-type ka. Sumusunod ang mitre sa mga member kapag gumalaw ang mga ito, at dinadala ito sa mga drawing, NC file (skew cut), IFC at bill of materials. Tingnan ang [Mitre joints](topic:mitres).

### Design checks

- **Load combination mula sa code.** Sa {{ui:Analysis}} tab, ang bagong block na {{ui:Design checks}} ay may {{ui:Design code}}: ASCE 7 + AISC 360 (US, LRFD) o EN 1990 + EN 1993-1-1 (Eurocode). Itakda ang uri ng bawat load case (dead, live, ang bagong roof live, snow, wind, seismic), pindutin ang {{ui:Make combinations}}, at isusulat ng DetailCraft ang strength at serviceability combination ng code para sa iyong mga case. Mananatili ang mga combination na ikaw mismo ang nag-type. Tingnan ang [Make the combinations](topic:design-checks#make-the-combinations).
- **National Annex values.** Para sa Eurocode, nagsisimula ang mga factor sa mga inirerekomendang halaga; hinahayaan ka ng {{ui:National Annex values}} na i-type ang mga halaga ng iyong bansa, at naka-save ang mga ito sa model. Tingnan ang [Make the combinations](topic:design-checks#make-the-combinations).
- **Check members.** Sinusuri ng {{ui:Check members}} ang bawat steel I-shape para sa tension, compression na may buckling, bending na may lateral-torsional buckling, shear, bending na may axial force, at deflection laban sa {{ui:Deflection limit}} na itinakda mo. Ipinapakita ng table ang utilisation ng bawat member, ang check na nangingibabaw at ang combination nito, at kinukulayan ang mga member sa model (asul, berde, okre, pula, kulay abo para sa hindi nasuri). Tingnan ang [Check the members](topic:design-checks#check-the-members).
- **Sa ulat.** Dinadagdagan ng {{ui:Ulat (PDF)}} at {{ui:Ulat (CSV)}} ang mga edition ng code, ang mga setting, utilisation ayon sa member, at bawat clause na ginamit. Tingnan ang [The report](topic:design-checks#the-report).
- **Gabay lamang hanggang masuri ito ng isang engineer.** First-order force lamang ang ginagamit nito. Ang tubes, angles, channels, welded shape at slender o class 4 na bahagi ay lalabas na "not checked", kasama ang dahilan; hindi sinusuri ang torsion, connection at concrete. Tingnan ang [What is not checked](topic:design-checks#what-is-not-checked).

### USD

- **I-export ang steel model bilang USD.** Ang {{ui:USD}} sa group na {{ui:Output}} ay nagsusulat ng model bilang {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} o {{ui:Package (.usdz)}} para sa mga rendering program at scene assembly: may laman ang bawat assembly na mga piyesa nito, ang bawat piyesa ay ang section nito na nakahanay sa haba nito na may mga cope na pinutol, at may dala ang bawat isa na part mark, profile, grade, haba at timbang. Wala sa USD mesh ang bolt hole, bolt, weld at footing. Tingnan ang [Export the steel model as USD](topic:usd).

### AI assistant

- **USD para sa mga assistant.** Ang sarili mong assistant, na nakakonekta sa pamamagitan ng CadCraft Studio, ay maaaring mag-export ng model bilang USD (`usd_export`), at sa Studio ay maisusulat ito sa folder na pinayagan mo. Tingnan ang [What an assistant can ask for](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Binago

- **Ang Steel ribbon** ay may malalaki at maliliit na button: isang malaking {{ui:Beam}} sa tabi ng maliliit na {{ui:Column}}, {{ui:Brace}} at {{ui:Plato}} sa {{ui:Modeling}} › {{ui:Members}}; isang malaking {{ui:End plates}} sa {{ui:Detailing}} › {{ui:Connections}}, kung saan ang {{ui:Splice}} at {{ui:Gusset}} ay nagbabahagi ng iisang split button; isang malaking {{ui:I-paste}} sa {{ui:Edit}} › {{ui:Clipboard}}, kasama ang {{ui:I-paste sa mismong lugar}} at {{ui:Duplicate}} sa likod ng arrow ng group. Ang {{ui:Fabrication}} › {{ui:Exchange}} ay may {{ui:I-export ang USD}} sa tabi ng IFC. Ganoon pa rin ang itsura ng iba pang menu style. Tingnan ang [Menus, keys and mouse](topic:menus-keys-and-mouse#the-three-styles).
- Ang [I-analyze ang frame](topic:frame-analysis) ay tumuturo na ngayon sa design checks, at maaaring gawin ng code ang mga combination nito.

## Sa bawat app

- **Mga unit.** Ang {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga unit}} ay may isang listahan bawat isa para sa haba, lawak, volume, anggulo at slope, na may eksaktong laki ayon sa kahulugan ng mga unit (ang US survey foot ay sarili nitong unit). I-off ang mga unit na hindi mo ginagamit at aalisin ang mga ito sa listahan; lagyan ng star ang isa at magsisimula roon ang mga bagong gawa. Laging pinananatili ng file ang sarili nitong unit. Hindi pa sumusunod sa mga listahan ang sariling box ng DetailCraft: ang haba nito ay tina-type pa rin sa millimeter. Tingnan ang [Units, typed values and the unit lists](common:unit-lists).
- **Mas siksik na layout at mga panel na kusang nagtatago.** Ang {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Density ng layout}} › {{ui:Siksik}} ay nagkakasya ng mas maraming nasa screen (ang touch screen at phone ay nananatili sa malalaki nilang button). Ang bawat side panel ay may manipis na title bar: i-drag ito para i-dock o gawing float ang panel, i-drop sa bar ng ibang panel para magbahagi ng isang frame bilang mga tab, i-pin para dumulas papunta sa gilid, o itago ito at ibalik mula sa gilid. Tingnan ang [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Gumagalaw ang mga dialog.** I-drag ang dialog sa pamamagitan ng title bar nito palayo sa drawing; babalik ito sa dating puwesto. I-double-click ang title bar para muli itong i-center. Tingnan ang [Move a dialog](common:arrange-panels#move-a-dialog).
- **Mga recipe para sa AI assistant.** Sampung halimbawang kahilingan para sa sarili mong assistant (ayusin ang isang drawing, i-plot ang isang set, i-check ang mga drawing, magtanong sa model, i-total ang takeoff, subukan ang variant ng isang part…), bawat isa ay may mga tool na tinatawag nito at mga pahintulot na kailangan nito, at bawat isa ay inuulit ng aming mga test. Walang AI ang mga app. Tingnan ang [Recipes for AI assistants](common:assistants-recipes).
- **Mga wika.** Ang **Português (Portugal)** ay bago sa {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Wika}}. Ito, ang **Português (Brasil)**, **Español (México)** at **Bahasa Indonesia** ay mayroon na ngayong bawat salita ng mga app, bilang mga draft na hindi pa nasusuri ng isang native speaker. Nasa Ingles ang mga topic ng help.
- **Sinasabi ng CadCraft Studio** kung bakit nabigo ang pagsusuri ng update (walang file para sa iyong system pa, walang network, maling signature) sa halip na "Done" lang, at hindi na ibinabalik ang kard ng What's new na isinara mo hanggang may mas bagong release.

## Wala pa sa bersyong ito

- **Hindi naka-code-sign ang 0.7.** Inilipat sa 0.8 ang signing at ang package ng Microsoft Store dahil hindi pa dumarating ang beripikasyon ng certificate. I-check ang SHA-256 sa tabi ng bawat file sa getcadcraft.com/download. Sa Windows, kung hihinto ang installer dahil sa SmartScreen, piliin ang {{ui:Higit pang impormasyon}}, pagkatapos ang {{ui:Patakbuhin pa rin}}. Sa Mac, sa unang pagkakataon, i-right-click ang CadCraft Studio at piliin ang {{ui:Buksan}}. Wala pa sa app store ang CadCraft Studio, at wala pa ring build para sa iPad o iPhone.
- Naka-save ang mga listahan ng anggulo at slope sa {{ui:Mga unit}}, pero wala pang box na bumabasa sa mga ito.
- **Hindi pa nasusuri ng isang engineer ang mga design check.** Inihahambing ng aming mga test ang mga ito sa mga halagang naka-print sa table at sa mga formula na kinompute nang manwal, hindi pa sa mga worked example ng isang design guide. Hanggang may pagsusuri, gabay lamang ang mga ito: manwal na i-check ang mga member na mahalaga.
- Ang mga design check ay gumagamit ng first-order force (walang second-order effect) at sinusuri lamang ang I-shape. Hindi pa nagagawa: tubes, angles, channels, welded shape, slender (AISC) o class 4 (Eurocode) na bahagi sa bending, torsion, shear buckling kasama ang bending, connection, fatigue, fire, seismic detailing at concrete. Ang slender na bahagi sa compression ay inaalis sa mga compression check, at ang member ay lalabas na "passes, partly checked".
- Linear at first-order pa rin ang frame analysis, at hindi pa ito nasusubukan ng isang engineer sa totoong proyekto.
- Wala sa USD export ang bolt hole, bolt, weld at footing.

Ang iba pa ay nasa [What is not built yet](topic:not-built-yet).
