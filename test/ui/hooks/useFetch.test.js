//* libraries
import { renderHook, waitFor } from "@testing-library/react";
//* hooks
import { useFetch } from "../../../src/ui/hooks/useFetch";
//* utils
import { productsUrl as url } from "../../../src/ui/utils/urls";

describe("Tests in useFetch hook", () => {

    test('should return initial state', () => {
        const { result } = renderHook(() => useFetch(url));
        const { data, isLoading, hasError } = result.current;

        expect(data.length).toBe(0);
        expect(isLoading).toBeTruthy();
        expect(hasError).toBeFalsy();
    });

    test('should return an array of products an isLoading as false', async () => {
        const { result } = renderHook(() => useFetch(url));

        await waitFor(
            () => expect(result.current.data.length).toBeGreaterThan(0)
        );

        const { data, isLoading, hasError } = result.current;
        expect(data.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        expect(hasError).toBeFalsy();
    });
});
