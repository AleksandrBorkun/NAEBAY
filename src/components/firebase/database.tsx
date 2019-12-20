import { mountDB } from './init';

export function getCategories() {
    return mountDB()
        .collection('categories').get()
        .then(resp => {
            return resp.docs.map(doc => { return doc.id })
    })
}

export function getProducts() {
    return mountDB()
        .collection('products').get()
        .then(resp => {
            return resp.docs.map(doc => {return doc.data() })
    })
}

export function addNewProduct(product : {name: string, desc: string, price: string, category: string, ownerId: string, phone:string, address:string, paytype:string, image: string []}){
    return mountDB().collection('products').add(product)
        .then(resp => {
            return resp.id
        })
        .catch(err => {
            console.error(err);
        })

}

function addCategory(category: string){

}