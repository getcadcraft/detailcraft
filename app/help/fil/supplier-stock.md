---
title: Supplier stock at lead time
summary: Suriin ang mga stock bar na binibili ng iyong cut list laban sa stock list ng supplier: sapat ba, at gaano katagal ang paghihintay?
keywords: supplier, stock, lead time, steel yard, mill, availability, backorder, mga bar, procurement, supply
from: 1373f5a3
---

Tinitingnan ng tab na {{ui:Supply}} ang bawat seksyon na binibili ng {{ui:Cut list}} sa stock list ng isang supplier. Nananatili ang file sa model; walang ipinapadalang kahit saan.

## Idagdag ang file ng supplier

Pindutin ang {{ui:Add a supplier file}} at piliin ang CSV mula sa iyong supplier (hiwalay ng comma, semicolon, o tab). Kailangan nito ng column para sa item o seksyon (Item, Name, Description, Section, SKU), at isa para sa stock (In stock, Quantity, On hand) o para sa lead time. Binabasa ang unit (each, metres, kilograms, tonnes), ang presyo, ang supplier, at ang restock date kapag may column para sa mga ito. Nauunawaan din ang mga salita: "Out of stock", "In stock", "2-3 weeks", "backorder". Hanggang limang file ang maaaring itago; ang pagdaragdag ng file na may parehong pangalan ay pumapalit dito.

## Ano ang makikita mo

Para sa bawat seksyon na binibili ng cut list, ipinapakita ng table ang kailangan ng model, ang nasa stock, ang lead time, ang supplier, at isang resulta:

- **Covered:** sapat ang nasa stock.
- **Short by:** mas mababa ang stock kaysa sa kailangan. Kung kulang ang stock at nagtakda ka ng pinakamahabang paghihintay, sinasabi sa iyo ng lead time kung gaano katagal ang natitira.
- **Too late:** walang figure ng stock at mas mahaba ang lead time kaysa sa paghihintay na tinatanggap mo.
- **No stock figure:** hindi ito sinasabi ng file.
- **Other unit:** nakalista ng supplier ang seksyon sa unit na hindi maibibigay ng model.

Ang kailangan ng model ay ibinibigay sa bar (mula sa nested cut list, gamit ang iyong stock length), sa metro ng bar na binili, at sa kilogram (bigat ng seksyon bawat metro), at ginagamit ang sariling unit ng file. Natutugma ang seksyon sa pangalan nito ("W16 X 26" at "w16x26" ay pareho). Nakalista ang mga seksyong wala sa file.

Nakalista ang mga kulang at huling seksyon sa panel ng {{ui:Problems}}. Walang inoorder dito.

## Mga limitasyon

Ang mga figure ng stock at lead time ay mula sa file, ayon sa araw na ginawa ito. Hindi naka-nest ang mga plate kaya hindi sila hinahanap. Binabasa lamang ang file: anumang utos sa loob nito ay teksto lamang.
