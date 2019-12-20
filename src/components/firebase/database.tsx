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

export function addNewProduct(product : {name: string, desc: string, price: string, category: string, ownerId: string, image: string []}){

}

function addCategory(category: string){

}