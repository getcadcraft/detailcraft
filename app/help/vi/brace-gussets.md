---
title: Bản tăng cường thanh giằng
summary: Nối đầu thanh giằng với cột hoặc dầm bằng bản tăng cường: thép góc và thép dẹt bắt bulông, ống xẻ rãnh rồi hàn.
keywords: bản tăng cường, gusset, gusset plate, thanh giằng, giằng, giằng đứng, thanh giằng góc, thép dẹt, dây giằng, thanh giằng HSS, bản dao, ống xẻ rãnh, liên kết
from: 22f6598d
---

Bản tăng cường thanh giằng là một bản được hàn tại xưởng vào cột (hoặc dầm) mà thanh giằng tựa lên, nằm trong mặt phẳng của thanh giằng. DetailCraft cắt ngắn thanh giằng ở đầu nút để tránh mọi thứ tại mối nối, đặt và định kích thước bản tăng cường, rồi nối thanh giằng vào bản: một **thép góc** hoặc một **thép dẹt** với một hàng bulông, hoặc một **ống** (vuông, chữ nhật hoặc tròn HSS) được luồn qua bản tăng cường và hàn.

## Nơi hoạt động

- Đầu thanh giằng nằm trên đường thẳng của một cột hoặc dầm (trong phạm vi 1 mm), và thanh giằng không gần như song song với đường đó. Nếu có cột làm gối đỡ thì dùng cột; nếu không thì dùng dầm.
- Bản tăng cường nằm trong mặt phẳng của thanh giằng và đường gối đỡ. Một **thép góc** phải có một cạnh nằm trong mặt phẳng đó, và một **thép dẹt** thì mặt phẳng của nó: xoay thanh giằng (giá trị {{ui:Xoay (°)}}) cho đến khi thỏa. Khi các cạnh thép góc nghiêng 45° so với mặt phẳng, DetailCraft báo và không dựng gì.
- Thép chữ I và thép chữ C làm thanh giằng thì không được nối.

## Thêm bản tăng cường

1. Chọn một hoặc nhiều thanh giằng.
2. Chọn {{ui:Bản tăng cường}} trong menu {{ui:Thêm}} của nhóm {{ui:Liên kết}}.
3. Mọi đầu của các thanh giằng đã chọn đặt lên cột hoặc dầm và chưa có bản tăng cường đều được thêm một bản.

Chọn một bản tăng cường (nhấp vào bản) để đổi thiết lập. {{ui:Áp dụng cho tương tự (n)}} sao chép bản đó sang mọi đầu thanh giằng còn trống có cùng tiết diện thanh giằng và tiết diện gối đỡ.

## DetailCraft tính những gì

- **Cắt lùi.** Thanh giằng được rút ngắn ở đầu đó cho đến khi các góc của nó thoát khỏi, với khoảng {{ui:Khe hở thanh giằng}} (25): mọi cấu kiện tại mối nối (bên cạnh, hoặc vượt qua đầu cấu kiện khi cấu kiện kết thúc ở đó) và bản chân cột dưới cột.
- **Bulông (thép góc, thép dẹt).** {{ui:Bulông}} (3) thành một hàng dọc theo thanh giằng, bulông đầu tiên cách đầu cắt một {{ui:Khoảng cách mép bulông}} (40), với {{ui:Bước bulông}} (75). Trên thép góc, bulông xuyên qua cạnh nằm trong mặt phẳng bản tăng cường, cách gót một {{ui:Gauge bulông}} (0 = giữa cạnh); trên thép dẹt, bulông nằm trên đường tâm (hoặc lệch khỏi đó một khoảng gauge). Chiều dài kẹp bulông = cạnh hoặc thép dẹt + bản tăng cường.
- **Bản tăng cường.** Một hình chữ nhật: từ mặt gối đỡ ra quá bulông cuối một khoảng mép, và dọc theo gối đỡ đủ để chứa bulông. Nó áp vào mặt sau cạnh thép góc (hoặc mặt thép dẹt). Với ống, bản chạy qua giữa ống, dưới đoạn {{ui:Chồng ống lên bản tăng cường}} (200) của ống, có chỗ cho mối hàn.
- **Mối nối.** Tại chân cột, bản tăng cường được kéo xuống đến bản chân cột. Khi dầm cắt qua mối nối (thanh giằng đi lên tại góc dầm-cột), bản tăng cường nằm dưới hoặc trên dầm. Nếu điều đó làm bulông hay đoạn chồng mất khoảng mép, DetailCraft cảnh báo.
- **Mối hàn.** Bản tăng cường với gối đỡ, hai bên. Ống với bản tăng cường, bốn đường dọc theo đoạn chồng.

## Cần biết

- Bản tăng cường thuộc cụm của gối đỡ (hàn tại xưởng). Thanh giằng đi kèm các lỗ đã khoan, và xuất sang tệp NC riêng.
- Rãnh của ống không được cắt trong mô hình; [kiểm tra va chạm](topic:clash-check) bỏ qua thanh giằng và bản tăng cường của nó.
- Bản tăng cường không được hàn vào dầm mà nó chạm, và bản tăng cường góc hàn vào cả dầm lẫn cột, góc vát, và bố cục điểm làm việc của kết nối Uniform Force Method hiện chưa được xây dựng.
- DetailCraft không thiết kế bản tăng cường hay bulông (không kiểm tra cường độ); các cảnh báo chỉ về khoảng cách và khớp lắp.
