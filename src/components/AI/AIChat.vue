<template>
  <div class="chat-container">
    <h1>{{ import.meta.env.VITE_APP_TITLE }}</h1>

    <textarea
      v-model="prompt"
      placeholder="Kérdezz valamit a Geminitől..."
    ></textarea>
    <button @click="startStreaming()" :disabled="isLoading">
      {{ isLoading ? "Gondolkodom..." : "Küldés" }}
    </button>

    <div class="response-box">
      <p v-if="responseText">{{ responseText }}</p>
    </div>
  </div>
</template>

<script>
import { GoogleGenAI } from "@google/genai";
export default {
  name: "AIChat",
  data() {
    return {
      prompt: "",
      responseText: "",
      isLoading: false,
    };
  },
  methods: {
    async startStreaming() {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const ai = new GoogleGenAI({ apiKey });
      if (!prompt.value) return;

      this.responseText = "";
      this.isLoading = true;

      try {
        const response = await ai.models.generateContentStream({
          model: "gemini-2.0-flash",
          contents: this.prompt,
        });

        for await (const chunk of response) {
          // Itt adjuk hozzá a darabkákat a reaktív változóhoz
          this.responseText += chunk.text;
        }
      } catch (error) {
        console.error("Hiba történt:", error);
        this.responseText = "Hiba a generálás során.";
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.response-box {
  white-space: pre-wrap; /* Hogy megmaradjanak a sortörések */
  background: #f4f4f4;
  padding: 1rem;
  margin-top: 1rem;
}
</style>