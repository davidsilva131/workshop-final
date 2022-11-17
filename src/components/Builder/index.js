import React, { useState } from "react";
import Burger from "../Burger";
import ControlPanel from "../ControlPanel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { receiptAddBurger } from "../../redux/actions/receipAction";

export const Builder = () => {
    const [ingredients, setIngredients] = useState([])
    const { burgers } = useSelector((store) => store.receipt)
    const prices = {
        bacon: 10,
        salad: 2,
        cheese: 5,
        meat: 20
    };
    const dispatch = useDispatch()
    const getPrice = () => {
        const pricesArray = ingredients.map(ingredient => {
            return prices[ingredient];
        });
        const price = pricesArray.reduce((ant, act) => {
            return ant + act;
        }, 0);
        return price;
    }

    const handleConfirm = () => {
        const tempBurgers = burgers.slice();
        tempBurgers.push(getPrice())
        dispatch(receiptAddBurger(tempBurgers))
        setIngredients([]);
    }


    const addIngredient = idIngrediente => {
        const newIngredients = ingredients.slice();
        newIngredients.push(idIngrediente);
        setIngredients(newIngredients);
    };

    const removeIngredient = index => {
        console.log(index);
        const newIngredients = ingredients.slice();
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    return (
        <div className="container">
            <ControlPanel
                onAdd={x => {
                    addIngredient(x);
                }}
            />
            <h3># Burgers added: {burgers.length}</h3>
            <h2>Burger {burgers.length + 1} : $ {getPrice()}</h2>
            <div
                className="button"
                onClick={() => handleConfirm()}>
                Confirm
            </div>
            <Link to="/receipt">
                <div className="button">See receipt</div>
            </Link>
            <div className="builder">
                <Burger
                    ingredients={ingredients}
                    onIngredientClick={index => removeIngredient(index)}
                />
            </div>
        </div>
    )
}

export default Builder;
