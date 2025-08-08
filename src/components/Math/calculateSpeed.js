const calculateSpeed = (text) => {
    return text.length > 0 ? (text.length * ANIMATION_BASE_SPEED_MS) / text.length : 0;
};