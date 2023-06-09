# Resources

::: warning

WIP
:::

<badge type="tip" text="good resource" vertical="mid"/>

<badge type="warning" text="spoilers" vertical="mid"/>

<badge type="danger" text="outdated?" vertical="mid"/>


- [FFXIV Housing](https://en.ff14housing.com/): Database of housing items
- [FF14ミラプリSS投稿・共有サイト | MIRAPRI SNAP](https://mirapri.com/): glamour gallery
- [Homepage - Final Fantasy XIV - FFXIV - SaltedXIV](https://saltedxiv.com/)
-
- [FFXIV Hotbar Planner](https://xivbars.bejezus.com/)
[Universalis.app](https://universalis.app/): crowd-sourced marketboard information
[Saddlebag Exchange](https://saddlebagexchange.com/)
[Chocobo Racing Guide | FFXIV Chocobo Racing](https://ffxivchocoboracing.wordpress.com/)
[Chocobo Racing Guide | IcyVeins](https://www.icy-veins.com/ffxiv/chocobo-racing-and-breeding-guide)
[Triple Triad Tournament Guide](https://www.reddit.com/r/ffxiv/comments/bn279r/a_triple_triad_tournament_guide/)

- [Lulu's Tools](https://ffxiv.pf-n.co/)
  - Chocobo Color Calculator
  - Mini Cactpot Calculator
  - Name Generator
  - Ocean Fishing Schedule and Information
  - Skywatcher
  - Wondrous Tails Calculator
  - Bozjan Southern Front Interactive Map
  - Zadnor Map

[Gathering Node Timers | FFXIV Clock](https://www.ffxivclock.com/)
[FFXIV Fish Tracker | Carbuncle Plushy](https://ff14fish.carbuncleplushy.com/)
[Relic Guide Helper?](https://docs.google.com/document/d/120q5XVHNeT90oN0BovzOGSp_BtitHstXaOsZnksLU38/edit)

[Hunting Log Tracker | FFXIV Crafting](https://ffxivcrafting.com/hunting)
[Hunting Log Tracker | Dimensional Death](http://dimensionaldeath.com/?page=huntinglogs)

The Hunt
[Faloop](https://faloop.app/)
[Hunt Bill Pathfinder](https://www.xivdaily.com/hunts/)
[FFXIV Hunt](https://ffxivhunt.com/) | Hunt Locations and Info

Official Guides
[PvE Job Guide](https://na.finalfantasyxiv.com/jobguide/battle/)
[PvP Job Guide](https://na.finalfantasyxiv.com/jobguide/pvp/)
[Crystalline Conflict Guide](https://na.finalfantasyxiv.com/lodestone/playguide/contentsguide/crystallineconflict/)
[Additional Plots and Purchasing Guide](https://sqex.to/YPz)

## Discords (Primal Focused)

### North America
- [Ultimate Uncoiled (NA + EU)](https://discord.gg/rcVpJhQ)
- [Savage Learning Academy](https://discord.gg/ffxivsla)
- [NA PF Savage](https://discord.gg/sHUFy2sR97)
- [Sync/Min iLevel NA](https://discord.gg/BmpW6C9)
- [NA Pug TOP](https://discord.gg/D9EceEbduz)
- [Everything FFXIV](https://discord.com/invite/QtzBf3V)

### Primal
- [Primal Raid Network](https://discord.gg/uzNtAbf)
- [Ultimate Primal Raiding](https://discord.gg/3R5StBa)
- [Primal Blue Mage Academy](https://discord.gg/blueacademy)
- [The Help Lines](https://discord.gg/Nnkq9UW)
- [Primal Eureka/Bozja Enjoyers](https://discord.gg/PEBE)
- [Primal Optimization Group](https://primaloptigroup.carrd.co/)

### General
- [Achievement Lobby](https://discord.com/invite/ffxiv-achievement)
- [Revival Wings](https://discord.gg/WYMpfYp)

## Community Content

- [ArtPartyWay](https://twitter.com/artpartiesffxiv): Twitter Account that retweets Art Parties
- [Crab Fit](https://crab.fit/): "Crab Fit helps you fit your event around everyone's schedules. Simply create an event above and send the link to everyone that is participating. Results update live and you will be able to see a heat-map of when everyone is free."

## Other Lists

- [Karashiiro's XIV Resources](https://karashiiro.github.io/xiv-resources/)

<badge type="tip" text="tip" vertical="mid"/> <badge type="warning" text="warning" vertical="mid"/> <badge type="danger" text="danger" vertical="mid"/>

::: tip
this is a tip
:::

::: warning
this is a warning
:::

::: danger
this is a danger
:::

::: details
this is a details
:::

## Macros

### Hunt Macros

**Hunt ON** - Disable effects and store minions and chocobos during busy hunts

```plaintext
/echo Hunt ON
/nameplatedisp other 4
/soundeffectsother 0
/voice off
/bfx self off
/bfx party off
/bfx others off
/targetline off
/aggroline off
/ambientsounds off
/minion
/companionaction "Withdraw"
```

**Hunt OFF** - Turn everything back on. See below for macro settings.
```plaintext
/echo Hunt OFF
/nameplatedisp other 3
/soundeffectsother 50
/voice on
/bfx self all
/bfx party simple
/targetline on
/aggroline on
/ambientsounds on
/ac "Minion Roulette"
```

- `/nameplatedisp <category> <setting>`: change display of nameplates
  - Categories: all, self, party, other, friend, feast (crystalline conflict)
  - Settings: 1 (Always), 2 (During Battle), 3 (When targeted), 4 (Never)
- `/soundeffectsother <level>`: turn off sound effects of non-party players
- `/voice <on/off>`: toggle voices on and off
- `/bfx self all`: turn all personal battle effects on
