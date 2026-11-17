---
title: Sơ đồ lắp dựng và phim lắp dựng
summary: Nhập một cần trục và biểu đồ tải của nó, xem mọi lần nâng được kiểm tra theo biểu đồ theo thứ tự pha, và lưu phim lắp dựng chạy ngoại tuyến trên mọi điện thoại.
keywords: lắp dựng, cần trục, nâng, biểu đồ tải, bán kính, khả năng chịu tải, dây treo, trình tự, phim, hoạt hình, điện thoại, ngoại tuyến, kế hoạch nâng
from: fa7b0133
---

Thẻ {{ui:Erection}} biến mô hình thành một trình tự lắp dựng và kiểm tra từng lần nâng với một cần trục bạn mô tả. Nó lập kế hoạch từ các số bạn nhập. Đây không phải là kế hoạch nâng: người treo buộc và người vận hành cần trục lập kế hoạch đó.

## Mô tả cần trục

Chọn {{ui:Add a crane}}, rồi điền:

- **Tâm cần trục X và Y:** cần trục đứng ở đâu, tính bằng milimét.
- **Móc cao nhất:** móc có thể nâng lên cao nhất bao nhiêu, tính bằng milimét. 0 nghĩa là không kiểm tra giới hạn nào.
- **Khối móc và dây treo không có trong biểu đồ:** kilôgam được trừ khỏi biểu đồ trước khi thêm tải, khi biểu đồ của bạn chưa tính điều đó.
- **Biểu đồ tải:** mỗi dòng một hàng, bán kính tính bằng mét và khả năng chịu tải tính bằng kilôgam. Sao chép các hàng từ chính biểu đồ của cần trục.

Biểu đồ được đọc như cách đọc biểu đồ tải: khả năng chịu tải liệt kê cho một bán kính có hiệu lực đến bán kính đó. Tải ở một bán kính nằm giữa hai hàng nhận khả năng của hàng **xa hơn**, không bao giờ là giá trị ở giữa. Trong hàng đầu tiên, khả năng của hàng đầu tiên được giữ nguyên. Vượt quá hàng cuối, cần trục không thể nâng gì cả. Bán kính tính cho một lần nâng là lớn hơn giữa bán kính điểm nhận tải và bán kính đặt.

Cần trục thứ hai được thêm theo cách tương tự. Mỗi lần nâng được giao cho cần trục đầu tiên có thể đảm nhận nó trong biên an toàn của bạn.

## Kế hoạch làm gì

- Một lần nâng cho mỗi lắp ráp: một dầm cùng bản đầu, một cột cùng bản đế, một cầu thang.
- Thứ tự theo pha trước, rồi theo từng tầng: cột, dầm chúng đỡ, giằng, bản, cầu thang. Một cấu kiện không bao giờ được nâng trước thứ đỡ nó.
- Mỗi lần nâng hiển thị trọng lượng của nó (trọng lượng thô của mô hình, cộng {{ui:Rigging added to each weight}}), bán kính, phần biểu đồ mà nó dùng và phút bắt đầu.
- {{ui:Most of the chart a lift may use}} là biên an toàn của bạn. Lần nâng vượt mức này được đánh dấu **Vượt biên an toàn**; vượt biểu đồ là **Vượt biểu đồ**; vượt bán kính cuối của biểu đồ là **Ngoài biểu đồ**; và một cấu kiện cao hơn móc là **Móc quá thấp**.

Lỗ và lỗ khoét không được trừ khỏi trọng lượng, và bu lông được tính trong phần trăm dây treo.

## Vấn đề

Mọi lần nâng vượt, ngoài, quá cao hoặc đặt trước thứ đỡ nó đều xuất hiện trong bảng {{ui:Problems}}. Một dầm không có liên kết để đỡ sẽ được liệt kê là cần chống tạm.

## Lưu phim

{{ui:Save movie}} ghi một tệp HTML. Mở nó trong bất kỳ trình duyệt nào, kể cả trên điện thoại, không cần mạng và không cần tài khoản: phát và tạm dừng, kéo thanh đến bất kỳ phút nào, xoay mô hình bằng ngón tay, chụm để thu phóng. Chú thích ghi tên từng lần nâng, trọng lượng, bán kính và phần biểu đồ. Mô hình được vẽ thành hộp đơn giản: nó cho thấy thứ tự và các lần nâng, không phải tiết diện thật.

Cùng bảng đó lưu thành CSV bằng nút {{ui:CSV}}. Cần trục và biểu đồ được lưu trong tệp mô hình, và mọi thay đổi là một bước hoàn tác.
