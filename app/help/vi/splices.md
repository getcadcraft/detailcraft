---
title: Mối nối chồng
summary: Nối hai đoạn đầu dầm hoặc đầu cột đầu nối đầu bằng các bản che cánh và bản bụng bắt bulông.
keywords: mối nối chồng, mối nối dầm, mối nối cột, bản che, bản nối, bản cánh, bản bụng, mối nối bulông, mối nối, đoạn cột, liên kết
from: 97d141c2
---

Mối nối bulông nối hai đoạn của cùng một đầu thép chữ I đầu nối đầu: một bản che bên ngoài mỗi cánh và một bản ở mỗi bên bụng, bắt bulông xuyên qua cả hai đoạn. DetailCraft cắt hai đoạn lùi về đúng khe hở, đặt bốn bản, khoan lỗ trong các bản và trong cả hai đoạn, thêm bulông, và cảnh báo về khoảng cách mép, khoảng cách bước và độ khít.

## Nơi áp dụng được

- Hai dầm, hoặc hai đoạn cột, cùng **một tiết diện chữ I**, gặp nhau đầu nối đầu **thẳng hàng**: hai đầu cách nhau không quá 50 mm, hai đoạn song song và nằm trên cùng một đường (trong 1 mm). Mỗi đoạn có thể được vẽ theo chiều nào cũng được.
- Đoạn nằm ngang, đoạn nghiêng hoặc đoạn thẳng đứng đều dùng được.
- Hai đoạn khác chiều cao hoặc khác bề rộng cánh sẽ bị từ chối, cũng như thép chữ C, thép góc và ống.

## Thêm mối nối

1. Vẽ hai đoạn sao cho gặp nhau đầu nối đầu. Để tách một thanh đã vẽ, vẽ lại nó thành hai đoạn.
2. Chọn một (hoặc cả hai) đoạn rồi chọn {{ui:Splice}} trong menu {{ui:More}} của nhóm {{ui:Connect}}.
3. Mỗi mối nối tự do của các đoạn đã chọn với một đoạn khác cùng tiết diện sẽ được tạo một mối nối. Thanh trạng thái cho biết có bao nhiêu.

Chọn mối nối (nhấp vào một trong các bản của nó) để đổi cài đặt trong bảng bên phải. {{ui:Apply to similar (n)}} sao chép mối nối đó sang mọi mối nối tự do khác giữa các đoạn cùng tiết diện.

## Cài đặt (mm)

| Cài đặt | Mặc định | Tác dụng |
|---|---|---|
| Khe hở giữa hai đầu | 10 | Mỗi đoạn được cắt lùi lại một nửa giá trị này |
| Đường kính bulông, lỗ, cấp, phần dư chiều dài | 20, 22, A325, 30 | Như với bản đầu |
| Chiều dày bản cánh | 12 | Bản rộng bằng cánh |
| Số hàng bulông cánh (mỗi bên) | 3 | Các hàng qua cánh ở mỗi bên mối nối |
| Bước bulông cánh | 75 | Dọc theo thanh |
| Khoảng cách đường bulông cánh | 0 | Giữa hai đường bulông; 0 = bề rộng cánh trừ 80 |
| Khoảng cách đầu cánh | 40 | Từ đầu thanh đến bulông đầu tiên, và từ bulông cuối đến đầu bản |
| Chiều dày bản bụng | 8 | Một bản ở mỗi bên bụng |
| Số hàng bulông bụng | 3 | Dọc theo bụng, căn giữa |
| Số dãy bulông bụng (mỗi bên) | 2 | Dọc theo thanh ở mỗi bên mối nối |
| Bước bulông bụng, lên bụng / dọc thanh | 75, 75 | |
| Khoảng cách đầu bụng | 40 | Như với cánh |
| Chiều cao bản bụng | 0 | 0 = phần bụng thông thủy giữa các bo góc, trừ 10 ở đỉnh và đáy |
| Vật liệu bản | A36 | Văn bản |

Chiều dài bản được tính theo bulông: bản cánh = khe hở + 2 × (2 × khoảng cách đầu + (hàng − 1) × bước); các bản bụng tính tương tự với các dãy của chúng. Với giá trị mặc định, bản cánh dài 470.

## Lưu ý

- Các bản thuộc về **đoạn được vẽ trước** trong hai đoạn (phần thuộc tính gọi đó là đoạn thứ nhất): chúng hiện trên bản vẽ lắp ráp của đoạn đó và đi cùng nó, bắt bulông chứ không hàn. Bản vẽ lắp ráp của đoạn thứ hai chỉ hiện các lỗ của nó.
- Bulông cánh kẹp cánh và bản của nó; bulông bụng kẹp bụng và cả hai bản bụng. Chiều dài bulông được liệt kê riêng trong thuộc tính.
- Cảnh báo dùng cùng các giá trị tối thiểu EN 1993-1-8 như các liên kết khác (khoảng cách đầu và mép 1.2 × lỗ, bước 2.2 × lỗ theo chiều dọc và 2.4 × lỗ theo chiều ngang), thêm cảnh báo khi bản bụng sâu hơn phần bụng thông thủy, và khi bulông cánh quá gần bụng so với bo góc.
- DetailCraft không thiết kế mối nối (không kiểm tra cường độ) và không làm bản đệm cho các đoạn có chiều dày khác nhau.
- Sao chép cả hai đoạn sẽ sao chép mối nối của chúng; xóa một trong hai đoạn sẽ xóa mối nối.
