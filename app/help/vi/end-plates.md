---
title: Nối dầm vào cột bằng bản đầu
summary: Thêm bản đầu bắt bu lông nơi dầm gặp cánh hoặc bụng cột, đặt bản, bu lông và mối hàn, rồi sao chép liên kết cho mọi khớp tương tự.
keywords: bản đầu, endplate, bản đầu kéo dài, liên kết mômen, liên kết bu lông, khớp, bu lông, mối hàn, kéo dài, phẳng, tương tự, sao chép liên kết, cấu kiện
from: 21e028b2
---

Một liên kết bản đầu hàn một bản vào đầu dầm và bắt bu lông nó vào cánh hoặc bụng cột. DetailCraft đặt bản, cắt lùi dầm, khoan các lỗ khớp nhau trong bản và cánh cột, thêm bu lông và mối hàn, rồi kiểm tra khoảng cách mép và khoảng cách giữa các bu lông.

:::warning
DetailCraft không thiết kế liên kết. Các thiết lập chỉ là giá trị khởi đầu để bạn thay đổi; không có gì kiểm tra cường độ. Các cảnh báo về mép và khoảng cách dùng giá trị tối thiểu của EN 1993-1-8 Bảng 3.3, có thể khác với quy tắc bạn đang làm theo.
:::

## Có thể nối những gì

- Dầm **nằm ngang** (cả hai đầu cùng cao độ), không nghiêng (góc xoay 0), có tiết diện chữ I.
- Vào **cánh** hoặc **bụng** của một cột chữ I **thẳng đứng**, vuông góc với nó.
- Đầu dầm phải nằm trên đường trục của cột, giữa đáy và đỉnh cột.

Dầm xiên hoặc dốc và tiết diện không chữ I bị từ chối kèm lý do: dùng [bản cắt](topic:shear-tabs) cho các trường hợp đó. Với bụng, bản và cánh dầm phải vừa giữa các cánh cột; DetailCraft cảnh báo khi không vừa.

:::tip
Ở góc xoay 0, các cánh cột hướng dọc theo hướng lưới số (x). Dầm chạy từ A đến B gặp bụng, và được gắn bản đầu vào bụng.
:::

## Thêm bản đầu vào dầm

1. Chọn {{ui:Select}} ({{key:V}}) và nhấp vào dầm.
2. Chọn {{ui:End plates}} trong nhóm {{ui:Connect}}, hoặc {{ui:Add end plates}} trong bảng {{ui:Properties}}.
3. Mỗi đầu tự do của dầm gặp cánh hoặc bụng cột vuông góc sẽ có một bản. Thanh trạng thái ghi "Đã thêm 2 bản đầu. Chọn một bản để đổi bản, bu lông và mối hàn; Tương tự sẽ sao chép cho các khớp giống nó."
4. Bản đầu mới đầu tiên được chọn và các thiết lập của nó nằm trong bảng {{ui:Properties}}.

Nếu không có gì xảy ra, đọc thanh trạng thái:

- "Dầm này không kết thúc trên đường cột. Bản đầu được đặt nơi đầu dầm gặp cột thẳng đứng."
- "Dầm này gặp cột theo góc hoặc bị dốc: bản đầu được xây dựng cho các khớp vuông, nằm ngang. Dùng Bản cắt."
- "Cả hai đầu đã có liên kết."

## Đổi bản, bu lông và mối hàn

Nhấp vào bản đầu (hoặc một trong các bu lông) để chọn liên kết. Dưới {{ui:Plate, bolts and weld (mm)}}:

