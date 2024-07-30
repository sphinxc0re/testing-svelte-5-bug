export const complexComputing = (data) => {
    const cloned = structuredClone(data);

    Object.entries(cloned).forEach(([key, value]) => {
        cloned[key] = { value };
    })

    return cloned;
}
