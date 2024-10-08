import { Document, ObjectId } from "mongoose";
import {
  EnumSubscription,
  EnumSubscriptionStatus,
  TrainerDocument,
} from "../trainer";
import { ExerciseDocument } from "../exercise";
import { WorkoutPlanDocument } from "./../workout";
import { IProduct, ProductDocument } from "../product";
import { DishDocument, IDish } from "../dish";
import { NutritionPlanDocument } from "../nutrition";
import { NUTRITION_TYPE, ROLES } from "./../../../types/common";

export interface IUser {
  _id: ObjectId | string;
  name: string;
  phoneNumber: string;
  role: ROLES;
  isProAccount: boolean;
  startDate: Date;
  endDate: Date;
  subscriptionStatus: EnumSubscriptionStatus;
  subscription: EnumSubscription;
  wallet: string;
  myTrainers: TrainerDocument[];
  favoriteExercises: ExerciseDocument[];
  workoutPlans: WorkoutPlanDocument[];
  scheduleWorkouts: ScheduleWorkout[];
  products: ProductDocument[];
  dishes: DishDocument[];
  messageToken: string;
  nutritionPlans: NutritionPlanDocument[];
  schemaNutritions: SchemaNutrition[];
  myMeasurements: Measurement[];
}

export type UserDocument = Document & IUser;

export type ScheduleWorkout = {
  isFinished: boolean;
  activeWeek: number;
  current: boolean;
  plan: WorkoutPlanDocument;
  results: WorkoutResult[][][][];
};

export type WorkoutResult = {
  weight: number;
  repeat: number;
};

export type SchemaNutrition = {
  date: Date;
  data: EnumSchemaNutritionData;
  products: IProduct[];
  amountsP: number[];
  dishes: IDish[];
  amountsD: number[];
};

export type EnumSchemaNutritionData = {
  nType: NUTRITION_TYPE;
  dailyNorm: number;
  amount: number;
  proteinPercent: number;
  oilPercent: number;
  mergeAmount: number;
  mergeCarb: number;
};

export type Measurement = {
  date: Date;
  data: MeasurementData[];
};

export type MeasurementData = {
  key: string;
  value: string;
};
