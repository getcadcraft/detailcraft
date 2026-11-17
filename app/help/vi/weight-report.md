---
title: Báo cáo vật liệu và trọng lượng theo giai đoạn
summary: Chiều dài cắt, số lượng, trọng lượng và diện tích sơn cho từng giai đoạn, cùng bulông và thép thanh, dưới dạng bảng, CSV hoặc PDF.
keywords: báo cáo, trọng lượng, tấn, kg, sơn, diện tích sơn, diện tích bề mặt, lớp phủ, chiều dài cắt, danh sách vật liệu, giai đoạn, bảng kê vật liệu, csv, pdf
from: 337d6d92
---

Trong nhóm {{ui:Output}}, mở {{ui:More}} và chọn {{ui:Weight report by phase}}, hoặc mở thẻ {{ui:By phase}} dưới khung nhìn. Báo cáo hiển thị:

- **Tóm tắt theo giai đoạn**: với mỗi giai đoạn, số chi tiết, trọng lượng thép, diện tích sơn, bulông và bulông neo, và thép thanh; rồi đến tổng cộng.
- **Một bảng cho mỗi giai đoạn**: mỗi ký hiệu chi tiết trong đó với loại, tiết diện, vật liệu, chiều dài cắt, số lượng, trọng lượng mỗi cái, trọng lượng và diện tích sơn; rồi đến bulông và bulông neo của nó.

{{ui:Download CSV}} lưu cùng các bảng vào một tệp CSV (`<name> weight report.csv`). {{ui:Download PDF}} tạo báo cáo theo khổ giấy trong [Cài đặt DetailCraft](topic:settings#drawings), với phần tóm tắt trước, mỗi giai đoạn theo sau, các bảng dài được chuyển sang trang kế tiếp, và mọi trang đều được đánh số.

## Cách tính các số liệu

- **Trọng lượng** là trọng lượng tổng, như trong bảng kê vật liệu: trọng lượng trên mét của tiết diện nhân với chiều dài cắt. Lỗ và các chỗ cắt góc không được trừ đi.
- **Diện tích sơn** là phần ngoài của tiết diện dọc theo chiều dài cắt: với tiết diện chữ I là mọi mặt của cánh và bụng, với bản là cả hai mặt và các cạnh, với ống chỉ phần ngoài. Hai đầu và các lỗ không được tính.
- **Thép thanh** là trọng lượng của các thanh thép trong móng của giai đoạn, lấy từ [bảng uốn thép](topic:footings-and-rebar).
- Bản và bulông của một liên kết được tính vào giai đoạn của thanh chính của nó. Xem [Giai đoạn](topic:phases).

Khi bật [ký hiệu theo giai đoạn](topic:phases#marks-per-phase), mỗi giai đoạn có ký hiệu riêng (1-b1, 2-b1). Khi tắt, một ký hiệu có thể xuất hiện ở nhiều giai đoạn: mỗi giai đoạn liệt kê các chi tiết mà nó có.
