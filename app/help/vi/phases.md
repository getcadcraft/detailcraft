---
title: Giai đoạn
summary: Chia mô hình thành các giai đoạn (trình tự lắp dựng hoặc đợt giao hàng), hiện hoặc ẩn từng giai đoạn, đặt cấu kiện vào giai đoạn, và đánh số ký hiệu theo giai đoạn.
keywords: giai đoạn, phase, quản lý giai đoạn, trình tự lắp dựng, giao hàng, lô, trình tự, ẩn giai đoạn, hiện giai đoạn, bộ lọc, đánh số, tiền tố ký hiệu, theo giai đoạn
from: bae506f5
---

Giai đoạn là một nhóm cấu kiện được chế tạo, giao hoặc lắp dựng cùng nhau: một trình tự lắp dựng, một đợt giao hàng, một lô. Mọi thanh và móng đều nằm trong một giai đoạn. Một kết nối nằm trong giai đoạn của thanh chính của nó: dầm của bản đầu, cột của bản chân cột. Mô hình mới có một giai đoạn.

## Bảng Giai đoạn

Mục {{ui:Giai đoạn}} của bảng {{ui:Mô hình}} liệt kê mọi giai đoạn:

- ô đánh dấu hiện hoặc ẩn giai đoạn trong khung nhìn;
- số thứ tự, và tên bạn có thể gõ (để trống = "Giai đoạn 2" và tiếp tục);
- số cấu kiện có trong đó;
- nút {{ui:×}} xóa một giai đoạn. Chỉ giai đoạn trống mới xóa được: đặt cấu kiện của nó vào giai đoạn khác trước.

{{ui:Thêm giai đoạn}} thêm số tiếp theo và đặt nó làm giai đoạn cho cấu kiện mới.

## Đặt cấu kiện vào giai đoạn

- **Cấu kiện mới:** {{ui:Cấu kiện mới vào}} chọn giai đoạn mà mọi thanh và móng bạn đặt từ giờ trở đi sẽ vào.
- **Một cấu kiện:** chọn nó và đổi {{ui:Giai đoạn}} trong bảng {{ui:Thuộc tính}}.
- **Nhiều cấu kiện:** chọn chúng (khung cửa sổ, {{key:Shift}}+nhấp, {{key:Mod+A}}) và đổi {{ui:Giai đoạn}} ở đầu bảng {{ui:Thuộc tính}}. Bảng hiện **Khác nhau** khi chúng ở các giai đoạn khác nhau. Một thay đổi là một bước hoàn tác.

Bản sao giữ giai đoạn của cấu kiện mà nó được sao chép từ đó, kể cả khi dán vào mô hình khác (giai đoạn được thêm vào đó).

## Hiện và ẩn giai đoạn

Giai đoạn ẩn không được vẽ trong khung nhìn, không thể nhấp hay bị khung chọn bắt, và {{key:Mod+A}} không chọn nó. Nó vẫn có trong bảng kê vật tư, các báo cáo, bản vẽ và mọi lần xuất file. Việc ẩn chỉ dành cho khung nhìn: nó không được lưu và không có hoàn tác.

## Ký hiệu theo giai đoạn

Khi **Đánh số ký hiệu theo giai đoạn** được bật (mặc định bật) và cấu kiện nằm ở nhiều hơn một giai đoạn, mỗi giai đoạn được đánh số riêng và các ký hiệu của nó bắt đầu bằng số giai đoạn: ký hiệu cấu kiện 1-b1, 2-b1, ký hiệu cụm 2-B1, móng 2-F1. Khi đó hai dầm giống nhau ở các giai đoạn khác nhau có ký hiệu khác nhau, vì chúng được chế tạo và giao vào các thời điểm khác nhau. Khi chỉ dùng một giai đoạn, ký hiệu không có tiền tố. Tắt tùy chọn này để đánh số toàn bộ mô hình như một, khi đó các chi tiết giống nhau dùng chung một ký hiệu bất kể giai đoạn.

Giai đoạn được ghi vào xuất IFC (bộ thuộc tính DetailCraft, Phase).

:::note
Mô hình có giai đoạn được lưu theo định dạng tệp 2 của DetailCraft. Bản 0.3 của DetailCraft không mở được chúng; bản này mở được tệp cũ, với mọi cấu kiện ở giai đoạn 1.
:::
