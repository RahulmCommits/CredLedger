<div align="center">
  
# 🎓 CredLedger

**A Web3 Credential Issuance & Verification Platform built on the Stellar network using Soroban Smart Contracts.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stellar](https://img.shields.io/badge/Network-Stellar_Testnet-black)](https://stellar.org/)
[![Soroban](https://img.shields.io/badge/Smart_Contracts-Soroban-orange)](https://soroban.stellar.org/)

  <h3>🚀 Live Production Deployment: <a href="https://cred-ledger-three.vercel.app/">https://cred-ledger-three.vercel.app/</a></h3>

![Hero Dashboard](./demo/img/Hero-wallet-connected.png)

*"Every credential has a digital passport. Cryptographically secure, immutable, and instantly verifiable on the Stellar network to ensure academic and professional authenticity globally."*

</div>

---

## 🏆 Stellar Belt Challenge Submission Checklist

### ⚪️ Level 1 - White Belt Submission

| Requirement | Status & Implementation Details |
| :--- | :--- |
| **Wallet Setup** | ✅ Integrated StellarWalletsKit exclusively on Testnet |
| **Wallet Connection** | ✅ Unified UI component for seamless connect/disconnect with custom UI |
| **Balance Handling** | ✅ Fetches and clearly displays XLM balance via Soroban RPC |
| **Transaction Flow** | ✅ UI shows success/failure toasts and verified Tx Hash |
| **Development Standards** | ✅ High-quality UI, wallet integration, and robust error handling |
| **Required Deliverables** | ✅ Repo, README, Setup instructions, and required Screenshots |

### 🟡 Level 2 - Yellow Belt Submission

| Requirement | Status & Implementation Details |
| :--- | :--- |
| **3 Error Types Handled** | ✅ Wallet rejection handled, Prisma DB errors handled, Smart Contract validation failures handled |
| **Contract Deployed** | ✅ Core Soroban registry contracts deployed on Testnet (`CD4QVW5BLFJU7ZELFVAVZJO3O4GDE3DEYZM5HN5MMMU7D62FLEAPEPIJ`) |
| **Contract Called** | ✅ Frontend successfully calls the deployed smart contracts to issue credentials |
| **Tx Status Visible** | ✅ Success modals and real-time ledger confirmation confirm execution |
| **Meaningful Commits** | ✅ Repository contains extensive meaningful commits documenting the journey |
| **Deliverable Met** | ✅ Multi-wallet app with deployed contract and real-time events |
| **Required Deliverables** | ✅ Live demo, Multi-wallet screenshot, Verifiable Tx Hash |

### 🟠 Level 3 - Orange Belt Submission

| Requirement | Status & Implementation Details |
| :--- | :--- |
| **Advanced Contracts** | ✅ Built bespoke `CredentialRegistry` supply chain contracts using Rust |
| **Inter-Contract Comm** | ✅ Contract cross-calls implemented to verify caller permissions |
| **Event Streaming** | ✅ Activity Blockchain Explorer actively polls the database for real-time events |
| **CI/CD Pipeline** | ✅ GitHub Actions runs Vitest frontend tests and builds on every commit |
| **Deployment Workflow** | ✅ Fully automated deployments to Vercel |
| **Mobile Responsive** | ✅ Complex tables, sidebars, and navigation perfectly optimized for mobile |
| **Error & Loading States** | ✅ Rich UX loading states, custom spinners, and Toast error notifications |
| **Testing Suite** | ✅ 6 Vitest frontend tests passing and Rust unit tests implemented |
| **Production Architecture**| ✅ Built on Next.js App Router, Prisma Postgres ORM, and Tailwind CSS |
| **Documentation** | ✅ Comprehensive professional README provided with project alignment |
| **Required Deliverables** | ✅ Mobile/CI screenshots, Contract IDs & Hash, 3+ passing tests |

---

## 📖 Product Overview & Problem Statement

### The Problem
The education and certification industry is plagued by fraudulent credentials, fake degrees, and unverified participation certificates. Traditional PDF certificates can be easily manipulated or cloned by malicious actors, making standard verification systems incredibly slow, manual, and prone to error.

### The Solution: CredLedger
CredLedger introduces a **Verifiable Digital Credential Passport**. Every certificate is cryptographically secured on the Stellar blockchain, ensuring absolute authenticity.
- **Tamper-Proof Certificates**: Organizations mint certificates as unique, immutable records on-chain (storing the SHA-256 data hash).
- **True On-Chain Batching**: We implemented a sequential wallet signing loop that allows issuers to authenticate and securely push large CSV batches of students directly to the Stellar network.
- **Instant Verification**: Anyone can scan the QR code on a physical or digital certificate to instantly read its provenance and verify its authenticity on the Stellar ledger via Stellar Expert.
- **Revocation & Lifecycle**: If a certificate is revoked, the on-chain status is updated, instantly invalidating the QR code scan for any future verifiers.

---

## 📁 Project Directory Structure

```text
CredLedger/
├── contracts/                  # Soroban Smart Contracts Workspace
│   ├── contracts/cred-issuer/  # Contract 1: Credential Issuer Logic
│   ├── contracts/cred-registry/# Contract 2: Registry for Verifiable Credentials
│   ├── Cargo.toml              # Rust Workspace configuration
│   └── deploy.sh               # Bash script for testnet deployment
├── src/                        # Next.js Frontend & Backend Application
│   ├── app/                    # Next.js App Router (Pages & API Routes)
│   ├── components/             # Reusable UI elements (Tailwind, Lucide Icons)
│   ├── lib/                    # Shared utilities (Prisma singleton, utils)
│   └── store/                  # Zustand global state (Wallet connections)
├── prisma/                     # PostgreSQL Database Schema
├── public/                     # Static assets
├── demo/img/                   # Screenshots for documentation
├── package.json                # NPM Dependencies
└── README.md                   # Project Documentation
```

---

## 🛡️ Contract Addresses & Verifiable Links

The contracts have been successfully deployed and initialized on the Stellar Testnet!

*   **Verifiable Live App**: [https://cred-ledger-three.vercel.app/](https://cred-ledger-three.vercel.app/)
*   **Credential Registry Contract**: [`CD4QVW5BLFJU7ZELFVAVZJO3O4GDE3DEYZM5HN5MMMU7D62FLEAPEPIJ`](https://stellar.expert/explorer/testnet/contract/CD4QVW5BLFJU7ZELFVAVZJO3O4GDE3DEYZM5HN5MMMU7D62FLEAPEPIJ)
*   **Network**: Stellar Testnet

**Recent Transactions:**
*   **Contract Call (Issue Credential)**: [1d9120501d8ccc5a8470a16b3f545a6c117b9b09a0670d8a571f84b64be6b7b2](https://stellar.expert/explorer/testnet/tx/1d9120501d8ccc5a8470a16b3f545a6c117b9b09a0670d8a571f84b64be6b7b2)

---

## 📸 Platform Previews

### 🌟 Hero & Dashboard
*A sleek, professional dashboard. Connect your Freighter wallet to sign and submit directly to the Stellar network.*
**(✅ Showcasing Wallet Connection State & Live XLM Balance Retrieval)**
<div align="center">
  <img src="demo/img/Hero-wallet-connected.png" alt="Hero Dashboard" width="800"/>
</div>

### 🧰 Multi-Wallet Support
*Seamlessly connect using your preferred Stellar wallet via StellarWalletsKit.*
**(✅ Supporting Multiple Wallet Provider Options)**
<div align="center">
  <img src="demo/img/multi-wallet.png" alt="Multi Wallet Options" width="800"/>
</div>

### 📜 Transaction Flow & Success Feedback
*Issue credentials directly on-chain. The system generates unique, verifiable QR codes and confirms via toast notifications.*
**(✅ Showcasing a Successful Testnet Transaction with Real-time User Feedback)**
<div align="center">
  <img src="demo/img/succesful-issue-toast.png" alt="Batch Registry" width="800"/>
</div>

### 🔍 Real-time Verification Page
*Anyone can scan the QR code to instantly read the entire credential provenance and verify authenticity via the Stellar ledger.*
<div align="center">
  <img src="demo/img/demo-verification.png" alt="QR Scan Results" width="800"/>
  <br/>
  <br/>
  <img src="demo/img/an-issued-certificate.png" alt="Issued Certificate" width="800"/>
</div>

### 📱 Fully Mobile Responsive
*The entire application, including complex dashboards, sidebars, and tables, is completely optimized for seamless mobile usage.*
**(✅ Built with a Fully Mobile-Responsive Architecture)**
<div align="center">
  <img src="demo/img/mobile-UI-1.png" alt="Mobile View 1" width="300"/>
  <img src="demo/img/mobile-ui-2.png" alt="Mobile View 2" width="300"/>
</div>

### 🚀 CI/CD Pipeline & Automated Testing
*Automated GitHub Actions trigger on every push, performing full frontend validation. Comprehensive Vitest tests ensure platform stability.*
**(✅ Fully Automated CI/CD Deployment Pipeline via GitHub Actions with 3+ Passing Tests)**
<div align="center">
  <img src="demo/img/passed-test.png" alt="Test Suite" width="400"/>
  <br/>
  <br/>
  <img src="demo/img/CI-CD.png" alt="CI/CD Pipeline" width="800"/>
</div>

### 🎨 Custom Dashboard in Night Mode
*Premium UI/UX design showcasing a high-quality Night Mode integration.*
<div align="center">
  <img src="demo/img/dasboard-in-night-mode.png" alt="Night Mode" width="800"/>
</div>

---

## 💻 Local Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/RahulmCommits/CredLedger.git
   cd CredLedger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` and `.env.local` file and add your Postgres Database URL and Stellar Testnet configuration (or use the provided defaults).

4. Sync the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to interact with the DApp locally.
