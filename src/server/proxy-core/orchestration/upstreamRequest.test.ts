import { describe, expect, it } from 'vitest';
import { buildUpstreamUrl } from './upstreamRequest.js';

describe('buildUpstreamUrl', () => {
  it('routes native Gemini fallbacks outside an OpenAI compatibility suffix', () => {
    expect(buildUpstreamUrl(
      'https://generativelanguage.googleapis.com/v1beta/openai',
      '/v1beta/models/gemini-3-flash:generateContent?key=gemini-key',
    )).toBe(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash:generateContent?key=gemini-key',
    );
  });
});
