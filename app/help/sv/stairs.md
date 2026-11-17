---
title: Trappor
summary: Placera en rak stålträppa från dess stighöjd, steglängd och bredd. Två trappvangar och stegplåtar, en svetsad sammanställning.
keywords: trappa, trappor, trappvange, steg, sättsteg, steglängd, nosing, trapplopp, stålträppa, ibc 1011, blondel
from: 62fa3845
---

En rak stålträppa: två trappvangar (U-profiler med flänsarna inåt, eller flatjärn på kant) och en plåtsteg vid varje steg, svetsade mellan dem. DetailCraft räknar ut antalet sättsteg från stighöjden, kontrollerar dem mot byggreglernas gränser och gör trappan till en verkstadssammanställning.

## Placera en trappa

1. Välj {{ui:Trappa}} i gruppen {{ui:Placera}}, eller tryck {{key:S}}.
2. Ställ in trappan till höger: **stigriktningen** (0° stiger längs +x, 90° längs +y), **stighöjden** (0 = upp till nästa våning), **steglängden**, den **fria bredden** mellan trappvangarna, **högsta tillåtna sättsteg**, **trappvangen**, **stegplåtens tjocklek**, **nosingen** och materialet.
3. Klicka på en rutnätsskärning: det är foten av första sättsteget, på trappans mittlinje.

Statusfältet säger hur många sättsteg den gjorde. Markera trappan (klicka på en trappvange eller ett steg) för att ändra någon av dess inställningar, position eller fas. Egenskaperna visar också sättstegen, stegen, löpningen, lutningen och 2 × sättsteg + steglängd.

## Vad DetailCraft räknar ut

- **Sättsteg.** Så få som håller varje sättsteg vid eller under högsta tillåtna: en stighöjd på 3000 mm vid 178 mm eller mindre ger 17 sättsteg om 176.5 mm. Det finns ett steg färre än sättsteg (översta våningen är det sista steget).
- **Steg.** En plåt steglängd + nosing djup (280 + 25 = PL6x305 som standard) och lika lång som den fria bredden, med sin ovansida på varje sättstegshöjd och sin framkant (nosingen) framför sättstegslinjen.
- **Trappvangar.** I trappans lutning, från där de möter den nedre våningen till där de möter den övre, precis utanför den fria bredden, med sin överkant 50 mm över nosingslinjen. En U-profils flänsar vetter in mot trappan; ett flatjärn som PL12x250 står på kant.
- **Svetsar.** Varje steg till båda trappvangarna. Stegen och den högra trappvangen svetsas till den vänstra, så att trappan får ett sammanställningsmärke (ST1) och en egen sammanställningsritning. Trappvangarna får delmärken st…, stegen p….
- **Kontroller.** Varningar när ett sättsteg ligger utanför 4 till 7 in. (102 till 178 mm) eller steglängden är under 11 in. (279 mm), gränserna i IBC 2021 avsnitt 1011.5.2; när 2 × sättsteg + steglängd ligger utanför 600 till 650 mm (en vanlig komfortregel); och när trappvangen är för låg för att bära stegen. En okänd trappvangsprofil hindrar att trappan byggs.

## Bra att veta

- Flytta, rotera, spegla, kopiera, klistra in, ta bort och faser fungerar på en trappa som på en stång. En rotation vrider stigriktningen; en spegling skickar den åt det speglade hållet.
- Trappvangar exporteras till IFC som IfcMember och steg som IfcPlate; båda går till NC-filer och stycklistan. Kollisionskontrollen lämnar trappans egna delar ifred (de är svetsade ihop).
- Denna enkla trappa är ett lopp med plåtsteg. För vilplan, räcken med balusterstolpar, vikta plåtsteg eller gallersteg, en regeluppsättning du väljer, en kapplista och hålritningar för trappvangen, bocka i {{ui:Använd stålträppsgeneratorn}} i verktyget {{ui:Trappa}} (se Generator för stålträppor).
- Trappvangarna kapas rakt: deras ändsnitt mot våningarna görs inte.
- DetailCraft dimensionerar inte trappan: trappvangar och steg kontrolleras inte för hållfasthet eller nedböjning.
