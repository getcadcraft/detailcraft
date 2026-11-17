---
title: Mga constructability check
summary: Mga problema para sa mga bagay na nakikita ng isang detailer sa mata: bolt na hindi maabot ng wrench, bolt na masyadong magkakalapit para sa socket, fillet weld na lampas sa limitasyon ng sukat, weld na hindi maabot ng torch, at tube na nag-iipon ng tubig.
keywords: constructability, wrench, socket, access ng bolt, paghigpit, tightening, sukat ng weld, fillet weld, minimum weld, maximum weld, tubig, water, vent hole, drain hole, galvanising, hollow section, mga problema
from: 72315151
---

Naghahanap ang DetailCraft ng apat na uri ng problemang hindi nakikita ng anumang strength check, at inililista ang mga ito sa {{ui:Mga problema}} panel. Mga babala at paalala ang mga ito na dapat tingnan, hindi mga error: nabubuo pa rin ang model.

## Bolt na hindi maabot ng wrench

Para sa bawat bolt, naglalagay ang DetailCraft ng socket sa ibabaw ng ulo at ng nut. Silindro ang socket na kasing-lapad ng nut sa pagitan ng mga sulok nito at may pader na 4 mm, 60 mm ang haba. Kapag may web ng beam, flange, plato o brace sa loob ng silindrong iyon, pinangalanan ng problema ang connection, kung ilang bolt, aling piyesa ang nakaharang, at gaano kalayo ito sa bolt.

Tipikal na impact socket ang socket. Mas kaunting espasyo ang kailangan ng spanner at mas malaki ang sa mas malaking kasangkapan. Hilingin sa iyong nakakonektang assistant na patakbuhin ang `constructability_check` na may ibang `socketLength` para makita kung paano nagbabago ang sagot.

## Masyadong malapit na bolt para sa socket

Hindi dapat dumampi ang socket ng isang bolt sa ulo ng susunod. Nakalista, kasama ang nahanap na spacing at ang kailangang spacing, ang mga bolt ng connection na mas malapit kaysa lapad ng socket kasama ang ulo ng katabi.

## Mga sukat ng fillet weld

Itinatakda ng AISC 360-16 Table J2.4 ang pinakamaliit na fillet weld ayon sa kapal ng mas manipis na bahagi (3 mm hanggang 6.35 mm ang kapal, 5 mm hanggang 12.7, 6 mm hanggang 19.05, 8 mm pataas), at ang J2.2b ang pinakamalaki sa kahabaan ng gilid ng materyal: hindi lalampas sa materyal kapag mas manipis ito sa 6.35 mm, kung hindi, 1.6 mm na mas maliit. Ang mga connection na pareho ang sukat sa parehong kapal ay nakalista bilang iisang problema.

Ang kapal na ginamit ay ang pinakamanipis na bahaging binanggit ng weld, kaya nakalista ang 8 mm na weld sa buong paligid ng beam na may 6.35 mm na web.

## Tubig at vent

- Ang **bukas na itaas na dulo** ng hollow section na nakatayo nang tuwid o nakahilig nang higit sa 10° ay nagpapapasok ng ulan.
- Ang hollow section na **sarado sa magkabilang dulo** ay nangangailangan ng vent at drain hole; kailangan ito ng hot-dip galvanising at ng presyon ng pinainit na hangin.

## Kaya bang maabot ng welder

Ginagawa ang fillet weld gamit ang torch sa gitna ng dalawang mukhang pinagdurugtong nito. Para sa bawat fillet weld na buong paligid (end plate, base plate, mitre plate), kinukuha ng check ang outline ng seksyon ng member sa plato at, bawat 20 mm, nagpapatakbo ng landas ng torch palabas sa 45° mula sa puntong unang malinis ng nozzle nito (radius na 10 mm sa simula) ang parehong mukha, para sa dagdag na 30 mm. Kapag tumama ang landas sa sariling flange ng beam o sa ibang piyesa, nakalista ang bahaging iyon ng weld kasama ang piyesa at ang distansya. Tipikal ang mga numerong ito, hindi galing sa anumang pamantayan: itanong sa iyong fabricator ang proseso at nozzle. Hindi natutukoy at hindi sinusuri ang mga weld sa dalawang gilid (shear tab).
