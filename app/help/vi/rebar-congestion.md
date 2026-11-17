---
title: Bản đồ mật độ thép
summary: Xem thép thanh chừa cho bê tông chảy xuống mỗi móng chặt đến đâu, với cốt liệu và đầm rung bạn nhập.
keywords: cốt thép, mật độ, khoảng cách, khoảng hở tịnh, đổ bê tông, cốt liệu, đầm rung, thép chờ, móc, móng, lớp lưới
from: 40d029e6
---

Tab {{ui:Mật độ thép}} vẽ bản đồ nhiệt của mỗi móng nhìn từ trên xuống. Xanh nhạt là thông thoáng; vàng và cam là bắt đầu chật; đỏ là chật hơn mức thanh yêu cầu. Các ô tối là chính các thanh.

## Bản đồ đo gì

Bê tông chảy xuống qua thép theo từng lớp và có thể di chuyển ngang giữa các lớp. Vì vậy tại mỗi điểm, bản đồ lấy khe trống hẹp nhất trong bất kỳ một lớp nào: giữa các thanh lớp đáy, giữa lớp thanh kế tiếp, và giữa các chân móc của thép chờ ở trên. Thép chờ đi xuyên qua tất cả chúng.

## Thế nào là chật

Yêu cầu là giá trị lớn hơn giữa 25 mm và đường kính thanh (ACI 318-19 25.2.1), hoặc, với thanh BS 4449, giá trị lớn hơn giữa đường kính thanh và 20 mm (EN 1992-1-1 8.2). Hai hộp sau làm tăng yêu cầu:

- {{ui:Cốt liệu lớn nhất}}: yêu cầu trở thành 4/3 kích thước cốt liệu (ACI) hoặc cốt liệu cộng 5 mm (EN).
- {{ui:Đầu đầm rung}}: yêu cầu ít nhất bằng đường kính đầu đầm.

Cả hai bắt đầu từ 0, nghĩa là chưa biết: DetailCraft không biết cấp phối hay máy bơm của bạn.

## Vấn đề

Móng có chỗ chật hơn yêu cầu được liệt kê trong bảng {{ui:Vấn đề}}, cùng khe hở tìm được và khe hở cần có. {{ui:Chọn}} bên cạnh một bản đồ sẽ chọn móng đó.

Bản đồ không thấy cốt đai, khớp nối, ống luồn hay thanh của chính cột.
