let hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    
    let toolTipActive = document.querySelectorAll('.tooltip_active')[0];

    if (toolTipActive) {
        toolTipActive.classList.toggle('tooltip_active');

        if (toolTipActive.textContent === item.title) {
        return false;
        }
    }

    
    let toolTip = document.createElement('div');

    toolTip.classList.add('tooltip', 'tooltip_active');
    toolTip.textContent = item.getAttribute('title');

    let position = item.getBoundingClientRect();

    toolTip.style.top = position.bottom + 'px';
    toolTip.style.left = position.left + 'px';
    // toolTip.style.right = position.right + 'px';
    // toolTip.style.bottom = position.bottom + 'px';

    document.body.append(toolTip); 

  })
)