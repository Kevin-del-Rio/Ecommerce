const products = [
    {id:'1', name:'Bad Bunny', price: 750, categoria: 'una-pieza', img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/19625188/3219051308.jpg', stock: 100, descripcion: 'Cuadro de Bad Bunny 30 x 30 cm'},
    {id:'2', name:'Madonna', price: 750, categoria: 'una-pieza', img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/19625188/3101222150.jpg', stock: 100, descripcion: 'Cuadro de Madona 30 x 30 cm'},
    {id:'3', name:'Messi', price: 750, categoria: 'una-pieza', img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/19625188/3147291745.jpg', stock: 100, descripcion: 'Cuandro de Messi 30 x 30 cm'},
    {id:'4', name:'La Casa De Papel', price: 750, categoria: 'una-pieza', img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/19625188/2996165915.jpg', stock: 100, descripcion: 'Cuandro de la casa de papel 30 x 30 cm'},
    {id:'5', name:'Guns N\' Rose', price: 750, categoria: 'una-pieza', img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/19625188/3002601933.jpg', stock: 100, descripcion: 'Cuandro de Guns N\' Rose 30 x 30 cm'},
    {id:'6', name:'Naruto', price: 750, categoria: 'una-pieza', img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/19625188/3002328128.jpg', stock: 100, descripcion: 'Cuandro de Naruto 30 x 30 cm'},
    {id:'7', name:'Tommy Shelby', price: 750, categoria: 'una-pieza', img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/19625188/2997362772.jpg', stock: 100, descripcion: 'Cuandro de Tommy-Shelby 30 x 30 cm'},
    {id:'8', name:'Walter-White', price: 750, categoria: 'una-pieza', img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/19625188/2997526544.jpg', stock: 100, descripcion: 'Cuandro de Walter-White 30 x 30 cm'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },2000)

    })
};