# Trace Waterfall and Office Voxel

The Trace panel starts on the existing timeline and keeps the team view. The Office tab adds task overview, a nine-seat paginated voxel office, task details and execution recap. Open-session buttons use the existing `trace.session.open` handler and require an explicit click.

Task handling offers four choices, then a required opinion, confirmation and a local simulated receipt. Drafts and receipts live in page memory and disappear on reload. **No message is sent.** The plugin API has terminal text input, but no orchestration message API with a verified recipient/thread and delivery receipt; real sending remains future work.

## Build and verify

This example is independent of the repository's pnpm workspace. From this directory:

```sh
npm ci
npm run build
npm test
orca plugin validate . --json
orca plugin check . --json
orca plugin test . --json
ORCA_BACKGROUND_LAUNCH=1 OFFICE_PLUGIN_EVIDENCE=/absolute/external/evidence node tests/browser-regression.mjs
```

Browser checks use headless Chrome. Set `CHROME_PATH` for your platform. The read-only worker runs on the Orca host, locates that host's orchestration database, and requires `sqlite3` and `orca` on PATH (or `ORCA_CLI_COMMAND`). Missing sources remain errors, never successful/empty completion.

`voxel-src/` contains the scene and original panel source; `redesign/src/` contains the task views. `build.mjs` produces both panel bundles and the standalone preview. Scene artwork and font licenses are retained under `panel/` and `redesign/`.

## Standalone preview and private fixtures

```sh
node redesign/server.mjs
# Optional: ORCA_TRACE_FIXTURE=/absolute/private/snapshots.json PROTOTYPE_PORT=5241 node redesign/server.mjs
```

The default fixture is synthetic. Private files must stay outside this repository. The preview listens only on loopback, checks same-origin GET requests, restricts live reads to fixture run IDs and redacts credentials. It never sends messages. The preview's explicit refresh reads the currently loaded development plugin; it requires that plugin to be available.

Real snapshots, evidence screenshots, transcripts, local database exports and credentials are excluded from this example. Generated panel bundles contain code and licensed artwork only. Do not place private data under source or fixtures.
