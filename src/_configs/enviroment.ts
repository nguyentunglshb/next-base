export const isClient = typeof window !== "undefined";

export const isProduction = false;

// env

export const API_URL = process.env.API_URL as string;

export const TIME_OUT = process.env.TIME_OUT as unknown as number;
