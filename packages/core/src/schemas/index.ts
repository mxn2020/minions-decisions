/**
 * @module @minions-decisions/sdk/schemas
 * Custom MinionType schemas for Minions Decisions.
 */

import type { MinionType } from 'minions-sdk';

export const decisionType: MinionType = {
  id: 'decisions-decision',
  name: 'Decision',
  slug: 'decision',
  description: 'A logged project decision with full context.',
  icon: '⚖️',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'rationale', type: 'string', label: 'rationale' },
    { name: 'alternatives', type: 'string', label: 'alternatives' },
    { name: 'decidedBy', type: 'string', label: 'decidedBy' },
    { name: 'decidedAt', type: 'string', label: 'decidedAt' },
    { name: 'outcome', type: 'string', label: 'outcome' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const decisionreviewType: MinionType = {
  id: 'decisions-decision-review',
  name: 'Decision review',
  slug: 'decision-review',
  description: 'A retrospective review of a past decision.',
  icon: '🔍',
  schema: [
    { name: 'decisionId', type: 'string', label: 'decisionId' },
    { name: 'reviewedAt', type: 'string', label: 'reviewedAt' },
    { name: 'wasCorrect', type: 'boolean', label: 'wasCorrect' },
    { name: 'lessons', type: 'string', label: 'lessons' },
    { name: 'wouldChangeWhat', type: 'string', label: 'wouldChangeWhat' },
  ],
};

export const customTypes: MinionType[] = [
  decisionType,
  decisionreviewType,
];

