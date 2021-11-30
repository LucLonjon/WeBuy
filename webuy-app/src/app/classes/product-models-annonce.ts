export class Annonce {
    ref: any = null
    ts: number = 0
    data: AnnonceData = null

    constructor(data) {
        this.ref = data.ref
        this.ts = data.ts
        this.data = new AnnonceData(data.ref['@ref'].id, data.data)
    }
}

export class AnnonceData {
    name: string = ''
    description: string = ''
    price: number = 0
    quantity: number = 0
    storehouse: any = null
    backorderLimit: number = 0
    backordered = false
    image?: string = ''
    id: string = ''

    constructor(id, data) {
        console.log('id: ', typeof id)
        this.id = id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.quantity = data.quantity
        this.storehouse = data.storehouse
        this.backorderLimit = data.backorderLimit
        this.backordered = data.backordered
        this.image = data.image || ''
    }
}