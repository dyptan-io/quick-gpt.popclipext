// #popclip
// name: QuickGPT
// icon: iconify:logos:openai-icon
// language: javascript
// module: true
// entitlements: [network]
// macos version: '14.0'
// requirements: [text, paste]
// excluded apps: [com.apple.Terminal]
// options: [{
//   identifier: baseUrl,
//   label: Base URL,
//   type: string,
//   defaultValue: "https://api.openai.com/v1/",
//   description: "OpenAI compatible API provider"
// },{
//   identifier: model,
//   label: Model,
//   type: string,
//   defaultValue: "gpt-4o-mini",
//   description: "Specify the LLM to use"
// },{
//   identifier: apikey,
//   label: API Key,
//   type: secret
// }]


"use strict";

const axios = require("axios");

async function callOpenAI(input, promptText, options) {
  const openai = axios.create({
    baseURL: options.baseUrl || "https://api.openai.com/v1/",
    headers: { Authorization: `Bearer ${options.apikey}` },
  });

  const content = `${promptText}${input.text.trim()}`;
  const messages = [{ role: "user", content }];

  const { data } = await openai.post("chat/completions", {
    model: options.model || "gpt-4o-mini",
    messages,
  });

  const response = data.choices[0].message.content.trim();

  if (popclip.modifiers.command) {
    popclip.showText(response, {preview: true});
  } else {
    popclip.pasteText(response, {restore: true});
    popclip.showSuccess();
  }

  return null;
}

exports.actions = [
  {
    title: "Check grammar",
    code: async (i, o) => await callOpenAI(i, "Return only the grammar-corrected text without any explanations, notes, or additional content: \n\n", o),
    icon: "symbol:checkmark.seal",
  },
  {
    title: "Professional tone",
    code: async (i, o) => await callOpenAI(i, "Transform this text into a professional tone. Return only the revised text without any explanations or comments: \n\n", o),
    icon: "symbol:brain.filled.head.profile",
  },
  {
    title: "Friendly tone",
    code: async (i, o) => await callOpenAI(i, "Rewrite this using a friendly, conversational tone. Return only the revised text without any explanations or comments: \n\n", o),
    icon: "symbol:face.smiling",
  },
  {
    title: "Refactor Code",
    requiredApps: ["com.microsoft.VSCode", "com.jetbrains.goland"],
    code: async (i, o) => await callOpenAI(i, "Refactor the following code for improved readability and efficiency. Return only the refactored code without comments, explanations, or markdown formatting: \n\n", o),
    icon: "symbol:apple.terminal",
  }
];