export const formatInput = (e: React.ChangeEvent<HTMLInputElement>, formatter: (value: string) => string) => {
    e.target.value = formatter(e.target.value)
}

export const formatUppercase = (value: string) => {
    return value.toLowerCase().split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}