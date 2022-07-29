//* libraries
import { renderHook } from "@testing-library/react";
//* hooks
import { usePost } from "../../../src/ui/hooks";


describe("Tests in usePost hook", () => {

    test('should return postData function', () => {
        const { result } = renderHook(() => usePost());
        const { postData } = result.current;

        expect(postData).toEqual(expect.any(Function));
    });
});
