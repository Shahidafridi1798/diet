import React, { useEffect } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const Fitness = () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  // const [openModal, setOpenModal] = useState(false);
  // const [selectedFilter, setSelectedFilter] = useState();

  const addMealsHandler = () => {
    const oldMeals = meals ? [...meals] : [];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    };

    const newMeals = oldMeals.concat(meal);
    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));
  };

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));
  }

  const deleteAllMeals = () => {
    setMeals([])
    localStorage.clear();
  }

  const total = meals !== null ? meals
  .map((meal)=>meal.calories)
  .reduce((acc,value) => acc+ +value, 0) : 0;
  
useEffect(() => {
  const localStorageMeals = JSON.parse(localStorage.getItem('meals'));
  setMeals(localStorageMeals)
}, [setMeals]);


// useEffect(() => {
//   const oldState = [...meals];
//   if(selectedFilter === "Ascending"){ 
//    const ascendingMeals = oldState.sort((a,b) => a.calories - b.calories);
//    setMeals(ascendingMeals);
//   }
//   else if(selectedFilter === "Descending"){
//     const descendingMeals = oldState.sort((a,b) => b.calories - a.calories);
//     setMeals(descendingMeals)
//   }
// }, [selectedFilter]);

  return (
    <div>
    {/* { <Modal setOpenModal={setOpenModal} />} */}
      <ControlCounter total={total}/>
      <DeleteComponent deleteAllMeals={deleteAllMeals} />
      <ControlInput
        addMealsHandler={addMealsHandler}
        mealName={mealName}
        calories={calories}
        setMealName={setMealName}
        setCalories={setCalories}
      />
      <br />
      <div className="meal_container">
        {/* <MealsFilter selectedFilter={selectedFilter} setSelectedFilter={selectedFilter} /> */}
        <br />
        <MealsList meals={meals}
        deleteMealHandler={deleteMealHandler} />
      </div>
    </div>
  );
};

export default Fitness;

const ControlCounter = ({total}) => {
  return (
    <div className="counter">
      <h2>
        Total Calories:
        <span>{total}</span>
      </h2>
    </div>
  );
};

const DeleteComponent = ({deleteAllMeals}) => {
  return (
    <div className="delete">
      <Button
        className="col"
        variant="contained"
        startIcon={<DeleteForeverIcon />}
        onClick={() => deleteAllMeals()}
      >
        DELETE ALL
      </Button>
    </div>
  );
};

const ControlInput = ({
  addMealsHandler,
  setCalories,
  setMealName,
  calories,
  mealName,
}) => {
  const onAddMealsClick = () => {
    addMealsHandler();
  };
  return (
    // <div className='control-container'>
    <div className="control_input">
      <TextField
        onChange={(event) => setMealName(event.target.value)}
        id="outlined-basic"
        value={mealName}
        label="Meal"
        variant="outlined"
      />
      <br />
      <TextField
        onChange={(event) => setCalories(event.target.value)}
        id="outlined-basic"
        label="Calories"
        value={calories}
        variant="outlined"
        min="0"
      />
      <br />
      <Button
        className="col"
        onClick={onAddMealsClick}
        variant="contained"
        // startIcon={<DeleteForeverIcon />}
      >
        Add Meal
      </Button>
    </div>
    // </div>
  );
};

const MealsList = ({ meals, deleteMealHandler }) => {

 
  return (
    <div className="meals_container_wrapper">
      {meals?.map((meal, index) => (
        <div key={index} className="meal_container_wrapper_inner">
          <div>{`${meal.mealName} : ${meal.calories}`}</div>
          <div>
          <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteMealHandler(meal.id)}>
        Delete
      </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

// const Modal = ({setOpenModal}) => {
//   return (
//     <div className="modal">
//       <h3>Calories Must Be Bigger Than 0 And Meal Name Cannot Be Blank</h3>
//       <Button onClick={() => setOpenModal(false)}>Close</Button>
//     </div>
//   )
// }

