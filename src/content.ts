const handleKeyDown = (event: KeyboardEvent) => {
    if (!event.target) {
        return;
    }

    const el = event.target as HTMLElement;

    if (el.id === 'prompt-textarea' && !(event.ctrlKey || event.metaKey) && event.key == 'Enter') {
        event.stopPropagation();
    }
};

document.addEventListener('keydown', handleKeyDown, { capture: true });
