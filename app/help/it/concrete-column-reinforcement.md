---
title: Armare un pilastro rettangolare in calcestruzzo
summary: Esempio svolto di dettaglio di un pilastro rettangolare in calcestruzzo in DetailCraft: collocarlo, dargli barre longitudinali e legature, leggere le verifiche, la sovrapposizione sopra di esso e le marche delle barre, e disegnarne il foglio di officina.
keywords: pilastro in calcestruzzo, pilastro rettangolare, armatura del pilastro, ferri longitudinali, barre verticali, legature, staffe, legature trasversali, sovrapposizione, giunzione, ferri di ripresa, rapporto di armatura del pilastro, 1 per cento, 8 per cento, passo delle legature, ACI 318-19 25.7.2, EN 1992-1-1 9.5, disegno di officina, marche delle barre, 8C1, 3C2
from: aee2a3ca
---

Questo argomento porta un pilastro quadrato da zero a un dettaglio verificato, disegnato e con distinta. Le regole generali per travi, solette e muri sono in [Dettagliare il calcestruzzo armato](topic:reinforced-concrete); qui si tratta del lato del pilastro, con valori che si possono riprodurre.

:::warning
DetailCraft dettaglia le barre che gli si forniscono. Non le progetta. Le barre qui sotto sono valori di partenza per l'esempio, non una raccomandazione: l'ingegnere responsabile sceglie diametro, numero e passo.
:::

## Cos'è un pilastro qui

Un pilastro rettangolare ha una larghezza (lungo la sua x locale) e una profondità trasversale (lungo la sua y locale), un copriferro netto fino alle legature, barre longitudinali su ciascuna faccia e legature chiuse. Ruotarlo ruota l'intero elemento; le facce restano "faccia di larghezza" e "faccia di profondità".

- Le barre longitudinali si danno come numero su una faccia di larghezza e numero su una faccia di profondità. Le barre d'angolo contano su entrambe, quindi 3 e 3 fanno 8 barre; 4 e 4 fanno 12.
- Le legature sono rettangoli chiusi con due uncini a un angolo, di 135° o 90°. La prima legatura si trova a una distanza fissata sopra il piano (e sotto la successiva), le zone d'estremità hanno un passo più stretto, il centro uno più largo.
- Cosa fanno le barre in alto: proseguire e sovrapporsi con le barre sopra, ripiegarsi con uncini a 90° nel solaio, oppure fermarsi sotto la sommità.

## Il pilastro svolto

Un pilastro di 400 × 400 mm, 3600 mm tra il piano superiore e quello inferiore, barre longitudinali #8, legature #3, copriferro netto di 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, interno.

1. Aprire la scheda {{ui:Calcestruzzo}} e impostare le linee di griglia e i livelli su cui poggia il pilastro (pannello di sinistra).
2. In {{ui:Aggiungi per griglia}}, scegliere {{ui:Pilastro in calcestruzzo}}, selezionare l'intersezione di griglia e i due livelli, impostare {{ui:Larghezza (mm)}} e {{ui:Profondità trasversale (mm)}} a 400 e scegliere {{ui:Aggiungi}}.
3. Nel pannello {{ui:Proprietà}} impostare:
   - {{ui:Copriferro netto (mm)}} 40;
   - {{ui:Ferri longitudinali}} #8, {{ui:Ferri su una faccia di larghezza}} 3, {{ui:Ferri su una faccia di profondità}} 3;
   - {{ui:Legature}} #3, {{ui:Uncini}} 135°, {{ui:Passo intermedio (mm)}} 300, {{ui:Lunghezza della zona d'estremità (mm)}} 600, {{ui:Passo nelle zone d'estremità (mm)}} 150, {{ui:Prima dalla faccia (mm)}} 50;
   - {{ui:Ferri in testa}} {{ui:Prosecuzione e sovrapposizione con i ferri sopra}}.

Ogni modifica è un passaggio annullabile.

### Cosa si ottiene

