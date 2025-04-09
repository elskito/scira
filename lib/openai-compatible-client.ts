import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { serverEnv } from '@/env/server';

const openrouter = createOpenRouter({
  apiKey: serverEnv.OPENROUTER_API_KEY,
});

const claude = openrouter.languageModel('anthropic/claude-3.5-sonnet:beta')
const gpt4omini = openrouter.languageModel('openai/gpt-4o-mini')
const gpt4o = openrouter.languageModel('openai/gpt-4o-2024-11-20')
const alpha = openrouter.languageModel('openrouter/quasar-alpha')

export const openaiCompatibleClient = {
  claude,
  gpt4omini,
  gpt4o,
  alpha,
}

