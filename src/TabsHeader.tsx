import { type TabItem } from './types';

type Props = {
    items: TabItem[];
    activeTabKey: string;
    onChange: (newTabKey: string) => void;
};

export function TabsHeader({ items, activeTabKey, onChange }: Props) {
    return (
        <div className="tabs">
            {items.map(({ tabKey, title }) => (
                <div
                    key={tabKey}
                    className={`tabTitle ${
                        tabKey === activeTabKey ? 'activeTabTitle' : ''
                    }`}
                    onClick={() => onChange(tabKey)}
                >
                    {title}
                </div>
            ))}
        </div>
    );
}
