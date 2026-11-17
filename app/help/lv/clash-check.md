---
title: Pārbaudīt sadursmes
summary: Atrodiet elementus, plāksnes un pamatus, kas iekļūst viens otrā, izņemot daļas, ko savienojums paredz savienot, un pārejiet pie katras sadursmes.
keywords: sadursme, sadursmju pārbaude, kolīzija, traucējums, pārklāšanās, krustošanās, cieta sadursme, koordinācija, modeļa pārbaude
from: 04d72d3b
---

Atveriet cilni {{ui:Sadursmes}} zem skata un izvēlieties {{ui:Pārbaudīt tagad}}. DetailCraft pārbauda katru detaļu pāri redzamajās fāzēs: tērauds pret tēraudu un tērauds pret pamatu. Cilnē uzskaitīta katra sadursme, vispirms dziļākā, ar:

- abām detaļām pēc detaļas marķējuma (vai pamata marķējuma) un profila;
- **Pārklāšanās (mm)**: cik tālu viena detaļas punkts atrodas otras iekšpusē, līdz tuvākajai virsmai;
- **Tuvumā**: režģa krustpunkts un līmenis, kurā tā atrodas, vai tās koordinātes;
- {{ui:Rādīt}}: atlasa abas detaļas un novieto vietu skata vidū.

Cilnes nosaukumā redzams, cik sadursmju atrada pēdējā pārbaude. Pārbaude neizpildās pati no sevis: pēc modeļa izmaiņām saraksts to norāda, un {{ui:Pārbaudīt tagad}} palaiž to atkārtoti.

## Kas nav sadursme

- Detaļas, kas tikai saskaras: plāksne pret flanši, pamatplāksne uz sava pamata, divi elementi gals pret galu. **Pielaide (mm)** nosaka, cik tālu divas detaļas drīkst iekļūt viena otrā, pirms tas tiek uzskatīts (sākumā 1 mm; līdz 50).
- Detaļas, ko savienojums savieno: galaplāksne ar savu siju un ar kolonnas flanši, pie kuras tā ir piestiprināta ar skrūvēm; šā mezgla sija un kolonna; pamatplāksne ar savu kolonnu; sagarinājuma savienojuma plāksnes ar abām daļām; saite ar savu fasonplāksni (caurules iegriezums modelī netiek izgriezts). Savienojums paredz, ka tās saskaras.
- Pamatplāksnes bīdes ķere pamatā zem tās (tā atrodas javas kabatā).
- Skrūves un enkurstieņi (tie iet caur caurumiem) un stiegrojums.
- Detaļas paslēptās fāzēs. Skatiet [Fāzes](topic:phases).

Saite vai sija, kas ietriecas kolonnā bez savienojuma starp tām, **ir** sadursme: šim mezglam joprojām nepieciešams savienojums. To parāda parauga rāmja saite: tai nav fasonplāksnes. Atlasiet to un izvēlieties {{ui:Fasonplāksne}} ([Saišu fasonplāksnes](topic:brace-gussets)), un tās sadursmes pazūd.

## Lietderīga informācija

- Pārklāšanās mēra dziļumu materiālā, tāpēc elements, kas iekļuvis kolonnas plānajā sienā vai flanšā, rāda tikai dažus milimetrus, pat ja tas ir iekļuvis tālu.
- Detaļas tiek pārbaudītas tādas, kādas tās ir nogrieztas: ņem vērā izgriezumus un sijas nogriešanu pie galaplāksnēm. Caurumi netiek ņemti vērā.
