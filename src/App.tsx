import './styles.css';
import { useState } from 'react';
import type { TabItem } from './types';
import { TabContent } from './TanContent';
import { TabsHeader } from './TabsHeader';
import { RemountTabs } from './RemountTabs';

export function App() {
    const [activeTabKey, setActiveTabKey] = useState(ITEMS[0].tabKey);

    return (
        <>
            <TabsHeader
                items={ITEMS}
                activeTabKey={activeTabKey}
                onChange={setActiveTabKey}
            />
            <RemountTabs activeTabKey={activeTabKey} items={ITEMS} />
        </>
    );
}

const ITEMS: TabItem[] = [
    {
        tabKey: 'first',
        title: 'First',
        content: (
            <TabContent key="first" tabKey="first">
                First tab content
            </TabContent>
        ),
    },
    {
        tabKey: 'second',
        title: 'Second',
        content: (
            <TabContent key="second" tabKey="second">
                Second tab content
            </TabContent>
        ),
    },
];
