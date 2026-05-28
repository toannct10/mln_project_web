import { motion } from 'framer-motion';
import { Landmark, AlertTriangle } from 'lucide-react';
import Accordion from '../components/Accordion';

export default function SituationPage() {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const situationItems = [
    {
      id: 'mo-ta',
      title: '0. Mô tả tình huống thực tế',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="text-base md:text-lg">
            Trong nền kinh tế nền tảng (platform economy) ngày nay, hàng triệu lao động tại Việt Nam đang làm việc dưới danh nghĩa <strong className="text-brand-600">"đối tác độc lập"</strong> cho các hãng xe công nghệ (Grab, Be, Gojek) và giao thức ăn nhanh (ShopeeFood, Baemin).
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4 space-y-3">
            <p className="text-sm md:text-base leading-relaxed">
              Các hãng công nghệ liên tục tuyên bố họ chỉ là các bên <strong>trung gian công nghệ cung cấp giải pháp kết nối</strong>, giúp giải quyết việc làm tự do cho người lao động. Người lao động được tự chủ về thời gian làm việc, tự sở hữu phương tiện lao động (xe máy, điện thoại) và hưởng hoa hồng ăn chia theo phần trăm.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-red-600 font-medium">
              Tuy nhiên, đằng sau lớp vỏ bọc tự do này là sự quản lý nghiêm ngặt và đơn phương áp đặt luật chơi từ một thế lực vô hình: Hệ thống thuật toán phân bổ cuốc xe và quản lý tự động.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'nguoi-lam-chu-hay-lam-thue',
      title: '1. Tài xế công nghệ là "người làm chủ" hay "người làm thuê kiểu mới"?',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="text-base md:text-lg">
            Để trả lời câu hỏi này, chúng ta cần phân tích dựa trên ba mặt của <span className="font-semibold text-brand-600">quan hệ sản xuất</span> trong Triết học Mác - Lênin:
          </p>
          <div className="space-y-4 border-l-2 border-brand-200 pl-4 py-1">
            <div>
              <h5 className="font-bold text-slate-800 text-sm md:text-base">A. Về quan hệ sở hữu đối với tư liệu sản xuất:</h5>
              <p className="text-sm md:text-base text-slate-600">
                Tài xế tự bỏ tiền mua xe và điện thoại di động (phương tiện lao động cá nhân). Nhưng tư liệu sản xuất cốt lõi tạo ra chuỗi giá trị và thặng dư là <strong className="text-brand-700">thuật toán cốt lõi, cơ sở dữ liệu lớn (Big Data) và bản đồ định vị số</strong> — tất cả đều thuộc sở hữu độc quyền của tập đoàn công nghệ. Nếu không được tích hợp vào ứng dụng, chiếc xe máy của tài xế hoàn toàn mất khả năng sinh lợi trong chuỗi dịch vụ.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-800 text-sm md:text-base">B. Về quan hệ tổ chức, quản lý lao động:</h5>
              <p className="text-sm md:text-base text-slate-600">
                Hãng công nghệ áp đặt quy tắc toàn diện: tự định đoạt giá cước, tự chia tiền hoa hồng (hãng thu 25 - 30%), tự đánh giá chất lượng tài xế qua thang điểm 5 sao, tự động khoá/phạt tài khoản nếu tỷ lệ nhận cuốc thấp. Người lao động hoàn toàn bị tước quyền tự chủ và thương lượng.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-800 text-sm md:text-base">C. Về quan hệ phân phối sản phẩm:</h5>
              <p className="text-sm md:text-base text-slate-600">
                Hãng xe đơn phương thay đổi tỷ lệ hoa hồng hoặc phí nền tảng bất cứ lúc nào. Tài xế không có các phúc lợi xã hội căn bản (bảo hiểm xã hội, bảo hiểm y tế, nghỉ thai sản, lương hưu) vì không ký hợp đồng lao động chính thức.
              </p>
            </div>
          </div>
          <p className="font-bold text-slate-800 text-base md:text-lg bg-brand-50 p-4 rounded-xl border border-brand-100">
            Kết luận: Tài xế công nghệ thực chất không làm chủ. Họ là giai cấp vô sản kỹ thuật số (Digital Proletariat) - những người làm thuê kiểu mới trong nền kinh tế số.
          </p>
        </div>
      ),
    },
    {
      id: 'tat-ung-dung-tap-the',
      title: '2. "Tắt ứng dụng tập thể" có phải là đấu tranh giai cấp hiện đại không?',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="text-base md:text-lg">
            <strong>Câu trả lời là ĐÚNG.</strong> Hành động đồng loạt "tắt ứng dụng" hay "đình công kỹ thuật số" của các tài xế công nghệ chính là biểu hiện trực tiếp của đấu tranh giai cấp trong nền kinh tế số.
          </p>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-3">
            <h5 className="font-bold text-slate-800 text-base">Cơ chế đấu tranh số:</h5>
            <p className="text-sm md:text-base text-slate-600">
              Khi hãng công nghệ tăng chiết khấu vô lý hoặc giảm giá cước kịch sàn dưới danh nghĩa cạnh tranh, các tài xế sẽ tổ chức kêu gọi nhau thông qua các nhóm mạng xã hội kín (Facebook, Zalo, Telegram) để đồng loạt ngắt kết nối hệ thống trong vài giờ hoặc vài ngày.
            </p>
            <p className="text-sm md:text-base text-slate-600">
              Sự "tắt ứng dụng tập thể" này làm gián đoạn tức thì nguồn cung dịch vụ trên bản đồ định vị, gây ra hiện tượng thiếu hụt tài xế trên diện rộng, làm giảm sút doanh thu và uy tín của hãng. Đây là phương thức bãi công hiện đại, đánh thẳng vào dòng tiền và tính ổn định của hệ thống thuật toán.
            </p>
          </div>
          <p className="text-sm md:text-base">
            Mặc dù đây là cuộc đấu tranh tự phát nhằm bảo vệ quyền lợi kinh tế trước mắt (đấu tranh kinh tế), nó cho thấy giai cấp vô sản số đang dần nhận thức được sức mạnh đoàn kết tập thể và tính bóc lột của các nền tảng tư bản số.
          </p>
        </div>
      ),
    },
    {
      id: 'khac-gi-dap-pha-may-moc',
      title: '3. Khác gì với các cuộc bãi công đập phá máy móc thế kỷ XIX?',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="text-base md:text-lg">
            So với phong trào đập phá máy móc (Luddite) thế kỷ 19, cuộc bãi công của vô sản số thế kỷ 21 thể hiện sự vượt trội về cả <span className="font-semibold text-brand-600">nhận thức</span> lẫn <span className="font-semibold text-brand-600">phương thức tổ chức</span>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h5 className="font-bold text-red-700 text-base mb-3">Đập phá máy móc (Thế kỷ XIX)</h5>
              <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-slate-600">
                <li><strong>Mục tiêu tấn công:</strong> Bản thân công cụ sản xuất vật lý (máy dệt dệt vải). Phá huỷ tài sản để trút giận.</li>
                <li><strong>Ý thức:</strong> Tự phát sơ khai, lầm tưởng máy móc là kẻ thù cướp đi việc làm.</li>
                <li><strong>Phương tiện:</strong> Dùng vũ lực thủ công, búa tạ đêm khuya đột nhập xưởng dệt.</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-brand-50 border border-brand-200">
              <h5 className="font-bold text-brand-750 text-base mb-3">Đình công số (Thế kỷ XXI)</h5>
              <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-slate-600">
                <li><strong>Mục tiêu tấn công:</strong> Chính sách phân phối thặng dư của chủ sở hữu nền tảng (giá cước, tỷ lệ hoa hồng).</li>
                <li><strong>Ý thức:</strong> Tự giác tiến bộ, không phá hoại công nghệ hay phương tiện của mình, hướng đến sửa đổi chính sách bóc lột xã hội.</li>
                <li><strong>Phương tiện:</strong> Sử dụng chính các nền tảng mạng xã hội kỹ thuật số để liên kết giai cấp trên không gian mạng.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm md:text-base leading-relaxed">
            Sự chuyển biến từ phá hủy công cụ sản xuất sang ngắt kết nối hệ thống có tính toán thể hiện sự tiến hóa vượt bậc của giai cấp lao động dưới tác động của sự phát triển lực lượng sản xuất số.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 px-4 pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header section */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100/50 shadow-soft">
            <Landmark className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
            Phân tích tình huống
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Nghiên cứu điển hình về quan hệ sản xuất số và cuộc đấu tranh của các "đối tác độc lập" trong nền kinh tế gig Việt Nam.
          </p>
          <div className="h-1 w-20 bg-brand-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="pt-4">
          <Accordion items={situationItems} />
        </div>

        {/* Presenter Warning Card */}
        <div className="glass-panel p-6 rounded-2xl border border-red-100 flex items-start gap-4 max-w-2xl mx-auto bg-red-50/20">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-slate-800 font-bold text-sm md:text-base">Lưu ý phân tích Triết học</h4>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              Tránh phiến diện chỉ quy trách nhiệm cho công nghệ thuật toán. Điểm mấu chốt của thế giới quan duy vật lịch sử là chỉ ra <strong className="text-brand-700">quan hệ sở hữu tư nhân tư bản chủ nghĩa</strong> đối với các thuật toán đó mới là nguồn gốc sâu xa của bóc lột.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
