import Carbs from "../assets/icons/carbs.png"
import Fat from "../assets/icons/fat.png"
import Protein from "../assets/icons/protein.png"
import Kcal from "../assets/icons/kcal.png"
import { api as http } from "../services/axios"
import { mockAxios } from "../services/axios"

/**
 * Models Class:
 * - userInfos(serviceData): Formats user information and key data.
 * - activity(serviceData): Formats user activity data.
 * - averageSessions(serviceData): Formats user average session data.
 * - performance(serviceData): Formats user performance data.
 *
 * UserServices Class:
 * - fetchData(url): Fetches data from the given URL.
 * - getAllData(userId): Fetches and formats all user data (information, activity, average sessions, performance).
 * - getOneUser(userId): Fetches and formats user information.
 * - getUserActivity(userId): Fetches and formats user activity data.
 * - getUserAverageSessions(userId): Fetches and formats user average session data.
 * - getUserPerformance(userId): Fetches and formats user performance data.
 */

class Models {
  userInfos(serviceData) {
    const { id, userInfos, score, todayScore, keyData } = serviceData.data.data

    return {
      id,
      identity: {
        firstName: userInfos?.firstName || "",
        lastName: userInfos?.lastName || "",
        age: userInfos?.age || 0,
      },
      todayScore: (score || todayScore || 0) * 100,
      nutrients: [
        {
          name: "Calories",
          unit: "kCal",
          count: keyData?.calorieCount || 0,
          icon: Carbs,
        },
        {
          name: "Protéines",
          unit: "g",
          count: keyData?.proteinCount || 0,
          icon: Protein,
        },
        {
          name: "Glucides",
          unit: "g",
          count: keyData?.carbohydrateCount || 0,
          icon: Kcal,
        },
        {
          name: "Lipides",
          unit: "g",
          count: keyData?.lipidCount || 0,
          icon: Fat,
        },
      ],
    }
  }

  activity(serviceData) {
    const { sessions } = serviceData.data.data

    return Array.isArray(sessions)
      ? sessions.map((item, index) => {
          const { day, kilogram, calories } = item
          return {
            day: day || "",
            kilogram: kilogram || 0,
            calories: calories || 0,
            index: index + 1,
          }
        })
      : []
  }

  averageSessions(serviceData) {
    const { sessions } = serviceData.data.data

    const days = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    }

    return Array.isArray(sessions)
      ? sessions.map((item) => {
          const { day, sessionLength } = item
          return {
            day: days[day] || 0,
            sessionLength: sessionLength || 0,
          }
        })
      : []
  }

  performance(serviceData) {
    const { data } = serviceData.data.data

    const kindNames = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    }

    return Array.isArray(data)
      ? data
          .map((item) => {
            const { value, kind } = item
            return {
              value: value || 0,
              kind: kindNames[kind] || 0,
            }
          })
          .reverse()
      : []
  }
}

const model = new Models()

class UserServices extends Models {
  async fetchData(url) {
    const response = await http.get(url)

    if (response.status === 404) {
      throw new Error("Utilisateur non trouvé !")
    }
    if (response.ok === false) {
      throw new Error("Une erreur est survenue")
    }

    return response
  }

  async getAllData(userId) {
    return Promise.all([
      this.getOneUser(userId),
      this.getUserActivity(userId),
      this.getUserAverageSessions(userId),
      this.getUserPerformance(userId),
    ])
  }

  async getOneUser(userId) {
    const url = `/user/${userId}`
    const userInfos = await this.fetchData(url)
    return model.userInfos(userInfos)
  }

  async getUserActivity(userId) {
    const url = `/user/${userId}/activity`
    const userActivity = await this.fetchData(url)
    return model.activity(userActivity)
  }

  async getUserAverageSessions(userId) {
    const url = `/user/${userId}/average-sessions`
    const userAverageSessions = await this.fetchData(url)
    return model.averageSessions(userAverageSessions)
  }

  async getUserPerformance(userId) {
    const url = `/user/${userId}/performance`
    const userPerformance = await this.fetchData(url)
    return model.performance(userPerformance)
  }
}

const userServices = new UserServices()

class UserMockData extends Models {
  async getOneUser(userId) {
    const userInfos = await mockAxios(userId, 'informations');
    return model.userInfos(userInfos);
  }

  async getUserActivity(userId) {
    const userActivity = await mockAxios(userId, 'activity');
    return model.activity(userActivity);
  }

  async getUserAverageSessions(userId) {
    const userAverageSessions = await mockAxios(userId, 'averageSessions');
    return model.averageSessions(userAverageSessions);
  }

  async getUserPerformance(userId) {
    const userPerformance = await mockAxios(userId, 'performance');
    return model.performance(userPerformance);
  }

  async getAllData(userId) {
    const [userInfos, activity, averageSessions, performance] = await Promise.all([
      this.getOneUser(userId),
      this.getUserActivity(userId),
      this.getUserAverageSessions(userId),
      this.getUserPerformance(userId),
    ]);

    return [userInfos, activity, averageSessions, performance];
  }
}

const userMockData = new UserMockData()

export { userServices, userMockData }
