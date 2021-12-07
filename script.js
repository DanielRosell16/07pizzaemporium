document.querySelector('header > h1').textContent = "Pizza Emporium"
document.querySelector('header > h2').textContent = "Build your pizza"
document.querySelector('body > main > h2').textContent = "What I've learned"

let message 


const pizza = {
    crust: ' ',
    size: ' ',
    topping: ' ',
    buildPizza: function() {
        console.log('buildPizza method has been called')
        message = `Baking a pizza on a ${pizza.crust} crust on a size ${pizza.size} and the toppings of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') {
            flour *= 2
            message = `You will need to purchase ${flour} cups of flour and 1lb of ${pizza.topping} for a ${pizza.crust} pizza.`
            document.querySelector('#feedback').textContent = message
        } if (pizza.size === 'large') {
            flour *= 4
        message = `You will need to purchase ${flour} cups of ${pizza.topping} for large pizza`
        document.querySelector('#feedback').textContent = message
        }

    }

}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')

document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')

document.querySelector('#medium').addEventListener('click', () => pizza.size = 'medium')

document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#pep').addEventListener('click', () => pizza.topping = 'pepperoni' )

document.querySelector('#meats').addEventListener('click', () => pizza.topping = 'meats')

document.querySelector('#build').addEventListener('click', pizza.buildPizza)

document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)

