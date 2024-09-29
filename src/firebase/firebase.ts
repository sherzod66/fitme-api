import admin from "firebase-admin";
import * as serviceAccount from "./fit-me-f0215-firebase-adminsdk-4tc0r-c91e00869a.json"; // Укажи путь к своему JSON-файлу с ключами

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const sendNotification = async (
  token: string,
  title: string,
  body: string
) => {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: token,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Уведомление отправлено успешно:", response);
  } catch (error) {
    console.error("Ошибка при отправке уведомления:", error);
  }
};
