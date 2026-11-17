---
title: Kiểm tra nền móng
summary: Kiểm tra móng, móng liên hợp và bản móng trên nền đất bạn mô tả, độ lún, bản móng mềm trên lò xo, nhóm cọc và tường chắn. Công cụ hỗ trợ kỹ sư kiểm tra.
keywords: nền móng, móng, móng liên hợp, bản móng, độ lún, hệ số nền, lò xo, cột biên, cột góc, sức chịu tải, trượt, lật, chọc thủng, cắt một phương, uốn, neo, thép tối thiểu, nhóm cọc, tường chắn, ACI 318-19
from: 6961ad52
---

:::warning
Đây là các kiểm tra bậc nhất để kỹ sư xem xét, không phải phê duyệt thiết kế. Áp lực nền cho phép và hệ số ma sát là do bạn quyết định: DetailCraft không biết nền đất của bạn.
:::

Thẻ {{ui:Móng}} kiểm tra các móng trong mô hình với các tải cột bạn nhập cho chúng.

## Mô tả nền đất

Nhập {{ui:Áp lực nền cho phép}} và {{ui:Hệ số ma sát đáy}}. Cả hai bắt đầu từ 0, nghĩa là chưa nhập: khi đó kiểm tra hiển thị áp lực như một ghi chú và không báo là đạt. Để tính lún, nhập mô đun đất {{ui:Es}} (MPa), hệ số Poisson của đất và độ lún cho phép (25 mm để bắt đầu). Với bản móng mềm, nhập mô đun nền {{ui:ks}}. Chiều dày đất lấp phía trên móng, trọng lượng riêng của đất, hệ số an toàn đối với trượt và lật (1.5 để bắt đầu) và cường độ chảy của thép cũng có ở đây.

## Nhập tải trọng

Mỗi móng có một danh sách tải cột. Dùng {{ui:Thêm tải cột}} và điền hàng tải sử dụng (cho sức chịu tải, trượt và lật) và hàng tải đã nhân hệ số (cho các kiểm tra cường độ): lực đứng P hướng xuống, lực ngang Vx và Vy tại đỉnh móng, mô men Mx và My, vị trí cột trên móng và kích thước của cột.

Hoặc mở thẻ {{ui:Phân tích}} và nhấn {{ui:Lấy tải cột từ Phân tích}}: mọi gối đỡ đặt trên móng sẽ thành một tải cột, lấy từ các bộ tải sử dụng và bộ tải đã nhân hệ số bạn chọn. Mô men My dương làm tải lên phía +x của móng lớn hơn; mô men Mx dương làm tải lên phía −y lớn hơn.

## Các mục được kiểm tra

Từ tải sử dụng, cộng trọng lượng bản thân của móng và lớp đất lấp:

- **Sức chịu tải:** áp lực dưới móng cứng. Trong phần ba giữa, toàn bộ đáy tiếp xúc với nền; ngoài phần đó, một phần đáy bị nhấc khỏi nền và đỉnh áp lực cao hơn. Hợp lực nằm ngoài đáy thì không đạt.
- **Trượt:** hệ số ma sát nhân với tải đứng, so với lực ngang.
- **Lật:** khoảng cách từ hợp lực đến mép.
- **Lún:** độ lún đàn hồi của áp lực trung bình trên bán không gian với mô đun bạn nhập, tại giữa và tại một góc (nghiệm Timoshenko và Goodier cho hình chữ nhật mềm), so với giới hạn. Đây là cận trên đối với móng cứng và bỏ qua lớp đất có chiều sâu hạn chế, sự giảm tải do đất đào và cố kết. Nếu không có mô đun, nó hiển thị áp lực như một ghi chú.

Chỉ từ các tải cột đã nhân hệ số (ACI 318-19):

- **Uốn** tại mặt cột, với thép tối thiểu (0.0018 cho thanh 420 MPa) và các thanh bạn đã vẽ.
- **Cắt một phương** tại khoảng cách d từ mặt cột.
- **Cắt chọc thủng** tại d/2 quanh mỗi cột, có tính mô men của cột. Với cột gần mép, tiết diện tới hạn bị cắt bởi mép móng (ba cạnh ở mép, hai cạnh ở góc, ACI 318-19 22.6.4.1 và αs nhỏ hơn trong Bảng 22.6.5.2), và mô men quanh tâm của chính tiết diện bao gồm độ lệch của tải.
- **Neo** của các thanh vượt qua mặt cột, thẳng hoặc có móc.
- **Chiều sâu** phía trên các thanh đáy (150 mm).

Móng liên hợp hoặc bản móng được coi là cứng, và lực cắt và mô men lấy từ tĩnh học trên các mặt cắt xuyên suốt chiều rộng.

## Bản móng mềm trên lò xo

Đánh dấu {{ui:Phân tích móng này như bản móng mềm trên lò xo}} khi móng đỡ nhiều cột và móng cứng quá thô. Móng trở thành một bản gồm các phần tử bốn nút đặt trên nền lò xo (các {{ui:ks}} bạn nhập, tập trung tại các nút), và tải của mỗi cột được phân bố lên các nút trong vùng chiếm chỗ của chính nó. Bảng thứ hai cho áp lực đất lớn nhất và độ lún (cùng hiệu giữa lớn nhất và nhỏ nhất), mô men uốn theo mỗi phương cùng thép cần thiết, lực kéo ở phía trên so với cường độ của bê tông không cốt thép (móng không có thép đỉnh), cắt một phương tại khoảng d từ các cột, và chọc thủng theo chính áp lực của lò xo. Lưới được chia mịn cho đến khi một cột rộng ba phần tử; bản móng lớn mất vài giây. Trọng lượng bản móng và đất phía trên nó triệt tiêu nhau nên được bỏ qua.

Mọi kiểm tra không đạt đều nằm trong bảng {{ui:Vấn đề}} kèm điều khoản tương ứng.

## Nhóm cọc và tường chắn

{{ui:Thêm nhóm cọc}} đặt một lưới cọc dưới đài cứng: nhập tải và mô men cùng khả năng chịu nén và chịu kéo của một cọc (số liệu của thiết kế cọc, không phải của thẻ này). Phản lực của mỗi cọc là P/n cộng phần mô men của nó (phương pháp đàn hồi), và lực nén lớn nhất cùng mọi lực kéo đều được kiểm tra.

{{ui:Thêm tường chắn}} kiểm tra một tường công xôn trên đất đắp phẳng, tính trên mỗi mét: áp lực chủ động Rankine, lật quanh mũi, trượt và áp lực đáy. Áp lực bị động phía trước mũi không được tính. Trợ lý của bạn có thể chạy các kiểm tra tương tự bằng `pile_group_check` và `retaining_wall_check`.

Nhóm cọc, tường và công tắc bản móng được lưu trong tệp mô hình, và kiểm tra không đạt nằm trong {{ui:Vấn đề}}.
