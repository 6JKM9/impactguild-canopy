# VibeGraph - On-Chain Social Reputation Graph

**One-line pitch:** VibeGraph turns community thanks into portable onchain reputation.

VibeGraph is a Social-Fi appchain built with the Canopy TypeScript plugin template. Users register onchain social profiles, then give each other signed reputation attestations called "vibes" for useful community work. Each vibe is stored as onchain state and updates the receiver's portable reputation score.

## Features

### Onchain Social Profiles

- Register a profile with a unique handle and bio.
- Store profile data directly in Canopy plugin state.
- Track reputation score, vibes given, and vibes received.

### Give Vibe Transaction

- Send signed reputation points to another registered profile.
- Add a tag like `mentor`, `builder`, `artist`, or `moderator`.
- Attach a short note explaining why the reputation was given.

### Reputation Attestations

- Every vibe is stored as an onchain attestation.
- Tracks sender, receiver, amount, tag, note, and height.
- Builds a portable social graph of community trust.

### Custom Canopy Plugin

VibeGraph is implemented inside the official Canopy TypeScript plugin template.

Custom transaction types:

- `register_profile`
- `give_vibe`

Custom state types:

- `SocialProfile`
- `VibeAttestation`
- `VibeCounter`

## Project Files

- Plugin code: `plugin/typescript/src/contract/contract.ts`
- Custom protobufs: `plugin/typescript/proto/tx.proto`
- RPC demo script: `plugin/typescript/demo/vibegraph_demo.ts`
- Visual dashboard: `plugin/typescript/demo/vibegraph_dashboard.html`
- Video demo page: `plugin/typescript/demo/vibegraph_video_demo.html`
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
npm run demo:vibegraph
```

The demo uses:

- `50002` for Canopy transaction/query RPC
- `50003` for local admin keystore RPC

## Demo Story

1. Alice registers an onchain profile.
2. Bob registers an onchain profile.
3. Alice gives Bob `42` vibe points tagged `mentor`.
4. Bob's reputation score increases.
5. The transaction is confirmed through local Canopy RPC.

## Contest Submission Text

```text
VibeGraph - On-Chain Social Reputation Graph

Pitch: VibeGraph turns community thanks into portable onchain reputation.

VibeGraph is a Social-Fi appchain built with the Canopy TypeScript template. Users register onchain profiles, then give each other signed "vibes" for useful community work. Each vibe is stored as an onchain reputation attestation and updates the receiver's portable reputation score.

Custom txs:
- register_profile
- give_vibe

Features:
- Onchain social profiles
- Signed reputation attestations
- Vibe score tracking
- Contributor trust graph
- Local Canopy RPC demo through ports 50002 / 50003
```

## Built With

- Canopy Network
- Canopy TypeScript plugin template
- Protocol Buffers
- Node.js / TypeScript
