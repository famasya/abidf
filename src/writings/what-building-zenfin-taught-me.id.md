---
title: Pelajaran dari Zenfin
created_at: 2026-07-12
description: Refleksi setelah menutup Zenfin. Tentang membangun produk, membentuk kebiasaan, AI landscape yang bergerak terlalu cepat, user research, dan marketing.
lang: id
---

Setahun lalu saya membuat **Zenfin**, asisten keuangan pribadi berbasis WhatsApp. Idenya lahir karena saya sendiri merasa aplikasi pencatat keuangan yang ada terlalu ribet dan alurnya monoton: buka aplikasi, isi form, pilih kategori, ulangi lagi. Rasanya males kalau harus install aplikasi tambahan + isi form manual untuk mencatat berapa uang di hari itu.

Lalu LLM terasa seperti oase. Daripada maksa orang mengikuti alur software, kenapa tidak software yang mengikuti cara orang biasa ngobrol? Cukup ketik "Ngopi 35k", "bayar listrik 450 rb", atau kirim foto struk, lalu AI yang mengurus sisanya. Mulai dari kategorisasi, laporan, semuanya otomatis.

Idenya menarik. _Tapi sekarang Zenfin sudah tidak jalan lagi._

Anehnya saya tidak menganggapnya sebagai kegagalan. Ada beberapa hal yang saya pelajari dari proyek ini dan hampir semuanya bukan soal teknis.

## Membangun produk itu satu hal, membuat orang terus pakai itu hal yang lain

Sebagai engineer, kita gampang terpaku pada progress yang kelihatan: fitur yang selesai, bug yang minim, sistem yang akhirnya bisa di-deploy. Rasanya launch itu garis finis.

Padahal launch justru baru permulaan. Di situlah kita mulai tahu apakah masalah yang kita "selesaikan" itu memang penting buat orang lain.

Orang tidak otomatis pakai Zenfin hanya karena aplikasinya bagus. Mereka juga tidak otomatis punya kebiasaan baru hanya karena alurnya lebih ringkas. Personal finance ini memberi contoh menarik tentang product development: value-nya baru kerasa setelah dipakai konsisten berminggu-minggu, bahkan berbulan-bulan.

Susahnya bukan di bikin AI bisa baca struk atau mengkategorikan transaksi. Itu gampang. Susahnya adalah bikin orang mau balik lagi besok, minggu depan, bulan depan.

**Dari kacamata product, _vanity metrics_ itu justru dari fitur yang banyak atau tidak ada bugs. Real metrics adalah revenue.**

Kalau dipikir-pikir, saya menghabiskan jauh lebih banyak waktu mengoptimalkan proses pencatatan dibanding memahami kenapa orang berhenti mencatat begitu rasa penasarannya hilang. Saya sudah biasa hadapi masalah teknis. Perilaku manusia ternyata jauh lebih rumit.

