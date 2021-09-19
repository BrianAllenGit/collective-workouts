// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import moment, { Moment } from 'moment'

type Workout = {
  date: Moment,
  steps: Array<Step>
}

type Step = {
  order: string;
  activity: string;
  reps: number;
  sets: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Workout>>
) {
  const response = [
    {
      date: moment("20210921"),
      steps: [
        {
          order: "a",
          activity: "Treadmill - Walking (2.5-3.5 MPH): 10 Minutes",
          reps: 1,
          sets: 1,
        },
        {
          order: "b",
          activity: "Air squat",
          reps: 8,
          sets: 3,
        },
        {
          order: "c",
          activity: "Push up",
          reps: 10,
          sets: 3,
        },
        {
          order: "d",
          activity: "Chin-Up / Lat Pull-down",
          reps: 12,
          sets: 3,
        },
        {
          order: "e",
          activity: "Stretch",
          reps: 1,
          sets: 1,
        }
      ]
    },
    {
      date: moment("20210922"),
      steps: [
        {
          order: "a",
          activity: "Treadmill - Walking (2.5-3.5 MPH): 10 Minutes",
          reps: 1,
          sets: 1,
        },
        {
          order: "b",
          activity: "Sit ups",
          reps: 12,
          sets: 3,
        },
        {
          order: "c",
          activity: "Row Machine - Moderate (40-60 RPM): 250 Meters",
          reps: 1,
          sets: 4,
        },
        {
          order: "e",
          activity: "Stretch",
          reps: 1,
          sets: 1,
        }
      ]
    },
    {
      date: moment("20210923"),
      steps: [
        {
          order: "a",
          activity: "Treadmill - Walking (2.5-3.5 MPH): 10 Minutes",
          reps: 1,
          sets: 1,
        },
        {
          order: "b",
          activity: "Dumbbell Deadlift",
          reps: 5,
          sets: 2,
        },
        {
          order: "c",
          activity: "Dumbbell overhead press",
          reps: 8,
          sets: 3,
        },
        {
          order: "d",
          activity: "Dumbbell Row",
          reps: 12,
          sets: 3,
        },
        {
          order: "e",
          activity: "Stretch",
          reps: 1,
          sets: 1,
        }
      ]
    },
    {
      date: moment("20210924"),
      steps: [
        {
          order: "a",
          activity: "Treadmill - Walking (2.5-3.5 MPH): 10 Minutes",
          reps: 1,
          sets: 1,
        },
        {
          order: "b",
          activity: "Treadmill - Jogging (5.5 - 7.5MPH): 10 Minutes",
          reps: 1,
          sets: 1,
        },
        {
          order: "c",
          activity: "Treadmill - Walking (2.5-3.5 MPH): 10 Minutes",
          reps: 1,
          sets: 1,
        },
        {
          order: "e",
          activity: "Stretch",
          reps: 1,
          sets: 1,
        }
      ]
    },
    {
      date: moment("20210925"),
      steps: [
        {
          order: "a",
          activity: "Treadmill - Walking (2.5-3.5 MPH): 10 Minutes",
          reps: 1,
          sets: 1,
        },
        {
          order: "b",
          activity: "Air squat",
          reps: 8,
          sets: 3,
        },
        {
          order: "c",
          activity: "Push up",
          reps: 10,
          sets: 3,
        },
        {
          order: "d",
          activity: "Chin-Up / Lat Pull-down",
          reps: 12,
          sets: 3,
        },
        {
          order: "e",
          activity: "Stretch",
          reps: 1,
          sets: 1,
        }
      ]
    },
  ]
  res.status(200).json(response)
}
