/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import Torch from 'react-native-torch';

export function useToggleSlow(setToggle: any, toggle: any, counter: number) {
    useEffect(() => {
        if (counter > 0) {
            const speed = 1000 / (counter + counter);
            const interval = setInterval(() => {
                setToggle(!toggle);
                Torch.switchState(toggle);
            }, speed);
            return () => clearInterval(interval);
        }
    }, [counter, setToggle, toggle]);
}
