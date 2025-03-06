# The Gambit Protocol - Game Structure

## Core Game Loop

### 1. Game Initialization
- Minimum players: 4
- Maximum players: 10
- Entry fee: Set amount in native token
- Total pot: Sum of all entry fees - 4% fee for txn fees and house edge

### 2. Round Structure
Each round consists of:
1. **Voting Phase** (15s)
   - All players vote
   - Options: GAMBLE/ELIMINATE/SPLIT/BANK
   - Votes are hidden until phase ends
   
2. **Action Phase** (varies by vote outcome)
   - Majority vote determines action
   - Ties default to most conservative option
   - Action executes automatically via smart contract

3. **Results Phase** (15s)
   - Display outcome
   - Update pot and player balances
   - Show next round timer

### 3. Action Outcomes

#### GAMBLE
- 50% of current pot at risk
- Smart contract generates random outcome
- Win: 1.8x multiplier on gambled amount returned to pot
- Loss: Gambled amount is burned

#### ELIMINATE
- All players vote for elimination target
- Player with most votes is removed
- Eliminated player loses entry stake
- Pot remains unchanged

#### SPLIT
- Current pot divided equally among remaining players
- Game ends immediately
- All players receive funds automatically

#### BANK
- 25% of current pot is secured
- Secured amount divided among active players
- Remaining 75% continues to next round

## Game End Conditions
1. All players agree to SPLIT
2. Only one player remains
3. Pot is fully depleted through GAMBLE/BANK actions

## Player Features
- In-game chat
- Vote history tracking
- Personal statistics
- Reputation system
- Alliance formation tools

## Economic Mechanics
- Protocol fee: Small % of initial pot
- Minimum stake requirement
- Anti-collusion measures
- Dynamic pot multipliers

## Technical Requirements
- Real-time voting system
- Secure random number generation
- Smart contract automation
- Anti-cheat mechanisms 