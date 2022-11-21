const express = require("express")
const router = express.Router()
const { getSiswa, saveSiswa, formSiswa, getsatuSiswa, updatesatuSiswa, deleteSiswa } = require('../controllers/siswaController')

router.get('/', getSiswa);
router.get('/submit-siswa', formSiswa)
router.post('/submit-siswa', saveSiswa)
router.get('/update-siswa/:id', getsatuSiswa);
router.post('/update-siswa/:id', updatesatuSiswa);
router.get('/delete-siswa/:id', deleteSiswa);
module.exports = router;