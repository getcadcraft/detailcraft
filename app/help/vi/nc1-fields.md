---
title: Các trường tệp NC
summary: DetailCraft ghi gì trong mỗi tệp NC DSTV, từng trường một, và mặt cùng tọa độ được đo như thế nào.
keywords: nc1, dstv, tệp nc, khối st, ak, bo, tiêu đề, mặt, tọa độ, cnc, định dạng
from: 1b676fc1
---

Mỗi tệp `.nc1` mô tả một ký hiệu cấu kiện. Các dòng kết thúc bằng CR LF. Trường văn bản chỉ dùng ASCII thuần; ký tự khác được thay bằng "?". Dòng thứ hai là chú thích, `** DetailCraft <mark>.nc1`.

## Tiêu đề (ST)

| Trường | Chữ I, máng | Thép góc | HSS chữ nhật | HSS tròn | Bản |
|---|---|---|---|---|---|
| Đơn hàng | Tên mô hình | ← | ← | ← | ← |
| Bản vẽ, số chi tiết | Ký hiệu cấu kiện | ← | ← | ← | ← |
| Giai đoạn | Giai đoạn của cấu kiện, hoặc 1 | ← | ← | ← | ← |
| Mác thép | Mác vật liệu | ← | ← | ← | ← |
| Số lượng | Số cấu kiện có ký hiệu này | ← | ← | ← | ← |
| Tiết diện | Tên tiết diện, ví dụ W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Mã tiết diện | I hoặc U (máng) | L | M | RO | B |
| Chiều dài | Chiều dài cắt | ← | ← | ← | Chiều dài |
| Chiều cao | Chiều sâu d | Cạnh | Chiều cao | Đường kính | Chiều rộng bản |
| Chiều rộng cánh | bf | Cạnh | Chiều rộng | Đường kính | 0 |
| Độ dày cánh | tf | t | Độ dày thành t | Độ dày thành t | 0 |
| Độ dày bụng | tw | t | Độ dày thành t | Độ dày thành t | Độ dày bản |
| Bán kính | Bán kính bo (0 với máng AISC) | 0 | Bán kính góc ngoài | 0 | 0 |
| Khối lượng trên mét | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Diện tích sơn trên mét | Chu vi ngoài, m²/m | ← | ← | ← | 2 (cả hai mặt, m²/m²) |
| Góc cưa (4 trường) | 0 (vuông) | ← | ← | ← | ← |
| Trường văn bản (4) | `-` | ← | ← | ← | ← |

Bản tuân theo cột "for the sheets" của tiêu chuẩn. Tiêu chuẩn không có cột cho ống tròn: DetailCraft ghi đường kính vào cả chiều cao lẫn chiều rộng cánh, và độ dày thành vào cả hai độ dày.

## Đường bao ngoài (AK)

- **Chữ I và máng:** bụng (v), với một rãnh chữ nhật cho mỗi cắt góc; mỗi cánh (o và u), được rút ngắn ở đầu nào có cắt góc sâu ít nhất bằng cánh.
- **HSS chữ nhật:** cả hai thành bên (v và h), có rãnh cho cắt góc, và thành trên và thành dưới (o và u).
- **Thép góc:** một hình chữ nhật cho mỗi cạnh (v và u). Cắt góc trên thép góc không được ghi: cấu kiện như vậy được liệt kê là không ghi. Thanh giằng thép góc được bắt bu lông vào [bản nút](topic:brace-gussets) có lỗ nằm trên cạnh được bắt bu lông: v cho cạnh chạy dọc theo u của cấu kiện, u cho cạnh chạy dọc theo v của nó.
- **HSS tròn:** một hình chữ nhật trên v, ống nhìn từ phía trước (chiều dài × đường kính).
- **Bản:** một hình chữ nhật trên mặt v.

Mỗi đường bao được khép kín (điểm đầu được lặp lại ở cuối) và chạy ngược chiều kim đồng hồ.

## Lỗ (BO)

Một dòng cho mỗi lỗ: mặt, x, y, đường kính, độ sâu 0 (xuyên suốt). Tất cả các lỗ đều được đưa vào, cả những lỗ bạn nhập và những lỗ do kết nối tạo ra. Lỗ xuyên qua hai thành bên của HSS chữ nhật được ghi hai lần, một lần trên v và một lần trên h.

## Mặt và tọa độ

Mỗi tiết diện được đặt như hình vẽ vị trí tiết diện của tiêu chuẩn thể hiện (DSTV 1998, tr. 7): x chạy dọc theo cấu kiện, Y ngang, Z hướng lên từ mặt sau, với điểm gốc ở góc ngoài. DetailCraft không bao giờ lật đối xứng một cấu kiện để khớp với hình vẽ.

| Mặt | Chữ I | Máng | Thép góc | HSS chữ nhật | Bản |
|---|---|---|---|---|---|
| v | Bụng, mặt trước | Bụng, nhìn từ phía mép cánh | Cạnh chạy dọc theo u của cấu kiện | Thành bên tại −u | Mặt bản |
| h | | | | Thành bên tại +u | |
| o | Cánh trên | **Cánh dưới** | | Thành trên | |
| u | Cánh dưới | **Cánh trên** | Cạnh chạy dọc theo v của cấu kiện | Thành dưới | |

- **x** chạy dọc theo cấu kiện từ đầu cắt của nó.
- **Chữ I và HSS chữ nhật:** y trên bụng hoặc thành bên tính từ mặt dưới của tiết diện; y trên cánh hoặc thành trên và thành dưới tính từ mép của nó ở phía sau (phía +u của cấu kiện).
- **Máng** nằm ngửa với mép cánh hướng lên, như trong hình vẽ của tiêu chuẩn. Vì vậy y trên bụng chạy từ mặt ngoài của cánh trên xuống, cánh trên là mặt u và cánh dưới là mặt o, và y trên cánh chạy từ mặt sau của bụng về phía mép cánh.
- **Thép góc:** y trên mỗi cạnh tính từ gót.
- **Bản:** y tính từ mép −u của bản.

Kiểm tra cách phần mềm máy đọc các mặt máng trước khi cắt: một số chương trình lật ngược máng.

## Không được ghi

Vát mép, đường bao trong, ký hiệu khắc (SI), góc cưa khác góc vuông, lỗ dài, lỗ trong ống tròn (DetailCraft không có), và cắt góc trên thép góc và ống tròn.
