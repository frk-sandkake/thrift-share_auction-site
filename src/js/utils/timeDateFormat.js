function timeFormat(input) {
    return new Date(input).toLocaleDateString('en-us', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
    });
}

export default timeFormat;
