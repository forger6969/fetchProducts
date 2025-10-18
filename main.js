async function getProd() {

    try {

        let data = await fetch(`https://dummyjson.com/products?limit=0`)
        let res = await data.json()
        console.log(res);


        let wrapper = document.querySelector(`.cards-wrapper`)
        res.products.forEach(e => {

            let price = e.price * 12000

            let div = document.createElement(`div`)
            div.classList = `card`

            div.innerHTML = `
            
            <img class="card-img"
                    src="${e.images}" alt="">

                <p class="card-name">${e.title}</p>
                <p class="card-price">${price.toLocaleString()} сум</p>
                <p class="card-rating">rating:${e.rating}</p>
                <p class="card-category">cateogry:${e.category}</p>
            `

            wrapper.append(div)

        });

    }

    catch (err) {
        console.log(err);

    }

}

getProd()