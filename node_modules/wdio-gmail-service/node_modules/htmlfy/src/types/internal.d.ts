export interface DefaultConfig {
	ignore: string[];
	ignore_with: string;
	strict: boolean;
	tab_size: number;
	trim: string[];
}

type RecursiveRequired<T> = {
	/**
	 * Recursive implementation of TypeScript's Required utility type.
	 * Will recursively continue until it reaches a primitive or Function
	 */
	[K in keyof T]-?: Extract<T[K], Function> extends never /* If it does not have a Function type, */
		? RecursiveRequired<T[K]> /* recursively continue through. */
		: T[K] /* Use the exact type for everything else. */
}
