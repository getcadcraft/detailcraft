---
title: Kiểm tra cấu kiện thép theo tiêu chuẩn thiết kế
summary: Tạo tổ hợp tải từ ASCE 7 hoặc EN 1990, kiểm tra từng tiết diện chữ I thép theo AISC 360 hoặc EN 1993-1-1, và xem mỗi cấu kiện sử dụng bao nhiêu khả năng chịu lực. Chỉ là công cụ hỗ trợ cho đến khi một kỹ sư xem xét.
keywords: thiết kế, kiểm tra thiết kế, thiết kế thép, mức sử dụng, utilization, khả năng chịu lực, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, tổ hợp tải, LRFD, Phụ lục Quốc gia, mất ổn định, mất ổn định xoắn ngang, cắt, uốn, tương tác, kết cấu, sinh viên, kỹ sư
from: 66b6d545
---

Sau khi chạy phân tích, khối {{ui:Design checks}} trong thẻ {{ui:Analysis}} chuyển các nội lực thành kết luận cho mọi cấu kiện thép: cấu kiện sử dụng bao nhiêu khả năng chịu lực ở tổ hợp bất lợi nhất.

:::warning
Đây là **công cụ hỗ trợ cho đến khi một kỹ sư đã xem xét**. Công cụ chỉ dùng nội lực bậc nhất (không có hiệu ứng bậc hai), không kiểm tra xoắn, các phần tử mảnh (lớp 4), tiết diện hàn và liên kết, và bỏ qua những gì nó không thể kiểm tra, đồng thời nói rõ điều đó. Nó không thay thế việc kiểm tra của kỹ sư, và kết quả không phải là con dấu xác nhận.
:::

## Chọn tiêu chuẩn

{{ui:Design code}} được lưu cùng mô hình; chọn một trong hai họ:

- **ASCE 7 + AISC 360** (Mỹ, LRFD): các tổ hợp tải của ASCE 7-16 §2.3.1 và kiểm tra cấu kiện của ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): các tổ hợp của EN 1990 (Eq. 6.10, hoặc 6.10a và 6.10b) và kiểm tra cấu kiện của EN 1993-1-1.

Sau đó chọn {{ui:Steel grade}} (A992, A36 và các loại khác; hoặc S235 đến S450, với cường độ chảy thấp hơn khi trên 40 mm).

## Tạo tổ hợp

Gán cho mỗi trường hợp tải một **loại** (tĩnh tải, hoạt tải, hoạt tải mái, tuyết, gió, động đất) trong danh sách trường hợp, rồi nhấn {{ui:Make combinations}}. DetailCraft ghi các tổ hợp của tiêu chuẩn thành tổ hợp từ các trường hợp tải của bạn: mọi tổ hợp cường độ mà tiêu chuẩn liệt kê cho các loại bạn có, và các tổ hợp sử dụng cho độ võng. Các tổ hợp bạn tự nhập vẫn giữ nguyên; chúng không được kiểm tra theo tiêu chuẩn. Trường hợp loại {{ui:Other}} không được tổ hợp.

Với Eurocode, các hệ số là **giá trị khuyến nghị** của EN 1990 Phụ lục A1 (γG 1.35, γQ 1.5, các giá trị ψ của tải trọng sử dụng, tuyết và gió) và EN 1993-1-1 (γM0 = γM1 = 1.0). Phụ lục Quốc gia của nước bạn thay đổi một số giá trị: mở {{ui:National Annex values}}, nhập giá trị của nước bạn, rồi tạo lại tổ hợp. Chúng được lưu trong mô hình.

## Kiểm tra cấu kiện

Nhấn {{ui:Check members}}. Với mỗi tiết diện chữ I thép, bảng hiển thị **mức sử dụng** (nhu cầu chia cho khả năng: 100 % là giới hạn), đạt hay không, kiểm tra nào chi phối, và tổ hợp nào. Cấu kiện được tô màu trên mô hình: xanh dương là ít sử dụng, xanh lá khoảng một nửa, vàng gần giới hạn, đỏ vượt giới hạn, xám là chưa kiểm tra. Nhấp vào tên cấu kiện để chọn nó.

Các kiểm tra, cùng điều khoản mà mỗi kiểm tra theo (được liệt kê trong báo cáo):

- kéo, nén với mất ổn định uốn và xoắn, uốn quanh cả hai trục với mất ổn định xoắn ngang, cắt, và uốn kết hợp lực dọc trục;
- độ võng của các tổ hợp sử dụng so với {{ui:Deflection limit}} bạn đặt (ban đầu là L/360; đây là giá trị của dự án, không phải giá trị của tiêu chuẩn).

**Chiều dài.** Chiều dài có giằng là một phần của mỗi đoạn được phân tích (1 = không giằng); các giằng được coi là cách đều nhau tính từ đầu. Hệ số K nhân với chiều dài để kiểm tra mất ổn định. Điểm nối mà cấu kiện khác tựa vào sẽ chia cấu kiện thành nhiều đoạn, và mỗi đoạn được kiểm tra theo chiều dài riêng của nó, như đã có giằng tại đó.

## Những gì không được kiểm tra

Một cấu kiện hiển thị **chưa kiểm tra**, kèm lý do, thay vì một con số, khi tiết diện của nó không phải chữ I mà các kiểm tra hỗ trợ (ống, thép góc, thép chữ C), khi là tiết diện tùy chỉnh (hàn), hoặc khi một phần tử mảnh (AISC) hoặc lớp 4 (Eurocode) khi chịu uốn. Phần tử mảnh chịu nén sẽ loại các kiểm tra nén, và cấu kiện hiển thị *đạt, kiểm tra một phần*. Cũng chưa được xây dựng: hiệu ứng bậc hai, xoắn, mất ổn định cắt kết hợp với uốn, liên kết, mỏi, cháy và chi tiết chống động đất. Cấu kiện bê tông và tải động đất có [kiểm tra riêng](topic:concrete-and-seismic). Xem [Chưa xây dựng](topic:not-built-yet).

## Báo cáo

{{ui:Report (PDF)}} và {{ui:Report (CSV)}} sẽ có thêm các bảng thiết kế sau khi bạn đã kiểm tra: phiên bản tiêu chuẩn, các thiết lập và giá trị Phụ lục Quốc gia, mức sử dụng theo cấu kiện, mọi điều khoản đã dùng, và với mỗi cấu kiện, nhu cầu, khả năng và mức sử dụng của từng kiểm tra trong tổ hợp chi phối.
