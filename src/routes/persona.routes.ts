import { Router } from 'express';
import { deletePersona, getPersona, getPersonas, postPersona, putPersona } from '../controllers/persona.controller';

const router = Router();

router.get('/', getPersonas);
router.get('/:dni', getPersona);        // ← :dni
router.delete('/:dni', deletePersona);  // ← :dni
router.post('/', postPersona);
router.put('/:dni', putPersona);        // ← :dni

export default router;