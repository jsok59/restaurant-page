function generateMenu() {

    const content = document.querySelector('#content');
    const grid = document.createElement('div');
    grid.classList = 'grid';
    content.appendChild(grid);

    
    
    const menuCategories = (name) => {
        const category = document.createElement('div');
        category.classList = 'menu-categories';
        const h1 = document.createElement('h1');
        h1.textContent = name;
        category.appendChild(h1);
        grid.appendChild(category);
        return category;
    }

    const hotCoffee = menuCategories('Coffee');
    const smoothie = menuCategories('Smoothie');
    const snacks = menuCategories('Snacks');
    const dessert = menuCategories('Dessert');

    const addItem = (name, price, category) => {
        const itemname = document.createElement('div');
        itemname.textContent = name;
        itemname.classList = 'item-name';
        const itemprice = document.createElement('div');
        itemprice.textContent = price;
        itemprice.classList = 'item-price';
        category.appendChild(itemname);
        category.appendChild(itemprice);
    }

    addItem("Cappuccino", "$1.99", snacks);
    addItem("Cafe Latte", "$1.99", snacks);
    addItem("Velvet Coffee", "$1.99", snacks);
    addItem("Flat White", "$1.99", snacks);
    addItem("Cinnamon Coffee", "$1.99", snacks);
    addItem("Espresso", "$1.99", snacks);
    addItem("Vanilla Latte", "$1.99", snacks);
    addItem("Filter Coffee", "$1.99", snacks);

    addItem("Cappuccino", "$1.99", dessert);
    addItem("Cafe Latte", "$1.99", dessert);
    addItem("Velvet Coffee", "$1.99", dessert);
    addItem("Flat White", "$1.99", dessert);
    addItem("Cinnamon Coffee", "$1.99", dessert);
    addItem("Espresso", "$1.99", dessert);
    addItem("Vanilla Latte", "$1.99", dessert);
    addItem("Filter Coffee", "$1.99", dessert);

    addItem("Cappuccino", "$1.99", hotCoffee);
    addItem("Cafe Latte", "$1.99", hotCoffee);
    addItem("Velvet Coffee", "$1.99", hotCoffee);
    addItem("Flat White", "$1.99", hotCoffee);
    addItem("Cinnamon Coffee", "$1.99", hotCoffee);
    addItem("Espresso", "$1.99", hotCoffee);
    addItem("Vanilla Latte", "$1.99", hotCoffee);
    addItem("Filter Coffee", "$1.99", hotCoffee);

    addItem("Cappuccino", "$1.99", smoothie);
    addItem("Cafe Latte", "$1.99", smoothie);
    addItem("Velvet Coffee", "$1.99", smoothie);
    addItem("Flat White", "$1.99", smoothie);
    addItem("Cinnamon Coffee", "$1.99", smoothie);
    addItem("Espresso", "$1.99", smoothie);
    addItem("Vanilla Latte", "$1.99", smoothie);
    addItem("Filter Coffee", "$1.99", smoothie);

    

}

export default generateMenu;