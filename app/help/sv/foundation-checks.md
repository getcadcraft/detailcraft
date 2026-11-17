---
title: Grundkontroller
summary: Kontrollera plintar, kombinerade plintar och plattor mot jordmånen du beskriver, sättning, flexibel platta på fjädrar, pålgrupper och stödmurar. Ett hjälpmedel för en ingenjör att granska.
keywords: grund, plint, kombinerad plint, platta, sättning, bäddmodul, fjädrar, kantpelare, hörnpelare, bärighet, glidning, välting, genomstansning, ensidig skjuvning, böjning, förankring, minsta armering, pålgrupp, stödmur, ACI 318-19
from: 6961ad52
---

:::warning
Det här är första ordningens kontroller för en ingenjör att granska, inte en godkänd dimensionering. Tillåtet bärighetstryck och friktionskoefficienten är dina: DetailCraft känner inte till din jord.
:::

Fliken {{ui:Grundläggning}} kontrollerar plintarna i modellen mot de pelarlaster du anger.

## Beskriv jorden

Skriv in {{ui:Tillåtet bärighetstryck}} och {{ui:Friktionskoefficient vid basen}}. Båda börjar på 0, vilket betyder ej angivet: kontrollen visar då trycket som en anmärkning och säger inte att det godkänns. För sättning, skriv in jordens modul {{ui:Es}} (MPa), dess Poissons tal och den sättning du tillåter (25 mm till att börja med). För en flexibel platta, skriv in en bäddmodul {{ui:ks}}. Fyllningen över plinten, jordens volymvikt, säkerhetsfaktorerna för glidning och välting (1.5 till att börja med) och järnets sträckgräns finns också där.

## Ange lasterna

Varje plint har en lista över pelarlaster. Använd {{ui:Lägg till en pelarlast}} och fyll i bruksraden (för bärighet, glidning och välting) och den dimensionerande raden (för hållfasthetskontrollerna): den vertikala lasten P nedåt, de horisontella krafterna Vx och Vy på plintens överkant, momenten Mx och My, pelarens placering på plinten och dess storlek.

Eller kör fliken {{ui:Analys}} och tryck på {{ui:Hämta pelarlaster från Analys}}: varje upplag som står på en plint blir en pelarlast, från de bruks- och dimensionerande uppsättningar du väljer. Ett positivt My belastar plintens +x-sida mer; ett positivt Mx belastar −y-sidan mer.

## Vad som kontrolleras

Från bruksbelastningarna, med plintens egen vikt och fyllningen inräknade:

- **Bärighet:** trycket under en styv plint. Inom mittentredjedelen är hela basen i kontakt; utanför den lyfter en del av basen och toppen blir högre. En resultant utanför basen underkänns.
- **Glidning:** friktion gånger den vertikala lasten mot den horisontella kraften.
- **Välting:** resultantens avstånd från kanten.
- **Sättning:** den elastiska sättningen av medeltrycket på ett halvrum med den modul du angett, i mitten och vid ett hörn (Timoshenko och Goodiers lösning för en flexibel rektangel), mot gränsvärdet. Det är en övre gräns för en styv plint och bortser från ett jordlager med begränsat djup, avlastning genom den uppschaktade jorden och konsolidering. Utan modul visar den trycket som en anmärkning.

Enbart från de dimensionerande pelarlasterna (ACI 318-19):

- **Böjning** vid pelarens yta, med minsta armering (0.0018 för 420 MPa-järn) och de järn du ritat.
- **Ensidig skjuvning** på avståndet d från ytan.
- **Genomstansning** på avståndet d/2 runt varje pelare, med pelarens moment. För en pelare nära en kant begränsas det kritiska snittet av plintens kant (tre sidor vid en kant, två vid ett hörn, ACI 318-19 22.6.4.1 och det mindre αs i tabell 22.6.5.2), och momentet kring snittets egna centrum inkluderar lastens förskjutning.
- **Förankring** av järnen förbi pelarens yta, raka eller med sina krokar.
- **Djup** ovanför de nedre järnen (150 mm).

En kombinerad plint eller platta behandlas som styv, och skjuvkraft och moment kommer från statik på snitt över hela bredden.

## En flexibel platta på fjädrar

Markera {{ui:Analysera den här plinten som en flexibel platta på fjädrar}} när plinten bär många pelare och den styva plinten är för grov. Plinten blir en platta av fyrnodselement på en bädd av fjädrar (den {{ui:ks}} du skrev in, samlad i noderna), och varje pelares last fördelas över noderna i dess egen fotavtryck. En andra tabell ger det största jordtrycket och sättningen (och skillnaden mellan störst och minst), böjmomentet i båda riktningarna med den armering det kräver, dragspänning upptill mot den oarmerade betongens hållfasthet (en plint har inga övre järn), ensidig skjuvning på avståndet d från pelarna, och genomstansning mot fjädrarnas egna tryck. Nätet förfinas tills en pelare är tre element bred; en stor platta tar några sekunder. Plattans egen vikt och jorden ovanför den tar ut varandra och utelämnas.

Varje underkänd kontroll finns i panelen {{ui:Problem}} med sin paragraf.

## Pålgrupper och stödmurar

{{ui:Lägg till en pålgrupp}} placerar ett rutnät av pålar under en pålplatta: skriv in lasten och momenten samt vad en påle får bära i tryck och drag (pålkonstruktionens värden, inte den här fliken). Varje pålas reaktion är P/n plus dess andel av momenten (elastiska metoden), och största tryck och eventuellt drag kontrolleras.

{{ui:Lägg till en stödmur}} kontrollerar en konsolmur mot plan återfyllnad, per meter: aktivt jordtryck enligt Rankine, välting kring tån, glidning och tryck under basen. Passivt jordtryck framför tån utelämnas. Din assistent kan köra samma kontroller med `pile_group_check` och `retaining_wall_check`.

Pålgrupper, murar och reglaget för platta sparas i modellfilen, och en underkänd kontroll finns i {{ui:Problem}}.