Hal ini juga mengubah persepsi saya tentang esai Paul Graham tentang [Do Things That Don't Scale](https://www.paulgraham.com/ds.html). Waktu pertama kali membacanya, saya mengira pesannya hanya soal melakukan hal-hal yang tidak bisa di-scale, seperti onboarding manual atau customer support satu persatu. Baru setelah membangun Zenfin saya sadar, inti pesannya bukan di situ. Hal-hal itu penting bukan karena manual, tapi karena membuat kita benar-benar mengenal user. Dashboard bisa memberi tahu apa yang terjadi. Tapi sering ngobrol langsung dengan user akan memberi tahu **kenapa** hal itu terjadi.

## Di dunia AI, ide bisa jadi sangat pendek

Pelajaran ini baru kerasa beberapa bulan setelah Zenfin rilis.

Zenfin ternyata tidak cuma bersaing dengan aplikasi pencatat keuangan lain tapi dengan seluruh ekosistem AI termasuk perusahaan-perusahaan besar yang bergerak jauh lebih cepat dari yang bisa saya kejar.

Waktu mulai, ide mencatat pengeluaran lewat chat WhatsApp terasa cukup unik. Tapi hanya dalam hitungan bulan, model-model AI berkembang pesat: memory makin bagus, kemampuan multimodal makin matang, tool calling makin stabil, context window makin panjang. Banyak hal yang dulu butuh aplikasi khusus, tiba-tiba bisa langsung dilakukan di ChatGPT, Claude, Gemini, atau asisten AI lain yang memang sudah dipakai orang setiap hari.

Saya tidak melihat ini sebagai sesuatu yang buruk. Memang begitu kondisinya kalau membangun produk di atas AI sekarang (baca: AI Wrapper). Apa yang hari ini terlihat seperti produk, beberapa bulan kemudian bisa jadi cuma fitur. Fitur itu pun lambat laun jadi kemampuan bawaan foundation model.

Konsekuensinya, pertanyaan yang harus dijawab founder juga berubah. Dulu cukup tanya "apakah AI bisa melakukan ini?" Sekarang yang lebih penting: "kalau nanti ChatGPT bisa melakukan ini juga, kenapa produk saya masih perlu ada?". Jauh lebih susah dijawab.

## Risiko platform

Ada satu hal lagi yang tidak saya perkirakan dari awal: perubahan kebijakan platform yang saya pakai.

Dari awal saya ingin Zenfin semurah mungkin. Target pasarnya Indonesia dan kita tahu pasar ini sangat sensitif harga. Jadi obsesi saya adalah menekan biaya operasional supaya orang tidak perlu mikir dua kali untuk berlangganan. Untungnya biaya inference LLM terus turun dari waktu ke waktu, dan saya sempat optimis model bisnis ini akan makin masuk akal seiring waktu.

[Lalu WhatsApp mengubah skema harganya](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages).

Kalau sebelumnya biaya dihitung per percakapan, sekarang setiap balasan otomatis dari bisnis kena biaya sendiri. Reminder, konfirmasi, laporan mingguan, balasan AI semuanya langsung ada harganya. Ironisnya, makin aktif user memakai Zenfin, makin mahal juga biaya operasional. Produknya tidak berubah sama sekali, tapi hitung-hitungan bisnisnya berubah dalam semalam.

Saya yakin bukan cuma Zenfin yang kena dampak ini. Hampir semua produk conversational-based kemungkinan harus menghitung ulang harga langganan, membatasi useran, atau mempertimbangkan pindah platform.

Ini mengingatkan saya bahwa kalau bisnis kita sangat bergantung pada platform milik orang lain, model bisnis kita ikut bergantung pada keputusan mereka juga. Kita sering memikirkan risiko teknis dan risiko pasar, tapi risiko platform ternyata sama pentingnya dan jauh lebih sulit diprediksi.

## User research ternyata lebih sulit daripada coding

Salah satu hal yang paling saya remehkan adalah memahami apa yang sebenarnya diinginkan user.

Menulis software itu relatif deterministik: begitu kebutuhan jelas, tinggal implementasi. User research tidak seperti itu. Bukan karena orang berbohong, tapi karena manusia sering kali tidak benar-benar tahu gimana keinginan mereka.

Ada user yang sangat antusias waktu mencoba pertama kali dan bilang akan pakai setiap hari. Tapi ketika kita lihat metrics-nya, cuma bertahan seminggu. Ada yang minta fitur, tapi begitu fiturnya jadi, ternyata tidak pernah dipakai. Sebaliknya, ada yang hampir tidak pernah kasih masukan, tapi justru loyal user.

Respons alami engineer biasanya menambah fitur karena itu yang paling kita kuasai. Padahal setiap fitur baru sebenarnya cuma asumsi baru tentang perilaku user. Dan kalau asumsinya salah kita cuma menghabiskan lebih banyak waktu membangun hal yang salah.

Tantangannya bukan lagi di coding, tapi asumsi mana yang memang benar.

## Marketing itu profesi, bukan pekerjaan sampingan

Mungkin pelajaran terbesar yang saya dapat adalah betapa sedikit yang saya tahu tentang marketing. Bahkan saya sampai bikin prompt khusus di ChatGPT saya buat belajar ini.

Saya tahu cara mendesain sistem, mengelola infrastruktur, mengintegrasikan LLM, membangun aplikasi yang bisa di-scale. Itu kerjaan saya bertahun-tahun. Saya tahu juga kalau marketing akan jadi bottleneck utama saya. Tapi saya tidak mengira akan "seberat" ini.

Distribusi, positioning, pricing, copywriting, content, referral, sampai memahami di mana calon user menghabiskan waktunya itu kerumitan tersendiri. Dan sama seperti software engineering, ini perlu dipelajari dan dilatih juga. Engineer sering percaya produk yang bagus akan ketemu usernya juga. Kadang iya, tapi yang jauh lebih sering terjadi: produknya bagus, cuma tidak ada yang tahu produk itu ada.

## Penutup

Zenfin memang tidak menjadi bisnis "beneran". Tapi kalau ditanya menyesal, tentu saja tidak. Setiap side project pasti mengajarkan sesuatu. Kebetulan Zenfin ini mengajarkan saya pelajaran yang hampir semuanya tidak ada hubungannya dengan coding.

Kalau nanti saya membangun produk lagi, sepertinya saya akan mulai dari menanyakan pertanyaan yang tepat.

Tabik.
