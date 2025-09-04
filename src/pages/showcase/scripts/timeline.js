// Timeline comparison functionality
function initTimelineComparison() {
    const timelineSlider = document.getElementById('timelineSlider');
    
    if (!timelineSlider) return;
    
    timelineSlider.addEventListener('input', (e) => {
        const timelineIndex = parseInt(e.target.value);
        updateTimelineView(timelineIndex);
    });
    
    // Initialize with first timeline state
    updateTimelineView(0);
}

function updateTimelineView(timelineIndex) {
    const messyData = timelineData.messy[timelineIndex];
    const organizedData = timelineData.organized[timelineIndex];
    
    // Render both trees
    renderTimelineTree('messyTimelineTree', messyData, 'messy');
    renderTimelineTree('organizedTimelineTree', organizedData, 'organized');
    
    // Update metrics
    updateMetrics(messyData, organizedData);
}

function renderTimelineTree(containerId, structure, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const html = structure.map((item, index) => {
        const indent = '  '.repeat(item.level);
        const icon = getFileIcon(item.type);
        const className = item.type + (item.duplicate ? ' duplicate-file' : ' new-file');
        
        return `<div class="file-item ${className}" style="padding-left: ${item.level * 20}px;">
            <span class="file-icon">${icon}</span>
            <span>${item.name}</span>
        </div>`;
    }).join('');
    
    container.innerHTML = html;
    
    // Animate items in with staggered timing
    const items = container.querySelectorAll('.file-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 30);
    });
}

function updateMetrics(messyData, organizedData) {
    // Calculate metrics for messy structure
    const messyFileCount = messyData.length - messyData.filter(item => item.type === 'folder').length;
    const messyMaxDepth = Math.max(...messyData.map(item => item.level));
    const messyDuplicates = messyData.filter(item => item.duplicate).length;
    
    // Calculate metrics for organized structure
    const organizedFileCount = organizedData.length - organizedData.filter(item => item.type === 'folder').length;
    const organizedMaxDepth = Math.max(...organizedData.map(item => item.level));
    const organizedDuplicates = organizedData.filter(item => item.duplicate).length;
    
    // Update UI
    document.getElementById('messyFileCount').textContent = messyFileCount;
    document.getElementById('messyDepth').textContent = messyMaxDepth;
    document.getElementById('messyDuplicates').textContent = messyDuplicates;
    
    document.getElementById('organizedFileCount').textContent = organizedFileCount;
    document.getElementById('organizedDepth').textContent = organizedMaxDepth;
    document.getElementById('organizedDuplicates').textContent = organizedDuplicates;
    
    // Highlight duplicate metrics if they exist
    const messyDuplicateMetric = document.querySelector('#messyDuplicates').closest('.metric');
    const organizedDuplicateMetric = document.querySelector('#organizedDuplicates').closest('.metric');
    
    if (messyDuplicates > 0) {
        messyDuplicateMetric.classList.add('has-duplicates');
    } else {
        messyDuplicateMetric.classList.remove('has-duplicates');
    }
    
    if (organizedDuplicates > 0) {
        organizedDuplicateMetric.classList.add('has-duplicates');
    } else {
        organizedDuplicateMetric.classList.remove('has-duplicates');
    }
    
    // Animate metric updates
    animateMetricUpdate('messyFileCount', messyFileCount);
    animateMetricUpdate('organizedFileCount', organizedFileCount);
}

function animateMetricUpdate(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.style.transform = 'scale(1.2)';
    element.style.color = '#4caf50';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.color = '';
    }, 300);
}

