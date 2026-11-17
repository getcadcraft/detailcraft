---
title: Suriin ang IFC export laban sa IDS ng kliyente
summary: I-load ang .ids file na ibinigay sa iyo at tingnan sa Mga problema ang bawat na-export na piyesang hindi tumutugon dito, bago mo ipadala ang IFC.
keywords: ids, information delivery specification, buildingsmart, mga kinakailangan, delivery, check, validation, qa, ifc export, property, material, procurement
from: 50d0f785
---

## Ang gagawin mo

Ang IDS (Information Delivery Specification, isang pamantayan ng buildingSMART) ay listahan ng mga dapat nasa IFC. Sinusuri ng DetailCraft ang IFC na ie-export nito (ang parehong file na isinusulat ng {{ui:IFC}}) laban sa IDS na ibinigay sa iyo, at inililista ang bawat piyesang kulang.

## Mga hakbang

1. Buksan o iguhit ang iyong model.
2. I-click ang {{ui:Tingnan laban sa IDS…}} sa {{ui:Output}} group ng toolbar.
3. I-click ang {{ui:Mag-load ng .ids file…}} at piliin ang file. Walang ina-upload.
4. Basahin ang resulta: bawat specification na may {{ui:Pumasa}} o {{ui:Pumalya}} at kung ilang elemento ang saklaw nito.
5. Buksan ang {{ui:Mga problema}} ({{key:Ctrl+Shift+M}}) at i-click ang isang pagkabigo: mapipili ang member, connection, hagdan o footing na pinagmulan nito, at mag-zoom ang view dito.

## Ang makikita mo

- Isang babala bawat na-export na elemento at kinakailangang hindi nito natutugunan, kasama ang pangalan ng specification, ang hinihingi ng IDS at ang laman ng export.
- Nagsisimula ang ulat ng pagsusuri (sa Mga problema) sa IDS: ang pamagat, bersyon, may-akda at bilang ng bawat specification.

## Mabuting malaman

- Naka-save ang IDS sa model file, kaya muling sinusuri ito kapag binuksan mo ang model. Ang pag-load o pagkalimot dito ay isang hakbang na maaari mong i-undo.
- Muling sinusuri ang bawat pagbabago makalipas ang sandali; sa malaking model, mas matagal nang kaunti ang paghihintay ng pagsusuri sa pagitan ng mga takbo.
- Ang GlobalIds ng export ay galing sa pangalan ng model at sa part number sa loob ng DetailCraft, kaya nananatiling pareho ang mga ito mula sa isang pagsusuri patungo sa susunod. Kapag pinalitan ang pangalan ng model, nagkakaroon ng bagong GlobalIds ang bawat elemento.
- Inihahambing ang mga numero sa SI units (millimetro ang export; kino-convert muna ang mga haba sa metro).

- Binabasa ang mga pattern sa IDS bilang buong halaga. Ang `^` sa simula at ang `$` sa dulo ay itinuturing ding "buong halaga", gaya ng karaniwang ibig sabihin nila sa mga IDS file.

## Susunod

- [I-export ang IFC](topic:ifc-export)
