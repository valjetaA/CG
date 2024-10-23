export function Assert(value: any, message: string): void {
    if (value === undefined || value === null) {
        throw new Error(message)
    }
}