---
title: DetailCraft 入门
summary: DetailCraft 目前的功能、打开方式，以及用十分钟从轴网到加工详图完成第一个模型。
keywords: 入门, 第一个模型, 简介, 钢结构深化, 钢筋, 快速入门, 教程, 概览
from: e4f16bbe
---

DetailCraft 是 CadCraft 系列中的钢结构和钢筋深化设计应用。你可以在轴网和标高上建立钢框架的三维模型，进行连接，并获得加工所需的内容：零件和装配体编号、材料清单、单个零件的加工详图、DSTV NC 文件、IFC 模型，以及基础的钢筋表。

这是早期版本。它只专注于少数几项功能，而非面面俱到。在为实际工作制定计划之前，请先阅读[尚未实现的功能](topic:not-built-yet)。

## 目前的功能

- 以毫米为单位手动输入的轴网和标高。
- 来自已发布型材目录的柱、梁、支撑和钢板（AISC W、S、C、L、HSS 和 Pipe；欧洲 IPE、HEA、HEB 和 UPN；英国 UB、UC、PFC、EA、UEA、SHS、RHS 和 CHS），以及自定义的参数化型材。
- 两种连接：梁与柱翼缘之间的螺栓端板，以及带四根锚栓的柱底板。每种连接都可以复制到每个相似节点。
- 按位置手动输入的孔洞和切角。
- 带底部网片和插筋的矩形独立基础。
- 每次修改后自动更新的零件和装配体编号。
- 导出：IFC4、DSTV NC 文件（工字形截面和钢板）、CSV 格式的材料清单、CSV 格式的钢筋表，以及单个零件的加工详图 PDF。

## 打开 DetailCraft

1. 在桌面浏览器中打开 DetailCraft：Chrome、Edge、Firefox 或 Safari。参见[浏览器和计算机](common:browsers)。
2. 等待屏幕铺满。底部状态栏显示“就绪。打开示例，或设置轴网和标高后开始放置杆件。”

模型视图需要 3D 图形支持（WebGL）。若屏幕中央显示“此浏览器无法启动 3D 图形（WebGL）”，请参见[故障排除](topic:troubleshooting#the-3d-view-is-missing)。

:::note
模型保存在你的计算机上。打开模型时在浏览器中读取，保存时下载文件，不会上传任何内容。云端保存目前不可用。参见[文件存放位置](common:your-files)。若之后需要在无网络连接时使用 DetailCraft，请在联网时于应用栏中点击一次{{ui:Save for offline}}；参见[离线工作](common:offline)。
:::

:::offline
当前处于离线状态。只有事先已保存为离线使用，DetailCraft 才能在无网络连接时工作：此时应用栏中的{{ui:Save for offline}}按钮会显示{{ui:Offline ready}}。参见[离线工作](common:offline)。
:::

## 先看示例

了解 DetailCraft 能做什么，最快的方法是查看示例框架。

1. 在工具栏的{{ui:File}}组中选择{{ui:Sample}}。
2. 视图显示一个两跨框架：六根带底板的柱、四根带端板的梁、一根支撑，以及七个带钢筋的基础。
3. 点击一根梁。右侧的{{ui:Properties}}面板会显示其零件编号、切割长度、重量，以及端板开出的孔洞。
4. 打开底部的{{ui:Bill of materials}}选项卡，查看每个零件编号及其数量和重量。

演练[探索示例框架](topic:sample-model)会逐一介绍其各个部分。

## 第一个模型

新模型已经包含轴网 1 至 3、A 至 B（间距 6000 mm）以及两个标高：标高 1 位于 0，标高 2 位于 4000。

1. 选择{{ui:New}}。若当前模型有更改，DetailCraft 会询问是否先保存。
2. 在视图上方选择{{ui:Plan}}。旁边的标高列表会选中标高 1。
3. 在工具栏中选择{{ui:Column}}，或按 {{key:C}}。
4. 点击轴网交点 A/1。一根 W12x50 柱会出现在标高 1 与标高 2 之间。状态栏会说明其放置位置。
5. 依次点击 B/1、A/2 和 B/2，再放置三根柱。
6. 在标高列表中选择标高 2，然后选择{{ui:Beam}}或按 {{key:B}}。
7. 点击 A/1，再点击 A/2。一根 W16x26 梁会连接两根柱的顶部，其钢顶面位于该标高上。
8. 按 {{key:Esc}} 返回{{ui:Select}}，然后点击该梁。
9. 在{{ui:Connect}}组中选择{{ui:End plates}}。梁的两端都会获得螺栓端板，梁被截短以便贴合，第一块端板随即被选中。
10. 再次点击该梁。
11. 在{{ui:Output}}组中选择{{ui:Shop drawing}}。该梁加工详图的预览会打开。选择{{ui:Download PDF}}。
12. 按 {{key:Mod+S}} 保存模型。浏览器会下载 `Untitled.detailcraft.json`。

保存前，请在左上角的{{ui:Name}}输入框中为模型重命名，使文件和每个导出都带有该名称。

## 下一步

- [界面导览](topic:workspace)
- [设置轴网和标高](topic:grids-and-levels)
- [在 3D 视图中移动](topic:navigate-3d)，可使用鼠标、触控板或触摸屏
- [从其他深化设计软件转来](topic:coming-from)，如果你熟悉某款大型深化设计软件
- [使用本帮助](common:help)
