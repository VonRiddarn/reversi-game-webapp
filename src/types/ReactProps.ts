/*
Note:
	I know: React.PropsWithChildren<{}> exists.
	It's too Verbose. 
*/

/*
Semantics:
	With = Can have
	Has = Must have
*/

export type HasChildren = {
	children: React.ReactNode;
};

export type WithChildren = {
	children?: React.ReactNode;
};

export type WithClassName = {
	className?: string;
};
