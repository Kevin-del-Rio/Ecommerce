const products = [
    {id:'1', name:'Bad Bunny', price: 750, category: 'musica', img: '/img/Bad-Bunny-1.png', stock: 0, descripcion: 'Cuadro de Bad Bunny en Lienzo 30 x 30 cm'},
    {id:'2', name:'Madonna', price: 750, category: 'musica', img: '/img/Madona1.png', stock: 100, descripcion: 'Cuadro de Madona en Lienzo 30 x 30 cm'},
    {id:'3', name:'Messi', price: 750, category: 'futbol', img: '/img/Messi-1.png', stock: 100, descripcion: 'Cuandro de Messi en Lienzo 30 x 30 cm'},
    {id:'4', name:'La Casa De Papel', price: 750, category: 'series', img: '/img/La-Casa-De-Papel-1.png', stock: 100, descripcion: 'Cuandro de la casa de papel en Lienzo 30 x 30 cm'},
    {id:'5', name:'Guns N\' Rose', price: 750, category: 'musica', img: '/img/GunsNRoses-1.png', stock: 100, descripcion: 'Cuandro de Guns N\' Rose en Lienzo 30 x 30 cm'},
    {id:'6', name:'Naruto', price: 750, category: 'anime', img: '/img/Naruto-1.png', stock: 100, descripcion: 'Cuandro de Naruto 30 x 30 cm'},
    {id:'7', name:'Tommy Shelby', price: 750, category: 'series', img: '/img/Tommy-Shelby-1.png', stock: 100, descripcion: 'Cuandro de Tommy-Shelby en Lienzo 30 x 30 cm'},
    {id:'8', name:'Walter-White', price: 750, category: 'series', img: '/img/Walter-White-1.png', stock: 100, descripcion: 'Cuandro de Walter-White  en Lienzo 30 x 30 cm'}
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.stock > 0))
        },1000)

    })
};

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 1000)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId ))
        }, 1000)
    })
}


