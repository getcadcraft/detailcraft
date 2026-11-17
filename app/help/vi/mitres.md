---
title: Mối ghép vát
summary: Nối hai thanh tiết diện chữ I gặp nhau theo một góc: cả hai đầu được cắt trên mặt phẳng chia đôi góc, với bản đầu, bulông và sườn tăng cứng nếu bạn muốn.
keywords: mối ghép vát, mitre, mối ghép vát, nút góc, vai, khung cổng, nóc mái, góc, cắt góc, cắt xiên, bản đầu, bản đầu có bulông, sườn tăng cứng, liên kết
from: cd8380d4
---

Mối ghép vát nối hai thanh chữ I có các đầu gặp nhau theo một góc, như nút góc của khung cổng, nóc mái, hoặc hai dầm rẽ góc trên mặt bằng. DetailCraft cắt cả hai đầu trên mặt phẳng chia đôi góc giữa chúng, nên hai mặt cắt khớp nhau. Nếu muốn, nó thêm một bản đầu vào mỗi đầu cắt, bắt hai bản với nhau bằng bulông, và đặt một cặp sườn bụng vào mỗi thanh.

## Nơi áp dụng

- Hai **thép chữ I** (IPE, HEA, HEB, W và tương tự) có **đầu gặp nhau tại cùng một nút**. Hai thanh có thể được vẽ theo hướng nào cũng được.
- Góc giữa các thanh phải ít nhất 15°. Thanh thẳng hàng bị từ chối: hãy dùng [mối nối chồng](topic:splices).
- Cắt trơn (không có bản) áp dụng được dù các thanh gặp nhau theo cách nào. **Bản đầu** cần hai thanh gặp nhau trong mặt phẳng bụng của chúng, như nút góc khung cổng hoặc nóc mái. Hai dầm rẽ góc trên mặt bằng gặp nhau trong mặt phẳng cánh của chúng, nên chỉ được cắt trơn.
- Các thanh khác kích thước vẫn được nối, nhưng có cảnh báo: mặt cắt của chúng không khớp.

## Thêm mối ghép vát

1. Chọn hai thanh: nhấp một thanh, rồi {{key:Shift}}+nhấp thanh kia.
2. Chọn {{ui:Mitre}} trong menu {{ui:More}} của nhóm {{ui:Connect}}. Hộp thoại {{ui:Mitre}} mở ra.
3. Đặt các ô được đánh số. Hình vẽ bên cạnh được tạo từ các số bạn nhập khi gõ, và các vòng tròn có số của nó cho biết mỗi ô đặt gì.
4. Chọn {{ui:Add the mitre}}. Nếu bạn chọn hơn hai thanh, mọi mối nối tự do giữa chúng sẽ nhận cùng một mối ghép vát.

Để đổi mối ghép vát sau này, chọn nó (nhấp vào một trong các bản của nó) rồi chọn {{ui:Mitre dialog with preview}} trong bảng bên phải, hoặc đổi thiết lập trực tiếp ở đó. Cắt trơn không có bản để nhấp: chọn hai thanh của nó và chọn lại {{ui:Mitre}}, hộp thoại sẽ mở với mối ghép vát đó. Áp dụng cho các mối tương tự (n) sao chép nó sang mọi mối nối tự do giữa các thanh cùng hai tiết diện và cùng góc.

## Các ô được đánh số (mm)

| Số | Thiết lập | Mặc định | Tác dụng |
|---|---|---|---|
| 1 | Khe hở giữa các bản (hoặc các đầu cắt) | 0 | Khe hở tại mối nối. Mỗi bên giữ một nửa |
| 2 | Bản đầu, độ dày bản | bật, 20 | Một bản đầu hàn quanh mỗi đầu cắt. Bỏ chọn để cắt trơn |
| 3 | Hàng bulông, bước hàng, khoảng cách cột, hàng ngoài | 4, 0, 0, tắt | Bước 0 trải đều các hàng giữa các cánh. Khoảng cách cột 0 = một nửa chiều rộng bản, tối thiểu 2.4 × lỗ. Hàng ngoài nằm trong phần kéo dài của bản vượt ra ngoài cánh ngoài |
| 4 | Bản vượt qua cánh ngoài | 0 | Bản vươn ra quá cánh ngoài bao xa, theo đường cắt |
| 5 | Bản vượt qua cánh trong | 0 | Tương tự ở phía trong |
| 6 | Sườn bụng, khoảng cách vượt quá đường cắt | tắt, 50 | Một cặp trong mỗi thanh, hai bên bụng, vuông góc với thanh, vượt quá đầu xa của đường cắt bao nhiêu |
| 7 | Độ dày sườn | 10 | |

Trong {{ui:Bolts}}: đường kính bulông, lỗ, mác thép và độ dư chiều dài (20, 22, A325, 30), như với bản đầu. Trong {{ui:Plates and welds}}: chiều rộng bản (0 = chiều rộng cánh), cỡ mối hàn góc (8) và vật liệu bản (A36).

## Bạn nhận được gì

- **Các đường cắt.** Đầu mỗi thanh được cắt trên mặt phẳng của nó. Chiều dài trong danh sách, bản vẽ và tệp NC là **chiều dài tổng**, từ đầu vuông đến điểm xa nhất của đường cắt.
- **Các bản** thuộc về thanh riêng của chúng: cụm của mỗi thanh là thanh, bản đầu và sườn của nó. Bulông là bulông công trường của mối nối: bảng kê vật tư đếm chúng một lần, và bản vẽ cụm của mỗi thanh liệt kê chúng là bulông rời.
- **Bản vẽ** thể hiện các đầu nghiêng và các bản; bản vẽ thi công xưởng của thanh có mối ghép vát ghi góc lệch của mỗi đường cắt so với góc vuông.
- **Tệp NC** (DSTV) mang góc cắt xiên trong phần đầu, như tiêu chuẩn yêu cầu, và các đường bao đi theo đường cắt. Hãy kiểm tra chúng trong trình xem NC của xưởng bạn trước khi cắt, như với mọi tệp NC.
- **IFC** cắt phần đùn của mỗi thanh theo mặt phẳng cắt của nó, để các chương trình khác hiển thị đúng đường cắt.
- **Ký hiệu:** một thanh có mối ghép vát là một chi tiết khác với một thanh cắt vuông cùng chiều dài. Hai thanh có cùng đường cắt sẽ có cùng ký hiệu, như hai xà gồ của một nóc mái.

## Cần biết

- Mối ghép vát luôn được cập nhật. Di chuyển hoặc đổi kích thước một trong hai thanh, đường cắt, các bản và bulông sẽ theo. Xóa một trong hai thanh thì mối ghép vát mất, và đầu của thanh còn lại trở lại vuông góc.
- Cảnh báo dùng cùng các mức tối thiểu EN 1993-1-8 như các liên kết khác (khoảng cách đầu và mép 1.2 × lỗ, bước 2.2 × lỗ, khoảng cách cột 2.4 × lỗ), cộng thêm các hàng bulông quá gần cánh, bản hẹp hơn cánh và sườn không đủ chỗ.
- Các giá trị là giá trị khởi đầu, không phải thiết kế. DetailCraft không kiểm tra cường độ liên kết, và không tạo vai, mối ghép vát hàn đối đầu, hay sườn thẳng hàng với cánh của thanh kia.
