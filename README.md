# trust-vote-site

> Dash Trust Elections - MNO Voting Site

Uses `@dashevo/dashcore-lib` to verify signatures in-browser.

_Hint_: Messages are signed the same as with `dash-cli`:

```bash
my_private_key='XK5DHnAiSj6HQNsNcDkawd9qdp8UFMdYftdVZFuRreTMJtbJhk8i'

my_vote='dte2019-efigaro|lcole|sfigaro|cchere'

dash-cli signmessagewithprivkey \
    "${my_private_key}" \
    "${my_vote}"
```

## Project Structure

```txt
.
├── README.md
├── example.env
├── package-lock.json
├── package.json
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── build/
│   └── ...
└── src/
    ├── apis/
    │   └── dtevote.js
    ├── candidates.json
    ├── components/
    │   ├── App.js
    │   ├── CandidateList.css
    │   ├── CandidateList.js
    │   ├── CandidateSelector.css
    │   ├── CandidateSelector.js
    │   ├── Closed.js
    │   ├── DashLogo.js
    │   └── VoteMessage.js
    ├── index.js
    └── logo.svg
```

## Pre-Reqs

1. Get Node.js
   ```bash
   # Mac & Linux
   curl https://webinstall.dev/node | bash
   ```
   ```pwsh
   # Windows
   curl.exe -A MS https://webinstall.dev/node | powershell
   ```

## Setup

1. Clone the project
   ```bash
   git clone https://github.com/dashevo/trust-vote-site
   pushd ./trust-vote-site/
   ```
2. Configure with `.env`

   ```bash
   rsync -avhP ./example.env ./.env
   ```

   `.env`:

   ```bash
   # necessary to get the fatty mcfat-fat react app to build
   NODE_OPTIONS='--max-old-space-size=4096'

   # season to taste
   PUBLIC_URL='https://vote.example.com'

   # show the candidates or "voting is closed"
   REACT_APP_ALLOW_VOTING='true'

   # a unique vote identifier as part of the message hash
   REACT_APP_VOTE_PREFIX='dte2022-'

   # additional REACT_APP_* will be made available to the browser
   ```

3. Manually update `candidates.json`
   ```json
   [
     {
       "alias": "name3",
       "text": "Cyrus Tafti",
       "value": "ctafti",
       "key": "ctafti"
     }
   ]
   ```
4. Run the build
   ```bash
   npm ci
   npm run build
   ```

## Dev-Only Setup

```bash
npm run start
```

**Note**: Probably best to avoid running in "dev mode" since it doesn't closely resemble production mode... however, it is a _LOT_ faster.

### CRApp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## License

[MIT](LICENSE) &copy; Dash Core Group, Inc.
