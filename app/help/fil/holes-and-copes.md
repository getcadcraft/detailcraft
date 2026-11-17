---
title: Magdagdag ng butas at cope
summary: I-type ang butas sa web, flanges at plates, at i-cope ang flanges sa dulo ng beam, sinusukat mula sa cut end ng piyesa.
keywords: hole, holes, bolt hole, cope, notch, cut, coping, drill, punch, web hole, flange hole
from: 33d12398
---

Itinatype ang mga butas at cope ayon sa posisyon. Pag-aari sila ng member at gumagalaw kasama nito.

Ang mga butas na gawa ng connections (end plates, base plates) ay idinadagdag para sa iyo; hindi mo ito itinatype. Nakalista sila bilang "… mga butas mula sa connections (i-edit ang connection)".

## Saan sinusukat ang mga posisyon

- **x** ay tumatakbo sa kahabaan ng piyesa mula sa **cut start** nito: ang simulang dulo pagkatapos itong putulin ng anumang connection. Kaya x = 0 ang totoong dulo ng steel, hindi ang grid point.
- **y** ay sinusukat sa kabila ng mukha mula sa sentro ng section:
   - sa **web**: pataas (positibo) o pababa mula sa mid-depth;
   - sa **flange** o **plate**: sa kabuuan ng lapad, mula sa center line.
- Ang simula ng member ay ang unang puntong na-click mo nang ilagay ito. Ipinapakita ng mga row na {{ui:Mga dulo (x, y, z mm)}} kung alin ang aling dulo.

## Magdagdag ng butas

1. Piliin ang member.
2. Sa kahon na {{ui:Mga butas}} ng panel na {{ui:Properties}}, piliin ang {{ui:Mukha}}: {{ui:Web}}, {{ui:Itaas na flange}} o {{ui:Ibabang flange}} (para sa I-shape, channel o rectangular tube), o {{ui:Mukha ng plato}} (para sa plate).
3. I-type ang {{ui:x kasama ang haba (mm)}}, {{ui:y sa kabuuan (mm)}} at {{ui:Diameter (mm)}}. Nagsisimula ang form sa x 100, y 0, diameter 22.
4. Piliin ang {{ui:Magdagdag ng butas}}.

Sinasabi ng status bar: "Naidagdag ang butas. Ang x ay mula sa cut start; ang y ay mula sa section center (web: pataas, flange/plate: sa kabuuan)." Lumalabas ang butas sa listahan, at sa view bilang madilim na plug sa mukha.

Para mag-alis ng butas, piliin ang × sa tabi nito sa listahan.

Hindi pa tumatanggap ng butas ang mga angle at round tubes: sinasabi ito ng kahon nilang {{ui:Mga butas}}.

:::note
Sa 3D view, iginuguhit ang mga butas bilang madilim na plug, hindi tinatagusan sa steel. Totoong butas ang mga ito sa NC files, shop drawings at IFC export.
:::

Ang butas na nasa labas ng dulo ng piyesa ang x ay lumalabas sa tab na {{ui:Mga problema}} bilang "May butas na nasa labas ng dulo ng piyesa."

## Magdagdag ng cope

Para sa I-shapes ang copes: pinuputol nila ang itaas o ibabang flange (at ang lalim na iyon ng web) sa isang dulo, para makalusot ang beam sa ibang member.

1. Piliin ang I-shape na member.
2. Sa kahon na {{ui:Mga cope}}, piliin ang {{ui:Dulo}} ({{ui:Simula}} o {{ui:Dulo}}) at {{ui:Gilid}} ({{ui:Itaas}} o {{ui:Ibaba}}).
3. I-type ang {{ui:Haba (mm)}} (kasama ang beam mula sa dulong iyon) at {{ui:Lalim (mm)}} (pababa mula sa itaas, o pataas mula sa ibaba). Nagsisimula ang form sa 100 x 40.
4. Piliin ang {{ui:Magdagdag ng cope}}.

Ipinapakita ng view ang cope na nakaputol sa steel. Ang listahan ay nagbabasa, halimbawa, "Itaas sa simula: 100 x 40". Alisin ito gamit ang × nito.

Parisukat ang copes: wala pang radius sa loob ng sulok.

## Paano nakakaapekto ang butas at cope sa marks

Magkakaroon lang ng parehong part mark ang dalawang piyesa kung magkatugma ang kanilang butas at cope sa loob ng 1 mm, kasama ang pagpapahintulot na nakabaligtad ang piyesa. Ang pagdagdag ng butas sa isang beam ng grupo ay nagbibigay dito ng bagong mark. Tingnan ang [Mga panuntunan sa mark](topic:mark-rules).
