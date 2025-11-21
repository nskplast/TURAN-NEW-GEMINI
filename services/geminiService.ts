import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates advice for industrial packaging.
 * Uses gemini-2.5-flash for speed and quality.
 */
export const getPackagingAdvice = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: "You are 'StrapMaster', an expert industrial packaging engineer. You specialize in load containment, pallet security, and strapping materials (PET, PP, Steel). Provide technical, safety-conscious advice to warehouse managers and logistics coordinators. Focus on tensile strength, elongation recovery, and proper tool selection. Keep answers professional and concise (under 150 words).",
      }
    });
    
    return response.text || "I'm sorry, I couldn't generate advice at this moment.";
  } catch (error) {
    console.error("Gemini Text Error:", error);
    throw new Error("Failed to get advice from Gemini.");
  }
};

/**
 * Generates an industrial image based on a prompt.
 * Uses gemini-2.5-flash-image.
 */
export const generateIndustrialImage = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: `Industrial photography, warehouse logistics context: ${prompt}` }
        ]
      },
      config: {
         // Using default aspect ratio
      }
    });

    // Iterate through parts to find the inline data
    if (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return `data:image/png;base64,${part.inlineData.data}`;
            }
        }
    }
    
    throw new Error("No image data found in response");

  } catch (error) {
    console.error("Gemini Image Error:", error);
    throw new Error("Failed to generate image.");
  }
};