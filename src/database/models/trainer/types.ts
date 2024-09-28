import { Document, ObjectId } from "mongoose";
import { DishDocument } from "../dish";
import { NutritionPlanDocument } from "../nutrition";
import { ProductDocument } from "../product";
import { UserDocument } from "../user";
import { ROLES, GENDER } from "./../../../types/common";
import { WorkoutPlanDocument } from "./../workout/types";

export interface ITrainer {
  _id: ObjectId | string;
  name: string;
  phoneNumber: string;
  isPhoneNumber: boolean;
  email: string;
  role: ROLES;
  gender: GENDER;
  age: number;
  city: string;
  avatar: string;
  speciality: string;
  experience: number;
  isEducation: boolean;
  startDate: Date;
  endDate: Date;
  subscriptionStatus: EnumSubscriptionStatus;
  subscription: EnumSubscription;
  education: string;
  aboutMe: string;
  telegramLink: string;
  instagramLink: string;
  requestedDisciples: UserDocument[];
  disciples: UserDocument[];
  workoutPlans: WorkoutPlanDocument[];
  products: ProductDocument[];
  dishes: DishDocument[];
  nutritionPlans: NutritionPlanDocument[];
}

export type TrainerDocument = Document & ITrainer;

export enum EnumSubscription {
  NO_SUBSCRIPTION = "NO_SUBSCRIPTION",
  STARTER = "STARTER",
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM",
  ELITE = "ELITE",
}

export enum EnumSubscriptionStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  CANCELED = "CANCELED",
  IN_PROGRESS = "IN_PROGRESS",
}
