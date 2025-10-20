const summaries = document.querySelectorAll('.summary');

summaries.forEach(summary => {
    const actionIcon = summary.querySelector('.action-icon');

    summary.addEventListener('click', () => {
        if (summary.parentElement.open) {
            actionIcon.src = summary.getAttribute('data-icon-open');
        } else {
            actionIcon.src = summary.getAttribute('data-icon-closed');
        }
    });
});