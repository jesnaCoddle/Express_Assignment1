const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');


router.get('/', equipmentController.getAllEquipements);
router.get('/:id', equipmentController.getEquipementById);
router.post('/', equipmentController.createEquipement);
router.patch('/:id', equipmentController.updateEquipement);
router.delete(':id', equipmentController.deleteEquipement);

module.exports = router;
