---
title: Khám phá khung mẫu
summary: Mở khung hai nhịp dựng sẵn và dùng nó để tìm hiểu DetailCraft tạo ra những gì, từ ký hiệu đến tệp NC.
keywords: mẫu, ví dụ, demo, khung, tìm hiểu, tham quan, thử
from: 5c5944dd
---

Khung mẫu là một mô hình nhỏ, đầy đủ: mọi loại đối tượng mà DetailCraft tạo ra đều xuất hiện ít nhất một lần. Đây là cách nhanh nhất để làm quen với ứng dụng và thử một bản xuất trước khi bạn dựa vào nó.

## Mở khung

1. Chọn {{ui:Mẫu}} trong nhóm {{ui:Tệp}}.
2. Nếu mô hình hiện tại có thay đổi chưa lưu, chọn {{ui:Lưu trước}} hoặc {{ui:Bỏ thay đổi}}.
3. Thanh trạng thái ghi "Khung mẫu: 6 cột có bản chân cột, 4 dầm có bản đầu, một thanh giằng, 7 móng có thép."

Khung mẫu mở thành một mô hình mới tên là "Khung mẫu". Nó không thay đổi gì khác, và không có gì để hoàn tác.

## Có gì trong đó

- **Lưới** 1, 2, 3 cách nhau 6000 mm và A, B cách nhau 7000 mm. **Cao độ** Level 1 ở 0 và Level 2 ở 4000.
- **Sáu cột**, W12x50, từ Level 1 đến Level 2 tại mọi giao điểm, mỗi cột trên một bản chân cột 25 mm với bốn thanh neo.
- **Bốn dầm**, W16x26, ở Level 2 dọc theo các đường lưới A và B, đỉnh thép nằm trên cao độ, với một bản đầu bắt bulông phẳng ở cả hai đầu (tổng cộng tám).
- **Một thanh giằng**, HSS4x4x1/4, từ A/1 ở Level 1 lên A/2 ở Level 2.
- **Sáu móng đơn**, 2000 x 2000 x 600, mỗi móng dưới một cột, với lưới đáy có móc theo cả hai phương.
- **Thêm một móng** cạnh khung, 2400 x 1800 x 600, với sáu thép chờ có móc, dựng đứng cho một trụ bê tông.

## Việc nên thử

1. Nhấp vào một dầm. Đọc {{ui:Ký hiệu cấu kiện}}, {{ui:Cụm}}, {{ui:Chiều dài cắt}} và {{ui:Cắt lùi}}: chiều dài cắt ngắn hơn khoảng cách lưới 6000 mm vì mỗi bản đầu cắt lùi dầm một nửa chiều sâu cột cộng độ dày bản.
2. Nhấp vào một cột. Dưới {{ui:Lỗ}} nó liệt kê các lỗ mà các bản đầu tạo ra trên cánh của nó ("8 lỗ từ liên kết"; các cột giữa có 16, một bộ ở mỗi cánh).
3. Trong danh sách {{ui:Ký hiệu cấu kiện}} bên trái, hãy thấy cả bốn dầm dùng chung một ký hiệu: chúng là cùng một chi tiết thép. Các cột góc cũng dùng chung một ký hiệu, dù các lỗ của chúng hướng ngược nhau, vì một cột được quay đầu thì vẫn là cùng một chi tiết. Các cột giữa, có lỗ ở cả hai cánh, có một ký hiệu khác.
4. Nhấp vào một bản đầu (hoặc một trong các bulông của nó). Bảng {{ui:Thuộc tính}} hiển thị các thiết lập của bản, bulông và mối hàn, các bulông nó tạo (với chiều dài được tính từ phần kẹp), và mọi cảnh báo về khoảng cách mép.
5. Mở tab {{ui:Bảng kê vật tư}}. Các chi tiết, cụm (một dầm với hai bản đầu là một cụm), bulông và thanh neo được liệt kê cùng khối lượng. Bạn sẽ thấy sáu ký hiệu cấu kiện: c1 (hai cột giữa) và c2 (bốn cột góc), cả hai đều W12x50 dài 3975 mm; b1, bốn dầm W16x26 dài 5650 mm; br1, thanh giằng; p1, tám bản đầu PL20x180; và p2, sáu bản chân cột PL25x400. Các chi tiết liên kết là 64 bulông 20 x 70 A325 và 24 thanh neo 20 x 575.
6. Mở tab {{ui:Bảng uốn thép}}. Sáu móng giống nhau dùng chung ký hiệu thép; móng trụ thêm ký hiệu riêng của nó.
7. Nhấp vào thanh giằng và xem nhóm {{ui:Đầu ra}}: {{ui:Bản vẽ thi công}} bị làm mờ, vì bản vẽ thi công hiện chỉ bao gồm tiết diện chữ I và bản.
8. Chọn {{ui:Tệp NC}}. Tệp nén chứa một tệp cho mỗi ký hiệu tiết diện chữ I và bản; thanh trạng thái liệt kê ký hiệu thanh giằng là chưa được ghi.
9. Chọn {{ui:IFC}} và mở tệp trong bất kỳ trình xem IFC nào để kiểm tra cách phần mềm khác của bạn đọc nó.

## Dùng làm điểm khởi đầu

Khung mẫu là một mô hình thông thường. Thay đổi nó, rồi đổi tên trong trường {{ui:Tên}} và lưu dưới tên mới bằng {{key:Mod+S}}.
