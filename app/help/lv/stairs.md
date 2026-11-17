---
title: Kāpnes
summary: Novietot taisnas tērauda kāpnes pēc pacēluma, soļa un platuma: divas sānsijas un pakāpienu plāksnes, viens metināts mezgls.
keywords: kāpnes, kāpņu telpa, sānsija, pakāpiens, paaugstinājums, solis, lidojums, tērauda kāpnes, ibc 1011, blondel
from: 62fa3845
---

Taisnas tērauda kāpnes: divas sānsijas (kanāli ar iekšup vērstiem galiem vai plakani stieņi uz malas) un plāksnes pakāpiens katrā solī, metināti starp tām. DetailCraft aprēķina paaugstinājumu skaitu no pacēluma, pārbauda tos pret būvnormatīviem un padara kāpnes par vienu darbnīcas mezglu.

## Kāpņu novietošana

1. Izvēlieties {{ui:Kāpnes}} grupā {{ui:Novietot}} vai nospiediet {{key:S}}.
2. Labajā pusē iestatiet kāpnes: **kāpšanas virzienu** (0° kāpj pa +x, 90° pa +y), **pacēlumu** (0 = līdz nākamajam līmenim), **soli**, **brīvo platumu** starp sānsijām, **augstāko pieļaujamo paaugstinājumu**, **sānsiju**, **pakāpiena plāksnes biezumu**, **priekšmalu** un materiālu.
3. Noklikšķiniet uz režģa krustpunkta: tas ir pirmā paaugstinājuma pamats kāpņu centra līnijā.

Statusa joslā rakstīts, cik paaugstinājumu tika izveidots. Atlasiet kāpnes (noklikšķiniet uz sānsijas vai pakāpiena), lai mainītu jebkuru iestatījumu, pozīciju vai fāzi; rekvizīti rāda arī paaugstinājumus, pakāpienus, garumu, slīpumu un 2 × paaugstinājums + solis.

## Ko DetailCraft aprēķina

- **Paaugstinājumi.** Cik maz vien, lai katrs paaugstinājums nepārsniegtu augstāko pieļaujamo: 3000 mm pacēlums ar 178 mm vai mazāk dod 17 paaugstinājumus pa 176.5 mm. Pakāpienu ir par vienu mazāk nekā paaugstinājumu (augšējais stāvs ir pēdējais solis).
- **Pakāpieni.** Plāksne ar dziļumu solis + priekšmala (280 + 25 = PL6x305 pēc noklusējuma) un tikpat gara kā brīvais platums; tās augša katra paaugstinājuma augstumā, priekšējā mala (priekšmala) – priekšā paaugstinājuma līnijai.
- **Sānsijas.** Kāpņu slīpumā, no vietas, kur tās saskaras ar apakšējo stāvu, līdz vietai, kur tās saskaras ar augšējo stāvu, tieši ārpus brīvā platuma, to augšējā mala 50 mm virs priekšmalu līnijas. Kanāla gali vērsti kāpņu iekšpusē; plakans stienis, piemēram, PL12x250, stāv uz malas.
- **Metinājumi.** Katrs pakāpiens pie abām sānsijām. Pakāpieni un labā sānsija ir metināti pie kreisās sānsijas, tāpēc kāpnēm ir viens mezgla marķējums (ST1) un savs mezgla rasējums; sānsijām ir detaļu marķējumi st…, pakāpieniem p….
- **Pārbaudes.** Brīdinājumi, ja paaugstinājums ir ārpus 4 līdz 7 in. (102 līdz 178 mm) vai solis ir mazāks par 11 in. (279 mm) – IBC 2021 sadaļas 1011.5.2 ierobežojumi; ja 2 × paaugstinājums + solis ir ārpus 600 līdz 650 mm (parasts komforta noteikums); un ja sānsija ir pārāk sekla, lai nestu pakāpienus. Nezināms sānsijas profils aptur kāpņu izveidi.

## Noderīga informācija

- Pārvietot, pagriezt, spoguļot, kopēt, ielīmēt, dzēst un fāzes darbojas ar kāpnēm tāpat kā ar elementu. Pagriešana pagriež kāpšanas virzienu; spoguļošana nosūta to spoguļotā virzienā.
- Sānsijas eksportē uz IFC kā IfcMember, pakāpieni – kā IfcPlate; abas iet NC failos un materiālu sarakstā. Sadursmju pārbaude neskar kāpņu paša detaļas (tās ir savstarpēji metinātas).
- Šīs vienkāršās kāpnes ir viens lidojums ar plākšņu pakāpieniem. Lai iegūtu laukumus, margas ar balstiem, salocītas paplātes vai režģa pakāpienus, izvēlētos noteikumu kopu, griešanas sarakstu un sānsiju caurumu rasējumus, atzīmējiet {{ui:Izmantot tērauda kāpņu ģeneratoru}} kāpņu rīkā (skatiet Tērauda kāpņu ģenerators).
- Sānsijas ir griezti taisni: to galu griezumi pret stāviem nav izveidoti.
- DetailCraft neprojektē kāpnes: sānsijas un pakāpieni netiek pārbaudīti izturībai vai saliecei.
