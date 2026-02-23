/**
 * Minions Decisions SDK
 *
 * Logged decisions with rationale, alternatives, and outcome
 *
 * @module @minions-decisions/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Decisions.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
