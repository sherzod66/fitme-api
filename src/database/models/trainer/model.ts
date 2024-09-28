import { model, Schema, SchemaTypes } from "mongoose";
import { EnumSubscription, EnumSubscriptionStatus, ITrainer } from "./types";
import { ROLES, GENDER } from "./../../../types/common";

const trainerSchema = new Schema<Partial<ITrainer>>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    role: {
      type: String,
      enum: [ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.TRAINER, ROLES.USER],
      default: ROLES.TRAINER,
    },

    gender: {
      type: String,
      enum: [GENDER.MALE, GENDER.FEMALE, GENDER.ALL],
      default: GENDER.MALE,
    },

    age: {
      type: Number,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      required: true,
    },

    speciality: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    education: {
      type: String,
      required: true,
    },

    aboutMe: {
      type: String,
      required: true,
    },

    telegramLink: {
      type: String,
      required: true,
    },
    isPhoneNumber: {
      type: Boolean,
      required: true,
    },

    instagramLink: {
      type: String,
      required: true,
    },
    isEducation: {
      type: Boolean,
      required: true,
      default: false,
    },
    subscriptionStatus: {
      type: String,
      enum: [
        EnumSubscriptionStatus.ACTIVE,
        EnumSubscriptionStatus.CANCELED,
        EnumSubscriptionStatus.EXPIRED,
        EnumSubscriptionStatus.IN_PROGRESS,
      ],
      default: EnumSubscriptionStatus.IN_PROGRESS,
    },

    startDate: {
      type: Date,
      required: false,
      default: "",
    },
    endDate: {
      type: Date,
      default: "",
    },
    subscription: {
      type: String,
      required: false,
      enum: [
        EnumSubscription.NO_SUBSCRIPTION,
        EnumSubscription.STARTER,
        EnumSubscription.STANDARD,
        EnumSubscription.PREMIUM,
        EnumSubscription.ELITE,
      ],
      default: EnumSubscription.NO_SUBSCRIPTION,
    },

    requestedDisciples: {
      type: [SchemaTypes.ObjectId],
      ref: "User",
      default: null,
    },

    disciples: {
      type: [SchemaTypes.ObjectId],
      ref: "User",
      default: null,
    },

    workoutPlans: {
      type: [SchemaTypes.ObjectId],
      ref: "WorkoutPlan",
      default: null,
    },

    products: {
      type: [SchemaTypes.ObjectId],
      ref: "Product",
      default: null,
    },

    dishes: {
      type: [SchemaTypes.ObjectId],
      ref: "Dish",
      default: null,
    },

    nutritionPlans: {
      type: [SchemaTypes.ObjectId],
      ref: "NutritionPlan",
      default: null,
    },
  },
  { timestamps: true }
);

export const TrainerModel = model("Trainer", trainerSchema);
