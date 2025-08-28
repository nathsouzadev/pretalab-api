import express from 'express';
import { aiResponse, aiChatResponse, getAiChatResponse } from "../controllers/ai";

var router = express.Router();

router.post("/ai", async (req, res) => aiResponse(req,res))

router.post("/chat", async (req, res) => aiChatResponse(req,res))

router.get("/chat", getAiChatResponse )

export default router;