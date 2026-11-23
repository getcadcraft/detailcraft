---
title: Kiểm tra mối hàn tại nơi các cấu kiện gặp nhau
summary: Sau kiểm tra thiết kế, kiểm tra mối hàn góc và mối hàn đối đầu quanh mỗi cấu kiện tại nơi nó gặp cấu kiện khác hoặc gối đỡ, theo AISC 360-16 Chương J hoặc EN 1993-1-8, và xem nhóm mối hàn nào được sử dụng nhiều nhất và theo tổ hợp nào. Chỉ là công cụ hỗ trợ cho đến khi kỹ sư đã xem xét.
keywords: mối hàn, kiểm tra mối hàn, mối hàn góc, mối hàn đối đầu, ngấu hoàn toàn, AISC 360, EN 1993-1-8, nhóm mối hàn, tỷ lệ sử dụng, khả năng chịu lực, mối nối, liên kết, kết cấu, kỹ sư
from: e8eebbe6
---

Khối {{ui:Kiểm tra mối hàn}} trong thẻ {{ui:Phân tích}}, dưới {{ui:Kiểm tra thiết kế}}, lấy nội lực của khung đã giải lần cuối và các tổ hợp cường độ bạn đã tạo, rồi kiểm tra mối hàn quanh mỗi cấu kiện tại mọi nút: nơi một cấu kiện gặp cấu kiện khác, hoặc đặt trên gối đỡ.

:::warning
Đây là **công cụ hỗ trợ cho đến khi kỹ sư đã xem xét**. Công cụ kiểm tra một mối hàn vẽ quanh tiết diện, như một nhóm, từ chính lực đầu mút của khung. Công cụ không đọc kích thước hay chiều dài của các mối hàn bạn vẽ trong bản vẽ thi công, và không kiểm tra bulông, bản thép, ép mặt, cắt khối hay bật bẩy (prying). Kết quả của nó không phải là con dấu xác nhận.
:::

## Chạy

1. Giải khung trong thẻ {{ui:Phân tích}} và chọn {{ui:Tiêu chuẩn thiết kế}} trong {{ui:Kiểm tra thiết kế}}, rồi nhấn {{ui:Tạo tổ hợp}} (kiểm tra mối hàn cần cùng các tổ hợp cường độ).
2. Trong {{ui:Kiểm tra mối hàn}}, đặt {{ui:Cạnh mối hàn góc (mm, 0 = theo thành, tối đa 8)}}. 0 nghĩa là cạnh theo thành mỏng hơn của tiết diện, tối đa 8 mm. Theo tiêu chuẩn AISC, {{ui:Cường độ kim loại mối hàn F_EXX (MPa)}} là cường độ của kim loại mối hàn (482.6 MPa là que hàn E70). Theo EN 1993, mác thép cho ra cường độ kim loại mối hàn và hệ số tương quan.
3. Nhấn {{ui:Kiểm tra mối hàn}}.

Mỗi dòng của bảng là một nhóm mối hàn (một đầu nút của cấu kiện). Các số liệu gồm: **tỷ lệ sử dụng** của kiểm tra chi phối, trạng thái (đạt hoặc không đạt), và kiểm tra cùng điều khoản nào chi phối theo tổ hợp nào. Nhóm mà kiểm tra không thể đánh giá sẽ nêu lý do (không có mác thép, không có hệ số tương quan cho mác thép trong EN 1993-1-8 Bảng 4.1, không có mối hàn trên tiết diện đó) thay vì hiển thị một con số.

Thay đổi cạnh hoặc kim loại mối hàn, hoặc chỉnh sửa mô hình, sẽ xóa bảng: bảng đã dành cho các giá trị cũ. Nhấn lại {{ui:Kiểm tra mối hàn}}.

## Những gì được kiểm tra

- **ASCE 7 + AISC 360:** kim loại mối hàn góc (góc giữa tải và mối hàn được tính, J2.4), phá hoại cắt của kim loại cơ bản (J4.2), và mối hàn đối đầu ngấu hoàn toàn (Bảng J2.5).
- **EN 1990 + EN 1993:** mối hàn góc theo phương pháp đơn giản của EN 1993-1-8 4.5.3.3 và mối hàn đối đầu từ 4.7.1.
- Cảnh báo cấu tạo so với cạnh tối thiểu và tối đa, và chiều dài tối thiểu, kèm giá trị được so sánh.

Nhóm mối hàn được coi như một tiết diện đường và chịu tải theo phương pháp vector đàn hồi: mọi phần của mối hàn nhận lực từ lực dọc trục của cấu kiện, cả hai lực cắt, xoắn và cả hai mômen uốn, được cộng theo vector.

## Những gì không được kiểm tra

Mối hàn ngấu từng phần, mối hàn góc xiên, mối hàn lỗ và mối hàn rãnh, mối hàn gián đoạn, phương pháp tâm tức thời, phương pháp theo hướng của EN, mỏi và cắt khối của kim loại cơ bản chưa được xây dựng. Một số hằng số của tiêu chuẩn được lấy từ tiêu chuẩn và chưa được đối chiếu với bản in; báo cáo liệt kê nguồn của từng số ({{ui:Báo cáo (PDF)}} có thêm bảng mối hàn sau khi bạn đã kiểm tra). Xem [Kiểm tra cấu kiện thép](topic:design-checks) và [Chưa xây dựng](topic:not-built-yet).
