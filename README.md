# AI Ethics Quest

An interactive storytelling experience that explores the complex ethical dimensions of artificial intelligence through engaging scenarios and decision-making challenges.

## Overview

AI Ethics Quest is an educational interactive fiction game built using the Twee format and Twine engine. Players take on the role of Sophia, an AI ethicist, and navigate through various ethical dilemmas related to AI development and deployment. The game teaches core principles of AI ethics while providing an engaging narrative experience.

## Project Structure

```
aiethics/
├── AI Ethics Quest 2025.twee    # Main story file (comprehensive version)
├── story.twee                   # Simplified story file (demo version)
├── script.js                    # Custom JavaScript functionality
├── style.css                    # Styling and visual design
├── package.json                 # Node.js dependencies and scripts
├── package-lock.json            # Dependency lock file
├── README.md                    # This documentation file
└── output/                      # Generated output files
    └── images/                  # Story images and assets
```

## File Descriptions

### Core Story Files

#### `AI Ethics Quest 2025.twee` (27KB, 564 lines)
The main interactive story file containing the complete AI Ethics Quest experience. This file includes:

- **Story Metadata**: Title, IFID, format version, and starting passage
- **Interactive Passages**: Multiple story nodes with branching narratives
- **Ethical Scenarios**: Four main challenges covering different AI ethics principles:
  1. **School Bias Challenge**: AI grading system discrimination
  2. **TalentScan Challenge**: Automated hiring system bias
  3. **Smart City Challenge**: Privacy vs. efficiency in urban AI
  4. **Autonomous Transport Challenge**: Ethical framework design
- **Game Mechanics**: Wisdom point system, inventory tracking, and branching outcomes
- **Educational Content**: AI Ethics Codex with core principles explanation
- **Multiple Endings**: Success and failure paths based on player choices

**Key Features:**
- Harlowe 3.3.9 format with advanced scripting
- Variable tracking (`$wisdomPoints`, `$inventory`)
- Complex branching logic with multiple choice scenarios
- Educational content integrated into gameplay
- Professional narrative with character development

#### `story.twee` (2KB, 88 lines)
A simplified demo version of the story for testing and demonstration purposes. Contains:

- **Basic Story Structure**: Introduction, single ethical dilemma, and conclusion
- **Simple Branching**: Three choice paths for the dataset dilemma
- **Educational Elements**: Reflection and learning components
- **Minimal Format**: Basic Twee 3.0 format without advanced features

### Supporting Files

#### `script.js` (777B, 24 lines)
Custom JavaScript file that enhances the interactive experience:

```javascript
// Key Functions:
- passage:afterrender event handler for post-render customization
- story:start event handler for initialization
- customFunction() for custom passage functionality
- trackChoice() for player choice analytics
```

**Features:**
- Event-driven architecture for story interactions
- Console logging for debugging and analytics
- Extensible framework for additional functionality
- Integration with Twine's event system

#### `style.css` (2.4KB, 128 lines)
Comprehensive styling file that provides modern, accessible design:

**Design System:**
- **Dark Mode Support**: CSS custom properties for theming
- **Color Palette**: 
  - Primary background: `#1a1a1a`
  - Secondary background: `#2d2d2d`
  - Text colors: `#ffffff`, `#b3b3b3`
  - Accent colors: `#4a9eff`, `#4caf50`, `#ff9800`, `#f44336`
- **Typography**: Georgia serif for readability
- **Layout**: Responsive design with max-width containers
- **Interactive Elements**: Hover effects and transitions

**Key Components:**
- Status bar styling for game information
- Button and link styling with hover effects
- Form input styling for text interactions
- Reflection section styling for educational content
- Passage content layout and spacing

### Configuration Files

#### `package.json` (592B, 24 lines)
Node.js package configuration file defining:

- **Project Metadata**: Name, version, description
- **Dependencies**: Required packages for development
- **Scripts**: Build and development commands
- **Repository Information**: Source control details

#### `package-lock.json` (85KB, 2400 lines)
Dependency lock file ensuring consistent package versions across environments.

## Game Mechanics

### Wisdom Points System
Players earn or lose wisdom points based on their ethical choices:
- **+15 points**: Excellent ethical decisions
- **+5 points**: Good but suboptimal choices
- **-5 points**: Poor ethical choices
- **+20 points**: Ultimate success in final challenge
- **-20 points**: Failure in final challenge

### Inventory System
Players collect ethical tools and frameworks:
- "Ethical Framework for Autonomous Systems"
- "Key of Ethical AI"
- Additional items based on choices

### Branching Narrative
The story features multiple paths and endings:
- **Success Path**: Complete all challenges successfully
- **Failure Path**: Fail the final ethical debate
- **Multiple Choice Scenarios**: Each challenge offers 3-4 options

## Educational Content

### AI Ethics Principles Covered
1. **Fairness & Inclusiveness**: Bias detection and mitigation
2. **Transparency & Explainability (XAI)**: Understanding AI decisions
3. **Accountability**: Responsibility frameworks
4. **Privacy & Data Minimization**: Data protection strategies
5. **Human Control & Oversight**: Human-in-the-loop systems

### Learning Objectives
- Understand real-world AI ethics challenges
- Practice ethical decision-making in AI contexts
- Learn about bias detection and mitigation
- Explore privacy vs. efficiency trade-offs
- Develop frameworks for ethical AI design

## Technical Requirements

### Development Environment
- **Twine Engine**: For story compilation and testing
- **Node.js**: For package management and build tools
- **Modern Web Browser**: For running the compiled story

### File Formats
- **Twee**: Story format for interactive fiction
- **HTML**: Compiled output for web deployment
- **CSS**: Styling and visual design
- **JavaScript**: Interactive functionality

## Usage Instructions

### For Players
1. Open the compiled HTML file in a web browser
2. Read the story and make ethical choices
3. Track your wisdom points and inventory
4. Complete all challenges to reach the ending
5. Reflect on your choices and their implications

### For Developers
1. Install Node.js dependencies: `npm install`
2. Use Twine to compile `.twee` files to HTML
3. Customize styling in `style.css`
4. Add functionality in `script.js`
5. Test the story in a web browser

## Contributing

### Adding New Scenarios
1. Create new passages in the `.twee` file
2. Add branching logic and choice options
3. Update wisdom point calculations
4. Test the new content thoroughly

### Styling Modifications
1. Edit `style.css` for visual changes
2. Use CSS custom properties for theming
3. Maintain accessibility standards
4. Test across different browsers

### Functionality Enhancements
1. Add new functions to `script.js`
2. Integrate with Twine's event system
3. Maintain backward compatibility
4. Document new features

## License

This project is created as an educational tool for exploring AI ethics. Please ensure proper attribution when using or modifying the content.

## Support

For questions or issues related to the AI Ethics Quest project, please refer to the Twine documentation or create an issue in the project repository. 