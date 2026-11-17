---
title: Kopyalanan bir alanı referans resmi olarak yapıştırma
summary: MarkupCraft'ta bir PDF paftasının bir kısmını kopyalayın ve DetailCraft'a, çeliğin altındaki bir seviyeye gerçek boyutunda yapıştırıp üzerine modelleyin.
keywords: resim, referans resmi, altlık, arka plan, alan kopyala, markupcraft, pdf, izleme, gerçek boyut, ölçek, opaklık, kaplama
from: 0c48445f
---

MarkupCraft'ın alan kopyalama aracı, bir paftanın bir kısmını gerçek boyutunu bilen bir resim olarak kopyalar. Bunu DetailCraft'a yapıştırdığınızda, ızgaranın ve çeliğin altında, bir seviyeye düz olarak ve gerçek boyutunda yerleşir; böylece elemanları çizimlerdeki bir planın üzerine yerleştirebilirsiniz.

## Yapıştırın

1. MarkupCraft'ta alanı {{ui:More}} › {{ui:Copy an area of the page…}} ile kopyalayın, ardından {{ui:Copy}} (ya da kağıdı yarı saydam yapan {{ui:Copy as overlay}}) seçin.
2. DetailCraft'ta (aynı tarayıcıda) {{key:Mod+V}} tuşlarına basın ya da {{ui:Paste}} seçin.

Resim, Plan'da gösterilen seviyedeki ızgaranın ortasına yerleşir (3B'de veya bir görünüşte en alt seviyede) ve seçili olur. Durum çubuğu boyutunu gösterir.

- **Gerçek boyut:** paftanın bir çizim ölçeği varsa, bir piksel, çizimde gösterdiği uzunlukta çizilir.
- **Kağıt boyutu:** paftanın ölçeği yoksa resim, alanın kağıttaki boyutu kadar olur ve durum çubuğu bunu belirtir. Ölçeklendirmek için {{ui:Properties}} panelinde yeni bir **piksel başına mm** değeri yazın.

Kaplama olarak kopyalanan bir alan, kopyalandığı opaklıkla başlar.

{{key:Mod+V}} en son kopyaladığınızı yapıştırır: MarkupCraft'tan alanı veya DetailCraft'ta kopyalanan elemanları ve temelleri. Alandan sonra panoya başka bir resim (başka bir programdan) kopyalandıysa hiçbir şey yapıştırılmaz; alanı yeniden kopyalayın.

## Taşıyın, değiştirin ve silin

- Seçmek için resme tıklayın (önündeki her şey önce seçilir). Mavi bir kenar çizgisi seçili olduğunu gösterir.
- Seviye boyunca taşımak için sürükleyin. Ortası ve köşeleri aks kesişimlerine yakalanır.
- {{ui:Properties}} panelinde ortasının nereye gideceğini (x, y), bulunduğu seviyeyi (z), **piksel başına mm** değerini ve **opaklığını** yazın.
- {{key:Delete}} tuşu veya {{ui:Delete}} resmi siler.

Her yapıştırma, taşıma, değişiklik ve silme tek bir adımdır: {{key:Mod+Z}} onu geri alır.

Resim model dosyasına kaydedilir, bu yüzden modelle birlikte açılır. Yalnızca bir referanstır: çizimlerde, dışa aktarımlarda, malzeme listesinde veya bir kopyada yer almaz.
