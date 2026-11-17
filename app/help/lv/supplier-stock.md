---
title: Piegādātāja krājums un piegādes termiņi
summary: Pārbaudiet griezumu saraksta stieņus pret piegādātāja krājuma sarakstu: vai ir pietiekami un cik ilgi jāgaida?
keywords: piegādātājs, krājums, piegādes termiņš, metāla noliktava, rūpnīca, pieejamība, nepieejams, stieņi, iepirkums, piegāde
from: 1373f5a3
---

Cilne {{ui:Piegāde}} meklē katru profilu, ko {{ui:Griezumu saraksts}} pērk, piegādātāja krājuma sarakstā. Fails paliek modelī; nekas nekur netiek nosūtīts.

## Pievienot piegādātāja failu

Nospiediet {{ui:Pievienot piegādātāja failu}} un izvēlieties CSV failu no sava piegādātāja (atdalītu ar komatu, semikolu vai tabulēšanas zīmi). Vajadzīga kolonna vienumam vai profilam (Item, Name, Description, Section, SKU) un kolonna krājumam (In stock, Quantity, On hand) vai piegādes termiņam. Mērvienība (each, metres, kilograms, tonnes), cena, piegādātājs un papildināšanas datums tiek nolasīti, ja tiem ir kolonna. Tiek saprasti arī vārdi: "Out of stock", "In stock", "2-3 weeks", "backorder". Var saglabāt līdz pieciem failiem; fails ar tādu pašu nosaukumu aizstāj esošo.

## Ko jūs redzat

Katram profilam, ko griezumu saraksts pērk, tabulā redzams, cik modelim vajag, cik ir krājumā, piegādes termiņš, piegādātājs un rezultāts:

- **Pietiek:** krājumā ir pietiekami.
- **Trūkst par:** krājums ir zemāks par vajadzību. Ja krājums ir zemāks par vajadzību un esat iestatījis maksimālo gaidīšanas laiku, piegādes termiņš parāda, cik ilgi jāgaida pārējais.
- **Par vēlu:** krājuma skaita nav, un piegādes termiņš ir ilgāks par gaidīšanas laiku, ko esat pieņēmis.
- **Nav krājuma skaita:** failā tas nav norādīts.
- **Cita mērvienība:** piegādātājs uzskaita profilu mērvienībā, ko modelis nevar aprēķināt.

Vajadzība tiek dota stieņos (no ieligzdotā griezumu saraksta ar jūsu krājuma garumiem), pirktā stieņa metros un kilogramos (profila svars metrā), un tiek izmantota faila mērvienība. Profils tiek saskaņots pēc nosaukuma ("W16 X 26" un "w16x26" ir vienādi). Profili, kas failā nav atrodami, tiek uzskaitīti.

Trūkumi un profili, kas ir par vēlu, ir redzami {{ui:Problēmas}} panelī. Šeit nekas netiek pasūtīts.

## Ierobežojumi

Krājuma skaitļi un piegādes termiņi ir faila, tā izveidošanas dienas. Plātnes netiek ieligzdotas, tāpēc tās netiek meklētas. Fails tiek tikai nolasīts: jebkura instrukcija failā ir tikai teksts.
