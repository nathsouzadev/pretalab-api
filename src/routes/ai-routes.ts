import express from 'express';
import { aiResponse, aiChatResponse } from "../controllers/ai";

var router = express.Router();

router.post("/ai", async (req, res) => aiResponse(req,res))

router.post("/api/chat", async (req, res) => aiChatResponse(req,res))

export default router;