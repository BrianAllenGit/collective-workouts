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
      date: moment("20210920"),
      steps: [
        {
          order: "a",
          activity: "EMOM for 7 min: 2-posi hang clean (hips, knee) @ 65%",
          reps: 28,
          sets: 1,
        },
        {
          order: "b1",
          activity: "Underhand Barbell Row",
          reps: 8,
          sets: 3,
        },
        {
          order: "b2",
          activity: "Ring Dip; rest 45 sec",
          reps: 10,
          sets: 3,
        },
        {
          order: "c",
          activity: "Prowler Shuttle Sprints @ 50-90lbs",
          reps: 1,
          sets: 4,
        },
        {
          order: "d",
          activity: "Stretch",
          reps: 1,
          sets: 1,
        }
      ]
    },
    {
      date: moment("20210921"),
      steps: [
                {
          order: "a",
          activity: "EMOM for 7 min: 2-posi hang clean (hips, knee) @ 65%",
          reps: 28,
          sets: 1,
        },
        {
          order: "b1",
          activity: "Underhand Barbell Row",
          reps: 8,
          sets: 3,
        },
        {
          order: "b2",
          activity: "Ring Dip; rest 45 sec",
          reps: 10,
          sets: 3,
        },
        {
          order: "c",
          activity: "Prowler Shuttle Sprints @ 50-90lbs",
          reps: 1,
          sets: 4,
        },
        {
          order: "d",
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
          activity: "EMOM for 7 min: 2-posi hang clean (hips, knee) @ 65%",
          reps: 28,
          sets: 1,
        },
        {
          order: "b1",
          activity: "Underhand Barbell Row",
          reps: 8,
          sets: 3,
        },
        {
          order: "b2",
          activity: "Ring Dip; rest 45 sec",
          reps: 10,
          sets: 3,
        },
        {
          order: "c",
          activity: "Prowler Shuttle Sprints @ 50-90lbs",
          reps: 1,
          sets: 4,
        },
        {
          order: "d",
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
          activity: "EMOM for 7 min: 2-posi hang clean (hips, knee) @ 65%",
          reps: 28,
          sets: 1,
        },
        {
          order: "b1",
          activity: "Underhand Barbell Row",
          reps: 8,
          sets: 3,
        },
        {
          order: "b2",
          activity: "Ring Dip; rest 45 sec",
          reps: 10,
          sets: 3,
        },
        {
          order: "c",
          activity: "Prowler Shuttle Sprints @ 50-90lbs",
          reps: 1,
          sets: 4,
        },
        {
          order: "d",
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
          activity: "EMOM for 7 min: 2-posi hang clean (hips, knee) @ 65%",
          reps: 28,
          sets: 1,
        },
        {
          order: "b1",
          activity: "Underhand Barbell Row",
          reps: 8,
          sets: 3,
        },
        {
          order: "b2",
          activity: "Ring Dip; rest 45 sec",
          reps: 10,
          sets: 3,
        },
        {
          order: "c",
          activity: "Prowler Shuttle Sprints @ 50-90lbs",
          reps: 1,
          sets: 4,
        },
        {
          order: "d",
          activity: "Stretch",
          reps: 1,
          sets: 1,
        }
      ]
    },
  ]
  res.status(200).json(response)
}
