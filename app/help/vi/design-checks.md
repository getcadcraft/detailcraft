---
title: Kiểm tra cấu kiện thép theo tiêu chuẩn thiết kế
summary: Tạo tổ hợp tải theo ASCE 7 hoặc EN 1990, kiểm tra từng tiết diện chữ I bằng thép theo AISC 360 hoặc EN 1993-1-1, và xem mỗi cấu kiện sử dụng bao nhiêu khả năng chịu lực. Chỉ là công cụ hỗ trợ cho đến khi kỹ sư đã xem xét.
keywords: thiết kế, kiểm tra thiết kế, thiết kế thép, tỷ lệ sử dụng, utilisation, khả năng chịu lực, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, tổ hợp tải, LRFD, Phụ lục Quốc gia, mất ổn định, mất ổn định xoắn-uốn ngang, cắt, uốn, tương tác, kết cấu, sinh viên, kỹ sư
from: 15685c4e
---

Sau khi chạy phân tích, khối {{ui:Kiểm tra thiết kế}} trong thẻ {{ui:Phân tích}} chuyển nội lực thành kết luận cho từng cấu kiện thép: phần khả năng chịu lực mà tổ hợp bất lợi nhất sử dụng.

:::warning
Đây là **công cụ hỗ trợ cho đến khi kỹ sư đã xem xét**. Công cụ chỉ dùng nội lực bậc nhất (không có hiệu ứng bậc hai), không kiểm tra xoắn, không kiểm tra phần mảnh (lớp 4), không kiểm tra tiết diện hàn và không kiểm tra liên kết; nó bỏ qua những gì không thể kiểm tra và nói rõ điều đó. Công cụ không thay thế việc kiểm tra của kỹ sư, và kết quả của nó không phải là con dấu xác nhận.
:::

## Chọn tiêu chuẩn

{{ui:Tiêu chuẩn thiết kế}} được lưu cùng mô hình; chọn một trong hai nhóm:

- **ASCE 7 + AISC 360** (Mỹ, LRFD): các tổ hợp tải của ASCE 7-16 §2.3.1 và kiểm tra cấu kiện theo ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): các tổ hợp của EN 1990 (Công thức 6.10, hoặc 6.10a và 6.10b) và kiểm tra cấu kiện theo EN 1993-1-1.

Sau đó chọn {{ui:Mác thép}} (A992, A36 và các mác khác; hoặc S235 đến S450, với cường độ chảy thấp hơn khi trên 40 mm).

## Tạo tổ hợp

Trong danh sách trường hợp tải, gán cho mỗi trường hợp tải **loại** của nó (tĩnh tải, hoạt tải, hoạt tải mái, tuyết, gió, động đất), rồi nhấn {{ui:Tạo tổ hợp}}. DetailCraft tạo các tổ hợp của tiêu chuẩn dưới dạng tổ hợp của các trường hợp tải của bạn: mọi tổ hợp cường độ mà tiêu chuẩn liệt kê cho các loại bạn có, và tổ hợp sử dụng cho độ võng. Các tổ hợp bạn tự nhập được giữ nguyên; chúng không được kiểm tra theo tiêu chuẩn. Trường hợp thuộc loại {{ui:Khác}} không được tổ hợp.

Với Eurocode, các hệ số là **giá trị khuyến nghị** của EN 1990 Phụ lục A1 (γG 1.35, γQ 1.5, các giá trị ψ của tải trọng sử dụng, tuyết và gió) và EN 1993-1-1 (γM0 = γM1 = 1.0). Phụ lục Quốc gia của nước bạn thay đổi một số hệ số: mở {{ui:Giá trị Phụ lục Quốc gia}}, nhập giá trị của nước bạn, rồi tạo lại tổ hợp. Các giá trị này được lưu trong mô hình.

## Kiểm tra cấu kiện

Nhấn {{ui:Kiểm tra cấu kiện}}. Với mỗi tiết diện chữ I bằng thép, bảng hiển thị **tỷ lệ sử dụng** (nhu cầu so với khả năng chịu lực: 100 % là giới hạn), cấu kiện có đạt hay không, kiểm tra nào chi phối và tổ hợp nào. Cấu kiện được tô màu trên mô hình: xanh dương là ít sử dụng, xanh lá là khoảng một nửa, vàng đất là gần giới hạn, đỏ là vượt quá, xám là chưa kiểm tra. Nhấp vào tên cấu kiện để chọn nó.

Các kiểm tra, cùng điều khoản mà mỗi kiểm tra tuân theo (chúng được liệt kê trong báo cáo):

- kéo, nén có mất ổn định uốn và mất ổn định xoắn, uốn theo cả hai trục với mất ổn định xoắn-uốn ngang, cắt, và uốn kết hợp lực dọc trục;
- độ võng của các tổ hợp sử dụng so với {{ui:Giới hạn độ võng}} bạn đặt (L/360 ban đầu; là giá trị của dự án, không phải giá trị theo tiêu chuẩn).

**Chiều dài.** Chiều dài có giằng là một phần của mỗi đoạn được phân tích (1 = không có giằng); các giằng được đặt cách đều nhau tính từ đầu. Hệ số K nhân với chiều dài để tính mất ổn định. Một nút mà cấu kiện khác nối vào sẽ chia cấu kiện thành hai, và mỗi đoạn được kiểm tra theo chiều dài riêng, như đã có giằng tại đó.

## Những gì không được kiểm tra

Cấu kiện hiển thị **chưa kiểm tra**, kèm lý do, thay vì một con số, khi tiết diện của nó không phải là hình dạng mà các kiểm tra biết đến (thép góc, thép chữ C; ống hình chữ nhật và tròn được kiểm tra khi thành của chúng đặc chắc), khi đó là hình dạng tùy chỉnh (hàn), hoặc khi một phần mảnh (AISC) hoặc lớp 4 (Eurocode) chịu uốn. Phần mảnh chịu nén sẽ loại các kiểm tra nén ra và cấu kiện hiển thị *đạt, kiểm tra một phần*. Các mối hàn tại nút có [kiểm tra riêng](topic:weld-checks). Cũng chưa xây dựng: hiệu ứng bậc hai, xoắn, mất ổn định cắt kết hợp với uốn, liên kết bulông, mỏi, chữa cháy và chi tiết cấu tạo chống động đất. Cấu kiện bê tông và tải động đất có [kiểm tra riêng](topic:concrete-and-seismic). Xem [Chưa xây dựng](topic:not-built-yet).

## Báo cáo

{{ui:Báo cáo (PDF)}} và {{ui:Báo cáo (CSV)}} có thêm các bảng thiết kế sau khi bạn đã kiểm tra: phiên bản tiêu chuẩn, cài đặt và giá trị Phụ lục Quốc gia, tỷ lệ sử dụng theo từng cấu kiện, mọi điều khoản đã dùng, và với mỗi cấu kiện là nhu cầu, khả năng chịu lực và tỷ lệ sử dụng của từng kiểm tra trong tổ hợp chi phối.
