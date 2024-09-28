import { model, Schema, SchemaTypes } from "mongoose";
import { ROLES } from "./../../../types/common";
import { IUser } from "./types";
import { EnumSubscription, EnumSubscriptionStatus } from "../trainer";

const userSchema = new Schema<Partial<IUser>>(
  {
    name: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    role: {
      type: String,
      enum: [
        ROLES.SUPERADMIN,
        ROLES.ADMIN,
        ROLES.TRAINER,
        ROLES.USER,
        ROLES.FITNESS_CLUB,
      ],
      default: ROLES.USER,
    },

    isProAccount: {
      type: Boolean,
      default: false,
    },

    myTrainers: {
      type: [SchemaTypes.ObjectId],
      ref: "Trainer",
    },

    favoriteExercises: {
      type: [SchemaTypes.ObjectId],
      ref: "Exercise",
    },

    workoutPlans: {
      type: [SchemaTypes.ObjectId],
      ref: "WorkoutPlan",
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
    messageToken: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: false,
      default: "",
    },
    endDate: {
      type: Date,
      required: false,
      default: "",
    },
    subscription: {
      type: String,
      required: true,
      enum: [
        EnumSubscription.NO_SUBSCRIPTION,
        EnumSubscription.STARTER,
        EnumSubscription.STANDARD,
        EnumSubscription.PREMIUM,
        EnumSubscription.ELITE,
      ],
      default: EnumSubscription.NO_SUBSCRIPTION,
    },

    scheduleWorkouts: [
      {
        isFinished: {
          type: Boolean,
          required: true,
        },

        current: {
          type: Boolean,
          required: false,
        },

        activeWeek: {
          type: Number,
          required: true,
        },

        plan: {
          type: SchemaTypes.ObjectId,
          ref: "WorkoutPlan",
        },

        results: [
          [
            [
              [
                {
                  weight: {
                    type: Number,
                    required: true,
                  },
                  repeat: {
                    type: Number,
                    required: true,
                  },
                },
              ],
            ],
          ],
        ],
      },
    ],

    products: {
      type: [SchemaTypes.ObjectId],
      ref: "Product",
    },

    wallet: {
      type: SchemaTypes.ObjectId,
      ref: "Wallet",
    },

    dishes: {
      type: [SchemaTypes.ObjectId],
      ref: "Dish",
    },

    nutritionPlans: {
      type: [SchemaTypes.ObjectId],
      ref: "NutritionPlan",
    },

    schemaNutritions: [
      {
        date: Date,

        data: {
          dailyNorm: Number,

          amount: Number,

          proteinPercent: Number,

          oilPercent: Number,

          mergeAmount: Number,

          mergeCarb: Number,

          nType: String,
        },

        products: {
          type: [SchemaTypes.ObjectId],
          ref: "Product",
        },

        amountsP: [Number],

        dishes: {
          type: [SchemaTypes.ObjectId],
          ref: "Dish",
        },

        amountsD: [Number],
      },
    ],

    myMeasurements: [
      {
        date: Date,

        data: [
          {
            key: String,
            value: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export const UserModel = model("User", userSchema);
