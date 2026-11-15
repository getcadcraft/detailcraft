---
title: Supplier stock and lead times
summary: Check the stock bars your cut list buys against a supplier's stock list: is there enough, and how long is the wait?
section: tasks
order: 51
keywords: supplier, stock, lead time, steel yard, mill, availability, backorder, bars, procurement, supply
---

The {{ui:Supply}} tab looks up each section the {{ui:Cut list}} buys in a supplier's stock list. The file stays in the model; nothing is sent anywhere.

## Add the supplier's file

Press {{ui:Add a supplier file}} and choose a CSV from your supplier (comma, semicolon or tab separated). It needs a column for the item or section (Item, Name, Description, Section, SKU), and one for stock (In stock, Quantity, On hand) or for the lead time. The unit (each, metres, kilograms, tonnes), the price, the supplier and a restock date are read when there is a column for them. Words are understood too: "Out of stock", "In stock", "2-3 weeks", "backorder". Up to five files can be kept; adding a file with the same name replaces it.

## What you see

For each section the cut list buys, the table shows what the model needs, what is in stock, the lead time, the supplier and a result:

- **Covered:** enough in stock.
- **Short by:** the stock is below the need. If the stock is below the need and you set a longest wait, the lead time tells you how long the rest takes.
- **Too late:** there is no stock figure and the lead time is longer than the wait you accept.
- **No stock figure:** the file does not say.
- **Other unit:** the supplier lists the section in a unit the model cannot give.

What the model needs is given in bars (from the nested cut list, with your stock lengths), in metres of bar bought and in kilograms (the section's weight per metre), and the file's own unit is used. A section is matched by its name ("W16 X 26" and "w16x26" are the same). Sections that are not in the file are listed.

Shorts and late sections are in the {{ui:Problems}} panel. Nothing here orders anything.

## Limits

The stock figures and lead times are the file's, as of the day it was made. Plates are not nested, so they are not looked up. The file is only read: any instruction in it is just text.
