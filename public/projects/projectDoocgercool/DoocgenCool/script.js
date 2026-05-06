document.addEventListener('DOMContentLoaded', () => {
    const docTypeSelect = document.getElementById('docType');
    const inTanggal = document.getElementById('tanggal');
    const outTanggal = document.getElementById('outTanggal');
    const tableBody = document.getElementById('tableBody');
    const tableHeader = document.querySelector('#absensiTable thead');
    const btnPrint = document.getElementById('btnPrint');
    const btnAdd = document.getElementById('btnAdd');
    const formFields = document.getElementById('formFields');
    const formTitle = document.getElementById('formTitle');
    const kopTextContainer = document.querySelector('.kop-text');
    const docDateHeader = document.querySelector('.doc-date');
    const absensiForm = document.getElementById('absensiForm');

    // Dynamic Print Style
    const printStyleTag = document.createElement('style');
    document.head.appendChild(printStyleTag);

    let currentDocType = 'RELAWAN';

    // Toast Logic
    function showToast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon">✓</div>
            <span>${message}</span>
        `;
        container.appendChild(toast);
        
        // Animation
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    // Data Relawan (Existing)
    let dataRelawan = [
        { posisi: "Assisten Lapangan", nama: "ERLIS", highlight: false },
        { posisi: "Admin", nama: "SUTAN IRVAN AZIZ", highlight: false },
        { posisi: "CHEF", nama: "RAISA", highlight: true },
        { posisi: "Koordinator Masak", nama: "MARDIATI", highlight: true },
        { posisi: "Assisten Masak", nama: "CUT LAILA HAFNI", highlight: false },
        { posisi: "Assisten Masak", nama: "FAJAR MENTARI MUCHLIS", highlight: false },
        { posisi: "Assisten Masak", nama: "M. JAMIL", highlight: false },
        { posisi: "Anggota Masak", nama: "ADRYATI", highlight: false },
        { posisi: "Anggota Masak", nama: "AFRIANA S", highlight: false },
        { posisi: "Anggota Masak", nama: "CUT RATNA DEWI", highlight: false },
        { posisi: "Anggota Masak", nama: "DIAH NOVITA SARI", highlight: false },
        { posisi: "Anggota Masak", nama: "ISWANDI", highlight: false },
        { posisi: "Anggota Masak", nama: "KHAIRUNNISAH", highlight: false },
        { posisi: "Anggota Masak", nama: "MARIANI M HASAN", highlight: false },
        { posisi: "Anggota Masak", nama: "MUHAMMAD", highlight: false },
        { posisi: "Anggota Masak", nama: "NURHAYATI", highlight: false },
        { posisi: "Anggota Masak", nama: "ROSNITA DEWI", highlight: false },
        { posisi: "Anggota Masak", nama: "YULIDAR", highlight: false },
        { posisi: "Koordinator Pemorsian", nama: "WIKE FERA MARLINA", highlight: true },
        { posisi: "Anggota Pemorsian", nama: "AGUS RANTIKA", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "AISYAH", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "HAURAL VIRARI", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "KHAIRUL MUNAR", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "LAURA GEUBRINA PASHA", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "M. HAFIZ AL RAYYAN", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "NURMASYITAH", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "SURYATI", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "TAHJUL BAHRI", highlight: false },
        { posisi: "Anggota Pemorsian", nama: "TJUT HAIKAL FERUZI", highlight: false },
        { posisi: "Koordinator Pencucian", nama: "RIZKI FAZILAH", highlight: true },
        { posisi: "Anggota Pencucian", nama: "AULI YULITA", highlight: false },
        { posisi: "Anggota Pencucian", nama: "IKHZA FIRDAUS", highlight: false },
        { posisi: "Anggota Pencucian", nama: "JUNAIDI", highlight: false },
        { posisi: "Anggota Pencucian", nama: "LAILA RAHMI", highlight: false },
        { posisi: "Anggota Pencucian", nama: "M. REZA IFRIANDA", highlight: false },
        { posisi: "Anggota Pencucian", nama: "NURDELIMA", highlight: false },
        { posisi: "Anggota Pencucian", nama: "PUTRI REZEKI", highlight: false },
        { posisi: "Anggota Pencucian", nama: "RAHMATUN", highlight: false },
        { posisi: "Anggota Pencucian", nama: "RATNA DEWI", highlight: false },
        { posisi: "Anggota Pencucian", nama: "ROSLAINI", highlight: false },
        { posisi: "Distribusi", nama: "ANWAR MA", highlight: false },
        { posisi: "Distribusi", nama: "CUT ALAMSYAH", highlight: false },
        { posisi: "Distribusi", nama: "RAHMAYADI", highlight: false },
        { posisi: "Distribusi", nama: "RICHWAL", highlight: false },
        { posisi: "Kebersihan", nama: "FINANDA RALA APRILIA", highlight: false },
        { posisi: "Kebersihan", nama: "HASBI USMAN", highlight: false },
        { posisi: "Keamanan", nama: "MUHAMMAD SYAWAL", highlight: false },
        { posisi: "Keamanan", nama: "MUS MULIADI", highlight: false }
    ];

    // Data Jadwal (Initial empty rows)
    function createEmptyJadwal(count) {
        let arr = [];
        for (let i = 0; i < count; i++) {
            arr.push({ tanggal: "", jumlah: "", jam: "", petugas: "" });
        }
        return arr;
    }

    let dataAir = createEmptyJadwal(30);
    let dataGas = createEmptyJadwal(30);

    let dataInsentif = [
        { sekolah: "SMK Negeri 1 Banda Aceh", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "MI Negeri 8 Banda Aceh", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "SD it Quantum Banda Aceh", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "TK Be A Star Islamic Banda Aceh", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "TK My Dream School Banda Aceh", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "SPS Aneuk Lon Gaseh Banda Aceh", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "SPS Bohate Poma", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "PAUD Permata Ummi", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "SPS Saifa Bunda", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "", keterangan: "" },
        { sekolah: "Posyandu Desa Lampeuot", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", totagebag: "", total: "", keterangan: "" },
        { sekolah: "Posyandu Desa Lam Ara", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", totagebag: "", total: "", keterangan: "" },
        { sekolah: "Posyandu Desa Geuceu Kaye Jato", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", totagebag: "", total: "", keterangan: "" },
        { sekolah: "Posyandu Desa Geuceu Komplek", guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", totagebag: "", total: "", keterangan: "" }
    ];

    function isPosyandu(item) {
        return item && item.sekolah && item.sekolah.toLowerCase().startsWith('posyandu');
    }

    // Konfigurasi Dokumen
    const docConfig = {
        RELAWAN: {
            titles: ["DAFTAR KEHADIRAN", "TENAGA RELAWAN", "YAYASAN TEUNGKU CHIEK DIBITAI", "SPPG LAM ARA KEC. BANDA RAYA, KOTA BANDA ACEH"],
            headers: ["No", "Posisi", "Nama", "Jam Masuk", "TANDA TANGAN", "Aksi"],
            formTitle: "Tambah Karyawan Baru",
            fields: [
                { id: "pos", label: "Posisi", placeholder: "Cth: Anggota" },
                { id: "nama", label: "Nama Karyawan", placeholder: "Nama Lengkap" }
            ]
        },
        AIR_ULANG: {
            titles: ["JADWAL MASUK AIR ISI ULANG", "YAYASAN TEUNGKU CHIEK DIBITAI", "SPPG LAM ARA KEC. BANDA RAYA, KOTA BANDA ACEH"],
            headers: ["No", "Hari/Tanggal", "Jumlah", "Jam Masuk", "Petugas", "Tanda Tangan", "Aksi"],
            formTitle: "Tambah Data Masuk Air",
            fields: [
                { id: "f1", label: "Hari/Tanggal", placeholder: "Cth: Senin, 12 Apr" },
                { id: "f2", label: "Jumlah", placeholder: "Cth: 10" },
                { id: "f3", label: "Jam Masuk", placeholder: "Cth: 10:00" },
                { id: "f4", label: "Petugas", placeholder: "Nama Petugas" }
            ]
        },
        GAS: {
            titles: ["JADWAL PERGANTIAN GAS", "YAYASAN TEUNGKU CHIEK DIBITAI", "SPPG LAM ARA KEC. BANDA RAYA, KOTA BANDA ACEH"],
            headers: ["No", "Hari/Tanggal", "Jumlah", "Jam Masuk", "Petugas", "Tanda Tangan", "Aksi"],
            formTitle: "Tambah Data Ganti Gas",
            fields: [
                { id: "f1", label: "Hari/Tanggal", placeholder: "Cth: Selasa, 13 Apr" },
                { id: "f2", label: "Jumlah", placeholder: "Cth: 5" },
                { id: "f3", label: "Jam Masuk", placeholder: "Cth: 08:30" },
                { id: "f4", label: "Petugas", placeholder: "Nama Petugas" }
            ]
        },
        INSENTIF: {
            titles: ["DAFTAR INSENTIF SEKOLAH DAN POSYANDU", "YAYASAN TEUNGKU CHIEK DIBITAI", "SPPG LAM ARA KEC. BANDA RAYA, KOTA BANDA ACEH"],
            headers: ["NO", "Nama Sekolah/Posyandu", "Nama Guru", "Nomor Surat", "Bulan", "Tgl Periode", "Jml Hari", "Insentif", "Total", "Aksi"],
            formTitle: "Tambah Sekolah/Posyandu",
            fields: [
                { id: "f1", label: "Nama Sekolah/Posyandu", placeholder: "Nama Instansi" }
            ]
        }
    };

    function updateSidebarUI() {
        const config = docConfig[currentDocType];
        formTitle.textContent = config.formTitle;
        formFields.innerHTML = '';

        config.fields.forEach(field => {
            const div = document.createElement('div');
            div.className = 'form-group';
            div.innerHTML = `
                <label for="${field.id}">${field.label}</label>
                <input type="text" id="${field.id}" placeholder="${field.placeholder}">
            `;
            formFields.appendChild(div);
        });

        if (currentDocType === 'RELAWAN') {
            docDateHeader.style.display = 'block';
            absensiForm.style.display = 'flex';
        } else {
            docDateHeader.style.display = 'none';
            absensiForm.style.display = 'none';
        }

        const insentifSettingsContainer = document.getElementById('insentifSettingsContainer');
        const dynamicFormContainer = document.getElementById('dynamicFormContainer');

        if (currentDocType === 'INSENTIF') {
            insentifSettingsContainer.style.display = 'block';
            dynamicFormContainer.style.display = 'none';
            populateInsentifSelect();
        } else {
            insentifSettingsContainer.style.display = 'none';
            dynamicFormContainer.style.display = 'block';
        }
    }

    function renderTable() {
        const documentPage = document.getElementById('documentPage');
        const slipPagesContainer = document.getElementById('slipPagesContainer');

        if (currentDocType === 'INSENTIF') {
            documentPage.style.display = 'none';
            slipPagesContainer.style.display = 'flex';
            renderSlips();
            return;
        } else {
            documentPage.style.display = 'block';
            slipPagesContainer.style.display = 'none';
        }

        const config = docConfig[currentDocType];

        // 1. Render Header Kop
        kopTextContainer.innerHTML = '';
        config.titles.forEach(line => {
            const h2 = document.createElement('h2');
            h2.textContent = line;
            if (currentDocType === 'AIR_ULANG' && line.includes('AIR')) {
                h2.style.backgroundColor = '#fef08a'; // Light yellow like image
                h2.style.display = 'inline-block';
                h2.style.padding = '0 10px';
            }
            kopTextContainer.appendChild(h2);
        });

        // 2. Render Table Header
        const thead = document.querySelector('#absensiTable thead');
        thead.innerHTML = '';
        const trHeader = document.createElement('tr');
        config.headers.forEach((header, idx) => {
            const th = document.createElement('th');
            th.textContent = header;
            if (header === 'Aksi') th.className = 'no-print';

            // Width adjustments
            if (currentDocType === 'RELAWAN') {
                if (idx === 0) th.style.width = '5%';
                if (idx === 1) th.style.width = '20%';
                if (idx === 2) th.style.width = '30%';
                if (idx === 3) th.style.width = '15%';
                if (header === 'TANDA TANGAN') {
                    th.style.width = '30%';
                    th.setAttribute('colspan', '2');
                }
            } else if (currentDocType === 'INSENTIF') {
                if (idx === 0) th.style.width = '4%';
                if (idx === 1) th.style.width = '16%';
                if (idx === 2) th.style.width = '12%';
                if (idx === 3) th.style.width = '10%';
                if (idx === 4) th.style.width = '8%';
                if (idx === 5) th.style.width = '16%';
                if (idx === 6) th.style.width = '8%';
                if (idx === 7) th.style.width = '12%';
                if (idx === 8) th.style.width = '14%';
            } else {
                if (idx === 0) th.style.width = '5%';
                if (idx === 5) th.style.width = '20%'; // Tanda tangan
            }
            trHeader.appendChild(th);
        });
        thead.appendChild(trHeader);

        // 3. Render Table Content
        tableBody.innerHTML = '';
        let currentData;
        if (currentDocType === 'RELAWAN') currentData = dataRelawan;
        else if (currentDocType === 'AIR_ULANG') currentData = dataAir;
        else if (currentDocType === 'GAS') currentData = dataGas;
        else if (currentDocType === 'INSENTIF') currentData = dataInsentif;

        currentData.forEach((item, index) => {
            const no = index + 1;
            const tr = document.createElement('tr');
            if (item.highlight) tr.classList.add('row-highlight');

            if (currentDocType === 'RELAWAN') {
                let sigLeft = (no % 2 !== 0) ? `<span class="sig-number">${no}</span>` : '';
                let sigRight = (no % 2 === 0) ? `<span class="sig-number">${no}</span>` : '';
                let jam = item.jam || "";

                tr.innerHTML = `
                    <td>${no}</td>
                    <td contenteditable="true" spellcheck="false">${item.posisi}</td>
                    <td contenteditable="true" spellcheck="false">${item.nama}</td>
                    <td contenteditable="true" spellcheck="false">${jam}</td>
                    <td class="sig-cell">${sigLeft}</td>
                    <td class="sig-cell sig-separator">${sigRight}</td>
                    <td class="no-print" style="border: none; background: transparent; text-align: center;">
                        <button class="btn-delete" data-index="${index}">X</button>
                    </td>
                `;
            } else if (currentDocType === 'INSENTIF') {
                tr.innerHTML = `
                    <td>${no}</td>
                    <td contenteditable="true" spellcheck="false">${item.sekolah}</td>
                    <td contenteditable="true" spellcheck="false">${item.guru}</td>
                    <td contenteditable="true" spellcheck="false">${item.noSurat}</td>
                    <td contenteditable="true" spellcheck="false">${item.bulan}</td>
                    <td contenteditable="true" spellcheck="false">${item.tglPeriode}</td>
                    <td contenteditable="true" spellcheck="false">${item.jmlHari}</td>
                    <td contenteditable="true" spellcheck="false">${item.insentif}</td>
                    <td contenteditable="true" spellcheck="false">${item.total}</td>
                    <td class="no-print" style="border: none; background: transparent; text-align: center;">
                        <button class="btn-delete" data-index="${index}">X</button>
                    </td>
                `;
            } else {
                tr.innerHTML = `
                    <td>${no}</td>
                    <td contenteditable="true" spellcheck="false">${item.tanggal}</td>
                    <td contenteditable="true" spellcheck="false">${item.jumlah}</td>
                    <td contenteditable="true" spellcheck="false">${item.jam}</td>
                    <td contenteditable="true" spellcheck="false">${item.petugas}</td>
                    <td></td>
                    <td class="no-print" style="border: none; background: transparent; text-align: center;">
                        <button class="btn-delete" data-index="${index}">X</button>
                    </td>
                `;
            }
            tableBody.appendChild(tr);
        });
    }

    function renderSlips() {
        const container = document.getElementById('slipPagesContainer');
        container.innerHTML = '';

        let currentData = dataInsentif;

        for (let i = 0; i < currentData.length; i++) {
            const page = document.createElement('div');
            page.className = 'document-page slip-page';
            page.id = 'slip-page-' + i;

            const slip1 = createSlipHTML(currentData[i], i);
            page.innerHTML += slip1;

            container.appendChild(page);
        }
    }

    function scrollToSlip(index) {
        const slipEl = document.getElementById('slip-page-' + index);
        if (!slipEl) return;
        slipEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Highlight effect
        slipEl.style.transition = 'box-shadow 0.3s ease';
        slipEl.style.boxShadow = '0 0 0 4px #3b82f6';
        setTimeout(() => {
            slipEl.style.boxShadow = '';
        }, 1500);
    }

    function createSlipHTML(item, index) {
        return `
        <div class="slip-container">
            <div class="kop-container">
                <img src="asset/BGN_LOGO.png" alt="Logo" class="kop-logo" onerror="this.style.display='none'">
                <div class="kop-text">
                    <h2 style="font-size: 13pt;">SPPG Kota Banda Aceh Banda Raya Lam Ara</h2>
                    <h3 style="font-size: 11pt; font-weight: normal; margin-top: 2px;">Yayasan Teungku Chik Dibitai</h3>
                    <p style="font-size: 9pt; font-weight: normal; margin-top: 2px;">Jl. Wedana, Lr. Nekku, No. 21, Desa Lam Ara, Kec. Banda Raya, Kota Banda Aceh</p>
                </div>
                <div class="kop-spacer"></div>
            </div>
            <hr class="kop-divider">
            <div class="slip-title">
                <h2 style="font-size: 11pt; font-weight: bold; margin-bottom: 2px;">${isPosyandu(item) ? 'BUKTI PENERIMAAN INSENTIF KADER' : 'BUKTI PENERIMAAN INSENTIF GURU'}</h2>
                <p style="font-size: 10pt;" contenteditable="true" spellcheck="false">${item.noSurat || '027/SPPG/INS/IV/2026'}</p>
            </div>
            
            <div class="slip-data-penerima">
                <p style="font-size: 10pt; font-weight: bold;">DATA PENERIMA</p>
                <table class="slip-info-table">
                    <tr><td width="120">${isPosyandu(item) ? 'Nama Kader' : 'Nama Guru'}</td><td width="10">:</td><td contenteditable="true" spellcheck="false" style="border-bottom: 1px dotted #000; display: inline-block; min-width: 200px; margin-bottom: 2px;">${item.guru || ''}</td></tr>
                    <tr><td>${isPosyandu(item) ? 'Nama Posyandu' : 'Nama Sekolah'}</td><td>:</td><td contenteditable="true" spellcheck="false"><strong>${item.sekolah}</strong></td></tr>
                    <tr><td>Periode</td><td>:</td><td contenteditable="true" spellcheck="false">${item.tglPeriode || '13 April s.d 25 April 2026'}</td></tr>
                </table>
            </div>
            
            <div class="slip-rincian">
                <p style="font-size: 10pt; font-weight: bold; margin-bottom: 4px;">RINCIAN PENERIMAAN</p>
                ${isPosyandu(item) ? `
                <table class="absensi-table slip-rincian-table">
                    <thead>
                        <tr>
                            <th style="width: 5%">No</th>
                            <th style="width: 30%">Keterangan</th>
                            <th style="width: 15%">Totebag</th>
                            <th style="width: 15%">Hari</th>
                            <th style="width: 15%">Rate (Rp)</th>
                            <th style="width: 20%">Total (Rp)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="center">1</td>
                            <td contenteditable="true" spellcheck="false">${item.keterangan || 'Insentif Kader Posyandu'}</td>
                            <td align="center" contenteditable="true" spellcheck="false">${item.totagebag || '0'}</td>
                            <td align="center" contenteditable="true" spellcheck="false">${item.jmlHari || '0'}</td>
                            <td align="center">1.000</td>
                            <td>Rp <span contenteditable="true" spellcheck="false" style="float: right;">${item.total || '0'}</span></td>
                        </tr>
                        <tr>
                            <td colspan="5" align="center"><strong>Total yang Diterima</strong></td>
                            <td><strong>Rp <span contenteditable="true" spellcheck="false" style="float: right;">${item.total || '0'}</span></strong></td>
                        </tr>
                    </tbody>
                </table>
                ` : `
                <table class="absensi-table slip-rincian-table">
                    <thead>
                        <tr>
                            <th style="width: 5%">No</th>
                            <th style="width: 35%">Keterangan</th>
                            <th style="width: 15%">Jumlah Hari</th>
                            <th style="width: 25%">Insentif Per Hari (Rp)</th>
                            <th style="width: 20%">Total (Rp)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="center">1</td>
                            <td contenteditable="true" spellcheck="false">${item.keterangan || 'Insentif Periode 8'}</td>
                            <td align="center" contenteditable="true" spellcheck="false">${item.jmlHari || '0'}</td>
                            <td>Rp <span contenteditable="true" spellcheck="false" style="float: right;">${item.insentif || '0'}</span></td>
                            <td>Rp <span contenteditable="true" spellcheck="false" style="float: right;">${item.total || '0'}</span></td>
                        </tr>
                        <tr>
                            <td colspan="4" align="center"><strong>Total yang Diterima</strong></td>
                            <td><strong>Rp <span contenteditable="true" spellcheck="false" style="float: right;">${item.total || '0'}</span></strong></td>
                        </tr>
                    </tbody>
                </table>
                `}
            </div>
            
            <div class="slip-signatures">
                <div class="sig-box">
                    <p style="font-size: 10pt;">Mengetahui,</p>
                    <div style="height: 95px;"></div>
                    <p style="font-size: 10pt; line-height: 1.3;"><strong>Aulia Rahmad, S.E.</strong><br>Kepala SPPG</p>
                </div>
                <div class="sig-box" style="text-align: center;">
                    <p style="font-size: 10pt;">Penerima</p>
                    <div style="height: 95px;"></div>
                    <p style="font-size: 10pt;"><strong>(....................................)</strong></p>
                </div>
            </div>
            <button class="btn-delete no-print" data-index="${index}" style="position: absolute; top: 10px; right: 10px;">Hapus Slip Ini</button>
        </div>
        `;
    }

    function updatePageSize() {
        const docPage = document.getElementById('documentPage');
        if (currentDocType === 'INSENTIF') {
            docPage.classList.remove('landscape-mode');
            printStyleTag.innerHTML = '@media print { @page { size: A4 portrait !important; margin: 1cm; } }';
        } else {
            docPage.classList.remove('landscape-mode');
            printStyleTag.innerHTML = '@media print { @page { size: A4 portrait !important; margin: 1cm; } }';
        }
    }

    // Initial setup
    updateSidebarUI();
    renderTable();
    updatePageSize();

    // Event Listeners
    docTypeSelect.addEventListener('change', (e) => {
        currentDocType = e.target.value;
        updateSidebarUI();
        renderTable();
    });

    // Logic untuk form data per instansi (Insentif)
    function populateInsentifSelect() {
        const select = document.getElementById('iSelectSekolah');
        if (!select) return;

        if (select.options.length === 0) {
            dataInsentif.forEach((item, idx) => {
                const opt = document.createElement('option');
                opt.value = idx;
                opt.textContent = item.sekolah;
                select.appendChild(opt);
            });
            loadInsentifForm(0);
        }
    }

    function loadInsentifForm(index) {
        const item = dataInsentif[index];
        if (!item) return;

        const isPos = isPosyandu(item);

        // Toggle form blocks
        document.getElementById('formSekolahBlock').style.display = isPos ? 'none' : 'block';
        document.getElementById('formPosyanduBlock').style.display = isPos ? 'block' : 'none';

        if (isPos) {
            document.getElementById('iKaderPosyandu').value = item.guru || "";
            document.getElementById('iNoSuratPosyandu').value = item.noSurat || "";
            document.getElementById('iPeriodePosyandu').value = item.tglPeriode || "";
            document.getElementById('iKeteranganPosyandu').value = item.keterangan || "";
            document.getElementById('iHariPosyandu').value = item.jmlHari || "";
            document.getElementById('iTotebagPosyandu').value = item.totagebag || "";
            document.getElementById('iTotalPosyandu').value = item.total || "";
        } else {
            document.getElementById('iGuruSekolah').value = item.guru || "";
            document.getElementById('iNoSuratSekolah').value = item.noSurat || "";
            document.getElementById('iPeriodeSekolah').value = item.tglPeriode || "";
            document.getElementById('iKeteranganSekolah').value = item.keterangan || "";
            document.getElementById('iHariSekolah').value = item.jmlHari || "";
            document.getElementById('iInsentifSekolah').value = item.insentif || "";
            document.getElementById('iTotalSekolah').value = item.total || "";
        }
    }

    // === KALKULASI SEKOLAH: Hari × Insentif ===
    function calcSekolah() {
        const hari = parseFloat(document.getElementById('iHariSekolah').value) || 0;
        const insentifVal = document.getElementById('iInsentifSekolah').value;
        const insentif = parseFloat(insentifVal.replace(/\./g, '')) || 0;
        const total = hari * insentif;
        document.getElementById('iTotalSekolah').value = total > 0 ? total.toLocaleString('id-ID') : '';
    }

    // === KALKULASI POSYANDU: Totebag × Hari × 1.000 ===
    function calcPosyandu() {
        const hari = parseFloat(document.getElementById('iHariPosyandu').value) || 0;
        const totebag = parseFloat(document.getElementById('iTotebagPosyandu').value.replace(/\./g, '')) || 0;
        const total = totebag * hari * 1000;
        document.getElementById('iTotalPosyandu').value = total > 0 ? total.toLocaleString('id-ID') : '';
    }

    function formatCurrencyInput(el, calcFn) {
        let val = el.value.replace(/[^0-9]/g, '');
        el.value = val ? parseInt(val, 10).toLocaleString('id-ID') : '';
        calcFn();
    }

    // Event listeners — Sekolah
    const iHariSekolah = document.getElementById('iHariSekolah');
    const iInsentifSekolah = document.getElementById('iInsentifSekolah');
    if (iHariSekolah) iHariSekolah.addEventListener('input', calcSekolah);
    if (iInsentifSekolah) iInsentifSekolah.addEventListener('input', function () { formatCurrencyInput(this, calcSekolah); });

    // Event listeners — Posyandu
    const iHariPosyandu = document.getElementById('iHariPosyandu');
    const iTotebagPosyandu = document.getElementById('iTotebagPosyandu');
    if (iHariPosyandu) iHariPosyandu.addEventListener('input', calcPosyandu);
    if (iTotebagPosyandu) iTotebagPosyandu.addEventListener('input', calcPosyandu);

    const selectSekolah = document.getElementById('iSelectSekolah');
    if (selectSekolah) {
        selectSekolah.addEventListener('change', (e) => {
            loadInsentifForm(e.target.value);
            scrollToSlip(e.target.value);
        });
    }

    // === SIMPAN SEKOLAH ===
    const btnApplySekolah = document.getElementById('btnApplySekolah');
    if (btnApplySekolah) {
        btnApplySekolah.addEventListener('click', () => {
            const index = document.getElementById('iSelectSekolah').value;
            const item = dataInsentif[index];
            if (!item) return;

            item.guru = document.getElementById('iGuruSekolah').value;
            item.noSurat = document.getElementById('iNoSuratSekolah').value;
            item.tglPeriode = document.getElementById('iPeriodeSekolah').value;
            item.keterangan = document.getElementById('iKeteranganSekolah').value;
            item.jmlHari = document.getElementById('iHariSekolah').value;
            item.insentif = document.getElementById('iInsentifSekolah').value;
            item.total = document.getElementById('iTotalSekolah').value;

            renderSlips();
            showToast("Slip Sekolah berhasil diperbarui!");
            btnApplySekolah.textContent = "Tersimpan! ✓";
            setTimeout(() => { btnApplySekolah.textContent = "Simpan ke Slip"; }, 1500);
        });
    }

    // === SIMPAN POSYANDU ===
    const btnApplyPosyandu = document.getElementById('btnApplyPosyandu');
    if (btnApplyPosyandu) {
        btnApplyPosyandu.addEventListener('click', () => {
            const index = document.getElementById('iSelectSekolah').value;
            const item = dataInsentif[index];
            if (!item) return;

            item.guru = document.getElementById('iKaderPosyandu').value;
            item.noSurat = document.getElementById('iNoSuratPosyandu').value;
            item.tglPeriode = document.getElementById('iPeriodePosyandu').value;
            item.keterangan = document.getElementById('iKeteranganPosyandu').value;
            item.jmlHari = document.getElementById('iHariPosyandu').value;
            item.totagebag = document.getElementById('iTotebagPosyandu').value;
            item.total = document.getElementById('iTotalPosyandu').value;

            renderSlips();
            showToast("Slip Posyandu berhasil diperbarui!");
            btnApplyPosyandu.textContent = "Tersimpan! ✓";
            setTimeout(() => { btnApplyPosyandu.textContent = "Simpan ke Slip"; }, 1500);
        });
    }

    // Event Delegation untuk Delete
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            let currentData;
            if (currentDocType === 'RELAWAN') currentData = dataRelawan;
            else if (currentDocType === 'AIR_ULANG') currentData = dataAir;
            else if (currentDocType === 'GAS') currentData = dataGas;
            else if (currentDocType === 'INSENTIF') currentData = dataInsentif;

            if (confirm(`Hapus baris/slip ini?`)) {
                currentData.splice(index, 1);
                renderTable();
            }
        }
    });

    // Event Delegation untuk Edit
    tableBody.addEventListener('input', (e) => {
        if (e.target.hasAttribute('contenteditable')) {
            const tr = e.target.closest('tr');
            const btnDelete = tr.querySelector('.btn-delete');
            if (!btnDelete) return; // Prevent error if header or layout differences
            const index = parseInt(btnDelete.getAttribute('data-index'));
            const tds = Array.from(tr.children);
            const cellIndex = tds.indexOf(e.target);

            let currentData;
            if (currentDocType === 'RELAWAN') currentData = dataRelawan;
            else if (currentDocType === 'AIR_ULANG') currentData = dataAir;
            else if (currentDocType === 'GAS') currentData = dataGas;
            else if (currentDocType === 'INSENTIF') currentData = dataInsentif;

            if (currentDocType === 'RELAWAN') {
                if (cellIndex === 1) currentData[index].posisi = e.target.innerText;
                if (cellIndex === 2) currentData[index].nama = e.target.innerText;
                if (cellIndex === 3) currentData[index].jam = e.target.innerText;
            } else if (currentDocType === 'INSENTIF') {
                // INSENTIF is manually edited on the slip, not in the table.
            } else {
                if (cellIndex === 1) currentData[index].tanggal = e.target.innerText;
                if (cellIndex === 2) currentData[index].jumlah = e.target.innerText;
                if (cellIndex === 3) currentData[index].jam = e.target.innerText;
                if (cellIndex === 4) currentData[index].petugas = e.target.innerText;
            }
        }
    });

    // Tanggal logic
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    inTanggal.value = `${yyyy}-${mm}-${dd}`;

    const bulanIndo = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];

    function updateTanggal() {
        const date = new Date(inTanggal.value);
        if (!isNaN(date)) {
            outTanggal.textContent = `${date.getDate()} ${bulanIndo[date.getMonth()]} ${date.getFullYear()}`;
        }
    }
    inTanggal.addEventListener('input', updateTanggal);
    updateTanggal();

    // Tambah Baris
    btnAdd.addEventListener('click', () => {
        let currentData;
        if (currentDocType === 'RELAWAN') currentData = dataRelawan;
        else if (currentDocType === 'AIR_ULANG') currentData = dataAir;
        else if (currentDocType === 'GAS') currentData = dataGas;
        else if (currentDocType === 'INSENTIF') currentData = dataInsentif;

        if (currentDocType === 'RELAWAN') {
            const pos = document.getElementById('pos').value;
            const nama = document.getElementById('nama').value;
            currentData.push({ posisi: pos, nama: nama, jam: "", highlight: false });
        } else if (currentDocType === 'INSENTIF') {
            const f1 = document.getElementById('f1').value;
            currentData.push({ sekolah: f1, guru: "", noSurat: "", bulan: "", tglPeriode: "", jmlHari: "", insentif: "", total: "" });
        } else {
            const f1 = document.getElementById('f1').value;
            const f2 = document.getElementById('f2').value;
            const f3 = document.getElementById('f3').value;
            const f4 = document.getElementById('f4').value;
            currentData.push({ tanggal: f1, jumlah: f2, jam: f3, petugas: f4 });
        }

        renderTable();
        showToast("Baris baru berhasil ditambahkan!");
        document.querySelectorAll('#addItemForm input').forEach(i => i.value = '');
    });

    btnPrint.addEventListener('click', () => window.print());

    const btnExcel = document.getElementById('btnExcel');
    if (btnExcel) {
        btnExcel.addEventListener('click', () => {
            const table = document.getElementById('absensiTable');
            const clonedTable = table.cloneNode(true);
            clonedTable.querySelectorAll('.no-print').forEach(el => el.remove());
            const wb = XLSX.utils.table_to_book(clonedTable, { sheet: currentDocType });
            XLSX.writeFile(wb, `${currentDocType}_${outTanggal.textContent}.xlsx`);
        });
    }
});
