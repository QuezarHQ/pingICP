# Ping (for ICP)


## Application Overview

Ping is a notification service that boosts ecosystem engagement by creating a direct communication channel between dapp developers and their respective users.

Ping caters to two user personas, dapp developers & dapp users. User stories for each user persona are listed below:

A dapp developer can:
- login/authenticate on the platform => to verify themselves
- create a publisher profile => to make themselves discoverable by subscribers (dapp users)
- post an update => to keep their subscribers informed about important events
- view update history => to see the updates they sent previously

A dapp user can:
- login/authenticate on the platform => to access their inbox
- view list of publishers (dapps) => to select the dapps that are relevant to them. 
- subscribe to a publisher => to receive updates from it
- view their inbox => to see updates from all dapps they have subscribed to

Do check it out the live version deployed [here](https://h7jna-pqaaa-aaaak-afgiq-cai.icp0.io/)! You'll need to have a wallet supporting the ICP network, (eg BitFinity) to connect to the application.


#### NOTE

The application is in prototype stage. Further enhancements coming soon...

<br>

## Application Architecture

The application is divided into two canisters:
- **backend**: hosts the core application logic written in Rust. The code can be found under `/src/pingICP_backend`
- **asset/frontend**: hosts the UI components of the application written using React framework. The code can be found under `/src/pingICP_frontend`

<br>

## Getting started

You can check out this [demo video](https://www.loom.com/share/586d9b2cfe8a453bb0ae698fbc01f64a?sid=b1978f10-85b0-4629-9a0a-c01f234ad32d) to get a better understanding of how Ping works.

<br>

## Roadmap

- [x] POC
- [ ] Refine user flow & enhance UI
- [ ] Add support for notifications from realtime blockchain activities
- [ ] Mobile support

<br>

## Build and run it locally

Follow these steps to setup up Ping locally on your machine. 

1. Make sure that you have `dfx` installed on your system.
2. Clone this github repo.
3. Run `dfx start --clean --background`. If you already have a dfx process running, stop it first by running `dfx stop`
4. Run `dfx deploy`


