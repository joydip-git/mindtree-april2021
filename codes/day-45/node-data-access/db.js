const { MongoClient } = require('mongodb')
const MONGO_URL = 'mongodb://127.0.0.1:27017/contactdb'
const mongoClient = new MongoClient(MONGO_URL)
// mongoClient.connect()
//     .then(
//         (resolveResp) => {
//             console.log('connected to mongodb')
//             console.log(resolveResp)
//         },
//         (errResp) => {
//             console.log(errResp)
//         }
//     )
// //opertaions
// mongoClient.close()
async function viewDocuments(collectionName) {
    await mongoClient
        .db()
        .collection(collectionName)
        .find()
        .forEach(record => console.log(record))
}
async function addRecord() {
    mongoClient
        .db()
        .collection('contacts')
        .insertOne({
            name: 'abcd',
            email: 'abcd@gmail.com',
            phone: 9494949494
        })
}
async function removeRecord() {
    mongoClient
        .db()
        .collection('contacts')
        .deleteOne({ name: 'abcd' })
}
async function showCollections() {
    mongoClient.db()
        .collections()
        .then(
            (collectionArray) => {
                collectionArray
                    .forEach(
                        (collection) => {
                            console.log(collection.collectionName)
                        })
            },
            (e) => {
                console.log(e)
            }
        )

}
async function connectToContactsDb() {
    try {
        await mongoClient.connect()
        console.log('connected to mongodb')
        console.log(await mongoClient.db().databaseName)
        //await addRecord()
        //await removeRecord()
        await showCollections()
        await addRecord()
        await viewDocuments('contacts')
        await removeRecord()
        await viewDocuments('contacts')
    } catch (error) {
        console.error(error)
    }
    finally {
        // await mongoClient.close()
    }
}

connectToContactsDb().catch((err) => console.error(err))