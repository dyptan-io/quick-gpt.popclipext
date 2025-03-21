# QuickGPT for PopClip

QuickGPT is an extension for PopClip that integrates powerful language models directly into your MacOS experience. With QuickGPT, you can quickly perform tasks like grammar checking, rewriting text with different tones, summarizing, and even code refactoring, all with the convenience of PopClip.

## Features

- **Grammar Check**: Corrects the grammar of the selected text.
- **Professional Tone**: Rewrites text using a professional tone.
- **Friendly Tone**: Rewrites text using a friendly tone.
- **Refactor Code**: Refactors the selected code snippet.

## Installation

1. **Install PopClip**: Ensure that PopClip is installed on your MacOS. You can download it from the [Mac App Store](https://apps.apple.com/app/popclip/id445189367), or using brew formulae:

   ```sh
   brew install --cask popclip
   ```

2. **Get API Key**: Generate an API key from [OpenAI's API Key platform](https://platform.openai.com/account/api-keys) or other compatible provider.

3. **Download QuickGPT Extension**: Download zip or clone the QuickGPT extension files for PopClip from this repository.

4. **Install the Extension**: Double-click on the downloaded extension file to install it in PopClip.

5. **Configure Settings**:
   - Enter the API Key you obtained from OpenAI-compatible provider.
   - Configure the Base URL if you're using a custom OpenAI-compatible service.
   - Choose the OpenAI model you prefer to use (default is "gpt-4o-mini").

## Usage

After installation, simply select any text in any application, and the QuickGPT actions will appear in the PopClip bar. Choose the action you want to perform, and the result will either be shown as a preview (by pressing CMD key) or pasted back into your application.

## Customization

You can customize the behavior of QuickGPT through the following code adjustments:

- **Prompt**: Edit or add the prompts in the snippet to suit your needs.

   ```javascript
   {
      title: "Refactor Code",
      requiredApps: ["com.microsoft.VSCode", "com.jetbrains.goland"],
      code: async (i, o) => await callOpenAI(i, "Refactor the following code, and provide only code, do not explain it: \n\n", o),
      icon: "symbol:apple.terminal",
   }
   ```
