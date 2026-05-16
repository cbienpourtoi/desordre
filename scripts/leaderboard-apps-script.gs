// ============================================================
// Google Apps Script — Leaderboard API pour Le Désordre
// 
// SETUP :
// 1. Aller sur https://script.google.com → Nouveau projet
// 2. Coller ce code dans Code.gs
// 3. Exécuter setupSheet() une fois (menu Exécuter)
// 4. Déployer → Nouveau déploiement → Application Web
//    - Exécuter en tant que : Moi
//    - Qui a accès : Tout le monde
// 5. Copier l'URL de déploiement
// 6. La coller dans index.html → LEADERBOARD_URL
// ============================================================

const SHEET_NAME = 'Scores';
const MAX_SCORES = 50;

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['pseudo', 'score', 'queerises', 'pax', 'date']);
    sheet.getRange('1:1').setFontWeight('bold');
  }
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) {
    return jsonResponse([]);
  }
  
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 5).getValues();
  const scores = data
    .map(row => ({
      pseudo: row[0],
      score: Number(row[1]),
      queerises: Number(row[2]),
      pax: Number(row[3]),
      date: row[4]
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_SCORES);
  
  return jsonResponse(scores);
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const pseudo = String(body.pseudo || 'Anonyme').substring(0, 30);
    const score = Math.round(Number(body.score) || 0);
    const queerises = Math.round(Number(body.queerises) || 0);
    const pax = Math.round(Number(body.pax) || 0);
    const date = new Date().toISOString();
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) { setupSheet(); }
    
    SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName(SHEET_NAME)
      .appendRow([pseudo, score, queerises, pax, date]);
    
    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
