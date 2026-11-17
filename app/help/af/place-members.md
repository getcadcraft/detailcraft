---
title: Plaas kolomme, balke en skoore
summary: Kies 'n profiel, materiaal en posisie, en klik dan op roosterkruisings of tik hulle in om staallede te plaas.
keywords: kolom, balk, skoor, lid, plaas, profiel, materiaal, rotasie, posisie, verskuiwing, invoeg, voeg by rooster
from: d6db0dc1
---

Lede word op roosterkruisings geplaas: 'n kolom op een, 'n balk of 'n skoor tussen twee. Stel eers [roosters en vlakke](topic:grids-and-levels) op.

## Kies 'n gereedskap en sy opsies

1. Kies {{ui:Kolom}} ({{key:C}}), {{ui:Balk}} ({{key:B}}) of {{ui:Skoor}} ({{key:R}}) in die {{ui:Plaas}}-groep.
2. Die {{ui:Eienskappe}}-paneel aan die regterkant word "Plaas 'n kolom" (of balk, of skoor) en wys die opsies vir die volgende lid:
   - {{ui:Profiel}}: kies uit die lys. Groottes is gegroepeer volgens katalogus (W-vorms, Kanale, Hoeke, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, en jou pasgemaakte profiele). Sien [Profielkatalogus](topic:profile-catalog).
   - {{ui:Materiaal}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 of S355.
   - {{ui:Posisie}}: waar die snit op die lyn tussen die twee punte sit: {{ui:Bokant staal op die lyn}}, {{ui:Gesentreer op die lyn}} of {{ui:Onderkant op die lyn}}.
   - {{ui:Rotasie (°)}}: draai die snit om die lid se eie as.
   - {{ui:Tot}} (net kolomme): {{ui:Die volgende vlak op}}, of 'n vlaknaam.
3. Onder die opsies wys 'n {{ui:Profiel}}-blokkie die gekose snit se afmetings, oppervlakte, massa per meter en die katalogus waaruit dit kom.

Die verstek is W12x50 in A992 vir kolomme (gesentreer), W16x26 in A992 vir balke (bokant staal op die lyn) en HSS6x6x1/4 in A500 Gr C vir skore (gesentreer). Die opsies bly gestel totdat jy hulle verander.

## Plaas deur te klik

### 'n Kolom

1. Kies {{ui:Plan}} en kies die vlak waar die kolom begin.
2. Kies {{ui:Kolom}}.
3. Beweeg die aanwyser naby 'n kruising. Die naaste kolletjie lig op en die statusbalk noem dit.
4. Klik. Die kolom loop van daardie vlak na die volgende vlak op (of na die {{ui:Tot}}-vlak). Die statusbalk sê byvoorbeeld "Kolom W12x50 by A/1, Vlak 1 tot Vlak 2."
5. Hou aan klik om meer te plaas. Druk {{key:Esc}} as jy klaar is.

As daar geen vlak bo die een is wat jy geklik het nie, sê die statusbalk "Daar is geen vlak bo Vlak 2 vir die kolom om te bereik nie. Voeg eers 'n vlak by."

### 'n Balk

1. Kies {{ui:Plan}} en kies die balk se vlak.
2. Kies {{ui:Balk}}.
3. Klik die eerste kruising. Die statusbalk sê "Vanaf A/1 by Vlak 2. Klik nou die ander einde (Esc kanselleer)." 'n Stippellyn volg die aanwyser.
4. Klik die tweede kruising. Die balk verskyn.
5. Klik weer om die volgende balk te begin, of druk {{key:Esc}}.

{{key:Esc}} na die eerste klik kanselleer net daardie punt; 'n tweede {{key:Esc}} berg die gereedskap weg.

### 'n Skoor

'n Skoor loop tussen twee kruisings op verskillende vlakke, so dit is die maklikste in {{ui:Aansig}}.

1. Kies {{ui:Aansig}} en kies die lettergerade roosterlyn waarop die skoor is.
2. Kies {{ui:Skoor}}.
3. Klik die onderste einde, dan die boonste einde.

Aansigte bestaan net vir lettergerade roosterlyne. Vir 'n skoor in 'n raam langs 'n genommerde lyn (van A tot B), gebruik {{ui:3D}} of die {{ui:Voeg by rooster}}-vorm hieronder.

:::touch
Op 'n aanraakskerm, tik naby die kruising: 'n tik kies die naaste kolletjie binne 'n kort afstand en doen niks as geen kolletjie naby is nie. Daar is geen uitlig voordat jy tik nie, so kontroleer die statusbalkboodskap na elke tik. Een-vinger-sleep draai of skuif die aansig in plaas daarvan om te plaas.
:::

## Plaas per rooster, sonder klik

Elke plaasgereedskap het 'n {{ui:Voeg by rooster}}-vorm onderaan die {{ui:Eienskappe}}-paneel. Dit werk net met die sleutelbord en het nie die 3D-aansig nodig nie.

1. Kies die gereedskap, byvoorbeeld {{ui:Balk}}.
2. In {{ui:Voeg by rooster}}, kies {{ui:Vanaf rooster (letter)}}, {{ui:Vanaf rooster (nommer)}} en {{ui:Vanaf vlak}}.
3. Kies {{ui:Tot rooster (letter)}}, {{ui:Tot rooster (nommer)}} en {{ui:Tot vlak}}.
4. Kies {{ui:Voeg by}}.

Vir 'n kolom of fondasie het die vorm net een punt: {{ui:Rooster (letter)}}, {{ui:Rooster (nommer)}} en {{ui:Vlak}}.

## Verander 'n lid nadat jy dit geplaas het

1. Druk {{key:Esc}} (of kies {{ui:Kies}}, {{key:V}}) en klik die lid.
2. In die {{ui:Eienskappe}}-paneel, verander {{ui:Naam}}, {{ui:Profiel}}, {{ui:Materiaal}}, {{ui:Posisie}} of {{ui:Rotasie (°)}}.
3. Om dit te skuif, wysig die x, y en z van {{ui:Begin}} of {{ui:Einde}} onder {{ui:Eindpunte (x, y, z mm)}}. Die roosternaam van elke einde wys daaronder, of sy koördinate wanneer dit buite die rooster is.

Elke verandering is een ontdoen-stap. Onder die velde sien jy die lid se {{ui:Deelmerk}}, {{ui:Samestelling}}, {{ui:Snitlengte}}, {{ui:Gewig}} (bruto: gate en uitsnitte word nie afgetrek nie) en uit watter katalogus die profiel kom.

Lede kan nog nie gesleep of in 'n reeks geskik word nie. Om 'n ander lid soos dit te maak, kopieer en plak dit, of dupliseer dit ({{key:Mod+D}}): sien [Kopieer, plak en dupliseer](topic:copy-paste).

## Skrap 'n lid

Kies dit en druk {{key:Delete}} of {{key:Backspace}}, of kies {{ui:Skrap}}. Verbindings daarop gaan ook. {{key:Mod+Z}} bring alles terug.

## Goed om te weet

- **Waarheen 'n kolom wys.** By {{ui:Rotasie (°)}} 0, wys 'n kolom se flense langs x, na die naburige genommerde roosterlyne. 'n Balk van rooster 1 na rooster 2 raam in 'n flens; 'n balk van A na B raam in die lyf. Eindplate word net in flense gebou, so as jou balke van A na B loop, gee daardie kolomme 'n rotasie van 90.
- **Balke op 'n vlak hang onder dit** met die verstek {{ui:Bokant staal op die lyn}}. Kies {{ui:Gesentreer op die lyn}} as jou vlakke lidmiddellyne is.
- **Kolomme loop vlak tot vlak.** Vir 'n kolom deur twee verdiepings, stel {{ui:Tot}} na die hoër vlak.
- **Skuins balke** is toegelaat (kies punte op verskillende vlakke), maar eindplate word nog nie daarop gebou nie.

Volgende: [Verbind balke met kolomme met eindplate](topic:end-plates).
