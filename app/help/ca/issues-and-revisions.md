---
title: Incidències, revisions i registre de canvis dels plànols
summary: Mantingueu un únic historial d'incidències amb el model de l'arquitecte: llegiu les incidències, registreu instruccions d'obra, plànols de taller i models enllaçats contra una incidència, i consulteu el registre de canvis dels plànols.
keywords: incidència, revisió, revisions, registre de canvis, registre de canvis dels plànols, registre de plànols, instrucció d'obra, plànol de taller, model enllaçat, concurs, construcció, historial d'incidències, plànols de taller, fabricació
from: 4b9a1b7b
---

## Què faràs

Treballa amb el mateix historial d'incidències que la resta de l'equip. Veuràs quins fulls s'han emès amb cada revisió, i relacionaràs el que passa a obra amb la incidència a la qual pertany.

## Passos

1. Obriu **Incidències i revisions**.
2. Trieu **Llegeix un historial d'incidències** i seleccioneu el fitxer `.issues.json` desat des de BimCraft o una altra aplicació. Les seves incidències i registres s'afegeixen als vostres. No se'n substitueix cap.
3. Trieu **Afegeix un registre** per a una instrucció d'obra, un plànol de taller, un joc de marques, un model enllaçat o una nota. Seleccioneu la incidència a la qual correspon i el seu estat. Un fitxer que trieu es registra pel nom, la mida i el SHA-256; el fitxer es queda on és.
4. **Registre de canvis dels plànols** mostra una fila per a cada full i una columna per a cada incidència. Una revisió entre parèntesis s'ha tornat a emetre sense canvis.
5. **Baixeu el registre de canvis (CSV)** desa les incidències, la taula de fulls i els registres. **Desa l'historial d'incidències** escriu un fitxer que llegeixen les altres aplicacions.

## Cal saber-ho

- Els fulls es continuen emetent des de **{{ui:Plànols}}**, full per full. Aquestes emissions apareixen aquí: els fulls emesos en una mateixa data amb una mateixa nota són una sola incidència.
- Els registres i les incidències que llegiu es desen al fitxer del model. Cada canvi es pot desfer amb un sol pas de **Desfés**.
- Llegir dues vegades el mateix fitxer no afegeix res per duplicat. Quan dues còpies tenen el mateix registre, es conserva la més recent.
