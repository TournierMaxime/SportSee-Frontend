
import { api as http } from "./axios.js";
import Carbs from "../assets/icons/carbs.png";
import Fat from "../assets/icons/fat.png";
import Protein from "../assets/icons/protein.png";
import Kcal from "../assets/icons/kcal.png";

class Models {

  userInfos(serviceData) {
    const { id, userInfos, score, keyData } = serviceData.data.data;

    return {
      id,
      identity: {
        firstName: userInfos?.firstName || "",
        lastName: userInfos?.lastName || "",
        age: userInfos?.age || 0,
      },
      score: (score || 0) * 100,
      nutrients: [
        {
          name: "Calories",
          unit: "kCal",
          count: keyData?.calorieCount || 0,
          icon: Carbs
        },
        {
          name: "Protéines",
          unit: "g",
          count: keyData?.proteinCount || 0,
          icon: Protein
        },
        {
          name: "Glucides",
          unit: "g",
          count: keyData?.carbohydrateCount || 0,
          icon: Kcal
        },
        {
          name: "Lipides",
          unit: "g",
          count: keyData?.lipidCount || 0,
          icon: Fat
        }
      ]
    };
  }

  activity(serviceData) {
    const { sessions } = serviceData.data.data;

    return Array.isArray(sessions)
      ? sessions.map((item, index) => {
        const { day, kilogram, calories } = item
        return {
          day: day || "",
          kilogram: kilogram || 0,
          calories: calories || 0,
          index: index + 1
        };
      })
      : [];
  }

  averageSessions(serviceData) {
    const { sessions } = serviceData.data.data;

    const days = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D"
    };

    return Array.isArray(sessions)
      ? sessions.map((item) => {
        const { day, sessionLength } = item
        return {
          day: days[day] || 0,
          sessionLength: sessionLength || 0,
        };
      })
      : [];
  }

  performance(serviceData) {
    const { data } = serviceData.data.data;

    const kindNames = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité'
    };

    return Array.isArray(data)
      ? data
        .map((item) => {
          const { value, kind } = item
          return {
            value: value || 0,
            kind: kindNames[kind] || 0
          };
        })
        .reverse()
      : [];
  }
  
}

const model = new Models()

class UserServices extends Models {

  async fetchData(url) {
    const response = await http.get(url);

    if (response.status === 404) {
      throw new Error("Utilisateur non trouvé !");
    }
    if (response.ok === false) {
      throw new Error("Une erreur est survenue");
    }

    return response
  }

  async getAllData(userId) {
    return Promise.all([
      this.getOneUser(userId),
      this.getUserActivity(userId),
      this.getUserAverageSessions(userId),
      this.getUserPerformance(userId)
    ]);
  }

  async getOneUser(userId) {
    const url = `/user/${userId}`;
    const userInfos = await this.fetchData(url);
    return model.userInfos(userInfos);
  }

  async getUserActivity(userId) {
    const url = `/user/${userId}/activity`;
    const userActivity = await this.fetchData(url);
    return model.activity(userActivity);
  }

  async getUserAverageSessions(userId) {
    const url = `/user/${userId}/average-sessions`;
    const userAverageSessions = await this.fetchData(url);
    return model.averageSessions(userAverageSessions);
  }

  async getUserPerformance(userId) {
    const url = `/user/${userId}/performance`;
    const userPerformance = await this.fetchData(url);
    return model.performance(userPerformance);
  }

}

const userServices = new UserServices();

export default userServices;