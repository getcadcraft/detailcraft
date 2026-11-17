---
title: Saišu fasonplāksnes
summary: Savienot saites galu ar kolonnu vai siju ar fasonplāksni: leņķi un plakanie stieņi savilkti ar skrūvēm, caurules iegrieztas un metinātas.
keywords: fasonplāksne, saite, sasaiste, vertikālā sasaiste, leņķa saite, plakanais stienis, lente, HSS saite, nažveida plāksne, iegriezta caurule, savienot
from: 22f6598d
---

Saites fasonplāksne ir darbnīcā pie kolonnas (vai sijas) metināta plāksne, uz kuras balstās saite, saites plaknē. DetailCraft atbrīvo saites galu no visa savienojumā, novieto un izmēro fasonplāksni un pievieno saiti tai: **leņķis** vai **plakanais stienis** ar vienu skrūvju rindu vai **caurule** (kvadrātveida, taisnstūra vai apaļa HSS), kas uzvilkta pār fasonplāksni un metināta.

## Kur tas darbojas

- Saites gals atrodas kolonnas vai sijas līnijā (līdz 1 mm), un saite nav gandrīz paralēla šai līnijai. Ja ir kolonna, tā ir balsts; citādi – sija.
- Fasonplāksne atrodas saites plaknē un balsta līnijā. **Leņķim** viena mala jābūt šajā plaknē, bet **plakanajam stienim** – tā virsmai: pagrieziet saiti (tās {{ui:Pagrieziens (°)}}), līdz tas izpildās. Ja leņķa malas ir 45° leņķī pret plakni, DetailCraft to paziņo un neko neveido.
- I-veida profili un kanāli kā saites nav savienojami.

## Fasonplāksņu pievienošana

1. Atlasiet vienu vai vairākas saites.
2. Izvēlieties {{ui:Fasonplāksne}} grupas {{ui:Savienot}} izvēlnē {{ui:Vairāk}}.
3. Katram atlasīto saišu galam, kas balstās uz kolonnas vai sijas un kuram nav fasonplāksnes, tā tiek pievienota.

Atlasiet fasonplāksni (noklikšķiniet uz plāksnes), lai mainītu tās iestatījumus. {{ui:Piemērot līdzīgiem (n)}} to nokopē uz katru brīvu saites galu ar tādu pašu saites un balsta profilu.

## Ko DetailCraft aprēķina

- **Atgriezums.** Saite šajā galā tiek saīsināta, līdz tās stūri atbrīvojas no {{ui:Saites atstarpe}} (25), visiem elementiem savienojumā (blakus tai vai aiz tās gala, ja elements tur beidzas) un balstplāksnes zem kolonnas.
- **Skrūves (leņķi, plakanie stieņi).** {{ui:Skrūves}} (3) vienā līnijā gar saiti, pirmā – {{ui:Skrūves gala attālums}} (40) no griezuma gala, ar {{ui:Skrūvju solis}} (75). Leņķī tās iet caur malu fasonplāksnes plaknē, {{ui:Skrūvju līnijas attālums}} no papēža (0 = malas vidū); plakanajam stienim – pa tā centra līniju (vai nobīdītas par līnijas attālumu). Skrūvju satvere = mala vai plakanais stienis + fasonplāksne.
- **Fasonplāksne.** Taisnstūris: no balsta virsmas līdz aiz pēdējās skrūves par gala attālumu un gar balstu tik tālu, cik to prasa skrūves. Tā atrodas pie leņķa malas aizmugures (vai plakanā stieņa virsmas). Caurulei tā iet caur caurules vidu zem {{ui:Caurules pārklājums uz fasonplāksnes}} (200) caurules, ar vietu metinājumiem.
- **Savienojumi.** Kolonnas pamatnē fasonplāksne tiek nolaista līdz balstplāksnei. Ja sija šķērso savienojumu (saite uz sijas un kolonnas stūri), fasonplāksne paliek zem vai virs sijas. Ja tas atstāj skrūves vai pārklājumu bez gala attāluma, DetailCraft brīdina.
- **Metinājumi.** Fasonplāksne pie balsta abās pusēs. Caurule pie fasonplāksnes – četras līnijas gar pārklājumu.

## Noderīga informācija

- Fasonplāksne pieder balsta mezglam (darbnīcā metināta). Saite tiek piegādāta ar izurbtiem caurumiem un iet savā NC failā.
- Caurules iegriezums modelī netiek izgriezts; [sadursmju pārbaude](topic:clash-check) neskar saiti un tās fasonplāksni.
- Fasonplāksne netiek metināta pie sijas, ar kuru tā saskaras, un stūra fasonplāksnes, kas metinātas gan pie sijas, gan pie kolonnas, nošķeltie stūri un Uniform Force Method savienojuma darba punktu izkārtojums vēl nav izveidoti.
- DetailCraft neprojektē fasonplāksni vai skrūves (izturības pārbaužu nav); brīdinājumi attiecas uz attālumiem un atbilstību.
