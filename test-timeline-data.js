// Test script to verify timeline data structure
const fs = require('fs');

// Read the timeline data file
const timelineDataPath = './src/pages/showcase/scripts/timeline-data.js';
const content = fs.readFileSync(timelineDataPath, 'utf8');

// Extract just the data by removing the const declaration and semicolon
const dataStart = content.indexOf('{');
const dataEnd = content.lastIndexOf('};');
const dataContent = content.substring(dataStart, dataEnd + 1);

// Parse the data
let timelineData;
try {
    eval('timelineData = ' + dataContent);
    
    console.log('=== TIMELINE DATA ANALYSIS ===');
    console.log('Messy timeline stages:', timelineData.messy.length);
    console.log('Organized timeline stages:', timelineData.organized.length);
    
    console.log('\n=== MESSY DATA COUNTS ===');
    timelineData.messy.forEach((stage, index) => {
        const totalFiles = stage.length;
        const folders = stage.filter(item => item.type === 'folder').length;
        const actualFiles = totalFiles - folders;
        const duplicates = stage.filter(item => item.duplicate).length;
        const problematic = stage.filter(item => item.problematic).length;
        const maxDepth = Math.max(...stage.map(item => item.level));
        
        console.log(`Stage ${index}: ${actualFiles} files (${duplicates} duplicates, ${problematic} problematic, depth ${maxDepth})`);
    });
    
    console.log('\n=== ORGANIZED DATA COUNTS ===');
    timelineData.organized.forEach((stage, index) => {
        const totalFiles = stage.length;
        const folders = stage.filter(item => item.type === 'folder').length;
        const actualFiles = totalFiles - folders;
        const duplicates = stage.filter(item => item.duplicate).length;
        const problematic = stage.filter(item => item.problematic).length;
        const maxDepth = Math.max(...stage.map(item => item.level));
        
        console.log(`Stage ${index}: ${actualFiles} files (${duplicates} duplicates, ${problematic} problematic, depth ${maxDepth})`);
    });
} catch (error) {
    console.error('Error parsing timeline data:', error.message);
    console.log('Data corruption detected - file needs to be fixed');
}