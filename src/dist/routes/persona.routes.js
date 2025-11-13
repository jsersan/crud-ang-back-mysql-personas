"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var persona_controller_1 = require("../controllers/persona.controller");
var router = (0, express_1.Router)();
router.get('/', persona_controller_1.getPersonas);
router.get('/:dni', persona_controller_1.getPersona); // ← :dni
router.delete('/:dni', persona_controller_1.deletePersona); // ← :dni
router.post('/', persona_controller_1.postPersona);
router.put('/:dni', persona_controller_1.putPersona); // ← :dni
exports.default = router;
