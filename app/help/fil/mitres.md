---
title: Mga mitre joint
summary: Pagdugtungin ang dalawang I-shape member na nagtatagpo sa isang anggulo: parehong dulo ay pinuputol sa eroplanong naghahati sa anggulo, may end plate, bolt at stiffener kung gusto mo.
keywords: mitre, miter, mitre joint, knee, haunch, portal frame, ridge, sulok, angle cut, skew cut, end plate, bolted end plate, stiffener, connect
from: cd8380d4
---

Pinagdurugtong ng mitre ang dalawang I-shape member na ang mga dulo ay nagtatagpo sa isang anggulo, gaya ng knee ng portal frame, ridge, o dalawang beam na lumiliko ng sulok sa plan. Pinuputol ng DetailCraft ang parehong dulo sa eroplanong naghahati sa anggulo sa pagitan nila, kaya tugma ang dalawang cut face. Kung gusto mo, nagdaragdag ito ng end plate sa bawat dulong pinutol, binobolt ang dalawang plate nang magkasama, at naglalagay ng isang pares ng web stiffener sa bawat member.

## Saan ito gumagana

- Dalawang **I-shape** (IPE, HEA, HEB, W at iba pa) na ang **mga dulo ay nagtatagpo sa iisang node**. Maaaring iguhit ang alinmang member sa alinmang direksyon.
- Dapat hindi bababa sa 15° ang anggulo sa pagitan ng mga member. Hindi tinatanggap ang mga member na nasa linya: gumamit ng [splice](topic:splices).
- Gumagana ang simpleng putol (walang plate) anuman ang pagkakatagpo ng mga member. Kailangang magtagpo ang dalawang member sa eroplano ng kanilang mga web ang **end plate**, gaya ng knee ng portal o ridge. Ang dalawang beam na lumiliko ng sulok sa plan ay nagtatagpo sa eroplano ng kanilang mga flange, kaya simpleng putol lang ang nakukuha nila.
- Pinagdurugtong ang mga member na magkaiba ang laki, ngunit may babala: hindi tutugma ang kanilang cut face.

## Magdagdag ng mitre

1. Piliin ang dalawang member: i-click ang isa, saka {{key:Shift}}+click ang isa pa.
2. Piliin ang {{ui:Mitre}} sa menu na {{ui:More}} ng grupong {{ui:Connect}}. Bubukas ang dialog ng Mitre.
3. Itakda ang mga numerong field. Ginagawa ang drawing sa tabi nila mula sa iyong mga numero habang nagta-type ka, at ang mga numerong bilog nito ay nagpapakita kung ano ang itinatakda ng bawat field.
4. Piliin ang {{ui:Add the mitre}}. Kung higit sa dalawang member ang napili mo, bawat libreng joint sa pagitan nila ay makakakuha ng parehong mitre.

Para baguhin ang mitre pagkatapos, piliin ito (i-click ang isa sa mga plate nito) at piliin ang {{ui:Mitre dialog with preview}} sa kanang panel, o baguhin ang mga setting nito roon nang direkta. Walang plate na maki-click ang simpleng putol: piliin ang dalawang member nito at piliin muli ang {{ui:Mitre}}, at bubukas ang dialog sa mitre na iyon. Kinokopya ng {{ui:Apply to similar (n)}} ito sa bawat libreng joint sa pagitan ng mga member ng parehong dalawang profile sa parehong anggulo.

## Mga numerong field (mm)

| Blg. | Setting | Default | Ginagawa |
|---|---|---|---|
| 1 | Puwang sa pagitan ng mga plate (o ng mga pinutol na dulo) | 0 | Malinaw na puwang sa joint. Kalahati nito ang bawat panig |
| 2 | End plate, kapal ng plate | on, 20 | Isang end plate na naka-weld sa paligid ng bawat pinutol na dulo. Alisan ng tsek para sa simpleng putol |
| 3 | Mga hilera ng bolt, row pitch, gauge, outside row | 4, 0, 0, off | Ang pitch 0 ay nagpapantay sa mga hilera sa pagitan ng mga flange. Gauge 0 = kalahati ng lapad ng plate, at hindi bababa sa 2.4 × ang butas. Napupunta ang outside row sa extension ng plate lampas sa outside flange |
| 4 | Plate lampas sa outside flange | 0 | Gaano kalayo inaabot ng mga plate ang lampas sa outside flange, sa kahabaan ng putol |
| 5 | Plate lampas sa inside flange | 0 | Pareho sa inside |
| 6 | Web stiffener, distansya lampas sa putol | off, 50 | Isang pares sa bawat member, sa magkabilang panig ng web, patayo sa member, ganito kalayo lampas sa malayong dulo ng putol nito |
| 7 | Kapal ng stiffener | 10 | |

Sa ilalim ng {{ui:Bolts}}: diameter ng bolt, butas, grade at allowance sa haba (20, 22, A325, 30), gaya ng para sa end plate. Sa ilalim ng {{ui:Plates and welds}}: lapad ng plate (0 = lapad ng flange), laki ng fillet weld (8) at materyal ng plate (A36).

## Ang makukuha mo

- **Ang mga putol.** Pinuputol ang dulo ng bawat member sa eroplano nito. Ang haba nito sa mga listahan, drawing at NC file ay ang **kabuuang haba**, mula sa parisukat nitong dulo hanggang sa pinakamalayong punto ng putol.
- **Ang mga plate** ay kabilang sa sarili nilang member: ang assembly ng bawat member ay ang member, ang end plate nito at ang mga stiffener nito. Ang mga bolt ay mga site bolt ng joint: binibilang ng bill of materials ang mga ito nang isang beses, at inililista ng assembly drawing ng bawat member ang mga ito bilang maluwag na bolt.
- **Ipinapakita ng mga drawing** ang mga hilig na dulo at ang mga plate; ang shop drawing ng mitred member ay nagtatala ng anggulo ng bawat putol mula sa parisukat.
- **Ang mga NC file** (DSTV) ay nagdadala ng mga skew cut angle sa header, gaya ng hinihingi ng pamantayan, at mga contour na sumusunod sa putol. Suriin ang mga ito sa NC viewer ng iyong shop bago pumutol, gaya ng para sa bawat NC file.
- **Pinuputol ng IFC** ang extrusion ng bawat member ayon sa cut plane nito, para maipakita ng ibang programa ang tunay na putol.
- **Mga marka:** ang mitred member ay ibang piraso kaysa sa square-cut na may parehong haba. Ang dalawang member na may parehong putol ay nagbabahagi ng marka, gaya ng dalawang rafter ng isang ridge.

## Dapat tandaan

- Nananatiling aktibo ang mitre. Ilipat o baguhin ang laki ng alinmang member at susunod ang putol, plate at bolt. Burahin ang alinmang member at mawawala ang mitre, at magiging parisukat muli ang dulo ng kabilang member.
- Ginagamit ng mga babala ang parehong pinakamababang EN 1993-1-8 gaya ng ibang koneksyon (end at edge distance 1.2 × butas, pitch 2.2 × butas, gauge 2.4 × butas), kasama ang mga hilera ng bolt na masyadong malapit sa flange, mga plate na mas makitid sa flange, at mga stiffener na walang sapat na espasyo.
- Mga panimulang halaga ang mga value, hindi disenyo. Hindi sinusuri ng DetailCraft ang lakas ng koneksyon, at hindi ito gumagawa ng haunch, welded mitre na may butt weld, o stiffener na nakahanay sa mga flange ng kabilang member.
