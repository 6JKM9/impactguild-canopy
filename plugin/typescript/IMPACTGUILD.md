# ImpactGuild

ImpactGuild is the contest app built in this Canopy TypeScript plugin.

It upgrades the original reputation idea into a complete Social-Fi loop:

- profiles for identity
- guilds for communities
- quests for contribution requests
- proofs for submitted work
- attestations for review
- badges for portable status
- gates for access control
- votes weighted by earned reputation

## Contract Surface

The plugin config is named `impactguild_social_fi` and supports:

```text
send
register_profile
give_vibe
create_guild
post_quest
submit_proof
attest_contribution
issue_badge
create_gate
check_gate_access
cast_reputation_vote
```

## State Prefixes

ImpactGuild stores deterministic key-value state for accounts, profiles, handles, vibes, guilds, quests, proofs, badges, gates, gate checks, and reputation votes. The custom state begins at byte prefix `0x10` and keeps the built-in Canopy account, pool, and fee parameter prefixes unchanged.

## Judge-Friendly Demo

For the clearest video:

1. Start local Canopy with the TypeScript plugin.
2. Run `npm run demo:impactguild`.
3. Keep the terminal visible so the video shows ports `50002 / 50003`.
4. Open `demo/impactguild_dashboard.html` and click through the same story visually.

The important judging signal is that the app is not mocked-only: the demo script submits custom transactions through local Canopy RPC.