| Thiết lập | Mặc định | Tác dụng |
|---|---|---|
| Bề dày bản | 20 | Bề dày của bản; cũng là khoảng dầm được cắt lùi qua cánh |
| Chiều rộng bản | 180 | Ngang qua mối nối |
| Phần kéo dài phía trên dầm | 0 | Phía trên cánh trên; lớn hơn 0 tạo bản đầu kéo dài |
| Phần kéo dài phía dưới dầm | 0 | Phía dưới cánh dưới |
| Đường kính bu lông | 20 | Kích thước bu lông danh định |
| Đường kính lỗ | 22 | Khe hở lỗ của bạn trong bản và cánh cột |
| Cấp bu lông | A325 | Văn bản; in trong bảng khối lượng |
| Số hàng bu lông | 4 | Các hàng hai bu lông, căn giữa theo chiều cao bản |
| Bước hàng | 75 | Khoảng cách dọc giữa các hàng |
| Khoảng cách ngang (gauge) | 100 | Khoảng cách ngang giữa hai bu lông của một hàng |
| Phần dư chiều dài bu lông | 30 | Cộng vào phần kẹp cho đai ốc, vòng đệm và ren; xem bên dưới |
| Cỡ mối hàn góc | 8 | Quanh đầu dầm |
| Vật liệu bản | A36 | Văn bản |

Nhập giá trị mới và nhấn {{key:Enter}} hoặc {{key:Tab}}. Bản, lỗ, bu lông và chiều dài cắt của dầm cập nhật ngay. Mỗi thay đổi là một bước hoàn tác.

Bên dưới các thiết lập là những gì liên kết tạo ra:

- {{ui:Bolts}}: ví dụ "8 × 20 × 70 A325 (kẹp 36.2)".
- {{ui:Weld}}: kích thước, vị trí và chiều dài.
- {{ui:Plate}}: kích thước và ký hiệu cấu kiện của nó.

### Cách tính các con số

- Dầm được cắt lùi bằng nửa chiều sâu cột (với bụng: nửa bề dày bụng cột) cộng bề dày bản, để bản nằm trên mặt cột.
- Chiều cao bản bằng chiều sâu dầm cộng hai phần kéo dài.
- Chiều dài bu lông = kẹp (bề dày bản + bề dày cánh hoặc bụng cột) + phần dư, làm tròn lên bội số 5 mm tiếp theo.
- Chiều dài mối hàn hiển thị là chu vi của tiết diện dầm.

### Cảnh báo

Liên kết vẫn được xây dựng, nhưng các cảnh báo sau xuất hiện dưới nó và trong thẻ {{ui:Problems}}:

- Hàng bu lông hoặc bu lông gần mép bản hơn 1.2 × đường kính lỗ.
- Bước hàng nhỏ hơn 2.2 × đường kính lỗ, hoặc khoảng cách ngang nhỏ hơn 2.4 × đường kính lỗ.
- Lỗ chạy vào bụng cột hoặc góc lượn của nó, hoặc ra khỏi cánh cột.
- Bản rộng hơn cánh cột, hoặc (với bụng) rộng hơn khoảng giữa các cánh; cánh dầm không vừa giữa chúng.
- Một hàng bu lông quá gần cánh dầm, hoặc khoảng cách ngang quá hẹp so với bụng dầm và mối hàn của nó.

## Sao chép cho mọi khớp tương tự

1. Chọn liên kết bạn đã thiết lập.
2. Chọn {{ui:Apply to similar (n)}} trong bảng {{ui:Properties}}, hoặc {{ui:Similar}} trong menu {{ui:More}} của nhóm {{ui:Connect}}. Số trong ngoặc là số khớp sẽ nhận liên kết.
3. Mọi khớp có cùng tiết diện dầm và cột, dầm vào cùng loại mặt, và chưa có liên kết sẽ nhận một bản sao với cùng thiết lập. Thanh trạng thái cho biết có bao nhiêu.

Các bản sao độc lập: thay đổi một bản sau này không ảnh hưởng đến các bản khác. Các khớp đã có liên kết được giữ nguyên; xóa chúng trước nếu bạn muốn thay thế.

## Di chuyển và xóa

Liên kết được tạo lại từ các thiết lập của nó mỗi khi mô hình thay đổi, nên di chuyển hoặc đổi kích thước dầm hay cột sẽ kéo theo bản đầu. Nếu một thay đổi làm khớp không còn vừa, liên kết vẫn nằm trong mô hình và thẻ {{ui:Problems}} nói rõ lý do, ví dụ "Đầu dầm không còn nằm trên đường cột."

Để xóa một liên kết, chọn nó và nhấn {{key:Delete}}. Xóa dầm hoặc cột cũng xóa các liên kết của nó.

Tiếp theo: [Thêm bản đế và thanh neo](topic:base-plates).
