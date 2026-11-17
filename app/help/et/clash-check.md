---
title: Kontrolli kokkupõrkeid
summary: Leia liikmed, plaadid ja vundamendid, mis ulatuvad teineteise sisse, jättes välja osad, mida liide peab kokku puutuma, ja mine iga kokkupõrke juurde.
keywords: kokkupõrge, kokkupõrke kontroll, põrge, häiring, kattumine, lõikumine, kõva kokkupõrge, koordineerimine, mudeli kontroll
from: 04d72d3b
---

Ava vaate all olev vahekaart {{ui:Kokkupõrked}} ja vali {{ui:Kontrolli kohe}}. DetailCraft vaatab iga osade paari näidatud faasides: teras terasesse ja teras vundamenti. Vahekaart loetleb iga kokkupõrke, sügavaima esimesena, koos:

- kahe osaga, märgi (või vundamendi märgi) ja profiili järgi;
- **Kattumine (mm)**: kui kaugele ühe osa punkt on teise sees, kuni lähima pinnani;
- **Lähedal**: ruudustiku ristumine ja tasand, kus see asub, või selle koordinaadid;
- {{ui:Näita}}: valib mõlemad osad ja toob koha vaate keskele.

Vahekaardi pealkiri näitab, mitu kokkupõrget viimane kontroll leidis. Kontroll ei käivitu iseenesest: pärast mudeli muutmist ütleb nimekiri seda ja {{ui:Kontrolli kohe}} käivitab kontrolli uuesti.

## Mis ei ole kokkupõrge

- Osad, mis ainult puudutavad: plaat vastu flanši, aluseplaat vundamendil, kaks liiget otsast otsa. **Tolerants (mm)** määrab, kui palju kaks osa tohivad teineteise sisse minna enne, kui see loetakse (algselt 1 mm; kuni 50).
- Osad, mida liide ühendab: otsaplaat oma talaga ja posti flanšiga, millele see on poltidega kinnitatud; selle liite tala ja post; aluseplaat oma postiga; splaissi plaadid mõlema tükiga; diagonaal oma sõlmeplaadiga (toru pesa ei lõigata mudelisse). Liide tähendab, et need peavad kokku puutuma.
- Aluseplaadi nihkeotsik selle all olevas vundamendis (see asub valuõõnes).
- Poldid ja ankurvardad (need läbivad auke) ning armatuur.
- Peidetud faasides olevad osad. Vt [Faasid](topic:phases).

Diagonaal või tala, mis jookseb posti sisse ilma selle ja posti vahelise liiteta, **on** kokkupõrge: see liide vajab veel ühendust. Näidisraamistiku diagonaal näitab seda: sellel ei ole sõlmeplaati. Vali see ja vali {{ui:Sõlmeplaat}} ([Diagonaalide sõlmeplaadid](topic:brace-gussets)) ning selle kokkupõrked kaovad.

## Hea teada

- Kattumine mõõdab sügavust materjali sees, seega liige, mis on sisse ajatud posti õhukesse võrku või flanši, näitab vaid mõnda millimeetrit ka siis, kui see läheb kaugele sisse.
- Osi kontrollitakse nii, nagu need on lõigatud: lõiked ja tala tagasilõige otsaplaatide juures arvestatakse. Augud ei arvestata.
