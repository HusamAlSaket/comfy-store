## GitHub Copilot Chat

- Extension Version: 0.27.2 (prod)
- VS Code: vscode/1.100.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.HusamAlSaket.ghe.com:
- DNS ipv4 Lookup: Error (72 ms): getaddrinfo ENOTFOUND api.husamalsaket.ghe.com
- DNS ipv6 Lookup: Error (1 ms): getaddrinfo ENOTFOUND api.husamalsaket.ghe.com
- Proxy URL: None (27 ms)
- Electron fetch (configured): Error (158 ms): Error: net::ERR_NAME_NOT_RESOLVED
    at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10511)
    at SimpleURLLoaderWrapper.emit (node:events:524:28)
    at SimpleURLLoaderWrapper.emit (node:domain:489:12)
- Node.js https: Error (89 ms): Error: getaddrinfo ENOTFOUND api.husamalsaket.ghe.com
    at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26)
- Node.js fetch: Error (31 ms): TypeError: fetch failed
    at node:internal/deps/undici/undici:13502:13
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at qP._fetch (c:\Users\ADMIN\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:792:53087)
    at c:\Users\ADMIN\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:823:134
    at Wb.h (file:///c:/Users/ADMIN/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:119:41516)
  Error: getaddrinfo ENOTFOUND api.husamalsaket.ghe.com
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26)
- Helix fetch: Error (108 ms): FetchError: getaddrinfo ENOTFOUND api.husamalsaket.ghe.com
    at Egt (c:\Users\ADMIN\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:304:29579)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at kxr (c:\Users\ADMIN\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:304:31605)
    at eS.fetch (c:\Users\ADMIN\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:793:2495)
    at c:\Users\ADMIN\.vscode\extensions\github.copilot-chat-0.27.2\dist\extension.js:823:134
    at Wb.h (file:///c:/Users/ADMIN/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:119:41516)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.21 (67 ms)
- DNS ipv6 Lookup: Error (67 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (24 ms)
- Electron fetch (configured): HTTP 200 (525 ms)
- Node.js https: HTTP 200 (566 ms)
- Node.js fetch: HTTP 200 (576 ms)
- Helix fetch: HTTP 200 (481 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).