| Parte | Risultato |
|---|---|
| Barre longitudinali | 8 barre #8 (un anello 3 × 3), ciascuna lunga 4375 mm: il pilastro di 3600 mm più una sovrapposizione di 775 mm sopra |
| Sovrapposizione | 757 mm necessari per una sovrapposizione a compressione (ACI 318-19 25.5.5.1, fy 420), 775 mm previsti: il necessario arrotondato al successivo multiplo di 25 mm |
| Legature | 17 legature #3, ciascuna con una lunghezza di taglio di circa 1359 mm, con passo di 150 mm nelle due zone d'estremità da 600 mm e di 300 mm tra di esse |
| Rapporto di armatura | 2.5 % della sezione lorda (limiti 1 % e 8 %, ACI 318-19 10.6.1.1) |
| Interasse libero delle barre | 112 mm (servono almeno 40 mm, ACI 318-19 25.2.3) |
| Passo delle legature | 300 mm (ammesso 400 mm: il minimo tra 16 diametri di barra, 48 diametri di legatura e il lato minore, ACI 318-19 25.7.2.1) |
| Dimensione della legatura | #3 (ammessa fino a 9.5 mm, ACI 318-19 25.7.2.2) |

Tutte queste voci sono nell'elenco {{ui:Verifiche}} dell'elemento; la sovrapposizione è anche in {{ui:Sovrapposizioni e ancoraggi}}.

## Legature trasversali

Con una sola legatura perimetrale, sono trattenute solo le barre d'angolo. ACI 318-19 25.7.2.3 consente che una barra centrale su una faccia non sia sostenuta se si trova entro 150 mm liberi da una barra d'angolo. Con 3 barre su una faccia, come sopra, questo è soddisfatto. Con 4 o più barre su una faccia non lo è, e DetailCraft lo segnala come avviso ({{ui:Verifiche}} e Problemi): servono le "legature trasversali". **Le legature trasversali non sono ancora disegnate**: aggiungerle a mano nel disegno, oppure scegliere meno barre sulla faccia.

Per EN 1992-1-1, DetailCraft verifica il diametro della barra (almeno 8 mm), il numero di barre (almeno 4), l'area d'acciaio (dallo 0.2 % al 4 % della sezione), l'interasse libero e il passo delle staffe (9.5.2 e 9.5.3).

## La sovrapposizione, il plinto e il pilastro sottostante

- Dove **un plinto del modello sta sotto il pilastro**, il pilastro si sovrappone ai ferri di ripresa del plinto, e anche la loro sovrapposizione viene verificata.
- Dove **un altro pilastro del modello sta sotto di esso**, si sovrappone alle barre di quel pilastro.
- Indicare la propria {{ui:Lunghezza di sovrapposizione (mm, 0 = secondo necessità)}} per sostituirla; una più corta del necessario è un problema ed è contrassegnata con * nella tabella.
- Le sovrapposizioni a compressione sono usate per impostazione predefinita ({{ui:Sovrapposizione a compressione}} nelle impostazioni); scegliere {{ui:Sovrapposizione a trazione}} quando il pilastro può essere in trazione.

## Marche, distinta e foglio di officina

Barre identiche condividono una marca: le barre longitudinali del pilastro sopra sono 8C1, le sue legature 17C2 (prima il numero, poi la lettera del tipo C per pilastro e il numero progressivo). Compaiono nella scheda {{ui:Distinta di piegatura}}, con la lunghezza di taglio e il peso, e nel CSV da {{ui:Uscita}} › {{ui:Altro}} › {{ui:Piegatura}}.

Scegliere {{ui:Disegno di officina}} accanto al pilastro per ottenere un foglio con il pilastro in prospetto (ogni barra, la sua marca, le zone delle legature e la sovrapposizione quotati) e una sezione a metà altezza, seguito dal foglio di piegatura delle barre. Salvare {{ui:Questa tavola in PDF}}.

## Cosa non fa questo

- Pilastri tondi e a spirale, e pilastri non rettangolari: non ancora realizzati.
- Legature d'angolo e trasversali nella sezione, e dettagli sismici (ACI 318-19 capitolo 18): non ancora realizzati.
- Giunzioni in posizioni scelte, o sfalsate: tutte le barre si sovrappongono in una sola sezione.
- Se le barre bastano per il carico: questo è il progetto dell'ingegnere.
