import { ReactElement, ReactPortal } from 'react';

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
export type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
