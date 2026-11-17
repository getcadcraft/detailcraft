---
title: Kiểm tra khả năng thi công
summary: Các vấn đề mà người triển khai chi tiết nhận ra bằng mắt: một bulông mà cờ lê không với tới, bulông quá gần cho đầu tuýp, mối hàn góc ngoài giới hạn kích thước, mối hàn mỏ hàn không với tới, và ống giữ nước.
keywords: khả năng thi công, cờ lê, đầu tuýp, khả năng tiếp cận bulông, siết, kích thước mối hàn, mối hàn góc, mối hàn tối thiểu, mối hàn tối đa, nước, lỗ thông khí, lỗ thoát nước, mạ kẽm, tiết diện rỗng, vấn đề
from: 72315151
---

DetailCraft tìm bốn loại vấn đề mà không kiểm tra cường độ nào tìm thấy, và liệt kê chúng trong bảng {{ui:Vấn đề}}. Chúng là cảnh báo và ghi chú để xem xét, không phải lỗi: mô hình vẫn được tạo.

## Bulông mà cờ lê không với tới

Với mỗi bulông, DetailCraft đặt một đầu tuýp lên đầu bulông và lên đai ốc. Đầu tuýp là một hình trụ rộng bằng đai ốc đo qua các góc cộng thêm một thành 4 mm, dài 60 mm. Nếu một bụng dầm, một cánh, một bản hay một thanh giằng nằm trong hình trụ đó, vấn đề nêu tên nút, số bulông, cấu kiện nào đang cản và nó cách bulông bao xa.

Đầu tuýp là một đầu tuýp va đập điển hình. Cờ lê cần ít chỗ hơn và dụng cụ lớn hơn cần nhiều hơn. Hãy yêu cầu trợ lý đã kết nối của bạn chạy `constructability_check` với một `socketLength` khác để xem câu trả lời thay đổi thế nào.

## Bulông quá gần cho đầu tuýp

Đầu tuýp trên một bulông không được chạm đầu của bulông kế tiếp. Các bulông của một liên kết gần hơn chiều rộng đầu tuýp cộng đầu bulông bên cạnh được liệt kê cùng khoảng cách tìm thấy và khoảng cách cần thiết.

## Kích thước mối hàn góc

AISC 360-16 Bảng J2.4 đặt mối hàn góc nhỏ nhất theo độ dày của phần mỏng hơn (3 mm đến độ dày 6.35 mm, 5 mm đến 12.7, 6 mm đến 19.05, 8 mm trên đó), và J2.2b đặt mối lớn nhất dọc một cạnh của vật liệu: không lớn hơn vật liệu khi nó mỏng hơn 6.35 mm, nếu không thì nhỏ hơn 1.6 mm. Các liên kết có cùng kích thước trên cùng độ dày được liệt kê thành một vấn đề.

Độ dày được dùng là phần mỏng nhất được mối hàn nêu tên, nên mối hàn 8 mm quanh một dầm có bụng 6.35 mm sẽ được liệt kê.

## Nước và lỗ thông

- Một **đầu trên hở** của tiết diện rỗng đứng thẳng hoặc dốc hơn 10° sẽ để mưa lọt vào.
- Một tiết diện rỗng **đóng ở cả hai đầu** cần lỗ thông khí và lỗ thoát nước; mạ kẽm nhúng nóng và áp suất của không khí nóng đều đòi hỏi điều đó.

## Thợ hàn có với tới không

Mối hàn góc được thực hiện với mỏ hàn nằm giữa hai mặt nó nối. Với mỗi mối hàn góc quanh (một bản đầu, một bản chân cột, một bản cắt góc), kiểm tra lấy đường bao tiết diện của cấu kiện tại bản đó và, mỗi 20 mm, chạy một đường mỏ hàn ra ngoài với góc 45° từ chỗ đầu phun (bán kính 10 mm ban đầu) lần đầu thoát khỏi cả hai mặt, thêm 30 mm nữa. Nếu đường đó chạm vào cánh riêng của dầm hoặc một cấu kiện khác, phần mối hàn đó được liệt kê cùng cấu kiện và khoảng cách. Các số này là điển hình, không phải của tiêu chuẩn nào: hãy hỏi thợ chế tạo của bạn về quy trình và đầu phun. Mối hàn dọc theo hai cạnh (một tấm cắt) không được định vị và không được kiểm tra.
