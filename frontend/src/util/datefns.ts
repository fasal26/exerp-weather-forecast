// Convert ISO time to human-readable format
export const formatTime = (isoString: Date | undefined) => {
    if(!isoString) return
    
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
}