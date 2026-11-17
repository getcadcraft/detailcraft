---
title: Esporta IFC per il coordinamento
summary: Scrive un file IFC4 dell'intero modello, acciaio, bulloni, plinti e armatura, da condividere con architetti, ingegneri e altri software.
keywords: ifc, ifc4, ifc2x3, bim, esporta, importa, importa ifc, fori, bulloni, bulloni sfusi, aperture, elementi di fissaggio, coordinamento, scambio di modelli, step, openbim, interferenza, visualizzatore
from: cfcb0cd6
---

L'esportazione IFC scrive l'intero modello come un unico file IFC4 che i software BIM e i visualizzatori IFC possono aprire.

## Esporta

1. Scegliere {{ui:IFC}} nel gruppo {{ui:Output}}.
2. Il browser scarica `<name>.ifc`. La barra di stato indica cosa è stato incluso, per esempio "IFC4 esportato: 25 pezzi, 88 elementi di fissaggio, 7 plinti, 132 barre."

Se il modello non ha pezzi, plinti o barre, la barra di stato indica "Nessun elemento da esportare per ora."

## Cosa contiene il file

| In DetailCraft | Nel file IFC |
|---|---|
| Ogni livello | Un piano dell'edificio (IfcBuildingStorey), sotto un unico progetto, sito ed edificio |
| Griglie | Un IfcGrid con i suoi assi ed etichette |
| Pilastri, travi, controventi | IfcColumn, IfcBeam, IfcMember (controvento), ciascuno come estrusione di una forma di profilo standard con le sue dimensioni reali |
| Piastre, piastre di testa, piastre di base | IfcPlate |
| Fori e scassi | Aperture (IfcOpeningElement) ricavate dal pezzo |
| Un'asta e le sue piastre saldate | Un gruppo (IfcElementAssembly) con la marca di assieme |
| Bulloni e tirafondi | IfcMechanicalFastener con diametro e lunghezza |
| Plinti | IfcFooting (plinto isolato), con il testo del calcestruzzo come materiale |
| Ogni barra | IfcReinforcingBar con la sua marca, diametro, area e lunghezza, tracciata lungo il suo asse reale con archi veri nelle piegature |

L'etichetta di ogni pezzo è la sua marca di pezzo. Ogni elemento porta anche un gruppo di proprietà "DetailCraft" con marche, profilo e peso. Ogni elemento si colloca nel piano più alto al livello o al di sotto del suo punto più basso. I materiali sono raggruppati per classe.

## Identificativi stabili per le riesportazioni

L'identificativo IFC (GlobalId) di ogni elemento viene calcolato a partire dal nome del modello e dall'identificativo dell'elemento stesso nel modello. Esportando due volte lo stesso modello, gli identificativi coincidono, così i software che confrontano le versioni possono capire cosa è cambiato.

:::warning
Rinominare il modello modifica tutti gli identificativi. Mantenere invariato il nome del modello tra una emissione e l'altra di un progetto.
:::

## Verifica il file

I file IFC di DetailCraft vengono riletti da un lettore IFC indipendente nella sua suite di test. I programmi differiscono nel modo di leggere gli IFC, quindi aprire il file nel software usato dal team prima di affidarsi ad esso. Anche l'app BimCraft di CadCraft apre i file IFC.

## Non ancora

- Importare da un file IFC collegamenti, plinti e armatura. {{ui:Import IFC}} importa travi, pilastri, controventi, piastre, griglie, livelli, fori, scassi e bulloni, e indica cosa ha lasciato fuori.
- Dati analitici o di analisi strutturale.
- Qualsiasi cosa diversa dalla vista di riferimento IFC4.

## Importa

{{ui:Import IFC}} nel gruppo {{ui:File}} (oppure trascinando un file `.ifc` sulla vista) crea un nuovo modello da un file IFC2X3 o IFC4:

- **Travi, pilastri, controventi e piastre** il cui corpo è un unico profilo estruso noto a DetailCraft, abbinato al catalogo oppure mantenuto come profilo personalizzato; **griglie** e **livelli** dalla griglia e dai piani del file.
- **Fori:** ogni apertura circolare (IfcOpeningElement che fora un pezzo importato) perpendicolare a una delle facce del pezzo: anima o ali di un profilo a I o a C, pareti di un tubo, una piastra, le ali di un angolare. Un foro che attraversa entrambe le pareti di un tubo viene importato una sola volta.
- **Scassi:** un'apertura rettangolare che occupa tutta la larghezza di un profilo a I o a C da un'estremità, dall'alto verso il basso o dal basso verso l'alto.
- **Bulloni:** ogni IfcMechanicalFastener o IfcFastener, con diametro, lunghezza, classe e tipo (bullone o tirafondo), come **bullone sciolto**. I bulloni sciolti compaiono nella vista, nella distinta dei materiali e nell'esportazione IFC, e restano dove sono quando si spostano le aste. Il pannello {{ui:Properties}}, con nulla selezionato, li conta e ha {{ui:Remove loose bolts}} per quando si aggiungono collegamenti.

Il rapporto elenca tutto il resto per classe, con il motivo dell'esclusione: muri e solette, plinti e barre, fori asolati, fori in tubi tondi, collegamenti (un file IFC porta le loro piastre e i bulloni, non la regola che li ha generati).
