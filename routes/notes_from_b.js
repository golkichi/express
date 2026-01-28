var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://takeshi_admin:kanayama01@cluster202601.azrvfsr.mongodb.net/?appName=Cluster202601";

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');


// 全てのドキュメントを取得
const note = await notes.find({}).toArray();

res.json(note);
})

module.exports = router;