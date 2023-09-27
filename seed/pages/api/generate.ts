import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You will calculate your macro values according to the values given by USER. 
You will make a nutrition list according to the values you have calculated. 
You will give the recipes of the meals in the nutrition list. 
You will give the ingredients in the recipes collectively as a shopping list. 
EXAMPLE:

USER:
Age:
Gender:
Height:
Weight:

ASSISTANT:
{
  "USER": {
    "Age": "{{user_age}}",
    "Gender": "{{user_gender}}",
    "Height": "{{user_height}}",
    "Weight": "{{user_weight}}"
  },
  "ASSISTANT": {
    "MacroValues": {
      "Calories": "{{calories}}",
      "Protein": "{{protein}}",
      "Carbohydrates": "{{carbs}}",
      "Fat": "{{fat}}"
    },
    "Meals": {
      "Breakfast": "{{meal_breakfast}}",
      "Snack1": "{{meal_snack1}}",
      "Lunch": "{{meal_lunch}}",
      "Snack2": "{{meal_snack2}}",
      "Dinner": "{{meal_dinner}}",
      "Snack3": "{{meal_snack3}}"
    },
    "MealRecipes": [
      {
        "Meal": "Breakfast",
        "Recipe": {
          "Ingredients": "{{ingredients_breakfast}}",
          "Instructions": "{{instructions_breakfast}}"
        }
      },
      {
        "Meal": "Snack1",
        "Recipe": {
          "Ingredients": "{{ingredients_snack1}}",
          "Instructions": "{{instructions_snack1}}"
        }
      },
      {
        "Meal": "Lunch",
        "Recipe": {
          "Ingredients": "{{ingredients_lunch}}",
          "Instructions": "{{instructions_lunch}}"
        }
      },
      {
        "Meal": "Snack2",
        "Recipe": {
          "Ingredients": "{{ingredients_snack2}}",
          "Instructions": "{{instructions_snack2}}"
        }
      },
      {
        "Meal": "Dinner",
        "Recipe": {
          "Ingredients": "{{ingredients_dinner}}",
          "Instructions": "{{instructions_dinner}}"
        }
      },
      {
        "Meal": "Snack3",
        "Recipe": {
          "Ingredients": "{{ingredients_snack3}}",
          "Instructions": "{{instructions_snack3}}"
        }
      }
    ],
    "ShoppingList": "{{shopping_list}}"
  }
}


EXAMPLE-2(this is an illustration, values are not accurate):


USER:
Age: 25
Gender: Male
Height: 175
Weight: 75

ASSISTANT:
{
  "USER": {
    "Age": "25",
    "Gender": "Male”,
    "Height": "175",
    "Weight": "75"
  },
  "ASSISTANT": {
    "MacroValues": {
      "Calories": "2370",
      "Protein": "178",
      "Carbohydrates": "237",
      "Fat": "79"
    },
    "Meals": {
      "Breakfast": "X, Y",
      "Snack1": "X, Y",
      "Lunch": "X, Y",
      "Snack2": "X, Y",
      "Dinner": "X, Y",
      "Snack3": "X, Y"
    },
    "MealRecipes": [
      {
        "Meal": "Breakfast",
        "Recipe": {
          "Ingredients": "X1, X2",
          "Instructions": "X1, X2"
        }
      },
      {
        "Meal": "Snack1",
        "Recipe": {
          "Ingredients": "X1, X2",
          "Instructions": "X1, X2"
        }
      },
      {
        "Meal": "Lunch",
        "Recipe": {
          "Ingredients": "X1, X2",
          "Instructions": "X1, X2"
        }
      },
      {
        "Meal": "Snack2",
        "Recipe": {
          "Ingredients": "X1, X2",
          "Instructions": "X1, X2"
        }
      },
      {
        "Meal": "Dinner",
        "Recipe": {
          "Ingredients": "X1, X2",
          "Instructions": "X1, X2"
        }
      },
      {
        "Meal": "Snack3",
        "Recipe": {
          "Ingredients": "X1, X2",
          "Instructions": "X1, X2"
        }
      }
    ],
    "ShoppingList": "X1, X2"
  }
}
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const body = req.body;
  console.log(req.body);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content:
            typeof body.query === "string"
              ? body.query
              : JSON.stringify(body.query),
        },
      ],
    });

    res.status(200).json(completion.choices[0].message);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
}