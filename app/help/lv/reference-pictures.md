---
title: Ielīmēt nokopētu laukumu kā atsauces attēlu
summary: Nokopējiet daļu no PDF lapas programmā MarkupCraft un ielīmējiet to DetailCraft īstajā izmērā, guļot uz līmeņa zem tērauda, lai modelētu pāri tam.
keywords: attēls, atsauces attēls, pamatslānis, fons, kopēt laukumu, MarkupCraft, PDF, pārzīmēt, īstais izmērs, mērogs, necaurredzamība, pārklājums
from: 0c48445f
---

Rīks **Kopēt laukumu** programmā MarkupCraft nokopē daļu no lapas kā attēlu, kas zina savu izmēru. Ielīmējiet to programmā DetailCraft, un tas guļ plakani uz līmeņa, īstajā izmērā, zem režģa un tērauda, tāpēc varat novietot elementus pāri plānam no rasējumiem.

## Ielīmēšana

1. Programmā MarkupCraft nokopējiet laukumu ar {{ui:Vairāk}} › {{ui:Kopēt lapas laukumu…}}, pēc tam {{ui:Kopēt}} (vai {{ui:Kopēt kā pārklājumu}}, kas padara papīru caurspīdīgu).
2. DetailCraft (tajā pašā pārlūkprogrammā) nospiediet {{key:Mod+V}} vai izvēlieties {{ui:Ielīmēt}}.

Attēls tiek ievietots režģa vidū uz līmeņa, kas rādīts skatā {{ui:Plāns}} (skatā {{ui:3D}} vai fasādē — zemākajā līmenī), un tiek atlasīts. Statusa joslā ir norādīts tā izmērs.

- **Īstais izmērs:** ja lapai bija rasējuma mērogs, viens pikselis tiek zīmēts kā garums, ko tas rāda rasējumā.
- **Papīra izmērs:** ja lapai nebija mēroga, attēls ir tik liels, cik laukums bija uz papīra, un statusa josla to norāda. Lai to mērogotu, {{ui:Rekvizīti}} ierakstiet jaunu **mm uz pikseli**.

Laukums, kas nokopēts kā pārklājums, sākas ar tādu necaurredzamību, ar kādu tas tika nokopēts.

{{key:Mod+V}} ielīmē to, ko nokopējāt pēdējo: laukumu no MarkupCraft vai DetailCraft nokopētus elementus un pamatus. Ja pēc laukuma starpliktuvē tika nokopēts cits attēls (no citas programmas), nekas netiek ielīmēts; nokopējiet laukumu vēlreiz.

## Pārvietošana, mainīšana un dzēšana

- Noklikšķiniet uz attēla, lai to atlasītu (vispirms tiek atlasīts viss, kas atrodas tā priekšā). Zila kontūra rāda, ka tas ir atlasīts.
- Velciet to, lai pārvietotu pa līmeni. Tā vidus un stūri piesaistās režģa krustpunktiem.
- Panelī {{ui:Rekvizīti}} ierakstiet, kur atrodas tā vidus (x, y) un līmenis, uz kura tas guļ (z), tā **mm uz pikseli** un tā **necaurredzamība**.
- {{key:Delete}} vai {{ui:Dzēst}} to noņem.

Katra ielīmēšana, pārvietošana, mainīšana un dzēšana ir viens solis: {{key:Mod+Z}} to atsauc.

Attēls tiek saglabāts modeļa failā, tāpēc tas atveras kopā ar modeli. Tas ir tikai atsauce: tas nav rasējumos, eksportos, materiālu sarakstā vai kopijā.
