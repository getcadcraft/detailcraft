---
title: Kiểm tra ký hiệu và bảng kê vật tư
summary: Đọc ký hiệu cấu kiện và ký hiệu cụm mà DetailCraft gán cho mỗi chi tiết, kiểm tra bảng kê vật tư và tải về dưới dạng CSV.
keywords: ký hiệu, đánh số, ký hiệu cấu kiện, ký hiệu cụm, ký hiệu chi tiết, BOM, bảng kê vật tư, danh sách vật liệu, khối lượng, danh sách bulông, csv, đánh số
from: caa2ee80
---

DetailCraft tự đánh ký hiệu cho mô hình. Không có lệnh đánh số và không có gì phải chạy: sau mỗi thay đổi, nó xác định các chi tiết nào là cùng một thanh thép và gán cho chúng một ký hiệu.

## Ký hiệu hiển thị ở đâu

- Danh sách {{ui:Ký hiệu cấu kiện}} trong bảng {{ui:Mô hình}}: mỗi ký hiệu với tiết diện, chiều dài và số lượng. Nhấp vào một ký hiệu để chọn chi tiết đầu tiên có ký hiệu đó.
- Bảng {{ui:Thuộc tính}} của một thanh được chọn (và danh sách **Ký hiệu cấu kiện** ở bảng bên trái): {{ui:Ký hiệu cấu kiện}} và {{ui:Cụm}}. Tiêu đề bảng cũng mang ký hiệu, ví dụ "Dầm b1".
- Thẻ {{ui:Bảng kê vật tư}}, tệp CSV, tên tệp NC, bản vẽ thi công và xuất IFC (làm thẻ của mỗi phần tử).

## Cách đánh ký hiệu

- **Ký hiệu cấu kiện:** c cho cột, b cho dầm, br cho thanh giằng, st cho dầm thang của cầu thang, p cho bản (kể cả bản đầu và bản chân cột). Sau đó là một số: c1, c2, b1, p1 … Khi cấu kiện nằm ở nhiều giai đoạn, số giai đoạn đứng trước, ví dụ 2-b1.
- **Ký hiệu cụm:** C, B, BR hoặc P. Một cụm là một thanh chính và các bản hàn vào nó, như một dầm với hai bản đầu, hoặc một cột với bản chân cột.
- Hai chi tiết có cùng ký hiệu khi cùng tiết diện, vật liệu và chiều dài cắt, và cùng lỗ và cắt góc, tất cả trong phạm vi 1 mm, ngay cả khi một chi tiết được xoay đầu để cuối hoặc lật ngược so với chi tiết kia.
- Việc đánh số chạy theo thứ tự: cột trước, rồi đến dầm, thanh giằng và bản; trong mỗi nhóm, theo tên tiết diện, dài nhất trước.

Đầy đủ quy tắc, gồm những lượt xoay nào được tính cho thép chữ C và thép góc: [Quy tắc ký hiệu](topic:mark-rules).

:::warning
Ký hiệu được tính lại từ đầu sau mỗi thay đổi, nên có thể bị đánh số lại. Thêm chi tiết, đổi tiết diện hoặc thêm lỗ có thể đổi b3 thành b4. Chỉ coi ký hiệu là cuối cùng khi mô hình đã hoàn thiện, và lập BOM, tệp NC và bản vẽ thi công từ cùng một mô hình đã lưu.
:::

## Đọc bảng kê vật tư

Mở thẻ {{ui:Bảng kê vật tư}} ở dưới cùng. Thẻ có ba bảng.

**Chi tiết**, với tổng khối lượng thép ở tiêu đề:

| Cột | Ý nghĩa |
|---|---|
| Ký hiệu cấu kiện | Nhấp để chọn chi tiết đầu tiên có ký hiệu này |
| Loại | dầm, cột, thanh giằng, dầm thang hoặc bản |
| Tiết diện | Ví dụ W16x26 hoặc PL20x180 |
| Vật liệu | Cấp bạn đã đặt |
| Chiều dài (mm) | Chiều dài cắt, sau các liên kết |
| Số lượng | Bao nhiêu chiếc |
| Khối lượng đơn vị (kg) | Khối lượng tiết diện trên mét × chiều dài |
| Tổng khối lượng (kg) | Khối lượng đơn vị × số lượng |

Dòng cuối cho tổng số lượng và tổng khối lượng.

**Cụm:** mỗi ký hiệu cụm, chi tiết chính, toàn bộ chi tiết của nó (ví dụ "b1 + p1 + p1"), số lượng, khối lượng đơn vị và tổng khối lượng.

**Bulông và bulông neo:** nhóm theo loại, đường kính, chiều dài và cấp, kèm số lượng.

:::note
Khối lượng là khối lượng toàn phần: lỗ và cắt góc không được trừ đi. Bulông, đai ốc, vòng đệm và mối hàn không nằm trong khối lượng thép.
:::

## Tải về

Chọn {{ui:Tải xuống CSV}} trong thẻ, hoặc {{ui:BOM}} trong nhóm {{ui:Đầu ra}}. Tệp `<name> BOM.csv` chứa ba bảng nối tiếp nhau, mỗi bảng dưới tiêu đề của nó, cách nhau một dòng trống. Tệp mở được trong mọi chương trình bảng tính.

## Kiểm tra trước khi gửi

1. Mở thẻ {{ui:Vấn đề}} và xử lý mọi dòng. Một liên kết không dựng được sẽ không thêm bản, lỗ hay bulông, nên BOM sẽ thiếu.
2. Tìm các ký hiệu bạn không ngờ tới. Hai dầm bạn nghĩ là giống nhau nhưng có ký hiệu khác nhau thường khác nhau ở một lỗ, một cắt góc hay một chiều dài cắt; chọn từng cái và so sánh.
3. Lưu mô hình, rồi thực hiện mọi lần xuất từ trạng thái đã lưu đó.
