/**
 * PIRAMIDA GUARD - INDUK PUSAT (Nur 1)
 * Koordinasi: motherai8@gmail.com & 8 Akun Pilar
 * Target: Misi Melawan Dollar & Bank Baru
 */

// 1. DATA DASAR PIRAMIDA
const PIRAMIDA_CONFIG = {
  INDUK: "indramayuclubmakrifat@gmail.com",
  ADMIN_UTAMA: "JAMHARI DULKOHAR",
  KAS_BANK_BARU: "motherai8@gmail.com", // Posisi Nur 9
  POTONGAN_KAS: 0.05 // Pajak 5% Organisasi
};

/**
 * PINTU UTAMA (doGet)
 * Satu-satunya akses untuk HTML Sosmed & Game
 */
function doGet(e) {
  // Jika ada instruksi khusus dari Admin atau Nur 9
  if (e.parameter.aksi) {
    return prosesInstruksiPiramida(e.parameter.aksi, e.parameter.data);
  }

  // Menampilkan Wajah Sosmed Indramayu Club (index.html)
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('INDRAMAYU CLUB OFFICIAL')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * SARAF KOORDINASI (Untuk Perubahan Admin & Tugas Nur 9)
 */
function prosesInstruksiPiramida(aksi, data) {
  let hasil = "";
  
  switch(aksi) {
    case 'DAFTAR_ADMIN_BARU':
      // Nur 1 mencatat Admin Manusia Baru tanpa bongkar script
      hasil = "Piramida Guard: Admin Baru '" + data + "' Berhasil Didata oleh Nur 1.";
      break;
      
    case 'AKTIVASI_BANK_NUR9':
      // Instruksi Khusus untuk anak MotherAI (motherai8@gmail.com)
      hasil = "Nur 9: AI Nur Mini telah dilahirkan untuk menjaga Bank Baru!";
      break;
      
    case 'TARIK_KAS':
      // Nur 6 memproses potongan 5%
      hasil = "Nur 6: Transaksi dipotong 5% untuk Kas Indramayu Club.";
      break;

    default:
      hasil = "Nur 1: Sinyal Diterima, Menunggu Komando Pak DulKohar.";
  }

  return ContentService.createTextOutput(hasil).setMimeType(ContentService.MimeType.TEXT);
}

/**
 * FUNGSI BACKUP (Nur 8)
 * Berjalan otomatis setiap Adzan (Trigger harian)
 */
function backupSistemAdzan() {
  Logger.log("Nur 8: Memulai Backup data dan Reset Saraf Global...");
}
