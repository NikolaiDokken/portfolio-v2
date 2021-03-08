---
title: Algoritmevisualisering
stack: React & CSS
slug: algorithm-visualizer
image: /nodes.svg
color: red
---

### Hvordan virker korteste vei algoritmer?

Dette var spørmålet jeg hadde etter at vi hadde lært om Dijkstra og A\* i faget **TDAT2004 Datakommunikasjon med nettverksprogrammering**.
For å svare på dette ønsket jeg å visualisere algoritmen ved å animere stien den finner, ettersom den leter etter korteste vei. Jeg ønsket å visualisere noder som ikke enda var besøkt, de som var besøkt, og de som var en del av korteste vei.

#### Resultat

Resultatet ble en side skrevet i **React**. For å skille mellom de forskjellige nodene og å animere søket, brukte jeg **CSS**. Siden lar deg velge start- og slutt-noder samt tegne opp vegger de stedene du ønsker at veien ikke kan gå.
