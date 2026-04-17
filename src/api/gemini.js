import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "mock-gemini-key";
const genAI = new GoogleGenerativeAI(apiKey);

export const analyzeInsights = async (prompt) => {
  if (apiKey === "mock-gemini-key") {
    // Return mock response if API key is not configured
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`[Mock Response for: "${prompt}"]\n\nBased on current market trends and inventory velocity, the Autumn Cashmere collection is outperforming expectations by 14%. Consider re-ordering stock before Q4.`);
      }, 1500);
    });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(`You are an AI Retail Insights Assistant. Analyze the following request from a merchant and provide concise, data-driven, actionable insights.\n\nMerchant Request: ${prompt}`);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Error generating insights. Please try again later.";
  }
};
