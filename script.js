// Custom JavaScript for the Twee story

// Function to handle passage transitions
window.addEventListener('passage:afterrender', function(event) {
    // Add any custom behavior after a passage renders
    console.log('Passage rendered:', event.passage.title);
});

// Function to handle story initialization
window.addEventListener('story:start', function() {
    // Add any initialization code here
    console.log('Story started');
});

// Example of a custom function that can be used in passages
window.customFunction = function() {
    return 'This is a custom function!';
};

// Example of a function to track player choices
window.trackChoice = function(choice) {
    console.log('Player chose:', choice);
    // Add your tracking logic here
}; 