---
title: Di chuyển trong khung nhìn 3D
summary: Xoay, di chuyển và thu phóng khung nhìn bằng chuột, bàn di chuột hoặc màn hình cảm ứng, và khi nào nên dùng Mặt bằng và Mặt đứng thay thế.
keywords: xoay quanh, xoay, di chuyển khung nhìn, thu phóng, điều hướng, khung nhìn, camera, bàn di chuột, cảm ứng, mặt bằng, mặt đứng, vừa khung, chuột
from: 02c9c7b9
---

Khung nhìn có ba chế độ, chọn trong thanh khung nhìn phía trên: {{ui:3D}}, {{ui:Plan}} và {{ui:Elevation}}. Các nút chuột làm việc khác nhau trong 3D so với Mặt bằng và Mặt đứng, nên hãy đọc cả hai bảng.

## Trong 3D

:::mouse
| Để | Làm như sau |
|---|---|
| Xoay quanh mô hình | Kéo bằng nút trái |
| Di chuyển khung nhìn | Kéo bằng nút phải, hoặc giữ {{key:Shift}} và kéo bằng nút trái |
| Thu phóng | Lăn con lăn, hoặc kéo lên xuống bằng nút giữa (nhấn con lăn) |
| Chọn một cấu kiện | Nhấp vào nó (một lần nhấp di chuyển ít hơn vài điểm ảnh) |
| Xem toàn bộ mô hình | Nút vừa khung ở đầu bên phải thanh khung nhìn |
:::

:::touch
| Để | Làm như sau |
|---|---|
| Xoay quanh mô hình | Kéo bằng một ngón tay |
| Di chuyển khung nhìn | Kéo bằng hai ngón tay |
| Thu phóng | Chụm hai ngón tay |
| Chọn một cấu kiện | Chạm vào nó |
| Xem toàn bộ mô hình | Nút vừa khung ở đầu bên phải thanh khung nhìn |
:::

Khối xem ở góc trên bên phải (dưới thanh khung nhìn) xoay theo mô hình: nhấp vào một mặt, cạnh hoặc góc để nhìn từ đó, kéo để xoay, hoặc nhấp nút hình ngôi nhà để quay về điểm xuất phát. Xem [Khối xem](topic:view-cube).

Mô hình xoay quanh giữa khung nhìn, và con lăn thu phóng về phía giữa khung nhìn, không phải về phía con trỏ. Để nhìn kỹ một góc, trước tiên hãy di chuyển góc đó vào giữa, rồi thu phóng.

## Trong Mặt bằng và Mặt đứng

Các khung nhìn này nhìn thẳng vào mô hình và không thể xoay.

:::mouse
| Để | Làm như sau |
|---|---|
| Di chuyển khung nhìn | Kéo bằng nút trái hoặc nút phải |
| Thu phóng | Lăn con lăn, hoặc kéo lên xuống bằng nút giữa |
| Chọn một cấu kiện | Nhấp vào nó |
:::

:::touch
| Để | Làm như sau |
|---|---|
| Di chuyển khung nhìn | Kéo bằng một ngón tay |
| Thu phóng | Chụm hai ngón tay (kéo hai ngón tay cũng di chuyển khung nhìn) |
| Chọn một cấu kiện | Chạm vào nó |
:::

## Trên bàn di chuột Mac

:::mac
- **Thu phóng:** vuốt lên hoặc xuống bằng hai ngón tay, hoặc chụm. Cả hai đều được chuyển thành thu phóng khung nhìn.
- **Xoay (3D):** nhấn bàn di chuột và kéo bằng một ngón tay. Nếu bạn dùng chạm để nhấp, nhấp đúp và kéo cũng hoạt động khi bật kéo trong **System Settings, Accessibility, Pointer Control, Trackpad Options**.
- **Di chuyển (3D):** giữ {{key:Shift}} và kéo. Giữ {{key:Ctrl}} hoặc {{key:Mod}} khi kéo cũng di chuyển khung nhìn. Nhấp bằng hai ngón tay là nhấp chuột phải, nhưng kéo khi đang làm vậy thì khó trên bàn di chuột.
- **Di chuyển (Mặt bằng và Mặt đứng):** chỉ cần kéo.
- Magic Mouse không có nút giữa: dùng kéo với {{key:Shift}} để di chuyển, và vuốt trên bề mặt để thu phóng.
:::

Thêm về nhấp chuột phải và di chuyển khung nhìn khi không có chuột: [Phím, chuột và bàn di chuột](common:keys).

## Mặt bằng và Mặt đứng giúp đặt dễ hơn

Trong {{ui:3D}}, các giao điểm ở các tầng khác nhau có thể chồng lên nhau trên màn hình, và một lần nhấp sẽ đi đến điểm gần nhất. Trong {{ui:Plan}} và {{ui:Elevation}}, chỉ có thể chọn các điểm của tầng hoặc đường lưới bạn đang nhìn.

1. Chọn {{ui:Plan}}, rồi chọn một tầng trong danh sách bên cạnh các nút. Khung nhìn nhìn xuống tầng đó; mọi thứ cao hơn 1.5 m so với nó bị cắt bỏ.
2. Hoặc chọn {{ui:Elevation}}, rồi chọn một đường lưới có chữ ("Grid A", "Grid B" …). Khung nhìn nhìn thẳng vào đường đó; chỉ thép trong phạm vi 1 m của nó được hiển thị.

Mặt đứng chỉ có trên các đường lưới có chữ. Để làm việc trên một dãy lưới có số (một khung chạy từ A đến B), dùng {{ui:3D}}, hoặc đặt bằng cách gõ trong biểu mẫu {{ui:Add by grid}}. Xem [Đặt cột, dầm và thanh giằng](topic:place-members#place-by-grid-without-clicking).

## Chọn

- Nhấp vào một cấu kiện để chọn nó. Nó đổi sang màu nổi bật và bảng {{ui:Properties}} hiển thị nó.
- Nhấp vào khoảng trống, hoặc nhấn {{key:Esc}}, để xóa vùng chọn.
- Thép thắng bê tông: nhấp vào cột bên trong một móng xuyên thấu sẽ chọn cột. Nhấp vào móng ở chỗ cách cột, hoặc vào một trong các thanh của nó, để chọn móng.
- Nhấp vào bulông hoặc bản đầu sẽ chọn liên kết của nó.
- Trong Mặt bằng và Mặt đứng, các cấu kiện bị cắt đi không thể nhấp.
- Giữ {{key:Shift}} (hoặc {{key:Ctrl}}, hoặc {{key:Mod}}) và nhấp để thêm một cấu kiện vào vùng chọn hoặc bỏ ra; {{key:Mod+A}} chọn mọi thứ. Chưa có chọn bằng khung (kéo một hộp). Những gì bạn có thể làm với nhiều cấu kiện: [Sao chép, dán và nhân bản](topic:copy-paste).

Bạn cũng có thể chọn từ danh sách: nhấp một ký hiệu trong {{ui:Part marks}} bên trái, một ký hiệu cấu kiện trong thẻ {{ui:Bill of materials}}, hoặc {{ui:Select}} bên cạnh một dòng trong {{ui:Problems}}.

## Nếu khung nhìn trông sai

- Mất mô hình? Chọn nút vừa khung.
- Khung nhìn trống hoặc xám với thông báo về WebGL: xem [Khắc phục sự cố](topic:troubleshooting#the-3d-view-is-missing).
- Mọi thứ vẫn hoạt động mà không có khung nhìn 3D, trừ việc nhấp trong nó: các bảng, báo cáo và xuất đều chạy, và {{ui:Add by grid}} đặt cấu kiện bằng cách gõ.
