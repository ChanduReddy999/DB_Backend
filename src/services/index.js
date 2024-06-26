// const db = require('../../database/index');
const admin = require("firebase-admin");
require('dotenv').config();

// firebase credentials for portfolio
const credentials = {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
    "universe_domain": process.env.UNIVERSE_DOMAIN
}

admin.initializeApp({
    credential: admin.credential.cert(credentials),
});
const db = admin.firestore();


const sampleService = async (req, res) => {
    try {
        const contactDetails = {
            FullName: req.body.FullName,
            Email: req.body.Email,
            Class: req.body.Class,
            RollNumber: req.body.RollNumber,
            Message: req.body.Message
        }
        const response = await db.collection("sample").add(contactDetails);

        return { status: 200, message: "success", data: [] }
    } catch (error) {
        return { status: 300, message: "error", data: null }
    }
}

const collectionService = async (req, res) => {
    try {
        const collections = await db.listCollections();
        const collectionIds = collections.map(collection => collection.id);

        return { status: 200, message: "success", data: collectionIds }
    } catch (error) {
        return { status: 300, message: "error", data: null }
    }
}

module.exports = {
    sampleService, collectionService
}