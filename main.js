var pizza = {
    crust: "cripsy",
    cheese: "extra",
    sauce: "tomato",
    addToppings: function() {
        console.log('Please add pepperoni and sausage')
    }
};

function orderPizza() {
    console.log(pizza.crust);
    console.log(pizza.cheese);
    console.log(pizza.sauce);
};

orderPizza();
pizza.addToppings();