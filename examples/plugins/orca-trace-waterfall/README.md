# Live Office Voxel and Trace Waterfall

The panel opens in Office Voxel. Office and the Network-style waterfall share one selected orchestration Run, read through the existing host trace.live and trace.load handlers. Polling waits for each request chain to finish before scheduling the next read.

Click a person or expand the session list to open task input, reports and exact associated messages. In the waterfall, click bars, arrows or waits for their records. A live dispatch uses the original Office Voxel work action, an inferred wait uses think, and finished or unreadable states use idle. Failed reads preserve prior records and stop working animations. There are no simulated processing or receipt controls.

From this folder:

```sh
npm ci
npm run build
npm test
orca plugin validate . --json
orca plugin check . --json
orca plugin test . --json
ORCA_BACKGROUND_LAUNCH=1 OFFICE_PLUGIN_EVIDENCE=/absolute/external/evidence node tests/browser-regression.mjs
```

The browser regression uses synthetic inputs unless OFFICE_PLUGIN_LIVE=1. In live mode its loopback bridge calls the actual loaded development plugin with the Orca CLI and permits only read handlers. Failure and status transition checks are explicitly synthetic.

Build output contains one scene bundle and licensed assets. The former standalone prototype server is historical; build and validate the plugin panel. Private snapshots, transcripts, database exports and screenshots must remain outside this repository. No capabilities or data-writing handlers are added.
