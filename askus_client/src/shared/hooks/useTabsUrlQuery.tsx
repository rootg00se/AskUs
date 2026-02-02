import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useTabsUrlQuery = (tabName: string, defaultValue: string) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activateTab, setActivateTab] = useState(searchParams.get(tabName) || defaultValue);

    const handleTabChange = (value: string) => {
        setActivateTab(value);

        setSearchParams((prevParams) => {
            prevParams.set(tabName, value);
            return prevParams;
        });
    };

    useEffect(() => {
        setActivateTab(searchParams.get(tabName) || defaultValue);
    }, [searchParams]);

    return {
        activateTab,
        handleTabChange
    }
};
