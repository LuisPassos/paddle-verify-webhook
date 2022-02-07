export declare function validateWebhook(
    jsonObj: Readonly<Record<string, { toString(): string } | undefined | null>>,
    pubKey: string,
): boolean;