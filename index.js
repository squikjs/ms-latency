let now = undefined;

const init = () => {
    now = Date.now();
};

module.exports.start = () => {
    init();
};

module.exports.end = () => {
    return Date.now() - now;
};