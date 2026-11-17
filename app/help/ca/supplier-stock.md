---
title: Estoc del proveïdor i terminis de lliurament
summary: Comprova les barres d'estoc que compra la llista de talls amb la llista d'estoc d'un proveïdor: n'hi ha prou i quant s'ha d'esperar?
keywords: proveïdor, estoc, termini de lliurament, magatzem d'acer, laminadora, disponibilitat, comanda pendent, barres, aprovisionament, subministrament
from: 1373f5a3
---

La pestanya {{ui:Subministrament}} busca cada perfil que compra la {{ui:Llista de talls}} a la llista d'estoc d'un proveïdor. El fitxer es queda al model; no s'envia res enlloc.

## Afegeix el fitxer del proveïdor

Premeu {{ui:Afegeix un fitxer de proveïdor}} i trieu un CSV del vostre proveïdor (separat per comes, punts i coma o tabulacions). Cal una columna per a l'element o el perfil (Item, Name, Description, Section, SKU), i una per a l'estoc (In stock, Quantity, On hand) o per al termini de lliurament. La unitat (each, metres, kilograms, tonnes), el preu, el proveïdor i una data de reposició es llegeixen quan hi ha una columna per a ells. També s'entenen les paraules: "Out of stock", "In stock", "2-3 weeks", "backorder". Es poden guardar fins a cinc fitxers; afegir un fitxer amb el mateix nom el substitueix.

## Què veieu

Per a cada perfil que compra la llista de talls, la taula mostra el que necessita el model, el que hi ha en estoc, el termini de lliurament, el proveïdor i un resultat:

- **Cobert:** n'hi ha prou en estoc.
- **Falta:** l'estoc és inferior a la necessitat. Si l'estoc és inferior a la necessitat i heu fixat un temps d'espera màxim, el termini de lliurament indica quant triga la resta.
- **Massa tard:** no hi ha xifra d'estoc i el termini de lliurament és més llarg que l'espera que accepteu.
- **Sense xifra d'estoc:** el fitxer no ho indica.
- **Altra unitat:** el proveïdor indica el perfil en una unitat que el model no pot donar.

La necessitat del model s'expressa en barres (de la llista de talls imbricada, amb les vostres longituds d'estoc), en metres de barra comprada i en quilograms (el pes del perfil per metre), i s'usa la unitat pròpia del fitxer. Un perfil es fa coincidir pel seu nom ("W16 X 26" i "w16x26" són el mateix). Els perfils que no són al fitxer es mostren en una llista.

Les faltes i els perfils amb retard són al tauler {{ui:Problemes}}. Aquí no es fa cap comanda.

## Límits

Les xifres d'estoc i els terminis de lliurament són els del fitxer, a data de la seva elaboració. Les plaques no s'imbriquen i per tant no es consulten. El fitxer només es llegeix: qualsevol instrucció que hi hagi és només text.
