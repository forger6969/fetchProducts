async function getProd() {

    try {

        let data = await fetch(`https://dummyjson.com/products?limit=0`)
        let res = await data.json()
        console.log(res);


        let wrapper = document.querySelector(`.cards-wrapper`)
        res.products.forEach((e, aziz) => {

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
                <button class="btn" data-aziz="${aziz}">Buy</button>
            `

            wrapper.append(div)

            let btn = div.querySelector(`.btn`)

            btn.addEventListener(`click`, () => {

                let indexBtn = btn.getAttribute('data-aziz')
                console.log(indexBtn);
                let selectedProd = res.products[indexBtn]

                if (confirm(`Anniq olasanmi eshshakmiyya`)) {

                    let p = document.createElement(`p`)
                    p.textContent = selectedProd.title
                    let wrapperKorzina = document.querySelector(`.korzina`)
                    wrapperKorzina.append(p)

                } else {
                    alert(`omasen oma dnx`)
                }

            })

        });



    }

    catch (err) {
        console.log(err);

    }

}

getProd()