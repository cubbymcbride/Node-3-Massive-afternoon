module.exports = {
    create: (req, res) => {
        let db = req.app.get('db')
        console.log(req.body)
        let { name, description, price, image_url } = req.body
        
        db.createProduct(req.body).then(product => {
            res.send(product)
        }).catch(err => res.status(500).send(err))
    },

    read: (req, res) => {
        let db = req.app.get('db')
        const {id} = req.params
        
        db.readProduct(id).then(product => {
            res.send(product)
        }).catch(err => res.status(500).send(err))
    },

    reads: (req, res) => {
        let db = req.app.get('db')
        console.log('hit')
        db.readProducts().then(products => {
            res.send(products)
        }).catch(err => res.status(500).send(err))
    },

    update: (req, res) => {
        let db= req.app.get('db')
        let { params, query } = req
        
        db.updateProduct([params.id, query.desc]).then(product => {
            res.send(product)
        }).catch(err => res.status(500).send(err))
    },
    
    delete: (req, res) => {
        let db= req.app.get('db')
        const {id} = req.params

        db.delete_product({id}).then((products) => res.send(products))
        .catch(err => res.status(500).send(err))

    }
}