// Terms that must never appear in public AI Central content (copy, alt, aria, JSON-LD, metas,
// llms*.txt, OG). Build-time only: this file is not part of the published site.
export const FORBIDDEN_TERMS = [
  'Bronze', 'Silver', 'Gold', 'Medallion', 'SSOT', 'single source of truth', 'DDD', 'bounded context',
  'hexagonal', 'microkernel', 'monolith', 'monolito', 'CQRS', 'event sourcing', 'RAG', 'embedding',
  'vector', 'rerank', 'tool calling', 'function calling', 'orchestrator', 'orquestador', 'SDK',
  'manifest', 'manifiesto', 'plugin', 'worker', 'DLQ', 'dead-letter', 'queue', 'cola', 'Fastify', 'tRPC',
  'React', 'PostgreSQL', 'Postgres', 'Ollama', 'vLLM', 'GPU', 'VRAM', 'OpenAI', 'Anthropic', 'GPT',
  'Claude', 'Llama', 'Odoo', 'RBAC', 'ABAC', 'OIDC', 'RFM', 'PR-AUC', 'Brier', 'WAPE', 'MLOps', 'LLMOps',
  'semantic layer', 'capa semántica', 'netRevenue', 'grossMargin', 'purchaseFrequency',
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Whole words, case-insensitive ("cola" must not match "escolar")
export const FORBIDDEN_RE = new RegExp(`(?<![\\p{L}\\p{N}])(${FORBIDDEN_TERMS.map(escape).join('|')})(?![\\p{L}\\p{N}])`, 'giu');

export function findForbidden(text: string): string[] {
  return [...new Set(Array.from(text.matchAll(FORBIDDEN_RE), (m) => m[0]))];
}
