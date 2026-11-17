---
title: 風荷重、地震の敷地、ASCE 7 の組合せ
summary: 密閉された剛な建物の風荷重ケースを作成し、敷地の地震設計値を求め、ASCE 7 の組合せを作成します。いずれも解析タブで行います。
keywords: 風, 風荷重, ASCE 7, 方向別手法, 地表面粗度, 囲いの状態, 地震, 敷地の種別, Ss, S1, SDS, SD1, USGS, 設計応答スペクトル, 荷重の組合せ, LRFD, ASD, Kzt, Kd, 突風
from: 676fcbf3
---

{{ui:Analysis}} タブにある 3 つのブロックで、骨組の風と地震の入力を作成し、それらを組み合わせます。3 つのブロックは {{ui:Wind loads (ASCE 7 directional procedure)}}、{{ui:Seismic site and system (ASCE 7)}}、{{ui:ASCE 7 load combinations}} です。これらは補助ツールです。**規準のチェックではありません。結果は技術者が確認してください。**

## 行うこと

密閉された剛な建物の風荷重ケースを作成し、敷地の地震値を求め、それらを使う組合せを作成します。モデルには床が必要なので、先に解析を実行してください（[断面力、反力、たわみ](topic:frame-analysis) を参照）。

## 手順

1. {{ui:Analysis}} タブを開き、{{ui:Run}}（実行）を選びます。床と建物の大きさが分かるようにするためです。ブロックに床がないと表示された場合は、そのブロック内の {{ui:Find floors}}（階を検出）を選びます。
2. {{ui:Wind loads (ASCE 7 directional procedure)}} で、{{ui:Edition}}（版）を選び、風況図から {{ui:Basic wind speed V}}（基本風速V）を入力して、その {{ui:Speed unit}}（速度の単位）を選びます。続けて {{ui:Exposure}}（地表面粗度）と {{ui:Enclosure}}（囲いの状態）を選びます。Kzt、Kd、G、地盤標高、風下側の Cp、偏心、風向もここにあります。
3. 表で各階の圧力と各階に作用する力を確認し、{{ui:Make wind cases}}（風荷重ケースを作成）を選びます。ケースは +X、-X、+Y、-Y です。
4. {{ui:Seismic site and system (ASCE 7)}} で、版を選び、Ss と S1 を入力します（ASCE 7-22 では SMS、SM1、S1）。敷地の種別 A から D、危険度分類、耐震の抵抗システムも選びます。または緯度と経度を入力して {{ui:Look up from USGS (online)}}（USGSから検索（オンライン））を選びます。オンラインサービスへの問い合わせは、そのボタンを押したときだけ行われます。
5. Fa、Fv、SDS、SD1、R、Cd、Omega0 と設計応答スペクトルを確認してから、{{ui:Use in the Seismic block}}（地震ブロックに使用）を選びます。続けて、地震ブロックの {{ui:Make seismic cases}}（地震ケースを作成）を押します（[コンクリート部材のチェックと地震荷重の作成](topic:concrete-and-seismic) を参照）。
6. {{ui:ASCE 7 load combinations}} で {{ui:Method}}（手法）（LRFD または ASD）を選び、{{ui:Make ASCE 7 combinations}}（ASCE 7の組合せを作成）を選びます。その後、解析をもう一度実行してください。

## 知っておくとよいこと

- 風: 対象は密閉された剛な建物のみで、方向別手法を使います。柔な建物には、規準から突風影響係数が必要ですが、DetailCraft はこれを作成しません。
- 敷地の種別 E と F には敷地調査が必要で、まだ対応していません。
- ブロックの下部にある出典一覧には、各数値の出所と、除外された内容が記載されています。
- USGS の検索は、実際のサービスではなく代替のもので試験されました。
