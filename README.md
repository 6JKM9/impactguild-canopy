# ImpactGuild - Onchain Social-Fi Operating System

**One-line pitch:** ImpactGuild turns community work into portable onchain reputation, gated access, badges, and contribution-weighted governance.

ImpactGuild is a Social-Fi appchain built with the Canopy TypeScript plugin template. Communities create guilds, post quests, review contribution proof, issue contributor badges, unlock gated spaces, and let members vote with earned reputation instead of token wealth.

## Why It Matters

Discord communities, DAOs, and builder ecosystems all have the same problem: the people who help the most often have no portable proof of their work. ImpactGuild makes that work visible onchain.

## Core Flow

1. A user registers an onchain profile.
2. A community creates a guild.
3. The guild posts quests for useful work.
4. Contributors submit proof links.
5. Reviewers attest the contribution.
6. Contributors earn reputation and badges.
7. Reputation and badges unlock gates.
8. Governance votes are weighted by earned reputation.

## Custom Canopy Transactions

- `register_profile`
- `give_vibe`
- `create_guild`
- `post_quest`
- `submit_proof`
- `attest_contribution`
- `issue_badge`
- `create_gate`
- `check_gate_access`
- `cast_reputation_vote`

## Custom State

- `SocialProfile`
- `VibeAttestation`
- `Guild`
- `Quest`
- `ContributionProof`
- `GuildBadge`
- `AccessGate`
- `GateAccess`
- `ReputationVote`

## Project Files

- Plugin contract: `plugin/typescript/src/contract/contract.ts`
- Custom protobufs: `plugin/typescript/proto/tx.proto`
- RPC demo script: `plugin/typescript/demo/impactguild_demo.ts`
- Visual dashboard: `plugin/typescript/demo/impactguild_dashboard.html`
- Submission notes: `plugin/typescript/SUBMISSION.md`

## Run The Plugin

```bash
cd plugin/typescript
npm install
npm run build:all
```

## Run The Local RPC Demo

The RPC demo requires a local Canopy chain running with the TypeScript plugin enabled.

```bash
cd plugin/typescript
npm run demo:impactguild
```

The demo uses:

- `50002` for Canopy transaction/query RPC
- `50003` for local admin keystore RPC

## Demo Story

Alice creates the Canopy Builders guild. Bob submits proof for a Social-Fi quest. Alice approves the contribution, Bob earns 120 reputation, receives a Verified Builder badge, unlocks the VIP Builders gate, and casts a reputation-weighted governance vote.

## Built With

- Canopy Network
- Canopy TypeScript plugin template
- Protocol Buffers
- Node.js / TypeScript
