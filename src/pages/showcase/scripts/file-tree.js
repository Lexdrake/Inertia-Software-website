// File tree demonstration
function initFileTreeDemo() {
    const demoButtons = document.querySelectorAll('.demo-btn');
    const fileTreeContainer = document.getElementById('fileTree');
    
    function renderFileTree(structure) {
        const html = structure.map(item => {
            const indent = '  '.repeat(item.level);
            const icon = getFileIcon(item.type);
            const className = item.type;
            
            return `<div class="file-item ${className}" style="padding-left: ${item.level * 20}px;">
                <span class="file-icon">${icon}</span>
                <span>${item.name}</span>
            </div>`;
        }).join('');
        
        fileTreeContainer.innerHTML = html;
        
        // Animate items in
        const items = fileTreeContainer.querySelectorAll('.file-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 50);
        });
    }
    
    function getFileIcon(type) {
        const icons = {
            folder: '📁',
            file: '📄',
            component: '⚛️',
            config: '⚙️'
        };
        return icons[type] || '📄';
    }
    
    // Handle demo button clicks
    demoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            demoButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const structure = btn.dataset.architecture;
            
            if (structure === 'timeline') {
                document.getElementById('singleTreeView').style.display = 'none';
                document.getElementById('timelineView').style.display = 'block';
                initTimelineComparison();
            } else {
                document.getElementById('singleTreeView').style.display = 'block';
                document.getElementById('timelineView').style.display = 'none';
                renderFileTree(fileStructures[structure]);
            }
        });
    });
    
    // Initialize with messy structure
    renderFileTree(fileStructures.messy);
}

