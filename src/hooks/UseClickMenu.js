import { useEffect, useRef, useState } from "react";

export const useClickMenu = (initialState) => {
    const ref = useRef(null);
    const [isShow, setIsShow] = useState(initialState);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return { isShow, setIsShow, ref }
};
