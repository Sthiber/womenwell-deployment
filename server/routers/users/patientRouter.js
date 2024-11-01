import express from "express";
import { postMedicalHistory } from "../../controllers/patient/patientMedicalHistoryController.js";
import {
  postInsurance,
  hasInsuranceInfo,
  updateInsurance,
} from "../../controllers/patient/patientInsuranceController.js";
import { getPatientMedications } from "../../controllers/patient/patientMedicationsControllers.js";
//import { patientController } from '../../controllers/patientController.js';

const router = express.Router();

router.post("/medical-history", postMedicalHistory);
router.post("/insurance", postInsurance);
router.get("/insurance-info", hasInsuranceInfo);
router.put("/update-insurance", updateInsurance);
router.get("/medications", getPatientMedications);

export default router;
