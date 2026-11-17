---
title: Tarnija laovaru ja tarneajad
summary: Kontrolli lõikenimekirja ostetavaid varraste laovaru tarnija laonimekirja vastu: kas seda on piisavalt ja kui pikk on ooteaeg?
keywords: tarnija, laovaru, tarneaeg, terveladu, tehas, saadavus, ettetellimus, varras, hankimine, tarne
from: 1373f5a3
---

Vahekaart {{ui:Tarnija}} otsib iga lõikenimekirjas ostetava lõigu üles tarnija laonimekirjast. Fail jääb mudelisse; midagi ei saadeta kuhugi.

## Lisa tarnija fail

Vajuta {{ui:Lisa tarnijafail}} ja vali tarnijalt CSV-fail (eraldajaks koma, semikoolon või tabulaator). Vaja on veergu üksuse või lõigu jaoks (Item, Name, Description, Section, SKU) ja veergu laovaru või tarneaja jaoks (In stock, Quantity, On hand). Ühik (each, metres, kilograms, tonnes), hind, tarnija ja taastamise kuupäev loetakse, kui neile on veerg. Ka sõnad on arusaadavad: "Out of stock", "In stock", "2-3 weeks", "backorder". Alles võib hoida kuni viis faili; sama nimega faili lisamine asendab olemasoleva.

## Mida sa näed

Iga lõikenimekirja lõigu kohta näitab tabel, mida mudel vajab, mis on laos, tarneaega, tarnijat ja tulemust:

- **Katab:** laos on piisavalt.
- **Puudu:** laovaru on vajadusest väiksem. Kui laovaru on väiksem kui vajadus ja oled määranud pikima ooteaja, näitab tarneaeg, kui kaua kulub ülejäänu saamiseks.
- **Hilja:** laoarvu pole ja tarneaeg on pikem kui ooteaeg, mille aktsepteerid.
- **Laoarv puudub:** fail ei ütle.
- **Muu ühik:** tarnija loetleb lõigu ühikus, mida mudel ei suuda väljendada.

Vajadus antakse varrastes (pesastatud lõikenimekirjast koos sinu laopikkustega), ostetud varraste meetrites ja kilogrammides (lõigu kaal meetri kohta) ning kasutatakse faili enda ühikut. Lõik seostatakse nime järgi ("W16 X 26" ja "w16x26" on samad). Lõigud, mida failis ei ole, on loetletud.

Puudu ja hilja jäänud lõigud on paneelil {{ui:Probleemid}}. Siin ei tellita midagi.

## Piirangud

Laovaru ja tarneajad on faili omad, nii nagu need olid faili tegemise päeval. Plaate ei pesastata, seega neid ei otsita. Faili ainult loetakse: selles olev juhis on lihtsalt tekst.
