const activity = {
  "12": {
    data: {
      userId: 12,
      sessions: [
        {
          day: '2022-01-01',
          kilogram: 78,
          calories: 220
        },
        {
          day: '2022-01-02',
          kilogram: 79,
          calories: 230
        },
        {
          day: '2022-01-03',
          kilogram: 80,
          calories: 260
        },
        {
          day: '2022-01-04',
          kilogram: 81,
          calories: 290
        },
        {
          day: '2022-01-05',
          kilogram: 80,
          calories: 160
        },
        {
          day: '2022-01-06',
          kilogram: 78,
          calories: 162
        },
        {
          day: '2022-01-07',
          kilogram: 76,
          calories: 390
        }
      ]
    }
  },
  "18": {
    data: {
      userId: 18,
      sessions: [
        {
          day: '2021-07-01',
          kilogram: 69,
          calories: 200
        },
        {
          day: '2021-07-02',
          kilogram: 69,
          calories: 220
        },
        {
          day: '2021-07-03',
          kilogram: 70,
          calories: 260
        },
        {
          day: '2021-07-04',
          kilogram: 71,
          calories: 500
        },
        {
          day: '2021-07-05',
          kilogram: 69,
          calories: 160
        },
        {
          day: '2021-07-06',
          kilogram: 69,
          calories: 162
        },
        {
          day: '2021-07-07',
          kilogram: 69,
          calories: 390
        }
      ]
    }
  }
};

const averageSessions = {
  "12": {
    data: {
      userId: 12,
      sessions: [
        {
          day: 1,
          sessionLength: 28
        },
        {
          day: 2,
          sessionLength: 26
        },
        {
          day: 3,
          sessionLength: 40
        },
        {
          day: 4,
          sessionLength: 60
        },
        {
          day: 5,
          sessionLength: 45
        },
        {
          day: 6,
          sessionLength: 35
        },
        {
          day: 7,
          sessionLength: 60
        }
      ]
    }
  },
  "18": {
    data: {
      userId: 18,
      sessions: [
        {
          day: 1,
          sessionLength: 20
        },
        {
          day: 2,
          sessionLength: 26
        },
        {
          day: 3,
          sessionLength: 35
        },
        {
          day: 4,
          sessionLength: 30
        },
        {
          day: 5,
          sessionLength: 40
        },
        {
          day: 6,
          sessionLength: 45
        },
        {
          day: 7,
          sessionLength: 62
        }
      ]
    }
  }
};

const informations = {
  "12": {
    data: {
      id: 12,
      userInfos: {
        firstName: "Victor",
        lastName: 'Strand',
        age: 42,
      },
      score: 0.25,
      keyData: {
        calorieCount: 1820,
        proteinCount: 200,
        carbohydrateCount: 260,
        lipidCount: 40
      }
    }
  },
  "18": {
    data: {
      id: 18,
      userInfos: {
        firstName: 'Mike',
        lastName: 'Plissken',
        age: 32,
      },
      score: 0.5,
      keyData: {
        calorieCount: 2000,
        proteinCount: 100,
        carbohydrateCount: 220,
        lipidCount: 100
      }
    }
  }
};

const performance = {
  "12": {
    data: {
      userId: 12,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
      },
      data: [
        {
          value: 60,
          kind: 1
        },
        {
          value: 80,
          kind: 2
        },
        {
          value: 75,
          kind: 3
        },
        {
          value: 60,
          kind: 4
        },
        {
          value: 100,
          kind: 5
        },
        {
          value: 90,
          kind: 6
        }
      ]
    }
  },
  "18": {
    data: {
      userId: 18,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
      },
      data: [
        {
          value: 180,
          kind: 1
        },
        {
          value: 220,
          kind: 2
        },
        {
          value: 200,
          kind: 3
        },
        {
          value: 180,
          kind: 4
        },
        {
          value: 210,
          kind: 5
        },
        {
          value: 150,
          kind: 6
        }
      ]
    }
  }
};

export { activity, averageSessions, informations, performance }