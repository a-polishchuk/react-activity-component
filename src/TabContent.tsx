import { type ReactNode, useEffect, useReducer } from 'react';

type Props = {
    tabKey: string;
    children: ReactNode;
};

export function TabContent({ tabKey, children }: Props) {
    useEffect(() => {
        console.log(`${tabKey}: ✅ effect callback`);

        return () => {
            console.log(`${tabKey}: 🗑️ effect cleanup`);
        };
    }, [tabKey]);

    return (
        <div className="tabContent">
            {children}
            <ClicksCounter />
        </div>
    );
}

function ClicksCounter() {
    const [clicks, increment] = useReducer((val) => val + 1, 0);

    return (
        <div className="clicks" onClick={() => increment()}>
            Clicks: <b>{clicks}</b>
        </div>
    );
}
