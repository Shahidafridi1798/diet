import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


export function AddProduct( ) {
 
  const INTIAL_PRODUCT_LIST =[
    {
      "id": "100",
      "title": "The Mediterranean diet",
      "subheader": "September 14, 2022",
      "poster": "https://cdn.chiroeco.com/wp-content/uploads/2020/10/AdobeStock_282374517-scaled.jpeg",
      "About": "This diet’s emphasis on minimally processed foods and plants has been associated with a reduced risk of multiple chronic diseases and increased life expectancy. Studies also show that the Mediterranean diet has a preventive effect against certain cancers.",
      "Procedure": "The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in: Vegetables, Whole Grains, Fish, Nuts, Lentls, Olive Oil. Foods such as poultry, eggs, and dairy products are to be eaten in moderation, and red meats are limited.",
      "Benefits": "Though the diet was designed to lower heart disease risk, numerous studies indicate that its plant-based, high unsaturated fat dietary pattern can also aid in weight loss. Eating less meat is also associated with a more sustainable diet for the planet.",
      "video": "https://www.youtube.com/embed/cstaHbq5fZ4"
    },
    {
      "id": "101",
      "title": "The DASH diet",
      "subheader": "September 22, 2022",
      "poster": "https://images.squarespace-cdn.com/content/v1/59ea9b13e5dd5b42cc45b519/1523279921232-VJSLJBXM7R9WNN11IQ05/image-asset.jpeg",
      "About": "Dietary Approaches to Stop Hypertension, or DASH, is an eating plan designed to help treat or prevent high blood pressure, which is clinically known as hypertension.",
      "Procedure": "The DASH diet recommends specific servings of different food groups. The number of servings you are encouraged to eat depends on your daily calorie intake. Each day an average person on the DASH diet would eat about: five servings of vegetables, five servings of fruit, seven servings of healthy carbs like whole grains, two servings of low fat dairy products, two servings or fewer of lean meats. In addition, it’s recommended to consume nuts and seeds two to three times per week.",
      "Benefits": "The DASH diet has been shown to reduce blood pressure levels and several heart disease risk factors. Also, it may help lower your risk of breast and colorectal cancer. A comparative study over 8 years found that even moderate adherence to the DASH diet was related to lower depression risk.",
      "video": "https://www.youtube.com/embed/3nPWVV-lYEw"
    },
    {
      "id": "102",
      "title": "Plant-based diet",
      "subheader": "March 22, 2016",
      "poster": "https://domf5oio6qrcr.cloudfront.net/medialibrary/4969/c92020e0-e209-403d-a334-2b544b03a9d4.jpg",
      "About": "Vegetarianism and veganism are the most popular versions of plant-based diets, which restrict animal products for health, ethical, and environmental reasons.",
      "Procedure": "Typical vegetarian diets restrict meat of all kinds but allow dairy products. Typical vegan diets restrict all animal products, including dairy, butter, and sometimes other byproducts like honey.",
      "Benefits": "Numerous studies have shown that plant-based diets can reduce your risk of developing chronic diseases, including improved markers of metabolic health, decreased blood pressure, and reduced risk of type 2 diabetes. They can also help you lose weight.",
      "video": "https://www.youtube.com/embed/wKCUEL5Qkl4"
    },
    {
      "id": "103",
      "title": "The MIND diet",
      "subheader": "October 22, 2019",
      "poster": "https://www.communitycancercenter.org/wp-content/uploads/2020/10/Feeding-the-Brain-The-MIND-Diet-1024x777.jpg",
      "About": " The Mediterranean-DASH Intervention for Neurodegenerative Delay (MIND) diet combines aspects of the Mediterranean and DASH diets to create an eating pattern that focuses on brain health.",
      "Procedure": "MIND diet does not have a strict meal plan, but instead encourages eating 10 specificfoods with brain health benefits. Per week, MIND includes eating: six or more servings of green, leafy vegetables,  one serving of non-starchy vegetables, five or more servings of nuts. ",
      "Benefits": "Research shows that the MIND diet may reduce a person’s risk of developing Alzheimer’s disease, and studies show that the MIND diet is superior to other plant-rich diets for improving cognition",
      "video": "https://www.youtube.com/embed/FDtzXPFIsYs"
    },
    {
      "id": "104",
      "title": "Intermittent fasting",
      "subheader": "Decebember 11, 2021",
      "poster": "https://www.merakilane.com/wp-content/uploads/2018/05/Weight-Loss-that-Works-7-Day-Intermittent-Fasting-Meal-Plan-for-Beginners.jpg",
      "About": "Intermittent fasting is a dietary strategy that cycles between periods of fasting and eating. Various forms exist, including the 16/8 method, which involves limiting your calorie intake to 8 hours per day. There’s also the 5:2 method, which restricts your daily calorie intake to 500–600 calories twice per week.",
      "Procedure": "Intermittent fasting restricts the time you’re allowed to eat, which is a simple way to reduce your calorie intake. This can lead to weight loss — unless you compensate by eating too much food during allowed eating periods.",
      "Benefits": "Intermittent fasting has been linked to anti-aging effects, increased insulin sensitivity, improved brain health, reduced inflammation, and many other benefits. While certain diets can have a lot of rules, require frequent trips to the grocery store, and can be difficult to follow, intermittent fasting is known as a more simple-to-follow eating plan.",
      "video": "https://www.youtube.com/embed/RI5oYIUItN8"
    },
    {
      "id": "105",
      "title": "The Volumetrics diet",
      "subheader": "Decebember 27, 2021",
      "poster": "https://images.askmen.com/1080x540/2022/01/26-050732-volumetrics_diet_a_guide_of_pros_cons_and_what_you_should_eat.jpg",
      "About": "The Volumetrics diet was created by Penn State University nutrition professor Barbara Rolls and is meant to be a long-term lifestyle change rather than a strict diet.",
      "Procedure": "The Volumetrics diet divides food into four categories based on food’s calorie density, which can be calculated with a formula created by Rolls. These categories are: 1.Category one: includes foods of very low calorie density, like non-starchy fruits and vegetables, nonfat milk, and broth-based soup, 2. Category two: includes low calorie-dense foods, like starchy fruits and vegetables, grains, breakfast cereal, low fat meat, legumes, and low fat mixed dishes like chili, 3. Category three: includes medium calorie-dense foods, like meat, cheese, pizza, bread, and ice cream, 4. Category four: includes high calorie-dense foods, like crackers, chips, chocolate candies, nuts, butter, and oil.",
      "Benefits": "The Volumetrics diet encourages nutritious foods that are low in calories but high in fiber, vitamins, and minerals, which may help increase your intake of key nutrients and protect against nutritional deficiencies.",
      "video": "https://www.youtube.com/embed/fqWvwyaMpGc"
    },
    {
      "id": "106",
      "title": "The Mayo Clinic Diet",
      "subheader": "August 01, 2015",
      "poster": "https://i.pinimg.com/736x/03/1c/49/031c494209fbfe1db313e6c64b684ba9.jpg",
      "About": "Since diets rich in fiber can increase satiety by making you feel more full, the Mayo Clinic Diet may contribute to weight loss. It may also decrease your risk of developing type 2 diabetes.",
      "Procedure": "Fruits, vegetables, and physical activity make up the base of the pyramid, followed by carbs in the next layer, then protein and dairy, fats, and finally, sweets. The diet consists of two phases. An initial, 2-week phase designed to kick-start your weight loss by introducing 5 healthier habits and encouraging you to break 5 common less healthy habits. The second phase is more of a lifestyle change designed to be followed long-term, encouraging education about nutritious food choices and portion sizes in addition to being physically active.",
      "Benefits": "Mayo Clinic tells users to expect about 10 pounds of weight loss during the first 2 weeks, and up to 2 pounds during the second phase. Additionally, studies show that exercising while on a lower-calorie diet is more effective at promoting weight loss than dieting alone ",
      "video": "https://www.youtube.com/embed/kEFFylSUqRo"
    },
    {
      "id": "107",
      "title": "Low carb diets",
      "subheader": "August 21, 2017",
      "poster": "https://images.everydayhealth.com/images/ultimate-guide-to-a-low-carb-diet-1440x810.jpg",
      "About": "Low carb diets are among the most popular diets for weight loss. Examples include the Atkins diet, ketogenic (keto) diet, and low carb, high fat (LCHF) diet.",
      "Procedure": "Low carb diets restrict your carb intake in favor of protein and fat. They’re typically higher in protein than low fat diets, which is important, as protein can help curb your appetite, raise your metabolism, and conserves muscle mass. In very low carb diets like keto, your body begins using fatty acids rather than carbs for energy by converting them into ketones. This process is called ketosis",
      "Benefits": "Research suggests that low carb diets may reduce risk factors for heart disease, including high cholesterol and blood pressure levels. They may also improve blood sugar and insulin levels in people with type 2 diabetes. For example, a review of 53 studies made up of 68,128 participants found that low carb diets resulted in significantly more weight loss than low fat diets.",
      "video": "https://www.youtube.com/embed/wBsnk2PtPeo"
    }
  ];

  const  [productList, setProductList] = useState(INTIAL_PRODUCT_LIST);

  const [title, setTitle] = useState("");
  const [subheader, setSubHeader] = useState("");
  const [poster, setPoster] = useState("");
  const [About, setAbout] = useState("");
  const [Procedure, setProcedure] = useState("");
  const [Benefits, setBenefits] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();


  return (
    <div className="add">      
    {productList.map((mv, index) => (
      <div key={index} product={mv} id={index} />
    ))}
      
      <div className="add-diet-form">
        
      <TextField
        onChange={(event) => setTitle(event.target.value)}
        id="standard-basic"
        value={title}
        label="Diet Name"
        variant="standard" />

      <TextField
        onChange={(event) => setSubHeader(event.target.value)}
        id="standard-basic"
        value={subheader}
        label="Published Date"
        variant="standard" />

      <TextField
        onChange={(event) => setPoster(event.target.value)}
        id="standard-basic"
        value={poster}
        label="Diet Poster URL"
        variant="standard" />

      <TextField
        onChange={(event) => setAbout(event.target.value)}
        id="standard-basic"
        value={About}
        label="About Diet"
        variant="standard" />

      <TextField
        onChange={(event) => setProcedure(event.target.value)}
        id="standard-basic"
        value={Procedure}
        label="Diet Procedure"
        variant="standard" />

        
      <TextField
        onChange={(event) => setBenefits(event.target.value)}
        id="standard-basic"
        value={Benefits}
        label="Diet Benefits"
        variant="standard" />

<TextField
        onChange={(event) => setVideo(event.target.value)}
        id="standard-basic"
        value={video}
        label="Diet Description Video"
        variant="standard" />

      <Button
        onClick={() => {
          const newProduct = {
            title: title,
            subheader: subheader,
             poster: poster,
             About: About,
            Procedure: Procedure,
            Benefits: Benefits,
            video: video
          };
          setProductList([...productList, newProduct]);
          navigate("/Products")
        }}
        variant="contained"
      >
        Add Product
      </Button>
    </div></div>
  );
}