import {FC, memo, useLayoutEffect, useRef} from 'react';
import {createCat} from '@veksa/cat.ts';

const catList: VoidFunction[] = [];

interface IMeowListProps {
    count?: number;
}

const MeowListComponent: FC<IMeowListProps> = props => {
    const {count = 1} = props;

    const prevCount = useRef(0);

    useLayoutEffect(() => {
        if (count > prevCount.current) {
            const cat = createCat();

            catList.push(cat);

            prevCount.current++;
        } else if (count < prevCount.current) {
            const lastCat = catList.pop();

            lastCat?.();

            if (prevCount.current > 0) {
                prevCount.current--;
            }
        }
    }, [count]);

    return null;
};

export const MeowList =
    memo(MeowListComponent);
