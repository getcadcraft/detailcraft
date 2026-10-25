---
title: Export the steel model as USD
summary: Write every part and assembly as USD for rendering programs, scene assembly and other 3D software, with marks, profiles and weights.
section: tasks
order: 135
keywords: usd, usda, usdc, usdz, openusd, export, steel, assembly, marks, profiles, rendering
---

1. Choose {{ui:USD}} in the {{ui:Output}} group.
2. Pick {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} or {{ui:Package (.usdz)}}.

Each assembly is one object holding its parts; each part is its section run along its length, with copes cut. Every part carries its part mark, profile, grade, length and weight. Everything is in metres with Z up.

:::note
Bolt holes, bolts, welds and footings are not in the USD meshes. They are in the IFC, NC and BOM outputs.
:::
