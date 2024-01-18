export const insert = () => {
    return {
        type: 'INSERT' as const
    };
};

export const update = () => {
    return {
        type: 'UPDATE' as const
    };
};