import { Router } from "express";
import { UserController } from "../controllers";
import { validate, validateIdParam } from "./../middlewares/validate";
import {
  createUserValidationSchema,
  updateUserNameValidationSchema,
  updateUserPhoneNumberValidationSchema,
  changeWorkoutPlansValidationSchema,
  changeFavoriteExercisesValidationSchema,
  changeProductsValidationSchema,
  addMeasurementKeyValidationSchema,
  removeMeasurementKeyValidationSchema,
  setMeasurementValueValidationSchema,
  setMeasurementDateValidationSchema,
  setSchemaNutritionValidationSchema,
  setScheduleWorkoutValidationSchema,
  setWorkoutResultValidationSchema,
  roleValidationSchema,
  addPlanByStudentSchema,
  updateUserMessageTokenValidationSchema,
} from "./../validation/schemas/user";

const router = Router();

const controller = new UserController();

router.get("/me", controller.me);

router.get("/", controller.find);

router.post("/", validate(createUserValidationSchema), controller.create);

router.get("/:id", validateIdParam, controller.findOne);

router.patch(
  "/update-message-token/:id",
  validateIdParam,
  validate(updateUserMessageTokenValidationSchema),
  controller.updateMessageToken
);

router.put(
  "/update-name/:id",
  validateIdParam,
  validate(updateUserNameValidationSchema),
  controller.updateName
);

router.put(
  "/update-phoneNumber/:id",
  validateIdParam,
  validate(updateUserPhoneNumberValidationSchema),
  controller.updateNumber
);

router.put(
  "/update-proAccount/:id",
  validateIdParam,
  controller.updateProAccount
);

router.put(
  "/add-workout-plan/:id",
  validateIdParam,
  validate(changeWorkoutPlansValidationSchema),
  controller.addWorkoutPlan
);

router.put(
  "/add-workout-plan-by-students/:id",
  validateIdParam,
  validate(addPlanByStudentSchema),
  controller.addWorkoutPlanByStudent
);

router.put(
  "/add-nutrition-plan-by-students/:id",
  validateIdParam,
  validate(addPlanByStudentSchema),
  controller.addNutritionPlanByStudents
);

//-----------------
router.put(
  "/add-nutrition-plan/:id",
  validateIdParam,
  controller.addNutritionPlan
);

router.put(
  "/remove-nutrition-plan/:id",
  validateIdParam,
  validate(changeWorkoutPlansValidationSchema),
  controller.removeNutritionPlan
);

//-----------------

router.patch(
  "/remove-workout-plan/:id",
  validateIdParam,
  validate(changeWorkoutPlansValidationSchema),
  controller.removeWorkoutPlan
);

router.put(
  "/add-favorite-exercise/:id",
  validateIdParam,
  validate(changeFavoriteExercisesValidationSchema),
  controller.addFavoriteExercise
);

router.patch(
  "/remove-favorite-exercise/:id",
  validateIdParam,
  validate(changeFavoriteExercisesValidationSchema),
  controller.removeFavoriteExercise
);

router.put(
  "/add-product/:id",
  validateIdParam,
  validate(changeProductsValidationSchema),
  controller.addProduct
);

router.patch(
  "/remove-product/:id",
  validateIdParam,
  validate(changeProductsValidationSchema),
  controller.removeProduct
);

router.put(
  "/add-measurement-row/:id",
  validateIdParam,
  controller.addMeasurementRow
);

router.patch(
  "/remove-measurement-row/:id",
  validateIdParam,
  controller.removeMeasurementRow
);

router.put(
  "/add-measurement-key/:id",
  validateIdParam,
  validate(addMeasurementKeyValidationSchema),
  controller.addMeasurementKey
);

router.patch(
  "/remove-measurement-key/:id",
  validateIdParam,
  validate(removeMeasurementKeyValidationSchema),
  controller.removeMeasurementKey
);

router.patch(
  "/update-role/:id",
  validateIdParam,
  validate(roleValidationSchema),
  controller.updateRole
);
router.put(
  "/set-measurement-value/:id",
  validateIdParam,
  validate(setMeasurementValueValidationSchema),
  controller.setMeasurementValue
);

router.put(
  "/set-measurement-date/:id",
  validateIdParam,
  validate(setMeasurementDateValidationSchema),
  controller.setMeasurementDate
);

router.put(
  "/set-schema-nutrition/:id",
  validateIdParam,
  validate(setSchemaNutritionValidationSchema),
  controller.setSchemaNutrition
);

router.put(
  "/set-schedule-workout/:id",
  validateIdParam,
  validate(setScheduleWorkoutValidationSchema),
  controller.setScheduleWorkout
);

router.put(
  "/set-workout-result/:id",
  validateIdParam,
  validate(setWorkoutResultValidationSchema),
  controller.setWorkoutResult
);

router.put(
  "/finish-schedule-workout/:id",
  validateIdParam,
  controller.finishScheduleWorkout
);

router.delete("/:id", validateIdParam, controller.delete);

export default router;
