import { RefObject, useEffect } from "react";

export function useSecureField(
    ref: RefObject<HTMLInputElement>,
    shouldClear: boolean = true
) {
    useEffect(() => {
        if (!shouldClear) return;

        return () => {
            const el = ref.current;
            if (!el) return;

            el.value = "";
            el.blur();
        };
    }, [ref, shouldClear]);
}