# ImpactGuild Demo Video Script

Keep the video clean and direct. Record the browser and terminal side by side if possible.

## 0-5 seconds

Open with the dashboard.

Say or show:

```text
ImpactGuild turns community work into portable onchain reputation, gated access, badges, and contribution-weighted governance.
```

## 5-20 seconds

Click `Run Example Flow` on `impactguild_dashboard.html`.

Show:

- profiles
- guild creation
- quest posting
- proof submission
- contribution attestation
- badge issuance
- gate unlock
- reputation-weighted vote

## 20-45 seconds

Switch to the terminal and run:

```bash
cd plugin/typescript
npm run demo:impactguild
```

The video should clearly show:

- local Canopy query RPC: `50002`
- local Canopy admin RPC: `50003`
- submitted txs:
  - `register_profile`
  - `create_guild`
  - `post_quest`
  - `submit_proof`
  - `attest_contribution`
  - `issue_badge`
  - `create_gate`
  - `check_gate_access`
  - `cast_reputation_vote`

## Closing

End on the dashboard or terminal summary.

Do not leave the screen recorder control panel covering the app.
